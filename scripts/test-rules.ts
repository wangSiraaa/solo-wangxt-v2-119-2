/**
 * 本次检查规则（可调面积比率区间 + 最大角度偏差）单元测试。
 * 运行：
 *   npx esbuild scripts/test-rules.ts --bundle --format=esm --platform=node \
 *     --outfile=/tmp/rules.mjs && node /tmp/rules.mjs
 */
import { parseObj } from '../src/core/parser';
import { analyzeMesh } from '../src/core/metrics';
import { exportObj } from '../src/core/exporter';
import { SAMPLES } from '../src/core/samples';
import {
  DEFAULT_RULES,
  RULE_ANGLE,
  RULE_HIGH,
  RULE_LOW,
  buildCheckSummary,
  evaluateRules,
  sanitizeRules,
} from '../src/core/rules';

let failures = 0;
const assert = (cond: unknown, msg: string) => {
  if (!cond) { failures++; console.log('  FAIL:', msg); }
};
const approx = (a: number | null, b: number, eps = 0.02) =>
  a !== null && Math.abs(a - b) <= eps;

const load = (id: string) => {
  const s = SAMPLES.find((x) => x.id === id)!;
  const mesh = parseObj(s.obj, id + '.obj');
  return { mesh, stats: analyzeMesh(mesh) };
};

/* ---------- 1) 梯度样例：收紧增多 / 放宽减少，指标数值不变 ---------- */
{
  const { mesh, stats } = load('gradient');
  assert(stats.islands.length === 6, 'gradient: 6 个互不相连的岛');
  assert(stats.metrics.every((m) => !m.flipped), 'gradient: 无翻转');
  assert([...stats.overlap].every((v) => !v), 'gradient: 无岛间重叠');
  assert(stats.metrics.every((m) => !m.degenerate3d && !m.degenerateUv), 'gradient: 无退化');
  assert(approx(stats.globalScale, 1, 1e-9), 'gradient: 中位归一 globalScale=1');

  // 各三角形的指标数值（与阈值无关，先固定下来）
  const ratios = stats.metrics.map((m) => m.areaRatio);
  const angles = stats.metrics.map((m) => m.angleDistortion);
  assert(approx(ratios[0], 1.0), 'gradient A 比率 1');
  assert(approx(ratios[2], 2.5), 'gradient C 比率 2.5');
  assert(approx(ratios[4], 0.4), 'gradient E 比率 0.4');
  assert(approx(ratios[5], 1.6667), 'gradient F 比率 1.667');
  assert(approx(angles[0], 26.57), 'gradient A 角度 26.57°');
  assert(approx(angles[3], 11.31), 'gradient D 角度 11.31°');
  console.log('  gradient metrics:',
    ratios.map((x) => x?.toFixed(2)).join(', '), '/',
    angles.map((x) => x?.toFixed(1)).join(', '));

  const loose = evaluateRules(mesh, stats, { minRatio: 0.01, maxRatio: 100, maxAngle: 180 });
  assert(loose.problemFaces.length === 0, 'gradient: 极宽规则无问题面');

  const def = evaluateRules(mesh, stats, DEFAULT_RULES);
  // 默认：A/B/C/E/F 角度超 15°（D 11.3° 过）；C 偏密、E 偏稀
  assert(def.areaFaceIds.length === 2, `gradient 默认: 2 个密度面（C/E），实际 ${def.areaFaceIds.length}`);
  assert(def.angleFaceIds.length === 5, `gradient 默认: 5 个角度面，实际 ${def.angleFaceIds.length}`);
  assert(def.problemFaces.length === 5, `gradient 默认: 5 个问题面，实际 ${def.problemFaces.length}`);
  assert(!def.problemFaces.some((f) => f.faceId === 3), 'gradient 默认: D(11.31°) 不超 15°');
  assert(def.triMask[2] & RULE_HIGH, 'gradient C 标记偏密');
  assert(def.triMask[4] & RULE_LOW, 'gradient E 标记偏稀');
  assert(def.triMask[0] === RULE_ANGLE, 'gradient A 仅角度位');
  assert(def.areaTriCount === 2 && def.angleTriCount === 5, 'gradient 默认: 三角形计数 2/5');

  const tight = evaluateRules(mesh, stats, { minRatio: 0.9, maxRatio: 1.2, maxAngle: 10 });
  assert(tight.areaFaceIds.length === 3, `gradient 收紧: 3 个密度面（C/F/E），实际 ${tight.areaFaceIds.length}`);
  assert(tight.angleFaceIds.length === 6, `gradient 收紧: 6 个角度面，实际 ${tight.angleFaceIds.length}`);
  assert(tight.problemFaces.length === 6, `gradient 收紧: 6 个问题面，实际 ${tight.problemFaces.length}`);
  assert(tight.triMask[5] & RULE_HIGH, 'gradient 收紧: F(1.667) 新增偏密');
  assert(tight.triMask[3] & RULE_ANGLE, 'gradient 收紧: D(11.31°) 新增角度');

  // 阈值变化后，指标数值必须原封不动
  stats.metrics.forEach((m, i) => {
    assert(m.areaRatio === ratios[i] && m.angleDistortion === angles[i],
      `gradient: 阈值切换不应改变 tri${i} 的指标数值`);
  });
  // 放宽回默认：问题减少
  const back = evaluateRules(mesh, stats, DEFAULT_RULES);
  assert(back.problemFaces.length === def.problemFaces.length, 'gradient: 放宽回默认问题数恢复');
  assert(back.problemFaces.length < tight.problemFaces.length, 'gradient: 放宽后问题数减少');
}

