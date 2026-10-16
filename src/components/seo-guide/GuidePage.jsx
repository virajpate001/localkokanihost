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
import QuizBlock from "./QuizBlock";
import HighlightsBlock from "./HighlightsBlock";
import MonthCalendar from "./MonthCalendar";
import RoutesBlock from "./RoutesBlock";
import JourneyPlanner from "./JourneyPlanner";
import StepsGrid from "./StepsGrid";
import BookingBuilder from "./BookingBuilder";
import PayChecklist from "./PayChecklist";
import MealPlan from "./MealPlan";
import { AnswerBox, PlanBand, ClusterGrid, ProseBand, CtaBand } from "./GuideBands";
import { PageFilterProvider } from "./PageFilterContext";
import DayOutline from "./DayOutline";
import ItineraryBuilder from "./ItineraryBuilder";
import TimeBudgetCalculator from "./TimeBudgetCalculator";
import NearbyChecker from "./NearbyChecker";


export default async function GuidePage({ guide }) {
  const live = await getLiveSlugs();
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

  const faqItems = guide.blocks
    .filter((b) => b.type === "faq")
    .flatMap((b) => b.groups.flatMap((g) => g.items))
    .map((i) => ({ question: i.q, answer: mdToPlain(i.a) }));
  const faqSchema = generateFaqSchema(faqItems);

  // Shared page filter is only needed for guides that use blocks which must
  // coordinate with each other (e.g. MealPlan driving StaysSection). Wrapping
  // every guide would be harmless but adds an unnecessary client boundary.
  const needsFilterProvider = guide.blocks.some((b) => b.type === "mealPlan");

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

      // --- New block types added across the recent conversions ---
      case "quiz":
        return <QuizBlock key={i} block={block} live={live} />;
      case "highlights":
        return <HighlightsBlock key={i} block={block} live={live} whatsapp={whatsapp} />;
      case "picker":
        return <Picker key={i} block={block} live={live} />;
      case "monthCalendar":
        return <MonthCalendar key={i} block={block} live={live} />;
      case "routes":
        return <RoutesBlock key={i} block={block} live={live} />;
      case "journeyPlanner":
        return <JourneyPlanner key={i} block={block} whatsapp={whatsapp} />;
      case "stepsGrid":
        return <StepsGrid key={i} block={block} live={live} />;
      case "bookingBuilder":
        return <BookingBuilder key={i} block={block} whatsapp={whatsapp} />;
      case "checklist":
        return <PayChecklist key={i} block={block} />;
      case "mealPlan":
        return <MealPlan key={i} block={block} />;
      case "dayOutline":
        return <DayOutline key={i} block={block} live={live} />;
      case "itineraryBuilder":
        return <ItineraryBuilder key={i} block={block} live={live} />;
      case "timeBudgetCalculator":
        return <TimeBudgetCalculator key={i} block={block} live={live} />;
      case "nearbyChecker":
        return <NearbyChecker key={i} block={block} live={live} />;

      default:
        return null;
    }
  };

  const blocks = guide.blocks.map(renderBlock);

  return (
    <>
      {faqSchema && <JsonLd data={faqSchema} />}
      <GuideHero guide={guide} live={live} />
      {needsFilterProvider ? <PageFilterProvider>{blocks}</PageFilterProvider> : blocks}
    </>
  );
}