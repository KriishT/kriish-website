import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AiCoach from "../assets/images/Screenshot 2025-07-03 182415.png";
import ReceiptTracker from "../assets/images/Screenshot 2025-07-03 182825.png";
import DART from "../assets/images/Screenshot 2025-07-03 185521.png";
import DARTlogo from "../assets/images/dart.svg";
import Drishya from "../assets/images/Drishya.ai2.png";
import Studio23 from "../assets/images/Studio23Labs.png";
import ESCLogo from "../assets/images/ESCLogo.png";
import UBLogo from "../assets/images/ublogo.png";
import Tangent from "../assets/images/tangent-website.webp";
import Trailmap from "../assets/images/trailmap-graph.webp";
import ICIBM from "../assets/images/icibm-2026-site.webp";

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
  SiSupabase,
  SiFirebase,
  SiTauri,
  SiRust,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

/* ------------------ motion helpers ------------------ */
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ------------------ types ------------------ */
type Category = "Software Engineering" | "UI/UX" | "Others";
type CategoryFilter = "All" | Category;

const CATEGORY_FILTERS: CategoryFilter[] = [
  "All",
  "Software Engineering",
  "UI/UX",
  "Others",
];

interface Project {
  id: number;
  category: Category;
  title: string;
  featured?: boolean;
  badge?: string;
  image: string;
  imageAlt: string;
  shortDesc: string;
  stack: string;
  fullDesc: string;
  highlights?: string[];
  github: string;
  live: string;
  liveLabel?: string;
  download?: string;
}

type ExperienceStatus = "active" | "completed" | "academic";

interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  duration?: string;
  context?: string;
  status: ExperienceStatus;
  path: string;
  logo?: string;
  links: { live?: string; liveLabel?: string; linkedin?: string };
  bullets: { metric: string | null; text: string }[];
  details: { heading?: string; status?: string; note?: string; items: string[] }[];
  tags: string[];
  projectId?: number;
}

