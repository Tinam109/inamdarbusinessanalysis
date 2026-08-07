"use client";

import { useState, useTransition } from "react";
import { Shield, Clock, Send, CheckCircle2, MessageCircle, AlertCircle, Sparkles, Building, Landmark, TrendingUp, Scale, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

const REPORT_TIERS = [
  {
    id: "vendor",
    name: "Vendor Risk Report",
    audience: "Procurement & Supply Chain",
    price: "₹2,499",
    turnaround: "24–48 Hours",
    bullets: ["MCA Charge Register", "GST Filing Status", "Section 138 Cheque Bounce", "Basic Litigation"],
  },
  {
    id: "lender",
    name: "Lender Credit Diligence",
    audience: "NBFCs, Banks & Private Debt",
    price: "₹3,999",
    turnaround: "24–48 Hours",
    bullets: ["Asset Hypothecation Check", "Commercial Court Cases", "Director Disqualifications", "Tax Compliance"],
  },
  {
    id: "investor",
    name: "Investor Red Flag Report",
    audience: "VC, PE & Angel Investors",
    price: "₹6,999",
    turnaround: "48 Hours",
    bullets: ["Promoter Multi-Directorships", "Struck-Off Entities", "NCLT / Insolvency Scan", "Full 360 Scan"],
  },
  {
    id: "litigation",
    name: "Litigation & Compliance Check",
    audience: "CAs, Law Firms & General Counsel",
    price: "₹3,499",
    turnaround: "24–48 Hours",
    bullets: ["eCourts District & High Court", "Arbitration Proceedings", "EPFO & Labor Compliance", "Tribunal Filings"],
  },
];

export function OrderForm() {
  const [selectedTier, setSelectedTier] = useState("vendor");
  const [turnaround, setTurnaround] = useState<"standard" | "express">("standard");
  const [companyName, setCompanyName] = useState("");
  const [cin, setCin] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim() || !clientEmail.trim()) {
      setStatus("error");
      setErrorMessage("Please provide at least target company name and your email.");
      return;
    }

    startTransition(async () => {
      try {
        const res = await fetch("/api/sample-report-lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: clientName || "Order Inquiry",
            email: clientEmail,
            phone: clientPhone,
            entityName: companyName,
            turnaround,
            tier: selectedTier,
            notes,
            source: "order_page",
          }),
        });

        if (!res.ok) {
          throw new Error("Failed to process order. Please try again.");
        }

        setStatus("success");
        trackEvent("order_submitted", {
          tier: selectedTier,
          turnaround,
          companyName,
        });
      } catch (err: any) {
        setStatus("error");
        setErrorMessage(err.message || "Failed to submit request.");
      }
    });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Inamdar Business Analysis, I would like to order a ${selectedTier.toUpperCase()} diligence report for entity: "${companyName || 'Target Entity'}" (${turnaround.toUpperCase()} turnaround). My email is ${clientEmail || 'N/A'}.`
  );

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lift sm:p-8">
      {status === "success" ? (
        <div className="py-12 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="mt-4 font-display text-2xl font-bold text-slate-900">
            Order Request Received!
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
            Our analysts have received your target entity details (<strong>{companyName}</strong>). We will email you the formal scope confirmation and payment link within 30 minutes.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`https://wa.me/919900000000?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-emerald-700"
            >
              <MessageCircle className="h-4 w-4" />
              Fast-Track on WhatsApp
            </a>
            <Button href="/" variant="secondary">
              Back to Home
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1: Select Report Tier */}
          <div>
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Step 1: Select Report Package
              </label>
              <span className="text-xs text-accent-700 font-semibold">Fixed Pricing</span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {REPORT_TIERS.map((tier) => {
                const isSelected = selectedTier === tier.id;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => {
                      setSelectedTier(tier.id);
                      trackEvent("order_tier_selected", { tier: tier.id });
                    }}
                    className={`flex flex-col justify-between rounded-2xl border p-4 text-left transition-all ${
                      isSelected
                        ? "border-accent-600 bg-accent-50/50 ring-2 ring-accent-500/20"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-display text-sm font-bold text-slate-900">
                          {tier.name}
                        </span>
                        <span className="font-display text-base font-bold text-accent-700">
                          {tier.price}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-slate-500">{tier.audience}</p>
                    </div>

                    <ul className="mt-4 space-y-1.5 border-t border-slate-200/60 pt-3">
                      {tier.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                          <Check className="h-3 w-3 text-emerald-600" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Target Entity Details */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Step 2: Target Indian Entity Information
            </label>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Target Company / LLP / Entity Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Acme Industrial Technologies Pvt Ltd"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition-all focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700">
                  CIN / GSTIN / PAN (Optional if known)
                </label>
                <input
                  type="text"
                  value={cin}
                  onChange={(e) => setCin(e.target.value)}
                  placeholder="e.g. U74999MH2019PTC123456"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition-all focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                />
              </div>
            </div>
          </div>

          {/* Step 3: Turnaround Preference */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Step 3: Turnaround Speed
            </label>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setTurnaround("standard")}
                className={`flex items-center justify-between rounded-xl border p-3.5 text-left text-xs transition-all ${
                  turnaround === "standard"
                    ? "border-accent-600 bg-accent-50/50 font-semibold text-brand"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <div>
                  <div className="font-bold">Standard Delivery</div>
                  <div className="text-[11px] text-slate-500">48 Hours (Included)</div>
                </div>
                <Clock className="h-4 w-4 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={() => setTurnaround("express")}
                className={`flex items-center justify-between rounded-xl border p-3.5 text-left text-xs transition-all ${
                  turnaround === "express"
                    ? "border-accent-600 bg-accent-50/50 font-semibold text-brand"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <div>
                  <div className="font-bold">Express Priority</div>
                  <div className="text-[11px] text-slate-500">24 Hours Guaranteed</div>
                </div>
                <Sparkles className="h-4 w-4 text-amber-500" />
              </button>
            </div>
          </div>

          {/* Step 4: Client Contact Details */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Step 4: Your Contact & Invoice Details
            </label>
            <div className="mt-3 grid gap-4 sm:grid-cols-3">
              <div>
                <label className="block text-xs font-medium text-slate-700">Your Full Name</label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Rahul Mehta"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition-all focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Work Email <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition-all focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700">Phone / WhatsApp</label>
                <input
                  type="tel"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition-all focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-xs font-medium text-slate-700">
                Special checks or key concerns (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Please check if there are any charges filed against factory in Pune or pending arbitration."
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm outline-none transition-all focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
              />
            </div>
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700">
              <AlertCircle className="h-4 w-4 flex-none" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-accent-700 disabled:opacity-50"
            >
              {isPending ? (
                "Submitting..."
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Submit Diligence Request
                </>
              )}
            </button>

            <a
              href={`https://wa.me/919900000000?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
            >
              <MessageCircle className="h-4 w-4" />
              Prefer to order directly on WhatsApp? Click here
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
