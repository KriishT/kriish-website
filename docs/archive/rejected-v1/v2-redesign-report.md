# Redesign report: "Triage"

Branch `redesign/v2`. Written to be reused as the raw material for this site's own case study.

## The idea in one sentence

My work, triaged like a Tangent inbox: the page is a cutting mat, every project is an index card filed under
**Do Now · Do Soon · Later · Idea · Drop**, and you can re-sort it with the keyboard.

## Before → after

| | Before (v1, live site) | After (v2, production build) |
| --- | --- | --- |
| Lighthouse mobile: Perf / A11y / BP / SEO | 97 / 100 / 100 / 100, but it measured the boot screen | **99 / 100 / 100 / 100** (home, `/work/tangent`, `/about`) |
| Time until content is visible | **10.1 s** (unskippable intro) | First paint is the content |
| LCP (real element) | **12.6 s** (hero paragraph, after the intro) | **1.8–2.2 s** (Lighthouse, simulated slow 4G + 4× CPU) |
| CLS | 0 | 0.001–0.003 |
| TBT | 110 ms | 0 ms |
| JavaScript | 127 KB gz, one bundle (React + framer-motion) | **≈5 KB gz on the home page** (board 2.4, site 1.4, prefetch 1.1); 0 framework |
| Page weight | 1,386 KB after scrolling (1,250 KB PNG screenshots) | 114–182 KB per page in Lighthouse; AVIF with WebP fallback |
| Routes | 1 (client-rendered) | 13 static HTML pages: home, 4 case studies, about, system, 404, 5 OG templates |

Method: v1 was measured on `kriisht.vercel.app`; v2 on `astro preview` of the production build (same Lighthouse 12
mobile preset, Chromium 1248). Reports are in the session scratchpad (`lh-live-mobile`, `lh-after-*`).

## Decisions and why

1. **Pivot, not polish.** v1 scored 1.67/5 on distinctiveness, point of view and personal fit (see `concepts.md`). It was
   four borrowed operating systems; nothing in it came from my own work.
2. **The concept comes from Tangent**, my shipped app, so the site demonstrates my interaction design instead of
   describing it. Buckets, context chips ("from src-tauri/src/context.rs"), j/k and 1–5 triage, and Tangent's real capture
   hotkey all carry over. I matched the bucket colours to Tangent's own (Idea is violet, not yellow).
3. **One bold thing: the cutting mat** (`#2f5d4a`). It's deliberately not one of the three AI-default looks (cream +
   serif + terracotta; near-black + acid accent; broadsheet hairlines). Everything on the mat is quiet paper and ink.
4. **A case-study template that is Tangent's loop:** Captured → Context → Triage → Dropped → Resurfaced. Decisions are
   set as "Chose X / over ~~Y~~ / because…" cards, so the design-thinking content is structural, not optional.
5. **A real Drop pile.** Killed ideas with reasons, drawn from my own docs (Tangent's feature strategy, LOOPHOLE's
   DECISIONS.md), plus v1's own boot screen.
6. **Type:** Hubot Sans with its width axis expanded to 118% for display; Atkinson Hyperlegible Next for body (a face
   drawn for low-vision readers, which fits my usability research with older adults); Departure Mono for labels and keys,
   the one pixel thread kept from v1. All OFL, subset to Latin, self-hosted (60 / 34 / 4.5 KB).
7. **Astro, with no client framework.** The site is mostly static, so the board is server-rendered as five plain lists
   and `board.ts` (≈2.4 KB gz) enhances it. React + framer-motion would have cost ~80 KB gz for the same behaviour.
8. **Motion without a library.** The spring (stiffness 500, damping 32: 340 ms, 3.8% overshoot) is precomputed into a
   CSS `linear()` easing and used by both CSS and WAAPI FLIP animations. Rule: cards have mass; text never moves.
9. **Cross-document view transitions** (`@view-transition`): a Do Now card morphs into its case study's header in
   Chromium and Safari; Firefox navigates normally. Off under reduced motion.
10. **Touch never drags.** v1's draggable cards had `touch-action: none` and trapped scrolling on phones. Drag is
    mouse/pen only; touch users tap.
11. **Reduced motion is designed, not disabled:** no load animation, moves become 150 ms cross-fades, no view
    transitions, and nothing is hidden.
