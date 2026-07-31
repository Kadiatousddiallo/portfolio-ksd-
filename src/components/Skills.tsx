const skillCategories = [
  {
    title: "Langages",
    items: ["Java", "PHP", "JavaScript", "TypeScript", "SQL", "HTML", "CSS", "XML", "C"],
  },
  {
    title: "Frameworks",
    items: ["Laravel", "Angular", "Spring Boot", "Next.js"],
  },
  {
    title: "Bases de données",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Outils",
    items: ["Git", "GitHub", "Docker", "Docker Compose", "Postman", "VS Code", "Linux", "Cisco Packet Tracer", "VirtualBox", "XAMPP", "MS Project", "Figma", "Trello"],
  },
   {
    title: "Modélisation et conception",
    items: ["UML (cas d’utilisation, classes, objets, séquence)", "Merise (MCD, MLD, MPD)", "Conception orientée objet", "Design Patterns"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-black text-zinc-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">COMPÉTENCES</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 p-6">
              <h3 className="text-blue-400 font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-sm text-zinc-700 dark:text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
