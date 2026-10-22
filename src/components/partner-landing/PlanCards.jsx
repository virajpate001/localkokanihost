// src/components/partner-landing/PlanCards.jsx
import { FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { PartnerCta } from "./PartnerCta";
import { partnerWhatsAppHref } from "@/content/partnerLanding";

function WhatsAppLink({ href, children }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-secondary px-6 py-3 font-medium text-secondary transition-colors hover:bg-secondary/10"
    >
      <FaWhatsapp aria-hidden="true" /> {children}
    </a>
  );
}

function PlanCard({ plan, whatsapp }) {
  const premium = plan.key === "premium";
  return (
    <article
      aria-labelledby={`plan-${plan.key}`}
      className={`card relative flex flex-col p-7 md:p-8 ${
        premium ? "ring-2 ring-accent lg:-translate-y-3 lg:shadow-card-hover" : ""
      }`}
    >
      {plan.recommended && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wide text-primary shadow-sm">
          Recommended
        </span>
      )}

      <h3 id={`plan-${plan.key}`} className="font-display text-2xl font-bold text-primary dark:text-white">
        {plan.name}
      </h3>
      <p className="mt-1 text-gray-500 dark:text-gray-400">{plan.tagline}</p>

      <div className="mt-5 border-b border-gray-200 pb-5 dark:border-gray-800">
        <p className="font-display text-4xl font-bold text-primary dark:text-white">{plan.price}</p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{plan.priceNote}</p>
      </div>

      {plan.includesNote && <p className="mt-5 text-sm font-semibold text-primary dark:text-white">{plan.includesNote}</p>}
      <ul className={`${plan.includesNote ? "mt-3" : "mt-5"} flex-1 space-y-4`}>
        {plan.features.map((f) => (
          <li key={f.title} className="flex gap-3">
            <span
              className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                premium ? "bg-accent/25 text-primary dark:text-accent" : "bg-secondary/15 text-secondary"
              }`}
            >
              <FiCheck aria-hidden="true" className="text-sm" />
            </span>
            <div>
              <p className="font-semibold text-primary dark:text-white">{f.title}</p>
              <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">{f.text}</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-6 rounded-lg bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200">
        {plan.footnote}
      </p>

      <div className="mt-6 space-y-3">
        <PartnerCta variant="primary" label={premium ? "Sign Up" : "Sign Up Free"} className="w-full" />
        {premium && (
          <>
            <WhatsAppLink href={partnerWhatsAppHref(whatsapp)}>Ask about Premium pricing</WhatsAppLink>
            <p className="text-center text-xs text-gray-500 dark:text-gray-400">You choose your plan during registration.</p>
          </>
        )}
      </div>
    </article>
  );
}

export default function PlanCards({ plans, whatsapp }) {
  return (
    <section id="plans" aria-labelledby="plans-heading" className="scroll-mt-28 bg-white py-16 dark:bg-gray-900 md:py-20">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="plans-heading" className="section-title">Simple plans, no surprises</h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Start free with the Basic Listing, or go Premium for more ways to stand out and a direct line to your guests.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-10">
          {plans.map((plan) => (
            <PlanCard key={plan.key} plan={plan} whatsapp={whatsapp} />
          ))}
        </div>
      </div>
    </section>
  );
}