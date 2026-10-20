# Design audit (Phase 1, fresh)

Audited 2026-10-20 on branch `redesign/fresh-concept`, cut from `main` (`6070196`). The earlier concept docs were moved unread to `docs/archive/rejected-v1/`. Nothing in this audit draws on them.

Evidence lives in `docs/screens/before/`:

- `live-{1440,1024,768,390}.png` and `local-{…}.png`: full-page captures taken after the intro finishes.
- `*-reduced-motion-*.png`: the same captures with `prefers-reduced-motion: reduce`.
- `local-intro-crt-1440.png` and `local-intro-name-1440.png`: the two stages of the boot intro.
- `lighthouse/live-mobile.html` and `lighthouse/local-mobile.html`: the full Lighthouse reports.

---

## 1. Repo map

| Area | Finding |
|---|---|
| Framework | React 19 SPA, client-rendered. `index.html` ships an empty `<div id="root">`. |
| Build | Vite 6.3 (`tsc -b && vite build`), TypeScript 5.7 strict. |
| Routing | None. A single page with hash anchors (`#projects`, `#experience`, `#contact`). Project and role details open as modal dialogs, not URLs. |
| Styling | Tailwind CSS v4 through `@tailwindcss/vite`, almost entirely arbitrary values (`bg-[#e8e3d8]`, `text-[10px]`). No tokens and no theme. `index.css` holds unused `@font-face` and `@theme` blocks plus two keyframes. `App.css` is empty. |
| Components | 3 files. `App.tsx` gates the site behind the intro. `CrtBootIntro3D.tsx` is the intro (named "3D" but has no 3D). `PortfolioMain.tsx` is a 1,545-line monolith holding all content, all sections, two dialogs and helpers. |
| Content source | Hard-coded TS arrays at the top of `PortfolioMain.tsx`: 7 projects, 4 work roles and 1 academic role. No MD/MDX and no CMS. |
| Animation | `framer-motion` 12. `motion` 12 is also installed: the same library twice, and `motion` is never imported. |
| 3D | `three`, `@react-three/fiber` and `@react-three/drei` are installed but **never imported**. |
| Icons | `react-icons` (the Simple Icons logo wall). |
| Fonts | Google Fonts CSS link for Press Start 2P and IBM Plex Mono. Self-hosted Inter (4 weights) and Sora (3) sit in `src/assets/fonts` but no class uses them (see §3). |
| Deploy | **Vercel, from `origin/main`**. The live `last-modified` (2026-10-17 20:10 UTC) matches `origin/main` HEAD `555fadf` (20:08 UTC). Local `main` is one commit ahead (`.gitignore` only). There is no `vercel.json`. Vercel must set `VITE_BASE_PATH=/`, because live assets resolve at `/assets/` while `vite.config.ts` defaults `base` to `/kriish-website`, a GitHub Pages leftover. |
| Deep links | `kriisht.vercel.app/anything` returns Vercel's stock 404. There's no SPA rewrite, `robots.txt` or `sitemap.xml`. |
| Lint | `src/` lints clean. All 7 lint errors come from an untracked `.astro/` folder left over from the rejected branch, which Tailwind's auto source scan also picks up. |
| Deps | `npm audit --omit=dev`: 26 advisories (20 high), all transitive through vite/rollup/postcss/nanoid. A Vite upgrade clears most of them. |

## 2. Current design language

The site is a tour of operating systems. Each section borrows a different OS chrome, so it reads as five sites stitched together.

| Section | Costume | Ground | Ink / accents |
|---|---|---|---|
| Intro (9.5s) | Beige CRT with a DOS boot log, floating emoji | `#e8e3d8` | `#6bff96` text with a `#00ff6a` glow on `#0a0a0a` |
| Hero | "Paper" with floating emoji | `#e8e3d8` | `#111`, `#333`, `#444`, `#555`, `#5c5c5c` |
| About / Education / Stack | Windows XP windows with Mac traffic lights | `#dee6f3`, windows `#f7faff` | title bars `#0a64d2` / `#0055e5`, offset shadow `#7f9ac8`, icons `#0047C1` |
| Projects | Classic Mac Finder and a draggable bento | `#d6d3ce`, tray `#f5f3f1`, cards `#fffdfa` | header `#dcd9d3`, shadow `#c3baa5`, buttons `#004bb5` / `#6b705c` |
| Experience | Kali Linux terminal (`kali@localhost:~$`) | `#1b1f2a`, cards `#0d1117` | `#00d1ff`, `#6cb8ff`, `#8bd8ff`, `#50fa7b`, `#f1fa8c` (Dracula) |
| Contact | DOS prompt | `#0c0d0c` | `#00ff9d`, `#a8ffb3`, a green glow |

