/**
 * Citation-token utilities.
 *
 * Bracketed source tokens like `[S02]` appear in the i18n copy proposals
 * (context/gpt_pro_followup_4_output/*.copy-proposal.ts). Per the binding
 * copy contract they must NEVER render as raw visitor-facing prose —
 * every token maps through src/data/source-register.ts to a real citation
 * record in SOURCES (src/data/records.ts).
 *
 * Two resolution strategies:
 *   • `stripCitations(text)` removes `[S##]` tokens from body prose so
 *     casual reading is clean; the accompanying sourceIds/sourceNote
 *     provides transparent attribution in the same accordion or section
 *     source drawer. Consumers may migrate to renderCitations over time.
 *   • `renderCitations(text)` replaces `[S##]` tokens with superscript
 *     inline anchor links targeting the source-drawer entries emitted by
 *     SourceList/SourceRef (defect 10 foundation).
 */
import { SOURCE_REGISTER } from '../data/source-register';

const CITATION_TOKEN = /\s*\[S\d{2,3}\]/g;

/**
 * Remove every `[S##]` (and `[S###]` for future large source registers)
 * from a string of prose. Leading whitespace around the token is also
 * consumed so trailing periods do not leave a doubled space.
 */
export function stripCitations(text: string): string {
  return text.replace(CITATION_TOKEN, '');
}

/** True if the given string contains at least one citation token. */
export function hasCitations(text: string): boolean {
  CITATION_TOKEN.lastIndex = 0;
  return CITATION_TOKEN.test(text);
}

function escapeHtml(raw: string): string {
  return raw
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const CITE_RENDER_TOKEN = /\s*\[S(\d{2,3})\]/g;
const PLAUSIBLE_ID = /^[a-z0-9][a-z0-9-]*$/;

/**
 * Render [S##] tokens as HTML superscript anchors. HTML-escapes prose first,
 * then replaces each token with <sup class="cite"><a href="#source-{id}">{n}</a></sup>.
 * Unresolvable tokens are stripped silently (safe fallback — no raw token reaches visitors).
 * Anchor contract: id="source-{recordId}" is rendered by SourceList via SourceRef.
 */
export function renderCitations(text: string): string {
  const escaped = escapeHtml(text);
  return escaped.replace(CITE_RENDER_TOKEN, (_match, digits: string) => {
    const token = `S${digits}`;
    const recordId = SOURCE_REGISTER[token];
    if (!recordId || !PLAUSIBLE_ID.test(recordId)) {
      return '';
    }
    return `<sup class="cite"><a href="#source-${recordId}">${Number(digits)}</a></sup>`;
  });
}
