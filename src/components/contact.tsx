"use client";

import { Button } from "@/components/ui/button";
import { SectionReveal, RevealDiv } from "@/components/section-reveal";
import { useLanguage } from "@/hooks/language-context";
import { useEmail } from "@/hooks/use-email";

export function Contact() {
  const { href } = useEmail();
  const { t } = useLanguage();

  return (
    <SectionReveal id="contact" className="mb-32 scroll-mt-24">
      {/* Section heading — same pattern as 01. and 02. */}
      <h2 className="text-3xl font-bold mb-12 flex items-center">
        <span className="text-primary mr-3 text-2xl font-mono">03.</span> {t.contact.heading}
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left column: Text + CTA */}
        <RevealDiv className="space-y-6" delay={0.1}>
          <p className="text-2xl md:text-3xl font-semibold">
            {t.contact.title}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {t.contact.paragraph}
          </p>
          <div className="pt-2">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary/10 text-lg font-mono"
            >
              <a href={href} aria-label={t.contact.ctaLabel}>
                {t.contact.cta}
              </a>
            </Button>
          </div>
        </RevealDiv>

        {/* Right column: Decorative illustration */}
        <RevealDiv className="relative group flex justify-center" delay={0.2}>
          {/* Glow backdrop */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-700 group-hover:duration-200" />

          <div className="relative bg-card rounded-xl p-8 shadow-xl border border-border w-full flex flex-col items-center justify-center space-y-6">
            <span className="material-symbols-outlined text-7xl text-primary">
              mail
            </span>
            <div className="space-y-3 text-center">
              <p className="font-mono text-sm text-muted-foreground">
                novaeslucas.tech<span className="text-primary">@</span>gmail.com
              </p>
              <div className="flex justify-center space-x-4">
                <span className="material-symbols-outlined text-2xl text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  chat
                </span>
                <span className="material-symbols-outlined text-2xl text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  handshake
                </span>
                <span className="material-symbols-outlined text-2xl text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  rocket_launch
                </span>
              </div>
            </div>
          </div>
        </RevealDiv>
      </div>
    </SectionReveal>
  );
}
