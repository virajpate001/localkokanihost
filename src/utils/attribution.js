// Client-only: reads UTM parameters and the referring site so every enquiry
// can be traced back to Instagram, WhatsApp shares, Google, etc.
export function getAttribution() {
  if (typeof window === "undefined") return {};
  const KEY = "lk_attribution";
  let stored = {};
  try {
    stored = JSON.parse(window.sessionStorage.getItem(KEY) || "{}");
  } catch {}

  const params = new URLSearchParams(window.location.search);
  const fresh = {
    utmSource: params.get("utm_source") || "",
    utmMedium: params.get("utm_medium") || "",
    utmCampaign: params.get("utm_campaign") || "",
  };
  const merged = fresh.utmSource || fresh.utmMedium || fresh.utmCampaign ? fresh : stored;

  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(merged));
  } catch {}

  let referrer = "";
  try {
    referrer = document.referrer ? new URL(document.referrer).hostname : "";
  } catch {}

  return { ...merged, referrer };
}