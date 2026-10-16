// src/components/seo-guide/PackageComparer.jsx
"use client";

import { useMemo, useState } from "react";
import { panelCls, h2Cls, h3Cls, inputCls, labelCls } from "./guideStyles";

// Fill in up to N package quotes, tick what each includes, and see them side
// by side. Highlights the lowest price per person per night, and lists what is
// missing from each quote.
function inr(n) {
  return `\u20B9${Math.round(n).toLocaleString("en-IN")}`;
}

export default function PackageComparer({ block }) {
  const count = block.count || 3;

  const [rows, setRows] = useState(() =>
    Array.from({ length: count }, () => ({
      name: "",
      price: "",
      nights: "",
      guests: "",
      included: block.inclusions.map(() => false),
    }))
  );

  function update(i, patch) {
    setRows((r) => r.map((row, j) => (j === i ? { ...row, ...patch } : row)));
  }

  function toggleInclusion(i, k) {
    setRows((r) =>
      r.map((row, j) =>
        j === i ? { ...row, included: row.included.map((v, x) => (x === k ? !v : v)) } : row
      )
    );
  }

  const filled = useMemo(
    () =>
      rows.map((r, i) => {
        const price = parseFloat(r.price);
        const nights = parseFloat(r.nights);
        const guests = parseFloat(r.guests);
        const inc = block.inclusions.filter((_, k) => r.included[k]);
        const touched = price || nights || guests || inc.length || r.name.trim();
        const pppn = price > 0 && nights > 0 && guests > 0 ? price / (nights * guests) : null;
        return {
          idx: i,
          name: r.name.trim() || `Package ${i + 1}`,
          price: price || null,
          nights: nights || null,
          guests: guests || null,
          pppn,
          inc,
          touched: !!touched,
        };
      }),
    [rows, block.inclusions]
  );

  const active = filled.filter((r) => r.touched);
  const lowest = useMemo(() => {
    const pppns = active.map((r) => r.pppn).filter(Boolean);
    return pppns.length > 0 ? Math.min(...pppns) : null;
  }, [active]);

  return (
    <section id={block.id} className="scroll-mt-28 py-10 md:py-12">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}

        <div className="mb-5 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {rows.map((r, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
              <h3 className={`${h3Cls} !text-lg mb-2.5`}>Package {i + 1}</h3>

              <label className={labelCls}>
                {block.nameLabel}
                <input
                  type="text"
                  autoComplete="off"
                  placeholder={block.namePlaceholder}
                  className={`${inputCls} font-normal`}
                  value={r.name}
                  onChange={(e) => update(i, { name: e.target.value })}
                />
              </label>

              <label className={`mt-2.5 ${labelCls}`}>
                {block.priceLabel}
                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  placeholder={block.pricePlaceholder}
                  className={`${inputCls} font-normal`}
                  value={r.price}
                  onChange={(e) => update(i, { price: e.target.value })}
                />
              </label>

              <label className={`mt-2.5 ${labelCls}`}>
                {block.nightsLabel}
                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  placeholder={block.nightsPlaceholder}
                  className={`${inputCls} font-normal`}
                  value={r.nights}
                  onChange={(e) => update(i, { nights: e.target.value })}
                />
              </label>

              <label className={`mt-2.5 ${labelCls}`}>
                {block.guestsLabel}
                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  placeholder={block.guestsPlaceholder}
                  className={`${inputCls} font-normal`}
                  value={r.guests}
                  onChange={(e) => update(i, { guests: e.target.value })}
                />
              </label>

              <fieldset className="mt-3.5 border-0 p-0">
                <legend className="mb-1.5 text-sm font-bold text-primary dark:text-white">
                  {block.inclusionsLegend}
                </legend>
                {block.inclusions.map((t, k) => (
                  <label key={t} className="mb-1 flex cursor-pointer items-center gap-2 text-sm text-gray-800 dark:text-gray-200">
                    <input
                      type="checkbox"
                      className="h-[17px] w-[17px] accent-secondary"
                      checked={r.included[k]}
                      onChange={() => toggleInclusion(i, k)}
                    />
                    {t}
                  </label>
                ))}
              </fieldset>
            </div>
          ))}
        </div>

        <div aria-live="polite">
          {active.length < 2 ? (
            <p className="text-gray-500 dark:text-gray-400">{block.hintFewer}</p>
          ) : (
            <>
              <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
                <table className="min-w-[34rem] w-full border-collapse text-[0.95rem]">
                  <thead>
                    <tr>
                      <th className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-3 text-left" />
                      {active.map((r) => (
                        <th
                          key={r.idx}
                          className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-3 text-left font-display text-primary dark:text-white"
                        >
                          {r.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <Row label="Total price">
                      {active.map((r) => (
                        <td key={r.idx} className="border-b border-gray-200 dark:border-gray-800 p-3 text-gray-800 dark:text-gray-200">
                          {r.price ? inr(r.price) : "Not entered"}
                        </td>
                      ))}
                    </Row>
                    <Row label="Nights and guests">
                      {active.map((r) => (
                        <td key={r.idx} className="border-b border-gray-200 dark:border-gray-800 p-3 text-gray-800 dark:text-gray-200">
                          {r.nights || "?"} nights, {r.guests || "?"} guests
                        </td>
                      ))}
                    </Row>
                    <Row label="Price per person per night">
                      {active.map((r) => {
                        const isLowest = r.pppn && r.pppn === lowest && active.filter((x) => x.pppn).length > 1;
                        return (
                          <td key={r.idx} className="border-b border-gray-200 dark:border-gray-800 p-3 text-gray-800 dark:text-gray-200">
                            {r.pppn ? (
                              <>
                                {inr(r.pppn)}
                                {isLowest && (
                                  <span className="ml-1.5 inline-block rounded-md bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.5 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                                    Lowest
                                  </span>
                                )}
                              </>
                            ) : (
                              "Needs price, nights and guests"
                            )}
                          </td>
                        );
                      })}
                    </Row>
                    <Row label="Inclusions ticked">
                      {active.map((r) => (
                        <td key={r.idx} className="border-b border-gray-200 dark:border-gray-800 p-3 text-gray-800 dark:text-gray-200">
                          {r.inc.length} of {block.inclusions.length}
                        </td>
                      ))}
                    </Row>
                    <Row label="Not included">
                      {active.map((r) => {
                        const missing = block.inclusions.filter((x) => !r.inc.includes(x));
                        return (
                          <td key={r.idx} className="border-b border-gray-200 dark:border-gray-800 p-3 text-gray-800 dark:text-gray-200">
                            {missing.length ? missing.join(", ") : "Nothing missing"}
                          </td>
                        );
                      })}
                    </Row>
                  </tbody>
                </table>
              </div>

              {block.note && (
                <p className="mt-3.5 rounded-r-xl border-l-[6px] border-accent bg-gray-50 dark:bg-gray-900 px-4 py-3.5">
                  <strong>Read this before choosing: </strong>
                  {block.note}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function Row({ label, children }) {
  return (
    <tr>
      <th scope="row" className="whitespace-nowrap border-b border-gray-200 dark:border-gray-800 p-3 text-left font-bold text-primary dark:text-white">
        {label}
      </th>
      {children}
    </tr>
  );
}