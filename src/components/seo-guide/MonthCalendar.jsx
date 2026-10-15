// src/components/seo-guide/MonthCalendar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { panelCls, h2Cls, h3Cls } from "./guideStyles";

const BAND_CLS = {
  best:    "border-emerald-600",
  good:    "border-secondary",
  fair:    "border-accent",
  limited: "border-gray-400",
};

function NextLink({ slug, live, children }) {
  if (!live.has(slug)) {
    return <span className="cursor-default border-b border-dotted border-current opacity-70">{children}</span>;
  }
  return <Link href={`/${slug}`} className="font-medium text-secondary hover:underline">{children}</Link>;
}

export default function MonthCalendar({ block, live }) {
  const [selected, setSelected] = useState(null);
  const month = selected != null ? block.months[selected] : null;

  return (
    <section id={block.id} className="scroll-mt-28 py-12 md:py-14">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>

        <ul aria-label={block.ariaLabel} className="mb-3.5 grid list-none gap-2.5 p-0 [grid-template-columns:repeat(auto-fill,minmax(110px,1fr))]">
          {block.months.map((m, i) => (
            <li key={m.name}>
              <button
                type="button"
                aria-pressed={i === selected}
                onClick={() => setSelected(i)}
                className={`flex w-full flex-col gap-0.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 border-t-[6px] bg-white dark:bg-gray-900 px-3 py-3 text-left transition-colors hover:border-secondary ${
                  i === selected ? "outline outline-2 outline-offset-1 outline-primary" : ""
                } ${BAND_CLS[m.rating] || ""}`}
              >
                <span className="font-display text-lg font-bold text-primary dark:text-white">{m.name.slice(0, 3)}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{block.ratingLabels[m.rating]}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="mb-5 flex flex-wrap gap-3.5 text-sm text-gray-500 dark:text-gray-400">
          {Object.entries(block.ratingLabels).map(([band, label]) => (
            <span key={band} className="inline-flex items-center">
              <span aria-hidden="true" className={`mr-1.5 inline-block h-1.5 w-3.5 rounded-sm border-t-[6px] ${BAND_CLS[band]}`} />
              {label}
            </span>
          ))}
        </div>

        <div
          aria-live="polite"
          className={`max-w-[860px] rounded-2xl border border-gray-200 dark:border-gray-800 border-l-[6px] bg-white dark:bg-gray-950 p-5 md:p-6 ${
            month ? BAND_CLS[month.rating] : ""
          }`}
        >
          {!month && <p className="text-gray-500 dark:text-gray-400">{block.hintEmpty}</p>}
          {month && (
            <>
              <h3 className={`${h3Cls} mb-1`}>{month.name}</h3>
              <p className="mb-3 font-bold text-primary dark:text-white">{block.ratingLabels[month.rating]}</p>
              {["beach", "weather", "crowds", "tip"].map((k) => (
                <p key={k} className="mb-2 text-gray-800 dark:text-gray-200">
                  <strong>{k.charAt(0).toUpperCase() + k.slice(1)}: </strong>
                  {month[k]}
                </p>
              ))}
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                Next: <NextLink slug="best-hotels-in-diveagar" live={live}>choose a hotel</NextLink>,{" "}
                <NextLink slug="how-to-book-diveagar-hotels" live={live}>learn how to book</NextLink>, or{" "}
                <NextLink slug="diveagar-2-day-itinerary" live={live}>plan your days</NextLink>.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}