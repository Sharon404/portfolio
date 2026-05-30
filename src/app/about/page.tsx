import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

export const metadata: Metadata = {
  title: "About | Creative Portfolio",
  description: "Profile, role summary, and CV access for hiring teams.",
};

export default function AboutPage() {
  return (
    <SectionShell>
      <SectionHeading
        kicker="About"
        title="Designer and engineer building cohesive digital experiences"
        description="I combine visual systems and frontend implementation to ship consistent, measurable product outcomes."
      />

      <div className="space-y-4 text-text-soft">
        <p>
          My work spans brand design, UI systems, and production-ready frontend architecture.
          I use Canva and Figma for concept and visual direction, then translate that quality
          into performant interfaces and maintainable code.
        </p>
        <p>
          I focus on clear communication, practical execution, and polished delivery for
          high-visibility launches.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/Sharon%20Professional%20Resume.pdf"
            download
            className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-accent/90"
            style={{ textDecoration: "none" }}
          >
            Download Resume (PDF)
          </a>
          <a
            href="https://github.com/Sharon404"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:border-accent/50"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
