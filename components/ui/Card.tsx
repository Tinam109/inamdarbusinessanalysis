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
        "card p-6",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lift",
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
        "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent-100 bg-accent-50 text-accent-700",
        className,
      )}
    >
      {children}
    </div>
  );
}
