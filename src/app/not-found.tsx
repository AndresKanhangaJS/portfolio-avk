import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-accent-cyan">404</p>
      <h1 className="mt-3 font-display text-3xl font-bold text-text-primary">
        Página não encontrada
      </h1>
      <p className="mt-2 max-w-md text-text-muted">
        A rota que procura não existe. Volte ao início ou veja todos os projectos.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/" variant="primary">
          Voltar ao início
        </ButtonLink>
        <ButtonLink href="/projectos" variant="outline">
          Ver projectos
        </ButtonLink>
      </div>
    </div>
  );
}
