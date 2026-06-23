import { cn } from "@/lib/cn";

type Tone = "neutral" | "brand" | "accent" | "amber" | "red";

const tones: Record<Tone, string> = {
  neutral: "border-slate-200 bg-slate-50 text-slate-600",
  brand: "border-brand-100 bg-brand-50 text-brand-700",
  accent: "border-accent-100 bg-accent-50 text-accent-700",
  amber: "border-amber-200 bg-amber-50 text-amber-700",
  red: "border-red-200 bg-red-50 text-red-700",
};

const dots: Record<Tone, string> = {
  neutral: "bg-slate-400",
  brand: "bg-brand-500",
  accent: "bg-accent-600",
  amber: "bg-amber-500",
  red: "bg-red-500",
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
      {dot && <span className={cn("h-1.5 w-1.5 rounded-full", dots[tone])} />}
      {children}
    </span>
  );
}
