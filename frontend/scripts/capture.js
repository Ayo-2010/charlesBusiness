const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const url = process.env.URL || 'http://127.0.0.1:5173';
  const outDir = path.join(__dirname, '..', 'screenshots');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const viewports = [
    { name: 'phone-375x812', width: 375, height: 812 },
    { name: 'phone-414x896', width: 414, height: 896 },
    { name: 'tablet-768x1024', width: 768, height: 1024 },
    { name: 'desktop-1024x768', width: 1024, height: 768 },
    { name: 'desktop-1440x900', width: 1440, height: 900 },
  ];

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const vp of viewports) {
    console.log(`Capturing ${vp.name} (${vp.width}x${vp.height})`);
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto(url, { waitUntil: 'networkidle' });
    // small delay to allow animations to settle
    await page.waitForTimeout(500);
    const file = path.join(outDir, `home-${vp.name}.png`);
    await page.screenshot({ path: file, fullPage: true });
    console.log(`Saved ${file}`);
  }

  await browser.close();
  console.log('Screenshots complete.');
})();
