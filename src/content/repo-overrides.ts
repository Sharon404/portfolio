import { ImageAsset } from "@/lib/media";

type RepoOverride = {
  displayName?: string;
  description?: string;
  liveUrl?: string;
  forceTop?: boolean;
  includeFork?: boolean;
  hide?: boolean;
  screenshot?: ImageAsset;
};

export const repoOverrides: Record<string, RepoOverride> = {
  grainshare: {
    displayName: "Grainshare",
    description: "Featured project selected from GitHub.",
    forceTop: true,
    liveUrl: "https://sharon404.github.io/Grainshare/",
    screenshot: {
      src: "https://images.unsplash.com/photo-1551281044-8b0a1c6ca3d5?w=1200&q=80&auto=format&fit=crop",
      alt: "Dashboard style project preview for Grainshare",
      width: 1200,
      height: 800,
    },
  },
  sharon404: {
    hide: true,
  },
  wordpress: {
    hide: true,
  },
  feb2224: {
    hide: true,
  },
  dart2422: {
    hide: true,
  },
  virtualfit: {
    hide: true,
  },
  skillforge: {
    includeFork: true,
    description: "Forked project significantly extended with custom features and improvements.",
  },
  "sacco-management-system": {
    displayName: "Sacco Management System (UI)",
    description:
      "Comprehensive, fully responsive SACCO management interface covering dashboard analytics, member records, contributions, loans, welfare, and financial reporting workflows.",
    liveUrl: "https://sharon404.github.io/Sacco-Management-System/",
    screenshot: {
      src: "https://image.thum.io/get/width/1200/crop/800/https://sharon404.github.io/Sacco-Management-System/",
      alt: "Sacco Management System dashboard UI with finance cards and transaction table",
      width: 1200,
      height: 800,
    },
    forceTop: true,
  },
};

