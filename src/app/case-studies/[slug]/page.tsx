import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { caseStudies } from "@/content/case-studies";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.id }));
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.id === slug);

  if (!study) {
    notFound();
  }

  return (
    <SectionShell>
      <SectionHeading
        kicker="Case Study"
        title={study.title}
        description={study.role}
      />

      <div className="space-y-6 text-sm text-text-soft sm:text-base">
        <section className="space-y-2">
          <h3 className="font-display text-xl font-semibold text-foreground">Problem</h3>
          <p>{study.problem}</p>
        </section>

        <section className="space-y-2">
          <h3 className="font-display text-xl font-semibold text-foreground">Process</h3>
          <ul className="space-y-1">
            {study.process.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-display text-xl font-semibold text-foreground">Key Decisions</h3>
          <ul className="space-y-1">
            {study.decisions.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-display text-xl font-semibold text-foreground">Outcome</h3>
          <p>{study.outcome}</p>
        </section>

        <Link href="/case-studies" className="inline-flex font-semibold text-accent hover:underline">
          Back to all case studies
        </Link>
      </div>
    </SectionShell>
  );
}
