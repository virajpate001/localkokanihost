// src/components/seo-guide/ClaimChecker.jsx
"use client";

import { useState } from "react";
import { claimMessage, claimVerdict } from "@/lib/guideLogic";
import MessagePanel from "./MessagePanel";
import { inputCls, labelCls, panelCls, h2Cls } from "./guideStyles";

const VERDICT_STYLE = {
  bad: "border-red-700 bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-200",
  good: "border-emerald-600 bg-white dark:bg-gray-950",
  mid: "border-accent bg-white dark:bg-gray-950",
  none: "border-secondary bg-white dark:bg-gray-950",
};

export default function ClaimChecker({ block, site, whatsapp }) {
  const [hotel, setHotel] = useState("");
  const [pos, setPos] = useState(() => block.positive.map(() => false));
  const [red, setRed] = useState(() => block.red.map(() => false));

  const verdict = claimVerdict(pos.filter(Boolean).length, red.filter(Boolean).length, block.verdicts);
  const message = claimMessage(block.message, { hotel, site });
  const toggle = (setter, i) => setter((list) => list.map((v, j) => (j === i ? !v : v)));

  const group = (legend, items, state, setter) => (
    <fieldset className="mb-4 border-0 p-0">
      <legend className="mb-2 font-semibold text-primary dark:text-white">{legend}</legend>
      {items.map((t, i) => (
        <label key={t} className="mb-2 flex cursor-pointer items-start gap-2.5 text-gray-800 dark:text-gray-200">
          <input
            type="checkbox"
            className="mt-1.5 h-[18px] w-[18px] accent-secondary"
            checked={state[i]}
            onChange={() => toggle(setter, i)}
          />
          {t}
        </label>
      ))}
    </fieldset>
  );

  return (
    <section id={block.id} className="scroll-mt-28 border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-12 md:py-14">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>

        <div className={`max-w-[860px] ${panelCls} !bg-gray-50 dark:!bg-gray-950`}>
          <div className="mb-3.5 grid max-w-[420px]">
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

          <div className="mb-5">
            <MessagePanel
              message={message}
              whatsapp={whatsapp}
              waLabel={block.waLabel}
              copyLabel={block.copyLabel}
              showPreview={false}
            />
          </div>

          {group(block.goodLegend, block.positive, pos, setPos)}
          {group(block.warnLegend, block.red, red, setRed)}

          <div
            aria-live="polite"
            className={`rounded-xl border-l-[6px] p-4 font-medium ${VERDICT_STYLE[verdict.kind]}`}
          >
            {verdict.text}
          </div>
        </div>
      </div>
    </section>
  );
}