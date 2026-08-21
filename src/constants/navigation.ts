import type { NavLink } from "@/types/portfolio.types";

/** Hrefs absolutos com âncora para funcionarem também fora da home (ex.: /projectos). */
export const navLinks: NavLink[] = [
  { href: "/#home", label: "Início" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#stack", label: "Stack" },
  { href: "/#ia", label: "IA" },
  { href: "/#experiencia", label: "Experiência" },
  { href: "/#projectos", label: "Projectos" },
  { href: "/#certificacoes", label: "Certificações" },
  { href: "/#contacto", label: "Contacto" },
];

export function sectionIdFromHref(href: string): string {
  return href.split("#")[1] ?? "";
}
