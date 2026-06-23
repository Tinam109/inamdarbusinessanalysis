import Link from "next/link";
import { MessageCircle, MapPin, Phone, CalendarClock } from "lucide-react";
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
      { label: "Report Types", href: "/#report-types" },
      { label: "Risk Framework", href: "/#risk-framework" },
      { label: "How We Compare", href: "/#comparison" },
      { label: "Sample Report", href: "/sample-report" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Methodology", href: "/methodology" },
      { label: "Sources & Coverage", href: "/sources" },
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-x px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <LogoMark className="h-9 w-9" gradientId="iba-footer" />
              <span className="font-display text-[15px] font-semibold tracking-tight text-brand">
                Inamdar Business Analysis
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Source-backed, public-records based business risk reports on Indian
              companies, vendors, promoters and counterparties.
            </p>
            <div className="mt-5 space-y-2 text-sm text-slate-500">
              <a
                href="https://wa.me/919106469665?text=Hi%2C%20I%27d%20like%20to%20request%20a%20business%20risk%20report."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-brand"
              >
                <MessageCircle className="h-4 w-4 text-accent-600" />
                WhatsApp +91 91064 69665
              </a>
              <a
                href="tel:+919106469665"
                className="flex items-center gap-2 transition-colors hover:text-brand"
              >
                <Phone className="h-4 w-4 text-accent-600" />
                +91 91064 69665
              </a>
              <a
                href="https://cal.com/inamdarlegal/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-brand"
              >
                <CalendarClock className="h-4 w-4 text-accent-600" />
                Book a 15-min call
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-400" />
                India
              </span>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-brand">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-slate-500 transition-colors hover:text-brand"
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
          <p className="text-xs text-slate-400">
            Risk intelligence · Counterparty due diligence · India
          </p>
        </div>
      </div>
    </footer>
  );
}
