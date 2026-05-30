import { Metadata } from "next";
import Link from "next/link";
import { OptimizedImage } from "@/components/media/optimized-image";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { designProjects } from "@/content/design-projects";
import { getCodeProjects } from "@/lib/github";

export const metadata: Metadata = {
  title: "Home | Creative Portfolio",
  description:
    "Unified portfolio homepage featuring design work, video showcases, and GitHub projects.",
};

export default async function Home() {
  const codeProjects = await getCodeProjects();
  const featuredDesign = designProjects.filter((project) => project.featured).slice(0, 2);
  const preferredCodeNames = ["grainshare", "sacco management system"];
  const preferredCode = codeProjects.filter((project) =>
    preferredCodeNames.includes(project.name.toLowerCase()),
  );
  const fallbackCode = codeProjects.filter((project) => project.featured);
  const featuredCode = [...preferredCode, ...fallbackCode]
    .filter(
      (project, index, all) =>
        all.findIndex((candidate) => candidate.id === project.id) === index,
    )
    .slice(0, 2);

  return (
    <>
      <Reveal>
        <SectionShell>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-accent">
            Creative Engineer Portfolio
          </p>
          <h1 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-6xl">
            One destination for design, motion, and production-ready code.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-text-soft sm:mt-5 sm:text-lg">
            This portfolio unifies Canva and Figma work, video showcases, and GitHub
            engineering projects into a single hiring-ready narrative.
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-3">
            <Link
              href="/design"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-accent/90"
            >
              Explore Design Work
            </Link>
            <Link
              href="/code"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:border-accent/50"
            >
              Explore Code Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:border-accent-2/50"
            >
              Contact
            </Link>
          </div>
        </SectionShell>
      </Reveal>

      <SectionShell>
        <SectionHeading
          kicker="Featured"
          title="Design Highlights"
          description="Selected work spanning brand systems, interfaces, and campaign motion assets."
        />
        <StaggerGrid className="grid gap-4 md:grid-cols-2">
          {featuredDesign.map((project) => (
            <article key={project.id} className="rounded-2xl border border-black/10 bg-white p-5">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-accent-2">
                {project.category}
              </p>
              <h3 className="text-lg font-semibold sm:text-xl">{project.title}</h3>
              <p className="mt-2 text-sm text-text-soft">{project.outcome}</p>
            </article>
          ))}
        </StaggerGrid>
      </SectionShell>

      <SectionShell>
        <SectionHeading
          kicker="Featured"
          title="Code Highlights"
          description="Grainshare and Sacco Management showcased with live screenshots, repository links, and demos."
        />
        <StaggerGrid className="grid gap-4 md:grid-cols-2">
          {featuredCode.map((project) => (
            <article key={project.id} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
              <OptimizedImage
                asset={project.screenshot}
                className="h-40 w-full object-cover sm:h-48"
                priority
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold sm:text-xl">{project.name}</h3>
                <p className="mt-2 text-sm text-text-soft">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.slice(0, 3).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 px-3 py-1 text-xs"
                  >
                    {item}
                  </span>
                ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-4 text-sm">
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
              </div>
            </article>
          ))}
        </StaggerGrid>
      </SectionShell>
    </>
  );
}
