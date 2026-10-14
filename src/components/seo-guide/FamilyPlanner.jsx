// src/components/seo-guide/FamilyPlanner.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { planFamily } from "@/lib/guideLogic";
import MessagePanel from "./MessagePanel";
import { inputCls, labelCls, panelCls, h2Cls, h3Cls } from "./guideStyles";

const plural = (n, one, many) => (n === 1 ? `1 ${one}` : `${n} ${many}`);

export default function FamilyPlanner({ block, site, whatsapp, luxuryLive }) {
  const [adults, setAdults] = useState(block.defaults.adults);
  const [kids, setKids] = useState(block.defaults.kids);
  const [age, setAge] = useState(block.defaults.age);
  const [hotel, setHotel] = useState("");

  const plan = planFamily({ adults, kids, age, hotel, site, luxuryLive });

  return (
    <section id={block.id} className="scroll-mt-28 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-12 md:py-14">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>

        <div className={`${panelCls} !bg-gray-50 dark:!bg-gray-950`}>
          <div className="mb-2 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]">
            <label className={labelCls}>
              {block.adultsLabel}
              <select className={`${inputCls} font-normal`} value={adults} onChange={(e) => setAdults(Number(e.target.value))}>
                {Array.from({ length: block.adultsMax }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {plural(n, "adult", "adults")}
                  </option>
                ))}
              </select>
            </label>
            <label className={labelCls}>
              {block.kidsLabel}
              <select className={`${inputCls} font-normal`} value={kids} onChange={(e) => setKids(Number(e.target.value))}>
                {Array.from({ length: block.kidsMax + 1 }, (_, i) => i).map((n) => (
                  <option key={n} value={n}>
                    {n === 0 ? "No children" : plural(n, "child", "children")}
                  </option>
                ))}
              </select>
            </label>
            {kids > 0 && (
              <label className={labelCls}>
                {block.ageLabel}
                <select className={`${inputCls} font-normal`} value={age} onChange={(e) => setAge(e.target.value)}>
                  {block.ageOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </label>
            )}
            <label className={labelCls}>
              {block.hotelLabel}
              <input
                type="text"
                autoComplete="off"
                className={`${inputCls} font-normal`}
                placeholder={block.hotelPlaceholder}
                value={hotel}
                onChange={(e) => setHotel(e.target.value)}
              />
            </label>
          </div>

          <h3 className={`${h3Cls} !text-lg mt-5 mb-2`}>{block.listHeading}</h3>
          <ol className="mb-3 list-decimal space-y-1.5 pl-6 text-gray-800 dark:text-gray-200">
            {plan.questions.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ol>
          <p className="mb-3.5 min-h-[1.5em] text-gray-500 dark:text-gray-400">
            {plan.groupNote && (
              <>
                For a group of {plan.groupNote.total}, also compare{" "}
                {plan.groupNote.linkLive ? (
                  <Link href="/luxury-hotels-resorts-diveagar" className="font-medium text-secondary hover:underline">
                    private villas
                  </Link>
                ) : (
                  "private villas"
                )}
                , which can work better than several rooms.
              </>
            )}
          </p>

          <MessagePanel message={plan.message} whatsapp={whatsapp} waLabel={block.waLabel} copyLabel={block.copyLabel} />
        </div>
      </div>
    </section>
  );
}