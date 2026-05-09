type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="mb-6 flex flex-col gap-3">
      {kicker ? (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {kicker}
        </p>
      ) : null}
      <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {description ? <p className="max-w-2xl text-text-soft">{description}</p> : null}
    </header>
  );
}
