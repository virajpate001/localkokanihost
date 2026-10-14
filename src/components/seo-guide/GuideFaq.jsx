// src/components/seo-guide/GuideFaq.jsx
// Native <details>/<summary>: every answer is in the server-rendered HTML (good
// for SEO), works without JavaScript, and answers can contain internal links.
import GuideMarkdown from "./GuideMarkdown";
import { h2Cls, h3Cls } from "./guideStyles";

export default function GuideFaq({ block, live }) {
  return (
    <section id={block.id} className="scroll-mt-28 py-14 md:py-16">
      <div className="container-custom max-w-3xl">
        <h2 className={`${h2Cls} mb-6`}>{block.heading}</h2>
        {block.groups.map((group, gi) => (
          <div key={gi}>
            {group.heading && <h3 className={`${h3Cls} mt-9 mb-3 !text-xl`}>{group.heading}</h3>}
            {group.items.map((item) => (
              <details
                key={item.q}
                open={item.open}
                className="group mb-2.5 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm"
              >
                <summary className="relative cursor-pointer list-none py-4 pl-5 pr-12 font-semibold text-primary dark:text-white [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl leading-none text-secondary transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5">
                  <GuideMarkdown md={item.a} live={live} />
                </div>
              </details>
            ))}
          </div>
        ))}
        {block.footer && <GuideMarkdown md={block.footer} live={live} className="mt-6" />}
      </div>
    </section>
  );
}