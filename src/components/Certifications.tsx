type Certification = {
  name: string;
  organization: string;
  date: string;
  fileUrl: string;
};

const certifications: Certification[] = [
  {
    name: "Certificat D'accomplissement Les fondements de la gestion de projet agile",
    organization: "Linkedin Learning",
    date: "2026",
    fileUrl: "/certifications/agile.pdf",
  },
  {
    name: "Certificat D'accomplissement Les fondements de la sécurité informatique et de la cybersécurité",
    organization: "Linkedin Learning",
    date: "2026",
    fileUrl: "/certifications/cybersecurity.pdf",
  },
  {
    name: "Certificat D'accomplissement Les fondements de la gestion de projet",
    organization: "Udemy",
    date: "2026",
    fileUrl: "/certifications/gestion-projet.pdf",
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
              {/* Aperçu réel du PDF (première page) */}
              <div className="relative h-48 bg-zinc-200 dark:bg-zinc-800">
                <iframe
                  src={`${cert.fileUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  title={`Aperçu : ${cert.name}`}
                  className="w-full h-full pointer-events-none"
                />
                {/* Couche transparente cliquable par-dessus l'aperçu */}
                <a
                  href={cert.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ouvrir ${cert.name}`}
                  className="absolute inset-0"
                />
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
                  {/* <a
                    href={cert.fileUrl}
                    download
                    className="text-zinc-700 dark:text-zinc-300 hover:text-blue-400 transition-colors"
                  >
                    Télécharger
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
