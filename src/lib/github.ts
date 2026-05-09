import { fallbackCodeProjects } from "@/content/code-projects";
import { CodeProject } from "@/lib/types";

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
};

const DEFAULT_USER = process.env.GITHUB_USERNAME ?? "your-username";

export async function getCodeProjects(): Promise<CodeProject[]> {
  const user = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!user || !token || user === DEFAULT_USER) {
    return fallbackCodeProjects;
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${user}/repos?sort=updated&per_page=12`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
        },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return fallbackCodeProjects;
    }

    const repos = (await response.json()) as GitHubRepo[];
    const normalized = repos
      .filter((repo) => !repo.name.toLowerCase().includes("config"))
      .slice(0, 8)
      .map<CodeProject>((repo) => ({
        id: String(repo.id),
        name: repo.name,
        description: repo.description ?? "No description provided.",
        stack: repo.language ? [repo.language] : ["Multiple"],
        repoUrl: repo.html_url,
        liveUrl: repo.homepage ?? undefined,
        screenshot: {
          src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80&auto=format&fit=crop",
          alt: "Code workspace screenshot placeholder",
          width: 1200,
          height: 800,
        },
        featured: repo.stargazers_count > 0,
        source: "github-api",
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        primaryLanguage: repo.language ?? undefined,
        updatedAt: repo.updated_at,
      }));

    return normalized.length ? normalized : fallbackCodeProjects;
  } catch {
    return fallbackCodeProjects;
  }
}
