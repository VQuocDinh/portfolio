export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
  year: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details: string[];
}