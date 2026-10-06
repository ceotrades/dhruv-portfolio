---
name: Dhruv Kapoor
description: Six shipped builds laid out as a darkroom contact sheet, keepers marked in china marker.
colors:
  film: "#0c0c0b"
  rebate: "#161614"
  rule: "#2a2a27"
  edge: "#8f8e87"
  sprocket: "#a9a8a0"
  ink-2: "#bdbcb4"
  ink: "#ecebe4"
  marker: "#f2c230"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(4rem, 30.5vw, 15rem)"
    fontWeight: 800
    lineHeight: 0.82
    letterSpacing: "-0.012em"
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3rem, 13vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 62"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.875rem, 3.2vw, 2.375rem)"
    fontWeight: 750
    lineHeight: 0.95
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 72"
  section:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 75"
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 2.4vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.38
    fontVariation: "'wdth' 93"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 87.5"
  stack:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.04em"
    fontVariation: "'wdth' 87.5"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  max: "80rem"
  frame-pad: "1.625rem 0.75rem"
  section-gap: "clamp(5rem, 11vw, 8.5rem)"
components:
  button-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.film}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.25rem"
    height: "3rem"
  button-solid-hover:
    backgroundColor: "{colors.marker}"
    textColor: "{colors.film}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.25rem"
    height: "3rem"
  button-outline-hover:
    textColor: "{colors.marker}"
  frame:
    backgroundColor: "{colors.rebate}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.frame-pad}"
  edge-print:
    textColor: "{colors.edge}"
    typography: "{typography.label}"
  tools-strip:
    backgroundColor: "{colors.rebate}"
    textColor: "{colors.ink}"
    padding: "2.25rem 0"
---

# Design System: Dhruv Kapoor

## Overview

**Creative North Star: "The Contact Sheet"**

The site is a darkroom proof sheet. Each build is a numbered frame of negative: a real screenshot sitting in a strip of film base, with the film's own edge print carrying the frame number, the status and the stack. The visitor is the editor with the loupe, and the keepers are boxed in yellow china marker. Everything else is film, print and edge.

Density is low and the voice is typographic. A monumental condensed name opens the page, then the sheet takes over. Colour is almost absent: a warm near-black ground, off-white print, a grey for edge data, and one yellow that only appears where a hand has touched the sheet or where the visitor is touching it now. There are no shadows, no gradients, no glass and no rounded corners. Depth comes from the two film tones (base and rebate) and from the sprocket perforations that tell you the strip is film.

Hand marks are generated, never drawn as assets: each box, underline and ring is an SVG stroke built at the mark's real pixel size from a seeded random, so the nib is the same width on a phone and a desktop and every frame keeps its own hand across redraws.

**Key Characteristics:**
- Two film tones (base and rebate) and hairline rules carry all structure; no elevation.
- Archivo's width axis does the hierarchy work: 62% for the name and page titles, 72-75% for frame and section titles, 87.5-93% for UI and leads, 100% for body.
- Martian Mono appears only as edge print: frame numbers, status, stack, captions.
- China-marker yellow is a hand mark or an interaction state, never resting chrome.
- Sprocket perforations mark anything that is film: the frames and the tools strip.

## Colors

A warm monochrome film palette with a single china-marker yellow.

### Primary
- **China Marker Yellow** (marker): the hand-mark colour. It strokes the box around a keeper frame (static on marked frames, drawn on hover/focus, drawn on touch screens as the frame crosses mid-screen), the underline and ring on result figures, and the favicon box. It also carries every interaction state: focus outline (2px, 4px offset), text selection, link underline on hover, button and pager hover, the skip link, the caret.

### Neutral
- **Film Base** (film): the page ground and the 1px gutters between abutting frames. Also the text colour on solid buttons and selection.
- **Rebate** (rebate): the film strip itself. Frame backgrounds, the phone's vertical strip, the tools strip.
- **Hairline** (rule): every 1px divider: masthead rule, sheet head, story section tops, ledger rows, pager, footer.
- **Edge Print Grey** (edge): edge-print text, list markers, icons in links and pager, resting link underlines, the blank-frame caption.
- **Sprocket Grey** (sprocket): the fill of the sprocket holes, baked into the two perforation SVGs.
- **Print Dim** (ink-2): secondary prose, frame descriptions, the dimmed half of the intro, status lines, ledger labels.
- **Print** (ink): primary text, titles, solid button fill, outline button border.

