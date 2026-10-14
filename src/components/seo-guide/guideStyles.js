// src/components/seo-guide/guideStyles.js
// Shared class strings for the guide pages, built only from the app's theme
// tokens (primary / secondary / accent, font-display, dark mode). Change the
// look of every guide widget here.

export const waBtn =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-accent hover:bg-accent-light " +
  "text-primary font-semibold px-5 py-2.5 transition-colors focus-visible:outline focus-visible:outline-2 " +
  "focus-visible:outline-offset-2 focus-visible:outline-secondary";

export const copyBtn =
  "inline-flex items-center justify-center gap-2 rounded-xl border-2 border-secondary text-secondary " +
  "bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900 font-semibold px-5 py-2.5 transition-colors";

export const ghostBtn =
  "inline-flex items-center justify-center rounded-xl border-2 border-white/40 text-white font-medium " +
  "px-6 py-3 hover:bg-white/10 transition-colors";

export const accentBtn =
  "inline-flex items-center justify-center rounded-xl bg-accent hover:bg-accent-light text-primary " +
  "font-semibold px-6 py-3 transition-colors shadow-card";

export const chipCls = (pressed) =>
  "rounded-full border-2 px-4 py-2 text-sm font-medium transition-colors " +
  (pressed
    ? "bg-primary border-primary text-white dark:bg-secondary dark:border-secondary"
    : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-primary dark:text-gray-100 hover:border-secondary");

export const inputCls =
  "w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 " +
  "px-3 py-2.5 text-base text-gray-900 dark:text-gray-100 focus:border-secondary focus:outline-none";

export const labelCls = "flex flex-col gap-1 text-sm font-semibold text-primary dark:text-white";

export const panelCls =
  "rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 md:p-6";

export const tagCls =
  "text-xs rounded-md px-2 py-0.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 " +
  "dark:border-gray-700 text-primary dark:text-gray-200";

export const h2Cls = "font-display font-bold text-2xl md:text-4xl text-primary dark:text-white";
export const h3Cls = "font-display font-semibold text-xl md:text-2xl text-primary dark:text-white";