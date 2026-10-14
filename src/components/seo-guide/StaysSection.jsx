// src/components/seo-guide/StaysSection.jsx
// Server Component: loads the destination's real hotels, applies the page's
// "which hotels belong here" rule, resolves link liveness on the server, and
// hands the client chooser only plain, minimal data.
import { getGuideStays } from "@/lib/guideStays";
import { selectStays } from "@/lib/guideLogic";
import StayExplorer from "./StayExplorer";
import GuideMarkdown from "./GuideMarkdown";
import { h2Cls } from "./guideStyles";

export default async function StaysSection({ block, live, site, whatsapp }) {
  const all = await getGuideStays(block.destinationSlug);
  const stays = selectStays(all, block.include);

  const explorerBlock = {
    filterAriaLabel: block.filterAriaLabel,
    filters: block.filters.map(({ guide, ...f }) => ({
      ...f,
      moreHref: guide && live.has(guide) ? `/${guide}` : null,
    })),
    card: block.card,
    message: block.message,
    cta: block.cta,
    empty: block.empty,
    sort: block.sort || null,
    compare: block.compare || null,
    finder: block.finder || null,
  };

  return (
    <section id={block.id} className="scroll-mt-28 py-12 md:py-14">
      <div className="container-custom">
        <h2 className={h2Cls}>{block.heading}</h2>
        <p className="mt-3 mb-6 max-w-2xl text-gray-500 dark:text-gray-400">{block.sub}</p>
        <StayExplorer block={explorerBlock} stays={stays} site={site} whatsapp={whatsapp}>
          {block.fine && <GuideMarkdown md={block.fine} live={live} className="mt-6 prose-sm" />}
        </StayExplorer>
      </div>
    </section>
  );
}