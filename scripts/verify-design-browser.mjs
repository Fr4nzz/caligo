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
      assert.equal(await page.locator('.building-item').count(), 4);
      assert.equal(await page.locator('.research-card [data-mcv-next]').count(), 0);
      assert.equal(await page.locator('.research-card picture').count(), 4);
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
      await loadImages();
      assert.equal(await page.locator('h1').count(), 1);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${locale}/${route}: overflow`);
      if (route === 'science') {
        assert.equal(await page.locator('.publication-card').count(), 3);
        assert.equal(await page.locator('.publication-card img').count(), 3);
        assert.ok(await page.locator('.publication-image-wrap').evaluateAll(figures => figures.every(figure => {
          const frame = figure.getBoundingClientRect();
          const image = figure.querySelector('img').getBoundingClientRect();
          return image.height <= frame.height && image.width <= frame.width;
        })), 'Publication images must fit without clipping');
        assert.equal(await page.locator('a[href="https://www.earthbiogenome.org/report-on-assembly-standards"]').count(), 1);
        assert.equal(await page.locator('.concept-diagram, .evidence-pair, [data-mcv-next]').count(), 0);
        assert.equal(await page.locator('.standards-link').getAttribute('target'), '_blank');
        assert.ok(await page.locator('.standards-link').evaluate(el => el.classList.contains('btn')));
        assert.ok(await page.locator('.publication-title').evaluateAll(links => links.every(link => link.target === '_blank')));
      }
      if (route === 'about') {
        assert.equal(await page.locator('.person-card').count(), 8);
        assert.equal(await page.locator('.person-photo').count(), 8);
        assert.equal(await page.locator('.facility-table tbody tr').count(), 8);
        assert.equal(await page.locator('.facility-table tbody a').count(), 9);
      }
      if (route === 'projects') assert.equal(await page.locator('[data-mcv-next]').count(), 0);
      results.push(`${locale}/${route}: mobile page and controls passed`);
    }
  }
  for (const locale of ['en', 'es']) {
    await page.goto(`${base}/${locale}/participate/`);
    assert.equal(await page.locator('.way').count(), 6);
    await page.locator('.way a[href="#contact"]').click();
    assert.equal(await page.locator('#contact').isVisible(), true);
    assert.ok(await page.evaluate(() => document.querySelector('.participation-actions').getBoundingClientRect().top < document.querySelector('#ways-heading').getBoundingClientRect().top));
    await page.goto(`${base}/${locale}/`);
    const closing = page.locator('#discover-caligo');
    assert.equal(await closing.locator('a[href*="docs.google.com/forms"]').count(), 1);
    assert.equal(await closing.locator('a[href="https://discord.gg/gYjjx2FWW"]').count(), 1);
    assert.equal(await closing.locator('.discord-button .discord-icon').count(), 1);
    assert.equal(await closing.locator('a[href^="mailto:"]').count(), 0);
    await page.locator('.research-card a').first().focus();
    assert.equal(await page.locator('.research-card').first().evaluate(el => getComputedStyle(el).boxShadow), 'none');
    await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
    const copyEmail = closing.locator('[data-copy-email]');
    const copyButton = copyEmail.locator('.email-copy-button');
    const copyToast = copyEmail.locator('[data-email-toast]');
    assert.equal(await copyButton.innerText(), 'genomica.neotropical@gmail.com');
    assert.ok((await copyButton.boundingBox()).height >= 44);
    await copyButton.click();
    assert.equal(await page.evaluate(() => navigator.clipboard.readText()), 'genomica.neotropical@gmail.com');
    assert.equal(await copyToast.isVisible(), true);
    await page.waitForFunction(() => /clipboard|portapapeles/.test(document.querySelector('[data-email-toast]:not([hidden])')?.textContent || ''));
    assert.match(await copyToast.innerText(), /clipboard|portapapeles/);
    await page.keyboard.press('Escape');
    assert.equal(await copyToast.isVisible(), false);
    await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', { configurable: true, value: undefined }));
    await copyButton.click();
    await page.waitForFunction(() => /copied|copiado/.test(document.querySelector('[data-email-toast]:not([hidden])')?.textContent || ''));
    assert.match(await copyToast.innerText(), /copied|copiado/);
    await copyEmail.locator('[data-email-dismiss]').click();
    assert.equal(await copyToast.isVisible(), false);
    await page.evaluate(() => { document.execCommand = () => false; });
    await copyButton.click();
    await page.waitForFunction(() => /manually|manualmente/.test(document.querySelector('[data-email-toast]:not([hidden])')?.textContent || ''));
    assert.match(await copyToast.innerText(), /manually|manualmente/);
    assert.equal(await copyEmail.locator('[data-email-fallback]').innerText(), 'genomica.neotropical@gmail.com');
    assert.equal(await copyEmail.locator('[data-email-fallback]').isVisible(), true);
    results.push(`${locale}: Join order, direct Home actions, copy success/fallback/failure and panel focus passed`);
  }
  // ClientRouter navigation must reinitialise controls after leaving Science.
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${base}/en/science/`);
  await page.locator('.primary-nav a').filter({ hasText: /^Home$/ }).click();
  await page.waitForURL(/\/en\/$/);
  await page.locator('.primary-nav a').filter({ hasText: /^Science$/ }).click();
  await page.waitForURL(/\/en\/science\/$/);
  assert.equal(await page.locator('.concept-diagram').count(), 0);
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
  assert.equal(await staticPage.locator('[data-copy-email] .email-copy-button').isVisible(), false);
  assert.ok(await staticPage.locator('[data-copy-email]').innerText());
  await staticPage.goto(`${base}/en/science/`);
  assert.equal(await staticPage.locator('.concept-diagram').count(), 0);
  assert.equal(await staticPage.locator('.publication-card').count(), 3);
  assert.equal(await staticPage.locator('[data-concept-step]').count(), 0);
  await noJS.close();
  results.push('No-JavaScript email and static science content passed');
  assert.deepEqual(errors, [], 'Browser JavaScript errors');
  await writeFile(`${output}/results.json`, JSON.stringify({ base, checkedAt: new Date().toISOString(), results, errors }, null, 2));
  console.log(results.join('\n'));
} finally { await browser.close(); }
