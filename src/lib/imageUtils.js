// src/lib/imageUtils.js
// Pure, synchronous — safe to import from Client Components directly.
// No transformation server exists locally (unlike Cloudinary), so this
// currently just returns the URL unchanged; kept so existing call sites
// (`getOptimizedUrl(url, { width })`) don't need to change.
export function getOptimizedUrl(url) {
  return url;
}
