import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "blue" | "cyan" | "green" | "gold" | "muted" | "angola";

const toneStyles: Record<Tone, string> = {
  blue: "bg-accent-blue/10 text-accent-blue border-accent-blue/30",
  cyan: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30",
  green: "bg-green-ok/10 text-green-ok border-green-ok/30",
  gold: "bg-gold/10 text-gold border-gold/30",
  muted: "bg-bg-muted text-text-muted border-bg-muted",
  angola: "bg-accent-angola/10 text-accent-angola border-accent-angola/30",
};

interface BadgeProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  icon?: ReactNode;
}

export function Badge({ children, tone = "muted", className, icon }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs font-medium",
        toneStyles[tone],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
