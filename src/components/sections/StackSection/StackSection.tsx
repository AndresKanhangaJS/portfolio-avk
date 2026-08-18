import { Badge, ProgressBar, Reveal } from "@/components/ui";
import { learningSkills, skillCategories } from "@/data/skills";

export function StackSection() {
  return (
    <section id="stack" className="bg-bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
            Stack Técnico
          </h2>
          <p className="mt-2 text-text-muted">
            Ferramentas e tecnologias usadas em sistemas reais em produção.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, i) => (
            <Reveal key={category.id} delay={i * 0.08}>
              <div className="rounded-xl border border-bg-muted bg-bg-surface p-6">
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  {category.title}
                </h3>
                <div className="mt-5 space-y-4">
                  {category.skills.map((skill) => (
                    <ProgressBar key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10 rounded-xl border border-dashed border-bg-muted p-6">
            <h3 className="font-display text-lg font-semibold text-text-primary">
              Em aprendizagem
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {learningSkills.map((skill) => (
                <Badge key={skill.name} tone="gold">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
