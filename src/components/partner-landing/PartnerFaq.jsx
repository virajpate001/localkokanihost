// src/components/partner-landing/PartnerFaq.jsx
// Native <details>: all answers are in the server-rendered HTML and work without JS.
import { FiPlus } from "react-icons/fi";

export default function PartnerFaq({ faqs }) {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-28 border-t border-gray-200 bg-white py-16 dark:border-gray-800 dark:bg-gray-900 md:py-20">
      <div className="container-custom max-w-3xl">
        <h2 id="faq-heading" className="section-title mb-8 text-center">Frequently asked questions</h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group card2 overflow-hidden border border-gray-200 dark:border-gray-800">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-primary dark:text-white [&::-webkit-details-marker]:hidden">
                {f.q}
                <FiPlus aria-hidden="true" className="shrink-0 text-xl text-secondary transition-transform group-open:rotate-45 motion-reduce:transition-none" />
              </summary>
              <p className="px-5 pb-5 text-gray-600 dark:text-gray-300">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}