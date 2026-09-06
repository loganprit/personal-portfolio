---
name: Cobalt Field Manual / Foldout Dossier
description: A personally owned cobalt field manual for Logan's engineering work, story, and contact routes.
colors:
  manual-navy: "#071a3a"
  manual-spine: "#061630"
  manual-cobalt: "#0757dc"
  manual-cobalt-hover: "#0757dc"
  manual-cobalt-dark: "#6aa3ff"
  manual-paper: "#edf0ed"
  manual-paper-deep: "#dce0dd"
  manual-paper-dark: "#10284c"
  manual-paper-deep-dark: "#0b203e"
  manual-ink: "#0c214e"
  manual-ink-dark: "#eef4fc"
  manual-graphite: "#747f8f"
  manual-graphite-dark: "#afbdd1"
  manual-body-muted: "#46546b"
  manual-body-muted-dark: "#c7d2e2"
  portrait-red: "#b4324f"
  portrait-blue: "#063787"
  manual-focus: "#8fb8ff"
  metal-edge: "#78808b"
  metal-dark: "#8f959c"
  metal-mid: "#969ca4"
  metal-light: "#d4d7d9"
  compat-accent: "#2563eb"
  compat-accent-light: "#60a5fa"
  compat-background-light: "#fafafa"
  compat-foreground-light: "#171717"
  compat-muted-light: "#f5f5f5"
  compat-muted-foreground-light: "#737373"
  compat-card-light: "#ffffff"
  compat-border-light: "#e5e5e5"
  compat-background-dark: "#0a0a0a"
  compat-foreground-dark: "#fafafa"
  compat-muted-dark: "#171717"
  compat-muted-foreground-dark: "#a3a3a3"
  compat-card-dark: "#141414"
  compat-border-dark: "#262626"
typography:
  display:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "clamp(3rem, 6.2vw, 6rem)"
    fontWeight: 520
    lineHeight: 0.93
    letterSpacing: "-0.035em"
  displayCompact:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "clamp(2rem, 9vw, 2.7rem)"
    fontWeight: 520
    lineHeight: 0.93
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "clamp(2rem, 4vw, 4rem)"
    fontWeight: 520
    lineHeight: 1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "clamp(1.05rem, 1.7vw, 1.55rem)"
    fontWeight: 600
    lineHeight: 1.35
  body:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0.08em"
  labelCompact:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "0.65rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0.08em"
  caption:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "0.09em"
  captionCompact:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "0.58rem"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "0.09em"
  bodyCompact:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "0.67rem"
    fontWeight: 400
    lineHeight: 1.35
  handwritten:
    fontFamily: "Caveat, cursive"
    fontSize: "clamp(0.82rem, 1.2vw, 1.15rem)"
    fontWeight: 400
    lineHeight: 1.05
  compat-heading:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "clamp(2.25rem, 5vw, 3rem)"
    fontWeight: 900
    lineHeight: 1.25
  compat-body:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  square: "0"
  rule: "0.1rem"
  marker: "0.15rem"
  mobile-sheet: "0.35rem 0.9rem 0.9rem 0.35rem"
  sheet: "0.5rem 1.35rem 1.35rem 0.5rem"
  plate: "0.75rem"
  tab: "0 0.85rem 0.85rem 0"
  compat-md: "0.375rem"
  compat-lg: "0.5rem"
  compat-pill: "9999px"
spacing:
  rule: "1px"
  micro: "0.25rem"
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  section: "3rem"
  section-wide: "4rem"
  section-max: "5rem"
  hero-inset: "0.75rem"
  mobile-inset: "0.6rem"
  spine-width: "9rem"
  mobile-spine-height: "4.6rem"
