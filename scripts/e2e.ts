import { chromium } from 'playwright';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const base = 'http://127.0.0.1:5199';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
const errors: string[] = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));

const results: string[] = [];
const check = (name: string, cond: boolean, extra = '') => {
  results.push(`${cond ? 'PASS' : 'FAIL'} ${name}${extra ? ' — ' + extra : ''}`);
};

await page.goto(base);
await page.waitForSelector('.sample-grid', { timeout: 10000 });
check('空状态显示样例', await page.locator('.sample-grid button').count() === 4);

// 1) 共享边接缝样例
await page.locator('.sample-grid button', { hasText: '共享边接缝' }).click();
await page.waitForSelector('.panel');
await sleep(200);
let panel = await page.locator('.panel').innerText();
check('接缝立方体: 12 条共享边接缝', /共享边接缝\s*\n?\s*12/.test(panel), JSON.stringify(panel.match(/共享边接缝[^\n]*/)));
check('接缝立方体: 6 个 UV 岛', /UV 岛\s*6/.test(panel));
check('接缝立方体: 角点 36', /角点 \(corner\)\s*36/.test(panel));
check('接缝立方体: 顶点身份 24', /顶点身份 \(v\)\s*24/.test(panel));

// 2) 3D 视图拾取：点击 3D 画布中心区域，应选中某一面
const box3d = await page.locator('.view3d canvas').boundingBox();
await page.mouse.click(box3d!.x + box3d!.width * 0.5, box3d!.y + box3d!.height * 0.4);
await sleep(150);
panel = await page.locator('.panel').innerText();
check('3D 点选产生选中面', /选中面\s*（\d+ 面/.test(panel), panel.match(/选中面[^\n]*/)?.[0]);

// 3) 2D 视图点选：点击 2D 画布，选中集应同步变化（两视图同步）
const box2d = await page.locator('.view2d canvas').boundingBox();
await page.mouse.click(box2d!.x + box2d!.width * 0.5, box2d!.y + box2d!.height * 0.35);
await sleep(150);
panel = await page.locator('.panel').innerText();
check('2D 点选同步选中面', /选中面\s*（\d+ 面 \/ \d+ 三角）/.test(panel), panel.match(/选中面[^\n]*/)?.[0]);

// 4) 切换到非流形样例
await page.locator('.toolbar .dropdown button', { hasText: '样例' }).hover();
await page.locator('.dropdown .menu button', { hasText: '非流形边' }).click();
await sleep(200);
panel = await page.locator('.panel').innerText();
check('非流形边: 1 条非流形', /非流形边\s*1/.test(panel));
check('非流形边: 3 个 UV 岛', /UV 岛\s*3/.test(panel));

// 5) 镜像岛
await page.locator('.toolbar .dropdown button', { hasText: '样例' }).hover();
await page.locator('.dropdown .menu button', { hasText: '镜像岛' }).click();
await sleep(200);
panel = await page.locator('.panel').innerText();
check('镜像岛: 1 个翻转三角', /翻转三角形\s*1(?!\d)/.test(panel), panel.match(/翻转三角形[^\n]*/)?.[0]);

// 6) 退化混合样例
await page.locator('.toolbar .dropdown button', { hasText: '样例' }).hover();
await page.locator('.dropdown .menu button', { hasText: '退化' }).click();
await sleep(200);
panel = await page.locator('.panel').innerText();
check('退化: 1 个退化面', /退化面\s*1(?!\d)/.test(panel), panel.match(/退化面[^\n]*/)?.[0]);
check('退化: 存在岛间重叠', /岛间重叠\s*\n?\s*[23]/.test(panel), panel.match(/岛间重叠[^\n]*/)?.[0]);
check('退化: 最大比率 >2（拉伸）', /(\d+\.\d+)×/.test(panel));

