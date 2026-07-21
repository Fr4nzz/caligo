/**
 * verify-disclosure-contract.mjs — the three disclosure surfaces on
 * Home, Science and Projects must share the same class contract.
 *
 * Spec (v7.1 brief, "Shared disclosure component"):
 *   • Home scientific questions, Science scientific questions, and
 *     Projects "Evidence / genome contribution / limits" must use ONE
 *     shared disclosure behavior/style contract.
 *   • The shared contract is provided by src/styles/disclosure.css using
 *     the class names `.disclosure`, `.disclosure-summary`,
 *     `.disclosure-body` (and optional variants `.disclosure--boxed`,
 *     `.disclosure--compact`).
 *   • Each of the three page components must reference these classes
 *     (either directly in JSX or via a wrapper), and none may keep its
 *     old per-page disclosure classes as the primary selector.
 */
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const SHARED_CSS_PATH = resolve(root, 'src/styles/disclosure.css');
/*
 * v7.2: HomePage removed from the required-list. After the compact
 * six-module rewrite, Home renders question TEASERS (compact links to
 * Science) rather than full disclosures — a deliberate compression
 * decision per normal-Pro §3.3. Science and Projects still need the
 * shared class; if you re-add disclosures to Home later, put HomePage
 * back in this list.
 */
const PAGES = [
  { file: 'src/components/pages/SciencePage.astro',  label: 'SciencePage'  },
  { file: 'src/components/pages/ProjectsPage.astro', label: 'ProjectsPage' },
];

let failures = 0;
const fail = (msg) => { failures += 1; console.error(`  ✗ ${msg}`); };
const pass = (msg) => console.log(`  ✓ ${msg}`);

console.log('Disclosure-contract checks\n');

// Shared CSS must exist and expose the class contract.
if (!existsSync(SHARED_CSS_PATH)) {
  fail('src/styles/disclosure.css missing');
} else {
  const css = readFileSync(SHARED_CSS_PATH, 'utf8');
  for (const cls of ['.disclosure', '.disclosure-summary', '.disclosure-body']) {
    if (css.includes(cls)) pass(`disclosure.css defines ${cls}`);
    else fail(`disclosure.css missing selector ${cls}`);
  }
  if (/@media \(prefers-reduced-motion:\s*reduce\)/.test(css)) {
    pass('disclosure.css respects prefers-reduced-motion: reduce');
  } else {
    fail('disclosure.css missing @media (prefers-reduced-motion: reduce) block');
  }
  if (/interpolate-size:\s*allow-keywords/.test(css)) {
    pass('disclosure.css opts into interpolate-size for smooth open/close');
  } else {
    fail('disclosure.css missing `interpolate-size: allow-keywords`');
  }
}

// Each of the three pages must reference the shared classes.
for (const { file, label } of PAGES) {
  const p = resolve(root, file);
  if (!existsSync(p)) { fail(`${label}: source missing at ${file}`); continue; }
  const src = readFileSync(p, 'utf8');
  const hasDisclosureClass = /class(:list)?=\{?[^}]*"[^"]*\bdisclosure\b[^"]*"/.test(src)
                           || /class(:list)?="[^"]*\bdisclosure\b[^"]*"/.test(src);
  if (hasDisclosureClass) pass(`${label}: references shared .disclosure class`);
  else fail(`${label}: does not reference shared .disclosure class`);
}

if (failures === 0) {
  console.log('\nAll disclosure-contract checks passed.');
} else {
  console.error(`\nFAILED: ${failures} disclosure-contract check(s).`);
  process.exit(1);
}
