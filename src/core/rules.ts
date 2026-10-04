import type { MeshData, MeshStats } from './types';

/**
 * 美术验收「本次检查规则」。
 *
 * 规则只对既有指标（metrics.ts 计算结果）做判定，绝不修改 UV，也不
 * 重新计算指标；改变阈值只改变哪些面被报告为超限。
 */
export interface CheckRules {
  /** 面积畸变比率允许区间（含边界，边界取等号不超限）。 */
  minRatio: number;
  maxRatio: number;
  /** 角度畸变最大允许偏差（度，含边界）。 */
  maxAngle: number;
}

export const DEFAULT_RULES: CheckRules = {
  minRatio: 0.5,
  maxRatio: 2,
  maxAngle: 15,
};

/** 非有限输入回退到默认规则。 */
export function sanitizeRules(r: Partial<CheckRules> | null | undefined): CheckRules {
  const d = DEFAULT_RULES;
  const num = (v: unknown, fb: number) =>
    typeof v === 'number' && Number.isFinite(v) ? v : fb;
  let minRatio = num(r?.minRatio, d.minRatio);
  let maxRatio = num(r?.maxRatio, d.maxRatio);
  const maxAngle = num(r?.maxAngle, d.maxAngle);
  // 比率区间必须为正且不交叉；交叉时把下界收敛到上界（结果是“无面可过”）。
  minRatio = Math.max(1e-6, Math.min(minRatio, 1e6));
  maxRatio = Math.max(1e-6, Math.min(maxRatio, 1e6));
  if (minRatio > maxRatio) minRatio = maxRatio;
  return { minRatio, maxRatio, maxAngle: Math.max(0, Math.min(maxAngle, 180)) };
}

/** 三角形超限位标记（退化面不置任何规则位）。 */
export const RULE_LOW = 1;
export const RULE_HIGH = 2;
export const RULE_ANGLE = 4;

export type RuleIssue = 'density-low' | 'density-high' | 'angle';

export interface FaceRuleResult {
  /** 0 起的原始面 ID（与 ObjFace.id 一致）。 */
  faceId: number;
  /** 该面全部三角形；退化三角不计入极值与判定。 */
  triIds: number[];
  areaMin: number | null;
  areaMax: number | null;
  angleMax: number | null;
  issues: RuleIssue[];
}

export interface RuleEvaluation {
  rules: CheckRules;
  /** 逐三角形的 RULE_* 位（无超限为 0；退化面为 0，绝不误判密度）。 */
  triMask: Uint8Array;
  faces: FaceRuleResult[];
  problemFaces: FaceRuleResult[];
  areaFaceIds: number[];
  angleFaceIds: number[];
  areaTriCount: number;
  angleTriCount: number;
}

/**
 * 按面汇总规则判定。纯函数：同 mesh/stats 不同阈值之间指标数值不变，
 * 只有结论变化。
 */
export function evaluateRules(
  mesh: MeshData,
  stats: MeshStats,
  rulesInput: Partial<CheckRules> | null | undefined,
): RuleEvaluation {
  const rules = sanitizeRules(rulesInput);
  const n = mesh.triangles.length;
  const triMask = new Uint8Array(n);

  const triOfFace = new Map<number, number[]>();
  for (const t of mesh.triangles) {
    const list = triOfFace.get(t.faceId);
    if (list) list.push(t.id);
    else triOfFace.set(t.faceId, [t.id]);
  }

  // 逐三角判定（退化面 areaRatio/angleDistortion 为 null，直接跳过）。
  // 边界取等号不超限；给一个相对浮点容差，吸收 45.00000000000001 类误差。
  const tol = (bound: number) => 1e-9 * Math.max(1, Math.abs(bound));
  for (const t of mesh.triangles) {
    const m = stats.metrics[t.id];
    let mask = 0;
    if (m.areaRatio !== null) {
      if (m.areaRatio + tol(rules.minRatio) < rules.minRatio) mask |= RULE_LOW;
      if (m.areaRatio - tol(rules.maxRatio) > rules.maxRatio) mask |= RULE_HIGH;
    }
    if (
      m.angleDistortion !== null &&
      m.angleDistortion - tol(rules.maxAngle) > rules.maxAngle
    ) {
      mask |= RULE_ANGLE;
    }
    triMask[t.id] = mask;
  }

  let areaTriCount = 0;
  let angleTriCount = 0;
  for (let i = 0; i < n; i++) {
    if (triMask[i] & (RULE_LOW | RULE_HIGH)) areaTriCount++;
    if (triMask[i] & RULE_ANGLE) angleTriCount++;
  }

  const faces: FaceRuleResult[] = [];
  const areaFaceIds: number[] = [];
  const angleFaceIds: number[] = [];
  const problemFaces: FaceRuleResult[] = [];

  for (const faceId of [...triOfFace.keys()].sort((a, b) => a - b)) {
    const triIds = triOfFace.get(faceId)!;
    let areaMin: number | null = null;
    let areaMax: number | null = null;
    let angleMax: number | null = null;
    const issues = new Set<RuleIssue>();
    for (const tid of triIds) {
      const m = stats.metrics[tid];
      if (m.areaRatio !== null) {
        areaMin = areaMin === null ? m.areaRatio : Math.min(areaMin, m.areaRatio);
        areaMax = areaMax === null ? m.areaRatio : Math.max(areaMax, m.areaRatio);
      }
      if (m.angleDistortion !== null) {
        angleMax =
          angleMax === null ? m.angleDistortion : Math.max(angleMax, m.angleDistortion);
      }
      const mask = triMask[tid];
      if (mask & RULE_LOW) issues.add('density-low');
      if (mask & RULE_HIGH) issues.add('density-high');
      if (mask & RULE_ANGLE) issues.add('angle');
    }
    const issueOrder: RuleIssue[] = ['density-low', 'density-high', 'angle'];
    const res: FaceRuleResult = {
      faceId,
      triIds,
      areaMin,
      areaMax,
      angleMax,
      issues: issueOrder.filter((k) => issues.has(k)),
    };
    faces.push(res);
    const isArea = issues.has('density-low') || issues.has('density-high');
    if (isArea) areaFaceIds.push(faceId);
    if (issues.has('angle')) angleFaceIds.push(faceId);
    if (res.issues.length > 0) problemFaces.push(res);
  }

  return {
    rules,
    triMask,
    faces,
    problemFaces,
    areaFaceIds,
    angleFaceIds,
    areaTriCount,
    angleTriCount,
  };
}

