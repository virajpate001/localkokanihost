// src/components/seo-guide/FitChecker.jsx
"use client";

import { useMemo, useState } from "react";
import { h2Cls } from "./guideStyles";

// Weighted checkbox fit-checker. Two columns of checkboxes (positive + negative
// signals). Each box contributes a weight; the total picks a verdict band.
//
// Shape:
//   positives: [{ label, points }]
//   negatives: [{ label, points }]   // points are negative
//   bands:     [{ min, kind, title, text }]   // matched top-down
export default function FitChecker({ block }) {
  const [checked, setChecked] = useState({});

  function toggle(key) {
    setChecked((c) => ({ ...c, [key]: !c[key] }));
  }

  const total = useMemo(() => {
    let sum = 0;
    block.positives.forEach((p, i) => {
      if (checked[`p${i}`]) sum += p.points;
    });
    block.negatives.forEach((n, i) => {
      if (checked[`n${i}`]) sum += n.points;
    });
    return sum;
  }, [checked, block]);

  const anyChecked = Object.values(checked).some(Boolean);
  const band = anyChecked
    ? block.bands.find((b) => total >= b.min) || block.bands.at(-1)
    : null;

  const bandClass = {
    1: "border-emerald-600",
    2: "border-accent",
    3: "border-sky-700",
  };

  return (
    <section id={block.id} className="scroll-mt-28 py-12 md:py-14">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-5 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}

        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset className="mb-3 max-w-[640px] rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3">
            <legend className="px-1.5 font-display font-bold text-primary dark:text-white">
              {block.positivesLegend}
            </legend>
            {block.positives.map((p, i) => (
              <label
                key={i}
                className="flex cursor-pointer items-start gap-2.5 py-1 text-gray-800 dark:text-gray-200"
              >
                <input
                  type="checkbox"
                  className="mt-1.5 accent-secondary"
                  checked={!!checked[`p${i}`]}
                  onChange={() => toggle(`p${i}`)}
                />
                {p.label}
              </label>
            ))}
          </fieldset>

          <fieldset className="mb-3 max-w-[640px] rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3">
            <legend className="px-1.5 font-display font-bold text-primary dark:text-white">
              {block.negativesLegend}
            </legend>
            {block.negatives.map((n, i) => (
              <label
                key={i}
                className="flex cursor-pointer items-start gap-2.5 py-1 text-gray-800 dark:text-gray-200"
              >
                <input
                  type="checkbox"
                  className="mt-1.5 accent-secondary"
                  checked={!!checked[`n${i}`]}
                  onChange={() => toggle(`n${i}`)}
                />
                {n.label}
              </label>
            ))}
          </fieldset>
        </form>

        <div
          aria-live="polite"
          className={`max-w-[640px] rounded-xl border border-gray-200 dark:border-gray-800 border-l-[6px] bg-white dark:bg-gray-900 px-5 py-4 ${
            band ? bandClass[band.kind] : "border-gray-300 dark:border-gray-700"
          }`}
        >
          {!anyChecked && (
            <p className="m-0 text-gray-500 dark:text-gray-400">{block.hintEmpty}</p>
          )}
          {band && (
            <>
              <strong className="block font-display text-xl text-primary dark:text-white">
                {band.title}
              </strong>
              <p className="mt-1.5 mb-0 text-gray-800 dark:text-gray-200">{band.text}</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}