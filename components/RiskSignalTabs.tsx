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
                  ? "border-accent-200 bg-accent-50/60 shadow-soft"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="risk-active"
                  className="absolute inset-y-0 left-0 w-1 rounded-r bg-accent-600"
                />
              )}
              <div className="flex items-center justify-between">
                <span
                  className={`font-display text-base font-medium ${
                    isActive ? "text-brand" : "text-slate-600"
                  }`}
                >
                  {s.label}
                </span>
                <span
                  className={`text-xs ${isActive ? "text-accent-700" : "text-slate-400"}`}
                >
                  0{i + 1}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active panel */}
      <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-soft">
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
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-700">
              Risk signal
            </span>
            <h3 className="mt-3 font-display text-2xl font-semibold text-brand">
              {signal.label}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500">
              {signal.summary}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {signal.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border border-accent-100 bg-accent-50">
                    <Check className="h-3 w-3 text-accent-700" />
                  </span>
                  <span className="text-sm text-slate-600">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
