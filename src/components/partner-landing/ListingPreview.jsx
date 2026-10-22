// src/components/partner-landing/ListingPreview.jsx
import { FiCheck } from "react-icons/fi";
import ListingMock from "./ListingMock";

function Points({ items }) {
  return (
    <ul className="mt-4 space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
      {items.map((p) => (
        <li key={p} className="flex items-center gap-2">
          <FiCheck aria-hidden="true" className="shrink-0 text-secondary" /> {p}
        </li>
      ))}
    </ul>
  );
}

export default function ListingPreview({ preview }) {
  return (
    <section aria-labelledby="preview-heading" className="border-y border-gray-200 bg-white py-16 dark:border-gray-800 dark:bg-gray-900 md:py-20">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="preview-heading" className="section-title">{preview.heading}</h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400">{preview.sub}</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-3xl gap-10 sm:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">Basic Listing</p>
            <ListingMock />
            <Points items={preview.basicPoints} />
          </div>
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-primary dark:text-accent">Premium Plan</p>
            <ListingMock premium className="ring-2 ring-accent" />
            <Points items={preview.premiumPoints} />
          </div>
        </div>
      </div>
    </section>
  );
}