Traffic lights appear in two different palettes: `#ff605c` / `#ffbd44` / `#00ca4e` and `#ec6a5e` / `#f4bd50` / `#61c554`. In total there are **40+ distinct hex values** and no roles.

**Type.** Four families actually render:

- IBM Plex Mono 400/600: the body text.
- `ui-monospace` system stack: 82 text nodes in Experience. It differs from Plex, so mono text renders in two faces.
- Press Start 2P: nav, filter pills and tech labels at **8–10px**.
- Georgia/`ui-serif`: section headings.

Two more families are named but never loaded:

- **Playfair Display** on the H1. There's no `@font-face` or link, so it renders only on machines that have it installed, which includes this one. Everyone else gets the browser default serif.
- **"Chicago"** on dialogs. It falls back to the default font.

**12 distinct font sizes** appear (8, 9, 10, 11, 12, 13, 14, 16, 18, 24, 30, 60px), and 25% of text nodes are ≤11px. There's no scale.

**Spacing and grid.** Tailwind's default 4px steps, used ad hoc. Sections use `py-28`, the container is `max-w-6xl` (1152px), and there's no shared column grid: a 6-col bento in Projects, 2-col in Experience, and an 8-col icon grid. Measure is unconstrained for dialog text (up to 750px of mono, about 95ch).

**Motion.**

- A 9.5s intro: spring-in CRT, boot text, then the name pops.
- After it, a 2.5s staggered hero (1s fades with delays of 0.5 → 2.0s).
- `whileInView` fade-up on experience cards.
- Three infinite loops: blinking cursors and a pulsing "ACTIVE" dot.
- Floating emoji.
- `scale: 1.03` hover on cards, plus free drag on project cards.
- None of it checks `prefers-reduced-motion`.

**Copy voice.**

- Hero: "Hi, I'm", then "a full-stack developer passionate about creating human-centered products that combine logic, design, and user experience."
- Elsewhere it's role-play: "Initializing contact_protocol.exe…", "system ready — press ENTER to connect" (Enter does nothing), and "Press any key to continue_" (no key handler).
- The experience bullets are the strongest writing on the site: specific, with real numbers.

**Section 8 hits in the current site:** a "Hi, I'm" hero, "passionate" copy, terminal and OS-desktop clones (four of them), a long preloader-style intro, a logo wall (Tech Stack), a pulsing availability-style dot, a "WORD — WORD — WORD" tracked-caps line, one italic grey word in the headline ("*Tiwari*"), mono bracketed metric labels, and draggable bento cards.

## 3. Craft defects

Severity: **P0** blocks users or recruiters, **P1** is clearly visible or measurable, **P2** is polish.

| # | Sev | Defect | Evidence |
|---|---|---|---|
| 1 | P0 | **9.5s unskippable intro on every visit**, including under reduced motion. "Press any key" doesn't skip it. | `local-reduced-motion-intro-at-2.5s-1440.png`; `App.tsx` gates all content on a timer |
| 2 | P0 | **Mobile: touch-scrolling is blocked over project cards.** framer `drag` sets `touch-action: none`, and the cards cover 85% of the Projects section at 390px. | measured with `getComputedStyle` |
| 3 | P0 | **Real LCP is 13.3s** on mobile with 4× CPU (bio paragraph). The hero is readable at about 12.6s. | Playwright PerformanceObserver; see §4 |
| 4 | P1 | Fonts named but never loaded (Playfair Display, Chicago), so the headline face depends on the visitor's machine. | `document.fonts` lists only Plex Mono and Press Start 2P |
| 5 | P1 | Hierarchy: the H2 "Hi, I'm" comes before the H1; the role line is an H3 with no parent; headings mix serif, mono and pixel faces. | heading outline |
| 6 | P1 | No `<main>`, `<header>` or `<footer>`, and no skip link. | DOM query |
| 7 | P1 | Contrast: stack lines `#7a776f` on `#fffdfa` = **4.40:1** (fail, 11px); © line at 60% opacity ≈ **2.7:1**. Press Start 2P at 8–10px is hard to read even where it passes. | computed |
| 8 | P1 | 17 tap targets under 24px tall at 390px: nav links 15px, "Read More" 18–20px, contact links 18px. | computed |
| 9 | P1 | INP: opening a project dialog takes **288ms** and a filter click 216ms (4× CPU). Both are over the 200ms "good" line. framer `layout` on 7 cards is the likely cost. | Event Timing API |
| 10 | P1 | Focus states are browser-default `auto` rings in `currentColor`: inconsistent, undesigned, and white-on-blue on the RESET button. | computed |
| 11 | P1 | Heavy images: project PNGs shown at 252–560px wide ship at full resolution, e.g. Drishya **447KB**, AI Career Coach **381KB**, DART 168KB. Images are 1.25MB of the 1.39MB page. There's no `srcset` and no width/height attributes. | resource timing |
| 12 | P2 | Infinite blinking and pulsing loops with no reduced-motion stop. They're slow (≤1Hz), so they don't trip the flash rule. | code |
| 13 | P2 | Emoji used as UI (📅 🎓 🌐 🔗 📁 🐉), decorative but read aloud by screen readers in several places. | code |
| 14 | P2 | Mobile hero: the name breaks as "Kriish / *Tiwari*" with a grey italic second line, and the floating emoji collide with text at 390px. | `local-390.png` |
| 15 | P2 | One permanent redirect: `app.dartacademy.net/about` → `dartacademy.net/about` (308). All 17 outbound links resolve. | curl |
| 16 | P2 | The favicon is still Vite's `vite.svg`. | `index.html` |
| 17 | P2 | No layout shift was measured (CLS 0), but only because everything waits for the timer. | PerformanceObserver |

