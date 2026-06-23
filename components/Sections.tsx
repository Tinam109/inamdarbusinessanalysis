import { ShieldAlert, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ScheduleCall } from "@/components/ScheduleCall";
import { DISCLAIMER } from "@/lib/content";

/** Verbatim disclaimer block — reused on every page. */
export function DisclaimerBlock() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col gap-4 rounded-2xl border border-amber-200 bg-amber-50/60 p-7 sm:flex-row sm:items-start sm:gap-5">
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-amber-200 bg-amber-100 text-amber-700">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-brand">
                Important — what this report is and is not
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {DISCLAIMER}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Contact / scheduling section — reused on every page. */
export function ContactSection() {
  return (
    <section id="contact" className="section-pad scroll-mt-20">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Request a Report"
            title={
              <>
                Book a quick call to{" "}
                <span className="text-gradient">get started</span>
              </>
            }
            description="Tell us who you need checked over a 15-minute call, or reach out directly on WhatsApp. We'll confirm scope, turnaround and next steps."
          />
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {[
              "Source-backed findings with links",
              "Clear date of search on every report",
              "Scope tailored to your decision",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-slate-600">
                <ArrowRight className="h-4 w-4 text-accent-600" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delayIndex={1}>
          <div className="mt-10">
            <ScheduleCall />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Reusable CTA banner. */
export function CTABanner({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="section-pad">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand px-7 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -inset-x-20 -top-24 h-48 bg-gradient-to-b from-accent-500/20 to-transparent blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-grid-faint opacity-[0.15] [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-brand-200">
                {description}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  href="/#contact"
                  size="lg"
                  className="bg-white text-brand hover:bg-slate-100"
                >
                  Request a Report
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  href="/#report-scope"
                  size="lg"
                  className="border border-white/25 bg-transparent text-white hover:bg-white/10"
                >
                  View Report Scope
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Hero used by sub-pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  bullets,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  bullets?: string[];
}) {
  return (
    <section className="relative overflow-hidden px-5 pb-12 pt-32 sm:px-8 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]" />
      <div className="container-x">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-100 bg-accent-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
            {eyebrow}
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-brand sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-500">
            {description}
          </p>
          {bullets && (
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                  {b}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/#contact" size="lg">
              Request a Report
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/#report-scope" variant="secondary" size="lg">
              View Report Scope
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
