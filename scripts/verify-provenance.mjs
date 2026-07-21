/**
 * verify-provenance.mjs — Build-time provenance validator.
 *
 * Hard checks (process.exit(1) on any failure):
 *   A. SOURCE IDS — every source id referenced in copy files exists in SOURCES.
 *      Covers both `sourceIds: [...]` / `"sourceIds": [...]` fields AND
 *      citation tokens `[S##]` resolved through source-register.csv.
 *   B. INTERNAL INSTRUCTIONS — case-insensitive scan of user-facing copy for
 *      phrases that belong in editorial briefs, not public prose:
 *      "the site should", "caligo should", "must be rendered", "DO NOT"
 *      (uppercase only for DO NOT to avoid false positives on "do not").
 *      Matches inside line comments (//) and block-comment lines (* …) are
 *      skipped.
 *   C. AGGREGATE TRIPWIRE — literal strings that would hard-code figures that
 *      must only ever be derived from data at build time:
 *      "8 facilities", "eight facilities", "ocho instalaciones",
 *      "6 countries", "seis países".
 *
 * Soft check (WARNING only, never fails):
 *   D. APPROVAL COVERAGE — published records (publish: true) in CLAIMS and
 *      PILOTS that lack approvalOwner / approvalDate. Printed as WARNING.
 *      Rationale: this is a private demo that intentionally shows material
 *      pending the owner's review; fabricating approval metadata would be
 *      worse than the warning.
 *
 * Requires Node >= 22, ESM ("type": "module"). Zero npm dependencies.
 * Run: node scripts/verify-provenance.mjs
 */
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

let failures = 0;
const fail = (msg) => {
  failures += 1;
  console.error(`  ✗ ${msg}`);
};
const pass = (msg) => console.log(`  ✓ ${msg}`);
const warn = (msg) => console.warn(`  ⚠ ${msg}`);

/* ═══════════════════════════════════════════════════════════════════════
   LOAD SOURCES
   ═══════════════════════════════════════════════════════════════════════ */

const recordsPath = resolve(root, 'src/data/records.ts');
if (!existsSync(recordsPath)) {
  fail('src/data/records.ts missing');
  process.exit(1);
}

let mod;
try {
  mod = await import(pathToFileURL(recordsPath).href);
} catch (err) {
  fail(`failed to load src/data/records.ts: ${err.message}`);
  process.exit(1);
}

const { SOURCES, CLAIMS, PILOTS } = mod;

if (!Array.isArray(SOURCES)) {
  fail('SOURCES is not an array in src/data/records.ts');
  process.exit(1);
}

const sourceIds = new Set(SOURCES.map((s) => s.id));

/* ═══════════════════════════════════════════════════════════════════════
    LOAD SOURCE-REGISTER (citation token → recordId mapping)
    Single source of truth: src/data/source-register.ts (supersedes the
    historical context/…/source-register.csv pipeline artifact).
    ═══════════════════════════════════════════════════════════════════════ */

const registerPath = resolve(root, 'src/data/source-register.ts');
/** @type {Map<string, string>} token (e.g. "S08") → recordId */
const tokenToRecordId = new Map();

if (!existsSync(registerPath)) {
  fail('src/data/source-register.ts missing — citation tokens cannot be resolved');
  process.exit(1);
}

try {
  const registerMod = await import(pathToFileURL(registerPath).href);
  const { SOURCE_REGISTER } = registerMod;
  for (const [token, recordId] of Object.entries(SOURCE_REGISTER)) {
    tokenToRecordId.set(token, String(recordId));
  }
} catch (err) {
  fail(`failed to load src/data/source-register.ts: ${err.message}`);
  process.exit(1);
}

/* ═══════════════════════════════════════════════════════════════════════
   COPY FILES TO SCAN
   ═══════════════════════════════════════════════════════════════════════ */

const COPY_FILES = [
  'src/i18n/en.ts',
  'src/i18n/es.ts',
  'src/data/records.ts',
  'src/data/content.ts',
];

/** Read a file, returning { path, lines, content } or null if missing. */
function loadFile(rel) {
  const abs = resolve(root, rel);
  if (!existsSync(abs)) return null;
  const content = readFileSync(abs, 'utf8');
  return { path: rel, abs, lines: content.split('\n'), content };
}

const copyFiles = COPY_FILES.map((rel) => ({ rel, file: loadFile(rel) }));

/* ═══════════════════════════════════════════════════════════════════════
   HELPER: is a line inside a comment?
   ═══════════════════════════════════════════════════════════════════════ */

function isCommentLine(line) {
  const t = line.trim();
  return t.startsWith('//') || t.startsWith('*') || t.startsWith('/*');
}

/* ═══════════════════════════════════════════════════════════════════════
   CHECK A — SOURCE IDS
   ═══════════════════════════════════════════════════════════════════════ */

console.log('Provenance validation\n');
console.log('A. Source-id integrity\n');

let sourceIdFailures = 0;

