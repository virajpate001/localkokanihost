// src/components/seo-guide/HubSteps.jsx
"use client";

import { useState } from "react";
import GuideLink from "./GuideLink";
import { chipCls, panelCls, h2Cls } from "./guideStyles";

// "Where are you in your planning?" — pick a stage, get the right guides.
export default function HubSteps({ block, liveSlugs }) {
  const live = new Set(liveSlugs);
  const [active, setActive] = useState(block.stages[0].key);
  const stage = block.stages.find((s) => s.key === active);

  return (
    <section id={block.id} className="scroll-mt-28 pt-10 pb-4">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        <p className="mt-3 mb-5 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        <ul className="mb-4 flex flex-wrap gap-2.5">
          {block.stages.map((s) => (
            <li key={s.key}>
              <button type="button" aria-pressed={s.key === active} onClick={() => setActive(s.key)} className={chipCls(s.key === active)}>
                {s.label}
              </button>
            </li>
          ))}
        </ul>
        <div className={`max-w-[860px] ${panelCls}`}>
          <p className="mb-3 text-gray-500 dark:text-gray-400">{stage.text}</p>
          <ul className="grid gap-2.5 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
            {stage.slugs.map((slug) => (
              <li key={slug}>
                <GuideLink
                  slug={slug}
                  live={live.has(slug)}
                  className="block rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 px-3.5 py-3 font-semibold text-primary dark:text-white hover:border-secondary"
                  softClass="block rounded-xl border border-gray-200 dark:border-gray-700 px-3.5 py-3 !border-b !border-solid font-normal text-gray-500 opacity-100"
                >
                  {block.titles[slug]}
                </GuideLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}