import { useState } from "react";
import { motion } from "framer-motion";
import AiCoach from "../assets/images/Screenshot 2025-07-03 182415.png";
import ReceiptTracker from "../assets/images/Screenshot 2025-07-03 182825.png";
import DART from "../assets/images/Screenshot 2025-07-03 185521.png";
import DARTlogo from "../assets/images/dart.svg";

import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiPython,
  SiCoffeescript,
  SiVercel,
  SiTailwindcss,
} from "react-icons/si";

/* ------------------ motion helpers ------------------ */
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ------------------ types ------------------ */
interface Project {
  id: number;
  category: "Software Engineering" | "UI/UX" | "Others";
  title: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  github: string;
  live: string;
}

/* ===================================================== */

export default function PortfolioMain() {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | "Software Engineering" | "UI/UX" | "Others"
  >("All");

  const projects: Project[] = [
    {
      id: 1,
      category: "Software Engineering",
      title: "AI Career Coach",
      image: AiCoach,
      shortDesc:
        "React 19, Next.js 15, Tailwind CSS, NeonDB, Prisma, Clerk Auth, Inngest",
      fullDesc:
        "A full-stack AI Career Coach built with React 19, Next.js 15, Tailwind CSS, NeonDB, Prisma, Clerk Auth, Inngest, and Gemini API. It offers interactive MCQ interview prep with instant feedback and curated industry insights. AI-powered resume writer and cover-letter generator wrapped in polished Shadcn UI components.",
      github: "https://github.com/KriishT/AI-Career-Coach",
      live: "https://ai-career-coach-vert.vercel.app/",
    },
    {
      id: 2,
      category: "Software Engineering",
      title: "Receipt Tracker SaaS",
      image: ReceiptTracker,
      shortDesc:
        "React 19, Next.js 15, Tailwind CSS, Convex DB, Clerk Auth, Inngest, Schematic",
      fullDesc:
        "An AI-driven expense management platform built on Next.js 15 and TypeScript, featuring secure Server Components, Server Actions, and an optimized App Router. It offers drag-and-drop receipt uploads (powered by DND Kit), OCR-based data extraction, and AI-agent–driven categorization—all wrapped in a responsive Tailwind CSS/Shadcn UI with smooth animations and robust error handling.",
      github: "https://github.com/KriishT/Receipt-Tracker-SaaS",
      live: "https://receipt-tracker-xi.vercel.app/",
    },
    {
      id: 3,
      category: "Software Engineering",
      title: "DART Academy",
      image: DART,
      shortDesc:
        "React 19, Next.js 15, Tailwind CSS, ShadCn UI, Prisma, NeonDB, OAuth",
      fullDesc:
        "An AI-driven e-learning platform built for DART Collective using React 19, Next.js 15, Tailwind CSS, Prisma, and NeonDB. Optimized for accessibility, modular design, and instructor workflow.",
      github: "",
      live: "https://app.dartacademy.net/about",
    },
  ];

  const filtered = projects.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  return (
    <div className="bg-[#e8e3d8] text-[#2e2e2e] font-['IBM_Plex_Mono']">
      {/* ================= HERO (unchanged) ================= */}
      <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center px-6">
        {/* floating emojis */}
        <span className="absolute text-lg left-[10%] top-[15%]">💾</span>
        <span className="absolute text-lg right-[12%] top-[20%]">❤️</span>
        <span className="absolute text-lg right-[20%] bottom-[15%]">🍌</span>
        <span className="absolute text-lg left-[15%] bottom-[20%]">🌍</span>
        <span className="absolute text-lg right-[45%] top-[8%]">✈️</span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-serif text-lg tracking-wide text-[#333]"
        >
          Hi, I’m
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-['Playfair_Display'] text-6xl sm:text-8xl font-bold text-[#111] leading-[1.1]"
        >
          <span className="inline-block relative after:absolute after:left-0 after:bottom-1 after:w-full after:h-[2px] after:bg-[#222]/20">
            Kriish
          </span>{" "}
          <span className="text-[#5c5c5c] italic">Tiwari</span>
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="font-mono text-xs text-[#444] mt-4 tracking-widest"
        >
          SOFTWARE ENGINEER — DESIGNER — BUILDER
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="max-w-lg text-sm sm:text-base text-[#555] mt-6 leading-relaxed"
        >
          I’m a computer-science student and full-stack developer passionate
          about creating human-centered products that combine logic, aesthetics
          and motion.
        </motion.p>

        <motion.div
          className="w-16 h-[2px] bg-[#444] my-8 opacity-30"
          initial={{ width: 0 }}
          animate={{ width: "4rem" }}
          transition={{ delay: 1.8, duration: 1 }}
        />

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-6 font-['Press_Start_2P'] text-[10px] text-[#333]"
        >
          <a href="#projects" className="hover:text-[#111] transition-colors">
            PROJECTS
          </a>
          <a href="#experience" className="hover:text-[#111] transition-colors">
            WORK EXP
          </a>
          <a href="#contact" className="hover:text-[#111] transition-colors">
            CONTACT
          </a>
        </motion.nav>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 2.5 }}
          className="text-[10px] font-mono text-[#555] mt-10"
        >
          © 2025 Kriish Tiwari
        </motion.p>
      </section>

      <section
        id="about-me"
        className="py-28 px-6 border-t border-[#cfd6e2]
             bg-[#dee6f3] relative overflow-hidden"
      >
        {/* subtle scanline overlay */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none 
               [background:repeating-linear-gradient(0deg,rgba(0,0,0,.3)_0_1px,transparent_1px_3px)]"
        />

        {/* windows-blue section header */}
        <div
          className="absolute top-0 left-0 right-0 h-7
               bg-[#0a64d2] border-b border-[#003c8c]
               flex items-center justify-between px-3
               text-[11px] text-white font-['Press_Start_2P'] tracking-tight"
        >
          <span>💻 about_me — education — tech_stack</span>
          <div className="flex gap-1">
            <span className="bg-[#ec6a5e] w-3 h-3 rounded-[2px]" />
            <span className="bg-[#f4bd50] w-3 h-3 rounded-[2px]" />
            <span className="bg-[#61c554] w-3 h-3 rounded-[2px]" />
          </div>
        </div>

        <div className="mt-10" />

        {/* small spacer so your grid doesn't overlap the header */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none 
               [background:repeating-linear-gradient(0deg,rgba(0,0,0,.3)_0_1px,transparent_1px_3px)]"
        />
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 relative z-10">
          {/* About window */}
          <div
            className="bg-[#f7faff]/95 border-2 border-[#c0c8e0] rounded-[8px]
                    shadow-[4px_4px_0_#7f9ac8]"
          >
            <div className="flex items-center justify-between bg-[#0055e5] text-white px-3 py-1.5">
              <p className="text-[11px] font-bold tracking-wide">
                about_me.txt
              </p>
              <div className="flex gap-1">
                <span className="bg-[#ec6a5e] w-3 h-3 rounded-[2px]" />
                <span className="bg-[#f4bd50] w-3 h-3 rounded-[2px]" />
                <span className="bg-[#61c554] w-3 h-3 rounded-[2px]" />
              </div>
            </div>

            <div className="p-5 text-[#1a1a1a] font-['IBM_Plex_Mono'] leading-relaxed">
              I’m Krish Tiwari, a sophomore majoring in Computer Science at the
              University at Buffalo. I’m passionate about full-stack development
              and building intuitive, user-first applications. I love
              collaborating — every partnership is a chance to learn and ship
              better.
            </div>
          </div>

          {/* Education window */}
          <div
            className="bg-[#f7faff]/95 border-2 border-[#c0c8e0] rounded-[8px]
                    shadow-[4px_4px_0_#7f9ac8]"
          >
            <div className="flex items-center justify-between bg-[#0055e5] text-white px-3 py-1.5">
              <p className="text-[11px] font-bold tracking-wide">
                education.log
              </p>
              <div className="flex gap-1">
                <span className="bg-[#ec6a5e] w-3 h-3 rounded-[2px]" />
                <span className="bg-[#f4bd50] w-3 h-3 rounded-[2px]" />
                <span className="bg-[#61c554] w-3 h-3 rounded-[2px]" />
              </div>
            </div>

            <div className="p-5 space-y-5 text-[#1a1a1a] font-['IBM_Plex_Mono']">
              <div>
                <p className="text-lg font-serif">University at Buffalo</p>
                <p className="text-sm text-[#444]">Aug 2023 - Dec 2026</p>
                <p className="text-sm text-[#666]">
                  B.S. in Computer Science & Engineering — 2023–Present
                </p>
                <p className="text-sm text-[#666]">
                  Systems Programming, Algorithms, Data Structures, Computer
                  Organization
                </p>
              </div>
              <div>
                <p className="text-lg font-serif">Gravity High School</p>
                <p className="text-sm text-[#444]">2021–2023</p>
                <p className="text-sm text-[#666]">
                  Physics, Chemistry, Linear Algebra, Mathematics
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Tech Stack window */}
        <div className="max-w-6xl mx-auto mt-12 relative z-10">
          <div
            className="bg-[#f7faff]/95 border-2 border-[#c0c8e0] rounded-[8px]
                    shadow-[4px_4px_0_#7f9ac8]"
          >
            <div className="flex items-center justify-between bg-[#0055e5] text-white px-3 py-1.5">
              <p className="text-[11px] font-bold tracking-wide">
                tech_stack.sys
              </p>
              <div className="flex gap-1">
                <span className="bg-[#ec6a5e] w-3 h-3 rounded-[2px]" />
                <span className="bg-[#f4bd50] w-3 h-3 rounded-[2px]" />
                <span className="bg-[#61c554] w-3 h-3 rounded-[2px]" />
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-center text-2xl font-serif text-[#1a1a1a] mb-10">
                Tech Stack
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 justify-items-center">
                {[
                  { Icon: SiTypescript, name: "TypeScript" },
                  { Icon: SiReact, name: "React" },
                  { Icon: SiNodedotjs, name: "Node.js" },
                  { Icon: SiNextdotjs, name: "Next.js" },
                  { Icon: SiPostgresql, name: "PostgreSQL" },
                  { Icon: SiMongodb, name: "MongoDB" },
                  { Icon: SiExpress, name: "Express" },
                  { Icon: SiPython, name: "Python" },
                  { Icon: SiCoffeescript, name: "Java" },
                  { Icon: SiVercel, name: "Vercel" },
                  { Icon: SiTailwindcss, name: "Tailwind" },
                ].map(({ Icon, name }, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="flex flex-col items-center gap-1"
                  >
                    <div
                      className="w-20 h-20 grid place-items-center 
                     bg-[#f0f4ff] border-[2px] border-[#aab8d8]
                     shadow-[3px_3px_0_#7f9ac8,inset_-1px_-1px_0_#cbd5eb,inset_1px_1px_0_#ffffff]
                     rounded-[4px] 
                     hover:shadow-[2px_2px_0_#5a7eb8,inset_-1px_-1px_0_#cbd5eb,inset_1px_1px_0_#ffffff]
                     transition-all duration-150"
                      style={{
                        imageRendering: "pixelated",
                      }}
                    >
                      <Icon className="text-3xl text-[#0047C1] drop-shadow-[1px_1px_0_#fff]" />
                    </div>
                    <p
                      className="text-[9px] text-[#1a1a1a] font-['Press_Start_2P']
                     tracking-wide mt-1"
                    >
                      {name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="py-28 px-6 border-t border-[#cfc8b9]
       bg-[#d6d3ce] relative overflow-hidden"
      >
        {/* retro mac toolbar */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-[#d3cec8] border-b border-[#9d9a95] flex items-center justify-between px-4 text-[12px] text-[#2d2b29] font-['Chicago'] tracking-tight">
          <span>🖥️ Macintosh HD ▸ Projects</span>
          <span className="flex gap-3">
            <span>☁︎</span>
            <span>🕓</span>
            <span>🔋</span>
          </span>
        </div>

        <div className="mt-12 max-w-6xl mx-auto relative z-10">
          <h2 className="text-center text-3xl font-serif text-[#2d2b29] mb-6">
            Projects
          </h2>

          {/* Filters + Reset */}
          <div className="flex justify-center gap-3 flex-wrap mb-10">
            {["All", "Software Engineering", "UI/UX", "Others"].map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c as any)}
                className={`px-4 py-2 rounded-full text-[10px] font-['Press_Start_2P'] tracking-wider border border-[#b9b3a4] transition ${
                  selectedCategory === c
                    ? "bg-[#6b705c] text-white"
                    : "bg-[#fffdfa] text-[#5c5c5c] hover:bg-[#f5f3ea]"
                }`}
              >
                {c}
              </button>
            ))}

            {/* reset button */}
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 rounded-full text-[10px] font-['Press_Start_2P']
                   bg-[#004bb5] text-white hover:bg-[#003b92] border border-[#003b92] transition"
            >
              RESET
            </button>
          </div>

          {/* draggable bento workspace */}
          <motion.div
            layout
            className="relative grid grid-cols-6 gap-6 p-4 rounded-[6px]
       border border-[#b7b3ac] bg-[#f5f3f1] shadow-inner auto-rows-min"
          >
            {filtered.map((p, i) => {
              const reorderedProjects = [...filtered].sort((a, b) => {
                if (a.title === "DART Academy") return -1;
                if (b.title === "DART Academy") return 1;
                if (a.title === "AI Career Coach") return -1;
                if (b.title === "AI Career Coach") return 1;
                return 0;
              });

              const project = reorderedProjects[i];
              if (!project) return null;

              const gridStyles =
                project.title === "DART Academy"
                  ? "col-span-3 row-span-3"
                  : project.title === "AI Career Coach"
                  ? "col-span-3 row-span-2"
                  : "col-span-2 row-span-2";

              return (
                <motion.div
                  key={project.id}
                  layout
                  drag
                  dragMomentum={false}
                  dragElastic={0.35}
                  whileHover={{ scale: 1.03, zIndex: 10 }}
                  whileDrag={{ scale: 1.05, zIndex: 20, cursor: "grabbing" }}
                  className={`bg-[#fffdfa] border border-[#b9b3a4]
       shadow-[5px_5px_0_#c3baa5] rounded-[8px] overflow-hidden
       ${gridStyles} cursor-grab flex flex-col h-auto`}
                >
                  {/* header */}
                  <div className="flex items-center justify-between bg-[#dcd9d3] px-3 py-1 border-b border-[#b7b3ac]">
                    <p className="text-[11px] font-semibold text-[#2d2b29] truncate pr-2">
                      {project.title}
                    </p>
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 bg-[#ff605c] rounded-full" />
                      <span className="w-2.5 h-2.5 bg-[#ffbd44] rounded-full" />
                      <span className="w-2.5 h-2.5 bg-[#00ca4e] rounded-full" />
                    </div>
                  </div>

                  {/* content */}
                  <div className="p-3 flex flex-col h-full">
                    <div className="w-full h-[160px] rounded-[4px] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <p className="text-xs text-[#4b4a47] mt-3 leading-snug line-clamp-4">
                      {project.shortDesc}
                    </p>

                    {/* tighter buttons section */}
                    <div className="flex gap-3 mt-2 mb-1">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] px-3 py-1 bg-[#004bb5] text-white rounded-full hover:bg-[#003b92] transition shrink-0"
                        >
                          GitHub
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] px-3 py-1 bg-[#6b705c] text-white rounded-full hover:bg-[#5a6350] transition shrink-0"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      <section
        id="experience"
        className="min-h-screen py-28 px-6 border-t border-[#cfc8b9]
             bg-[#1b1f2a] relative overflow-hidden text-[#dfe7ef]"
      >
        {/* faint digital grid background */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none 
    [background:repeating-linear-gradient(0deg,rgba(0,255,255,.1)_0_1px,transparent_1px_3px),
     repeating-linear-gradient(90deg,rgba(0,255,255,.08)_0_1px,transparent_1px_3px)]"
        />

        {/* Kali-style top bar */}
        <div className="absolute top-0 left-0 right-0 h-9 bg-[#0d1117] border-b border-[#20242f] flex items-center justify-between px-4 text-[12px] text-[#6cb8ff] font-mono tracking-tight">
          <span>🐉 kali@localhost:~$ cat work_experience.log</span>
          <span className="flex gap-3 text-[#8bd8ff]">
            <span>💻</span>
            <span>🕓</span>
            <span>🔐</span>
          </span>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center mt-14">
          <h2 className="text-center text-2xl font-mono text-[#6cb8ff] mb-12">
            {"<"}work_experience.log{">"}
          </h2>

          {/* terminal window */}
          <div
            className="rounded-[10px] border border-[#2b3242] bg-[#0d1117]/95
                 shadow-[0_0_25px_rgba(0,255,255,0.15)] overflow-hidden
                 w-[92%] md:w-[80%] max-w-3xl"
          >
            {/* top bar */}
            <div className="flex items-center justify-between bg-[#101621] border-b border-[#2b3242] px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5555]" />
                <span className="w-3 h-3 rounded-full bg-[#f1fa8c]" />
                <span className="w-3 h-3 rounded-full bg-[#50fa7b]" />
              </div>
              <p className="text-[12px] text-[#6cb8ff] font-mono">
                kali@localhost:~/Experience/DART_Collective
              </p>
            </div>

            {/* content */}
            <div className="p-8 font-mono text-sm leading-relaxed text-[#d9e4ee]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
                <img
                  src={DARTlogo}
                  alt="DART Collective Logo"
                  className="w-20 h-20 object-contain rounded-[6px] border border-[#3a4b60]
                     shadow-[0_0_10px_rgba(0,200,255,0.25)]"
                />
                <div>
                  <p className="text-[#8bd8ff]">
                    {"$"} <span className="text-[#00d1ff]">Organization:</span>{" "}
                    DART Collective
                  </p>
                  <p className="text-[#8bd8ff] mt-1">
                    {"$"} <span className="text-[#00d1ff]">Role:</span> Software
                    Engineer Intern
                  </p>
                  <p className="text-[#8bd8ff] mt-1">
                    {"$"} <span className="text-[#00d1ff]">Duration:</span> Jun
                    2025 – Present
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-[#cfe3f5]">
                <p>
                  ▒ Built accessibility-driven AI e-learning modules using{" "}
                  <span className="text-[#00d1ff]">React 19</span> and{" "}
                  <span className="text-[#00d1ff]">Next.js 15</span>.
                </p>
                <p>
                  ▒ Improved user flow for older adults — fully{" "}
                  <span className="text-[#00d1ff]">WCAG compliant</span>.
                </p>
                <p>
                  ▒ Integrated{" "}
                  <span className="text-[#00d1ff]">Clerk Auth</span> with{" "}
                  <span className="text-[#00d1ff]">NeonDB</span> for secure
                  logins.
                </p>
                <p>
                  ▒ Developed analytics dashboards for live learner progress
                  tracking.
                </p>
              </div>

              {/* buttons */}
              <div className="flex gap-4 mt-8">
                <a
                  href="https://test.dartacademy.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] px-3 py-1.5 rounded-md border border-[#00d1ff]
                     text-[#00d1ff] hover:bg-[#00d1ff]/10 transition"
                >
                  🌐 Live Site
                </a>
                <a
                  href="https://github.com/KriishT/DART-Collective"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] px-3 py-1.5 rounded-md border border-[#8bd8ff]
                     text-[#8bd8ff] hover:bg-[#8bd8ff]/10 transition"
                >
                  🧠 GitHub
                </a>
              </div>

              {/* footer */}
              <div className="mt-8 text-[11px] text-[#00ffb7] opacity-70">
                {"$"} log updated at 18:03 — system running smoothly.
              </div>
            </div>
          </div>

          {/* soft glowing cursor animation */}
          <motion.div
            className="text-[#00d1ff] font-mono text-lg mt-16"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.1 }}
          >
            _
          </motion.div>
        </div>
      </section>
      <section
        id="contact"
        className="min-h-screen py-28 px-6 border-t border-[#cfc8b9]
             bg-[#0c0d0c] relative overflow-hidden text-[#00ff9d]"
      >
        {/* CRT scanlines */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none 
    [background:repeating-linear-gradient(0deg,rgba(0,255,0,.2)_0_1px,transparent_1px_3px)]"
        />

        {/* retro DOS top bar */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-[#1a1c1a] border-b border-[#2b2d2b] flex items-center justify-between px-4 text-[12px] text-[#00ff9d] font-mono">
          <span>🖥️ C:\\User\\Kriish_Tiwari\\Contact</span>
          <span className="flex gap-3 text-[#00ff9d]/80">
            <span>☰</span>
            <span>🕓</span>
            <span>⏻</span>
          </span>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center mt-14">
          <h2 className="text-center text-2xl font-mono mb-10">
            C:\\ contact_me.bat
          </h2>

          {/* terminal card */}
          <div
            className="rounded-[8px] border border-[#1f1f1f]
           bg-[#000000] shadow-[0_0_25px_rgba(0,255,128,0.2)]
           overflow-hidden w-[90%] md:w-[70%] max-w-2xl p-8"
          >
            <p className="text-sm mb-6">
              Initializing{" "}
              <span className="text-[#00ff9d]">contact_protocol.exe</span>
              ...
            </p>

            <div className="space-y-4 text-sm text-[#a8ffb3]">
              <p>
                {"$"} Name: <span className="text-[#fff]">Kriish Tiwari</span>
              </p>
              <p>
                {"$"} LinkedIn:{" "}
                <a
                  href="https://linkedin.com/in/kriishtiwari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#00ffa3]"
                >
                  linkedin.com/in/kriishtiwari
                </a>
              </p>
              <p>
                {"$"} GitHub:{" "}
                <a
                  href="https://github.com/KriishT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#00ffa3]"
                >
                  github.com/KriishT
                </a>
              </p>
            </div>

            {/* contact button */}
            <div className="mt-10 flex justify-center">
              <a
                href="mailto:kriish2205@gmail.com"
                className="border border-[#00ff9d] text-[#00ff9d] rounded
               px-6 py-2 text-sm font-mono hover:bg-[#00ff9d]/10 transition"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 text-[11px] text-[#00ff9d]/70 text-center">
              {"$"} system ready — press ENTER to connect.
            </div>
          </div>

          {/* blinking cursor */}
          <motion.div
            className="text-[#00ff9d] font-mono text-lg mt-14"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            _
          </motion.div>
        </div>
      </section>
    </div>
  );
}
