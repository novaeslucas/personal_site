# SPECS - Portfólio Pessoal | Lucas

## STACK TECNOLÓGICA

### Frontend
- **Linguagem:** HTML5 semântico + CSS3 + JavaScript (Vanilla ES6+)
- **CSS Framework:** Tailwind CSS (via CDN com configuração customizada)
- **Fontes:** Google Fonts — Inter (UI) + JetBrains Mono (código/mono)
- **Ícones:** Material Icons Outlined (Google Fonts CDN)
- **Animações:** CSS transitions + keyframes nativos (sem dependência extra)
- **Sem framework JS:** Projeto 100% estático para máxima performance

### Infraestrutura
- **Hosting:** GitHub Pages, Vercel ou Netlify (deploy estático gratuito)
- **Repositório:** GitHub (público — reforça presença técnica)
- **CI/CD:** Push to main → deploy automático (via Vercel/Netlify)
- **Domínio:** Personalizado (ex: `lucasdev.com.br`) via registro externo
- **SSL:** Automático via provedor de hosting

### Ferramentas de Desenvolvimento
- **Editor:** VS Code com extensões: Tailwind IntelliSense, Prettier, Live Server
- **Browser Testing:** Chrome DevTools (responsividade + performance)
- **Auditoria:** Lighthouse (Performance, Acessibilidade, SEO, Best Practices)
- **Versão:** Git com branches `main` (produção) e `dev` (desenvolvimento)

---

## ARQUITETURA DO PROJETO

```
portfolio/
├── index.html              # Página principal (single-page)
├── assets/
│   ├── img/
│   │   └── avatar.jpg      # Foto de perfil (otimizada, ~100KB)
│   └── favicon.ico         # Favicon
├── css/
│   └── custom.css          # Estilos customizados (se necessário além do Tailwind)
├── js/
│   └── main.js             # Lógica: dark mode, mobile menu, animações
└── README.md               # Documentação do projeto
```

> **Nota:** O projeto pode evoluir para Next.js estático (`next export`) em uma V2 caso seja necessário internacionalização, blog ou CMS. A base visual e o design system permanecem compatíveis.

---

## ESTRUTURA DA PÁGINA (index.html)

```
<html lang="pt-br" class="dark">
  <head>
    <!-- Meta tags SEO + Open Graph -->
    <!-- Google Fonts (Inter + JetBrains Mono) -->
    <!-- Material Icons -->
    <!-- Tailwind CSS CDN com config customizada -->
  </head>
  <body>
    <nav>         <!-- Header fixo com links de âncora -->
    <main>
      <section#hero>     <!-- Foto + headline + CTAs -->
      <section#about>    <!-- Bio + card de código + tech stack -->
      <section#projects> <!-- Grid de projetos -->
      <section#contact>  <!-- CTA de contato -->
    </main>
    <footer>      <!-- Social links + copyright -->
    <script>      <!-- Dark mode toggle + mobile menu -->
  </body>
</html>
```

---

## DESIGN SYSTEM

### Cores (Tailwind Config)

```javascript
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        "background-light": "#F3F4F6",
        "background-dark":  "#111111",
        "surface-light":    "#FFFFFF",
        "surface-dark":     "#1A1A1A",
        "text-main-light":  "#1F2937",
        "text-main-dark":   "#E5E5E5",
        "text-muted-light": "#6B7280",
        "text-muted-dark":  "#A1A1AA",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 15px -3px rgba(59, 130, 246, 0.3)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out both",
        "blink":      "blink 1s step-end infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0" },
        },
      },
    },
  },
};
```

### Escala Tipográfica

