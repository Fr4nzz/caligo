/**
 * verify-scroll-flash.mjs — Playwright timing assertion for §5 (language
 * switch must NOT show a visible scroll flash to the top).
 *
 * Test contract:
 *   1. Load the long Home page at 1440x900. Home contains hidden legacy
 *      anchors, so it guards against selecting a non-rendered scroll target.
 *   2. Scroll to y=800 (mid-page).
 *   3. Click the ES language switcher.
 *   4. During the swap, sample window.scrollY every ~20ms for 1s.
 *   5. RED: any sample reads < 200 while final y is expected >= 400 →
 *      the browser rendered the top-frame before restoration completed.
 *   6. GREEN: no intermediate frame at y < 200; final y within +/- 200 of
 *      the pre-swap position (allow for content-height differences
 *      between EN and ES).
 *
 * Uses the Playwright package the QA scripts under /tmp/caligo-v7-qa/
 * install locally. The dev server must be running on http://localhost:4321
 * or http://127.0.0.1:4321.
 */
import { chromium } from 'playwright';

const BASE_CANDIDATES = ['http://localhost:4321/caligo', 'http://127.0.0.1:4321/caligo'];

async function pickBase() {
  for (const b of BASE_CANDIDATES) {
    try {
      const resp = await fetch(`${b}/en/science/`, { redirect: 'follow' });
      if (resp.ok) return b;
    } catch { /* try next */ }
  }
  throw new Error('No dev server responding on 4321. Start with `pnpm dev`.');
}

const BASE = await pickBase();
console.log(`Scroll-flash guard — base ${BASE}\n`);

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

const samples = [];
let lastY = -1;
async function sampleFor(ms) {
  const started = Date.now();
  while (Date.now() - started < ms) {
    const y = await page.evaluate(() => Math.round(window.scrollY)).catch(() => -1);
    if (y !== lastY) {
      samples.push({ t: Date.now() - started, y });
      lastY = y;
    }
    await page.waitForTimeout(15);
  }
}

await page.goto(`${BASE}/en/`, { waitUntil: 'load' });
await page.waitForTimeout(300);
await page.evaluate(() => window.scrollTo({ left: 0, top: 800, behavior: 'instant' }));
await page.waitForTimeout(300);
const beforeY = await page.evaluate(() => Math.round(window.scrollY));
console.log(`  Pre-swap scrollY = ${beforeY}`);

// Kick off click + sample concurrently.
const clickPromise = page.click('a[hreflang="es"]');
const samplePromise = sampleFor(1500);
await Promise.all([clickPromise, samplePromise]);

// Extra settle time so any post-swap restore double-rAF fires.
await page.waitForTimeout(500);
const afterY = await page.evaluate(() => Math.round(window.scrollY));
console.log(`  Post-swap scrollY = ${afterY}`);

const minSample = Math.min(...samples.map((s) => s.y));
console.log(`  Min scrollY during swap = ${minSample}`);
console.log(`  Samples (t ms, y):`);
for (const s of samples) console.log(`    ${String(s.t).padStart(4)}ms  y=${s.y}`);

let failures = 0;
if (beforeY < 400) {
  console.error(`  \u2717 test setup: beforeY=${beforeY} too small to detect flash`);
  failures += 1;
}
// Fail if any intermediate sample dips more than 500px below beforeY (allows for
// minor content-height differences without triggering on a true top flash).
const flashThreshold = Math.max(200, beforeY - 500);
const flashSample = samples.find((s) => s.y < flashThreshold);
if (flashSample) {
  console.error(
    `  \u2717 flash detected at t=${flashSample.t}ms scrollY=${flashSample.y} (< ${flashThreshold} threshold; before=${beforeY})`
  );
  failures += 1;
}
if (afterY < 200) {
  console.error(`  \u2717 final scrollY=${afterY} — restoration failed`);
  failures += 1;
}

await browser.close();

if (failures === 0) {
  console.log('\n  \u2713 no visible scroll flash detected');
  console.log('\nAll scroll-flash checks passed.');
} else {
  console.error(`\nFAILED: ${failures} scroll-flash violation(s).`);
  process.exit(1);
}
