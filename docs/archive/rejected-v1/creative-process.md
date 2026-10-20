# Creative process: v3 "Tangents"

## 1. What v2 got right, and why it isn't enough

v2 ("Triage") fixed the craft: a 10-second wall became instant, 127 KB of JS became 5 KB, and the case studies got a
real decision structure. But judged against "something not seen before", it has three ceilings:

- **It's a kanban board.** However tactile, five columns of cards is the shape of Trello, Linear and Notion. A design
  hiring manager's first read is "productivity UI", not "art direction".
- **The metaphor is borrowed from one project.** Triage only explains Tangent. LOOPHOLE, Trailmap and DART are just
  filed into it.
- **No single image.** Static, the homepage is a well-made grid of screenshots. There's no one picture someone would
  remember and describe.

So v3 needs **one image that is the whole portfolio**, built from all of the work, not just one project.

## 2. Raw material

What only Kriish has:

- **Tangent**: a stray thought, captured mid-flow; the app is literally named after a line that touches a curve at one point.
- **LOOPHOLE**: seamless loops; every machine is a function of phase *p ∈ [0, 1)* where *p = 1 equals p = 0*.
- **Trailmap**: edges that carry their evidence; a map drawn from the code itself.
- **DART Academy**: legibility for older adults; research at the other end of the screen.
- **ESC Lab**: wearables and sensor data over time.
- **The person**: a CS degree with a hard start and end date (Aug 2023 → Dec 2026), lots of projects packed into 2026,
  and a job search pointed at what comes after.

## 3. Ten directions, sketched and scored

Scores out of 5: **N**ovelty (not seen before) · **F**it (could only be his) · **C**larity (a recruiter finds the work in
10 s) · **B**uildability (fast, accessible, maintainable).

| # | Idea | N | F | C | B | Verdict |
| --- | --- | :-: | :-: | :-: | :-: | --- |
| 1 | **Tangents.** The degree is a circle; every project leaves it as a tangent line in the month it started; today is a dot | 5 | 5 | 4 | 4 | **Chosen** |
| 2 | Motion-poster site: every section is a LOOPHOLE poster | 4 | 3 | 2 | 2 | Derivative of his own app; heavy WebGL |
| 3 | Infinite page: the footer flows seamlessly back into the hero | 4 | 4 | 2 | 3 | Disorienting; close to scroll-jacking. Kept as a phrase ("the loop closes") |
| 4 | Evidence graph: the site as a Trailmap of his work | 3 | 4 | 2 | 3 | Node graphs read as "constellation background" |
| 5 | Interruptions: stray thoughts pop into the margins as you read | 4 | 4 | 2 | 3 | Charming once, annoying by the third |
| 6 | Field recorder: the site as a sensor log (ESC Lab) | 3 | 2 | 3 | 4 | Only fits one role |
| 7 | Type specimen: projects as specimen sheets | 2 | 1 | 4 | 5 | Seen many times |
| 8 | Thermal receipts for each project | 2 | 1 | 4 | 4 | Seen; novelty wears off |
| 9 | Triage desk (v2) | 3 | 4 | 5 | 5 | Good craft, kanban ceiling |
| 10 | Spirograph generator: name drawn by a loop machine | 4 | 3 | 2 | 3 | Pretty; says nothing about the work |

## 4. Why Tangents wins

One geometric fact does all the work: **a tangent touches a circle at exactly one point, then goes its own way.**

- The **circle is the degree**: one revolution from August 2023 to December 2026. That's honest data, not decoration.
- **Every project is a tangent** leaving the circle in the month it started. Where a line leaves the circle *is* when.
- The **red dot is today**. It sits about 90% of the way round, so the composition itself says "about to graduate".
- The **loop closes in December 2026**, and that's the hiring pitch: *what's the next tangent?*
- It unifies the work instead of filing it: Tangent (the name), LOOPHOLE (the loop, a point travelling on phase *p*),
  Trailmap (lines that carry information), and the timeline of a person.

The ten-second read: a striking poster of lines leaving a circle; a red dot; four labelled lines that are the best work.
It's abstract and sleek, but every mark is a fact.

