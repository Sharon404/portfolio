import { DesignProject } from "@/lib/types";

export const designProjects: DesignProject[] = [
  {
    id: "finflow-brand",
    title: "FinFlow Brand System",
    category: "branding",
    tools: ["Figma", "Canva"],
    thumbnail: {
      src: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1200&q=80&auto=format&fit=crop",
      alt: "Branding board with color chips and layout samples",
      width: 1200,
      height: 800,
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1600&q=80&auto=format&fit=crop",
        alt: "Design workspace with branding assets",
        width: 1600,
        height: 1067,
      },
    ],
    challenge: "Create a visual identity for a fintech startup targeting first-time investors.",
    process: "Built moodboards in Canva, translated the system to Figma components, and validated readability across social and web touchpoints.",
    outcome: "Delivered a complete brand kit used across pitch deck, website, and paid social templates.",
    featured: true,
  },
  {
    id: "nova-ui-kit",
    title: "Nova Product UI Kit",
    category: "ui",
    tools: ["Figma"],
    thumbnail: {
      src: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=1200&q=80&auto=format&fit=crop",
      alt: "Interface wireframes and component layouts",
      width: 1200,
      height: 800,
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1600&q=80&auto=format&fit=crop",
        alt: "UI mockups on desktop screens",
        width: 1600,
        height: 1067,
      },
    ],
    challenge: "Create a reusable UI language for a SaaS dashboard with heavy data workflows.",
    process: "Mapped user tasks, standardized spacing and typography scales, and created component variants and interaction states.",
    outcome: "Reduced design-to-dev handoff time and improved visual consistency across all key modules.",
    featured: true,
  },
  {
    id: "motion-social-pack",
    title: "Motion Social Campaign",
    category: "motion",
    tools: ["Canva", "After Effects"],
    thumbnail: {
      src: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1200&q=80&auto=format&fit=crop",
      alt: "Social campaign visual with vibrant gradients",
      width: 1200,
      height: 800,
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1600&q=80&auto=format&fit=crop",
        alt: "Creative storyboard and social assets",
        width: 1600,
        height: 1067,
      },
    ],
    challenge: "Produce short-form branded motion assets for multi-platform launch week.",
    process: "Designed still compositions in Canva and produced animated variants optimized for reels and stories.",
    outcome: "Delivered a complete launch-week visual package with platform-specific motion cuts.",
    featured: false,
  },
  {
    id: "sacco-management-ui",
    title: "Sacco Management System UI",
    category: "ui",
    tools: ["React", "TypeScript", "Tailwind CSS"],
    thumbnail: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
      alt: "Sacco Management dashboard interface",
      width: 1200,
      height: 800,
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=1600&q=80&auto=format&fit=crop",
        alt: "Dashboard and member management screens",
        width: 1600,
        height: 1067,
      },
    ],
    challenge: "Design a comprehensive, fully responsive UI for managing SACCO (Savings and Credit Cooperative Organization) operations including member records, contributions, loans, and financial workflows.",
    process: "Built React components with TypeScript for type safety, styled with Tailwind CSS for responsive design, and implemented admin dashboard patterns for financial data visualization using Recharts.",
    outcome: "Delivered a production-ready SACCO management interface with dashboard analytics, member portal, loan processing workflows, and financial reporting capabilities deployed on GitHub Pages.",
    externalLink: "https://sharon404.github.io/Sacco-Management-System/",
    featured: true,
  },
];
