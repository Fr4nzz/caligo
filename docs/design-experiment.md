# Homepage and participation design

The homepage uses a shorter bilingual headline, serif accents and a wider desktop copy column within the photograph's natural black field. Mobile copy has side gutters and a matching black background. The introduction and priority descriptions share a body-text size and line height.

Statistics use framed cards with a restrained participant highlight and desktop icons. Research cards retain numbered topic labels, image selectors and provenance disclosures, with light borders and internal padding. The desktop introduction uses two columns with a narrow gap and a fine divider.

Registration and community cards appear directly below the Join page heading. Home offers direct registration and Discord links alongside the email address and a small Copy button. The email remains selectable without JavaScript. Copy uses the Clipboard API where available and a selection-based fallback on HTTP, with visible success or failure feedback.

The original concept diagrams, timed Play/Replay behavior, scientific sources and documentary photographs are preserved.

## Verification

Run `pnpm check`, `pnpm build`, `pnpm test` and `pnpm test:nav`. There is no separate lint script. The checks cover bilingual content, shared typography, palette contrast, social metadata and navigation.

For browser verification, build with `PUBLIC_CALIGO_DISCORD_URL` set to the configured invite, then run `pnpm preview --port 4328`. Run `PLAYWRIGHT_MODULE=/path/to/playwright/index.mjs node scripts/verify-design-browser.mjs` using an existing Playwright installation. `REVIEW_URL` can override the default preview URL. No project dependency was added for this optional check.

The browser checks cover English and Spanish at seven widths, image loading, hero gutters, palette selections, participation order, clipboard success and failure, mobile navigation, original diagram playback, reduced motion and no-JavaScript content. Results and screenshots are written to the ignored `.work/design-review/` directory.

Validation uses Chromium. Astro reports two deprecation hints for the HTTP clipboard fallback, with no errors or warnings.
