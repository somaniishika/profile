import { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Ishika Somani",
  nickname: "ishika",
  role: "Software Development Engineer",
  tagline: "Building scalable backend services, securing LLM interactions, and developing productivity tools 💻",
  bio: "A Software Development Engineer at Systango with a B.Tech in Computer Science and Engineering. Obsessed with high-performance APIs, robust database design, and building custom developer tools like Chrome extensions.",
  profilePhoto: "/profile-placeholder.jpg",
  interests: [
    {
      emoji: "☕",
      title: "Matcha & Coffee",
      description: "Liquid fuel for turn-based debugging sessions."
    },
    {
      emoji: "🎧",
      title: "Hyperpop & Phonk",
      description: "Running on 180 BPM playlists and tight deadlines."
    },
    {
      emoji: "🤖",
      title: "Artificial Intelligence",
      description: "Teaching machines questionable internet humor."
    },
    {
      emoji: "🎮",
      title: "Valorant & Minecraft",
      description: "Perfecting crosshair placement and redstone loops."
    },
    {
      emoji: "🎨",
      title: "Bento Layouts",
      description: "Obsessed with rounded corners, dark mode, and grid layouts."
    },
    {
      emoji: "🛹",
      title: "Skateboarding",
      description: "Learning kickflips and falling with style."
    }
  ],
  techStack: [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "C++"]
    },
    {
      category: "Technologies & Frameworks",
      items: ["Node.js", "NestJS", "Express.js", "React.js", "Next.js", "REST APIs", "Microservices"]
    },
    {
      category: "Databases & ORMs",
      items: ["PostgreSQL", "MongoDB", "MySQL", "PrismaORM", "TypeORM"]
    },
    {
      category: "Tools & Platforms",
      items: ["GitHub", "GitLab", "Copilot", "Cursor", "AWS (S3, EC2, RDS)", "Docker"]
    }
  ],
  education: [
    {
      institution: "Medi-Caps University",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2021 - 2025",
      gpa: "CGPA: 8.29"
    }
  ],
  experience: [
    {
      company: "SYSTANGO",
      role: "Software Development Engineer",
      duration: "Feb 2025 - Present",
      description: "Developed and delivered end-to-end features using Node.js, NestJS, PostgreSQL, MongoDB, and React.js. Implemented scalable RESTful APIs, authentication systems, and database optimizations improving average response times by ~20%. Collaborated with frontend teams to troubleshoot interactions and owned features from analysis to deployment."
    }
  ],
  certifications: [
    {
      name: "Elements of AI",
      issuer: "University of Helsinki",
      year: "2023",
      link: "https://www.elementsofai.com"
    },
    {
      name: "Alteryx Designer Core Certified",
      issuer: "Alteryx",
      year: "2024",
      link: "https://www.alteryx.com"
    },
    {
      name: "Claude Code in Action",
      issuer: "Anthropic",
      year: "2025",
      link: "https://www.anthropic.com"
    },
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "AWS Skill Builder",
      year: "2024",
      link: "https://aws.amazon.com"
    }
  ],
  achievements: [
    "Team Lead at WittyHacks 4.0 (MLH Hackathon) — Led a team of 4 to build an innovative personalized learning pathway solution.",
    "Selected among top 72 mentees in Codess.Cafe (Women in Tech Mentorship Program) in India."
  ],
  projects: [
    {
      title: "AI-Shield",
      description: "A compliance-based Chrome extension performing real-time Data Loss Prevention (DLP) across AI platforms like ChatGPT, Claude, and Gemini. Implemented client-side detection and redaction of credit cards, emails, phone numbers, and JWT tokens.",
      tech: ["JavaScript", "Chrome Extension API", "DLP"],
      github: "https://github.com/somanilishika"
    },
    {
      title: "Bookmark Chrome Extension",
      description: "A productivity-focused Chrome extension to save and manage YouTube video timestamps. Enables users to bookmark and revisit specific moments with persistent data storage using Chrome Storage API.",
      tech: ["JavaScript", "Chrome Extension API"],
      github: "https://github.com/somanilishika"
    },
    {
      title: "ScanIT Attendance System",
      description: "A fully automated barcode-based attendance management system using OpenCV for real-time barcode recognition, reducing manual tracking by over 80% with Pandas data pipelines.",
      tech: ["Python", "OpenCV", "Pandas"],
      github: "https://github.com/somanilishika"
    }
  ],
  socials: {
    github: "https://github.com/somaniishika",
    linkedin: "https://linkedin.com/in/ishikasomani",
    instagram: "https://instagram.com/ishikasomani5",
    email: "ishika05somani@gmail.com"
  },
  contactMessage: "Always open to collaborating on backend services, AI compliance tools, or discussing system architecture. Let's build something amazing together!"
};
