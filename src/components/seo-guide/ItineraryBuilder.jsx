// src/components/seo-guide/ItineraryBuilder.jsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { inputCls, labelCls, panelCls, h2Cls, h3Cls, copyBtn } from "./guideStyles";

const SLOT_LABEL = { m: "Morning", a: "Afternoon", e: "Evening" };
const SLOT_ORDER = ["m", "a", "e"];

function isLive(slug, live) {
  return live.has(slug);
}

function NextLink({ slug, live, children }) {
  if (!isLive(slug, live)) {
    return (
      <span className="cursor-default border-b border-dotted border-current opacity-70">
        {children}
      </span>
    );
  }
  return (
    <Link href={`/${slug}`} className="font-medium text-secondary hover:underline">
      {children}
    </Link>
  );
}

export default function ItineraryBuilder({ block, live }) {
  const days = block.days || 2;

  const [arrive, setArrive] = useState(block.defaults.arrive);
  const [depart, setDepart] = useState(block.defaults.depart);
  const [pace, setPace] = useState(block.defaults.pace);
  const [group, setGroup] = useState(block.defaults.group);
  const [wanted, setWanted] = useState(
    () => Object.fromEntries(block.activityOrder.map((k) => [k, block.activities[k].default]))
  );
  const [status, setStatus] = useState("");

  const result = useMemo(
    () =>
      computePlan({
        days,
        arrive,
        depart,
        pace,
        group,
        wanted,
        activities: block.activities,
        order: block.activityOrder,
        groupNotes: block.groupNotes,
        freeTimeText: block.freeTimeText,
      }),
    [days, arrive, depart, pace, group, wanted, block]
  );

  async function copyItinerary() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(result.text);
        return setStatus("Copied");
      }
      const ta = document.createElement("textarea");
      ta.value = result.text;
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      setStatus(ok ? "Copied" : "Could not copy. Please try again.");
    } catch {
      setStatus("Could not copy. Please try again.");
    }
  }

  return (
    <section
      id={block.id}
      className="scroll-mt-28 border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-12 md:py-14"
    >
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>

        <div className={`${panelCls} !bg-gray-50 dark:!bg-gray-950 mb-6`}>
          <div className="mb-3.5 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
            <label className={labelCls}>
              {block.arriveLabel}
              <select className={`${inputCls} font-normal`} value={arrive} onChange={(e) => setArrive(e.target.value)}>
                {block.arriveOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </label>
            <label className={labelCls}>
              {block.departLabel}
              <select className={`${inputCls} font-normal`} value={depart} onChange={(e) => setDepart(e.target.value)}>
                {block.departOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </label>
            <label className={labelCls}>
              {block.paceLabel}
              <select className={`${inputCls} font-normal`} value={pace} onChange={(e) => setPace(e.target.value)}>
                {block.paceOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </label>
            <label className={labelCls}>
              {block.groupLabel}
              <select className={`${inputCls} font-normal`} value={group} onChange={(e) => setGroup(e.target.value)}>
                {block.groupOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </label>
          </div>

          <fieldset className="border-0 p-0">
            <legend className="mb-2 font-semibold text-primary dark:text-white">
              {block.extrasLegend}
            </legend>
            {block.activityOrder.map((key) => (
              <label
                key={key}
                className="mb-2 mr-4 inline-flex cursor-pointer items-center gap-2 text-gray-800 dark:text-gray-200"
              >
                <input
                  type="checkbox"
                  className="h-[18px] w-[18px] accent-secondary"
                  checked={wanted[key]}
                  onChange={() => setWanted((w) => ({ ...w, [key]: !w[key] }))}
                />
                {block.activities[key].label}
              </label>
            ))}
          </fieldset>
        </div>

        <div aria-live="polite" className="mb-4 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
          {Array.from({ length: days }, (_, di) => {
            const d = di + 1;
            return (
              <article key={d} className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
                <h3 className={`${h3Cls} !text-lg mb-2.5`}>Day {d}</h3>
                {SLOT_ORDER.map((t) => {
                  const key = `d${d}${t}`;
                  const slot = result.slots[key];
                  return (
                    <div
                      key={key}
                      className="grid grid-cols-[100px_1fr] gap-3 border-t border-gray-200 dark:border-gray-800 py-2.5 first:border-t-0"
                    >
                      <div className="text-sm font-bold text-secondary">{SLOT_LABEL[t]}</div>
                      <div className="text-gray-800 dark:text-gray-200">
                        {slot.fixed && <p className="mb-1.5">{slot.fixed}</p>}
                        {slot.activities.map((k) => {
                          const a = block.activities[k];
                          return (
                            <p key={k} className="mb-1.5">
                              <strong>{a.label}.</strong> {a.detail}{" "}
                              {a.slug && (
                                <>
                                  See{" "}
                                  <NextLink slug={a.slug} live={live}>
                                    {a.link}
                                  </NextLink>
                                  .
                                </>
                              )}
                            </p>
                          );
                        })}
                        {!slot.fixed && slot.activities.length === 0 && slot.available && (
                          <p className="text-gray-500 dark:text-gray-400">{block.freeTimeText}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </article>
            );
          })}

          {(result.unplaced.length > 0 || result.groupNote || result.extraNote) && (
            <div className="col-span-full rounded-r-xl border-l-[6px] border-accent bg-gray-50 dark:bg-gray-900 px-4 py-3.5">
              {result.unplaced.length > 0 && (
                <p className="mb-1.5">
                  Not enough room for{" "}
                  {result.unplaced.map((k) => block.activities[k].label.toLowerCase()).join(", ")}{" "}
                  in this plan. Try a balanced pace, or a later departure.
                </p>
              )}
              {result.extraNote && <p className="mb-1.5">{result.extraNote}</p>}
              {result.groupNote && <p className="mb-0">{result.groupNote}</p>}
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button type="button" onClick={copyItinerary} className={copyBtn}>
            {block.copyLabel}
          </button>
          <span role="status" className="text-sm font-semibold text-secondary">
            {status}
          </span>
        </div>
      </div>
    </section>
  );
}

// Pure planner. Works for any number of days: SLOTS is derived from `days`.
function computePlan({ days, arrive, depart, pace, group, wanted, activities, order, groupNotes, freeTimeText }) {
  const slots = {};
  for (let d = 1; d <= days; d++) {
    for (const t of SLOT_ORDER) {
      slots[`d${d}${t}`] = { fixed: null, available: true, activities: [] };
    }
  }

  // Fixed items based on arrival (Day 1 only)
  if (arrive === "morning") {
    slots.d1m.fixed = "Arrive and check in. Ask about early check-in.";
  } else if (arrive === "afternoon") {
    slots.d1m.fixed = "Travel to Diveagar.";
    slots.d1m.available = false;
    slots.d1a.fixed = "Arrive, check in and settle in.";
  } else {
    slots.d1m.fixed = "Travel to Diveagar.";
    slots.d1m.available = false;
    slots.d1a.fixed = "Travel to Diveagar.";
    slots.d1a.available = false;
    slots.d1e.fixed = "Arrive, check in and have dinner at your stay.";
    slots.d1e.available = false;
  }

  // Fixed items based on departure (last day only)
  const lastDay = days;
  if (depart === "morning") {
    slots[`d${lastDay}m`].fixed = "Breakfast, check out and head home.";
    slots[`d${lastDay}m`].available = false;
    slots[`d${lastDay}a`].fixed = "Journey home.";
    slots[`d${lastDay}a`].available = false;
    slots[`d${lastDay}e`].fixed = "Journey home.";
    slots[`d${lastDay}e`].available = false;
  } else if (depart === "afternoon") {
    slots[`d${lastDay}a`].fixed = "Lunch, check out and head home.";
    slots[`d${lastDay}e`].fixed = "Journey home.";
    slots[`d${lastDay}e`].available = false;
  } else {
    slots[`d${lastDay}e`].fixed = "Check out and head home, leaving enough time for the journey.";
  }

  const cap = pace === "relaxed" ? 1 : 2;
  const unplaced = [];

  // Place activities by preference order. Loop through days in order so we
  // fill Day 1 first, then Day 2, then Day 3 — matching the HTML logic.
  const slotKeys = [];
  for (let d = 1; d <= days; d++) {
    for (const t of SLOT_ORDER) slotKeys.push(`d${d}${t}`);
  }

  order.forEach((key) => {
    if (!wanted[key]) return;
    const a = activities[key];
    // "nearby" is a special case only for the 2-day plan; for 3-day it's a
    // first-class activity. Only skip it when the config excludes it via pace.
    if (key === "nearby" && (pace === "relaxed" || depart === "morning")) {
      unplaced.push(key);
      return;
    }
    let placed = false;
    for (const s of a.prefer) {
      if (slots[s]?.available && slots[s].activities.length < cap) {
        slots[s].activities.push(key);
        placed = true;
        break;
      }
    }
    if (!placed) unplaced.push(key);
  });

  const groupNote = groupNotes?.[group] || null;

  // Extra note if a nearby day out is included — this is optional config.
  const nearbyIncluded = order.some(
    (k) => activities[k]?.nearby && wanted[k]
  );
  const extraNote = nearbyIncluded
    ? "Check each nearby town's travel time with the checker above before you commit to the day."
    : null;

  const text = [`My ${days}-day Diveagar itinerary`];
  for (let d = 1; d <= days; d++) {
    text.push("", `Day ${d}`);
    for (const t of SLOT_ORDER) {
      const slot = slots[`d${d}${t}`];
      const lines = [];
      if (slot.fixed) lines.push(slot.fixed);
      slot.activities.forEach((k) => lines.push(activities[k].label));
      if (!slot.fixed && slot.activities.length === 0 && slot.available) lines.push("Free time");
      text.push(`  ${SLOT_LABEL[t]}: ${lines.join("; ")}`);
    }
  }
  if (unplaced.length) {
    text.push(
      "",
      `Not enough room for ${unplaced.map((k) => activities[k].label.toLowerCase()).join(", ")} in this plan.`
    );
  }
  if (extraNote) text.push("", extraNote);
  if (groupNote) text.push("", groupNote);

  return { slots, unplaced, groupNote, extraNote, text: text.join("\n") };
}