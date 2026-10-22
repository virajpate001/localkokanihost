// src/components/seo-guide/NumberedSteps.jsx
// Static ordered list of steps, each with a numbered badge, a bold title and
// a markdown body. Different from StepsGrid (which lays out cards in a grid)
// and from HubSteps (which is interactive tabs → guide links).
import GuideMarkdown from "./GuideMarkdown";
import { h2Cls } from "./guideStyles";

export default function NumberedSteps({ block, live }) {
  return (
    <section id={block.id} className="scroll-mt-28 py-10 md:py-12">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        )}
        <ol className="m-0 max-w-[70ch] list-none p-0 [counter-reset:step]">
          {block.steps.map((s, i) => (
            <li
              key={i}
              className="mb-4 grid gap-x-3 [grid-template-columns:2.2rem_1fr] [counter-increment:step]"
            >
              <span
                aria-hidden="true"
                className="flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full bg-accent font-display text-base font-bold text-primary before:content-[counter(step)]"
              />
              <div className="min-w-0">
                <strong className="font-display font-bold text-primary dark:text-white">
                  {s.title}.
                </strong>{" "}
                <span className="text-gray-800 dark:text-gray-200">
                  <GuideMarkdown md={s.md} live={live} className="inline prose-sm" />
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}