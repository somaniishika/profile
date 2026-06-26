export interface Interest {
  emoji: string;
  title: string;
  description: string;
}

export interface TechGroup {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  gpa?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  link?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  instagram?: string;
  email?: string;
}

export interface PortfolioData {
  name: string;
  nickname?: string;
  role: string;
  tagline: string;
  bio: string;
  profilePhoto: string;
  interests: Interest[];
  techStack: TechGroup[];
  education: Education[];
  experience: Experience[];
  certifications: Certification[];
  achievements: string[];
  projects: Project[];
  socials: SocialLinks;
  contactMessage: string;
}
