// src/components/seo-guide/QaSwitcher.jsx
"use client";

import { useState } from "react";
import { chipCls, h2Cls } from "./guideStyles";

// "Which meaning do you want?" switcher. Small set of buttons; each one swaps
// a single answer card below. Distinct from Picker (which renders multi-row
// detail panels) and HubSteps (which switches between link lists).
export default function QaSwitcher({ block }) {
  const [active, setActive] = useState(0);
  const qa = block.items[active];

  return (
    <section id={block.id} className="scroll-mt-28 py-10 md:py-12">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-5 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}

        <div
          role="group"
          aria-label={block.ariaLabel}
          className="mb-4 flex flex-wrap gap-2.5"
        >
          {block.items.map((it, i) => (
            <button
              key={it.question}
              type="button"
              aria-pressed={i === active}
              onClick={() => setActive(i)}
              className={chipCls(i === active)}
            >
              {it.question}
            </button>
          ))}
        </div>

        <div
          aria-live="polite"
          className="max-w-[640px] rounded-xl border border-gray-200 dark:border-gray-800 border-l-[6px] border-accent bg-white dark:bg-gray-900 px-5 py-4"
        >
          <strong className="block font-display text-xl font-bold text-primary dark:text-white mb-1">
            {qa.answer}
          </strong>
          <p className="m-0 text-gray-800 dark:text-gray-200">{qa.detail}</p>
        </div>
      </div>
    </section>
  );
}