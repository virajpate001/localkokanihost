// src/components/seo-guide/HighlightsBlock.jsx
"use client";

import { useState } from "react";
import { chipCls, panelCls, h2Cls, h3Cls, tagCls, copyBtn, waBtn } from "./guideStyles";
import GuideLink from "./GuideLink";

// Editorial highlights grid + shortlist builder. State is local to the block;
// the shortlist is rendered below the grid inside the same component so the two
// stay in sync without lifting state into the page.
export default function HighlightsBlock({ block, live, whatsapp }) {
  const [activeKey, setActiveKey] = useState(block.filters[0].key);
  const [chosen, setChosen] = useState([]);
  const [status, setStatus] = useState("");

  const active = block.filters.find((f) => f.key === activeKey) || block.filters[0];
  const visible = block.places.filter((p) => activeKey === "all" || p.cat === activeKey);
  const byId = (id) => block.places.find((p) => p.id === id);

  function toggle(id) {
    setChosen((list) => (list.includes(id) ? list.filter((x) => x !== id) : [...list, id]));
    setStatus("");
  }

  async function copyList() {
    const text =
      "My Diveagar shortlist:\n" +
      chosen.map((id, i) => `${i + 1}. ${byId(id).name}`).join("\n");
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return setStatus("Copied");
      }
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      setStatus(ok ? "Copied" : "Could not copy. Please try again.");
    } catch {
      setStatus("Could not copy. Please try again.");
    }
  }

  const itinerarySlug = "diveagar-2-day-itinerary";
  const itineraryLive = live.has(itinerarySlug);

  return (
    <section id={block.id} className="scroll-mt-28 py-12 md:py-14">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>

        <ul aria-label={block.filterAriaLabel} className="mb-2.5 flex flex-wrap gap-2.5">
          {block.filters.map((f) => (
            <li key={f.key}>
              <button
                type="button"
                aria-pressed={f.key === activeKey}
                onClick={() => setActiveKey(f.key)}
                className={chipCls(f.key === activeKey)}
              >
                {f.label}
              </button>
            </li>
          ))}
        </ul>
        <p aria-live="polite" className="mb-5 min-h-[2.5em] text-gray-500 dark:text-gray-400">
          {active.note}
        </p>

        <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
          {visible.map((p) => {
            const checked = chosen.includes(p.id);
            return (
              <article key={p.id} className="card flex flex-col overflow-hidden">
                <div className="relative aspect-[16/10] bg-gradient-to-br from-primary to-secondary">
                  <span
                    aria-hidden="true"
                    className="absolute bottom-3 left-4 font-display text-4xl font-bold text-white/90"
                  >
                    {p.name.charAt(0)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 p-5">
                  <ul className="flex flex-wrap gap-1.5">
                    <li className={tagCls}>{block.categoryLabels[p.cat]}</li>
                  </ul>
                  <h3 className="font-display text-lg font-semibold text-primary dark:text-white">
                    {p.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{p.desc}</p>
                  <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">
                    Check locally: {p.check}
                  </p>
                  <label className="mt-auto flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                    <input
                      type="checkbox"
                      className="h-[18px] w-[18px] accent-secondary"
                      checked={checked}
                      onChange={() => toggle(p.id)}
                    />
                    {block.pickLabel}
                    <span className="sr-only"> {p.name}</span>
                  </label>
                </div>
              </article>
            );
          })}
        </div>

        <div className={`mt-8 max-w-[860px] ${panelCls} !bg-gray-50 dark:!bg-gray-950`}>
          <h3 className={`${h3Cls} mb-3`}>{block.shortlistHeading}</h3>
          {chosen.length === 0 ? (
            <p className="mb-3 text-gray-500 dark:text-gray-400">{block.shortlistEmpty}</p>
          ) : (
            <ol className="mb-3 list-decimal space-y-1 pl-6 text-gray-800 dark:text-gray-200">
              {chosen.map((id) => {
                const p = byId(id);
                return (
                  <li key={id}>
                    <strong>{p.name}</strong>{" "}
                    <span className="text-gray-500 dark:text-gray-400">
                      ({block.categoryLabels[p.cat].toLowerCase()})
                    </span>
                  </li>
                );
              })}
            </ol>
          )}
          <div className="flex flex-wrap items-center gap-2.5">
            <button type="button" onClick={copyList} disabled={chosen.length === 0} className={copyBtn}>
              {block.copyLabel}
            </button>
            {itineraryLive ? (
              <GuideLink slug={itinerarySlug} live className={waBtn}>
                {block.itineraryLabel}
              </GuideLink>
            ) : (
              <span className="cursor-default rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 px-5 py-2.5 font-semibold text-gray-500 dark:text-gray-400">
                {block.itineraryLabel}
              </span>
            )}
            <span role="status" className="text-sm font-semibold text-secondary">
              {status}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}