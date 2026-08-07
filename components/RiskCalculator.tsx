"use client";

import { useState } from "react";
import { ShieldCheck, TrendingUp, AlertTriangle, ArrowRight, CheckCircle2, Sparkles, Building2, Landmark, Briefcase, Truck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

interface CounterpartyType {
  id: string;
  name: string;
  icon: typeof Building2;
  avgDealLakhs: number;
  defaultRiskRate: number; // in percentage
  recommendedTier: string;
  reportPrice: number;
}

const COUNTERPARTY_TYPES: CounterpartyType[] = [
  {
    id: "vendor",
    name: "Vendors & Suppliers",
    icon: Truck,
    avgDealLakhs: 25,
    defaultRiskRate: 3.8,
    recommendedTier: "Vendor Risk (Procurement)",
    reportPrice: 2499,
  },
  {
    id: "borrower",
    name: "SME Borrowers / Debt",
    icon: Landmark,
    avgDealLakhs: 150,
    defaultRiskRate: 5.2,
    recommendedTier: "Lender Credit Diligence",
    reportPrice: 3999,
  },
  {
    id: "investee",
    name: "Investees & Startups",
    icon: TrendingUp,
    avgDealLakhs: 500,
    defaultRiskRate: 8.5,
    recommendedTier: "Investor Red Flag Report",
    reportPrice: 6999,
  },
  {
    id: "partner",
    name: "JV & Distributors",
    icon: Briefcase,
    avgDealLakhs: 75,
    defaultRiskRate: 4.2,
    recommendedTier: "Comprehensive 360",
    reportPrice: 4999,
  },
];

export function RiskCalculator() {
  const [selectedType, setSelectedType] = useState<CounterpartyType>(COUNTERPARTY_TYPES[0]);
  const [annualCount, setAnnualCount] = useState<number>(12);
  const [dealValueLakhs, setDealValueLakhs] = useState<number>(25);

  const totalExposureCr = (annualCount * dealValueLakhs) / 100;
  const potentialRiskExposureLakhs = (totalExposureCr * 100 * (selectedType.defaultRiskRate / 100));
  const totalDiligenceCost = annualCount * selectedType.reportPrice;
  const roiMultiplier = Math.round((potentialRiskExposureLakhs * 100000) / totalDiligenceCost);

  const handleSelectType = (type: CounterpartyType) => {
    setSelectedType(type);
    setDealValueLakhs(type.avgDealLakhs);
    trackEvent("calculator_type_changed", { type: type.id });
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50 shadow-lift">
      <div className="border-b border-slate-200/80 bg-slate-900 px-6 py-6 text-white sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              <Sparkles className="h-3.5 w-3.5" />
              Interactive ROI & Risk Estimator
            </div>
            <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl">
              Counterparty Risk & Due Diligence Calculator
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              Estimate your annual financial exposure and calculate the ROI of pre-contract public record verification.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 p-6 lg:grid-cols-12 lg:p-8">
        {/* Controls Column */}
        <div className="space-y-6 lg:col-span-7">
          {/* Step 1: Select Type */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              1. Select Counterparty Category
            </label>
            <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {COUNTERPARTY_TYPES.map((t) => {
                const Icon = t.icon;
                const isSelected = selectedType.id === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleSelectType(t)}
                    className={`flex flex-col items-center justify-center rounded-xl border p-3.5 text-center transition-all ${
                      isSelected
                        ? "border-accent-600 bg-accent-50/60 text-accent-950 ring-2 ring-accent-500/20"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isSelected ? "text-accent-600" : "text-slate-500"}`} />
                    <span className="mt-2 text-xs font-semibold">{t.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Slider 1 - Annual Count */}
          <div className="rounded-2xl border border-slate-200/70 bg-white p-5">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700">
                Number of entities onboarded per year:
              </label>
              <span className="rounded-lg bg-slate-100 px-3 py-1 font-mono text-base font-bold text-brand">
                {annualCount} entities
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={annualCount}
              onChange={(e) => setAnnualCount(Number(e.target.value))}
              className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-accent-600"
            />
            <div className="mt-2 flex justify-between text-xs text-slate-400">
              <span>1 / year</span>
              <span>25 / year</span>
              <span>50 / year</span>
              <span>100+ / year</span>
            </div>
          </div>

          {/* Step 3: Slider 2 - Average Deal / Contract Value */}
          <div className="rounded-2xl border border-slate-200/70 bg-white p-5">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700">
                Average transaction / credit exposure per entity:
              </label>
              <span className="rounded-lg bg-slate-100 px-3 py-1 font-mono text-base font-bold text-brand">
                ₹{dealValueLakhs >= 100 ? `${(dealValueLakhs / 100).toFixed(1)} Cr` : `${dealValueLakhs} Lakhs`}
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="1000"
              step="5"
              value={dealValueLakhs}
              onChange={(e) => setDealValueLakhs(Number(e.target.value))}
              className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-accent-600"
            />
            <div className="mt-2 flex justify-between text-xs text-slate-400">
              <span>₹5 Lakhs</span>
              <span>₹50 Lakhs</span>
              <span>₹2.5 Cr</span>
              <span>₹10 Cr+</span>
            </div>
          </div>
        </div>

        {/* Output Metrics Card */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-900 to-brand p-6 text-white lg:col-span-5">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Calculated Exposure & Risk Summary
            </span>

            <div className="mt-4 space-y-4">
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <span className="text-xs text-slate-300">Total Annual Commercial Exposure Under Review</span>
                <div className="mt-1 font-display text-2xl font-bold text-white">
                  ₹{totalExposureCr.toFixed(2)} Crores
                </div>
                <p className="mt-1 text-xs text-slate-300">
                  {annualCount} entities × ₹{dealValueLakhs >= 100 ? `${(dealValueLakhs / 100).toFixed(1)} Cr` : `${dealValueLakhs} Lakhs`} average exposure
                </p>
              </div>

              <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-4">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                  <ShieldCheck className="h-4 w-4" />
                  Total Diligence Investment
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-2xl font-bold text-emerald-300">
                    ₹{totalDiligenceCost.toLocaleString("en-IN")}
                  </span>
                  <span className="text-xs text-emerald-400/80 font-medium">
                    ({annualCount} × ₹{selectedType.reportPrice.toLocaleString("en-IN")})
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Source-backed verification for your entire annual counterparty onboarding.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/60 bg-slate-800/50 p-3.5 text-xs leading-relaxed text-slate-300">
                <span className="font-semibold text-slate-200">Note:</span> The calculator compares diligence cost with the value of commercial exposure being reviewed. It does not estimate the probability of default or guarantee avoided losses.
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10">
            <Button
              href={`/order?type=${selectedType.id}&count=${annualCount}`}
              variant="accent"
              className="w-full justify-center py-3 text-sm font-semibold shadow-lg shadow-accent-500/30"
            >
              Order Diligence For {annualCount} {selectedType.name}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <p className="mt-2 text-center text-xs text-slate-400">
              Turnaround: 24–48 hours · Fixed price · GST invoice available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
