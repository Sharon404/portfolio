import { CodeProject } from "@/lib/types";

export const fallbackCodeProjects: CodeProject[] = [
  {
    id: "portfolio-platform",
    name: "Portfolio Platform",
    description:
      "A unified portfolio system that combines design case studies, media showcases, and GitHub repositories.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/your-username/portfolio-platform",
    liveUrl: "https://your-portfolio-domain.com",
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
    id: "design-token-kit",
    name: "Design Token Kit",
    description:
      "Cross-platform token generator for typography, spacing, and color system exports.",
    stack: ["Node.js", "TypeScript"],
    repoUrl: "https://github.com/your-username/design-token-kit",
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
