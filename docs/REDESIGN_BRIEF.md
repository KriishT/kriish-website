# Portfolio Redesign Brief, v2 (fresh, project-neutral concept)

For the coding agent. Read this whole file before doing anything. It replaces any earlier redesign brief or concept work in this repo.

---

## 0. Reset

- An earlier round of concept work themed the site around one of my projects. I rejected it. Treat every concept, palette, name and metaphor from that round as rejected.
- If files such as `docs/concepts.md`, `docs/design-audit.md` or an earlier redesign branch exist, don't mine them for ideas. Move those docs to `docs/archive/rejected-v1/` without reading them (you will redo the audit fresh).
- Start a new branch from `main` (e.g. `redesign/fresh-concept`). Don't build on the earlier redesign branch unless I say so.

## 1. Role

You are a senior art director and design engineer pairing with me on my personal portfolio. Work like the design lead of a small studio known for giving every client a visual identity no one could mistake for anyone else's. I have already rejected work that felt templated or derivative. Make deliberate, opinionated choices and take one real aesthetic risk you can defend.

## 2. Who I am and what the site must do

- I'm Kriish Tiwari, a software engineer and CS student at the University at Buffalo. Live site: https://kriisht.vercel.app/. Repo: `kriish-website` (React + TypeScript + Vite; confirm). Content: projects, engineering experience, research, contact.
- Goal: land DESIGN roles (product designer, design engineer, creative technologist) as well as engineering roles. The site itself is my first and most important design case study.
- Feel: stunning, striking, cool, fun, creative, offbeat, and unmistakably professional. My range runs from abstract and sleek (the register of a top independent designer) to playful and expressive. Never templated, never "AI-looking".
- Environment: Windows, Claude Code in VS Code, Playwright MCP available for browser screenshots. Use npm scripts and cross-platform commands, not bash-only syntax.

## 3. The hard rule: the concept must not come from my projects

This is the most important section. The last attempt failed on exactly this.

- The site-wide concept (its theme, metaphor, navigation model, section names, visual motifs, palette rationale, interaction gimmick) must NOT be derived from any of my projects (Tangent, Match Point or any other), from their domains (thought capture, notes, dogs, adoption, etc.), from their mechanics (capture-and-triage, evidence/provenance tags, swiping, etc.) or from their UI.
- Projects are content inside the frame. A case-study page may use that project's real screenshots, colors and one small local accent, always inside the global system. Nothing project-specific leaks into the homepage, navigation or site chrome.
- My personality shows through craft, typography, writing voice, one signature interaction and small surprises, not through a project metaphor.
- If an installed design skill tells you to "ground the design in the subject matter" (e.g. the frontend-design skill): for this brief, the subject is me as a designer-engineer and my sensibility. The concept comes from an original art-direction idea (see the Direction Library in section 7), never from the domain of a project.
- You must pass these tests, and report on them, at concept stage and again at the end:
  1. State the concept in one sentence without mentioning any project, any technology I used, or what my apps do.
  2. Remove any one project from the site in your head. Does the design still make complete sense, unchanged? If not, it's project-themed. Redo it.
  3. Could I swap in five completely different projects next year without redesigning anything? The answer must be yes.
  4. No section name, nav label, cursor, loader, icon or metaphor borrows a project's vocabulary.

## 4. Phase 1: audit (read-only)

1. Map the repo: framework, build tool, routing, styling approach, component structure, content sources, dependencies (animation, 3D, fonts), deploy config. Confirm which repo and branch deploy to kriisht.vercel.app.
2. Run it locally. With Playwright MCP, capture the live site and the local build at 1440, 1024, 768 and 390px widths, plus a reduced-motion pass. Save to `docs/screens/before/`.
3. Write `docs/design-audit.md`, covering:
   - the current design language: fonts, actual hex values, spacing, grid, motion, copy voice;
   - craft defects: spacing, hierarchy, contrast, layout shift, focus states, mobile layout, dead links, heavy assets;
   - a Lighthouse mobile baseline: LCP, CLS, INP/TBT, JS size, page weight;
   - repo hygiene, e.g. leftover merge-conflict markers in the README and template boilerplate;
   - a content audit: does each project show problem, decisions and outcome, or just a screenshot and a stack list?
4. Carry-forward list. I have decided on a new visual direction, so this phase is not keep-versus-pivot on the look. List what to keep: stack, routing, components, content, good engineering, and any single quality of the current design worth carrying forward. "Nothing visual" is an acceptable answer.

