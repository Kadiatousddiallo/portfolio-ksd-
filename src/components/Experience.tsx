const experiences = [
  {
    role: "Développeuse Logicielle",
    company: "KGM Consulting",
    period: "Stage",
    description:
      "Participation au développement d'applications web, conception de bases de données et collaboration avec l'équipe technique sur des fonctionnalités en Laravel et Angular.",
  },
  // Tu pourras ajouter une nouvelle expérience ici plus tard,
  // en copiant ce bloc entre { } et en changeant les valeurs.
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-black text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Expérience professionnelle
        </h2>

        <div className="relative border-l border-zinc-800 pl-8 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.role + exp.company} className="relative">
              {/* Le petit point sur la ligne verticale */}
              <span className="absolute -left-[35px] top-1 w-3 h-3 rounded-full bg-blue-500" />

              <p className="text-blue-400 text-sm font-medium mb-1">
                {exp.period}
              </p>
              <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
              <p className="text-zinc-500 text-sm mb-3">{exp.company}</p>
              <p className="text-zinc-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}