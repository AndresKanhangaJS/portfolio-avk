"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { NavLink } from "@/types/portfolio.types";
import { cn } from "@/lib/cn";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  activeId: string;
}

export function MobileMenu({ isOpen, onClose, links, activeId }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-bg-primary/98 backdrop-blur-sm md:hidden"
        >
          <div className="flex justify-end p-6">
            <button
              onClick={onClose}
              aria-label="Fechar menu"
              className="rounded-lg p-2 text-text-primary hover:bg-bg-surface"
            >
              <X size={24} />
            </button>
          </div>
          <nav aria-label="Navegação principal">
            <ul className="flex flex-col items-center gap-6 py-8">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "font-display text-2xl font-medium transition-colors",
                      activeId === link.href.slice(1)
                        ? "text-accent-cyan"
                        : "text-text-primary hover:text-accent-cyan",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
