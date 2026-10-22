// src/components/seo-guide/RouteChooser.jsx
"use client";

import { useState } from "react";
import { inputCls, labelCls, h2Cls, h3Cls } from "./guideStyles";

// Route chooser / route chain.
//
// Two modes:
//   1. "chooser" (default) — two selects (from × to), a route card with a
//      title, a stops chain (A → B → C), and a paragraph. Re-uses the same
//      chain rendering as the static variant below.
//   2. "static" — no dropdowns; just a heading, sub, and a single chain.
//      Used for the "NH66: main towns from north to south" strip.
//
// The chain renders as inline chips separated by →, matching the source HTML.
export default function RouteChooser({ block }) {
  const isChooser = block.mode !== "static";

  const [fromIdx, setFromIdx] = useState(0);
  const [toIdx, setToIdx] = useState(0);

  const active = isChooser
    ? block.routes[fromIdx][toIdx]
    : null;

  return (
    <section id={block.id} className="scroll-mt-28 py-10 md:py-12">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-5 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}

        {isChooser && (
          <>
            <div className="mb-5 grid max-w-[640px] gap-3 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
              <label className={labelCls}>
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
              <label className={labelCls}>
                {block.toLabel}
                <select
                  className={`${inputCls} font-normal`}
                  value={toIdx}
                  onChange={(e) => setToIdx(Number(e.target.value))}
                >
                  {block.destinations.map((d, i) => (
                    <option key={d} value={i}>{d}</option>
                  ))}
                </select>
              </label>
            </div>

            <div
              aria-live="polite"
              className="max-w-[720px] rounded-xl border border-gray-200 dark:border-gray-800 border-l-[6px] border-accent bg-white dark:bg-gray-900 px-5 py-4"
            >
              <h3 className={`${h3Cls} !text-lg mb-1`}>{active.title}</h3>
              <StopsChain stops={active.stops} />
              <p className="mt-2.5 mb-2 text-gray-800 dark:text-gray-200">{active.note}</p>
              <p className="m-0 text-sm text-gray-500 dark:text-gray-400">
                {block.hint}
              </p>
            </div>
          </>
        )}

        {!isChooser && (
          <StopsChain stops={block.staticStops} />
        )}

        {block.mode === "static" && block.note && (
          <p className="mt-3 max-w-[70ch] text-gray-800 dark:text-gray-200">{block.note}</p>
        )}
      </div>
    </section>
  );
}

function StopsChain({ stops }) {
  return (
    <div
      aria-label="Route stops"
      className="my-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-primary dark:text-white"
    >
      {stops.map((s, i) => (
        <span key={i} className="inline-flex items-center">
          {i > 0 && (
            <span aria-hidden="true" className="mr-2 text-gray-500 dark:text-gray-400">
              →
            </span>
          )}
          {s}
        </span>
      ))}
    </div>
  );
}