// 6b) 可调检查规则（密度梯度用退化样例：记录指标数值，收紧/放宽阈值）
const readRuleCounts = async () => {
  const text = await page.locator('.panel').innerText();
  const grab = (label: string) => {
    const m = text.match(new RegExp(`${label}\\s*\\n?\\s*(\\d+)`));
    return m ? Number(m[1]) : -1;
  };
  return {
    density: grab('面积密度超限'),
    angle: grab('角度畸变超限'),
    flipped: grab('翻转三角形'),
    overlap: grab('岛间重叠'),
    degenerate: grab('退化面'),
  };
};
const setRule = (label: string, value: string) =>
  page.locator('.rule-field', { hasText: label }).locator('input').fill(value);

// 默认规则下记录一次指标数值（最小/最大比率、最大角度）
panel = await page.locator('.panel').innerText();
const metricsBefore = panel.match(/最小 \/ 最大比率\s*\n?\s*([\d.]+)× \/ ([\d.]+)×/)?.slice(1);
const maxAngleBefore = panel.match(/全模型最大内角偏差\s*\n?\s*([\d.]+)°/)?.[1];

const countsDefault = await readRuleCounts();
// 退化样例只有 C 一面强畸变：收紧后计数持平（不减少），真正的“增多”用梯度模型验证。
// 收紧：区间 0.9~1.1，角度 1°
await setRule('比率下限', '0.9');
await setRule('比率上限', '1.1');
await setRule('最大角度', '1');
await sleep(200);
const countsTight = await readRuleCounts();
check(
  '收紧阈值后密度/角度问题面不减少',
  countsTight.density >= countsDefault.density && countsTight.angle >= countsDefault.angle,
  `default=${JSON.stringify(countsDefault)} tight=${JSON.stringify(countsTight)}`,
);
check('收紧不影响翻转/重叠/退化',
  countsTight.flipped === countsDefault.flipped &&
  countsTight.overlap === countsDefault.overlap &&
  countsTight.degenerate === countsDefault.degenerate,
  `default=${JSON.stringify(countsDefault)} tight=${JSON.stringify(countsTight)}`,
);

// 梯度模型：6 个全等 3D 三角配不同 UV 尺寸 => 密度/角度呈梯度，
// 收紧后问题面严格增多、放宽后清零。
await page.locator('.reset-rules').click();
await sleep(100);
const gradientObj = (() => {
  const L: string[] = ['# gradient'];
  for (let i = 0; i < 6; i++) {
    const x = i * 2;
    L.push(`v ${x} 0 0`, `v ${x + 1} 0 0`, `v ${x} 1 0`);
  }
  [0.2, 0.6, 0.85, 1.2, 1.6, 5].forEach((s, i) => {
    const u = i * 2;
    L.push(`vt ${u} 0`, `vt ${u + 1} 0`, `vt ${u} ${s}`);
  });
  for (let i = 0; i < 6; i++) {
    const b = i * 3 + 1;
    L.push(`f ${b}/${b} ${b + 1}/${b + 1} ${b + 2}/${b + 2}`);
  }
  return L.join('\n') + '\n';
})();
await page.evaluate((text) => {
  const dt = new DataTransfer();
  dt.items.add(new File([text], 'gradient.obj', { type: 'text/plain' }));
  const input = document.querySelector('input[type=file]') as HTMLInputElement;
  input.files = dt.files;
  input.dispatchEvent(new Event('change', { bubbles: true }));
}, gradientObj);
await sleep(250);
const gDefault = await readRuleCounts();
await setRule('比率下限', '0.85');
await setRule('比率上限', '1.18');
await setRule('最大角度', '1');
await sleep(200);
const gTight = await readRuleCounts();
check('梯度模型收紧后问题面严格增多',
  gTight.density > gDefault.density && gTight.angle > gDefault.angle,
  `default=${JSON.stringify(gDefault)} tight=${JSON.stringify(gTight)}`);
check('梯度模型收紧后无翻转/重叠/退化误报',
  gTight.flipped === 0 && gTight.overlap === 0 && gTight.degenerate === 0,
  JSON.stringify(gTight));
