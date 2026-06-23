"use client";

import { motion } from "framer-motion";
import {
  Fingerprint,
  ReceiptText,
  Gavel,
  ShieldCheck,
  Network,
  Activity,
} from "lucide-react";

type Status = "clear" | "review" | "flag";

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

const statusStyles: Record<Status, { dot: string; text: string; chip: string }> = {
  clear: { dot: "bg-emerald-soft", text: "text-emerald-soft", chip: "border-emerald/30 bg-emerald/10" },
  review: { dot: "bg-gold-soft", text: "text-gold-soft", chip: "border-gold/30 bg-gold/10" },
  flag: { dot: "bg-red-300", text: "text-red-300", chip: "border-red-400/30 bg-red-400/10" },
};

export function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative"
      style={{ perspective: 1200 }}
    >
      {/* Glow behind */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan/20 via-emerald/10 to-transparent blur-2xl" />

      <div className="glass-strong overflow-hidden rounded-2xl shadow-glass">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-cyan-soft" />
            <span className="text-sm font-medium text-white">Risk Report</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
        </div>

        {/* Subject line */}
        <div className="flex items-center justify-between px-5 pt-4 text-xs text-slate-400">
          <span>Acme Components Pvt Ltd</span>
          <span>Date of search: 22 Jun 2026</span>
        </div>

        {/* Rows */}
        <div className="space-y-2.5 p-5">
          {rows.map((row, i) => {
            const s = statusStyles[row.status];
            return (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-cyan-soft">
                    {row.icon}
                  </span>
                  <span className="text-sm text-slate-200">{row.label}</span>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${s.chip} ${s.text}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                  {row.value}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Overall risk */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="border-t border-white/10 px-5 py-4"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">Overall Risk</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-sm font-semibold text-gold-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-gold-soft" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-soft" />
              </span>
              Moderate
            </span>
          </div>
          {/* Risk meter */}
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "58%" }}
              transition={{ delay: 1.3, duration: 1, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-emerald via-gold to-gold-soft"
            />
          </div>
          <div className="mt-2 flex justify-between text-[10px] uppercase tracking-wider text-slate-500">
            <span>Low</span>
            <span>Moderate</span>
            <span>Elevated</span>
          </div>
        </motion.div>
      </div>

      {/* Floating source chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute -bottom-4 -right-3 hidden rounded-xl border border-white/10 bg-ink-800/90 px-3.5 py-2 text-xs text-slate-300 shadow-glass backdrop-blur-xl sm:block"
      >
        <span className="text-emerald-soft">●</span> Every finding source-linked
      </motion.div>
    </motion.div>
  );
}
