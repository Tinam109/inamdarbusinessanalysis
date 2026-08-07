"use client";

export interface AttributionData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  referrer?: string;
  landing_page?: string;
  first_seen?: string;
}

const STORAGE_KEY = "iba_attribution_data";

/**
 * Initializes and captures UTM parameters from current URL and document.referrer.
 * Preserves the original first-touch attribution across the session.
 */
export function initAttribution(): AttributionData {
  if (typeof window === "undefined") return {};

  try {
    const existing = sessionStorage.getItem(STORAGE_KEY);
    let attribution: AttributionData = existing ? JSON.parse(existing) : {};

    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source");
    const utmMedium = urlParams.get("utm_medium");
    const utmCampaign = urlParams.get("utm_campaign");
    const utmTerm = urlParams.get("utm_term");
    const utmContent = urlParams.get("utm_content");
    const gclid = urlParams.get("gclid");

    // If new UTMs are found on current landing, update or set first touch
    if (utmSource || utmCampaign || gclid) {
      attribution = {
        ...attribution,
        utm_source: utmSource || attribution.utm_source || (gclid ? "google_ads" : undefined),
        utm_medium: utmMedium || attribution.utm_medium || (gclid ? "cpc" : undefined),
        utm_campaign: utmCampaign || attribution.utm_campaign,
        utm_term: utmTerm || attribution.utm_term,
        utm_content: utmContent || attribution.utm_content,
        gclid: gclid || attribution.gclid,
      };
    }

    // Capture referrer if external and not yet stored
    if (!attribution.referrer && document.referrer) {
      try {
        const refUrl = new URL(document.referrer);
        if (refUrl.hostname !== window.location.hostname) {
          attribution.referrer = document.referrer;
          if (!attribution.utm_source) {
            attribution.utm_source = refUrl.hostname.replace("www.", "");
            attribution.utm_medium = "referral";
          }
        }
      } catch {
        attribution.referrer = document.referrer;
      }
    }

    // Record landing page on first touch
    if (!attribution.landing_page) {
      attribution.landing_page = window.location.pathname;
      attribution.first_seen = new Date().toISOString();
    }

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
    return attribution;
  } catch (e) {
    console.warn("Could not access sessionStorage for attribution", e);
    return {};
  }
}

/**
 * Retrieves the stored first-touch attribution data for lead forms.
 */
export function getAttributionData(): AttributionData {
  if (typeof window === "undefined") return {};
  try {
    const data = sessionStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
    return initAttribution();
  } catch {
    return {};
  }
}
