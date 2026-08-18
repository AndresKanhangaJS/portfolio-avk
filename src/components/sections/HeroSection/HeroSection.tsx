"use client";

import { TypeAnimation } from "react-type-animation";
import { ButtonLink } from "@/components/ui";
import { personal } from "@/data/personal";

const codeLines = [
  "const build = () => sistemas;",
  2000,
  "const build = () => APIs;",
  2000,
  "const build = () => interfaces;",
  2000,
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/60 to-bg-primary" />
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-blue/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-ok/30 bg-green-ok/10 px-4 py-1.5">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-green-ok" />
            <span className="font-mono text-xs font-medium text-green-ok">
              Disponível para projectos
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-6xl">
            {personal.name}
          </h1>

          <div className="mt-4 h-8 font-mono text-lg text-accent-cyan sm:text-xl">
            <TypeAnimation
              sequence={personal.taglines.flatMap((line) => [line, 1800])}
              wrapper="span"
              speed={50}
              deletionSpeed={65}
              repeat={Infinity}
              cursor
            />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            {personal.location} — sistemas web empresariais e institucionais,
            do requisito à produção.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="#projectos" variant="primary">
              Ver Projectos
            </ButtonLink>
            <ButtonLink href="#contacto" variant="outline">
              Falar Comigo
            </ButtonLink>
          </div>
        </div>

        <div className="rounded-xl border border-bg-muted bg-bg-surface/80 p-5 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="mb-4 flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-accent-angola/70" />
            <span className="h-3 w-3 rounded-full bg-gold/70" />
            <span className="h-3 w-3 rounded-full bg-green-ok/70" />
            <span className="ml-3 font-mono text-xs text-text-muted">avk.build.ts</span>
          </div>
          <pre className="min-h-[140px] font-mono text-sm leading-relaxed text-text-primary sm:text-base">
            <code>
              <span className="text-text-muted">{"// o que eu construo"}</span>
              {"\n"}
              <TypeAnimation
                sequence={codeLines}
                wrapper="span"
                speed={55}
                deletionSpeed={70}
                repeat={Infinity}
                cursor
                className="text-accent-blue"
              />
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
