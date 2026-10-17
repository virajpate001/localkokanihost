// src/components/seo-guide/ResortFinder.jsx
"use client";

import { useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { waLink } from "@/lib/guideLogic";
import { inputCls, labelCls, panelCls, h2Cls, h3Cls, chipCls, tagCls, waBtn } from "./guideStyles";
import { SITE_NAME } from "@/lib/siteConfig";

// A resort finder for the Konkan-wide page. Similar in spirit to StayExplorer
// but with three differences:
//   1. Region is a filter dimension (chips shown only if 2+ regions exist).
//   2. Must-haves are AND filters (a listing must have all ticked ones).
//   3. Compare cells are tri-state: true → "Yes", false → "No", null → "Ask the property".
export default function ResortFinder({ block, whatsapp }) {
  const [region, setRegion] = useState("all");
  const [musts, setMusts] = useState(() =>
    Object.fromEntries(block.featureRows.map((f) => [f.key, false]))
  );
  const [chosen, setChosen] = useState([]);

  const regions = useMemo(() => {
    const seen = [];
    block.resorts.forEach((r) => {
      if (!seen.includes(r.region)) seen.push(r.region);
    });
    return seen;
  }, [block.resorts]);

  const visible = useMemo(
    () =>
      block.resorts.filter((h) => {
        if (region !== "all" && h.region !== region) return false;
        for (const k in musts) {
          if (musts[k] && h.features[k] !== true) return false;
        }
        return true;
      }),
    [block.resorts, region, musts]
  );

  const compared = chosen.map((id) => block.resorts.find((r) => r.id === id)).filter(Boolean);

  function toggleMust(key) {
    setMusts((m) => ({ ...m, [key]: !m[key] }));
  }

  function toggleCompare(id) {
    setChosen((list) => {
      if (list.includes(id)) return list.filter((x) => x !== id);
      if (list.length >= block.maxCompare) return list;
      return [...list, id];
    });
  }

  function TriState({ value }) {
    if (value === true) return <span className="font-bold text-emerald-700 dark:text-emerald-400">Yes</span>;
    if (value === false) return <span>No</span>;
    return <span className="text-gray-500 dark:text-gray-400">{block.askPropertyLabel}</span>;
  }

  return (
    <section id={block.id} className="scroll-mt-28 py-12 md:py-14">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}

        {regions.length >= 2 && (
          <ul aria-label={block.regionAriaLabel} className="mb-4 flex flex-wrap gap-2.5">
            {["all", ...regions].map((r) => (
              <li key={r}>
                <button
                  type="button"
                  aria-pressed={r === region}
                  onClick={() => setRegion(r)}
                  className={chipCls(r === region)}
                >
                  {r === "all" ? block.allRegionsLabel : r}
                </button>
              </li>
            ))}
          </ul>
        )}

        <fieldset className="mb-3.5 border-0 p-0">
          <legend className="mb-2 font-bold text-primary dark:text-white">{block.mustsLegend}</legend>
          {block.featureRows.map((f) => (
            <label
              key={f.key}
              className="mb-2 mr-[18px] inline-flex cursor-pointer items-center gap-2 text-gray-800 dark:text-gray-200"
            >
              <input
                type="checkbox"
                className="h-[18px] w-[18px] accent-secondary"
                checked={musts[f.key]}
                onChange={() => toggleMust(f.key)}
              />
              {f.label}
            </label>
          ))}
        </fieldset>

        <p aria-live="polite" className="mb-5 text-gray-500 dark:text-gray-400">
          {visible.length} of {block.resorts.length} resorts match.
        </p>

        {visible.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 p-6 text-center text-gray-500 dark:text-gray-400">
            {block.empty}
          </div>
        ) : (
          <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
            {visible.map((h) => {
              const isChosen = chosen.includes(h.id);
              const disabled = !isChosen && chosen.length >= block.maxCompare;
              const message = block.messageTemplate
                .replace("{name}", h.name)
                .replace("{site}", SITE_NAME);
              return (
                <article key={h.id} className="card flex flex-col overflow-hidden">
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-primary to-secondary">
                    <span
                      aria-hidden="true"
                      className="absolute bottom-3 left-4 font-display text-4xl font-bold text-white/90"
                    >
                      {h.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 p-5">
                    {h.sample && (
                      <span className="self-start rounded-md bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 text-xs font-bold text-amber-700 dark:text-amber-400">
                        {block.sampleLabel}
                      </span>
                    )}
                    <h3 className="font-display text-lg font-semibold text-primary dark:text-white">
                      {h.name}
                    </h3>
                    <ul className="flex flex-wrap gap-1.5">
                      <li className={tagCls}>{h.region}</li>
                      <li className={tagCls}>{h.beach}</li>
                    </ul>
                    {h.blurb && <p className="text-sm text-gray-500 dark:text-gray-400">{h.blurb}</p>}
                    <p className="font-bold text-primary dark:text-white">
                      {h.price
                        ? `${block.pricePrefix}${Number(h.price).toLocaleString("en-IN")}`
                        : block.askRatesLabel}
                    </p>
                    <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                      <input
                        type="checkbox"
                        className="h-[18px] w-[18px] accent-secondary"
                        checked={isChosen}
                        disabled={disabled}
                        onChange={() => toggleCompare(h.id)}
                      />
                      {block.compareLabel}
                      <span className="sr-only"> {h.name}</span>
                    </label>
                    <a
                      href={waLink(h.whatsapp || whatsapp, message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${waBtn} mt-auto`}
                    >
                      <FaWhatsapp aria-hidden="true" /> {block.cta}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        <div className={`mt-8 ${panelCls}`}>
          <h3 className={`${h3Cls} !text-xl mb-3`}>{block.compareHeading}</h3>
          {compared.length < 2 ? (
            <p className="m-0 text-gray-500 dark:text-gray-400">
              {compared.length === 0 ? block.hintNone : block.hintOne}
            </p>
          ) : (
            <>
              <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
                <table className="w-full min-w-[34rem] border-collapse text-[0.95rem]">
                  <thead>
                    <tr>
                      <th className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-3 text-left" />
                      {compared.map((h) => (
                        <th
                          key={h.id}
                          className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-3 text-left font-display text-primary dark:text-white"
                        >
                          {h.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="whitespace-nowrap border-b border-gray-200 dark:border-gray-800 p-3 text-left font-bold text-primary dark:text-white">
                        {block.compareRegionLabel}
                      </th>
                      {compared.map((h) => (
                        <td key={h.id} className="border-b border-gray-200 dark:border-gray-800 p-3 text-gray-800 dark:text-gray-200">
                          {h.region}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <th scope="row" className="whitespace-nowrap border-b border-gray-200 dark:border-gray-800 p-3 text-left font-bold text-primary dark:text-white">
                        {block.compareBeachLabel}
                      </th>
                      {compared.map((h) => (
                        <td key={h.id} className="border-b border-gray-200 dark:border-gray-800 p-3 text-gray-800 dark:text-gray-200">
                          {h.beach}
                        </td>
                      ))}
                    </tr>
                    {block.featureRows.map((f) => (
                      <tr key={f.key}>
                        <th scope="row" className="whitespace-nowrap border-b border-gray-200 dark:border-gray-800 p-3 text-left font-bold text-primary dark:text-white">
                          {f.label}
                        </th>
                        {compared.map((h) => (
                          <td key={h.id} className="border-b border-gray-200 dark:border-gray-800 p-3 text-gray-800 dark:text-gray-200">
                            <TriState value={h.features[f.key]} />
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr>
                      <th scope="row" className="whitespace-nowrap border-b border-gray-200 dark:border-gray-800 p-3 text-left font-bold text-primary dark:text-white">
                        {block.comparePriceLabel}
                      </th>
                      {compared.map((h) => (
                        <td key={h.id} className="border-b border-gray-200 dark:border-gray-800 p-3 text-gray-800 dark:text-gray-200">
                          {h.price
                            ? `${block.pricePrefix}${Number(h.price).toLocaleString("en-IN")}`
                            : block.askOnWhatsAppLabel}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <button
                type="button"
                onClick={() => setChosen([])}
                className="mt-3 text-sm font-semibold text-secondary hover:underline"
              >
                {block.clearLabel}
              </button>
            </>
          )}
        </div>

        {block.fine && (
          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            {block.fine}
          </div>
        )}
      </div>
    </section>
  );
}