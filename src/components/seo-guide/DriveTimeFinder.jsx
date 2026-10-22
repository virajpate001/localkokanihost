// src/components/seo-guide/DriveTimeFinder.jsx
"use client";

import { useMemo, useState } from "react";
import GuideLink from "./GuideLink";
import { h2Cls, h3Cls, tagCls } from "./guideStyles";

// Slider-driven destination finder. Each destination declares a drive-time
// range (hours low → high) from the origin; the slider picks the visitor's
// max tolerable one-way drive, and the grid filters to fit.
//
// Different from timeBudgetCalculator (which computes a verdict from inputs)
// and from PlaceGrid (which filters by enum dropdowns) — this is specifically
// "how far will you drive" on a numeric axis.
export default function DriveTimeFinder({ block, live }) {
    // Slider domain: from the block or derived from data
    const minHours = block.sliderMin ?? 2;
    const maxHours = block.sliderMax ?? 12;
    const stepHours = block.sliderStep ?? 0.5;
    const [maxDrive, setMaxDrive] = useState(block.defaultHours ?? 5);

    // Filter: a destination fits if its LOW end of the range ≤ maxDrive.
    // (If the low end already exceeds the slider, it's out.)
    const visible = useMemo(
        () => block.destinations.filter((d) => d.hoursLow <= maxDrive),
        [block.destinations, maxDrive]
    );

    // Bar widths are relative to the largest destination's hoursHigh.
    const maxBar = useMemo(
        () => Math.max(...block.destinations.map((d) => d.hoursHigh)),
        [block.destinations]
    );

    function fmt(h) {
        return Number.isInteger(h) ? String(h) : `${Math.floor(h)}½`;
    }

    return (
        <section id={block.id} className="scroll-mt-28 py-12 md:py-14">
            <div className="container-custom">
                <h2 className={h2Cls}>{block.heading}</h2>
                {block.sub && (
                    <p className="mt-3 mb-5 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
                )}

                <p className="mb-1">
                    <span aria-live="polite" className="font-display text-2xl font-bold text-primary dark:text-white">
                        {fmt(maxDrive)}
                    </span>
                    <span className="ml-1 text-gray-500 dark:text-gray-400">{block.hoursSuffix}</span>
                </p>
                <input
                    type="range"
                    min={minHours}
                    max={maxHours}
                    step={stepHours}
                    value={maxDrive}
                    onChange={(e) => setMaxDrive(Number(e.target.value))}
                    aria-label={block.sliderAriaLabel}
                    className="mb-5 w-full max-w-[420px] accent-secondary"
                />

                <div
                    aria-live="polite"
                    className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]"
                >
                    {visible.length === 0 && (
                        <div className="col-span-full rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 p-6 text-center text-gray-500 dark:text-gray-400">
                            {block.empty}
                        </div>
                    )}
                    {visible.map((d, i) => (
                        <article
                            key={i}
                            className="flex flex-col gap-2.5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5"
                        >
                            <h3 className={`${h3Cls} !text-lg`}>{d.name}</h3>
                            {d.district && (
                                <ul className="flex flex-wrap gap-1.5">
                                    <li className={tagCls}>{d.district}</li>
                                </ul>
                            )}
                            <p className="m-0 text-sm text-gray-500 dark:text-gray-400">
                                {block.rangePrefix} {d.kmLow}–{d.kmHigh} km, {fmt(d.hoursLow)}–{fmt(d.hoursHigh)} hours
                            </p>
                            <div
                                aria-hidden="true"
                                className="relative h-2 overflow-hidden rounded bg-gray-200 dark:bg-gray-800"
                            >
                                <div
                                    className="absolute inset-y-0 left-0 rounded bg-emerald-600"
                                    style={{ width: `${Math.round((d.hoursHigh / maxBar) * 100)}%` }}
                                />
                            </div>
                            {d.slug && (
                                <GuideLink
                                    slug={d.slug}
                                    live={live.has(d.slug)}
                                    className="mt-auto inline-flex items-center justify-center rounded-xl bg-secondary text-white font-semibold px-4 py-2.5 hover:bg-primary transition-colors"
                                    softClass="mt-auto inline-flex items-center justify-center rounded-xl border border-dashed border-gray-400 dark:border-gray-600 text-gray-500 dark:text-gray-400 font-semibold px-4 py-2.5"
                                >
                                    {block.cta}
                                </GuideLink>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}