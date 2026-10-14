// src/components/seo-guide/StayExplorer.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import {
  matchRule,
  sortStays,
  chipLabels,
  lineLabel,
  formatPrice,
  buildStayMessage,
  waLink,
  finderResult,
} from "@/lib/guideLogic";
import { chipCls, waBtn, tagCls, inputCls, labelCls, panelCls, h3Cls } from "./guideStyles";

// The first render (filter = "all") contains every card, so the full list is in
// the server-rendered HTML for search engines; filtering only runs after hydration.
export default function StayExplorer({ block, stays, site, whatsapp, children }) {
  const [activeKey, setActiveKey] = useState(block.filters[0].key);
  const [chosen, setChosen] = useState([]);
  const [finder, setFinder] = useState({
    who: block.finder?.whoOptions[0].value,
    privacy: block.finder?.privacyOptions[0].value,
  });

  const active = block.filters.find((f) => f.key === activeKey) || block.filters[0];
  const visible = sortStays(
    stays.filter((s) => matchRule(s, active.match)),
    block.sort
  );
  const compare = block.compare;
  const compared = compare ? stays.filter((s) => chosen.includes(s.id)) : [];

  function updateFinder(patch) {
    const next = { ...finder, ...patch };
    setFinder(next);
    setActiveKey(finderResult(next, block.finder.results).filter);
  }

  function toggleCompare(id) {
    setChosen((list) => {
      if (list.includes(id)) return list.filter((x) => x !== id);
      if (list.length >= compare.max) return list;
      return [...list, id];
    });
  }

  return (
    <div>
      {block.finder && (
        <div className={`mb-6 ${panelCls}`}>
          <div className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
            <label className={labelCls}>
              {block.finder.whoLabel}
              <select
                className={`${inputCls} font-normal`}
                value={finder.who}
                onChange={(e) => updateFinder({ who: e.target.value })}
              >
                {block.finder.whoOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
            <label className={labelCls}>
              {block.finder.privacyLabel}
              <select
                className={`${inputCls} font-normal`}
                value={finder.privacy}
                onChange={(e) => updateFinder({ privacy: e.target.value })}
              >
                {block.finder.privacyOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <p aria-live="polite" className="mt-3 font-medium text-primary dark:text-white">
            {finderResult(finder, block.finder.results).text}
          </p>
        </div>
      )}

      <ul aria-label={block.filterAriaLabel} className="mb-2.5 flex flex-wrap gap-2.5">
        {block.filters.map((f) => (
          <li key={f.key}>
            <button type="button" aria-pressed={f.key === activeKey} onClick={() => setActiveKey(f.key)} className={chipCls(f.key === activeKey)}>
              {f.label}
            </button>
          </li>
        ))}
      </ul>

      <p aria-live="polite" className="mb-5 min-h-[2.5em] text-gray-500 dark:text-gray-400">
        {active.note}
        {active.moreHref && (
          <>
            {" "}
            <Link href={active.moreHref} className="font-medium text-secondary hover:underline">
              {active.more}.
            </Link>
          </>
        )}
      </p>

      {visible.length === 0 ? (
        <div className="rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 p-6 text-center text-gray-500 dark:text-gray-400">
          <p className="mb-4">{block.empty}</p>
          <a href={waLink(whatsapp, `Hi, I am looking for a stay in Diveagar. Can you help me find one on ${site}?`)} target="_blank" rel="noopener noreferrer" className={waBtn}>
            <FaWhatsapp aria-hidden="true" /> Message us on WhatsApp
          </a>
        </div>
      ) : (
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
          {visible.map((stay, index) => (
            <StayCard
              key={stay.id}
              stay={stay}
              block={block}
              site={site}
              whatsapp={whatsapp}
              priority={index < 2}
              comparing={!!compare}
              checked={chosen.includes(stay.id)}
              disabled={!!compare && !chosen.includes(stay.id) && chosen.length >= compare.max}
              onToggle={() => toggleCompare(stay.id)}
            />
          ))}
        </div>
      )}

      {compare && (
        <div className={`mt-8 ${panelCls}`}>
          <h3 className={`${h3Cls} !text-xl mb-3`}>{compare.heading}</h3>
          {compared.length < 2 ? (
            <p className="text-gray-500 dark:text-gray-400">
              {compared.length === 0 ? compare.hintNone : compare.hintOne}
            </p>
          ) : (
            <>
              <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
                <table className="w-full min-w-[34rem] border-collapse text-[0.95rem]">
                  <thead>
                    <tr>
                      <th className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-3 text-left" />
                      {compared.map((s) => (
                        <th key={s.id} className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-3 text-left font-display text-primary dark:text-white">
                          {s.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {compare.rows.map((row) => (
                      <tr key={row.label}>
                        <th scope="row" className="border-b border-gray-200 dark:border-gray-800 p-3 text-left font-semibold text-primary dark:text-white">
                          {row.label}
                        </th>
                        {compared.map((s) => (
                          <td key={s.id} className="border-b border-gray-200 dark:border-gray-800 p-3 text-gray-800 dark:text-gray-200">
                            {compareCell(row, s, compare, block)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button type="button" onClick={() => setChosen([])} className="mt-3 text-sm font-semibold text-secondary hover:underline">
                {compare.clearLabel}
              </button>
            </>
          )}
        </div>
      )}

      {children}
    </div>
  );
}

function compareCell(row, stay, compare, block) {
  if (row.kind === "type") return row.labels[stay.facts.type] || compare.ask;
  if (row.kind === "line") return lineLabel(stay, compare.line || block.card.line) || compare.ask;
  if (row.kind === "price") return stay.price ? `From \u20B9${stay.price.toLocaleString("en-IN")}` : "Ask on WhatsApp";
  if (row.kind === "bool") {
    return stay.facts[row.fact] === true ? (
      <strong className="text-emerald-700 dark:text-emerald-400">{compare.yes}</strong>
    ) : (
      <span className="text-gray-500 dark:text-gray-400">{compare.ask}</span>
    );
  }
  return null;
}

function StayCard({ stay, block, site, whatsapp, priority, comparing, checked, disabled, onToggle }) {
  const { card, cta } = block;
  const line = lineLabel(stay, card.line);
  const chips = chipLabels(stay, card.chips);
  const message = buildStayMessage(block.message, stay, site);
  const number = stay.whatsapp || whatsapp;
  const claimed = card.listedLabel && stay.facts.claim && stay.listed.length > 0;

  return (
    <article className="card flex flex-col overflow-hidden">
      <div className="relative aspect-[16/10] bg-gradient-to-br from-primary to-secondary">
        {stay.image ? (
          <Image
            src={stay.image.url}
            alt={stay.image.alt}
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw"
            className="object-cover"
            priority={priority}
          />
        ) : (
          <span aria-hidden="true" className="absolute bottom-3 left-4 font-display text-4xl font-bold text-white/90">
            {stay.name.charAt(0)}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <h3 className="font-display text-lg font-semibold text-primary dark:text-white">
          <Link href={`/hotels/${stay.slug}`} className="hover:underline">
            {stay.name}
          </Link>
        </h3>
        {line && <p className="text-sm font-semibold text-primary dark:text-gray-100">{line}</p>}
        {chips.length > 0 && (
          <ul className="flex flex-wrap gap-1.5">
            {chips.map((c) => (
              <li key={c} className={tagCls}>
                {c}
              </li>
            ))}
          </ul>
        )}
        {stay.blurb && <p className="text-sm text-gray-500 dark:text-gray-400">{stay.blurb}</p>}
        {claimed && (
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>{card.listedLabel}</strong>
            {stay.listed.join(", ")}
          </p>
        )}
        {card.unverifiedLabel && (
          <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">{card.unverifiedLabel}</p>
        )}
        <p className="font-bold text-primary dark:text-white">{formatPrice(stay.price)}</p>

        {comparing && (
          <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200">
            <input
              type="checkbox"
              className="h-[18px] w-[18px] accent-secondary"
              checked={checked}
              disabled={disabled}
              onChange={onToggle}
            />
            {block.compare.checkboxLabel}
            <span className="sr-only"> {stay.name}</span>
          </label>
        )}

        <div className="mt-auto flex flex-col gap-2 pt-1">
          <a href={waLink(number, message)} target="_blank" rel="noopener noreferrer" className={waBtn}>
            <FaWhatsapp aria-hidden="true" /> {cta}
          </a>
          <Link href={`/hotels/${stay.slug}`} className="text-center text-sm font-medium text-secondary hover:underline">
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}