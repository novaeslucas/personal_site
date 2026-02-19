export type Locale = "pt" | "en";

interface NavTranslations {
  about: string;
  projects: string;
  contact: string;
  toggleLang: string;
  toggleTheme: string;
  openMenu: string;
  goToTop: string;
}

interface HeroTranslations {
  greeting: string;
  subtitle: string;
  description1: string;
  description2: string;
  cta: string;
  portfolio: string;
  avatarAlt: string;
}

interface AboutTranslations {
  heading: string;
  paragraph1: string;
  paragraph2: string;
  techHeading: string;
  codeComment: string;
}

interface ProjectItem {
  title: string;
  description: string;
}

interface ProjectsTranslations {
  heading: string;
  viewLive: string;
  viewCode: string;
  items: ProjectItem[];
}

interface ContactTranslations {
  heading: string;
  title: string;
  paragraph: string;
  cta: string;
  ctaLabel: string;
}

interface FooterTranslations {
  builtBy: string;
}

export interface TranslationKeys {
  nav: NavTranslations;
  hero: HeroTranslations;
  about: AboutTranslations;
  projects: ProjectsTranslations;
  contact: ContactTranslations;
  footer: FooterTranslations;
}

export const translations: Record<Locale, TranslationKeys> = {
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
      toggleLang: "Alternar idioma",
      toggleTheme: "Alternar modo escuro/claro",
      openMenu: "Abrir menu principal",
      goToTop: "Ir para o topo",
    },
    hero: {
      greeting: "Olá, eu sou",
      subtitle: "Desenvolvedor de Software",
      description1: "Especialista em construir soluções robustas e escaláveis.",
      description2: "Atualmente contribuindo para a modernização tecnológica no TCM-BA.",
      cta: "Entrar em contato",
      portfolio: "Ver portfólio",
      avatarAlt: "Lucas — Desenvolvedor de Software",
    },
    about: {
      heading: "Sobre Mim",
      paragraph1:
        "Meu foco principal é o desenvolvimento backend, onde me sinto confortável arquitetando sistemas complexos e garantindo performance e segurança. Tenho vasta experiência com o ecossistema Java e bancos de dados relacionais.",
      paragraph2:
        "Além de escrever código, atuo como Tech Lead. Conduzo decisões de arquitetura, oriento o time nas melhores práticas e garanto a qualidade técnica das entregas.",
      techHeading: "Tecnologias Recentes",
      codeComment: "// Writing clean code...",
    },
    projects: {
      heading: "Projetos",
      viewLive: "Ver ao vivo",
      viewCode: "Ver código no GitHub",
      items: [
        {
          title: "Como Fazer Café",
          description:
            "Guia completo sobre café, com métodos de preparo, receitas, equipamentos e ferramentas interativas para ajudar você a fazer o café perfeito.",
        },
        {
          title: "Log Analyzer",
          description:
            "JBoss Log Analyzer é uma ferramenta web 100% client-side, sem dependências, para análise visual de logs do JBoss EAP 6.4, oferecendo dashboard interativo com filtros por nível/texto/período, gráfico de timeline, heatmaps estilo GitHub e detecção automática de anomalias via Z-Score.",
        },
      ],
    },
    contact: {
      heading: "Contato",
      title: "Vamos nos conectar",
      paragraph:
        "Estou sempre aberto a novas oportunidades e desafios interessantes no mundo do desenvolvimento. Se você tem uma pergunta ou apenas quer dar um oi, minha caixa de entrada está sempre aberta!",
      cta: "Diga Olá",
      ctaLabel: "Enviar email",
    },
    footer: {
      builtBy: "Desenvolvido por Lucas · 2026",
    },
  },

  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      toggleLang: "Toggle language",
      toggleTheme: "Toggle dark/light mode",
      openMenu: "Open main menu",
      goToTop: "Go to top",
    },
    hero: {
      greeting: "Hi, I'm",
      subtitle: "Software Developer",
      description1: "Specialized in building robust and scalable solutions.",
      description2: "Currently contributing to technological modernization at TCM-BA.",
      cta: "Get in touch",
      portfolio: "View portfolio",
      avatarAlt: "Lucas — Software Developer",
    },
    about: {
      heading: "About Me",
      paragraph1:
        "My main focus is backend development, where I feel comfortable architecting complex systems and ensuring performance and security. I have extensive experience with the Java ecosystem and relational databases.",
      paragraph2:
        "Besides writing code, I work as a Tech Lead. I drive architecture decisions, guide the team on best practices, and ensure the technical quality of deliverables.",
      techHeading: "Recent Technologies",
      codeComment: "// Writing clean code...",
    },
    projects: {
      heading: "Projects",
      viewLive: "View live",
      viewCode: "View code on GitHub",
      items: [
        {
          title: "Como Fazer Café",
          description:
            "A comprehensive coffee guide featuring brewing methods, recipes, equipment reviews, and interactive tools to help you make the perfect cup of coffee.",
        },
        {
          title: "Log Analyzer",
          description:
            "JBoss Log Analyzer is a 100% client-side, zero-dependency web tool for visual analysis of JBoss EAP 6.4 logs, offering an interactive dashboard with level/text/time filters, timeline charts, GitHub-style heatmaps, and automatic anomaly detection via Z-Score.",
        },
      ],
    },
    contact: {
      heading: "Contact",
      title: "Let's connect",
      paragraph:
        "I'm always open to new opportunities and interesting challenges in the development world. If you have a question or just want to say hi, my inbox is always open!",
      cta: "Say Hello",
      ctaLabel: "Send email",
    },
    footer: {
      builtBy: "Built by Lucas · 2026",
    },
  },
};
