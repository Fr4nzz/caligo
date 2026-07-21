/**
 * verify-projects-media.mjs — proof that the four pilot media modules
 * render on the actual /projects/ page for both locales.
 *
 * Spec (v7.1 brief, "Pilot imagery"):
 *   • Each of the four pilot records (pilot-heliconius, pilot-parides,
 *     pilot-soybean, pilot-panacea) must render an associated documentary
 *     image on the projects page.
 *   • Documentary candidate must be first (the MediaCandidateViewer's
 *     default slide).
 *   • Each image must be associated with the corresponding pilot section
 *     (i.e., the <picture> lives inside the pilot's <li id="…">).
 *
 * How it checks:
 *   1. Parse dist/{en,es}/projects/index.html.
 *   2. For each pilot slug, find the pilot's <li id="{slug}"> block.
 *   3. Assert exactly one <picture data-kind="documentary" ...> inside
 *      that block (indicates the documentary candidate is present and
 *      marked as the default slide by MediaCandidateViewer).
 *   4. Assert the <picture> comes BEFORE any other data-kind slide in
 *      DOM order (documentary is the initial index).
 */
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const projectsSourcePath = resolve(root, 'src', 'components', 'pages', 'ProjectsPage.astro');

/*
 * Pilot slugs (the values of `<li id="…">` in the built HTML) come from
 * PILOTS[*].slug in src/data/records.ts. They are shorter than the
 * MediaModule IDs (which are of the form `pilot-<slug>`), so we assert
 * on slugs here.
 */
const PILOTS = ['heliconius', 'parides-ascanius', 'soybean-lepidoptera', 'panacea-prola'];

const REQUIRED_FIELD_IMAGES = new Map([
  ['parides-ascanius', 'media/documentary/parides-ascanius-field-lucas-lopes.jpg'],
  ['panacea-prola', 'media/documentary/panacea-prola-field-laura-gaudette.jpg'],
]);

const REJECTED_SPECIMEN_IMAGES = [
  'media/documentary/a9-parides-ascanius.jpg',
  'media/documentary/a5-panacea-prola.jpg',
];

let failures = 0;
const fail = (msg) => { failures += 1; console.error(`  ✗ ${msg}`); };
const pass = (msg) => console.log(`  ✓ ${msg}`);

function extractPilotBlock(html, slug) {
  // Match the pilot's <li id="{slug}" …> element and everything up to its
  // matching </li>. Astro emits a stable id on each pilot record.
  const openRe = new RegExp(
    `<li[^>]*\\bid="${slug}"[^>]*>`,
    'i'
  );
  const openMatch = openRe.exec(html);
  if (!openMatch) return null;
  const start = openMatch.index + openMatch[0].length;
  // Naive but sufficient: find the next </li> at the same depth. The
  // pilots are top-level <li> in an <ol>, and only contain flow content
  // + nested <details>/<picture>, so a scan for the next </li> is safe.
  const end = html.indexOf('</li>', start);
  if (end === -1) return null;
  return html.slice(start, end);
}

console.log('Projects pilot-media checks (post-build)\n');

const projectsSource = readFileSync(projectsSourcePath, 'utf8');
const pilotMediaRule = /\.pilot-media\s*\{([^}]*)\}/.exec(projectsSource)?.[1] ?? '';
if (/overflow\s*:\s*hidden/.test(pilotMediaRule) || /max-height\s*:/.test(pilotMediaRule)) {
  fail('ProjectsPage: .pilot-media must not clip or height-cap captions and credit disclosures');
} else {
  pass('ProjectsPage: pilot media wrapper leaves captions and credits unconstrained');
}
if (/\.pilot-media\s+:global\(\.mcv-stage\)\s*\{[^}]*max-height\s*:/.test(projectsSource)) {
  pass('ProjectsPage: image-size cap is scoped to the media stage');
} else {
  fail('ProjectsPage: image-size cap must be scoped to .mcv-stage');
}

for (const locale of ['en', 'es']) {
  const path = resolve(root, 'dist', locale, 'projects', 'index.html');
  if (!existsSync(path)) { fail(`dist/${locale}/projects/index.html missing — run \`pnpm build\``); continue; }
  const html = readFileSync(path, 'utf8');
  for (const slug of PILOTS) {
    const block = extractPilotBlock(html, slug);
    if (block === null) { fail(`${locale}/projects: <li id="${slug}"> not found`); continue; }
    const documentaryMatches = block.match(/<picture[^>]*\bdata-kind="documentary"/gi) ?? [];
    if (documentaryMatches.length === 0) {
      fail(`${locale}/projects/#${slug}: no <picture data-kind="documentary"> inside pilot block`);
      continue;
    }
    if (documentaryMatches.length > 1) {
      fail(`${locale}/projects/#${slug}: expected 1 documentary <picture>, found ${documentaryMatches.length}`);
      continue;
    }
    // Assert the documentary slide is the first data-kind occurrence within
    // the pilot block (initial index === documentary).
    const firstSlide = /<picture[^>]*\bdata-kind="([^"]+)"/i.exec(block);
    if (!firstSlide || firstSlide[1] !== 'documentary') {
      fail(`${locale}/projects/#${slug}: first slide kind is "${firstSlide?.[1] ?? 'unknown'}", expected "documentary"`);
      continue;
    }
    const requiredFieldImage = REQUIRED_FIELD_IMAGES.get(slug);
    if (requiredFieldImage && !block.includes(requiredFieldImage)) {
      fail(`${locale}/projects/#${slug}: verified field-observation image is missing`);
      continue;
    }
    pass(`${locale}/projects/#${slug}: documentary <picture> renders as first slide`);
  }

  for (const rejectedPath of REJECTED_SPECIMEN_IMAGES) {
    if (html.includes(rejectedPath)) {
      fail(`${locale}/projects: preserved-specimen image returned to public pilot media (${rejectedPath})`);
    }
  }
}

if (failures === 0) {
  console.log('\nAll projects-media checks passed.');
} else {
  console.error(`\nFAILED: ${failures} projects-media check(s).`);
  process.exit(1);
}
