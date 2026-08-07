export const dynamic = "force-dynamic";
export const revalidate = 0;

import type { Metadata } from "next";
import { PageHero, DisclaimerBlock } from "@/components/Sections";
import { Lock, ShieldCheck, Eye, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & Confidential Handling | Inamdar Business Analysis",
  description:
    "How Inamdar Business Analysis collects, uses, and confidentially handles client inquiry details, payment metadata, and due diligence records.",
  alternates: { canonical: "https://www.inamdarbusinessanalysis.in/privacy" },
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Privacy Policy & Data Protection"
        title={
          <>
            Confidential Handling &{" "}
            <span className="text-gradient">Data Protection Policy</span>
          </>
        }
        description="We understand that due diligence inquiries are sensitive. Here is how we handle client communications, inquiry details, and report records."
      />

      <section className="section-pad bg-white">
        <div className="container-x max-w-4xl space-y-10 text-slate-700">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
            <h2 className="flex items-center gap-2 text-xl font-bold text-brand">
              <Lock className="h-5 w-5 text-accent-600" />
              1. Confidentiality of Due Diligence Enquiries
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              All client inquiries, target entity names, purchase orders, and report deliverables are treated with strict confidentiality. Target entities are never contacted or notified of diligence inquiries. Information provided to us is used exclusively to scope, conduct, and deliver the requested report.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
            <h2 className="flex items-center gap-2 text-xl font-bold text-brand">
              <FileText className="h-5 w-5 text-accent-600" />
              2. Information We Collect
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              When requesting a due diligence report or scope estimate, we collect minimal operational information required to fulfill the service:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>Contact details (Name, business email address, phone / WhatsApp number).</li>
              <li>Entity identifiers (Company Name, CIN, GSTIN, LLPIN, or DIN).</li>
              <li>Billing & GST details for tax invoice generation.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
            <h2 className="flex items-center gap-2 text-xl font-bold text-brand">
              <ShieldCheck className="h-5 w-5 text-accent-600" />
              3. Public Record Source Material
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Due diligence findings in our reports are extracted exclusively from publicly accessible government registries, official gazettes, open judicial portals (eCourts, High Courts, Supreme Court, NCLT, DRT), and statutory filing databases (MCA/ROC, EPFO, GSTN). We do not conduct unlawful private surveillance or phone wiretapping.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
            <h2 className="flex items-center gap-2 text-xl font-bold text-brand">
              <Eye className="h-5 w-5 text-accent-600" />
              4. Data Retention & Access
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Completed report PDFs and search logs are stored securely for record-keeping and delivered directly to the requesting client. We do not sell or rent client contact information or inquiry records to third-party data brokers.
            </p>
          </div>
        </div>
      </section>

      <DisclaimerBlock />
    </main>
  );
}
