import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const base = "https://www.inamdarbusinessanalysis.in";

interface RouteConfig {
  path: string;
  priority: number;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const primaryRoutes: RouteConfig[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/vendor-risk-report", priority: 0.9, changeFrequency: "weekly" },
    { path: "/investor-red-flag-report", priority: 0.9, changeFrequency: "weekly" },
    { path: "/lender-credit-diligence", priority: 0.9, changeFrequency: "weekly" },
    { path: "/advisors-ca-lawyers", priority: 0.9, changeFrequency: "weekly" },
    { path: "/litigation-compliance-check", priority: 0.9, changeFrequency: "weekly" },
    { path: "/monitoring", priority: 0.9, changeFrequency: "weekly" },
    { path: "/resources", priority: 0.8, changeFrequency: "weekly" },
    { path: "/sample-report", priority: 0.8, changeFrequency: "weekly" },
    { path: "/order", priority: 0.9, changeFrequency: "weekly" },
    { path: "/methodology", priority: 0.8, changeFrequency: "monthly" },
    { path: "/sources", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  ];

  const routes: MetadataRoute.Sitemap = primaryRoutes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // Dynamically load generated resources from directory
  const resourcesDir = path.join(process.cwd(), "content/resources");
  if (fs.existsSync(resourcesDir)) {
    const files = fs.readdirSync(resourcesDir);
    files.forEach((file) => {
      if (file.endsWith(".json")) {
        const slug = file.replace(".json", "");
        routes.push({
          url: `${base}/resources/${slug}`,
          lastModified,
          changeFrequency: "monthly",
          priority: 0.7,
        });
      }
    });
  }

  return routes;
}

