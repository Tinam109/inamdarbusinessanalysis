"use client";

import { useState } from "react";
import { MessageSquare, ArrowRight, CheckCircle2, Building2, Mail, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

interface DiscussCompanyFormProps {
  defaultCategory?: string;
  className?: string;
}

export function DiscussCompanyForm({ defaultCategory = "Vendor Risk", className = "" }: DiscussCompanyFormProps) {
  const [entityName, setEntityName] = useState("");
  const [evaluationType, setEvaluationType] = useState(defaultCategory);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!entityName || !email) return;

    setIsSubmitting(true);
    trackEvent("discuss_company_submit", {
      entity_name: entityName,
      evaluation_type: evaluationType,
    });

    try {
      await fetch("/api/sample-report-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Discuss Company Lead",
          email,
          phone,
          entityName,
          evaluationType,
          leadType: "Discuss a Company",
        }),
      });
    } catch {
      // Ignore API errors for client feedback
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`rounded-3xl border border-emerald-200 bg-emerald-50/70 p-8 text-center shadow-soft ${className}`}>
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lift">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-brand">
          Entity Received for Discussion
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-md mx-auto">
          Our analysts are checking initial public index availability for <strong className="text-brand">{entityName}</strong>. We will reach out to <strong className="text-brand">{email}</strong> within 60 minutes with suggested scope and turnaround options.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            Confidential Handling
          </span>
          <span>·</span>
          <span>No Obligation</span>
          <span>·</span>
          <span>24–48h Turnaround</span>
        </div>
      </div>
    );
  }

  return (
    <div id="discuss" className={`scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-lift sm:p-8 ${className}`}>
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-700">
        <MessageSquare className="h-4 w-4" />
        Free Scope Discussion
      </div>
      <h3 className="mt-2 font-display text-2xl font-bold text-brand">
        Discuss a Company Before Ordering
      </h3>
      <p className="mt-1 text-sm text-slate-500">
        Tell us which entity you are evaluating. We will verify public record coverage and suggest the right diligence scope—no payment or commitment required.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700">
            Company / Entity Name under evaluation <span className="text-rose-500">*</span>
          </label>
          <div className="relative mt-1.5">
            <Building2 className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              required
              placeholder="e.g. Acme Logistics Pvt Ltd or CIN / GSTIN"
              value={entityName}
              onChange={(e) => setEntityName(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-accent-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/20"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-slate-700">
              Evaluation Context
            </label>
            <select
              value={evaluationType}
              onChange={(e) => setEvaluationType(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 px-3.5 text-sm text-slate-900 transition-colors focus:border-accent-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/20"
            >
              <option value="Vendor Risk">Vendor / Supplier Onboarding</option>
              <option value="SME Credit">SME Lending / Borrower Diligence</option>
              <option value="Investment">Equity / Investor Red Flag Check</option>
              <option value="Litigation">Litigation & Statutory Compliance</option>
              <option value="Other">Other Counterparty Evaluation</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700">
              Work Email <span className="text-rose-500">*</span>
            </label>
            <div className="relative mt-1.5">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-accent-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/20"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700">
            WhatsApp / Phone Number <span className="text-slate-400 font-normal">(Optional for faster response)</span>
          </label>
          <div className="relative mt-1.5">
            <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="tel"
              placeholder="+91 98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-accent-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/20"
            />
          </div>
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full justify-center text-sm font-semibold shadow-soft"
          >
            {isSubmitting ? "Submitting Entity..." : "Discuss This Company — Get Free Scope Suggestion"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <p className="text-center text-xs text-slate-500">
          Enquiry handled confidentially · No target notification · 100% public-records compliance
        </p>
      </form>
    </div>
  );
}
