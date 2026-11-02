// src/app/terms-for-travelers/page.js
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Terms for Travelers | Local Kokani",
  description:
    "Terms governing the use of Local Kokani by travelers, including accommodation bookings, restaurant reservations, food orders, the fixed commission, payments, cancellations, and travel safety.",
  path: "/terms-for-travelers",
  keywords: [
    "terms for travelers",
    "traveler terms",
    "booking terms",
    "food orders",
    "restaurant reservations",
    "fixed commission",
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
            Effective Date: 2 November 2026
          </p>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-a:text-secondary">
            <h2>1. Introduction</h2>
            <p>
              Welcome to LocalKokani (&quot;LocalKokani&quot;, &quot;we&quot;,
              &quot;our&quot; or &quot;us&quot;).
            </p>
            <p>
              LocalKokani is a platform that helps travelers discover
              accommodation, restaurants, Khanavals, dhabas, food services and
              local experiences across the Konkan region of Maharashtra, India.
            </p>
            <p>
              These Terms for Travelers explain the conditions under which you
              may use our website, browse business listings, submit enquiries,
              make accommodation bookings, place food orders and request
              restaurant reservations through LocalKokani.
            </p>
            <p>
              By accessing or using our website or services, you agree to these
              Terms, along with our{" "}
              <a href="/terms-and-conditions">Terms and Conditions</a>,{" "}
              <a href="/privacy-policy">Privacy Policy</a> and applicable{" "}
              <a href="/cancellation-policy">Cancellation and Refund Policy</a>.
            </p>
            <p>
              Please read these Terms carefully before making an enquiry,
              booking, reservation or order.
            </p>

            <h2>2. Our Role</h2>
            <p>
              LocalKokani operates as a discovery and enquiry facilitation
              platform connecting travelers with independent accommodation
              providers, restaurants and other local businesses.
            </p>
            <p>
              Depending on the listing type and service arrangement, LocalKokani
              may:
            </p>
            <ul>
              <li>Display accommodation and restaurant listings.</li>
              <li>
                Share business information, photos, facilities, menus and
                contact details.
              </li>
              <li>Receive and forward customer enquiries.</li>
              <li>Coordinate booking or reservation requests.</li>
              <li>Facilitate advance payments where applicable.</li>
              <li>Share booking or order confirmation details.</li>
              <li>Help travelers communicate with listed business owners.</li>
            </ul>
            <p>
              LocalKokani does not own, operate or manage the listed hotels,
              homestays, villas, restaurants, Khanavals or other independent
              businesses unless expressly stated.
            </p>
            <p>
              A listing on LocalKokani does not automatically mean that the
              business has been independently inspected, certified or guaranteed
              by LocalKokani.
            </p>
            <p>
              The actual accommodation, food, services and facilities are
              provided by the respective business owners.
            </p>

            <h2>3. Business Information and Availability</h2>
            <p>
              We try to display useful and accurate information provided by
              business owners. However, prices, availability, facilities, menus,
              operating hours and other business details may change.
            </p>
            <p>
              Before confirming any booking, reservation or order, travelers
              should verify the following directly with the business or through
              the applicable LocalKokani communication process:
            </p>
            <ul>
              <li>Availability for the required date and time.</li>
              <li>Room type, number of rooms and accommodation capacity.</li>
              <li>Total price, taxes and additional charges.</li>
              <li>Check-in and check-out timings.</li>
              <li>Amenities and facilities.</li>
              <li>Restaurant operating hours and menu availability.</li>
              <li>Food prices, quantities and special requirements.</li>
              <li>Advance payment requirements.</li>
              <li>Cancellation, modification and refund conditions.</li>
            </ul>
            <p>
              Submitting an enquiry does not constitute a confirmed booking,
              reservation or order.
            </p>
            <p>
              A booking, reservation or order is considered confirmed only after
              the applicable confirmation process has been completed and
              confirmation details have been communicated.
            </p>

            <h2>4. Accommodation Bookings</h2>
            <p>
              LocalKokani may facilitate accommodation enquiries and bookings
              for hotels, resorts, homestays, villas, cottages, guest houses,
              lodges and other listed accommodation providers.
            </p>

            <h3>4.1 Basic Listing Accommodation Bookings</h3>
            <p>For businesses using the Basic Listing plan:</p>
            <ul>
              <li>Travelers may submit enquiries through LocalKokani.</li>
              <li>
                LocalKokani may coordinate with the accommodation owner
                regarding availability, pricing and booking conditions.
              </li>
              <li>
                Once the traveler agrees to the applicable terms, the booking
                may be confirmed through the agreed process.
              </li>
              <li>
                LocalKokani may collect an advance payment from the traveler
                where applicable.
              </li>
              <li>
                The collected amount may be transferred to the accommodation
                owner after deducting the agreed LocalKokani commission.
              </li>
              <li>
                The owner&apos;s contact number may be shared with the traveler
                as part of the booking process.
              </li>
            </ul>
            <p>
              <strong>Commission for Basic Listing Accommodation Bookings</strong>
            </p>
            <p>
              A fixed commission
              <strong> per unique confirmed Booking Reference ID</strong>{" "}
              applies to eligible Basic Listing accommodation bookings.
            </p>
            <p>
              The commission applies once per confirmed Booking Reference ID,
              regardless of the number of rooms, nights or guests included in
              that booking.
            </p>
            <p>
              For example, one confirmed Booking Reference ID covering three
              rooms for two nights attracts fixed commission, not a separate
              commission for each room or night.
            </p>
            <p>
              If two independent bookings are confirmed under two separate
              Reference IDs, the applicable commission is fixed for each
              Reference ID.
            </p>
            <p>
              The commission arrangement will be disclosed and accepted before
              the booking is confirmed.
            </p>

            <h3>4.2 Premium Plan Accommodation Bookings</h3>
            <p>For accommodation businesses using the Premium Plan:</p>
            <ul>
              <li>
                Travelers may contact the property owner directly through the
                contact details provided on the listing.
              </li>
              <li>
                The property owner is responsible for confirming availability,
                pricing and booking conditions.
              </li>
              <li>
                Payments, booking confirmation, cancellation and refunds are
                handled directly between the traveler and the property owner.
              </li>
            </ul>
            <p>
              No standard fixed commission applies to direct transactions under
              the Premium Plan unless a separate commission arrangement has been
              disclosed and agreed to in writing.
            </p>

            <h3>4.3 Booking Confirmation</h3>
            <p>
              Travelers should retain their Booking Reference ID, payment
              receipt, confirmation message and other booking-related
              communication.
            </p>
            <p>
              Please verify all booking details before making payment,
              including:
            </p>
            <ul>
              <li>Property name and location.</li>
              <li>Check-in and check-out dates.</li>
              <li>Number of rooms and guests.</li>
              <li>Total booking amount.</li>
              <li>Advance paid and remaining balance.</li>
              <li>Cancellation and refund conditions.</li>
            </ul>
            <p>
              LocalKokani is not responsible for a booking that has not been
              confirmed through the applicable process.
            </p>

            <h2>5. Cancellation and Refunds for Accommodation</h2>
            <p>
              Cancellation and refund conditions may vary between accommodation
              providers.
            </p>
            <p>
              The applicable cancellation policy, including deadlines,
              deductions and refund eligibility, should be communicated before
              booking confirmation.
            </p>
            <p>
              Travelers should review and understand those conditions before
              paying any advance or confirming a booking.
            </p>

            <h3>5.1 Basic Listing Accommodation Bookings</h3>
            <p>For Basic Listing bookings:</p>
            <ul>
              <li>
                If an advance payment is collected by LocalKokani, the payment
                may be transferred to the property owner after deducting the
                agreed commission.
              </li>
              <li>
                If the advance has already been transferred to the property
                owner, the property owner is responsible for processing any
                customer refund due under the disclosed cancellation conditions
                and applicable law.
              </li>
              <li>
                If the advance is still held by LocalKokani, travelers should
                contact LocalKokani regarding the applicable refund process.
              </li>
             
              <li>
                If the fixed commission has already been collected or deducted,
                the fixed commission will be returned to the Partner under the agreed
                arrangement.
              </li>
            </ul>
            <p>
              <strong>Important:</strong> Returning the commission to the
              Partner is separate from refunding the traveler&apos;s advance
              payment. The traveler&apos;s refund entitlement depends on the
              cancellation conditions disclosed before confirmation and
              applicable law.
            </p>

            <h3>5.2 Premium Plan Accommodation Bookings</h3>
            <p>
              For Premium Plan bookings, travelers deal directly with the
              accommodation owner.
            </p>
            <p>
              Travelers must contact the property owner directly for cancellation
              requests, refund status, booking modifications and related
              concerns.
            </p>

            <h3>5.3 Cancellation by the Property Owner</h3>
            <p>If a property owner cancels a confirmed booking:</p>
            <ul>
              <li>The property owner should inform the traveler promptly.</li>
              <li>
                The property owner is responsible for refunding amounts due to
                the traveler, subject to applicable law and the agreed booking
                conditions.
              </li>
              <li>
                Any alternative accommodation or revised booking arrangement is
                subject to the traveler&apos;s acceptance.
              </li>
            </ul>
            <p>
              LocalKokani may assist with communication where the booking was
              facilitated through the platform, but does not guarantee the
              availability of alternative accommodation.
            </p>

            <h2>6. Restaurants and Food Businesses</h2>
            <p>
              LocalKokani may display restaurants, Khanavals, dhabas and other
              food businesses to help travelers discover local food options.
            </p>
            <p>
              Restaurant menus, food prices, operating hours, seating capacity
              and availability are provided by the respective businesses and may
              change without prior notice.
            </p>
            <p>
              Travelers should verify the following before placing an order or
              requesting a reservation:
            </p>
            <ul>
              <li>Restaurant opening and closing hours.</li>
              <li>Menu items and availability.</li>
              <li>Food prices and additional charges.</li>
              <li>Table availability and reservation conditions.</li>
              <li>Order preparation and collection time.</li>
              <li>Delivery or takeaway availability.</li>
              <li>Payment and cancellation conditions.</li>
            </ul>

            <h3>6.1 Restaurant Reservations and Food Orders</h3>
            <p>
              LocalKokani may facilitate restaurant table reservations, food
              orders and takeaway enquiries.
            </p>
            <p>
              <strong>Basic Listing Restaurants and Food Businesses</strong>
            </p>
            <ul>
              <li>
                Travelers may submit reservation or food order enquiries through
                LocalKokani.
              </li>
              <li>
                LocalKokani may coordinate with the restaurant regarding table
                availability, menu items, prices and order details.
              </li>
              <li>
                The restaurant or food business must confirm the reservation or
                order through the applicable process.
              </li>
              <li>
                Payment may be collected by LocalKokani or directly by the
                restaurant, depending on the agreed arrangement.
              </li>
              <li>
                Travelers should verify the order details, total amount and
                applicable conditions before confirmation.
              </li>
            </ul>
            <p>
              <strong>
                Commission for Basic Listing Restaurant and Food Transactions
              </strong>
            </p>
            <p>
              A fixed commission 
              <strong> per unique confirmed Booking / Order Reference ID</strong>{" "}
              applies to eligible Basic Listing restaurant and food
              transactions.
            </p>
            <p>This includes:</p>
            <ul>
              <li>Restaurant table reservations.</li>
              <li>Restaurant bookings.</li>
              <li>Food orders.</li>
              <li>Takeaway orders.</li>
              <li>
                Orders placed with Khanavals, dhabas and other listed food
                businesses.
              </li>
            </ul>
            <p>
              The fixed commission applies once per unique confirmed Reference
              ID, regardless of the number of food items, quantities or guests
              included in that transaction.
            </p>
            <p>
              For example, one confirmed Order Reference ID containing five food
              items attracts fixed commission, not fixed commissions per food item.
            </p>
            <p>
              Two independent confirmed orders under two separate Reference IDs
              attract fixed commission each.
            </p>
            <p>
              No commission is payable for an enquiry or a transaction that has
              not been confirmed.
            </p>
            <p>
              The commission arrangement will be disclosed and accepted before
              the transaction is confirmed.
            </p>
          
            <p>
              <strong>Premium Plan Restaurants and Food Businesses</strong>
            </p>
            <p>
              Travelers may contact Premium Plan restaurants and food businesses
              directly.
            </p>
            <p>
              The restaurant is responsible for confirming reservations,
              accepting orders, collecting payments and handling cancellations.
            </p>
            <p>
              No standard fixed commission applies to direct Premium Plan
              transactions unless a separate commission arrangement has been
              disclosed and agreed to in writing.
            </p>

            <h3>6.2 Food Quality and Incorrect Orders</h3>
            <p>The restaurant or food business is responsible for:</p>
            <ul>
              <li>Food preparation and quality.</li>
              <li>Food hygiene and safety.</li>
              <li>
                Ingredients and allergen information supplied by the business.
              </li>
              <li>Correct order preparation.</li>
              <li>Food packaging and takeaway handling.</li>
              <li>Pricing and quantity.</li>
              <li>Timely order fulfilment.</li>
              <li>Applicable food safety and licensing requirements.</li>
            </ul>
            <p>
              If a traveler receives incorrect, incomplete, damaged or
              unsatisfactory food, the traveler should contact the restaurant or
              food business directly as soon as possible.
            </p>
            <p>
              The relevant business is responsible for reviewing the complaint
              and providing any appropriate correction, replacement or refund
              under its disclosed policy and applicable law.
            </p>
            <p>
              LocalKokani does not ordinarily prepare, package, sell or deliver
              food and is not responsible for the restaurant&apos;s food
              preparation, quality or delivery operations.
            </p>
            <p>
              However, where LocalKokani has directly collected a payment or
              facilitated a transaction, travelers may contact LocalKokani for
              assistance with communication and transaction-related information.
            </p>
            <p>
              Nothing in these Terms limits any consumer rights or remedies
              available to travelers under applicable law.
            </p>

            <h2>7. Payments and Receipts</h2>
            <p>
              Payment arrangements depend on the listing type and the specific
              transaction.
            </p>

            <h3>7.1 Basic Listing Accommodation Payments</h3>
            <p>
              For Basic Listing accommodation bookings, LocalKokani may collect
              an advance payment from the traveler and transfer the applicable
              balance to the property owner after deducting the agreed fixed
              commission.
            </p>
            <p>
              Where the property owner directly collects payment for a Basic
              Listing booking, the property owner remains responsible for paying
              the agreed fixed commission to LocalKokani.
            </p>

            <h3>7.2 Basic Listing Restaurant and Food Payments</h3>
            <p>
              For Basic Listing restaurant reservations and food orders, payment
              may be collected by LocalKokani or directly by the restaurant,
              depending on the arrangement communicated before confirmation.
            </p>
            <p>
              Where LocalKokani collects payment, the agreed fixed commission may
              be deducted before transferring the balance to the restaurant or
              food business.
            </p>
            <p>
              Where the restaurant directly collects payment, the restaurant is
              responsible for paying the agreed fixed commission to LocalKokani.
            </p>

            <h3>7.3 Premium Plan Payments</h3>
            <p>
              For Premium Plan accommodation and restaurant transactions,
              travelers generally make payments directly to the respective
              business owner.
            </p>
            <p>
              LocalKokani does not ordinarily collect or process payments for
              these direct transactions.
            </p>

            <h3>7.4 Commission and Reference IDs</h3>
            <p>
              The following commission rules apply to eligible Basic Listing
              transactions:
            </p>
            <ul>
              <li>fixed commission per unique confirmed Booking / Order Reference ID.</li>
              <li>
                One Reference ID attracts only one fixed commission, regardless
                of rooms, nights, guests, food items or quantities.
              </li>
              <li>
                Each separate confirmed Reference ID attracts a separate fixed
                commission.
              </li>
              <li>
                Enquiries and unconfirmed transactions do not attract
                commission.
              </li>
              <li>
                Modifications under the same Reference ID do not attract an
                additional commission solely because of the modification.
              </li>
              <li>
                If the confirmed transaction is cancelled, LocalKokani will not
                retain the commission for that cancelled transaction. Any
                commission already collected or deducted will be returned to the
                Partner in full under the agreed arrangement.
              </li>
            </ul>
            <p>
              The commission and payment arrangement must be disclosed and
              accepted before the transaction is confirmed.
            </p>

            <h3>7.5 Payment Safety</h3>
            <p>Before making any payment, travelers should verify:</p>
            <ul>
              <li>The recipient&apos;s name and payment details.</li>
              <li>The total amount payable.</li>
              <li>The Booking or Order Reference ID.</li>
              <li>The advance amount and remaining balance.</li>
              <li>The applicable cancellation and refund conditions.</li>
            </ul>
            <p>Travelers should retain payment receipts and transaction records.</p>
            <p>
              Never share your OTP, UPI PIN, banking password, card PIN or other
              confidential financial credentials with anyone.
            </p>

            <h2>8. Premium Badge and Custom Badges</h2>
            <p>
              A Premium badge on a LocalKokani listing indicates that the
              business has an active paid Premium subscription with LocalKokani.
            </p>
            <p>
              Custom badges such as &quot;Top Rated&quot; or other listing
              labels may be displayed according to the applicable listing
              criteria and platform arrangements.
            </p>
            <p>
              A Premium badge does not mean that the business has been certified,
              approved or guaranteed by a government authority or that
              LocalKokani guarantees the quality of its accommodation, food or
              services.
            </p>
            <p>
              Travelers should independently verify important business
              information before making a booking, reservation or order.
            </p>

            <h2>9. Travel Safety and Accidents</h2>
            <p>
              Travelers are responsible for their own safety and personal
              belongings during travel and while using accommodation,
              restaurants and other third-party services.
            </p>
            <p>Travelers should:</p>
            <ul>
              <li>Follow applicable traffic and road safety rules.</li>
              <li>Use appropriate safety equipment while travelling.</li>
              <li>Follow local laws and instructions.</li>
              <li>Take reasonable precautions in unfamiliar locations.</li>
              <li>Check weather and road conditions before travelling.</li>
              <li>
                Follow safety instructions provided by property owners and
                service providers.
              </li>
              <li>
                Contact the relevant emergency services in case of an accident
                or emergency.
              </li>
            </ul>
            <p>
              LocalKokani does not control roads, traffic, weather,
              transportation providers, property conditions or the conduct of
              independent businesses.
            </p>
            <p>
              LocalKokani is not responsible for accidents, injuries, theft,
              loss, damage or other incidents arising from travel or the use of
              third-party services, except to the extent that liability cannot
              legally be excluded under applicable law.
            </p>
            <p>
              Nothing in this section limits any rights or remedies available to
              travelers under applicable law.
            </p>

            <h2>10. User Conduct</h2>
            <p>While using LocalKokani, travelers agree not to:</p>
            <ul>
              <li>Provide false or misleading information.</li>
              <li>Make fraudulent enquiries, bookings or orders.</li>
              <li>Use the platform for unlawful activities.</li>
              <li>Harass, threaten or abuse business owners or other users.</li>
              <li>Submit false reviews or misleading complaints.</li>
              <li>Misuse business contact details.</li>
              <li>
                Attempt unauthorized access to the website or its systems.
              </li>
              <li>
                Interfere with the website&apos;s operation or security.
              </li>
              <li>
                Use the platform to distribute spam, malicious content or
                harmful material.
              </li>
            </ul>
            <p>
              LocalKokani may restrict or suspend access where misuse, fraud or
              violation of these Terms is identified.
            </p>

            <h2>11. Reviews and Complaints</h2>
            <p>
              Travelers may share genuine feedback about their experience with
              listed businesses.
            </p>
            <p>Reviews and complaints should be:</p>
            <ul>
              <li>Honest and based on actual experience.</li>
              <li>Relevant to the service received.</li>
              <li>Respectful and free from abusive or defamatory language.</li>
              <li>Free from false claims, spam or misleading information.</li>
            </ul>
            <p>
              LocalKokani may review, moderate, remove or restrict content that
              violates these Terms or applicable law.
            </p>
            <p>
              For complaints relating to accommodation, food quality, incorrect
              orders, reservations, payments or refunds, travelers should first
              contact the relevant business.
            </p>
            <p>
              Where LocalKokani facilitated the transaction, travelers may also
              contact LocalKokani with the relevant Reference ID and supporting
              details.
            </p>
            <p>
              LocalKokani may assist with communication but does not guarantee a
              particular outcome or resolution.
            </p>

            <h2>12. Privacy and Contact Information</h2>
            <p>
              LocalKokani may collect and use personal information such as
              names, phone numbers, enquiry details and booking-related
              information to facilitate enquiries, bookings, reservations and
              customer support.
            </p>
            <p>
              Personal information will be handled in accordance with our{" "}
              <a href="/privacy-policy">Privacy Policy</a> and applicable data
              protection laws.
            </p>
            <p>
              Travelers should provide accurate contact details and should not
              share another person&apos;s personal information without
              appropriate authorization.
            </p>
            <p>
              For more information, please read our{" "}
              <a href="/privacy-policy">Privacy Policy</a>.
            </p>

            <h2>13. Third-Party Services</h2>
            <p>
              LocalKokani may contain links, maps, payment options,
              communication tools or other services provided by third parties.
            </p>
            <p>
              These third-party services may have their own terms, privacy
              policies and operating conditions.
            </p>
            <p>
              LocalKokani does not control all third-party services and is not
              responsible for their independent operations, availability or
              policies.
            </p>
            <p>
              Travelers should review the applicable terms before using
              third-party services.
            </p>

            <h2>14. Limitation of Responsibility</h2>
            <p>
              LocalKokani makes reasonable efforts to maintain useful and
              accurate platform information. However, we do not guarantee that:
            </p>
            <ul>
              <li>Every listing is available at all times.</li>
              <li>All business information is always current.</li>
              <li>Every enquiry will result in a confirmed booking.</li>
              <li>
                A listed business will meet every traveler&apos;s expectations.
              </li>
              <li>
                A third-party business will fulfil every service without delay
                or issue.
              </li>
              <li>The website will remain uninterrupted or error-free.</li>
            </ul>
            <p>
              Accommodation, restaurant services, food preparation,
              transportation and other third-party services are provided by
              independent businesses or service providers.
            </p>
            <p>
              To the extent permitted by applicable law, LocalKokani is not
              responsible for losses, damages, service failures or disputes
              arising directly from services provided by independent businesses.
            </p>
            <p>
              Nothing in these Terms excludes or limits liability that cannot
              legally be excluded or limited under applicable Indian law,
              including applicable consumer protection rights.
            </p>

            <h2>15. Changes to These Terms</h2>
            <p>
              LocalKokani may update these Terms from time to time to reflect
              changes in platform operations, services, business arrangements or
              applicable laws.
            </p>
            <p>
              The updated version will be published on this page with a revised
              Effective Date.
            </p>
            <p>
              The revised commission and payment terms effective from{" "}
              <strong>2 November 2026</strong> apply to eligible transactions
              confirmed on or after that date, subject to the applicable
              disclosure and acceptance requirements.
            </p>
            <p>
              Transactions confirmed before 2 November 2026 will remain governed
              by the commission and payment arrangements applicable when they
              were confirmed, unless the parties expressly agree otherwise.
            </p>
            <p>Travelers should review this page periodically for updates.</p>

            <h2>16. Governing Law and Dispute Resolution</h2>
            <p>These Terms are governed by the laws of India.</p>
            <p>
              Any dispute relating to the use of LocalKokani or these Terms
              should first be addressed through good-faith communication.
            </p>
            <p>
              If the dispute cannot be resolved through communication, it may be
              referred to the competent courts or authorities having jurisdiction
              under applicable Indian law.
            </p>
            <p>
              Nothing in this section affects any statutory rights or remedies
              available to consumers under applicable law.
            </p>

            <h2>17. Contact Us</h2>
            <p>
              For questions, feedback, booking-related enquiries or assistance
              concerning these Terms, please contact:
            </p>
            <p>
              <strong>LocalKokani</strong>
            </p>
            <ul>
              <li>
                <strong>Service Area:</strong> Konkan, Maharashtra, India
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:localkokani001@gmail.com">
                  localkokani001@gmail.com
                </a>
              </li>
             
              <li>
                <strong>Website:</strong>{" "}
                <a
                  href="https://localkokani.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://localkokani.com/
                </a>
              </li>
            </ul>
            <p>
              We will make reasonable efforts to respond to genuine enquiries
              and complaints.
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