/* ---------- 2) 退化面绝不被算成普通密度/角度超限 ---------- */
{
  const { mesh, stats } = load('degenerate');
  for (const rules of [
    { minRatio: 0.9, maxRatio: 1.1, maxAngle: 1 },
    { minRatio: 1, maxRatio: 1, maxAngle: 0 },
  ]) {
    const e = evaluateRules(mesh, stats, rules);
    assert(!e.problemFaces.some((f) => f.faceId === 1), 'degenerate: 退化面(tri1/face1) 永不是规则问题面');
    assert(e.triMask[1] === 0, 'degenerate: 退化三角 mask 必须为 0');
    // 退化面的极值里不含 null 混入数值
    const f1 = e.faces.find((f) => f.faceId === 1)!;
    assert(f1.areaMin === null && f1.areaMax === null && f1.angleMax === null,
      'degenerate: 纯退化面的面级比率/角度极值为 null');
  }
  // 拉伸面 C：比率 7.07、角度 43.9°，默认规则必报密度+角度
  const def = evaluateRules(mesh, stats, DEFAULT_RULES);
  assert(def.areaFaceIds.includes(2) && def.angleFaceIds.includes(2),
    'degenerate: 强拉伸 C 同时报密度/角度超限');
  assert(def.triMask[2] & RULE_HIGH && def.triMask[2] & RULE_ANGLE, 'degenerate: C 标记 偏密|角度');
}

/* ---------- 3) 边界取等号不超限（含边界语义） ---------- */
{
  const { mesh, stats } = load('gradient');
  // C 比率恰为 2.5：上界取 2.5 不超限，取 2.4999 超限
  const eq = evaluateRules(mesh, stats, { minRatio: 0.4, maxRatio: 2.5, maxAngle: 45 });
  assert(!(eq.triMask[2] & RULE_HIGH), '边界: C 比率等于上界 2.5 不报');
  assert(!(eq.triMask[4] & RULE_LOW), '边界: E 比率等于下界 0.4 不报');
  assert(eq.triMask[2] === 0 && eq.triMask[4] === 0, '边界: C/E 在 45°/贴边时彻底不报');
  const over = evaluateRules(mesh, stats, { minRatio: 0.41, maxRatio: 2.49, maxAngle: 44.9 });
  assert((over.triMask[2] & RULE_HIGH) !== 0, '边界: C 比率 2.5 > 上界 2.49 报偏密');
  assert((over.triMask[4] & RULE_LOW) !== 0, '边界: E 比率 0.4 < 下界 0.41 报偏稀');
  assert((over.triMask[2] & RULE_ANGLE) !== 0, '边界: C 角度 45 > 44.9 报角度');
}

