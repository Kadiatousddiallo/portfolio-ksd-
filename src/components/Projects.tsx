type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
};

const projects: Project[] = [
  {
    title: "SIGA Smart Reports",
    description:
      "Système de génération automatique de rapports intelligents à partir de données métier, avec tableaux de bord et export PDF.",
    technologies: ["Laravel", "PostgreSQL", "Angular", "Docker"],
    githubUrl: "https://github.com/Kadiatousddiallo/siga-smart-reports",
    demoUrl: "",
  },
  {
    title: "Gestion des accidents",
    description:
      "Application de gestion et de suivi des accidents : déclaration, historique, statistiques et notifications.",
    technologies: ["Spring Boot", "MySQL", "React"],
    githubUrl: "https://github.com/Kadiatousddiallo/gestion-accidents",
    demoUrl: "",
  },
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
              <div className="h-40 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-600 text-sm">
                Image du projet
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-xs text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 text-sm">
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
