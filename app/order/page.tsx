export const dynamic = "force-dynamic";
export const revalidate = 0;

import type { Metadata } from "next";
import { OrderForm } from "./OrderForm";
import { PageHero } from "@/components/Sections";
import { ShieldCheck, Clock, CheckCircle2, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Order a Due Diligence Report | Inamdar Business Analysis",
  description:
    "Request custom public records diligence on any Indian company, vendor, borrower or promoter. Fast 24-48 hour delivery with source-backed findings.",
  alternates: {
    canonical: "https://www.inamdarbusinessanalysis.in/order",
  },
};

export default function OrderPage() {
  return (
    <main>
      <PageHero
        eyebrow="Fast Turnaround Diligence"
        title={
          <>
            Request a Public Records <span className="text-gradient">Risk Report</span>
          </>
        }
        description="Select your report tier, share the target company name or CIN, and receive source-verified intelligence covering MCA charges, litigation, GST compliance, and promoter history within 24 to 48 hours."
        bullets={[
          "Fixed pricing from ₹2,499 per report",
          "Express 24-hour turnaround option",
          "Official GST invoice with input tax credit",
          "Confidential & source-backed",
        ]}
      />

      <section className="section-pad -mt-10">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Form Column */}
            <div className="lg:col-span-8">
              <OrderForm />
            </div>

            {/* Sidebar Trust Column */}
            <div className="space-y-6 lg:col-span-4">
              <div className="rounded-3xl border border-slate-200/90 bg-slate-50/70 p-6 shadow-lift">
                <div className="flex items-center gap-2 font-display text-base font-bold text-brand">
                  <ShieldCheck className="h-5 w-5 text-accent-600" />
                  What Happens Next?
                </div>
                <ol className="mt-4 space-y-4 text-xs text-slate-600">
                  <li className="flex gap-3">
                    <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-100 font-bold text-accent-800">
                      1
                    </span>
                    <span>
                      <strong>Instant Scope Confirmation:</strong> Our analysts verify the entity's CIN/GSTIN and confirm coverage within 60 minutes.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-100 font-bold text-accent-800">
                      2
                    </span>
                    <span>
                      <strong>Multi-Registry Public Records Review:</strong> MCA charge register, eCourts commercial benches, High Court registries, and GST return logs are examined.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-100 font-bold text-accent-800">
                      3
                    </span>
                    <span>
                      <strong>Structured PDF & Summary:</strong> You receive a clean, redacted-ready PDF report along with direct source citation links and risk scores.
                    </span>
                  </li>
                </ol>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lift">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <Lock className="h-4 w-4 text-emerald-600" />
                  Confidential Handling
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Enquiry and report information is handled confidentially and used only to scope and prepare the requested diligence. Target entities are never notified of inquiries.
                </p>
                <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-medium text-slate-700">
                  <Clock className="h-4 w-4 text-accent-600" />
                  Standard Delivery: 48 Hours | Express: 24 Hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
