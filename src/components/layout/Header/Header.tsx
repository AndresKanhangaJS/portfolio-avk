"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navLinks, sectionIdFromHref } from "@/constants/navigation";
import { useScrollspy } from "@/hooks/useScrollspy";
import { cn } from "@/lib/cn";
import { MobileMenu } from "../MobileMenu/MobileMenu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Memoizado: o useEffect do scrollspy depende da identidade do array.
  const sectionIds = useMemo(() => navLinks.map((link) => sectionIdFromHref(link.href)), []);
  const activeId = useScrollspy(sectionIds);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-bg-muted bg-bg-primary/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/#home" className="font-mono text-lg font-bold text-accent-cyan">
          &lt;AVK/&gt;
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const id = sectionIdFromHref(link.href);
              const isActive = activeId === id;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative rounded-md px-3 py-2 font-body text-sm font-medium transition-colors",
                      isActive
                        ? "text-accent-cyan"
                        : "text-text-muted hover:text-text-primary",
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-accent-cyan" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Abrir menu"
          className="rounded-lg p-2 text-text-primary hover:bg-bg-surface md:hidden"
        >
          <Menu size={22} />
        </button>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        links={navLinks}
        activeId={activeId}
      />
    </header>
  );
}