## 5. Phase 2: concepts (no production code; stop at the end)

### 5a. Diverge first

Generate at least 12 raw concept seeds before choosing anything. Draw them from at least five of these source families:

- design movements and designers: Swiss/International Style, Karl Gerstner's programmes, Bauhaus, constructivism, Dutch modernism, op art, concrete poetry;
- print and production: risograph, screenprint, letterpress, offset registration, halftone;
- information design: Isotype, Otl Aicher's systems, scientific plates, technical drawing, transit diagrams;
- space and exhibition: museums, wayfinding, gallery labels, architectural drawings;
- cinema and motion: title sequences, film-editing grammar, broadcast idents;
- materials and light: paper stocks, lenses, shadow, projection;
- rule systems: generative/parametric identities, self-imposed constraints.

Write each seed as one line:
`[Name]: the site behaves like ___. One rule: ___. One material: ___. One motion behavior: ___.`

Delete any seed that comes from my projects (section 3), sits on the cliché list (section 8), or is just a trend label ("brutalism", "Y2K", "glassmorphism") with no idea behind it. Show me the surviving seeds in a compact table so I can see the range.

### 5b. Converge to three

Pick three directions that differ as much as possible on these axes: light or dark ground, quiet or loud, static or kinetic, type-led or shape/image-led, ordered or expressive. Cover my range with one direction from each register:

- **A. Sleek / abstract**: the top-independent-designer register.
- **B. Playful / expressive**: fun, surprising and delightful, still credible.
- **C. Precise / editorial**: the safest for a hiring manager, but still clearly authored.

You may take directions from the Direction Library (section 7), remix two library entries, or invent your own from your seeds. Don't copy any reference site.

For each direction, give:

- **Name and concept statement**: one sentence that makes the art direction inevitable.
- **Signature**: the one thing people will remember and describe to someone else.
- **Personality**: where my personality shows, without touching projects.
- **Projects**: how the projects sit inside it (a project-neutral frame) and what a case-study page looks like.
- **Palette**: 4–6 named hex values with roles. The rationale must come from the concept's source (e.g. real ink colors for a print concept), not "it looks modern". Ship a dark theme only if it is designed as carefully as the light one.
- **Typography**: display and text families (plus an optional utility face) by name. For each, give the foundry, the license (free/OFL or paid, with student pricing or trial notes) and why it fits. Check every face against the overused list in section 8.
- **Layout**: a one-sentence layout concept, plus ASCII wireframes of the homepage and one case study, desktop and mobile.
- **Motion language**: 3–5 rules covering what moves, what never moves, durations and easing. Include one orchestrated moment and the reduced-motion version.
- **Interaction moments**: hover/focus, page transition, and one delight.
- **Tech approach**: CSS first; any library must earn its place. Include a performance budget and a fallback.
- **Professionalism, risks and effort**: how it stays professional, the risks, and an effort estimate (S/M/L).
- **References**: movements, designers and sites to study for mechanics only.

### 5c. Style tiles (visual proof)

For each of the three directions, build a throwaway single-screen style tile on a scratch route (e.g. `/_tiles/a`, `/_tiles/b`, `/_tiles/c`; noindex, not linked). Each tile shows the hero, one project entry, a type specimen, palette swatches and one working interaction.

Screenshot each tile at 1440 and 390 with Playwright and save to `docs/screens/tiles/`. The tiles are for judging, not polish, so keep them cheap.

### 5d. Self-critique, recommend, stop

Before showing me anything, put two questions to each direction: "Would I have produced this for any other developer portfolio?" and "Does this look AI-generated?" Revise whatever fails, and tell me what you changed. Run the section 3 tests.

Then recommend one direction, and say what you would borrow from the other two. Save everything to `docs/concepts-v2.md`.

**STOP and wait for my choice.**

## 6. Phases 3–4: system, then build (after I approve a direction)

### Design system first

Implement tokens as CSS custom properties, with a hidden `/system` route (noindex) that shows them all:

- **Color roles**: WCAG AA verified for every text/background pair in every theme you ship.
- **Type**:
  - self-hosted and subset, with `font-display: swap`;
  - preload only the critical display weight;
  - a fluid scale using `clamp()`;
  - defined line-height and tracking, and a 60–75ch measure for body text.
