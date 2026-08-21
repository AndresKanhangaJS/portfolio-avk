import { ExternalLink, Github, Lock } from "lucide-react";
import { Badge, Card } from "@/components/ui";
import type { Project } from "@/types/portfolio.types";
import { getStackColor } from "./stackColors";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-text-primary">
          {project.title}
        </h3>
        <Badge tone={project.status === "Em produção" ? "green" : "gold"}>
          {project.status}
        </Badge>
      </div>

      <p className="mt-1 font-mono text-xs text-text-muted">{project.type}</p>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className={`rounded-md border px-2 py-0.5 font-mono text-[11px] ${getStackColor(tech)}`}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-bg-muted pt-4">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-cyan hover:underline"
          >
            <ExternalLink size={13} />
            Ver site
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-cyan hover:underline"
          >
            <Github size={13} />
            Ver no GitHub
          </a>
        )}

        {project.isPrivate && (
          <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
            <Lock size={13} />
            {project.demo ? "Código privado" : "Projecto Privado"}
          </span>
        )}
      </div>
    </Card>
  );
}