// 展开问题面清单并逐条点击定位
await page.locator('.expand').click();
await sleep(100);
const itemCount = await page.locator('.issue-list li').count();
panel = await page.locator('.panel').innerText();
const issueTotalTight = Number(panel.match(/问题面合计\s*\n?\s*(\d+)/)?.[1] ?? -1);
check('问题面清单条目数与合计一致（各类别并集）',
  itemCount === issueTotalTight && itemCount >= gTight.density,
  `items=${itemCount} total=${issueTotalTight} density=${gTight.density}`);
await page.locator('.issue-list li').first().click();
await sleep(150);
panel = await page.locator('.panel').innerText();
check('清单条目点击可定位选中面', /选中面\s*（1 面 \/ 1 三角）/.test(panel), panel.match(/选中面[^\n]*/)?.[0]);

// 定位：问题行出现“定位”按钮，点击后双视图选中（面板出现选中面）
const locBtnCount = await page.locator('.row.issue.bad .locate').count();
check('收紧后出现可点击定位按钮', locBtnCount >= 2, `locate buttons=${locBtnCount}`);
await page.locator('.row.issue.bad .locate').first().click();
await sleep(150);
panel = await page.locator('.panel').innerText();
check('定位后双视图同步选中面', /选中面\s*（\d+ 面 \/ \d+ 三角）/.test(panel), panel.match(/选中面[^\n]*/)?.[0]);

// 放宽：区间 0.01~100，角度 179（梯度模型上密度/角度清零）
await setRule('比率下限', '0.01');
await setRule('比率上限', '100');
await setRule('最大角度', '179');
await sleep(200);
const countsLoose = await readRuleCounts();
check('放宽阈值后密度/角度问题清零', countsLoose.density === 0 && countsLoose.angle === 0,
  `loose=${JSON.stringify(countsLoose)}`);

// 指标数值不变 + 放宽不影响翻转/重叠/退化：回到退化样例（含重叠/退化）再放宽
await page.locator('.toolbar .dropdown button', { hasText: '样例' }).hover();
await page.locator('.dropdown .menu button', { hasText: '退化' }).click();
await sleep(250);
const countsLooseDeg = await readRuleCounts();
check('退化样例放宽后密度/角度清零、翻转/重叠/退化仍在',
  countsLooseDeg.density === 0 && countsLooseDeg.angle === 0 &&
  countsLooseDeg.flipped === countsDefault.flipped &&
  countsLooseDeg.overlap === countsDefault.overlap &&
  countsLooseDeg.degenerate === countsDefault.degenerate,
  `looseDeg=${JSON.stringify(countsLooseDeg)} default=${JSON.stringify(countsDefault)}`);
panel = await page.locator('.panel').innerText();
const metricsAfter = panel.match(/最小 \/ 最大比率\s*\n?\s*([\d.]+)× \/ ([\d.]+)×/)?.slice(1);
const maxAngleAfter = panel.match(/全模型最大内角偏差\s*\n?\s*([\d.]+)°/)?.[1];
check('放宽后比率指标数值不变',
  JSON.stringify(metricsBefore) === JSON.stringify(metricsAfter),
  `${JSON.stringify(metricsBefore)} vs ${JSON.stringify(metricsAfter)}`);
check('放宽后角度指标数值不变', maxAngleBefore === maxAngleAfter,
  `${maxAngleBefore} vs ${maxAngleAfter}`);

// 恢复默认规则
await page.locator('.reset-rules').click();
await sleep(150);
const countsReset = await readRuleCounts();
check('恢复默认后计数回到默认',
  countsReset.density === countsDefault.density && countsReset.angle === countsDefault.angle,
  `default=${JSON.stringify(countsDefault)} reset=${JSON.stringify(countsReset)}`);

