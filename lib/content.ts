import type { IconName } from "@/components/Icon";

// TODO: replace with the real production domain once this site is deployed —
// used for canonical URL, Open Graph tags, and JSON-LD.
export const siteUrl = "https://example.com";

export const profile = {
  name: "Fahad Yusuf Qureshi",
  title: "Web Developer & Agentic AI Engineer",
  location: "Lahore, Pakistan",
  email: "fahadyusuf000@gmail.com",
  phone: "(0322) 788 2125",
  linkedin: "https://www.linkedin.com/in/fahad-qureshi-4b6302247/",
  github: "https://github.com/Fahad3337",
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
    subtitle: "Hospital Information Management System (HIMS) development",
    bullets: [
      "Built the Letters module of a Hospital Information Management System (HIMS) for generating and archiving official employee letters.",
      "Built BillTrace, an audit-friendly internal app for recording and searching insurance bill numbers, with admin/viewer roles, CSV export, and an audit log supporting restore/revert of deleted or edited records. Stack: Node.js/Express, EJS, SQLite (dev) / PostgreSQL-Supabase (prod), deployed on Render.",
    ],
  },
  {
    role: "Founder",
    org: "Techudev",
    period: "Present",
    subtitle: "Website & marketing services for local businesses",
    bullets: [
      "Started with website development and marketing services for local brands in Lahore, then shifted towards voice agents and currently working on producing voice agents for dental clinics.",
    ],
  },
];

export type Project = {
  icon: IconName;
  title: string;
  description: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    icon: "file",
    title: "HIMS Letter Management System",
    description:
      "HR staff generate, archive, and search official employee letters from versioned templates — rendered to PDF and stored with role-based access control.",
    stack: ["React (Vite, Tailwind)", "Node.js/Express", "PostgreSQL + Prisma", "Puppeteer", "MinIO/S3"],
  },
  {
    icon: "mic",
    title: "Real-Time Voice Receptionist for Aesthetic/Dental Clinics",
    description:
      "AI voice receptionist for dental and aesthetic clinics, built with Retell for natural, Urdu-accented conversations.",
    stack: ["Retell", "Voice Cloning", "Agentic AI"],
  },
  {
    icon: "graduation",
    title: "CampusBuddy — Full-Stack Web Platform",
    description:
      "Full-stack university platform with real-time chat, announcements, lost-and-found, and an anonymous confession board.",
    stack: ["React (TS, Vite)", "Node.js (Express, TS)", "Firebase Firestore", "PostgreSQL"],
  },
  {
    icon: "lock",
    title: "Password Strength Manager — Cybersecurity",
    description:
      "Evaluates password robustness with entropy-based scoring, plus end-to-end hashing and encryption.",
    stack: ["Cybersecurity", "Entropy Scoring", "Encryption"],
  },
  {
    icon: "store",
    title: "GoatIt — Livestock Marketplace App",
    description:
      "Full-featured marketplace app for buying and selling livestock, digitizing an informal, in-person process.",
    stack: ["Flutter", "Firebase", "Cloudinary"],
  },
];

export type SkillCategory = {
  icon: IconName;
  name: string;
  description: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    icon: "cpu",
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
    name: "Web Development",
    description: "Full-stack product development from UI to backend services.",
    items: ["JavaScript", "C++", "CSS", "Node.js", "React.js", "REST APIs"],
  },
  {
    icon: "cloud",
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
    icon: "layers",
    name: "Core CS",
    description: "Fundamentals that underpin everything else I build.",
    items: ["Data Structures", "Object-Oriented Programming"],
  },
  {
    icon: "database",
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
