/**
 * verify-strip.mjs — TDD locks for §7 decoration discipline on HomePage.
 *
 * Bans applied per file:
 *
 *   HomePage.astro
 *     • "4 genomes"        — the network has four PILOT PROJECTS, not four
 *                            genomes; use "four proposed pilots".
 *     • "n = 21–60"        — Heliconius-specific karyotype range; must not
 *                            appear in general Caligo/Lepidoptera hero copy.
 *     • bare mono tier codes T1/T2/T3 as decorative labels — the codes are
 *                            not approved stakeholder vocabulary (brief §2.2).
 *                            The strings "T1", "T2", "T3" as standalone
 *                            HTML-visible content are the ban target; the
 *                            English letter T followed by a digit appearing
 *                            inside a longer word (e.g. "T2000") is fine.
 *     • "n = 7"            — faux sample-size notation for a page counter
 *                            (brief §2.2, §5 finding #7).
 *     • "sister initiative" — no formal relationship with Project Psyche or
 *                            any other initiative is verified (brief §2.2).
 *     • "every genome"     — voucher/provenance is proposed practice, not
 *                            approved Caligo policy (brief §2.2).
 */
import { readFileSync } from 'node:fs';
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

console.log('§7 decoration discipline checks\n');

const homePagePath = resolve(root, 'src/components/pages/HomePage.astro');
const homeSrc = readFileSync(homePagePath, 'utf8');

const homeBans = [
  { re: /\b4\s+genomes\b/i, why: 'HomePage: must not claim "4 genomes" (use "four proposed pilots")' },
  { re: /n\s*=\s*21\s*[-\u2013]\s*60/, why: 'HomePage: Heliconius karyotype "n = 21–60" is not a general Caligo fact' },
  { re: /(^|>|["'\s])T[1-3]([<"'\s]|$)/m, why: 'HomePage: decorative mono tier codes T1/T2/T3 are not approved public vocabulary' },
  { re: /\bn\s*=\s*7\b/, why: 'HomePage: faux sample-size "n = 7" is a dressed-up page counter' },
  { re: /sister initiative/i, why: 'HomePage: "sister initiative" implies a formal relationship not established' },
  { re: /every genome/i, why: 'HomePage: "every genome" implies an approved policy that does not exist' },
];
for (const { re, why } of homeBans) {
  if (re.test(homeSrc)) fail(why);
  else pass(`clear: ${why}`);
}

if (failures) {
  console.error(`\nFAILED: ${failures} decoration-discipline check(s).`);
  process.exit(1);
}
console.log('\nAll decoration-discipline checks passed.');
