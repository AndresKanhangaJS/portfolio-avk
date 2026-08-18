# André Vasconcelos Kanhanga — Portfolio

Portfolio profissional em página única (one-page) de André Vasconcelos Kanhanga, Engenheiro de Software Full-Stack em Luanda, Angola.

**Live:** [andrekanhanga.dev](https://andrekanhanga.dev)

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + [TypeScript](https://www.typescriptlang.org/) (strict)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) para animações
- [Lucide React](https://lucide.dev/) para ícones
- [react-type-animation](https://github.com/maxeko/react-type-animation) para o efeito de escrita no hero

## Requisitos

- Node.js 20+
- npm

> **Nota:** este projecto foi desenvolvido num ambiente WSL (Windows Subsystem for Linux). Se o repositório estiver montado num caminho UNC (`\\wsl.localhost\...`), corre os comandos abaixo a partir de dentro do WSL — o `next build`/`next dev` e os binários nativos (SWC, lightningcss) não funcionam de forma fiável a partir do lado Windows nesse tipo de caminho.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## Docker

### Desenvolvimento

```bash
npm install   # se ainda não tiveres node_modules localmente
docker compose up -d --build app
```

A aplicação fica disponível em `http://localhost:3002` (porta mapeada em `docker-compose.yml` — ajusta-a se entrar em conflito com outro serviço local). O serviço monta o código-fonte e o `node_modules` do host como volumes, com hot-reload activo; a imagem usa `node:20-slim` para ser compatível com os binários nativos (SWC, lightningcss) instalados no host.

### Produção (com Nginx)

```bash
docker compose --profile production up -d --build
```

Usa `.docker/Dockerfile.prod` (build multi-stage, standalone output do Next.js) atrás de um proxy Nginx (`docker/nginx/nginx.conf`).

## Estrutura do projecto

```
src/
├── app/                 rotas, layout, metadata e estilos globais
├── components/
│   ├── ui/              componentes base (Button, Badge, Card, ProgressBar, Reveal, CountUp)
│   ├── layout/           Header (com scroll spy), Footer, MobileMenu
│   └── sections/         uma pasta por secção da página (Hero, Sobre, Stack, IA, Experiência, Projectos, Certificações, Contacto)
├── data/                 conteúdo estático tipado (projectos, skills, experiência, certificações, IA, dados pessoais)
├── hooks/                useScrollspy, useScrollReveal
├── types/                tipos partilhados (portfolio.types.ts)
├── constants/            navegação
└── styles/               design tokens e animações (CSS)
```

Todo o conteúdo do site vive em `src/data/` — para actualizar projectos, skills, experiência ou certificações, basta editar os ficheiros correspondentes; não há base de dados nem API.

## Variáveis de ambiente

Ver `.env.local`:

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
NEXT_PUBLIC_GA_ID=
```

## Contacto

- Email: [andre.kanhanga1@gmail.com](mailto:andre.kanhanga1@gmail.com)
- LinkedIn: [linkedin.com/in/andré-vasconcelos-kanhanga](https://www.linkedin.com/in/andré-vasconcelos-kanhanga)
- GitHub: [@AndresKanhangaJS](https://github.com/AndresKanhangaJS)

---

made by `<AVK/>`
