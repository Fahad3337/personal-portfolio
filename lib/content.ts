import type { IconName } from "@/components/Icon";

// TODO: replace with the real production domain once this site is deployed —
// used for canonical URL, Open Graph tags, and JSON-LD.
export const siteUrl = "https://example.com";

/** Icon-plate colours. Icons vary by category; hover states stay on the site accent. */
export type TintKey = "violet" | "amber" | "sky" | "indigo" | "emerald" | "rose" | "slate";

export const profile = {
  name: "Fahad Yusuf Qureshi",
  title: "Web Developer & Agentic AI Engineer",
  location: "Lahore, Pakistan",
  email: "fahadyusuf000@gmail.com",
  phone: "(0322) 788 2125",
  linkedin: "https://www.linkedin.com/in/fahad-qureshi-4b6302247/",
  github: "https://github.com/Fahad3337",
  calendly: "https://calendly.com/fahadyusuf000/30min",
  tagline:
    "Building AI voice-agent infrastructure for dental and aesthetic clinics, and full-stack products end to end.",
  summary:
    "Computer Science undergraduate and startup founder building AI voice-agent infrastructure for dental and aesthetic clinics. Hands-on experience across full-stack web development, agentic AI (Retell, Vapi, Livekit), and applied cybersecurity. Comfortable owning a product end-to-end, from architecture to shipping user-facing features.",
};

// Rotating hero titles — all drawn directly from the resume (job title,
// skill categories, and the Techudev founder role), nothing invented.
export const heroTitles = [
  "Web Developer",
  "Agentic AI Engineer",
  "Full-Stack Developer",
  "Voice AI Engineer",
  "Founder, Techudev",
];

export type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  subtitle: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "IT Consultant / Developer",
    org: "Farooq Group of Hospitals",
    period: "Present",
    subtitle: "Hospital Information Management System (HIMS)",
    bullets: [
      "Built the HIMS Letters module, which HR uses to generate, archive and search official employee letters.",
      "Built BillTrace, an internal tool for recording and searching insurance bill numbers, with admin and viewer roles, CSV export and an audit log that can restore edited or deleted records.",
    ],
  },
  {
    role: "Founder",
    org: "Techudev",
    period: "Present",
    subtitle: "Websites, marketing and AI voice agents",
    bullets: [
      "Started with website development and digital marketing for local brands in Lahore.",
      "Now building AI voice agents for dental clinics.",
    ],
  },
];

export type Project = {
  /** URL segment for /projects/[slug]; screenshots live in public/projects/<slug>/ */
  slug: string;
  icon: IconName;
  /** Tint key for the icon plate — maps to a .tint-* class in globals.css */
  tint: TintKey;
  title: string;
  description: string;
  /** Short plain-language points shown as a list on the case-study page. */
  details?: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "voice-receptionist",
    icon: "mic",
    tint: "violet",
    title: "Conversational Flow Agent using Retell",
    description:
      "Acts as a dental clinic's front desk officer: books appointments and answers general patient questions over the phone.",
    details: [
      "Made for dental clinics, it handles calls the way a front desk officer would.",
      "Books appointments for patients, checking availability and offering other times when a slot is taken.",
      "Answers general questions about the clinic, such as timings, services and location.",
      "Speaks in a natural, Urdu-accented voice using voice cloning, and is built with Retell.",
    ],
    stack: ["Retell", "Voice Cloning", "Agentic AI"],
  },
  {
    slug: "medrestock",
    icon: "database",
    tint: "indigo",
    title: "MedRestock",
    description: "Tracks a medicine supplier's stock and emails a reorder when anything runs low.",
    details: [
      "Gives a medicine supplier one live system for stock, replacing manual tracking.",
      "Sends exactly one reorder email when a product runs low, even if several staff update stock at once.",
      "Runs two separate businesses in one app, each kept private from the other.",
      "Imports product lists straight from the supplier's Excel sheets and keeps a full history of every stock change.",
    ],
    stack: ["React (TS)", "Fastify", "Prisma + PostgreSQL", "Oracle Cloud/nginx", "Supabase"],
  },
  {
    slug: "clinic-scheduling",
    icon: "bot",
    tint: "rose",
    title: "Clinic Scheduling Agent",
    description: "An AI assistant that books, moves and cancels clinic appointments by chat or voice.",
    details: [
      "Patients book, move or cancel appointments by chatting or talking to an AI agent.",
      "Prevents double bookings, even when two people pick the same slot at the same time.",
      "Syncs both ways with Google Calendar and gives staff a dashboard for each doctor.",
      "Covered by 407 automated tests.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Docker", "Google Gemini", "Agora", "Google Calendar API", "Twilio"],
  },
  {
    slug: "hims-letters",
    icon: "file",
    tint: "sky",
    title: "Hospital HR Letter System",
    description: "Lets hospital HR create, store and search official employee letters as PDFs.",
    details: [
      "Part of a hospital management system, built for the HR team.",
      "Creates official employee letters from ready-made templates and saves them as PDFs.",
      "Keeps every letter archived and searchable, with access limited by role.",
    ],
    stack: ["React (Vite, Tailwind)", "Node.js/Express", "PostgreSQL + Prisma", "Puppeteer", "MinIO/S3"],
  },
  {
    slug: "campusbuddy",
    icon: "graduation",
    tint: "amber",
    title: "CampusBuddy",
    description: "A university app for chat, announcements and lost-and-found.",
    details: [
      "One place for students to chat in real time, read announcements and report lost items.",
      "Includes an anonymous confession board.",
      "Uses OpenAI to summarize long conversations.",
    ],
    stack: ["React (TS, Vite)", "Node.js (Express, TS)", "Firebase Firestore", "PostgreSQL", "OpenAI"],
  },
];

export type SkillCategory = {
  icon: IconName;
  /** Tint key for the icon plate — maps to a .tint-* class in globals.css */
  tint: TintKey;
  name: string;
  description: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    icon: "bot",
    tint: "violet",
    name: "Agentic AI",
    description: "Building and deploying voice and LLM-based agents end to end.",
    items: [
      "Vapi",
      "Retell",
      "Livekit",
      "Upfirst AI",
      "Custom LLMs",
      "VPS configuration",
      "GSM setup",
      "SIP setup",
      "ElevenLabs",
      "Cartesia",
      "Python",
    ],
  },
  {
    icon: "code",
    tint: "amber",
    name: "Web Development",
    description: "Full-stack product development from UI to backend services.",
    items: ["JavaScript", "C++", "CSS", "Node.js", "React.js", "REST APIs"],
  },
  {
    icon: "cloud",
    tint: "sky",
    name: "DevOps",
    description: "Shipping and operating applications reliably in production.",
    items: [
      "Docker",
      "CI/CD (GitHub Actions)",
      "Git",
      "Render",
      "MinIO/S3 storage",
      "Environment & secrets management",
    ],
  },
  {
    icon: "database",
    tint: "emerald",
    name: "Databases",
    description: "Modeling, storing, and querying data across relational and NoSQL systems.",
    items: ["PostgreSQL", "Supabase", "Prisma", "Firebase", "SQL", "SQLite", "MongoDB"],
  },
];

export const education = {
  degree: "Bachelor's in Computer Science",
  school: "FAST-NUCES, Lahore",
  year: "2026",
};
