export interface EducationItem {
  institution: string;
  degree: string;
  cgpa: string;
  period: string;
  location: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  project: string;
  highlights: string[];
}

export interface ProjectItem {
  title: string;
  period: string;
  description: string;
  stack: string[];
  highlights: string[];
  githubUrl?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface PortfolioProfile {
  name: string;
  title: string;
  summary: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
}

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}
