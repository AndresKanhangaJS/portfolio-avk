import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverable?: boolean;
}

export function Card({ children, hoverable = true, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-bg-muted bg-bg-surface p-6",
        hoverable &&
          "transition-all duration-300 hover:scale-[1.02] hover:border-accent-cyan/60",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
