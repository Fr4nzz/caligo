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
const assembly = read('src/components/AssemblyDiagram.astro');
const tiers = read('src/components/DataTierProgression.astro');
const en = read('src/i18n/en.ts');
const es = read('src/i18n/es.ts');
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
ok(/import AssemblyDiagram/.test(home) && /journey-5-assemble[\s\S]*?<AssemblyDiagram/.test(home), 'Journey 05 mounts the dedicated animated assembly explainer');
ok(/data-assembly-play/.test(assembly) && /data-assembly-status/.test(assembly) && /aria-live="polite"/.test(assembly), 'assembly explainer exposes native user-controlled playback and live status');
ok(!/setInterval|autoplay/.test(assembly), 'assembly explainer never autoplays or loops without user input');
ok(/asm-read--six/.test(assembly) && /asm-contig--three/.test(assembly), 'assembly explainer aligns overlapping reads into fewer longer contigs');
ok(/asm-hic-map-state--uncurated/.test(assembly) && /asm-hic-map-state--curated/.test(assembly) && (assembly.match(/class="asm-hic-domain"/g) ?? []).length === 3, 'assembly explainer contrasts an uncurated Hi-C map with three curated chromosome blocks');
ok(!/asm-hic-scan/.test(assembly) && /symmetric Hi-C heatmap/.test(en) && /mapa de calor Hi-C conceptual y simétrico/.test(es), 'Hi-C heatmap uses symmetric contact intensity rather than an ambiguous persistent scan line');
ok(/matching rows and columns are reordered together/.test(en) && /filas y columnas correspondientes se reordenan juntas/.test(es), 'EN and ES explain that manual curation reorders both Hi-C axes together');
ok(/stronger within-chromosome and fainter between-chromosome contacts/.test(en) && /contactos más intensos dentro de cada cromosoma y más tenues entre cromosomas/.test(es), 'EN and ES distinguish stronger within-chromosome from fainter between-chromosome contacts');
ok(/"hicAction": "manual curation"/.test(en) && /"hicAction": "curación manual"/.test(es), 'EN and ES label the conceptual manual-curation transition');
ok(/asm-unit--one/.test(assembly) && /asm-unit--two/.test(assembly) && /asm-unit--three/.test(assembly) && /chromosome-scale scaffolds/.test(en), 'assembly explainer ends with several chromosome-scale scaffolds rather than one chromosome');
ok((assembly.match(/class="asm-chromosome-label"/g) ?? []).length === 3 && /labelled CHR 1 to CHR 3/.test(en) && /etiquetados de CHR 1 a CHR 3/.test(es), 'three conceptual chromosome-scale rows carry explicit CHR labels in EN and ES');
ok(/asm-gap/.test(assembly) && /asm-gap-inside/.test(assembly) && /"gapShort": "GAP"/.test(en) && /"gapShort": "BRECHA"/.test(es) && /does not provide the missing sequence/.test(en) && /no aporta la secuencia faltante/.test(es), 'Hi-C scaffolding labels an explicit unresolved sequence gap instead of implying gap filling');
ok(/asm-check--continuity/.test(assembly) && /asm-check--completeness/.test(assembly) && /asm-check--limits/.test(assembly), 'assessment separately reveals continuity, completeness and limits or gaps');
ok(/not sequence or Hi-C data, scores or Caligo results/.test(en) && /no son datos de secuencia o Hi-C, puntajes ni resultados de Caligo/.test(es), 'EN and ES retain the conceptual-not-data disclaimer without fabricated scores');
ok(/prefers-reduced-motion:\s*reduce/.test(assembly) && /animation:\s*none\s*!important/.test(assembly) && /labelReduced/.test(assembly), 'assembly explainer has a complete semantic reduced-motion state');
ok(/@media \(max-width: 38rem\)[\s\S]*?assembly-mobile-flow/.test(assembly) && /assembly-step-number/.test(assembly), 'assembly explainer keeps the SVG and an ordered mobile summary');
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
ok(/early-split-branch--dark/.test(concepts) && /early-split-branch--pale/.test(concepts) && /early-merge-branch--dark/.test(concepts) && /early-merge-branch--pale/.test(concepts) && /homogenisation-node/.test(concepts), 'early lineages grow from one lower split to a separate upper reconvergence stage');
ok(/early-gene-flow[\s\S]*?marker-start[\s\S]*?marker-end/.test(concepts) && /early, sustained gene flow homogenises them/.test(concepts) && /Divergence collapses · one lineage remains/.test(concepts), 'sustained two-way gene flow can homogenise incipient lineages and collapse divergence');
ok(/late-split-branch--recipient/.test(concepts) && /late-split-branch--donor/.test(concepts) && /M600 111 H494[\s\S]*?late-introgression-link[\s\S]*?marker-end/.test(concepts) && /hybrid-origin-node/.test(concepts), 'later lineages first grow to midpoints, then gene flow runs explicitly from right to left');
ok(/late-tip-branch--recipient/.test(concepts) && /late-tip-branch--donor/.test(concepts) && /hybrid-lineage-branch/.test(concepts) && /recipient-butterfly/.test(concepts) && /donor-butterfly/.test(concepts) && /hybrid-butterfly/.test(concepts), 'a new branch arises from the left recipient midpoint before three descendant tips appear');
ok(/newHybridSpecies: 'new hybrid species'/.test(concepts) && /newHybridSpecies: 'nueva especie híbrida'/.test(concepts) && /hybrid-species-label/.test(concepts), 'the central descendant is explicitly labelled as the new hybrid species in both languages');
ok(/connectivity-mobile-outcomes/.test(concepts) && /connectivity-outcome-cue/.test(concepts) && /oneLineage/.test(concepts) && /rareOutcomeLabel/.test(concepts), 'mobile replaces connectivity step numbers with two named biological outcomes');
ok(/\.connectivity-scene \.micro-label,[\s\S]*?paint-order:\s*stroke fill[\s\S]*?stroke:\s*var\(--bg-panel\)/.test(concepts), 'connectivity labels mask crossing branches and arrows instead of sitting visually beneath them');
ok(/trait-mark--source/.test(concepts) && /late-introgression-token/.test(concepts) && /trait-mark--hybrid/.test(concepts) && /does not imply equal genomic contributions or colour blending/.test(concepts), 'one discrete allele moves from donor to hybrid lineage without colour blending or a 50/50 ancestry claim');
ok(/early-split-branch[\s\S]*?1\.0s[\s\S]*?early-gene-flow[\s\S]*?2\.3s[\s\S]*?early-merge-branch[\s\S]*?3\.45s[\s\S]*?late-tip-branch[\s\S]*?3\.82s[\s\S]*?recipient-butterfly[\s\S]*?4\.78s[\s\S]*?final-state-label[\s\S]*?4\.78s/.test(concepts) && /data-duration-ms=\{kind === 'connectivity' \? '6500' : '5000'\}/.test(concepts), 'connectivity playback pauses between bottom-to-top lineage stages and runs long enough to finish');
ok(/@keyframes hybrid-allele-cross[\s\S]*?translateX\(0\)[\s\S]*?translateX\(-106px\)/.test(concepts) && /s41586-024-07263-w/.test(concepts) && /pnas\.2410939122/.test(concepts) && /putative hybrid origins/.test(concepts), 'right-to-left allele transfer and evidence links distinguish demonstrated Heliconius speciation from putative Ithomiini origins');
ok(/data-tier-progression/.test(tiers) && /data-tier-play/.test(tiers) && /data-tier-status/.test(tiers) && /aria-live="polite"/.test(tiers), 'evidence-tier comparison exposes user-controlled playback and a real DOM status');
ok(!/tier-node|tier-step/.test(tiers) && /These approaches are complementary/.test(en) && /Estos enfoques son complementarios/.test(es), 'evidence tiers avoid a numbered ranking and explicitly remain complementary in both languages');
ok(/selected-window/.test(tiers) && /primer-bounds/.test(tiers) && /amplicon-stack/.test(tiers), 'targeted-region diagram distinguishes one primer-bounded locus and discrete amplicon copies');
ok(/short-read-fragments/.test(tiers) && /mapping-guides/.test(tiers) && /sampled-sites/.test(tiers) && /does not imply uniform or complete genomic coverage/.test(en), 'genome-wide sampling maps distributed short reads without claiming uniform or complete coverage');
ok(/long-read-stack/.test(tiers) && /overlap-guides/.test(tiers) && /assembly-result/.test(tiers) && /does not show assembly uncertainty or guarantee completeness/.test(en), 'reference-assembly diagram links overlapping long reads to ordered context while stating its limits');
ok(/role="img"/.test(tiers) && /<title id=/.test(tiers) && /<desc id=/.test(tiers) && /not a Caligo result/.test(en) && /no es un resultado de Caligo/.test(es), 'all evidence-tier SVGs have localised semantic titles, descriptions and a conceptual disclaimer');
ok(/stage-targeted-selection[\s\S]*?180ms[\s\S]*?stage-targeted-outcome[\s\S]*?1\.05s[\s\S]*?stage-short-reads[\s\S]*?2s[\s\S]*?stage-short-outcome[\s\S]*?2\.95s[\s\S]*?stage-long-reads[\s\S]*?3\.65s[\s\S]*?stage-assembly-result[\s\S]*?4\.62s/.test(tiers), 'evidence-tier playback pauses through targeted, distributed-read and assembly stages');
ok(/prefers-reduced-motion:\s*reduce/.test(tiers) && /animation:\s*none\s*!important/.test(tiers) && /all three outcomes are visible/.test(en), 'evidence-tier reduced motion preserves the complete static comparison');
ok(/vch-net-head/.test(concepts) && /vch-hand/.test(concepts) && /vch-wristband/.test(concepts), 'voucher capture includes a net, hand and collector wristband');
ok(/@keyframes net-catch[\s\S]*?translateY\(-18px\)[\s\S]*?translateY\(0\)/.test(concepts) && !/@keyframes net-catch[\s\S]*?translate\(-64px/.test(concepts), 'voucher net descends onto the specimen instead of entering from outside the frame');
ok(/vch-collector-token/.test(concepts) && /@keyframes collector-to-record[\s\S]*?translate\(437px, -60px\)/.test(concepts), 'collector placeholder travels from the wristband into the record row');
ok(/vch-record-collector/.test(concepts) && /c\.voucher\.collector[\s\S]*?c\.voucher\.camid[\s\S]*?c\.voucher\.tubeid/.test(concepts), 'voucher record row holds collector, CAMID and tube ID together');
ok(/"collector": "COLLECTOR"/.test(en) && /"collector": "COLECTOR"/.test(es), 'collector placeholder has matching English and Spanish dictionary keys');
ok(/never a real person's name/.test(en) && /nunca el nombre de una persona real/.test(es), 'voucher description keeps the collector placeholder explicitly conceptual');

if (fail.length) {
  console.error(`\nFAIL: ${fail.length} motion/diagram contract check(s) failed.`);
  process.exit(1);
}
console.log('\nPASS: motion and scientific-diagram contracts satisfied.');
