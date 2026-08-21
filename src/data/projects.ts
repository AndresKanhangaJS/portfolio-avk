import type { Project } from "@/types/portfolio.types";

/**
 * Os 6 primeiros (featured: true) aparecem na home.
 * Os restantes só na página /projectos, em formato compacto.
 */
export const projects: Project[] = [
  {
    id: "level-school",
    title: "Level-School",
    stack: ["Laravel", "MySQL", "Bootstrap"],
    type: "Produto Level-Soft",
    description:
      "Sistema de gestão académica desenvolvido pela Level-Soft, com módulos de matrículas, notas, horários, relatórios institucionais e facturação integrada (propinas, emissão de recibos e relatórios financeiros em PDF e Excel) - módulo de facturação validado pela AGT. Em produção desde 2022, actualmente em 22 escolas clientes.",
    status: "Em produção",
    categories: ["Sistemas"],
    isPrivate: true,
    featured: true,
  },
  {
    id: "gestao-rh",
    title: "Sistema de Gestão de Recursos Humanos",
    stack: ["Laravel", "Angular", "React", "MySQL"],
    type: "Produto Level-Soft",
    description:
      "Sistema de gestão de RH desenvolvido pela Level-Soft, com módulos de colaboradores, contratos, faltas e presenças, férias e processamento salarial. Existem duas versões, uma em React e outra em Angular, sendo esta última a mais consolidada. Em produção desde 2021, actualmente em 5 clientes.",
    status: "Em produção",
    categories: ["Sistemas"],
    isPrivate: true,
    featured: true,
  },
  {
    id: "gestao-agrupamento",
    title: "Sistema de Gestão de Agrupamento",
    stack: ["Laravel", "React", "Inertia.js", "MySQL"],
    type: "Sistema full-stack",
    description:
      "Plataforma completa para gestão de agrupamentos de escuteiros, com painel administrativo em React integrado com Laravel através do Inertia.js. Gestão de escuteiros, gestão financeira, actividades e um pequeno blog.",
    status: "Em produção",
    categories: ["Sistemas", "Web"],
    isPrivate: true,
    featured: true,
  },
  {
    id: "gestao-bibliotecaria",
    title: "Sistema de Gestão Bibliotecária",
    stack: ["Laravel", "MySQL", "Bootstrap"],
    type: "Sistema institucional",
    description:
      "Software para gerir bibliotecas, com catálogo de livros, registo de leitores, requisições e controlo de devoluções. Desenvolvido em 2019, em produção numa instituição de ensino superior.",
    status: "Em produção",
    categories: ["Sistemas", "Pessoal"],
    isPrivate: true,
    featured: true,
  },
  {
    id: "kamba-dyami",
    title: "Kamba-Dyami Cocktail",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    type: "Website / Freelance",
    description:
      "Website premium de cocktailaria angolana com design system completo, animações cinematográficas, catálogo interactivo e identidade visual enraizada na cultura de Luanda.",
    status: "Em produção",
    categories: ["Web", "Pessoal"],
    demo: "https://kamba-dyami-cocktail.vercel.app/",
    isPrivate: true,
    featured: true,
  },
  {
    id: "gestao-eclesial",
    title: "Sistema de Gestão Eclesial",
    stack: ["Laravel", "Livewire", "Filament", "MySQL"],
    type: "Sistema de gestão / comunidade",
    description:
      "Sistema para gestão dos fiéis de uma paróquia afecta à Igreja Católica, com gestão de receitas e despesas e um módulo de gestão da catequese. Interface admin construída com Filament, componentes reactivos com Livewire sem necessidade de JavaScript extra.",
    status: "Em desenvolvimento",
    categories: ["Sistemas", "Web"],
    isPrivate: true,
    featured: true,
  },

  // --- Outros projectos: só na página /projectos ---
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
    featured: false,
  },
  {
    id: "e-learning",
    title: "Plataforma E-Learning",
    stack: ["Laravel", "MySQL", "JavaScript"],
    type: "Aplicação institucional",
    description:
      "Plataforma de apoio ao ensino a distância com gestão de cursos, conteúdos, avaliações e acompanhamento de progresso.",
    status: "Em desenvolvimento",
    categories: ["Web"],
    isPrivate: true,
    featured: false,
  },
  {
    id: "gestao-documental",
    title: "Sistema de Gestão Documental",
    stack: ["Laravel", "MySQL", "Bootstrap"],
    type: "Produto Level-Soft",
    description:
      "Plataforma de gestão e arquivo de documentos institucionais desenvolvida pela Level-Soft, com controlo de versões e permissões por perfil de utilizador.",
    status: "Em produção",
    categories: ["Sistemas", "Web"],
    isPrivate: true,
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);

export const projectFilters = ["Todos", "Sistemas", "Web", "Em Produção", "Pessoal"] as const;
