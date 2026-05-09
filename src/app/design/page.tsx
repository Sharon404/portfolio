import { Metadata } from "next";
import { DesignGallery } from "@/components/design/design-gallery";
import { VideoEmbed } from "@/components/media/video-embed";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { designProjects } from "@/content/design-projects";
import { videoShowcase } from "@/content/videos";

export const metadata: Metadata = {
  title: "Design Work | Creative Portfolio",
  description:
    "Graphics design, UI work, and motion showcase from Canva and Figma projects.",
};

export default function DesignPage() {
  return (
    <>
      <SectionShell>
        <SectionHeading
          kicker="Design Work"
          title="Graphics, UI, and motion from Canva and Figma"
          description="A consolidated visual portfolio with categorized work and process-backed outcomes."
        />
        <DesignGallery projects={designProjects} />
      </SectionShell>

      <SectionShell>
        <SectionHeading
          kicker="Video Showcase"
          title="Selected video and motion work"
          description="Campaign cuts and UI walkthrough clips optimized for quick reviewer evaluation."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {videoShowcase.map((video) => (
            <div key={video.src} className="space-y-2">
              <VideoEmbed src={video.src} title={video.title} />
              <p className="text-sm text-text-soft">{video.title}</p>
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
