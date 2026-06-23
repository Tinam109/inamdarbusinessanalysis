import type { Metadata } from "next";
import Link from "next/link";
import {
  Fingerprint,
  ReceiptText,
  Gavel,
  ShieldCheck,
  Network,
  Building2,
  ArrowLeft,
  Link2,
  Check,
} from "lucide-react";
import { LogoMark } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { DISCLAIMER } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sample Report, What a Business Risk Report Looks Like",
  description:
    "An illustrative, watermarked sample of an Inamdar Business Analysis public-records risk report, identity match, litigation table, compliance indicators, director linkages and an overall risk summary, all source-linked.",
  robots: { index: false, follow: true },
};

const SUBJECT = "ABC Industrial Supplies Private Limited";

const idRows = [
  { label: "Legal name", value: "ABC Industrial Supplies Pvt Ltd" },
  { label: "CIN (fictional)", value: "U51909MH2015PTC000000" },
  { label: "GSTIN (fictional)", value: "27ABCDE0000F1Z5" },
  { label: "Registration status", value: "Active" },
  { label: "Registered address", value: "00, Sample Estate, Pune, MH (fictional)" },
  { label: "Directors (fictional)", value: "A. Sharma, R. Mehta" },
  { label: "Incorporation", value: "2015 (sample)" },
  { label: "Identity match", value: "Matched on CIN + GSTIN" },
];

const sampleTags: { label: string; tone: "amber" | "red" | "accent" | "neutral" }[] = [
  { label: "Active litigation found", tone: "amber" },
  { label: "Director-linked risk", tone: "amber" },
  { label: "Multiple linked entities", tone: "neutral" },
  { label: "Consumer dispute found", tone: "amber" },
  { label: "Requires legal review", tone: "neutral" },
];

const litigation = [
  { court: "District Court, Pune", type: "Commercial suit", party: "Director (common)", status: "Pending", date: "Filed 2023" },
  { court: "High Court (sample)", type: "Writ petition", party: "Linked entity", status: "Disposed", date: "2021" },
  { court: "Supreme Court (sample)", type: "Civil appeal", party: "Linked entity", status: "Disposed", date: "2022" },
  { court: "Consumer Forum", type: "Consumer dispute", party: "ABC Industrial", status: "Pending", date: "2024" },
];

const tagToneClass: Record<string, string> = {
  amber: "border-amber-200 bg-amber-50 text-amber-700",
  red: "border-red-200 bg-red-50 text-red-700",
  accent: "border-accent-200 bg-accent-50 text-accent-700",
  neutral: "border-slate-200 bg-slate-50 text-slate-600",
};

const compliance = [
  { label: "MCA / ROC filings", note: "Filing indicators current", tone: "clear" },
  { label: "GST status", note: "Active", tone: "clear" },
  { label: "EPFO / ESIC headcount", note: "~120 employees, rising 3 yrs", tone: "clear" },
  { label: "Director disqualification", note: "No record matched", tone: "clear" },
] as const;

