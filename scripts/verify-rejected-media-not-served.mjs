/**
 * verify-rejected-media-not-served.mjs — post-build (and pre-build via
 * public/) guard against exposing media assets that the media review
 * (context/media_review_20260717/README.md) explicitly rejected.
 *
 * Current reject list (extend when new reviews land):
 *   - journey-04-extraction-ai-rejected*  (dead-butterfly + tissue mass;
 *     use NHGRI pipetting photo instead per review)
 *
 * Both `public/` and `dist/` are scanned because Astro copies public/**
 * into dist/** verbatim; a file only in public/ still ships.
 */
import { existsSync, statSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join, relative } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const REJECTED_BASENAME_PATTERNS = [/journey-04-extraction-ai-rejected/i];
const SCAN_ROOTS = ['public', 'dist'];

function walk(dir, out) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return out;
  }
  for (const entry of entries) {
    const full = join(dir, entry);
    let st;
    try {
      st = statSync(full);
    } catch {
      continue;
    }
    if (st.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

let failures = 0;
const fail = (msg) => {
  failures += 1;
  console.error(`  \u2717 ${msg}`);
};

console.log('Rejected-media guard\n');

let filesScanned = 0;
for (const scanRoot of SCAN_ROOTS) {
  const absRoot = resolve(root, scanRoot);
  if (!existsSync(absRoot)) continue;
  const files = walk(absRoot, []);
  filesScanned += files.length;
  for (const file of files) {
    const base = file.split('/').pop();
    for (const pat of REJECTED_BASENAME_PATTERNS) {
      if (pat.test(base)) {
        fail(`Rejected asset served from ${relative(root, file)}`);
      }
    }
  }
}

if (failures === 0) {
  console.log(
    `  \u2713 ${filesScanned} files scanned across ${SCAN_ROOTS.join(', ')} \u2014 no rejected assets`
  );
  console.log('\nAll rejected-media checks passed.');
} else {
  console.error(`\nFAILED: ${failures} rejected asset(s) present.`);
  process.exit(1);
}
