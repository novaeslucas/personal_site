# PRD - Portfólio Pessoal | Lucas

## 1. VISÃO DO PRODUTO

O portfólio pessoal de Lucas é um site profissional de alta conversão que funciona como cartão de visitas digital para oportunidades de emprego, freelance e networking. O objetivo é apresentar suas habilidades, projetos e personalidade de forma autêntica, moderna e memorável — gerando o "Efeito Uau" em recrutadores, clientes e outros desenvolvedores que o visitarem.

---

## 2. OBJETIVOS DE NEGÓCIO

- Converter visitantes em leads qualificados (recrutadores, clientes) através de CTAs estratégicos
- Destacar-se no mercado com um design diferenciado, acima do padrão de portfólios genéricos
- Demonstrar competência técnica pela qualidade do próprio código e experiência do site
- Ser facilmente encontrado via Google (SEO básico com meta tags e Open Graph)
- Servir como base extensível para futuras seções (blog, case studies, certificações)

---

## 3. PERSONAS

### 🎯 Recrutador Técnico / HR
- 28–45 anos, avalia dezenas de portfólios por semana
- Quer encontrar rapidamente: stack, experiência, projetos e contato
- Tempo de atenção: **15–30 segundos** antes de decidir continuar ou sair
- Necessidade: clareza, credibilidade e facilidade de contato

### 💼 Cliente de Freelance / Startup
- 30–50 anos, fundador ou CTO de empresa pequena/média
- Busca um dev confiável para resolver um problema específico
- Quer ver: projetos reais, domínio técnico e profissionalismo
- Necessidade: portfólio como prova de entrega e qualidade

### 🤝 Desenvolvedor / Colega de Área
- 20–35 anos, dev que encontrou o portfólio via GitHub ou LinkedIn
- Quer ver o código, stack utilizada e projetos interessantes
- Pode se tornar parceiro, indicação ou colaborador
- Necessidade: transparência técnica e projetos relevantes

---

## 4. FUNCIONALIDADES CORE

### 4.1 Landing / Hero Section
**Descrição:** Primeira impressão impactante com identidade visual clara.

**Requisitos:**
- Foto de perfil com moldura animada (gradiente ou glow)
- Headline com nome em destaque (cor primária)
- Subtítulo com papel/função atual
- Descrição curta (2–3 linhas)
- Dois CTAs: "Entrar em Contato" (primário) e "Ver Portfólio" (secundário)
- Animação de entrada suave (fade-in ou slide-up)
- Indicador de scroll sutil

**Fluxo do usuário:**
1. Usuário acessa o site
2. É impactado pela Hero com identidade clara
3. Clica no CTA principal ou rola para saber mais

---

### 4.2 Seção "Sobre Mim"
**Descrição:** Apresentação pessoal e profissional que gera conexão e confiança.

**Requisitos:**
- Dois parágrafos: background técnico + atuação como PM
- Card de código animado com snippet em Java simulando personalidade
- Grade de tecnologias com badges visuais (tags estilizadas)
- Layout em duas colunas no desktop (texto + card de código)
- Seção numerada (01.) para identidade visual

**Tecnologias exibidas (atual):**
`Java` · `Spring Boot` · `SQL Server` · `Kafka` · `Redis` · `Docker` · `REST APIs`

---

### 4.3 Seção de Projetos
**Descrição:** Vitrine dos projetos mais relevantes com navegação rápida.

**Requisitos:**
- Grid 2×2 (desktop) / lista (mobile)
- Cada card contém: ícone, título, descrição, links (GitHub/Live), stack de tecnologias
- Hover effect com glow azul e transição suave
- Seção numerada (02.)
- Suporte a até 6 projetos (com opção de "Ver mais" futura)
- Links externos abrindo em nova aba

**Projetos atuais:**
| Projeto | Stack | Links |
|---|---|---|
| Como Fazer Café | JS, React, Tailwind | Live + GitHub |
| Log Analyzer | Python, Pandas, Bash | GitHub |
| API Gateway Microservice | Spring Cloud, Java 17, Docker | Live + GitHub |
| Task Scheduler | Java, Quartz, Kafka | GitHub |

---

