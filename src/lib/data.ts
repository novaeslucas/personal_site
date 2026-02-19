export interface Project {
  title: string;
  description: string;
  icon: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Como Fazer Café",
    description:
      "Guia completo sobre café, com métodos de preparo, receitas, equipamentos e ferramentas interativas para ajudar você a fazer o café perfeito.",
    icon: "coffee_maker",
    stack: ["JS", "React", "Tailwind"],
    liveUrl: "https://www.comofazercafe.com",
    githubUrl: "https://github.com/novaeslucas/comofazercafe2",
  },
  {
    title: "Log Analyzer",
    description:
      "JBoss Log Analyzer é uma ferramenta web 100% client-side, sem dependências, para análise visual de logs do JBoss EAP 6.4, oferecendo dashboard interativo com filtros por nível/texto/período, gráfico de timeline, heatmaps estilo GitHub e detecção automática de anomalias via Z-Score.",
    icon: "bar_chart",
    stack: ["HTML", "Javascript", "CSS"],
    liveUrl: "https://log-analyzer.net",
    githubUrl: "https://github.com/novaeslucas/jboss-log-analyzer",
  },
];

export const techBadges = [
  "Java",
  "Spring Boot",
  "SQL Server",
  "PostgreSQL",
  "Kafka",
  "Redis",
  "Docker",
  "REST APIs",
  "IA",
  "n8n",
  "Python",
  "Airflow"
] as const;

export interface SocialLink {
  label: string;
  href: string;
  type: "github" | "linkedin" | "email";
}

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "#", type: "github" },
  { label: "LinkedIn", href: "#", type: "linkedin" },
  { label: "Email", href: "#", type: "email" },
];
