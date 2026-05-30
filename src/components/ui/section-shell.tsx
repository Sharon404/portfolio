import { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function SectionShell({ id, className, children }: SectionShellProps) {
  return (
    <section
      id={id}
      className={`w-full rounded-2xl border border-black/10 bg-surface px-4 py-6 sm:rounded-3xl sm:px-8 sm:py-10 ${className ?? ""}`}
    >
      {children}
    </section>
  );
}
