type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
};

const projects: Project[] = [

  {
    title: "Gestion des BOUTIQUES - 2026",
    description:
      "Apllication de gestion des boutiques avec fonctionnalités de suivi des ventes, inventaire et rapports détaillés téléchargés.",
    technologies: ["Laravel", "PostgreSQL", "Angular", "Docker", "Laravel", "PHP", "Angular", "PostgreSQL", "Docker", "Docker Compose", "Chart.js", "Leaflet", "Git", "GitHub", "REST API", "Data Warehouse", "ETL", "IA"],
    githubUrl: "https://github.com/Kadiatousddiallo/siga-smart-reports",
    demoUrl: "/projet/boutique/demo.mp4",
    imageUrl: "/projet/boutique/apercu.png",
  },
  {
    title: "SIGA Smart Reports - 2026",
    description:
      "Système de génération automatique de rapports intelligents à partir de données métier, avec tableaux de bord et export PDF.",
    technologies: ["Laravel", "PostgreSQL", "Angular", "Docker", "Laravel", "PHP", "Angular", "PostgreSQL", "Docker", "Docker Compose", "Chart.js", "Leaflet", "Git", "GitHub", "REST API", "Data Warehouse", "ETL", "IA"],
    githubUrl: "https://github.com/Kadiatousddiallo/siga-smart-reports",
    demoUrl: "/projet/siga/demo.mp4",
    imageUrl: "/projet/siga/apercu.png",
  },
  {
    title: "Gestion des accidents - 2025",
    description:
      "Application de gestion et de suivi des accidents : déclaration, historique, statistiques et notifications.",
    technologies: [
  "Astah UML",
  "HTML5",
  "JavaScript",
  "CSS3",
  "Vonage",
  "XAMPP",
  "Google Maps API",
  "MySQL",
  "Visual Studio Code",
  "Laravel"
],
    githubUrl: "https://github.com/Kadiatousddiallo/gestion-accidents",
    demoUrl: "/projet/accidents/demo.mp4",
    imageUrl: "/projet/accidents/apercu.png",
  },

  {
    title: "ATP Finals - 2024",
    description:
      "Suivez les dernières informations de vos joueurs préférés. Consultez le classements, la programmation des matchs et bien plus encore",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Xampp",],
    githubUrl: "https://github.com/Kadiatousddiallo/atp-finals",
    // demoUrl: "/projet/atp/demo.jpg",
    imageUrl: "/projet/atp/apercu.png",
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
              {project.imageUrl ? (
                <div className="h-40 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-600 text-sm">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-40 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-600 text-sm">
                  Image du projet
                </div>
              )}

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
