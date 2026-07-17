import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { ResourcesCatalog } from "@/components/ResourcesCatalog";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, FileSearch } from "lucide-react";

export const metadata: Metadata = {
  title: "Due Diligence & Risk Intelligence Resources | Inamdar Business Analysis",
  description:
    "Comprehensive guides, compliance frameworks, and corporate intelligence resources for vendor risk assessment, investor due diligence, litigation verification, and regulatory checking in India.",
  keywords: [
    "vendor risk assessment India",
    "corporate due diligence India",
    "MCA filings check",
    "GST registration verification",
    "EPFO compliance",
    "court case verification India",
  ],
};

function getResourcesData() {
  const dirPath = path.join(process.cwd(), "content/resources");
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  const files = fs.readdirSync(dirPath);
  const resources = files
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const filePath = path.join(dirPath, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      return JSON.parse(fileContent);
    });

  // Sort resources alphabetically or by category
  return resources.sort((a, b) => a.title.localeCompare(b.title));
}

export default function ResourcesPage() {
  const resources = getResourcesData();

  return (
    <main className="min-h-screen pt-24 pb-20 sm:pt-32">
      {/* Background decoration matching theme */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-faint [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-40 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container-x px-5 sm:px-8">
        {/* Header Hero Section */}
        <div className="max-w-3xl mb-16">
          <Badge tone="accent" dot>
            SEO Risk & Compliance Intelligence Portal
          </Badge>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-brand sm:text-5xl">
            Due Diligence & <span className="text-gradient">Risk Intelligence Portal</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            Detailed compliance guides, procedural frameworks, and sector insights
            helping procurement, investment, and compliance teams vet counterparties,
            verify corporate standing, and map linkages in India.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/#contact" size="sm">
              Schedule a Consultation
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/sample-report" variant="accent" size="sm">
              <FileSearch className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              Download Sample PDF
            </Button>
          </div>
        </div>

        {/* Catalog Filter section */}
        <ResourcesCatalog resources={resources} />
      </div>
    </main>
  );
}
