// src/components/seo-guide/BookingBuilder.jsx
"use client";

import { useMemo, useState } from "react";
import { SITE_NAME } from "@/lib/siteConfig";
import MessagePanel from "./MessagePanel";
import { inputCls, labelCls, panelCls, h2Cls } from "./guideStyles";

// Enquiry builder. Supports two shapes:
//
// 1. Hotel enquiry (how-to-book-diveagar-hotels, diveagar-food-hotels-restaurants)
//    → uses the default message: hotel/dates/guests + optional room/meals/arrivals + extras
//
// 2. Custom-shaped enquiry (diveagar-tour-packages)
//    → uses `fields` + `extras` + `messageTemplate` for full control
//
// If `fields` is present, it takes priority over hotelLabel/datesLabel/guestsLabel.
export default function BookingBuilder({ block, whatsapp }) {
  // --- Custom-shaped mode: dynamic fields declared in `block.fields` ---
  const customFields = block.fields || null;
  const [customValues, setCustomValues] = useState(() =>
    customFields ? Object.fromEntries(customFields.map((f) => [f.key, ""])) : {}
  );

  // --- Hotel enquiry mode: fixed fields ---
  const [hotel, setHotel] = useState("");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("");
  const [room, setRoom] = useState("");
  const [meals, setMeals] = useState("");
  const [arrival, setArrival] = useState(block.arrivals?.[0]?.value || "");

  // --- Extras (both modes) ---
  const [extras, setExtras] = useState(() =>
    (block.extras || []).map((e) => !!e.checked)
  );

  const message = useMemo(() => {
    const extrasPicked = (block.extras || [])
      .filter((_, i) => extras[i])
      .map((e) => e.value);

    // Custom template mode
    if (block.messageTemplate) {
      const values = {
        hotel: hotel || "___",
        dates: dates || "___",
        guests: guests || "___",
        nights: customValues.nights || "___",
        extras: extrasPicked.join(", "),
        site: SITE_NAME,
        ...customValues,
      };
      return block.messageTemplate.replace(/\{(\w+)\}/g, (_, k) => values[k] ?? "");
    }

    // Default hotel enquiry message
    const lines = [
      `Hi, I would like to enquire about ${hotel || "your hotel"} on ${SITE_NAME}.`,
      `Dates: ${dates || "___"}. Guests: ${guests || "___"}.`,
    ];
    if (block.roomOptions?.length && room) lines.push(`We would like ${room}.`);
    if (block.mealsOptions?.length && meals) lines.push(`Meals: ${meals}.`);
    if (extrasPicked.length) lines.push(`We would also like ${extrasPicked.join(", ")}.`);
    lines.push("Could you please confirm:");
    lines.push("1. Availability on these dates.");
    lines.push("2. The total price and what it includes.");
    lines.push("3. Your cancellation policy.");
    lines.push("4. How and when to pay.");
    const arrivalDef = block.arrivals?.find((a) => a.value === arrival);
    if (arrivalDef?.extraQuestions?.length) {
      arrivalDef.extraQuestions.forEach((q) => lines.push(`- ${q}`));
    }
    lines.push("Thank you.");
    return lines.join("\n");
  }, [hotel, dates, guests, room, meals, arrival, extras, customValues, block]);

  return (
    <section
      id={block.id}
      className="scroll-mt-28 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-12 md:py-14"
    >
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}

        <div className={`${panelCls} !bg-gray-50 dark:!bg-gray-950`}>
          <div className="mb-4 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
            {customFields
              ? customFields.map((f) => (
                  <label key={f.key} className={labelCls}>
                    {f.label}
                    <input
                      type="text"
                      autoComplete="off"
                      className={`${inputCls} font-normal`}
                      placeholder={f.placeholder}
                      value={customValues[f.key] || ""}
                      onChange={(e) =>
                        setCustomValues((v) => ({ ...v, [f.key]: e.target.value }))
                      }
                    />
                  </label>
                ))
              : (
                <>
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
                  {block.roomOptions?.length > 0 && (
                    <label className={labelCls}>
                      {block.roomLabel}
                      <select className={`${inputCls} font-normal`} value={room} onChange={(e) => setRoom(e.target.value)}>
                        {block.roomOptions.map((o) => (
                          <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                      </select>
                    </label>
                  )}
                  {block.mealsOptions?.length > 0 && (
                    <label className={labelCls}>
                      {block.mealsLabel}
                      <select className={`${inputCls} font-normal`} value={meals} onChange={(e) => setMeals(e.target.value)}>
                        {block.mealsOptions.map((o) => (
                          <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                      </select>
                    </label>
                  )}
                  {block.arrivals?.length > 0 && (
                    <label className={labelCls}>
                      {block.arrivalLabel}
                      <select className={`${inputCls} font-normal`} value={arrival} onChange={(e) => setArrival(e.target.value)}>
                        {block.arrivals.map((a) => (
                          <option key={a.value} value={a.value}>{a.label}</option>
                        ))}
                      </select>
                    </label>
                  )}
                </>
              )}
          </div>

          {block.extras?.length > 0 && (
            <fieldset className="mb-4 border-0 p-0">
              <legend className="mb-2 font-semibold text-primary dark:text-white">
                {block.extrasLegend}
              </legend>
              {block.extras.map((e, i) => (
                <label
                  key={e.value}
                  className="mb-2 mr-4 inline-flex cursor-pointer items-center gap-2 text-gray-800 dark:text-gray-200"
                >
                  <input
                    type="checkbox"
                    className="h-[18px] w-[18px] accent-secondary"
                    checked={extras[i]}
                    onChange={() =>
                      setExtras((x) => x.map((v, j) => (j === i ? !v : v)))
                    }
                  />
                  {e.label}
                </label>
              ))}
            </fieldset>
          )}

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