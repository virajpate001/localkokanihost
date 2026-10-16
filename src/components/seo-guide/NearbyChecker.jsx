// src/components/seo-guide/NearbyChecker.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { panelCls, h2Cls, h3Cls, inputCls, labelCls } from "./guideStyles";

// One card per nearby town. Visitor enters a one-way travel time and sees how
// much time they'd actually have there on a day trip.
const VERDICT_CLS = {
  ok:  "border-emerald-600",
  mid: "border-accent",
  low: "border-red-700",
};

function fmtDuration(hours) {
  let hh = Math.floor(hours);
  let mm = Math.round((hours - hh) * 60);
  if (mm === 60) { hh += 1; mm = 0; }
  return `${hh} h${mm ? ` ${mm} min` : ""}`;
}

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

export default function NearbyChecker({ block, live }) {
  return (
    <section id={block.id} className="scroll-mt-28 py-10 md:py-12">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}

        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          {block.towns.map((town) => (
            <TownCard key={town.id} town={town} block={block} live={live} />
          ))}
        </div>

        {block.fine && (
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{block.fine}</p>
        )}
      </div>
    </section>
  );
}

function TownCard({ town, block, live }) {
  const [value, setValue] = useState(town.hours != null ? String(town.hours) : "");
  const t = parseFloat(value);
  const hasValue = t > 0;

  const there = hasValue ? block.settings.dayHours - 2 * t : 0;
  let verdict = null;
  if (hasValue) {
    if (there >= block.settings.good) verdict = "ok";
    else if (there >= block.settings.short) verdict = "mid";
    else verdict = "low";
  }

  return (
    <article className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
      <h3 className={`${h3Cls} !text-lg mb-2.5`}>{town.name}</h3>

      <label className={labelCls}>
        {block.inputLabel}
        <input
          type="number"
          inputMode="decimal"
          min="0.25"
          max="6"
          step="0.25"
          placeholder={block.inputPlaceholder}
          className={`${inputCls} font-normal`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>

      <div
        aria-live="polite"
        className={`mt-3 rounded-xl border-l-[6px] bg-gray-50 dark:bg-gray-950 px-3.5 py-3 ${
          verdict ? VERDICT_CLS[verdict] : "border-gray-300 dark:border-gray-700"
        }`}
      >
        {!hasValue && (
          <p className="text-gray-500 dark:text-gray-400">{block.hintEmpty}</p>
        )}
        {hasValue && (
          <>
            <strong className="text-primary dark:text-white">
              {block.verdicts[verdict]}
            </strong>
            <p className="mt-1 text-gray-800 dark:text-gray-200">
              {block.roundTripText
                .replace("{roundTrip}", fmtDuration(2 * t))
                .replace("{there}", fmtDuration(Math.max(0, there)))
                .replace("{name}", town.name)
                .replace("{dayHours}", String(block.settings.dayHours))}
            </p>
            {town.slug && town.link && (
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Compare{" "}
                <NextLink slug={town.slug} live={live}>
                  {town.link}
                </NextLink>
                .
              </p>
            )}
          </>
        )}
      </div>
    </article>
  );
}