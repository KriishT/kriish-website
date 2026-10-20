# Phase 2: Verdict and concept directions

Evidence for every score is in [`design-audit.md`](design-audit.md). Every contrast ratio below was computed (WCAG 2.x relative luminance), not estimated.

## 2a. Verdict on the current direction

| # | Criterion | Score | Evidence |
| --- | --- | :-: | --- |
| 1 | Distinctiveness | **2** | Four borrowed OS chromes (XP, classic Mac, Kali, DOS), "Hi, I'm", floating emoji and a logo-tile skills grid are all on the cliché list. The draggable cards are the one original move. |
| 2 | Point of view | **1** | No single idea. Every section switches OS, palette and type, and the editorial serif hero contradicts the terminal sections. 92 hex colours, 10 ad-hoc font sizes. |
| 3 | Personal fit | **2** | The *content* is specific and honest, but nothing in the *design* comes from your work (Tangent, Match Point, LOOPHOLE). Your LOOPHOLE landing page is more art-directed than your portfolio. |
| 4 | Craft headroom | **2** | A 1,544-line single component, arbitrary Tailwind values and no tokens, router or SSG. The typed content arrays are the only part worth carrying forward. |
| 5 | Design-recruiter signal | **1** | Content appears at **10.1 s**, behind an unskippable intro. After that there are no case studies, no process and no résumé link. A 10–15 s glance sees a boot screen. |
| 6 | Technical soundness | **3** | A light stack (127 KB gz JS, CLS 0) with good dialog focus handling and alt text. Undone by a 12.6 s real LCP, 1.25 MB of PNGs, fonts that never load, reduced motion ignored and a mobile scroll trap. |

**Criteria 1–3 average: 1.67 → PIVOT.** The core look is also an OS-desktop clone, which triggers the pivot rule on its own.

Pivoting doesn't mean throwing away *you*. Keep: the honest, sourced content; the physical drag-and-reset instinct; the sense of humour; the pixel-type thread. Throw away: the operating systems.

---

## 2b. Three directions

All three share a non-negotiable baseline: **no intro wall** (first paint is real content), self-hosted subset fonts, AVIF/WebP with `srcset`, per-page meta/OG, and a designed reduced-motion mode.

### Direction A: "Owner's Manual" (Elevated Current)

**Thesis:** One machine, not four. The site is the owner's manual for a single, well-designed late-80s computer ("Model KT-26"), written in the precise voice of Braun/IBM product documentation.

**Signature:** Every project image is printed as a **1-bit dither** on beige paper, like a manual's halftone, and *develops* into full colour when you hover or focus it, like a screen powering on. Chapters are named like a manual: *Specifications*, *Operating Tangent*, ***Known issues*** (honest limitations), ***Troubleshooting*** (what went wrong and how I fixed it), *Warranty & service* (contact).

