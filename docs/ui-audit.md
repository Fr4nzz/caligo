# Caligo UI audit

Audited 8 September 2026 against freshly fetched `origin/main` (`16fc6eb3a704e1556344c7cff919d69e386f3897`). The reviewed branch was `review/nicol-september-feedback` before the A and B remediation passes. This is a source and screenshot audit, not a full WCAG certification.

## Design read

Caligo is a bilingual scientific consortium site for researchers, collections, sequencing facilities, students, and potential partners. Its strongest direction is editorial natural history: documentary specimen photography, readable scientific evidence, quiet warm neutrals, precise attribution, and a restrained burnt-orange accent.

For the broader B version, the appropriate dials are:

- Design variance: **6/10**. Use measured asymmetry and clearer editorial pacing without disturbing the established identity.
- Motion intensity: **3/10**. Use interaction feedback and the existing explanatory animation. Avoid ambient entrance effects.
- Visual density: **4/10**. Keep enough information for scientific credibility while giving figures and decisions room to breathe.

The UI/UX Pro Max search suggested Swiss Modernism 2.0, which supports the existing grid discipline and restrained interaction. Its proposed navy palette and new font pairing do not fit the established Caligo brand or the user's accepted fonts, so those recommendations should not be applied. The existing warm palette, Space Grotesk, Inter, JetBrains Mono, serif hero accent, and butterfly imagery are stronger product-specific evidence.

## Audit health score

| Dimension | Score | Evidence |
| --- | ---: | --- |
| Accessibility | 3/4 | Semantic sections, visible focus, meaningful alt text, intrinsic image dimensions, keyboard controls, and reduced-motion handling are present. The 36 px email-copy control falls below the site's 44 px touch target floor. |
| Performance | 3/4 | Astro emits mostly static HTML, the hero has responsive sources, and below-fold media is lazy-loaded. New leadership images add about 1.4 MB across eight lazy assets; no clear blocking regression was found. |
| Responsive design | 3/4 | Existing browser checks cover 320-1920 px without horizontal overflow. Dense tables and publication cards remain technically responsive but become harder to read before they break. |
| Theming | 3/4 | Semantic tokens support Caligo, Canopy, and Morpho in light and dark modes. A few component-specific raw colors remain, mainly intentional white scientific plates and the fixed black photographic hero. |
| Implementation integrity | 2/4 | The visual system is recognizable, but actions, cards, borders, numbering, and metadata presentation are reimplemented in several components. The deterministic detector also flags the side-tab card accent. |
| **Total** | **14/20** | **Good foundation, with major consistency and information-design issues to address.** |

## What changed from `origin/main`

| Area | Document-review branch | Assessment |
| --- | --- | --- |
| Home priorities | Three priorities became four and the grid changed from three columns to two. | Good content change. The 2 by 2 layout is easier to read and avoids a generic three-card row. Preserve moderate framing rather than stripping the section further. |
| Home research photographs | The four cards now show one selected image instead of sliders. | Good implementation of the document feedback. It reduces distraction while retaining image details and provenance. |
| Science overview | Added an explanation of reference genomes, the 1,000-genome target, shared analysis and training, three publication examples, and responsible sampling. | Stronger scientific orientation, but it adds substantial length and three new layout systems before the existing four questions. |
| Science publications | Added three equal publication cards with key figures, captions, licences, and links. | Provenance is excellent. The three-column card format makes detailed scientific figures and long titles too small to scan comfortably. |
| About | Updated community metrics, goals, principles, eight leadership portraits, facilities, websites, and network relationships. | The facts and real portraits improve trust. The long page now needs stronger wayfinding and less metadata inside each profile card. |
| Join | Expanded the six contribution types with headings, explanations, and a route for organism suggestions. | The added copy answers “how can I help?” well. The page is longer and visually repeats the numbered-list treatment already used elsewhere. |
| Pilot projects | No document-driven pilot rewrite. | Correct. Nicol said this part of the document was unfinished. |

