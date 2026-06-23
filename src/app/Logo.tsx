export default function Logo() {
  return (
    <a href="#" className="group inline-flex items-center gap-3" aria-label="Inamdar Business Analysis home">
      <span className="relative grid h-11 w-11 place-items-center rounded-md bg-[#1f3c35] shadow-sm">
        <svg viewBox="0 0 44 44" className="h-11 w-11" aria-hidden="true">
          <rect x="1.5" y="1.5" width="41" height="41" rx="7" fill="#1f3c35" />
          <path
            d="M12 30.5V13.2h4.7v17.3H12Zm8.1 0V13.2h3.8l8.1 10.1V13.2h4.6v17.3h-3.8l-8.1-10.1v10.1h-4.6Z"
            fill="#f7f5ef"
          />
          <path d="M10.5 33.2h23.1l3.1-3.1" fill="none" stroke="#d9a25f" strokeWidth="2.1" />
          <circle cx="36.7" cy="30.1" r="2.4" fill="#d9a25f" />
          <path d="M12 10.2h20" stroke="#8fb2a7" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-base font-semibold tracking-wide text-[#1f3c35] transition group-hover:text-[#172d28]">
          Inamdar
        </span>
        <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8c6a3e]">
          Business Analysis
        </span>
      </span>
    </a>
  );
}
