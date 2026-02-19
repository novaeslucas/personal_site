"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SectionReveal } from "@/components/section-reveal";
import { useLanguage } from "@/hooks/language-context";
import { projects } from "@/lib/data";

function ProjectCard({ projectIndex, index }: { projectIndex: number; index: number }) {
  const { t } = useLanguage();
  const project = projects[projectIndex];
  const translatedItem = t.projects.items[projectIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group h-full hover:shadow-[var(--shadow-glow)] hover:border-primary/50 transition-all duration-300 flex flex-col">
        <CardContent className="p-6 flex flex-col h-full">
          {/* Top row: icon + links */}
          <div className="flex justify-between items-start mb-4">
            <motion.span
              className="material-symbols-outlined text-4xl text-primary"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {project.icon}
            </motion.span>

            <div className="flex space-x-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`${t.projects.viewLive} - ${translatedItem.title}`}
                >
                  <span className="material-symbols-outlined text-xl">open_in_new</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`${t.projects.viewCode} - ${translatedItem.title}`}
                >
                  <span className="material-symbols-outlined text-xl">code</span>
                </a>
              )}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {translatedItem.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
            {translatedItem.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-3 mt-auto">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Projects() {
  const { t } = useLanguage();

  return (
    <SectionReveal id="projects" className="mb-32 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-12 flex items-center">
        <span className="text-primary mr-3 text-2xl font-mono">02.</span> {t.projects.heading}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((_, index) => (
          <ProjectCard key={index} projectIndex={index} index={index} />
        ))}
      </div>
    </SectionReveal>
  );
}
