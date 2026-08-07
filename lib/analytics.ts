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

/** Conversion Sequence Funnel Event Helpers */
export const trackFunnel = {
  sampleReportView: (source = "sample_page") =>
    trackEvent("sample_report_view", { source, funnel_step: 1 }),
  sampleReportDownload: (sampleName = "default_pdf") =>
    trackEvent("sample_report_download", { sample_name: sampleName, funnel_step: 2 }),
  whatsAppClick: (source = "footer_or_hero") =>
    trackEvent("whatsapp_click", { source, funnel_step: 2 }),
  discussCompanySubmit: (entityName: string, evaluationType: string) =>
    trackEvent("discuss_company_submit", { entity_name: entityName, evaluation_type: evaluationType, funnel_step: 3 }),
  orderRequestSubmit: (tier: string, entityName: string) =>
    trackEvent("order_request_submit", { package_tier: tier, entity_name: entityName, funnel_step: 4 }),
  paidReportConversion: (orderId: string, amount: number) =>
    trackEvent("paid_report_conversion", { order_id: orderId, value: amount, currency: "INR", funnel_step: 5 }),
};
