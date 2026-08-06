/**
 * Lock the explicit, crop-safe social preview used by WhatsApp and other
 * Open Graph consumers. Without these tags, clients may guess from favicons.
 */
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const base = readFileSync(resolve(root, 'src/layouts/Base.astro'), 'utf8');
const imagePath = resolve(root, 'public/media/social/caligo-share-v2.png');
const image = readFileSync(imagePath);

let failures = 0;
const check = (condition, message) => {
  if (condition) console.log(`  ✓ ${message}`);
  else {
    failures += 1;
    console.error(`  ✗ ${message}`);
  }
};

console.log('Social-preview checks\n');

for (const property of [
  'og:image',
  'og:image:secure_url',
  'og:image:type',
  'og:image:width',
  'og:image:height',
  'og:image:alt',
]) {
  check(base.includes(`property="${property}"`), `Base.astro emits ${property}`);
}
check(base.includes('name="twitter:image"'), 'Base.astro emits twitter:image');
check(base.includes('name="twitter:image:alt"'), 'Base.astro emits twitter:image:alt');
check(base.includes('caligo-share-v2.png'), 'Base.astro uses the versioned share image');

const pngSignature = '89504e470d0a1a0a';
check(image.subarray(0, 8).toString('hex') === pngSignature, 'share image is a PNG');
check(image.readUInt32BE(16) === 1200, 'share image width is 1200 px');
check(image.readUInt32BE(20) === 630, 'share image height is 630 px');

if (failures) {
  console.error(`\nFAILED: ${failures} social-preview check(s).`);
  process.exit(1);
}

console.log('\nAll social-preview checks passed.');
