/**
 * verify-records.mjs — Build-time validation for src/data/records.ts.
 *
 * Every record with `publish: true` must have:
 *   • bilingual strings populated in both `en` and `es`;
 *   • valid status + provenance enum values;
 *   • every referenced source / media id resolving to an existing record;
 *   • every Media.path resolving to an existing file under /public.
 *
 * The build fails on any violation. Uses Node's native TypeScript loader
 * (`--experimental-strip-types`, unflagged in Node ≥ 22.7) so no build
 * step is required. Requires Node ≥ 22.6.
 */
import { existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

let failures = 0;
const fail = (msg) => {
  failures += 1;
  console.error(`  ✗ ${msg}`);
};

console.log('Records validation\n');

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
  if (err.message.includes('Unknown file extension') || err.message.includes('Unexpected token')) {
    console.error('  Hint: run with `node --experimental-strip-types` on Node < 22.7.');
  }
  process.exit(1);
}

const { SOURCES, CLAIMS, PILOTS, MEDIA, PUBLIC_STATUS_LABELS, MODULES } = mod;

for (const [name, list] of [
  ['SOURCES', SOURCES],
  ['CLAIMS', CLAIMS],
  ['PILOTS', PILOTS],
  ['MEDIA', MEDIA],
]) {
  if (!Array.isArray(list)) {
    fail(`${name} is not an array`);
    continue;
  }
  const ids = new Set();
  for (const r of list) {
    if (!r.id || typeof r.id !== 'string') fail(`${name}: record missing id`);
    else if (ids.has(r.id)) fail(`${name}: duplicate id ${r.id}`);
    else ids.add(r.id);
  }
}

const bilingual = (b, path) => {
  if (!b || typeof b !== 'object') return fail(`${path}: bilingual object missing`);
  if (!b.en || typeof b.en !== 'string' || b.en.trim() === '')
    fail(`${path}.en is empty or not a string`);
  if (!b.es || typeof b.es !== 'string' || b.es.trim() === '')
    fail(`${path}.es is empty or not a string`);
};

const VALID_STATUSES = new Set([
  'published-evidence',
  'database-snapshot',
  'proposed-caligo-work',
]);
const VALID_PROVENANCES = new Set([
  'published-evidence',
  'dated-database-result',
  'stakeholder-working-material',
  'editorial-synthesis',
  'implementation-observation',
]);

const sourceIds = new Set(SOURCES.map((s) => s.id));
const mediaIds = new Set(MEDIA.map((m) => m.id));

for (const s of SOURCES) {
  if (!s.url) fail(`SOURCES[${s.id}]: url missing`);
  if (!s.citation) fail(`SOURCES[${s.id}]: citation missing`);
  if (!s.checkedDate) fail(`SOURCES[${s.id}]: checkedDate missing`);
  else if (!/^\d{4}-\d{2}-\d{2}$/.test(s.checkedDate))
    fail(`SOURCES[${s.id}]: checkedDate "${s.checkedDate}" is not ISO YYYY-MM-DD`);
  if (s.kind === 'preprint' && !s.publicationDate)
    fail(`SOURCES[${s.id}]: preprint kind requires publicationDate`);
  if (s.doi && !s.url.includes(s.doi)) fail(`SOURCES[${s.id}]: doi ${s.doi} not present in url`);
}

for (const c of CLAIMS) {
  if (!c.publish) continue;
  bilingual(c.headline, `CLAIMS[${c.id}].headline`);
  if (c.detail) bilingual(c.detail, `CLAIMS[${c.id}].detail`);
  if (c.caveat) bilingual(c.caveat, `CLAIMS[${c.id}].caveat`);
  if (!VALID_STATUSES.has(c.status)) fail(`CLAIMS[${c.id}]: invalid status "${c.status}"`);
  if (!VALID_PROVENANCES.has(c.provenance))
    fail(`CLAIMS[${c.id}]: invalid provenance "${c.provenance}"`);
  if (!c.sourceIds || c.sourceIds.length === 0)
    fail(`CLAIMS[${c.id}]: at least one sourceId required for publish=true`);
  for (const sid of c.sourceIds ?? []) {
    if (!sourceIds.has(sid)) fail(`CLAIMS[${c.id}]: sourceId "${sid}" not found in SOURCES`);
  }
  if (
    c.status === 'database-snapshot' &&
    !c.sourceIds.some((sid) => SOURCES.find((s) => s.id === sid)?.kind === 'database')
  )
    fail(`CLAIMS[${c.id}]: status=database-snapshot requires at least one database source`);
}