components:
  manual-spine:
    backgroundColor: "{colors.manual-spine}"
    textColor: "{colors.manual-ink-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0"
    width: "{spacing.spine-width}"
    height: "100vh"
  route-action:
    backgroundColor: "{colors.manual-cobalt}"
    textColor: "{colors.manual-ink-dark}"
    typography: "{typography.title}"
    rounded: "{rounded.square}"
    padding: "0.8rem 1.2rem"
    height: "3.4rem"
  portrait-plate:
    backgroundColor: "{colors.portrait-blue}"
    textColor: "{colors.manual-ink-dark}"
    rounded: "{rounded.plate}"
    padding: "0"
    width: "34%"
    height: "73%"
  metal-index-tab:
    backgroundColor: "{colors.metal-mid}"
    textColor: "{colors.manual-ink}"
    typography: "{typography.title}"
    rounded: "{rounded.tab}"
    padding: "0"
    width: "3.4rem"
    height: "5rem"
  contact-field:
    backgroundColor: "{colors.compat-card-light}"
    textColor: "{colors.compat-foreground-light}"
    typography: "{typography.compat-body}"
    rounded: "{rounded.compat-lg}"
    padding: "0 1.25rem"
    height: "3.5rem"
  contact-action:
    backgroundColor: "{colors.compat-foreground-light}"
    textColor: "{colors.compat-background-light}"
    typography: "{typography.compat-body}"
    rounded: "{rounded.compat-md}"
    padding: "0 1.5rem"
    height: "3.5rem"
---

# Design System: Cobalt Field Manual / Foldout Dossier

## Current refinement

The hero background has square corners. The mobile name scales with viewport width and stays centered beside the portrait. Experience, Story, Skills, and Contact share the same heading scale and section padding.

The current branch revises the dossier composition after visual feedback. A horizontal header, centered content, a smaller square portrait, and Space Grotesk display/body text replace the vertical spine and typewriter-led hero. Courier Prime remains for navigation, the experience toggle, and metadata. Cobalt, navy, paper texture, and ruled sections remain; portrait calibration marks and decorative metal tabs are removed. The CSS is the source of truth for the revised responsive values; the original specification below records the preceding design.

## Overview

**Creative North Star: "Cobalt Field Manual — Foldout Dossier"**

The portfolio is a physical cobalt field manual: precise enough to communicate engineering judgment, worn enough to feel personally owned. The approved Foldout Dossier puts Logan's name, role, and backend bias on an open paper sheet first; sourced experience, story, skills, resume, and contact remain clear routes through the rest of the manual.

The world is built from a navy binder spine, folded technical paper, cobalt construction rules, registration marks, calibration notes, and one full-color portrait plate. It is tactile through seams, fibers, overlaps, and metal tabs rather than through decorative software chrome. The build's actual display face is Courier Prime, with Caveat reserved for brief handwritten annotations.

**Key Characteristics:**

- A fixed navy index spine and an open, edge-to-edge dossier.
- Square ruled plates with a restrained paper/fold texture.
- Cobalt ink for action, route emphasis, and inspection marks.
- A full-color portrait plate with registration and calibration annotations.
- Hiring-facing evidence first, with truthful personal context one route away.

## Colors

The manual uses navy, cobalt, and paper as a measured instrument palette. The photo remains full color: warm red shirt, natural skin, dark hair, and saturated cobalt-blue room light. The light and dark manual states change paper, ink, graphite, and cobalt roles together while leaving the navy ground and portrait identity intact.

### Primary

- **Manual Cobalt** (`{colors.manual-cobalt}`): Light-state rules, active route numerals, action surfaces, timeline emphasis, and the loading state.
- **Dark-State Cobalt** (`{colors.manual-cobalt-dark}`): The brighter counterpart used for dark-state action and emphasis against dark paper.

### Secondary

- **Portrait Red** (`{colors.portrait-red}`): The shirt color retained by the full-color portrait plate; it is not a UI accent.
- **Portrait Blue** (`{colors.portrait-blue}`): The plate base behind the photograph and the visual bridge between portrait light and the navy manual.

### Neutral

