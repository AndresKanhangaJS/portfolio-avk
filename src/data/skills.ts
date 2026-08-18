import type { SkillCategory, LearningSkill } from "@/types/portfolio.types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "Angular", level: "Avançado", proficiency: 80 },
      { name: "React", level: "Avançado", proficiency: 70 },
      { name: "JavaScript ES6+", level: "Avançado", proficiency: 90 },
      { name: "HTML5 / CSS3", level: "Avançado", proficiency: 90 },
      { name: "Tailwind CSS", level: "Avançado", proficiency: 80 },
      { name: "Bootstrap", level: "Avançado", proficiency: 80 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Laravel (PHP)", level: "Avançado", proficiency: 90 },
      { name: "AdonisJS (Node)", level: "Intermédio/Avançado", proficiency: 70 },
      { name: "Django (Python)", level: "Intermédio", proficiency: 60 },
    ],
  },
  {
    id: "database",
    title: "Bases de Dados & APIs",
    skills: [
      { name: "MySQL", level: "Avançado", proficiency: 80 },
      { name: "REST APIs", level: "Avançado", proficiency: 90 },
      { name: "JWT", level: "Avançado", proficiency: 80 },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Ferramentas",
    skills: [
      { name: "Docker", level: "Intermédio/Avançado", proficiency: 70 },
      { name: "Git / GitHub", level: "Avançado", proficiency: 90 },
      { name: "Scrum / Agile", level: "Avançado", proficiency: 80 },
    ],
  },
  {
    id: "ai",
    title: "Inteligência Artificial",
    skills: [
      { name: "Claude (Anthropic)", level: "Avançado", proficiency: 80 },
      { name: "GitHub Copilot", level: "Avançado", proficiency: 80 },
      { name: "ChatGPT / GPT-4", level: "Avançado", proficiency: 70 },
      { name: "Cursor IDE", level: "Intermédio", proficiency: 60 },
      { name: "Prompt Engineering", level: "Avançado", proficiency: 80 },
      { name: "Vercel AI SDK", level: "Intermédio", proficiency: 50 },
    ],
  },
];

export const learningSkills: LearningSkill[] = [
  { name: "Python (Data Science)" },
  { name: "Power BI" },
  { name: "Cybersecurity" },
  { name: "LLM Fine-tuning e RAG" },
  { name: "Arquitectura de Software" },
];
