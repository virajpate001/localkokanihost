// src/components/partner-landing/PlanComparison.jsx
import { FiCheck, FiMinus } from "react-icons/fi";

function Cell({ value }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center">
        <FiCheck aria-hidden="true" className="text-xl text-emerald-600 dark:text-emerald-400" />
        <span className="sr-only">Included</span>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center">
        <FiMinus aria-hidden="true" className="text-xl text-gray-300 dark:text-gray-600" />
        <span className="sr-only">Not included</span>
      </span>
    );
  }
  return <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{value}</span>;
}

export default function PlanComparison({ rows }) {
  return (
    <section aria-labelledby="compare-heading" className="py-16 md:py-20">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="compare-heading" className="section-title">Compare the plans</h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400">Every feature, side by side.</p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-card dark:border-gray-800 dark:bg-gray-900 dark:shadow-none">
          <table className="w-full min-w-[34rem] border-collapse text-left">
            <caption className="sr-only">Feature comparison of the Basic Listing and the Premium Plan</caption>
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th scope="col" className="p-4 text-sm font-semibold text-gray-500 dark:text-gray-400">Feature</th>
                <th scope="col" className="p-4 text-center font-display text-lg font-semibold text-primary dark:text-white">Basic Listing</th>
                <th scope="col" className="bg-accent/15 p-4 text-center font-display text-lg font-semibold text-primary dark:text-white">
                  Premium Plan
                  <span className="ml-2 inline-block rounded-full bg-accent px-2 py-0.5 align-middle text-[10px] font-bold uppercase text-primary">Recommended</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-gray-200 dark:border-gray-800">
                  <th scope="row" className="p-4 text-sm font-medium text-primary dark:text-white">{row.label}</th>
                  <td className="p-4 text-center"><Cell value={row.basic} /></td>
                  <td className="bg-accent/10 p-4 text-center"><Cell value={row.premium} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}