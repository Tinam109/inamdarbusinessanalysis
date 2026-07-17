import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  TableOfContents,
  FaqAccordion,
  FloatingMobileCta,
} from "@/components/ResourceHelperComponents";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Download,
  Calendar,
  MessageSquare,
  ArrowRight,
  TrendingUp,
  Scale,
} from "lucide-react";
import { CONTACT } from "@/lib/content";

interface ResourceData {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  keyword: string;
  targetAudience: string;
  intro: string;
  whyItMatters: string;
  redFlagsHeading: string;
  redFlagsIntro: string;
  redFlags: string[];
  redFlagsList: string;
  checklistHeading: string;
  checklistIntro: string;
  checklist: string[];
  checklistList: string;
  comparisonHeading: string;
  comparisonText: string;
  caseStudyHeading: string;
  caseStudyBody: string;
  summaryAndCta: string;
  faqs: { q: string; a: string }[];
  readTime: string;
}

function getResourceData(slug: string): ResourceData | null {
  const filePath = path.join(process.cwd(), "content/resources", `${slug}.json`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}

export async function generateStaticParams() {
  const dirPath = path.join(process.cwd(), "content/resources");
  if (!fs.existsSync(dirPath)) return [];
  const files = fs.readdirSync(dirPath);
  return files
    .filter((file) => file.endsWith(".json"))
    .map((file) => ({
      slug: file.replace(".json", ""),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = getResourceData(params.slug);
  if (!data) return {};

  return {
    title: `${data.title} | Inamdar Business Analysis`,
    description: data.subtitle,
    keywords: [
      data.keyword,
      "due diligence India",
      "vendor verification",
      "company check",
      "business risk report",
    ],
  };
}

export default function ResourceSlugPage({ params }: { params: { slug: string } }) {
  const data = getResourceData(params.slug);
  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-24 sm:pt-32">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-faint [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-40 left-1/2 h-[450px] w-[900px] -translate-x-1/2 rounded-full bg-accent/5 blur-[130px]" />
      </div>

      <div className="container-x px-5 sm:px-8">
        {/* Breadcrumb & Navigation */}
        <div className="mb-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <a href="/resources" className="hover:text-accent transition-colors">
            Resources
          </a>
          <span>/</span>
          <span className="text-slate-500">{data.category}</span>
        </div>

        {/* Hero Header Block */}
        <div className="max-w-4xl border-b border-slate-100 pb-10 mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <Badge tone="accent" dot>
              {data.category}
            </Badge>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              Read time: {data.readTime}
            </span>
          </div>

          <h1 className="font-display text-3xl font-semibold leading-tight text-brand sm:text-4xl lg:text-5xl">
            {data.title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            {data.subtitle}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500">
            <span className="font-semibold text-brand">Target Focus:</span>{" "}
            {data.keyword}
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          {/* Main Content Area */}
          <div className="space-y-16">
            {/* Section 1: Executive Overview */}
            <section id="overview" className="scroll-mt-28">
              <h2 className="font-display text-2xl font-semibold text-brand mb-5 flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-accent" />
                1. Executive Overview
              </h2>
              <div className="prose max-w-none text-slate-600 leading-relaxed space-y-4">
                <p>{data.intro}</p>
              </div>
            </section>

            {/* Section 2: Why it matters */}
            <section id="framework" className="scroll-mt-28">
              <h2 className="font-display text-2xl font-semibold text-brand mb-5 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-accent" />
                2. Why It Matters for Business Decisions
              </h2>
              <div className="prose max-w-none text-slate-600 leading-relaxed space-y-4">
                <p>{data.whyItMatters}</p>
              </div>
            </section>

            {/* Inline Call-To-Action Block (Midway conversion point) */}
            <Card className="border border-accent/20 bg-accent-50/20 p-8 rounded-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-display text-xl font-semibold text-brand mb-2">
                  Verify Your Counterparties in 48 Hours
                </h3>
                <p className="text-sm text-slate-600 mb-6 max-w-xl">
                  Do not rely on incomplete public database matching. Get a comprehensive,
                  human-reviewed Standard Report on any Indian corporate or promoter.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button href="/sample-report" variant="accent" size="sm">
                    <Download className="mr-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                    Get Sample PDF
                  </Button>
                  <Button href="/#contact" size="sm">
                    Request a Check
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-y-6 translate-x-6">
                <ShieldCheck className="h-40 w-40 text-accent" />
              </div>
            </Card>

            {/* Section 3: Red Flags */}
            <section id="redflags" className="scroll-mt-28">
              <h2 className="font-display text-2xl font-semibold text-brand mb-5 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-amber-500" />
                3. Critical Red Flags & Risk Signals
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {data.redFlagsIntro}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {data.redFlags.map((rf, idx) => (
                  <Card key={idx} className="border border-slate-100 p-5 bg-white">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-50 text-xs font-semibold text-amber-600 mb-3">
                      {idx + 1}
                    </span>
                    <p className="text-sm font-semibold text-brand mb-1">{rf}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Requires immediate cross-verification of filing timelines and corporate filings.
                    </p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Section 4: Checklist */}
            <section id="checklist" className="scroll-mt-28">
              <h2 className="font-display text-2xl font-semibold text-brand mb-5 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-accent" />
                4. Recommended Due Diligence Checklist
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {data.checklistIntro}
              </p>
              <div className="space-y-3.5 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8">
                {data.checklist.map((step, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white border border-slate-200 text-xs font-bold text-accent">
                      {idx + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-brand">{step}</p>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        Verify registry coordinates directly on the corresponding public service portal.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Comparison DIY vs Professional */}
            <section id="comparison" className="scroll-mt-28">
              <h2 className="font-display text-2xl font-semibold text-brand mb-5 flex items-center gap-2">
                <Scale className="h-6 w-6 text-accent" />
                5. DIY Vetting vs. Professional Risk Analysis
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {data.comparisonText}
              </p>
              {/* Styled Table */}
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-brand">
                        <th className="p-4">Vetting Factor</th>
                        <th className="p-4">DIY Manual Lookup</th>
                        <th className="p-4 text-accent bg-accent-50/20">Inamdar Reports</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-4 font-semibold text-brand">Source Coverage</td>
                        <td className="p-4 text-slate-500">Scattered registry checks only</td>
                        <td className="p-4 text-brand font-medium bg-accent-50/10">Unified registry, court & regulatory scan</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-brand">Linkage Mapping</td>
                        <td className="p-4 text-slate-500">Manual mapping DIN by DIN</td>
                        <td className="p-4 text-brand font-medium bg-accent-50/10">Automated corporate group visualization</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-brand">Time Investment</td>
                        <td className="p-4 text-slate-500">Several hours of staff labor</td>
                        <td className="p-4 text-brand font-medium bg-accent-50/10">Zero internal labor; ready in 48-72h</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-brand">Reliability</td>
                        <td className="p-4 text-slate-500">High risk of name mismatches</td>
                        <td className="p-4 text-brand font-medium bg-accent-50/10">Human-verified identifier mapping</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 6: Case Study */}
            <section id="casestudy" className="scroll-mt-28">
              <h2 className="font-display text-2xl font-semibold text-brand mb-5 flex items-center gap-2">
                <FileText className="h-6 w-6 text-accent" />
                6. Real-World Risk Case Study
              </h2>
              <Card className="border border-l-4 border-l-red-500 border-slate-100 p-6 bg-slate-50/30">
                <h4 className="font-display text-base font-semibold text-brand mb-3">
                  {data.caseStudyHeading}
                </h4>
                <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-800">The Context:</strong>{" "}
                    {data.caseStudyBody.split("\n\n")[0]?.replace("**Background**:", "")}
                  </p>
                  <p>
                    <strong className="text-slate-800">The Risk Realization:</strong>{" "}
                    {data.caseStudyBody.split("\n\n")[1]?.replace("**Impact**:", "")}
                  </p>
                  <p className="rounded-lg bg-red-50 p-3.5 text-xs text-red-800 font-medium">
                    <strong>Critical Takeaway:</strong>{" "}
                    {data.caseStudyBody.split("\n\n")[2]?.replace("**Key Takeaway**:", "")}
                  </p>
                </div>
              </Card>
            </section>

            {/* Section 7: FAQs */}
            <section id="faqs" className="scroll-mt-28">
              <h2 className="font-display text-2xl font-semibold text-brand mb-6 flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-accent" />
                7. Frequently Asked Questions
              </h2>
              <FaqAccordion faqs={data.faqs} />
            </section>

            {/* Bottom Final CTA Block */}
            <div className="rounded-2xl border border-slate-200 bg-brand p-8 text-white sm:p-10">
              <h3 className="font-display text-2xl font-semibold mb-3">
                Secure Your Next Deal With Risk Intelligence
              </h3>
              <p className="text-slate-300 text-sm mb-6 max-w-xl leading-relaxed">
                Before committing to high-value agreements, acquisitions, or supplier registrations,
                verify details against source-linked registries. Let our analysts handle the diligence.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/#contact" className="bg-accent text-white hover:bg-accent-600">
                  Request a Custom Report
                </Button>
                <Button href={CONTACT.whatsapp} variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-transparent">
                  Chat via WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Sticky Desktop Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {/* Table of contents widget */}
              <TableOfContents />

              {/* Order Report Widget */}
              <Card className="border border-slate-200 p-6 bg-white shadow-soft">
                <span className="inline-flex items-center gap-1 rounded bg-accent-50 text-[10px] font-bold uppercase tracking-wider text-accent px-2 py-0.5 mb-4">
                  Standard Report
                </span>
                <h4 className="font-display text-lg font-semibold text-brand mb-1">
                  Public Records Vetting
                </h4>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  Get a complete risk profile verified by corporate specialists.
                </p>

                <div className="text-xl font-bold text-brand mb-4">
                  From ₹3,000 <span className="text-xs text-slate-400 font-normal">/ entity</span>
                </div>

                <div className="space-y-2">
                  <Button href="/#contact" className="w-full justify-center py-2.5 text-sm">
                    Order Verification
                  </Button>
                  <Button
                    href="/sample-report"
                    variant="accent"
                    className="w-full justify-center py-2.5 text-sm"
                  >
                    <Download className="mr-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                    Download Sample
                  </Button>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4 space-y-2">
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-accent transition-colors"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    Query via WhatsApp
                  </a>
                  <a
                    href={CONTACT.cal}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-accent transition-colors"
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    Schedule Cal.com Call
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Bar for Mobile */}
      <FloatingMobileCta />
    </main>
  );
}
