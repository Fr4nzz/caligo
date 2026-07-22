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
ok(/@keyframes fusion-input-orange\s*\{\s*0%\s*\{\s*opacity:\s*0/.test(concepts) && /@keyframes fusion-input-yellow\s*\{\s*0%\s*\{\s*opacity:\s*0/.test(concepts), 'fusion inputs stay hidden until the fusion stage begins');
ok(/breakpoint-line/.test(concepts) && /internal break point/.test(concepts), 'fission shows one chromosome breaking at an internal position');
ok(/fission-product--orange/.test(concepts) && /fission-product--yellow/.test(concepts) && /new ends are stabilised/.test(concepts), 'fission produces two colour-preserving chromosomes with stabilised new ends');
ok(/fusion-result-segment--orange/.test(concepts) && /fusion-result-segment--yellow/.test(concepts) && /fusion-junction/.test(concepts), 'fusion retains the orange and yellow chromosome regions across an end-to-end junction');
ok(/@keyframes fission-left[\s\S]*?translateX\(14px\)/.test(concepts) && /@keyframes fission-right[\s\S]*?translateX\(-14px\)/.test(concepts), 'fission fragments visibly separate in opposite directions');
ok(/@keyframes fuse-orange[\s\S]*?translateX\(-18px\)/.test(concepts) && /@keyframes fuse-yellow[\s\S]*?translateX\(18px\)/.test(concepts), 'fusion segments visibly converge toward the junction');
ok(/holocentric/.test(concepts) && /no single localised centromere/.test(concepts), 'the diagram states the Lepidoptera holocentric context without inventing a centromere position');
ok(/generic two-panel phylogenetic schematic/.test(concepts) && /not a species claim, measured phylogeny or Caligo result/.test(concepts), 'connectivity is explicitly a generic two-outcome concept, not a Caligo result');
ok(/gene-flow-panel--homogenisation/.test(concepts) && /gene-flow-panel--hybrid-speciation/.test(concepts) && /gene-flow-divider/.test(concepts), 'connectivity compares homogenisation and hybrid-speciation outcomes in paired panels');
ok(/incipient-branch--dark/.test(concepts) && /incipient-branch--pale/.test(concepts) && /homogenisation-node/.test(concepts) && /homogenised-lineage/.test(concepts), 'early gene flow begins with two incipient branches that rejoin as one lineage');
ok(/early-gene-flow[\s\S]*?marker-start[\s\S]*?marker-end/.test(concepts) && /early, sustained gene flow homogenises them/.test(concepts) && /Divergence collapses · one lineage remains/.test(concepts), 'sustained two-way gene flow can homogenise incipient lineages and collapse divergence');
ok(/recipient-branch/.test(concepts) && /donor-branch/.test(concepts) && /hybrid-lineage-branch/.test(concepts) && /hybrid-origin-node/.test(concepts), 'later introgression produces an asymmetric recipient-derived hybrid branch rather than an equal merge');
ok(/trait-mark--source/.test(concepts) && /late-introgression-token/.test(concepts) && /trait-mark--hybrid/.test(concepts) && /does not imply equal genomic contributions or colour blending/.test(concepts), 'one discrete allele moves from donor to hybrid lineage without colour blending or a 50/50 ancestry claim');
ok(/@keyframes hybrid-allele-cross[\s\S]*?translate\(0, 0\)[\s\S]*?translate\(-80px, -22px\)/.test(concepts) && /s41586-024-07263-w/.test(concepts) && /pnas\.2410939122/.test(concepts) && /putative hybrid origins/.test(concepts), 'late allele transfer and evidence links distinguish demonstrated Heliconius speciation from putative Ithomiini origins');

if (fail.length) {
  console.error(`\nFAIL: ${fail.length} motion/diagram contract check(s) failed.`);
  process.exit(1);
}
console.log('\nPASS: motion and scientific-diagram contracts satisfied.');
