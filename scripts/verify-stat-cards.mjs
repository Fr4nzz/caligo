import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const read = (relative) => fs.readFileSync(path.join(ROOT, relative), 'utf8');
const component = read('src/components/StatBar.astro');
const home = read('src/components/pages/HomePage.astro');
const failures = [];
const ok = (condition, message) => {
  process.stdout.write(`${condition ? '✓' : '✗'} ${message}\n`);
  if (!condition) failures.push(message);
};

console.log('Homepage community-metric card checks\n');
ok(/variant="community-cards"/.test(home), 'Home opts into the approved community-card variant');
for (const kind of ['participants', 'facilities', 'countries', 'pilots']) {
  ok(new RegExp(`kind: '${kind}'`).test(home), `Home registers the ${kind} metric icon`);
}
ok(/grid-template-columns:\s*auto minmax\(0, 1fr\) auto/.test(component), 'desktop cards keep number, text, and icon in one compact row');
ok(/grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\)/.test(component), 'mobile cards use a balanced 2×2 grid');
ok(/metric-card--lead/.test(component) && /kind === 'participants'/.test(component), 'participants receive the approved community emphasis');
ok((component.match(/class="metric-card__icon"/g) ?? []).length === 1 && (component.match(/metric\.kind ===/g) ?? []).length >= 5, 'one icon slot renders informative SVGs by metric kind');
ok(!/RED\s*[·•]|RED\s*0[1-4]/.test(component), 'redundant RED labels and sequence numbers are absent');
ok(!/border-top[^;]*accent[\s\S]{0,120}border-bottom[^;]*accent/.test(component), 'decorative double lines are absent');

if (failures.length) {
  console.error(`\nFAIL: ${failures.length} homepage metric-card check(s) failed.`);
  process.exit(1);
}
console.log('\nPASS: homepage community-metric card contract satisfied.');
