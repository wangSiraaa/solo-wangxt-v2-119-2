import { useEffect, useMemo, useState } from 'react';
import { useApp } from '../state/AppContext';
import type { TriMetrics } from '../core/types';
import {
  DEFAULT_RULES,
  buildCheckSummary,
  evaluateRules,
  sanitizeRules,
} from '../core/rules';
import type { CheckRules, RuleIssue } from '../core/rules';
import { downloadText } from '../core/exporter';

function fmt(n: number | null | undefined, digits = 3): string {
  if (n === null || n === undefined || !Number.isFinite(n)) return '—';
  return n.toFixed(digits);
}

/** 面积比率 -> 百分比纹素密度偏差：ratio=1 => 0%，ratio=2 => +100%。 */
function densityPct(r: number | null): string {
  if (r === null) return '退化';
  const pct = (r - 1) * 100;
  return `${pct >= 0 ? '+' : ''}${pct.toFixed(0)}%`;
}

function aggregate(ms: TriMetrics[]) {
  const valid = ms.filter((m) => m.areaRatio !== null);
  if (valid.length === 0) {
    return { count: ms.length, valid: 0, maxRatio: null, maxAngle: null };
  }
  let maxRatio = 0;
  let maxAngle = 0;
  for (const m of valid) {
    maxRatio = Math.max(maxRatio, m.areaRatio!);
    maxAngle = Math.max(maxAngle, m.angleDistortion ?? 0);
  }
  return { count: ms.length, valid: valid.length, maxRatio, maxAngle };
}

const ISSUE_LABEL: Record<RuleIssue, string> = {
  'density-low': '偏稀',
  'density-high': '偏密',
  angle: '角度',
};

/**
 * 阈值数字输入：输入过程保留本地字符串（允许临时中间态），合法时立即
 * 提交，失焦时回到已提交值。只提交数值给规则，不改 UV。
 */
function RuleNumberInput({
  value, onCommit, step, min, max, testid,
}: {
  value: number;
  onCommit: (v: number) => void;
  step: number;
  min: number;
  max: number;
  testid: string;
}) {
  const [text, setText] = useState(String(value));
  const [focused, setFocused] = useState(false);
  // 仅在未编辑时跟随外部值（恢复默认 / 外部改动）；编辑中保留用户输入。
  useEffect(() => {
    if (!focused) setText(String(value));
  }, [value, focused]);

  const commit = (raw: string) => {
    const v = Number(raw);
    // 合法数字立即提交（父端 sanitizeRules 负责夹取/去交叉）；
    // 空串或中间态（如 "1."、"-"）等失焦时再回退。
    if (raw.trim() !== '' && Number.isFinite(v)) onCommit(v);
  };

  return (
    <input
      className="rule-input"
      type="number"
      data-testid={testid}
      value={text}
      step={step}
      min={min}
      max={max}
      onFocus={() => setFocused(true)}
      onChange={(e) => {
        setText(e.target.value);
        commit(e.target.value);
      }}
      onBlur={() => {
        setFocused(false);
        setText(String(value));
      }}
    />
  );
}

