import type { Project } from "@/types/portfolio.types";

export const projects: Project[] = [
  {
    id: "gestao-academica",
    title: "Sistema de Gestão Académica",
    stack: ["Laravel", "MySQL", "Bootstrap"],
    type: "Sistema institucional (ISPAJ)",
    description:
      "Sistema completo de gestão académica com módulos de matrículas, notas, horários, relatórios institucionais e facturação integrada (propinas, emissão de recibos e relatórios financeiros em PDF).",
    status: "Em produção",
    categories: ["Sistemas"],
    isPrivate: true,
  },
  {
    id: "gestao-eclesial",
    title: "Sistema de Gestão Eclesial",
    stack: ["Laravel", "Livewire", "Filament", "MySQL"],
    type: "Sistema de gestão / comunidade",
    description:
      "Sistema de gestão eclesial com módulos de membros, departamentos, eventos, contribuições e relatórios. Interface admin construída com Filament, componentes reactivos com Livewire sem necessidade de JavaScript extra.",
    status: "Em produção",
    categories: ["Sistemas", "Web"],
    isPrivate: true,
  },
  {
    id: "gestao-agrupamento",
    title: "Sistema de Gestão de Agrupamento",
    stack: ["Laravel", "React", "MySQL", "REST API"],
    type: "Sistema full-stack",
    description:
      "Plataforma de gestão de agrupamento com painel administrativo em React consumindo API Laravel. Gestão de membros, actividades, relatórios e hierarquias.",
    status: "Em produção",
    categories: ["Sistemas", "Web", "API"],
    isPrivate: true,
  },
  {
    id: "gestao-documental",
    title: "Sistema de Gestão Documental",
    stack: ["Laravel", "MySQL", "Angular"],
    type: "Sistema empresarial",
    description:
      "Plataforma de gestão e arquivo de documentos institucionais com controlo de versões e permissões por perfil de utilizador.",
    status: "Em produção",
    categories: ["Sistemas", "Web"],
    isPrivate: true,
  },
  {
    id: "e-learning",
    title: "Plataforma E-Learning",
    stack: ["Laravel", "MySQL", "JavaScript"],
    type: "Aplicação institucional",
    description:
      "Plataforma de ensino online com gestão de cursos, conteúdos, avaliações e acompanhamento de progresso.",
    status: "Em produção",
    categories: ["Web"],
    isPrivate: true,
  },
  {
    id: "api-integracao",
    title: "API REST de Integração de Sistemas",
    stack: ["AdonisJS", "MySQL", "JWT"],
    type: "Backend / API",
    description:
      "API REST para integração entre sistemas internos, com autenticação JWT e documentação Swagger.",
    status: "Em produção",
    categories: ["API"],
    isPrivate: true,
  },
  {
    id: "gestao-rh",
    title: "Sistema de Gestão de Recursos Humanos",
    stack: ["Laravel", "MySQL", "Bootstrap"],
    type: "Sistema empresarial",
    description:
      "Sistema de gestão de RH com módulos de colaboradores, contratos, faltas e presenças, férias, avaliações de desempenho e processamento salarial.",
    status: "Em produção",
    categories: ["Sistemas"],
    isPrivate: true,
  },
  {
    id: "kamba-dyami",
    title: "Kamba-Dyami Cocktail",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    type: "Website / Freelance",
    description:
      "Website premium de cocktailaria angolana com design system completo, animações cinematográficas, catálogo interactivo e identidade visual enraizada na cultura de Luanda.",
    status: "Em desenvolvimento",
    categories: ["Web", "Pessoal"],
    github: "https://github.com/AndresKanhangaJS/kamba-dyami-cocktail",
    isPrivate: false,
  },
];

export const projectFilters = ["Todos", "Sistemas", "Web", "API", "Em Produção", "Pessoal"] as const;
