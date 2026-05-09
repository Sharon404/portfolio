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
      className={`w-full rounded-3xl border border-black/10 bg-surface px-5 py-8 sm:px-8 sm:py-10 ${className ?? ""}`}
    >
      {children}
    </section>
  );
}
