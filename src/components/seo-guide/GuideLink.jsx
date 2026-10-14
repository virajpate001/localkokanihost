// src/components/seo-guide/GuideLink.jsx
// Internal link to another guide. If that page isn't live yet it renders as
// plain text with a dotted underline instead of a link that would 404.
// No hooks / server-only imports, so it works in Server and Client Components.
import Link from "next/link";

export default function GuideLink({ slug, live, className = "", softClass = "", children }) {
  if (!live) {
    return (
      <span
        title="Coming soon"
        className={`cursor-default border-b border-dotted border-current opacity-70 ${softClass}`}
      >
        {children}
      </span>
    );
  }
  return (
    <Link href={`/${slug}`} className={className}>
      {children}
    </Link>
  );
}