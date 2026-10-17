// src/components/seo-guide/GuideBands.jsx
// Small presentational sections: answer box, "plan your trip" link band,
// hub cluster grid, long-text band and the closing CTA band.
import GuideLink from "./GuideLink";
import GuideMarkdown from "./GuideMarkdown";
import { h2Cls, h3Cls, accentBtn } from "./guideStyles";
import { waLink } from "@/lib/guideLogic";

export function AnswerBox({ block, live }) {
  return (
    <section className="pt-9">
      <div className="container-custom">
        <div className="card max-w-3xl border-l-8 border-accent !rounded-l-none p-6 md:p-7">
          <h2 className={`${h3Cls} mb-3`}>{block.heading}</h2>
          <GuideMarkdown md={block.md} live={live} />
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

export function CtaBand({ block, live, whatsapp }) {
  const { button } = block;

  // Three button variants:
  //   1. guide: "slug"        → internal guide link (hidden if the guide isn't live)
  //   2. wa: true + waMessage → opens WhatsApp with a prefilled message
  //   3. href: "/path"        → any plain URL
  let action = null;
  if (button.guide) {
    if (live.has(button.guide)) {
      action = (
        <GuideLink slug={button.guide} live className={accentBtn}>
          {button.label}
        </GuideLink>
      );
    }
    // A guide CTA whose target isn't live is hidden, not shown as dead text.
  } else if (button.wa && whatsapp) {
    action = (
      <a
        href={waLink(whatsapp, button.waMessage || "")}
        target="_blank"
        rel="noopener noreferrer"
        className={accentBtn}
      >
        {button.label}
      </a>
    );
  } else if (button.href) {
    action = (
      <a href={button.href} className={accentBtn}>
        {button.label}
      </a>
    );
  }

  return (
    <section className="bg-secondary py-10 md:py-12 text-white">
      <div className="container-custom">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">{block.heading}</h2>
        {block.text && <p className="mb-5 max-w-2xl text-white/90">{block.text}</p>}
        {action}
      </div>
    </section>
  );
}