### 4.4 Seção de Contato
**Descrição:** Convite claro e amigável para iniciar uma conversa.

**Requisitos:**
- Label numerada (03.)
- Headline grande e convidativo
- Parágrafo de abertura curto
- Botão de email estilizado (outline, fonte mono)
- Email obfuscado contra bots (via JavaScript ou CSS)

---

### 4.5 Footer
**Requisitos:**
- Links para: GitHub, LinkedIn, Email
- Ícones com hover animado (lift effect)
- Copyright com ano e nome
- Separador visual sutil (border-top)

---

### 4.6 Navegação (Header)
**Requisitos:**
- Fixed/sticky no topo
- Backdrop blur com transparência
- Links de âncora com smooth scroll: Sobre, Projetos, Contato
- Toggle de idioma PT | EN (visual, pode ser funcional futuramente)
- Toggle de dark/light mode com persistência em localStorage
- Menu hamburger funcional no mobile
- Logo `</>` em fonte mono com link para o topo

---

### 4.7 Dark / Light Mode
**Requisitos:**
- Sistema baseado em `class="dark"` no `<html>`
- Persistência via `localStorage`
- Respeita `prefers-color-scheme` do sistema na primeira visita
- Transição suave entre temas (`transition-colors duration-300`)
- Todos os componentes adaptados para ambos os modos

---

## 5. DESIGN SYSTEM

### Paleta de Cores

| Token | Light Mode | Dark Mode | Uso |
|---|---|---|---|
| `primary` | `#3B82F6` | `#3B82F6` | Destaques, CTAs, links |
| `background` | `#F3F4F6` | `#111111` | Fundo da página |
| `surface` | `#FFFFFF` | `#1A1A1A` | Cards, navbars |
| `text-main` | `#1F2937` | `#E5E5E5` | Texto principal |
| `text-muted` | `#6B7280` | `#A1A1AA` | Texto secundário |
| `border` | `#E5E7EB` | `#374151` | Divisórias, bordas |

### Tipografia

| Papel | Fonte | Peso | Uso |
|---|---|---|---|
| Body / UI | Inter | 300–700 | Todo o texto geral |
| Código / Mono | JetBrains Mono | 400, 700 | Logo, numeração, snippets, botões mono |

### Efeitos Visuais
- `shadow-glow`: `0 0 15px -3px rgba(59, 130, 246, 0.3)` — cards em hover
- Transições: `duration-300` padrão
- Border-radius: `rounded-xl` (cards), `rounded-lg` (botões), `rounded-full` (avatar)
- Backdrop blur: `backdrop-blur-md` na navbar

---

## 6. REQUISITOS NÃO-FUNCIONAIS

- **Performance:** Lighthouse Score > 90 em Performance, Acessibilidade e SEO
- **Responsividade:** Mobile-first, breakpoints: sm / md / lg / xl
- **Acessibilidade:** Textos alternativos, contraste WCAG AA, foco visível
- **SEO:** `<title>`, `<meta description>`, Open Graph tags, `lang="pt-br"`
- **Compatibilidade:** Chrome, Firefox, Safari, Edge (últimas 2 versões)
- **Carregamento:** Sem dependências pesadas de JS desnecessárias
- **Manutenibilidade:** Código bem estruturado e comentado para edições futuras

---

## 7. FORA DO ESCOPO V1

❌ Blog ou sistema de posts  
❌ CMS para edição sem código  
❌ Formulário de contato com backend  
❌ Analytics (pode ser adicionado com GA4 depois)  
❌ Internacionalização funcional (toggle EN apenas visual por ora)  
❌ Página de case studies detalhados  
❌ Seção de certificações / cursos  
❌ Download de currículo em PDF  

---

## 8. MÉTRICAS DE SUCESSO

- **Taxa de clique no CTA** "Entrar em Contato": > 10% dos visitantes únicos
- **Tempo médio na página:** > 60 segundos
- **Bounce rate:** < 60%
- **Contatos recebidos** por mês via email: > 3 (meta inicial)
- **Score Lighthouse:** > 90 em todas as categorias
- **Feedback qualitativo:** "Parece profissional e moderno" de recrutadores/peers
