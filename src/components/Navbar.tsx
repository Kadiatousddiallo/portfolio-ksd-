"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Accueil", href: "#" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Expérience", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Diplômes", href: "#diplomas" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-zinc-300 dark:border-zinc-800">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold text-zinc-900 dark:text-white">
          K. Sadio Diallo
        </a>

        {/* Liens - visibles seulement sur grand écran */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Bouton hamburger + bascule thème - visibles seulement sur mobile */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-900 dark:text-white"
            aria-label="Ouvrir le menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Menu déroulant mobile - affiché seulement si isOpen est vrai */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-white dark:bg-black border-t border-zinc-300 dark:border-zinc-800 px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