/* ---------- 4) sanitizeRules：非有限回退默认、不交叉、夹取 ---------- */
{
  const d = DEFAULT_RULES;
  assert(JSON.stringify(sanitizeRules(null)) === JSON.stringify(d), 'sanitize: null => 默认');
  assert(
    sanitizeRules({ minRatio: NaN, maxRatio: undefined as unknown as number, maxAngle: -5 })
      .maxAngle === 0,
    'sanitize: NaN/缺省回退，负角度夹到 0',
  );
  const crossed = sanitizeRules({ minRatio: 2, maxRatio: 0.5, maxAngle: 15 });
  assert(crossed.minRatio <= crossed.maxRatio, 'sanitize: 交叉区间被收敛');
  assert(sanitizeRules({ minRatio: 0, maxRatio: 9e9, maxAngle: 999 }).maxAngle === 180,
    'sanitize: 角度夹到 180');
}

/* ---------- 5) 立方体均匀映射：任何收紧都不报；n 边形按面聚合 ---------- */
{
  const { mesh, stats } = load('seams');
  const strict = evaluateRules(mesh, stats, { minRatio: 1, maxRatio: 1, maxAngle: 0 });
  assert(strict.problemFaces.length === 0, 'seams: 均匀立方体面在最严阈值下仍全部合规');
  assert(strict.areaTriCount === 0 && strict.angleTriCount === 0, 'seams: 三角形计数为 0');
  // 该样例每个 f 行就是一个三角形：12 面 / 12 三角
  const e0 = evaluateRules(mesh, stats, DEFAULT_RULES);
  assert(e0.faces.length === 12, 'seams: 面级结果数 = 12 原始面');
  assert(e0.faces.every((f) => f.triIds.length === 1), 'seams: 每面 1 个三角');

  // n 边形扇形三角化后必须仍按【原始面】聚合：构造一个四边面，两个扇形三角
  // 一个合规、一个越界 => 该面恰好出现一次且被报超限。
  const quad = [
    'v 0 0 0', 'v 1 0 0', 'v 1 1 0', 'v 0 1 0',
    'vt 0 0', 'vt 1 0', 'vt 1 1', 'vt 0 1',
    'f 1/1 2/2 3/3 4/4',
  ].join('\n') + '\n';
  const qm = parseObj(quad, 'quad.obj');
  const qs = analyzeMesh(qm);
  assert(qm.faces.length === 1 && qm.triangles.length === 2, 'quad: 1 原始面扇形成 2 三角');
  // 该面为矩形/方形映射 => 合规基线
  const qok = evaluateRules(qm, qs, { minRatio: 1, maxRatio: 1, maxAngle: 0 });
  assert(qok.problemFaces.length === 0, 'quad: 均匀四边面最严阈值下合规');
  // 面级结果只有一个 faceId，且 triIds 聚合了两个扇形三角
  assert(qok.faces.length === 1 && qok.faces[0].triIds.length === 2,
    'quad: n 边形两个扇形三角聚合到同一面');
}

/* ---------- 6) JSON 摘要：结构、计数、问题面指标与 evaluateRules 同源 ---------- */
{
  const { mesh, stats } = load('gradient');
  const e = evaluateRules(mesh, stats, { minRatio: 0.9, maxRatio: 1.2, maxAngle: 10 });
  const doc = buildCheckSummary(mesh, stats, e, new Date('2026-10-04T00:00:00.000Z'));
  assert(doc.type === 'uv-rule-check' && doc.version === 1, 'json: 类型/版本');
  assert(doc.generatedAt === '2026-10-04T00:00:00.000Z', 'json: 时间戳采用 ISO');
  assert(doc.model.fileName === 'gradient.obj', 'json: 模型名');
  assert(doc.model.faceCount === 6 && doc.model.triangleCount === 6, 'json: 面/三角数');
  assert(doc.rules.minRatio === 0.9 && doc.rules.maxRatio === 1.2 && doc.rules.maxAngle === 10,
    'json: 规则与当前界面一致');
  assert(doc.counts.problemFaces === 6, 'json: 问题面计数');
  assert(doc.counts.densityFaces === 3 && doc.counts.angleFaces === 6, 'json: 密度/角度面计数');
  assert(doc.counts.densityTriangles === 3 && doc.counts.angleTriangles === 6, 'json: 三角计数');
  assert(doc.counts.flippedTriangles === 0 && doc.counts.overlapTriangles === 0,
    'json: 翻转/重叠为 0');
  // 问题面字段齐全且与评估结果一致
  assert(doc.problemFaces.length === e.problemFaces.length, 'json: 问题面明细数量一致');
  for (const p of doc.problemFaces) {
    const f = e.problemFaces.find((x) => x.faceId === p.faceId)!;
    assert(JSON.stringify(p.issues) === JSON.stringify(f.issues), `json: face${p.faceId} issues 一致`);
    assert(p.areaRatioMin !== null && p.areaRatioMax !== null && p.angleDistortionMax !== null,
      `json: face${p.faceId} 非退化面指标非 null`);
    assert(approx(p.areaRatioMin, f.areaMin!, 1e-6) && approx(p.areaRatioMax, f.areaMax!, 1e-6)
      && approx(p.angleDistortionMax, f.angleMax!, 1e-6), `json: face${p.faceId} 指标数值一致`);
    assert(p.triIds.length === 1, `json: face${p.faceId} 三角归属`);
  }
  // 可被 JSON.parse 读回
  const reparsed = JSON.parse(JSON.stringify(doc));
  assert(reparsed.problemFaces[0].faceId === doc.problemFaces[0].faceId, 'json: 序列化往返');

  // 退化样例：退化面不出现在 problemFaces，但单独进 degenerateFaces
  const d = load('degenerate');
  const ed = evaluateRules(d.mesh, d.stats, DEFAULT_RULES);
  const dd = buildCheckSummary(d.mesh, d.stats, ed);
  assert(!dd.problemFaces.some((p) => p.faceId === 1), 'json: 退化面不进问题面明细');
  assert(dd.degenerateFaces.includes(1), 'json: 退化面进 degenerateFaces');
  assert(dd.counts.degenerateTriangles3d >= 1, 'json: 退化三角计数');
  assert(dd.flippedFaces.length === 0, 'json: 退化样例无翻转面');
  assert(dd.overlapFaces.includes(0) && dd.overlapFaces.includes(3), 'json: A/D 重叠面');
}

