// src/components/seo-guide/JourneyPlanner.jsx
"use client";

import { useMemo, useState } from "react";
import { SITE_NAME } from "@/lib/siteConfig";
import MessagePanel from "./MessagePanel";
import { inputCls, labelCls, panelCls, h2Cls, h3Cls } from "./guideStyles";

// Journey planner: pick start/mode/arrival + optional hotel, get a checks list
// and a ready WhatsApp message. Reuses MessagePanel for the send/copy actions
// so the status handling is identical to the other builders.
export default function JourneyPlanner({ block, whatsapp }) {
  const [from, setFrom] = useState("");
  const [mode, setMode] = useState(block.modes[0].value);
  const [arrive, setArrive] = useState(block.arrivals[0].value);
  const [hotel, setHotel] = useState("");

  const modeDef = block.modes.find((m) => m.value === mode);
  const arriveDef = block.arrivals.find((a) => a.value === arrive);

  const checks = useMemo(
    () => [...modeDef.checks, ...arriveDef.checks],
    [modeDef, arriveDef]
  );

  const message = useMemo(() => {
    const lines = [
      `Hi, I have booked ${hotel || "a stay with you"} through ${SITE_NAME}.`,
      `We are travelling${from ? ` from ${from}` : ""} by ${modeDef.text} and expect to arrive ${arriveDef.text}.`,
      "Could you please:",
    ];
    const qs = [
      "Share the map pin and the best route for the final stretch.",
      "Tell us the current travel time and anything to watch for on the way.",
    ];
    if (mode === "car") qs.push("Confirm parking at the hotel.");
    if (mode === "public")
      qs.push("Tell us the nearest stop and how to reach you from there, and whether you can arrange a pickup.");
    if (mode === "taxi") qs.push("Recommend a trusted local driver, or arrange a pickup.");
    if (arrive !== "day") qs.push("Confirm check-in and dinner timing for our arrival.");
    qs.forEach((q, i) => lines.push(`${i + 1}. ${q}`));
    lines.push("Thank you.");
    return lines.join("\n");
  }, [from, mode, arrive, hotel, modeDef, arriveDef]);

  return (
    <section id={block.id} className="scroll-mt-28 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-12 md:py-14">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>

        <div className={`${panelCls} !bg-gray-50 dark:!bg-gray-950`}>
          <div className="mb-4 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
            <label className={labelCls}>
              {block.fromLabel}
              <input
                type="text"
                autoComplete="off"
                className={`${inputCls} font-normal`}
                placeholder={block.fromPlaceholder}
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </label>
            <label className={labelCls}>
              {block.modeLabel}
              <select
                className={`${inputCls} font-normal`}
                value={mode}
                onChange={(e) => setMode(e.target.value)}
              >
                {block.modes.map((m) => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </select>
            </label>
            <label className={labelCls}>
              {block.arriveLabel}
              <select
                className={`${inputCls} font-normal`}
                value={arrive}
                onChange={(e) => setArrive(e.target.value)}
              >
                {block.arrivals.map((a) => (
                  <option key={a.value} value={a.value}>{a.label}</option>
                ))}
              </select>
            </label>
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

          <h3 className={`${h3Cls} !text-lg mt-5 mb-2`}>{block.checksHeading}</h3>
          <ul className="mb-5 list-disc space-y-1.5 pl-6 text-gray-800 dark:text-gray-200">
            {checks.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>

          <h3 className={`${h3Cls} !text-lg mb-2`}>{block.messageHeading}</h3>
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