// src/components/seo-guide/MessagePanel.jsx
"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { waLink } from "@/lib/guideLogic";
import { waBtn, copyBtn } from "./guideStyles";

// Preview + "Send on WhatsApp" + "Copy message". Used by the question builder,
// the family planner and the turtle claim checker.
export default function MessagePanel({ message, whatsapp, waLabel, copyLabel, showPreview = true }) {
  // The status is tied to the message it was produced for, so editing the
  // message afterwards clears a stale "Copied".
  const [result, setResult] = useState({ for: "", text: "" });
  const status = result.for === message ? result.text : "";

  async function copy() {
    const done = () => setResult({ for: message, text: "Copied" });
    const fail = () =>
      setResult({ for: message, text: "Could not copy. Select the text and copy it manually." });
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(message);
        return done();
      }
      const ta = document.createElement("textarea");
      ta.value = message;
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok ? done() : fail();
    } catch {
      fail();
    }
  }

  return (
    <div>
      {showPreview && (
        <p
          aria-live="polite"
          className="my-3.5 whitespace-pre-wrap rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 p-3.5 text-[0.95rem] text-gray-800 dark:text-gray-200"
        >
          {message}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-2.5">
        <a href={waLink(whatsapp, message)} target="_blank" rel="noopener noreferrer" className={waBtn}>
          <FaWhatsapp aria-hidden="true" /> {waLabel}
        </a>
        <button type="button" onClick={copy} className={copyBtn}>
          <FiCopy aria-hidden="true" /> {copyLabel}
        </button>
        <span role="status" className="text-sm font-semibold text-secondary">
          {status}
        </span>
      </div>
    </div>
  );
}