import type { Metadata } from "next";
import Image from "next/image";
import {
  Fingerprint,
  Gauge,
  Gavel,
  Network,
  Link2,
  ShieldCheck,
  FileText,
  Check,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SampleReportGate } from "@/components/SampleReportGate";
import { DisclaimerBlock, ContactSection } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Sample Business Risk Report, Download the PDF",
  description:
    "Download an illustrative, fictional sample of an Inamdar Business Analysis public-record risk report: identity match, risk rating and tags, litigation table, director linkages, source appendix and disclaimer.",
  alternates: { canonical: "/sample-report" },
  openGraph: {
    title: "Sample Business Risk Report (PDF)",
    description:
      "See exactly what you receive: a clean, source-linked public-record risk report. Download the fictional sample.",
  },
};

const inside = [
  { icon: Fingerprint, label: "Entity identity & key identifiers" },
  { icon: Gauge, label: "Overall risk rating & risk tags" },
  { icon: FileText, label: "Executive summary" },
  { icon: Gavel, label: "Litigation search table" },
  { icon: ShieldCheck, label: "Regulatory, debarment & insolvency" },
  { icon: Network, label: "Director / promoter linkage" },
  { icon: Link2, label: "Source appendix & date of search" },
];

export default function SampleReportPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-12 pt-32 sm:px-8 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]" />
        <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[360px] w-[700px] -translate-x-1/2 rounded-full bg-accent-100/40 blur-[120px]" />
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left: pitch + preview */}
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-100 bg-accent-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
              Sample report
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-brand sm:text-5xl">
              See exactly what you&apos;ll receive
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-500">
              A clean, source-linked PDF written for a real decision. Download the
              fictional sample for <span className="font-medium text-brand">ABC Industrial
              Supplies Pvt Ltd</span> to see the structure, risk rating and tone.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {inside.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-accent-100 bg-accent-50 text-accent-700">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-slate-600">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs text-slate-500 shadow-soft">
              <Check className="h-3.5 w-3.5 text-accent-600" />
              4-page PDF | illustrative and fictional | no real entity
            </div>
          </Reveal>

          {/* Right: cover preview + gate form */}
          <Reveal delayIndex={1}>
            <div className="space-y-6">
              <div className="relative mx-auto w-full max-w-[300px]">
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-accent-100/50 to-brand-50/40 blur-2xl" />
                <Image
                  src="/sample-report-cover.png"
                  alt="Sample report cover preview"
                  width={794}
                  height={1123}
                  className="w-full rounded-xl border border-slate-200 shadow-lift"
                  priority
                />
              </div>
              <SampleReportGate />
            </div>
          </Reveal>
        </div>
      </section>

      <DisclaimerBlock />
      <ContactSection />
    </>
  );
}
