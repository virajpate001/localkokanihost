// src/app/terms-for-travelers/page.js
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Terms for Travelers | Local Kokani",
  description:
    "Terms governing the use of Local Kokani by travelers and customers when browsing listings, submitting enquiries, and contacting businesses.",
  path: "/terms-for-travelers",
  keywords: [
    "terms for travelers",
    "traveler terms",
    "customer terms",
    "booking enquiries",
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
            Effective Date: 12 October 2026
          </p>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-a:text-secondary">
            <h2>1. Introduction</h2>
            <p>
              Welcome to <strong>LocalKokani</strong>.
            </p>
            <p>
              LocalKokani is an online discovery, listing, and enquiry platform
              that helps travelers discover accommodation, dining options, and
              local businesses across the Konkan region of Maharashtra, India.
            </p>
            <p>
              These Terms for Travelers govern your use of our website when
              browsing listings, contacting businesses, submitting enquiries, or
              using other customer-facing features.
            </p>
            <p>
              By accessing or using LocalKokani, you agree to these Terms, our
              Terms &amp; Conditions, Privacy Policy, and other applicable
              website policies.
            </p>
            <p>
              If you do not agree with these Terms, please discontinue using the
              Platform.
            </p>

            <h2>2. About LocalKokani</h2>
            <p>
              LocalKokani helps users discover and connect with independent
              businesses, including:
            </p>
            <ul>
              <li>Hotels and resorts</li>
              <li>Homestays, villas, and cottages</li>
              <li>Guest houses and other accommodation providers</li>
              <li>Restaurants and Khanavals</li>
              <li>Dhabas and local food businesses</li>
              <li>Other listed travel-related businesses</li>
            </ul>
            <p>
              Unless expressly stated otherwise, LocalKokani does not own,
              operate, or manage these businesses.
            </p>
            <p>
              The accommodation, food, and other services advertised on the
              Platform are provided by the respective business owners.
            </p>

            <h2>3. Using the Platform</h2>
            <p>
              You agree to use LocalKokani responsibly and only for lawful
              purposes.
            </p>
            <p>You must not:</p>
            <ul>
              <li>Submit false or misleading enquiries.</li>
              <li>Use another person&apos;s identity without authorization.</li>
              <li>Harass, threaten, or abuse business owners or other users.</li>
              <li>Misuse publicly displayed phone numbers or WhatsApp links.</li>
              <li>Attempt unauthorized access to the website.</li>
              <li>Upload malicious content or interfere with website operations.</li>
              <li>Use the Platform for fraudulent or unlawful activities.</li>
            </ul>
            <p>
              We may restrict access to users who violate these Terms, subject to
              applicable law.
            </p>

            <h2>4. Property and Business Information</h2>
            <p>
              LocalKokani displays information that may be provided by business
              owners, their authorized representatives, or other sources.
            </p>
            <p>
              Listings may contain photographs, descriptions, contact details,
              room prices, menus, food prices, amenities, opening hours,
              location details, and promotional offers.
            </p>
            <p>
              We make reasonable efforts to maintain useful listings but cannot
              guarantee that all information is complete, current, or accurate
              at all times.
            </p>
            <p>Business information may change without our knowledge.</p>
            <p>
              Before making a booking, reservation, order, or payment, you
              should confirm all important details directly with the relevant
              business.
            </p>

            <h2>5. Accommodation Enquiries</h2>
            <p>
              When enquiring about hotels, resorts, homestays, villas, cottages,
              or other accommodation, you should confirm:
            </p>
            <ul>
              <li>Check-in and check-out dates</li>
              <li>Room availability and room type</li>
              <li>
                Total price and any applicable taxes or additional charges
              </li>
              <li>Number of guests and occupancy limits</li>
              <li>Amenities and facilities included</li>
              <li>Check-in and check-out times</li>
              <li>Advance payment or deposit requirements</li>
              <li>Cancellation, modification, and refund terms</li>
              <li>Any special requests or property rules</li>
            </ul>
            <p>
              Submitting an enquiry does not automatically reserve a room or
              confirm a booking.
            </p>
            <p>
              A booking is confirmed only when the accommodation provider
              confirms it through an agreed communication channel.
            </p>

            <h2>6. Restaurant and Khanaval Enquiries</h2>
            <p>
              When contacting restaurants, Khanavals, dhabas, or other food
              businesses, you should confirm:
            </p>
            <ul>
              <li>Current menu and food prices</li>
              <li>Dish availability</li>
              <li>Restaurant opening hours</li>
              <li>Seating availability and table reservation details</li>
              <li>Takeaway or delivery availability, where offered</li>
              <li>Applicable minimum order or delivery charges</li>
              <li>Ingredients and dietary requirements</li>
              <li>Allergy-related concerns</li>
              <li>Payment methods accepted by the business</li>
            </ul>
            <p>
              A menu displayed on LocalKokani may not always reflect real-time
              availability or updated prices.
            </p>
            <p>
              An enquiry does not automatically confirm a table reservation,
              food order, or delivery request.
            </p>
            <p>The restaurant must confirm the relevant arrangement directly.</p>

            <h2>7. How Customer Enquiries Work</h2>
            <p>
              Depending on the listing and the business&apos;s selected partner
              plan, LocalKokani may offer different contact methods.
            </p>

            <h3>Enquiries Managed by LocalKokani</h3>
            <p>
              For certain free listings, your enquiry may be received by the
              LocalKokani team.
            </p>
            <p>
              Our team may contact you to understand your requirements and
              coordinate with the relevant business.
            </p>
            <p>
              Where appropriate, we may share the information necessary for the
              business to respond to your enquiry.
            </p>

            <h3>Direct Business Contact</h3>
            <p>
              For eligible listings, you may contact the business owner directly
              through a published telephone number or WhatsApp link.
            </p>
            <p>
              In such cases, you are responsible for confirming the details of
              your arrangement directly with the business.
            </p>

            <h3>No Guaranteed Response</h3>
            <p>
              LocalKokani cannot guarantee that every enquiry will receive a
              response or that a business will have the requested service
              available.
            </p>

            <h2>8. Bookings, Reservations, and Orders</h2>
            <p>
              Unless expressly stated otherwise, booking and service
              arrangements are made directly between you and the relevant
              business.
            </p>
            <p>
              LocalKokani does not guarantee acceptance of an enquiry,
              availability of a service, or fulfilment of a request.
            </p>
            <p>
              You should obtain clear confirmation of the agreed arrangements
              before travelling, arriving at a restaurant, or relying on a
              reservation or order.
            </p>
            <p>
              Any special requests should be confirmed directly with the
              business.
            </p>

            <h2>9. Payments and Financial Transactions</h2>
            <p>
              Under LocalKokani&apos;s standard listing model, customers
              generally pay the relevant business directly.
            </p>
            <p>
              LocalKokani does not currently collect customer booking payments
              through the website under this model.
            </p>
            <p>Before making a payment, you should:</p>
            <ul>
              <li>Confirm the business identity and booking or order details.</li>
              <li>Verify the total amount payable.</li>
              <li>Understand the applicable deposit and cancellation terms.</li>
              <li>
                Use payment methods and payment details confirmed by the
                business.
              </li>
              <li>
                Keep receipts, transaction references, and written
                confirmations.
              </li>
            </ul>
            <p>
              LocalKokani is not a party to direct payment transactions between
              customers and independent businesses, except where a particular
              service expressly states otherwise.
            </p>
            <p>
              If LocalKokani introduces a payment or booking service in the
              future, additional terms may apply.
            </p>

            <h2>10. Cancellations, Changes, and Refunds</h2>
            <p>
              Cancellation, modification, and refund conditions depend on the
              relevant business&apos;s disclosed policy and the terms agreed
              with you.
            </p>
            <p>
              For accommodation bookings, contact the property owner directly to
              request a cancellation or change.
            </p>
            <p>
              For restaurant reservations or food orders, contact the restaurant
              directly as soon as possible.
            </p>
            <p>
              LocalKokani does not generally process or control refunds under
              its standard listing model.
            </p>
            <p>
              Businesses must comply with applicable law and any commitments
              they have made to customers.
            </p>
            <p>
              For more information, please read our{" "}
              <a href="/cancellation-policy">Cancellation Policy</a>.
            </p>

            <h2>11. Premium Businesses</h2>
            <p>
             Some listings may display a Premium badge after subscribing to LocalKokani's paid plans.
            </p>
            <p>
              The badge indicates that the business has an active paid subscription with LocalKokani.
            </p>
            <p>It does not guarantee:</p>
            <ul>
              <li>Service quality or customer satisfaction</li>
              <li>Accommodation cleanliness or safety</li>
              <li>Food quality or food safety</li>
              <li>Accurate real-time availability</li>
              <li>Future business performance</li>
              <li>Government approval or official certification</li>
            </ul>
            <p>
             You should still confirm important details directly with the business.
            </p>

            <h2>12. Reviews and Feedback</h2>
            <p>
              If LocalKokani allows customers to submit reviews, ratings, or
              feedback, you must ensure that your submissions reflect your
              genuine experience and do not contain knowingly false statements,
              harassment, unlawful content, or another person&apos;s private
              information without authorization.
            </p>
            <p>
              We may moderate or remove content that violates our policies or
              applicable law.
            </p>
            <p>
              You must not manipulate ratings, submit fabricated reviews, or
              impersonate another customer.
            </p>

            <h2>13. Privacy and Sharing of Information</h2>
            <p>
              When you submit an enquiry, LocalKokani may collect information
              such as your name, phone number, requested dates, number of
              guests, destination, or other details you voluntarily provide.
            </p>
            <p>
              For enquiry coordination, we may share relevant information with
              the business you wish to contact.
            </p>
            <p>
              If you use WhatsApp or another third-party service, your
              interaction may also be governed by that service&apos;s own terms
              and privacy policy.
            </p>
            <p>
              For further information, please read our{" "}
              <a href="/privacy-policy">Privacy Policy</a>.
            </p>

            <h2>14. Travel and Personal Safety</h2>
            <p>
              Travelers are responsible for making appropriate arrangements for
              their journeys and assessing whether a business or destination
              meets their needs.
            </p>
            <p>Before travelling, consider checking:</p>
            <ul>
              <li>Weather and road conditions</li>
              <li>Local restrictions and opening hours</li>
              <li>Transport and accessibility</li>
              <li>Property rules and guest requirements</li>
              <li>Relevant food and dietary requirements</li>
            </ul>
            <p>Follow applicable laws, local guidance, and safety instructions.</p>
            <p>
              For emergencies, contact the appropriate local emergency services.
            </p>

            <h2>15. Limitation of Responsibility</h2>
            <p>
              LocalKokani operates as a discovery and enquiry platform and does
              not generally provide the accommodation, dining, or other services
              listed.
            </p>
            <p>
              To the extent permitted by applicable law, LocalKokani is not
              responsible for the independent acts, omissions, or services of
              listed businesses, including disputes involving pricing,
              availability, service quality, reservations, cancellations, or
              refunds.
            </p>
            <p>
              Nothing in these Terms excludes or limits any rights or
              liabilities that cannot legally be excluded or limited.
            </p>

            <h2>16. Suspension or Restriction of Access</h2>
            <p>
              We may restrict access to the website or its features if we
              reasonably believe that a user has violated these Terms, engaged
              in fraudulent activity, or misused the Platform, subject to
              applicable law.
            </p>

            <h2>17. Changes to These Terms</h2>
            <p>
              We may update these Terms to reflect changes in our services,
              website features, business model, or legal requirements.
            </p>
            <p>
              The revised version will be published on this page with an updated
              Effective Date.
            </p>
            <p>
              Where required by applicable law, we will provide notice or obtain
              consent for material changes.
            </p>

            <h2>18. Governing Law</h2>
            <p>These Terms are governed by the laws of India.</p>
            <p>
              Disputes will be subject to the jurisdiction of the competent
              courts in Maharashtra, India, to the extent permitted by 
              applicable law.
            </p>
            <p>
              Nothing in this section prevents you from exercising mandatory
              consumer rights or other legal remedies available to you.
            </p>

            <h2>19. Contact Us</h2>
            <p>
              If you have any questions regarding these Terms for Travelers,
              please contact us:
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