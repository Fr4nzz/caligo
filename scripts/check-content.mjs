/**
 * Content integrity checks — run with `pnpm test`.
 *
 * These guard the two failure modes most likely to slip through on a bilingual
 * static site: English and Spanish drifting apart in structure, and unverified /
 * disallowed content sneaking in (personal emails, the expired Discord invite,
 * a silently-invented Spanish project name). No browser or build required.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

let failures = 0;
const fail = (msg) => {
  failures++;
  console.error(`  ✗ ${msg}`);
};
const pass = (msg) => console.log(`  ✓ ${msg}`);

/** Shape of a value: object keys, array length, or leaf type. */
function shape(value, path, other, otherPath) {
  if (Array.isArray(value)) {
    if (!Array.isArray(other)) return fail(`type mismatch at ${path} (array vs non-array)`);
    if (value.length !== other.length)
      return fail(`array length mismatch: ${path} has ${value.length}, ${otherPath} has ${other.length}`);
    value.forEach((v, i) => shape(v, `${path}[${i}]`, other[i], `${otherPath}[${i}]`));
  } else if (value && typeof value === 'object') {
    if (!other || typeof other !== 'object' || Array.isArray(other))
      return fail(`type mismatch at ${path} (object vs non-object)`);
    const a = Object.keys(value).sort();
    const b = Object.keys(other).sort();
    const missing = a.filter((k) => !b.includes(k));
    const extra = b.filter((k) => !a.includes(k));
    if (missing.length) fail(`keys in ${path} missing from ${otherPath}: ${missing.join(', ')}`);
    if (extra.length) fail(`extra keys in ${otherPath} (not in ${path}): ${extra.join(', ')}`);
    a.forEach((k) => b.includes(k) && shape(value[k], `${path}.${k}`, other[k], `${otherPath}.${k}`));
  } else if (typeof value !== typeof other) {
    fail(`leaf type mismatch at ${path}: ${typeof value} vs ${typeof other}`);
  }
}

/** Collect every string leaf. */
function strings(value, acc = []) {
  if (typeof value === 'string') acc.push(value);
  else if (Array.isArray(value)) value.forEach((v) => strings(v, acc));
  else if (value && typeof value === 'object') Object.values(value).forEach((v) => strings(v, acc));
  return acc;
}

console.log('Content integrity checks\n');

// Load dictionaries via a tiny TS-aware import. They are plain object literals,
// so we read and strip the surrounding TS to eval them without a toolchain.
async function loadDicts() {
  const { en } = await importTs('src/i18n/en.ts', 'en');
  const { es } = await importTs('src/i18n/es.ts', 'es');
  return { en, es };
}

// Minimal loader: transpile-free by using a data: module after stripping TS bits.
async function importTs(rel, exportName) {
  let src = readFileSync(resolve(root, rel), 'utf8');
  // Drop type-only imports and `import type` lines.
  src = src.replace(/^import\s+type[^\n]*\n/gm, '');
  src = src.replace(/^import\s+\{[^}]*\}\s+from\s+'[^']*';\s*\n/gm, '');
  // Strip a trailing `as const` and type annotations on the export.
  src = src.replace(/:\s*Dict\s*=/, ' =');
  src = src.replace(/\bas const\b/g, '');
  // Remove the `export type` block if present.
  src = src.replace(/export type[\s\S]*$/m, '');
  const mod = await import(
    'data:text/javascript,' + encodeURIComponent(src.replace('export const', 'export const'))
  );
  return { [exportName]: mod[exportName] };
}

const { en, es } = await loadDicts();

// 1. Structural parity of the i18n dictionaries.
const before = failures;
shape(en, 'en', es, 'es');
if (failures === before) pass('English and Spanish dictionaries have identical structure');