## 4. Performance baseline (mobile)

**Lighthouse 12.8.2** (mobile preset, simulated slow 4G and 4× CPU):

| Run | Perf | A11y | BP | SEO | FCP | LCP | TBT | CLS | SI | JS (gz) | Weight |
|---|---|---|---|---|---|---|---|---|---|---|---|
| live #1 | 96 | 100 | 100 | 100 | 2.1s | 2.1s | 30ms | 0 | 3.4s | 126.5KB | 137KB |
| live #2 | 95 | 100 | 100 | 100 | 2.0s | 2.0s | 30ms | 0 | 4.2s | 126.5KB | 137KB |
| local | 95 | 100 | 100 | 91 | 2.0s | 2.1s | 0ms | 0 | 4.1s | 123KB | 133KB |

**These Lighthouse numbers are misleading.** Lighthouse stops observing before the portfolio mounts. Its "LCP element" is the green `<pre>` boot log inside the CRT, and its page weight excludes every portfolio image. It scores the intro, not the site. Its accessibility 100 covers only the intro's DOM.

**What a visitor gets** (Playwright, 390×844, 4× CPU, cache disabled, full scroll):

| Metric | Live | Local |
|---|---|---|
| Hero readable (H1 at opacity 1) | 12.6s | 13.3s |
| True LCP (bio paragraph, after the intro) | **13.3s** | 14.0s |
| CLS | 0 | 0 |
| INP (worst observed: dialog open) | n/a | **288ms** |
| Page weight after full scroll | **1.39MB** (1.25MB images, 127KB JS, 8KB CSS) | 1.38MB |
| JS unused at load (Lighthouse) | 64KB of 109KB | – |

Budgets in the brief: LCP < 2.5s, CLS < 0.1, INP < 200ms. Current status: **LCP fails by about 5×, INP fails, CLS passes.**

## 5. SEO and sharing

- Client-rendered: crawlers and link unfurlers see only a title and a meta description. No content, OG image, Twitter card, canonical URL, JSON-LD, sitemap or robots file.
- One URL for everything. Projects can't be linked or shared, and a recruiter can't send "look at this case study".
- **Framework recommendation, to confirm after the direction is chosen:** move to **Astro** (static output) with React islands only where an interaction needs them. Reasons:
  1. The brief requires real routes (case studies, `/system`, a designed 404) with per-page titles, OG images and prerendered HTML.
  2. Astro ships zero JS by default, which removes the main cause of the LCP failure. A CSS-first motion system needs no runtime.
  3. Content collections give case studies a typed MD/MDX home in place of a 1,500-line TSX file.
  4. React components and TypeScript carry over.

  The alternative is to keep Vite + React and add a prerender step (`vite-react-ssg` or React Router 7 prerendering). It's viable, but it keeps React hydration on every page for content that is mostly static. I'll make the final call with the direction's interaction needs in hand.

## 6. Repo hygiene

- **`README.md` has live merge-conflict markers** (`<<<<<<< HEAD` … `>>>>>>> 7264a1c`) wrapped around the Vite template boilerplate.
- Unused dependencies: `three`, `@react-three/fiber`, `@react-three/drei` and `motion` (a duplicate of `framer-motion`).
- Unused assets, about 2.4MB in the repo:
  - fonts: Inter ×4 and Sora ×3 (declared in CSS, emitted to `dist`, never used);
  - images: `Drishya.ai.png` (552KB), `SOENPic.png`, `nalanda.png`, `aryan.jpeg`, two `WhatsApp Image …jpeg`, `logo.svg`, `react.svg`;
  - `public/crt.png`.
