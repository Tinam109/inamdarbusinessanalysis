"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const purposes = [
  "Vendor onboarding",
  "Pre-contract check",
  "Investment screening",
  "Business credit check",
  "Franchise / dealership check",
  "Acquisition / partnership",
  "Monthly monitoring",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-cyan/50 focus:bg-ink-900";
const labelClass = "mb-1.5 block text-xs font-medium text-slate-300";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // TODO: Connect a form handler here.
    // Options: Formspree (POST to https://formspree.io/f/<id>),
    // Tally embed, or a Resend-backed /api/enquiry route.
    // For now this is frontend-only and simply shows a success state.
    //
    // Example (Formspree):
    //   const data = new FormData(e.currentTarget);
    //   await fetch("https://formspree.io/f/XXXX", {
    //     method: "POST",
    //     body: data,
    //     headers: { Accept: "application/json" },
    //   });

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="glass flex flex-col items-center gap-4 rounded-2xl p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald/30 bg-emerald/10">
          <CheckCircle2 className="h-7 w-7 text-emerald-soft" />
        </div>
        <h3 className="font-display text-xl font-semibold text-white">
          Enquiry received
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-slate-400">
          Thank you. This is a demo confirmation — once a form handler is
          connected, your enquiry will be routed to the team and you&apos;ll get
          a reply with scope and turnaround.
        </p>
        <Button variant="secondary" size="sm" onClick={() => setSubmitted(false)}>
          Submit another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Your full name" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone / WhatsApp
          </label>
          <input id="phone" name="phone" className={inputClass} placeholder="+91 ..." />
        </div>
        <div>
          <label htmlFor="entity" className={labelClass}>
            Entity to be checked
          </label>
          <input id="entity" name="entity" className={inputClass} placeholder="Company / vendor / promoter name" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="identifiers" className={labelClass}>
            Known identifiers — GSTIN / CIN / LLPIN / website
          </label>
          <input id="identifiers" name="identifiers" className={inputClass} placeholder="Any IDs you already have help us match faster" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="purpose" className={labelClass}>
            Purpose
          </label>
          <select id="purpose" name="purpose" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a purpose
            </option>
            {purposes.map((p) => (
              <option key={p} value={p} className="bg-ink-900">
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={inputClass}
            placeholder="Tell us about the entities, the decision you're making and your timeline."
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          We&apos;ll reply with scope, turnaround and next steps.
        </p>
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          <Send className="h-4 w-4" />
          Request a Report
        </Button>
      </div>
    </form>
  );
}
