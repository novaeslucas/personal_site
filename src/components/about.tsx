"use client";

import { Badge } from "@/components/ui/badge";
import { SectionReveal, RevealDiv } from "@/components/section-reveal";
import { useLanguage } from "@/hooks/language-context";
import { techBadges } from "@/lib/data";

export function About() {
  const { t } = useLanguage();

  return (
    <SectionReveal id="about" className="mb-32 scroll-mt-24">
      {/* Section heading */}
      <h2 className="text-3xl font-bold mb-12 flex items-center">
        <span className="text-primary mr-3 text-2xl font-mono">01.</span> {t.about.heading}
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left column: Text + Tech badges */}
        <RevealDiv className="space-y-6" delay={0.1}>
          <p className="text-muted-foreground leading-relaxed">
            {t.about.paragraph1}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {t.about.paragraph2}
          </p>

          {/* Tech badges */}
          <div className="pt-4">
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
              {t.about.techHeading}
            </h3>
            <div className="flex flex-wrap gap-2">
              {techBadges.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </RevealDiv>

        {/* Right column: Code editor card */}
        <RevealDiv className="relative group" delay={0.2}>
          {/* Glow backdrop */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-700 group-hover:duration-200" />

          <div className="relative bg-gray-900 rounded-xl p-6 shadow-xl border border-gray-700 font-mono text-sm leading-relaxed overflow-hidden">
            {/* Window dots */}
            <div className="flex space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            {/* Java syntax-highlighted code */}
            <div className="text-gray-300">
              <p>
                <span className="text-purple-400">class</span>{" "}
                <span className="text-yellow-400">Developer</span> {"{"}
              </p>
              <p className="pl-4">
                <span className="text-purple-400">private</span>{" "}
                <span className="text-blue-400">String</span> name ={" "}
                <span className="text-green-400">&quot;Lucas&quot;</span>;
              </p>
              <p className="pl-4">
                <span className="text-purple-400">private</span>{" "}
                <span className="text-blue-400">String</span> role ={" "}
                <span className="text-green-400">&quot;Backend &amp; Tech Lead&quot;</span>;
              </p>
              <p className="pl-4">&nbsp;</p>
              <p className="pl-4">
                <span className="text-purple-400">public</span>{" "}
                <span className="text-blue-400">void</span>{" "}
                <span className="text-sky-300">createImpact</span>() {"{"}
              </p>
              <p className="pl-8">
                <span className="text-gray-500">{t.about.codeComment}</span>
              </p>
              <p className="pl-8">
                <span className="text-purple-400">while</span>(alive) {"{"}
              </p>
              <p className="pl-12">buildSolutions();</p>
              <p className="pl-12">drinkCoffee();</p>
              <p className="pl-8">{"}"}</p>
              <p className="pl-4">{"}"}</p>
              <p>{"}"}</p>
            </div>
          </div>
        </RevealDiv>
      </div>
    </SectionReveal>
  );
}
