import type { Metadata } from "next";
import {
  Gavel,
  Scale,
  Landmark,
  ReceiptText,
  ShieldAlert,
  Building2,
  FileWarning,
  Network,
} from "lucide-react";
import { PageHero, DisclaimerBlock, ContactSection, CTABanner } from "@/components/Sections";
import { FeatureGrid, StepsSection, ChecklistSplit } from "@/components/PageBlocks";

export const metadata: Metadata = {
  title: "Litigation & Compliance Check, Public Records Search",
  description:
    "Public-records search across courts, compliance, tax and regulatory databases for founders, CAs, CSs, lawyers and consultants. Source-backed litigation and compliance indicators with a clear date of search.",
  openGraph: {
    title: "Litigation & Compliance Check | Inamdar Business Analysis",
    description:
      "Public-records search across courts, compliance, tax and regulatory databases, source-backed and dated.",
  },
};

const checks = [
  { icon: Gavel, title: "District, High Court & Supreme Court", desc: "Case searches matched to the entity and named individuals across district courts, High Courts and the Supreme Court." },
  { icon: Scale, title: "Consumer courts", desc: "Consumer forum disputes surfaced from public cause lists and orders." },
  { icon: ReceiptText, title: "ITAT & tax litigation", desc: "Income-tax tribunal and tax-dispute records in the public domain." },
  { icon: Building2, title: "MCA / ROC compliance", desc: "Company status, charges and filing-status indicators from MCA records." },
  { icon: ShieldAlert, title: "Regulatory orders", desc: "Publicly available SEBI and sectoral regulator orders and references." },
  { icon: FileWarning, title: "Insolvency records", desc: "IBC proceedings and winding-up references located in public sources." },
];

const steps = [
  { title: "Define the search", desc: "Tell us the entity or individuals and the databases you want covered." },
  { title: "We run the search", desc: "We search available public records and match results to your subjects." },
  { title: "Findings compiled", desc: "Matches are organised into a litigation table with sources and a date of search." },
  { title: "Use in your advisory", desc: "Attach the findings to your due-diligence, opinion file or client memo." },
];

const deliverables = [
  "Court litigation table",
  "Consumer & tax matter references",
  "MCA / ROC compliance indicators",
  "Regulatory order references",
  "Insolvency record references",
  "Matched-party notes",
  "Source links on every match",
  "Clear date of search",
];

export default function LitigationComplianceCheckPage() {
  return (
    <>
      <PageHero
        eyebrow="Litigation & Compliance Check — ₹3,499 — Delivered within 24–48 hours"
        title={
          <>
            A public-records search across courts, compliance, tax &{" "}
            <span className="text-gradient">regulatory databases.</span>
          </>
        }
        description="A structured search of available public records, built for professionals who need source-backed litigation and compliance indicators they can stand behind, with a clear date of search."
        bullets={["₹3,499 Fixed Price", "24–48h Turnaround", "Commercial Courts & Tax Tribunals"]}
      />

      <FeatureGrid
        eyebrow="What we search"
        title="Across the public-record sources that matter"
        description="We search available official and credible sources, match results to your subjects, and report each with its source and date."
        items={checks}
      />

      <StepsSection
        eyebrow="How it works"
        title="From a defined search to a sourced result"
        steps={steps}
      />

      <ChecklistSplit
        eyebrow="What you get"
        title={
          <>
            A sourced{" "}
            <span className="text-gradient">search result</span> you can rely on
          </>
        }
        description="Organised, cited and dated, ready to fold into your own professional work product."
        items={deliverables}
      />

      <CTABanner
        title="Search the public record with confidence"
        description="Tell us the subjects and the scope. We will reply with what we can cover, turnaround and next steps."
      />

      <DisclaimerBlock />
      <ContactSection />
    </>
  );
}
