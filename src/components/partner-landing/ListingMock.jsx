// src/components/partner-landing/ListingMock.jsx
// A purely illustrative listing card, built from the app's REAL badge components
// so it looks like what guests will actually see. Not real data: always shown with
// an "illustration" caption by its parents.
import { FiMapPin, FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import VerifiedBadge from "@/components/ui/VerifiedBadge";
import CustomBadge from "@/components/ui/CustomBadge";

export default function ListingMock({ premium = false, className = "" }) {
  return (
    <div aria-hidden="true" className={`card overflow-hidden text-left ${className}`}>
      <div className="relative h-36 sm:h-40 bg-gradient-to-br from-secondary via-primary to-primary-dark">
        {/* sun + waves */}
        <span className="absolute right-6 top-5 h-9 w-9 rounded-full bg-accent/90" />
        <svg viewBox="0 0 400 60" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-10 w-full text-white/20">
          <path fill="currentColor" d="M0 30c60 14 120 14 200 0s140-14 200 0v30H0z" />
        </svg>
        {premium && <CustomBadge text="Family Friendly" color="accent" />}
      </div>

      <div className="space-y-3 p-4">
        <div>
          <h4 className="flex items-center font-display text-lg font-semibold text-primary dark:text-white">
            Sample Beach Resort
            {premium && <VerifiedBadge showLabel={false} />}
          </h4>
          <p className="mt-0.5 flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <FiMapPin className="shrink-0" /> Diveagar, Konkan
          </p>
        </div>

        <ul className="flex flex-wrap gap-1.5 text-xs">
          {["Sea view", "Breakfast", "Parking"].map((a) => (
            <li
              key={a}
              className="inline-flex items-center gap-1 rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            >
              <FiCheck className="text-secondary" /> {a}
            </li>
          ))}
        </ul>

        {premium && (
          <div className="relative h-16 overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br from-secondary/10 to-secondary/25 dark:border-gray-700">
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(0,20,74,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,20,74,0.12)_1px,transparent_1px)] [background-size:18px_18px]" />
            <FiMapPin className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-red-500" />
          </div>
        )}

        {premium ? (
          <span className="flex items-center justify-center gap-2 rounded-xl bg-accent py-2.5 text-sm font-semibold text-primary">
            <FaWhatsapp /> Chat with the owner
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 py-2.5 text-sm font-semibold text-primary dark:border-gray-700 dark:text-white">
            <FaWhatsapp /> Enquire via Local Kokani
          </span>
        )}
      </div>
    </div>
  );
}