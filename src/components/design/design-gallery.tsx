"use client";

import { useMemo, useState } from "react";
import { OptimizedImage } from "@/components/media/optimized-image";
import { FilterChip } from "@/components/ui/filter-chip";
import { DesignProject } from "@/lib/types";

const categoryOptions: Array<DesignProject["category"] | "all"> = [
  "all",
  "branding",
  "ui",
  "social",
  "motion",
  "print",
];

type DesignGalleryProps = {
  projects: DesignProject[];
};

export function DesignGallery({ projects }: DesignGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<(typeof categoryOptions)[number]>("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {categoryOptions.map((category) => (
          <FilterChip
            key={category}
            label={category.toUpperCase()}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          />
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <article key={project.id} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
            <OptimizedImage
              asset={project.thumbnail}
              className="h-48 w-full object-cover"
              priority={project.featured}
            />
            <div className="p-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">
                {project.category}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-text-soft">{project.outcome}</p>
              <p className="mt-3 text-xs text-text-soft">Tools: {project.tools.join(", ")}</p>

              {project.gallery.length ? (
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {project.gallery.map((asset, index) => (
                    <OptimizedImage
                      key={`${project.id}-gallery-${index}`}
                      asset={asset}
                      className="h-20 w-full rounded-md object-cover"
                    />
                  ))}
                </div>
              ) : null}

              {project.externalLink ? (
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-accent hover:underline"
                >
                  Live Preview
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
