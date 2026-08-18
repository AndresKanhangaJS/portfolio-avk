"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { Skill } from "@/types/portfolio.types";

interface ProgressBarProps {
  skill: Skill;
}

export function ProgressBar({ skill }: ProgressBarProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="w-full">
      <div className="mb-1.5 flex items-baseline justify-between font-mono text-sm">
        <span className="text-text-primary">{skill.name}</span>
        <span className="text-text-muted">{skill.level}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-bg-muted">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan transition-[width] duration-1000 ease-out"
          style={{ width: isVisible ? `${skill.proficiency}%` : "0%" }}
          role="progressbar"
          aria-valuenow={skill.proficiency}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${skill.name}: ${skill.level}`}
        />
      </div>
    </div>
  );
}
