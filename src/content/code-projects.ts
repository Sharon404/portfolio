import { CodeProject } from "@/lib/types";

export const fallbackCodeProjects: CodeProject[] = [
  {
    id: "grainshare",
    name: "Grainshare",
    description:
      "Core project from my GitHub portfolio, included as a curated fallback item.",
    stack: ["JavaScript", "TypeScript"],
    repoUrl: "https://github.com/Sharon404/Grainshare",
    screenshot: {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80&auto=format&fit=crop",
      alt: "Code editor and terminal on laptop screen",
      width: 1200,
      height: 800,
    },
    featured: true,
    source: "manual",
  },
  {
    id: "portfolio-site",
    name: "Portfolio",
    description:
      "Portfolio application source code hosted on GitHub.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/Sharon404/portfolio",
    screenshot: {
      src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80&auto=format&fit=crop",
      alt: "Developer terminal with automation scripts",
      width: 1200,
      height: 800,
    },
    featured: true,
    source: "manual",
  },
];
