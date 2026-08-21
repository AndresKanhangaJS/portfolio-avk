import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/ui";
import { featuredProjects, otherProjects, projects } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectsSection/ProjectCard";
import { CompactProjectCard } from "@/components/sections/ProjectsSection/CompactProjectCard";

export const metadata: Metadata = {
  title: "Todos os Projectos | André Vasconcelos Kanhanga",
  description:
    "Lista completa dos projectos de André Vasconcelos Kanhanga — sistemas de gestão empresariais e institucionais, APIs e websites.",
  alternates: { canonical: "/projectos" },
  openGraph: {
    type: "website",
    url: "https://andrekanhanga.dev/projectos",
    title: "Todos os Projectos | André Vasconcelos Kanhanga",
    description:
      "Lista completa dos projectos de André Vasconcelos Kanhanga — sistemas de gestão empresariais e institucionais, APIs e websites.",
  },
};

export default function ProjectosPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-32">
      <Reveal>
        <Link
          href="/#projectos"
          className="group inline-flex items-center gap-2 font-mono text-xs text-text-muted transition-colors hover:text-accent-cyan"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
          Voltar ao início
        </Link>

        <h1 className="mt-6 font-display text-3xl font-bold text-text-primary sm:text-4xl">
          Todos os projectos
        </h1>
        <p className="mt-2 max-w-2xl text-text-muted">
          {projects.length} projectos construídos ao longo de mais de 5 anos, entre produtos
          empresariais da Level-Soft, sistemas institucionais e trabalho próprio.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-16 font-display text-xl font-semibold text-text-primary">
          Em destaque
        </h2>
        <p className="mt-1 text-sm text-text-muted">
          Os projectos que melhor representam o meu trabalho actual.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h2 className="mt-20 font-display text-xl font-semibold text-text-primary">
          Outros projectos
        </h2>
      </Reveal>

      <Reveal delay={0.06}>
        <ul className="mt-6 rounded-xl border border-bg-muted bg-bg-surface px-6">
          {otherProjects.map((project) => (
            <CompactProjectCard key={project.id} project={project} />
          ))}
        </ul>
      </Reveal>

      <Reveal>
        <p className="mt-16 text-sm text-text-muted">
          A maioria destes sistemas é código proprietário de clientes, pelo que o repositório não é
          público. Para uma demonstração ou detalhes técnicos,{" "}
          <Link href="/#contacto" className="font-medium text-accent-cyan hover:underline">
            entre em contacto
          </Link>
          .
        </p>
      </Reveal>
    </div>
  );
}
