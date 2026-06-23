import { CalendarClock, MessageCircle, Phone, ArrowUpRight } from "lucide-react";

const CAL_LINK = "https://cal.com/inamdarlegal/15min";
const PHONE_DISPLAY = "+91 91064 69665";
const PHONE_TEL = "+919106469665";
const WHATSAPP_LINK =
  "https://wa.me/919106469665?text=Hi%2C%20I%27d%20like%20to%20request%20a%20business%20risk%20report.";

/**
 * Scheduling block — replaces the old enquiry form.
 * Left: direct contact options (WhatsApp / call). Right: inline Cal.com scheduler.
 */
export function ScheduleCall() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
      {/* Direct contact options */}
      <div className="flex flex-col gap-4">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-2xl border border-accent-200 bg-accent-50/60 p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-600 text-white">
              <MessageCircle className="h-5 w-5" />
            </span>
            <div>
              <div className="font-display text-base font-semibold text-brand">
                WhatsApp us
              </div>
              <div className="text-sm text-slate-500">{PHONE_DISPLAY}</div>
            </div>
          </div>
          <ArrowUpRight className="h-5 w-5 text-accent-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <a
          href={`tel:${PHONE_TEL}`}
          className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white">
              <Phone className="h-5 w-5" />
            </span>
            <div>
              <div className="font-display text-base font-semibold text-brand">
                Call directly
              </div>
              <div className="text-sm text-slate-500">{PHONE_DISPLAY}</div>
            </div>
          </div>
          <ArrowUpRight className="h-5 w-5 text-brand-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <a
          href={CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-brand">
              <CalendarClock className="h-5 w-5" />
            </span>
            <div>
              <div className="font-display text-base font-semibold text-brand">
                Book a 15-min call
              </div>
              <div className="text-sm text-slate-500">Pick a time that suits you</div>
            </div>
          </div>
          <ArrowUpRight className="h-5 w-5 text-brand-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Inline Cal.com scheduler */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5">
          <div className="flex items-center gap-2 text-sm font-semibold text-brand">
            <CalendarClock className="h-4 w-4 text-accent-600" />
            Schedule a 15-minute call
          </div>
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-accent-700 hover:text-accent-600"
          >
            Open full page
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <iframe
          src={CAL_LINK}
          title="Book a 15-minute call"
          loading="lazy"
          className="h-[560px] w-full"
        />
      </div>
    </div>
  );
}
