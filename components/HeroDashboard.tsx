"use client";

import { motion } from "framer-motion";
import {
  Fingerprint,
  ReceiptText,
  Gavel,
  ShieldCheck,
  Network,
  Check,
  BadgeCheck,
} from "lucide-react";

type Status = "clear" | "review";

const rows: {
  icon: React.ReactNode;
  label: string;
  value: string;
  status: Status;
}[] = [
  { icon: <Fingerprint className="h-4 w-4" />, label: "Identity Match", value: "Matched", status: "clear" },
  { icon: <ReceiptText className="h-4 w-4" />, label: "GST Status", value: "Active", status: "clear" },
  { icon: <Gavel className="h-4 w-4" />, label: "Litigation Search", value: "3 records", status: "review" },
  { icon: <ShieldCheck className="h-4 w-4" />, label: "Regulatory Checks", value: "No order", status: "clear" },
  { icon: <Network className="h-4 w-4" />, label: "Director Linkages", value: "5 entities", status: "review" },
];

const statusStyles: Record<Status, { pill: string; dot: string; icon: React.ReactNode }> = {
  clear: {
    pill: "border-accent-100 bg-accent-50 text-accent-700",
    dot: "bg-accent-500",
    icon: <Check className="h-3 w-3" />,
  },
  review: {
    pill: "border-amber-200 bg-amber-50 text-amber-700",
    dot: "bg-amber-500",
    icon: <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />,
  },
};

/** Semicircular risk gauge with an animated needle. */
function RiskGauge({ value = 0.58 }: { value?: number }) {
  const cx = 110;
  const cy = 92;
  const r = 78;
  const total = Math.PI * r; // semicircle arc length
  const seg = (start: number, end: number) => ({
    strokeDasharray: `${(end - start) * total} ${total * 2}`,
    strokeDashoffset: `${-start * total}`,
  });
  const rotation = (value - 0.5) * 180; // 0.5 = straight up

  return (
    <div className="relative mx-auto w-[220px]">
      <svg viewBox="0 0 220 116" className="w-full">
        {/* track */}
        <path
          d="M 32 92 A 78 78 0 0 1 188 92"
          fill="none"
          stroke="#eef2f7"
          strokeWidth="14"
          strokeLinecap="round"
        />
        {/* zones */}
        <path d="M 32 92 A 78 78 0 0 1 188 92" fill="none" stroke="#10b981" strokeWidth="14" strokeLinecap="round" style={seg(0, 0.33)} />
        <path d="M 32 92 A 78 78 0 0 1 188 92" fill="none" stroke="#f59e0b" strokeWidth="14" strokeLinecap="butt" style={seg(0.35, 0.63)} />
        <path d="M 32 92 A 78 78 0 0 1 188 92" fill="none" stroke="#ef4444" strokeWidth="14" strokeLinecap="round" style={seg(0.67, 1)} />

        {/* needle */}
        <motion.g
          initial={{ rotate: -90 }}
          animate={{ rotate: rotation }}
          transition={{ delay: 0.9, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        >
          <line x1={cx} y1={cy} x2={cx} y2="30" stroke="#15244d" strokeWidth="3" strokeLinecap="round" />
        </motion.g>
        <circle cx={cx} cy={cy} r="7" fill="#15244d" />
        <circle cx={cx} cy={cy} r="3" fill="#fff" />
      </svg>
      <div className="-mt-3 text-center">
        <div className="font-display text-2xl font-semibold text-amber-600">Moderate</div>
        <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Overall risk</div>
      </div>
    </div>
  );
}

export function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative"
    >
      {/* soft ambient glow */}
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent-100/50 via-brand-50/40 to-transparent blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
        {/* one-time scan sweep */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-accent-500/60 to-transparent animate-scan" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-white">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <span className="font-display text-sm font-semibold text-brand">Risk Report</span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-100 bg-accent-50 px-2.5 py-1 text-xs font-medium text-accent-700">
            <BadgeCheck className="h-3.5 w-3.5" />
            12 sources
          </span>
        </div>

        {/* Subject */}
        <div className="flex items-center justify-between px-5 pt-4">
          <div>
            <div className="text-sm font-semibold text-brand">Acme Components Pvt Ltd</div>
            <div className="text-xs text-slate-400">CIN U28999MH2016PTC •••</div>
          </div>
          <div className="text-right text-xs text-slate-400">
            Date of search
            <div className="font-medium text-slate-600">22 Jun 2026</div>
          </div>
        </div>

        {/* Gauge */}
        <div className="px-5 pt-4">
          <RiskGauge value={0.58} />
        </div>

        <div className="mx-5 h-px bg-slate-100" />

        {/* Rows */}
        <div className="space-y-1.5 p-5">
          {rows.map((row, i) => {
            const s = statusStyles[row.status];
            return (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.45 }}
                className="flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-50"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    {row.icon}
                  </span>
                  <span className="text-sm font-medium text-slate-700">{row.label}</span>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${s.pill}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                  {row.value}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Floating chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute -bottom-4 -right-3 hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-600 shadow-lift sm:flex"
      >
        <span className="h-2 w-2 rounded-full bg-accent-500" />
        Every finding source-linked
      </motion.div>
    </motion.div>
  );
}
