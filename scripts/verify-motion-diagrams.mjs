import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const fail = [];
const ok = (condition, message) => {
  process.stdout.write(`${condition ? '✓' : '✗'} ${message}\n`);
  if (!condition) fail.push(message);
};
const read = (relative) => fs.readFileSync(path.join(ROOT, relative), 'utf8');
const sourceFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(astro|css|ts|js)$/.test(entry.name)) sourceFiles.push(full);
  }
}
walk(path.join(ROOT, 'src'));
const allSource = sourceFiles.map((file) => fs.readFileSync(file, 'utf8')).join('\n');
const home = read('src/components/pages/HomePage.astro');
const records = read('src/data/records.ts');
const viewer = read('src/components/MediaCandidateViewer.astro');
const science = read('src/components/pages/SciencePage.astro');
const projects = read('src/components/pages/ProjectsPage.astro');
const concepts = read('src/components/ConceptDiagram.astro');
const groupFocusStart = concepts.indexOf('@keyframes group-focus');
const groupFocusEnd = concepts.indexOf('@keyframes route-flow', groupFocusStart);
const groupFocus = groupFocusStart >= 0 && groupFocusEnd > groupFocusStart
  ? concepts.slice(groupFocusStart, groupFocusEnd)
  : '';

console.log('Motion and scientific-diagram contract checks\n');
ok(!/data-reveal(?:-bar)?\b|classList\.add\(['"]js-motion/.test(allSource), 'no generic scroll-reveal machinery or consumers');
ok(!/hero-unfold|hero-glide/.test(home), 'Home has no delayed hero entrance animation');
ok(/aria-hidden/.test(viewer) && /setAttribute\(['"]aria-hidden/.test(viewer), 'inactive media slides receive updated aria-hidden state');

for (const [id, label] of [['journey-5-assemble', 'Journey 05'], ['journey-6-deposit', 'Journey 06']]) {
  const start = records.indexOf(`id: '${id}'`);
  const segment = start >= 0 ? records.slice(start, start + 2600) : '';
  ok(start >= 0 && /kind: 'code-native'/.test(segment), `${label} publishes a code-native explainer`);
}

const nativeDir = path.join(ROOT, 'public/media/code-native');
const nativeSvgs = fs.readdirSync(nativeDir).filter((name) => name.endsWith('.svg'));
ok(nativeSvgs.length >= 3, 'at least three code-native SVG explainers exist');
ok(/Diagram|diagram|<svg/.test(science), 'Science renders dedicated educational diagrams');
ok(/Diagram|diagram|<svg/.test(projects), 'Pilots render dedicated conceptual diagrams');
ok(/data-concept-play/.test(concepts) && /is-playing/.test(concepts), 'concept diagrams expose user-controlled playback');
ok(/fission-source/.test(concepts) && /connectivity-scene/.test(concepts) && /workflow-stage/.test(concepts) && /migration-link/.test(concepts), 'all four concept-diagram families have didactic animation stages');
ok(/prefers-reduced-motion:\s*reduce/.test(concepts) && /animation:\s*none\s*!important/.test(concepts), 'concept-diagram motion has an instant reduced-motion path');
ok(!/setInterval|autoplay/.test(concepts), 'concept diagrams never autoplay or loop without user input');
ok(/@media \(max-width: 34rem\)[\s\S]*?\.concept-svg\s*\{[\s\S]*?display:\s*block/.test(concepts), 'mobile keeps the illustrated SVG visible');
ok(groupFocus.length > 0 && !/transform\s*:/.test(groupFocus), 'animations preserve positioned SVG group transforms');
ok(/@keyframes merge-top\s*\{\s*0%\s*\{\s*opacity:\s*0/.test(concepts), 'fusion inputs stay hidden until the fusion stage begins');

if (fail.length) {
  console.error(`\nFAIL: ${fail.length} motion/diagram contract check(s) failed.`);
  process.exit(1);
}
console.log('\nPASS: motion and scientific-diagram contracts satisfied.');
