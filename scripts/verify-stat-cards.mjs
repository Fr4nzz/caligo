import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const read = (relative) => fs.readFileSync(path.join(ROOT, relative), 'utf8');
const statBar = read('src/components/StatBar.astro');
const home = read('src/components/pages/HomePage.astro');
const cardIcon = read('src/components/CardIcon.astro');
const principles = read('src/components/PrincipleGrid.astro');
const people = read('src/components/PersonCard.astro');
const membership = read('src/components/MembershipTiers.astro');
const failures = [];
const ok = (condition, message) => {
  process.stdout.write(`${condition ? '✓' : '✗'} ${message}\n`);
  if (!condition) failures.push(message);
};

console.log('Shared compact-card system checks\n');
ok(/variant="community-cards"/.test(home), 'Home opts into the approved community-card variant');
for (const kind of ['participants', 'facilities', 'countries', 'pilots']) {
  ok(new RegExp(`kind: '${kind}'`).test(home), `Home registers the ${kind} metric icon`);
}
ok(/grid-template-columns:\s*auto minmax\(0, 1fr\) auto/.test(statBar), 'metric cards keep number, text, and icon in one compact row');
ok(/grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\)/.test(statBar), 'mobile metric cards use a balanced 2×2 grid');
ok(/metric-card--lead/.test(statBar) && /kind === 'participants'/.test(statBar), 'participants receive the approved community emphasis');
ok(/CardIcon/.test(statBar) && /iconByKind/.test(statBar), 'metric cards use the shared semantic icon component');
ok(!/RED\s*[·•]|RED\s*0[1-4]/.test(statBar), 'redundant RED labels and sequence numbers are absent');
ok(!/border-top[^;]*accent[\s\S]{0,120}border-bottom[^;]*accent/.test(statBar), 'decorative double lines are absent');

for (const icon of ['leadership', 'taxonomy', 'inclusive', 'open', 'practical', 'rights', 'community', 'culture', 'person', 'core', 'affiliate']) {
  ok(new RegExp(`name === '${icon}'`).test(cardIcon), `shared icon set includes ${icon}`);
}
ok(/principleIcons/.test(principles) && /<CardIcon/.test(principles), 'guiding-principle cards use distinct semantic icons');
ok(/linear-gradient\(145deg, var\(--bg-panel\), var\(--bg-inset\)\)/.test(principles), 'guiding-principle cards use the shared gradient shell');
ok(/<CardIcon name="person"/.test(people), 'person cards use a meaningful person icon');
ok(/linear-gradient\(145deg, var\(--bg-panel\), var\(--bg-inset\)\)/.test(people), 'person cards use the shared gradient shell');
ok(/name=\{index === 0 \? 'core' : 'affiliate'\}/.test(membership), 'membership cards distinguish core and affiliate roles');
ok(/linear-gradient\(145deg, var\(--bg-panel\), var\(--bg-inset\)\)/.test(membership), 'membership cards use the shared gradient shell');
ok(/\.pilot-card[\s\S]*?background:\s*linear-gradient\(145deg, var\(--bg-panel\), var\(--bg-inset\)\)/.test(home), 'media-rich pilot cards use the shared shell without a redundant icon');

if (failures.length) {
  console.error(`\nFAIL: ${failures.length} card-system check(s) failed.`);
  process.exit(1);
}
console.log('\nPASS: shared compact-card system contract satisfied.');
