/**
 * verify-contrast.mjs — WCAG 2.1 AA verification for the 6 palette/mode combos.
 *
 * Parses src/styles/tokens.css for each `[data-palette='X'][data-mode='Y']`
 * block and computes the contrast ratio of the primary semantic tokens
 * against --bg:
 *   • --text          ≥ 4.5:1  (body copy)
 *   • --text-muted    ≥ 4.5:1  (muted body copy)
 *   • --link          ≥ 4.5:1  (links)
 *   • --accent        ≥ 3.0:1  (non-text UI accent — WCAG "large / non-text")
 *
 * No dependencies. Colour parsing supports 3/6-digit hex.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const tokens = resolve(__dirname, '..', 'src/styles/tokens.css');
const css = readFileSync(tokens, 'utf8');

const PALETTES = ['caligo', 'canopy', 'morpho'];
const MODES = ['dark', 'light'];

/** Expand `#abc` → `#aabbcc`; return {r,g,b} 0..255. */
function parseHex(h) {
  h = h.trim().toLowerCase();
  if (!h.startsWith('#')) return null;
  h = h.slice(1);
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  if (h.length !== 6) return null;
  const n = parseInt(h, 16);
  if (Number.isNaN(n)) return null;
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

/** sRGB → relative luminance per WCAG 2.1 §1.4.3. */
function luminance({ r, g, b }) {
  const chan = (v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * chan(r) + 0.7152 * chan(g) + 0.0722 * chan(b);
}

/** WCAG contrast ratio. */
function contrast(a, b) {
  const [L1, L2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (L1 + 0.05) / (L2 + 0.05);
}

/**
 * Resolve a token defined as `--x: <hex or var(...)>;` within `block`,
 * chasing through --c-<ramp> refs from `ramps` up to 4 levels deep.
 */
function resolveToken(block, ramps, name, depth = 4) {
  if (depth <= 0) return null;
  const m = block.match(new RegExp(`--${name}\\s*:\\s*([^;]+);`));
  if (!m) return null;
  const raw = m[1].trim();
  if (raw.startsWith('#')) return raw;
  const vm = raw.match(/var\(\s*(--[a-zA-Z0-9-]+)/);
  if (!vm) return null;
  const refName = vm[1].slice(2);
  const ramp = ramps.match(new RegExp(`--${refName}\\s*:\\s*([^;]+);`));
  if (ramp && ramp[1].trim().startsWith('#')) return ramp[1].trim();
  // Chase into the block or ramps recursively.
  return resolveToken(block + '\n' + ramps, ramps, refName, depth - 1);
}

/** Slice out one `[data-palette='X'][data-mode='Y'] { ... }` block. */
function sliceBlock(css, palette, mode) {
  const re = new RegExp(
    `\\[data-palette=['"\`]${palette}['"\`]\\]\\[data-mode=['"\`]${mode}['"\`]\\][^\\{]*\\{([\\s\\S]*?)\\n\\}`,
    'm'
  );
  const m = css.match(re);
  return m ? m[1] : null;
}

// Ramps live in the top-level :root block that comes before the palette blocks.
const rampsMatch = css.match(/:root\s*\{([\s\S]*?)\n\}/);
const ramps = rampsMatch ? rampsMatch[1] : '';

let failures = 0;
const fail = (msg) => { failures += 1; console.error(`  ✗ ${msg}`); };
const pass = (msg) => console.log(`  ✓ ${msg}`);

console.log('WCAG AA contrast — 6 palette/mode combos\n');

const CHECKS = [
  { token: 'text',       min: 4.5 },
  { token: 'text-muted', min: 4.5 },
  { token: 'link',       min: 4.5 },
  { token: 'accent',     min: 3.0 },
];

const rows = [['combo', 'bg', 'text', 'muted', 'link', 'accent']];

for (const p of PALETTES) {
  for (const m of MODES) {
    const block = sliceBlock(css, p, m);
    if (!block) { fail(`no block for [data-palette='${p}'][data-mode='${m}']`); continue; }
    const bgHex = resolveToken(block, ramps, 'bg');
    if (!bgHex) { fail(`${p}/${m}: --bg not resolvable`); continue; }
    const bg = parseHex(bgHex);
    const row = [`${p}/${m}`, bgHex];
    let localFail = false;
    for (const { token, min } of CHECKS) {
      const fgHex = resolveToken(block, ramps, token);
      if (!fgHex) { fail(`${p}/${m}: --${token} not resolvable`); row.push('?'); localFail = true; continue; }
      const fg = parseHex(fgHex);
      if (!bg || !fg) { fail(`${p}/${m}: --${token} unparseable hex ${fgHex}`); row.push('?'); localFail = true; continue; }
      const r = contrast(bg, fg);
      row.push(r.toFixed(2));
      if (r < min) { fail(`${p}/${m}: --${token} contrast ${r.toFixed(2)} < ${min} (${fgHex} on ${bgHex})`); localFail = true; }
    }
    if (!localFail) pass(`${p}/${m}: all thresholds met`);
    rows.push(row);
  }
}

// Pretty matrix
const widths = rows[0].map((_, i) => Math.max(...rows.map((r) => String(r[i]).length)));
console.log('');
for (const r of rows) {
  console.log('  ' + r.map((v, i) => String(v).padEnd(widths[i])).join('  '));
}

if (failures) {
  console.error(`\nFAILED: ${failures} contrast check(s).`);
  process.exit(1);
}
console.log('\nAll contrast checks passed.');
