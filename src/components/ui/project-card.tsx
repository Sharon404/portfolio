import Link from "next/link";

type ProjectCardProps = {
  title: string;
  summary: string;
  tag: string;
  href: string;
  ctaLabel?: string;
};

export function ProjectCard({
  title,
  summary,
  tag,
  href,
  ctaLabel = "Open",
}: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-2">
        {tag}
      </p>
      <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mb-5 text-sm text-text-soft">{summary}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-semibold text-accent underline-offset-4 hover:underline"
      >
        {ctaLabel}
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
