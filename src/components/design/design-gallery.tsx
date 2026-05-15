"use client";

import { useEffect, useMemo, useState } from "react";
import { OptimizedImage } from "@/components/media/optimized-image";
import { FilterChip } from "@/components/ui/filter-chip";
import { ImageAsset } from "@/lib/media";
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
  const [activeImage, setActiveImage] = useState<ImageAsset | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeImage]);

  return (
    <>
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
              <button
                type="button"
                onClick={() => setActiveImage(project.thumbnail)}
                className="block w-full text-left"
                aria-label={`Open ${project.title} cover image`}
              >
                <OptimizedImage
                  asset={project.thumbnail}
                  className="h-48 w-full object-cover"
                  priority={project.featured}
                />
              </button>
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
                      <button
                        type="button"
                        key={`${project.id}-gallery-${index}`}
                        onClick={() => setActiveImage(asset)}
                        aria-label={`Open ${project.title} gallery image ${index + 1}`}
                        className="block"
                      >
                        <OptimizedImage
                          asset={asset}
                          className="h-20 w-full rounded-md object-cover"
                        />
                      </button>
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

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
        >
          <div className="w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <OptimizedImage
              asset={activeImage}
              className="max-h-[90vh] w-full rounded-xl object-contain"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
