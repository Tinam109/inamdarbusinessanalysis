"use client";

import { useState } from "react";

export default function SampleReportGate() {
  const [ready, setReady] = useState(false);

  return (
    <form
      className="mt-8 grid gap-4 border border-[#d9d1c1] bg-[#fbfaf6] p-5 shadow-sm sm:grid-cols-3"
      onSubmit={(event) => {
        event.preventDefault();
        setReady(true);
      }}
    >
      <label>
        <span className="text-sm font-semibold text-[#263a35]">Name</span>
        <input
          required
          name="sample-name"
          className="mt-2 h-12 w-full rounded-md border border-[#cfc7b8] bg-white px-3 text-sm outline-none transition focus:border-[#1f3c35] focus:ring-2 focus:ring-[#1f3c35]/15"
        />
      </label>
      <label>
        <span className="text-sm font-semibold text-[#263a35]">Email</span>
        <input
          required
          name="sample-email"
          type="email"
          className="mt-2 h-12 w-full rounded-md border border-[#cfc7b8] bg-white px-3 text-sm outline-none transition focus:border-[#1f3c35] focus:ring-2 focus:ring-[#1f3c35]/15"
        />
      </label>
      <label>
        <span className="text-sm font-semibold text-[#263a35]">Phone/WhatsApp</span>
        <input
          required
          name="sample-phone"
          className="mt-2 h-12 w-full rounded-md border border-[#cfc7b8] bg-white px-3 text-sm outline-none transition focus:border-[#1f3c35] focus:ring-2 focus:ring-[#1f3c35]/15"
        />
      </label>
      <div className="sm:col-span-3">
        {ready ? (
          <a
            href="/sample-business-risk-report.pdf"
            download
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#1f3c35] px-6 text-sm font-semibold text-white transition hover:bg-[#172d28] sm:w-auto"
          >
            Download Sample PDF
          </a>
        ) : (
          <button
            type="submit"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#1f3c35] px-6 text-sm font-semibold text-white transition hover:bg-[#172d28] sm:w-auto"
          >
            Unlock Sample Report
          </button>
        )}
        <p className="mt-3 text-sm leading-6 text-[#66766f]">
          This preview gate is frontend-only for now. The form can be connected later to email, CRM or secure intake.
        </p>
      </div>
    </form>
  );
}
