import { ImageAsset } from "@/lib/media";

export type DesignCategory =
  | "branding"
  | "social"
  | "ui"
  | "motion"
  | "print";

export type DesignProject = {
  id: string;
  title: string;
  category: DesignCategory;
  tools: string[];
  thumbnail: ImageAsset;
  gallery: ImageAsset[];
  video?: string;
  challenge: string;
  process: string;
  outcome: string;
  externalLink?: string;
  featured: boolean;
};

export type CodeProject = {
  id: string;
  name: string;
  description: string;
  stack: string[];
  repoUrl: string;
  liveUrl?: string;
  screenshot: ImageAsset;
  featured: boolean;
  source: "manual" | "github-api";
  stars?: number;
  forks?: number;
  primaryLanguage?: string;
  updatedAt?: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  role: string;
  problem: string;
  process: string[];
  decisions: string[];
  outcome: string;
  linkedProjectIds: string[];
};