## 5. Locking the system: a line grammar

Everything on the site is drawn with five kinds of line, so the visual language *is* the information architecture.

| Mark | Means | Used for |
| --- | --- | --- |
| Long solid indigo tangent, labelled | Shipped, and worth an interview | Tangent, LOOPHOLE, DART Academy, Trailmap |
| Short solid ink tangent | Shipped earlier | Drishya.ai, AI Career Coach, Receipt Tracker |
| Dashed tangent | In progress | ImpairMate, ICIBM 2026 prototype |
| Dotted tangent from the future arc | Next | Ideas from Tangent's roadmap |
| Stub cut with × | Dropped | Killed ideas, with reasons |
| Thick arc on an inner ring | Time spent in a role | DART, ESC Lab, Studio23labs |
| Red dot | Today. It's a slider: drag it back through the degree | |

Each project gets a **glyph**: the circle with only its own tangent drawn, at its own angle. The glyph is its identity
everywhere: its row on the index, its case-study header, its share image. No two are the same, because no two projects
started in the same place in time (where months collide, line length and side differ).

## 6. Art direction

- **Field: mist periwinkle `#e9eaf8`**, sheets in white, ink `#15142b`. Cool, quiet, not cream, not black.
- **Indigo `#3d35d9`**, a deliberate echo of Tangent's own brand colour, for the lines that matter and for links.
- **Signal `#ff4a1c`**, used for one thing only: today.
- **Type:** Hubot Sans (variable width) for display, often at a lighter weight than v2 so the lines carry the weight;
  Atkinson Hyperlegible Next for reading; **Martian Mono** replaces the pixel mono, because a drafting-precise mono suits
  dates, angles and coordinates.
- **Layout:** on desktop a split screen. The loop is a sticky poster on the left while the index scrolls on the
  right, and whatever you're reading lights up its line. On phones the loop leads, and every row carries its own glyph.
- **The aesthetic risk:** the homepage's main image is a data diagram, not a photo, a name or a screenshot. It works
  only if every line is true and the composition is art-directed by hand (side and length of each line are set in data).

## 7. Motion language

1. **Lines draw; type doesn't move.** Stroke-dashoffset is the only entrance animation.
2. **Time plays once.** On first paint the dot travels from Aug 2023 to today (900 ms), and each line draws as the dot
   passes its month. The text and links are already there; nothing waits for the animation.
3. **Highlighting is continuous.** Hovering, focusing or scrolling to a project fades the other lines and slides the
   dot to its touch point on the 340 ms spring from v2.
4. **Nothing loops forever.**
5. **Reduced motion:** the diagram renders in its final state, highlights become instant opacity changes, and the
   scrubber still works.

## 8. Interaction moments

- **Hover a row** → its line lights up in the poster, the rest fade, and its date appears at the touch point.
- **Open a case study** → the loop itself carries over: a view transition morphs the poster into the case study's header glyph.
- **Delight: scrub the degree.** The red dot is an ARIA slider. Drag it (or use ←/→ when it's focused) back through
  time, and lines that didn't exist yet fade away while a readout shows the month. *Press Home to go back to Aug 2023.*
- Kept from v2: j/k through the work, ⌘/Ctrl+Shift+Space to leave a note, and printing gives a one-page résumé.

## 9. Self-critique

- *Isn't a radial timeline a known chart?* Radial timelines are; tangents as projects aren't. The meaning comes from
  his app's name and his loop engine, so it couldn't be moved to another portfolio without losing its logic.
- *Will it read as decoration?* Only if lines lie. Every angle is computed from a real month, the legend sits right
  under the poster, and the same glyph appears beside every row.
- *Clustering:* most work started in 2026, so the last quarter of the circle is dense. That's kept, because it's true,
  and handled by art direction: labels only on the four flagships; the others are labelled on hover.
- *Accessibility:* the poster is decorative (aria-hidden) apart from the slider, which is fully keyboard-operable with
  a spoken value ("March 2025"). The real navigation is the list, in DOM order.
