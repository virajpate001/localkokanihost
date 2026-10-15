// src/components/seo-guide/SeasonMatcher.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { chipCls, panelCls, h2Cls, h3Cls } from "./guideStyles";

// One-question matcher: pick a priority, get back the season that suits it.
// The "right now" note lives in the AnswerBox, not here, so this component
// stays purely about the user's stated priority.
export default function SeasonMatcher({ block, live }) {
  const [activeKey, setActiveKey] = useState(null);

  const priority = block.priorities.find((p) => p.key === activeKey);
  const season = priority ? block.seasons[priority.season] : null;

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
    <section id={block.id} className="scroll-mt-28 py-12 md:py-14">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>

        <ul aria-label={block.ariaLabel} className="mb-2.5 flex flex-wrap gap-2.5">
          {block.priorities.map((p) => (
            <li key={p.key}>
              <button
                type="button"
                aria-pressed={p.key === activeKey}
                onClick={() => setActiveKey(p.key)}
                className={chipCls(p.key === activeKey)}
              >
                {p.label}
              </button>
            </li>
          ))}
        </ul>

        <div
          aria-live="polite"
          className={`mt-3 max-w-[860px] rounded-2xl border ${
            season
              ? "border-emerald-600 bg-white dark:bg-gray-950 border-l-[6px]"
              : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
          } p-5 md:p-6`}
        >
          {!season && <p className="text-gray-500 dark:text-gray-400">{block.hintEmpty}</p>}
          {season && (
            <>
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                {block.matchLabel}
              </p>
              <h3 className={`${h3Cls} mb-2`}>
                {season.name} ({season.range})
              </h3>
              <p className="mb-2.5 text-gray-800 dark:text-gray-200">{priority.why}</p>
              <p className="mb-2.5 text-gray-800 dark:text-gray-200">
                <strong>Keep in mind:</strong> {season.watch}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Next:{" "}
                <NextLink slug="best-month-diveagar-beach">compare individual months</NextLink>
                ,{" "}
                <NextLink slug="best-hotels-in-diveagar">choose a hotel</NextLink>
                , then{" "}
                <NextLink slug="how-to-book-diveagar-hotels">learn how to book</NextLink>.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}