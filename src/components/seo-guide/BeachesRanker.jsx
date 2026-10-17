// src/components/seo-guide/BeachesRanker.jsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { inputCls, labelCls, panelCls, h2Cls, h3Cls } from "./guideStyles";

// N-destination weighted ranking. Renders:
//   - Optional "What we know" notes (per destination)
//   - Step 1: journey time inputs
//   - Step 2: a weighted matrix (importance × per-destination rating)
//   - Step 3: a ranked list with bars and "Next:" links
//
// Generalises the vs-sheet widget from 2 places to N. Reusable for any
// "compare multiple options against criteria" page.
const RATING_OPTIONS = [
  { value: "?", label: "Not sure" },
  { value: "1", label: "Poor match" },
  { value: "2", label: "Fair match" },
  { value: "3", label: "Good match" },
  { value: "4", label: "Very good match" },
  { value: "5", label: "Great match" },
];
const IMPORTANCE_OPTIONS = [
  { value: "0", label: "Not important" },
  { value: "1", label: "Somewhat" },
  { value: "2", label: "Very" },
];
const DEFAULT_IMPORTANCE = "1";

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

function computeJourneyRatings(places, journeyValues) {
  const entries = places
    .map((p) => ({ id: p.id, hours: parseFloat(journeyValues[p.id]) }))
    .filter((e) => e.hours > 0);
  if (entries.length < 2) return {};
  const min = Math.min(...entries.map((e) => e.hours));
  return Object.fromEntries(
    entries.map((e) => [e.id, Math.max(1, 5 - Math.round(e.hours - min))])
  );
}