export function StatsPanel() {
  const { state, selectFaces, setRules } = useApp();
  const { mesh, stats, selectedFaceIds } = state;
  const rules: CheckRules = state.rules;

  const evaluation = useMemo(
    () => (mesh && stats ? evaluateRules(mesh, stats, rules) : null),
    [mesh, stats, rules],
  );

  const summary = useMemo(() => {
    if (!mesh || !stats) return null;
    let deg3 = 0;
    let degUv = 0;
    let flipped = 0;
    let overlap = 0;
    let minR = Infinity;
    let maxR = -Infinity;
    const angles: number[] = [];
    for (const m of stats.metrics) {
      if (m.degenerate3d) deg3++;
      if (m.degenerateUv) degUv++;
      if (m.flipped) flipped++;
      if (m.areaRatio !== null) {
        minR = Math.min(minR, m.areaRatio);
        maxR = Math.max(maxR, m.areaRatio);
      }
      if (m.angleDistortion !== null) angles.push(m.angleDistortion);
    }
    for (let i = 0; i < stats.overlap.length; i++) if (stats.overlap[i]) overlap++;

    const boundary = stats.edges.filter((e) => e.boundary).length;
    const seam = stats.edges.filter((e) => e.seam).length;
    const nm = stats.edges.filter((e) => e.nonManifold).length;
    const mirroredIsl = stats.islands.filter((i) => i.mirrored).length;

    // 异常面收集（点击定位）
    const faceSetOf = (triIds: number[]) => {
      const s = new Set<number>();
      triIds.forEach((id) => s.add(mesh.triangles[id].faceId));
      return s;
    };
    const flippedTris = stats.metrics.map((m, i) => (m.flipped ? i : -1)).filter((i) => i >= 0);
    const overlapTris = [...stats.overlap].map((v, i) => (v ? i : -1)).filter((i) => i >= 0);
    const degTris = stats.metrics
      .map((m, i) => (m.degenerate3d || m.degenerateUv ? i : -1))
      .filter((i) => i >= 0);

    return {
      deg3, degUv, flipped, overlap,
      minR: minR === Infinity ? null : minR,
      maxR: maxR === -Infinity ? null : maxR,
      maxAngle: angles.length ? Math.max(...angles) : null,
      boundary, seam, nm, mirroredIsl,
      islands: stats.islands.length,
      flippedFaces: faceSetOf(flippedTris),
      overlapFaces: faceSetOf(overlapTris),
      degFaces: faceSetOf(degTris),
    };
  }, [mesh, stats]);

  const selectedAgg = useMemo(() => {
    if (!mesh || !stats || selectedFaceIds.size === 0) return null;
    const triIds: number[] = [];
    mesh.faces.forEach((f) => {
      if (selectedFaceIds.has(f.id)) {
        mesh.triangles.forEach((t) => {
          if (t.faceId === f.id) triIds.push(t.id);
        });
      }
    });
    const agg = aggregate(triIds.map((id) => stats.metrics[id]));
    // 单三角时给出个体数值
    const one = triIds.length === 1 ? stats.metrics[triIds[0]] : null;
    return { agg, one, triCount: triIds.length };
  }, [mesh, stats, selectedFaceIds]);

  if (!mesh || !stats || !summary || !evaluation) {
    return <aside className="panel">尚未载入模型。</aside>;
  }

  const r = evaluation.rules;
  const updateRules = (patch: Partial<CheckRules>) =>
    setRules(sanitizeRules({ ...r, ...patch }));

  const isAreaOut = (v: number | null) =>
    v !== null && (v < r.minRatio || v > r.maxRatio);
  const isAngleOut = (v: number | null) => v !== null && v > r.maxAngle;

  const locateFaces = (ids: number[]) => {
    if (ids.length) selectFaces(new Set(ids));
  };

  const exportJson = () => {
    const doc = buildCheckSummary(mesh, stats, evaluation);
    const base = mesh.fileName.replace(/\.obj$/i, '') || 'model';
    downloadText(
      `${base}_check.json`,
      JSON.stringify(doc, null, 2),
      'application/json;charset=utf-8',
    );
  };

  const chip = (ok: boolean) => (ok ? 'bad' : 'ok');

  return (
    <aside className="panel">
      <section>
        <h3>拓扑</h3>
        <Row k="顶点身份 (v)" v={mesh.vertexCount} />
        <Row k="角点 (corner)" v={mesh.corners.length} hint="接缝两侧可为同 v 不同 vt" />
        <Row k="原始面 / 三角形" v={`${mesh.faces.length} / ${mesh.triangles.length}`} />
        <Row k="UV 顶点 (vt)" v={mesh.uvCount} />
        <Row k="UV 来源" v={mesh.uvOrigin === 'obj' ? 'OBJ/编辑' : '平面回退'} />
      </section>

      <section>
        <h3>边（按顶点身份+空间近邻）</h3>
        <Row k="UV 岛" v={summary.islands} />
        <Row k="边界边" v={summary.boundary} />
        <Row k="共享边接缝" v={summary.seam} cls={summary.seam ? 'warn' : 'ok'} />
        <Row k="非流形边" v={summary.nm} cls={chip(summary.nm === 0)}
          hint="≥3 个三角形共享的 3D 边" />
      </section>

      <section>
        <h3>本次检查规则（仅判定，不改 UV）</h3>
        <div className="rule-row">
          <span className="k">面积比率允许区间</span>
          <span className="rule-range">
            <RuleNumberInput
              value={r.minRatio}
              onCommit={(v) => updateRules({ minRatio: v })}
              step={0.05} min={0.000001} max={1000000} testid="rule-min-ratio"
            />
            <span className="rule-x">× ~</span>
            <RuleNumberInput
              value={r.maxRatio}
              onCommit={(v) => updateRules({ maxRatio: v })}
              step={0.05} min={0.000001} max={1000000} testid="rule-max-ratio"
            />
            <span className="rule-x">×</span>
          </span>
        </div>
        <div className="rule-row">
          <span className="k">最大角度偏差</span>
          <span className="rule-range">
            <RuleNumberInput
              value={r.maxAngle}
              onCommit={(v) => updateRules({ maxAngle: v })}
              step={1} min={0} max={180} testid="rule-max-angle"
            />
            <span className="rule-x">°</span>
          </span>
        </div>
        <div className="rule-actions">
          <button
            className="mini"
            data-testid="rule-reset"
            onClick={() => setRules(DEFAULT_RULES)}
          >
            恢复默认 0.5×~2× / 15°
          </button>
          <button className="mini primary" data-testid="export-json" onClick={exportJson}>
            导出 JSON 摘要
          </button>
        </div>
        <p className="hint">
          超限面 {evaluation.problemFaces.length}（判定用三角形：
          密度 {evaluation.areaTriCount} / 角度 {evaluation.angleTriCount}）。
          边界取等号不超限；调阈值只改判定，翻转/重叠/退化算法不变。
        </p>
      </section>

      <section>
        <h3>UV 健康</h3>
        <IssueRow
          label="面积密度超限面"
          value={evaluation.areaFaceIds.length}
          bad={evaluation.areaFaceIds.length > 0}
          onLocate={() => locateFaces(evaluation.areaFaceIds)}
          hint={`区间 ${r.minRatio}× ~ ${r.maxRatio}×，含边界`}
        />
        <IssueRow
          label="角度偏差超限面"
          value={evaluation.angleFaceIds.length}
          bad={evaluation.angleFaceIds.length > 0}
          onLocate={() => locateFaces(evaluation.angleFaceIds)}
          hint={`最大允许 ${r.maxAngle}°，含边界`}
        />
        <IssueRow
          label="翻转三角形 / 镜像岛"
          value={`${summary.flipped} / ${summary.mirroredIsl}`}
          bad={summary.flipped > 0}
          onLocate={() => summary.flippedFaces.size && selectFaces(summary.flippedFaces)}
        />
        <IssueRow
          label="岛间重叠三角形"
          value={summary.overlap}
          bad={summary.overlap > 0}
          onLocate={() => summary.overlapFaces.size && selectFaces(summary.overlapFaces)}
        />
        <IssueRow
          label="退化（3D / UV）"
          value={`${summary.deg3} / ${summary.degUv}`}
          bad={summary.deg3 + summary.degUv > 0}
          onLocate={() => summary.degFaces.size && selectFaces(summary.degFaces)}
          hint="退化面不参与比率与角度计算，也不会算成密度超限"
        />

        {evaluation.problemFaces.length > 0 && (
          <ul className="problem-list" data-testid="problem-list">
            {evaluation.problemFaces.map((f) => {
              const active = selectedFaceIds.has(f.faceId);
              return (
                <li key={f.faceId}>
                  <button
                    className={`problem-item${active ? ' selected' : ''}`}
                    data-testid={`problem-face-${f.faceId}`}
                    onClick={() => selectFaces(new Set([f.faceId]))}
                    title="点击在 3D / 2D 双视图定位该面"
                  >
                    <span className="pf-id">#{f.faceId + 1}</span>
                    <span className="pf-tags">
                      {f.issues.map((k) => (
                        <i key={k} className={`tag ${k}`}>{ISSUE_LABEL[k]}</i>
                      ))}
                    </span>
                    <span className="pf-metric">
                      {fmt(f.areaMin, 2)}–{fmt(f.areaMax, 2)}×
                      {' · '}{fmt(f.angleMax, 1)}°
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      <section>
        <h3>面积畸变（纹素密度）</h3>
        <Row k="全局相对尺度" v={fmt(stats.globalScale, 4)} hint="中位 3D/UV 面积比" />
        <Row
          k="最小 / 最大比率"
          v={`${fmt(summary.minR)}× / ${fmt(summary.maxR)}×`}
          cls={isAreaOut(summary.minR) || isAreaOut(summary.maxR) ? 'warn' : 'ok'}
        />
        <p className="hint">
          比率 1× = 与中位密度一致；0.5× 偏稀，2× 偏密。
          指标数值不随阈值改变。
        </p>
      </section>

      <section>
        <h3>角度畸变</h3>
        <Row
          k="全模型最大内角偏差"
          v={`${fmt(summary.maxAngle, 1)}°`}
          cls={isAngleOut(summary.maxAngle) ? 'warn' : 'ok'}
        />
        <p className="hint">对应 3D/UV 内角最大差值；0° 为保角映射。</p>
      </section>

      <section>
        <h3>选中面{selectedFaceIds.size > 0 ? `（${selectedFaceIds.size} 面 / ${selectedAgg?.triCount ?? 0} 三角）` : ''}</h3>
        {!selectedAgg && <p className="hint">在任一视图点选面；Shift+点击加选。</p>}
        {selectedAgg?.one && (
          <>
            <Row
              k="面积畸变比率"
              v={selectedAgg.one.areaRatio === null ? '退化' : `${fmt(selectedAgg.one.areaRatio)}×`}
              hint={densityPct(selectedAgg.one.areaRatio)}
              cls={isAreaOut(selectedAgg.one.areaRatio) ? 'warn' : undefined}
            />
            <Row
              k="角度畸变"
              v={selectedAgg.one.angleDistortion === null ? '退化' : `${fmt(selectedAgg.one.angleDistortion, 1)}°`}
              cls={isAngleOut(selectedAgg.one.angleDistortion) ? 'warn' : undefined}
            />
            <Row k="3D / UV 面积" v={`${fmt(selectedAgg.one.area3d, 5)} / ${fmt(selectedAgg.one.areaUv, 5)}`} />
            <Row k="翻转" v={selectedAgg.one.flipped ? '是' : '否'}
              cls={selectedAgg.one.flipped ? 'bad' : 'ok'} />
          </>
        )}
        {selectedAgg && !selectedAgg.one && (
          <>
            <Row k="最大面积比率" v={`${fmt(selectedAgg.agg.maxRatio)}×`} />
            <Row k="最大角度畸变" v={`${fmt(selectedAgg.agg.maxAngle, 1)}°`} />
            <p className="hint">多选显示聚合峰值；点单一面查看个体数值。</p>
          </>
        )}
      </section>
    </aside>
  );
}

function Row({ k, v, cls, hint }: { k: string; v: string | number; cls?: string; hint?: string }) {
  return (
    <div className={`row ${cls ?? ''}`}>
      <span className="k">{k}</span>
      <span className="v" title={hint}>{v}</span>
    </div>
  );
}

function IssueRow({
  label, value, bad, onLocate, hint,
}: {
  label: string;
  value: string | number;
  bad: boolean;
  onLocate: () => void;
  hint?: string;
}) {
  return (
    <div className={`row issue ${bad ? 'bad' : 'ok'}`} title={hint}>
      <span className="k">{label}</span>
      <span className="v">
        {value}
        {bad && (
          <button className="locate" onClick={onLocate}>定位</button>
        )}
      </span>
    </div>
  );
}
