// src/components/seo-guide/GuideProse.jsx
// The long-form guide: sticky "On this page" TOC + sections of Markdown.
// A section body is a list of parts: a Markdown string, or a widget object
// (currently only { widget: "builder" }).
import GuideMarkdown from "./GuideMarkdown";
import MessageBuilder from "./MessageBuilder";
import { h2Cls, h3Cls } from "./guideStyles";

export default function GuideProse({ block, live, site, whatsapp }) {
  return (
    <section className="border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-14 md:py-16">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[230px_minmax(0,1fr)]">
          <nav aria-label="On this page" className="hidden lg:block sticky top-28 self-start text-sm">
            <strong className="mb-2 block text-primary dark:text-white">On this page</strong>
            <ol className="border-l-2 border-gray-200 dark:border-gray-800">
              {block.toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block px-3.5 py-1.5 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="min-w-0 max-w-[68ch]">
            <h2 className={`${h2Cls} mb-8`}>{block.heading}</h2>
            {block.sections.map((section) => (
              <section key={section.id} id={section.id} className="mb-11 scroll-mt-28">
                <h3 className={`${h3Cls} mb-3`}>{section.title}</h3>
                {section.body.map((part, i) =>
                  typeof part === "string" ? (
                    <GuideMarkdown key={i} md={part} live={live} />
                  ) : (
                    <MessageBuilder key={i} config={part} site={site} whatsapp={whatsapp} />
                  )
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}