import {
  ArrowRight,
  Building2,
  ReceiptText,
  Users,
  Scale,
  ShoppingCart,
  Landmark,
  Gavel,
  ShieldAlert,
  Network,
  FileWarning,
  Eye,
  FileText,
  Link2,
  CalendarClock,
  Fingerprint,
  Table,
  ClipboardCheck,
  Flag,
  GitBranch,
  Gauge,
  Check,
  TrendingUp,
  Briefcase,
  Banknote,
  Ship,
  Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, IconTile } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { HeroDashboard } from "@/components/HeroDashboard";
import { RiskSignalTabs } from "@/components/RiskSignalTabs";
import { DisclaimerBlock, ContactSection } from "@/components/Sections";
import {
  reportScope,
  audiences,
  useCases,
  deliverables,
  pricingTiers,
} from "@/lib/content";

const scopeIcons = [
  Building2, ReceiptText, Users, Scale, Gavel, ReceiptText,
  ShieldAlert, Landmark, Eye, FileWarning, Network, FileWarning,
];

const audienceIcons = [Briefcase, TrendingUp, ShoppingCart, Banknote, Ship, Handshake];

const useCaseIcons = [
  ShoppingCart, FileText, TrendingUp, Banknote, Building2, Handshake, Eye,
];

const deliverableIcons = [
  FileText, Link2, CalendarClock, Fingerprint, Table, ClipboardCheck, Flag, GitBranch, Gauge,
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint [mask-image:radial-gradient(70%_55%_at_50%_0%,black,transparent)]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent-100/40 blur-[120px]" />
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <Badge tone="accent" dot>
              Public-records based risk intelligence
            </Badge>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-brand sm:text-5xl lg:text-6xl">
              Know who you are dealing with before you{" "}
              <span className="text-gradient">sign, invest, lend or onboard.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500">
              Source-backed public records reports for Indian companies, vendors,
              promoters and counterparties.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" size="lg">
                Request a Report
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#report-scope" variant="secondary" size="lg">
                View Report Scope
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
              {["Source-linked findings", "Clear date of search", "Neutral & factual"].map(
                (t) => (
                  <span key={t} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent-600" />
                    {t}
                  </span>
                ),
              )}
            </div>
          </Reveal>

          <Reveal delayIndex={1}>
            <HeroDashboard />
          </Reveal>
        </div>
      </section>

      {/* ============ PROBLEM ============ */}
      <section className="section-pad">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                eyebrow="The problem"
                title={
                  <>
                    Most business relationships start on{" "}
                    <span className="text-gradient">trust, not records.</span>
                  </>
                }
                description="Many businesses rely on introductions, polished websites, a GST number and a few basic documents — without ever checking the public-record risk indicators that already exist. By the time a dispute, default or compliance gap surfaces, the contract is signed, the cheque is cleared and the vendor is onboarded."
              />
              <div className="mt-8">
                <Button href="#report-scope" variant="ghost">
                  See what we check
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>

            <RevealGroup className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: <Users className="h-5 w-5" />, t: "An introduction", d: "“Someone we know vouched for them.”" },
                { icon: <ReceiptText className="h-5 w-5" />, t: "A GST number", d: "“They gave us a GSTIN, so they're real.”" },
                { icon: <Building2 className="h-5 w-5" />, t: "A website", d: "“The website looks professional enough.”" },
                { icon: <FileText className="h-5 w-5" />, t: "A few documents", d: "“They shared a couple of papers.”" },
              ].map((item) => (
                <RevealItem key={item.t}>
                  <Card className="h-full">
                    <IconTile className="border-amber-200 bg-amber-50 text-amber-700">
                      {item.icon}
                    </IconTile>
                    <h3 className="mt-4 font-display text-base font-semibold text-brand">
                      {item.t}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-500">{item.d}</p>
                  </Card>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* ============ REPORT SCOPE ============ */}
      <section id="report-scope" className="section-pad scroll-mt-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Report scope"
              title="What a report can cover"
              description="We compile risk indicators from official and credible public sources, match them to the entity and its people, and cite where each finding came from."
              align="center"
            />
          </Reveal>
          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reportScope.map((item, i) => {
              const Icon = scopeIcons[i] ?? FileText;
              return (
                <RevealItem key={item.title}>
                  <Card className="h-full">
                    <IconTile>
                      <Icon className="h-5 w-5" />
                    </IconTile>
                    <h3 className="mt-4 font-display text-base font-semibold text-brand">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                      {item.desc}
                    </p>
                  </Card>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* ============ INTERACTIVE RISK SIGNALS ============ */}
      <section id="risk-signals" className="section-pad scroll-mt-20 bg-slate-50">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Risk signals"
              title="The indicators we surface"
              description="Explore the categories of risk a report can highlight. Each is built from available public records and reported with its source and date of search."
            />
          </Reveal>
          <div className="mt-12">
            <RiskSignalTabs />
          </div>
        </div>
      </section>

      {/* ============ WHO IT'S FOR ============ */}
      <section id="who-its-for" className="section-pad scroll-mt-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Who it's for"
              title="Built for everyone who has to trust a counterparty"
              align="center"
            />
          </Reveal>
          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((a, i) => {
              const Icon = audienceIcons[i] ?? Users;
              return (
                <RevealItem key={a.title}>
                  <Card className="h-full">
                    <div className="flex items-center gap-3">
                      <IconTile>
                        <Icon className="h-5 w-5" />
                      </IconTile>
                      <h3 className="font-display text-base font-semibold text-brand">
                        {a.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500">
                      {a.desc}
                    </p>
                  </Card>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* ============ USE CASES ============ */}
      <section id="use-cases" className="section-pad scroll-mt-20 bg-slate-50">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Use cases"
              title="When a report pays for itself"
              description="A single source-backed read before a decision is far cheaper than the dispute, default or write-off it helps you avoid."
            />
          </Reveal>
          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u, i) => {
              const Icon = useCaseIcons[i] ?? FileText;
              return (
                <RevealItem key={u.title}>
                  <Card className="h-full">
                    <IconTile>
                      <Icon className="h-5 w-5" />
                    </IconTile>
                    <h3 className="mt-4 font-display text-base font-semibold text-brand">
                      {u.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                      {u.desc}
                    </p>
                  </Card>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* ============ DELIVERABLES ============ */}
      <section id="deliverables" className="section-pad scroll-mt-20">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                eyebrow="Deliverables"
                title={
                  <>
                    A clear report you can{" "}
                    <span className="text-gradient">act on</span>
                  </>
                }
                description="Every engagement ends in a structured PDF that any decision-maker can read in minutes — with the sources behind each finding and the date they were checked."
              />
              <div className="mt-8">
                <Button href="#pricing" variant="ghost">
                  See pricing approach
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
            <RevealGroup className="grid gap-3 sm:grid-cols-2">
              {deliverables.map((d, i) => {
                const Icon = deliverableIcons[i] ?? FileText;
                return (
                  <RevealItem key={d}>
                    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-soft">
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-accent-100 bg-accent-50 text-accent-700">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-slate-700">{d}</span>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section id="pricing" className="section-pad scroll-mt-20 bg-slate-50">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Pricing"
              title="Scope-based, not one-size-fits-all"
              description="Pricing depends on scope, number of entities and turnaround time. Start with the tier closest to your decision and we'll tailor it."
              align="center"
            />
          </Reveal>
          <RevealGroup className="mt-12 grid gap-5 lg:grid-cols-4">
            {pricingTiers.map((tier) => (
              <RevealItem key={tier.name}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                    tier.featured
                      ? "border-brand bg-brand text-white shadow-lift"
                      : "border-slate-200 bg-white shadow-soft hover:shadow-lift"
                  }`}
                >
                  {tier.featured && (
                    <span className="absolute -top-3 left-6">
                      <Badge tone="accent" dot>
                        Most popular
                      </Badge>
                    </span>
                  )}
                  <h3
                    className={`font-display text-lg font-semibold ${
                      tier.featured ? "text-white" : "text-brand"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      tier.featured ? "text-brand-200" : "text-slate-500"
                    }`}
                  >
                    {tier.tagline}
                  </p>
                  <div
                    className={`my-5 h-px w-full ${
                      tier.featured ? "bg-white/15" : "bg-slate-200"
                    }`}
                  />
                  <ul className="flex-1 space-y-3">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2.5 text-sm ${
                          tier.featured ? "text-brand-100" : "text-slate-600"
                        }`}
                      >
                        <Check
                          className={`mt-0.5 h-4 w-4 flex-none ${
                            tier.featured ? "text-accent-400" : "text-accent-600"
                          }`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button
                      href="#contact"
                      variant={tier.featured ? "secondary" : "primary"}
                      className={tier.featured ? "w-full" : "w-full"}
                    >
                      Request a Report
                    </Button>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal>
            <p className="mt-8 text-center text-sm text-slate-500">
              Pricing depends on scope, number of entities and turnaround time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ DISCLAIMER ============ */}
      <DisclaimerBlock />

      {/* ============ CONTACT ============ */}
      <ContactSection />
    </>
  );
}
