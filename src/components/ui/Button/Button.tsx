import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-display text-sm font-semibold transition-all duration-200 focus-visible:outline-offset-4";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent-blue text-text-primary hover:bg-accent-blue/90 hover:-translate-y-0.5 shadow-lg shadow-accent-blue/20",
  outline:
    "border border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10 hover:-translate-y-0.5",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </button>
  );
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

export function ButtonLink({ variant = "primary", className, children, ...props }: ButtonLinkProps) {
  return (
    <a className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </a>
  );
}
