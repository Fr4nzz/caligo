/**
 * verify-no-pilots-links.mjs — regression guard for the /pilots to /projects
 * rename. Canonical route is /{lang}/projects/; any `/pilots/` reference in
 * runtime source or built output produces a 404 on GitHub Pages.
 *
 * Scans:
 *   - src (recursively; extensions: .astro .ts .tsx .mjs .css)
 *   - dist (recursively; extension: .html)
 *
 * Excludes: node_modules, .git, .astro, .astro-cache, context (editorial
 * artifacts that reference the abandoned /pilots slug historically are not
 * runtime references and must not fail CI).
 *
 * A hit fails the check.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join, relative } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const SCAN_ROOTS = ['src', 'dist'];
const SCAN_EXTS = new Set(['.astro', '.ts', '.tsx', '.mjs', '.mts', '.cjs', '.js', '.css', '.html']);
const EXCLUDE_DIR_NAMES = new Set(['node_modules', '.git', '.astro', '.astro-cache', 'context']);

// Match `/pilots` as a route segment (followed by /, #, ?, ", ', backtick, or end).
// Deliberately loose enough to catch `href="/pilots"`, `href="/pilots/"`,
// `localePath(locale, "/pilots")`, `"/pilots#anchor"`, etc.
const PILOTS_RE = /\/pilots(?=[/#?"'`\s\)]|$)/;

function walk(dir) {
  const out = [];
  let entries;
  try { entries = readdirSync(dir); } catch { return out; }
  for (const entry of entries) {
    if (EXCLUDE_DIR_NAMES.has(entry)) continue;
    const full = join(dir, entry);
    let st;
    try { st = statSync(full); } catch { continue; }
    if (st.isDirectory()) {
      out.push(...walk(full));
    } else {
      const ext = entry.slice(entry.lastIndexOf('.'));
      if (SCAN_EXTS.has(ext)) out.push(full);
    }
  }
  return out;
}

console.log('No-/pilots/-links checks\n');

let failures = 0;
let scanned = 0;

for (const scanRoot of SCAN_ROOTS) {
  const absRoot = resolve(root, scanRoot);
  try { statSync(absRoot); } catch { continue; }
  const files = walk(absRoot);
  for (const f of files) {
    scanned += 1;
    const src = readFileSync(f, 'utf8');
    const lines = src.split(/\r?\n/);
    for (let i = 0; i < lines.length; i += 1) {
      if (PILOTS_RE.test(lines[i])) {
        console.error(`  ✗ ${relative(root, f)}:${i + 1} — ${lines[i].trim().slice(0, 140)}`);
        failures += 1;
      }
    }
  }
}

if (failures === 0) {
  console.log(`  ✓ ${scanned} files scanned across src/ and dist/ — no /pilots/ references`);
  console.log('\nAll no-/pilots/-links checks passed.');
} else {
  console.error(`\nFAILED: ${failures} /pilots/ reference(s) across ${scanned} files.`);
  process.exit(1);
}
