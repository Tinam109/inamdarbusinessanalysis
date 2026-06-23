import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
  hover = true,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: React.ElementType;
}) {
  return (
    <Tag
      className={cn(
        "glass rounded-2xl p-6 shadow-glass",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-glow",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Icon tile used at the top of feature cards. */
export function IconTile({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent text-cyan-soft",
        className,
      )}
    >
      {children}
    </div>
  );
}
