// src/components/seo-guide/DishGrid.jsx
"use client";

import { useMemo, useState } from "react";
import { inputCls, h2Cls, h3Cls, tagCls } from "./guideStyles";

// Single-filter grid of items (used for the "dishes to try" section on the
// Malvani food page). Each card has a name, a category tag, a description and
// an optional tip line. No links, no WhatsApp — pure information.
export default function DishGrid({ block }) {
  const [typeFilter, setTypeFilter] = useState("all");

  const types = useMemo(() => {
    const set = new Set();
    block.dishes.forEach((d) => set.add(d.type));
    return Array.from(set);
  }, [block.dishes]);

  const visible = useMemo(
    () =>
      block.dishes.filter((d) => typeFilter === "all" || d.type === typeFilter),
    [block.dishes, typeFilter]
  );

  return (
    <section id={block.id} className="scroll-mt-28 py-12 md:py-14">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-5 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}

        <div className="mb-5 max-w-[260px]">
          <label className="flex flex-col gap-1 text-sm font-semibold text-primary dark:text-white">
            {block.filterLabel}
            <select
              className={`${inputCls} font-normal`}
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="all">{block.allTypesLabel}</option>
              {types.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
          {visible.map((d, i) => (
            <article
              key={i}
              className="flex flex-col gap-2.5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5"
            >
              <h3 className={`${h3Cls} !text-lg`}>{d.name}</h3>
              <ul className="flex flex-wrap gap-1.5">
                <li className={tagCls}>{d.type}</li>
              </ul>
              <p className="m-0 text-sm text-gray-500 dark:text-gray-400">{d.description}</p>
              {d.tip && (
                <p className="m-0 text-sm text-gray-500 dark:text-gray-400">
                  <strong>{block.tipPrefix || "Tip"}:</strong> {d.tip}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}