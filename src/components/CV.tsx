"use client";

import { useState } from "react";

const cvVersions = {
  fr: { label: "Français", fileUrl: "/cv/cv-fr.pdf" },
  en: { label: "English", fileUrl: "/cv/cv-en.pdf" },
};

export default function CV() {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const currentCv = cvVersions[lang];

  return (
    <section id="cv" className="py-24 px-6 bg-white dark:bg-black text-zinc-900 dark:text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Mon CV</h2>

        {/* Sélecteur de langue */}
        <div className="flex justify-center gap-3 mb-8">
          {Object.entries(cvVersions).map(([key, version]) => (
            <button
              key={key}
              onClick={() => setLang(key as "fr" | "en")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                lang === key
                  ? "bg-blue-600 text-white"
                  : "border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-blue-500"
              }`}
            >
              {version.label}
            </button>
          ))}
        </div>

        {/* Carte d'aperçu */}
        <div className="rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 overflow-hidden">
          <iframe
            src={currentCv.fileUrl}
            className="w-full h-[500px] bg-zinc-50 dark:bg-zinc-950"
            title="Aperçu du CV"
          />

          <div className="p-5 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={currentCv.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-blue-500 transition-colors text-center text-sm font-medium"
            >
              Ouvrir en plein écran
            </a>
            <a
              href={currentCv.fileUrl}
              download
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-center text-sm font-medium text-white"
            >
              Télécharger le CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
