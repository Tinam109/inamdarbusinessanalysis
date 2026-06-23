import type { Metadata } from "next";
import { ShieldAlert, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DisclaimerBlock, ContactSection } from "@/components/Sections";
import { methodologySteps, DISCLAIMER } from "@/lib/content";

export const metadata: Metadata = {
  title: "How We Prepare Public-Records Risk Reports | Methodology",
  description:
    "Our methodology for preparing source-linked Indian public-record business risk reports — scope definition, identifier matching, source selection, false-positive filtering, risk tagging, human review and confidentiality.",
  alternates: { canonical: "/methodology" },
  openGraph: {
    title: "How We Prepare Public-Records Risk Reports",
    description:
      "Scope, identifier matching, source selection, false-positive filtering, risk tagging and human review — the disciplined way every report is built.",
  },
};

export default function MethodologyPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-12 pt-32 sm:px-8 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]" />
        <div className="container-x">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-100 bg-accent-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
              Methodology
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-brand sm:text-5xl">
              How we prepare public-records risk reports
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-500">
              Every report follows the same disciplined process — anchored to verifiable identifiers, drawn from public and credible sources, filtered for false positives, and reviewed by a human before it reaches you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Steps */}
      <section className="section-pad pt-8">
        <div className="container-x">
          <RevealGroup className="grid gap-4">
            {methodologySteps.map((step, i) => (
              <RevealItem key={step.title}>
                <div className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand text-sm font-semibold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-semibold text-brand">
                      {step.title}
                    </h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Limitations callout */}
          <Reveal>
            <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-amber-200 bg-amber-50/60 p-7 sm:flex-row sm:items-start sm:gap-5">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-amber-200 bg-amber-100 text-amber-700">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-brand">
                  Honest about limitations
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {DISCLAIMER} Public-record availability varies, name-based searches can produce false positives, and absence of a result does not prove absence of risk. We state what was in and out of scope on every report.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button href="/sources" variant="secondary" size="lg">
                See sources &amp; coverage
              </Button>
              <Button href="/#contact" size="lg">
                Get scope &amp; quote
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <DisclaimerBlock />
      <ContactSection />
    </>
  );
}
