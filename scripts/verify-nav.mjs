/**
 * verify-nav.mjs — TDD lock for the first-release primary nav.
 *
 * Parses the built <nav class="primary-nav"> block in every locale entry
 * page and asserts:
 *   • exactly 6 <a> children (Home, Science, Pilots, Network, About, Participate);
 *   • none of them link to /capacity/ (a compat page kept out of the primary
 *     nav; /network is now a real primary-nav route).
 *
 * Runs post-build so it needs `dist/`. If `dist/` is missing it treats
 * that as a build precondition failure — do not silently pass.
 */
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

let failures = 0;
const fail = (msg) => {
  failures += 1;
  console.error(`  ✗ ${msg}`);
};
const pass = (msg) => console.log(`  ✓ ${msg}`);

console.log('Primary nav checks\n');

const distRoot = resolve(root, 'dist');
if (!existsSync(distRoot)) {
  fail('dist/ is missing — run `pnpm build` before this script');
  process.exit(1);
}

const pages = [
  { path: 'dist/en/index.html', label: 'EN home' },
  { path: 'dist/es/index.html', label: 'ES home' },
];

const navBlockRe = /<nav[^>]*class=["'][^"']*primary-nav[^"']*["'][^>]*>([\s\S]*?)<\/nav>/;
const anchorRe = /<a\b([^>]*?)>([^<]*)<\/a>/g;

for (const { path, label } of pages) {
  const abs = resolve(root, path);
  if (!existsSync(abs)) {
    fail(`${label}: file ${path} not found`);
    continue;
  }
  const html = readFileSync(abs, 'utf8');
  const match = html.match(navBlockRe);
  if (!match) {
    fail(`${label}: primary-nav <nav> block not found`);
    continue;
  }
  const navHtml = match[1];
  const anchors = Array.from(navHtml.matchAll(anchorRe));
  if (anchors.length !== 6) {
    fail(`${label}: expected 6 primary-nav anchors, got ${anchors.length}`);
  } else {
    pass(`${label}: 6 primary-nav anchors`);
  }
  const attrsRe = /href=["']([^"']+)["']/;
  const hrefs = anchors.map((a) => a[1].match(attrsRe)?.[1] ?? '');
  const forbidden = hrefs.filter((h) => /\/capacity\//.test(h));
  if (forbidden.length) {
    fail(`${label}: primary-nav includes forbidden href(s): ${forbidden.join(', ')}`);
  } else {
    pass(`${label}: no /capacity/ in primary nav`);
  }
}

if (failures) {
  console.error(`\nFAILED: ${failures} primary-nav check(s).`);
  process.exit(1);
}
console.log('\nAll primary-nav checks passed.');
