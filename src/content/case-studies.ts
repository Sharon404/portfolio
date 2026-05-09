import { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "finflow-launch-system",
    title: "FinFlow Launch System",
    role: "Product Designer and Frontend Engineer",
    problem:
      "The startup needed a consistent launch identity across product UI, social channels, and investor materials in a tight deadline.",
    process: [
      "Mapped user-facing touchpoints and prioritized high-impact assets.",
      "Built visual system in Canva and translated it into Figma components.",
      "Implemented frontend surfaces using a shared token approach.",
    ],
    decisions: [
      "Chose a high-contrast type scale for data-heavy UI readability.",
      "Used modular templates so campaign assets could be produced quickly.",
      "Introduced reusable code components to reduce launch-week changes.",
    ],
    outcome:
      "Delivered a cohesive multi-channel launch package and reduced design-to-development iteration cycles.",
    linkedProjectIds: ["finflow-brand", "portfolio-platform"],
  },
  {
    id: "nova-dashboard-rework",
    title: "Nova Dashboard Rework",
    role: "UI Systems Designer",
    problem:
      "The dashboard had inconsistent patterns, causing user friction and slow feature rollouts.",
    process: [
      "Audited existing screens and grouped inconsistencies into pattern clusters.",
      "Defined component states and standardized spacing/typography tokens.",
      "Coordinated handoff with engineering using explicit specs and usage notes.",
    ],
    decisions: [
      "Prioritized common workflows over edge-case visual variants.",
      "Documented component intent to preserve consistency over time.",
      "Separated structure and cosmetics to keep implementation flexible.",
    ],
    outcome:
      "Improved consistency and accelerated team delivery for new dashboard modules.",
    linkedProjectIds: ["nova-ui-kit", "design-token-kit"],
  },
];
