// src/app/terms-and-conditions/page.js
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions | Local Kokani",
  description:
    "Terms and conditions governing the use of Local Kokani's discovery, listing, and enquiry platform.",
  path: "/terms-and-conditions",
  keywords: [
    "terms and conditions",
    "terms of service",
    "user agreement",
    "partner agreement",
    "local kokani terms",
  ],
});

export default function TermsAndConditionsPage() {
  return (
    <>
      <div className="bg-secondary dark:bg-gray-900">
        <Breadcrumbs
          items={[
            { name: "Terms & Conditions", url: "/terms-and-conditions" },
          ]}
        />
      </div>

      <section className="py-16 bg-white ">
        <div className="container-custom max-w-3xl">
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-primary mb-2">
            Terms &amp; Conditions
          </h1>
          <p className="text-gray-400 text-sm mb-10">
            Effective Date: 12 October 2026
          </p>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-a:text-secondary">
            <h2>1. Introduction</h2>
            <p>
              Welcome to <strong>LocalKokani</strong> (&quot;we&quot;,
              &quot;our&quot;, &quot;us&quot;, or &quot;the Platform&quot;).
            </p>
            <p>
              LocalKokani is an online discovery, listing, and enquiry platform
              that helps users discover accommodation and food businesses across
              the Konkan region of Maharashtra, India.
            </p>
            <p>Our listings may include:</p>
            <ul>
              <li>Hotels and resorts</li>
              <li>Homestays and guest houses</li>
              <li>Villas and cottages</li>
              <li>Restaurants and Khanavals</li>
              <li>Dhabas and other local food businesses</li>
              <li>
                Other travel-related and local businesses introduced on the
                Platform
              </li>
            </ul>
            <p>
              These Terms &amp; Conditions govern your access to and use of our
              website, including browsing listings, submitting enquiries,
              registering a business, and using our partner services.
            </p>
            <p>
              By accessing or using LocalKokani, you agree to these Terms &amp;
              Conditions and the other applicable policies published on our
              website. If you do not agree, please discontinue using the
              Platform.
            </p>

            <h2>2. About LocalKokani</h2>
            <p>
              LocalKokani helps travelers discover local businesses and connect
              with their owners or authorized representatives.
            </p>
            <p>
              We may provide business listings, photographs, descriptions,
              contact details, menus, accommodation information, prices,
              amenities, operating hours, location details, and enquiry options.
            </p>
            <p>
              Unless expressly stated otherwise, LocalKokani does not own,
              operate, manage, or provide accommodation or food services through
              the listed businesses.
            </p>
            <p>
              The actual services are provided by the respective independent
              business owners.
            </p>

            <h2>3. Eligibility and Acceptable Use</h2>
            <p>
              You may use the Platform only for lawful purposes and in
              accordance with these Terms.
            </p>
            <p>By using the Platform, you agree that you will not:</p>
            <ul>
              <li>Provide false, misleading, or fraudulent information.</li>
              <li>Use the website to harass, threaten, or deceive others.</li>
              <li>Misuse publicly displayed contact details.</li>
              <li>Attempt unauthorized access to our systems or data.</li>
              <li>Upload malicious software or harmful content.</li>
              <li>
                Copy, scrape, or reproduce Platform content without
                authorization.
              </li>
              <li>
                Use the Platform in a manner that violates applicable law or
                another person&apos;s rights.
              </li>
            </ul>
            <p>
              We may restrict access to users who violate these Terms, subject
              to applicable law.
            </p>

            <h2>4. Business Listings and Information</h2>
            <p>
              Business owners or their authorized representatives may submit
              information for publication on LocalKokani.
            </p>
            <p>
              Listing information may include business names, addresses, contact
              details, descriptions, photographs, menus, room details, prices,
              amenities, opening hours, and other relevant information.
            </p>
            <p>
              Although we may review or moderate submitted information, we do
              not guarantee that every listing is complete, current, accurate,
              or available at all times.
            </p>
            <p>
              Business owners are responsible for keeping their information
              accurate and updating us about material changes.
            </p>
            <p>
              Travelers should independently confirm important details directly
              with the relevant business before making arrangements or payments.
            </p>

            <h2>5. Services for Travelers and Customers</h2>
            <p>
              Travelers may use LocalKokani to discover businesses and submit
              enquiries.
            </p>
            <p>
              Depending on the listing and applicable partner plan, a customer
              may:
            </p>
            <ul>
              <li>
                Contact LocalKokani through WhatsApp or another enquiry channel.
              </li>
              <li>
                Ask our team to coordinate with a hotel, homestay, restaurant,
                or other business.
              </li>
              <li>
                Contact an eligible business directly through its published
                phone number or WhatsApp link.
              </li>
              <li>
                Review publicly available business information before deciding
                whether to contact a business.
              </li>
            </ul>
            <p>
              Submitting an enquiry does not automatically create a confirmed
              reservation, booking, table reservation, food order, or service
              agreement.
            </p>
            <p>
              A reservation or order is confirmed only when the relevant
              business confirms it through an agreed communication channel.
            </p>

            <h2>6. Bookings, Reservations, and Orders</h2>
            <p>
              Accommodation bookings, restaurant reservations, and food orders
              are arranged between the customer and the relevant business unless
              a particular service explicitly states otherwise.
            </p>
            <p>The business owner is responsible for confirming:</p>
            <ul>
              <li>Availability and reservation details</li>
              <li>Room types, occupancy, and accommodation prices</li>
              <li>
                Restaurant opening hours, menu availability, and food prices
              </li>
              <li>Special requests and dietary requirements</li>
              <li>Booking or order confirmation</li>
              <li>Any applicable advance payment or deposit</li>
              <li>Cancellation and refund terms</li>
              <li>
                Delivery, collection, dining, check-in, and check-out
                arrangements, as applicable
              </li>
            </ul>
            <p>
              Customers should obtain clear confirmation of the agreed terms
              before relying on a booking, reservation, or order.
            </p>
            <p>
              LocalKokani does not guarantee that a business will accept an
              enquiry or fulfil a request.
            </p>

            <h2>7. Payments, Commissions, and Refunds</h2>
            <p>
              Unless a specific service expressly states otherwise, customers
              pay the relevant hotel, restaurant, or other business directly.
            </p>
            <p>
              LocalKokani does not currently collect customer booking payments
              through the website under its standard listing model.
            </p>
            <p>
              Payments, deposits, refunds, and cancellation charges are handled
              according to the terms agreed between the customer and the
              business, subject to applicable law.
            </p>
            <p>
              For businesses enrolled in a commission-based partner plan, the
              applicable commission is governed by the separate Partner
              Agreement.
            </p>
            <p>
              Paid partner subscriptions and promotional services are governed
              by the selected plan terms and applicable refund conditions.
            </p>
            <p>
              Nothing in these Terms excludes rights or remedies that cannot
              legally be excluded.
            </p>

            <h2>8. Responsibilities of Business Owners</h2>
            <p>Business owners using LocalKokani agree to:</p>
            <ul>
              <li>Provide accurate business and contact information.</li>
              <li>
                Ensure they own the submitted content or have permission to use
                it.
              </li>
              <li>
                Maintain up-to-date prices, menus, amenities, operating hours,
                and availability.
              </li>
              <li>Respond to customer enquiries professionally.</li>
              <li>
                Honour confirmed bookings and reservations or promptly
                communicate unavoidable changes.
              </li>
              <li>
                Comply with applicable business, tax, consumer protection, food
                safety, licensing, and other legal requirements relevant to
                their operations.
              </li>
              <li>
                Obtain and maintain the registrations, permissions, and licences
                required for their business.
              </li>
              <li>
                Inform LocalKokani about significant changes affecting their
                listing.
              </li>
              <li>
                Comply with the applicable Partner Agreement and selected plan
                terms.
              </li>
            </ul>
            <p>
              For food businesses, the owner remains responsible for food
              preparation, ingredient information, food safety, hygiene,
              allergen information where applicable, and compliance with
              relevant food laws.
            </p>
            <p>
              For accommodation businesses, the owner remains responsible for
              property conditions, guest safety, room availability, facilities,
              and applicable accommodation requirements.
            </p>

            <h2>9. Partner Plans and Subscription Services</h2>
            <p>
              LocalKokani may offer free listings, commission-based listings,
              paid subscriptions, featured placements, verification services,
              and other promotional options.
            </p>
            <p>
              The features, fees, commission arrangements, duration, and
              eligibility requirements of each plan will be communicated
              separately.
            </p>

            <h3>Basic or Free Listing</h3>
            <p>
              Depending on the applicable agreement, enquiries may be received
              and coordinated by LocalKokani. The business owner may be required
              to pay an agreed commission on qualifying bookings or transactions
              generated through the Platform.
            </p>

            <h3>Paid Direct-Contact Plans</h3>
            <p>
              Eligible listings may display the business owner&apos;s approved
              contact number or WhatsApp link so customers can contact the
              business directly.
            </p>
            <p>
              Direct-contact features do not guarantee a specific number of
              enquiries, bookings, reservations, orders, or revenue.
            </p>

            <h3>Featured and Premium Plans</h3>
            <p>
              Paid plans may include additional visibility, enhanced listings,
              promotional placements, or verification eligibility according to
              the selected plan.
            </p>
            <p>
              Payment for a subscription or promotion does not guarantee a
              particular search position or commercial outcome.
            </p>
            <p>
              Detailed partner obligations are set out in the Partner Agreement
              and the applicable plan terms.
            </p>

            <h2>10. Verified Badge</h2>
            <p>
              LocalKokani may display a Verified badge for businesses that
              successfully complete our internal verification process.
            </p>
            <p>
              Verification may include reviewing the owner&apos;s or authorized
              representative&apos;s identity, contact information, business
              location, submitted documents, and listing details, according to
              the relevant verification criteria.
            </p>
            <p>The badge:</p>
            <ul>
              <li>Represents LocalKokani&apos;s internal verification process.</li>
              <li>Is not government approval or official tourism certification.</li>
              <li>
                Does not guarantee service quality, cleanliness, food safety,
                availability, customer satisfaction, or future performance.
              </li>
              <li>
                May be suspended or removed if the information becomes
                inaccurate, verification requirements are no longer met, or
                misuse is identified.
              </li>
            </ul>
            <p>
              Our verification process does not replace the legal obligations of
              the business owner.
            </p>

            <h2>11. Reviews, Ratings, and User-Submitted Content</h2>
            <p>
              If LocalKokani permits users to submit reviews, ratings,
              photographs, or other content, users must ensure that their
              submissions are lawful, truthful, relevant, and respectful.
            </p>
            <p>
              You must not submit fabricated reviews, impersonate another
              person, manipulate ratings, or upload content that infringes
              another person&apos;s rights.
            </p>
            <p>
              We may moderate, restrict, or remove content that violates our
              policies or applicable law.
            </p>
            <p>
              Submitting content does not transfer ownership of that content to
              LocalKokani. However, you grant us permission to use, display,
              reproduce, and distribute the submitted content as reasonably
              necessary to operate and promote the Platform, subject to
              applicable law and any separate terms presented when the content
              is submitted.
            </p>

            <h2>12. Intellectual Property</h2>
            <p>
              The LocalKokani name, logo, website design, original text,
              graphics, and other Platform materials are owned by or licensed to
              LocalKokani, unless otherwise indicated.
            </p>
            <p>
              You may not copy, reproduce, modify, distribute, or commercially
              exploit our protected materials without prior authorization,
              except where permitted by law.
            </p>
            <p>
              Business owners retain their rights in their own content and must
              have the necessary permissions to submit it.
            </p>

            <h2>13. Third-Party Platforms and External Links</h2>
            <p>
              LocalKokani may link to or integrate with third-party services
              such as WhatsApp, Google Maps, social media platforms, or external
              business websites.
            </p>
            <p>
              Those services operate independently and are governed by their own
              terms and policies.
            </p>
            <p>
              We do not control their availability, security, content, or
              privacy practices and are not responsible for their independent
              operations.
            </p>

            <h2>14. Disclaimer of Platform Warranties</h2>
            <p>
              To the extent permitted by applicable law, LocalKokani provides
              its discovery and listing services on an &quot;as available&quot;
              basis.
            </p>
            <p>We do not guarantee that:</p>
            <ul>
              <li>Every listing will remain available or accurate.</li>
              <li>Every enquiry will receive a response.</li>
              <li>A particular business will accept a reservation or order.</li>
              <li>
                The website will always operate without interruptions or errors.
              </li>
              <li>
                A listing will achieve a specific search ranking or business
                result.
              </li>
            </ul>
            <p>
              Nothing in this section limits any consumer or other legal right
              that cannot lawfully be excluded.
            </p>

            <h2>15. Limitation of Liability</h2>
            <p>
              To the extent permitted by applicable law, LocalKokani is not
              responsible for the independent acts, omissions, services,
              representations, or conduct of listed businesses or users.
            </p>
            <p>
              This includes disputes relating to accommodation quality, food
              quality, food safety, pricing, availability, booking
              confirmations, reservations, cancellations, refunds, or the
              performance of services provided directly by a business.
            </p>
            <p>
              We are also not responsible for interruptions caused by
              third-party services or events outside our reasonable control.
            </p>
            <p>
              This section does not exclude liability where such exclusion is
              prohibited by applicable law, including liability that cannot
              legally be limited.
            </p>

            <h2>16. Suspension and Termination</h2>
            <p>
              We may suspend, restrict, or remove a listing or account where
              reasonably necessary because of suspected fraud, misleading
              information, unlawful activity, violations of these Terms, misuse
              of the Platform, or other legitimate operational or safety
              concerns.
            </p>
            <p>
              Where appropriate and legally permissible, we may provide notice
              or an opportunity to correct the issue.
            </p>
            <p>
              Business partners remain responsible for outstanding obligations
              under their applicable agreements, including agreed commissions or
              subscription fees.
            </p>

            <h2>17. Privacy and Data Protection</h2>
            <p>
              Our collection and use of personal information are described in
              our Privacy Policy.
            </p>
            <p>
              By using the Platform, you acknowledge that personal information
              may be processed and shared as described in that policy and as
              permitted by applicable law.
            </p>
            <p>
              Please read our{" "}
              <a href="/privacy-policy">Privacy Policy</a> before submitting
              personal information or business verification documents.
            </p>

            <h2>18. Changes to These Terms</h2>
            <p>
              We may update these Terms when our services, features, business
              model, or legal requirements change.
            </p>
            <p>
              The revised version will be published on this page with an updated
              Effective Date.
            </p>
            <p>
              Where required by law, we will provide notice or obtain consent
              for material changes.
            </p>
            <p>
              Your use of the Platform after updated Terms take effect will be
              governed by the revised Terms, subject to applicable law.
            </p>
            <p>
              Changes to a separate Partner Agreement will be handled according
              to that agreement and applicable law.
            </p>

            <h2>19. Governing Law and Disputes</h2>
            <p>These Terms are governed by the laws of India.</p>
            <p>
              Disputes will be subject to the jurisdiction of the competent
              courts in Maharashtra, India, to the extent permitted by
              applicable law.
            </p>
            <p>
              Nothing in this section prevents a consumer from exercising any
              mandatory legal rights or remedies available to them.
            </p>

            <h2>20. Contact Us</h2>
            <p>
              For questions about these Terms &amp; Conditions, please contact
              us:
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href="https://www.localkokani.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.localkokani.com
              </a>
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:localkokani001@gmail.com">
                localkokani001@gmail.com
              </a>
             
            </p>

            <hr />

            <p>
              <strong>LocalKokani</strong>
              <br />
              <em>Stay with Locals</em>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}