import { CountUp, Reveal } from "@/components/ui";
import { personal, stats } from "@/data/personal";

export function AboutSection() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
          Sobre
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal delay={0.1}>
          <div className="space-y-5">
            {personal.bio.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-text-muted sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="rounded-xl border border-bg-muted bg-bg-surface p-5"
              >
                <div className="font-display text-3xl font-bold text-accent-cyan sm:text-4xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 font-body text-sm text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
