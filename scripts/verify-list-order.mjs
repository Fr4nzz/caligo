/**
 * verify-list-order.mjs — DOM order regression guard for the numbered
 * provenance list on the Science page.
 *
 * Spec (v7.1 brief, "Reading order"):
 *   - The <ol class="provenance-list"> under the heading
 *     "Keep the organism, the evidence and the permissions connected"
 *     must render every item in strict DOM order 01, 02, 03, ..., N.
 *   - Visual layout may put the first half in the left column and the
 *     second half in the right column (column-first flow), but DOM /
 *     screen-reader order must remain 01, 02, 03, ..., N sequentially.
 *   - Any use of CSS `order:` on provenance children is a regression
 *     because it can make visual order disagree with DOM order.
 *
 * How it checks:
 *   1. Parses dist/en/science/index.html and dist/es/science/index.html.
 *   2. Extracts the first <ol class="provenance-list"> element.
 *   3. Reads each <li>'s <span class="prov-index"> text (the 01/02/...
 *      badge rendered by SciencePage.astro).
 *   4. Asserts the sequence is exactly 01, 02, 03, ..., seen.length
 *      (sequential; no gaps; no reordering).
 *   5. Sanity-checks the source CSS for a `.provenance-list` block that
 *      does NOT set `order:` on any child, and DOES use a column-first
 *      flow declaration (column-count OR grid-auto-flow:column).
 */
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const LIST_RE = /<ol[^>]*class="[^"]*\bprovenance-list\b[^"]*"[^>]*>([\s\S]*?)<\/ol>/i;
const INDEX_RE = /<span[^>]*class="[^"]*\bprov-index\b[^"]*"[^>]*>\s*(\d{1,3})\s*<\/span>/gi;

function extractIndices(html, label) {
  const listMatch = LIST_RE.exec(html);
  if (!listMatch) return { ok: false, reason: `${label}: <ol class="provenance-list"> not found` };
  INDEX_RE.lastIndex = 0;
  const seen = [];
  let m;
  while ((m = INDEX_RE.exec(listMatch[1])) !== null) seen.push(m[1]);
  return { ok: true, seen };
}

function expectedSequence(n) {
  return Array.from({ length: n }, (_, i) => String(i + 1).padStart(2, '0'));
}

let failures = 0;
const fail = (msg) => { failures += 1; console.error(`  ✗ ${msg}`); };
const pass = (msg) => console.log(`  ✓ ${msg}`);

console.log('Provenance-list DOM order checks (post-build)\n');

for (const locale of ['en', 'es']) {
  const path = resolve(root, 'dist', locale, 'science', 'index.html');
  if (!existsSync(path)) { fail(`dist/${locale}/science/index.html missing — run \`pnpm build\``); continue; }
  const html = readFileSync(path, 'utf8');
  const res = extractIndices(html, `${locale}/science`);
  if (!res.ok) { fail(res.reason); continue; }
  const seen = res.seen;
  if (seen.length < 2) {
    fail(`${locale}/science: provenance-list has ${seen.length} item(s) — expected ≥ 2 for column-first flow`);
    continue;
  }
  const expected = expectedSequence(seen.length);
  const ok = seen.every((s, i) => s === expected[i]);
  if (!ok) {
    fail(`${locale}/science: DOM order [${seen.join(', ')}] ≠ sequential [${expected.join(', ')}]`);
  } else {
    pass(`${locale}/science: provenance-list DOM order is 01 → ${expected[expected.length - 1]} (sequential)`);
  }
}

// Source-CSS sanity on SciencePage.astro:
//   1. no `order:` used on provenance children (DOM/visual order must not diverge)
//   2. a column-first flow declaration exists (column-count or grid-auto-flow:column)
const sciencePath = resolve(root, 'src/components/pages/SciencePage.astro');
if (existsSync(sciencePath)) {
  const src = readFileSync(sciencePath, 'utf8');
  const provBlock = /\.provenance-list[\s\S]{0,1600}/.exec(src);
  if (provBlock) {
    if (/\border\s*:\s*[-\d]/.test(provBlock[0])) {
      fail('SciencePage.astro provenance-list CSS uses `order:` — DOM/visual order may diverge');
    } else {
      pass('SciencePage.astro provenance-list CSS does not use `order:`');
    }
    const hasColumnCount = /column-count\s*:\s*\d/.test(provBlock[0]);
    const hasGridColumn = /grid-auto-flow\s*:\s*column/.test(provBlock[0]);
    if (hasColumnCount || hasGridColumn) {
      pass(
        `SciencePage.astro provenance-list uses column-first flow (${hasColumnCount ? 'column-count' : 'grid-auto-flow:column'})`
      );
    } else {
      fail(
        'SciencePage.astro provenance-list CSS lacks a column-first flow declaration (column-count or grid-auto-flow:column)'
      );
    }
  } else {
    fail('SciencePage.astro has no `.provenance-list` CSS block');
  }
}

if (failures === 0) {
  console.log('\nAll list-order checks passed.');
} else {
  console.error(`\nFAILED: ${failures} list-order check(s).`);
  process.exit(1);
}
