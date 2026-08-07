/**
 * Unified client-side analytics helper for Inamdar Business Analysis.
 * Dispatches events to PostHog and Google Analytics 4 (gtag) simultaneously.
 */

declare global {
  interface Window {
    posthog?: {
      capture: (eventName: string, properties?: Record<string, any>) => void;
    };
    gtag?: (
      command: "event" | "config" | "js" | "set",
      action: string,
      params?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

export function trackEvent(eventName: string, properties: Record<string, any> = {}) {
  if (typeof window === "undefined") return;

  // 1. PostHog
  if (window.posthog && typeof window.posthog.capture === "function") {
    try {
      window.posthog.capture(eventName, properties);
    } catch (e) {
      console.warn("PostHog event capture failed:", e);
    }
  }

  // 2. Google Analytics 4 (gtag.js)
  if (window.gtag && typeof window.gtag === "function") {
    try {
      window.gtag("event", eventName, properties);
    } catch (e) {
      console.warn("GA4 event capture failed:", e);
    }
  }
}
