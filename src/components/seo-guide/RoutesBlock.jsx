// src/components/seo-guide/RoutesBlock.jsx
"use client";

import { useState } from "react";
import { chipCls, h2Cls } from "./guideStyles";
import GuideMarkdown from "./GuideMarkdown";

export default function RoutesBlock({ block , live }) {
  const [active, setActive] = useState("all");

  const cities = [];
  block.routes.forEach((r) => {
    if (!cities.includes(r.from)) cities.push(r.from);
  });

  const visible = block.routes.filter((r) => active === "all" || r.from === active);

  return (
    <section id={block.id} className="scroll-mt-28 py-12 md:py-14">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>

        <ul aria-label={block.filterAriaLabel} className="mb-5 flex flex-wrap gap-2.5">
          {["all", ...cities].map((c) => (
            <li key={c}>
              <button
                type="button"
                aria-pressed={c === active}
                onClick={() => setActive(c)}
                className={chipCls(c === active)}
              >
                {c === "all" ? "All routes" : `From ${c}`}
              </button>
            </li>
          ))}
        </ul>

        {visible.length === 0 ? (
          <p className="rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 p-6 text-center text-gray-500 dark:text-gray-400">
            {block.empty}
          </p>
        ) : (
          <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
            {visible.map((r, i) => (
              <article key={i} className="card flex flex-col gap-2.5 p-5">
                {r.sample && (
                  <span className="self-start rounded-md bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 text-xs font-bold text-amber-700 dark:text-amber-400">
                    Sample route
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold text-primary dark:text-white">
                  From {r.from}: {r.mode}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{r.summary}</p>
                <p className="font-bold text-primary dark:text-white">
                  {r.time ? `Typical time: ${r.time}` : "Confirm the travel time before you go."}
                </p>
                {r.steps?.length > 0 && (
                  <ol className="list-decimal space-y-1 pl-5 text-sm text-gray-500 dark:text-gray-400">
                    {r.steps.map((s, j) => (
                      <li key={j}>{s}</li>
                    ))}
                  </ol>
                )}
                {r.tips?.length > 0 && (
                  <ul className="list-disc space-y-1 pl-5 text-sm text-gray-500 dark:text-gray-400">
                    {r.tips.map((t, j) => (
                      <li key={j}>{t}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        )}

       {block.fine && <GuideMarkdown md={block.fine} live={live} className="mt-5 prose-sm" />}
      </div>
    </section>
  );
}