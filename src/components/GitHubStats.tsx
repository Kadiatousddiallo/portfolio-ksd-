import { Star, GitFork, Users, BookMarked } from "lucide-react";

const GITHUB_USERNAME = "Kadiatousddiallo"; // ⚠️ remplace par ton vrai pseudo GitHub

type GithubUser = {
  public_repos: number;
  followers: number;
  following: number;
};

type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

async function getGithubUser(): Promise<GithubUser | null> {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
    next: { revalidate: 3600 }, // recharge les données au maximum 1 fois par heure
  });
  if (!res.ok) return null;
  return res.json();
}

async function getGithubRepos(): Promise<GithubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) return [];
  const repos: GithubRepo[] = await res.json();
  return repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 4);
}

export default async function GitHubStats() {
  const [user, repos] = await Promise.all([getGithubUser(), getGithubRepos()]);

  if (!user) {
    return (
      <section className="py-24 px-6 bg-white dark:bg-black text-zinc-900 dark:text-white">
        <div className="max-w-3xl mx-auto text-center text-zinc-500">
          Impossible de charger les données GitHub pour le moment.
        </div>
      </section>
    );
  }

  const stats = [
    { icon: BookMarked, label: "Dépôts publics", value: user.public_repos },
    { icon: Users, label: "Abonnés", value: user.followers },
    { icon: Users, label: "Abonnements", value: user.following },
  ];

  return (
    <section id="github" className="py-24 px-6 bg-white dark:bg-black text-zinc-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">GitHub</h2>
        <p className="text-center mb-12">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            @{GITHUB_USERNAME}
          </a>
        </p>

        {/* Statistiques */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 p-4 text-center"
              >
                <Icon size={18} className="mx-auto mb-2 text-blue-400" />
                <p className="font-bold text-lg">{stat.value}</p>
                <p className="text-zinc-500 text-xs mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Dépôts populaires */}
        <div className="grid sm:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 p-6 hover:border-blue-500 transition-colors"
            >
              <h3 className="font-semibold mb-2">{repo.name}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2">
                {repo.description ?? "Pas de description."}
              </p>
              <div className="flex items-center gap-4 text-xs text-zinc-500">
                {repo.language && <span>{repo.language}</span>}
                <span className="flex items-center gap-1">
                  <Star size={12} /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={12} /> {repo.forks_count}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
