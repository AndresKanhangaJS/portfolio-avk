"use client";

import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export function CountUp({ value, suffix = "", duration = 1500 }: CountUpProps) {
  const { ref, isVisible } = useScrollReveal<HTMLSpanElement>();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isVisible, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
