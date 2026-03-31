import { useState } from "react";
import { motion } from "framer-motion";
import AiCoach from "../assets/images/Screenshot 2025-07-03 182415.png";
import ReceiptTracker from "../assets/images/Screenshot 2025-07-03 182825.png";
import DART from "../assets/images/Screenshot 2025-07-03 185521.png";
import DARTlogo from "../assets/images/dart.svg";
import Drishya from "../assets/images/Drishya.ai2.png";
import Studio23 from "../assets/images/Studio23Labs.png";
import ESCLogo from "../assets/images/ESCLogo.png";

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

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
    {
      id: 4,
      category: "Software Engineering",
      title: "Drishya.ai",
      image: Drishya,
      shortDesc: "React, Anthropic API",
      fullDesc:
        "An interactive AI-powered algorithm visualization platform built with React, featuring step-by-step execution, real-time state tracking, and playback controls. Improves understanding of algorithms through dynamic, user-driven exploration. Currently supports only array questions and Python code,",
      github: "https://github.com/KriishT/Drishya.ai",
      live: "https://drishya-ai-henna.vercel.app/",
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
          I’m a computer science student at UB and a full-stack developer
          passionate about creating human-centered products that combine logic,
          design, and user experience.
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
              I’m Kriish Tiwari, a junior majoring in Computer Science at the
              University at Buffalo. I’m passionate about full-stack
              development, product management, and UI/UX design — turning ideas
              into thoughtful, user-first products. I love collaborating; every
              project is a chance to learn, refine, and build experiences that
              truly connect.
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
                  B.S. in Computer Science & Engineering
                </p>
                <p className="text-sm text-[#666]">
                  Intro to AI, Web development, Systems Programming, Algorithms,
                  Data Structures, Computer Organization
                </p>
              </div>
              <div>
                <p className="text-lg font-serif">Gravity </p>
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
            {filtered.map((_, i) => {
              const order = ["Drishya.ai", "DART Academy", "AI Career Coach", "Receipt Tracker SaaS"];
              const reorderedProjects = [...filtered].sort(
                (a, b) => order.indexOf(a.title) - order.indexOf(b.title)
              );

              const project = reorderedProjects[i];
              if (!project) return null;

              const gridStyles = "col-span-6 sm:col-span-3 row-span-2";

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
                  <div className="flex items-center justify-between bg-[#dcd9d3] px-4 py-2 border-b border-[#b7b3ac]">
                    <p className="text-sm font-semibold text-[#2d2b29] truncate pr-2">
                      {project.title}
                    </p>
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 bg-[#ff605c] rounded-full" />
                      <span className="w-3 h-3 bg-[#ffbd44] rounded-full" />
                      <span className="w-3 h-3 bg-[#00ca4e] rounded-full" />
                    </div>
                  </div>

                  {/* content */}
                  <div className="p-5 flex flex-col h-full gap-3">
                    <div className="w-full h-[220px] rounded-[4px] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <p className="text-[13px] text-[#4b4a47] leading-relaxed">
                      {project.shortDesc}
                    </p>

                    <div className="flex gap-3 mt-auto items-center flex-wrap">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[12px] px-4 py-1.5 bg-[#004bb5] text-white rounded-full hover:bg-[#003b92] transition shrink-0"
                        >
                          GitHub
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[12px] px-4 py-1.5 bg-[#6b705c] text-white rounded-full hover:bg-[#5a6350] transition shrink-0"
                        >
                          Live Demo
                        </a>
                      )}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-[12px] text-[#004bb5] underline hover:text-[#003b92]"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          {selectedProject && (
            <div
              className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
              onClick={() => setSelectedProject(null)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="w-[90%] md:w-[800px] lg:w-[900px] bg-[#e6e6e6] border-2 border-[#b3b3b3]
                 rounded-[8px] shadow-[12px_12px_0_#999] relative font-['Chicago'] text-[#1a1a1a]
                 animate-fadeIn"
              >
                {/* title bar */}
                <div className="flex items-center justify-between bg-[#c3c3c3] border-b border-[#9a9a9a] px-5 py-[6px]">
                  <p className="text-[14px] font-semibold text-[#2d2b29] tracking-tight">
                    📁 {selectedProject.title}
                  </p>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-[18px] leading-none text-[#2d2b29] hover:text-[#7a7a7a]"
                  >
                    ×
                  </button>
                </div>

                {/* body */}
                <div className="p-8 text-[14px] flex flex-col items-center">
                  <div className="w-[220px] h-[220px] border border-[#9a9a9a] bg-white flex items-center justify-center overflow-hidden mb-6 rounded-[6px]">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <p className="text-center leading-relaxed text-[#2f2f2f] max-w-[750px] mb-8">
                    {selectedProject.fullDesc}
                  </p>

                  {/* buttons */}
                  <div className="flex justify-center gap-5 mt-2">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-[#b0b0b0] border border-[#7f7f7f] rounded-[4px]
                         hover:bg-[#a0a0a0] active:bg-[#8f8f8f] transition text-[13px]"
                      >
                        GitHub
                      </a>
                    )}
                    {selectedProject.live && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-[#0055ff] border border-[#003eb8] rounded-[4px]
                         text-white hover:bg-[#0045d9] active:bg-[#003ab8] transition text-[13px]"
                      >
                        Visit
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-2 bg-[#b0b0b0] border border-[#7f7f7f] rounded-[4px]
                       hover:bg-[#a0a0a0] active:bg-[#8f8f8f] transition text-[13px]"
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section
        id="experience"
        className="py-28 px-6 border-t border-[#cfc8b9]
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

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center mt-14">
          <h2 className="text-center text-2xl font-mono text-[#6cb8ff] mb-12">
            {"<"}work_experience.log{">"}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {[
              {
                company: "Studio23labs",
                role: "Software Engineering Intern",
                location: "Toronto, Canada",
                duration: "Jan 2026 – Present",
                active: true,
                path: "Studio23labs",
                logo: Studio23,
                links: { live: "https://studio23labs.com/" },
                bullets: [
                  { metric: "65%", text: "Reduced average first-response time by consolidating chat, email, SMS, and voice into a single real-time WebSocket operator view for a multi-tenant SaaS platform." },
                  { metric: null, text: "Accelerated support resolution by integrating an OpenAI/Claude AI Assistant with per-channel context, tone config, and custom escalation rules, cutting repetitive agent workload." },
                ],
              },
              {
                company: "UB ESC",
                role: "Software Engineering Intern — Mobile",
                location: "Buffalo, NY",
                duration: "Dec 2025 – Present",
                active: true,
                path: "UB_ESC",
                logo: ESCLogo,
                links: { linkedin: "https://www.linkedin.com/company/embedded-sensing-and-computing-lab" },
                bullets: [
                  { metric: "9 games", text: "Engineered a React Native app with 9 AI-powered mini-games across 4 biometric dimensions measuring eye-tracking, motor coordination, and speech clarity — a non-invasive alternative to field sobriety tests." },
                  { metric: null, text: "Improved assessment scalability by deploying a cloud-based AI inference pipeline supporting concurrent multi-user sessions across all 4 biometric scoring dimensions." },
                ],
              },
              {
                company: "DART Collective",
                role: "UX Researcher",
                location: "Buffalo, NY",
                duration: "Jan 2026 – Present",
                active: true,
                path: "DART_UX",
                logo: DARTlogo,
                links: { linkedin: "", live: "https://app.dartacademy.net/about" },
                bullets: [
                  { metric: "73%", text: "Measured average knowledge retention rate across 60+ older adult users via structured post-session focus groups evaluating scam-awareness and digital literacy modules." },
                  { metric: "12", text: "Identified critical usability friction points by leading in-person sessions with 60+ users, directly resulting in UI fixes that reduced task-completion failures by 35%." },
                ],
              },
              {
                company: "DART Collective",
                role: "Software Engineering Intern",
                location: "Buffalo, NY",
                duration: "Sept 2024 – Aug 2025",
                active: false,
                path: "DART_SWE",
                logo: DARTlogo,
                links: { linkedin: "", live: "https://test.dartacademy.net/" },
                bullets: [
                  { metric: "85%", text: "Cut admin processing time by engineering a CSV bulk-enrollment workflow with real-time validation and rollback on a Next.js 15 / PostgreSQL platform serving 1,000+ users." },
                  { metric: "50%", text: "Increased learner engagement by building a WebSocket-powered live presenter-notes pane enabling real-time sync between instructors and learners." },
                ],
              },
            ].map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="rounded-[10px] border border-[#2b3242] bg-[#0d1117]/95
                   shadow-[0_0_28px_rgba(0,255,255,0.1)] overflow-hidden flex flex-col"
              >
                {/* terminal title bar */}
                <div className="flex items-center justify-between bg-[#101621] border-b border-[#2b3242] px-5 py-3 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#ff5555]" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#f1fa8c]" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#50fa7b]" />
                  </div>
                  <p className="text-[11px] text-[#6cb8ff] font-mono truncate mx-3 flex-1 text-center">
                    ~/Experience/{exp.path}
                  </p>
                  {exp.active && (
                    <span className="flex items-center gap-1.5 text-[11px] text-[#50fa7b] font-mono shrink-0">
                      <motion.span
                        className="w-2 h-2 rounded-full bg-[#50fa7b] inline-block"
                        animate={{ opacity: [1, 0.2, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      />
                      ACTIVE
                    </span>
                  )}
                </div>

                {/* card content */}
                <div className="p-7 font-mono leading-relaxed text-[#d9e4ee] flex flex-col flex-1 gap-5">
                  {/* header: logo + title */}
                  <div className="flex items-start gap-4">
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-12 h-12 object-contain rounded-[6px] border border-[#3a4b60] shrink-0 mt-0.5"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-[6px] border border-[#3a4b60] shrink-0 mt-0.5 bg-[#1a2235] flex items-center justify-center text-[22px]">
                        💻
                      </div>
                    )}
                    <div>
                      <p className="text-[#00d1ff] font-bold text-base">{exp.company}</p>
                      <p className="text-[#8bd8ff] text-sm mt-1">{exp.role}</p>
                      <p className="text-[#6cb8ff]/70 text-xs mt-1">
                        📅 {exp.duration} · {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* bullets */}
                  <div className="space-y-3 text-[#cfe3f5] text-[13px] flex-1">
                    {exp.bullets.map((b, bi) => (
                      <p key={bi} className="leading-relaxed">
                        <span className="text-[#50fa7b]">▒</span>{" "}
                        {b.metric && (
                          <span className="text-[#00d1ff] font-bold">[{b.metric}] </span>
                        )}
                        {b.text}
                      </p>
                    ))}
                  </div>

                  {/* link buttons */}
                  {"links" in exp && (
                    <div className="flex gap-3 flex-wrap pt-1 border-t border-[#2b3242]">
                      {(exp.links as any).live && (
                        <a
                          href={(exp.links as any).live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] px-3 py-1.5 rounded-md border border-[#00d1ff]
                             text-[#00d1ff] hover:bg-[#00d1ff]/10 transition font-mono"
                        >
                          🌐 Live Demo
                        </a>
                      )}
                      {(exp.links as any).linkedin && (
                        <a
                          href={(exp.links as any).linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] px-3 py-1.5 rounded-md border border-[#8bd8ff]
                             text-[#8bd8ff] hover:bg-[#8bd8ff]/10 transition font-mono"
                        >
                          🔗 LinkedIn
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* soft glowing cursor animation */}
          <motion.div
            className="text-[#00d1ff] font-mono text-lg mt-12"
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
