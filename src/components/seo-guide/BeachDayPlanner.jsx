// src/components/seo-guide/BeachDayPlanner.jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { inputCls, labelCls, panelCls, h2Cls, h3Cls } from "./guideStyles";

// Three selects (time of day / group / season) → three result columns
// (things to do / watch for / pack) + a "More:" footer with guide links.
//
// On first mount, the season select is auto-set to the visitor's current
// month if the block enables it. This runs in an effect, so the initial SSR
// output uses the config default and hydrates to the current month.
export default function BeachDayPlanner({ block, live }) {
  const [time, setTime] = useState(block.defaults.time);
  const [group, setGroup] = useState(block.defaults.group);
  const [season, setSeason] = useState(block.defaults.season);

  // Auto-select the current season on the client only.
  useEffect(() => {
    if (!block.autoSeason) return;
    const m = new Date().getMonth() + 1;
    setSeason(m >= 6 && m <= 9 ? "monsoon" : m >= 3 && m <= 5 ? "summer" : "cooler");
  }, [block.autoSeason]);

  const result = useMemo(() => {
    const ideas = [
      ...block.ideasByTime[time],
      ...(block.groupIdeas[group] || []),
    ];

    const watch = [block.seasonWatch[season]];
    if (block.timeWatch[time]) watch.push(block.timeWatch[time]);
    if (group === "family") watch.push(block.familyWatch);
    watch.push(block.generalWatch);

    const pack = [...block.basePack];
    if (season === "summer" || time === "midday") pack.push(block.extraPack.sun);
    if (season === "monsoon") pack.push(block.extraPack.rain);
    if (group === "family") pack.push(block.extraPack.family);
    if (time === "sunset" || time === "night") pack.push(block.extraPack.evening);

    return { ideas, watch, pack };
  }, [time, group, season, block]);

  function NextLink({ slug, children }) {
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

  return (
    <section id={block.id} className="scroll-mt-28 py-10 md:py-12">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}

        <div className={`${panelCls}`}>
          <div className="mb-4 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
            <label className={labelCls}>
              {block.timeLabel}
              <select className={`${inputCls} font-normal`} value={time} onChange={(e) => setTime(e.target.value)}>
                {block.timeOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </label>
            <label className={labelCls}>
              {block.groupLabel}
              <select className={`${inputCls} font-normal`} value={group} onChange={(e) => setGroup(e.target.value)}>
                {block.groupOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </label>
            <label className={labelCls}>
              {block.seasonLabel}
              <select className={`${inputCls} font-normal`} value={season} onChange={(e) => setSeason(e.target.value)}>
                {block.seasonOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </label>
          </div>

          <div aria-live="polite" className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
            <Column title={block.columnIdeas} items={result.ideas} />
            <Column title={block.columnWatch} items={result.watch} highlight />
            <Column title={block.columnPack} items={result.pack} />
          </div>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            {block.moreLabel}{" "}
            <NextLink slug="best-month-diveagar-beach">best month for the beach</NextLink>
            {", "}
            <NextLink slug="diveagar-food-hotels-restaurants">where to eat</NextLink>
            {", "}
            <NextLink slug="diveagar-2-day-itinerary">plan your days</NextLink>.
          </p>
        </div>
      </div>
    </section>
  );
}

function Column({ title, items, highlight }) {
  return (
    <div
      className={`rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-4 py-4 ${
        highlight ? "border-l-[6px] border-accent" : ""
      }`}
    >
      <h3 className={`${h3Cls} !text-lg mb-2`}>{title}</h3>
      <ul className="list-disc space-y-1.5 pl-5 text-gray-800 dark:text-gray-200">
        {items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}