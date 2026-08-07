"use client";

import { useState } from "react";
import { ShieldCheck, AlertOctagon, AlertTriangle, CheckCircle, FileText, Scale, Landmark, Receipt, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ReportTab {
  id: string;
  label: string;
  icon: typeof FileText;
  badge?: string;
  badgeColor?: string;
}

const TABS: ReportTab[] = [
  { id: "exec", label: "Executive Summary & Scorecard", icon: FileText, badge: "Red Flag Identified", badgeColor: "bg-rose-500/10 text-rose-700 border-rose-200" },
  { id: "mca", label: "MCA & Charge Register", icon: Landmark, badge: "1 Active Charge", badgeColor: "bg-amber-500/10 text-amber-700 border-amber-200" },
  { id: "litigation", label: "Litigation & eCourts", icon: Scale, badge: "2 Cases Found", badgeColor: "bg-rose-500/10 text-rose-700 border-rose-200" },
  { id: "gst", label: "GST & Tax Filing Health", icon: Receipt, badge: "Active (Compliant)", badgeColor: "bg-emerald-500/10 text-emerald-700 border-emerald-200" },
  { id: "promoter", label: "Promoter Directorships", icon: Users, badge: "3 Entities Tracked", badgeColor: "bg-blue-500/10 text-blue-700 border-blue-200" },
];

export function SampleReportViewer() {
  const [activeTab, setActiveTab] = useState("exec");

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lift">
      {/* Header Bar simulating report metadata */}
      <div className="border-b border-slate-200 bg-slate-900 px-6 py-5 text-white sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded bg-accent-500/20 px-2 py-0.5 font-mono text-xs font-semibold text-accent-300">
                SAMPLE REPORT DEMO
              </span>
              <span className="font-mono text-xs text-slate-400">ID: IBA-2026-DL-8492</span>
            </div>
            <h3 className="mt-1.5 font-display text-xl font-bold sm:text-2xl">
              Target: Apex Logistics & Industrial Infrastructure Pvt Ltd
            </h3>
            <p className="mt-0.5 text-xs text-slate-300">
              CIN: U60200MH2018PTC319842 · Search Date: 07 August 2026 · Source Verified
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-rose-500/40 bg-rose-500/20 px-3.5 py-2 text-right">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-rose-300">Overall Risk Level</div>
              <div className="font-display text-base font-bold text-white">MEDIUM-HIGH RISK</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="flex overflow-x-auto border-b border-slate-200 bg-slate-50 px-4 py-2 sm:px-6">
        <div className="flex gap-2">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-white text-brand shadow-sm ring-1 ring-slate-200"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-accent-600" : "text-slate-400"}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${tab.badgeColor}`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content Display */}
      <div className="p-6 sm:p-8">
        {activeTab === "exec" && (
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-rose-800">
                  <AlertOctagon className="h-4 w-4 text-rose-600" />
                  MCA Charge Flag
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-900">
                  ₹4.25 Cr Floating Charge
                </div>
                <p className="mt-1 text-xs text-slate-600">
                  Open floating charge on book debts & plant machinery registered with Union Bank of India (Active since Jan 2023).
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-800">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                  Active Commercial Suit
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-900">
                  Section 138 NI Act Proceeding
                </div>
                <p className="mt-1 text-xs text-slate-600">
                  Dishonour of cheque (claim value ₹38.4 Lakhs) filed by raw material supplier in Mumbai Metropolitan Magistrate Court.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  Statutory & GST Status
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-900">
                  Active & Filing Regularly
                </div>
                <p className="mt-1 text-xs text-slate-600">
                  GST 3B and GSTR-1 filed without disruption up to June 2026. No cancellation or return suspension flagged.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
              <h4 className="font-display text-sm font-bold text-brand">
                Analyst Diligence Summary & Red Flag Synthesis
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                The target entity shows active commercial operations with regular tax filings. However, an undisclosed ₹4.25 Cr prior floating charge exists on all movable assets, and an active Section 138 cheque bounce proceeding was registered in Q4 2025. Recommended action for lender/procurement counterparty: Require explicit bank NOC regarding asset lien and escrow mechanism for advance payments exceeding ₹25 Lakhs.
              </p>
            </div>
          </div>
        )}

        {activeTab === "mca" && (
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold text-brand">
              MCA Index of Charges & Authorized Capital Register
            </h4>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 font-semibold text-slate-700">
                  <tr>
                    <th className="p-3">Charge ID</th>
                    <th className="p-3">Charge Holder / Bank</th>
                    <th className="p-3">Amount (INR)</th>
                    <th className="p-3">Date Created</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Collateral Asset Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr className="bg-rose-50/30">
                    <td className="p-3 font-mono font-medium text-slate-900">100582910</td>
                    <td className="p-3 font-medium text-slate-900">Union Bank of India</td>
                    <td className="p-3 font-bold text-rose-700">₹4,25,00,000</td>
                    <td className="p-3">14 Jan 2023</td>
                    <td className="p-3"><span className="rounded bg-rose-100 px-2 py-0.5 font-bold text-rose-800">OPEN / ACTIVE</span></td>
                    <td className="p-3">Hypothecation of book debts, inventories and plant machinery</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-medium text-slate-900">100349120</td>
                    <td className="p-3 font-medium text-slate-900">HDFC Bank Limited</td>
                    <td className="p-3 font-medium text-slate-700">₹1,50,00,000</td>
                    <td className="p-3">22 Jun 2020</td>
                    <td className="p-3"><span className="rounded bg-emerald-100 px-2 py-0.5 font-bold text-emerald-800">SATISFIED</span></td>
                    <td className="p-3">Commercial vehicle fleet loan (Satisfaction registered 18 Nov 2022)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "litigation" && (
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold text-brand">
              eCourts, High Court & Commercial Tribunal Proceedings
            </h4>
            <div className="space-y-3">
              <div className="rounded-xl border border-rose-200 bg-rose-50/40 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-rose-800">CC/1892/2025 · Section 138 NI Act</span>
                  <span className="rounded bg-rose-200/80 px-2 py-0.5 text-[11px] font-bold text-rose-900">Pending Trial</span>
                </div>
                <div className="mt-2 text-xs text-slate-700">
                  <strong>Forum:</strong> Court of Metropolitan Magistrate, Esplanade, Mumbai
                </div>
                <div className="text-xs text-slate-700">
                  <strong>Complainant:</strong> Steel Matrix Trading Corporation
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  Summary: Criminal complaint filed alleging return of dishonoured cheque for ₹38,40,000 issued against supply of structural steel. Next hearing scheduled for cross-examination.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-slate-800">ARB/402/2023 · Section 9 Arbitration Act</span>
                  <span className="rounded bg-slate-200 px-2 py-0.5 text-[11px] font-bold text-slate-700">Disposed (Settled)</span>
                </div>
                <div className="mt-2 text-xs text-slate-700">
                  <strong>Forum:</strong> High Court of Bombay (Commercial Division)
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  Interim relief petition filed by subcontractor regarding retention money. Matter referred to sole arbitrator and consent terms filed in December 2024.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "gst" && (
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold text-brand">
              GST Return Filing Track Record (GSTR-3B & GSTR-1)
            </h4>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5">
                <span className="text-xs text-slate-500">GST Identification Number</span>
                <div className="mt-1 font-mono text-sm font-bold text-slate-900">27AABCU9284K1Z4</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5">
                <span className="text-xs text-slate-500">Principal Place of Business</span>
                <div className="mt-1 text-sm font-bold text-slate-900">Andheri East, Mumbai, MH</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5">
                <span className="text-xs text-slate-500">Taxpayer Type</span>
                <div className="mt-1 text-sm font-bold text-emerald-700">Regular (Active)</div>
              </div>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-3.5 text-xs text-emerald-900">
              ✓ All monthly GSTR-3B returns from April 2025 to June 2026 filed within statutory grace periods. No e-way bill generation blocks detected.
            </div>
          </div>
        )}

        {activeTab === "promoter" && (
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold text-brand">
              Promoter & Key Managerial Directorship Cross-Checks
            </h4>
            <div className="space-y-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900">Rajesh V. Sharma</span>
                    <span className="ml-2 font-mono text-xs text-slate-500">(DIN: 08192840)</span>
                  </div>
                  <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">
                    Active Director (2 Companies)
                  </span>
                </div>
                <ul className="mt-2 list-inside list-disc text-xs text-slate-600">
                  <li>Apex Logistics & Industrial Infrastructure Pvt Ltd (Current)</li>
                  <li>Apex Cold Chain Terminals LLP (Designated Partner)</li>
                </ul>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900">Vikram S. Deshmukh</span>
                    <span className="ml-2 font-mono text-xs text-slate-500">(DIN: 07482910)</span>
                  </div>
                  <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">
                    Prior Struck-Off Entity Tracked
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-600">
                  Historical directorship in <em>Krona Cargo Solutions Pvt Ltd</em> (CIN U63090MH2016PTC284910) which was struck off under Section 248 of Companies Act in 2021 due to non-filing of financial statements.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CTA to order full custom report */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-slate-900 p-5 text-white sm:flex-row sm:p-6">
          <div>
            <h5 className="font-display text-base font-bold">
              Need this verified intelligence on your vendor, borrower or investee?
            </h5>
            <p className="text-xs text-slate-300">
              Delivered within 24–48 hours with source-backed records and clear risk ratings.
            </p>
          </div>
          <Button href="/order" variant="accent" size="sm" className="whitespace-nowrap">
            Order a Report (₹2,499)
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
