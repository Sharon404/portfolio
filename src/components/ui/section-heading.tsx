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
    <header className="mb-5 flex flex-col gap-2 sm:mb-6 sm:gap-3">
      {kicker ? (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {kicker}
        </p>
      ) : null}
      <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {description ? <p className="max-w-2xl text-sm text-text-soft sm:text-base">{description}</p> : null}
    </header>
  );
}
