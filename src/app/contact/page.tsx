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

      <div className="grid gap-3 text-sm sm:gap-4 sm:grid-cols-2 sm:text-base">
        <a
          href="mailto:aokosharo@gmail.com"
          className="rounded-2xl border border-black/10 bg-white p-4 hover:border-accent/60 sm:p-5"
        >
          <p className="font-semibold text-foreground">Email</p>
          <p className="mt-2 text-text-soft">aokosharo@gmail.com</p>
        </a>

        <a
          href="https://www.linkedin.com/in/sharon-aoko-a75547235"
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-black/10 bg-white p-4 hover:border-accent/60 sm:p-5"
        >
          <p className="font-semibold text-foreground">LinkedIn</p>
          <p className="mt-2 text-text-soft">sharon-aoko-a75547235</p>
        </a>

        <a
          href="https://github.com/Sharon404"
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-black/10 bg-white p-4 hover:border-accent/60 sm:p-5"
        >
          <p className="font-semibold text-foreground">GitHub</p>
          <p className="mt-2 text-text-soft">Sharon404</p>
        </a>
        <div className="rounded-2xl border border-black/10 bg-white p-4 sm:p-5">
          <p className="font-semibold text-foreground">Phone</p>
          <p className="mt-2 text-text-soft">+254-7980-0375-74</p>
        </div>

        <a
          href="/about"
          className="rounded-2xl border border-black/10 bg-white p-4 hover:border-accent/60 sm:p-5"
        >
          <p className="font-semibold text-foreground">About and CV</p>
          <p className="mt-2 text-text-soft">Experience summary and downloadable CV</p>
        </a>
      </div>
    </SectionShell>
  );
}
