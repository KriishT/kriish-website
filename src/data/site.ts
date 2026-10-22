import { existsSync } from "node:fs";
import { join } from "node:path";

export const site = {
  name: "Kriish Tiwari",
  url: "https://kriisht.vercel.app",
  email: "kriish2205@gmail.com",
  description:
    "Kriish Tiwari designs and builds software, and tests it with the people who use it. Computer science at the University at Buffalo, graduating December 2026.",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kriishtiwari" },
    { label: "GitHub", href: "https://github.com/KriishT" },
  ],
  // The résumé link only appears once the file exists, so nothing ever points at a 404.
  resume: existsSync(join(process.cwd(), "public", "resume.pdf")) ? "/resume.pdf" : null,
};

// The homepage statement, and the live site's real headline it replaces.
export const headline = {
  now: "designs and builds software, then tests it with the people who use it.",
  was: {
    greeting: "Hi, I’m ",
    rest: ". I’m a computer science student at the University at Buffalo and a full-stack developer passionate about creating human-centered products that combine logic, design, and user experience.",
  },
  notes: {
    greeting: "It’s a portfolio, not a greeting card.",
    rest: "Everyone is “passionate”. Say what you do. School moves to the next line.",
    now: "Keep. It’s true: 60+ usability sessions at DART.",
  },
};

export const lede = "Computer science at the University at Buffalo, graduating December 2026.";

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