for (const p of PILOTS) {
  if (!p.publish) continue;
  if (!p.slug || !/^[a-z0-9-]+$/.test(p.slug))
    fail(`PILOTS[${p.id}]: slug must be lowercase kebab (got "${p.slug}")`);
  bilingual(p.heading, `PILOTS[${p.id}].heading`);
  bilingual(p.publishedContext, `PILOTS[${p.id}].publishedContext`);
  bilingual(p.proposedQuestion, `PILOTS[${p.id}].proposedQuestion`);
  if (!VALID_STATUSES.has(p.status)) fail(`PILOTS[${p.id}]: invalid status "${p.status}"`);
  if (!p.sourceIds || p.sourceIds.length === 0)
    fail(`PILOTS[${p.id}]: at least one sourceId required for publish=true`);
  for (const sid of p.sourceIds ?? []) {
    if (!sourceIds.has(sid)) fail(`PILOTS[${p.id}]: sourceId "${sid}" not found in SOURCES`);
  }
  for (const mid of p.mediaIds ?? []) {
    if (!mediaIds.has(mid)) fail(`PILOTS[${p.id}]: mediaId "${mid}" not found in MEDIA`);
  }
}

for (const m of MEDIA) {
  if (!m.publish) continue;
  if (!m.path) fail(`MEDIA[${m.id}]: path missing`);
  else {
    const fp = resolve(root, 'public', m.path);
    if (!existsSync(fp)) fail(`MEDIA[${m.id}]: file "public/${m.path}" not found`);
  }
  if (!m.creator) fail(`MEDIA[${m.id}]: creator missing`);
  if (!m.licence) fail(`MEDIA[${m.id}]: licence missing`);
  if (!m.licenceUrl) fail(`MEDIA[${m.id}]: licenceUrl missing`);
  if (!m.sourceItemPage) fail(`MEDIA[${m.id}]: sourceItemPage missing`);
  if (m.taxon && !m.taxonConfidence)
    fail(`MEDIA[${m.id}]: taxon present but taxonConfidence missing`);
  if (!Array.isArray(m.changes) || m.changes.length === 0)
    fail(`MEDIA[${m.id}]: changes list required (record every crop/resize/re-encode)`);
  bilingual(m.alt, `MEDIA[${m.id}].alt`);
  bilingual(m.caption, `MEDIA[${m.id}].caption`);
  bilingual(m.credit, `MEDIA[${m.id}].credit`);
  if (m.alt?.en && m.credit?.en && m.alt.en === m.credit.en)
    fail(
      `MEDIA[${m.id}]: alt.en must not duplicate credit.en (they are different accessibility fields)`
    );
}

if (PUBLIC_STATUS_LABELS) {
  for (const s of VALID_STATUSES) {
    const label = PUBLIC_STATUS_LABELS[s];
    if (!label) fail(`PUBLIC_STATUS_LABELS: missing entry for ${s}`);
    else bilingual(label, `PUBLIC_STATUS_LABELS[${s}]`);
  }
} else fail('PUBLIC_STATUS_LABELS export missing');

const VALID_KINDS = new Set(['documentary', 'ai-concept', 'code-native']);
const VALID_FIT = new Set(['cover', 'contain']);

/**
 * v7.1 optional presentation-field validators. All fields on both
 * MediaCandidate and MediaModule are optional; when present they must
 * satisfy these light shape checks so a typo like `fit: 'covers'`
 * cannot ship unnoticed.
 */
