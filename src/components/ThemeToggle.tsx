"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Le thème réel n'est connu qu'une fois le composant chargé côté navigateur
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Évite un décalage visuel pendant la fraction de seconde où le thème n'est pas encore connu
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Changer de thème"
      className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-blue-500 transition-colors"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
