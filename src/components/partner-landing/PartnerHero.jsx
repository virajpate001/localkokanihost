// src/components/partner-landing/PartnerHero.jsx
import { FiCheck, FiMessageCircle } from "react-icons/fi";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { PartnerCta, PartnerLoginNote } from "./PartnerCta";
import ListingMock from "./ListingMock";

export default function PartnerHero({ hero }) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-6 text-white">
      {/* decorative shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/5" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-white/5" />

      <Breadcrumbs items={[{ name: "Partner With Us", url: "/partner-with-us" }]} />

      <div className="container-custom relative grid items-center gap-12 pb-24 pt-8 md:pb-32 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
            {hero.eyebrow}
          </p>
          <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">{hero.heading}</h1>
          <p className="mt-5 max-w-xl text-lg text-white/85 md:text-xl">{hero.lead}</p>

          {/* the sticky mobile bar watches this element */}
          <div id="partner-hero-cta" className="mt-8 flex flex-wrap items-center gap-3">
            <PartnerCta variant="accent" label={hero.primaryCta} />
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/40 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          <PartnerLoginNote className="mt-4 text-sm text-white/75" linkClassName="font-medium text-white underline underline-offset-4" />

          <ul className="mt-8 grid max-w-xl gap-x-6 gap-y-2.5 text-sm text-white/90 sm:grid-cols-2">
            {hero.trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                  <FiCheck className="text-xs" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* illustration (desktop only) */}
        <div className="relative mx-auto hidden w-full max-w-sm lg:block">
          <ListingMock premium className="rotate-2 shadow-2xl" />
          <div
            aria-hidden="true"
            className="absolute -left-10 top-10 flex -rotate-3 items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 text-sm font-medium text-primary shadow-xl dark:bg-gray-900 dark:text-white"
          >
            <FiMessageCircle className="text-emerald-500" /> New enquiry on WhatsApp
          </div>
          <p className="mt-4 text-center text-xs text-white/60">Illustration of a Premium listing</p>
        </div>
      </div>

      {/* wave into the page background */}
      <div aria-hidden="true" className="absolute inset-x-0 -bottom-px h-8 text-gray-50 dark:text-gray-950 md:h-11">
        <svg viewBox="0 0 1440 44" preserveAspectRatio="none" className="h-full w-full">
          <path fill="currentColor" d="M0 28c120 14 240 14 360 2s240-18 360-6 240 18 360 8 240-14 360-4v16H0z" />
        </svg>
      </div>
    </section>
  );
}