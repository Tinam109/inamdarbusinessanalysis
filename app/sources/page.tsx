import type { Metadata } from "next";
import { Check, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DisclaimerBlock, ContactSection } from "@/components/Sections";
import { sourceCategories, sourceLimitations } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sources & Coverage — What Public Records We Search",
  description:
    "The public and credible sources an Inamdar Business Analysis report can cover — corporate (MCA/ROC), tax (GST, EPFO/ESIC), litigation (courts, tribunals, NCLT/IBC), regulatory and caution references, and director/promoter linkages. Coverage depends on scope and public-record availability.",
  alternates: { canonical: "/sources" },
  openGraph: {
    title: "Sources & Coverage | Inamdar Business Analysis",
    description:
      "Corporate, tax, litigation, regulatory and linkage sources we can search — with honest limitations.",
  },
};

export default function SourcesPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-12 pt-32 sm:px-8 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]" />
        <div className="container-x">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-100 bg-accent-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
              Sources &amp; coverage
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-brand sm:text-5xl">
              The public records we can search
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-500">
              What a report can cover depends on scope, entity type, the identifiers available and what is publicly accessible. These are the source categories we typically draw on — every material finding is source-linked and dated.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad pt-8">
        <div className="container-x">
          <RevealGroup className="grid gap-5 md:grid-cols-2">
            {sourceCategories.map((cat) => (
              <RevealItem key={cat.title}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                  <h2 className="font-display text-lg font-semibold text-brand">
                    {cat.title}
                  </h2>
                  <ul className="mt-4 space-y-2.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border border-accent-100 bg-accent-50">
                          <Check className="h-3 w-3 text-accent-700" />
                        </span>
                        <span className="text-sm text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Limitations */}
          <Reveal>
            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <div className="flex items-center gap-2 font-display text-lg font-semibold text-brand">
                <Info className="h-5 w-5 text-brand-500" />
                Coverage limitations
              </div>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {sourceLimitations.map((l) => (
                  <li key={l} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-amber-500" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button href="/methodology" variant="secondary" size="lg">
                How we prepare reports
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