- **Manual Navy** (`{colors.manual-navy}`): The page ground and the unchanged dark-state field surrounding every sheet.
- **Spine Navy** (`{colors.manual-spine}`): The fixed binder spine and compact mobile header.
- **Light Paper / Light Paper Deep** (`{colors.manual-paper}` / `{colors.manual-paper-deep}`): The light dossier sheet and its reserved deeper paper role.
- **Dark Paper / Dark Paper Deep** (`{colors.manual-paper-dark}` / `{colors.manual-paper-deep-dark}`): The dark dossier sheet pair.
- **Light Ink / Dark Ink** (`{colors.manual-ink}` / `{colors.manual-ink-dark}`): Primary text on the two manual states.
- **Light Graphite / Dark Graphite** (`{colors.manual-graphite}` / `{colors.manual-graphite-dark}`): Secondary metadata, quiet rules, and supporting text.
- **Muted Body Pair** (`{colors.manual-body-muted}` / `{colors.manual-body-muted-dark}`): Reading copy on light and dark paper.
- **Metal Edge / Metal Dark / Metal Mid / Metal Light** (`{colors.metal-edge}`, `{colors.metal-dark}`, `{colors.metal-mid}`, `{colors.metal-light}`): The four stops of the index-tab material.
- **Manual Focus Blue** (`{colors.manual-focus}`): The visible keyboard focus ring on the manual.

The light manual state maps to Manual Navy, Light Paper, Light Ink, Light Graphite, and Manual Cobalt. The dark state keeps Manual Navy as the ground and maps to Dark Paper, Dark Ink, Dark Graphite, and Dark-State Cobalt. Shared `/contact` and non-home components retain their existing semantic compatibility palette: the `compat-*` tokens cover accent, page, muted, card, border, foreground, and dark counterparts without redefining the manual palette.

### Named Rules

**The Cobalt Means Inspection Rule.** Use cobalt for action, active route emphasis, timeline focus, and marks that read like an inspection instrument. The portrait's red remains photographic evidence, not a second interface accent.

**The Paired Manual State Rule.** Any new manual surface, text role, rule, or action must have a deliberate light and dark counterpart. Keep the navy ground and portrait identity stable across the two states.

## Typography

**Display Font:** Courier Prime with ui-monospace fallback

**Body Font:** Courier Prime with ui-monospace fallback

**Label/Mono Font:** Courier Prime with ui-monospace fallback
**Handwritten Accent:** Caveat with cursive fallback

**Character:** Courier Prime gives the manual its typewriter evidence: compact, measured, and legible at a glance. Caveat is a physical annotation layer, not a competing voice. Although the source comp suggested a serif/typewriter display, the shipped system resolves that direction through Courier Prime everywhere the manual speaks.

### Hierarchy

- **Display** (520, `clamp(3rem, 6.2vw, 6rem)`, line-height 0.93, letter-spacing -0.035em): The two-line Logan Pritchett identity on the opening sheet; the compact phone range tightens to `clamp(2rem, 9vw, 2.7rem)`.
- **Headline** (520, `clamp(2rem, 4vw, 4rem)`, line-height 1): Section titles such as “The route here wasn’t linear.” and “Tools I reach for.”
- **Title** (600, `clamp(1.05rem, 1.7vw, 1.55rem)`): The role line and compact local hierarchy anchors.
- **Body** (400, 1rem, line-height 1.65): Thesis copy, story ledger text, and reading descriptions. Contact compatibility copy remains 1.125rem with 1.5 line-height.
- **Label** (500, 0.72rem, line-height 1.35, letter-spacing 0.08em): Spine links, route metadata, calibration labels, and uppercase inspection text.
- **Caption** (400, `clamp(0.58rem, 0.7vw, 0.72rem)`, letter-spacing 0.09em): Portrait plate caption text.
- **Handwritten** (400, `clamp(0.82rem, 1.2vw, 1.15rem)`): The short focus / ship / iterate note and the “verify assumptions” calibration note.

### Named Rules

**The Courier Evidence Rule.** Keep Courier Prime as the shared family and create hierarchy with scale, weight, line, and tracking before adding another display face.

**The One Handwritten Layer Rule.** Use Caveat only for concise annotations attached to the portrait plate; never use it for navigation, headings, long copy, or controls.

## Layout

The desktop composition is an open dossier anchored by a fixed 9rem spine. The hero leaves a 0.75rem inset around a sheet whose minimum height is the viewport minus 1.5rem; its paper fold and construction grid sit at roughly two-thirds of the sheet. The identity copy occupies the upper-left field (`top: 7%`, `left: 6.2%`, width 52%), while the portrait overlaps the right fold (`top: 4.8%`, `right: 6.1%`, width 34%, height 73%). Four route cells close the lower third between 5.5% side insets, with numbered metal tabs outside the right edge.

