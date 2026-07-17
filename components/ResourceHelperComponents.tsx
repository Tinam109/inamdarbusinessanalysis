"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight, Download, Calendar, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FAQ {
  q: string;
  a: string;
}

export function TableOfContents() {
  const sections = [
    { id: "overview", label: "1. Executive Overview" },
    { id: "framework", label: "2. Why It Matters" },
    { id: "redflags", label: "3. Red Flags & Signals" },
    { id: "checklist", label: "4. Vetting Checklist" },
    { id: "comparison", label: "5. DIY vs Professional" },
    { id: "casestudy", label: "6. Case Study Analysis" },
    { id: "faqs", label: "7. Frequently Asked Questions" },
  ];

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90; // Adjust for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
      <h3 className="font-display text-sm font-semibold tracking-wider text-brand uppercase mb-4">
        Table of Contents
      </h3>
      <nav className="flex flex-col gap-3">
        {sections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => handleClick(sec.id)}
            className="text-left text-sm text-slate-500 hover:text-accent font-medium transition-colors"
          >
            {sec.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

export function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className="overflow-hidden rounded-xl border border-slate-200/80 bg-white transition-all duration-300"
          >
            <button
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between p-5 text-left font-display font-medium text-brand hover:bg-slate-50/50"
            >
              <span>{faq.q}</span>
              <ChevronDown
                className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-accent" : ""
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[300px] border-t border-slate-100 p-5" : "max-h-0"
              }`}
            >
              <p className="text-sm leading-relaxed text-slate-500">{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function FloatingMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-4 shadow-lift backdrop-blur-md lg:hidden">
      <div className="flex gap-3">
        <Button href="/sample-report" variant="accent" className="flex-1 text-sm py-2.5">
          <Download className="mr-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          Get Sample
        </Button>
        <Button href="/#contact" className="flex-1 text-sm py-2.5">
          Order Check
          <ArrowRight className="ml-1.5 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
