/**
 * verify-section-rail.mjs — TDD locks for SectionRail scope + behaviour.
 *
 *   Scope
 *   • src/components/SectionRail.astro exists.
 *   • Opt-in per §5 — one small allowlist decides which page components
 *     import it. Currently allowed: NetworkPage, SciencePage.
 *     Everything else must NOT import it.
 *
 *   Behaviour
 *   • Reduced-motion preservation (GPT Pro brief §5 finding #14, §7.5):
 *     the IntersectionObserver + aria-current="location" MUST continue to
 *     run under prefers-reduced-motion. Only animated behaviour should be
 *     gated by the media query. Guard: the script MUST NOT contain a bare
 *     early-return on prefers-reduced-motion. Motion is still handled in
 *     CSS by media queries where appropriate.
 */
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

let failures = 0;
const fail = (msg) => { failures += 1; console.error(`  ✗ ${msg}`); };
const pass = (msg) => console.log(`  ✓ ${msg}`);

console.log('Section-rail scope checks\n');

const railPath = resolve(root, 'src/components/SectionRail.astro');
if (!existsSync(railPath)) fail('src/components/SectionRail.astro missing');
else pass('SectionRail.astro exists');

const importRe = /from\s+['"](\.\.\/SectionRail\.astro|\.\.\/\.\.\/components\/SectionRail\.astro)['"]/;
const sharedLayoutRe = /class=["'][^"']*\bsection-rail-layout\b/;
const wideLayoutRe = /class=["'][^"']*\bsection-rail-layout--wide\b/;

// v7.3.1 corrected opt-in scope: rail on Science + Projects only. Home
// initially received a rail in v7.3 but the ~230 px empty band above the
// cinematic hero at 390/768/1440 px broke the intended Project-Psyche
// opening; the Home rail was removed. Science and Projects keep their
// rails because their layered/record structures materially benefit from
// section-by-section navigation.
const shouldImport = ['SciencePage.astro', 'ProjectsPage.astro'];
const shouldNotImport = [
  'HomePage.astro',
  'AboutPage.astro',
  'NamesakePage.astro',
  'ParticipatePage.astro',
];

for (const f of shouldImport) {
  const p = resolve(root, 'src/components/pages', f);
  if (!existsSync(p)) { fail(`${f} missing`); continue; }
  const src = readFileSync(p, 'utf8');
  if (importRe.test(src)) pass(`${f} imports SectionRail`);
  else fail(`${f} must import SectionRail`);
  if (sharedLayoutRe.test(src)) pass(`${f} uses the shared section-rail layout`);
  else fail(`${f} must use the shared section-rail layout`);
  if (wideLayoutRe.test(src)) pass(`${f} uses the space-efficient wide rail layout`);
  else fail(`${f} must use the space-efficient wide rail layout`);
}

const globalPath = resolve(root, 'src/styles/global.css');
if (!existsSync(globalPath)) {
  fail('src/styles/global.css missing');
} else {
  const globalCss = readFileSync(globalPath, 'utf8');
  if (/grid-template-columns:\s*12rem\s+minmax\(0,\s*1fr\)/.test(globalCss)) {
    pass('shared rail layout uses the compact 12rem desktop column');
  } else {
    fail('shared rail layout must use a compact 12rem desktop column');
  }
}
for (const f of shouldNotImport) {
  const p = resolve(root, 'src/components/pages', f);
  if (!existsSync(p)) { fail(`${f} missing`); continue; }
  const src = readFileSync(p, 'utf8');
  if (importRe.test(src)) fail(`${f} must NOT import SectionRail (opt-in scope)`);
  else pass(`${f} correctly does not import SectionRail`);
}

// Reduced-motion behaviour lock: the observer MUST keep running under RM.
// The old bug pattern was a bare early-return like:
//   const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
//   if (reduce) return;
// Detect that shape and fail.
if (existsSync(railPath)) {
  const rail = readFileSync(railPath, 'utf8');
  const rmEarlyReturn =
    /matchMedia\(\s*['"`]\(prefers-reduced-motion:\s*reduce\)['"`]\s*\)\.matches[\s\S]{0,120}?if\s*\(\s*reduce\s*\)\s*return\s*;?/;
  if (rmEarlyReturn.test(rail)) {
    fail(
      'SectionRail.astro script early-returns on prefers-reduced-motion — active-section state must still update under RM (§7.5)'
    );
  } else {
    pass('SectionRail.astro preserves active-section state under reduced motion');
  }

  if (!/IntersectionObserver/.test(rail)) {
    fail('SectionRail.astro must use IntersectionObserver to track the active section');
  } else {
    pass('SectionRail.astro uses IntersectionObserver');
  }
}

if (failures) {
  console.error(`\nFAILED: ${failures} section-rail check(s).`);
  process.exit(1);
}
console.log('\nAll section-rail checks passed.');
