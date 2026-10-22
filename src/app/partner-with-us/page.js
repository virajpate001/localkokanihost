// src/app/partner-with-us/page.js
//
// Public landing page that recruits hotel and restaurant owners. (It used to be a
// redirect to /owner/signup.) All copy and plan details live in
// src/content/partnerLanding.js; the visual building blocks are in
// src/components/partner-landing/*.
import { buildMetadata } from "@/utils/seo";
import { generateFaqSchema } from "@/utils/helpers";
import JsonLd from "@/components/ui/JsonLd";
import { getPromotionPricing } from "@/lib/services/promotionService";
import {
  SHOW_PROMOTION_PRICES,
  PARTNER_META,
  PARTNER_HERO,
  PARTNER_BENEFITS,
  PARTNER_PLANS,
  PARTNER_COMPARISON,
  PARTNER_PREVIEW,
  PARTNER_STEPS,
  PARTNER_REQUIREMENTS,
  PARTNER_BOOSTS,
  PARTNER_FAQS,
  PARTNER_FINAL,
} from "@/content/partnerLanding";
import PartnerHero from "@/components/partner-landing/PartnerHero";
import PlanCards from "@/components/partner-landing/PlanCards";
import PlanComparison from "@/components/partner-landing/PlanComparison";
import ListingPreview from "@/components/partner-landing/ListingPreview";
import PartnerFaq from "@/components/partner-landing/PartnerFaq";
import StickyPartnerBar from "@/components/partner-landing/StickyPartnerBar";
import { Benefits, HowItWorks, Boosts, FinalCta } from "@/components/partner-landing/PartnerSections";

export const metadata = buildMetadata({
  title: PARTNER_META.title,
  description: PARTNER_META.description,
  path: "/partner-with-us",
  keywords: PARTNER_META.keywords,
});

// Refresh hourly so changes to the admin "promotion pricing" settings show up.
export const revalidate = 3600;

export default async function PartnerWithUsPage() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

  // Live add-on prices from the admin settings. A database hiccup must not break
  // a marketing page, so on failure the prices are simply left out.
  let pricing = null;
  if (SHOW_PROMOTION_PRICES) {
    try {
      pricing = await getPromotionPricing();
    } catch (error) {
      console.error("Partner page: could not load promotion pricing:", error);
    }
  }

  const faqSchema = generateFaqSchema(PARTNER_FAQS.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <>
      {faqSchema && <JsonLd data={faqSchema} />}
      <PartnerHero hero={PARTNER_HERO} />
      <Benefits items={PARTNER_BENEFITS} />
      <PlanCards plans={PARTNER_PLANS} whatsapp={whatsapp} />
      <PlanComparison rows={PARTNER_COMPARISON} />
      <ListingPreview preview={PARTNER_PREVIEW} />
      <HowItWorks steps={PARTNER_STEPS} requirements={PARTNER_REQUIREMENTS} />
      <Boosts boosts={PARTNER_BOOSTS} pricing={pricing} />
      <PartnerFaq faqs={PARTNER_FAQS} />
      <FinalCta content={PARTNER_FINAL} whatsapp={whatsapp} />
      <StickyPartnerBar />
    </>
  );
}