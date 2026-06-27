import { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Ishika Somani",
  nickname: "ishika somani",
  role: "Software Development Engineer",
  tagline: "Coding, Creating & Exploring 🌿",
  // bio: "A Software Development Engineer with a B.Tech in Computer Science and Engineering. Obsessed with high-performance APIs, robust database design, and impactful products.",
  bio: "I like building the parts of software users don\'t see-but rely on every day. From APIs and databases to scalable systems, I enjoy making things work reliably behind the scenes.",
  profilePhoto: "/my-image.png",
  interests: [
    {
      emoji: "☕",
      title: "Matcha & Coffee",
      description: "Liquid fuel for turn-based debugging sessions."
    },
    {
      emoji: "🎧",
      title: "Rock & Bollywood Music",
      description: "Running on playlists and tight deadlines."
    },
    {
      emoji: "🕉️",
      title: "Mythology",
      description: "Always fascinated by timeless stories and legends."
    },
    {
      emoji: "🚇",
      title: "Subway Surfers",
      description: "One more run... for the hundredth time."
    },
    {
      emoji: "🎨",
      title: "Pinterest Rabbit Holes",
      description: "Saving inspiration like it's a full-time job."
    },
    {
      emoji: "🏸",
      title: "Badminton",
      description: "Just here for the rallies and good vibes."
    },
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
      items: ["GitHub", "GitLab", "Copilot", "Cursor", "AWS", "Docker", "Figma", "Jira", "Azure", "Postman"]
    }
  ],
  education: [
    {
      institution: "Medi-Caps University",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2021 - 2025",
      gpa: "8.29"
    }
  ],
  experience: [
    {
      company: "SYSTANGO",
      role: "Software Development Engineer",
      duration: "Feb 2025 - Present",
      //description: "Developed and delivered end-to-end features using Node.js, NestJS, PostgreSQL, MongoDB, React.js, Next.js, and Python. Implemented scalable RESTful APIs, systems, and database optimizations improving average response times by ~30%. Collaborated with teams to troubleshoot interactions and owned features from analysis to deployment."
      description: [
        "Developed and delivered end-to-end product features using Node.js, NestJS, PostgreSQL, MongoDB, React.js, Next.js, and Python across the complete software development lifecycle.",
        "Designed and implemented scalable RESTful APIs, optimized database queries, and improved backend performance, reducing average response times by ~30%.",
        "Collaborated with cross-functional teams to analyze requirements, troubleshoot production issues, review code, and own features from development through deployment.",
        "Built reusable modules, maintained clean and scalable code, and contributed to improving application reliability and maintainability."
      ]
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
      title: "ScanIT",
      description: "A fully automated barcode-based attendance management system using OpenCV for real-time barcode recognition, reducing manual tracking by over 80% with Pandas data pipelines.",
      tech: ["Python", "OpenCV", "Pandas"],
      github: "https://github.com/somaniishika"
    }
  ],
  socials: {
    github: "https://github.com/somaniishika",
    linkedin: "https://linkedin.com/in/ishikasomani",
    instagram: "https://instagram.com/ishikasomani5",
    email: "ishika05somani@gmail.com",
    leetcode: "https://leetcode.com/u/ishika05somani"
  },
  contactMessage: "Always open to collaborating! Drop me a mail or  ping me on LinkedIn"
};
