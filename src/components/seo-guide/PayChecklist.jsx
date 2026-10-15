// src/components/seo-guide/PayChecklist.jsx
"use client";

import { useState } from "react";
import { panelCls, h2Cls } from "./guideStyles";

export default function PayChecklist({ block }) {
  const [checked, setChecked] = useState(() => block.items.map(() => false));
  const done = checked.filter(Boolean).length;
  const total = block.items.length;
  const complete = done === total;

  return (
    <section id={block.id} className="scroll-mt-28 py-12 md:py-14">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}

        <div className={`max-w-[860px] ${panelCls}`}>
          <progress
            max={total}
            value={done}
            aria-label={block.progressLabel || "Checklist progress"}
            className="mb-1.5 h-3 w-full accent-secondary"
          />
          <p aria-live="polite" className="mb-3.5 font-bold text-primary dark:text-white">
            {done} of {total} confirmed
          </p>

          <ul className="mb-4 list-none space-y-2 p-0">
            {block.items.map((text, i) => (
              <li key={i}>
                <label className="flex cursor-pointer items-start gap-2.5 text-gray-800 dark:text-gray-200">
                  <input
                    type="checkbox"
                    className="mt-1.5 h-[18px] w-[18px] accent-secondary"
                    checked={checked[i]}
                    onChange={() => setChecked((c) => c.map((v, j) => (j === i ? !v : v)))}
                  />
                  {text}
                </label>
              </li>
            ))}
          </ul>

          <div
            aria-live="polite"
            className={`rounded-xl border-l-[6px] p-4 font-medium ${
              complete
                ? "border-emerald-600 bg-white dark:bg-gray-950"
                : "border-accent bg-white dark:bg-gray-950"
            }`}
          >
            {complete ? block.verdictOk : block.verdictWait}
          </div>
        </div>
      </div>
    </section>
  );
}