Below the hero, experience, story, skills, and contact are separate ruled paper plates capped at 76rem. Plates use a `clamp(2rem, 5vw, 5rem)` interior pad, a 3rem inter-plate rhythm, and a final footer gutter. Experience keeps a narrow reading structure inside the plate: a full-width Work/Education switch, a two-pixel timeline, 53px markers, source-backed role details, and compact technology labels. Story uses three ledger columns on wide screens; skills use a three-column ruled index; contact pairs a wide prompt with a right-aligned action.

At 900px and below, the spine translates to a 4.6rem horizontal header and the hero loses its left offset. The sheet becomes a two-column field notebook: copy leads, a medium portrait occupies the trailing column, and the four route cells close the sheet. At 560px and below, the portrait tightens to a 6.5–7.5rem square beside the identity, compact evidence replaces the full result copy, and the duplicated route strip becomes `View resume` plus `Email Logan`. The portrait keeps its frame, corner registration, and `LP—01` caption while hiding its crosshair and micro-annotations. At 360px and below, the sheet stamp and header mark yield enough vertical and horizontal space for the actions to remain in the first viewport. Section headings stack, skills become one column, and contact actions align to the start. No route depends on horizontal scrolling.

## Elevation & Depth

Depth is material and tonal before it is dimensional. The navy field separates the paper; folds, one-pixel rules, repeating lines, and portrait overlap establish the hierarchy. Shadows are shallow physical cues for the sheet, spine, portrait, tabs, and lower plates. The manual does not use broad floating software-card shadows, gradients, glass, or a dashboard grid. The retained compatibility contact route may still use its existing small control shadow.

### Shadow Vocabulary

- **Sheet Shadow** (`0 18px 54px rgb(0 5 18 / 32%)`): The open hero sheet against the navy field.
- **Spine Shadow** (`10px 0 28px rgb(0 8 24 / 24%)`): The binder spine's physical separation from the page.
- **Portrait Lift** (`0 13px 28px rgb(3 14 36 / 30%)`): The overlapping photograph plate.
- **Tab Shadow** (`4px 5px 12px rgb(4 14 32 / 22%)`): The numbered metal index tabs.
- **Section Lift** (`0 2px 0 rgb(255 255 255 / 12%), 0 5px 12px rgb(0 5 18 / 14%)`): The ruled plates below the opening sheet.

### Named Rules

**The Overlap Before Shadow Rule.** Establish depth with fold, plate, and seam relationships first; add only the small shadow that makes a real layer readable.

## Shapes

Manual geometry is predominantly square: one-pixel graphite rules, two-pixel cobalt emphasis, calibration ticks, and rectangular ledger cells. The hero sheet uses a subtly softened physical edge (`0.5rem 1.35rem 1.35rem 0.5rem` on desktop and `0.35rem 0.9rem 0.9rem 0.35rem` on mobile). The portrait uses a 0.75rem plate radius; the metal tabs use a right-facing `0 0.85rem 0.85rem 0` silhouette; section plates use a 0.1rem corner and timeline technology labels use a 0.15rem corner.

The home/manual route strip is square and ruled, not pill-shaped. The retained `/contact` compatibility surface continues to use its existing 0.5rem field corners, 0.375rem submit corner, and full-pill controls where its shared components require them. This compatibility boundary is intentional rather than a reason to round the manual.

## Components

### Buttons

- **Shape:** Manual route actions and the Email Logan action are square with no pill radius. Standard actions are 3.4rem high with 0.8rem 1.2rem padding; the compact phone pair uses 0.75rem padding.
- **Primary:** On phones, View resume is the cobalt primary action while Email Logan remains a quieter paper action. Both use the Courier Prime title treatment and an inline icon for movement or file intent.
- **Hover / Focus:** Route cells fill with cobalt and invert to light text. The contact action deepens to Manual Cobalt Hover. Manual focus is a visible three-pixel ring with a three-pixel offset; reduced motion removes movement rather than removing focus.
- **Compatibility:** `/contact` retains the existing inverted action: 3.5rem height, 0.375rem corner, semantic foreground/card inversion by theme, and the shared small control shadow.

