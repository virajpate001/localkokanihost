// src/components/seo-guide/TimeBudgetCalculator.jsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { inputCls, labelCls, panelCls, h2Cls } from "./guideStyles";

// "Is a 2-day trip realistic?" calculator. Takes a one-way journey time plus a
// buffer and departure times, then reports how many waking hours you will
// actually have at the destination vs. travelling. All thresholds, labels and
// verdict copy come from the content block, so the same component works for
// any origin city.
const VERDICT_CLS = {
  ok:  "border-emerald-600",
  mid: "border-accent",
  low: "border-red-700",
};

function pad(n) {
  return n < 10 ? `0${n}` : `${n}`;
}

// Decimal hours → "h:mm am/pm" (with "(next day)" if it rolls past midnight).
function formatTime(hours) {
  const day = Math.floor(hours / 24);
  const x = hours - day * 24;
  let hh = Math.floor(x);
  let mm = Math.round((x - hh) * 60);
  if (mm === 60) { hh += 1; mm = 0; }
  const ap = hh >= 12 ? "pm" : "am";
  const h12 = hh % 12 === 0 ? 12 : hh % 12;
  return `${h12}:${pad(mm)} ${ap}${day > 0 ? " (next day)" : ""}`;
}

// Decimal hours → "3 h 30 min"
function formatDuration(hours) {
  let hh = Math.floor(hours);
  let mm = Math.round((hours - hh) * 60);
  if (mm === 60) { hh += 1; mm = 0; }
  return `${hh} h${mm ? ` ${mm} min` : ""}`;
}

function buildOptions(from, to) {
  const opts = [];
  for (let h = from; h <= to; h++) {
    const ap = h >= 12 ? "pm" : "am";
    const h12 = h % 12 === 0 ? 12 : h % 12;
    opts.push({ value: String(h), label: `${h12}:00 ${ap}` });
  }
  return opts;
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

export default function TimeBudgetCalculator({ block, live }) {
  const [journey, setJourney] = useState("");
  const [buffer, setBuffer] = useState(block.defaults.buffer);
  const [depart1, setDepart1] = useState(block.defaults.depart1);
  const [depart2, setDepart2] = useState(block.defaults.depart2);

  const dep1Options = useMemo(() => buildOptions(block.ranges.depart1[0], block.ranges.depart1[1]), [block.ranges.depart1]);
  const dep2Options = useMemo(() => buildOptions(block.ranges.depart2[0], block.ranges.depart2[1]), [block.ranges.depart2]);

  const result = useMemo(
    () => computeResult({ journey, buffer, depart1, depart2, settings: block.settings }),
    [journey, buffer, depart1, depart2, block.settings]
  );

  return (
    <section id={block.id} className="scroll-mt-28 py-12 md:py-14">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}

        <div className={`max-w-[860px] ${panelCls}`}>
          <div className="mb-4 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
            <label className={labelCls}>
              {block.journeyLabel}
              <input
                type="number"
                inputMode="decimal"
                min="1"
                max="14"
                step="0.5"
                placeholder={block.journeyPlaceholder}
                className={`${inputCls} font-normal`}
                value={journey}
                onChange={(e) => setJourney(e.target.value)}
              />
            </label>

            <label className={labelCls}>
              {block.bufferLabel}
              <select
                className={`${inputCls} font-normal`}
                value={buffer}
                onChange={(e) => setBuffer(e.target.value)}
              >
                {block.buffers.map((b) => (
                  <option key={b.value} value={b.value}>{b.label}</option>
                ))}
              </select>
            </label>

            <label className={labelCls}>
              {block.depart1Label}
              <select
                className={`${inputCls} font-normal`}
                value={depart1}
                onChange={(e) => setDepart1(e.target.value)}
              >
                {dep1Options.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </label>

            <label className={labelCls}>
              {block.depart2Label}
              <select
                className={`${inputCls} font-normal`}
                value={depart2}
                onChange={(e) => setDepart2(e.target.value)}
              >
                {dep2Options.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </label>
          </div>

          <div
            aria-live="polite"
            className={`rounded-xl border-l-[6px] bg-gray-50 dark:bg-gray-950 px-4 py-4 ${
              result ? VERDICT_CLS[result.cls] : "border-gray-300 dark:border-gray-700"
            }`}
          >
            {!result && (
              <p className="text-gray-500 dark:text-gray-400">{block.hintEmpty}</p>
            )}
            {result && (
              <>
                <strong className="block mb-1.5 font-display text-lg text-primary dark:text-white">
                  {result.title}
                </strong>
                <ul className="mb-2 list-disc space-y-1 pl-5 text-gray-800 dark:text-gray-200">
                  {result.items.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
                {result.warnings.map((w, i) => (
                  <p key={i} className="mt-2 font-medium text-red-800 dark:text-red-300">{w}</p>
                ))}
                <p className="mt-3 text-gray-700 dark:text-gray-300">
                  Next:{" "}
                  {result.next.map((n, i) => (
                    <span key={n.slug}>
                      <NextLink slug={n.slug} live={live}>{n.text}</NextLink>
                      {i < result.next.length - 2 ? ", " : ""}
                      {i === result.next.length - 2 ? " or " : ""}
                      {i === result.next.length - 1 ? "." : ""}
                    </span>
                  ))}
                </p>
              </>
            )}
          </div>
        </div>

        {block.fine && (
          <p className="mt-4 max-w-[860px] text-sm text-gray-500 dark:text-gray-400">
            {block.fine}
          </p>
        )}
      </div>
    </section>
  );
}

// Pure calculator. Kept separate so it's trivially unit-testable.
function computeResult({ journey, buffer, depart1, depart2, settings }) {
  const j = parseFloat(journey);
  if (!j || j <= 0) return null;

  const buf = parseFloat(buffer);
  const trip = j + buf;
  const dep1 = parseFloat(depart1);
  const dep2 = parseFloat(depart2);

  const arrive = dep1 + trip;
  const home = dep2 + trip;

  const day1 = Math.max(0, settings.bedDay1 - arrive);
  const day2 = Math.max(0, dep2 - settings.wakeDay2);
  const usable = day1 + day2;
  const travel = trip * 2;

  let cls, title, nextSlugs;
  if (usable >= settings.comfortable) {
    cls = "ok";
    title = settings.titleOk;
    nextSlugs = settings.nextOk;
  } else if (usable >= settings.workable) {
    cls = "mid";
    title = settings.titleMid;
    nextSlugs = settings.nextMid;
  } else {
    cls = "low";
    title = settings.titleLow;
    nextSlugs = settings.nextLow;
  }

  const items = [
    `Day 1: leave at ${formatTime(dep1)}, arrive about ${formatTime(arrive)}.`,
    `Day 2: leave at ${formatTime(dep2)}, reach home about ${formatTime(home)}.`,
    `About ${formatDuration(usable)} of waking time at the destination, compared with about ${formatDuration(travel)} travelling.`,
  ];

  const warnings = [];
  if (arrive > settings.dark) warnings.push(settings.warnDark);
  if (home > settings.lateHome) warnings.push(settings.warnLate);
  if (day1 < 2) warnings.push(settings.warnDay1Short);

  return { cls, title, items, warnings, next: nextSlugs };
}