/* ------------------ content ------------------ */
// Featured projects come first; the array order is the display order.
const projects: Project[] = [
  {
    id: 5,
    category: "Software Engineering",
    title: "Tangent",
    featured: true,
    image: Tangent,
    imageAlt:
      "Tangent website hero reading “Catch the thought. Keep the flow.” with Download for Windows and Download for Mac buttons",
    shortDesc:
      "A Windows/macOS productivity app that captures notes alongside your active-window context, then turns them into scheduled follow-ups.",
    stack: "React, TypeScript, Tauri/Rust, SQLite",
    fullDesc:
      "Tangent is a local-first desktop app for Windows and macOS. A global shortcut opens quick capture without pulling you out of what you're doing, and each note is saved with the app and window or file you were working in. Notes then move through a keyboard-driven triage flow and can be scheduled as follow-ups.",
    highlights: [
      "Global shortcuts for quick capture — type, or hold to speak with on-device Whisper transcription.",
      "Automatic active-window context (app plus window or file) saved with every note.",
      "Keyboard-driven task triage into Do Now, Do Soon, Later, Idea, and Drop buckets.",
      "Natural-language date parsing for due dates, such as “tomorrow” or “Friday 3pm”.",
      "Google Calendar OAuth integration for scheduling follow-ups, plus native OS reminders.",
      "Local SQLite storage — no account required. Installers ship through GitHub Releases.",
    ],
    github: "https://github.com/KriishT/Tangent",
    live: "https://usetangent.vercel.app/",
    liveLabel: "Website",
    download: "https://github.com/KriishT/Tangent/releases/latest",
  },
  {
    id: 6,
    category: "Software Engineering",
    title: "Trailmap",
    featured: true,
    image: Trailmap,
    imageAlt:
      "Trailmap dependency graph generated from a scan of the Trailmap monorepo, showing web and worker services connected to Supabase, Redis, and the scanner package",
    shortDesc:
      "Scans codebases into source-linked architecture and dependency graphs that refresh as the code changes.",
    stack: "TypeScript, GitHub webhooks, Supabase",
    fullDesc:
      "Trailmap scans a repository to detect its services, databases, and external dependencies, then renders them as an architecture graph. Every node and edge carries the evidence it was inferred from, so each mapped dependency points back to its implementation.",
    highlights: [
      "Generates source-linked architecture and dependency graphs, with evidence and a confidence level for each connection.",
      "Connects mapped dependencies to the files that implement them.",
      "Re-scans on pushes to the default branch through GitHub webhooks, keeping the map current.",
      "Stores graph snapshots in Supabase and uses them to post dependency-impact summaries on pull requests.",
    ],
    github: "https://github.com/KriishT/Trailmap-Dev",
    live: "",
  },
  {
    id: 3,
    category: "Software Engineering",
    title: "DART Academy",
    image: DART,
    imageAlt:
      "DART Academy About page welcoming learners as Digital Agents for Reducing Trickery",
    shortDesc:
      "A digital-literacy and scam-awareness learning platform for older adults, built with DART Collective.",
    stack: "React 19, Next.js 15, Tailwind CSS, shadcn/ui, Prisma, NeonDB, OAuth",
    fullDesc:
      "DART Academy teaches older adults to recognize and avoid scams through interactive courses. It runs on Next.js 15 and React 19 with Tailwind CSS and shadcn/ui on the front end, and Prisma with NeonDB (PostgreSQL) for data.",
    highlights: [
      "Course and learning screens for scam-awareness modules, plus account, accessibility, privacy, and terms pages.",
      "Spreadsheet-based bulk enrollment so administrators can import learner rosters with row validation.",
      "Login protection with rate limiting, CAPTCHA after repeated failed attempts, and account lockout.",
      "Course content for romance, gift-card, IRS, grandparent, password, deepfake, and crypto scam modules.",
      "Admin dashboard views for user analytics and announcements.",
    ],
    github: "",
    live: "https://app.dartacademy.net/about",
  },
  {
    id: 4,
    category: "Software Engineering",
    title: "Drishya.ai",
    image: Drishya,
    imageAlt:
      "Drishya.ai visualizing an array loop at step 8 of 13, with a variables table and playback controls",
    shortDesc:
      "An AI-powered algorithm visualizer with step-by-step execution, live state tracking, and playback controls.",
    stack: "React, Anthropic API",
    fullDesc:
      "An interactive AI-powered algorithm visualization platform built with React, featuring step-by-step execution, real-time state tracking, and playback controls. Improves understanding of algorithms through dynamic, user-driven exploration. It currently supports array problems written in Python.",
    github: "https://github.com/KriishT/Drishya.ai",
    live: "https://drishya-ai-henna.vercel.app/",
  },
  {
    id: 1,
    category: "Software Engineering",
    title: "AI Career Coach",
    image: AiCoach,
    imageAlt:
      "AI Career Coach landing page with the headline “Your AI Career Coach for Professional Success”",
    shortDesc:
      "An AI career platform with interview prep, industry insights, and AI-assisted resume and cover-letter writing.",
    stack:
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
    imageAlt:
      "Receipt Tracker home page with the headline “Intelligent Receipt Scanning” and a drag-and-drop PDF upload area",
    shortDesc:
      "An expense-management SaaS that extracts receipt data from uploaded PDFs and categorizes spending with AI.",
    stack:
      "React 19, Next.js 15, Tailwind CSS, Convex DB, Clerk Auth, Inngest, Schematic",
    fullDesc:
      "An AI-driven expense management platform built on Next.js 15 and TypeScript, featuring secure Server Components, Server Actions, and an optimized App Router. It offers drag-and-drop receipt uploads (powered by DND Kit), OCR-based data extraction, and AI-agent–driven categorization—all wrapped in a responsive Tailwind CSS/Shadcn UI with smooth animations and robust error handling.",
    github: "https://github.com/KriishT/Receipt-Tracker-SaaS",
    live: "https://receipt-tracker-xi.vercel.app/",
  },
  {
    id: 7,
    category: "UI/UX",
    title: "ICIBM 2026 Conference Site",
    badge: "Prototype",
    image: ICIBM,
    imageAlt:
      "ICIBM 2026 conference site prototype home page with page navigation, conference dates, and Submit Paper and Register Now buttons",
    shortDesc:
      "A multi-page website prototype for the ICIBM 2026 conference (International Conference on Intelligent Biology and Medicine).",
    stack: "React, TypeScript, React Router, Tailwind CSS",
    fullDesc:
      "I designed and built this conference website prototype as a React Router single-page app, organizing conference information into dedicated pages behind a shared, responsive layout.",
    highlights: [
      "Pages for submissions, important dates, registration, program, organization, travel, sponsors, and contact.",
      "Client-side routing with React Router and a shared layout with a responsive navbar and mobile menu.",
    ],
    github: "https://github.com/KriishT/ICIBM-Design",
    live: "https://icibm-design.vercel.app/",
  },
];

