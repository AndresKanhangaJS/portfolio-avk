import { Badge, Reveal } from "@/components/ui";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="bg-bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
            Experiência Profissional
          </h2>
        </Reveal>

        <div className="mt-10 space-y-8">
          {experience.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 0.08}>
              <div className="relative rounded-xl border border-bg-muted bg-bg-surface p-6 sm:p-8">
                <div className="absolute -left-px top-8 h-3/4 w-0.5 bg-gradient-to-b from-accent-blue to-transparent sm:-left-3" />

                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-bold text-text-primary">
                      {entry.role}
                    </h3>
                    <p className="mt-1 font-medium text-accent-cyan">{entry.company}</p>
                  </div>
                  <div className="text-right">
                    <Badge tone="blue">{entry.period}</Badge>
                    <p className="mt-1.5 text-sm text-text-muted">{entry.location}</p>
                  </div>
                </div>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {entry.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
