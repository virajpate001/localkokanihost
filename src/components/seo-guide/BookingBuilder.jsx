// src/components/seo-guide/BookingBuilder.jsx
"use client";

import { useMemo, useState } from "react";
import { SITE_NAME } from "@/lib/siteConfig";
import MessagePanel from "./MessagePanel";
import { inputCls, labelCls, panelCls, h2Cls } from "./guideStyles";

export default function BookingBuilder({ block, whatsapp }) {
  const [hotel, setHotel] = useState("");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("");
  const [room, setRoom] = useState("");
  const [meals, setMeals] = useState("");
  const [extras, setExtras] = useState(() => block.extras.map(() => false));

  const message = useMemo(() => {
    const lines = [
      `Hi, I would like to enquire about ${hotel || "your hotel"} on ${SITE_NAME}.`,
      `Dates: ${dates || "___"}. Guests: ${guests || "___"}.`,
    ];
    if (room) lines.push(`We would like ${room}.`);
    if (meals) lines.push(`Meals: ${meals}.`);
    const picked = block.extras.filter((_, i) => extras[i]).map((e) => e.value);
    if (picked.length) lines.push(`We would also like ${picked.join(", ")}.`);
    lines.push("Could you please confirm:");
    lines.push("1. Availability on these dates.");
    lines.push("2. The total price and what it includes.");
    lines.push("3. Your cancellation policy.");
    lines.push("4. How and when to pay.");
    lines.push("Thank you.");
    return lines.join("\n");
  }, [hotel, dates, guests, room, meals, extras, block.extras]);

  return (
    <section id={block.id} className="scroll-mt-28 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-12 md:py-14">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>

        <div className={`${panelCls} !bg-gray-50 dark:!bg-gray-950`}>
          <div className="mb-4 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
            <label className={labelCls}>
              {block.hotelLabel}
              <input
                type="text" autoComplete="off"
                className={`${inputCls} font-normal`}
                placeholder={block.hotelPlaceholder}
                value={hotel} onChange={(e) => setHotel(e.target.value)}
              />
            </label>
            <label className={labelCls}>
              {block.datesLabel}
              <input
                type="text" autoComplete="off"
                className={`${inputCls} font-normal`}
                placeholder={block.datesPlaceholder}
                value={dates} onChange={(e) => setDates(e.target.value)}
              />
            </label>
            <label className={labelCls}>
              {block.guestsLabel}
              <input
                type="text" autoComplete="off"
                className={`${inputCls} font-normal`}
                placeholder={block.guestsPlaceholder}
                value={guests} onChange={(e) => setGuests(e.target.value)}
              />
            </label>
            <label className={labelCls}>
              {block.roomLabel}
              <select
                className={`${inputCls} font-normal`}
                value={room} onChange={(e) => setRoom(e.target.value)}
              >
                {block.roomOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </label>
            <label className={labelCls}>
              {block.mealsLabel}
              <select
                className={`${inputCls} font-normal`}
                value={meals} onChange={(e) => setMeals(e.target.value)}
              >
                {block.mealsOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </label>
          </div>

          <fieldset className="mb-4 border-0 p-0">
            <legend className="mb-2 font-semibold text-primary dark:text-white">{block.extrasLegend}</legend>
            {block.extras.map((e, i) => (
              <label key={e.value} className="mb-2 mr-4 inline-flex cursor-pointer items-center gap-2 text-gray-800 dark:text-gray-200">
                <input
                  type="checkbox"
                  className="h-[18px] w-[18px] accent-secondary"
                  checked={extras[i]}
                  onChange={() => setExtras((x) => x.map((v, j) => (j === i ? !v : v)))}
                />
                {e.label}
              </label>
            ))}
          </fieldset>

          <MessagePanel
            message={message}
            whatsapp={whatsapp}
            waLabel={block.waLabel}
            copyLabel={block.copyLabel}
          />
        </div>
      </div>
    </section>
  );
}