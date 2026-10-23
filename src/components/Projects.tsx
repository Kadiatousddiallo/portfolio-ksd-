import Image from "next/image";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
};

const projects: Project[] = [
  {
    title: "SIGA Smart Reports",
    description:
      "Plateforme de reporting décisionnel : génération automatique de rapports intelligents, tableaux de bord interactifs et export PDF.",
    technologies: ["Laravel", "PostgreSQL", "Angular", "Docker"],
    imageUrl: "/images/projects/siga.png",
    githubUrl: "https://github.com/ton-pseudo/siga-smart-reports",
    demoUrl: "https://lien-de-ta-demo.com",
  },
  {
    title: "Gestion des accidents",
    description:
      "Plateforme web permettant aux citoyens de signaler des accidents avec leur localisation, des photos et une description.",
    technologies: ["Laravel", "MySQL", "Google Maps API", "Vonage"],
    imageUrl: "/images/projects/accidents.png",
    githubUrl: "https://github.com/ton-pseudo/gestion-accidents",
    demoUrl: "",
  },
  // Ajoute un nouveau projet en copiant un bloc { ... } ci-dessus
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-black text-zinc-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projets</h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 overflow-hidden flex flex-col"
            >
              {/* Image d'aperçu du projet */}
              <div className="relative h-48 bg-zinc-200 dark:bg-zinc-800">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={`Aperçu du projet ${project.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center text-zinc-500 dark:text-zinc-600 text-sm">
                    Aperçu bientôt disponible
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-xs text-blue-500 dark:text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-sm">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-700 dark:text-zinc-300 hover:text-blue-400 transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-700 dark:text-zinc-300 hover:text-blue-400 transition-colors"
                    >
                      Démo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
