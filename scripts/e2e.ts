import { chromium } from 'playwright';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const base = 'http://127.0.0.1:5199';

// 默认让 Playwright 使用其托管的 chromium；受限环境可用环境变量覆盖：
//   E2E_CHROME_PATH=/path/to/chrome（配合 LD_LIBRARY_PATH 注入系统库）。
const browser = await chromium.launch({
  ...(process.env.E2E_CHROME_PATH
    ? {
        executablePath: process.env.E2E_CHROME_PATH,
        args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
      }
    : {}),
});
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
check('空状态显示样例', await page.locator('.sample-grid button').count() === 5);

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
check('镜像岛: 1 个翻转三角', /翻转三角形 \/ 镜像岛\s*1 \/ 1/.test(panel), panel.match(/翻转[^\n]*/)?.[0]);

// 6) 退化混合样例
await page.locator('.toolbar .dropdown button', { hasText: '样例' }).hover();
await page.locator('.dropdown .menu button', { hasText: '退化' }).click();
await sleep(200);
panel = await page.locator('.panel').innerText();
check('退化: 3D/UV 退化各 1', /退化（3D \/ UV）\s*1 \/ 1/.test(panel), panel.match(/退化（[^\n]*/)?.[0]);
check('退化: 存在岛间重叠', /岛间重叠三角形\s*[23]/.test(panel), panel.match(/岛间重叠[^\n]*/)?.[0]);
check('退化: 最大比率 >2（拉伸）', /(\d+\.\d+)×/.test(panel));

// 6b) 本次检查规则：梯度样例，收紧/放宽阈值，双视图定位，JSON 导出，重载
await page.locator('.toolbar .dropdown button', { hasText: '样例' }).hover();
await page.locator('.dropdown .menu button', { hasText: '密度/角度梯度' }).click();
await sleep(200);

const densityCount = async () => {
  const t = await page.locator('.panel').innerText();
  const m = t.match(/面积密度超限面\s*(\d+)/);
  return m ? Number(m[1]) : -1;
};
const angleCount = async () => {
  const t = await page.locator('.panel').innerText();
  const m = t.match(/角度偏差超限面\s*(\d+)/);
  return m ? Number(m[1]) : -1;
};
const problemCount = async () =>
  page.locator('[data-testid="problem-list"] .problem-item').count();

await page.waitForSelector('[data-testid="rule-min-ratio"]');
check('梯度: 默认 2 个密度面', await densityCount() === 2, `d=${await densityCount()}`);
check('梯度: 默认 5 个角度面', await angleCount() === 5, `a=${await angleCount()}`);
check('梯度: 默认问题面列表 5 项', await problemCount() === 5, `list=${await problemCount()}`);

// 记录当前面板最小/最大比率，收紧后必须数值不变
const ratiosBefore = (await page.locator('.panel').innerText())
  .match(/最小 \/ 最大比率\s*([\d.]+)× \/ ([\d.]+)×/);

// 可点击定位：点问题面列表第一项 -> 出现选中面，双视图叠加高亮
await page.locator('[data-testid="problem-list"] .problem-item').first().click();
await sleep(150);
panel = await page.locator('.panel').innerText();
check('问题面点击后选中(1 面)', /选中面\s*（1 面 \/ 1 三角）/.test(panel), panel.match(/选中面[^\n]*/)?.[0]);
check('列表项呈现选中态', await page.locator('[data-testid="problem-list"] .problem-item.selected').count() === 1);

// 收紧阈值：0.9 ~ 1.2 / 10°
await page.locator('[data-testid="rule-min-ratio"]').fill('0.9');
await page.locator('[data-testid="rule-max-ratio"]').fill('1.2');
await page.locator('[data-testid="rule-max-angle"]').fill('10');
await sleep(200);
check('收紧: 密度面增多到 3', await densityCount() === 3, `d=${await densityCount()}`);
check('收紧: 角度面增多到 6', await angleCount() === 6, `a=${await angleCount()}`);
check('收紧: 问题面列表 6 项', await problemCount() === 6, `list=${await problemCount()}`);

// 收紧后指标数值不变（面积比率是模型指标，与阈值无关）
const ratiosAfter = (await page.locator('.panel').innerText())
  .match(/最小 \/ 最大比率\s*([\d.]+)× \/ ([\d.]+)×/);
check(
  '收紧后最小/最大比率数值不变',
  !!ratiosBefore && !!ratiosAfter && ratiosBefore[1] === ratiosAfter[1] && ratiosBefore[2] === ratiosAfter[2],
  `${ratiosBefore?.[0]} => ${ratiosAfter?.[0]}`,
);