- **Layout**: a spacing scale, a grid (columns, gutters, breakpoints), and radius, border and elevation rules.
- **Motion tokens**:
  - durations: micro 120–200ms, UI 200–400ms, signature moment ≤ ~800ms;
  - named easings and stagger rules;
  - a complete reduced-motion strategy that replaces movement with designed states rather than just deleting it.
- **Primitives**: link, button, tag, project entry, case-study blocks, figure with caption, footer/contact.

### Build order

After each step, screenshot at 1440/768/390, critique, fix, then commit.

1. Layout and typography only, motion off. The static frames must already look art-directed.
2. Homepage hero: the concept statement plus the signature.
3. Work index and one flagship case study.
4. Remaining case studies, About (specific and human), Contact (copy-email button, links, résumé PDF).
5. Motion pass: one orchestrated moment, plus motion that answers user actions. No fade-and-slide-up on every section.
6. Delight pass: one surprise that never blocks content. If there is sound, it is off by default.
7. Polish pass: remove one accessory. Cut any decoration that doesn't serve the concept.

### Case studies (these are what get design interviews)

Go for fewer, deeper case studies: 3–4 flagships, with everything else in a scannable archive list.

Each flagship covers:

- the problem in plain words;
- my role, constraints and timeline;
- the process: rejected options and the moment the direction changed;
- decisions and tradeoffs ("I chose X over Y because…");
- craft details: states, edge cases, accessibility, micro-interactions;
- the outcome: real numbers only, otherwise honest qualitative results;
- what I'd do next;
- links to shipped or traceable work.

Across the set, show a system, a hard interaction and one sweated detail, with code visible where possible.

Never invent achievements, metrics or quotes. Mark gaps as `TODO(kriish):`. The homepage must answer in 10–15 seconds: who I am, that I design and build, and my best work.

### Engineering floor

- **Motion tools**:
  - Prefer CSS: transitions, scroll-driven animations, `@starting-style`, container queries, View Transitions as progressive enhancement.
  - GSAP (free, including SplitText and ScrollTrigger; use `useGSAP()` in React) or Motion, not both unless justified.
  - Smooth scroll (Lenis) only if the concept needs it. Disable it under reduced motion. Never scroll-jack.
- **WebGL/canvas** only if it is the signature:
  - lazy-load it, cap the device pixel ratio, pause it off-screen;
  - provide a static fallback;
  - keep all text and links in the DOM.
- **Performance budgets** (mobile, mid-range device, 4× CPU throttle): LCP < 2.5s, CLS < 0.1, INP < 200ms, ~60fps animation, heavy code split out. Report Lighthouse before and after.
- **Accessibility**:
  - landmarks, heading order and a skip link;
  - designed focus states and full keyboard navigation, including any playful parts;
  - alt text;
  - no information carried by color or motion alone, and a designed reduced-motion experience;
  - nothing flashing more than 3 times per second (critical for any optical/op-art concept).
- **SEO and sharing**:
  - This is a client-rendered SPA, so prerender or statically generate routes if feasible, and justify any framework change in the audit.
  - Add per-page titles and descriptions, OG images in the new style, JSON-LD Person, a sitemap, robots, canonical URLs and a designed 404.
- **Intros**: no intro longer than ~1s, and never block content behind an animation.
- **Fonts**: never ship trial fonts. License before deploying and record every license in `docs/fonts.md`.

## 7. Direction Library (project-neutral starting points: remix, don't copy)

### 1. The Programme (rule-generated identity)

- **Idea**: The look is generated by a small, published rule set (grid, type axes, color pairings), so every page is a different valid output of one programme. One page documents the rules.
- **Why it's fresh**: it suits an engineer becoming a designer, without theming anything around code or a project.
- **Why it's professional**: systems thinking is exactly what design teams hire for.
- **Type**: one variable family with expressive width/weight axes (free: Anybody; paid: GT Flexa) and a calm text face.
- **Color**: a small fixed set of ground/ink pairings selected by the rules, never random.
- **Motion**: elements re-solve into a new valid layout on navigation (FLIP-style).
- **Signature ideas**: a seed that regenerates the composition; the rules page; the logo as a program.
- **Risks**: randomness reads as chaos. Constrain hard, and screenshot 50 seeds to prove every output is good.
- **Study**: Karl Gerstner, *Designing Programmes* (1964); MIT Media Lab's 2011 generative identity; Sagmeister's Casa da Música identity (2007).

### 2. Poster Grid in Motion (Swiss, kinetic)

