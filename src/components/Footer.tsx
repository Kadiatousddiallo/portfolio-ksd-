"use client";

import { ArrowUp } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";

const quickLinks = [
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="border-t border-zinc-300 dark:border-zinc-800 bg-white dark:bg-black text-zinc-900 dark:text-white py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Copyright dynamique */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © {currentYear} Kadiatou Sadio Diallo. Tous droits réservés.
        </p>

        {/* Liens rapides */}
        <div className="flex gap-5">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Réseaux sociaux */}
        <SocialLinks />

        {/* Retour en haut */}
        <button
          onClick={scrollToTop}
          aria-label="Retour en haut"
          className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-blue-500 transition-colors"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