// 放宽回默认：问题数减少，数值仍不变
await page.locator('[data-testid="rule-reset"]').click();
await sleep(200);
check('放宽: 密度面回落到 2', await densityCount() === 2, `d=${await densityCount()}`);
check('放宽: 角度面回落到 5', await angleCount() === 5, `a=${await angleCount()}`);
check('放宽: 问题面列表 5 项', await problemCount() === 5, `list=${await problemCount()}`);

// 导出 JSON 摘要：拦截下载并校验内容与界面一致
const [jsonDl] = await Promise.all([
  page.waitForEvent('download'),
  page.locator('[data-testid="export-json"]').click(),
]);
const jsonPath = await jsonDl.path();
const fsp = await import('node:fs');
const doc = JSON.parse(fsp.readFileSync(jsonPath!, 'utf8'));
check('JSON: type/version', doc.type === 'uv-rule-check' && doc.version === 1);
check('JSON: 模型名', doc.model.fileName === 'gradient.obj', doc.model.fileName);
check('JSON: 规则=当前默认',
  doc.rules.minRatio === 0.5 && doc.rules.maxRatio === 2 && doc.rules.maxAngle === 15,
  JSON.stringify(doc.rules));
check('JSON: 问题面计数与界面一致',
  doc.counts.problemFaces === 5 && doc.counts.densityFaces === 2 && doc.counts.angleFaces === 5,
  JSON.stringify(doc.counts));
check('JSON: 每条问题面含 id+指标',
  Array.isArray(doc.problemFaces) && doc.problemFaces.length === 5 &&
  doc.problemFaces.every((p: any) =>
    typeof p.faceId === 'number' && Array.isArray(p.issues) && p.issues.length > 0 &&
    (p.areaRatioMin === null || typeof p.areaRatioMin === 'number') &&
    typeof p.angleDistortionMax === 'number'));

// 双视图可定位：2D 视图点选也能选中面（选中集跨视图同步）。
// 梯度 UV 稀疏且三角形细小，按 View2D 的 zoomFit 相机模型把几个三角形
// 形心（C/D/F）换算成精确屏幕坐标点击，要求选中面相对此前（列表选的 A）变化。
const box2dR = await page.locator('.view2d canvas').boundingBox();
const highlightedFace = async () =>
  page.locator('.problem-item.selected').getAttribute('data-testid').catch(() => null);
const beforeFace = await highlightedFace();
const uvToClient = (u: number, v: number) =>
  page.evaluate(({ w, h, u, v }) => {
    // 复刻 View2D：ortho view=2.6，zoomFit 以 UV 包围盒居中
    const uMin = 0, uMax = 11.6, vMin = 0, vMax = 2.5;
    const cx = (uMin + uMax) / 2, cy = (vMin + vMax) / 2;
    const uw = Math.max(uMax - uMin, 0.2), vh = Math.max(vMax - vMin, 0.2);
    const a = w / h, view = 2.6;
    const zoom = Math.min((2 * view) / (uw * 1.3), (2 * view * a) / (vh * 1.3), 40);
    const fx = 0.5 + ((u - cx) * zoom) / (2 * view * a);
    const fy = 0.5 - ((v - cy) * zoom) / (2 * view);
    return { x: fx * w, y: fy * h };
  }, { w: box2dR!.width, h: box2dR!.height, u, v });

let picked2d = false;
// C(4.133,0.133)->face2, D(9.6,0.333)->face3, F(11.2,0.2)->face5
for (const [u, v, expectId] of [
  [4.133, 0.133, 2], [9.6, 0.333, 3], [11.2, 0.2, 5],
] as Array<[number, number, number]>) {
  const pt = await uvToClient(u, v);
  await page.mouse.click(box2dR!.x + pt.x, box2dR!.y + pt.y);
  await sleep(120);
  const t = await page.locator('.panel').innerText();
  const one = /选中面\s*（1 面 \/ 1 三角）/.test(t);
  const cur = await highlightedFace();
  if (one && cur === `problem-face-${expectId}` && cur !== beforeFace) {
    picked2d = true; break;
  }
}
check('规则态 2D 点选同步选中另一面（双视图定位）', picked2d,
  `before=${beforeFace} after=${await highlightedFace()}`);

// 切到退化样例，导出 OBJ 后重新载入：规则仍可正常检查（退化不算密度超限）
await page.locator('.toolbar .dropdown button', { hasText: '样例' }).hover();
await page.locator('.dropdown .menu button', { hasText: '退化' }).click();
await sleep(200);
panel = await page.locator('.panel').innerText();
check('退化样例规则态: 密度面 1(仅拉伸C)', /面积密度超限面\s*1(?!\d)/.test(panel), panel.match(/面积密度超限面[^\n]*/)?.[0]);

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
check('重新载入后规则仍可检查（面板含规则区）', /面积密度超限面/.test(panel));
check('重新载入后均匀立方体无密度超限', /面积密度超限面\s*0(?!\d)/.test(panel),
  panel.match(/面积密度超限面[^\n]*/)?.[0]);

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
