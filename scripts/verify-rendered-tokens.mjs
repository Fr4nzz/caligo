/**
 * verify-rendered-tokens.mjs — post-build guard against raw citation-token
 * leakage in visitor-facing HTML.
 *
 * Bracketed source tokens like [S02] appear in the v7 i18n copy proposals
 * (context/gpt_pro_followup_4_output/*.copy-proposal.ts). Components must
 * strip them at render time via src/lib/citations.ts:stripCitations, or
 * resolve them to source-drawer entries. This script scans every built
 * HTML file under dist/ and fails the build if any raw [S##] pattern
 * remains visible in the served output.
 *
 * Also scans for the broadened v7 "voucher-linked" ban — an in-render
 * regression safety net beyond the check-content dict-level scan.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = resolve(root, 'dist');

const CITATION_TOKEN = /\[S\d{2,3}\]/;
const VOUCHER_LINKED = /\bvoucher-linked\b/i;
const FOG_ASSOCIATION = /\b(?:fog|niebla)\b/i;

function visibleText(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<(?:script|style)\b[^>]*>[\s\S]*?<\/(?:script|style)>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ');
}

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else if (entry.endsWith('.html')) out.push(full);
  }
  return out;
}

let failures = 0;
const fail = (msg) => {
  failures += 1;
  console.error(`  ✗ ${msg}`);
};

console.log('Rendered-token checks (post-build)\n');

const htmls = walk(distDir);
if (htmls.length === 0) {
  fail('No HTML files found under dist/ — run `pnpm build` first.');
  process.exit(1);
}

let tokenLeaks = 0;
let voucherLeaks = 0;
let pilotCopyLeaks = 0;
let fogLeaks = 0;

for (const file of htmls) {
  const rel = file.replace(root + '/', '');
  const src = readFileSync(file, 'utf8');
  if (CITATION_TOKEN.test(src)) {
    const matches = src.match(/\[S\d{2,3}\]/g) ?? [];
    fail(`${rel} contains raw citation tokens: ${[...new Set(matches)].join(', ')}`);
    tokenLeaks += 1;
  }
  if (VOUCHER_LINKED.test(src)) {
    fail(`${rel} contains "voucher-linked" (broadened v7 ban)`);
    voucherLeaks += 1;
  }

  const text = visibleText(src);
  const textWithoutApprovedPilotTerms = text
    .replace(/\bpilot projects?\b/gi, '')
    .replace(/\bproyectos? piloto\b/gi, '');
  if (/\bpilots?\b/i.test(textWithoutApprovedPilotTerms)) {
    fail(`${rel} uses "pilot" without "project" in visitor-facing copy`);
    pilotCopyLeaks += 1;
  }
  if (/\bpilotos?\b/i.test(textWithoutApprovedPilotTerms)) {
    fail(`${rel} uses "piloto" without "proyecto" in visitor-facing copy`);
    pilotCopyLeaks += 1;
  }
  if (FOG_ASSOCIATION.test(text)) {
    fail(`${rel} retains the discarded fog association in visitor-facing copy`);
    fogLeaks += 1;
  }
}

if (failures === 0) {
  console.log(`  ✓ ${htmls.length} HTML files scanned — citation, terminology and namesake copy are clean`);
  console.log('\nAll rendered-token checks passed.');
} else {
  console.error(`\nFAILED: ${failures} problem(s) across ${htmls.length} HTML files.`);
  process.exit(1);
}
