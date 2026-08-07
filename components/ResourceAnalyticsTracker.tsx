"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

interface Props {
  slug: string;
  title: string;
}

export function ResourceAnalyticsTracker({ slug, title }: Props) {
  const tracked50 = useRef(false);
  const tracked90 = useRef(false);
  const startTime = useRef(Date.now());

  useEffect(() => {
    trackEvent("resource_guide_viewed", {
      slug,
      title,
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;

      const progress = (scrollY / totalHeight) * 100;

      if (progress >= 50 && !tracked50.current) {
        tracked50.current = true;
        trackEvent("resource_scroll_50", { slug, title });
      }

      if (progress >= 90 && !tracked90.current) {
        tracked90.current = true;
        const dwellSeconds = Math.round((Date.now() - startTime.current) / 1000);
        trackEvent("resource_scroll_90_read_complete", {
          slug,
          title,
          dwell_seconds: dwellSeconds,
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug, title]);

  return null;
}
