// src/components/seo-guide/MonthCalendar.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import GuideMarkdown from "./GuideMarkdown";
import { h2Cls, h3Cls } from "./guideStyles";

// A 12-month picker + detail panel + optional accompanying season strip.
// Used by:
//   - best-month-diveagar-beach    (beach / weather / crowds / tip rows)
//   - konkan-guide-best-time-to-visit (weather / sea / crowds / tip rows)
//
// Each month's detail panel renders `block.rows` — an array of {key, label}
// pairs — against the matching field on the month object. If a month object
// is missing a key, that row is skipped for that month.
//
// `block.autoSelectCurrent` selects the current calendar month on mount
// (client-only) so the panel isn't empty when the page loads.
const BAND_CLS = {
  best:    "bg-emerald-600 text-white",
  good:    "bg-accent text-primary",
  fair:    "bg-accent text-primary",
  monsoon: "bg-sky-700 text-white",
  off:     "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
};

function NextLink({ slug, live, children }) {
  if (!live.has(slug)) {
    return (
      <span className="cursor-default border-b border-dotted border-current opacity-70">
        {children}
      </span>
    );
  }
  return (
    <Link href={`/${slug}`} className="font-medium text-secondary hover:underline">
      {children}
    </Link>
  );
}

export default function MonthCalendar({ block, live }) {
  const [selected, setSelected] = useState(null);

  // Auto-select the current month on mount (client only, avoids SSR mismatch)
  useEffect(() => {
    if (!block.autoSelectCurrent) return;
    setSelected(new Date().getMonth());
  }, [block.autoSelectCurrent]);

  const month = selected != null ? block.months[selected] : null;
  const rows = block.rows || [
    { key: "beach", label: "Beach" },
    { key: "weather", label: "Weather" },
    { key: "crowds", label: "Crowds" },
    { key: "tip", label: "Tip" },
  ];

  return (
    <section id={block.id} className="scroll-mt-28 py-12 md:py-14">
      <div className="container-custom">
        {block.heading && <h2 className={h2Cls}>{block.heading}</h2>}
        {block.sub && (
          <p className="mt-3 mb-5 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}

        {/* Month buttons */}
        <div
          role="group"
          aria-label={block.buttonsAriaLabel || "Choose a month"}
          className="my-3 grid max-w-[640px] grid-cols-6 gap-1.5 sm:grid-cols-6"
        >
          {block.months.map((m, i) => (
            <button
              key={m.label}
              type="button"
              aria-pressed={i === selected}
              onClick={() => setSelected(i)}
              className={`rounded-md border-b-[5px] border-gray-200 dark:border-gray-700 px-1 py-2 font-semibold text-sm text-primary dark:text-white transition-colors hover:border-secondary ${
                i === selected ? "!bg-primary !text-white !border-primary" : ""
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div
          aria-live="polite"
          className="max-w-[640px] rounded-xl border border-gray-200 dark:border-gray-800 border-l-[6px] border-accent bg-white dark:bg-gray-900 px-5 py-4 mb-4"
        >
          {!month && (
            <p className="m-0 text-gray-500 dark:text-gray-400">{block.hintEmpty}</p>
          )}
          {month && (
            <>
              <h3 className={`${h3Cls} !text-lg mb-2`}>
                {block.fullMonths?.[selected] || month.label}
                {month.rating && `: ${block.bandLabels?.[month.rating] || month.rating}`}
              </h3>
              <dl className="grid gap-y-1.5 gap-x-3 [grid-template-columns:7.5rem_1fr] sm:[grid-template-columns:7.5rem_1fr]">
                {rows.map((row) =>
                  month[row.key] != null ? (
                    <div key={row.key} className="contents">
                      <dt className="font-semibold text-gray-500 dark:text-gray-400">{row.label}</dt>
                      <dd className="m-0 text-gray-800 dark:text-gray-200">{month[row.key]}</dd>
                    </div>
                  ) : null
                )}
              </dl>
            </>
          )}
        </div>

        {/* Optional season strip */}
        {block.seasonBar && (
          <>
            <div
              role="img"
              aria-label={block.seasonBar.ariaLabel}
              className="my-3 grid max-w-[640px] grid-cols-12 gap-[3px]"
            >
              {block.seasonBar.months.map((m) => (
                <span
                  key={m.label}
                  className={`flex h-[34px] items-end justify-center rounded-[4px] pb-[2px] text-[0.7rem] font-medium ${
                    BAND_CLS[m.band] || BAND_CLS.off
                  }`}
                >
                  {m.label}
                </span>
              ))}
            </div>
            {block.seasonBar.legend?.length > 0 && (
              <p className="mt-1.5 flex flex-wrap gap-3.5 text-sm text-gray-500 dark:text-gray-400">
                {block.seasonBar.legend.map((l) => (
                  <span key={l.band} className="inline-flex items-center">
                    <span
                      aria-hidden="true"
                      className={`mr-1.5 inline-block h-3.5 w-3.5 rounded-[3px] ${
                        BAND_CLS[l.band] || BAND_CLS.off
                      }`}
                    />
                    {l.label}
                  </span>
                ))}
              </p>
            )}
          </>
        )}

        {block.fine && (
          <GuideMarkdown md={block.fine} live={live} className="mt-3 max-w-[70ch] text-sm prose-sm" />
        )}
      </div>
    </section>
  );
}