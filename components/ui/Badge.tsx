import { cn } from "@/lib/cn";

type Tone = "neutral" | "emerald" | "cyan" | "gold" | "amber" | "red";

const tones: Record<Tone, string> = {
  neutral: "border-white/15 bg-white/5 text-slate-300",
  emerald: "border-emerald/30 bg-emerald/10 text-emerald-soft",
  cyan: "border-cyan/30 bg-cyan/10 text-cyan-soft",
  gold: "border-gold/30 bg-gold/10 text-gold-soft",
  amber: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  red: "border-red-400/30 bg-red-400/10 text-red-300",
};

export function Badge({
  children,
  tone = "neutral",
  className,
  dot = false,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {dot && (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            tone === "emerald" && "bg-emerald-soft",
            tone === "cyan" && "bg-cyan-soft",
            tone === "gold" && "bg-gold-soft",
            tone === "amber" && "bg-amber-300",
            tone === "red" && "bg-red-300",
            tone === "neutral" && "bg-slate-300",
          )}
        />
      )}
      {children}
    </span>
  );
}
