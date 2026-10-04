import { useEffect, useMemo, useState } from 'react';
import { useApp } from '../state/AppContext';
import type { InspectionReport, IssueKind } from '../core/types';
import { facesByKind } from '../core/inspection';

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

function aggregate(ms: { areaRatio: number | null; angleDistortion: number | null }[]) {
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

const ISSUE_LABELS: Record<IssueKind, string> = {
  density: '面积密度超限',
  angle: '角度畸变超限',
  flipped: '翻转三角形',
  overlap: '岛间重叠',
  degenerate: '退化面',
};

export function StatsPanel() {
  const { state, report, selectFaces, setRules, resetRules, exportSummary } = useApp();
  const { mesh, stats, selectedFaceIds, rules } = state;

  const summary = useMemo(() => {
    if (!mesh || !stats) return null;
    let deg3 = 0;
    let degUv = 0;
    const ratioValid: number[] = [];
    const angles: number[] = [];
    let minR = Infinity;
    let maxR = -Infinity;
    for (const m of stats.metrics) {
      if (m.degenerate3d) deg3++;
      if (m.degenerateUv) degUv++;
      if (m.areaRatio !== null) {
        ratioValid.push(m.areaRatio);
        minR = Math.min(minR, m.areaRatio);
        maxR = Math.max(maxR, m.areaRatio);
      }
      if (m.angleDistortion !== null) angles.push(m.angleDistortion);
    }

    const boundary = stats.edges.filter((e) => e.boundary).length;
    const seam = stats.edges.filter((e) => e.seam).length;
    const nm = stats.edges.filter((e) => e.nonManifold).length;
    const mirroredIsl = stats.islands.filter((i) => i.mirrored).length;

    return {
      deg3, degUv,
      minR: minR === Infinity ? null : minR,
      maxR: maxR === -Infinity ? null : maxR,
      maxAngle: angles.length ? Math.max(...angles) : null,
      boundary, seam, nm, mirroredIsl,
      islands: stats.islands.length,
      ratioCount: ratioValid.length,
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

  if (!mesh || !stats || !summary || !report) {
    return <aside className="panel">尚未载入模型。</aside>;
  }

  const locate = (kind: IssueKind) => {
    const s = facesByKind(report, kind);
    if (s.size) selectFaces(s);
  };

  return (
    <aside className="panel">
      <RulesEditor rules={rules} onChange={setRules} onReset={resetRules} onExport={exportSummary} />

      <section>
        <h3>本次检查结果（按面）</h3>
        <IssueRow
          label={ISSUE_LABELS.density}
          value={report.counts.density}
          onLocate={() => locate('density')}
          hint={`允许区间 ${rules.minRatio}× ~ ${rules.maxRatio}×`}
        />
        <IssueRow
          label={ISSUE_LABELS.angle}
          value={report.counts.angle}
          onLocate={() => locate('angle')}
          hint={`最大允许 ${rules.maxAngle}°`}
        />
        <IssueRow
          label={ISSUE_LABELS.flipped}
          value={report.counts.flipped}
          onLocate={() => locate('flipped')}
          hint={`镜像岛 ${summary.mirroredIsl} 个`}
        />
        <IssueRow
          label={ISSUE_LABELS.overlap}
          value={report.counts.overlap}
          onLocate={() => locate('overlap')}
        />
        <IssueRow
          label={ISSUE_LABELS.degenerate}
          value={report.counts.degenerate}
          onLocate={() => locate('degenerate')}
          hint="退化面不参与密度/角度判定"
        />
        <div className="row">
          <span className="k">问题面合计</span>
          <span className={`v ${report.issueFaceCount > 0 ? 'bad' : 'ok'}`}>
            {report.issueFaceCount} / {report.faceCount}
          </span>
        </div>
        <IssueFaceList report={report} onLocate={selectFaces} />
      </section>

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
        <Row k="非流形边" v={summary.nm} cls={summary.nm === 0 ? 'ok' : 'bad'}
          hint="≥3 个三角形共享的 3D 边" />
      </section>

      <section>
        <h3>面积畸变（纹素密度）</h3>
        <Row k="全局相对尺度" v={fmt(stats.globalScale, 4)} hint="中位 3D/UV 面积比" />
        <Row
          k="最小 / 最大比率"
          v={`${fmt(summary.minR)}× / ${fmt(summary.maxR)}×`}
        />
        <p className="hint">比率 1× = 与中位密度一致；指标数值不随阈值变化。</p>
      </section>

      <section>
        <h3>角度畸变</h3>
        <Row k="全模型最大内角偏差" v={`${fmt(summary.maxAngle, 1)}°`} />
        <p className="hint">对应 3D/UV 内角最大差值；0° 为保角映射。</p>
      </section>

      <section>
        <h3>选中面{selectedFaceIds.size > 0 ? `（${selectedFaceIds.size} 面 / ${selectedAgg?.triCount ?? 0} 三角）` : ''}</h3>
        {!selectedAgg && <p className="hint">在任一视图点选面；Shift+点击加选；也可点问题行“定位”。</p>}
        {selectedAgg?.one && (
          <>
            <Row
              k="面积畸变比率"
              v={selectedAgg.one.areaRatio === null ? '退化' : `${fmt(selectedAgg.one.areaRatio)}×`}
              hint={densityPct(selectedAgg.one.areaRatio)}
            />
            <Row
              k="角度畸变"
              v={selectedAgg.one.angleDistortion === null ? '退化' : `${fmt(selectedAgg.one.angleDistortion, 1)}°`}
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

function NumberField({
  label, title, value, step, onCommit,
}: {
  label: string;
  title: string;
  value: number;
  step: number;
  onCommit: (n: number) => void;
}) {
  // 本地草稿：输入过程中允许 "0." / 空串等中间态，失焦或合法时提交。
  const [draft, setDraft] = useState(String(value));
  useEffect(() => setDraft(String(value)), [value]);
  const commit = (raw: string) => {
    const n = Number(raw);
    if (Number.isFinite(n)) onCommit(n);
    else setDraft(String(value));
  };
  return (
    <label className="rule-field" title={title}>
      <span>{label}</span>
      <input
        type="number"
        value={draft}
        step={step}
        min={0}
        onChange={(e) => {
          setDraft(e.target.value);
          commit(e.target.value);
        }}
        onBlur={() => setDraft(String(value))}
      />
    </label>
  );
}

function RulesEditor({
  rules, onChange, onReset, onExport,
}: {
  rules: { minRatio: number; maxRatio: number; maxAngle: number };
  onChange: (r: Partial<{ minRatio: number; maxRatio: number; maxAngle: number }>) => void;
  onReset: () => void;
  onExport: () => void;
}) {
  return (
    <section className="rules">
      <h3>本次检查规则 <button className="reset-rules" onClick={onReset}>恢复默认</button></h3>
      <div className="rule-grid">
        <NumberField label="比率下限 ×" title="面积比率允许区间下限（1 = 中位密度）"
          value={rules.minRatio} step={0.05} onCommit={(n) => onChange({ minRatio: n })} />
        <NumberField label="比率上限 ×" title="面积比率允许区间上限"
          value={rules.maxRatio} step={0.05} onCommit={(n) => onChange({ maxRatio: n })} />
        <NumberField label="最大角度 °" title="允许的最大角度畸变"
          value={rules.maxAngle} step={1} onCommit={(n) => onChange({ maxAngle: n })} />
      </div>
      <p className="hint">阈值只改变超限判定，不修改 UV，指标数值保持不变；翻转/重叠/退化算法不变。</p>
      <button className="export-summary" onClick={onExport}>导出 JSON 检查摘要</button>
    </section>
  );
}

/** 问题面清单（可滚动、逐条点击定位，双视图同步高亮）。 */
function IssueFaceList({
  report, onLocate,
}: {
  report: InspectionReport;
  onLocate: (faceIds: Set<number>) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const issues = report.faces.filter((f) => f.kinds.length > 0);
  if (issues.length === 0) {
    return <p className="hint ok-text">当前规则下没有超限面。</p>;
  }
  return (
    <div className="issue-list-wrap">
      <button className="expand" onClick={() => setExpanded(!expanded)}>
        {expanded ? '收起' : '展开'}问题面清单（{issues.length}）
      </button>
      {expanded && (
        <ul className="issue-list">
          {issues.map((f) => (
            <li
              key={f.faceId}
              onClick={() => onLocate(new Set([f.faceId]))}
              title="点击在 3D / UV 双视图定位该面"
            >
              <b>面 {f.faceId}</b>
              <span className="issue-tags">
                {f.kinds.map((k) => (
                  <i key={k} className={`tag tag-${k}`}>{ISSUE_LABELS[k]}</i>
                ))}
              </span>
              <span className="issue-metrics">
                {f.areaRatio !== null && `比率 ${fmt(f.minAreaRatio)}×~${fmt(f.areaRatio)}×`}
                {f.angleDistortion !== null && ` · ${fmt(f.angleDistortion, 1)}°`}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
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
  label, value, onLocate, hint,
}: {
  label: string;
  value: number;
  onLocate: () => void;
  hint?: string;
}) {
  const bad = value > 0;
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
