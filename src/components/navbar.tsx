"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [sheetOpen, setSheetOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold font-mono tracking-tight text-primary hover:opacity-80 transition-opacity"
          aria-label="Ir para o topo"
        >
          &lt;/&gt;
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right-side controls */}
        <div className="flex items-center space-x-3 md:space-x-4">
          {/* Language toggle (visual only) */}
          <button
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            aria-label="Alternar idioma"
          >
            <span className="font-bold text-primary">PT</span>
            <span className="mx-0.5 opacity-50">|</span>
            <span>EN</span>
          </button>

          {/* Dark/Light mode toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Alternar modo escuro/claro"
            className="rounded-full"
          >
            <span className="material-symbols-outlined text-xl">
              {mounted ? (isDark ? "light_mode" : "dark_mode") : ""}
            </span>
          </Button>

          {/* Mobile menu (Sheet) */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Abrir menu principal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14" aria-hidden="true">
                  <path
                    d="M1 1h15M1 7h15M1 13h15"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetTitle className="text-lg font-bold font-mono text-primary mb-6">
                &lt;/&gt;
              </SheetTitle>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setSheetOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
