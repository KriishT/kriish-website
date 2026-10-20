# Build report: version D, Vantage

Branch `redesign/d-vantage`, built 2026-10-20 on the shared foundation `redesign/fresh-concept`.

**Concept:** every heading is painted across four depths of the page, Varini-style, so it only resolves into words from one vantage point: the moment its section arrives.

Screens are in `docs/screens/build/d/`:

- `step1-*`: layout and type with motion off.
- `step2-*`: the signature at rest, arriving, scrolling, and at the line.
- `final-*`: every page at 1440, 768 and 390.

Lighthouse reports are in `docs/screens/after/`.

## Changelog

| Step | Commit | What changed |
|---|---|---|
| Foundation | `c4fb699` | Static Astro 7 site replaces the React SPA. Typed content collections; three flagship case studies with visible `TODO(kriish)`; About, Contact (copy-email), 404; per-page SEO, Person JSON-LD, sitemap, robots. Responsive WebP images. Removed React, framer-motion, three/r3f/drei, Tailwind, unused fonts and images, and the README conflict markers. |
| 1. System, layout, type | `110aea7` | Tokens as custom properties; Schibsted Grotesk and Literata self-hosted; the `Painted` heading (solid by default); every page laid out; `/system`. |
| 2. Signature | `7da8176` | Depth planes drift by distance from each heading's alignment line; a 700ms arrival; the pointer disturbs a nearby title; the rAF loop runs only while something moves. |
| 3–7. Work, pages, motion, delight, polish | this commit | Share images, favicon, static display weights (WebKit fix), single-file preload, visited state, the outline hover cue removed, font licences, README. |

The work index and case studies were built in step 1 and refined after the step 2 critique, so steps 3–4 have no separate commit. The motion pass is the signature itself; nothing else on the site moves.

## Critique log: what failed and what changed