### Named Rules
**The One Marker Rule.** Yellow appears only as a hand mark (box, underline, ring) or as the response to the visitor's hover, focus or selection. It never fills a resting surface, never colours resting text, never decorates.

**The Keeper Rule.** A box means "keeper". Only frames carrying real figures are boxed at rest; a frame with no print (missing screenshot) is never boxed, and the script strips the mark if the image fails.

## Typography

**Display Font:** Archivo variable (self-hosted, weight 100-900, width 62-125%) with Helvetica Neue, Arial
**Body Font:** Archivo variable at 100% width
**Label/Mono Font:** Martian Mono variable (self-hosted, width 75-112.5%) with ui-monospace, Menlo

**Character:** One grotesque stretched across its width axis, from poster-condensed caps to an even reading width, set against a narrow mono that reads like the data line printed on film stock.

### Hierarchy
- **Display** (800, 62% width, clamp(4rem, 30.5vw, 15rem) on phone stacked two lines; min(15.2vw, 15.25rem) on one line from 46rem; 0.82 line-height, uppercase): the name on the home masthead only.
- **Headline** (800, 62% width, clamp(3rem, 13vw, 6rem), 0.88, uppercase, balanced): project page title and the 404 title.
- **Title** (750, 72% width, clamp(1.875rem, 3.2vw, 2.375rem), 0.95): frame titles under each negative. Story section headings use the same voice at clamp(1.5rem, 2.6vw, 1.875rem); pager names and the footer email at 68% width.
- **Section** (700, 75% width, clamp(1.375rem, 2.5vw, 1.75rem), uppercase, 0.01em): home section heads ("Work", "What I work with"). Tools strip entries share the 75% width at 600.
- **Lead** (400, 93% width, clamp(1.25rem, 2.4vw, 1.625rem), 1.38): home intro (36ch), project summary (36ch), the opening line of a story section.
- **Body** (400, 100% width, 1.0625rem, 1.6): prose at 65ch max, frame descriptions at 40ch. UI text (links, buttons, topbar, results) sits at 87.5% width, 550-650 weight.
- **Label** (Martian Mono 500, 87.5% width, 0.6875rem, 0.06em, uppercase): edge print, ledger captions, blank-frame captions. Stack lists use the mono at 0.8125rem, 0.04em, sentence case, in Print.

### Named Rules
**The Width Axis Rule.** Hierarchy is set by width first, then weight. Bigger and more important means narrower: 62% for the largest type, widening toward 100% as type gets smaller and longer.

**The Edge Print Rule.** Martian Mono is reserved for data the film itself would carry: frame numbers, status, stack, domain, counts, captions. It never sets prose or headings.

## Layout

A single centred column, max 80rem, with a fluid gutter of clamp(1rem, 4vw, 3rem). The tools strip breaks out to full bleed; its contents return to the column.

The sheet changes form by viewport, always reading as film:
- **Phone (under 46rem):** one continuous vertical strip of rebate, padded 1.75rem each side, with sprocket holes running down both edges. Frames stack inside it, separated by a 1px film-base line.
- **Tablet (46rem to 72rem):** two frames per row, each with sprocket bands along its top and bottom, abutting with a 1px film-base gutter; 4rem between rows.
- **Desktop (72rem and up):** three frames per row, same abutting strip treatment.

Project pages run top to bottom: topbar (back to all work, name), title, summary, action buttons, status line, the boxed print, then the story (The problem, What I built, Stack, Result), then the pager. From 56rem each story section becomes a 12-column grid: heading in columns 1-3, content in columns 4-11. The pager is stacked on phone and splits into two halves from 40rem.

Vertical rhythm is generous and fluid: clamp(4rem, 9vw, 7rem) above the sheet, clamp(5rem, 11vw, 8.5rem) above the tools and footer. Tap targets hold a 2.75rem minimum.

## Elevation & Depth

Flat. There are no shadows anywhere in the system. Depth is tonal and material: film base behind rebate strips, hairline rules between regions, sprocket perforations that mark a surface as film. The only motion that suggests depth is the print inside a frame scaling to 1.025 on hover or focus.

### Named Rules
**The Flat Film Rule.** No box-shadow, glow, gradient or blur. If a surface needs to read as separate, make it rebate on base or give it a hairline.

## Shapes

Square corners everywhere (0px). Borders are 1px hairlines in Hairline, or the 1.5px Print border on outline buttons. The only rounded geometry is the sprocket hole itself (12 x 8 with a 1.6 radius, inside a 20px repeat). The only irregular geometry is the china-marker stroke: open-cornered, overshooting, slightly rotated (up to 0.8 degrees either way), wobbling like a hand.

