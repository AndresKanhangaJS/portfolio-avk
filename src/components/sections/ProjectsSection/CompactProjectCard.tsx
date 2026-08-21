import { ExternalLink, Github, Lock } from "lucide-react";
import type { Project } from "@/types/portfolio.types";

export function CompactProjectCard({ project }: { project: Project }) {
  return (
    <li className="flex flex-col gap-2 border-b border-bg-muted py-5 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <div className="min-w-0">
        <h3 className="font-display text-base font-semibold text-text-primary">
          {project.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-x-3 gap-y-1 sm:justify-end">
        <span className="font-mono text-[11px] text-text-muted">
          {project.stack.join(" · ")}
        </span>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-medium text-accent-cyan hover:underline"
          >
            <ExternalLink size={11} />
            Ver site
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-medium text-accent-cyan hover:underline"
          >
            <Github size={11} />
            GitHub
          </a>
        )}

        {project.isPrivate && !project.demo && !project.github && (
          <span className="inline-flex items-center gap-1 text-[11px] text-text-muted">
            <Lock size={11} />
            Privado
          </span>
        )}
      </div>
    </li>
  );
}
