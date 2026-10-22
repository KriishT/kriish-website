import { existsSync } from "node:fs";
import { join } from "node:path";

export const site = {
  name: "Kriish Tiwari",
  url: "https://kriisht.vercel.app",
  email: "kriish2205@gmail.com",
  description:
    "Kriish Tiwari designs, builds and creates software: full-stack web, mobile and desktop products, with UX research behind the work.",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kriishtiwari" },
    { label: "GitHub", href: "https://github.com/KriishT" },
  ],
  // The résumé link only appears once the file exists, so nothing ever points at a 404.
  resume: existsSync(join(process.cwd(), "public", "resume.pdf")) ? "/resume.pdf" : null,
};

// The first screen: what Kriish does and who Kriish is. School is a side note, not the headline.
export const intro = {
  verbs: ["Design", "Build", "Create"],
  who: "A software engineer who designs, building full-stack web, mobile and desktop products.",
  note: "Computer science at the University at Buffalo, graduating December 2026.",
};

// Kriish's own About text from the previous site, lightly tightened.
export const about = [
  "I’m a software engineer first, building full-stack web, mobile and desktop products, and I bring UX research and project coordination experience to that work.",
  "I love collaborating. Every project is a chance to learn, refine, and build experiences that connect with the people who use them.",
];

export const lookingFor =
  "I’m looking for design roles (product designer, design engineer, creative technologist) and software engineering roles, starting after I graduate in December 2026.";

export const education = [
  {
    school: "University at Buffalo",
    what: "B.S. in Computer Science, GPA 3.82",
    when: "Aug 2023 to Dec 2026 (expected)",
    detail: "Software project management, data models and SQL, algorithms for modern compute systems, systems programming, computer architecture, algorithms and complexity.",
    honours: "Two-time hackathon winner. Grace Capen Scholar. Dean’s List, 2023 to 2026.",
  },
  {
    school: "Gravity",
    what: "Grades 11 and 12",
    when: "2021 to 2023",
    detail: "Physics, chemistry, linear algebra and mathematics.",
  },
];

export const skills = [
  { group: "Languages", items: "JavaScript, TypeScript, Python, Java, C" },
  { group: "Frontend and mobile", items: "React, Next.js, React Native, Flutter, Tailwind CSS, HTML and CSS, shadcn/ui" },
  { group: "Backend and data", items: "Node.js, Express, REST APIs, WebSockets, PostgreSQL, MongoDB, Firebase, Supabase" },
  { group: "Tools", items: "Git and GitHub, Vercel, Docker, Figma, Stripe, Clerk, Inngest, OpenAI and Anthropic APIs" },
  { group: "Ways of working", items: "Usability research, Agile and Scrum" },
];
