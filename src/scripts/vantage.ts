// Vantage: every painted heading is four planes at different depths. A plane's offset is its
// depth times the heading's distance from its alignment line, so the words only read when the
// heading sits on that line. Page titles align at scroll 0; section titles 18% down the viewport.

const DEPTH: [number, number][] = [
  [0, 0],
  [0.55, -0.1],
  [-0.42, -0.24],
  [0.26, -0.4],
];
const LINE = 0.18;
const MAX_OFFSET = 320;
const ARRIVAL_PX = 60;
const ARRIVAL_MS = 700;
const POINTER_DECAY = 0.07;

interface Heading {
  el: HTMLElement;
  planes: HTMLElement[];
  top: boolean;
  section: HTMLElement | null;
}

const reduce = matchMedia("(prefers-reduced-motion: reduce)");
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

const headings: Heading[] = [...document.querySelectorAll<HTMLElement>("[data-painted]:not([data-lost])")]
  .filter((el) => !el.closest("[data-static]"))
  .map((el) => ({ el, planes: [...el.querySelectorAll<HTMLElement>(".painted__plane")], top: el.hasAttribute("data-top"), section: el.closest<HTMLElement>("section[id]") }));

let pointer = { x: 0, y: 0 };
let settled = { x: 0, y: 0 };
let seenPointer = false;
let raf = 0;
let start = 0;

function place(h: Heading, d: number, px: number, py: number): void {
  let largest = 0;
  h.planes.forEach((plane, i) => {
    const [kx, ky] = DEPTH[i];
    const x = kx * d + kx * px;
    const y = ky * d + (ky + kx * 0.4) * py;
    largest = Math.max(largest, Math.abs(x), Math.abs(y));
    plane.style.transform = i === 0 ? "" : `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
  });
  // the wall plane goes solid at the vantage point, so no band seams ever show at rest
  h.planes[0].classList.toggle("is-split", largest > 0.75);
}

function frame(now: number) {
  raf = 0;
  const arrival = Math.max(0, 1 - ease(Math.min(1, (now - start) / ARRIVAL_MS))) * ARRIVAL_PX;
  settled.x += (pointer.x - settled.x) * POINTER_DECAY;
  settled.y += (pointer.y - settled.y) * POINTER_DECAY;
  const vx = Math.max(-110, Math.min(110, pointer.x - settled.x));
  const vy = Math.max(-110, Math.min(110, pointer.y - settled.y));
  const moving = arrival > 0.5 || Math.abs(vx) > 0.5 || Math.abs(vy) > 0.5;

  const maxScroll = document.documentElement.scrollHeight - innerHeight;
  for (const h of headings) {
    const r = h.el.getBoundingClientRect();
    if (r.bottom < -MAX_OFFSET || r.top > innerHeight + MAX_OFFSET) continue;
    let d: number;
    if (h.top) {
      d = scrollY + arrival;
    } else {
      // a heading in a full-screen section lines up when its section reaches the top of the
      // screen; any other heading lines up 18% down. Near the end of a page, where that
      // can't be reached, it lines up where it rests at maximum scroll.
      const ref = h.section ? h.section.getBoundingClientRect().top : r.top;
      const target = h.section ? 0 : innerHeight * LINE;
      d = ref - Math.max(target, ref - Math.max(0, maxScroll - scrollY));
    }
    d = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, d));
    // the pointer only disturbs a page title while you're near it
    const near = h.top && pointer.y < r.bottom + 120;
    place(h, d, near ? vx : 0, near ? vy : 0);
  }
  if (moving) kick();
}

function kick() {
  if (!raf) raf = requestAnimationFrame(frame);
}

function reset() {
  for (const h of headings) {
    h.planes.forEach((p) => (p.style.transform = ""));
    h.planes[0].classList.remove("is-split");
  }
}

function enable() {
  start = performance.now();
  kick();
}

addEventListener("scroll", () => !reduce.matches && kick(), { passive: true });
addEventListener("resize", () => !reduce.matches && kick(), { passive: true });
addEventListener(
  "pointermove",
  (e) => {
    if (reduce.matches || e.pointerType !== "mouse") return;
    pointer = { x: e.clientX, y: e.clientY };
    if (!seenPointer) {
      settled = { ...pointer };
      seenPointer = true;
    }
    kick();
  },
  { passive: true },
);
reduce.addEventListener("change", () => (reduce.matches ? reset() : enable()));

if (!reduce.matches) document.fonts.ready.then(enable);
