// src/app/disclaimer/page.js
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Disclaimer | Local Kokani",
  description:
    "Important limitations of Local Kokani's role as a discovery, listing, and enquiry facilitation platform, including partner plans, payments, cancellations, and travel risks.",
  path: "/disclaimer",
  keywords: [
    "disclaimer",
    "platform limitations",
    "partner plans disclaimer",
    "premium badge disclaimer",
    "local kokani disclaimer",
  ],
});

export default function DisclaimerPage() {
  return (
    <>
      <div className="bg-secondary dark:bg-gray-900">
        <Breadcrumbs items={[{ name: "Disclaimer", url: "/disclaimer" }]} />
      </div>

      <section className="py-16 bg-white ">
        <div className="container-custom max-w-3xl">
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-primary mb-2">
            Disclaimer
          </h1>
          <p className="text-gray-400 text-sm mb-10">
            Effective Date: 17 October 2026
          </p>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-a:text-secondary">
            <h2>1. General Information</h2>
            <p>Welcome to LocalKokani.</p>
            <p>
              LocalKokani is an online platform that helps travelers discover
              accommodation, restaurants, Khanavals, dhabas and other local
              businesses across the Konkan region of Maharashtra, India.
            </p>
            <p>
              The information provided on{" "}
              <a
                href="https://www.localkokani.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.localkokani.com
              </a>{" "}
              is intended to help users explore destinations, view business
              listings and contact local service providers.
            </p>
            <p>
              Although we make reasonable efforts to maintain useful and accurate
              information, we do not guarantee that all website content, business
              descriptions, photographs, prices, menus, amenities, opening hours
              or availability details are complete, accurate or up to date at all
              times.
            </p>
            <p>
              Users should verify important information directly with the
              relevant business before making a booking, reservation, payment or
              travel decision.
            </p>

            <h2>2. Role of LocalKokani</h2>
            <p>
              LocalKokani primarily operates as a business discovery, listing and
              enquiry facilitation platform.
            </p>
            <p>
              We help travelers connect with independent businesses, including
              hotels, resorts, homestays, villas, cottages, lodges, restaurants,
              Khanavals and dhabas.
            </p>
            <p>
              Unless expressly stated otherwise, LocalKokani does not own,
              operate, manage or directly provide the accommodation, food or
              other services advertised by these businesses.
            </p>
            <p>
              A business listing does not constitute a guarantee, endorsement or
              certification of that business. The relevant business is
              responsible for its operations, services, staff, premises, pricing
              and customer transactions.
            </p>

            <h2>3. Basic Listing and Premium Plan</h2>
            <p>LocalKokani offers two partner plans.</p>

            <h3>3.1 Basic Listing (Free)</h3>
            <p>
              The Basic Listing plan provides a standard listing, basic
              visibility and customer enquiries routed through
              LocalKokani&apos;s WhatsApp. Commission applies to qualifying
              confirmed bookings according to the terms accepted by the partner.
            </p>
            <p>
              For applicable accommodation bookings, LocalKokani may collect an
              advance from the traveler, confirm the booking with the owner,
              transfer the advance after deducting the agreed commission, and
              share the owner&apos;s contact number with the traveler.
            </p>
            <p>
              LocalKokani aims to coordinate these enquiries accurately but does
              not guarantee that every enquiry will result in a booking or that
              every property will remain available.
            </p>

            <h3>3.2 Premium Plan</h3>
            <p>
              The Premium Plan may include a Premium badge, custom badges such as
              &quot;Top Rated,&quot; direct WhatsApp enquiries to the
              owner&apos;s number, Google Maps location on the listing and
              priority support.
            </p>
            <p>
              The Premium badge indicates that the business has an active paid
              subscription with LocalKokani.
            </p>
            <p>
              <strong>
                The Premium badge is not a government certification, tourism
                licence, guarantee of service quality or food safety
                certification.
              </strong>{" "}
              It does not imply government endorsement or FSSAI approval.
            </p>
            <p>
              Custom badges are subject to their applicable criteria and should
              not be treated as a guarantee of future performance.
            </p>

            <h2>4. Accommodation Listings and Bookings</h2>
            <p>
              Accommodation information, including room descriptions, amenities,
              photographs, prices, occupancy limits, availability and property
              rules, may be supplied by the respective property owner.
            </p>
            <p>
              LocalKokani does not guarantee that a property will meet every
              traveler&apos;s expectations or that the information will remain
              unchanged after publication.
            </p>
            <p>Travelers should confirm the following before booking:</p>
            <ul>
              <li>Availability for the intended dates.</li>
              <li>Total price, taxes and additional charges.</li>
              <li>Room type, amenities and occupancy limits.</li>
              <li>Advance payment and booking confirmation requirements.</li>
              <li>Check-in and check-out conditions.</li>
              <li>Cancellation, refund and no-show rules.</li>
            </ul>
            <p>
              An enquiry or availability check does not automatically constitute
              a confirmed booking.
            </p>

            <h2>5. Payments, Cancellations and Refunds</h2>
            <p>
              Payment and cancellation responsibilities depend on the partner
              plan and the particular transaction.
            </p>

            <h3>5.1 Basic Listing Bookings</h3>
            <p>
              For applicable accommodation bookings coordinated through
              LocalKokani, we may collect an advance and transfer it to the owner
              after deducting the agreed commission.
            </p>
            <p>
              After the advance has been transferred, the owner is responsible for
              handling any traveler refund due under the applicable booking
              conditions and law.
            </p>
            <p>
              If a confirmed booking is cancelled, LocalKokani will return its
              commission to the owner as applicable under the agreed commission
              arrangement. This commission reversal does not automatically
              establish that the traveler is entitled to a full refund.
            </p>
            <p>
              Where an advance has not yet been transferred, LocalKokani will
              address any cancellation and refund due according to the applicable
              booking terms and law.
            </p>

            <h3>5.2 Premium Plan Bookings</h3>
            <p>
              For Premium Plan bookings arranged directly between the traveler and
              the owner, the owner generally receives payment and handles booking
              confirmation, cancellation requests and refunds.
            </p>
            <p>
              LocalKokani does not ordinarily collect or process payments for
              these direct bookings and is not responsible for managing their
              cancellation or refund, except where a separate arrangement or
              applicable law provides otherwise.
            </p>

            <h3>5.3 Restaurant Reservations and Food Orders</h3>
            <p>
              Restaurant reservations and food orders are generally handled by the
              relevant food business.
            </p>
            <p>
              The business is responsible for communicating its reservation,
              cancellation and refund conditions before confirmation. Any advance
              payment collected through LocalKokani for a particular transaction
              will be handled according to the arrangement communicated for that
              transaction and applicable law.
            </p>
            <p>
              For further details, please read our{" "}
              <a href="/cancellation-policy">Cancellation &amp; Refund Policy</a>.
            </p>

            <h2>6. Restaurant Services and Food Quality</h2>
            <p>
              LocalKokani helps users discover restaurants, Khanavals, dhabas and
              other food businesses. Unless expressly stated otherwise, we do not
              prepare, cook, package, sell or deliver food.
            </p>
            <p>The relevant food business is responsible for:</p>
            <ul>
              <li>Food quality and safety.</li>
              <li>Hygiene and food-handling practices.</li>
              <li>Accuracy of menu descriptions and prices.</li>
              <li>Correctness and completeness of orders.</li>
              <li>Preparation, packaging and delivery arrangements.</li>
              <li>
                Customer complaints and applicable refunds or replacements.
              </li>
            </ul>
            <p>
              If food is unsatisfactory, incorrect, incomplete, damaged or not
              delivered as agreed, customers should contact the food business
              directly.
            </p>
            <p>
              LocalKokani does not ordinarily control the preparation or
              fulfilment of food orders and cannot guarantee the quality, accuracy
              or outcome of services provided by independent businesses. We may
              assist with communication where appropriate.
            </p>
            <p>
              Nothing in this disclaimer excludes any legal responsibility or
              consumer rights that cannot lawfully be excluded.
            </p>

            <h2>7. Travel Risks, Accidents and Emergencies</h2>
            <p>
              Travel may involve risks, including road accidents, injuries,
              illness, severe weather, flooding, landslides, transport
              disruptions and other unforeseen circumstances.
            </p>
            <p>
              Travelers are responsible for making informed decisions, following
              official safety advisories, taking reasonable precautions and
              obtaining appropriate insurance where suitable.
            </p>
            <p>
              LocalKokani does not control roads, weather, independent transport
              providers, property operations or every aspect of a
              traveler&apos;s journey.
            </p>
            <p>
              To the extent permitted by applicable law, LocalKokani is not
              responsible for accidents, injuries, losses or incidents arising
              from travel activities or services independently provided by third
              parties.
            </p>
            <p>
              This disclaimer does not exclude or limit liability that cannot
              lawfully be excluded, including responsibility arising from
              LocalKokani&apos;s own legally actionable conduct.
            </p>
            <p>
              In an emergency, contact the appropriate local emergency services
              and follow official safety instructions.
            </p>

            <h2>8. Premium Badge and Business Verification</h2>
            <p>
              The Premium badge indicates an active paid subscription with
              LocalKokani. It does not mean that a business has been independently
              certified, inspected or endorsed by a government authority.
            </p>
            <p>
              A Premium badge does not guarantee the quality, legality, safety or
              reliability of a listed business.
            </p>
            <p>
              Custom badges, such as &quot;Top Rated,&quot; may be assigned
              according to LocalKokani&apos;s applicable criteria. They do not
              guarantee that every customer will have a particular experience.
            </p>
            <p>
              Travelers should independently confirm important details before
              making a booking or purchase.
            </p>

            <h2>9. Prices, Availability and Business Changes</h2>
            <p>
              Business owners may change prices, menus, amenities, availability,
              operating hours or service conditions.
            </p>
            <p>
              LocalKokani aims to present information supplied by partners but
              cannot guarantee that every listing reflects every subsequent
              change.
            </p>
            <p>
              The price and terms confirmed directly with the business or through
              the applicable booking process should be reviewed before a customer
              commits.
            </p>
            <p>
              If information displayed on LocalKokani differs materially from what
              a business communicates, users may contact us to report the
              discrepancy.
            </p>

            <h2>10. External Links and Third-Party Services</h2>
            <p>
              Our website may contain links or features connecting users to
              third-party services, including WhatsApp, Google Maps, social media
              platforms and external websites.
            </p>
            <p>
              These services operate under their own terms, privacy policies and
              practices.
            </p>
            <p>
              LocalKokani does not control the availability, security, content or
              independent operations of external services and is not responsible
              for their practices, subject to applicable law.
            </p>
            <p>
              Users should review the terms of external services before using
              them.
            </p>

            <h2>11. Website Availability and Technical Errors</h2>
            <p>
              We aim to keep LocalKokani useful and accessible but do not
              guarantee uninterrupted operation, error-free content or permanent
              availability of any listing or feature.
            </p>
            <p>
              The website may occasionally be unavailable because of maintenance,
              technical problems, security measures or circumstances beyond our
              reasonable control.
            </p>
            <p>
              We may correct errors, update content or modify features when
              reasonably necessary.
            </p>

            <h2>12. Limitation of Responsibility</h2>
            <p>
              To the extent permitted by applicable law, LocalKokani does not
              guarantee the accuracy of every third-party listing, the
              availability of independent businesses, the quality of
              independently provided services or a particular booking outcome.
            </p>
            <p>
              LocalKokani is not ordinarily responsible for disputes arising
              directly between travelers and independent accommodation providers,
              restaurants or other service providers, except to the extent
              responsibility arises under applicable law or from
              LocalKokani&apos;s own conduct.
            </p>
            <p>
              Nothing in this disclaimer excludes or limits liability, statutory
              consumer rights or remedies that cannot lawfully be excluded or
              limited.
            </p>

            <h2>13. Updates to This Disclaimer</h2>
            <p>
              LocalKokani may update this disclaimer to reflect changes in its
              services, website features, partner arrangements or applicable law.
            </p>
            <p>
              The latest version will be published on this page with a revised
              effective date. Users should review this page periodically.
            </p>

            <h2>14. Contact Us</h2>
            <p>
              If you have questions about this disclaimer or wish to report
              inaccurate listing information, contact:
            </p>
            <p>
              <strong>LocalKokani</strong>
            </p>
            <ul>
              <li>
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.localkokani.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.localkokani.com
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:localkokani001@gmail.com">
                  localkokani001@gmail.com
                </a>
              </li>
            
              <li>
                <strong>Service Area:</strong> Konkan, Maharashtra, India
              </li>
            </ul>

            <hr />

            <p>
              By using LocalKokani, you acknowledge that the platform helps users
              discover and connect with independent businesses and that you
              should confirm important booking, payment, cancellation and service
              details before making a commitment, subject to your rights under
              applicable law.
            </p>

            <hr />

            <p>
              <strong>LocalKokani</strong>
              <br />
              <em>Discover Konkan. Stay Local.</em>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}