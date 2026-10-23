const experiences = [
  {
    role: "Développeuse Web Full Stack",
    company: "Atech Cybersecurity",
    period: "Stage",
    date: "Mai 2025 - Juillet 2025",
    description:
      "Conception et réalisation d'une plateforme web permettant aux citoyens de signaler rapidement des accidents en transmettant leur localisation, des photos et une description aux services d'urgence afin d'améliorer leur temps d'intervention.",
    tasks: [
      "Développement d'une application web avec Laravel selon une architecture MVC.",
      "Conception et gestion de la base de données MySQL.",
      "Intégration de Google Maps API pour la géolocalisation.",
      "Mise en place d'un système d'envoi de notifications SMS avec Vonage.",
    ],
  },

  {
    role: "Développeuse Logicielle",
    company: "KGM Consulting",
    period: "Stage",
    date: "Mai 2026 - Juillet 2026",
    description:
      "Participation au développement d'une plateforme de reporting décisionnel pour le projet SIGA (Système Intégré de Gestion de l'Assainissement), visant à centraliser les données et faciliter la prise de décision grâce à des analyses intelligentes.",
    tasks: [
      "Conception d'un Data Warehouse pour centraliser les données décisionnelles.",
      "Développement des processus ETL avec Laravel pour l'extraction, la transformation et le chargement des données.",
      "Conception de tableaux de bord interactifs avec Angular.",
      "Participation à l'intégration d'une solution d'intelligence artificielle pour la génération automatique de rapports.",
      "Collaboration au développement et au déploiement de l'application avec Docker et Git.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-white dark:bg-black text-zinc-900 dark:text-white"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Expérience professionnelle
        </h2>

        <div className="relative border-l border-zinc-300 dark:border-zinc-800 pl-8 space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.role + exp.company}
              className="relative"
            >
              <span className="absolute -left-[35px] top-1 w-3 h-3 rounded-full bg-blue-500" />

              <p className="text-blue-500 text-sm font-medium mb-1">
                {exp.period} · {exp.date}
              </p>

              <h3 className="text-xl font-semibold mb-1">
                {exp.role}
              </h3>

              <p className="text-zinc-500 text-sm mb-3">
                {exp.company}
              </p>

              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                {exp.description}
              </p>

              {exp.tasks && exp.tasks.length > 0 && (
                <ul className="space-y-2">
                  {exp.tasks.map((task) => (
                    <li
                      key={task}
                      className="
                        text-zinc-600 
                        dark:text-zinc-400 
                        text-sm 
                        leading-relaxed 
                        pl-4 
                        relative
                        before:content-['•']
                        before:absolute
                        before:left-0
                        before:text-blue-500
                      "
                    >
                      {task}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}