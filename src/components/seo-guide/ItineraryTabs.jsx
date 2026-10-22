// src/components/seo-guide/ItineraryTabs.jsx
"use client";

import { useState } from "react";
import GuideMarkdown from "./GuideMarkdown";
import { chipCls, h2Cls, h3Cls } from "./guideStyles";

// Tabbed itinerary switcher. Each tab shows a title, subtitle, and a list of
// day rows (label + name + markdown note). Unlike HubSteps (which switches
// between link lists), this switches between full day-by-day plans.
export default function ItineraryTabs({ block, live }) {
  const [active, setActive] = useState(0);
  const plan = block.plans[active];

  return (
    <section id={block.id} className="scroll-mt-28 py-12 md:py-14">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-5 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}

        <div
          role="tablist"
          aria-label={block.tabsAriaLabel}
          className="mb-4 flex flex-wrap gap-2.5"
        >
          {block.plans.map((p, i) => (
            <button
              key={p.tab}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={chipCls(i === active)}
            >
              {p.tab}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          aria-live="polite"
          className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-5 py-4"
        >
          <h3 className={`${h3Cls} !text-lg mb-1`}>{plan.title}</h3>
          {plan.sub && (
            <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">{plan.sub}</p>
          )}
          {plan.days.map((d, i) => (
            <div
              key={i}
              className="grid gap-x-4 gap-y-1 border-t border-gray-200 dark:border-gray-800 py-3 [grid-template-columns:5.5rem_1fr] first:border-t-0 first:pt-0"
            >
              <div className="font-display font-bold text-primary dark:text-white">{d.label}</div>
              <div>
                <strong className="block font-semibold text-primary dark:text-white">{d.name}</strong>
                <GuideMarkdown md={d.note} live={live} className="text-sm prose-sm" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}