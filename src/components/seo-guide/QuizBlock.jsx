// src/components/seo-guide/QuizBlock.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import GuideLink from "./GuideLink";
import { panelCls, h2Cls } from "./guideStyles";

// Verdict band colours mirror ClaimChecker's VERDICT_STYLE.
const BAND_STYLE = {
  good: "border-emerald-600 bg-white dark:bg-gray-950",
  mid: "border-accent bg-white dark:bg-gray-950",
  bad: "border-secondary bg-white dark:bg-gray-950",
};

function NextLink({ slug, live, children }) {
  if (!live) {
    return <span className="cursor-default border-b border-dotted border-current opacity-70">{children}</span>;
  }
  return (
    <Link href={`/${slug}`} className="font-medium text-secondary hover:underline">
      {children}
    </Link>
  );
}

export default function QuizBlock({ block, live }) {
  const [answers, setAnswers] = useState({});
  const done = block.questions.filter((q) => answers[q.id] !== undefined).length;
  const complete = done === block.questions.length;

  let result = null;
  if (complete) {
    let score = 0;
    const reasons = [];
    const cautions = [];
    block.questions.forEach((q) => {
      const opt = q.opts[answers[q.id]];
      score += opt.s;
      (opt.s === 2 ? reasons : cautions).push(opt.why);
    });
    const band = block.verdicts.bands.find((b) => score >= b.min) || block.verdicts.bands.at(-1);
    result = { reasons, cautions, band };
  }

  const set = (qid, oi) => setAnswers((a) => ({ ...a, [qid]: oi }));

  return (
    <section id={block.id} className="scroll-mt-28 border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-12 md:py-14">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>

        <div className={`max-w-[860px] ${panelCls} !bg-gray-50 dark:!bg-gray-950`}>
          <div className="mb-5">
            {block.questions.map((q, qi) => (
              <fieldset key={q.id} className="mb-4 border-0 p-0">
                <legend className="mb-2 font-semibold text-primary dark:text-white">
                  {qi + 1}. {q.q}
                </legend>
                {q.opts.map((o, oi) => (
                  <label
                    key={oi}
                    className="mb-2 flex cursor-pointer items-start gap-2.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-3 py-2.5 text-gray-800 dark:text-gray-200 has-[:checked]:border-primary has-[:checked]:bg-white dark:has-[:checked]:bg-gray-950"
                  >
                    <input
                      type="radio"
                      name={`${block.id}-${q.id}`}
                      className="mt-1.5 h-[18px] w-[18px] accent-secondary"
                      checked={answers[q.id] === oi}
                      onChange={() => set(q.id, oi)}
                    />
                    {o.t}
                  </label>
                ))}
              </fieldset>
            ))}
          </div>

          <div
            aria-live="polite"
            className={`rounded-xl border-l-[6px] p-4 font-medium ${
              result ? BAND_STYLE[result.band.kind] : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-500 dark:text-gray-400"
            }`}
          >
            {!complete && <p>Answered {done} of {block.questions.length}.</p>}
            {complete && result && (
              <>
                <strong className="block text-lg font-display text-primary dark:text-white">
                  {result.band.title}
                </strong>
                {result.reasons.length > 0 && (
                  <>
                    <p className="mt-2 font-bold text-primary dark:text-white">Why it fits:</p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 font-normal">
                      {result.reasons.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </>
                )}
                {result.cautions.length > 0 && (
                  <>
                    <p className="mt-3 font-bold text-primary dark:text-white">Things to think about:</p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 font-normal">
                      {result.cautions.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </>
                )}
              </>
            )}
          </div>

          {result && (
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {result.band.compare ? (
                <>
                  Next: compare{" "}
                  <NextLink slug="best-konkan-beaches-compared" live={live.has("best-konkan-beaches-compared")}>
                    Konkan beaches
                  </NextLink>
                  , or see{" "}
                  <NextLink slug="diveagar-vs-alibaug" live={live.has("diveagar-vs-alibaug")}>
                    Diveagar vs Alibaug
                  </NextLink>
                  .
                </>
              ) : (
                <>
                  Next:{" "}
                  <NextLink slug="what-is-diveagar-famous-for" live={live.has("what-is-diveagar-famous-for")}>
                    see what Diveagar is famous for
                  </NextLink>
                  ,{" "}
                  <NextLink slug="best-time-to-visit-diveagar" live={live.has("best-time-to-visit-diveagar")}>
                    pick your dates
                  </NextLink>
                  , then{" "}
                  <NextLink slug="best-hotels-in-diveagar" live={live.has("best-hotels-in-diveagar")}>
                    choose a hotel
                  </NextLink>
                  .
                </>
              )}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}