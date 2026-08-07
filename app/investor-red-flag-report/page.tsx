import type { Metadata } from "next";
import {
  Fingerprint,
  Gavel,
  Landmark,
  ShieldAlert,
  Network,
  FileWarning,
  Eye,
  TrendingUp,
} from "lucide-react";
import { PageHero, DisclaimerBlock, ContactSection, CTABanner } from "@/components/Sections";
import { FeatureGrid, StepsSection, ChecklistSplit } from "@/components/PageBlocks";

export const metadata: Metadata = {
  title: "Investor Red Flag Report, Screen Before You Invest or Lend",
  description:
    "Public-records based red-flag reports for angels, VCs, acquirers and lenders. Surface company, promoter, litigation and regulatory risk indicators before investing, acquiring or extending credit.",
  openGraph: {
    title: "Investor Red Flag Report | Inamdar Business Analysis",
    description:
      "Surface company, promoter, litigation and regulatory red flags before you invest or lend.",
  },
};

const checks = [
  { icon: Fingerprint, title: "Company & promoter identity", desc: "Match the company, its CIN and the promoters behind it against MCA records." },
  { icon: Gavel, title: "Litigation history", desc: "District, High Court, Supreme Court and tribunal matches against the company and its promoters." },
  { icon: ShieldAlert, title: "Regulatory orders", desc: "Publicly available SEBI and sectoral regulator orders and enforcement references." },
  { icon: FileWarning, title: "Insolvency stress", desc: "IBC proceedings, winding-up references and defaulter-list mentions in public sources." },
  { icon: Network, title: "Promoter linkages", desc: "Other companies tied to the same promoters that may carry their own risk indicators." },
  { icon: Eye, title: "Adverse public records", desc: "Watchout-investor references and other adverse records located in public sources." },
];

const steps = [
  { title: "Name the target", desc: "Share the company and promoter names, plus any IDs you have on hand." },
  { title: "We map the picture", desc: "We compile litigation, regulatory and linkage indicators from public sources." },
  { title: "Red flags surfaced", desc: "A structured report ranks indicators with sources and the date of search." },
  { title: "Decide with context", desc: "Use it alongside your financial and commercial diligence before you commit." },
];

const deliverables = [
  "Company & promoter identity match",
  "Litigation table with sources",
  "Regulatory & enforcement references",
  "Insolvency & defaulter references",
  "Promoter linked-entity mapping",
  "Adverse public-record notes",
  "Overall red-flag summary",
  "Source links + date of search",
];

export default function InvestorRedFlagReportPage() {
  return (
    <>
      <PageHero
        eyebrow="For investors, acquirers & lenders"
        title={
          <>
            Surface the red flags before the{" "}
            <span className="text-gradient">term sheet or the cheque.</span>
          </>
        }
        description="A public-records based read on a company and its promoters, built for angels, VCs, acquirers and lenders who need to see litigation, regulatory and linkage risk before they invest or lend."
        bullets={["Promoter checks", "Litigation history", "Regulatory red flags"]}
      />

      <FeatureGrid
        eyebrow="What we surface"
        title="A red-flag read for investment and credit decisions"
        description="Indicators are matched to the company and its promoters, cited to source, and dated to the day they were searched."
        items={checks}
      />

      <StepsSection
        eyebrow="How it works"
        title="From target name to a red-flag picture"
        steps={steps}
      />

      <ChecklistSplit
        eyebrow="What you get"
        title={
          <>
            A clear{" "}
            <span className="text-gradient">red-flag report</span> for your file
          </>
        }
        description="Structured findings that sit alongside your financial and legal diligence, not a substitute for them."
        items={deliverables}
      />

      <CTABanner
        title="See the risk before you write the cheque"
        description="Tell us the company and promoters you are screening. We will reply with scope, turnaround and next steps."
      />

      <DisclaimerBlock />
      <ContactSection />
    </>
  );
}