## Components

### Buttons
Rectangular and plain, a print-room label rather than a pill.
- **Shape:** square corners (0px), 3rem minimum height, 0.75rem by 1.25rem padding, 650 weight at 87.5% width, trailing arrow icon.
- **Solid (View live site):** Print fill, Film Base text, 1.5px Print border.
- **Outline (View source):** transparent, Print text, 1.5px Print border.
- **Hover / Focus:** solid fills with China Marker Yellow; outline turns border and text yellow. 0.2s on the shared ease-out. Focus adds the 2px yellow outline at 4px offset.
- Only real destinations get a button. No disabled buttons.

### Cards / Containers: the Frame
The frame (negative) is the system's card.
- **Corner Style:** square (0px).
- **Background:** Rebate, with sprocket bands top and bottom from 46rem (side perforations come from the strip on phone).
- **Shadow Strategy:** none (see Elevation).
- **Border:** 1px Film Base between abutting frames only.
- **Internal Padding:** 1.625rem by 0.75rem in the sheet; 0.625rem (0.875rem by 1rem from 40rem) for the boxed print on a project page.
- **Contents:** edge print row (frame number in Print, status in Edge Print Grey), the screenshot at 16:9 (phone captures contained at 4:3 on project pages), a second edge print row (stack on home; domain and status on project pages).
- **Below the frame:** title, description, and a result line where a real figure exists.

### Navigation
- **Topbar (project pages):** back link with arrow ("All work") left, the name right, 600 weight at 87.5% width, no underline; turns yellow on hover.
- **Links:** underlined 1px in Edge Print Grey at 0.22em offset; the underline turns yellow on hover. Social links carry a stroke icon in Edge Print Grey.
- **Pager:** previous and next project between hairlines, name in the title voice at 68% width, frame number in edge print, arrow icon nudging 0.25rem outward and the name turning yellow on hover.

### Edge Print
The film's data line. Martian Mono label, Edge Print Grey, split left/right; the left side truncates with an ellipsis, the right side never wraps. The frame number is lifted to Print. The domain on project-page prints only appears from 40rem.

### China-Marker Marks (signature)
Generated SVG strokes in China Marker Yellow, round caps, drawn with stroke-dashoffset.
- **Box:** four separate strokes, one per side, built at the mark's pixel size with seeded wobble (2-3 bends, amplitude scaling with side length, 2.5-10px), open overshooting corners, per-side width 2.5-3.5px, sides drawing in sequence 0.11s apart over 0.6s. Sits 0.75rem outside the frame. Static on keepers; drawn on hover/focus; drawn once mid-screen on touch screens; always present on a project page's print once it loads.
- **Underline and ring:** on result figures only. 2.25px stroke, visible by default, replayed over 0.8s the first time they scroll into view.
- Reduced motion shows marks in their final state with no draw.

### Tools Strip
A full-bleed run of rebate with sprocket bands along top and bottom, holding the tools as a wrapping row in the 75%-width section voice.

### Ledger
A figures table for real results: hairline rows, labels in Print Dim at 450, values right-aligned in Print at 650 and 87.5% width with tabular numerals, sub-notes in Edge Print Grey, caption in edge print.

### Empty Frame
When a screenshot is missing, the frame keeps its slot: the print area goes to a deeper bed with a dashed Hairline outline inset 0.75rem and an edge-print caption. It is never boxed.

## Do's and Don'ts

### Do:
- **Do** keep China Marker Yellow (#f2c230) to hand marks and interaction states only.
- **Do** set hierarchy with Archivo's width axis: 62% for the name and page titles, 72-75% for frame and section titles, 100% for body.
- **Do** put frame numbers, status, stack, domains and captions in Martian Mono edge print, uppercase at 0.6875rem with 0.06em tracking.
- **Do** generate marks at their real pixel size from a seed, one stroke per side, so the nib stays constant and each frame keeps its own hand.
- **Do** mark any surface that is film with sprocket perforations, and keep frames abutting with a 1px film-base gutter.
- **Do** box a frame at rest only when it carries a real figure.

### Don't:
- **Don't** use shadows, glows, gradients, glass or blur.
- **Don't** round corners on frames, buttons or containers (0px).
- **Don't** use yellow as a resting fill, a resting text colour or a decorative accent.
- **Don't** box or mark an empty frame.
- **Don't** set prose or headings in Martian Mono.
- **Don't** ship hand marks as static image assets; they are drawn by the script.
