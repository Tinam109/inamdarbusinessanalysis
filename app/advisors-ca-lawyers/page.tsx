export const dynamic = "force-dynamic";
export const revalidate = 0;

import type { Metadata } from "next";
import {
  FileText,
  Gavel,
  Building2,
  Users,
  Search,
} from "lucide-react";
import { PageHero, DisclaimerBlock, ContactSection, CTABanner } from "@/components/Sections";
import { FeatureGrid, StepsSection, ChecklistSplit } from "@/components/PageBlocks";

export const metadata: Metadata = {
  title: "For CAs, Lawyers & Corporate Advisors | Public Records Diligence Partner",
  description:
    "Outsourced public records research and due diligence reports for Chartered Accountants, CSs, legal firms, and corporate advisors in India. 24-48 hr turnaround.",
  openGraph: {
    title: "For CAs, Lawyers & Corporate Advisors | Inamdar Business Analysis",
    description:
      "Public-records research partner for CAs, legal practitioners, and corporate advisors.",
  },
};

const checks = [
  {
    icon: Search,
    title: "12+ Public records portals checked",
    desc: "Single-point coverage across MCA, GST, EPFO/ESIC, District Courts, High Courts, NCLT, ITAT, SEBI, and regulatory caution lists.",
  },
  {
    icon: Gavel,
    title: "Litigation & tribunal matching",
    desc: "Name-matched searches filtered for relevance against entity name, directors, and key promoters.",
  },
  {
    icon: Building2,
    title: "Entity & MCA master data verification",
    desc: "Verification of DIN status, active/struck-off company status, open bank charges, and filing history.",
  },
  {
    icon: Users,
    title: "Promoter linkage mapping",
    desc: "Cross-referencing other companies and LLPs where the same directors hold positions.",
  },
  {
    icon: FileText,
    title: "Clean white-label PDF output",
    desc: "Structured, objective report with source URLs and date of search ready for client presentations or internal deal memos.",
  },
];

const steps = [
  {
    title: "Send entity target",
    desc: "Provide company CIN, vendor GSTIN, or promoter names.",
  },
  {
    title: "We run research",
    desc: "Our analyst team searches public portals, filters false matches, and verifies findings.",
  },
  {
    title: "Receive report",
    desc: "Get a clear PDF with source citations delivered within 24 to 48 hours.",
  },
  {
    title: "Advise your client",
    desc: "Incorporate source-backed facts directly into your advisory, compliance, or M&A reports.",
  },
];

const deliverables = [
  "Comprehensive public records summary",
  "MCA ROC filings & registered bank charges",
  "Litigation table across District, High & Supreme Courts",
  "NCLT insolvency & tribunal proceeding checks",
  "GST & EPFO establishment status indicators",
  "Director DIN status & linked entity mapping",
  "Direct source URLs and exact search timestamps",
  "Delivered in 24–48 hours",
];

export default function AdvisorsCaLawyersPage() {
  return (
    <>
      <PageHero
        eyebrow="Advisory Diligence Support — From ₹2,499 — Delivered within 24–48 hours"
        title={
          <>
            Outsourced public-records due diligence for{" "}
            <span className="text-gradient">professional advisors</span>
          </>
        }
        description="Stop wasting billable hours manually digging through MCA, court cause lists, and GST registries. We compile human-reviewed, source-linked public records reports in 24–48 hours."
        bullets={["From ₹2,499 / Entity", "24–48h Turnaround", "Source-Linked Findings"]}
      />

      <FeatureGrid
        eyebrow="Coverage area"
        title={
          <>
            Complete research grunt work,{" "}
            <span className="text-gradient">delivered in one clean PDF</span>
          </>
        }
        description="We act as an execution arm for advisors, CAs, and lawyers who need fast, objective public records facts."
        items={checks}
      />

      <ChecklistSplit
        eyebrow="Deliverables"
        title={
          <>
            What you get in{" "}
            <span className="text-gradient">every advisory report</span>
          </>
        }
        description="Clear, unopinionated facts backed by direct links and search timestamps."
        items={deliverables}
      />

      <StepsSection
        eyebrow="How it works"
        title={
          <>
            Fast workflow for{" "}
            <span className="text-gradient">consultants & partners</span>
          </>
        }
        steps={steps}
      />

      <CTABanner
        title="Need public record diligence for a client deal?"
        description="Get a source-backed PDF report ready for your advisory or due-diligence package in 24–48 hours."
      />

      <DisclaimerBlock />
      <ContactSection />
    </>
  );
}