| Elemento | Classe Tailwind | Fonte |
|---|---|---|
| Nome (H1) | `text-5xl md:text-7xl font-bold tracking-tight` | Inter |
| Subtítulo | `text-xl md:text-2xl font-light` | Inter |
| Section title | `text-3xl font-bold` | Inter |
| Section number | `text-2xl font-mono text-primary` | JetBrains Mono |
| Body | `text-base leading-relaxed` | Inter |
| Muted | `text-sm text-text-muted-*` | Inter |
| Code snippet | `font-mono text-sm` | JetBrains Mono |
| Badges / Tags | `text-xs font-mono` | JetBrains Mono |
| Botão mono | `font-mono` | JetBrains Mono |

### Componentes Padronizados

#### Card de Projeto
```html
<div class="group relative bg-surface-light dark:bg-surface-dark
            border border-gray-200 dark:border-gray-800 rounded-xl p-6
            hover:shadow-glow hover:border-primary/50
            transition-all duration-300 flex flex-col">
  <!-- Ícone Material + Links -->
  <!-- Título com hover:text-primary -->
  <!-- Descrição (text-muted) -->
  <!-- Stack tags (font-mono, text-xs, mt-auto) -->
</div>
```

#### Badge de Tecnologia
```html
<span class="px-3 py-1 text-xs font-mono rounded-full
             bg-primary/10 text-primary
             border border-primary/20">
  Java
</span>
```

#### Botão Primário
```html
<a class="px-6 py-3 bg-primary text-white rounded-lg font-medium
          hover:bg-blue-600 transition-all
          shadow-lg shadow-blue-500/30">
  Entrar em Contato
</a>
```

#### Botão Outline (Mono)
```html
<a class="inline-flex items-center px-8 py-4
          border-2 border-primary text-primary
          hover:bg-primary/10 rounded-lg
          text-lg font-mono transition-all">
  Diga Olá
</a>
```

---

## SEÇÕES — ESPECIFICAÇÃO DETALHADA

### NAVBAR
- `position: fixed`, `z-index: 50`, `top: 0`
- Background: `bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md`
- Borda inferior sutil: `border-b border-gray-200 dark:border-gray-800`
- Container: `max-w-5xl mx-auto flex justify-between items-center p-4`
- Logo: `</> ` em `font-mono text-2xl font-bold text-primary`
- Links âncora: `hover:text-primary transition-colors`
- Botão dark mode: ícone `light_mode` / `dark_mode` (Material Icons)
- Menu mobile: hamburger com colapso (`hidden md:flex`)

### HERO
- `min-h-[80vh] flex flex-col justify-center items-center text-center`
- Avatar: `w-28 h-28 rounded-full` com wrapper `bg-gradient-to-tr from-primary to-purple-500 p-1`
- Animação de entrada: `animate-fade-in-up` com delays escalonados por elemento
- Cursor piscando após "Lucas" (efeito typewriter opcional)
- Padding top: `pt-32` (compensar navbar fixa)
- Espaçamento entre elementos: `space-y-6`

### SOBRE MIM
- `id="about"`, `scroll-mt-24` para compensar navbar
- Grid: `md:grid-cols-2 gap-12 items-center`
- Coluna esquerda: 2 parágrafos + seção "Tecnologias Recentes" com badges
- Coluna direita: Card de código estilizado (simulação de editor)
- Card de código:
  ```
  - bg: bg-gray-900 rounded-xl p-6 shadow-xl border border-gray-700
  - Dots decorativos (vermelho, amarelo, verde) no topo
  - Syntax highlighting manual via spans coloridos
  - Fonte: JetBrains Mono, text-sm
  ```

### PROJETOS
- `id="projects"`, `scroll-mt-24`
- Grid: `md:grid-cols-2 gap-6`
- Máximo 4 projetos na V1 (expandível para 6)
- Cada card: altura uniforme com `flex flex-col` e stack tags em `mt-auto`
- Ícone Material no topo esquerdo, links no topo direito
- Hover: escala do ícone (`group-hover:scale-110`) + glow shadow

