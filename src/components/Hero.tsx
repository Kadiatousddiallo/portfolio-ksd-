export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black text-white">
      <div className="w-32 h-32 rounded-full bg-zinc-800 border-2 border-blue-500 mb-8 flex items-center justify-center text-4xl font-bold text-blue-500">
        KSD
      </div>

      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
        Kadiatou Sadio DIALLO
      </h1>

      <p className="text-lg sm:text-xl text-blue-400 font-medium mb-6">
        Software Engineer - Full Stack Developer - Data and Information Systems
      </p>

      <p className="max-w-2xl text-zinc-400 text-base sm:text-lg mb-10 leading-relaxed">
        Jeune diplomee en Genie Logiciel et Systemes d&apos;Information à l'école supérieur polytechnique de Dakar (ESP), passionnee
        par le developpement logiciel, les systemes d&apos;information, la
        conception d&apos;applications web et la valorisation des donnees.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a href="/cv.pdf" className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors font-medium">
          Telecharger mon CV
        </a>
        <a href="#contact" className="px-6 py-3 rounded-full border border-zinc-700 hover:border-blue-500 transition-colors font-medium">
          Me contacter
        </a>
      </div>
    </section>
  );
}
