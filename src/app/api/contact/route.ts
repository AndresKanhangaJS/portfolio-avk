import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contact } from "@/data/personal";

/** Destinatário: o primeiro email de contacto definido em data/personal.ts. */
const TO_EMAIL = contact.emails[0] ?? "andre.kanhanga1@gmail.com";

/**
 * Remetente. Sem domínio próprio verificado no Resend, tem de ser
 * onboarding@resend.dev — e nesse modo o Resend só entrega para o email
 * da conta. Depois de verificares um domínio, define CONTACT_FROM_EMAIL.
 */
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

const MAX_LENGTHS = { name: 100, email: 200, subject: 150, message: 5000 } as const;

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  /** Honeypot: preenchido só por bots. */
  website?: string;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validate(payload: Partial<ContactPayload>): string | null {
  for (const field of ["name", "email", "subject", "message"] as const) {
    const value = payload[field];
    if (typeof value !== "string" || value.trim().length === 0) {
      return "Preencha todos os campos.";
    }
    if (value.length > MAX_LENGTHS[field]) {
      return "Um dos campos excede o tamanho permitido.";
    }
  }
  if (!isValidEmail(payload.email!.trim())) {
    return "O email indicado não é válido.";
  }
  return null;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY não está definida.");
    return NextResponse.json(
      { error: "O formulário não está configurado. Use o email directo." },
      { status: 500 },
    );
  }

  let payload: Partial<ContactPayload>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Pedido inválido." }, { status: 400 });
  }

  // Honeypot: responde 200 para o bot não perceber que foi filtrado.
  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const validationError = validate(payload);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const name = payload.name!.trim();
  const email = payload.email!.trim();
  const subject = payload.subject!.trim();
  const message = payload.message!.trim();

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email, // responder directamente a quem enviou
      subject: `[Portfolio] ${subject}`,
      text: `Nome: ${name}\nEmail: ${email}\nAssunto: ${subject}\n\n${message}`,
      html: `
        <h2>Nova mensagem via portfolio</h2>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Assunto:</strong> ${escapeHtml(subject)}</p>
        <hr />
        <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    if (error) {
      console.error("[contact] Resend devolveu erro:", error);
      return NextResponse.json(
        { error: "Não foi possível enviar. Tente pelo email directo." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Falha inesperada:", err);
    return NextResponse.json(
      { error: "Não foi possível enviar. Tente pelo email directo." },
      { status: 500 },
    );
  }
}
