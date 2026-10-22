// src/components/seo-guide/PlaceGrid.jsx
"use client";

import { useMemo, useState } from "react";
import GuideLink from "./GuideLink";
import { inputCls, h2Cls, h3Cls, tagCls } from "./guideStyles";

// A grid of "places", filtered by two dimensions. Used for:
//   - konkan-guide-things-to-see       (category × district)
//   - konkan-guide-best-places-to-visit (time-available × interest)
// Each card links to the area page that covers the place.
//
// Each place may declare `categories` as a single string OR an array of
// strings. Arrays match with `includes`, so one place can sit under
// "Beaches" and "Food" at once (as on the best-places page).
//
// `meta` (optional) is rendered under the note — used here for the
// "From Mumbai: …" line on the best-places page.
export default function PlaceGrid({ block, live }) {
  const [catFilter, setCatFilter] = useState("all");
  const [distFilter, setDistFilter] = useState("all");

  // Flatten categories per place into an array for consistent matching.
  const placeCats = (p) =>
    Array.isArray(p.categories) ? p.categories : p.categories ? [p.categories] : [];

  const categories = useMemo(() => {
    const set = new Set();
    block.places.forEach((p) => placeCats(p).forEach((c) => set.add(c)));
    return Array.from(set);
  }, [block.places]);

  const districts = useMemo(() => {
    const set = new Set();
    block.places.forEach((p) => set.add(p.district));
    return Array.from(set);
  }, [block.places]);

  const visible = useMemo(
    () =>
      block.places.filter((p) => {
        if (catFilter !== "all" && !placeCats(p).includes(catFilter)) return false;
        if (distFilter !== "all" && p.district !== distFilter) return false;
        return true;
      }),
    [block.places, catFilter, distFilter]
  );

  return (
    <section id={block.id} className="scroll-mt-28 py-12 md:py-14">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}

        <div className="mb-5 grid max-w-[640px] gap-3 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
          <label className="flex flex-col gap-1 text-sm font-semibold text-primary dark:text-white">
            {block.categoryLabel}
            <select
              className={`${inputCls} font-normal`}
              value={catFilter}
              onChange={(e) => setCatFilter(e.target.value)}
            >
              <option value="all">{block.allCategoriesLabel}</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1 text-sm font-semibold text-primary dark:text-white">
            {block.districtLabel}
            <select
              className={`${inputCls} font-normal`}
              value={distFilter}
              onChange={(e) => setDistFilter(e.target.value)}
            >
              <option value="all">{block.allDistrictsLabel}</option>
              {districts.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </label>
        </div>

        {visible.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 p-6 text-center text-gray-500 dark:text-gray-400">
            {block.empty}
          </div>
        ) : (
          <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
            {visible.map((p, i) => {
              const cats = placeCats(p);
              return (
                <article
                  key={i}
                  className="flex flex-col gap-2.5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5"
                >
                  <h3 className={`${h3Cls} !text-lg`}>{p.name}</h3>
                  <ul className="flex flex-wrap gap-1.5">
                    {cats.map((c) => (
                      <li key={c} className={tagCls}>{c}</li>
                    ))}
                    {p.district && <li className={tagCls}>{p.district}</li>}
                  </ul>
                  {p.note && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">{p.note}</p>
                  )}
                  {p.meta && (
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">{block.metaLabel || "From Mumbai"}:</span>{" "}
                      {p.meta}
                    </p>
                  )}
                  {p.href && (
                    <GuideLink
                      slug={p.href}
                      live={live.has(p.href)}
                      className="mt-auto inline-flex items-center justify-center rounded-xl bg-secondary text-white font-semibold px-4 py-2.5 hover:bg-primary transition-colors"
                      softClass="mt-auto inline-flex items-center justify-center rounded-xl border border-dashed border-gray-400 dark:border-gray-600 text-gray-500 dark:text-gray-400 font-semibold px-4 py-2.5"
                    >
                      {block.cta}
                    </GuideLink>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}