const workExperience: Experience[] = [
  {
    id: "esc-lab",
    company: "ESC Lab, University at Buffalo",
    role: "Software Engineering Intern — Mobile & Data Systems",
    location: "Buffalo, New York",
    duration: "Jan 2026 – Present",
    status: "active",
    path: "ESC_Lab",
    logo: ESCLogo,
    links: {
      linkedin:
        "https://www.linkedin.com/company/embedded-sensing-and-computing-lab",
    },
    bullets: [
      {
        metric: "9 games",
        text: "Built ImpairMate from scratch — a React Native/Firebase research app with offline media capture that syncs when connectivity returns. Currently in testing.",
      },
      {
        metric: "3 sources",
        text: "Combined REDCap, Empatica wearable data, and app records into integrated research data covering 40+ participants.",
      },
      {
        metric: null,
        text: "Extended Sense2Quit, an existing app on Google Play, with Firebase-backed watch-gesture capture.",
      },
    ],
    details: [
      {
        heading: "ImpairMate",
        status: "In testing",
        items: [
          "Built a nine-game research application from scratch using React Native and Firebase.",
          "Implemented offline media capture with synchronization once connectivity returns.",
          "Supported the transfer of collected media to the cloud for ML processing.",
        ],
      },
      {
        heading: "Research data",
        items: [
          "Combined three sources: REDCap, Empatica wearable data, and application records.",
          "Prepared integrated research data covering 40+ participants.",
        ],
      },
      {
        heading: "Sense2Quit",
        status: "On Google Play",
        items: [
          "Extended an existing smoking-cessation research app that is already available on Google Play.",
          "Implemented Firebase-backed watch-gesture capture to collect labeled recordings for the app's existing model.",
        ],
      },
    ],
    tags: [
      "React Native",
      "Expo",
      "Firebase",
      "Flutter",
      "Python",
      "REDCap",
      "Empatica",
    ],
  },
  {
    id: "studio23labs",
    company: "Studio23labs",
    role: "Software Engineering Intern",
    location: "Toronto, Canada",
    duration: "May 2026 – Jul 2026",
    status: "completed",
    path: "Studio23labs",
    logo: Studio23,
    links: { live: "https://studio23labs.com/", liveLabel: "Company Site" },
    bullets: [
      {
        metric: "50+ SMEs",
        text: "Solo-built and shipped a communications platform for small and medium-sized businesses using Next.js and Supabase.",
      },
      {
        metric: "4 channels",
        text: "Unified chat, email, SMS, and voice in one platform, with a shared real-time inbox and role-based conversation assignment.",
      },
    ],
    details: [
      {
        items: [
          "Solo-built and shipped a communications platform for 50+ SMEs using Next.js and Supabase.",
          "Unified four communication channels — chat, email, SMS, and voice.",
          "Built a shared WebSocket inbox with role-based conversation assignment.",
          "Built configurable website chatbots and integrated Retell AI voice calling.",
          "Created an admin console for configuring and managing automated customer interactions.",
          "Integrated Twilio, SendGrid, and Retell AI.",
        ],
      },
    ],
    tags: ["Next.js", "Supabase", "WebSockets", "Twilio", "SendGrid", "Retell AI"],
  },
  {
    id: "dart-frontend",
    company: "DART Collective, University at Buffalo",
    role: "Frontend Engineering Intern",
    location: "Buffalo, New York",
    duration: "Sep 2024 – Aug 2025",
    status: "completed",
    path: "DART_Frontend",
    logo: DARTlogo,
    links: { live: "https://app.dartacademy.net/about", liveLabel: "DART Academy" },
    bullets: [
      {
        metric: "1,000+",
        text: "Built and shipped React/Next.js learning interfaces for a digital-literacy and scam-awareness platform serving 1,000+ older adults.",
      },
      {
        metric: null,
        text: "Implemented bulk enrollment with CSV imports and validation on Next.js and PostgreSQL.",
      },
    ],
    details: [
      {
        items: [
          "Built and shipped React/Next.js learning interfaces for a digital-literacy and scam-awareness platform serving 1,000+ older adults.",
          "Translated UI designs into Tailwind CSS components.",
          "Implemented bulk enrollment using Next.js and PostgreSQL, with CSV imports and validation.",
          "Built real-time presenter-note synchronization between the presentation and speaker-notes views.",
        ],
      },
    ],
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "NeonDB",
    ],
    projectId: 3,
  },
  {
    id: "dart-ux",
    company: "DART Collective, University at Buffalo",
    role: "UX Researcher",
    location: "Buffalo, New York",
    duration: "Jan 2026 – Present",
    status: "active",
    path: "DART_UX_Research",
    logo: DARTlogo,
    links: { live: "https://app.dartacademy.net/about", liveLabel: "DART Academy" },
    bullets: [
      {
        metric: "60+",
        text: "Conducted usability research with 60+ older adults on digital-literacy and scam-awareness learning experiences.",
      },
      {
        metric: "12",
        text: "Identified 12 usability issues and translated the findings into recommendations for interface improvements.",
      },
    ],
    details: [
      {
        note: "A research role, separate from my 2024–2025 frontend engineering internship at DART Collective.",
        items: [
          "Conducted usability research with 60+ older adults around digital-literacy and scam-awareness learning experiences.",
          "Identified 12 usability issues and translated the findings into recommendations for interface improvements.",
        ],
      },
    ],
    tags: ["Usability Testing", "User Research", "Research Synthesis"],
  },
];

