const stats = [
  { label: "Licence obtenue", value: "Génie Logiciel & SI" },
  { label: "Projets réalisés", value: "6+" },
  { label: "Stage effectué", value: "1" },
  { label: "Certifications", value: "3+" },
  { label: "Technologies maîtrisées", value: "12+" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <div className="w-full aspect-square max-w-sm mx-auto rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-600">
          Photo
        </div>

        {/* Texte */}
        <div>
          <h2 className="text-3xl font-bold mb-6">À propos</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Je suis Kadiatou Sadio Diallo, jeune diplômée en Licence Génie
            Logiciel et Systèmes d&apos;Information. Curieuse et rigoureuse,
            j&apos;aime transformer un besoin métier en une application
            fonctionnelle, propre et bien pensée — du modèle de données
            jusqu&apos;à l&apos;interface utilisateur.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Je recherche aujourd&apos;hui un stage, un premier emploi ou une
            poursuite en Master, pour continuer à apprendre au contact
            d&apos;équipes expérimentées.
          </p>
        </div>
      </div>

      {/* Statistiques */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 sm:grid-cols-5 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-center"
          >
            <p className="text-blue-400 font-bold text-lg">{stat.value}</p>
            <p className="text-zinc-500 text-xs mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}