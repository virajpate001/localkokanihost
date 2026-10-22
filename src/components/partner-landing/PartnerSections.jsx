// src/components/partner-landing/PartnerSections.jsx
// Benefits, how-it-works, requirements, promotion boosts and the closing CTA band.
import { FiGift, FiHome, FiLayout, FiSearch, FiShield, FiCheckCircle, FiStar, FiZap } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { PartnerCta } from "./PartnerCta";
import { partnerWhatsAppHref } from "@/content/partnerLanding";
import { DURATIONS } from "@/lib/promotionConstants";

const BENEFIT_ICONS = {
  gift: FiGift,
  building: FiHome,
  page: FiLayout,
  whatsapp: FaWhatsapp,
  search: FiSearch,
  shield: FiShield,
};

const rupees = (n) => `\u20B9${Number(n).toLocaleString("en-IN")}`;

export function Benefits({ items }) {
  return (
    <section aria-labelledby="benefits-heading" className="py-16 md:py-20">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="benefits-heading" className="section-title">Why list with us</h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400">Everything you need to be found and contacted by travellers, without the complexity.</p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((b) => {
            const Icon = BENEFIT_ICONS[b.icon] || FiCheckCircle;
            return (
              <li key={b.title} className="card p-6">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-2xl text-secondary">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-semibold text-primary dark:text-white">{b.title}</h3>
                <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">{b.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function HowItWorks({ steps, requirements }) {
  return (
    <section aria-labelledby="how-heading" id="how-it-works" className="scroll-mt-28 border-y border-gray-200 bg-white py-16 dark:border-gray-800 dark:bg-gray-900 md:py-20">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="how-heading" className="section-title">How it works</h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400">From sign-up to your first guest enquiry in four steps.</p>
        </div>

        <ol className="relative mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              // dashed connector from this step's circle to the next one (wide screens only)
              className="relative lg:after:absolute lg:after:left-16 lg:after:-right-4 lg:after:top-6 lg:after:border-t-2 lg:after:border-dashed lg:after:border-gray-300 lg:after:content-[''] lg:last:after:hidden dark:lg:after:border-gray-700"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-display text-xl font-bold text-white shadow-card dark:bg-secondary">
                {i + 1}
              </span>
              <h3 className="font-display text-lg font-semibold text-primary dark:text-white">{s.title}</h3>
              <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-950 md:p-8">
          <h3 className="font-display text-xl font-semibold text-primary dark:text-white">{requirements.heading}</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{requirements.sub}</p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {requirements.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-200">
                <FiCheckCircle aria-hidden="true" className="mt-0.5 shrink-0 text-secondary" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// `pricing` is the live admin price list ({ featured: {week1..}, sponsored: {...} }) or null.
export function Boosts({ boosts, pricing }) {
  const icons = { featured: FiStar, sponsored: FiZap };
  return (
    <section aria-labelledby="boost-heading" className="py-16 md:py-20">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="boost-heading" className="section-title">{boosts.heading}</h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400">{boosts.sub}</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          {boosts.items.map((b) => {
            const Icon = icons[b.key];
            const prices = pricing?.[b.key];
            return (
              <div key={b.key} className="card flex flex-col p-6">
                <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/25 text-xl text-primary dark:text-accent">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-semibold text-primary dark:text-white">{b.title}</h3>
                <p className="text-sm font-medium text-secondary">{b.tagline}</p>
                <p className="mt-2 mb-4 text-sm text-gray-500 dark:text-gray-400">{b.text}</p>
                {prices && (
                  <dl className="mt-auto grid grid-cols-2 gap-x-8 gap-y-1.5 border-t border-gray-200 pt-4 text-sm dark:border-gray-800">
                    {DURATIONS.map((d) =>
                      prices[d.key] ? (
                        <div key={d.key} className="flex items-baseline justify-between gap-2">
                          <dt className="text-gray-500 dark:text-gray-400">{d.label}</dt>
                          <dd className="font-semibold text-primary dark:text-white">{rupees(prices[d.key])}</dd>
                        </div>
                      ) : null
                    )}
                  </dl>
                )}
              </div>
            );
          })}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-gray-500 dark:text-gray-400">{boosts.note}</p>
      </div>
    </section>
  );
}

export function FinalCta({ content, whatsapp }) {
  const wa = partnerWhatsAppHref(whatsapp);
  return (
    <section id="partner-final-cta" aria-labelledby="final-heading" className="bg-hero-gradient py-16 text-center text-white md:py-20">
      <div className="container-custom">
        <h2 id="final-heading" className="font-display text-3xl font-bold md:text-4xl">{content.heading}</h2>
        <p className="mx-auto mt-3 max-w-xl text-lg text-white/85">{content.text}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <PartnerCta variant="accent" label={content.primaryCta} />
          <a
            href={wa}
            {...(wa.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
          >
            <FaWhatsapp aria-hidden="true" /> {content.whatsappCta}
          </a>
        </div>
      </div>
    </section>
  );
}