// src/components/seo-guide/GuidePage.jsx
// Renders one SEO guide from its content object (src/content/seo-guides/*).
// The app's Navbar/Footer/<main> come from the root layout, so this renders
// only the page body. Everything except the interactive widgets is rendered on
// the server so the full text is in the HTML crawlers receive.
import JsonLd from "@/components/ui/JsonLd";
import { generateFaqSchema } from "@/utils/helpers";
import { SITE_NAME } from "@/lib/siteConfig";
import { getLiveSlugs } from "@/lib/guideLinks";
import { mdToPlain } from "@/lib/guideLogic";
import GuideHero from "./GuideHero";
import GuideProse from "./GuideProse";
import GuideFaq from "./GuideFaq";
import StaysSection from "./StaysSection";
import FamilyPlanner from "./FamilyPlanner";
import ClaimChecker from "./ClaimChecker";
import HubSteps from "./HubSteps";
import { AnswerBox, PlanBand, ClusterGrid, ProseBand, CtaBand } from "./GuideBands";
import QuizBlock from "./QuizBlock";


export default async function GuidePage({ guide }) {
  const live = await getLiveSlugs();
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

  const faqItems = guide.blocks
    .filter((b) => b.type === "faq")
    .flatMap((b) => b.groups.flatMap((g) => g.items))
    .map((i) => ({ question: i.q, answer: mdToPlain(i.a) }));
  const faqSchema = generateFaqSchema(faqItems);

  const renderBlock = (block, i) => {
    switch (block.type) {
      case "answer":
        return <AnswerBox key={i} block={block} live={live} />;
      case "stays":
        return <StaysSection key={i} block={block} live={live} site={SITE_NAME} whatsapp={whatsapp} />;
      case "planner":
        return (
          <FamilyPlanner
            key={i}
            block={block}
            site={SITE_NAME}
            whatsapp={whatsapp}
            luxuryLive={live.has("luxury-hotels-resorts-diveagar")}
          />
        );
      case "checker":
        return <ClaimChecker key={i} block={block} site={SITE_NAME} whatsapp={whatsapp} />;
      case "guide":
        return <GuideProse key={i} block={block} live={live} site={SITE_NAME} whatsapp={whatsapp} />;
      case "faq":
        return <GuideFaq key={i} block={block} live={live} />;
      case "plan":
        return <PlanBand key={i} block={block} live={live} />;
      case "steps":
        return <HubSteps key={i} block={block} liveSlugs={[...live]} />;
      case "clusters":
        return <ClusterGrid key={i} block={block} live={live} />;
      case "prose":
        return <ProseBand key={i} block={block} live={live} />;
      case "cta":
        return <CtaBand key={i} block={block} live={live} />;
        case "quiz":
  return <QuizBlock key={i} block={block} live={live} />;
      default:
        return null;
    }
  };

  return (
    <>
      {faqSchema && <JsonLd data={faqSchema} />}
      <GuideHero guide={guide} live={live} />
      {guide.blocks.map(renderBlock)}
    </>
  );
}