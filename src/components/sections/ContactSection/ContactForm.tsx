"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui";
import { contact } from "@/data/personal";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = "idle" | "sending" | "success" | "error";

const initialState: FormState = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  // Honeypot: invisível para pessoas, tentador para bots.
  const [website, setWebsite] = useState("");

  function handleChange(field: keyof FormState) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setErrorMessage(data.error ?? "Não foi possível enviar a mensagem.");
        setStatus("error");
        return;
      }

      setForm(initialState);
      setStatus("success");
    } catch {
      setErrorMessage("Sem ligação ao servidor. Verifique a internet e tente de novo.");
      setStatus("error");
    }
  }

  const inputStyles =
    "w-full rounded-lg border border-bg-muted bg-bg-primary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted/60 focus:border-accent-cyan focus:outline-none disabled:opacity-60";

  const isSending = status === "sending";

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
            disabled={isSending}
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
            disabled={isSending}
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
          disabled={isSending}
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
          disabled={isSending}
          value={form.message}
          onChange={handleChange("message")}
          className={inputStyles}
          placeholder="A sua mensagem"
        />
      </div>

      {/* Honeypot anti-spam: escondido de pessoas e de leitores de ecrã. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={isSending} className="w-full sm:w-auto">
          {isSending ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              A enviar...
            </>
          ) : (
            "Enviar Mensagem"
          )}
        </Button>

        {status === "success" && (
          <p
            role="status"
            className="inline-flex items-center gap-2 text-sm font-medium text-green-ok"
          >
            <CheckCircle2 size={16} />
            Mensagem enviada. Respondo assim que puder.
          </p>
        )}
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="inline-flex items-start gap-2 text-sm text-accent-angola"
        >
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>
            {errorMessage} Pode escrever directamente para{" "}
            <a href={`mailto:${contact.emails[0]}`} className="underline">
              {contact.emails[0]}
            </a>
            .
          </span>
        </p>
      )}
    </form>
  );
}
