# Design audit: kriisht.vercel.app

Audited 2026-10-20 on `main` @ `6070196`. Everything below was measured in a real browser (Playwright/Chromium) or read from the code. Nothing is inferred from memory. Screenshots are in `.screenshots/` (gitignored): `full-{1440,1024,768,390}.png`, `sec-*-{w}.png`, `m-*-390.png`, `rm-*` (reduced motion), `focus-state-1440.png`.

---

## 0. Repo map

| Area | Finding |
| --- | --- |
| Framework / build | React 19 + Vite 6 + TypeScript. Client-rendered SPA with a single route and **no router**. |
| Deploy | `kriisht.vercel.app` serves **this repo's `main`**. The live CSS hash `index-tC-ysckR.css` is byte-identical to a local build with `VITE_BASE_PATH=/`, and the live JS is the same size (377,218 B). Vercel must set `VITE_BASE_PATH=/`, because `vite.config.ts` defaults `base` to `/kriish-website`, which is why the dev server redirects there. The GitHub "homepage" field points to a different alias, `kriish-website.vercel.app`. |
| Styling | Tailwind v4 via `@tailwindcss/vite`, used almost entirely as **arbitrary values** (`text-[11px]`, `bg-[#0d1117]`). No tokens, no `@theme` palette. **92 distinct hex colours** and **10 one-off font sizes** in two components. |
| Components | `App.tsx` toggles `CrtBootIntro3D.tsx` (no 3D despite the name) → `PortfolioMain.tsx`, a **1,544-line single component** holding all content, all sections and both dialogs. |
| Content source | Typed arrays (`projects`, `workExperience`, `academicExperience`) at the top of `PortfolioMain.tsx`. The data model is decent and worth migrating, not rewriting. |
| Animation | `framer-motion` (used). `motion` is also installed (a duplicate package). No `MotionConfig`, so reduced-motion is ignored. |
| 3D | `three`, `@react-three/fiber`, `@react-three/drei` are installed and **never imported**. |
| Icons | `react-icons` (Simple Icons) for the tech-stack grid. Java is shown with the **CoffeeScript** logo (`SiCoffeescript`). |
| Fonts | Google Fonts: Press Start 2P + IBM Plex Mono (render-blocking `<link>`, no preconnect). The code also asks for **Playfair Display** and **"Chicago"**, which are **never loaded**. Self-hosted Inter (4 × ~343 KB TTF) and Sora are declared in `index.css` but **unused** (still emitted into `dist/`). |

## 1. Current design language (one paragraph)

A cream-beige page (`#e8e3d8`) opens on a 9.5-second CRT "boot" with floating emoji. Then comes a centred editorial hero: "Hi, I'm" over a high-contrast serif name (Playfair Display, *if the visitor happens to have it installed*, otherwise Times), with "Tiwari" in grey italic, an IBM Plex Mono paragraph and Press Start 2P pixel nav links. After that, every section switches to a **different operating system**: a Windows-XP-blue "about" band (`#dee6f3`, `#0055e5` title bars, macOS traffic lights on XP windows, a logo-tile tech-stack grid), a classic-Mac "Macintosh HD ▸ Projects" Finder band (`#d6d3ce`, rounded-full pill buttons in `#004bb5` / olive `#6b705c`), a Kali-Linux terminal for experience (`#1b1f2a` / `#0d1117`, Dracula-ish cyan `#00d1ff` / green `#50fa7b`, cyan glow shadows) and a DOS phosphor screen for contact (`#0c0d0c`, `#00ff9d`). Type is mostly IBM Plex Mono at 11–13 px, with pixel-font labels at 8–10 px. Spacing is `py-28` sections and `gap-6` grids with no scale beyond that. Motion is fade-ups, an infinite emoji bob, infinite blinking cursors, hover scale on cards and draggable project cards. Imagery is product screenshots cropped to 220 px tall. The copy voice is warm but generic ("passionate about creating human-centered products that combine logic, design, and user experience").

## 2. Distinctive vs. generic

