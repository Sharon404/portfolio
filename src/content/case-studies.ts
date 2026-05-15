import { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "sacco-management-ui-delivery",
    title: "Sacco Management System UI Delivery",
    role: "UI Designer and Frontend Engineer",
    problem:
      "The SACCO platform needed a clear, responsive interface for complex workflows like member management, contributions, and loan operations.",
    process: [
      "Mapped admin and member workflows to identify high-frequency actions and bottlenecks.",
      "Designed dashboard-first layouts to surface critical financial information quickly.",
      "Built responsive TypeScript components for tables, cards, and workflow forms.",
      "Validated interaction states across mobile and desktop to keep behavior consistent.",
    ],
    decisions: [
      "Prioritized information clarity and predictable patterns over decorative complexity.",
      "Standardized reusable UI blocks to reduce implementation drift across modules.",
      "Focused on responsive behavior early to avoid late-stage mobile regressions.",
    ],
    outcome:
      "Delivered a production-ready, consistent interface that improved workflow readability and reduced handoff friction across SACCO operations.",
    linkedProjectIds: ["sacco-management-ui"],
  },
  {
    id: "grainshare-product-presence",
    title: "Grainshare Product Presence and UX Storytelling",
    role: "Product Designer and Web Implementer",
    problem:
      "The project needed a stronger public-facing experience to communicate mission, services, and trust quickly to first-time visitors.",
    process: [
      "Restructured information hierarchy around message clarity and conversion touchpoints.",
      "Built section-by-section narrative flow from mission, to credibility, to action.",
      "Optimized screenshots and layout for cleaner visual scanning on desktop and mobile.",
    ],
    decisions: [
      "Chose a narrative-first layout to build trust before asking for action.",
      "Used consistent spacing and hierarchy to improve readability across sections.",
      "Kept interactions simple to reduce friction for mobile visitors.",
    ],
    outcome:
      "Created a clearer first impression with stronger message flow and a more professional project presentation.",
    linkedProjectIds: ["ui-project-previews"],
  },
  {
    id: "social-campaign-content-system",
    title: "Social Campaign Content System for Agriculture and Conservation",
    role: "Visual Designer and Motion Content Creator",
    problem:
      "Content needed to be published frequently across themes without losing visual consistency or slowing production.",
    process: [
      "Grouped content into reusable campaign themes including facts, prompts, and conservation education.",
      "Designed template-based static graphics for rapid iteration with consistent branding.",
      "Produced short-form reels and clips optimized for social feed consumption.",
      "Integrated assets into the portfolio with preview-first presentation for quick review.",
    ],
    decisions: [
      "Adopted template systems to increase publishing speed and consistency.",
      "Maintained stable type and color rules across multiple content series.",
      "Balanced educational copy with visual hooks to improve first-frame engagement.",
    ],
    outcome:
      "Built a scalable content workflow that supports high-volume publishing while preserving visual quality and message clarity.",
    linkedProjectIds: ["agriculture-social-pack", "cloud-made-simple"],
  },
];
