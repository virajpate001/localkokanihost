// src/components/seo-guide/GuideMarkdown.jsx
// Renders the Markdown used in guide content. Server Component (react-markdown
// is pure React), so all text lands in the initial HTML for search engines.
//   - [text](guide:some-slug)  → internal link, or plain text if not live yet
//   - > quote                   → the "pick" call-out box
//   - tables                    → horizontally scrollable on small screens
// Raw HTML in the Markdown is never executed (no rehype-raw — keep it that way).
import ReactMarkdown, { defaultUrlTransform } from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import GuideLink from "./GuideLink";

// react-markdown strips unknown URL schemes (it would turn `guide:slug` into an
// empty href and silently kill every internal link). Allow our own `guide:`
// scheme and leave the default sanitizer in charge of everything else, so
// `javascript:` and similar URLs are still blocked.
const urlTransform = (url) => (url.startsWith("guide:") ? url : defaultUrlTransform(url));

export default function GuideMarkdown({ md, live, dark = false, className = "" }) {
  const components = {
    a({ href = "", children }) {
      if (href.startsWith("guide:")) {
        const slug = href.slice(6);
        return (
          <GuideLink slug={slug} live={live.has(slug)}>
            {children}
          </GuideLink>
        );
      }
      if (/^https?:\/\//.test(href)) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      }
      if (href.startsWith("#")) return <a href={href}>{children}</a>;
      return <Link href={href}>{children}</Link>;
    },
    blockquote({ children }) {
      return (
        <div className="not-prose my-4 rounded-r-xl border-l-4 border-accent bg-gray-50 dark:bg-gray-800/60 px-4 py-3.5 text-gray-700 dark:text-gray-200 [&>p]:m-0 [&_a]:font-semibold [&_a]:text-secondary [&_a:hover]:underline">
          {children}
        </div>
      );
    },
    table({ children }) {
      return (
        <div className="my-4 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
          <table className="!my-0 min-w-[34rem] text-[0.95rem]">{children}</table>
        </div>
      );
    },
  };

  const tone = dark
    ? "prose-invert prose-a:text-accent prose-strong:text-white prose-p:text-white/85"
    : "dark:prose-invert prose-a:text-secondary prose-strong:text-primary dark:prose-strong:text-white";

  return (
    <div
      className={`prose max-w-none prose-p:leading-relaxed prose-a:font-medium prose-a:no-underline hover:prose-a:underline ${tone} ${className}`}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components} urlTransform={urlTransform}>
        {md}
      </ReactMarkdown>
    </div>
  );
}