- **Idea**: Poster-scale type on a strict modular grid, where the grid itself is the motion system: content travels between grid fields as you navigate.
- **Why it's fresh**: Swiss style is everywhere as static minimalism; almost no one makes the grid the animation.
- **Why it's professional**: the most legible, hireable register.
- **Type**: a neo-grotesk with real character (free: Familjen Grotesk, Schibsted Grotesk) and huge scale contrast.
- **Color**: paper, ink and one strong field color used as area, not as accents.
- **Motion**: snapping, discrete, mechanical; no floaty easing.
- **Signature**: a key that toggles a grid overlay (e.g. "G") to reveal the system.
- **Risks**: Swiss-red/Helvetica pastiche or generic minimalism. Differentiate through composition and motion.
- **Study**: Josef Müller-Brockmann, *Grid Systems in Graphic Design*; Wolfgang Weingart for controlled breaks.

### 3. Exhibition (gallery and wayfinding)

- **Idea**: The site is a small exhibition. Each work has a precise object label (title, year, medium = role and tools, dimensions = scope and duration), and a wayfinding system guides you through.
- **Why it's fresh**: personal sites rarely borrow curatorial grammar.
- **Why it's professional**: curation signals judgment.
- **Type**: a highly legible signage sans (free: Atkinson Hyperlegible Next), with an optional serif for wall texts.
- **Color**: white walls and one wayfinding color; the work carries the color.
- **Motion**: slow and spatial, with lateral travel between rooms and labels resolving on approach.
- **Signature**: the object labels. A floor plan can be navigation only if it is faster than a list.
- **Risks**: museum-quiet can feel cold. Always keep a direct work list for recruiters.
- **Study**: museum wall-label conventions; Experimental Jetset's Whitney Museum identity (2013); airport wayfinding.

### 4. Two Inks (spot-color print system)

- **Idea**: The site is "printed" in two spot inks on one paper stock. Where the inks overlap they make a third color (multiply). Images are duotone halftones, and registration shifts slightly on interaction.
- **Why it's fresh**: mainstream 2026 "tactile/imperfect" mostly means scrapbook clutter; this is the disciplined, production-literate version.
- **Why it's professional**: a strict grid; the only imperfection is registration.
- **Type**: a print-born grotesk or serif, ideally with ink traps (check section 8).
- **Color**: two real ink colors (from risograph ink charts) plus paper, with every UI color derived from them. Verify AA for colored text.
- **Motion**: a misregistration nudge on hover and an "ink settling" reveal on first load (one moment only).
- **Signature**: overprint as the whole visual language, plus a switch that swaps the ink pair.
- **Risks**: it turns into a scrappy zine without discipline.
- **Study**: risograph ink charts and screenprinted posters; CSS `mix-blend-mode: multiply` and SVG filters.

### 5. Technical Drawing (construction and measurement)

- **Idea**: Drafting grammar: construction lines, line-weight hierarchy, dimension lines, section callouts and a title block. The dimension lines measure the real layout live (column widths, measures, line lengths).
- **Why it's fresh**: a design-engineer flex that shows how the layout is built, not a "blueprint" skin.
- **Why it's professional**: calm, exact, credible.
- **Type**: a technical sans with drafting heritage plus a good text face. No mono-label overload.
- **Color**: drafting paper, graphite and one red-pencil markup color. Not blueprint blue.
- **Motion**: lines draw before content resolves (one moment); dimension readouts update on resize.
- **Signature**: live measurements revealed on hover and resize.
- **Risks**: blueprint cliché and decorative annotation. Every mark must mean something.
- **Study**: engineering and architectural drawing conventions; Ulm School publications.

### 6. Title Sequence (cinematic cuts)

- **Idea**: The site is edited like film. The homepage opens with a short, skippable title (≤ 4s, instant on repeat visits). Sections arrive as cuts, wipes and title cards, and each case study opens on its own title card.
- **Why it's fresh**: very few personal sites use editing grammar; it is fun and memorable.
- **Why it's professional**: restraint. Cut-paper geometry and two colors, with timing doing the work.
- **Type**: a display face with cinematic presence (condensed or wide) and a clean text face.
- **Color**: high-contrast fields, with each section a different reel color within one system.
- **Motion**: cuts, not fades. Match cuts from thumbnails into case-study heroes via View Transitions.
- **Signature**: transitions as edits.
- **Risks**: the intro turning into a preloader. Reduced motion gets static title cards.
- **Study**: Saul Bass, Pablo Ferro, Maurice Binder; title-design archives such as Art of the Title.