The small email-copy control and the Home Discord button without an icon are present on `origin/main`; they are not regressions caused by the Google document work. They remain valid defects and belong in version A because the user explicitly called them out.

## Positive findings to preserve

1. **The hero is specific to Caligo.** The accepted short bilingual headline, specimen photograph, dark image field, typography, and direct Science and Pilot Project routes create a clear first impression. Preserve its composition and fonts.
2. **Evidence has provenance.** Photos and publication figures include meaningful alternative text, dimensions, captions, sources, licences, and adaptation notes. That is a real trust advantage for the research audience.
3. **Bilingual structure is parallel.** English and Spanish share the same component hierarchy, navigation, and responsive behavior rather than drifting into separate templates.
4. **Motion is restrained and meaningful.** The original `ConceptDiagram` Play/Replay sequence explains a scientific process and respects reduced motion. It should remain unchanged.
5. **The document feedback improved task clarity.** Home now introduces four concrete priorities; Join names six useful contribution routes; About states the scale and regional structure; Science explains what reference genomes enable.

## Priority findings

### P1: Similar actions use different controls

**Evidence:** `CopyEmail.astro:8-57` renders a 0.85 rem email label, a separate 36 px mini-button, and a status line. `HomePage.astro` renders its Discord action directly, while `DiscordCTA.astro` owns the icon and active/pending behavior used on Join. Global buttons already have a shared visual contract in `global.css:357-378`.

**Impact:** Visitors have to relearn whether a contact action is a button, a small utility, or a text link. The Home closing section looks unfinished beside the two large CTAs. The 36 px button is also harder to tap.

**Version A fix:**

- Make the entire email action a normal shared button with a mail or copy icon and a short label such as “Copy email”. Keep the address visible nearby or within the button where it can wrap safely.
- Confirm success with a transient toast or anchored popover that includes a checkmark, uses `role="status"` and `aria-live="polite"`, does not steal focus, and clears after about 3-5 seconds.
- Keep the manual-copy failure message in the same feedback surface.
- Extract a reusable `DiscordButton` for Home and Join. It should own the official Discord mark, active and pending states, accessible label, external-link behavior, and shared button styling.
- Use the same 44 px minimum height, focus ring, hover state, pressed state, icon size, and gap for all three participation actions.

### P1: Publication figures are treated like feature-card thumbnails

**Evidence:** `SciencePage.astro:124-175` places three long paper titles and detailed figures in equal cards. At normal desktop width, maps, chromosome labels, and phylogenetic annotations become too small to inspect. The source image can be opened, but the primary page view does not support the section's scientific purpose.

**Impact:** The most credible new material is visually reduced to decoration. Researchers see three attractive tiles before they can read the evidence.

**Version B fix:** Replace the three-up grid with three full-width editorial rows. Give each figure a large, stable visual column and place the title, one-sentence finding, citation, licence, and “Read paper” action beside it. Alternate the text alignment once or use a consistent figure-left layout; avoid a card carousel. On mobile, stack figure first, then finding and source.

### P2: Long pages lack local orientation

**Evidence:** About now contains community metrics, goals, the name, eight principles, eight people, an eight-row facilities table, and network relationships. Science contains five major blocks before responsible sampling. The global header only exposes top-level routes.

**Impact:** A returning scientist who wants facilities, principles, publications, or sampling guidance must scan and scroll through the entire page.

**Version B fix:** Add a compact local contents row immediately below the page header on About and Science. Use plain anchor links, visible focus, the sticky-header scroll offset, and an overflow-safe horizontal presentation on narrow screens. Keep it secondary to the page title and do not add another sidebar.

### P2: Leadership cards are visually heavy and metadata-rich

**Evidence:** `PersonCard.astro` combines a square image, repeated photo-credit strip, name, role, biography, affiliation, regional ties, and source link inside every bordered gradient card. `LeadershipGrid.astro` places four equal cards across wide screens.