export default function BeachesRanker({ block, live }) {
  const places = block.places;
  const criteria = block.criteria;
  const closeThreshold = block.closeThreshold ?? 0.3;

  // Step 1: journey hours per place
  const [journey, setJourney] = useState(() =>
    Object.fromEntries(places.map((p) => [p.id, ""]))
  );

  // Step 2: importance per criterion + rating per (criterion, place)
  const [importance, setImportance] = useState(() =>
    Object.fromEntries(criteria.map((c) => [c.id, DEFAULT_IMPORTANCE]))
  );
  const [rating, setRating] = useState(() =>
    Object.fromEntries(criteria.map((c) => [c.id, Object.fromEntries(places.map((p) => [p.id, "?"]))]))
  );

  const journeyRatings = useMemo(
    () => computeJourneyRatings(places, journey),
    [places, journey]
  );

  const results = useMemo(() => {
    return places.map((p) => {
      let sumW = 0;
      let sumWR = 0;
      let n = 0;
      criteria.forEach((c) => {
        const w = parseInt(importance[c.id], 10);
        if (!w) return;
        const r =
          c.id === "journey"
            ? journeyRatings[p.id]
            : parseInt(rating[c.id][p.id], 10);
        if (!r || Number.isNaN(r)) return;
        sumW += w;
        sumWR += w * r;
        n += 1;
      });
      return { place: p, score: sumW ? sumWR / sumW : null, rated: n };
    });
  }, [places, criteria, importance, rating, journeyRatings]);

  const ranked = results
    .filter((r) => r.score !== null)
    .sort((a, b) => b.score - a.score);
  const unrated = results.filter((r) => r.score === null);

  const notes = places.filter((p) => p.note);

  return (
    <section id={block.id} className="scroll-mt-28 py-10 md:py-12">
      <div className="container-custom">
        {/* Optional notes */}
        {notes.length > 0 && (
          <div className="mb-10">
            <h2 className={h2Cls}>{block.notesHeading}</h2>
            <div className="mt-4 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
              {notes.map((p) => (
                <div key={p.id} className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
                  <h3 className={`${h3Cls} !text-lg mb-1.5`}>{p.name}</h3>
                  <p className="m-0 text-gray-800 dark:text-gray-200">{p.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main heading */}
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}

        {/* Step 1: journey inputs */}
        {block.hasJourney && (
          <div className={`${panelCls} !bg-gray-50 dark:!bg-gray-950 mb-6`}>
            <h3 className={`${h3Cls} !text-lg mb-1`}>{block.step1Heading}</h3>
            <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">{block.step1Sub}</p>
            <div className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
              {places.map((p) => (
                <label key={p.id} className={labelCls}>
                  {block.step1LabelTemplate.replace("{name}", p.name)}
                  <input
                    type="number"
                    inputMode="decimal"
                    min="0.5"
                    max="14"
                    step="0.25"
                    placeholder={block.step1Placeholder}
                    className={`${inputCls} font-normal`}
                    value={journey[p.id]}
                    onChange={(e) => setJourney((j) => ({ ...j, [p.id]: e.target.value }))}
                  />
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: matrix */}
        <h3 className={`${h3Cls} !text-lg mb-1`}>{block.step2Heading}</h3>
        {block.step2Sub && (
          <p className="mb-3 max-w-2xl text-sm text-gray-500 dark:text-gray-400">{block.step2Sub}</p>
        )}

        <div className="mb-6 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
          <table className="min-w-[860px] w-full border-collapse text-[0.92rem]">
            <thead>
              <tr>
                <th className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-2.5 text-left font-bold text-primary dark:text-white">
                  {block.tableCriteriaLabel}
                </th>
                <th className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-2.5 text-left font-bold text-primary dark:text-white">
                  {block.tableImportanceLabel}
                </th>
                {places.map((p) => (
                  <th
                    key={p.id}
                    className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-2.5 text-left font-bold text-primary dark:text-white"
                  >
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {criteria.map((c) => (
                <tr key={c.id}>
                  <th scope="row" className="whitespace-nowrap border-b border-gray-200 dark:border-gray-800 p-2.5 text-left font-bold text-primary dark:text-white">
                    {c.label}
                  </th>
                  <td className="border-b border-gray-200 dark:border-gray-800 p-2.5">
                    <select
                      aria-label={`How much ${c.label} matters`}
                      className={`${inputCls} !py-1.5 !text-sm font-normal`}
                      value={importance[c.id]}
                      onChange={(e) =>
                        setImportance((v) => ({ ...v, [c.id]: e.target.value }))
                      }
                    >
                      {IMPORTANCE_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </td>
                  {places.map((p) => (
                    <td key={p.id} className="border-b border-gray-200 dark:border-gray-800 p-2.5">
                      {c.id === "journey" ? (
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {journeyRatings[p.id]
                            ? `${journeyRatings[p.id]} of 5`
                            : block.journeyCellEmpty}
                        </span>
                      ) : (
                        <select
                          aria-label={`${c.label} for ${p.name}`}
                          className={`${inputCls} !py-1.5 !text-sm font-normal`}
                          value={rating[c.id][p.id]}
                          onChange={(e) =>
                            setRating((r) => ({
                              ...r,
                              [c.id]: { ...r[c.id], [p.id]: e.target.value },
                            }))
                          }
                        >
                          {RATING_OPTIONS.map((o) => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                          ))}
                        </select>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Step 3: ranking */}
        <h3 className={`${h3Cls} !text-lg mb-2`}>{block.step3Heading}</h3>
        <div aria-live="polite" className="mb-4">
          {ranked.length === 0 && (
            <p className="text-gray-500 dark:text-gray-400">{block.hintEmpty}</p>
          )}
          {ranked.length > 0 && (
            <>
              <div
                className={`mb-3.5 max-w-[860px] rounded-xl border-l-[6px] bg-gray-50 dark:bg-gray-900 px-4 py-3.5 ${
                  ranked.length > 1 && ranked[0].score - ranked[1].score <= closeThreshold
                    ? "border-accent"
                    : "border-emerald-600"
                }`}
              >
                {ranked.length > 1 && ranked[0].score - ranked[1].score <= closeThreshold ? (
                  <>
                    <strong className="block font-display text-lg text-primary dark:text-white">
                      Too close to call between {ranked[0].place.name} and {ranked[1].place.name}.
                    </strong>
                    <p className="mt-1 text-gray-800 dark:text-gray-200">
                      Research them further, or consider seeing both if the distance allows.
                    </p>
                  </>
                ) : (
                  <>
                    <strong className="block font-display text-lg text-primary dark:text-white">
                      {ranked[0].place.name} is the best match for your priorities so far.
                    </strong>
                    <p className="mt-1 text-gray-800 dark:text-gray-200">
                      This reflects only the ratings you entered. Ask hotels in your top places the same questions before you decide.
                    </p>
                  </>
                )}
              </div>

              <ol className="mb-3 grid max-w-[860px] list-none gap-2.5 p-0">
                {ranked.map((r, i) => (
                  <li
                    key={r.place.id}
                    className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3.5"
                  >
                    <div className="flex items-baseline justify-between gap-2.5">
                      <strong className="font-display text-primary dark:text-white">
                        {i + 1}. {r.place.name}
                      </strong>
                      <span className="font-bold text-emerald-700 dark:text-emerald-400">
                        {r.score.toFixed(1)} / 5
                      </span>
                    </div>
                    <div className="my-2 h-2.5 overflow-hidden rounded-md bg-gray-200 dark:bg-gray-800">
                      <div
                        className="h-full rounded-md bg-emerald-600 dark:bg-emerald-500"
                        style={{ width: `${Math.round((r.score / 5) * 100)}%` }}
                      />
                    </div>
                    <p className="m-0 text-sm text-gray-500 dark:text-gray-400">
                      Based on {r.rated} row{r.rated === 1 ? "" : "s"}.{" "}
                      {r.place.slug && r.place.link ? (
                        <NextLink slug={r.place.slug} live={live}>{r.place.link}</NextLink>
                      ) : null}
                    </p>
                  </li>
                ))}
              </ol>
            </>
          )}

          {unrated.length > 0 && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Not yet rated: {unrated.map((r) => r.place.name).join(", ")}.
            </p>
          )}
        </div>

        {block.fine && (
          <p className="mt-4 max-w-[860px] text-sm text-gray-500 dark:text-gray-400">
            {block.fine}
          </p>
        )}
      </div>
    </section>
  );
}