// src/components/seo-guide/StayTypeFinder.jsx
"use client";

import { useMemo, useState } from "react";
import GuideLink from "./GuideLink";
import { h2Cls } from "./guideStyles";

// Weighted stay-type finder. Three radio questions; each option adds points to
// one or more stay types. The two highest-scoring types are shown, with a link
// and a one-line reason each.
//
// Scoring shape: questions[i].options[j].points = { stayKey: score, ... }
// Stay type metadata (name, slug, reason) lives in block.stayTypes.
export default function StayTypeFinder({ block, live }) {
  const [answers, setAnswers] = useState(() => block.questions.map(() => null));

  const result = useMemo(() => {
    const complete = answers.every((a) => a !== null);
    if (!complete) return null;

    const totals = {};
    block.questions.forEach((q, qi) => {
      const pts = q.options[answers[qi]].points;
      for (const k in pts) {
        totals[k] = (totals[k] || 0) + pts[k];
      }
    });

    const top = Object.keys(totals)
      .sort((a, b) => totals[b] - totals[a])
      .slice(0, 2)
      .map((k) => ({ key: k, ...block.stayTypes[k], score: totals[k] }));

    return { top };
  }, [answers, block]);

  return (
    <section id={block.id} className="scroll-mt-28 py-12 md:py-14">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-5 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}

        <form onSubmit={(e) => e.preventDefault()}>
          {block.questions.map((q, qi) => (
            <fieldset
              key={qi}
              className="mb-3 max-w-[640px] rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3"
            >
              <legend className="px-1.5 font-display font-bold text-primary dark:text-white">
                {q.legend}
              </legend>
              {q.options.map((o, oi) => (
                <label
                  key={oi}
                  className="mr-4 inline-flex cursor-pointer items-center gap-1.5 py-1 text-gray-800 dark:text-gray-200"
                >
                  <input
                    type="radio"
                    name={`${block.id}-q${qi}`}
                    className="accent-secondary"
                    checked={answers[qi] === oi}
                    onChange={() =>
                      setAnswers((a) => a.map((v, i) => (i === qi ? oi : v)))
                    }
                  />
                  {o.label}
                </label>
              ))}
            </fieldset>
          ))}
        </form>

        <div
          aria-live="polite"
          className="max-w-[640px] rounded-xl border border-gray-200 dark:border-gray-800 border-l-[6px] border-accent bg-white dark:bg-gray-900 px-5 py-4"
        >
          {!result && (
            <p className="m-0 text-gray-500 dark:text-gray-400">{block.hintEmpty}</p>
          )}
          {result && (
            <>
              <strong className="block font-display text-xl text-primary dark:text-white">
                {block.resultHeading}
              </strong>
              {result.top.map((t) => (
                <p key={t.key} className="mt-2 mb-0 text-gray-800 dark:text-gray-200">
                  <strong>
                    <GuideLink
                      slug={t.slug}
                      live={live.has(t.slug)}
                      className="text-secondary hover:underline"
                      softClass="text-gray-500 dark:text-gray-400 border-b border-dotted border-current"
                    >
                      {t.name}
                    </GuideLink>
                  </strong>
                  : {t.reason}
                </p>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}