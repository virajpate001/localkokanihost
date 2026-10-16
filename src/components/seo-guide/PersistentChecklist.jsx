// src/components/seo-guide/PersistentChecklist.jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { h2Cls, h3Cls } from "./guideStyles";

// Grouped checklist that persists to localStorage. Starts unchecked on both
// server and client (no SSR mismatch); hydrates stored state in an effect.
//
// block shape:
//   id, heading, storageKey,
//   groups: [{ title, items: [{ t, slug?, link? }] }],
//   progressLabel, countTemplate ("{done} of {total} done"),
//   resetLabel,
export default function PersistentChecklist({ block, live }) {
  const [state, setState] = useState({});
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage once, on the client only.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(block.storageKey);
      if (raw) setState(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, [block.storageKey]);

  // Persist on every change (after hydration).
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(block.storageKey, JSON.stringify(state));
    } catch {}
  }, [state, hydrated, block.storageKey]);

  const total = useMemo(
    () => block.groups.reduce((n, g) => n + g.items.length, 0),
    [block.groups]
  );
  const done = useMemo(
    () => Object.values(state).filter(Boolean).length,
    [state]
  );

  function toggle(id) {
    setState((s) => {
      const next = { ...s };
      if (next[id]) delete next[id];
      else next[id] = true;
      return next;
    });
  }

  function reset() {
    setState({});
  }

  return (
    <section id={block.id} className="scroll-mt-28 py-10 md:py-12">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>

        <div className="max-w-[860px] mb-4">
          <progress
            value={done}
            max={total}
            aria-label={block.progressLabel}
            className="h-3 w-full accent-secondary"
          />
          <p aria-live="polite" className="mt-1.5 mb-3.5 font-bold text-primary dark:text-white">
            {block.countTemplate
              .replace("{done}", String(done))
              .replace("{total}", String(total))}
          </p>
          <button
            type="button"
            onClick={reset}
            className="cursor-pointer border-0 bg-none p-0 font-inherit text-secondary underline underline-offset-2 hover:text-primary"
          >
            {block.resetLabel}
          </button>
        </div>

        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
          {block.groups.map((g, gi) => (
            <section key={gi} className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
              <h3 className={`${h3Cls} !text-lg mb-2.5`}>{g.title}</h3>
              <ul className="m-0 list-none space-y-2 p-0">
                {g.items.map((it, ii) => {
                  const id = `${gi}-${ii}`;
                  const checked = !!state[id];
                  return (
                    <li key={id}>
                      <label className="flex cursor-pointer items-start gap-2.5 text-gray-800 dark:text-gray-200">
                        <input
                          type="checkbox"
                          className="mt-1.5 h-[18px] w-[18px] accent-secondary"
                          checked={checked}
                          onChange={() => toggle(id)}
                        />
                        <span>
                          {it.t}
                          {it.slug && it.link && (
                            <>
                              {" "}
                              {live.has(it.slug) ? (
                                <Link
                                  href={`/${it.slug}`}
                                  className="whitespace-nowrap text-sm font-medium text-secondary hover:underline"
                                >
                                  {it.link}
                                </Link>
                              ) : (
                                <span
                                  title="Coming soon"
                                  className="whitespace-nowrap text-sm text-gray-500 border-b border-dotted border-current opacity-70 dark:text-gray-400"
                                >
                                  {it.link}
                                </span>
                              )}
                            </>
                          )}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}