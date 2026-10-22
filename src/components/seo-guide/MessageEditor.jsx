// src/components/seo-guide/MessageEditor.jsx
"use client";

import { useState } from "react";
import { h2Cls } from "./guideStyles";

// Editable message with a copy-to-clipboard button. Different from
// MessagePanel (which composes a message from a form and adds a WhatsApp
// send button) — here the visitor edits the raw text directly and copies it.
export default function MessageEditor({ block }) {
  const [text, setText] = useState(block.template);
  const [status, setStatus] = useState("");

  async function copy() {
    const done = () => {
      setStatus(block.copiedLabel || "Copied.");
      setTimeout(() => setStatus(""), 2500);
    };
    const fail = () => {
      setStatus(block.failedLabel || "Press Ctrl+C to copy.");
    };
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return done();
      }
      fail();
    } catch {
      fail();
    }
  }

  return (
    <section id={block.id} className="scroll-mt-28 py-10 md:py-12">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-4 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}
        <textarea
          aria-label={block.textareaAriaLabel || "Message to copy"}
          className="w-full max-w-[640px] rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 p-3 text-base text-gray-800 dark:text-gray-200 font-mono"
          style={{ minHeight: "11rem" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p className="mt-2 flex items-center gap-3">
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center justify-center rounded-xl bg-accent hover:bg-accent-light text-primary font-semibold px-5 py-2.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            {block.copyLabel || "Copy message"}
          </button>
          <span role="status" className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
            {status}
          </span>
        </p>
      </div>
    </section>
  );
}