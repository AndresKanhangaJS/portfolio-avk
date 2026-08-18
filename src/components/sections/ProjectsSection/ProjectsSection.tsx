"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/ui";
import { cn } from "@/lib/cn";
import { projectFilters, projects } from "@/data/projects";
import type { Project } from "@/types/portfolio.types";
import { ProjectCard } from "./ProjectCard";

type Filter = (typeof projectFilters)[number];

function matchesFilter(project: Project, filter: Filter): boolean {
  if (filter === "Todos") return true;
  if (filter === "Em Produção") return project.status === "Em produção";
  return project.categories.includes(filter);
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("Todos");

  const filteredProjects = useMemo(
    () => projects.filter((project) => matchesFilter(project, activeFilter)),
    [activeFilter],
  );

  return (
    <section id="projectos" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
          Projectos
        </h2>
        <p className="mt-2 text-text-muted">
          Sistemas construídos em ambiente empresarial e institucional.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full border px-4 py-1.5 font-mono text-xs font-medium transition-colors",
                activeFilter === filter
                  ? "border-accent-cyan bg-accent-cyan/10 text-accent-cyan"
                  : "border-bg-muted text-text-muted hover:border-text-muted",
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
