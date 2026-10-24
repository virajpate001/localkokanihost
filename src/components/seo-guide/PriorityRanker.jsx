// src/components/seo-guide/PriorityRanker.jsx
"use client";

import { useMemo, useState } from "react";
import GuideLink from "./GuideLink";
import { h2Cls } from "./guideStyles";

// Multi-checkbox priority ranker. Each "item" (beach, destination, etc.) carries
// a rating (0-3) per priority key. Ticked priorities are summed; items are
// sorted by total score, with a visual bar per row.
//
// Distinct from beachesRanker (which uses per-criterion importance weights and
// a weighted matrix). This block is binary ticked / not ticked, no matrix.
export default function PriorityRanker({ block, live }) {
  const [chosen, setChosen] = useState(() => {
    // Default: only the first priority ticked, matching the HTML's default
    const first = {};
    block.priorities.forEach((p, i) => {
      first[p.key] = i === 0;
    });
    return first;
  });

  const tickedKeys = useMemo(
    () => block.priorities.filter((p) => chosen[p.key]).map((p) => p.key),
    [chosen, block.priorities]
  );

  const maxScore = tickedKeys.length * 3;

  const ranked = useMemo(() => {
    if (tickedKeys.length === 0) return [];
    return block.items
      .map((it) => ({
        ...it,
        score: tickedKeys.reduce((sum, k) => sum + (it.ratings[k] || 0), 0),
      }))
      .sort((a, b) => b.score - a.score);
  }, [block.items, tickedKeys]);

  return (
    <section id={block.id} className="scroll-mt-28 py-12 md:py-14">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-4 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}

        <div className="mb-4 flex flex-wrap gap-x-4 gap-y-1.5">
          {block.priorities.map((p) => (
            <label
              key={p.key}
              className="inline-flex cursor-pointer items-center gap-1.5 text-gray-800 dark:text-gray-200"
            >
              <input
                type="checkbox"
                className="h-[18px] w-[18px] accent-secondary"
                checked={!!chosen[p.key]}
                onChange={() => setChosen((c) => ({ ...c, [p.key]: !c[p.key] }))}
              />
              {p.label}
            </label>
          ))}
        </div>

        <ol
          aria-live="polite"
          className="mt-4 max-w-[720px] list-none space-y-2 p-0"
        >
          {ranked.length === 0 && (
            <li className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3 text-gray-500 dark:text-gray-400">
              {block.hintEmpty}
            </li>
          )}
          {ranked.map((it, i) => (
            <li
              key={it.name}
              className="grid items-center gap-x-3 gap-y-1 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3 [grid-template-columns:2rem_1fr_auto]"
            >
              <span
                aria-hidden="true"
                className="font-display text-lg font-bold text-gray-400 dark:text-gray-500"
              >
                {i + 1}
              </span>
              <div className="min-w-0">
                <GuideLink
                  slug={it.slug}
                  live={live.has(it.slug)}
                  className="font-bold text-secondary hover:underline"
                  softClass="font-bold text-gray-500 dark:text-gray-400 border-b border-dotted border-current"
                >
                  {it.name}
                </GuideLink>
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {it.score} / {maxScore}
              </span>
              <div
                aria-hidden="true"
                className="col-span-full relative h-1.5 overflow-hidden rounded bg-gray-200 dark:bg-gray-800"
              >
                <div
                  className="absolute inset-y-0 left-0 rounded bg-emerald-600"
                  style={{ width: `${Math.round((it.score / maxScore) * 100)}%` }}
                />
              </div>
              <small className="col-span-full text-sm text-gray-500 dark:text-gray-400">
                {it.bestFor}
              </small>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}