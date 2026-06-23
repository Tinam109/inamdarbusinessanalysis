import { ShieldAlert, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { DISCLAIMER } from "@/lib/content";

/** Verbatim disclaimer block — reused on every page. */
export function DisclaimerBlock() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <Reveal>
          <div className="glass flex flex-col gap-4 rounded-2xl border-gold/15 p-7 sm:flex-row sm:items-start sm:gap-5">
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-gold/30 bg-gold/10">
              <ShieldAlert className="h-5 w-5 text-gold-soft" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-white">
                Important — what this report is and is not
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {DISCLAIMER}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Contact / enquiry section — reused on every page. */
export function ContactSection() {
  return (
    <section id="contact" className="section-pad scroll-mt-20">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Request a Report"
              title={
                <>
                  Tell us who you need
                  <br />
                  <span className="text-gradient">checked</span>
                </>
              }
              description="Share the entity and what decision you're making. We'll reply with scope, turnaround and next steps. The more identifiers you provide, the faster we can match records."
            />
            <ul className="mt-8 space-y-3 text-sm text-slate-400">
              {[
                "Source-backed findings with links",
                "Clear date of search on every report",
                "Scope tailored to your decision",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <ArrowRight className="h-4 w-4 text-emerald-soft" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delayIndex={1}>
            <ContactForm />
          </Reveal>
        </div>
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
          <div className="glass-strong relative overflow-hidden rounded-3xl px-7 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
            <div className="pointer-events-none absolute -inset-x-20 -top-24 h-48 bg-gradient-to-b from-cyan/10 to-transparent blur-3xl" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400">
                {description}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/#contact" size="lg">
                  Request a Report
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/#report-scope" variant="secondary" size="lg">
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
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-soft">
            {eyebrow}
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
            {description}
          </p>
          {bullets && (
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-soft" />
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