| Found | Change |
|---|---|
| Three identical flagship rows read as a card stack | Every other row turns round |
| The wordmark showed the current-page underline on home | Only nav links get it |
| On load, "Work" sat about 640px below its line, so its fragments flew over the hero copy | All content sits above the paint layer; drift capped at 320px |
| A 110px arrival looked like an explosion | 60px over 700ms, so it reads as settling |
| Band seams showed at rest | At the vantage point the wall plane drops its mask and is solid type |
| **WebKit rendered the painted name at regular weight** (Playwright's WebKit ignores the variable weight axis) | Static weights 500–900 instead of the variable file. Verified in WebKit, Firefox and Chromium |
| The display preload pulled every weight | Preload filtered to the one 900-weight file |
| The headline could widow "it." | Non-breaking space |
| Visited links had no designed state | Dotted underline in content |
| Two hover cues on one project row | Removed the image-outline change (step 7's "remove one accessory") |

## Performance and quality, before and after

| Measure | Before (live site) | After (D) |
|---|---|---|
| Lighthouse mobile, home | 96 / 100 / 100 / 100, but it measured only the CRT intro | **99 / 100 / 100 / 100** |
| Lighthouse mobile, case study | n/a (no pages) | 99 / 100 / 100 / 100 |
| Real LCP (390px, 4× CPU, cold cache) | **13.3 s** | **0.68 s** |
| CLS | 0 | 0 |
| Worst interaction (INP proxy) | 288 ms | 112 ms |
| Page weight after a full scroll | 1,386 KB | 181 KB |
| JS shipped | 127 KB gzipped | about 2 KB, inlined (vantage script plus copy-email) |

One of four Lighthouse runs on the home page scored 88 with a 23.7s Speed Index. Two re-runs gave 98 and 98 (Speed Index 1.5s, last visual change about 0.7s), and the final run gave 99. A rAF trace confirms the loop stops when the 700ms arrival ends.

Other checks:

- 0 broken internal links.
- 0 WCAG AA contrast failures across all text on 8 pages (automated, rendered colours).
- 0 script errors.
- Every tab stop shows a 2px focus ring.
- 0 horizontal overflow at 1440, 768 and 390 on every page.

## §9 checklist

| Item | Result | Evidence |
|---|---|---|
| One-sentence concept with no project or technology | Pass | Above |
| Remove-a-project and swap-five tests | Pass | Headings are generic; flagships come from content files |
| Memorable signature, describable in one phrase | Pass | "The headings that only line up when you get to them" |
| Static screenshots look like posters | Pass | `final-home-1440.png`, `step2-home-1440-scrolling.png` |
| Not anyone else's, not AI-looking, no unapproved §8 items | Pass, with one approval pending | Large scroll-linked motion (removed under reduced motion) |
| Boldness in one place | Pass | Paint appears only on page and section titles |
| Deliberate pairing, scale, measure, no widows in key headlines | Pass | `/system`; widow fixed |
| Spacing follows the scale | Pass | Only tokens in styles |
| Hover, focus, active, visited, empty and error states | Pass | Visited added; copy-email has success and error states |
| One orchestrated moment | Pass | The 700ms title arrival |
| Designed reduced-motion version | Pass | Solid headings, the 404 stays apart (a static state), `step2-home-1440-reduced-motion-scrolled.png` |
| Delight that never blocks content | Pass | Pointer disturbance on titles; the 404 that never lines up |
| 10–15 second test | Pass, with a note | Name, "Designs and builds software" and the lede are in the first screen; the work starts one scroll down |
| 3–4 deep case studies with decisions and tradeoffs | **Not yet** | Structure and facts are done; decisions, process and outcomes are `TODO(kriish)` |
| Copy sounds like a real person | **Needs Kriish** | Drafted from the old site's facts in plain voice; read it aloud and rewrite |
| Résumé, email and links one click away | **Partial** | Email and links are in every footer; the résumé appears automatically once `public/resume.pdf` exists |
| Lighthouse ≥ 90 in all four categories | Pass | 99 / 100 / 100 / 100 |
| Keyboard, AA, works without hover, 390px | Pass | See checks above |
| Chrome, Safari, Firefox | Pass in Chromium, Firefox and Playwright WebKit | Real Safari on macOS or iOS not tested |
| No console errors; repo clean | Pass | README rewritten, conflict markers gone, no unused dependencies |
| Font licences recorded | Pass | `docs/fonts.md` |

## Decision log

1. **Concept from art, not projects.** Felice Varini's anamorphic paintings, chosen after round 1's directions (A–C) were judged not creative enough. The site concept never touches a project's domain.
2. **Astro, static, no client framework.** The old site hid everything behind 9.5s of client-rendered intro. Static HTML takes real LCP from 13.3s to 0.68s. The signature needs about 1KB of vanilla TypeScript, so React would have been weight without purpose.
3. **Paint only on titles.** One kind of element carries the trick. Body text, project rows and case-study subheads never move.
4. **Solid at rest.** At its vantage point a heading is plain type: the cleanest state for reading and for screenshots. It's also the no-JS and reduced-motion state, so nothing depends on the effect.
5. **Content above the paint, and capped drift.** The effect may never cost legibility.
6. **Static font weights.** A rendering bug in one engine was a better reason than file size to give up the variable file.
7. **Never invent.** Case-study gaps are visible `TODO(kriish)` boxes. All numbers are the confirmed ones (1,000+, 60+, 12, 50+, 40+, nine games).

## Open items

- `TODO(kriish)` in the case studies:
  - DART: 7 (team and constraints, the turning point, CSV, sign-in thresholds, a sweated detail, what shipped, next).
  - Tangent: 6.
  - Trailmap: 6.
- About: two or three sentences about you. Contact: what you're looking for and from when.
- `public/resume.pdf`.
- Approve or rewrite every sentence I drafted, especially "then tests it with the people who use it", which generalises from the DART research.
- Confirm the flagships (DART, Tangent, Trailmap), and whether LOOPHOLE belongs in the archive.
- Approve §8: the large scroll-linked motion.
- Test on a real iPhone and in Safari on a Mac.