**Genuinely distinctive / worth keeping**
- **Draggable project cards plus a RESET button.** A real, playful, physical interaction that you built. It's the one moment that feels like *you*.
- **Honest, specific content.** The project and experience copy avoids inflated claims, uses "In testing" / "Prototype" badges and specific alt text. That honesty is rare and is a design asset (see Match Point's "silence is unknown").
- **A sense of humour** (the banana, the boot screen). Personality is present; it just isn't directed.

**Generic / on the cliché list**
- **OS-desktop clone, four times over** (XP, classic Mac, Kali, DOS). This is the most common "creative developer portfolio" trope, and it isn't tied to your work.
- **"Hi, I'm Kriish"** hero, **emoji as icons** (💾 ❤️ 🍌 🌍 ✈️ 🐉 📅 🔗 📁), **"passionate…"** copy, the **"ENGINEER — DESIGNER — BUILDER"** triad.
- **Skills section of logo icons** (16-tile tech-stack grid).
- **Long preloader** with a fake "Press any key to continue" prompt: no key handler exists.
- **Bento-ish card grid** of screenshot + stack + pills (`rounded-full` pill badges everywhere).
- Cream bg + high-contrast serif hero is cliché #1, and the dark sections land close to cliché #2 (near-black + neon green/cyan).

## 3. Craft defects

### Blocking / high
1. **10-second content wall.** The intro is two fixed timeouts (6.5 s + 2.5 s + 0.5 s). Measured: main content mounts at **10.1 s**, and nothing skips it (keypress and click tested). It also ignores `prefers-reduced-motion` (9.8 s with reduce on).
2. **Mobile scroll trap.** Project cards are framer-motion `drag` elements with computed `touch-action: none`. At 390 px each card fills the viewport width, so a swipe that starts on a card drags the card instead of scrolling the page.
3. **Fonts that never load.** The hero name relies on Playfair Display, and the project dialog relies on "Chicago". Neither is loaded, so most visitors see **Times New Roman** (the dialog body visibly renders in Times: `m-dialog-390.png`).
4. **No content discoverability.** The page is an empty `<div id="root">`. There's no OG/Twitter meta, no canonical, no JSON-LD, no sitemap/robots and no 404. The favicon is the Vite logo.

### Medium
5. **Heading order**: `h2 "Hi, I'm"` precedes the `h1`, and `h3` is used for a tagline. No `<main>`/`<header>`/`<footer>` landmarks, no skip link.
6. **Focus states** are the browser default (`outline: auto`), nearly invisible on the pill buttons and the dark sections (`focus-state-1440.png`). Dialogs set initial focus and restore it, but **don't trap Tab**.
7. **Contrast failures**: the hero "© 2026" (`#555` at 60 % opacity on `#e8e3d8`) is **2.56:1**, and the 11 px tech-stack lines on cards (`#7a776f` on `#fffdfa`) are **4.40:1**. Everything else I sampled passes AA (hero body 5.83, experience meta 4.91, boot text 15.4).
8. **Images**: 1.25 MB of the 1.39 MB page weight is PNG screenshots (`Drishya.ai2.png` 447 KB, `Screenshot … 182415.png` 381 KB) shown at 506 × 220. There's no `srcset`, no AVIF/WebP for those, and `Drishya.ai2.png` (936 × 872) is cropped to a 2.3:1 strip, so the meaningful part of the screenshot is cut off.
9. **Infinite motion** (emoji bob, two blinking cursors, pulsing "ACTIVE" dots) with no reduced-motion handling. Emoji in the boot screen aren't `aria-hidden`, so screen readers announce "floppy disk, red heart, banana…".
10. **Mobile hero**: lots of dead space under the nav at 390 px, and the nav collapses to a vertical list of 10 px pixel-font links (small touch targets).

### Repo hygiene
- `README.md` contains **unresolved merge-conflict markers** (`<<<<<<< HEAD … >>>>>>> 7264a1c`) around the Vite template boilerplate.
- Unused dependencies: `three`, `@react-three/fiber`, `@react-three/drei`, `motion`.
- Unused assets: Inter ×4 + Sora ×3 fonts (~1.6 MB), `public/crt.png` (105 KB, 0 references), `aryan.jpeg`, both `WhatsApp Image …` files, `SOENPic.png`, `nalanda.png`, `logo.svg`, `Drishya.ai.png` (563 KB), `react.svg`, empty `App.css`.
- Asset filenames contain spaces (`Screenshot 2025-07-03 182415.png`).
- `@import "tailwindcss"` sits at the **end** of `index.css`. Per the CSS spec `@import` must come first; it works only because the Tailwind plugin rewrites it.
- Commit messages like `xyz`, `xyz1`, `fix`, `final 3`.
- The **Trailmap GitHub repo README is untouched Turborepo boilerplate**, and that's what a recruiter sees after clicking "GitHub" on a featured project.

## 4. Baseline performance

Lighthouse 12, mobile preset, against production `https://kriisht.vercel.app/` (report: scratchpad `lh-live-mobile.report.html`):

| Metric | Lighthouse | **What a visitor actually gets** (measured in-browser, 390 px, live site) |
| --- | --- | --- |
| Performance / A11y / BP / SEO | 97 / 100 / 100 / 100 | The scores are real but **measure the boot screen**: Lighthouse's LCP element is the CRT `<pre>`. |
| LCP | 1.9 s | **12.6 s** (hero bio paragraph, after the intro unmounts) |
| CLS | 0 | 0.000 after a full scroll |
| TBT | 110 ms | (INP not measurable without a field interaction; nothing heavy runs on input) |
| FCP / SI / TTI | 1.9 s / 2.6 s / 2.2 s | Content usable at **~10.1 s** |
| JS | 127 KB gz (377 KB raw), one chunk; 75 KB est. unused | same |
| Total weight | 137 KB (images never requested during the audit) | **1,386 KB** after scrolling: 1,250 KB images, 127 KB JS, 8 KB CSS (Google Fonts are cross-origin, so not counted) |

**Takeaway:** the stack is light, and the slowness is self-inflicted (the timer plus PNGs). A redesign that removes the wall and ships modern images should land a *true* LCP under 2 s.

## 5. Content audit

Every project currently gets the same treatment: **screenshot + one-line description + tech stack + buttons**, and "Read More" opens a modal with a paragraph and a feature bullet list. None of the seven projects shows **problem → constraints → decisions/tradeoffs → outcome**. Experience is résumé bullets in terminal cards. The meta description promises **research**, but there's no research section (the UX research role is a card in the experience grid). **There's no résumé link anywhere.**

| Project (on site) | Presentation today | Design-story potential |
| --- | --- | --- |
| **Tangent** (featured) | Card + 6 feature bullets | **Very high.** The README already has a crisp problem statement, a cited insight (Parnin & Rugaber), a loop (Capture → Park → Triage → Resurface) and keyboard-first interaction design. Ships v1.0.11 via GitHub Releases. |
| **Trailmap** (featured) | Card + 4 bullets | Medium-high (evidence/confidence on every edge), but the repo README is boilerplate and there's no live demo. |
| **DART Academy** | Card + 5 bullets, plus two separate experience cards | **High, and the only one with real user research** (60+ older adults, 12 issues → recommendations). Currently split across three places and never told as one story. |
| Drishya.ai | Card | Medium (algorithm visualiser, so interaction design). |
| AI Career Coach, Receipt Tracker | Cards | Low. These are tutorial-shaped SaaS builds; they belong in an archive list, not as peers of Tangent. |
| ICIBM 2026 | Card, "Prototype" badge | Low-medium (IA for a multi-page conference site). |

**Strong work that is *not on the site at all*** (from `gh repo list KriishT`):
- **Match Point.** "See why a dog adoption might fail before you swipe right." Its README contains the best explicit tradeoff you've written: *a deterministic sentence-level rule engine instead of an LLM call, because it can prove that silence stays "unknown"*. Every tag cites its source sentence; confidence caps the displayed score; 80 API + 47 browser assertions. **This is a flagship case study waiting to be written.**
- **LOOPHOLE.** The motion-poster arcade: 8 layout machines × 10 recipes, export to MP4/WebM/GIF, landing page as a toy, plus a verify pipeline with axe, Lighthouse, visual regression and cross-browser e2e. **Visually it's stronger than your portfolio** (see `.screenshots/ref-loophole.png`). A design hiring manager should see this first or second.
- **Cleave.** Client-side PDF splitter with a live "network request counter" trust indicator. A lovely, specific UX idea.
- Also: Gesture-DJ, NeuroLens (research data app), Sobriety-App-Redesign, khushu (pixel claw-machine gallery), Seance.

## 6. Open questions → `TODO(kriish)`

- `TODO(kriish):` résumé PDF to link (none in the repo).
- `TODO(kriish):` which address should "contact" use, `kriish2205@gmail.com` (current mailto) or the UB address?
- `TODO(kriish):` "Gravity, 2021–2023" in Education: what is it (school, coaching institute)? Visitors won't know.
- `TODO(kriish):` OK to add Match Point, LOOPHOLE and Cleave to the site? Any of them private-by-choice?
- `TODO(kriish):` sources for the numbers already on the site (50+ SMEs, 1,000+ older adults, 60+ participants, 12 issues, 40+ participants). The recommended direction cites a source for every number (see `concepts.md`). Already-unverified metrics (Tangent downloads, Studio23 %, DART %) stay off.
- `TODO(kriish):` Trailmap: a real README or demo, or drop it from "featured".
