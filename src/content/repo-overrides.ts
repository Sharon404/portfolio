import { ImageAsset } from "@/lib/media";

type RepoOverride = {
  displayName?: string;
  description?: string;
  liveUrl?: string;
  forceTop?: boolean;
  hide?: boolean;
  screenshot?: ImageAsset;
};

export const repoOverrides: Record<string, RepoOverride> = {
  grainshare: {
    displayName: "Grainshare",
    description: "Featured project selected from GitHub.",
    forceTop: true,
    screenshot: {
      src: "https://images.unsplash.com/photo-1551281044-8b0a1c6ca3d5?w=1200&q=80&auto=format&fit=crop",
      alt: "Dashboard style project preview for Grainshare",
      width: 1200,
      height: 800,
    },
  },
};