**Impact:** The portraits build trust, but repeated credit and mono metadata compete with names and roles. At four columns the bios become narrow and create a long wall of equal visual weight.

**Version B fix:** Use a cleaner two- or four-column portrait directory with a clear hierarchy: image, name, concise role, institution, profile link. Move regional ties and full biography into a disclosure or remove them where the public source already supplies the detail. Keep image credits accessible in a shared note or concise caption, subject to attribution requirements.

### P2: Facilities are desktop-table-first

**Evidence:** `FacilityTable.astro` adds a fourth website column and relies on horizontal overflow. Some rows contain two destinations.

**Impact:** The table is efficient on desktop, but on mobile users must pan to discover websites. This is especially awkward for visitors looking for a facility in their country.

**Version B fix:** Preserve the table from tablet upward. At mobile width, render each facility as a compact definition list with institution, country, platforms, and website links. Keep the same data source so both presentations cannot diverge.

### P2: Side-tabs and one-off accent ticks weaken the system

**Evidence:** The Impeccable detector found `border-left: 2px solid var(--accent)` in `JoinCTA.astro:67`; the same pattern is used by the Discord card and the Join advisory. `ParticipatePage.astro:101` and `:111` add separate decorative ticks.

**Impact:** These marks repeat without communicating state or hierarchy. They make otherwise quiet panels look like unrelated callouts and recall the vertical-line treatment the user already rejected on research panels.

**Version B fix:** Remove side accent borders from the two participation cards and advisory. Use the normal hairline frame, spacing, heading weight, and button hierarchy. Retain accent color for actions and small functional details.

### P3: Numbering is overused as a visual motif

**Evidence:** Home priorities, Home research cards, Science publications, About principles, Join contribution routes, and some project media all use mono indices or counters.

**Impact:** Numbers help ordered processes, but most of these groups are categories rather than sequences. Repetition makes pages feel templated and gives equal emphasis to metadata and content.

**Version B fix:** Keep numbering where order or cross-reference matters, such as the established research panels and formal principles. Remove it from publication examples and Join contribution categories. Use headings, spacing, and grouping for those sections.

## Version A scope: faithful document response

Version A should remain visually close to the document-review branch and contain only:

1. All completed Google document and embedded-comment changes already represented in the branch.
2. The Home and Join email action rebuilt as a shared full-size button with accessible transient copy confirmation and failure feedback.
3. The Home Discord action rebuilt from the same reusable icon-bearing control used by Join.
4. A small cleanup of duplicated action CSS required to make those components consistent.

Version A should not alter the accepted hero, fonts, network-stat cards, moderately framed research panels, project page, concept diagram, or overall section composition.

## Version B scope: broader tasteful refinement

Version B should start from A and add these changes in order:

1. Establish one action taxonomy: filled primary button, quiet outlined secondary button, and text link. Reuse it across Home, Join, footer, projects, and scientific source actions.
2. Add local contents navigation to About and Science.
3. Replace the Science publication grid with large editorial evidence rows.
4. Reduce leadership-card metadata and improve portrait rhythm.
5. Add a mobile facility presentation sourced from the existing facility data.
6. Remove side-tabs, redundant ticks, and non-semantic numbering.
7. Add subtle pressed feedback to buttons and a short toast transition using only transform and opacity. Respect reduced motion.
8. Review page-level spacing after the structural changes, particularly the transition from page headers into first sections and the dense second half of About.

No new dependency is needed. Astro, shared CSS tokens, vanilla JavaScript, existing icons, and the supplied media are sufficient. Do not introduce GSAP, Three.js, background particles, decorative parallax, generic reveal animations, glass panels, or a new palette. Those treatments would compete with the specimens and research evidence.

## Page-by-page notes

### Home

- Preserve the hero, accepted typography, framed statistics, 2 by 2 priorities, and single-image research cards.
- Standardize the three closing actions. The registration action is primary; Discord and email are secondary peers with recognizable icons.
- Avoid adding more butterfly decoration. The full-bleed Caligo photograph and logo already carry the theme.