const validateFit = (v, p) => {
  if (v === undefined) return;
  if (!VALID_FIT.has(v)) fail(`${p}.fit: invalid value "${v}" (expected 'cover' | 'contain')`);
};
const validateObjectPosition = (v, p) => {
  if (v === undefined) return;
  if (typeof v !== 'string' || v.trim() === '')
    fail(`${p}.objectPosition: must be a non-empty CSS <position> string`);
};
const validateBackground = (v, p) => {
  if (v === undefined) return;
  if (typeof v !== 'string' || v.trim() === '')
    fail(`${p}.background: must be a non-empty CSS <color> or var(--…) string`);
};
const validateAspectRatio = (v, p) => {
  if (v === undefined) return;
  if (typeof v !== 'string' || v.trim() === '')
    fail(`${p}.aspectRatio: must be a non-empty CSS <aspect-ratio> string`);
};

if (Array.isArray(MODULES)) {
  const moduleIds = new Set();
  for (const mod of MODULES) {
    if (!mod.id || typeof mod.id !== 'string') fail(`MODULES: record missing id`);
    else if (moduleIds.has(mod.id)) fail(`MODULES: duplicate id ${mod.id}`);
    else moduleIds.add(mod.id);
    if (!mod.publish) continue;
    // Module-level presentation defaults (all optional).
    validateFit(mod.fit, `MODULES[${mod.id}]`);
    validateAspectRatio(mod.aspectRatio, `MODULES[${mod.id}]`);
    validateBackground(mod.background, `MODULES[${mod.id}]`);
    if (!Array.isArray(mod.candidates) || mod.candidates.length === 0) {
      fail(`MODULES[${mod.id}]: candidates must be a non-empty array`);
      continue;
    }
    for (let i = 0; i < mod.candidates.length; i += 1) {
      const c = mod.candidates[i];
      const p = `MODULES[${mod.id}].candidates[${i}]`;
      if (!VALID_KINDS.has(c.kind)) fail(`${p}: invalid kind "${c.kind}"`);
      bilingual(c.alt, `${p}.alt`);
      bilingual(c.caption, `${p}.caption`);
      bilingual(c.credit, `${p}.credit`);
      if (c.kind !== 'code-native') {
        if (!c.path) fail(`${p}: path required for kind "${c.kind}"`);
        else {
          const fp = resolve(root, 'public', c.path);
          if (!existsSync(fp)) fail(`${p}: file "public/${c.path}" not found`);
        }
        if (typeof c.width !== 'number' || c.width <= 0)
          fail(`${p}: width must be a positive number`);
        if (typeof c.height !== 'number' || c.height <= 0)
          fail(`${p}: height must be a positive number`);
      } else {
        // code-native: path is optional but if present must resolve
        // (SVG-backed code-native candidates like the journey-3 voucher
        // diagram reference public/media/code-native/*.svg).
        if (c.path) {
          const fp = resolve(root, 'public', c.path);
          if (!existsSync(fp)) fail(`${p}: file "public/${c.path}" not found`);
        }
      }
      if (c.kind === 'documentary') {
        if (!c.creator) fail(`${p}: creator required for documentary`);
        if (!c.licence) fail(`${p}: licence required for documentary`);
        if (!c.licenceUrl) fail(`${p}: licenceUrl required for documentary`);
        if (!c.sourceItemPage) fail(`${p}: sourceItemPage required for documentary`);
      }
      if (c.kind === 'ai-concept') {
        if (!c.conceptCaveat) fail(`${p}: conceptCaveat (Bilingual) required for ai-concept`);
        else bilingual(c.conceptCaveat, `${p}.conceptCaveat`);
      }
      // v7.1 optional per-candidate presentation-field validators.
      validateFit(c.fit, p);
      validateObjectPosition(c.objectPosition, p);
      validateBackground(c.background, p);
      validateAspectRatio(c.aspectRatio, p);
    }
  }
}

if (failures) {
  console.error(`\nFAILED: ${failures} record validation issue(s).`);
  process.exit(1);
}

console.log(
  `\nAll records valid — ${SOURCES.length} sources, ${CLAIMS.length} claims, ${PILOTS.length} pilots, ${MEDIA.length} media, ${Array.isArray(MODULES) ? MODULES.length : 0} modules.`
);
