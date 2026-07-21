/**
 * verify-palette-engine.mjs — TDD lock for the palette+mode engine.
 *
 * Asserts:
 *  1. src/config/palettes.ts exports ALLOWED_PALETTES = caligo|canopy|morpho,
 *     MODES = dark|light, and a MODE_COLORS map with a hex value per combo.
 *  2. src/layouts/Base.astro emits data-palette + data-mode on <html>
 *     (not the legacy data-theme) AND its inline pre-paint script references
 *     the palette whitelist (i.e. palettes.ts was serialised in).
 *  3. src/components/PaletteSelector.astro exists and imports from
 *     ../config/palettes.
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

console.log('Palette-engine checks\n');

// --- (1) palettes.ts ---
const palettesPath = resolve(root, 'src/config/palettes.ts');
if (!existsSync(palettesPath)) {
  fail('src/config/palettes.ts missing');
} else {
  const src = readFileSync(palettesPath, 'utf8');
  const wants = [
    { re: /export const ALLOWED_PALETTES\s*=\s*\[[^\]]*['"]caligo['"][^\]]*['"]canopy['"][^\]]*['"]morpho['"]/s, why: 'ALLOWED_PALETTES = [caligo, canopy, morpho]' },
    { re: /export const MODES\s*=\s*\[[^\]]*['"]dark['"][^\]]*['"]light['"]/s, why: 'MODES = [dark, light]' },
    { re: /export const MODE_COLORS/, why: 'MODE_COLORS exported' },
    { re: /caligo\s*:\s*\{\s*dark\s*:\s*['"`]#[0-9a-fA-F]{3,8}['"`]\s*,\s*light\s*:\s*['"`]#[0-9a-fA-F]{3,8}['"`]/, why: 'MODE_COLORS.caligo has {dark, light} hex' },
    { re: /canopy\s*:\s*\{\s*dark\s*:\s*['"`]#[0-9a-fA-F]{3,8}['"`]\s*,\s*light\s*:\s*['"`]#[0-9a-fA-F]{3,8}['"`]/, why: 'MODE_COLORS.canopy has {dark, light} hex' },
    { re: /morpho\s*:\s*\{\s*dark\s*:\s*['"`]#[0-9a-fA-F]{3,8}['"`]\s*,\s*light\s*:\s*['"`]#[0-9a-fA-F]{3,8}['"`]/, why: 'MODE_COLORS.morpho has {dark, light} hex' },
    { re: /export const PALETTES/, why: 'PALETTES metadata exported' },
  ];
  for (const { re, why } of wants) {
    if (re.test(src)) pass(`palettes.ts: ${why}`);
    else fail(`palettes.ts: missing ${why}`);
  }
}

// --- (2) Base.astro ---
const basePath = resolve(root, 'src/layouts/Base.astro');
if (!existsSync(basePath)) fail('src/layouts/Base.astro missing');
else {
  const src = readFileSync(basePath, 'utf8');
  if (/<html\s+lang=\{lang\}\s+data-palette=/.test(src)) pass('Base.astro: SSR <html> emits data-palette');
  else fail('Base.astro: SSR <html> must emit data-palette');
  if (/data-mode=/.test(src)) pass('Base.astro: SSR <html> emits data-mode');
  else fail('Base.astro: SSR <html> must emit data-mode');
  if (/data-theme=/.test(src)) fail('Base.astro: legacy data-theme attribute is still present on <html>');
  else pass('Base.astro: legacy data-theme removed from <html>');
  if (/ALLOWED_PALETTES/.test(src)) pass('Base.astro: inline script references ALLOWED_PALETTES');
  else fail('Base.astro: inline script must reference ALLOWED_PALETTES (serialised from palettes.ts)');
  if (/MODE_COLORS/.test(src)) pass('Base.astro: inline script references MODE_COLORS');
  else fail('Base.astro: inline script must reference MODE_COLORS');
  if (/caligo-theme/.test(src) && !/legacy|migrate|['"`]caligo-theme['"`]/.test(src)) {
    fail('Base.astro: legacy "caligo-theme" storage key still used; migration path not visible');
  } else pass('Base.astro: no unmigrated legacy caligo-theme reference');
}

// --- (3) PaletteSelector.astro ---
const selPath = resolve(root, 'src/components/PaletteSelector.astro');
if (!existsSync(selPath)) fail('src/components/PaletteSelector.astro missing');
else {
  const src = readFileSync(selPath, 'utf8');
  if (/from\s+['"]\.\.\/config\/palettes['"]/.test(src)) pass('PaletteSelector imports from ../config/palettes');
  else fail('PaletteSelector must import from ../config/palettes');
}

if (failures) {
  console.error(`\nFAILED: ${failures} palette-engine check(s).`);
  process.exit(1);
}
console.log('\nAll palette-engine checks passed.');
