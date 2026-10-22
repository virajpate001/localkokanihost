// src/components/partner-landing/StickyPartnerBar.jsx
"use client";

import { useEffect, useState } from "react";
import { PartnerCta } from "./PartnerCta";

// Mobile-only bar with the sign-up button. It appears once the hero buttons have
// scrolled out of view and goes away again when the closing call-to-action band is
// reached (or passed), so it never covers the footer or duplicates a visible CTA.
export default function StickyPartnerBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("partner-hero-cta");
    const final = document.getElementById("partner-final-cta");
    if (!hero || !("IntersectionObserver" in window)) return;

    let heroVisible = true;
    let finalReached = false;
    const update = () => setShow(!heroVisible && !finalReached);

    const heroObs = new IntersectionObserver(([entry]) => {
      heroVisible = entry.isIntersecting;
      update();
    });
    heroObs.observe(hero);

    let finalObs;
    if (final) {
      finalObs = new IntersectionObserver(([entry]) => {
        // reached = on screen now, or already scrolled past it
        finalReached = entry.isIntersecting || entry.boundingClientRect.top < 0;
        update();
      });
      finalObs.observe(final);
    }
    return () => {
      heroObs.disconnect();
      finalObs?.disconnect();
    };
  }, []);

  return (
    <div
      // `inert` takes the hidden bar out of the tab order and the accessibility tree
      inert={!show}
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur px-4 pt-3 pb-safe transition-transform duration-300 motion-reduce:transition-none ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3">
        <p className="flex-1 text-sm font-semibold text-primary dark:text-white">List your property for free</p>
        <PartnerCta label="Sign Up" loggedInLabel="Dashboard" className="!px-5 !py-2.5 text-sm" />
      </div>
    </div>
  );
}