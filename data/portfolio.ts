import { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Kai Vance",
  nickname: "kaicodes",
  role: "Full-Stack Developer",
  tagline: "I build things and occasionally touch grass 🌿",
  bio: "A self-taught full-stack developer obsessed with pixel-perfect interfaces, smooth micro-interactions, and drinking way too much iced matcha. I ship fast, compile faster, and run on pure caffeine and curiosity.",
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
      category: "Frontend",
      items: ["React", "Next.js 14", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Socket.io"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "PostgreSQL", "Redis"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Postman", "Docker", "Vercel"]
    }
  ],
  education: [
    {
      institution: "Metropolis Institute of Technology",
      degree: "B.S. in Computer Science",
      duration: "2022 - 2026",
      gpa: "3.92 / 4.0"
    },
    {
      institution: "Hyper Island Academy",
      degree: "Interactive Design & Frontend Course",
      duration: "2021 - 2022"
    }
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
      link: "https://aws.amazon.com"
    },
    {
      name: "Meta Professional Front-End Developer",
      issuer: "Meta",
      year: "2023",
      link: "https://coursera.org"
    },
    {
      name: "Google Advanced Data Analytics",
      issuer: "Google",
      year: "2023",
      link: "https://coursera.org"
    },
    {
      name: "OpenJS Node.js Application Developer",
      issuer: "OpenJS Foundation",
      year: "2024",
      link: "https://openjsf.org"
    }
  ],
  projects: [
    {
      title: "AI Text Summarizer",
      description: "Instantly condenses long articles, PDFs, and Youtube videos into Gen-Z slang or professional summaries using OpenAI.",
      tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Bento Workspace",
      description: "A drag-and-drop web dashboard that compiles your daily schedule, tasks, widgets, and weather in a clean Bento-box grid.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Dnd-kit"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "HyperChat Server",
      description: "Ultra-low latency real-time messaging gateway that supports temporary rooms, self-destructing text, and rich presence.",
      tech: ["Node.js", "Express.js", "Socket.io", "Redis"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "kai@vance.codes"
  },
  contactMessage: "Always open to building cool things, collaborating on weird projects, or chatting about matcha. Let's make something amazing."
};
