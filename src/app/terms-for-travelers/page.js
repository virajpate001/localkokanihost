// src/app/terms-for-travelers/page.js
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Terms for Travelers | Local Kokani",
  description:
    "Terms governing the use of Local Kokani by travelers, including accommodation bookings, restaurant enquiries, payments, cancellations, and travel safety.",
  path: "/terms-for-travelers",
  keywords: [
    "terms for travelers",
    "traveler terms",
    "booking terms",
    "accommodation bookings",
    "local kokani travelers",
  ],
});

export default function TermsForTravelersPage() {
  return (
    <>
      <div className="bg-secondary dark:bg-gray-900">
        <Breadcrumbs
          items={[{ name: "Terms for Travelers", url: "/terms-for-travelers" }]}
        />
      </div>

      <section className="py-16 bg-white ">
        <div className="container-custom max-w-3xl">
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-primary mb-2">
            Terms for Travelers
          </h1>
          <p className="text-gray-400 text-sm mb-10">
            Effective Date: 17 October 2026
          </p>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-a:text-secondary">
            <h2>1. Introduction</h2>
            <p>Welcome to LocalKokani.</p>
            <p>
              LocalKokani helps travelers discover accommodation, restaurants,
              Khanavals, dhabas and local experiences across the Konkan region of
              Maharashtra, India.
            </p>
            <p>
              These Terms for Travelers explain the conditions for using
              LocalKokani to discover businesses, submit enquiries, arrange
              accommodation bookings, contact restaurant owners and explore
              local services.
            </p>
            <p>
              By accessing or using LocalKokani, you agree to these Terms, our
              Terms &amp; Conditions, Privacy Policy, Cancellation &amp; Refund
              Policy and other applicable policies published on our website.
            </p>
            <p>
              If you do not agree with these Terms, please discontinue using the
              platform.
            </p>

            <h2>2. Our Role</h2>
            <p>
              LocalKokani operates primarily as a business discovery, listing
              and enquiry facilitation platform.
            </p>
            <p>
              We help travelers find and contact independent businesses,
              including:
            </p>
            <ul>
              <li>Hotels and resorts.</li>
              <li>Homestays, villas and cottages.</li>
              <li>Guest houses, lodges and farm stays.</li>
              <li>Restaurants, Khanavals, dhabas and eateries.</li>
              <li>
                Other eligible local businesses and tourism-related services.
              </li>
            </ul>
            <p>
              Unless expressly stated otherwise, LocalKokani does not own,
              operate or manage these businesses. The accommodation, food and
              other services are provided by the respective business owners.
            </p>
            <p>
              A listing on LocalKokani does not guarantee the quality,
              availability, safety or suitability of a business or service.
            </p>

            <h2>3. Business Information and Availability</h2>
            <p>
              LocalKokani aims to provide useful information about listed
              businesses, including location, photographs, amenities, prices,
              menus, operating hours and contact details.
            </p>
            <p>
              However, business information may change or may not always be up to
              date.
            </p>
            <p>
              Before making a booking, paying an advance or visiting a business,
              you should confirm:
            </p>
            <ul>
              <li>Availability for your preferred dates or time.</li>
              <li>Current prices, taxes and additional charges.</li>
              <li>Accommodation facilities, room capacity and amenities.</li>
              <li>Restaurant opening hours, menu items and prices.</li>
              <li>Reservation or booking confirmation requirements.</li>
              <li>Cancellation, refund and no-show conditions.</li>
              <li>Any special restrictions or requirements.</li>
            </ul>
            <p>
              An enquiry does not automatically mean that a booking, table
              reservation or order has been confirmed.
            </p>

            <h2>4. Accommodation Bookings</h2>
            <p>
              This section applies to hotels, resorts, homestays, villas,
              cottages, guest houses, lodges, farm stays and other accommodation
              businesses listed on LocalKokani.
            </p>

            <h3>4.1 Basic Listing (Free)</h3>
            <p>
              Under the Basic Listing plan, accommodation enquiries are routed
              through LocalKokani&apos;s WhatsApp.
            </p>
            <p>The process generally works as follows:</p>
            <ol>
              <li>
                You contact LocalKokani with your travel dates, number of guests
                and accommodation requirements.
              </li>
              <li>
                LocalKokani coordinates with the property owner to check
                availability and booking details.
              </li>
              <li>The booking is confirmed according to the agreed process.</li>
              <li>LocalKokani may collect an advance payment from you.</li>
              <li>
                LocalKokani confirms the booking with the owner and transfers
                the collected advance after deducting the agreed commission.
              </li>
              <li>
                LocalKokani shares the owner&apos;s contact number with you for
                further communication.
              </li>
            </ol>
            <p>
              Before paying an advance, you should confirm the total price,
              booking dates, accommodation details and cancellation conditions.
            </p>
            <p>
              Please retain your booking confirmation, payment receipt and
              relevant messages.
            </p>

            <h3>4.2 Premium Plan</h3>
            <p>
              Under the Premium Plan, you can contact the accommodation owner
              directly through the owner&apos;s WhatsApp number.
            </p>
            <p>
              You and the owner are responsible for confirming availability,
              prices, advance payments, booking conditions and final
              confirmation.
            </p>
            <p>
              Unless a separate arrangement is expressly communicated,
              LocalKokani does not collect or process payments for these direct
              bookings.
            </p>
            <p>
              You should retain the owner&apos;s booking confirmation and payment
              receipt for your records.
            </p>

            <h3>4.3 Booking Confirmation</h3>
            <p>
              A booking is confirmed only when the applicable booking process has
              been completed and the relevant business has confirmed the
              reservation.
            </p>
            <p>
              Do not assume that a message, enquiry or availability check alone
              guarantees a room or property.
            </p>

            <h2>5. Cancellation and Refunds for Accommodation</h2>
            <p>
              Each accommodation provider may have its own cancellation rules.
            </p>
            <p>
              Before confirming a booking, read the cancellation conditions
              displayed in the property&apos;s About section and confirm any
              unclear terms directly with the owner.
            </p>
            <p>
              These conditions may include free cancellation deadlines, advance
              payment requirements, cancellation charges, no-show rules and
              refund timelines.
            </p>

            <h3>5.1 Basic Listing Bookings</h3>
            <p>
              If LocalKokani collects your advance and transfers it to the owner
              after deducting the agreed commission, the owner is responsible for
              processing any refund due to you under the applicable booking
              conditions and law.
            </p>
            <p>
              If a booking is cancelled, LocalKokani will return its commission
              to the owner as applicable under the agreed commission arrangement.
              This commission reversal does not automatically mean that you are
              entitled to a full refund; your refund entitlement depends on the
              disclosed cancellation terms and applicable law.
            </p>
            <p>
              If LocalKokani has not yet transferred your advance, contact us to
              discuss your cancellation and any refund due.
            </p>

            <h3>5.2 Premium Plan Bookings</h3>
            <p>
              For bookings arranged directly with a Premium Plan owner, contact
              the owner directly regarding cancellations, rescheduling and
              refunds.
            </p>
            <p>
              LocalKokani does not ordinarily manage the payment or refund for
              these direct bookings.
            </p>

            <h3>5.3 Cancellation by the Owner</h3>
            <p>
              If an owner cancels a confirmed booking, the owner should notify
              you promptly and arrange any refund due under the applicable
              booking terms and law.
            </p>
            <p>
              The owner may offer alternative dates or accommodation, but you are
              not required to accept an alternative you do not agree to.
            </p>
            <p>
              For more details, read the{" "}
              <a href="/cancellation-policy">Cancellation &amp; Refund Policy</a>.
            </p>

            <h2>6. Restaurants and Food Businesses</h2>
            <p>
              LocalKokani helps travelers discover restaurants, Khanavals,
              dhabas, eateries and other food businesses.
            </p>
            <p>
              Before visiting a restaurant or confirming a table reservation, you
              should verify its opening hours, current menu, prices, availability
              and any reservation conditions.
            </p>

            <h3>6.1 Restaurant Reservations</h3>
            <p>
              For Premium Plan restaurants, you can contact the owner directly to
              confirm a table reservation.
            </p>
            <p>
              For Basic Listing businesses, enquiries may be coordinated through
              LocalKokani. Any advance payment and the applicable cancellation
              conditions should be communicated before confirmation.
            </p>
            <p>
              The restaurant is responsible for its seating availability, service,
              prices and reservation arrangements.
            </p>

            <h3>6.2 Food Quality and Incorrect Orders</h3>
            <p>
              The restaurant or food business is responsible for preparing and
              supplying the food it advertises.
            </p>
            <p>
              If food is unsatisfactory, incorrect, incomplete, damaged or not
              delivered as agreed, contact the restaurant or food business
              directly as soon as possible.
            </p>
            <p>
              LocalKokani does not ordinarily prepare, package, sell or deliver
              food and cannot guarantee food quality, order accuracy or
              fulfilment by independent businesses. The relevant business is
              responsible for reviewing complaints and providing any remedy
              required by the applicable terms and law.
            </p>
            <p>
              Nothing in these Terms removes any consumer rights or legal
              responsibilities that cannot lawfully be excluded.
            </p>

            <h2>7. Payments and Receipts</h2>
            <p>Payment arrangements depend on the business and partner plan.</p>
            <ul>
              <li>
                <strong>Basic Listing accommodation booking:</strong> LocalKokani
                may collect an advance and transfer it to the owner after
                deducting the agreed commission.
              </li>
              <li>
                <strong>Premium Plan booking:</strong> You generally pay the
                owner directly.
              </li>
              <li>
                <strong>Restaurant reservation or food order:</strong> Payment is
                made according to the arrangement confirmed by the restaurant or
                relevant service provider.
              </li>
            </ul>
            <p>
              Always confirm the payment recipient, amount, booking details and
              refund conditions before paying.
            </p>
            <p>
              Retain receipts, transaction references and booking confirmations.
              Never share your banking passwords, OTPs or payment-card security
              details with a business or an individual claiming to represent
              LocalKokani.
            </p>

            <h2>8. Premium Badge and Custom Badges</h2>
            <p>
              The LocalKokani Premium badge indicates that a business has an
              active paid subscription with LocalKokani.
            </p>
            <p>
              It is not a government certification, tourism licence, guarantee of
              service quality or food safety certification.
            </p>
            <p>
              Custom badges, such as &quot;Top Rated,&quot; may be displayed
              according to LocalKokani&apos;s applicable criteria. They should
              not be treated as a guarantee that every customer will have a
              particular experience.
            </p>
            <p>
              You should independently confirm important business details before
              making a booking or purchase.
            </p>

            <h2>9. Travel Safety and Accidents</h2>
            <p>
              Travel involves risks, including road accidents, injuries, illness,
              severe weather, flooding, landslides, transport disruptions and
              other unforeseen circumstances.
            </p>
            <p>
              You are responsible for making informed travel decisions, following
              official safety advisories, taking reasonable precautions and
              obtaining appropriate travel or personal insurance where suitable.
            </p>
            <p>
              LocalKokani does not control road conditions, weather, independent
              transport providers, accommodation operations or every aspect of
              your journey.
            </p>
            <p>
              To the extent permitted by applicable law, LocalKokani is not
              responsible for accidents, injuries, losses or incidents arising
              from travel activities or services independently provided by third
              parties.
            </p>
            <p>
              This provision does not exclude or limit any legal responsibility
              that cannot lawfully be excluded, including responsibility arising
              from LocalKokani&apos;s own legally actionable conduct.
            </p>
            <p>
              In an emergency, contact the appropriate local emergency services
              and follow official safety instructions.
            </p>

            <h2>10. User Conduct</h2>
            <p>When using LocalKokani, you agree to:</p>
            <ul>
              <li>Provide accurate information when submitting enquiries.</li>
              <li>Treat business owners and other users respectfully.</li>
              <li>Use contact details only for legitimate purposes.</li>
              <li>
                Avoid fraudulent bookings, harassment and misleading statements.
              </li>
              <li>Avoid submitting fake reviews or false complaints.</li>
              <li>
                Respect the privacy and intellectual property rights of others.
              </li>
              <li>Comply with applicable laws and regulations.</li>
            </ul>
            <p>
              LocalKokani may restrict access or take other reasonable action
              where there is evidence of misuse, fraud, unlawful activity or a
              breach of these Terms.
            </p>

            <h2>11. Reviews and Complaints</h2>
            <p>
              If you experience a problem with a listed business, contact the
              business directly and retain relevant booking confirmations,
              receipts and communications.
            </p>
            <p>
              You may also contact LocalKokani to report an issue with a listing
              or request assistance communicating with the business.
            </p>
            <p>
              LocalKokani may review complaints and request relevant information.
              However, we do not guarantee a particular dispute outcome and are
              not automatically responsible for resolving disputes relating to
              services independently provided by a business.
            </p>
            <p>
              Reviews and complaints must be honest, relevant and lawful. We may
              remove content that violates our policies or applicable law.
            </p>

            <h2>12. Privacy and Contact Information</h2>
            <p>
              When you submit an enquiry, some information, such as your name,
              contact details, travel dates or requirements, may be shared with
              the relevant business to respond to your request.
            </p>
            <p>
              We handle personal information in accordance with our Privacy Policy
              and applicable law.
            </p>
            <p>
              Businesses receiving your information are responsible for using it
              lawfully and for protecting it against unauthorized access or
              misuse.
            </p>
            <p>
              For more information, please review our{" "}
              <a href="/privacy-policy">Privacy Policy</a> and{" "}
              <a href="/cookie-policy">Cookie Policy</a>.
            </p>

            <h2>13. Third-Party Services</h2>
            <p>
              LocalKokani may provide links or features connecting you to
              third-party services, including WhatsApp, Google Maps, social media
              platforms and external websites.
            </p>
            <p>
              Those services are governed by their own terms and privacy
              policies.
            </p>
            <p>
              LocalKokani does not control the operation or availability of
              external services and is not responsible for their independent
              practices, subject to applicable law.
            </p>

            <h2>14. Limitation of Responsibility</h2>
            <p>
              LocalKokani aims to provide a useful platform for discovering local
              businesses and coordinating enquiries.
            </p>
            <p>
              To the extent permitted by applicable law, we do not guarantee that
              every listing is complete or current, that a business will have
              availability, or that an independently operated business will
              provide a particular service or outcome.
            </p>
            <p>
              LocalKokani is not ordinarily responsible for disputes arising
              directly between travelers and independent accommodation providers,
              restaurants or other service providers, except to the extent
              responsibility arises under applicable law or from
              LocalKokani&apos;s own conduct.
            </p>
            <p>
              Nothing in these Terms excludes or limits liability or consumer
              rights that cannot lawfully be excluded or limited.
            </p>

            <h2>15. Changes to These Terms</h2>
            <p>
              LocalKokani may update these Terms to reflect changes in the
              website, services or applicable law.
            </p>
            <p>
              The latest version will be published on this page with an updated
              effective date.
            </p>
            <p>
              Changes affecting an existing confirmed booking will be handled
              according to the terms applicable to that booking and any mandatory
              legal requirements.
            </p>

            <h2>16. Governing Law and Dispute Resolution</h2>
            <p>These Terms are governed by the laws of India.</p>
            <p>
              Disputes should first be addressed through good-faith communication
              where appropriate. If a dispute cannot be resolved informally, it
              may be referred to a competent court or forum under applicable law
              in Maharashtra, India, subject to mandatory jurisdiction and
              consumer protection requirements.
            </p>
            <p>
              Nothing in this clause prevents you from exercising a statutory
              right or approaching a competent authority or forum where permitted
              by law.
            </p>

            <h2>17. Contact Us</h2>
            <p>
              For questions about these Terms, booking enquiries coordinated
              through LocalKokani, or concerns about a listing, contact:
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
              By using LocalKokani, you acknowledge that you have read these Terms
              for Travelers and agree to the provisions applicable to your use of
              the platform, subject to applicable law.
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