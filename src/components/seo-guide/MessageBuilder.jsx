// src/components/seo-guide/MessageBuilder.jsx
"use client";

import { useState } from "react";
import { builderMessage } from "@/lib/guideLogic";
import MessagePanel from "./MessagePanel";
import { inputCls, labelCls, panelCls } from "./guideStyles";

// "Tick the questions you care about, add your details, send on WhatsApp."
export default function MessageBuilder({ config, site, whatsapp }) {
  const [values, setValues] = useState({ hotel: "", dates: "", guests: "" });
  const [checked, setChecked] = useState(() => config.questions.map((q) => !!q.checked));

  const selected = config.questions.filter((_, i) => checked[i]).map((q) => q.text);
  const message = builderMessage({ ...values, questions: selected, site });

  return (
    <div id="builder" className={`not-prose my-4 !bg-gray-50 dark:!bg-gray-950 ${panelCls}`}>
      <div className="mb-4 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]">
        {config.fields.map((f) => (
          <label key={f.key} className={labelCls}>
            {f.label}
            <input
              type="text"
              autoComplete="off"
              className={`${inputCls} font-normal`}
              placeholder={f.placeholder}
              value={values[f.key] || ""}
              onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))}
            />
          </label>
        ))}
      </div>

      <fieldset className="mb-3.5 border-0 p-0">
        <legend className="mb-2 font-semibold text-primary dark:text-white">{config.legend}</legend>
        {config.questions.map((q, i) => (
          <label key={q.text} className="mb-2 flex cursor-pointer items-start gap-2.5 text-gray-800 dark:text-gray-200">
            <input
              type="checkbox"
              className="mt-1.5 h-[18px] w-[18px] accent-secondary"
              checked={checked[i]}
              onChange={() => setChecked((c) => c.map((v, j) => (j === i ? !v : v)))}
            />
            {q.label}
          </label>
        ))}
      </fieldset>

      <MessagePanel message={message} whatsapp={whatsapp} waLabel={config.waLabel} copyLabel={config.copyLabel} />
    </div>
  );
}