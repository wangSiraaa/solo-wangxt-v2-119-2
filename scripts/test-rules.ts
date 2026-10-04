import { parseObj } from '../src/core/parser';
import { analyzeMesh } from '../src/core/metrics';
import { inspectMesh, sanitizeRules, DEFAULT_RULES, buildSummaryJson } from '../src/core/inspection';
import { SAMPLES } from '../src/core/samples';

let failures = 0;
const assert = (cond: boolean, msg: string) => {
  if (!cond) { failures++; console.log('  FAIL:', msg); }
};

// 退化混合样例：A 正常、B 退化、C 强拉伸、D 与 A 重叠
const def = SAMPLES.find((s) => s.id === 'degenerate')!;
const mesh = parseObj(def.obj, def.id + '.obj');
const stats = analyzeMesh(mesh);

// 记录阈值无关的原始指标快照
const snapshot = stats.metrics.map((m) => ({
  areaRatio: m.areaRatio,
  angleDistortion: m.angleDistortion,
  deg3: m.degenerate3d,
  degUv: m.degenerateUv,
  flipped: m.flipped,
}));

const loose = inspectMesh(mesh, stats, { minRatio: 0.01, maxRatio: 100, maxAngle: 179 });
const normal = inspectMesh(mesh, stats, DEFAULT_RULES);
const tight = inspectMesh(mesh, stats, { minRatio: 0.9, maxRatio: 1.1, maxAngle: 2 });

console.log('degenerate loose counts:', loose.counts);
console.log('degenerate normal counts:', normal.counts);
console.log('degenerate tight counts:', tight.counts);

// 1) 收紧 => 密度/角度问题面不减少（该样例仅 C 一面畸变，故持平）
assert(tight.counts.density >= normal.counts.density, '收紧阈值后密度问题面不减少');
assert(tight.counts.angle >= normal.counts.angle, '收紧阈值后角度问题面不减少');
assert(normal.counts.density >= loose.counts.density, '默认比放宽有更多（或相等）密度问题面');

// 2) 放宽 => 问题数减少（翻转/重叠/退化不受阈值影响）
assert(loose.counts.density === 0, '极宽区间下没有密度超限面');
assert(loose.counts.angle === 0, '极宽角度下没有角度超限面');
assert(loose.counts.flipped === normal.counts.flipped, '放宽阈值不改变翻转判定');
assert(loose.counts.overlap === normal.counts.overlap, '放宽阈值不改变重叠判定');
assert(loose.counts.degenerate === normal.counts.degenerate, '放宽阈值不改变退化判定');

// 3) 指标数值不随阈值变化
for (let i = 0; i < stats.metrics.length; i++) {
  const m = stats.metrics[i];
  assert(m.areaRatio === snapshot[i].areaRatio, `三角形 ${i} 面积比率数值不变`);
  assert(m.angleDistortion === snapshot[i].angleDistortion, `三角形 ${i} 角度数值不变`);
}

// 4) 退化面不能被误算成密度/角度超限：面 1（B，3D+UV 退化）
const faceB = tight.faces.find((f) => f.faceId === 1)!;
assert(faceB.degenerate === true, 'B 面标记为退化');
assert(faceB.density === false, '退化面 B 不算密度超限');
assert(faceB.angle === false, '退化面 B 不算角度超限');
assert(faceB.areaRatio === null && faceB.angleDistortion === null, '退化面 B 指标为 null');

// 5) 面 C（faceId=2）强拉伸：任何阈值下密度都应超限或随阈值切换
const cLoose = loose.faces.find((f) => f.faceId === 2)!;
const cTight = tight.faces.find((f) => f.faceId === 2)!;
assert(cLoose.density === false, 'C 在极宽区间下不算超限（指标不变，只改判定）');
assert(cTight.density === true, 'C 在收紧区间下算超限');
assert(cLoose.areaRatio === cTight.areaRatio, 'C 的指标数值不随阈值变化');

// 6) 导出摘要与报告一致
const json = JSON.parse(buildSummaryJson(tight));
assert(json.modelName === 'degenerate.obj', '摘要含模型名');
assert(json.rules.areaRatioRange[0] === 0.9 && json.rules.areaRatioRange[1] === 1.1, '摘要含比率区间规则');
assert(json.rules.maxAngleDegrees === 2, '摘要含最大角度规则');
assert(json.totals.issueFaces === tight.issueFaceCount, '摘要问题面合计与报告一致');
assert(json.totals.byKind.density === tight.counts.density, '摘要密度计数与报告一致');
const listed = new Set<number>(json.issueFaces.map((f: any) => f.faceId));
for (const f of tight.faces) {
  assert(listed.has(f.faceId) === (f.kinds.length > 0), `面 ${f.faceId} 导出存在性与判定一致`);
}
const bEntry = json.issueFaces.find((f: any) => f.faceId === 1);
assert(bEntry && bEntry.issues.includes('degenerate') && !bEntry.issues.includes('density'),
  '摘要中退化面只标 degenerate');
