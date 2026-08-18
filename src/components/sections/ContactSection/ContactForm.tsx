"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import { Button } from "@/components/ui";
import { contact } from "@/data/personal";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);

  function handleChange(field: keyof FormState) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const to = contact.emails[0];
    const subject = encodeURIComponent(form.subject || `Contacto via portfolio — ${form.name}`);
    const body = encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  }

  const inputStyles =
    "w-full rounded-lg border border-bg-muted bg-bg-primary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted/60 focus:border-accent-cyan focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-text-muted">
            Nome
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={handleChange("name")}
            className={inputStyles}
            placeholder="O seu nome"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-text-muted">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange("email")}
            className={inputStyles}
            placeholder="voce@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm text-text-muted">
          Assunto
        </label>
        <input
          id="subject"
          required
          value={form.subject}
          onChange={handleChange("subject")}
          className={inputStyles}
          placeholder="Sobre o que quer falar?"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-text-muted">
          Mensagem
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange("message")}
          className={inputStyles}
          placeholder="A sua mensagem"
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Enviar Mensagem
      </Button>
    </form>
  );
}
