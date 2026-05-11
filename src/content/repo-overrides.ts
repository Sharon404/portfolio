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
      src: "https://image.thum.io/get/width/1200/crop/800/https://sharon404.github.io/Grainshare/",
      alt: "Grainshare live interface preview",
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
  "tutorial-app": {
    displayName: "Tutorial App",
    liveUrl: "https://tutorial-app-iac8.onrender.com/",
    description:
      "Responsive tutorial platform UI with structured learning flows and production deployment on Render.",
    screenshot: {
      src: "https://image.thum.io/get/width/1200/crop/800/https://tutorial-app-iac8.onrender.com/",
      alt: "Tutorial App live interface preview",
      width: 1200,
      height: 800,
    },
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

