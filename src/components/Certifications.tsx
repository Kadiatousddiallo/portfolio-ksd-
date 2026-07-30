type Certification = {
  name: string;
  organization: string;
  date: string;
  fileUrl: string;
};

const certifications: Certification[] = [
  {
    name: "Introduction à Docker",
    organization: "Coursera",
    date: "2024",
    fileUrl: "/certifications/docker.pdf",
  },
  {
    name: "Fondamentaux Angular",
    organization: "OpenClassrooms",
    date: "2024",
    fileUrl: "/certifications/angular.pdf",
  },
  {
    name: "Bases de données PostgreSQL",
    organization: "Udemy",
    date: "2023",
    fileUrl: "/certifications/postgresql.pdf",
  },
  // Ajoute une nouvelle certification en copiant un bloc { ... } ci-dessus
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-white dark:bg-black text-zinc-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Certifications
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 overflow-hidden flex flex-col"
            >
              <div className="h-32 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-600 text-sm">
                Aperçu
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold mb-1">{cert.name}</h3>
                <p className="text-zinc-500 text-sm mb-1">
                  {cert.organization}
                </p>
                <p className="text-blue-400 text-xs mb-4">{cert.date}</p>

                <div className="flex gap-3 text-sm mt-auto">
                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-700 dark:text-zinc-300 hover:text-blue-400 transition-colors"
                  >
                    Voir
                  </a>
                  <a
                    href={cert.fileUrl}
                    download
                    className="text-zinc-700 dark:text-zinc-300 hover:text-blue-400 transition-colors"
                  >
                    Télécharger
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
