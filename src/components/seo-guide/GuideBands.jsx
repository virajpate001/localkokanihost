// src/components/seo-guide/GuideBands.jsx
// Small presentational sections: answer box, "plan your trip" link band,
// hub cluster grid, long-text band and the closing CTA band.
import GuideLink from "./GuideLink";
import GuideMarkdown from "./GuideMarkdown";
import { h2Cls, h3Cls, accentBtn } from "./guideStyles";

export function AnswerBox({ block, live }) {
   const now = block.now ? renderNow(block.now) : null;
   
  return (
    <section className="pt-9">
      <div className="container-custom">
        <div className="card max-w-3xl border-l-8 border-accent !rounded-l-none p-6 md:p-7">
          <h2 className={`${h3Cls} mb-3`}>{block.heading}</h2>
          <GuideMarkdown md={block.md} live={live} />
          {now && (
            <div className="mt-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/60 px-3.5 py-3 text-gray-800 dark:text-gray-200">
              {now}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function PlanBand({ block, live }) {
  return (
    <section id={block.id} className="scroll-mt-28 bg-primary py-14 md:py-16 text-white">
      <div className="container-custom">
        <h2 className="font-display font-bold text-2xl md:text-4xl text-white">{block.heading}</h2>
        {block.sub && <p className="mt-2 text-white/70">{block.sub}</p>}
        <div className="mt-8 grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]">
          {block.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-3 font-display text-lg font-semibold text-accent">{col.heading}</h3>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <GuideLink
                      slug={l.guide}
                      live={live.has(l.guide)}
                      className="text-white/90 underline-offset-4 hover:text-white hover:underline"
                      softClass="text-white/50"
                    >
                      {l.label}
                    </GuideLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {block.footer && <GuideMarkdown md={block.footer} live={live} dark className="mt-8" />}
      </div>
    </section>
  );
}

export function ClusterGrid({ block, live }) {
  return (
    <section className="py-12 md:py-14">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        <p className="mt-3 mb-8 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          {block.clusters.map((cluster) => (
            <div key={cluster.heading} className="card p-6">
              <h3 className="font-display font-semibold text-xl text-primary dark:text-white">{cluster.heading}</h3>
              <p className="mt-1 mb-3 text-sm text-gray-500 dark:text-gray-400">{cluster.desc}</p>
              <ul>
                {cluster.links.map((l) => (
                  <li key={l.label} className="border-t border-gray-200 dark:border-gray-800 py-2 first:border-t-0">
                    <GuideLink
                      slug={l.guide}
                      live={live.has(l.guide)}
                      className="font-semibold text-secondary hover:underline"
                    >
                      {l.label}
                    </GuideLink>
                    {l.desc && <span className="block text-sm text-gray-500 dark:text-gray-400">{l.desc}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProseBand({ block, live }) {
  return (
    <section className="border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-12 md:py-14">
      <div className="container-custom">
        <div className="max-w-[70ch]">
          <h2 className={`${h2Cls} mb-5`}>{block.heading}</h2>
          <GuideMarkdown md={block.md} live={live} />
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ block, live }) {
  const target = block.button.guide;
  return (
    <section className="bg-secondary py-10 md:py-12 text-white">
      <div className="container-custom">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">{block.heading}</h2>
        <p className="mb-5 max-w-2xl text-white/90">{block.text}</p>
        {live.has(target) && (
          <GuideLink slug={target} live className={accentBtn}>
            {block.button.label}
          </GuideLink>
        )}
      </div>
    </section>
  );
}

function renderNow(cfg) {
  const month = new Date().getMonth() + 1;
  const monthName = cfg.months[month - 1];
  let seasonKey = null;
  for (const [key, def] of Object.entries(cfg.seasons)) {
    if (def.months.includes(month)) {
      seasonKey = key;
      break;
    }
  }
  if (!seasonKey) return null;
  const season = cfg.seasons[seasonKey];
  const edge = season.edge?.[month] ? `${season.edge[month]} ` : "";

  return (
    <>
      <strong>Right now ({monthName}): </strong>
      {season.name} ({season.range}). {edge}
      {season.watch}
    </>
  );
}