export default function SampleReportPage() {
  return (
    <div className="bg-slate-100">
      <div className="container-x px-5 pb-20 pt-28 sm:px-8">
        {/* toolbar */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-500">
              Illustrative sample, fictional entity
            </span>
            <Button href="/#contact" size="sm">
              Request a real report
            </Button>
          </div>
        </div>

        {/* "Paper" */}
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lift">
          {/* watermark */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 flex flex-wrap content-center justify-center gap-x-10 gap-y-16 opacity-[0.06]"
          >
            {Array.from({ length: 18 }).map((_, i) => (
              <span
                key={i}
                className="-rotate-[30deg] whitespace-nowrap font-display text-3xl font-bold uppercase tracking-widest text-brand"
              >
                Sample · Illustrative
              </span>
            ))}
          </div>

          <div className="relative z-0 p-7 sm:p-10">
            {/* header */}
            <div className="flex items-start justify-between border-b border-slate-200 pb-6">
              <div className="flex items-center gap-3">
                <LogoMark className="h-10 w-10" gradientId="iba-sample" />
                <div>
                  <div className="font-display text-base font-semibold text-brand">
                    Inamdar Business Analysis
                  </div>
                  <div className="text-xs text-slate-500">
                    Public-records business risk report
                  </div>
                </div>
              </div>
              <div className="text-right text-xs text-slate-500">
                Date of search
                <div className="font-semibold text-brand">22 Jun 2026</div>
                <div className="mt-1">Ref: IBA-SAMPLE-0001</div>
              </div>
            </div>

            {/* subject + overall */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand">
                  <Building2 className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-lg font-semibold text-brand">
                    {SUBJECT}
                  </div>
                  <div className="text-xs text-slate-500">Subject entity (fictional)</div>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 self-start rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700">
                Overall risk: Moderate
              </span>
            </div>

            {/* Risk tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {sampleTags.map((t) => (
                <span
                  key={t.label}
                  className={`rounded-full border px-2.5 py-1 text-xs font-medium ${tagToneClass[t.tone]}`}
                >
                  {t.label}
                </span>
              ))}
            </div>

            {/* Executive summary */}
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <div className="font-display text-sm font-semibold text-brand">
                Executive summary
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Identity matched on CIN and GSTIN; the entity is active with current filing
                indicators and a rising employee headcount. However, a pending commercial
                suit and a consumer dispute were matched, and a common director links the
                entity to two other companies, one carrying its own litigation. Overall
                risk is assessed <span className="font-medium text-amber-700">Moderate</span>;
                the litigation and linkages warrant legal review before a high-value commitment.
              </p>
            </div>

            {/* Identity match */}
            <Section icon={<Fingerprint className="h-4 w-4" />} title="1. Identity match summary">
              <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {idRows.map((r) => (
                  <div key={r.label} className="flex justify-between border-b border-slate-100 py-2 text-sm">
                    <span className="text-slate-500">{r.label}</span>
                    <span className="font-medium text-brand">{r.value}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Litigation table */}
            <Section icon={<Gavel className="h-4 w-4" />} title="2. Litigation search">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-400">
                      <th className="py-2 pr-4 font-medium">Court / forum</th>
                      <th className="py-2 pr-4 font-medium">Type</th>
                      <th className="py-2 pr-4 font-medium">Matched party</th>
                      <th className="py-2 pr-4 font-medium">Status</th>
                      <th className="py-2 font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {litigation.map((l, i) => (
                      <tr key={i} className="border-b border-slate-100">
                        <td className="py-2.5 pr-4 font-medium text-brand">{l.court}</td>
                        <td className="py-2.5 pr-4 text-slate-600">{l.type}</td>
                        <td className="py-2.5 pr-4 text-slate-600">{l.party}</td>
                        <td className="py-2.5 pr-4">
                          <span
                            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                              l.status === "Pending"
                                ? "bg-amber-50 text-amber-700"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {l.status}
                          </span>
                        </td>
                        <td className="py-2.5 text-slate-600">{l.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* Compliance */}
            <Section icon={<ReceiptText className="h-4 w-4" />} title="3. Compliance risk indicators">
              <div className="grid gap-3 sm:grid-cols-2">
                {compliance.map((c) => (
                  <div key={c.label} className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3">
                    <span className="text-sm font-medium text-brand">{c.label}</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-700">
                      <Check className="h-3.5 w-3.5" />
                      {c.note}
                    </span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Regulatory + linkages */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-brand">
                  <ShieldCheck className="h-4 w-4 text-accent-600" />
                  4. Regulatory references
                </div>
                <p className="mt-2 text-sm text-slate-500">
                  No SEBI or sectoral regulator order matched in the sources searched as of the date of search.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-brand">
                  <Network className="h-4 w-4 text-accent-600" />
                  5. Director / promoter linkages
                </div>
                <p className="mt-2 text-sm text-slate-500">
                  5 linked entities identified via common directors; 1 carries the pending litigation noted above.
                </p>
              </div>
            </div>

            {/* Recommended next steps */}
            <Section icon={<Check className="h-4 w-4" />} title="6. Recommended next steps">
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Obtain case details for the pending commercial suit before a high-value PO or contract.</li>
                <li>• Ask a lawyer to review the litigation and director-linkage findings (flagged “Requires legal review”).</li>
                <li>• Confirm the relationship between the linked entities and the subject's current operations.</li>
                <li>• Consider Monitoring if this counterparty will be ongoing, to catch new records as they appear.</li>
              </ul>
            </Section>

            {/* Sources */}
            <Section icon={<Link2 className="h-4 w-4" />} title="7. Sources & date of search">
              <ul className="space-y-1.5 text-sm text-slate-500">
                <li>• MCA / ROC master data, searched 22 Jun 2026</li>
                <li>• GST status portal, searched 22 Jun 2026</li>
                <li>• eCourts district & High Court services, searched 22 Jun 2026</li>
                <li>• Regulatory order repositories, searched 22 Jun 2026</li>
              </ul>
              <p className="mt-3 text-xs italic text-slate-400">
                In a real report, each line links directly to the underlying source record.
              </p>
            </Section>

            {/* Disclaimer */}
            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs leading-relaxed text-slate-500">{DISCLAIMER}</p>
            </div>
          </div>
        </div>

        {/* bottom CTA */}
        <div className="mx-auto mt-8 max-w-4xl text-center">
          <p className="text-sm text-slate-500">
            This is an illustrative sample using a fictional entity. Your report covers your scope, with live source links.
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/#contact" size="lg">
              Request a Report
            </Button>
            <Button href="/#report-scope" variant="secondary" size="lg">
              View Report Scope
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6">
      <div className="mb-3 flex items-center gap-2 font-display text-sm font-semibold text-brand">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
          {icon}
        </span>
        {title}
      </div>
      {children}
    </div>
  );
}