### Science

- The new reference-genome introduction and target panel are effective.
- Give publications more visual space and add local jump links.
- Preserve the original `ConceptDiagram` exactly, including its user-controlled Play/Replay behavior.
- Keep photo sliders only where they help compare genuinely different evidence. A single representative photograph is better when alternatives are near-duplicates.

### Pilot projects

- Keep this page unchanged until the team finishes its document feedback.
- The sticky photograph and concise proposal fields are an effective reading pattern.

### About

- Preserve the updated metrics, goals, principles, people, facilities, and relationship text.
- Improve hierarchy within the long network section. Profiles and facilities should not compete at equal density.
- Retain real portraits and source links; they are stronger than generated or stock imagery.

### Join

- Preserve the action cards at the top and the six concrete ways to contribute.
- Make registration, Discord, committee, and email controls follow the same action system.
- Remove side-tabs and extra decorative ticks.
- Treat copy confirmation as transient feedback, not a permanent new line of content.

### Shared chrome

- Header, active navigation, language switcher, theme switcher, focus system, footer, and route structure are sound.
- Footer email behavior should follow the chosen contact convention. If the primary experience is “copy email,” do not leave an unexplained mail-app interaction as the only footer behavior.

## Verification targets for both versions

- English and Spanish at 390, 960, 961, 1024, 1440, and 1920 CSS pixels.
- Light and dark Caligo modes; smoke-check Canopy and Morpho because shared tokens remain supported.
- Keyboard-only navigation through header, local contents, cards, publication links, and all participation actions.
- Copy success, clipboard-denied fallback, manual-copy failure, automatic dismissal, and repeated rapid clicks.
- `aria-live` announces one concise status message without moving focus.
- Every interactive target is at least 44 by 44 CSS pixels where applicable.
- No horizontal page overflow; the facility mobile layout does not require lateral panning.
- Publication images retain intrinsic dimensions and never crop scientific labels.
- Original ConceptDiagram source and behavior remain byte-for-byte unchanged.
- Existing content, contrast, internal-link, social metadata, Astro check, build, and browser geometry checks pass.

## Source notes

- The bundled Impeccable detector returned two side-tab warnings: the production `JoinCTA` and the internal `theme-review` page. No P0 detector finding was returned.
- UI/UX Pro Max matched success feedback and toast guidance: show a visible confirmation, announce it politely, and dismiss transient feedback after roughly 3-5 seconds.
- The skills' generic suggestions to replace accepted fonts, switch palettes, add broad entrance motion, or maximize whitespace were rejected where they conflicted with the project brief and prior user decisions.


## Implemented review versions

The findings above describe the pre-remediation branch. The final local previews are:

- A, `review/nicol-september-feedback`, port 4330: completed document feedback plus shared full-size email-copy and Discord buttons. Copy success uses a dismissible five-second toast; failure keeps a selectable address visible.
- B, `review/tasteful-ui`, port 4331: A plus compact inner headers, shared local navigation, larger publication rows, compact portrait records, unified participation cards, quieter category labels, and larger shared action targets.

Some recommendations were deliberately adapted: all researcher biographies and regional ties remain visible; the facilities table retains its comparative layout with a labelled keyboard-focusable scroll region; existing footer email remains an ordinary email link. Pilot content and the original concept diagram remain unchanged. These are reviewable design choices, not unimplemented mandatory fixes.

Both versions passed Astro check/build, content and bilingual integrity checks, typography and palette checks, palette contrast checks, navigation/internal-link checks, and the browser review script. Browser coverage includes Home at 320–1920 px, all inner pages at 390 px in EN/ES, six theme combinations, clipboard API/fallback/failure, no-JavaScript content, reduced motion, and navigation. Two diagnostic hints remain for the legacy clipboard fallback needed by HTTP previews. This is targeted verification, not a comprehensive accessibility certification.
