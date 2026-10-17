// src/components/seo-guide/VsBlock.jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { inputCls, labelCls, panelCls, h2Cls, h3Cls } from "./guideStyles";

// Side-by-side comparison between two destinations. Renders:
//   - "Side by side" facts table (only if block.facts has entries)
//   - Journey-time inputs (optional)
//   - Criteria rows (importance × which looks better)
//   - Weighted verdict with an "unsure" recap
//
// One component covers diveagar-vs-shrivardhan, -alibaug, -dapoli, -harihareshwar.
// The other place's name, facts, and criteria all come from the config.
const VERDICT_CLS = {
  good: "border-emerald-600",
  mid:  "border-accent",
  bad:  "border-secondary",
};

function NextLink({ slug, live, children }) {
  if (!live.has(slug)) {
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

export default function VsBlock({ block, live }) {
  const { otherName, selfName, criteria, hasJourney } = block;

  // Per-criterion state: importance (0-2) and winner (?, d, s, t)
  const [imp, setImp] = useState(() =>
    Object.fromEntries(criteria.map((c) => [c.id, c.defaultImportance ?? 1]))
  );
  const [win, setWin] = useState(() =>
    Object.fromEntries(criteria.map((c) => [c.id, c.defaultWinner ?? "?"]))
  );

  // Journey time inputs — self drives the "journey" criterion
  const [jSelf, setJSelf] = useState("");
  const [jOther, setJOther] = useState("");

  // When journey times are entered, auto-set the journey criterion's winner.
  useEffect(() => {
    if (!hasJourney) return;
    const d = parseFloat(jSelf);
    const s = parseFloat(jOther);
    if (!(d > 0 && s > 0)) return;
    const diff = Math.abs(d - s);
    const winner = diff < 0.25 ? "t" : d < s ? "d" : "s";
    setWin((w) => ({ ...w, journey: winner }));
  }, [jSelf, jOther, hasJourney]);

  const journeyNote = useMemo(() => {
    const d = parseFloat(jSelf);
    const s = parseFloat(jOther);
    if (!(d > 0 && s > 0)) return "";
    const diff = Math.abs(d - s);
    if (diff < 0.25) return "The journey times are about the same.";
    const closer = d < s ? selfName : otherName;
    return `${closer} is about ${Math.round(diff * 4) / 4} hours closer for you.`;
  }, [jSelf, jOther, selfName, otherName]);

  const result = useMemo(() => {
    let sd = 0;
    let ss = 0;
    const unsure = [];
    let counted = 0;

    criteria.forEach((c) => {
      const w = imp[c.id];
      const v = win[c.id];
      if (w === 0) return;
      if (v === "?") {
        unsure.push(c.label);
        return;
      }
      counted++;
      if (v === "d") sd += w;
      else if (v === "s") ss += w;
    });

    const diff = sd - ss;
    let kind;
    let title;
    if (counted === 0) {
      kind = null;
      title = null;
    } else if (Math.abs(diff) <= 1) {
      kind = "mid";
      title = "Too close to call for your priorities.";
    } else if (diff > 0) {
      kind = "good";
      title = `${selfName} looks like the better fit for you.`;
    } else {
      kind = "good";
      title = `${otherName} looks like the better fit for you.`;
    }
    return { sd, ss, counted, unsure, kind, title };
  }, [imp, win, criteria, selfName, otherName]);

  return (
    <section id={block.id} className="scroll-mt-28 py-10 md:py-12">
      <div className="container-custom">
        {/* ---- Optional facts table ---- */}
        {block.facts?.length > 0 && (
          <div className="mb-10">
            <h2 className={h2Cls}>{block.factsHeading}</h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
              <table className="min-w-[34rem] w-full border-collapse text-[0.95rem]">
                <thead>
                  <tr>
                    <th className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-3 text-left" />
                    <th className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-3 text-left font-display text-primary dark:text-white">
                      {selfName}
                    </th>
                    <th className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-3 text-left font-display text-primary dark:text-white">
                      {otherName}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {block.facts.map((f, i) => (
                    <tr key={i}>
                      <th scope="row" className="border-b border-gray-200 dark:border-gray-800 p-3 text-left font-bold text-primary dark:text-white">
                        {f.label}
                      </th>
                      <td className="border-b border-gray-200 dark:border-gray-800 p-3 text-gray-800 dark:text-gray-200">
                        {f.a}
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-800 p-3 text-gray-800 dark:text-gray-200">
                        {f.b}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ---- Comparison sheet ---- */}
        <h2 className={h2Cls}>{block.sheetHeading}</h2>
        {block.sheetSub && (
          <p className="mt-3 mb-6 max-w-3xl text-gray-500 dark:text-gray-400">{block.sheetSub}</p>
        )}

        {hasJourney && (
          <div className={`${panelCls} !bg-gray-50 dark:!bg-gray-950 mb-5 max-w-[860px]`}>
            <h3 className={`${h3Cls} !text-lg mb-1`}>{block.journeyHeading}</h3>
            <p className="mb-2.5 text-sm text-gray-500 dark:text-gray-400">
              {block.journeySub}
            </p>
            <div className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
              <label className={labelCls}>
                {block.journeySelfLabel}
                <input
                  type="number"
                  inputMode="decimal"
                  min="0.5"
                  max="14"
                  step="0.25"
                  placeholder={block.journeyPlaceholder}
                  className={`${inputCls} font-normal`}
                  value={jSelf}
                  onChange={(e) => setJSelf(e.target.value)}
                />
              </label>
              <label className={labelCls}>
                {block.journeyOtherLabel}
                <input
                  type="number"
                  inputMode="decimal"
                  min="0.5"
                  max="14"
                  step="0.25"
                  placeholder={block.journeyPlaceholder}
                  className={`${inputCls} font-normal`}
                  value={jOther}
                  onChange={(e) => setJOther(e.target.value)}
                />
              </label>
            </div>
            {journeyNote && (
              <p aria-live="polite" className="mt-2 font-bold text-emerald-700 dark:text-emerald-400">
                {journeyNote}
              </p>
            )}
          </div>
        )}

        <div className="mb-5 grid max-w-[860px] gap-3">
          {criteria.map((c) => (
            <div
              key={c.id}
              className="grid gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-5 py-4 [grid-template-columns:1fr] md:[grid-template-columns:1fr_minmax(260px,340px)] md:items-center"
            >
              <div>
                <h3 className={`${h3Cls} !text-base mb-0.5`}>{c.label}</h3>
                <p className="m-0 text-sm text-gray-500 dark:text-gray-400">{c.hint}</p>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <label className="flex flex-col gap-0.5 text-xs font-bold text-primary dark:text-white">
                  How much it matters
                  <select
                    className={`${inputCls} !py-2 !text-sm font-normal`}
                    value={imp[c.id]}
                    onChange={(e) => setImp((v) => ({ ...v, [c.id]: Number(e.target.value) }))}
                  >
                    <option value={0}>Not important</option>
                    <option value={1}>Somewhat</option>
                    <option value={2}>Very</option>
                  </select>
                </label>
                <label className="flex flex-col gap-0.5 text-xs font-bold text-primary dark:text-white">
                  Which looks better
                  <select
                    className={`${inputCls} !py-2 !text-sm font-normal`}
                    value={win[c.id]}
                    onChange={(e) => setWin((v) => ({ ...v, [c.id]: e.target.value }))}
                  >
                    <option value="?">Not sure</option>
                    <option value="d">{selfName}</option>
                    <option value="s">{otherName}</option>
                    <option value="t">No difference</option>
                  </select>
                </label>
              </div>
            </div>
          ))}
        </div>

        <div
          aria-live="polite"
          className={`max-w-[860px] rounded-xl border-l-[6px] bg-gray-50 dark:bg-gray-900 px-4 py-4 ${
            result.kind ? VERDICT_CLS[result.kind] : "border-gray-300 dark:border-gray-700"
          }`}
        >
          {!result.counted && (
            <p className="text-gray-500 dark:text-gray-400">{block.hintEmpty}</p>
          )}
          {result.counted > 0 && (
            <>
              <strong className="block font-display text-lg text-primary dark:text-white">
                {result.title}
              </strong>
              <p className="mt-1 text-gray-800 dark:text-gray-200">
                Score for {selfName}: {result.sd}. Score for {otherName}: {result.ss}. Rows count more when you mark them as very important.
              </p>
              {result.kind === "mid" && (
                <p className="mt-1.5 text-gray-800 dark:text-gray-200">
                  Consider seeing both. See the{" "}
                  <NextLink slug="diveagar-3-day-itinerary" live={live}>
                    3-day itinerary
                  </NextLink>
                  .
                </p>
              )}
              {result.unsure.length > 0 && (
                <p className="mt-1.5 text-gray-800 dark:text-gray-200">
                  Not yet decided: {result.unsure.join(", ")}. Research these before you choose.
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}