import { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://your-portfolio-domain.com";

  const coreRoutes = ["", "/design", "/code", "/case-studies", "/about", "/contact"];

  const studyRoutes = caseStudies.map((study) => `/case-studies/${study.id}`);

  return [...coreRoutes, ...studyRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
