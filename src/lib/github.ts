import { fallbackCodeProjects } from "@/content/code-projects";
import { repoOverrides } from "@/content/repo-overrides";
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
  size: number;
  archived: boolean;
  fork: boolean;
  topics: string[];
  updated_at: string;
};

const FALLBACK_GITHUB_USER = "Sharon404";
const DEFAULT_USER = "your-username";

const BEGINNER_KEYWORDS = [
  "tutorial",
  "practice",
  "learning",
  "sandbox",
  "test",
  "hello-world",
  "first",
  "sample",
  "playground",
  "exercise",
  "bootcamp",
  "assignment",
  "classwork",
  "demo",
];

function parseCsvEnv(value: string | undefined): string[] {
  if (!value) {
    return [];
  }

  return value
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

function looksLikeSimpleProject(repo: GitHubRepo): boolean {
  const text = `${repo.name} ${repo.description ?? ""}`.toLowerCase();
  const hasBeginnerKeyword = BEGINNER_KEYWORDS.some((keyword) => text.includes(keyword));
  const isVerySmall = repo.size < 100;
  const hasNoSignal = repo.stargazers_count === 0 && repo.forks_count === 0;

  return hasBeginnerKeyword && isVerySmall && hasNoSignal;
}

function scoreRepository(repo: GitHubRepo): number {
  const descriptionLength = repo.description?.length ?? 0;
  const topicScore = Math.min((repo.topics ?? []).length, 6) * 2;
  const hasHomepage = repo.homepage ? 5 : 0;
  const hasGoodDescription = descriptionLength >= 45 ? 6 : descriptionLength >= 20 ? 3 : 0;

  return (
    repo.stargazers_count * 5 +
    repo.forks_count * 3 +
    topicScore +
    hasHomepage +
    hasGoodDescription +
    Math.min(repo.size / 200, 8)
  );
}

function getOverride(repoName: string) {
  return repoOverrides[repoName.toLowerCase()];
}

export async function getCodeProjects(): Promise<CodeProject[]> {
  const configuredUser = process.env.GITHUB_USERNAME;
  const user =
    !configuredUser || configuredUser === DEFAULT_USER
      ? FALLBACK_GITHUB_USER
      : configuredUser;
  const token = process.env.GITHUB_TOKEN;
  const forcedTop = parseCsvEnv(process.env.GITHUB_TOP_PROJECTS);
  const excluded = parseCsvEnv(process.env.GITHUB_EXCLUDE_PROJECTS);

  if (!user) {
    return fallbackCodeProjects;
  }

  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${user}/repos?sort=updated&per_page=100&type=owner`,
      {
        headers,
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return fallbackCodeProjects;
    }

    const repos = (await response.json()) as GitHubRepo[];
    const curated = repos
      .filter((repo) => !repo.archived)
      .filter((repo) => !repo.fork)
      .filter((repo) => !getOverride(repo.name)?.hide)
      .filter((repo) => !excluded.includes(repo.name.toLowerCase()))
      .filter((repo) => !repo.name.toLowerCase().includes("config"))
      .filter((repo) => !looksLikeSimpleProject(repo))
      .sort((a, b) => {
        const aForced = forcedTop.includes(a.name.toLowerCase()) ? 1 : 0;
        const bForced = forcedTop.includes(b.name.toLowerCase()) ? 1 : 0;
        const aOverride = getOverride(a.name)?.forceTop ? 1 : 0;
        const bOverride = getOverride(b.name)?.forceTop ? 1 : 0;

        if (aOverride !== bOverride) {
          return bOverride - aOverride;
        }

        if (aForced !== bForced) {
          return bForced - aForced;
        }

        return scoreRepository(b) - scoreRepository(a);
      })
      .slice(0, 9);

    const normalized = curated
      .map<CodeProject>((repo) => ({
        ...(() => {
          const override = getOverride(repo.name);
          return {
            name: override?.displayName ?? repo.name,
            description: override?.description ?? repo.description ?? "No description provided.",
            liveUrl: override?.liveUrl ?? repo.homepage ?? undefined,
            screenshot:
              override?.screenshot ??
              {
                src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80&auto=format&fit=crop",
                alt: "Code workspace screenshot placeholder",
                width: 1200,
                height: 800,
              },
            featured: override?.forceTop ?? false,
          };
        })(),
        id: String(repo.id),
        stack: repo.language ? [repo.language] : ["Multiple"],
        repoUrl: repo.html_url,
        source: "github-api",
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        primaryLanguage: repo.language ?? undefined,
        updatedAt: repo.updated_at,
      }));

    const featuredIds = new Set(
      normalized
        .filter((project) => project.featured)
        .map((project) => project.id),
    );
    normalized.slice(0, 6).forEach((project) => featuredIds.add(project.id));
    const withFeatured = normalized.map((project) => ({
      ...project,
      featured: featuredIds.has(project.id),
    }));

    return withFeatured.length ? withFeatured : fallbackCodeProjects;
  } catch {
    return fallbackCodeProjects;
  }
}
