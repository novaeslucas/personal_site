# 🚀 Lucas — Portfólio Pessoal

Portfólio profissional desenvolvido com tecnologias modernas, apresentando minha trajetória como **Desenvolvedor de Software** e **Tech Lead**.

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-FF0050?logo=framer&logoColor=white" alt="Framer Motion" />
</p>

---

## ✨ Features

- **Dark / Light mode** — alternância via `next-themes` com transição suave
- **Animações fluidas** — scroll reveal e stagger animations com Framer Motion
- **Design responsivo** — mobile-first com Tailwind CSS 4
- **Componentes acessíveis** — shadcn/ui + Radix UI primitives
- **E-mail ofuscado** — proteção anti-bot via montagem em runtime
- **SEO otimizado** — Open Graph, Twitter Cards e meta tags

## 🏗️ Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI | [React 19](https://react.dev/) |
| Linguagem | [TypeScript 5](https://www.typescriptlang.org/) |
| Estilização | [Tailwind CSS 4](https://tailwindcss.com/) |
| Componentes | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| Animações | [Framer Motion 12](https://www.framer.com/motion/) |
| Tema | [next-themes](https://github.com/pacocoursey/next-themes) |
| Ícones | [Lucide React](https://lucide.dev/) + Material Symbols |
| Fontes | Inter + JetBrains Mono (Google Fonts) |

## 📂 Estrutura

```
src/
├── app/                  # App Router (layout, page, globals.css)
├── components/
│   ├── ui/               # Componentes base (Button, Badge, etc.)
│   ├── hero.tsx          # Seção hero com avatar e CTAs
│   ├── about.tsx         # Sobre mim + card de código
│   ├── projects.tsx      # Portfólio de projetos
│   ├── contact.tsx       # Seção de contato
│   ├── navbar.tsx        # Navegação fixa com theme toggle
│   ├── footer.tsx        # Rodapé com redes sociais
│   └── section-reveal.tsx # Wrapper de animação scroll-reveal
├── hooks/
│   └── use-email.ts      # Hook de ofuscação de e-mail
└── lib/
    ├── data.ts           # Dados estáticos (projetos, badges, links)
    └── utils.ts          # Utilitários (cn)
```

## 🚀 Começando

### Pré-requisitos

- **Node.js** ≥ 18
- **npm** (incluído com o Node.js)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/novaeslucas/personal_site.git
cd personal_site

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Comandos

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Servidor de produção |
| `npm run lint` | Verificação de código |

## 🎨 Personalização

- **Dados pessoais** — edite `src/lib/data.ts` (projetos, badges, links sociais)
- **E-mail** — edite `src/hooks/use-email.ts`
- **Foto de perfil** — substitua `public/profile_image.png`
- **Metadata / SEO** — edite `src/app/layout.tsx`
- **Tema e cores** — edite `src/app/globals.css`

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se à vontade para usar como inspiração.

---

<p align="center">
  Desenvolvido com ☕ por <strong>Lucas</strong> · 2026
</p>
