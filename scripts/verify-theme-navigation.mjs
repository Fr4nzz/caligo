import assert from 'node:assert/strict';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.REVIEW_URL || 'http://127.0.0.1:4330/caligo';
const browser = await chromium.launch({headless:true});
try {
 for (const colorScheme of ['dark','light']) {
  const context=await browser.newContext({colorScheme,viewport:{width:1440,height:900}});
  const page=await context.newPage();
  await page.goto(`${base}/en/about/`);
  const mode=()=>page.locator('html').getAttribute('data-mode');
  assert.equal(await mode(),colorScheme);
  await page.locator('.primary-nav a').filter({hasText:'Science'}).click();
  await page.waitForURL('**/en/science/');
  assert.equal(await mode(),colorScheme,'fresh system preference survives navigation');
  assert.equal(await page.evaluate(()=>localStorage.getItem('caligo-mode')),null);
  await page.locator('[data-mode-toggle]').click();
  const chosen=colorScheme==='dark'?'light':'dark';
  await page.locator('.primary-nav a').filter({hasText:'Home'}).click();
  await page.waitForURL('**/en/');
  assert.equal(await mode(),chosen,'explicit selection survives navigation');
  await page.reload();assert.equal(await mode(),chosen);
  await context.close();
 }
 console.log('Fresh system theme and explicit preferences survive navigation and reload.');
} finally {await browser.close();}
