// src/components/seo-guide/PackingList.jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { inputCls, labelCls, panelCls, h2Cls, copyBtn } from "./guideStyles";

// Three selects (season / group / driving) → filterable packing list with copy
// and print actions. Item checkboxes are ephemeral (not persisted); only the
// first-timer checklist on the page uses localStorage.
export default function PackingList({ block }) {
  const [season, setSeason] = useState(block.defaults.season);
  const [group, setGroup] = useState(block.defaults.group);
  const [drive, setDrive] = useState(block.defaults.drive);
  const [status, setStatus] = useState("");

  // Auto-pick season from the current month (client-only, avoids SSR mismatch).
  useEffect(() => {
    if (!block.autoSeason) return;
    const m = new Date().getMonth() + 1;
    setSeason(m >= 6 && m <= 9 ? "monsoon" : m >= 3 && m <= 5 ? "summer" : "cooler");
  }, [block.autoSeason]);

  const items = useMemo(() => {
    const all = [
      ...block.base,
      ...(block.bySeason[season] || []),
      ...(block.byGroup[group] || []),
      ...(drive === "yes" ? block.byDrive : []),
    ];
    // De-duplicate, preserving order.
    const seen = new Set();
    return all.filter((x) => (seen.has(x) ? false : (seen.add(x), true)));
  }, [season, group, drive, block]);

  async function copyList() {
    const text = `${block.copyHeading}\n${items.map((t) => `- ${t}`).join("\n")}`;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return setStatus("Copied");
      }
      const ta = document.createElement("textarea");
      ta.value = text;
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
    <section id={block.id} className="scroll-mt-28 py-10 md:py-12">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}

        <div className={panelCls}>
          <div className="mb-4 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
            <label className={labelCls}>
              {block.seasonLabel}
              <select className={`${inputCls} font-normal`} value={season} onChange={(e) => setSeason(e.target.value)}>
                {block.seasonOptions.map((o) => (
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
            <label className={labelCls}>
              {block.driveLabel}
              <select className={`${inputCls} font-normal`} value={drive} onChange={(e) => setDrive(e.target.value)}>
                {block.driveOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </label>
          </div>

          <ul className="columns-1 md:columns-2 gap-7 mb-4 list-none p-0">
            {items.map((t, i) => (
              <li key={`${t}-${i}`} className="mb-1.5 break-inside-avoid">
                <label className="flex cursor-pointer items-start gap-2 text-gray-800 dark:text-gray-200">
                  <input type="checkbox" className="mt-1.5 h-[17px] w-[17px] accent-secondary" />
                  <span>{t}</span>
                </label>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-2.5">
            <button type="button" onClick={copyList} className={copyBtn}>
              {block.copyLabel}
            </button>
            <button type="button" onClick={() => window.print()} className={copyBtn}>
              {block.printLabel}
            </button>
            <span role="status" className="text-sm font-semibold text-secondary">
              {status}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}