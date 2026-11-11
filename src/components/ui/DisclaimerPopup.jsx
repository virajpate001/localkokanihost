"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "localkokani_disclaimer_accepted_v1";

export default function DisclaimerPopup() {
  const pathname = usePathname();

  // Initially hidden to prevent popup flashing during refresh.
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (
      pathname === "/disclaimer" ||
      pathname?.startsWith("/admin")
    ) {
      setIsVisible(false);
      setIsChecked(true);
      return;
    }

    try {
      const accepted =
        localStorage.getItem(STORAGE_KEY) === "accepted";

      setIsVisible(!accepted);
    } catch (error) {
      setIsVisible(true);
    }

    setIsChecked(true);
  }, [pathname]);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch (error) {
      // Acceptance lasts for this page visit if storage is unavailable.
    }

    setIsVisible(false);
  };

  if (!isChecked || !isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="disclaimer-title"
        aria-describedby="disclaimer-description"
        className="my-auto w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-900 sm:p-8"
      >
        <div className="mb-5 flex items-center gap-3">
        

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#3193a6]">
              LocalKokani
            </p>

            <h2
              id="disclaimer-title"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              Important Disclaimer
            </h2>
          </div>
        </div>

        <div
          id="disclaimer-description"
          className="space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300"
        >
          <p>
            Welcome to LocalKokani. Our platform helps you discover hotels,
            restaurants, Khanavals, dhabas and other local businesses across
            the Konkan region.
          </p>

          <p>Please keep the following points in mind:</p>

          <ul className="list-disc space-y-2 pl-5">
            <li>
              Business information, photographs, prices, facilities and
              availability may change.
            </li>
            <li>
              Please confirm prices, availability, booking conditions and
              property details directly with the relevant business.
            </li>
            
          </ul>

          <p>
            Please read our{" "}
            <Link
              href="/disclaimer"
              className="font-semibold text-[#3193a6] underline underline-offset-2 hover:text-[#267889]"
            >
              full Disclaimer
            </Link>{" "}
            for further information.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAccept}
          className="mt-7 w-full rounded-xl bg-[#3193a6] px-5 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#267889] focus:outline-none focus:ring-4 focus:ring-[#3193a6]/30"
        >
          I Understand &amp; Continue
        </button>

        <p className="mt-3 text-center text-xs text-gray-400">
          Your acceptance will be remembered on this browser.
        </p>
      </section>
    </div>
  );
}