// 1b. Guiding principles come from PRINCIPLES (src/data/content.ts — Nicol's
// eight, bilingual) and render via <PrincipleGrid /> on Home and About. The
// old i18n list (four invented items) was removed in the content inversion.
// Guard: 8 fully-bilingual items, and both pages render the grid.
// (Loaded via Node's native type-stripping import — the importTs regex loader
// only fits the plain-literal i18n dicts, not annotated data modules.)
const { pathToFileURL } = await import('node:url');
const contentMod = await import(pathToFileURL(resolve(root, 'src/data/content.ts')).href);
const PRINCIPLES = contentMod.PRINCIPLES;
const homePageSrc = readFileSync(resolve(root, 'src/components/pages/HomePage.astro'), 'utf8');
const aboutPageSrc = readFileSync(resolve(root, 'src/components/pages/AboutPage.astro'), 'utf8');
const principlesBilingual =
  Array.isArray(PRINCIPLES) &&
  PRINCIPLES.every(
    (p) => p?.title?.en && p?.title?.es && p?.body?.en && p?.body?.es,
  );
if (Array.isArray(PRINCIPLES) && PRINCIPLES.length === 8 && principlesBilingual) {
  pass('Guiding principles: PRINCIPLES contains 8 fully-bilingual items');
} else {
  fail(
    `Guiding principles: expected 8 fully-bilingual PRINCIPLES items (got ${
      Array.isArray(PRINCIPLES) ? PRINCIPLES.length : 'non-array'
    }, bilingual=${principlesBilingual})`,
  );
}
if (
  /<PrincipleGrid/.test(homePageSrc) &&
  /<PrincipleGrid/.test(aboutPageSrc) &&
  !/pillars\.items/.test(homePageSrc) &&
  !/pillars\.items/.test(aboutPageSrc)
) {
  pass('Guiding principles: Home and About render <PrincipleGrid /> (no legacy i18n list)');
} else {
  fail('Guiding principles: Home and About must both render <PrincipleGrid /> and never pillars.items');
}

// 2. Structured data files carry both locales for every entry.
const dataSrc = readFileSync(resolve(root, 'src/data/content.ts'), 'utf8');
const enCount = (dataSrc.match(/\ben:/g) || []).length;
const esCount = (dataSrc.match(/\bes:/g) || []).length;
if (enCount === esCount && enCount > 0) pass(`data/content.ts: ${enCount} bilingual fields balanced (en=es)`);
else fail(`data/content.ts bilingual imbalance: ${enCount} en vs ${esCount} es`);

// 3. Disallowed content. Applied across en + es dicts AND both structured
//    data files (content.ts legacy + records.ts new).
const recordsSrc = readFileSync(resolve(root, 'src/data/records.ts'), 'utf8');
const allText = [...strings(en), ...strings(es), dataSrc, recordsSrc].join('\n');

