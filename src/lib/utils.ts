/**
 * Detects if the current browser is Firefox
 */
export function isFirefox(): boolean {
  if (typeof window === "undefined") return false;
  return navigator.userAgent.toLowerCase().includes("firefox");
} 