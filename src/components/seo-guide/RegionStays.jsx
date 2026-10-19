// src/components/seo-guide/RegionStays.jsx
"use client";

import { useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { waLink } from "@/lib/guideLogic";
import { SITE_NAME } from "@/lib/siteConfig";
import { chipCls, waBtn, tagCls, panelCls, h2Cls } from "./guideStyles";
import GuideLink from "./GuideLink";

// Filterable hotel grid: type × destination. Simpler than StayExplorer (no
// compare, no per-card chips) and different from ResortFinder (that one is a
// must-have AND filter over facilities). Here: two drop-downs → AND filter.
//
// Content data stays in the block (`listings` array) so placeholder content
// and real listings both live in the same place. Swap `listings` for a
// Firestore fetch later if you want; the component shape doesn't change.
export default function RegionStays({ block, live, whatsapp }) {
  const [typeFilter, setTypeFilter] = useState("all");
  const [placeFilter, setPlaceFilter] = useState("all");

  const types = useMemo(() => {
    const set = new Set();
    block.listings.forEach((h) => h.types.forEach((t) => set.add(t)));
    return Array.from(set);
  }, [block.listings]);

  const places = useMemo(() => {
    const set = new Set();
    block.listings.forEach((h) => set.add(h.place));
    return Array.from(set);
  }, [block.listings]);

  const visible = useMemo(
    () =>
      block.listings.filter((h) => {
        if (typeFilter !== "all" && !h.types.includes(typeFilter)) return false;
        if (placeFilter !== "all" && h.place !== placeFilter) return false;
        return true;
      }),
    [block.listings, typeFilter, placeFilter]
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
            {block.typeFilterLabel}
            <select
              className="w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2.5 text-base font-normal text-gray-900 dark:text-gray-100 focus:border-secondary focus:outline-none"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="all">{block.allTypesLabel}</option>
              {types.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1 text-sm font-semibold text-primary dark:text-white">
            {block.placeFilterLabel}
            <select
              className="w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2.5 text-base font-normal text-gray-900 dark:text-gray-100 focus:border-secondary focus:outline-none"
              value={placeFilter}
              onChange={(e) => setPlaceFilter(e.target.value)}
            >
              <option value="all">{block.allPlacesLabel}</option>
              {places.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </label>
        </div>

        <p aria-live="polite" className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          {visible.length} of {block.listings.length} stays shown
        </p>

        {visible.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 p-6 text-center text-gray-500 dark:text-gray-400">
            <p className="mb-4">{block.empty}</p>
            <GuideLink slug="best-hotels-in-diveagar" live={live.has("best-hotels-in-diveagar")} className={waBtn}>
              {block.emptyCtaLabel}
            </GuideLink>
          </div>
        ) : (
          <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
            {visible.map((h, i) => (
              <article
                key={i}
                className="flex flex-col gap-2.5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5"
              >
                {h.sample && (
                  <span className="self-start rounded-md bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 text-xs font-bold text-amber-700 dark:text-amber-400">
                    {block.sampleLabel}
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold text-primary dark:text-white">
                  {h.name}
                </h3>
                <ul className="flex flex-wrap gap-1.5">
                  {h.types.map((t) => (
                    <li key={t} className={tagCls}>{t}</li>
                  ))}
                  <li className={tagCls}>{h.place}</li>
                </ul>
                {h.note && (
                  <p className="flex-1 text-sm text-gray-500 dark:text-gray-400">{h.note}</p>
                )}
                <div className="mt-auto flex flex-wrap gap-2">
                  {h.href && live.has(h.href.replace(/^\//, "")) && (
                    <GuideLink
                      slug={h.href.replace(/^\//, "")}
                      live
                      className={`${waBtn} !bg-secondary hover:!bg-primary`}
                    >
                      {block.viewLabel}
                    </GuideLink>
                  )}
                  {h.whatsappMessage && whatsapp && (
                    <a
                      href={waLink(h.phone || whatsapp, h.whatsappMessage.replace("{site}", SITE_NAME))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={waBtn}
                    >
                      <FaWhatsapp aria-hidden="true" /> {block.waLabel}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {block.fine && (
          <div className="mt-5 text-sm text-gray-500 dark:text-gray-400">{block.fine}</div>
        )}
      </div>
    </section>
  );
}