/* ---------- 7) 规则不触碰 UV；导出 -> 重新载入后规则仍可正常检查 ---------- */
{
  const { mesh, stats } = load('degenerate');
  const uvsBefore = Float64Array.from(mesh.uvs);
  for (const cfg of [
    { minRatio: 1, maxRatio: 1, maxAngle: 0 },
    { minRatio: 0.01, maxRatio: 100, maxAngle: 180 },
    DEFAULT_RULES,
  ]) {
    evaluateRules(mesh, stats, cfg);
  }
  let drift = 0;
  for (let i = 0; i < mesh.uvs.length; i++) if (mesh.uvs[i] !== uvsBefore[i]) drift++;
  assert(drift === 0, 'UV 不被阈值修改');

  const out = exportObj(mesh);
  const re = parseObj(out, 're.obj');
  const rs = analyzeMesh(re);
  const e1 = evaluateRules(mesh, stats, DEFAULT_RULES);
  const e2 = evaluateRules(re, rs, DEFAULT_RULES);
  assert(e2.problemFaces.length === e1.problemFaces.length, '重载: 问题面数一致');
  assert(e2.areaFaceIds.length === e1.areaFaceIds.length, '重载: 密度面数一致');
  e2.problemFaces.forEach((f) => {
    const g = e1.problemFaces.find((x) => x.faceId === f.faceId)!;
    assert(g !== undefined, `重载: face${f.faceId} 仍被报告`);
    assert(approx(f.areaMax, g.areaMax!, 1e-4), `重载: face${f.faceId} 比率指标一致`);
  });
}

/* ---------- 8) 翻转与规则判定相互独立（翻转面仍按指标正常参与判定） ---------- */
{
  const { mesh, stats } = load('mirrored');
  const e = evaluateRules(mesh, stats, { minRatio: 0.5, maxRatio: 2, maxAngle: 15 });
  // 翻转面比率 1（不密度超限），但角度 45° 超 15° —— 翻转算法不影响规则指标
  assert(!e.areaFaceIds.includes(1), 'mirrored: 翻转面比率 1，不报密度');
  assert(e.angleFaceIds.includes(1), 'mirrored: 翻转面角度 45° 仍正常参与规则判定');
  const loose = evaluateRules(mesh, stats, { minRatio: 0.01, maxRatio: 100, maxAngle: 180 });
  assert(loose.problemFaces.length === 0, 'mirrored: 放宽后规则问题面为 0（翻转仍由独立算法报告）');
  assert(stats.metrics[1].flipped, 'mirrored: 翻转结论不受阈值影响');
}

console.log(failures === 0 ? '\nALL RULE TESTS PASSED' : `\n${failures} FAILURE(S)`);
process.exit(failures === 0 ? 0 : 1);
