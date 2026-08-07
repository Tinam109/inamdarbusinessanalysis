"use client";

import { ShieldAlert, AlertTriangle, CheckCircle2, TrendingDown, ArrowRight, Building, Landmark, Factory, Scale } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface CaseStudy {
  id: string;
  category: string;
  clientType: string;
  targetDealSize: string;
  riskDiscovered: string;
  outcome: string;
  financialSaved: string;
  icon: typeof Building;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "nbfc-loan",
    category: "Lender Credit Diligence",
    clientType: "Mid-Market NBFC",
    targetDealSize: "₹4.5 Cr Working Capital Facility",
    riskDiscovered: "Prior Floating Charge on Book Debts & Unregistered Director Resignations",
    outcome: "Lender identified a pre-existing ₹3.8 Cr floating charge registered with Union Bank, clarifying collateral priorities before sanction.",
    financialSaved: "Primary charge risk identified",
    icon: Landmark,
  },
  {
    id: "vendor-oem",
    category: "Vendor Risk (Procurement)",
    clientType: "Automotive Tier-1 Manufacturer",
    targetDealSize: "₹1.2 Cr Advance Component Supply",
    riskDiscovered: "Active Section 138 (Cheque Bounce) Criminal Cases & GSTR-3B Mismatch",
    outcome: "Identified 3 active criminal proceedings under Negotiable Instruments Act filed by sub-vendors against the supplier in Esplanade Court, Mumbai.",
    financialSaved: "Counterparty risk identified",
    icon: Factory,
  },
  {
    id: "vc-seed",
    category: "Investor Red Flag Report",
    clientType: "Early-Stage VC Fund",
    targetDealSize: "₹6.0 Cr Pre-Series A Investment",
    riskDiscovered: "2 Struck-Off Directorships & Undisclosed Material Arbitration",
    outcome: "Promoter background check revealed the co-founder had a previous private limited entity struck off by ROC Mumbai under Section 248 for non-compliance.",
    financialSaved: "Struck-off entity risk identified",
    icon: Building,
  },
  {
    id: "epc-contractor",
    category: "Litigation & Compliance Check",
    clientType: "Infrastructure & EPC Firm",
    targetDealSize: "₹8.0 Cr Subcontracting Tender",
    riskDiscovered: "EPFO & Labor Non-Compliance Penalty Notices",
    outcome: "Uncovered pending statutory recovery notices under EPF & MP Act 1952 relevant to joint statutory employer obligations.",
    financialSaved: "Joint liability risk identified",
    icon: Scale,
  },
];

export function CaseStudies() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-100 bg-accent-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
            Illustrative Diligence Scenarios
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand sm:text-4xl">
            How Public-Record Verification Informs Business Decisions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            The following examples are hypothetical scenarios illustrating how public-record findings may affect business decisions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((cs) => {
            const Icon = cs.icon;
            return (
              <div
                key={cs.id}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-lift transition-all hover:border-slate-300"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-brand">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-accent-700">{cs.category}</span>
                        <div className="text-xs text-slate-500">{cs.clientType}</div>
                      </div>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-semibold text-slate-700">
                      {cs.targetDealSize}
                    </span>
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-3.5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800">
                        <AlertTriangle className="h-3.5 w-3.5" />
                        Critical Risk Discovered
                      </div>
                      <p className="mt-1 text-xs font-medium text-slate-900">
                        {cs.riskDiscovered}
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                        Action Taken & Mitigation
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600">
                        {cs.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <TrendingDown className="h-4 w-4 text-emerald-600" />
                    {cs.financialSaved}
                  </div>
                  <Button href="/order" variant="secondary" size="sm">
                    Order Similar Check
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
