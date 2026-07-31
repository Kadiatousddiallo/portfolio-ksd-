type Diploma = {
  title: string;
  institution: string;
  year: string;
  description: string;
  fileUrl: string;
};

const diplomas: Diploma[] = [
  {
    title: "Baccalauréat Série Scientifique",
    institution: "Cours Privé Académia de Limamoulaye",
    year: "2025-2026",
    description:
      "Diplôme obtenu avec mention Passable, attestant de la réussite aux examens du baccalauréat dans la série scientifique.",
    fileUrl: "/diplomes/diplome-bac.pdf",
  },
  // Ajoute un nouveau diplôme en copiant un bloc { ... } ci-dessus
  {
    title: "Diplôme de Technicien Supérieur en Informatique",
    institution: "Ecole Supérieure Polytechnique de Dakar",
    year: "2023-2025",
    description:
      "Formation axée sur le développement logiciel, la conception de systèmes d'information, les bases de données et l'ingénierie web.",
    fileUrl: "/diplomes/diplome-dst.pdf",
  },
];

export default function Diplomas() {
  return (
    <section id="diplomas" className="py-24 px-6 bg-white dark:bg-black text-zinc-900 dark:text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Diplômes</h2>

        <div className="space-y-6">
          {diplomas.map((diploma) => (
            <div
              key={diploma.title}
              className="rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 p-6 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">
                  {diploma.title}
                </h3>
                <p className="text-zinc-500 text-sm mb-1">
                  {diploma.institution} · {diploma.year}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  {diploma.description}
                </p>
              </div>

              <div className="flex sm:flex-col gap-3 text-sm shrink-0">
                <a
                  href={diploma.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-blue-500 transition-colors text-center"
                >
                  Voir
                </a>
                <a
                  href={diploma.fileUrl}
                  download
                  className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-center text-white"
                >
                  Télécharger
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
