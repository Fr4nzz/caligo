/** Run against pnpm preview; use an existing Playwright installation via PLAYWRIGHT_MODULE. */
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.REVIEW_URL || 'http://localhost:4328/caligo';
const output = '.work/design-review';
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true });
const results = [];
const errors = [];
const page = await browser.newPage();
page.on('pageerror', error => errors.push(error.message));
async function loadImages() {
  await page.evaluate(async () => {
    document.querySelectorAll('img').forEach(image => image.loading = 'eager');
    await Promise.all([...document.images].filter(image => image.getAttribute("src")).map(image => image.decode()));
    await document.fonts.ready;
  });
}
try {
  for (const locale of ['en', 'es']) {
    for (const width of [320, 390, 960, 961, 1024, 1440, 1920]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`${base}/${locale}/?mode=light`);
      await loadImages();
      const geometry = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        titles: document.querySelectorAll('h1').length,
        cards: document.querySelectorAll('.research-card').length,
        copy: document.querySelector('.hero-copy').getBoundingClientRect().toJSON(),
        credit: document.querySelector('.hero-attribution').getBoundingClientRect().toJSON(),
        image: document.querySelector('.hero-media-frame').getBoundingClientRect().toJSON(),
      }));
      assert.equal(geometry.overflow, false, `${locale} ${width}: horizontal overflow`);
      assert.equal(geometry.titles, 1);
      assert.equal(geometry.cards, 4);
      assert.ok(geometry.copy.bottom < geometry.credit.top, `${locale} ${width}: credit overlaps copy`);
      if (width <= 960) {
        assert.ok(geometry.copy.top >= geometry.image.bottom, 'Mobile copy covers photograph');
        assert.ok(geometry.copy.left >= 20 && geometry.copy.right <= width - 20, 'Mobile hero needs side padding');
        assert.equal(await page.locator('.hero-cinematic').evaluate(el => getComputedStyle(el).backgroundColor), 'rgb(0, 0, 0)');
      }
      if ([390, 1440].includes(width)) await page.screenshot({ path: `${output}/${locale}-${width}-light.png`, fullPage: true });
      results.push(`${locale} ${width}px: images, overflow, title, four projects, hero geometry passed`);
    }
  }
  await page.setViewportSize({ width: 1440, height: 900 });
  for (const palette of ['caligo', 'canopy', 'morpho']) {
    for (const mode of ['light', 'dark']) {
      await page.goto(`${base}/en/?palette=${palette}&mode=${mode}`);
      assert.equal(await page.locator('html').getAttribute('data-palette'), palette);
      assert.equal(await page.locator('html').getAttribute('data-mode'), mode);
      assert.equal(await page.locator('.wing-study').count(), 0);
      results.push(`${palette}/${mode}: theme and removed wing study passed`);
    }
  }
  await page.goto(`${base}/en/?mode=dark&palette=caligo`);
  await loadImages();
  await page.screenshot({ path: `${output}/en-1440-dark.png`, fullPage: true });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  assert.equal(await page.locator('[data-open-lens]').count(), 0);
  for (const locale of ['en', 'es']) {
    for (const route of ['science', 'projects', 'about', 'participate']) {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(`${base}/${locale}/${route}/`);
      assert.equal(await page.locator('h1').count(), 1);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${locale}/${route}: overflow`);
      if (route === 'science') {
        await page.locator('[data-concept-play]').first().click();
        assert.equal(await page.locator('.concept-diagram.is-playing').count(), 0);
        assert.match(await page.locator('[data-concept-play-label]').first().innerText(), /Replay|Repetir/);
      }
      results.push(`${locale}/${route}: mobile page and controls passed`);
    }
  }
  for (const locale of ['en', 'es']) {
    await page.goto(`${base}/${locale}/participate/`);
    assert.ok(await page.evaluate(() => document.querySelector('.participation-actions').getBoundingClientRect().top < document.querySelector('#ways-heading').getBoundingClientRect().top));
    await page.goto(`${base}/${locale}/`);
    const closing = page.locator('#discover-caligo');
    assert.equal(await closing.locator('a[href*="docs.google.com/forms"]').count(), 1);
    assert.equal(await closing.locator('a[href*="discord.gg"]').count(), 1);
    assert.equal(await closing.locator('a[href^="mailto:"]').count(), 0);
    await page.locator('.research-card [data-mcv-next]').first().focus();
    assert.equal(await page.locator('.research-card').first().evaluate(el => getComputedStyle(el).boxShadow), 'none');
    await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
    await closing.locator('[data-copy-email] button').click();
    assert.equal(await page.evaluate(() => navigator.clipboard.readText()), 'genomica.neotropical@gmail.com');
    await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', { configurable: true, value: undefined }));
    await closing.locator('[data-copy-email] button').click();
    assert.match(await closing.locator('[role="status"]').innerText(), /copied|copiado/);
    await page.evaluate(() => { document.execCommand = () => false; });
    await closing.locator('[data-copy-email] button').click();
    assert.match(await closing.locator('[role="status"]').innerText(), /manually|manualmente/);
    results.push(`${locale}: Join order, direct Home actions, copy success/fallback/failure and panel focus passed`);
  }
  // ClientRouter navigation must reinitialise controls after leaving Science.
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${base}/en/science/`);
  await page.locator('.primary-nav a').filter({ hasText: /^Home$/ }).click();
  await page.waitForURL(/\/en\/$/);
  await page.locator('.primary-nav a').filter({ hasText: /^Science$/ }).click();
  await page.waitForURL(/\/en\/science\/$/);
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.locator('[data-concept-play]').first().click();
  assert.equal(await page.locator('.concept-diagram.is-playing').count(), 1);
  await page.waitForFunction(() => !document.querySelector('.concept-diagram.is-playing'), { }, { timeout: 7000 });
  assert.equal(await page.locator('[data-concept-play-label]').first().innerText(), 'Replay');
  await page.locator('[data-concept-play]').first().click();
  assert.equal(await page.locator('.concept-diagram.is-playing').count(), 1);
  await page.locator('.concept-diagram').first().screenshot({ path: `${output}/science-original.png` });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${base}/en/`);
  const menu = page.locator('[data-menu-toggle]');
  await menu.click();
  assert.equal(await menu.getAttribute('aria-expanded'), 'true');
  await page.keyboard.press('Escape');
  assert.equal(await menu.getAttribute('aria-expanded'), 'false');
  results.push('Astro navigation, reduced motion, mobile menu and Escape passed');
  const noJS = await browser.newContext({ javaScriptEnabled: false });
  const staticPage = await noJS.newPage();
  await staticPage.goto(`${base}/en/`);
  assert.equal(await staticPage.locator('[data-copy-email] button').isVisible(), false);
  assert.ok(await staticPage.locator('[data-copy-email]').innerText());
  await staticPage.goto(`${base}/en/science/`);
  assert.ok(await staticPage.locator('.concept-diagram').count() > 0);
  assert.equal(await staticPage.locator('[data-concept-step]').count(), 0);
  await noJS.close();
  results.push('No-JavaScript email and static science content passed');
  assert.deepEqual(errors, [], 'Browser JavaScript errors');
  await writeFile(`${output}/results.json`, JSON.stringify({ base, checkedAt: new Date().toISOString(), results, errors }, null, 2));
  console.log(results.join('\n'));
} finally { await browser.close(); }
