import Link from "next/link";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { LogoMark } from "@/components/Logo";

const columns = [
  {
    title: "Reports",
    links: [
      { label: "Vendor Risk Report", href: "/vendor-risk-report" },
      { label: "Investor Red Flag Report", href: "/investor-red-flag-report" },
      { label: "Litigation & Compliance", href: "/litigation-compliance-check" },
      { label: "Monitoring", href: "/monitoring" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Report Scope", href: "/#report-scope" },
      { label: "Risk Signals", href: "/#risk-signals" },
      { label: "Who It's For", href: "/#who-its-for" },
      { label: "Use Cases", href: "/#use-cases" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Deliverables", href: "/#deliverables" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Request a Report", href: "/#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950/60">
      <div className="container-x px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <LogoMark className="h-9 w-9" gradientId="iba-footer" />
              <span className="font-display text-[15px] font-semibold tracking-tight text-white">
                Inamdar Business Analysis
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Source-backed, public-records based business risk reports on Indian
              companies, vendors, promoters and counterparties.
            </p>
            <div className="mt-5 space-y-2 text-sm text-slate-400">
              {/* TODO: replace placeholders with real contact details */}
              <a
                href="mailto:hello@inamdarbusinessanalysis.in"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-cyan-soft" />
                hello@inamdarbusinessanalysis.in
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <MessageCircle className="h-4 w-4 text-emerald-soft" />
                WhatsApp enquiries
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold-soft" />
                India
              </span>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 hairline" />

        {/* Disclaimer summary */}
        <p className="mt-8 text-xs leading-relaxed text-slate-500">
          Reports are based on public records, information provided by the client
          and records available from official or credible sources as of the date
          of search. They are not a credit rating, legal opinion, private
          investigation, certificate of good standing or guarantee of future
          conduct.
        </p>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Inamdar Business Analysis. All rights
            reserved.
          </p>
          <p className="text-xs text-slate-500">
            Risk intelligence · Counterparty due diligence · India
          </p>
        </div>
      </div>
    </footer>
  );
}