### Cards / Containers

- **Opening Sheet:** `manual-sheet` is the foldout surface: paper texture, central seam, paper edge, and a shallow sheet shadow. It is a composition, not a generic card.
- **Ruled Plates:** Experience, story, skills, and contact use paper-colored plates with repeating two-rem ruled lines, one-pixel graphite borders, and broad responsive interior padding.
- **Internal rhythm:** Use the documented spacing scale; keep headings, route cells, ledger columns, and timeline details aligned to the same rule system.

### Inputs / Fields

The `/contact` compatibility route uses card-colored fields with a one-pixel semantic border, 0.5rem corner, 1.25rem horizontal inset, and 3.5rem height. The message field keeps the same treatment with a 10rem minimum height. Focus changes the border to the accent counterpart and adds a four-pixel accent halo. These tokens remain documented so the manual redesign does not break the separate contact flow.

### Navigation

On `/`, the fixed `manual-spine` is the binder/index: a 9rem vertical rail with the favicon mark, “Cobalt field manual,” vertical Index / Plates / Notes / Appendix links, LP—01 edition marker, and the existing theme control. At 900px it becomes a horizontal 4.6rem header; at 560px its label hides while the links and theme control stay reachable. Non-home routes retain the bounded `.site-nav`: a 1px semantic border, 0.5rem corner, card surface, Courier Prime uppercase links, and theme control.

### Route Strip

The four lower-third route cells are semantic anchors for Work, Story, Contact, and the canonical Resume. Each cell carries a cobalt number, a concise label, and an arrow except Resume, which carries the file icon. The Resume anchor must continue to resolve through `/api/resume`.

### Portrait Inspection Plate

The 34%-wide desktop portrait plate is a full-color photograph cropped with `object-fit: cover` and a slight 0.25-degree rotation. A 4.5% inset frame, four 2px registration corners, center crosshair, lower caption, handwritten focus / ship / iterate notes, and the `CAL 1.0` / `verify assumptions` box turn the portrait into inspected evidence. The calibration box includes a leader line and uses Caveat only for its note.

### Indexed Experience Plate

The existing Work/Education timeline is restyled into a ruled inspection plate without changing source-backed roles, achievements, technologies, education, or route behavior. The switch remains full width; the selected state uses a cobalt field, the timeline remains two pixels wide, markers stay 53px, and technology labels become near-square 0.15rem badges. Motion remains subordinate to reading and honors reduced motion.

### Story Ledger and Skills Index

Story is a three-column ledger on wide screens and a stacked ledger on mobile, separated by one-pixel vertical or horizontal rules. Skills are an ordered ruled index: three columns on wide screens, two at the tablet width, and one below 560px. Both preserve the direct first-person content from the data source.

## Do's and Don'ts

### Do:

- **Do** keep the navy spine, paper sheet, fold, cobalt rules, and metal tabs as the system's reusable physical grammar.
- **Do** use Courier Prime for manual display, body, metadata, and controls; reserve Caveat for short portrait annotations.
- **Do** preserve the light and dark manual mappings and the no-flash theme boot, visible focus, reduced-motion behavior, and keyboard access.
- **Do** keep professional evidence first while preserving truthful story, faith, language learning, AI, and Apple interests from the source data.
- **Do** keep the canonical Resume route at `/api/resume` and leave direct contact and professional profile links intact.
- **Do** retain the portrait's natural warm skin, red shirt, dark hair, and cobalt-blue room light.

### Don't:

- **Don't** reintroduce the discarded rounded “Engineer's Calling Card” system, generic floating cards, pill navigation, glass, gradient blobs, or dashboard chrome on the manual surface.
- **Don't** turn inspection marks, calibration labels, or paper texture into invented credentials, metrics, dates, or project claims.
- **Don't** spread the Caveat annotation voice into headings, navigation, body copy, or controls.
- **Don't** use large software-card shadows where a fold, rule, tone, or overlap explains depth.
- **Don't** hide the route strip, timeline, contact path, theme control, or source-backed details on narrow screens.
- **Don't** alter the identity photograph into a monochrome cyanotype or replace it with stock imagery.
