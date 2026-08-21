import type { AITool, AIUseCase } from "@/types/portfolio.types";

export const aiTools: AITool[] = [
  {
    id: "claude",
    name: "Claude (Anthropic)",
    description:
      "Arquitectura de sistemas, revisão de código, geração de documentação técnica, análise de requisitos e definição de prompts para projectos.",
    icon: "sparkles",
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    description:
      "Autocompletar inteligente no VSCode, geração de funções, testes unitários e sugestões contextuais durante o desenvolvimento.",
    icon: "code-2",
  },
  {
    id: "chatgpt",
    name: "ChatGPT / GPT-4",
    description:
      "Debugging de problemas complexos, pesquisa técnica, geração de conteúdo e suporte na resolução de erros em produção.",
    icon: "message-square",
  },
  {
    id: "cursor",
    name: "Cursor IDE",
    description:
      "IDE com IA integrada para edição de código por linguagem natural, refactoring assistido e navegação inteligente em codebases grandes.",
    icon: "terminal",
  },
  {
    id: "prompt-engineering",
    name: "Prompt Engineering",
    description:
      "Construção de prompts eficazes para geração de código, documentação, testes e workflows automatizados com LLMs.",
    icon: "wand-2",
  },
];

export const aiUseCases: AIUseCase[] = [
  { id: "kamba-dyami", text: "Arquitectura e design system do projecto Kamba-Dyami definidos com Claude" },
  { id: "docs", text: "Documentação técnica de APIs escrita com apoio de IA" },
  { id: "mysql", text: "Queries MySQL complexas revistas com sugestões do Copilot" },
  { id: "migrations", text: "Migrations e seeders Laravel gerados com assistência de IA" },
  { id: "components", text: "Componentes de interface prototipados por prompt" },
];

export const aiSectionCopy = {
  title: "IA como Ferramenta de Trabalho",
  subtitle: "Não substitui o engenheiro. Torna-o mais rápido e mais preciso.",
  footnote: "A IA não escreve o software. Ajuda a escrever melhor e mais depressa.",
};