const cEntry = json.issueFaces.find((f: any) => f.faceId === 2);
assert(cEntry && Array.isArray(cEntry.issues) && typeof cEntry.areaRatioMax === 'number',
  '摘要中问题面含指标数值');

// 7) 规则清洗：反转区间自动交换、非法输入回退默认
const s1 = sanitizeRules({ minRatio: 2, maxRatio: 0.5, maxAngle: -5 });
assert(s1.minRatio === 0.5 && s1.maxRatio === 2 && s1.maxAngle === 0, '反转区间交换、负角度归零');
const s2 = sanitizeRules({ minRatio: NaN, maxRatio: undefined, maxAngle: 'abc' });
assert(s2.minRatio === DEFAULT_RULES.minRatio && s2.maxRatio === DEFAULT_RULES.maxRatio
  && s2.maxAngle === DEFAULT_RULES.maxAngle, '非法输入回退默认');

// 8) 正常立方体（接缝样例）：默认规则下不应有密度/角度超限（全等 UV 格子）
const cube = parseObj(SAMPLES.find((s) => s.id === 'seams')!.obj, 'seams.obj');
const cubeStats = analyzeMesh(cube);
const cubeRep = inspectMesh(cube, cubeStats, DEFAULT_RULES);
assert(cubeRep.counts.density === 0, `规则立方体默认规则无密度超限，实际 ${cubeRep.counts.density}`);
assert(cubeRep.counts.angle === 0, `规则立方体默认规则无角度超限，实际 ${cubeRep.counts.angle}`);
assert(cubeRep.counts.flipped === 0, '规则立方体无翻转');

// 9) 密度梯度模型：6 个全等 3D 三角形，UV 尺寸各不相同 => 面积比率呈梯度。
//    默认 [0.5,2] 下只有最极端两面超限；收紧到 [0.85,1.18] 后问题面增多；
//    放宽到 [0.2,5] 后清零。指标数值三种阈值下完全一致。
function gradientObj(): string {
  const lines = ['# gradient'];
  // 6 个不相连的单位直角三角形，3D 全等
  for (let i = 0; i < 6; i++) {
    const x = i * 2;
    lines.push(`v ${x} 0 0`, `v ${x + 1} 0 0`, `v ${x} 1 0`);
  }
  // UV 各自独立格子，纵向高度 s 决定密度（3D 全等，UV 越矮越密）
  const scales = [0.2, 0.6, 0.85, 1.2, 1.6, 5];
  scales.forEach((s, i) => {
    const u = i * 2;
    lines.push(`vt ${u} 0`, `vt ${u + 1} 0`, `vt ${u} ${s}`);
  });
  for (let i = 0; i < 6; i++) {
    const b = i * 3 + 1;
    lines.push(`f ${b}/${b} ${b + 1}/${b + 1} ${b + 2}/${b + 2}`);
  }
  return lines.join('\n') + '\n';
}
const gMesh = parseObj(gradientObj(), 'gradient.obj');
const gStats = analyzeMesh(gMesh);
const metricSnapshot = gStats.metrics.map((m) => ({ r: m.areaRatio, a: m.angleDistortion }));
const gLoose = inspectMesh(gMesh, gStats, { minRatio: 0.2, maxRatio: 5, maxAngle: 179 });
const gNormal = inspectMesh(gMesh, gStats, DEFAULT_RULES);
const gTight = inspectMesh(gMesh, gStats, { minRatio: 0.85, maxRatio: 1.18, maxAngle: 1 });
console.log('gradient ratios:', metricSnapshot.map((m) => m.r!.toFixed(3)));
console.log('gradient counts loose/normal/tight:',
  gLoose.counts.density, gNormal.counts.density, gTight.counts.density,
  '/', gLoose.counts.angle, gNormal.counts.angle, gTight.counts.angle);
assert(gLoose.counts.density === 0, '梯度模型放宽后无密度超限');
assert(gNormal.counts.density >= 1, '梯度模型默认规则有密度超限');
assert(gTight.counts.density > gNormal.counts.density, '梯度模型收紧后密度问题面增多');
assert(gTight.counts.angle > gNormal.counts.angle, '梯度模型收紧后角度问题面增多');
// 指标数值不受阈值影响
gStats.metrics.forEach((m, i) => {
  assert(m.areaRatio === metricSnapshot[i].r, `梯度面 ${i} 比率数值不变`);
  assert(m.angleDistortion === metricSnapshot[i].a, `梯度面 ${i} 角度数值不变`);
});
// 定位集合：每个超限面 ID 都可取出
const tightDensityFaces = gTight.faces.filter((f) => f.density).map((f) => f.faceId);
assert(tightDensityFaces.length === gTight.counts.density, '密度超限面 ID 列表与计数一致');
assert(tightDensityFaces.every((id) => id >= 0 && id < gMesh.faces.length), '问题面 ID 均为合法面身份');

console.log(failures === 0 ? '\nALL RULE TESTS PASSED' : `\n${failures} FAILURE(S)`);
process.exit(failures === 0 ? 0 : 1);
