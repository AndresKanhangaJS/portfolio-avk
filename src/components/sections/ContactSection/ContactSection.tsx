import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/ui";
import { contact } from "@/data/personal";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
          Contacto
        </h2>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-green-ok/30 bg-green-ok/10 px-4 py-1.5">
          <span className="h-2 w-2 animate-pulse-dot rounded-full bg-green-ok" />
          <span className="font-mono text-xs font-medium text-green-ok">
            Disponível para freelance e novos projectos
          </span>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal delay={0.1}>
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 flex items-center gap-2 font-display text-sm font-semibold text-text-primary">
                <Mail size={16} className="text-accent-cyan" /> Email
              </h3>
              <ul className="space-y-1.5">
                {contact.emails.map((email) => (
                  <li key={email}>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm text-text-muted hover:text-accent-cyan"
                    >
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 flex items-center gap-2 font-display text-sm font-semibold text-text-primary">
                <Phone size={16} className="text-accent-cyan" /> Telefone
              </h3>
              <ul className="space-y-1.5">
                {contact.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="text-sm text-text-muted hover:text-accent-cyan"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 flex items-center gap-2 font-display text-sm font-semibold text-text-primary">
                <MapPin size={16} className="text-accent-cyan" /> Localização
              </h3>
              <p className="text-sm text-text-muted">{contact.location}</p>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-bg-muted text-text-muted hover:border-accent-cyan hover:text-accent-cyan"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-bg-muted text-text-muted hover:border-accent-cyan hover:text-accent-cyan"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="rounded-xl border border-bg-muted bg-bg-surface p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
