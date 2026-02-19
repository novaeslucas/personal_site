# Prompt Inicial — Portfólio Pessoal | Lucas

## CONTEXTO

Atue como um especialista em **Frontend e UX Design**, com foco em criar experiências web memoráveis e de alta qualidade visual. Você receberá toda a base necessária para construir um portfólio pessoal profissional para Lucas, um **Desenvolvedor de Software & Gerente de Projetos** com expertise em Java/Spring Boot e atuação no setor público (TCM-BA).

Siga as definições do **PRD.md** e **SPECS.md** rigorosamente. O objetivo central é criar o **"Efeito Uau"**: o visitante deve abrir a página e imediatamente sentir que está diante de um profissional sério, moderno e diferenciado.

---

## ENTREGA ESPERADA

Crie um único arquivo `index.html` completo, autocontido e funcional, contendo:

---

### 1. 🎨 Design System & Configuração Visual

Configure o Tailwind CSS via CDN com o seguinte tema customizado:

- **Cores:** `primary: #3B82F6` (azul elétrico), fundos `#F3F4F6` (light) e `#111111` (dark), superfícies `#FFFFFF` / `#1A1A1A`
- **Fontes:** Inter (UI) + JetBrains Mono (código, logo, numeração), ambas via Google Fonts
- **Ícones:** Material Icons Outlined via Google Fonts CDN
- **Efeitos:** `shadow-glow` customizado (`0 0 15px -3px rgba(59,130,246,0.3)`), animação `fadeInUp` via keyframes
- **Dark Mode:** baseado em `class="dark"` no `<html>`

---

### 2. 🧭 Navbar Fixa e Responsiva

- Logo `</>` em JetBrains Mono, link para o topo (`#`)
- Links de âncora com smooth scroll: `Sobre`, `Projetos`, `Contato`
- Toggle de idioma `PT | EN` (visual apenas por ora)
- Botão dark/light mode com ícones Material (`light_mode` / `dark_mode`)
- Menu hamburger funcional para mobile
- Background com `backdrop-blur-md` e borda inferior sutil
- `position: fixed`, `z-50`

---

### 3. 🚀 Hero Section — Alta Impacto

- Avatar circular com moldura em gradiente (`from-primary to-purple-500`)
- Headline: `Olá, eu sou <span class="text-primary">Lucas</span>.`
- Subtítulo: `Desenvolvedor de Software & Gerente de Projetos`
- Descrição curta sobre especialidade e atuação no TCM-BA
- Dois CTAs: `Entrar em Contato` (botão azul sólido) + `Ver Portfólio` (outline neutro)
- Animação `fadeInUp` com delays escalonados por elemento (foto → título → subtítulo → CTAs)
- Cursor piscando opcional após o nome

---

### 4. 🙋 Seção Sobre Mim (`#about`)

Layout em **duas colunas** (desktop) / uma coluna (mobile):

**Coluna esquerda:**
- Número da seção: `01.` em `font-mono text-primary`
- Dois parágrafos: foco no backend Java + atuação como PM
- Seção "TECNOLOGIAS RECENTES" com badges estilizados:
  `Java` · `Spring Boot` · `SQL Server` · `Kafka` · `Redis` · `Docker` · `REST APIs`
- Badges com visual de tag: `bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1 text-xs font-mono`

**Coluna direita:**
- Card simulando um editor de código com:
  - Background escuro (`bg-gray-900`) mesmo em light mode — imersão visual
  - Três pontos decorativos coloridos no topo (vermelho, amarelo, verde)
  - Snippet Java com syntax highlighting manual via spans coloridos:
    ```java
    class Developer {
      private String name = "Lucas";
      private String role = "Backend & PM";

      public void createImpact() {
        // Writing clean code...
        while(alive) {
          buildSolutions();
          drinkCoffee();
        }
      }
    }
    ```
  - Fonte: JetBrains Mono, `text-sm`, espaçamento `leading-relaxed`

---

### 5. 💼 Seção Projetos (`#projects`)

- Número da seção: `02.` em `font-mono text-primary`
- Grid 2×2 no desktop (`md:grid-cols-2`), lista no mobile
- Cada card deve conter:
  - Ícone Material Outlined no topo esquerdo (grande, `text-4xl text-primary`)
  - Links no topo direito: `open_in_new` (live) e `code` (github) — mostrar apenas quando disponível
  - Título com `group-hover:text-primary transition-colors`
  - Descrição curta em `text-muted`
  - Stack de tecnologias em `font-mono text-xs`, alinhada ao rodapé do card (`mt-auto`)
  - Hover: `shadow-glow + border-primary/50 + scale(ícone)`

