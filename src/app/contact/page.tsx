import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

export const metadata: Metadata = {
  title: "Contact | Creative Portfolio",
  description: "Direct contact channels for recruiting and collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <SectionShell>
      <SectionHeading
        kicker="Contact"
        title="Let us discuss your next product or brand build"
        description="For roles, freelance engagements, or collaborations, use any method below."
      />

      <div className="grid gap-4 text-sm sm:grid-cols-2 sm:text-base">
        <a
          href="mailto:your.email@example.com"
          className="rounded-2xl border border-black/10 bg-white p-5 hover:border-accent/60"
        >
          <p className="font-semibold text-foreground">Email</p>
          <p className="mt-2 text-text-soft">your.email@example.com</p>
        </a>

        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-black/10 bg-white p-5 hover:border-accent/60"
        >
          <p className="font-semibold text-foreground">LinkedIn</p>
          <p className="mt-2 text-text-soft">Professional profile and message inbox</p>
        </a>

        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-black/10 bg-white p-5 hover:border-accent/60"
        >
          <p className="font-semibold text-foreground">GitHub</p>
          <p className="mt-2 text-text-soft">Repository history and technical depth</p>
        </a>

        <a
          href="/about"
          className="rounded-2xl border border-black/10 bg-white p-5 hover:border-accent/60"
        >
          <p className="font-semibold text-foreground">About and CV</p>
          <p className="mt-2 text-text-soft">Experience summary and downloadable CV</p>
        </a>
      </div>
    </SectionShell>
  );
}