### 7. Optical Field (op art, abstract)

- **Idea**: Black-and-white line or dot fields that bend and interfere into moiré as you scroll or move. Content sits in calm zones the field avoids.
- **Why it's fresh**: abstract and gallery-grade, the opposite of glow-and-gradient abstraction.
- **Why it's professional**: monochrome rigor, with quiet text zones.
- **Type**: a refined sans or a sharp serif, set small and precise.
- **Color**: black and white, with one optional chromatic-interference color.
- **Motion**: slow and cursor-reactive; it settles when idle.
- **Signature**: the field reacting like a physical surface.
- **Risks**:
  - vestibular and photosensitive harm: keep the amplitude gentle, avoid flicker, and give reduced motion a still state;
  - performance: use SVG or canvas, or one shader with a static fallback.
- **Study**: Bridget Riley, Victor Vasarely, Carlos Cruz-Diez, Jesús Rafael Soto.

### 8. Systems Identity (Aicher / Munich '72, Isotype)

- **Idea**: An identity built like an Olympic system: strict pictogram grammar, a modular grid and an unusual color rule. Aicher famously excluded red and black for Munich 1972.
- **Why it's fresh**: bright yet calm color that reads optimistic and engineered at once.
- **Why it's professional**: legendary systems design, showing thinking at scale.
- **Type**: a clean, slightly technical sans; Aicher used Univers, so pick a contemporary equivalent not on the section 8 list.
- **Color**: a restricted set of light tones under one unusual rule (your own rule is fine).
- **Motion**: modular and stepwise; pictograms assemble from grid units.
- **Signature**: a small custom pictogram set for site actions and sections, drawn on a grid rather than taken from an icon library.
- **Risks**: pictograms becoming clip-art. Keep them few and functional.
- **Study**: Otl Aicher's Munich 1972 design manual; Otto Neurath and Gerd Arntz's Isotype.

### 9. Concrete Type (type as structure)

- **Idea**: Words are the image. Headlines are typographic constructions (stacked, rotated, interlocked, variable-axis animated) in the tradition of concrete poetry. Everything else stays quiet.
- **Why it's fresh**: the abstract "cool designer" register without any WebGL.
- **Why it's professional**: as long as the body text is impeccable.
- **Type**: a variable family with a wide axis range that is not on the section 8 list.
- **Color**: nearly none: one ground and one ink.
- **Motion**: axes respond to scroll and cursor; letters re-space to fit their containers.
- **Signature**: my name set as a construction that re-forms for each section.
- **Risks**: legibility; layout shift from variable fonts (reserve space); text-animation performance.
- **Study**: Eugen Gomringer, Mary Ellen Solt, dom sylvester houédard; Wim Crouwel's New Alphabet.

### 10. Feature Spread (magazine features)

- **Idea**: Each case study gets its own feature layout (opening spread, crops, rhythm), all within one master grid and type system. The homepage acts as the cover and contents page.
- **Why it's fresh**: it shows layout range, which most portfolios never show.
- **Why it's professional**: editorial craft is a classic signal in design hiring.
- **Type**: a serif with its own voice (paid: GT Canon or Edgar; free options need verifying), and never the Editorial New/Instrument Serif + Neue Montreal combination.
- **Color**: a per-feature accent within the system rules.
- **Motion**: spreads reveal through changing crops as you scroll.
- **Signature**: covers that change per visit or per season.
- **Risks**: drifting into a broadsheet newspaper look, an AI default. Aim for magazine features, not newspaper columns.
- **Study**: Willy Fleckhaus's *Twen*; Alexey Brodovitch's *Harper's Bazaar*.

### 11. Precision Minimal (design-engineer register)

- **Idea**: A quiet layout where all the drama is in interaction craft: easing, springs, focus states, tiny details.
- **Caveat**: this is now a genre among design engineers, so it is fresh only when paired with a genuinely new signature or another library entry.
- **Study** (for craft, not looks): rauno.me, paco.me, emilkowal.ski.

## 8. Clichés and defaults (avoid unless you argue a specific reason and I approve)

### AI-default looks

