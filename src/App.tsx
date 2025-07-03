import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import myImage from "./assets/images/WhatsApp Image 2023-12-31 at 5.32.58 AM.jpeg";
import AiCoach from "./assets/images/Screenshot 2025-07-03 182415.png";
import ReceiptTracker from "./assets/images/Screenshot 2025-07-03 182825.png";
import DART from "./assets/images/Screenshot 2025-07-03 185521.png";
import DARTlogo from "./assets/images/dart.svg";

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
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

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

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25 } },
};

export default function PortfolioHomepage() {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | "Software Engineering" | "UI/UX" | "Others"
  >("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      category: "Software Engineering",
      title: "AI Career Coach",
      image: AiCoach,
      shortDesc:
        "React 19, Next.js 15, Tailwind CSS, NeonDB, Prisma, Clerk Auth, Inngest",
      fullDesc:
        "A full-stack AI Career Coach built with React 19, Next.js 15, Tailwind CSS, NeonDB, Prisma, Clerk Auth, Inngest, and Gemini API.It offers interactive MCQ interview prep with instant feedback and curated industry insights. AI-powered resume writer and cover-letter generator wrapped in polished Shadcn UI components.",
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
        "An AI-driven expense management platform built on Next.js 15 and TypeScript, featuring secure Server Components, Server Actions, and an optimized App Router. It offers drag-and-drop receipt uploads (powered by DND Kit), OCR-based data extraction, and AI-agent–driven categorization—all wrapped in a responsive Tailwind CSS/Shadcn UI with smooth animations and robust error handling. Authentication and user management are handled by Clerk; subscription plans, feature flags (via Schematic HQ), usage-based pricing, and permission gating ensure a scalable SaaS model with clear upgrade paths. Continuous event orchestration with Inngest ties it all together for reliable, end-to-end processing.",
      github: "https://github.com/KriishT/Receipt-Tracker-SaaS",
      live: "https://receipt-tracker-xi.vercel.app/",
    },
    {
      id: 3,
      category: "Software Engineering",
      title: "DART Academy",
      image: DART,
      shortDesc: "Next.js 15, Tailwind CSS, ShadCn UI, Prisma, JWT Auth, ",
      fullDesc:
        "An AI-driven expense management platform built on Next.js 15 and TypeScript, featuring secure Server Components, Server Actions, and an optimized App Router. It offers drag-and-drop receipt uploads (powered by DND Kit), OCR-based data extraction, and AI-agent–driven categorization—all wrapped in a responsive Tailwind CSS/Shadcn UI with smooth animations and robust error handling. Authentication and user management are handled by Clerk; subscription plans, feature flags (via Schematic HQ), usage-based pricing, and permission gating ensure a scalable SaaS model with clear upgrade paths. Continuous event orchestration with Inngest ties it all together for reliable, end-to-end processing.",
      github: "",
      live: "https://test.dartacademy.net/",
    },
  ];

  const filtered = projects.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  return (
    <div className="font-sans bg-[#dfd8c1] text-[#2e2e2e]">
      {/* HERO */}
      <section className="relative h-screen flex items-center px-6 overflow-hidden">
        {/* floating pastel squares */}
        <motion.div
          className="absolute top-10 left-10 w-48 h-48 bg-[#b0cba1] opacity-30 rounded-2xl rotate-12"
          initial={{ rotate: 12 }}
          animate={{ rotate: 372 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        />
        <motion.div
          className="absolute top-36 right-16 w-64 h-64 bg-[#a8c4d8] opacity-25 rounded-3xl -rotate-6"
          initial={{ rotate: -6 }}
          animate={{ rotate: 354 }}
          transition={{ repeat: Infinity, duration: 55, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-56 h-56 bg-[#d1c2e0] opacity-20 rounded-2xl rotate-6"
          initial={{ rotate: 6 }}
          animate={{ rotate: 366 }}
          transition={{ repeat: Infinity, duration: 65, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-40 right-1/3 w-40 h-40 bg-[#f1d2c1] opacity-20 rounded-3xl rotate-3"
          initial={{ rotate: 3 }}
          animate={{ rotate: 363 }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        />

        <motion.div
          className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          {/* Text */}
          <motion.div className="flex-1" variants={fadeIn}>
            <h1 className="text-6xl md:text-8xl font-extrabold uppercase leading-snug mb-2 text-[#6b705c]">
              Kriish Tiwari
            </h1>
            <h2 className="text-2xl italic text-[#8a817c] mb-4">
              Build. Design. Ideate. And Beyond...
            </h2>
            <p className="text-lg mb-6 max-w-lg text-[#5c5c5c]">
              Welcome to my portfolio website! Explore my work and get to know
              to know more about me
            </p>
            <motion.button
              variants={fadeIn}
              onClick={() => {
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-3 py-3 bg-[#6b705c] text-white text-sm rounded-xl uppercase shadow-md tracking-wide hover:bg-[#a8dce6] transition"
            >
              View Experience
            </motion.button>

            <motion.button
              variants={fadeIn}
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className=" ml-3 px-3 py-3 bg-white text-[#6b705c] text-sm rounded-xl uppercase shadow-md tracking-wide hover:bg-[#a8dce6] transition"
            >
              View Projects
            </motion.button>
          </motion.div>

          {/* Square Placeholder */}
          <motion.div variants={fadeIn} className="flex-shrink-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg bg-[#f0e1d2] shadow-lg flex items-center justify-center text-[#6b705c] font-semibold select-none">
              <img
                src={myImage}
                alt="Kriish Tiwari"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT + EDUCATION + TECH STACK */}
      <section id="about-me" className="py-32 px-6 border-t border-gray-300">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-5xl mx-auto space-y-32 sm:space-y-28 md:space-y-32"
        >
          {/* About Intro */}
          <motion.div
            variants={fadeIn}
            className="text-center space-y-8 sm:space-y-10 md:space-y-12 px-4"
          >
            <h2 className="text-5xl sm:text-5xl md:text-6xl font-bold text-[#6b705c]">
              About Me
            </h2>
            <p className="text-xl mt-5 sm:text-xl md:text-2xl text-[#5c5c5c] max-w-3xl mx-auto leading-relaxed">
              I'm Krish Tiwari, a sophomore majoring in Computer Science at the
              University at Buffalo. I'm passionate about full-stack development
              and building intuitive, user-first applications that simplify
              people's daily lives. I love collaborating with others—every
              partnership is a chance to learn something new and tackle problems
              from fresh perspectives. I'm currently sharpening my design skills
              in UI/UX to bring even more polish and purpose to every project.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={fadeIn}
            className="space-y-12 sm:space-y-14 md:space-y-16 px-4"
          >
            <h3 className=" mt-10 text-3xl sm:text-3xl md:text-4xl font-semibold text-[#6b705c]">
              Education
            </h3>
            <div className="mt-5 relative pl-8 sm:pl-10">
              <div className="absolute left-2 sm:left-4 top-0 w-px h-full bg-[#a8e6cf]" />
              <div className="flex items-start space-x-4 sm:space-x-6 mb-12">
                <div className="mt-1">
                  <div className="w-6 h-6 bg-[#a8e6cf] rounded-full border-2 border-white" />
                </div>
                <div className=" ml-3 space-y-2">
                  <p className=" text-2xl sm:text-2xl md:text-3xl font-semibold text-[#4a4a3f]">
                    University at Buffalo
                  </p>
                  <p className="text-base sm:text-base md:text-lg text-[#5c5c5c]">
                    B.S. in Computer Science & Engineering
                  </p>
                  <p className="text-sm sm:text-sm md:text-base text-[#8a817c] w-100 break-words whitespace-normal max-w-xs sm:max-w-full">
                    Relevant Coursework: Systems Programming, Algorithms and
                    Complexity, Data Structures and Algorithms, Computer
                    Organization
                  </p>
                  <p className="text-sm sm:text-sm md:text-base text-[#8a817c]">
                    2023 – Present
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 relative pl-8 sm:pl-10">
              <div className="absolute left-2 sm:left-4 top-0 w-px h-full bg-[#a8e6cf]" />
              <div className="flex items-start space-x-4 sm:space-x-6 mb-12">
                <div className="mt-1">
                  <div className="w-6 h-6 bg-[#8fe6a9] rounded-full border-2 border-white" />
                </div>
                <div className=" ml-3 space-y-2">
                  <p className=" text-2xl sm:text-2xl md:text-3xl font-semibold text-[#4a4a3f]">
                    Gravity
                  </p>
                  <p className="text-base sm:text-base md:text-lg text-[#5c5c5c]">
                    High School
                  </p>
                  <p className="text-sm sm:text-sm md:text-base text-[#8a817c] w-100 break-words whitespace-normal max-w-xs sm:max-w-full">
                    Relevant Coursework: Physics, Chemistry, Linear Algebra,
                    Mathematics
                  </p>
                  <p className="text-sm sm:text-sm md:text-base text-[#8a817c]">
                    2021 – 2023
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            variants={fadeIn}
            className="space-y-12 sm:space-y-14 md:space-y-16 px-4 mt-10"
          >
            <h3 className="text-3xl sm:text-3xl md:text-4xl font-semibold text-[#6b705c] text-center">
              Tech Stack
            </h3>
            <motion.div
              variants={fadeIn}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-10 sm:gap-12 md:gap-16 justify-items-center"
            >
              {[
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
              ].map((Icon, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="p-4 rounded-lg bg-[#fffdfa] hover:bg-[#f5f3ea] transition cursor-pointer mt-5"
                >
                  <Icon className="text-3xl text-[#6b705c]" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32 px-6 border-t border-gray-300">
        <motion.div
          className="max-w-6xl mx-auto space-y-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeIn}
            className="text-5xl font-bold text-center mb-8 text-[#6b705c]"
          >
            Projects
          </motion.h2>

          {/* Filters */}
          <motion.div
            variants={fadeIn}
            className="flex justify-center gap-4 flex-wrap mb-8"
          >
            {["All", "Software Engineering", "UI/UX", "Others"].map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c as any)}
                className={`px-4 py-2 rounded-full text-sm uppercase font-medium transition ${
                  selectedCategory === c
                    ? "bg-[#6b705c] text-white"
                    : "bg-white text-[#5c5c5c] hover:bg-[#eee]"
                }`}
              >
                {c}
              </button>
            ))}
          </motion.div>

          {/* Centered Grid Container */}
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filtered.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial="hidden"
                    animate="show"
                    exit={{ opacity: 0, y: 20 }}
                    variants={fadeIn}
                    className="bg-[#fffdfa] rounded-lg shadow-lg overflow-hidden"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6 flex flex-col">
                      <h3 className="text-xl font-semibold text-[#6b705c]">
                        {project.title}
                      </h3>
                      <p className="text-[#5c5c5c] text-sm mt-2">
                        {project.shortDesc}
                      </p>
                      <div className="mt-4 flex items-center gap-4">
                        <button
                          onClick={() => setActiveProject(project)}
                          className="px-4 py-2 bg-[#6b705c] text-white text-sm rounded-full hover:bg-opacity-90 transition"
                        >
                          Read More
                        </button>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-2xl text-[#2e2e2e] hover:text-[#6b705c] transition"
                        >
                          <FaGithub />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-2xl text-[#2e2e2e] hover:text-[#6b705c] transition"
                        >
                          <FiExternalLink />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Modal */}
          <AnimatePresence>
            {activeProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  className="bg-[#fffdfa] rounded-lg shadow-lg max-w-md w-full p-6 relative"
                >
                  <button
                    onClick={() => setActiveProject(null)}
                    className="absolute top-3 right-3 text-[#6b705c] text-xl"
                  >
                    ×
                  </button>
                  <h3 className="text-2xl font-semibold mb-4 text-[#6b705c]">
                    {activeProject.title}
                  </h3>
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <p className="text-[#5c5c5c] mb-4">
                    {activeProject.fullDesc}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#6b705c] text-white rounded-full text-sm"
                    >
                      GitHub
                    </a>
                    <a
                      href={activeProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#a8e6cf] text-[#2e2e2e] rounded-full text-sm"
                    >
                      Live Demo
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* WORK EXPERIENCE */}
      <section id="experience" className="py-32 px-6 border-t border-gray-300">
        <motion.h2
          variants={fadeIn}
          className="text-5xl font-bold text-center mb-15 text-[#6b705c]"
        >
          Work Experience
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8"
        >
          {/* Company Logo */}
          <motion.img
            variants={fadeIn}
            src={DARTlogo}
            alt="Company Logo"
            className="
    w-24 h-24        /* 6rem x 6rem on all screens */
    md:w-32 md:h-32  /* 8rem x 8rem on md+ */
    object-contain   /* preserve aspect ratio */
    rounded-lg
    shadow-lg
  "
          />

          {/* Details */}

          <motion.div variants={fadeIn} className="flex-1 space-y-2">
            <h3 className="text-2xl font-semibold text-[#6b705c]">
              DART Collective
            </h3>
            <p className="text-lg text-[#5c5c5c]">Software Engineer Intern</p>
            <p className="text-sm text-[#8a817c]">Sept 2024 – Present</p>
            <p className="text-[#5c5c5c] w-150 break-words whitespace-normal max-w-xs sm:max-w-full">
              Worked with a cross-functional team to convert the UI designed to
              frontend and implemented multiple features like bulk enrollement,
              presenter notes etc.
            </p>
            <a
              href="https://test.dartacademy.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-[#238360] hover:underline"
            >
              Company Website
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section className="py-32 px-6 border-t border-gray-300">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <motion.h2
            variants={fadeIn}
            className="text-4xl font-bold text-[#6b705c]"
          >
            Contact Me
          </motion.h2>
          <motion.p variants={fadeIn} className="text-lg text-[#5c5c5c]">
            Have a project, idea or opportunity? Let's talk.
          </motion.p>
          <motion.a
            variants={fadeIn}
            href="mailto:kriish2205@gmail.com"
            className="inline-block px-8 py-3 bg-[#a8e6cf] text-[#2e2e2e] rounded-full uppercase shadow-md hover:bg-[#b0e0e6] transition"
          >
            Reach Out
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