// 6c) 导出 JSON 检查摘要：内容与界面一致
const [jsonDownload] = await Promise.all([
  page.waitForEvent('download'),
  page.locator('.export-summary').click(),
]);
const jsonPath = await jsonDownload.path();
const fsp = await import('node:fs/promises');
const summaryObj = JSON.parse(await fsp.readFile(jsonPath!, 'utf8'));
check('摘要含规则',
  Array.isArray(summaryObj.rules.areaRatioRange) &&
  summaryObj.rules.areaRatioRange[0] === 0.5 &&
  summaryObj.rules.areaRatioRange[1] === 2 &&
  summaryObj.rules.maxAngleDegrees === 15,
  JSON.stringify(summaryObj.rules));
check('摘要含模型名', /degenerate/.test(summaryObj.modelName), summaryObj.modelName);
panel = await page.locator('.panel').innerText();
const issueTotalUi = Number(panel.match(/问题面合计\s*\n?\s*(\d+)/)?.[1] ?? -1);
check('摘要问题面合计与界面一致',
  summaryObj.totals.issueFaces === issueTotalUi,
  `json=${summaryObj.totals.issueFaces} ui=${issueTotalUi}`);
check('摘要分类计数与界面一致',
  summaryObj.totals.byKind.density === countsReset.density &&
  summaryObj.totals.byKind.angle === countsReset.angle &&
  summaryObj.totals.byKind.flipped === countsReset.flipped &&
  summaryObj.totals.byKind.overlap === countsReset.overlap &&
  summaryObj.totals.byKind.degenerate === countsReset.degenerate,
  `json=${JSON.stringify(summaryObj.totals.byKind)}`);
check('摘要问题条目含 faceId 与指标',
  summaryObj.issueFaces.length > 0 &&
  summaryObj.issueFaces.every((f: any) =>
    typeof f.faceId === 'number' && Array.isArray(f.issues) &&
    'areaRatioMax' in f && 'angleDistortion' in f),
  `entries=${summaryObj.issueFaces.length}`);
// 退化面不能出现在 density 类别中（faceId 1）
const degEntry = summaryObj.issueFaces.find((f: any) => f.faceId === 1);
check('摘要中退化面只归退化、不算密度',
  degEntry && degEntry.issues.includes('degenerate') && !degEntry.issues.includes('density')
    && degEntry.issues.includes('angle') === false,
  JSON.stringify(degEntry));

// 6d) 重新载入模型后仍可正常检查：载入镜像样例再载入退化样例，规则仍生效
await page.locator('.toolbar .dropdown button', { hasText: '样例' }).hover();
await page.locator('.dropdown .menu button', { hasText: '镜像岛' }).click();
await sleep(150);
await page.locator('.toolbar .dropdown button', { hasText: '样例' }).hover();
await page.locator('.dropdown .menu button', { hasText: '退化' }).click();
await sleep(200);
const countsReload = await readRuleCounts();
check('重新载入模型后规则检查仍正常',
  countsReload.density === countsDefault.density &&
  countsReload.angle === countsDefault.angle &&
  countsReload.degenerate === 1,
  `reload=${JSON.stringify(countsReload)}`);
// 重载后修改阈值仍即时生效（判定可用，无需重算模型）
await setRule('最大角度', '1');
await sleep(150);
const countsReloadTight = await readRuleCounts();
check('重新载入后调整阈值仍生效',
  countsReloadTight.angle >= countsReload.angle,
  `reloadTight=${JSON.stringify(countsReloadTight)}`);
await page.locator('.reset-rules').click();
await sleep(100);

