"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { riskSignals } from "@/lib/content";

export function RiskSignalTabs() {
  const [active, setActive] = useState(0);
  const signal = riskSignals[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      {/* Tab list */}
      <div className="flex flex-col gap-2">
        {riskSignals.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.key}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-xl border px-5 py-4 text-left transition-all duration-300 ${
                isActive
                  ? "border-cyan/40 bg-white/[0.05]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="risk-active"
                  className="absolute inset-y-0 left-0 w-1 rounded-r bg-gradient-to-b from-cyan to-emerald"
                />
              )}
              <div className="flex items-center justify-between">
                <span
                  className={`font-display text-base font-medium ${
                    isActive ? "text-white" : "text-slate-300"
                  }`}
                >
                  {s.label}
                </span>
                <span
                  className={`text-xs ${isActive ? "text-cyan-soft" : "text-slate-500"}`}
                >
                  0{i + 1}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active panel */}
      <div className="glass-strong relative min-h-[320px] overflow-hidden rounded-2xl p-7 shadow-glass">
        <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
        <AnimatePresence mode="wait">
          <motion.div
            key={signal.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="relative"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-soft/80">
              Risk signal
            </span>
            <h3 className="mt-3 font-display text-2xl font-semibold text-white">
              {signal.label}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
              {signal.summary}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {signal.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border border-emerald/30 bg-emerald/10">
                    <Check className="h-3 w-3 text-emerald-soft" />
                  </span>
                  <span className="text-sm text-slate-300">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
