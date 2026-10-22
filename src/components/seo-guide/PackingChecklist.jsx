// src/components/seo-guide/PackingChecklist.jsx
"use client";

import { useState } from "react";
import { h2Cls } from "./guideStyles";

// Plain tick-box list. No progress bar, no verdict, no persistence — just
// "tick these items". Different from PayChecklist (which has a verdict and
// progress) and from PersistentChecklist (which saves to localStorage).
export default function PackingChecklist({ block }) {
  const [checked, setChecked] = useState(() => block.items.map(() => false));

  return (
    <section id={block.id} className="scroll-mt-28 py-10 md:py-12">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}
        <ul className="m-0 max-w-[70ch] list-none p-0">
          {block.items.map((it, i) => (
            <li key={i} className="mb-1.5">
              <label className="flex cursor-pointer items-start gap-2.5 text-gray-800 dark:text-gray-200">
                <input
                  type="checkbox"
                  className="mt-1.5 h-[18px] w-[18px] accent-secondary"
                  checked={checked[i]}
                  onChange={() => setChecked((c) => c.map((v, j) => (j === i ? !v : v)))}
                />
                <span>{it}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}