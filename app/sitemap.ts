import type { MetadataRoute } from "next";

const base = "https://www.inamdarbusinessanalysis.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    "",
    "/vendor-risk-report",
    "/investor-red-flag-report",
    "/litigation-compliance-check",
    "/monitoring",
    "/sample-report",
  ];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
