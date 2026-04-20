import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-content";

const routes = [
  "/",
  "/about",
  "/principles",
  "/ecosystem",
  "/vision",
  "/contact",
  "/privacy-policy",
  "/terms-of-use",
  "/cookie-policy"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8
  }));
}
