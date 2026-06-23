import { CalendarClock, MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/lib/content";

/**
 * Scheduling block, CTA-only.
 * No embedded calendar. Buttons open Cal.com / WhatsApp / phone directly.
 */
export function ScheduleCall() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {/* Book a free call */}
      <a
        href={CONTACT.cal}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col justify-between gap-6 rounded-2xl bg-brand p-6 text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:col-span-1"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
          <CalendarClock className="h-5 w-5" />
        </span>
        <div>
          <div className="font-display text-base font-semibold">
            Book a free 15-min call
          </div>
          <div className="mt-1 text-sm text-brand-100">
            Complimentary, no obligation
          </div>
          <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-white">
            Pick a time
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </a>

      {/* WhatsApp */}
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col justify-between gap-6 rounded-2xl border border-accent-200 bg-accent-50/60 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-600 text-white">
          <MessageCircle className="h-5 w-5" />
        </span>
        <div>
          <div className="font-display text-base font-semibold text-brand">
            WhatsApp us
          </div>
          <div className="mt-1 text-sm text-slate-500">{CONTACT.phoneDisplay}</div>
          <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent-700">
            Start a chat
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </a>

      {/* Call */}
      <a
        href={`tel:${CONTACT.phoneTel}`}
        className="group flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand">
          <Phone className="h-5 w-5" />
        </span>
        <div>
          <div className="font-display text-base font-semibold text-brand">
            Call directly
          </div>
          <div className="mt-1 text-sm text-slate-500">{CONTACT.phoneDisplay}</div>
          <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand">
            Tap to dial
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </a>
    </div>
  );
}
