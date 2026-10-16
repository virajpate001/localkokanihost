// src/components/seo-guide/DayOutline.jsx
// Static 2-column day plan: each day has title + time-of-day rows (label → md).
import GuideMarkdown from "./GuideMarkdown";
import { h2Cls, h3Cls } from "./guideStyles";

export default function DayOutline({ block, live }) {
  return (
    <section id={block.id} className="scroll-mt-28 py-10 md:py-12">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
          {block.days.map((day, i) => (
            <article key={i} className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
              <h3 className={`${h3Cls} !text-lg mb-3`}>{day.title}</h3>
              <dl>
                {day.items.map((item, j) => (
                  <div key={j}>
                    <dt className="mt-3 font-bold text-primary dark:text-white first:mt-0">
                      {item.label}
                    </dt>
                    <dd className="mt-0.5 text-gray-800 dark:text-gray-200">
                      <GuideMarkdown md={item.md} live={live} />
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}