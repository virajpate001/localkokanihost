// src/components/seo-guide/WeekendFinder.jsx
"use client";

import { useMemo, useState } from "react";
import GuideLink from "./GuideLink";
import { inputCls, h2Cls, h3Cls, tagCls } from "./guideStyles";

// Weekend getaway finder: three dropdowns (origin / trip length / vibe) →
// filtered grid of destinations.
//
// Each destination declares two drive-time ranges (from Mumbai and from Pune),
// and the trip-length dropdown maps to a maximum one-way hours threshold.
// A destination fits when its drive-time HIGH end is under that threshold
// and, if a vibe is selected, it matches one of its tags.
export default function WeekendFinder({ block, live }) {
  const [fromIdx, setFromIdx] = useState(0);
  const [lenIdx, setLenIdx] = useState(block.defaultLengthIdx ?? 1);
  const [vibe, setVibe] = useState("all");

  const vibeKeys = useMemo(() => {
    const set = new Set();
    block.destinations.forEach((d) => d.vibes.forEach((v) => set.add(v)));
    return Array.from(set);
  }, [block.destinations]);

  const maxHours = block.tripLengths[lenIdx].maxHours;

  const visible = useMemo(
    () =>
      block.destinations.filter((d) => {
        const hours = fromIdx === 0 ? d.fromMumbai : d.fromPune;
        if (!hours) return false;
        if (hours.hoursHigh > maxHours) return false;
        if (vibe !== "all" && !d.vibes.includes(vibe)) return false;
        return true;
      }),
    [block.destinations, fromIdx, maxHours, vibe]
  );

  function fmt(h) {
    return Number.isInteger(h) ? String(h) : `${Math.floor(h)}½`;
  }

  return (
    <section id={block.id} className="scroll-mt-28 py-12 md:py-14">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}

        <div className="mb-5 grid max-w-[900px] gap-3 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
          <label className="flex flex-col gap-1 text-sm font-semibold text-primary dark:text-white">
            {block.fromLabel}
            <select
              className={`${inputCls} font-normal`}
              value={fromIdx}
              onChange={(e) => setFromIdx(Number(e.target.value))}
            >
              {block.origins.map((o, i) => (
                <option key={o} value={i}>{o}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1 text-sm font-semibold text-primary dark:text-white">
            {block.lengthLabel}
            <select
              className={`${inputCls} font-normal`}
              value={lenIdx}
              onChange={(e) => setLenIdx(Number(e.target.value))}
            >
              {block.tripLengths.map((t, i) => (
                <option key={i} value={i}>{t.label}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1 text-sm font-semibold text-primary dark:text-white">
            {block.vibeLabel}
            <select
              className={`${inputCls} font-normal`}
              value={vibe}
              onChange={(e) => setVibe(e.target.value)}
            >
              <option value="all">{block.allVibesLabel}</option>
              {vibeKeys.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </label>
        </div>

        {visible.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 p-6 text-center text-gray-500 dark:text-gray-400">
            {block.empty}{fromIdx === 1 && ` ${block.emptyPuneSuffix}`}
          </div>
        ) : (
          <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
            {visible.map((d, i) => {
              const hours = fromIdx === 0 ? d.fromMumbai : d.fromPune;
              const km = fromIdx === 0 ? d.kmMumbai : d.kmPune;
              return (
                <article
                  key={i}
                  className="flex flex-col gap-2.5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5"
                >
                  <h3 className={`${h3Cls} !text-lg`}>{d.name}</h3>
                  <ul className="flex flex-wrap gap-1.5">
                    {d.vibes.map((v) => (
                      <li key={v} className={tagCls}>{v}</li>
                    ))}
                  </ul>
                  {d.note && (
                    <p className="m-0 text-sm text-gray-500 dark:text-gray-400">
                      {d.note}
                      <br />
                      <span className="text-xs">
                        {km}, roughly {fmt(hours.hoursLow)}–{fmt(hours.hoursHigh)} hours one way
                      </span>
                    </p>
                  )}
                  {d.slug && (
                    <GuideLink
                      slug={d.slug}
                      live={live.has(d.slug)}
                      className="mt-auto inline-flex items-center justify-center rounded-xl bg-secondary text-white font-semibold px-4 py-2.5 hover:bg-primary transition-colors"
                      softClass="mt-auto inline-flex items-center justify-center rounded-xl border border-dashed border-gray-400 dark:border-gray-600 text-gray-500 dark:text-gray-400 font-semibold px-4 py-2.5"
                    >
                      {block.cta}
                    </GuideLink>
                  )}
                </article>
              );
            })}
          </div>
        )}

        {block.legend && (
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{block.legend}</p>
        )}
      </div>
    </section>
  );
}