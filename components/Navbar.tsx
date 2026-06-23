"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const navLinks = [
  { label: "Report Types", href: "/#report-types" },
  { label: "Methodology", href: "/methodology" },
  { label: "Sources", href: "/sources" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/about" },
];

const reportPages = [
  { label: "Vendor Risk Report", href: "/vendor-risk-report" },
  { label: "Investor Red Flag Report", href: "/investor-red-flag-report" },
  { label: "Litigation & Compliance Check", href: "/litigation-compliance-check" },
  { label: "Monitoring", href: "/monitoring" },
  { label: "Sample Report", href: "/sample-report" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [reportsOpen, setReportsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200 bg-white/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between px-5 sm:px-8">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setReportsOpen(true)}
            onMouseLeave={() => setReportsOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:text-brand">
              Reports
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {reportsOpen && (
              <div className="absolute left-0 top-full w-64 pt-2">
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-lift">
                  {reportPages.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-brand"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:text-brand"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="/#contact" size="sm">
            Request a Report
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-lg p-2 text-brand lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          <div className="container-x flex flex-col gap-1 border-t border-slate-200 bg-white px-5 py-4 sm:px-8">
            {[...reportPages, ...navLinks].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-slate-700 transition-colors hover:bg-slate-50"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button href="/#contact" className="w-full" onClick={() => setOpen(false)}>
                Request a Report
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
