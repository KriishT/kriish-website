# Concepts v2: three directions, one recommendation

> **Round 2 is at the bottom of this file** ([jump](#round-2-more-creative-directions-d-to-g)). It was added after feedback that A–C weren't creative enough, and it supersedes the round 1 recommendation.

Phase 2 of `docs/REDESIGN_BRIEF.md`, written 2026-10-20 on `redesign/fresh-concept`. It builds on the fresh audit (`docs/design-audit.md`). Nothing in it comes from the rejected round, which is archived unread in `docs/archive/rejected-v1/`.

**To view the style tiles:** run `npm run dev`, then open `/kriish-website/_tiles/a/`, `/b/` and `/c/`. Set `VITE_BASE_PATH=/` to drop the prefix.

The tiles are throwaway HTML under `_tiles/`: dev-only, `noindex`, not linked, never in the build. Tile A takes `?h=0–24` to preview the light at any hour, and tile C takes `?all` to show every dimension. Screenshots are in `docs/screens/tiles/`.

---

## 5a. Diverge: seeds

I wrote 25 seeds across all seven source families, then deleted 8.

**Deleted, and why:**

| Seed | Reason |
|---|---|
| Transit Line (each work as a station on a line diagram) | Nodes joined by lines read as Trailmap's dependency graphs (§3). |
| Playback (a film strip you scrub through) | Step-through playback controls are Drishya.ai's mechanic (§3). |
| Index Cards (work filed on cards and sorted) | Capture and sorting is Tangent's domain (§3). |
| Contact Sheet & Loupe (a magnifier follows the cursor) | Belongs to the cursor-gimmick family (§8). |
| Station Glitch (broadcast interference, RGB split) | RGB-split cliché (§8), and it's the current site's CRT costume again. |
| Isotype Count (work as pictorial statistics) | Collapses into big-number stat rows (§8). |
| Slide Carousel (a 35mm projector) | A carousel with no purpose (§8). |
| "Neo-brutal" | A trend label with no idea behind it. |

**Survivors (17):**

| # | Seed | Family | The site behaves like… | One rule | One material | One motion behaviour |
|---|---|---|---|---|---|---|
| 1 | **Raking Light** | materials & light | a sheet of cotton paper lit by one low light | relief only, never drop-shadow chrome; the light follows the visitor's clock | blind-embossed cotton rag | the light rakes across into place, once |
| 2 | Off Register | print | a two-colour offset run | two spot inks only; overlap is the only third colour | fluorescent pink and federal blue on uncoated stock | plates slip out of register on hover and snap back |
| 3 | Pull | print | a screenprint built up one layer at a time | at most three layers per page, printed in order | ink with a little spread | a squeegee wipe lays each layer on first load |
| 4 | Lockup | print | a letterpress forme locked in a chase | every space is a physical spacer, visible on demand | wood type and furniture | the spacers slide when the layout reflows |
| 5 | Programme | rule systems | a Gerstner programme run live | every page is a valid output of 4 published parameters | offset ink on newsprint | elements re-solve with FLIP on navigation |
| 6 | Grid Transport | Swiss | a Müller-Brockmann poster whose grid moves things | content travels only along grid lines | paper, black, one field colour | discrete snaps, no floaty easing |
| 7 | Interference | op art | a Riley painting that notices you | content lives only in calm zones the field avoids | black line on white | the field bends toward the cursor and settles when idle |
| 8 | Concrete | concrete poetry | a concrete poem | headlines are constructions; no images on the homepage | one ink, one ground | letters re-space to fill their container |
| 9 | No Red, No Black | information design (Aicher) | a 1972-style signage manual | Aicher's colour exclusion, plus a 45°/90° pictogram grid | enamel signs | pictograms assemble from grid units |
| 10 | **Dimensioned** | information design (technical drawing) | a drawing that measures itself | every mark is a true, live measurement of the page | drafting film, graphite, red pencil | dimension lines draw out from the centre on hover |
| 11 | Specimen Plate | information design (scientific plates) | a natural-history plate | every figure is numbered and keyed to its caption | engraved plate on laid paper | keys highlight their figure region |
| 12 | Wall Label | space & exhibition | a small exhibition | every work gets an object label (title, year, medium = role and tools) | white wall, vinyl-cut type | lateral travel between rooms |
| 13 | **Hard Cut** | cinema & motion | a 1960s title sequence | cuts, never fades | flat cut paper | 12fps stop-motion; match cuts between pages |
| 14 | Ident | cinema & motion | a TV channel with idents between programmes | each section change is a 1s ident built from one mark | studio cyclorama | the ident morphs, then holds |
| 15 | Folded Sheet | materials (paper) | one sheet folded into panels | everything is a panel; folds sit on fixed creases | heavy uncoated stock with crease shadows | panels fold open in 3D along their creases |
| 16 | One Size | rule systems (Oulipo) | a constrained-writing exercise | the whole site uses one type size; hierarchy comes from position and weight | a typewriter page | nothing scales; only position moves |
| 17 | Exercises in Style | rule systems (Queneau) | one story told many ways | the same content, re-set in N strict styles | many | a cut between styles |

**Range check:**

| Axis | Spread |
|---|---|
| Ground | light (1, 3, 5, 10, 12, 15) to dark (7) to colour fields (2, 13) |
| Volume | silent (1, 16) to loud (2, 13) |
| Movement | static (12, 16) to kinetic (7, 13, 14) |
| Lead | type-led (8, 16) to shape-led (7, 9, 13) |
| Character | ordered (5, 6, 10) to expressive (2, 3, 13) |

---

## 5b. Converge: three directions

| | A. Raking Light | B. Hard Cut | C. Dimensioned |
|---|---|---|---|
| Register | sleek / abstract | playful / expressive | precise / editorial |
| Ground | light paper, with a designed night | black and full colour fields | drafting film |
| Volume | quiet | loud | quiet |
| Motion | ambient, slow | kinetic, stepped | static, responsive |
| Led by | material (relief) | shape (cut paper) | type and line |
| Character | ordered | expressive | ordered |

---

### A. Raking Light

**Concept.** Every page is a sheet of heavy cotton paper, pressed and scored, lit by a single low light that follows the visitor's own clock.

**Signature.** The light. At 8am, shadows in the plate marks and scored grid lines fall from the left. At 6pm they come from the right, long and warm. At night the sheet goes dark and *you hold the lamp*: the pointer or keyboard focus moves a pool of light that reveals the scored grid. The one-phrase description: "the paper site whose shadows follow the time of day."

**Personality.** It shows up in four places, none of them projects:

- the writing (a dry colophon line: "Lit low from the east.");
- the patience of the craft (shadows that really obey one light source, physically correct to the point of pedantry);
- the night lamp as a reward for visiting at 1am;
- the restraint itself.

**Projects.** Each project is a print **tipped into a plate mark**, the bevelled recess an intaglio plate leaves in paper. A plate is a project-neutral frame: any screenshot, diagram or photo sits in one.

A case study is a long sheet, with sections divided by blind scores and figures in their own plates. It opens on a full-width plate. A project may bring its own colour only inside its plates.

**Palette** (source: paper stock, black ink, and the colour temperature of light):

| Name | Hex | Role |
|---|---|---|
| Cotton | `#F1F1EE` | day ground: a cool white rag, deliberately not cream |
| Bone black | `#1C1C1A` | text ink (15.08:1 on Cotton) |
| Graphite | `#55554F` | secondary text (6.63:1) |
| Blue hour | `#2F3B63` | links and focus by day (9.63:1); tints the light after sunset |
| Unlit sheet | `#16171A` | night ground; night ink `#E7E5E0` is 14.24:1 |
| Lamp 2700K | `#FFD6A0` | night light; never text |

The night theme is a real state (the lamp), not an inverted palette.

**Typography:**

- **Display: Archivo**, Expanded widths (Omnibus-Type, OFL, variable `wdth` 62–125 and `wght` 100–900). Its wide forms have flat terminals that hold an emboss well.
- **Text: Newsreader** (Production Type, OFL, optical sizes). A reading serif with real opsz, so case-study prose sets beautifully at 19–21px.
- Neither face is on the §8 list.
- Paid upgrade: GT America Expanded (Grilli Type). Trial fonts exist; I couldn't confirm a student price, so verify before buying.

**Layout.** A single 12-column sheet whose grid is literally scored into the paper. The relief carries the hierarchy, so there are almost no boxes.

```
HOME, 1440                                           HOME, 390
┌─────────────────────────────────────────────────┐  ┌───────────────────┐
│ Kriish Tiwari          Work About Contact Résumé│  │ Kriish Tiwari     │
│ ┊    ┊    ┊    ┊    ┊    ┊    ┊    ┊    ┊    ┊  │  │ Work About Con Rés│
│ I design and build        ┊  ╔═════════════╗    │  │ I design and      │
│ software, from the        ┊  ║ ▒▒ plate ▒▒ ║    │  │ build software,   │
│ research to the release.  ┊  ║ ▒ flagship▒ ║    │  │ from the research │
│                           ┊  ╚═════════════╝    │  │ to the release.   │
│ Lede, 60ch: UB 2026,      ┊  DART Academy       │  │ Lede              │
│ ESC Lab, DART research    ┊  2 lines + role     │  │ ╔═══════════════╗ │
│ ┊    ┊    ┊    ┊    ┊    ┊    ┊    ┊    ┊    ┊  │  │ ║ plate         ║ │
│ ╔══════╗  ╔══════╗  ╔══════╗   three more plates│  │ ╚═══════════════╝ │
│ ╚══════╝  ╚══════╝  ╚══════╝                    │  │ DART Academy      │
│ Archive: title / year / role, one line each     │  │ … plates stack …  │
│ Lit low from the east.    email (copy)  résumé  │  │ Lit low from east.│
└─────────────────────────────────────────────────┘  └───────────────────┘

CASE STUDY, 1440                                     CASE STUDY, 390
┌─────────────────────────────────────────────────┐  ┌───────────────────┐
│ ← Work                                          │  │ ← Work            │
│ ╔═════════════════════════════════════════════╗ │  │ ╔═══════════════╗ │
│ ║          opening plate (hero figure)        ║ │  │ ║ opening plate ║ │
│ ╚═════════════════════════════════════════════╝ │  │ ╚═══════════════╝ │
│ DART Academy (display)       Role / Team / Time │  │ DART Academy      │
│ ─ ─ ─ ─ ─ ─ ─ ─ ─ blind score ─ ─ ─ ─ ─ ─ ─ ─ ─ │  │ Role/Team/Time    │
│ The problem (65ch Newsreader)   margin note     │  │ The problem …     │
│ ╔═════════════╗ ╔═════════════╗ rejected option │  │ ╔═══════════════╗ │
│ ╚═════════════╝ ╚═════════════╝ vs chosen       │  │ ╚═══════════════╝ │
│ Decisions / Craft / Outcome / Next              │  │ …                 │
│ Next project plate ──────────────────────────── │  │ Next project      │
└─────────────────────────────────────────────────┘  └───────────────────┘
```

**Motion language:**

1. **Only light moves.** Layout, type and images never translate, scale or fade in.
2. **The orchestrated moment:** on first load the sheet appears flat-lit, then the light rakes from overhead into the current angle over 700ms (`cubic-bezier(.2,.7,.2,1)`). Content is visible from frame one.
3. Interaction is depth: a plate deepens from 2px to 4px on hover or focus in 160ms. Nothing lifts or scales.
4. At night the lamp follows the pointer through rAF smoothing (about 120ms). Keyboard focus moves the lamp to the focused element.
5. **Reduced motion:** the light is set at load to the correct angle for the visitor's clock, with no rake. At night the lamp parks on the focused element and doesn't follow the pointer. The relief and the time-of-day logic stay, because they're static states, not motion.

**Interaction moments:**

- Hover/focus: plate depth, plus a 1px underline that draws across links (180ms). Focus gets a 2px Blue hour ring.
- Page transition: a View Transition where the clicked plate becomes the case study's opening plate (same element, 400ms). Fallback: an instant cut.
- Delight: visiting at night. The page tells you the lamp is yours.

**Tech.**

- The light is a few CSS custom properties (`--ux`, `--uy`, `--len`) set by a ~1KB inline script from `Date()`. No geolocation, no permission prompt, no WebGL.
- All relief is `box-shadow` / `text-shadow`.
- Budget: under 10KB of non-framework JS, and LCP under 1.8s, because the hero is text.
- Fallback without JS: a fixed mid-morning light baked into CSS.

**Professionalism, risks, effort.**

- It stays professional by being quiet: one light, real paper, impeccable type.
- Risks:
  1. *In a static screenshot it reads as a well-made minimal site.* The signature is temporal, so screenshots must be taken at dawn or dusk to sell it.
  2. Relief that is too subtle gets lost on cheap displays. Tune the shadows on a low-end screen.
  3. The local-clock behaviour sits next to §8's "local-time widgets". It never *displays* the time; it only uses it. Flagged for your approval.
- Effort: **M**.

**Study (mechanics only):** Zero group (Heinz Mack and Otto Piene: light as material), blind embossing and intaglio plate marks, Tadao Ando's raking light on concrete, and James Turrell for light as subject.

---

### B. Hard Cut

**Concept.** The site is edited, not scrolled through: every change of view is a hard cut between fields of flat cut paper, the way 1960s title sequences moved.

**Signature.** The **match cut**. Click a work and the shape you clicked becomes the next frame. Its vermilion field snaps to full screen in four whole frames (12fps), and the case study opens as its own title card. Everything moves in stop-motion frames, never in tweens. On hover, the pasted paper **boils**: it re-cuts its own edges at 8fps, like hand-drawn animation. The one-phrase description: "the one that cuts like a film title."

**Personality.** Timing and wit:

- deadpan title-card copy;
- the footer is a credit roll you scroll yourself, listing real collaborators and teams, the type foundries and the tools, under "Credits";
- the 404 is "Missing reel".

**Projects.** Each work is a **reel**: a field of colour with its screen pasted in. The field colour comes from the four-colour system, never from the project.

A case study opens on a full-bleed title card, then cuts to a paper-white reading reel: black text, a 65ch measure, figures pasted in. Long reading never happens on colour fields. Each major section opens with a short title band.

**Palette** (source: flat coloured papers of the kind 1960s title designers cut from; values tuned for AA, not copied from a swatch book):

| Name | Hex | Role |
|---|---|---|
| Title black | `#141210` | ground for the home card and credits |
| Paper | `#F3EEE4` | reading ground and text on black (16.16:1) |
| Vermilion | `#E5481E` | primary field; text on it is always black (4.70:1) |
| Cobalt | `#2342C8` | secondary field; Paper text on it is 6.76:1 |
| Ochre | `#E2A529` | the strip and highlight; 8.59:1 on black |

No dark/light theme switch: the cuts already alternate grounds by design.

**Typography:**

- **Display: Anybody** (Etcetera Type Co, OFL, `wdth` 50–150). One family cut to different widths on each title card, the way title designers set type to fit a frame. The name is set expanded and mixed case at about 45% of the viewport, deliberately *not* the §8 condensed-caps viewport-wide name.
- **Text: Familjen Grotesk** (Familjen STHLM, OFL), a grotesk with a slightly bookish warmth that keeps the loud frames readable.
- Paid upgrade: GT Flexa (Grilli Type) for a richer width axis. Trial available; student price unconfirmed.

**Layout.** Every viewport is one composed frame: a title card, a reel or a credit. The page is a sequence of frames on a 12-column grid, not a scroll of sections.

```
HOME, 1440                                           HOME, 390
┌─────────────────────────────────────────────────┐  ┌───────────────────┐
│ KT                     Work About Contact Résumé│  │ KT   Work About … │
│                                                 │  │ Kriish            │
│ Kriish Tiwari  (Anybody 132)  ┌──────────────┐  │  │ Tiwari            │
│▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ strip      │▓ pasted screen│ │  │▀▀▀▀▀▀▀▀▀▀▀▀ strip │
│ designs and builds software.  │  VERMILION    │ │  │ designs and builds│
│ (Anybody 64, ochre)           │  DART Academy │ │  │ software.         │
│ Lede, 34ch                    └──────────────┘  │  │ Lede              │
│ ◖ cobalt cut-paper sun                          │  │ ┌───────────────┐ │
├──── cut ────────────────────────────────────────┤  │ │ reel          │ │
│ REEL 2 (cobalt field)    REEL 3 (ochre field)   │  │ └───────────────┘ │
├──── cut ────────────────────────────────────────┤  │ ┌───────────────┐ │
│ Archive: plain list on paper                    │  │ │ reel          │ │
│ CREDITS (black): people, teams, type, tools     │  │ CREDITS           │
└─────────────────────────────────────────────────┘  └───────────────────┘

CASE STUDY, 1440                                     CASE STUDY, 390
┌─────────────────────────────────────────────────┐  ┌───────────────────┐
│ VERMILION TITLE CARD, full bleed                │  │ VERMILION CARD    │
│ DART                                            │  │ DART              │
│ Academy             one-line premise            │  │ Academy           │
├──── cut to paper ───────────────────────────────┤  ├── cut ────────────┤
│ Role / Team / Time  │ The problem (65ch)        │  │ Role/Team/Time    │
│ ▀▀ title band: Process ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ │  │ ▀▀ Process ▀▀▀▀▀▀ │
│ pasted figure (−1.5°)    text                   │  │ figure            │
│ ▀▀ title band: Decisions ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ │  │ ▀▀ Decisions ▀▀▀▀ │
│ …                                               │  │ …                 │
│ Next reel (cobalt) ──────────────────────────── │  │ Next reel         │
└─────────────────────────────────────────────────┘  └───────────────────┘
```

**Motion language:**

1. **Cuts, never fades.** View changes are instant, or a stepped wipe of at most 333ms (`steps(4)`). Opacity never tweens.
2. **Shapes move only in whole frames at 12fps** (`steps(n)`, an 83ms frame), like stop-motion paper.
3. **Type is never animated letter by letter.** A line is cut in whole.
4. **The orchestrated moment:** the home card assembles in 6 frames (500ms). The sun rises in 6 steps, the strip slides in over 5, the name cuts in on frame 3 and the verb on frame 5. All text is in the DOM and readable from frame one, because it only toggles visibility, and only for that 500ms.
5. **Reduced motion:** every cut is instant, the card shows its final frame, and there's no boil. The page still alternates grounds, so the cut rhythm survives as pure editing.

**Interaction moments:**

- Hover/focus: the reel lifts one frame (3px) with a hard paper shadow and boils. Focus is a 3px ochre outline.
- Page transition: the match cut, using a View Transition with stepped timing, falling back to an instant cut. The fallback is on-concept, which is the point.
- Delight: the boil, and the credit roll.

**Tech.**

- CSS `steps()` animations and the View Transitions API (progressive).
- Cut-paper edges are seeded `clip-path` polygons, generated once at build time in production.
- No GSAP needed. Budget: under 20KB of JS; LCP under 2s (the hero is text).
- Fallback: shapes render with straight edges and cuts are instant.

**Professionalism, risks, effort.**

- It stays professional through a strict four-colour system, paper-white reading pages, and timing as the only exuberance.
- Risks:
  1. Saul Bass pastiche. Avoid his ragged hand-lettering and keep the type modern.
  2. It's adjacent to §8's scrapbook trend. Only *one* pasted element per frame, with no tape, stickers or photo collage.
  3. It's loud for engineering recruiters.
  4. Every case study needs its own composed title card, which costs design time.
- Effort: **L**.

**Study (mechanics only):** Saul Bass (*Anatomy of a Murder*), Pablo Ferro, Maurice Binder, Art of the Title, Henri Matisse's cut-outs for edge quality, and Norman McLaren for frame-by-frame thinking.

---

### C. Dimensioned

**Concept.** The site is a set of drawings that measure themselves: every dimension, callout and grid line on the page is a true, live measurement of the layout you are looking at.

**Signature.** **Live dimensions.** Hover or focus anything and red-pencil dimension lines draw out from its centre with the real numbers: "737 px, 2 lines" or "62 ch measure". Resize the window and they update. Press **D** to dimension the whole sheet.

Construction lines are drawn in **non-photo blue**, the pencil colour that drafting reproduction didn't pick up, so in the print stylesheet they really disappear. Printing a case study produces a clean drawing sheet. The one-phrase description: "the site that measures itself."

**Personality.** Exactness used with a straight face:

- the title block says "Scale 1:1 px";
- revision tables tell the truth about what changed;
- the print stylesheet is a sweated detail nobody asked for.

**Projects.** Projects sit in the frame as **sheets** in a drawing set ("Sheet 2 of 6"), so the frame never needs to know what a project is about. A case study reads like an annotated drawing:

- an opening figure dimensioned to its real size;
- **numbered callout balloons** keyed to regions of the screenshots, carrying the decisions (this is how designers actually present critique);
- a **revision table** for process: "Rev. B: moved enrolment to CSV import because…", which is exactly the brief's "moment the direction changed";
- a title block for role, team and timeline.

**Palette** (source: drafting materials and their conventions):

| Name | Hex | Role |
|---|---|---|
| Film | `#F0F1EC` | ground: matte drafting film, cool rather than cream |
| Ink | `#1F2324` | text (13.97:1) |
| Graphite | `#4E5457` | secondary text, the title-block keys (6.78:1) |
| Non-photo blue | `#8CC8E6` | construction grid only; **never text** (1.61:1 by design); hidden in print |
| Red pencil | `#B8322A` | dimensions, callouts and focus (5.24:1); also a ground for pressed buttons (Film on it is 5.24:1) |

No dark theme. Drafting film is a light medium, and a half-designed dark mode would break the brief's rule.

**Typography:**

- **Display and utility: Barlow Semi Condensed and Barlow** (Jeremy Tribby, OFL). Both are rooted in highway signage and DIN-style engineering lettering, the drafting heritage without the cliché. Dimension readouts use Barlow with tabular figures, **not monospace**, to stay clear of §8's mono data labels.
- **Text: Source Serif 4** (Adobe, OFL, optical sizes), for long annotated reading.
- None of these is on the §8 list.
- Paid upgrade: GT Standard (Grilli Type). Trial available; student price unconfirmed.

**Layout.** Each page is a drawing sheet: a border, a visible 12-column construction grid, content in measured fields, and a title block bottom-right that holds identity, sheet number and navigation.

```
HOME, 1440                                           HOME, 390
┌─────────────────────────────────────────────────┐  ┌───────────────────┐
│ |←──── 737 px, 2 lines ────→|   (on hover)      │  │ Kriish Tiwari     │
│ Kriish Tiwari designs and                       │  │ designs and builds│
│ builds software.                                │  │ software.         │
│ |←── 62 ch ──→|                                 │  │ Lede              │
│ Lede (Source Serif)                             │  │ ┌───────────────┐ │
│ ┌──────────────┐ DART Academy   ┌─ legend ────┐ │  │ │ figure        │ │
│ │ figure       │ ① note         │ type colour │ │  │ └───────────────┘ │
│ │ (dimensioned)│ ② note         └─────────────┘ │  │ DART Academy ①②③ │
│ └──────────────┘ ③ note         ┌─ title block ┐│  │ Sheet 2, 3, 4 …   │
│ Sheets 2–4 (flagships) in a measured row        │  │ ┌ title block ──┐ │
│ Archive: schedule table (title, year, role)     │  │ │ Drawn by / nav│ │
│                                 │Drawn by│Sheet ││  │ │ Dimension all │ │
│                                 │Work About … D ││  │ └───────────────┘ │
└─────────────────────────────────────────────────┘  └───────────────────┘

CASE STUDY, 1440                                     CASE STUDY, 390
┌─────────────────────────────────────────────────┐  ┌───────────────────┐
│ Sheet 2 of 6                        ← Work      │  │ Sheet 2 of 6      │
│ DART Academy (display)                          │  │ DART Academy      │
│ ┌──────────── opening figure ───────────────┐   │  │ ┌───────────────┐ │
│ │            ①            ②                 │   │  │ │ figure ①②     │ │
│ └───────────────────────────────────────────┘   │  │ └───────────────┘ │
│ Problem (65ch)      │ ① decision: X over Y …    │  │ Problem           │
│                     │ ② tradeoff …              │  │ ① decision …      │
│ REVISIONS  Rev │ Date │ Change │ Why            │  │ Revisions (list)  │
│ Craft details: states / edge cases / a11y       │  │ Craft …           │
│ Outcome (real numbers only) / Next              │  │ Outcome / Next    │
│                       │ Role │ Team │ Timeline  │  │ title block       │
└─────────────────────────────────────────────────┘  └───────────────────┘
```

**Motion language:**

1. **Construction before content, once.** On first load the blue grid draws top to bottom (600ms, 30ms stagger per column, `cubic-bezier(.3,.6,.2,1)`). Text and images are present from frame one; only the lines draw.
2. **Dimensions draw outward:** 160ms `ease-out` on the stroke, with the value appearing at 120ms.
3. **Numbers never animate.** Live values just update on resize, with tabular figures and no count-up.
4. **Nothing else moves.** Scroll is plain, with no scroll-linked effects.
5. **Reduced motion:** the grid is present from the start, and dimensions appear fully drawn. Nothing is lost, because the information is in the lines, not the motion.

**Interaction moments:**

- Hover/focus: a dimension appears. Focus is a 2px red-pencil ring. Links underline in red on hover.
- Page transition: a View Transition where the figure's frame grows into the case study's opening figure while its dimension readout re-measures live. Fallback: an instant cut.
- Delight: **D** dimensions the whole sheet, and printing gives you a real drawing sheet with the construction lines gone.

**Tech.**

- One SVG overlay, `ResizeObserver`, `Range.getClientRects()` to measure set type (not boxes), and CSS stroke animation. No libraries.
- Budget: under 15KB of JS; LCP under 1.8s.
- Fallback without JS: the sheet, grid and title block are all static CSS. Only the live numbers are lost.

**Professionalism, risks, effort.**

- It's the calmest and most legible of the three, with a clear grid and impeccable reading type, and it's exact in a way design-engineering teams will recognise.
- Risks:
  1. Blueprint cliché. Mitigation: no blue ground, no white-on-blue, no fake schematics.
  2. Annotation clutter. Mitigation: dimensions appear only on demand, and only true values are allowed.
  3. The numbered callouts brush against §8's "01/02/03 numbering". These are keys to regions of a figure (a real sequence of references), never section numbers.
  4. The sheet border and title block must be the only boxes, so it doesn't drift into §8's broadsheet-with-hairlines look.
  5. At 390px, dimensions must stay inside the frame. The tile's vertical figure dimension still overhangs; this is noted as a build rule.
- Effort: **M**.

**Study (mechanics only):** ISO 128 and ASME Y14.5 drawing conventions, Ulm School publications, Otl Aicher's working drawings, architectural title blocks and revision tables, and Mies van der Rohe office drawings for line-weight hierarchy.

---

## 5c. Style tiles

Each tile shows the hero, one project entry, a type specimen, palette swatches and one working interaction.

| Tile | Screenshots (`docs/screens/tiles/`) | Working interaction |
|---|---|---|
| A | `a-raking-light-1440.png` (08:30), `-1440-dusk.png` (18:00), `-1440-night.png` (22:00, lamp at pointer), `-390.png` | Time-of-day light, the night lamp following the pointer and focus, and plate depth on hover. The tile-only slider previews any hour. |
| B | `b-hard-cut-1440.png`, `-1440-title-card.png`, `-390.png` | The match cut into a title card (Esc cuts back, focus is managed), the boil on hover and focus, and the stop-motion entrance. |
| C | `c-dimensioned-1440.png` (all on), `-1440-hover.png` (one dimension), `-390.png` | Live dimensions on hover and focus, **D** for all, and values re-measured on resize. |

All six captures (three tiles, two widths) have zero horizontal overflow and no console errors.

## 5d. Self-critique

I asked each direction two questions: "Would I have produced this for any other developer portfolio?" and "Does this look AI-generated?" Below are the answers and what I changed. All of it happened before you saw anything.

**A. Raking Light**

- *Round 1 failed Q1.* A giant embossed "KT" monogram carried the whole idea, which is the generic big-initials move, and outside it the light barely registered.
  - **Changed:** cut the monogram. The column grid is now *scored into the paper*, so the light reveals the page's own structure. The flagship plate moved into the hero, so the best work shows in the first viewport.
- *Round 2 failed on taste.* The scores read as pinstripes by day and as gold neon lines at night (close to §8's "dark mode with a neon accent").
  - **Changed:** cut their strength roughly in half by day. At night the scores now exist only inside the lamp's pool, so the lamp *reveals* the grid. The night letterpress highlight dropped from 0.9 to 0.18.
- *Q2 (AI-generated?):* no. Neutral sans plus serif can look templated, which is why the type stays quiet and the light does the work.

**B. Hard Cut**

- *Round 1:* the ochre strip sliced through the "Tiwari" glyphs, and the cobalt sun sat behind the lede. That broke the direction's own rule that text zones stay calm.
  - **Changed:** the strip is now in the flow, a cut of paper *between* name and verb that bleeds off the frame edge. The sun moved to a corner with no text.
- *Round 2:* the full-screen title card kept hand-cut edges and showed hairline seams of the page beneath.
  - **Changed:** full-bleed cards get straight edges. Only pasted pieces are hand-cut.
- *Q1:* no developer portfolio looks like this. *Q2:* no AI look (no gradients or glow). The risk is pastiche rather than genericness, which is why there's no Bass-style hand lettering.

**C. Dimensioned**

- *Round 1 failed its own premise.* The headline dimension measured the h1's *box* (1,063px), not the set type, so a mark lied.
  - **Changed:** headlines are now measured with `Range.getClientRects()`, so the line reads "737 px, 2 lines": the real longest line.
- *Round 1, copy:* the headline "and measures twice" leaked the concept into the copy.
  - **Changed:** to a plain statement.
- *Round 1, layout:* the notes column was too narrow, and the legend and title block fell below the fold.
  - **Changed:** a three-field bottom row with the title block bottom-right, where drawings keep it.
- *Invalid markup* (an `<h2>` inside a `<ul>`): fixed.
- *Q1:* blueprint dev portfolios exist, but they're skins. Live measurement isn't one. *Q2:* no.

### Section 3 tests (concept stage)

| Test | A. Raking Light | B. Hard Cut | C. Dimensioned |
|---|---|---|---|
| 1. One sentence, no project, technology or app function | "Every page is a sheet of cotton paper lit by a low light that follows your clock." **Pass** | "Every change of view is a hard cut between fields of cut paper." **Pass** | "Every line on the page is a true, live measurement of the page." **Pass** |
| 2. Remove any one project: unchanged? | Yes. Plates are empty frames. **Pass** | Yes. Reels take field colours from the system, never from a project. **Pass** | Yes. Sheets renumber automatically. **Pass** |
| 3. Swap in five new projects next year? | Yes. **Pass** | Yes, but each new flagship needs a composed title card (a cost, not a redesign). **Pass** | Yes. **Pass** |
| 4. No project vocabulary in names, nav, cursor, loader, icons | Work / About / Contact / Résumé, plates, scores. No cursor or loader. **Pass** | reel, cut, credits, title card: cinema vocabulary, not project vocabulary. **Pass** | sheet, title block, revision, dimension: drafting vocabulary. **Pass** |

One adjacency is flagged honestly. Trailmap draws *architecture graphs with evidence*, and C draws *measurements of its own layout*. They're different subjects (no nodes, edges, sources or provenance tags in C), but C is the closest of the three to an engineering register. It passes because nothing in it describes or depicts a project.

### §8 items needing your approval

- **A** uses the visitor's local clock (it never displays the time). This is adjacent to "local-time widgets".
- **B** pastes one rotated screenshot per frame, which is adjacent to "scrapbook/sticker collage".
- **C** uses numbered callouts keyed to figure regions, which is adjacent to "01/02/03 numbering".

## Recommendation: **C. Dimensioned**, with two borrowings

**Why C:**

1. **Its grammar does the case studies' job.** The brief says case studies are what get design interviews. In C, annotated callouts present decisions, revision tables tell the story of process ("the moment the direction changed"), and the title block holds role, team and timeline. The concept *is* the content structure, not a skin over it. A's plates and B's title cards frame work beautifully, but they don't explain it.
2. **It's the strongest proof for both job tracks at once.** Live measurement, a printable drawing set and a `/system` page that's literally the drawing index show systems thinking (design teams) and engineering exactness (engineering teams) in the same gesture, without theming anything around code.
3. **Boldness is spent in one place.** The red-pencil dimensions are the only loud thing; everything else is quiet film, ink and serif. That passes "posters or spreads with motion off": the `?all` screenshot already looks like a drawing sheet.
4. **Lowest risk on the engineering floor:** M effort, under 15KB of JS, no WebGL, and nothing that can fail AA.

**Borrow from B: the match cut and the voice.**

- The index-to-case-study transition becomes a View Transition in which the figure's frame grows into the opening figure while its dimension re-measures live as it grows. That's a genuinely delightful moment that is still exact.
- B's deadpan copy ("I like the part where research turns into an interface") sets the tone for C's annotations, so the precision never turns cold.

**Borrow from A: the discipline that only one thing moves, and one quiet surprise.**

- Motion in C stays confined to lines being drawn.
- A's honesty about light becomes a small C detail: the `/system` page's colophon records the real measurements of the visitor's own viewport.

Nothing borrowed from A or B changes C's palette, type or grid.

**What I'd watch:** blueprint drift, annotation clutter, and the callout-numbering approval above.

**STOP.** I'm waiting for your choice: A, B, C, or a remix. Nothing in `src/` has changed.

---

### Open items

- `TODO(kriish):` confirm the 3–4 flagships (my suggestion: DART, Studio23labs, Tangent, ESC Lab ImpairMate). Also confirm which of them you can show process artifacts for (sketches, research notes, flows), and whether any NDA applies.
- `TODO(kriish):` confirm whether LOOPHOLE belongs in the archive (your notes say it was requested; it isn't on `main`).
- `TODO(kriish):` provide a résumé PDF for the Contact page.
- Framework: the audit recommends a static Astro build with React islands. C needs very little client JS (one overlay script), which strengthens that case. I'll confirm it with you at the start of Phase 3.

---

# Round 2: more creative directions (D to G)

**Feedback on round 1:** "A, B and C are good, but I don't see the creativity."

**Diagnosis:** A–C were competent executions of the brief's own Direction Library. Nobody would retell them.

**Bar for round 2:** each direction is built on a *real physical or artistic phenomenon* that makes someone ask "wait, how did it do that?". It still has to be project-neutral, professional and accessible.

**To view:** `npm run dev`, then `/kriish-website/_tiles/d/`, `/e/`, `/f/` and `/g/`. Tile G takes `?seed=N`, and tile F takes `?clean`. Screenshots are in `docs/screens/tiles/` (`d-*`, `e-*`, `f-*`, `g-*`).

## Seeds, round 2

| Seed | Phenomenon | Verdict |
|---|---|---|
| **Vantage** | Felice Varini's anamorphic paintings: fragments across a building that resolve from one spot | **Built (D)** |
| **Cast** | Shigeo Fukuda's shadow sculptures: junk whose shadow is a perfect silhouette | **Built (E)** |
| **Marked Proof** | A proofreader's corrected galley | **Built (F)** |
| **Endpaper** | Paper marbling (ebru) on a book's inside cover | **Built (G)** |
| Scanimation | Barrier-grid optical animation | Seed only. Scroll speed drives the frame rate, so the flash risk is too high to control |
| Trace Overlays | Iterating on tracing-paper layers | Seed only. An excellent *case-study module* any direction can borrow: peel back a sheet to see the earlier iteration |
| Lenticular | Postcards that change with viewing angle | Seed only. A gimmick unless the content is a real before/after |
| Pop-up Book | Paper-engineered v-folds | Seed only. Heavy 3D for little meaning |
| Split-flap board | Departure boards | **Deleted:** a current trend |
| One Line | A single continuous line draws the site | **Deleted:** too close to the rejected "loop / line grammar" round |
| Atlas Overlay | Map layers | **Deleted:** maps read as Trailmap (§3) |

---

## D. Vantage

**Concept.** Every heading is painted across four depths of the page, like a Varini installation, so it only resolves into words from one vantage point: the moment its section arrives.

**Signature.** Scroll and the name **shatters into concentric arcs of ultramarine paint**. Each section heading is in pieces until it reaches its line, then *snaps whole*. At rest the hero also reacts to the pointer: move and it comes apart, stop and it re-forms. The one-phrase description: "the headings that only line up when you get to them."

**Personality.** A visual pun on finding the right point of view, which is a designer's job. The hint line is dry: "Move, and it comes apart."

**Projects.** Only section headings get the treatment. Project entries are calm screenshot-and-text rows hung *in front of* the paint, so fragments pass behind them. A case study opens with its title as a painted heading that resolves on arrival. Everything else is quiet reading.

**Palette** (source: one paint colour on a whitewashed wall, Varini's method):

| Name | Hex | Role |
|---|---|---|
| Whitewash | `#F2F1EC` | the wall |
| Ultramarine | `#1F2BB8` | the paint; headings only (8.86:1) |
| Ink | `#161616` | text (16.00:1) |
| Shade | `#4B4A46` | secondary text (7.84:1) |

**Type:**

- Schibsted Grotesk Black (Bakken & Bæck, OFL): heavy, open counters that survive being sliced into rings.
- Literata (TypeTogether, OFL) for reading.
- Neither is on the §8 list.

**Layout.** Huge headings span the full 12 columns as paint on the wall; content hangs in front of them in a quiet two-column rhythm.

```
HOME, 1440 (at rest)                 MID-SCROLL                        HOME, 390
┌──────────────────────────────┐ ┌───────────────────────────────┐ ┌──────────────┐
│ Kriish Tiwari  Work About Rés│ │ (( ((  ) )( (  ) )) ( ( ))  ) │ │ KT  Work …   │
│ KRIISH                       │ │  ( (( ) ) )) ( (  ( ) ) )     │ │ KRIISH       │
│ TIWARI  (solid ultramarine)  │ │ Designs and builds software…  │ │ TIWARI       │
│ Designs and builds   hint    │ │ ((W ( o) r ) k ))  resolving  │ │ Designs …    │
│ software. UB, Dec 2026       │ │ [shot]  DART Academy          │ │ (( arcs ))   │
│ ((( fragments of WORK )))    │ │ …                             │ │ WORK         │
└──────────────────────────────┘ └───────────────────────────────┘ └──────────────┘
CASE STUDY: title resolves at the top → role / team / time → 65ch reading column → figures
```

**Motion rules:**

1. Only the four planes of a heading move, by `translate3d` (compositor-only), proportional to the distance from that heading's alignment line.
2. Nothing else moves.
3. The pointer adds misalignment that decays at 7% per frame, so the hero always re-forms within about 0.6s.
4. **Orchestrated moment:** the hero is whole on arrival. The first scroll breaks it apart in sync with your thumb.
5. **Reduced motion:** every heading is solid, aligned type, and nothing drifts (`d-vantage-1440-reduced-motion.png`).

**Interactions:**

- Hover/focus: ultramarine links with a 2px focus ring.
- Page transition: the destination heading starts fragmented and resolves as the page settles.
- Delight: shaking the pointer over the name.

**Tech and effort.**

- About 1KB of JS: one rAF loop that skips off-screen headings. CSS radial masks do the slicing. No libraries, no canvas, and all text stays in the DOM. Production would move to CSS scroll-driven animations where supported.
- Overflow is clipped with `overflow-x: clip`; it was measured at 0 at 1440 and 390, at four scroll depths.
- Effort: **M**.

**Risks:**

- Large scroll-linked motion is a vestibular trigger. Reduced motion removes it entirely, and offsets are capped at 700px.
- Fragments over text mid-scroll. Content is layered above the paint.
- It's a trick, so it must stay on headings only.

**Study:** Felice Varini, Georges Rousse (anamorphic rooms), and Markus Raetz.

---

## E. Cast

**Concept.** The homepage is a sculpture of scattered pieces under a light you control: from exactly one angle, their shadows spell my name.

**Signature.** The name is **never drawn**. About 2,000 brass strips hang at different depths in front of a plaster wall, and only their shadows form "Kriish Tiwari". Move the sun (pointer, or a sideways drag on touch) and the shadows slide apart. Stop, and the sun drifts home and the name re-casts. Every other shadow on the page follows the same sun. The one-phrase description: "the site where your cursor is the sun and the shadows spell the name."

**Personality.** It rewards curiosity, and it shows an engineer who solved a projection problem rather than type a headline.

**Projects.** All shadows share one light, so screenshots cast hard shadows that swing with the sun. Case studies are quiet pages where the only sculpture is the opening figure's shadow.

**Palette** (source: a plaster wall, brass rods, cast shadow):

| Name | Hex | Role |
|---|---|---|
| Plaster | `#EDEDE9` | ground |
| Cast shadow | `#1E1C19` | the name (14.48:1) |
| Brass | `#F2C230` | pieces; decoration, non-text (the sun handle has an ink outline) |
| Ink | `#151515` | text (15.56:1) |
| Graphite | `#55534E` | secondary text (6.54:1) |

**Type:** Archivo Black (Omnibus-Type, OFL) as the face the shadow is cast from, and Hanken Grotesk (OFL) for reading.

**Layout.** A full-bleed sculpture stage, then a calm two-column page whose shadows obey the same sun.

```
HOME, 1440                                         HOME, 390
┌─────────────────────────────────────────────┐   ┌──────────────┐
│ KT                       Work About … Rés   │   │ KT  Work …   │
│ ☀ (home light)                              │   │ ☀            │
│      ▬ ▬▬  ▬ ▬▬▬ ▬  ▬▬ ▬  (brass pieces)     │   │  ▬▬ ▬ ▬▬     │
│ ▬▬ ▬  ▬ ▬▬  ▬ ▬▬▬  ▬ ▬▬                      │   │ ▬ ▬▬ ▬ ▬     │
│        KRIISH TIWARI  (cast shadow)         │   │ KRIISH       │
│ Designs and builds…   [shot]▌ DART Academy  │   │ TIWARI       │
└─────────────────────────────────────────────┘   └──────────────┘
CASE STUDY: quiet page; the opening figure's shadow follows the same sun
```

**Motion rules:**

1. The sun follows the pointer inside the stage. After 1.6s of stillness, or when the pointer leaves, it eases home at 9% per frame.
2. Only shadows move.
3. **Orchestrated moment:** none on load. The name is whole from the first frame, and the moment is yours to cause.
4. **Reduced motion:** the sun is fixed at home, so the name is always cast.

**Interactions:**

- Hover/focus: the screenshot lifts toward the light.
- Page transition: an instant cut.
- Delight: finding the angle again by hand.

**Tech and effort.**

- Canvas 2D with DPR capped at 2, plus one rAF loop (paused off-screen in production).
- The real `<h1>` stays in the DOM, and without JS it shows as type.
- Effort: **M**.

**Risks:**

- The piece cloud is adjacent to §8's "particle backgrounds".
- On touch you must drag sideways (vertical swipes scroll).
- One-trick hero: everything below it must be excellent.

**Study:** Shigeo Fukuda (*Lunch with a Helmet On*), Tim Noble & Sue Webster, and Kumi Yamashita.

---

## F. Marked Proof

**Concept.** The site is a corrected proof: you can see my edits (the cuts, the insertions, the notes in the margin) because a person wrote it.

**Signature.** The homepage opens on **the current live site's real headline, struck through in blue pencil**. A dele loop sits where each cut ends, a caret where the new line goes in, and margin notes are joined by hand-drawn leaders: "It's a portfolio, not a greeting card." "Everyone is 'passionate'. Say what you do."

One button (or **E**) accepts every edit, collapsing the deletions into the clean sentence: *"Kriish Tiwari designs and builds software, then tests it with the people who use it."* The one-phrase description: "the portfolio that shows its own edits."

**Why it's the most *meaningful* of the seven:**

- Recruiters in 2026 are drowning in AI-polished portfolios. A site that *shows the human editing* is proof of authorship and taste at once, and taste is the thing design teams hire for.
- It turns **case studies into their natural form**:
  - rejected options are struck through, with the reason in the margin ("chose X over Y because…");
  - the moment the direction changed is literally an insertion;
  - constraints are margin notes.

**Personality.** All in the voice: dry, self-critical, specific. "Built by whom? Say 'I'. And give the number."

**Projects.** Each project entry is a galley slip with its own real edit (the tile uses the live site's actual DART description and its rewrite). Case studies are long proofs. "Edits hidden" gives a clean reading version for anyone in a hurry.

**Palette** (source: a proof sheet and the editor's blue pencil):

| Name | Hex | Role |
|---|---|---|
| Galley | `#F7F7F4` | ground: cool coated proof paper, not cream |
| Ink | `#141414` | text (17.16:1) |
| Blue pencil | `#2348C4` | every mark, insertion and note (7.00:1) |
| Graphite | `#5C5C58` | struck text and secondary text (6.26:1). Struck text stays fully legible, because it's content. |

**Type:** Spectral throughout (Production Type, OFL), a face designed for on-screen documents, set Light for the proof. Marks are hand-drawn SVG, **not** a handwriting font.

**Layout.** A galley column (8 of 12) and a margin column (3 of 12) reserved for notes. Leaders only cross blank paper. On phones, notes drop inline under the line they mark.

```
HOME, 1440                                             HOME, 390
┌──────────────────────────────────────────────────┐  ┌─────────────────┐
│ Kriish Tiwari        Work About … Rés [Edits on] │  │ Kriish Tiwari   │
│ ~~Hi, I'm~~ Kriish Tiwari ~~. I'm a …~~ ─────────│─ │ Work About …    │
│ ~~computer science student at the University…~~  │  │ [Edits on]      │
│ ~~… combine logic, design, and user experience.~~│─ │ ~~Hi, I'm~~ …   │
│ ‸ designs and builds software, then tests it ────│─ │ ‸ designs …     │
│   with the people who use it.         notes ↑    │  │ note (inline)   │
│ UB, Dec 2026. Every page was edited by hand.     │  │ Lede            │
│ [shot] DART Academy  ~~old line~~ ‸ new line ────│─ │ [shot] …        │
└──────────────────────────────────────────────────┘  └─────────────────┘
CASE STUDY: title → role/team/time → problem → process as a proof:
~~option A~~ (note: why not) ‸ option B → decisions with margin rationale → outcome (real numbers) → next
```

**Motion rules:**

1. Leaders draw in once, like a pen (700ms), on page load.
2. Accepting edits collapses deletions (380ms, `cubic-bezier(.6,0,.2,1)`), turns insertions from blue italic to ink roman, and fades the notes.
3. Nothing else moves.
4. **Orchestrated moment:** "Accept all edits" on the hero.
5. **Reduced motion:** leaders are drawn from the start, and accepting edits is an instant swap.

**Interactions:**

- Hover/focus: blue pencil underline and focus ring.
- Page transition: an instant cut.
- Delight: **E** toggles edits site-wide. A résumé in two versions, "clean" and "with my edits".

**Tech and effort.**

- CSS and about 2KB of JS (leader layout via `getClientRects`).
- Screen readers get the clean sentence: the proof is `aria-hidden`, with a visually hidden final line.
- Effort: **M**. The real cost is *writing*, because every edit must be genuine. `TODO(kriish):` supply real earlier drafts for each case study.

**Risks:**

- **§8 adjacency:** blue italic insertions are coloured italic words in a headline. Here they mean "inserted text" and vanish in the clean state, but it needs your approval.
- The proof is long. Mitigation: it's set at 60px max so the whole edit fits above the fold (`f-marked-proof-1440.png`).
- Never stage invented "bad drafts". The tile's struck copy is the live site's real copy.

**Study:** proofreaders' mark conventions (BS 5261, and the Chicago Manual of Style's proofreading marks), and the facsimile of T. S. Eliot's *The Waste Land* drafts with Ezra Pound's edits (the canonical "visible editing as the story" artifact).

---

## G. Endpaper

**Concept.** Every visit marbles a new endpaper, and the site is the book bound inside it.

**Signature.** A **real marbling simulation**, not a filter. Ink drops push each other outward with the area-preserving maths of marbling (after Lu, Jaffer et al., "Mathematical Marbling"), and a gel-git comb draws them into feathers. Each visitor gets a unique numbered sheet ("Sheet no. 4217. Nobody else has this one"). They can **drag to comb it themselves**, click to drop ink, and **keep their sheet** as a PNG. The name sits on a pasted bookplate: "Ex libris Kriish Tiwari". The one-phrase description: "the portfolio that marbles you your own endpaper."

**Personality.** Craft and patience, plus a gift to every visitor.

**Projects.** Inside, the site is a well-set book: a running head and quiet pages, with work as chapters. Case studies open on a thin seeded marbled band that never uses project colours.

**Palette** (source: historical marbling pigments on wove paper):

| Name | Hex | Role |
|---|---|---|
| Wove | `#F4F1EA` | paper; also the white ink that opens the veins |
| Prussian | `#1F3A6B` | bath ground and ink |
| Ochre | `#CF9A2E` | ink |
| Verte | `#5E7A5A` | green-earth ink |
| Lamp black | `#1B1A18` | ink and text (15.42:1 on Wove) |

Graphite `#56534D` is secondary text (6.79:1).

**Type:** Young Serif (Bastien Sozeau, OFL) for the bookplate, and Newsreader (Production Type, OFL) for reading.

**Layout.** A full-bleed endpaper with one calm bookplate (the only text on it), then book pages.

```
HOME, 1440                                        HOME, 390
┌────────────────────────────────────────────┐   ┌──────────────┐
│≈≈≈≈≈≈≈≈≈≈ marbled sheet ≈≈≈≈ [Work][About] │   │≈≈≈ [nav] ≈≈≈≈│
│≈≈ ┌ bookplate ────────┐ ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ │   │≈≈≈≈≈≈≈≈≈≈≈≈≈≈│
│≈≈ │ Ex libris          │ ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ │   │┌ bookplate ─┐│
│≈≈ │ KRIISH TIWARI      │ ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ │   ││ KRIISH …   ││
│≈≈ │ [New sheet][Keep]  │ ≈≈ drag to comb ≈≈ │   │└────────────┘│
│ Selected work               Kriish Tiwari  │   │ Selected work│
└────────────────────────────────────────────┘   └──────────────┘
CASE STUDY: thin seeded marbled band → chapter title → book-set reading column
```

**Motion rules:**

1. The sheet is still unless you comb it.
2. The comb follows the pointer with a Gaussian stylus.
3. **Orchestrated moment:** none, because the sheet is complete on arrival.
4. **Reduced motion:** identical. Nothing moves that you didn't move.

**Tech and effort.**

- Canvas 2D. Generating a sheet makes the tile's load take about 1.5s on this laptop. Production must generate in a Web Worker, or precompute about 50 seeded sheets as images and keep live combing for interaction.
- Effort: **M–L**.

**Risks:**

- The most decorative of the seven: the link to *me* is the bookplate and the gift, not the content.
- Swirls drift toward "AI art" if the palette loosens. The fixed historical four-ink set prevents that.
- Performance.

**Study:** ebru masters (e.g. Necmeddin Okyay), Cockerell marbled papers, and the Lu and Jaffer marbling papers.

---

## Round 2 self-critique (what failed and what I changed)

| Tile | Failed check | Change |
|---|---|---|
| D | Hairline seams where the ring masks met, visible at rest | Wider mask overlap, and at the vantage point the base plane drops its mask and becomes solid type |
| D | Hero fragments drifted down over the subtitle | All planes now drift up and out; content layers sit above the paint, so fragments pass behind screenshots |
| D | 313px of horizontal overflow at 1440 | `overflow-x: clip`; measured 0 at 1440 and 390, at four scroll depths |
| E | Coarse slices made the name a pixel-font; white plus yellow pieces read as glitch noise ("AI-looking?") | 2–4px slices, a single brass material with depth-based brightness, and a larger depth spread so pieces clear the name |
| F | **Invented "before" copy.** I first struck through a draft I had written myself, which fakes the premise | Replaced with the **live site's actual hero and DART copy**. Every edit shown is real |
| F | A leader line slashed through the headline | Leaders attach at the line end nearest the margin, or come in above the line |
| F | The full proof pushed the new sentence below the fold (10–15s test) | Proof set at 60px max; the whole edit now fits in the first viewport |
| F | Accepting edits left a stray leading space | Spaces moved inside the deletions |
| G | Shapes came out as angular leaf camouflage, not marbling | Dense stone ground, then a gel-git comb plus an optional fine comb (the historical sequence) |

All four tiles have zero console errors. All have zero horizontal overflow at 1440 and 390. Every text pair passes WCAG AA.

### Section 3 tests, round 2

| Test | D. Vantage | E. Cast | F. Marked Proof | G. Endpaper |
|---|---|---|---|---|
| 1. One sentence, no project or technology | "Headings resolve from one vantage point." **Pass** | "Shadows of scattered pieces spell the name from one angle." **Pass** | "The site shows a person's edits to its own copy." **Pass** | "Every visit marbles a new endpaper." **Pass** |
| 2. Remove any one project | Unchanged. **Pass** | Unchanged. **Pass** | Unchanged: each entry carries its own edit. **Pass** | Unchanged. **Pass** |
| 3. Swap in five new projects | Yes. **Pass** | Yes. **Pass** | Yes, but each needs real drafts to edit. **Pass** | Yes. **Pass** |
| 4. No project vocabulary | **Pass** | **Pass** | **Pass.** Proofreading is print production, not Tangent's capture-and-triage: nothing is captured, sorted or scheduled. | **Pass** |

### §8 items needing your approval (round 2)

- **D:** large scroll-linked motion. It's not scroll-jacking (native scroll), and it's fully removed under reduced motion.
- **E:** the brass piece cloud is adjacent to "particle backgrounds".
- **F:** blue italic insertions are adjacent to "one coloured/italic word in a headline". They carry meaning and disappear in the clean state.
- **G:** it's adjacent to "decoration that doesn't serve the concept" if the case studies are weak.

## Recommendation, round 2: **F. Marked Proof**, with D as the visual alternative

**F is the one I'd ship.**

- It's the only direction whose signature is *evidence of the thing design teams hire for* (judgment, writing, editing your own work) rather than a visual trick.
- It answers the AI-era question every portfolio now faces ("did a person make this?") without ever saying it.
- It gives case studies their natural form: struck alternatives, margin rationale, insertions where the direction changed.
- It's describable in one phrase, cheap on the engineering floor, and fully accessible.

**Borrow:**

- From **G**, the take-home gift: the résumé in two versions, clean and "with my edits".
- From **D**, its discipline that *the trick lives in exactly one kind of element*.
- From round 1 **C**, the revision table as an optional case-study block.

**If you want the most visually stunning option instead, choose D.** It's the one that makes people gasp in the first three seconds, and it's the purer art direction. It pairs well with excellent but conventional case studies.

**E and G** are impressive demos, but their cleverness lives in the hero rather than the system.

**STOP.** I'm waiting for your choice: D, E, F, G, any of A–C, or a remix. Nothing in `src/` has changed.
