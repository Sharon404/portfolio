import { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { caseStudies } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Case Studies | Creative Portfolio",
  description: "Detailed process and outcome narratives for selected design and code projects.",
};

export default function CaseStudiesPage() {
  return (
    <SectionShell>
      <SectionHeading
        kicker="Case Studies"
        title="Process, decisions, and measurable outcomes"
        description="Detailed project narratives that explain constraints, execution strategy, and impact."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {caseStudies.map((study) => (
          <article key={study.id} className="rounded-2xl border border-black/10 bg-white p-5">
            <h3 className="text-xl font-semibold">{study.title}</h3>
            <p className="mt-2 text-sm text-text-soft">{study.problem}</p>
            <Link
              href={`/case-studies/${study.id}`}
              className="mt-4 inline-flex text-sm font-semibold text-accent hover:underline"
            >
              Open Case Study
            </Link>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