**Palette**
| Role | Name | Hex | Check |
| --- | --- | --- | --- |
| bg | Plastic | `#D9D4C7` | ink 11.76:1, muted 5.33:1 |
| surface | Manual paper | `#ECE9E1` | ink 14.34:1, muted 6.50:1 |
| ink | Ink | `#1B1A17` | |
| muted | Graphite | `#55514A` | |
| accent | System blue (kept from today's XP blue) | `#1F4FD1` | white on it 6.78:1, on paper 5.59:1 |
| signal | LED amber, on panel `#171612` only | `#FFB000` | 9.88:1 on panel |

**Type:** Display **Departure Mono** (pixel mono, OFL). It keeps your pixel thread but at poster sizes, used only for the masthead and chapter numerals. Body **IBM Plex Sans** (variable), from the IBM documentation lineage, paired with the Plex Mono you already use. Utility **IBM Plex Mono** for spec tables. Scale is a 1.25 ratio: 16 / 20 / 25 / 31 / 39 / 49, with display at `clamp(56px, 10vw, 152px)`.

**Layout:** A manual spread: a narrow running-head column (chapter, page number) beside a single 64ch reading column, with spec tables and dithered plates breaking out to full width.

```
HOME, desktop                                      HOME, mobile
┌───────────────────────────────────────────────┐  ┌──────────────────┐
│ KT-26 ● OWNER'S MANUAL        Résumé  Email   │  │ KT-26 ●     ☰    │
│                                               │  │ KRIISH           │
│ KRIISH TIWARI       ← Departure Mono, 152px   │  │ TIWARI           │
│ Designs & builds software. CS @ Buffalo.      │  │ Designs & builds │
│                                               │  │ software.        │
│ §1 SPECIFICATIONS  ┌──────────┐ ┌──────────┐  │  │ §1 SPECS ──────  │
│ role, stack,       │░▒▓dither▓│ │░▒▓dither▓│  │  │ ┌──────────────┐ │
│ availability       │ TANGENT  │ │MATCHPOINT│  │  │ │░▒▓ TANGENT ▓▒│ │
│                    └──────────┘ └──────────┘  │  │ └──────────────┘ │
│ §2 PROGRAMS (index of all work, table)        │  │ ┌──────────────┐ │
│ §3 KNOWN ISSUES   §4 WARRANTY & SERVICE       │  │ │░▒ MATCHPOINT │ │
└───────────────────────────────────────────────┘  └──────────────────┘
PROJECT, desktop                                   PROJECT, mobile
┌───────────────────────────────────────────────┐  ┌──────────────────┐
│ §2.1 │ OPERATING TANGENT                      │  │ §2.1 TANGENT     │
│      │ [full-colour plate, full bleed]        │  │ [plate]          │
│ spec │ Problem ........ 64ch column           │  │ spec table       │
│ table│ Known issues / Troubleshooting         │  │ Problem…         │
└───────────────────────────────────────────────┘  └──────────────────┘
```

**Motion language:** (1) Things *power on*; they don't fly in: opacity plus dither-resolve, no translate above 8 px. (2) Mechanical stepping (`steps(4)`) only for the LED and the dither develop; everything else is `cubic-bezier(.2,0,0,1)`. (3) Durations: micro 160 ms, UI 320 ms, page 480 ms. (4) Nothing loops.

**Interactions:** Hover/focus develops the image. The page transition is a single horizontal scan-line wipe (View Transition, 280 ms). **Easter egg:** "Press any key" finally works: typing `help` opens the manual's index as a command palette, and **⌘/Ctrl+P prints a real one-page résumé** via a designed print stylesheet.

**Tech + budget:** Static pages. Dithers are generated at build (sharp plus an error-diffusion script, ~8–15 KB per 1-bit PNG) and cross-faded with CSS. ≤ 40 KB gz JS. Reduced motion shows full-colour images immediately, with dither only in print.

**Risks:** It still reads as a "retro theme" (mitigate with industrial precision and zero window chrome or emoji). Dithered screenshots hide UI detail (case-study pages always show full colour). **Effort: M.**

**In conversation with:** Teenage Engineering's OP-1 field guide (documentation voice), Braun/Rams-era manuals, Panic's Playdate pages (retro hardware done modern). Also poolsuite.net, as the thing to *avoid* becoming.

**Self-critique:** My first draft was "the CRT boot, but faster, with one consistent OS". Any developer could ship that, and it's still an OS clone. I revised it into a documentation metaphor whose *Known issues / Troubleshooting* chapters force honest process writing. It's still the least distinctive of the three: retro manuals are a known move.

---

### Direction B: "Shows Its Work" (Abstract / Sleek)

**Thesis:** Every claim on this site is linked to its evidence. Where there's no evidence, the type itself erodes.

Drawn from **Match Point** ("silence is always unknown; every tag cites the sentence that produced it") and **Trailmap** ("every edge carries the evidence it was inferred from").

**Signature: confidence as typography.** Claims are set in **Redaction**, a type family drawn in progressively degraded cuts (Redaction → 10 → 20 → 35 → 50 → 70 → 100). A sourced claim renders crisp. Hover or focus draws an ultramarine **leader line** into the margin, where its source sits: a commit SHA, a release tag, a screenshot, a README line. Anything unsourced is never shown as a number. It appears in Redaction 70 over a hatched field: *"not recorded."* The hero is one sentence, *"I design and build software that shows its work,"* which resolves from Redaction 100 to clean over ~700 ms on first paint. It's pure CSS font swapping, so the text is real and selectable from frame one.

**Palette**
| Role | Name | Hex | Check |
| --- | --- | --- | --- |
| bg | Fog (cool, deliberately not cream) | `#E9ECEF` | ink 15.57:1, muted 5.78:1 |
| surface | Sheet | `#FFFFFF` | ink 18.47:1, muted 6.85:1 |
| ink | Ink | `#111418` | |
| muted | Slate | `#545B66` | |
| accent | Evidence ultramarine (links, leader lines) | `#2B3BFF` | 5.58:1 on fog, 6.62:1 on white |
| signal | Highlighter, only *behind* ink | `#F2E14C` | ink on it 13.76:1 |
| pattern | "Not recorded" = 45° hatch in Slate | | |

**Type:** Display **Redaction** (degradation as a semantic axis; `TODO: confirm the licence permits self-hosting before Phase 3`). Body **Mona Sans** (GitHub's variable sans, OFL), a quiet nod to "source of truth". Utility **Commit Mono** (OFL) for SHAs, `file:line` and dates. Body 17 px / 1.55 at 66ch, display `clamp(48px, 9vw, 168px)`.

**Layout:** An asymmetric 12-column grid: a 7-column claim column and a 3-column live margin of sources. Huge whitespace, no columns of body text, no hairline grids. That's what keeps it away from the broadsheet default.

```
HOME, desktop                                      HOME, mobile
┌───────────────────────────────────────────────┐  ┌──────────────────┐
│ Kriish Tiwari                 Work About CV   │  │ Kriish Tiwari  ☰ │
│                                               │  │ I design and     │
│ I design and build                            │  │ build software   │
│ software that shows       ┊ [1] Tangent v1.0.11  │ that shows its   │
│ its work.¹                ┊     GitHub release│  │ work.¹           │
│                                               │  │ ─ sources (1) ─▾ │
│ Tangent parks a thought with the file ────────┊→ │ Tangent parks a  │
│ you were in.²                    src/capture.rs  │ thought…²        │
│ Match Point never reads silence as good news.³│  │ Match Point…³    │
│ ▨▨ installs: not recorded ▨▨                  │  │ ▨ not recorded ▨ │
└───────────────────────────────────────────────┘  └──────────────────┘
PROJECT, desktop                                   PROJECT, mobile
┌───────────────────────────────────────────────┐  ┌──────────────────┐
│ MATCH POINT (claim sentence morphs to H1)     │  │ MATCH POINT      │
│ Problem ……………… 7 cols        ┊ sources 3 cols │  │ Problem…         │
│ "I chose a rule engine over an LLM because…"⁴ │  │ ⁴ (tap → inline  │
│ [figure + caption]            ┊ extract.js:42 │  │   source card)   │
└───────────────────────────────────────────────┘  └──────────────────┘
```

**Motion language:** (1) Type moves, boxes don't. (2) Resolve/degrade 300–700 ms on `cubic-bezier(.2,.7,0,1)`. (3) Leader lines draw with `stroke-dashoffset` in 240 ms and retract in 160 ms. (4) Scroll reveals only for margin sources arriving. (5) Nothing loops.

**Interactions:** Hover a claim and its source line draws in. The page transition is a View Transition shared element: the clicked claim sentence becomes the case study's H1. **Easter egg:** press `?` for **audit mode**. Every block on the page shows its own provenance: the component that rendered it and the last commit that touched it (injected from `git log` at build). The portfolio literally shows its work.

**Tech + budget:** Static. One ~6 KB island computes leader-line geometry. No WebGL. ≤ 30 KB gz JS. Preload one Redaction subset (~25 KB) and lazy-load the degraded cuts. Reduced motion shows final states instantly and turns leader lines into static numbered sidenotes.

**Risks:** Degraded type can read as "glitch aesthetic" (mitigate by using it *only* for unknowns and the hero resolve). It can feel austere (mitigate with humour in the margin notes and the audit-mode egg). It needs a source for every number, which is the point but costs you content work (TODOs). **Effort: M–L.**

**In conversation with:** gwern.net (sidenote/popup mechanics), Bret Victor's worrydream.com (claims you can poke), Tufte CSS (margin notes), Stripe Press (typographic pacing).

**Self-critique:** My first draft was "an editorial annotated document with sidenotes". That is cliché #3 with extra steps and fits any writer-developer. The revision, mapping *evidence strength to type degradation* plus a site that audits itself, only makes sense coming from the person who built Match Point and Trailmap.

---

### Direction C: "Triage" (Playful / Tactile), **recommended**

**Thesis:** The site is a Tangent inbox. Everything Kriish has made arrives as a captured thought, and you see how he triaged it: *Do Now* is the work he'd defend in an interview, and *Drop* is the work he killed, and why.

**Signature: the five-bucket board on a green cutting mat.** Index cards are triaged into **Do Now · Do Soon · Later · Idea · Drop**, and each carries a Tangent-style **context chip**: where the thought was born (`VS Code — match-point/server/lib/extract.js`). The **Drop pile** is real process content: rejected directions you can flip through (e.g. *"Dropped: an LLM tag extractor for Match Point. It could invent a temperament nobody observed."*). The keyboard is a first-class layer: `j`/`k` move, `1`–`5` re-triage, `Enter` opens, `/` searches. **⌘/Ctrl+Shift+Space** (Tangent's own hotkey) opens a capture overlay to leave Kriish a note.

**Palette** (the one place boldness is spent is the mat; everything on it is quiet)
| Role | Name | Hex | Check |
| --- | --- | --- | --- |
| bg | Cutting mat | `#2F5D4A` | card on mat 7.22:1; grid lines decorative only |
| surface | Index card | `#FBFAF6` | ink 17.03:1, muted 6.08:1 |
| ink | Ink | `#16181B` | |
| muted | Pencil | `#5A6068` | |
| signal: Do Now | Red sticker | `#D93A3F` | white 4.54:1, vs card 4.35:1 (UI) |
| signal: Do Soon | Orange | `#FF9F1C` | ink on it 8.66:1 |
| signal: Later | Blue | `#2F6BEA` | white 4.76:1 |
| signal: Idea / focus ring | Yellow | `#F5D90A` | ink 12.55:1, ring on mat 5.32:1 |
| signal: Drop | Grey | `#7E858C` | vs card 3.58:1 (UI) |

(`TODO(kriish):` align the bucket colours with Tangent's own in-app bucket colours so the two products rhyme.)

**Type:** Display **Hubot Sans** (GitHub, OFL, variable *weight and width*), set Expanded/800 for the name and thesis. Its width axis "squashes" a card title on landing. Body **Atkinson Hyperlegible Next** (Braille Institute, OFL), chosen because your DART research was with older adults, so legibility is a value you've worked on, not a font-picker accident. Utility **Departure Mono** for keycaps, shortcuts and context chips: the one thread kept from today's pixel identity. Body 17/1.5; card title 20–24; section 32; display `clamp(44px, 7vw, 120px)`.

**Layout:** A thin header strip (name, one-line thesis, `Résumé · Email · GitHub · LinkedIn`, shortcut hint), then the board. *Do Now* is the widest column and sits above the fold. Without JS the board renders as five headed lists of plain links, so it's crawlable and works everywhere.

```
HOME, desktop
┌────────────────────────────────────────────────────────────────────┐
│ KRIISH TIWARI  designs and builds software for people mid-thought. │
│ CS @ Buffalo · Résumé · kriish@… [copy] · GitHub · LinkedIn   [?]  │
├─ mat (green, 1cm grid) ────────────────────────────────────────────┤
│ ● DO NOW (3)              │ ● DO SOON  │ ● LATER   │ ● IDEA │ ● DROP│
│ ┌───────────────────────┐ │ ┌────────┐ │ ┌───────┐ │ ┌────┐ │ ┌───┐ │
│ │[img] TANGENT          │ │ │ESC Lab │ │ │Drishya│ │ │LOOP│ │ │▤▤▤│ │
│ │Catch the thought…     │ │ │ImpairM.│ │ │Career │ │ │GDJ │ │ │pile│ │
│ │⌨ VS Code — tangent/…  │ │ └────────┘ │ │Receipt│ │ └────┘ │ └───┘ │
│ └───────────────────────┘ │ ┌────────┐ │ │ICIBM  │ │        │       │
│ ┌──────────┐ ┌──────────┐ │ │DART UX │ │ └───────┘ │        │       │
│ │MATCHPOINT│ │DART Acad.│ │ └────────┘ │           │        │       │
│ └──────────┘ └──────────┘ │            │           │        │       │
└────────────────────────────────────────────────────────────────────┘
 j/k move · 1–5 triage · ↵ open · / search · ⌘⇧Space leave a note

HOME, mobile                      PROJECT ("card opened"), desktop
┌──────────────────┐              ┌─────────────────────────────────────┐
│ KRIISH TIWARI    │              │ ← board   ● DO NOW   TANGENT         │
│ designs & builds │              │ [chip: role · timeline · stack]     │
│ software for…    │              │ [hero media, full bleed]            │
│ Résumé Email  ☰  │              │ CAPTURED   the problem, plainly     │
│[NOW][SOON][LATER]│ ← bucket     │ CONTEXT    constraints, my role     │
│[IDEA][DROP]      │   tabs 1–5   │ TRIAGE     decisions: X over Y      │
│┌────────────────┐│              │ DROPPED    what I rejected and why  │
││[img] TANGENT   ││              │ RESURFACED outcome · next · links   │
│└────────────────┘│              └─────────────────────────────────────┘
│┌────────────────┐│              PROJECT, mobile: same blocks stacked,
││ MATCH POINT    ││              sticky mini-chip with bucket + title.
│└────────────────┘│
└──────────────────┘
```

The case-study template *is* Tangent's loop: **Captured** (problem) → **Context** (constraints, role, timeline) → **Triage** (decisions & tradeoffs) → **Dropped** (rejected options) → **Resurfaced** (outcome, links, what's next). The metaphor forces the design-thinking content that recruiters screen for.

**Motion language:** (1) **Cards have mass; text doesn't move.** Only cards translate or rotate (≤ 2° at rest), and text inside never animates. (2) **Triage is a toss:** 240–320 ms on a spring (stiffness 500, damping 32) with a tiny overshoot. (3) **Opening is continuous:** a View Transition morphs the card into the page header (400 ms). (4) **Nothing moves without a cause** (input, or a one-time 600 ms first-paint settle), and nothing loops. (5) **Reduced motion:** cards cross-fade (150 ms) into place, with no translate or rotation, and drag is replaced by a "Move to…" menu.

**Interactions:** On hover/focus a card lifts 2 px and its context chip expands to the full path. Drag is *mouse/pen only*: on touch, cards are plain links, which fixes today's scroll trap. **Delight:** the Drop pile flips like a stack of index cards, and dragging a flagship *into* Drop gets a one-line note from you on why it stays. A paper "thwip" on landing is **off by default**, with a footer toggle.

**Tech + budget:** Astro static pages plus one React island for the board (`client:visible`; `motion` via `LazyMotion` + `domAnimation`), with the server-rendered list as the no-JS fallback. ≤ 60 KB gz JS on home and ≤ 5 KB on case-study pages. LCP is the header text: target < 2.0 s. Single-key shortcuts are scoped to the board, can be turned off and are listed under `?` (WCAG 2.1.4).

**Risks:** Kanban-as-portfolio could read as a SaaS/Trello UI (mitigate with a physical desk rather than app chrome: paper cards, real mat, big typographic header). A recruiter needs the work in seconds (*Do Now* is first and largest, and all cards are plain links). Shortcut conflicts with assistive tech (scoped and toggleable). The Drop pile needs real process content from you (TODOs). The green mat could feel loud: it's the *one* bold thing, deliberately. **Effort: L.**

**In conversation with:** Tangent itself (the source of the mechanics), Linear (keyboard layer and command menu), tldraw (direct-manipulation feel), Things 3 (quiet card craft), Are.na (collections of objects). Mechanics only.

**Self-critique:** Draft 1 was "a desktop OS where Tangent is the running app": a banned OS clone, rejected. Draft 2 used a cork board, which is the generic moodboard trope, so I replaced it with a self-healing cutting mat, a designer's actual work surface that gives the grid for free. Could it be anyone's portfolio? Not without Tangent's buckets and your real Drop pile.

---

## Recommendation: C, "Triage"

**Why it fits you:** It's built from your best-shipped product, so the site *demonstrates* Tangent's interaction model instead of describing it. A recruiter can repeat it in one phrase: *"his portfolio is a triage board you can sort with the keyboard."* The case-study template forces problem / tradeoff / rejected-option writing, which is exactly what design interviews screen for. It keeps your own instincts (drag-and-reset, pixel type, humour) and drops the borrowed ones (operating systems).

**What I'd steal:**
- **From B:** the provenance system *inside case studies*. Every number gets a source marker (release, commit, README), and anything unsourced shows a hatched **"not recorded"** instead of a guess. This also solves the unverified-metrics problem honestly.
- **From A:** the **print stylesheet résumé** (⌘/Ctrl+P on any page prints a designed one-page CV), plus the manual's honesty sections. *Dropped* is A's *Known issues*.

**Tech recommendation (needs your OK):** move from a Vite SPA to **Astro** (static HTML per route, per-page meta/OG, sitemap, a designed 404, React islands only where needed), keeping React, Tailwind v4 (as `@theme` tokens) and the existing typed content. The audit justifies it: SEO/prerender is a hard requirement, the site is mostly static content, and it removes the 10 s client-render wall by construction. The lighter alternative is to stay on Vite and add `react-router` + `vite-react-ssg`. That's less churn, but it hand-rolls what Astro gives you for free.

## What I need from you before Phase 3

1. **Pick a direction** (or a mix). Recommended: C, with B's provenance and A's print résumé.
2. **Approve the Astro migration**, or tell me to stay on Vite.
3. **Flagships:** I propose *Do Now* = **Tangent, Match Point, LOOPHOLE, DART** (engineering + research), with Trailmap moved to *Later* until its README is real. OK to add Match Point, LOOPHOLE and Cleave?
4. The `TODO(kriish)` items in the audit: résumé PDF, contact email, "Gravity", sources for existing numbers, and 2–4 real "Dropped" stories.
