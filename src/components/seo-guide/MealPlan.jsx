// src/components/seo-guide/MealPlan.jsx
"use client";

import { useState } from "react";
import { usePageFilter } from "./PageFilterContext";
import { panelCls, h2Cls, h3Cls, inputCls, labelCls } from "./guideStyles";

// Pick how you plan to eat → get a suggested plan + a filter that the stays
// block will pick up on. If there is no PageFilterProvider above us, we still
// render the suggestion; we just cannot drive the stays grid.
export default function MealPlan({ block }) {
  const [key, setKey] = useState(block.defaultKey);
  const plan = block.plans[key];
  const shared = usePageFilter();

  function change(k) {
    setKey(k);
    if (shared?.setFilter) shared.setFilter(block.plans[k].filter || null);
  }

  return (
    <section
      id={block.id}
      className="scroll-mt-28 border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-12 md:py-14"
    >
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>

        <div className="mb-4 max-w-[420px]">
          <label className={labelCls}>
            {block.selectLabel}
            <select
              className={`${inputCls} font-normal`}
              value={key}
              onChange={(e) => change(e.target.value)}
            >
              {block.options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div
          aria-live="polite"
          className="max-w-[860px] rounded-2xl border border-gray-200 dark:border-gray-800 border-l-[6px] border-l-emerald-600 bg-gray-50 dark:bg-gray-950 px-5 py-4.5 mb-6"
        >
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            {block.suggestionLabel}
          </p>
          <h3 className={`${h3Cls} mb-1.5`}>{plan.planName}</h3>
          <p className="text-gray-800 dark:text-gray-200">{plan.text}</p>
        </div>

        <div className={`${panelCls} !p-0 overflow-hidden`}>
          <table className="w-full text-[0.95rem]">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left font-bold text-primary dark:text-white">Plan</th>
                <th className="px-4 py-3 text-left font-bold text-primary dark:text-white">Also called</th>
                <th className="px-4 py-3 text-left font-bold text-primary dark:text-white">What it usually includes</th>
              </tr>
            </thead>
            <tbody>
              {block.table.map((row, i) => (
                <tr key={i} className="border-t border-gray-200 dark:border-gray-800">
                  <td className="px-4 py-3 font-semibold text-primary dark:text-white">{row.plan}</td>
                  <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{row.alias}</td>
                  <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{row.includes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {block.fine && (
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">{block.fine}</p>
        )}
      </div>
    </section>
  );
}