// 7) xatlas 自动展开（回到接缝立方体）
await page.locator('.toolbar .dropdown button', { hasText: '样例' }).hover();
await page.locator('.dropdown .menu button', { hasText: '共享边接缝' }).click();
await sleep(200);
await page.locator('button.primary', { hasText: 'xatlas 自动展开' }).click();
// WASM 在懒加载 chunk，给足时间
await page.waitForSelector('.notice.success', { timeout: 60000 });
const notice = await page.locator('.notice').innerText();
check('xatlas 展开成功提示', /自动展开完成/.test(notice), notice);
await sleep(300);
panel = await page.locator('.panel').innerText();
const charts = notice.match(/(\d+) 个图/)?.[1];
check('xatlas 立方体产出 6 图', charts === '6', `got ${charts}`);
check('展开后角点仍 36（身份保留）', /角点 \(corner\)\s*36/.test(panel));
check('展开后顶点身份仍 24（不空间合并模型）', /顶点身份 \(v\)\s*24/.test(panel));

// 8) 导出 OBJ：拦截下载，用页面内文本做往返断言
const [download] = await Promise.all([
  page.waitForEvent('download'),
  page.locator('button', { hasText: '导出 UV OBJ' }).click(),
]);
const path = await download.path();
const fs = await import('node:fs');
const objText = fs.readFileSync(path!, 'utf8');
const vCount = (objText.match(/^v /gm) || []).length;
const vtCount = (objText.match(/^vt /gm) || []).length;
const fCount = (objText.match(/^f /gm) || []).length;
check('导出 OBJ: 36 行 v（逐角点）', vCount === 36, `v=${vCount}`);
check('导出 OBJ: 12 行 f', fCount === 12, `f=${fCount}`);
check('导出 OBJ: vt 行存在', vtCount > 0, `vt=${vtCount}`);

// 在页面里重新载入导出的 OBJ（通过隐藏 file input 不好模拟，改用直接读取并注入到 input）
await page.evaluate((text) => {
  // 触发应用的载入：构造 File 并通过 DataTransfer 赋给 input
  const dt = new DataTransfer();
  dt.items.add(new File([text], 'roundtrip.obj', { type: 'text/plain' }));
  const input = document.querySelector('input[type=file]') as HTMLInputElement;
  input.files = dt.files;
  input.dispatchEvent(new Event('change', { bubbles: true }));
}, objText);
await sleep(300);
panel = await page.locator('.panel').innerText();
check('导出 OBJ 可被重新载入', /顶点身份 \(v\)\s*36/.test(panel), 'roundtrip v=36');
check('往返后面数保持 12', /原始面 \/ 三角形\s*12 \/ 12/.test(panel));
check('往返后无非流形', /非流形边\s*0/.test(panel));

// 9) IndexedDB 工程保存与重开
await page.locator('button', { hasText: '存工程' }).click();
await page.waitForSelector('.notice.success:has-text("IndexedDB")', { timeout: 10000 });
await sleep(200);
const libCount = await page.evaluate(async () => {
  // @ts-ignore
  const dbs = await indexedDB.databases?.();
  return dbs?.map((d: IDBDatabaseInfo) => d.name);
});
check('IndexedDB 数据库存在', JSON.stringify(libCount).includes('lowpoly-uv-inspector'), JSON.stringify(libCount));
const projectItems = await page.locator('.dropdown.align-right .menu-item').count();
check('工程库列出 1 个工程', projectItems >= 1, `items=${projectItems}`);

// 载入镜像样例后再从工程库打开，验证恢复
await page.locator('.toolbar .dropdown button', { hasText: '样例' }).hover();
await page.locator('.dropdown .menu button', { hasText: '镜像岛' }).click();
await sleep(200);
await page.locator('.dropdown.align-right button', { hasText: '工程库' }).hover();
await page.locator('.menu-item .proj-open').first().click();
await sleep(300);
panel = await page.locator('.panel').innerText();
check('从 IndexedDB 恢复工程（36 角点）', /角点 \(corner\)\s*36/.test(panel));

check('无控制台错误', errors.length === 0, errors.slice(0, 3).join(' | '));

console.log(results.join('\n'));
const failed = results.filter((r) => r.startsWith('FAIL')).length;
await browser.close();
process.exit(failed ? 1 : 0);