**Projetos:**

| # | Projeto | Ícone | Descrição | Stack | Links |
|---|---|---|---|---|---|
| 1 | Como Fazer Café | `coffee_maker` | Guia interativo que calcula proporção perfeita de água e café para diferentes métodos de preparo | JS, React, Tailwind | Live + GitHub |
| 2 | Log Analyzer | `bar_chart` | Ferramenta CLI para processamento e análise de logs de servidores em tempo real, detectando anomalias | Python, Pandas, Bash | GitHub |
| 3 | API Gateway Microservice | `dns` | Implementação de API Gateway com Spring Cloud Gateway para orquestrar requisições em arquitetura de microserviços | Spring Cloud, Java 17, Docker | Live + GitHub |
| 4 | Task Scheduler | `schedule` | Sistema de agendamento de tarefas distribuídas com Quartz Scheduler e Kafka para alta disponibilidade | Java, Quartz, Kafka | GitHub |

---

### 6. 📬 Seção Contato (`#contact`)

- Label mono: `03. O que vem agora?` em `text-primary`
- Título grande: `Vamos nos conectar`
- Parágrafo convidativo sobre abertura a oportunidades
- Botão outline: `Diga Olá` em `font-mono border-2 border-primary`
- Email obfuscado via JavaScript (reconstruído dinamicamente no DOM)

---

### 7. 🦶 Footer

- Ícones sociais: GitHub (SVG inline), LinkedIn (SVG inline), Email (Material Icon)
- Hover: `hover:text-primary hover:-translate-y-1 transition-all`
- Copyright: `Desenvolvido por Lucas · 2025` em `font-mono text-xs opacity-60`
- Separador: `border-t border-gray-200 dark:border-gray-800`

---

### 8. ⚙️ JavaScript

Implemente no `<script>` ao final do body:

```
1. Dark Mode Toggle
   - Verificar localStorage e prefers-color-scheme na carga
   - Persistir escolha no localStorage após toggle

2. Mobile Menu
   - Toggle de visibilidade do menu hamburger
   - Fechar automaticamente ao clicar em link âncora

3. Animações com Intersection Observer
   - Elementos com classe .reveal ganham animate-fade-in-up ao entrar na viewport
   - Threshold: 0.1

4. Email Obfuscation
   - Montar o href mailto: via JS para proteger de bots
```

---

## PADRÕES DE QUALIDADE EXIGIDOS

### ✅ O que DEVE estar presente:
- [ ] Semântica HTML5 correta (`<nav>`, `<main>`, `<section>`, `<footer>`)
- [ ] `aria-label` em todos os botões sem texto visível
- [ ] `alt` em todas as imagens
- [ ] `scroll-margin-top` ou `scroll-mt-24` em todas as seções com âncora
- [ ] Responsividade testável em 375px, 768px e 1280px
- [ ] Todos os estados de hover com transição suave
- [ ] Cards com altura uniforme via `flex flex-col` e `mt-auto` na stack
- [ ] Código limpo, indentado e com comentários por seção

### ❌ O que NÃO deve estar:
- [ ] Links com `href="#"` soltos sem intenção
- [ ] Cores hardcoded fora do tema (usar tokens Tailwind)
- [ ] Layout quebrado em mobile (verificar flex/grid)
- [ ] Texto sem contraste suficiente em ambos os modos
- [ ] Animações excessivas ou que causem layout shift

---

## RESULTADO ESPERADO

Ao final, o arquivo `index.html` deve:

1. **Abrir direto no browser** sem nenhuma dependência local
2. **Funcionar em dark e light mode** com toggle persistente
3. **Ser responsivo** do iPhone SE (375px) ao desktop widescreen
4. **Impressionar visualmente** — hero animado, cards com glow, código estilizado
5. **Ser pronto para personalização** — fácil de trocar textos, foto, links e projetos

> 💡 **Dica de ouro:** Aplique delays escalonados nas animações de entrada para criar ritmo visual. Use `animation-delay: 0.1s`, `0.2s`, `0.3s` nos elementos sequenciais do Hero. Pequenos detalhes como o cursor piscando, o glow nos cards e o lift nos ícones do footer são o que separam um portfólio comum de um portfólio memorável.