const banned = [
  { pattern: /discord\.gg\//i, why: 'expired Discord invite must not be published' },
  { pattern: /\bsister initiative\b/i, why: '"sister initiative" implies a formal relationship not verified (brief §2.2)' },
  { pattern: /\bn\s*=\s*7\b/, why: 'faux sample-size "n = 7" is a dressed-up page counter (brief §5)' },
  { pattern: /\bvoucher-linked\b/i, why: 'v7 launch-safe: "voucher-linked" (references / genome / anything) is specialist shorthand — explain plainly first (brief §2 terminology contract)' },
  { pattern: /\b1\s*April\s*2026\b/i, why: 'wrong Wright et al. date — must be "16 February 2026" (brief §2.1)' },
  { pattern: /\bJiang\s+et\s+al\b/i, why: 'wrong Sackey citation — must be "Sackey et al." (brief §2.1)' },
  { pattern: /\b4\s+genomes\b/i, why: 'four PILOT PROJECTS, not four genomes (brief §2.2)' },
  // v6 launch-safe editorial thesis (GPT Pro response 3, priority 1):
  // internal-review language must not appear in public copy.
  { pattern: /\bAwaiting confirmation\b/i, why: 'v6 launch-safe: "awaiting confirmation" is internal editorial language' },
  { pattern: /\bunder review\b/i, why: 'v6 launch-safe: "under review" is internal editorial language' },
  { pattern: /\bunder construction\b/i, why: 'v6 launch-safe: "under construction" is internal editorial language' },
  { pattern: /\bunder active development\b/i, why: 'v6 launch-safe: "under active development" is internal editorial language' },
  { pattern: /\bshould be read as provisional\b/i, why: 'v6 launch-safe: "should be read as provisional" is internal editorial language' },
  { pattern: /\binformational site\b/i, why: 'v6 launch-safe: "informational site" undersells the initiative publicly' },
  { pattern: /\bhas not yet been calculated\b/i, why: 'v6 launch-safe: publish the positive regional gap story, not the missing-percentage caveat' },
];
// Personal emails: only the approved public contact address is allowed.
const ALLOWED_EMAIL = 'genomica.neotropical@gmail.com';
const emails = [...allText.matchAll(/[\w.+-]+@[\w.-]+\.\w+/g)].map((m) => m[0]);
const strayEmails = emails.filter((e) => e.toLowerCase() !== ALLOWED_EMAIL);
if (strayEmails.length) fail(`unexpected email address(es) present: ${[...new Set(strayEmails)].join(', ')}`);
else pass(`only the approved contact email appears (${ALLOWED_EMAIL})`);

for (const { pattern, why } of banned) {
  if (pattern.test(allText)) fail(why);
  else pass(`clear: ${why}`);
}

// 3b. Required scientific corrections must appear in combined content.
//     Sources for these strings live in records.ts (SOURCES / CLAIMS /
//     PILOTS entries); the check-content guard catches accidental removal.
const required = [
  { pattern: /\b16\s*February\s*2026\b/, why: 'Wright et al. correct date "16 February 2026" must be present' },
  { pattern: /\b11\s*July\s*2026\b/, why: 'Mackay-Smith et al. correct date "11 July 2026" must be present' },
  { pattern: /\bSackey\b/, why: 'Sackey citation must be present (replaces the earlier Jiang misattribution)' },
  { pattern: /\bpreprint\b/i, why: 'Panacea prola movement evidence must remain labelled a preprint' },
  { pattern: /\bVulnerable\b/, why: 'Parides ascanius global IUCN status "Vulnerable" must be present' },
  { pattern: /\bEndangered\b/, why: 'Parides ascanius Brazilian national status "Endangered" must be present' },
];
for (const { pattern, why } of required) {
  if (pattern.test(allText)) pass(`present: ${why}`);
  else fail(why);
}

// 4. Spanish name safeguard: the v6 launch-safe pass deleted the `spanishNote`
//    key entirely (per GPT Pro response 3 §146+374). The initiative now uses
//    only the descriptive subtitle "Genomas de mariposas y polillas neotropicales"
//    publicly, which is not presented as an approved official name. Verify the
//    subtitle appears and no unapproved official-name claim appears.
if (
  es.site?.descriptor === 'Genomas de mariposas y polillas neotropicales' &&
  !es.home?.name?.spanishNote
) {
  pass('Spanish subtitle uses the descriptor; no unapproved official-name claim');
} else {
  fail('Spanish naming: descriptor must be the Spanish subtitle and spanishNote must be absent');
}

// 5. Every dictionary leaf is non-empty EXCEPT the deliberately-empty
//    `mediaViewer.aiConceptCaveat` (per GPT Pro follow-up 4 brief §7:
//    legacy key set to "" so the component stops rendering it as a
//    generic warning; risk-specific caveats live in mediaViewer.caveats.*
//    and per-candidate conceptCaveat fields instead).
const ACCEPTABLE_EMPTY = 1;
const emptyEn = strings(en).filter((s) => s.trim() === '').length;
const emptyEs = strings(es).filter((s) => s.trim() === '').length;
const acceptable =
  en?.mediaViewer?.aiConceptCaveat === '' && es?.mediaViewer?.aiConceptCaveat === '';
if (emptyEn === ACCEPTABLE_EMPTY && emptyEs === ACCEPTABLE_EMPTY && acceptable) {
  pass('only the intentional mediaViewer.aiConceptCaveat leaf is empty');
} else if (emptyEn + emptyEs === 0) {
  pass('no empty strings in either dictionary');
} else {
  fail(`unexpected empty strings (en: ${emptyEn}, es: ${emptyEs}; acceptable legacy: mediaViewer.aiConceptCaveat)`);
}

console.log('');
if (failures) {
  console.error(`FAILED: ${failures} problem(s) found.`);
  process.exit(1);
} else {
  console.log('All content checks passed.');
}
