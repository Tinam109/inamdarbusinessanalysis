"use client";

import { useState } from "react";
import { Download, CheckCircle2, FileText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";
import { getAttributionData } from "@/lib/utm";

const PDF_URL = "/inamdar-sample-report.pdf";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base lg:text-sm text-brand placeholder:text-slate-400 outline-none transition-colors focus:border-accent-400 focus:ring-2 focus:ring-accent-100";
const labelClass = "mb-1.5 block text-xs font-medium text-slate-600";

function triggerDownload() {
  const a = document.createElement("a");
  a.href = PDF_URL;
  a.download = "Inamdar-Business-Analysis-Sample-Report.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function SampleReportGate() {
  const [done, setDone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const attribution = getAttributionData();
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      source: "sample-report",
      ...attribution,
    };

    try {
      const response = await fetch("/api/sample-report-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error || "Could not save your details. Please try again.");
      }

      trackEvent("sample_report_downloaded", {
        page: "/sample-report",
        has_email: Boolean(payload.email),
        has_phone: Boolean(payload.phone),
      });

      setDone(true);
      triggerDownload();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save your details. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="card flex flex-col items-center gap-4 p-8 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent-100 bg-accent-50">
          <CheckCircle2 className="h-7 w-7 text-accent-600" />
        </div>
        <h3 className="font-display text-xl font-semibold text-brand">
          Your download is ready
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-slate-500">
          The sample report should be downloading now. If it didn&apos;t start,
          use the button below.
        </p>
        <Button onClick={triggerDownload} size="lg" type="button">
          <Download className="h-4 w-4" />
          Download the sample (PDF)
        </Button>
        <Button href="/#contact" variant="ghost" size="sm">
          Request a report on a real entity
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-5 sm:p-8">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
        <FileText className="h-4 w-4" />
        Free sample report
      </div>
      <h3 className="mt-3 font-display text-xl font-semibold text-brand">
        Where should we send it?
      </h3>
      <p className="mt-1.5 text-sm text-slate-500">
        Enter your details and the PDF downloads instantly. No spam.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClass}
            placeholder="Your full name"
            autoComplete="name"
            enterKeyHint="next"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="you@company.com"
            autoComplete="email"
            enterKeyHint="next"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={inputClass}
            placeholder="+91 ..."
            autoComplete="tel"
            enterKeyHint="done"
          />
        </div>
      </div>

      {error && (
        <p className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <Button type="submit" size="lg" className="mt-6 w-full" disabled={isSubmitting}>
        <Download className="h-4 w-4" />
        {isSubmitting ? "Saving details..." : "Download the sample report"}
      </Button>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-400">
        <ShieldCheck className="h-3.5 w-3.5 text-accent-600" />
        Your details are used only to share the sample and follow up.
      </p>
    </form>
  );
}
