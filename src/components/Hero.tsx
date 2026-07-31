import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white dark:bg-black text-zinc-900 dark:text-white">
      {/* Photo de profil */}
      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-blue-500 mb-8 relative">
        <Image
          src="/images/profile.jpg"
          alt="Photo de Kadiatou Sadio Diallo"
          fill
          sizes="128px"
          className="object-cover"
          priority
        />
      </div>

      {/* Nom complet */}
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
        Kadiatou Sadio Diallo
      </h1>

      {/* Sous-titre */}
      <p className="text-lg sm:text-xl text-blue-400 font-medium mb-6">
        Software Engineer · Full Stack Developer · Data & Information Systems
      </p>

      {/* Description */}
      <p className="max-w-2xl text-zinc-600 dark:text-zinc-400 text-base sm:text-lg mb-10 leading-relaxed">
        Jeune diplômée en Génie Logiciel et Systèmes d&apos;Information, passionnée
        par le développement logiciel, les systèmes d&apos;information, la
        conception d&apos;applications web et la valorisation des données.
      </p>

      {/* Boutons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/cv/cv-fr.pdf"
          className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors font-medium text-white"
        >
          Télécharger mon CV
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-blue-500 transition-colors font-medium"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}
