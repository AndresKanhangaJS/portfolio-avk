export type SkillLevel = "Avançado" | "Intermédio/Avançado" | "Intermédio" | "Básico";

export interface Skill {
  name: string;
  level: SkillLevel;
  proficiency: number; // 0-100, drives the animated bar width
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface LearningSkill {
  name: string;
}

export interface AITool {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface AIUseCase {
  id: string;
  text: string;
}

export type ProjectCategory = "Sistemas" | "Web" | "API" | "Pessoal";
export type ProjectStatus = "Em produção" | "Em desenvolvimento";

export interface Project {
  id: string;
  title: string;
  stack: string[];
  type: string;
  description: string;
  status: ProjectStatus;
  categories: ProjectCategory[];
  github?: string;
  /** URL público do site em produção, quando existe (o código pode continuar privado). */
  demo?: string;
  isPrivate: boolean;
  /** Destaque: aparece na home. Os restantes só na página /projectos. */
  featured: boolean;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface Certification {
  id: string;
  name: string;
  institution: string;
  inProgress?: boolean;
  category: "Académica" | "Certificação";
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface ContactInfo {
  emails: string[];
  phones: string[];
  linkedin: string;
  github: string;
  location: string;
}

export interface NavLink {
  href: string;
  label: string;
}
