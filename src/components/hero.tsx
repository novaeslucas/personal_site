"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Hero() {
  return (
    <motion.section
      id="hero"
      className="min-h-[80vh] flex flex-col justify-center items-center text-center pt-32 pb-16 space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Avatar */}
      <motion.div variants={childVariants}>
        <div className="inline-block p-1 rounded-full bg-gradient-to-tr from-primary to-purple-500">
          <Image
            src="/profile_image.png"
            alt="Lucas — Desenvolvedor de Software"
            width={256}
            height={256}
            priority
            className="rounded-full w-32 h-32 border-4 border-background object-cover"
          />
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        variants={childVariants}
        className="text-5xl md:text-7xl font-bold tracking-tight"
      >
        Olá, eu sou <span className="text-primary">Lucas</span>
        <span className="cursor-blink" />
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={childVariants}
        className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl"
      >
        Desenvolvedor de Software
      </motion.p>

      {/* Description */}
      <motion.p
        variants={childVariants}
        className="text-base text-muted-foreground max-w-lg leading-relaxed"
      >
        Especialista em construir soluções robustas e escaláveis.
        <br />
        Atualmente contribuindo para a modernização tecnológica no TCM-BA.
      </motion.p>

      {/* CTAs */}
      <motion.div variants={childVariants} className="pt-4 flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="shadow-lg shadow-primary/30">
          <a href="#contact">Entrar em contato</a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="#projects">Ver portfólio</a>
        </Button>
      </motion.div>
    </motion.section>
  );
}