const round6 = (n: number): number => Math.round(n * 1e6) / 1e6;

export interface CheckSummaryProblem {
  faceId: number;
  issues: RuleIssue[];
  areaRatioMin: number | null;
  areaRatioMax: number | null;
  angleDistortionMax: number | null;
  triIds: number[];
}

export interface CheckSummary {
  type: 'uv-rule-check';
  version: 1;
  generatedAt: string;
  model: {
    fileName: string;
    faceCount: number;
    triangleCount: number;
    vertexCount: number;
  };
  rules: CheckRules;
  metrics: {
    globalScale: number;
    areaRatioMin: number | null;
    areaRatioMax: number | null;
    angleDistortionMax: number | null;
  };
  counts: {
    densityFaces: number;
    angleFaces: number;
    problemFaces: number;
    densityTriangles: number;
    angleTriangles: number;
    flippedTriangles: number;
    overlapTriangles: number;
    degenerateTriangles3d: number;
    degenerateTrianglesUv: number;
  };
  problemFaces: CheckSummaryProblem[];
  flippedFaces: number[];
  overlapFaces: number[];
  degenerateFaces: number[];
  notes: string[];
}

/**
 * 导出与当前界面同源的 JSON 检查摘要：规则、模型名、问题面 ID 及
 * 各面指标。翻转/重叠/退化沿用既有算法统计；退化面 ratio 为 null，
 * 不会出现在规则问题面里。
 */
export function buildCheckSummary(
  mesh: MeshData,
  stats: MeshStats,
  evaluation: RuleEvaluation,
  now: Date = new Date(),
): CheckSummary {
  const faceOfTriSet = (pred: (i: number) => boolean): number[] => {
    const s = new Set<number>();
    mesh.triangles.forEach((t) => {
      if (pred(t.id)) s.add(t.faceId);
    });
    return [...s].sort((a, b) => a - b);
  };

  let deg3 = 0;
  let degUv = 0;
  let flipped = 0;
  let overlap = 0;
  let minR: number | null = null;
  let maxR: number | null = null;
  let maxAngle: number | null = null;
  for (let i = 0; i < stats.metrics.length; i++) {
    const m = stats.metrics[i];
    if (m.degenerate3d) deg3++;
    if (m.degenerateUv) degUv++;
    if (m.flipped) flipped++;
    if (stats.overlap[i]) overlap++;
    if (m.areaRatio !== null) {
      minR = minR === null ? m.areaRatio : Math.min(minR, m.areaRatio);
      maxR = maxR === null ? m.areaRatio : Math.max(maxR, m.areaRatio);
    }
    if (m.angleDistortion !== null) {
      maxAngle =
        maxAngle === null ? m.angleDistortion : Math.max(maxAngle, m.angleDistortion);
    }
  }

  const problemFaces: CheckSummaryProblem[] = evaluation.problemFaces.map((f) => ({
    faceId: f.faceId,
    issues: f.issues,
    areaRatioMin: f.areaMin === null ? null : round6(f.areaMin),
    areaRatioMax: f.areaMax === null ? null : round6(f.areaMax),
    angleDistortionMax: f.angleMax === null ? null : round6(f.angleMax),
    triIds: f.triIds,
  }));

  return {
    type: 'uv-rule-check',
    version: 1,
    generatedAt: now.toISOString(),
    model: {
      fileName: mesh.fileName,
      faceCount: mesh.faces.length,
      triangleCount: mesh.triangles.length,
      vertexCount: mesh.vertexCount,
    },
    rules: evaluation.rules,
    metrics: {
      globalScale: round6(stats.globalScale),
      areaRatioMin: minR === null ? null : round6(minR),
      areaRatioMax: maxR === null ? null : round6(maxR),
      angleDistortionMax: maxAngle === null ? null : round6(maxAngle),
    },
    counts: {
      densityFaces: evaluation.areaFaceIds.length,
      angleFaces: evaluation.angleFaceIds.length,
      problemFaces: evaluation.problemFaces.length,
      densityTriangles: evaluation.areaTriCount,
      angleTriangles: evaluation.angleTriCount,
      flippedTriangles: flipped,
      overlapTriangles: overlap,
      degenerateTriangles3d: deg3,
      degenerateTrianglesUv: degUv,
    },
    problemFaces,
    flippedFaces: faceOfTriSet((i) => stats.metrics[i].flipped),
    overlapFaces: faceOfTriSet((i) => stats.overlap[i] === 1),
    degenerateFaces: faceOfTriSet(
      (i) => stats.metrics[i].degenerate3d || stats.metrics[i].degenerateUv,
    ),
    notes: [
      '面积比率与角度偏差边界取等号不超限。',
      '退化面不参与面积比率与角度判定，ratio 为 null。',
      '翻转/重叠/退化使用既有独立算法，与阈值无关。',
      '本检查只改判定，不修改模型 UV。',
    ],
  };
}
