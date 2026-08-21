"use client";

import { useEffect, useState } from "react";

export function useScrollspy(sectionIds: string[], offset = 120): string {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + offset;

      // Fora da home nenhuma secção existe no DOM: não destacar nada.
      const presentIds = sectionIds.filter((id) => document.getElementById(id));
      let current = presentIds[0] ?? "";
      for (const id of presentIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      }
      setActiveId(current);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
