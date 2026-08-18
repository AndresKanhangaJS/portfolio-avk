import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-accent-cyan">404</p>
      <h1 className="mt-3 font-display text-3xl font-bold text-text-primary">
        Página não encontrada
      </h1>
      <p className="mt-2 max-w-md text-text-muted">
        A rota que procura não existe. Este portfolio é uma única página.
      </p>
      <ButtonLink href="/" variant="primary" className="mt-8">
        Voltar ao início
      </ButtonLink>
    </div>
  );
}