- Asset filenames with spaces and timestamps (`Screenshot 2025-07-03 182415.png`).
- Commit messages "xyz", "xyz1", "fix" on `main`.
- `vite.config.ts` defaults `base` to a GitHub Pages path while deploying to Vercel. The config is only correct because of a dashboard env var.
- Untracked `.astro/` folder from the old branch (pollutes lint and the Tailwind scan). `.screenshots/` and `.playwright-mcp/` are ignored, correctly.
- `index.html` still has the Vite favicon. `CrtBootIntro3D.tsx` is misnamed.
- No tests (acceptable for a portfolio), and no CI lint or build check.

## 7. Content audit

The question for each project: does it show **problem → decisions → outcome**, or a screenshot and a stack list?

| Work | Problem | Role / constraints | Decisions & tradeoffs | Outcome | Verdict |
|---|---|---|---|---|---|
| Tangent | implied ("capture without leaving flow") | – | – | ships installers; no numbers on site | Feature list |
| Trailmap | implied | – | one hint (evidence/confidence per edge) | – | Feature list |
| DART Academy | clear (scams and older adults) | intern; team unclear | – | "1,000+ older adults" sits in Experience, not here | Feature list |
| Drishya.ai | – | – | – | – | Screenshot + stack |
| AI Career Coach | – | – | – | – | Screenshot + stack (reads as tutorial-derived) |
| Receipt Tracker SaaS | – | – | – | – | Screenshot + stack (reads as tutorial-derived) |
| ICIBM 2026 site | conference info | designer + builder; "prototype" | – | – | The only UI/UX entry, with no design rationale |
| DART UX Research (role) | yes | yes | – | **60+ participants, 12 issues** | The best design evidence on the site, buried in a terminal card |
| ESC Lab (role) | partial | yes | offline-sync hint | 9 games, 40+ participants | Strong engineering story, untold |
| Studio23labs (role) | partial | solo build | – | 50+ SMEs, 4 channels | Strong systems story, untold |

**Overall:** there are no case studies. Every project is a screenshot, a one-paragraph description, a stack string and optional bullets. Nothing shows process, rejected options, tradeoffs or craft detail. For design roles, the gap matters more than any visual issue. The richest design story (DART UX research → interface changes) and the richest system stories (Studio23 inbox, ESC offline capture) live in Experience as bullets.

**Missing:** a résumé PDF, a visible email address (only a `mailto:` button), a copy-email action, any design-process artifact (sketches, flows, research synthesis), and an About that says anything specific.

**Weak copy:**

- "passionate about creating human-centered products that combine logic, design, and user experience"
- "I love collaborating; every project is a chance to learn, refine, and build experiences that truly connect."
- "SOFTWARE ENGINEER — DESIGNER — BUILDER"

**Flagship candidates for case studies:**

1. **DART** (UX research + frontend: the one place where I both researched and built).
2. **Studio23labs** (a system: four channels, one inbox).
3. **Tangent** (a hard interaction: capture without breaking flow).
4. **ESC Lab ImpairMate** (a sweated detail: offline capture and sync).

Trailmap is a fifth option. The rest go to an archive list. `TODO(kriish):` confirm which of these you can show screens or process for, and whether any NDA applies. Your notes from an earlier session also mention a requested project, LOOPHOLE (private repo, live site only), that isn't on `main`. Confirm whether it belongs in the archive.

## 8. Carry-forward list

**Keep (engineering and content):**

- **React + TypeScript (strict).** Component logic carries over whether or not Astro hosts it.
- **The content model, as data.** `Project` and `Experience` are typed and well-shaped (`bullets` with `metric`, `details`, `projectId` cross-links between roles and projects). Move them to content files and keep the shapes.
- **The experience copy.** It's specific, verified (the numbers are confirmed per your notes), and the best writing on the site.
- **Alt text.** Every image already has descriptive, accurate alt text. Keep the habit and the strings.
- **`useDialog` behaviour:** Escape closes, focus moves to close and is restored on close. Re-implement it on `<dialog>` if dialogs survive at all (case studies should be pages).
- **Role ↔ project cross-linking** (the "Built during my … role" line). It shows real connective tissue between work and projects.
- **The images that are already WebP** (Tangent, Trailmap, ICIBM). Re-export the PNGs the same way.
- **Vercel deploy from `main`.** Fix `base` in config rather than relying on the env var.

**Drop:** every OS and terminal costume, the intro, emoji UI, the logo wall, drag-and-drop cards, the category filter (with 7 items and 6 in one category, it filters nothing), Press Start 2P, the unloaded fonts, `three` / r3f / drei, the duplicate `motion`, and all unused assets.

**Carry forward visually:** one quality only. **A sense of humour about the medium**: the site already knows it's a made object and winks at you ("Press any key to continue_"). That impulse is worth keeping, expressed through craft rather than costume. Nothing else visual carries forward: no colour, face or layout.
