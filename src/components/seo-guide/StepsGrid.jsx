// src/components/seo-guide/StepsGrid.jsx
// Static numbered steps as a responsive card grid. Distinct from HubSteps,
// which is interactive (tabs → guide links). Each step body is Markdown, so
// (guide:slug) links resolve to real links only once those pages exist.
import GuideMarkdown from "./GuideMarkdown";
import { h2Cls, h3Cls } from "./guideStyles";

export default function StepsGrid({ block, live }) {
  return (
    <section id={block.id} className="scroll-mt-28 py-10 md:py-12">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        {block.sub && (
          <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">
            {block.sub}
          </p>
        )}

        <ol className="grid list-none gap-4 p-0 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          {block.steps.map((s, i) => (
            <li
              key={i}
              data-step={i + 1}
              className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-5 py-5 pl-16 before:absolute before:left-4 before:top-4 before:flex before:h-[34px] before:w-[34px] before:items-center before:justify-center before:rounded-full before:bg-primary before:font-display before:text-lg before:font-bold before:text-white before:content-[attr(data-step)]"
            >
              <h3 className={`${h3Cls} !text-lg mb-1.5`}>{s.title}</h3>
              <GuideMarkdown md={s.md} live={live} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}