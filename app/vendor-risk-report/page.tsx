import type { Metadata } from "next";
import {
  Fingerprint,
  ReceiptText,
  Building2,
  Gavel,
  ShieldAlert,
  Network,
  FileSearch,
  Send,
  ClipboardCheck,
} from "lucide-react";
import { PageHero, DisclaimerBlock, ContactSection, CTABanner } from "@/components/Sections";
import { FeatureGrid, StepsSection, ChecklistSplit } from "@/components/PageBlocks";

export const metadata: Metadata = {
  title: "Vendor Risk Report, Check Vendors Before You Onboard",
  description:
    "Public-records based vendor risk reports for procurement teams, SMEs and corporates. Verify a supplier's identity, status, litigation and compliance indicators before onboarding, issuing a PO or extending business credit.",
  openGraph: {
    title: "Vendor Risk Report | Inamdar Business Analysis",
    description:
      "Check vendors before onboarding, issuing POs or extending business credit, with source-backed public records.",
  },
};

const checks = [
  { icon: Fingerprint, title: "Identity & registration match", desc: "Confirm the vendor's legal entity, CIN/LLPIN and registration status against MCA records." },
  { icon: ReceiptText, title: "GST status indicators", desc: "Registration status and public filing-activity signals where available." },
  { icon: Building2, title: "Establishment & headcount", desc: "EPFO / ESIC indicators, including employee headcount and how it has trended over time, a read on the vendor's scale and momentum." },
  { icon: Gavel, title: "Litigation search", desc: "District, High Court and Supreme Court matches against the entity and its directors." },
  { icon: ShieldAlert, title: "Regulatory & debarment", desc: "Publicly available regulatory orders and government debarment references." },
  { icon: Network, title: "Director linkages", desc: "Other entities tied to the same directors or promoters in public records." },
];

const steps = [
  { title: "Share the vendor", desc: "Send the vendor name and any IDs you already have, GSTIN, CIN or website." },
  { title: "We compile records", desc: "We match identity and pull risk indicators from official and credible public sources." },
  { title: "You get a report", desc: "A structured PDF with source links and the date of search, in plain language." },
  { title: "Onboard with eyes open", desc: "Use the overall risk read to approve, conditionally approve or pause onboarding." },
];

const deliverables = [
  "Identity & status summary",
  "GST & establishment indicators",
  "Litigation table with sources",
  "Regulatory & debarment references",
  "Director / promoter linkage notes",
  "Overall vendor risk summary",
  "Source links on every finding",
  "Clear date of search",
];

export default function VendorRiskReportPage() {
  return (
    <>
      <PageHero
        eyebrow="For procurement & SMEs"
        title={
          <>
            Check vendors before you onboard, raise a PO or extend{" "}
            <span className="text-gradient">business credit.</span>
          </>
        }
        description="A focused, public-records based read on a supplier, so procurement teams, SMEs and corporates can onboard counterparties with a clear view of identity, status and risk indicators."
        bullets={["Identity match", "Litigation indicators", "Compliance signals"]}
      />

      <FeatureGrid
        eyebrow="What we check"
        title="A vendor read built for onboarding decisions"
        description="Each finding is matched to the vendor and its people, cited to its source, and stamped with the date of search."
        items={checks}
      />

      <StepsSection
        eyebrow="How it works"
        title="From vendor name to a clear decision"
        steps={steps}
      />

      <ChecklistSplit
        eyebrow="What you get"
        title={
          <>
            Everything in one{" "}
            <span className="text-gradient">vendor risk report</span>
          </>
        }
        description="A report any procurement lead can read in minutes and attach to the onboarding file."
        items={deliverables}
      />

      <CTABanner
        title="Onboard the right vendors with confidence"
        description="Run a public-records check before the PO. Tell us the vendor and we will come back with scope and turnaround."
      />

      <DisclaimerBlock />
      <ContactSection />
    </>
  );
}