12. **Accessibility floor:** landmarks, skip link, one h1 per page, an ink-plus-highlighter focus ring that reads on
    both mat and paper, native `<dialog>`s, live-region announcements for re-triage and filtering, single-key shortcuts
    that can be turned off (WCAG 2.1.4), 24 px minimum targets. Every colour pair is computed on `/system`, and all pass.
13. **The CLS bug, and the fix.** The expanded display face is wider than any fallback, so on phones the header nav
    wrapped only after the font loaded (CLS 0.203). The nav now always takes its own row on phones (CLS 0.001).
14. **Delight that doesn't block:** demote a Do Now card and it says why and slides home; ⌘/Ctrl+Shift+Space leaves
    me a note with the page you were on as its context chip; printing any page gives a designed one-page résumé.
15. **Honest content:** no new numbers. Every claim traces to the old site, my résumé, or a project's README /
    DECISIONS.md. Screenshots taken from Tangent's website demo say so in their captions.

## "Is this actually stunning?" checklist

**Art direction**
- [x] One clear idea, described above in one sentence.
- [x] Memorable signature: "his portfolio is a triage board you can re-sort with the keyboard."
- [x] Static frames look art-directed with motion off (`.screenshots/v2-06-reduced-motion-1440.png`).
- [x] Could only be mine: Tangent's buckets, context chips, real Drop pile.
- [x] Boldness spent in one place: the mat (plus the expanded display type that sits on it).

**Typography & detail**
- [x] Deliberate pairing and a fluid scale; `text-wrap: balance` on headings, `pretty` on body.
- [~] Spacing follows the token scale; a few intentional one-offs remain (3 px bucket stripe, −6 px Drop-pile overlap).
- [x] States: hover, focus, active, visited (dotted underline), empty bucket, empty-note error, 404.

**Motion & interaction**
- [x] Choreographed: FLIP on one spring, card → page view transition, one first-paint "park".
- [x] Reduced motion is complete (verified: zero animations on load, moves are opacity-only).
- [x] Delight that doesn't block (snap-back, capture note, print résumé).

**Recruiter signal**
- [x] Hero answers who, "design and build", and names the best work; Do Now is the first thing on the board.
- [~] Four case studies. Tangent and LOOPHOLE are deep; DART Academy and Trailmap need the TODOs below.
- [~] Copy reads like a person, but Kriish needs to read it aloud and edit it into his own voice.
- [x] Résumé, email and links in the header and footer of every page.

**Engineering**
- [x] Lighthouse mobile 99/100/100/100; LCP 1.8–2.2 s; CLS ≤ 0.003; TBT 0 ms (INP needs field data; TBT is the lab proxy).
- [~] 60 fps under 4× throttle: not profiled. All animation is transform/opacity on the compositor; no 3D or heavy code.
- [x] Keyboard-navigable, WCAG AA contrast, nothing depends on hover, checked at 390 px.
- [~] Chrome and Firefox pass. Playwright's Windows WebKit build draws the variable display face wrongly (a known
      limitation, also logged in LOOPHOLE's DECISIONS.md), so it still needs a check on real Safari.
- [x] No console errors; README rewritten, merge-conflict markers gone, unused deps and assets removed; `astro check`
      and `eslint` clean.

## Open `TODO(kriish)` items

1. **Drop card:** why you dropped the creative AI assistant for art (`src/data/work.ts`). It shows without a reason until then.
2. **DART Academy:** two or three of the 12 usability issues, and what changed because of them.
3. **Trailmap:** what's next and who it's for; ideally a real README in the repo (currently Turborepo boilerplate).
4. **Portrait** for About (none of the old photos were labelled).
5. **Read every page aloud** and edit the copy into your voice (especially About and the case-study openers).
6. **How you used AI tools** while building (design-engineering roles screen for this). Not written, because I don't know.
7. Résumé-only metrics (Tangent downloads and capture speed, Studio23labs %, ESC Lab %, DART % and rollback) are still
   off the site. The installer download count on GitHub didn't match "100+" when last checked; add them once confirmed.

## Next steps

- **Deploy:** merge `redesign/v2`. The Vercel project should use `npm run build` with output `dist`. The old
  `VITE_BASE_PATH` variable is no longer read, and Node must be ≥ 22.22.
- Restart your local dev server: the old Vite one on :5173 is now stale. `npm run dev` serves Astro on :5173.
- Check real Safari (desktop and iOS): the expanded display face, view transitions and the capture dialog.
- Optional: a 10-second screen recording of re-triaging the board, for LinkedIn and the OG image of the home page.