const academicExperience: Experience[] = [
  {
    id: "project-manager",
    company: "University at Buffalo",
    role: "Project Manager — Academic Project",
    location: "Buffalo, New York",
    context: "Software Project Management course",
    status: "academic",
    path: "Academic/Project_Management",
    logo: UBLogo,
    links: {},
    bullets: [
      {
        metric: "2 teams",
        text: "Coordinate two five-member teams, tracking project progress against a roadmap using Agile practices.",
      },
      {
        metric: null,
        text: "Maintain the Scrum board and prepare project reports documenting progress and lessons learned.",
      },
    ],
    details: [
      {
        items: [
          "Coordinate two five-member teams.",
          "Track project progress against a roadmap using Agile practices.",
          "Maintain the Scrum board to organize tasks and track work.",
          "Prepare project reports documenting progress and lessons learned.",
        ],
      },
    ],
    tags: ["Agile", "Scrum", "Roadmapping", "Project Reporting"],
  },
];

const allExperience = [...workExperience, ...academicExperience];

/* ------------------ dialog helper ------------------ */
// Closes on Escape, focuses the close button on open, and restores focus on close.
function useDialog(onClose: () => void) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, []);

  return closeRef;
}

/* ===================================================== */

export default function PortfolioMain() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>("All");

  // Bumping this remounts the cards, which snaps dragged cards back into place.
  const [layoutKey, setLayoutKey] = useState(0);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  const filtered = projects.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  const resetWorkspace = () => {
    setSelectedCategory("All");
    setLayoutKey((k) => k + 1);
  };

  const openProject = (id: number) => {
    setSelectedExperience(null);
    setSelectedProject(projects.find((p) => p.id === id) ?? null);
  };

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
          I’m a computer science student at the University at Buffalo and a
          full-stack developer passionate about creating human-centered
          products that combine logic, design, and user experience.
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
          © 2026 Kriish Tiwari
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
              I’m Kriish Tiwari, a senior majoring in Computer Science at the
              University at Buffalo, with graduation expected in December 2026.
              I’m a software engineer first — building full-stack web, mobile,
              and desktop products — and I bring UX research and project
              coordination experience to that work. I love collaborating; every
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
                <p className="text-sm text-[#444]">
                  Aug 2023 – Expected December 2026
                </p>
                <p className="text-sm text-[#666]">
                  B.S. in Computer Science & Engineering
                </p>
                <p className="text-sm text-[#666]">
                  Software Project Management, Intro to AI, Web development,
                  Systems Programming, Algorithms, Data Structures, Computer
                  Organization
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

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">
                {[
                  { Icon: SiTypescript, name: "TypeScript" },
                  { Icon: SiReact, name: "React" },
                  { Icon: TbBrandReactNative, name: "React Native" },
                  { Icon: SiNextdotjs, name: "Next.js" },
                  { Icon: SiNodedotjs, name: "Node.js" },
                  { Icon: SiExpress, name: "Express" },
                  { Icon: SiPostgresql, name: "PostgreSQL" },
                  { Icon: SiSupabase, name: "Supabase" },
                  { Icon: SiFirebase, name: "Firebase" },
                  { Icon: SiMongodb, name: "MongoDB" },
                  { Icon: SiTauri, name: "Tauri" },
                  { Icon: SiRust, name: "Rust" },
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
                      <Icon
                        aria-hidden="true"
                        className="text-3xl text-[#0047C1] drop-shadow-[1px_1px_0_#fff]"
                      />
                    </div>
                    <p
                      className="text-[9px] text-[#1a1a1a] font-['Press_Start_2P']
                     tracking-wide mt-1 text-center leading-relaxed"
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
          <div
            className="flex justify-center gap-3 flex-wrap mb-10"
            role="group"
            aria-label="Filter projects by category"
          >
            {CATEGORY_FILTERS.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={selectedCategory === c}
                onClick={() => setSelectedCategory(c)}
                className={`px-4 py-2 rounded-full text-[10px] font-['Press_Start_2P'] tracking-wider border border-[#b9b3a4] transition ${
                  selectedCategory === c
                    ? "bg-[#6b705c] text-white"
                    : "bg-[#fffdfa] text-[#5c5c5c] hover:bg-[#f5f3ea]"
                }`}
              >
                {c}
              </button>
            ))}

            {/* reset button: back to "All" and snap dragged cards home */}
            <button
              type="button"
              onClick={resetWorkspace}
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
            {filtered.length === 0 && (
              <p className="col-span-6 text-center text-[13px] text-[#6b6a66] py-12">
                No projects in this category yet.
              </p>
            )}
            {filtered.map((project) => {
              const badge = project.featured ? "Featured" : project.badge;

              return (
                <motion.div
                  key={`${project.id}-${layoutKey}`}
                  layout
                  drag
                  dragMomentum={false}
                  dragElastic={0.35}
                  whileHover={{ scale: 1.03, zIndex: 10 }}
                  whileDrag={{ scale: 1.05, zIndex: 20, cursor: "grabbing" }}
                  className="bg-[#fffdfa] border border-[#b9b3a4]
       shadow-[5px_5px_0_#c3baa5] rounded-[8px] overflow-hidden
       col-span-6 sm:col-span-3 row-span-2 cursor-grab flex flex-col h-auto"
                >
                  {/* header */}
                  <div className="flex items-center justify-between gap-2 bg-[#dcd9d3] px-4 py-2 border-b border-[#b7b3ac]">
                    <h3 className="text-sm font-semibold text-[#2d2b29] truncate">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 shrink-0">
                      {badge && (
                        <span
                          className={`text-[8px] font-['Press_Start_2P'] tracking-wider px-2 py-1 rounded-full text-white ${
                            project.featured ? "bg-[#004bb5]" : "bg-[#6b705c]"
                          }`}
                        >
                          {project.featured ? "★ " : ""}
                          {badge.toUpperCase()}
                        </span>
                      )}
                      <div className="flex gap-1.5" aria-hidden="true">
                        <span className="w-3 h-3 bg-[#ff605c] rounded-full" />
                        <span className="w-3 h-3 bg-[#ffbd44] rounded-full" />
                        <span className="w-3 h-3 bg-[#00ca4e] rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* content */}
                  <div className="p-5 flex flex-col h-full gap-3">
                    <div className="w-full h-[220px] rounded-[4px] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        loading="lazy"
                        draggable={false}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <p className="text-[13px] text-[#4b4a47] leading-relaxed">
                      {project.shortDesc}
                    </p>
                    <p className="text-[11px] text-[#7a776f] leading-relaxed">
                      {project.stack}
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
                          {project.liveLabel ?? "Live Demo"}
                        </a>
                      )}
                      {project.download && (
                        <a
                          href={project.download}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[12px] px-4 py-1.5 bg-[#6b705c] text-white rounded-full hover:bg-[#5a6350] transition shrink-0"
                        >
                          Download
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        aria-label={`Read more about ${project.title}`}
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
            {workExperience.map((exp, idx) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                index={idx}
                onReadMore={() => setSelectedExperience(exp)}
                onViewProject={openProject}
              />
            ))}
          </div>

          {/* academic / leadership — kept apart from professional roles */}
          <h2 className="text-center text-2xl font-mono text-[#6cb8ff] mt-20 mb-3">
            {"<"}academic_leadership.log{">"}
          </h2>
          <p className="text-center text-xs font-mono text-[#6cb8ff]/70 mb-10">
            Academic project experience
          </p>

          <div className="w-full flex justify-center">
            {academicExperience.map((exp, idx) => (
              <div key={exp.id} className="w-full lg:w-[calc(50%-0.75rem)]">
                <ExperienceCard
                  exp={exp}
                  index={idx}
                  onReadMore={() => setSelectedExperience(exp)}
                  onViewProject={openProject}
                />
              </div>
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

      {/* detail windows live at the root so no section's stacking context covers them */}
      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      {selectedExperience && (
        <ExperienceDialog
          exp={selectedExperience}
          onClose={() => setSelectedExperience(null)}
          onViewProject={openProject}
        />
      )}
    </div>
  );
}

/* ------------------ project detail window ------------------ */
function ProjectDialog({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeRef = useDialog(onClose);
  const relatedRole = allExperience.find((e) => e.projectId === project.id);
  const titleId = `project-dialog-${project.id}`;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        className="w-full md:w-[800px] lg:w-[900px] max-h-[90vh] overflow-y-auto bg-[#e6e6e6] border-2 border-[#b3b3b3]
                 rounded-[8px] shadow-[12px_12px_0_#999] relative font-['Chicago'] text-[#1a1a1a]
                 animate-fadeIn"
      >
        {/* title bar */}
        <div className="sticky top-0 flex items-center justify-between bg-[#c3c3c3] border-b border-[#9a9a9a] px-5 py-[6px]">
          <h3
            id={titleId}
            className="text-[14px] font-semibold text-[#2d2b29] tracking-tight"
          >
            📁 {project.title}
          </h3>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="text-[18px] leading-none text-[#2d2b29] hover:text-[#7a7a7a]"
          >
            ×
          </button>
        </div>

        {/* body */}
        <div className="p-6 sm:p-8 text-[14px] flex flex-col items-center">
          <div className="w-[220px] h-[220px] border border-[#9a9a9a] bg-white flex items-center justify-center overflow-hidden mb-6 rounded-[6px]">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="object-cover w-full h-full"
            />
          </div>

          <p className="text-[11px] uppercase tracking-wider text-[#5c5c5c] mb-4">
            {project.category}
            {project.featured && " · Featured"}
            {project.badge && ` · ${project.badge}`}
          </p>

          <p className="text-center leading-relaxed text-[#2f2f2f] max-w-[750px] mb-6">
            {project.fullDesc}
          </p>

          {project.highlights && (
            <ul className="list-disc pl-5 space-y-2 text-[13px] leading-relaxed text-[#2f2f2f] max-w-[680px] w-full mb-6">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}

          <p className="text-[12px] text-[#4b4b4b] text-center max-w-[680px] mb-6">
            <span className="font-semibold">Stack:</span> {project.stack}
          </p>

          {relatedRole && (
            <p className="text-[12px] text-[#4b4b4b] text-center max-w-[680px] mb-8">
              Built during my {relatedRole.role} role at {relatedRole.company}
              {relatedRole.duration && ` (${relatedRole.duration})`}.{" "}
              <a
                href={`#exp-${relatedRole.id}`}
                onClick={onClose}
                className="text-[#0045d9] underline hover:text-[#003ab8]"
              >
                View role
              </a>
            </p>
          )}

          {/* buttons */}
          <div className="flex justify-center flex-wrap gap-3 sm:gap-5 mt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[#b0b0b0] border border-[#7f7f7f] rounded-[4px]
                         hover:bg-[#a0a0a0] active:bg-[#8f8f8f] transition text-[13px]"
              >
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[#0055ff] border border-[#003eb8] rounded-[4px]
                         text-white hover:bg-[#0045d9] active:bg-[#003ab8] transition text-[13px]"
              >
                {project.liveLabel ?? "Visit"}
              </a>
            )}
            {project.download && (
              <a
                href={project.download}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[#0055ff] border border-[#003eb8] rounded-[4px]
                         text-white hover:bg-[#0045d9] active:bg-[#003ab8] transition text-[13px]"
              >
                Download
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-[#b0b0b0] border border-[#7f7f7f] rounded-[4px]
                       hover:bg-[#a0a0a0] active:bg-[#8f8f8f] transition text-[13px]"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------ experience terminal card ------------------ */
function StatusBadge({ status }: { status: ExperienceStatus }) {
  if (status === "active") {
    return (
      <span className="flex items-center gap-1.5 text-[11px] text-[#50fa7b] font-mono shrink-0">
        <motion.span
          className="w-2 h-2 rounded-full bg-[#50fa7b] inline-block"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
        ACTIVE
      </span>
    );
  }
  if (status === "academic") {
    return (
      <span className="flex items-center gap-1.5 text-[11px] text-[#f1fa8c] font-mono shrink-0">
        <span className="w-2 h-2 rounded-full bg-[#f1fa8c] inline-block" />
        ACADEMIC
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1.5 text-[11px] text-[#8b949e] font-mono shrink-0">
      <span className="w-2 h-2 rounded-full bg-[#8b949e] inline-block" />
      COMPLETED
    </span>
  );
}

function ExperienceMeta({ exp }: { exp: Experience }) {
  return (
    <p className="text-[#6cb8ff]/70 text-xs mt-1">
      {exp.duration ? `📅 ${exp.duration}` : `🎓 ${exp.context}`} ·{" "}
      {exp.location}
    </p>
  );
}

function ExperienceCard({
  exp,
  index,
  onReadMore,
  onViewProject,
}: {
  exp: Experience;
  index: number;
  onReadMore: () => void;
  onViewProject: (id: number) => void;
}) {
  return (
    <motion.article
      id={`exp-${exp.id}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full scroll-mt-24 rounded-[10px] border border-[#2b3242] bg-[#0d1117]/95
                   shadow-[0_0_28px_rgba(0,255,255,0.1)] overflow-hidden flex flex-col"
    >
      {/* terminal title bar */}
      <div className="flex items-center justify-between bg-[#101621] border-b border-[#2b3242] px-5 py-3 shrink-0">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="w-3.5 h-3.5 rounded-full bg-[#ff5555]" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#f1fa8c]" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#50fa7b]" />
        </div>
        <p className="text-[11px] text-[#6cb8ff] font-mono truncate mx-3 flex-1 text-center">
          ~/Experience/{exp.path}
        </p>
        <StatusBadge status={exp.status} />
      </div>

      {/* card content */}
      <div className="p-7 font-mono leading-relaxed text-[#d9e4ee] flex flex-col flex-1 gap-5">
        {/* header: logo + title */}
        <div className="flex items-start gap-4">
          {exp.logo ? (
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="w-12 h-12 object-contain rounded-[6px] border border-[#3a4b60] shrink-0 mt-0.5"
            />
          ) : (
            <div className="w-12 h-12 rounded-[6px] border border-[#3a4b60] shrink-0 mt-0.5 bg-[#1a2235] flex items-center justify-center text-[22px]">
              💻
            </div>
          )}
          <div>
            <h3 className="text-[#00d1ff] font-bold text-base">{exp.company}</h3>
            <p className="text-[#8bd8ff] text-sm mt-1">{exp.role}</p>
            <ExperienceMeta exp={exp} />
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
        <div className="flex gap-3 flex-wrap items-center pt-3 border-t border-[#2b3242]">
          <ExperienceLinks exp={exp} onViewProject={onViewProject} />
          <button
            type="button"
            onClick={onReadMore}
            aria-label={`Read more about ${exp.role} at ${exp.company}`}
            className="ml-auto text-[12px] text-[#50fa7b] underline hover:text-[#8bffb0] font-mono"
          >
            Read More
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function ExperienceLinks({
  exp,
  onViewProject,
}: {
  exp: Experience;
  onViewProject: (id: number) => void;
}) {
  const { projectId } = exp;

  return (
    <>
      {exp.links.live && (
        <a
          href={exp.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] px-3 py-1.5 rounded-md border border-[#00d1ff]
                             text-[#00d1ff] hover:bg-[#00d1ff]/10 transition font-mono"
        >
          🌐 {exp.links.liveLabel ?? "Live Demo"}
        </a>
      )}
      {exp.links.linkedin && (
        <a
          href={exp.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] px-3 py-1.5 rounded-md border border-[#8bd8ff]
                             text-[#8bd8ff] hover:bg-[#8bd8ff]/10 transition font-mono"
        >
          🔗 LinkedIn
        </a>
      )}
      {projectId !== undefined && (
        <button
          type="button"
          onClick={() => onViewProject(projectId)}
          className="text-[11px] px-3 py-1.5 rounded-md border border-[#f1fa8c]
                             text-[#f1fa8c] hover:bg-[#f1fa8c]/10 transition font-mono"
        >
          📁 View Project
        </button>
      )}
    </>
  );
}

/* ------------------ experience detail terminal ------------------ */
function ExperienceDialog({
  exp,
  onClose,
  onViewProject,
}: {
  exp: Experience;
  onClose: () => void;
  onViewProject: (id: number) => void;
}) {
  const closeRef = useDialog(onClose);
  const titleId = `experience-dialog-${exp.id}`;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[780px] max-h-[90vh] overflow-y-auto rounded-[10px] border border-[#2b3242]
                   bg-[#0d1117] shadow-[0_0_40px_rgba(0,255,255,0.15)] font-mono text-[#d9e4ee] animate-fadeIn"
      >
        {/* terminal title bar */}
        <div className="sticky top-0 flex items-center justify-between bg-[#101621] border-b border-[#2b3242] px-5 py-3">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="w-3.5 h-3.5 rounded-full bg-[#ff5555]" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#f1fa8c]" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#50fa7b]" />
          </div>
          <p className="text-[11px] text-[#6cb8ff] truncate mx-3 flex-1 text-center">
            ~/Experience/{exp.path} — cat details.md
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close experience details"
            className="text-[20px] leading-none text-[#6cb8ff] hover:text-white"
          >
            ×
          </button>
        </div>

        <div className="p-6 sm:p-8 flex flex-col gap-6">
          {/* header */}
          <div className="flex items-start gap-4">
            {exp.logo && (
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-12 h-12 object-contain rounded-[6px] border border-[#3a4b60] shrink-0 mt-0.5"
              />
            )}
            <div className="flex-1">
              <h3 id={titleId} className="text-[#00d1ff] font-bold text-base">
                {exp.role}
              </h3>
              <p className="text-[#8bd8ff] text-sm mt-1">{exp.company}</p>
              <ExperienceMeta exp={exp} />
            </div>
            <StatusBadge status={exp.status} />
          </div>

          {/* sections */}
          {exp.details.map((section, si) => (
            <div key={section.heading ?? si}>
              {section.heading && (
                <h4 className="flex flex-wrap items-center gap-2 text-[#50fa7b] text-sm font-bold mb-2">
                  {"$ "}
                  {section.heading}
                  {section.status && (
                    <span className="text-[10px] font-normal px-2 py-0.5 rounded-full border border-[#f1fa8c] text-[#f1fa8c]">
                      {section.status}
                    </span>
                  )}
                </h4>
              )}
              {section.note && (
                <p className="text-[12px] text-[#6cb8ff]/80 mb-3">{section.note}</p>
              )}
              <ul className="space-y-2 text-[13px] text-[#cfe3f5]">
                {section.items.map((item) => (
                  <li key={item} className="leading-relaxed flex gap-2">
                    <span className="text-[#50fa7b] shrink-0" aria-hidden="true">
                      ▒
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* tags */}
          <ul className="flex flex-wrap gap-2" aria-label="Skills and tools">
            {exp.tags.map((tag) => (
              <li
                key={tag}
                className="text-[11px] px-2.5 py-1 rounded-md bg-[#101621] border border-[#2b3242] text-[#8bd8ff]"
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* actions */}
          <div className="flex gap-3 flex-wrap items-center pt-4 border-t border-[#2b3242]">
            <ExperienceLinks exp={exp} onViewProject={onViewProject} />
            <button
              type="button"
              onClick={onClose}
              className="ml-auto text-[11px] px-4 py-1.5 rounded-md border border-[#50fa7b]
                         text-[#50fa7b] hover:bg-[#50fa7b]/10 transition"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
