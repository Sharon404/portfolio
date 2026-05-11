import { Metadata } from "next";
import { DesignGallery } from "@/components/design/design-gallery";
import { VideoShowcaseGrid } from "@/components/media/video-showcase-grid";
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

      {videoShowcase.length ? (
        <SectionShell>
          <SectionHeading
            kicker="Video Showcase"
            title="Selected video and motion work"
            description="Muted autoplay previews while scrolling, tap to open full playback, and tap outside to close."
          />
          <VideoShowcaseGrid videos={videoShowcase} />
        </SectionShell>
      ) : null}
    </>
  );
}
