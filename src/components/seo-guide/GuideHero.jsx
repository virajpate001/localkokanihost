// src/components/seo-guide/GuideHero.jsx
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import GuideLink from "./GuideLink";
import { accentBtn, ghostBtn } from "./guideStyles";

export default function GuideHero({ guide, live }) {
  const { hero, trail, slug } = guide;
  const crumbs = trail.map((t) => ({ name: t.name, url: `/${t.slug || slug}` }));

  return (
    <section className="relative bg-hero-gradient text-white pt-6">
      <Breadcrumbs items={crumbs} />
      <div className="container-custom pt-6 pb-20 md:pb-24">
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.08] max-w-3xl">
          {hero.h1}
        </h1>
        <p className="mt-5 max-w-2xl text-lg md:text-xl text-white/85">{hero.lead}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {hero.buttons.map((b) => {
            const cls = b.variant === "primary" ? accentBtn : ghostBtn;
            if (b.guide) {
              // A CTA to a page that doesn't exist yet is hidden, not shown as dead text.
              if (!live.has(b.guide)) return null;
              return (
                <GuideLink key={b.label} slug={b.guide} live className={cls}>
                  {b.label}
                </GuideLink>
              );
            }
            return (
              <a key={b.label} href={b.href} className={cls}>
                {b.label}
              </a>
            );
          })}
        </div>
      </div>
      {/* wave into the page background */}
      <div aria-hidden="true" className="absolute inset-x-0 -bottom-px h-8 md:h-11 text-gray-50 dark:text-gray-950">
        <svg viewBox="0 0 1440 44" preserveAspectRatio="none" className="h-full w-full">
          <path fill="currentColor" d="M0 28c120 14 240 14 360 2s240-18 360-6 240 18 360 8 240-14 360-4v16H0z" />
        </svg>
      </div>
    </section>
  );
}