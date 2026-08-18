import type { ContactInfo, Stat } from "@/types/portfolio.types";

export const personal = {
  name: "André Vasconcelos Kanhanga",
  role: "Engenheiro de Software Full-Stack",
  location: "Kilamba Kiaxi, Luanda, Angola",
  available: true,
  taglines: [
    "Engenheiro de Software Full-Stack",
    "Arquitecto de Sistemas Web",
    "Builder de APIs REST",
    "Developer em Luanda, Angola",
  ],
  bio: [
    "Engenheiro de Software Full-Stack com mais de 5 anos de experiência em sistemas web empresariais e institucionais em Angola. Trabalha no ciclo completo do desenvolvimento, da arquitectura à entrega em produção.",
    "Na Level-Soft e no ISPAJ desde 2020, constrói e mantém sistemas críticos de gestão académica, documental, recursos humanos e facturação. Usa Inteligência Artificial como ferramenta profissional no dia-a-dia, incluindo geração e revisão de código, análise de requisitos e documentação técnica. Acredita que bom software é aquele que resolve problemas reais de pessoas reais.",
  ],
  quote: "Bom software é aquele que resolve problemas reais de pessoas reais.",
};

export const stats: Stat[] = [
  { id: "years", value: 5, suffix: "+", label: "Anos de experiência" },
  { id: "systems", value: 10, suffix: "+", label: "Sistemas em produção" },
  { id: "frameworks", value: 3, suffix: "", label: "Frameworks backend dominadas" },
  { id: "ai-tools", value: 5, suffix: "+", label: "Ferramentas de IA no workflow" },
];

export const contact: ContactInfo = {
  emails: ["andre.kanhanga1@gmail.com", "a-v-k1@hotmail.com"],
  phones: ["+244 931 453 956", "+244 942 330 282", "+244 951 106 897"],
  linkedin: "https://linkedin.com/in/andre-vasconcelos-kanhanga",
  github: "https://github.com/AndresKanhangaJS",
  location: "Kilamba Kiaxi, Luanda, Angola",
};
