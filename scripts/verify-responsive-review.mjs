import assert from 'node:assert/strict';
import {mkdir} from 'node:fs/promises';
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const base=process.env.REVIEW_URL||'http://127.0.0.1:4333/caligo';
await mkdir('.work/responsive',{recursive:true});
const browser=await chromium.launch({headless:true});
try {
 for(const locale of ['en','es']) for(const width of [320,390,576,600,640,768,960,1024,1440]) {
  const page=await browser.newPage({viewport:{width,height:900},colorScheme:'dark',reducedMotion:'reduce'});
  await page.goto(`${base}/${locale}/`);await page.evaluate(()=>document.fonts.ready);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`${locale} ${width} overflow`);
  const cards=page.locator('.metric-card__link');assert.equal(await cards.count(),4);
  const boxes=await cards.evaluateAll(xs=>xs.map(x=>({x:x.getBoundingClientRect().x,y:x.getBoundingClientRect().y})));
  assert.equal(boxes[0].y===boxes[2].y,width>1120,`${width}: statistic columns`);
  assert.equal(boxes[0].y===boxes[1].y,width>576,`${width}: phone card column`);
  const heights=await cards.evaluateAll(xs=>xs.map(x=>x.getBoundingClientRect().height));
  assert.ok(Math.max(...heights)-Math.min(...heights)<1,`${width}: equal card heights`);
  assert.match(await cards.nth(2).innerText(),/17/);
  for(const a of await cards.all()) {
   const href=await a.getAttribute('href');const response=await page.request.get(new URL(href,base).href);assert.equal(response.status(),200);
  }
  assert.equal(await page.locator('footer nav,footer [data-copy-email]').count(),0);
  if(width<1120){
   await page.locator('[aria-controls="mobile-nav"]').click();
   const nav=page.locator('.mobile-nav');
   const grid=await nav.locator('ul').evaluate(x=>getComputedStyle(x).gridTemplateColumns.split(' ').length);assert.equal(grid,2);
   await page.locator('.mobile-nav a').last().waitFor({state:'visible'});
   assert.ok((await nav.boundingBox()).height>100);
   await page.screenshot({path:`.work/responsive/${locale}-${width}-menu.png`});
   await page.keyboard.press('Escape');
  }
  if([390,960,1440].includes(width)){
   await page.locator('.metric-cards').screenshot({path:`.work/responsive/${locale}-${width}-stats.png`});
   await page.locator('footer').screenshot({path:`.work/responsive/${locale}-${width}-footer.png`});
  }
  if([390,960,1440].includes(width))await page.screenshot({path:`.work/responsive/${locale}-${width}.png`,fullPage:true});
  await page.close();
 }
 console.log('EN/ES responsive layout, statistic destinations and compact footer passed.');
}finally{await browser.close()}
