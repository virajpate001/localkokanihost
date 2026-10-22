// src/components/seo-guide/ActivityChecker.jsx
"use client";

import { useEffect, useState } from "react";
import { inputCls, labelCls, h2Cls, h3Cls } from "./guideStyles";

// Activity availability checker: two selects (activity × month) → verdict,
// plus a colour-coded grid (activities × 12 months).
//
// Status codes per activity per month:
//   1 = usually running
//   2 = check first
//   3 = usually closed
const STATUS_LABEL = { 1: "Usually running", 2: "Check first", 3: "Usually closed" };
const STATUS_STYLE = {
  1: "border-emerald-600 bg-white dark:bg-gray-950",
  2: "border-accent bg-white dark:bg-gray-950",
  3: "border-sky-700 bg-white dark:bg-gray-950",
};
const CELL_CLS = {
  1: "bg-emerald-600 text-white",
  2: "bg-accent text-primary",
  3: "bg-sky-700 text-white",
};
const CELL_MARK = { 1: "✓", 2: "?", 3: "✕" };

export default function ActivityChecker({ block }) {
  const [actIdx, setActIdx] = useState(0);
  const [monIdx, setMonIdx] = useState(0);

  // Default to the visitor's current month (client-only, avoids hydration flip)
  useEffect(() => {
    setMonIdx(new Date().getMonth());
  }, []);

  const activity = block.activities[actIdx];
  const status = activity.status[monIdx];
  const monthName = block.fullMonths?.[monIdx] || block.shortMonths[monIdx];

  return (
    <section id={block.id} className="scroll-mt-28 py-12 md:py-14">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}

        <div className="grid gap-3 max-w-[640px] [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] mb-4">
          <label className={labelCls}>
            {block.activityLabel}
            <select
              className={`${inputCls} font-normal`}
              value={actIdx}
              onChange={(e) => setActIdx(Number(e.target.value))}
            >
              {block.activities.map((a, i) => (
                <option key={i} value={i}>{a.name}</option>
              ))}
            </select>
          </label>
          <label className={labelCls}>
            {block.monthLabel}
            <select
              className={`${inputCls} font-normal`}
              value={monIdx}
              onChange={(e) => setMonIdx(Number(e.target.value))}
            >
              {block.fullMonths.map((m, i) => (
                <option key={i} value={i}>{m}</option>
              ))}
            </select>
          </label>
        </div>

        <div
          aria-live="polite"
          className={`max-w-[640px] rounded-xl border border-gray-200 dark:border-gray-800 border-l-[6px] bg-gray-50 dark:bg-gray-950 px-5 py-4 mb-8 ${STATUS_STYLE[status]}`}
        >
          <strong className="block font-display text-xl text-primary dark:text-white">
            {STATUS_LABEL[status]}
          </strong>
          <p className="mt-1.5 mb-0 text-gray-800 dark:text-gray-200">
            {activity.name} in {monthName}. {activity.note} Confirm current status with your hotel or operator.
          </p>
        </div>

        <h3 className={`${h3Cls} !text-xl mb-2`}>{block.matrixHeading}</h3>
        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
          <table className="min-w-[720px] w-full border-collapse text-[0.85rem]">
            <thead>
              <tr>
                <th className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-2.5 text-left" />
                {block.shortMonths.map((m) => (
                  <th
                    key={m}
                    className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-1.5 text-center font-semibold text-primary dark:text-white"
                  >
                    {m}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.activities.map((a, i) => (
                <tr key={i}>
                  <th
                    scope="row"
                    className="whitespace-nowrap border-b border-gray-200 dark:border-gray-800 px-3 py-1.5 text-left font-semibold text-primary dark:text-white"
                  >
                    {a.name}
                  </th>
                  {a.status.map((s, j) => (
                    <td
                      key={j}
                      title={STATUS_LABEL[s]}
                      className={`border-b border-gray-200 dark:border-gray-800 p-1.5 text-center font-bold ${CELL_CLS[s]}`}
                    >
                      {CELL_MARK[s]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {block.legend?.length > 0 && (
          <p className="mt-3 flex flex-wrap gap-3.5 text-sm text-gray-500 dark:text-gray-400">
            {block.legend.map((l) => (
              <span key={l.status} className="inline-flex items-center">
                <span
                  aria-hidden="true"
                  className={`mr-1.5 inline-block rounded px-2 py-0.5 text-xs font-bold ${CELL_CLS[l.status]}`}
                >
                  {CELL_MARK[l.status]}
                </span>
                {l.label}
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}