- Purple/blue gradients and glow orbs.
- Dark mode with a single neon or acid accent.
- "Like Linear" dark product UI with glowing borders.
- Inter, Roboto, Arial or the system font standing in for personality.
- Three or four identical rounded cards; the stock shadcn/Tailwind kit.
- Glassmorphism, bento grids, big-number stat rows.
- Cream background with a high-contrast serif and a terracotta accent.
- Broadsheet layouts with hairline rules.
- Template chrome:
  - tracked-out ALL-CAPS eyebrows above every heading;
  - meta strings joined with middle dots;
  - "WORD — fragment" labels;
  - monospace small data labels;
  - "→" appended to every link;
  - one italic or colored word accenting a headline;
  - 01/02/03 numbering on content that isn't a sequence.

### Portfolio tropes

- "Hi, I'm Kriish 👋" heroes; typewriter or rotating-word headlines; "passionate, driven" copy.
- Skill bars and logo walls.
- Particle or constellation backgrounds; spinning 3D laptops or blobs; tilt cards; cursor trails.
- Preloaders counting 0→100%; long intros; scroll-jacking; autoplaying sound; carousels with no purpose.
- AI-chatbot "ask my AI twin" features.
- Terminal/CLI portfolios; macOS or Windows desktop clones.

### Fonts that read as default right now

PP Neue Montreal with PP Editorial New or Instrument Serif; Geist/Geist Mono (reads as Vercel's default, especially on a vercel.app domain); Satoshi, General Sans, Clash Display, Cabinet Grotesk, Syne, Space Grotesk, Bricolage Grotesque, Aeonik, Poppins, Montserrat; a viewport-wide name in condensed caps (Druk-style).

### "Cool-designer" defaults (2025–26)

- Marquee tickers.
- Lenis with fade-up on everything.
- Magnetic buttons; blob cursors with a "view" label; spinning circular-text badges.
- Grain overlays on everything.
- WebGL ripple or RGB-split image distortion on hover.
- Dithering/ASCII shader overlays (heavily tutorialized right now).
- Topographic contour-line backgrounds.
- Scrapbook/sticker collage (the mainstream 2026 trend).
- Teenage Engineering or Braun pastiche; Swiss-red + Helvetica pastiche.
- A pulsing "available for work" dot; local-time or weather widgets.

### Content

Unedited AI copy, AI-generated hero art, invented metrics.

## 9. Final "is it actually stunning?" checklist (report pass/fail with evidence)

**Concept**

- [ ] One-sentence concept that mentions no project or technology.
- [ ] Remove-a-project and swap-five-projects tests pass.
- [ ] A memorable signature; a recruiter could describe the site in one phrase.
- [ ] Static screenshots with motion off look like posters or spreads.
- [ ] It couldn't be anyone else's portfolio, it doesn't look AI-generated, and nothing from section 8 is used without approval.
- [ ] Boldness is spent in one place; everything around it is quiet and precise.

**Typography and detail**

- [ ] Deliberate pairing, clear scale, good measure, no widows or orphans in key headlines.
- [ ] Spacing follows the scale everywhere.
- [ ] Hover, focus, active, visited, empty and error states are all designed.

**Motion**

- [ ] Choreographed and meaningful; one orchestrated moment.
- [ ] The reduced-motion version is complete and still feels designed.
- [ ] At least one moment of genuine delight that never blocks content.

**Recruiter signal**

- [ ] The homepage passes the 10–15 second test.
- [ ] 3–4 deep case studies with decisions and tradeoffs, covering a system, a hard interaction and a sweated detail.
- [ ] The copy sounds like a real person (read it aloud).
- [ ] Résumé, email and links are one click from anywhere.

**Engineering**

- [ ] Lighthouse mobile ≥ 90 across all four categories (report the numbers); budgets met; ~60fps at 4× CPU throttle.
- [ ] Fully keyboard navigable; WCAG AA contrast; works without hover; tested at 390px.
- [ ] Works in Chrome, Safari and Firefox, with graceful fallbacks.
- [ ] No console errors; the repo is cleaned up (README rewritten, no conflict markers, no unused dependencies).
- [ ] All font licenses recorded.

## 10. Output for each phase

- **Phase 1**: `docs/design-audit.md`, the carry-forward list, and a 10-line chat summary.
- **Phase 2**: the seed table, three directions, style-tile screenshots and a recommendation, in chat and in `docs/concepts-v2.md`. Then STOP.
- **Each build step**: a short changelog, screenshots, what you critiqued and changed, and any open `TODO(kriish):` items.
- **Final**: checklist results, before/after Lighthouse numbers, and a decision log (I'll reuse it as the portfolio's own case study).
