import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const base = "https://www.inamdarbusinessanalysis.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    "",
    "/vendor-risk-report",
    "/investor-red-flag-report",
    "/litigation-compliance-check",
    "/monitoring",
    "/methodology",
    "/sources",
    "/about",
    "/sample-report",
    "/resources",
  ];

  // Dynamically load generated resources from directory
  const resourcesDir = path.join(process.cwd(), "content/resources");
  if (fs.existsSync(resourcesDir)) {
    const files = fs.readdirSync(resourcesDir);
    files.forEach((file) => {
      if (file.endsWith(".json")) {
        const slug = file.replace(".json", "");
        routes.push(`/resources/${slug}`);
      }
    });
  }

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/resources/") ? 0.6 : 0.8,
  }));
}
