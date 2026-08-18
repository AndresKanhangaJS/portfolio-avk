import {
  CodeXml,
  MessageSquare,
  Sparkles,
  Terminal,
  Wand2,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui";
import { aiSectionCopy, aiTools, aiUseCases } from "@/data/ai";

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  "code-2": CodeXml,
  "message-square": MessageSquare,
  terminal: Terminal,
  "wand-2": Wand2,
};

export function AISection() {
  return (
    <section id="ia" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
          {aiSectionCopy.title}
        </h2>
        <p className="mt-2 text-accent-cyan">{aiSectionCopy.subtitle}</p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {aiTools.map((tool, i) => {
          const Icon = iconMap[tool.icon] ?? Sparkles;
          return (
            <Reveal key={tool.id} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-bg-muted bg-bg-surface p-6 transition-colors hover:border-accent-cyan/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-text-primary">
                  {tool.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {tool.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-10 rounded-xl border border-bg-muted bg-bg-surface p-6">
          <h3 className="font-display text-lg font-semibold text-text-primary">
            Exemplos reais de uso
          </h3>
          <ul className="mt-4 space-y-3">
            {aiUseCases.map((useCase) => (
              <li key={useCase.id} className="flex items-start gap-3 text-sm text-text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                {useCase.text}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.28}>
        <p className="mt-8 border-l-2 border-accent-cyan pl-4 font-mono text-sm italic text-text-muted">
          {aiSectionCopy.footnote}
        </p>
      </Reveal>
    </section>
  );
}
