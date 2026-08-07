"use client";

import { useEffect } from "react";
import { initAttribution } from "@/lib/utm";

export function AttributionTracker() {
  useEffect(() => {
    initAttribution();
  }, []);

  return null;
}
