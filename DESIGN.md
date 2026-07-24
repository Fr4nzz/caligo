# Design

## Source of truth

- Status: Active
- Last refreshed: 2026-07-24
- Primary product surfaces: bilingual public website at `/en/` and `/es/`
- Evidence reviewed: `README.md`, `src/styles/tokens.css`, `src/styles/global.css`, `src/components/pages/HomePage.astro`, `src/components/HeroMedia.astro`, `refs/plan-mejora/04_DIRECCION_VISUAL.md`, and desktop/mobile screenshots supplied during review

## Brand

- Personality: scientifically rigorous, regional, collaborative, confident, and visually grounded in living specimens
- Trust signals: named sources, image credits, clear evidence status, real institutional context, and consistent bilingual presentation
- Avoid: generic technology styling, decorative scientific notation, invented claims, weak caveats, heavy shadows, glow, and text placed over biologically important image detail

## Product goals

- Goals: invite researchers and institutions to understand, trust, and join Caligo
- Non-goals: present unapproved governance as final, imply commitments that do not exist, or turn the site into a publication database
- Success signals: users can understand the initiative, proposed pilot projects, scientific workflow, leadership, and participation routes without losing source context

## Personas and jobs

- Primary personas: Lepidoptera researchers, taxonomists, genomic facilities, students, funders, collection staff, and potential collaborators
- User jobs: understand the scientific case, inspect proposed work, assess credibility, find collaborators, and join the network
- Key contexts of use: desktop research environments, narrow desktop windows, tablets, and mobile phones in English or Spanish

## Information architecture

- Primary navigation: Home, Science, Pilot projects, Network, About, Participate
- Core routes/screens: `/`, `/science`, `/projects`, `/network`, `/about`, `/participate`, and `/caligo`
- Content hierarchy: initiative thesis, scientific approach, proposed work, network capacity, leadership, governance, and participation

## Design principles

- Let biological evidence lead: specimen imagery and scientific diagrams carry meaning, not decoration
- Keep provenance visible: sources, credits, licences, and proposal status remain readable
- Separate content territories: image focal subjects, copy, controls, and attribution must not compete for the same space
- Preserve bilingual parity: English and Spanish use the same hierarchy and equivalent layout quality
- Tradeoff: preserve a clear subject/copy boundary before maximizing image area or headline width

## Visual language

- Color: Caligo’s warm neutral palette with a burnt-orange accent; hero copy uses fixed ivory on a matte near-black field
- Typography: Space Grotesk for display, Inter for prose and UI, JetBrains Mono for labels and provenance
- Spacing/layout rhythm: wide specimen-plate compositions followed by restrained content sections
- Shape/radius/elevation: hairlines, small radii, and minimal elevation
- Motion: user-controlled when explanatory; no generic entrance animation
- Imagery/iconography: credited documentary imagery and code-native diagrams; icons must encode a recognizable concept

## Components

- Existing components to reuse: `Base`, `Header`, `HeroMedia`, `CommunityStats`, `PrincipleGrid`, `MediaConceptViewer`, and shared CTA/button styles
- New/changed components: the Home hero may change its internal CSS geometry without creating a parallel hero component
- Variants and states: desktop split composition; mobile stacked composition; light/dark page modes do not alter hero contrast
- Token/component ownership: global tokens remain in `src/styles/tokens.css`; page-specific hero geometry stays in `HomePage.astro`

## Accessibility

- Target standard: WCAG 2.2 AA
- Keyboard/focus behavior: every CTA and source link remains keyboard reachable with visible focus
- Contrast/readability: hero text uses the photograph’s naturally dark right side, never the butterfly’s head or eye; no overlay, filter, clipping edge, or added panel may alter the specimen
- Screen-reader semantics: one page `h1`, meaningful photo alternative text, and visible attribution
- Reduced motion and sensory considerations: the hero remains static; explanatory motion respects `prefers-reduced-motion`

## Responsive behavior

- Supported breakpoints/devices: approximately 390 px mobile through wide desktop; the critical narrow-desktop boundary is immediately above 60 rem
- Desktop layout above 60 rem: the landscape photograph remains full bleed at its original brightness and composition; copy begins at 64 vw over the image’s own dark field, and hero height follows the photograph’s ratio until its wide-screen cap
- Mobile layout at or below 60 rem: the same landscape composition appears first at its intrinsic aspect ratio, followed by a dedicated dark copy field; no alternate crop, overlay, or copy obscures the specimen
- Intermediate widths: title, body, actions, and attribution may wrap or increase hero height, but they must not cross into the specimen territory
- Validation widths: 390, 960, 961, 1024, 1280, 1440, and 1920 CSS pixels
- Touch/hover differences: full-width mobile CTAs; hover styling is supplemental and never the only state cue

## Interaction states

- Loading: eager hero image with intrinsic dimensions to limit layout shift
- Empty: missing canonical hero media fails at build time
- Error: broken or absent factual media records must not silently render placeholder claims
- Success: primary and secondary hero actions remain visually distinct
- Disabled: not applicable to the static hero
- Offline/slow network: responsive image sources and static copy preserve the page structure

## Content voice

- Tone: direct, concise, scientifically literate, and inviting
- Terminology: use “pilot project” in English and “proyecto piloto” in Spanish
- Microcopy rules: no em dashes, no internal editorial language, no defensive disclaimers that weaken the public presentation, and no facts without a documented source

## Implementation constraints

- Framework/styling system: Astro, plain CSS, and vanilla JavaScript
- Design-token constraints: use existing variables unless a cross-site token is genuinely required
- Performance constraints: no new dependencies and no additional hero asset unless the current responsive sources cannot satisfy the composition
- Compatibility constraints: modern evergreen browsers and CSS without DOM/focus reordering
- Test/screenshot expectations: automated geometry contracts plus browser review in EN/ES at wide desktop, narrow desktop, and 390 px mobile

## Open questions

- None currently block the responsive hero contract.
