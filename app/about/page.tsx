import type { Metadata } from "next";
import { ShieldCheck, Link2, Eye, ScrollText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, IconTile } from "@/components/ui/Card";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LogoMark } from "@/components/Logo";
import { ContactSection } from "@/components/Sections";

export const metadata: Metadata = {
  title: "About, The People Behind the Reports",
  description:
    "About Inamdar Business Analysis, a human-reviewed, source-linked Indian public-record risk reporting service built on careful methodology, public-record-only sourcing and honest reporting.",
  alternates: { canonical: "/about" },
};

// NOTE: Placeholders in [brackets] are for the founder to replace with real details.
const principles = [
  { icon: Link2, title: "Source-linked, always", desc: "Every material finding points to where it came from and the date it was searched. If we can't source it, we don't assert it." },
  { icon: Eye, title: "Public records only", desc: "We work strictly with public and credible records and information you provide, never surveillance or non-public methods." },
  { icon: ScrollText, title: "Careful, neutral reporting", desc: "We report what the records show in plain language, flag match-confidence, and never overstate or editorialise." },
  { icon: ShieldCheck, title: "Decision-support, not verdicts", desc: "Our reports inform your decision. They are not credit ratings, legal opinions, private investigations or guarantees." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-12 pt-32 sm:px-8 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]" />
        <div className="container-x">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-100 bg-accent-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
              About
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-brand sm:text-5xl">
              Human-reviewed reports, built on public records
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-500">
              Inamdar Business Analysis prepares source-linked Indian public-record risk reports, written for real business decisions, checking companies, vendors, promoters and counterparties before you sign, invest, lend or onboard.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founder */}
      <section className="section-pad pt-8">
        <div className="container-x">
          <Reveal>
            <div className="grid items-center gap-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-soft sm:p-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div className="flex flex-col items-center text-center">
                {/* TODO: replace with founder photo */}
                <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-brand-50">
                  <LogoMark className="h-16 w-16" gradientId="iba-about" />
                </div>
                <div className="mt-4 font-display text-lg font-semibold text-brand">
                  [Founder name]
                </div>
                <div className="text-sm text-slate-500">[Role / title]</div>
              </div>
              <div>
                <SectionHeading
                  eyebrow="The founder"
                  title="Why this service exists"
                />
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
                  <p>
                    [Founder name] founded Inamdar Business Analysis after seeing how often
                    Indian businesses commit (signing contracts, onboarding vendors,
                    investing or lending) on the strength of an introduction, a GST number
                    and a polished website, without checking the public-record risk
                    indicators that already exist.
                  </p>
                  <p>
                    [Add background: relevant experience in compliance / due diligence /
                    legal research / company secretarial / finance, years of experience,
                    and any qualifications. Keep it modest and factual.]
                  </p>
                  <p>
                    The aim is simple: turn scattered public records into a clear,
                    source-linked risk picture that a busy decision-maker can actually
                    use, prepared carefully, honestly, and without overclaiming.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="section-pad pt-0">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="What we stand for"
              title="Principles we won't compromise on"
              align="center"
            />
          </Reveal>
          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <RevealItem key={p.title}>
                <Card className="h-full">
                  <IconTile>
                    <p.icon className="h-5 w-5" />
                  </IconTile>
                  <h3 className="mt-4 font-display text-base font-semibold text-brand">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                    {p.desc}
                  </p>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal>
            <div className="mt-10 flex justify-center">
              <Button href="/methodology" variant="secondary" size="lg">
                Read our methodology
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