### CONTATO
- `id="contact"`, `scroll-mt-24`
- `max-w-3xl mx-auto text-center`
- Label: `text-sm font-mono text-primary` (ex: "03. O que vem agora?")
- Título grande: `text-4xl md:text-5xl font-bold`
- Email obfuscado via JavaScript (proteção anti-spam)

### FOOTER
- `border-t border-gray-200 dark:border-gray-800`
- Ícones sociais: GitHub (SVG), LinkedIn (SVG), Email (Material Icon)
- Hover nos ícones: `hover:text-primary hover:-translate-y-1 transition-all`
- Copyright: `text-sm font-mono opacity-60`

---

## LÓGICA JAVASCRIPT

### Dark Mode Toggle
```javascript
// Verificação na carga: localStorage → prefers-color-scheme → default dark
const prefersDark = localStorage.getItem('color-theme') === 'dark'
  || (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

document.documentElement.classList.toggle('dark', prefersDark);

// Toggle ao clicar
themeToggleBtn.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
});
```

### Mobile Menu Toggle
```javascript
toggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
});

// Fechar menu ao clicar em link âncora
document.querySelectorAll('#navbar-sticky a').forEach(link => {
  link.addEventListener('click', () => navbar.classList.add('hidden'));
});
```

### Animação de Entrada (Intersection Observer)
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in-up');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

### Email Obfuscation
```javascript
// Previne scraping de email por bots
const emailUser = 'lucas';
const emailDomain = 'exemplo.com';
emailLink.href = `mailto:${emailUser}@${emailDomain}`;
emailLink.textContent = `${emailUser}@${emailDomain}`;
```

---

## SEO & META TAGS

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lucas | Desenvolvedor de Software & Gerente de Projetos</title>
  <meta name="description" content="Portfólio de Lucas — Desenvolvedor Backend Java com experiência em Spring Boot, Kafka, Docker e Gestão de Projetos. Atualmente contribuindo no TCM-BA." />

  <!-- Open Graph (LinkedIn, WhatsApp, etc.) -->
  <meta property="og:title" content="Lucas | Desenvolvedor de Software" />
  <meta property="og:description" content="Portfólio profissional com projetos e experiências em desenvolvimento backend e gestão de projetos." />
  <meta property="og:image" content="https://seudominio.com/assets/img/og-image.png" />
  <meta property="og:url" content="https://seudominio.com" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Lucas | Desenvolvedor de Software" />

  <!-- Favicon -->
  <link rel="icon" href="/assets/favicon.ico" />

  <!-- Canonical -->
  <link rel="canonical" href="https://seudominio.com" />
</head>
```

---

## PERFORMANCE & BOAS PRÁTICAS

| Item | Ação |
|---|---|
| Imagens | Avatar otimizado em WebP, máx. 150KB, `loading="lazy"` |
| Fontes | `display=swap` no Google Fonts para evitar FOUT |
| JS | Defer/Async em scripts não-críticos |
| CSS | Tailwind via CDN (dev). Em produção, considerar purge via PostCSS |
| HTML | Semântico: `<nav>`, `<main>`, `<section>`, `<footer>`, `aria-label` |
| Acessibilidade | `alt` em todas as imagens, `aria-label` em botões de ícone, contraste AA |
| Scroll | `scroll-behavior: smooth` + `scroll-margin-top` nas sections |

---

## CHECKLIST PRÉ-DEPLOY

- [ ] Foto de perfil real carregando corretamente
- [ ] Links de GitHub/LinkedIn/Email apontando para destinos reais
- [ ] Email obfuscado funcionando
- [ ] Dark mode persistindo entre sessões
- [ ] Menu mobile abrindo/fechando corretamente
- [ ] Todos os links âncora com smooth scroll
- [ ] Sem links com `href="#"` em produção
- [ ] Open Graph testado (via opengraph.xyz)
- [ ] Lighthouse Score > 90 em todas as categorias
- [ ] Testado em Chrome, Firefox e Safari
- [ ] Testado em mobile 375px (iPhone SE) e 768px (iPad)
