import type {
  FaceIssue,
  InspectionReport,
  InspectionRules,
  IssueKind,
  MeshData,
  MeshStats,
} from './types';

/** 默认验收规则（与原面板 0.5×~2×、15° 的提示口径一致）。 */
export const DEFAULT_RULES: InspectionRules = {
  minRatio: 0.5,
  maxRatio: 2,
  maxAngle: 15,
};

export const ISSUE_KINDS: IssueKind[] = [
  'density',
  'angle',
  'flipped',
  'overlap',
  'degenerate',
];

/**
 * 规则清洗：非法（NaN/无穷）值回退默认，反转区间自动交换，负角度归零。
 * 刻意不做正数夹紧/取整，以免打断用户输入中间态；比率判定本身只与
 * 恒正的 areaRatio 比较，0/负阈值行为安全（下限 0 等同不拦稀疏）。
 */
export function sanitizeRules(input: Partial<InspectionRules>): InspectionRules {
  const num = (v: unknown, fallback: number): number => {
    const n = typeof v === 'number' ? v : Number(v);
    return Number.isFinite(n) ? n : fallback;
  };
  let minRatio = num(input.minRatio, DEFAULT_RULES.minRatio);
  let maxRatio = num(input.maxRatio, DEFAULT_RULES.maxRatio);
  const maxAngle = Math.max(0, num(input.maxAngle, DEFAULT_RULES.maxAngle));
  if (minRatio > maxRatio) [minRatio, maxRatio] = [maxRatio, minRatio];
  return { minRatio, maxRatio, maxAngle };
}

/**
 * 按面汇总本次检查结果。
 *
 * 关键约定：
 * - 翻转 / 岛间重叠 / 退化直接复用 analyzeMesh 的既有结论，算法不变；
 * - 面积/角度判定只看 TriMetrics 上的既有数值（阈值变化不会重算指标，
 *   更不会触碰 UV）；
 * - 退化三角形的 areaRatio / angleDistortion 为 null，天然不会被误算成
 *   密度或角度超限；面内同时有正常三角形时，仅用正常三角形参与判定。
 */
export function inspectMesh(
  mesh: MeshData,
  stats: MeshStats,
  rules: InspectionRules,
): InspectionReport {
  const trisOfFace = new Map<number, number[]>();
  for (const t of mesh.triangles) {
    const list = trisOfFace.get(t.faceId);
    if (list) list.push(t.id);
    else trisOfFace.set(t.faceId, [t.id]);
  }

  const counts: Record<IssueKind, number> = {
    density: 0,
    angle: 0,
    flipped: 0,
    overlap: 0,
    degenerate: 0,
  };

  const faces: FaceIssue[] = [];

  for (const face of mesh.faces) {
    const triIds = trisOfFace.get(face.id) ?? [];
    let hasValid = false;
    let hasDegenerate = false;
    let flipped = false;
    let overlap = false;
    let maxRatio: number | null = null;
    let minRatio: number | null = null;
    let maxAngle: number | null = null;

    for (const tid of triIds) {
      const m = stats.metrics[tid];
      if (m.flipped) flipped = true;
      if (stats.overlap[tid]) overlap = true;
      if (m.degenerate3d || m.degenerateUv) {
        hasDegenerate = true;
        // 退化三角形不参与比率/角度统计，避免被误算成密度超限
        continue;
      }
      if (m.areaRatio !== null) {
        hasValid = true;
        maxRatio = maxRatio === null ? m.areaRatio : Math.max(maxRatio, m.areaRatio);
        minRatio = minRatio === null ? m.areaRatio : Math.min(minRatio, m.areaRatio);
      }
      if (m.angleDistortion !== null) {
        hasValid = true;
        maxAngle =
          maxAngle === null ? m.angleDistortion : Math.max(maxAngle, m.angleDistortion);
      }
    }

    // 面级比率：区间用“最坏”方向判定 —— 任一三角形超出 [min,max] 即超限。
    const density =
      hasValid &&
      ((minRatio !== null && minRatio < rules.minRatio) ||
        (maxRatio !== null && maxRatio > rules.maxRatio));
    const angle = hasValid && maxAngle !== null && maxAngle > rules.maxAngle;

    const kinds: IssueKind[] = [];
    if (density) kinds.push('density');
    if (angle) kinds.push('angle');
    if (flipped) kinds.push('flipped');
    if (overlap) kinds.push('overlap');
    if (hasDegenerate) kinds.push('degenerate');

    if (density) counts.density++;
    if (angle) counts.angle++;
    if (flipped) counts.flipped++;
    if (overlap) counts.overlap++;
    if (hasDegenerate) counts.degenerate++;

    faces.push({
      faceId: face.id,
      density,
      angle,
      flipped,
      overlap,
      degenerate: hasDegenerate,
      areaRatio: maxRatio,
      minAreaRatio: minRatio,
      angleDistortion: maxAngle,
      kinds,
    });
  }

  const issueFaceCount = faces.reduce((n, f) => n + (f.kinds.length > 0 ? 1 : 0), 0);

  return {
    rules: { ...rules },
    modelName: mesh.fileName,
    faceCount: mesh.faces.length,
    triCount: mesh.triangles.length,
    counts,
    issueFaceCount,
    faces,
  };
}

export function facesByKind(report: InspectionReport, kind: IssueKind): Set<number> {
  const s = new Set<number>();
  for (const f of report.faces) {
    if (f.kinds.includes(kind)) s.add(f.faceId);
  }
  return s;
}

/** 面积比率超限细分方向（导出/界面用）。 */
export function densityDirection(f: FaceIssue, rules: InspectionRules): string[] {
  const dirs: string[] = [];
  if (f.minAreaRatio !== null && f.minAreaRatio < rules.minRatio) dirs.push('low');
  if (f.areaRatio !== null && f.areaRatio > rules.maxRatio) dirs.push('high');
  return dirs;
}

/**
 * 导出与当前界面一致的 JSON 检查摘要：规则、模型名、问题面 ID 及指标。
 * 只包含问题面（kinds 非空）；指标数值直接取自分析结果，与阈值无关。
 */
export function buildSummaryJson(report: InspectionReport): string {
  const issueFaces = report.faces
    .filter((f) => f.kinds.length > 0)
    .map((f) => ({
      faceId: f.faceId,
      issues: f.kinds,
      areaRatioMax: round(f.areaRatio),
      areaRatioMin: round(f.minAreaRatio),
      angleDistortion: round(f.angleDistortion),
      density: f.density
        ? densityDirection(f, report.rules).map((d) => (d === 'low' ? 'sparse' : 'dense'))
        : [],
    }));

  const summary = {
    schema: 'lowpoly-uv-inspector/inspection-v1',
    exportedAt: new Date().toISOString(),
    modelName: report.modelName,
    rules: {
      areaRatioRange: [report.rules.minRatio, report.rules.maxRatio],
      maxAngleDegrees: report.rules.maxAngle,
    },
    totals: {
      faces: report.faceCount,
      triangles: report.triCount,
      issueFaces: report.issueFaceCount,
      byKind: report.counts,
    },
    issueFaces,
  };
  return JSON.stringify(summary, null, 2);
}

function round(n: number | null, digits = 6): number | null {
  if (n === null) return null;
  return Number(n.toFixed(digits));
}