for (const { rel, file } of copyFiles) {
  if (!file) {
    warn(`${rel} not found — skipping source-id check`);
    continue;
  }

  const { content } = file;

  // 1. Collect explicit sourceIds arrays (both JSON and TS syntax).
  //    JSON: "sourceIds": ["foo", "bar"]
  //    TS:   sourceIds: ['foo', 'bar']
  const jsonBlocks = [...content.matchAll(/"sourceIds"\s*:\s*\[(.*?)\]/gs)];
  const tsBlocks   = [...content.matchAll(/\bsourceIds\s*:\s*\[(.*?)\]/gs)];

  const explicitIds = new Set();
  for (const m of [...jsonBlocks, ...tsBlocks]) {
    for (const id of m[1].matchAll(/"([^"]+)"|'([^']+)'/g)) {
      explicitIds.add(id[1] ?? id[2]);
    }
  }

  for (const id of explicitIds) {
    if (!sourceIds.has(id)) {
      fail(`${rel}: sourceId "${id}" not found in SOURCES`);
      sourceIdFailures += 1;
    }
  }

  // 2. Resolve citation tokens [S##] through source-register.csv.
  if (tokenToRecordId.size > 0) {
    const tokens = new Set([...content.matchAll(/\[S(\d{2,3})\]/g)].map((m) => `S${m[1]}`));
    for (const token of tokens) {
      const recordId = tokenToRecordId.get(token);
      if (recordId === undefined) {
        warn(`${rel}: citation token [${token}] has no entry in source-register.csv`);
        continue;
      }
      if (!sourceIds.has(recordId)) {
        fail(
          `${rel}: citation token [${token}] resolves to "${recordId}" which is not in SOURCES` +
          ` (token appears in copy but the source record id does not exist)`
        );
        sourceIdFailures += 1;
      }
    }
  }
}

if (sourceIdFailures === 0) {
  pass('all source ids and citation tokens resolve to known SOURCES entries');
}

/* ═══════════════════════════════════════════════════════════════════════
   CHECK B — INTERNAL INSTRUCTION PHRASES
   ═══════════════════════════════════════════════════════════════════════ */

console.log('\nB. Internal-instruction phrase scan\n');

/**
 * Phrases that must not appear in user-facing copy.
 * Each entry: { pattern: RegExp, label: string }
 * Patterns are case-insensitive except DO NOT (uppercase only).
 */
const BANNED_PHRASES = [
  { pattern: /the site should/i,   label: '"the site should"' },
  { pattern: /caligo should/i,     label: '"caligo should"' },
  { pattern: /must be rendered/i,  label: '"must be rendered"' },
  { pattern: /\bDO NOT\b/,         label: '"DO NOT" (uppercase)' },
];

let phraseFailures = 0;

for (const { rel, file } of copyFiles) {
  if (!file) continue;
  const { lines } = file;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (isCommentLine(line)) continue;

    for (const { pattern, label } of BANNED_PHRASES) {
      if (pattern.test(line)) {
        fail(`${rel}:${i + 1}: internal-instruction phrase ${label} in public copy`);
        phraseFailures += 1;
      }
    }
  }
}

if (phraseFailures === 0) {
  pass('no internal-instruction phrases found in public copy');
}

/* ═══════════════════════════════════════════════════════════════════════
   CHECK C — AGGREGATE TRIPWIRE (hardcoded figures)
   ═══════════════════════════════════════════════════════════════════════ */

console.log('\nC. Aggregate-figure tripwire\n');

/**
 * Literal strings that must never appear in copy — they would hard-code
 * figures (facilities / countries) that must only be derived from data.
 * Correct figures: 7 facilities / 5 countries.
 */
const TRIPWIRES = [
  '8 facilities',
  'eight facilities',
  'ocho instalaciones',
  '6 countries',
  'seis países',
];

let tripwireFailures = 0;

for (const { rel, file } of copyFiles) {
  if (!file) continue;
  const { lines } = file;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (isCommentLine(line)) continue;

    for (const tripwire of TRIPWIRES) {
      if (line.toLowerCase().includes(tripwire.toLowerCase())) {
        fail(
          `${rel}:${i + 1}: hardcoded figure "${tripwire}" — ` +
          `aggregate counts must be derived from data, not hardcoded`
        );
        tripwireFailures += 1;
      }
    }
  }
}

if (tripwireFailures === 0) {
  pass('no hardcoded aggregate figures found');
}

/* ═══════════════════════════════════════════════════════════════════════
   CHECK D — APPROVAL COVERAGE (soft / WARNING only)
   ═══════════════════════════════════════════════════════════════════════ */

console.log('\nD. Approval coverage (soft check — WARNING only)\n');

const missingApproval = [];

for (const [collectionName, collection] of [
  ['CLAIMS', CLAIMS],
  ['PILOTS', PILOTS],
]) {
  if (!Array.isArray(collection)) continue;
  for (const record of collection) {
    if (record.publish && !record.approvalOwner && !record.approvalDate) {
      missingApproval.push(`${collectionName}[${record.id}]`);
    }
  }
}

if (missingApproval.length > 0) {
  warn(
    `${missingApproval.length} published record(s) lack approvalOwner/approvalDate ` +
    `(private demo — show-by-default pending owner review):`
  );
  for (const id of missingApproval) {
    warn(`  ${id}`);
  }
} else {
  pass('all published records have approvalOwner/approvalDate');
}

/* ═══════════════════════════════════════════════════════════════════════
   RESULT
   ═══════════════════════════════════════════════════════════════════════ */

console.log('');
if (failures) {
  console.error(`FAILED: ${failures} provenance issue(s) found.`);
  process.exit(1);
}

console.log(`PASS: all provenance checks clean (${SOURCES.length} sources indexed).`);
