// src/components/seo-guide/SeasonBar.jsx
// Static 12-month colour-coded strip. No interactivity, so it can be a Server
// Component. Bands map to your theme tokens (emerald / accent / sky / gray),
// not the original HTML's custom CSS variables.
import GuideMarkdown from "./GuideMarkdown";
import { h2Cls } from "./guideStyles";

const BAND_CLS = {
  best:    "bg-emerald-600 text-white",
  fair:    "bg-accent text-primary",
  monsoon: "bg-sky-700 text-white",
  off:     "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
};

export default function SeasonBar({ block, live }) {
  return (
    <section id={block.id} className="scroll-mt-28 py-10 md:py-12">
      <div className="container-custom">
        {block.heading && <h2 className={h2Cls}>{block.heading}</h2>}

        {block.sub && (
          <p className="mt-3 mb-5 max-w-2xl text-gray-500 dark:text-gray-400">
            {block.sub}
          </p>
        )}

        <div
          role="img"
          aria-label={block.ariaLabel}
          className="my-3 grid max-w-[640px] grid-cols-12 gap-[3px]"
        >
          {block.months.map((m) => (
            <span
              key={m.label}
              className={`flex h-[34px] items-end justify-center rounded-[4px] pb-[2px] text-[0.7rem] font-medium ${
                BAND_CLS[m.band] || BAND_CLS.off
              }`}
            >
              {m.label}
            </span>
          ))}
        </div>

        {block.legend?.length > 0 && (
          <p className="mt-1.5 flex flex-wrap gap-3.5 text-sm text-gray-500 dark:text-gray-400">
            {block.legend.map((l) => (
              <span key={l.band} className="inline-flex items-center">
                <span
                  aria-hidden="true"
                  className={`mr-1.5 inline-block h-3.5 w-3.5 rounded-[3px] ${
                    BAND_CLS[l.band] || BAND_CLS.off
                  }`}
                />
                {l.label}
              </span>
            ))}
          </p>
        )}

        {block.fine && (
          <GuideMarkdown
            md={block.fine}
            live={live}
            className="mt-3 max-w-[70ch] text-sm prose-sm"
          />
        )}
      </div>
    </section>
  );
}