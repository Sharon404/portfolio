import { Metadata } from "next";
import { OptimizedImage } from "@/components/media/optimized-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { getCodeProjects } from "@/lib/github";

export const metadata: Metadata = {
  title: "Code Projects | Creative Portfolio",
  description: "All GitHub repositories with featured projects highlighted for recruiters.",
};

export default async function CodePage() {
  const projects = await getCodeProjects();
  const topProjects = projects.filter((project) => project.featured);
  const additionalProjects = projects.filter((project) => !project.featured);

  const renderProjectCard = (project: (typeof projects)[number]) => (
    <article key={project.id} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
      <OptimizedImage asset={project.screenshot} className="h-44 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="mt-2 text-sm text-text-soft">{project.description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={`${project.id}-${item}`}
              className="rounded-full border border-black/10 px-3 py-1 text-xs"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-accent hover:underline"
          >
            Repository
          </a>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-accent-2 hover:underline"
            >
              Live Demo
            </a>
          ) : null}
        </div>

        {project.source === "github-api" ? (
          <p className="mt-3 text-xs text-text-soft">
            Stars {project.stars ?? 0} · Forks {project.forks ?? 0} · Updated {project.updatedAt?.slice(0, 10)}
          </p>
        ) : null}
      </div>
    </article>
  );

  return (
    <SectionShell>
      <SectionHeading
        kicker="Code Projects"
        title="Featured repositories first, then full GitHub catalog"
        description="All non-archived, non-fork repositories are pulled from GitHub. Featured projects stay on top and every card links to its repository."
      />

      <div className="space-y-3">
        <h3 className="font-display text-xl font-semibold">Top Projects</h3>
        <div className="grid gap-4 md:grid-cols-2">{topProjects.map(renderProjectCard)}</div>
      </div>

      {additionalProjects.length ? (
        <div className="mt-8 space-y-3">
          <h3 className="font-display text-xl font-semibold">More Projects</h3>
          <div className="grid gap-4 md:grid-cols-2">{additionalProjects.map(renderProjectCard)}</div>
        </div>
      ) : null}
    </SectionShell>
  );
}
