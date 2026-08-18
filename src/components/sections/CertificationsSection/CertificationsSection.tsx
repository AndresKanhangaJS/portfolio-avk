import { GraduationCap, Award } from "lucide-react";
import { Badge, Reveal } from "@/components/ui";
import { certifications } from "@/data/certifications";

export function CertificationsSection() {
  return (
    <section id="certificacoes" className="bg-bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
            Certificações e Formação
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const Icon = cert.category === "Académica" ? GraduationCap : Award;
            return (
              <Reveal key={cert.id} delay={(i % 3) * 0.06}>
                <div className="flex h-full items-start gap-4 rounded-xl border border-bg-muted bg-bg-surface p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-text-primary">
                      {cert.name}
                    </h3>
                    <p className="mt-1 text-xs text-text-muted">{cert.institution}</p>
                    {cert.inProgress && (
                      <Badge tone="gold" className="mt-2">
                        Em curso
                      </Badge>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
