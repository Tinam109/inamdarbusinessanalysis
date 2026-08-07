import type { Metadata } from "next";
import {
  Landmark,
  Building2,
  Scale,
  ReceiptText,
  ShieldAlert,
  Network,
} from "lucide-react";
import { PageHero, DisclaimerBlock, ContactSection, CTABanner } from "@/components/Sections";
import { FeatureGrid, StepsSection, ChecklistSplit } from "@/components/PageBlocks";

export const metadata: Metadata = {
  title: "Lender & Credit Due Diligence | Public Records Credit Checks India",
  description:
    "Source-backed public record reports for NBFCs, lenders, invoice discounting platforms and SME credit teams. Verify MCA charges, borrowings, DRT suits, and promoter risk indicators.",
  openGraph: {
    title: "Lender & Credit Due Diligence | Inamdar Business Analysis",
    description:
      "Public record credit due diligence for lenders, NBFCs and credit underwriters in India.",
  },
};

const checks = [
  {
    icon: Landmark,
    title: "MCA charges & borrowing records",
    desc: "Verify registered charges, satisfied loans, open bank hypothecations and MCA ROC filings.",
  },
  {
    icon: Scale,
    title: "DRT & NCLT litigation search",
    desc: "Check Debt Recovery Tribunal, NCLT insolvency proceedings, and court recovery suits.",
  },
  {
    icon: ReceiptText,
    title: "GST filing compliance signals",
    desc: "Public GSTIN registration status, filing frequency, and return compliance indicators.",
  },
  {
    icon: Building2,
    title: "EPFO establishment & headcount",
    desc: "Employee headcount trends over past quarters to cross-verify real operational scale.",
  },
  {
    icon: Network,
    title: "Promoter & sister company liabilities",
    desc: "Identify other entities linked to the same promoters and their public filing status.",
  },
  {
    icon: ShieldAlert,
    title: "Regulatory caution lists",
    desc: "Cross-reference against public RBI caution lists, SEBI orders, and government debarments.",
  },
];

const steps = [
  {
    title: "Send borrower details",
    desc: "Provide the borrower company name, CIN, GSTIN, or promoter DIN.",
  },
  {
    title: "Public records search",
    desc: "We pull filings, charge registers, court cause lists, and official records.",
  },
  {
    title: "Human review",
    desc: "Our team filters false positives and compiles a clear, source-linked PDF report.",
  },
  {
    title: "Make credit decisions",
    desc: "Use verified public record facts alongside your financial models.",
  },
];

const deliverables = [
  "Registered MCA charges & loan hypothecations",
  "DRT, NCLT & civil court litigation table",
  "GST filing activity and status indicators",
  "EPFO headcount trend (operational scale check)",
  "Director DIN status & linked entity mapping",
  "Source links and exact date of search on every finding",
  "Human-reviewed risk summary in plain English",
  "24 to 48-hour delivery turnaround",
];

export default function LenderCreditDiligencePage() {
  return (
    <>
      <PageHero
        eyebrow="For Lenders, NBFCs & Fintechs"
        title={
          <>
            Public record due diligence for{" "}
            <span className="text-gradient">SME credit & lending</span>
          </>
        }
        description="Verify registered MCA charges, DRT litigation, GST filing patterns, and promoter liabilities across official Indian public records before approving trade credit or business loans."
        bullets={["MCA bank charges", "DRT court recovery search", "Promoter linked liabilities"]}
      />

      <FeatureGrid
        eyebrow="What we check"
        title={
          <>
            Beyond financial statements:{" "}
            <span className="text-gradient">The public record read</span>
          </>
        }
        description="Bank statements show cashflow, but public records reveal registered liabilities, court recovery suits, and promoter track records."
        items={checks}
      />

      <ChecklistSplit
        eyebrow="Report deliverables"
        title={
          <>
            What you receive in{" "}
            <span className="text-gradient">each credit report</span>
          </>
        }
        description="Every finding includes direct source links, date of search, and plain-language summary notes."
        items={deliverables}
      />

      <StepsSection
        eyebrow="How it works"
        title={
          <>
            Simple process for{" "}
            <span className="text-gradient">credit underwriting teams</span>
          </>
        }
        steps={steps}
      />

      <CTABanner
        title="Need a credit due diligence report on a borrower?"
        description="Get a human-reviewed public records report delivered to your inbox in 24–48 hours."
      />

      <DisclaimerBlock />
      <ContactSection />
    </>
  );
}
