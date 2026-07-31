const CV_URL = "/cv/cv-fr.pdf";

export default function CV() {
  return (
    <section id="cv" className="py-24 px-6 bg-white dark:bg-black text-zinc-900 dark:text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Mon CV</h2>

        {/* Carte d'aperçu */}
        <div className="rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 overflow-hidden">
          <iframe
            src={CV_URL}
            className="w-full h-[500px] bg-zinc-50 dark:bg-zinc-950"
            title="Aperçu du CV"
          />

          <div className="p-5 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-blue-500 transition-colors text-center text-sm font-medium"
            >
              Ouvrir en plein écran
            </a>
            <a
              href={CV_URL}
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
