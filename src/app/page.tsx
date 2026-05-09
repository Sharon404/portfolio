import { Metadata } from "next";
import Link from "next/link";
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
  const featuredCode = codeProjects.filter((project) => project.featured).slice(0, 2);

  return (
    <>
      <Reveal>
        <SectionShell>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-accent">
            Creative Engineer Portfolio
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            One destination for design, motion, and production-ready code.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-text-soft">
            This portfolio unifies Canva and Figma work, video showcases, and GitHub
            engineering projects into a single hiring-ready narrative.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/design"
              className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-accent/90"
            >
              Explore Design Work
            </Link>
            <Link
              href="/code"
              className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:border-accent/50"
            >
              Explore Code Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:border-accent-2/50"
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
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-text-soft">{project.outcome}</p>
            </article>
          ))}
        </StaggerGrid>
      </SectionShell>

      <SectionShell>
        <SectionHeading
          kicker="Featured"
          title="Code Highlights"
          description="Recent projects with direct access to repositories and live links where available."
        />
        <StaggerGrid className="grid gap-4 md:grid-cols-2">
          {featuredCode.map((project) => (
            <article key={project.id} className="rounded-2xl border border-black/10 bg-white p-5">
              <h3 className="text-xl font-semibold">{project.name}</h3>
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
            </article>
          ))}
        </StaggerGrid>
      </SectionShell>
    </>
  );
}
