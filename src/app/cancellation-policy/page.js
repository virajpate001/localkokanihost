// src/app/cancellation-policy/page.js
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Cancellation & Refund Policy | Local Kokani",
  description:
    "Rules for accommodation bookings, restaurant reservations, food-related complaints, and partner subscription cancellations and refunds on Local Kokani.",
  path: "/cancellation-policy",
  keywords: [
    "cancellation policy",
    "refund policy",
    "booking cancellation",
    "reservation cancellation",
    "partner subscription refund",
    "local kokani cancellation",
  ],
});

export default function CancellationPolicyPage() {
  return (
    <>
      <div className="bg-secondary dark:bg-gray-900">
        <Breadcrumbs
          items={[
            { name: "Cancellation & Refund Policy", url: "/cancellation-policy" },
          ]}
        />
      </div>

      <section className="py-16 bg-white ">
        <div className="container-custom max-w-3xl">
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-primary mb-2">
            Cancellation &amp; Refund Policy
          </h1>
          <p className="text-gray-400 text-sm mb-10">
            Effective Date: 17 October 2026
          </p>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-a:text-secondary">
            <h2>1. Introduction</h2>
            <p>Welcome to LocalKokani.</p>
            <p>
              LocalKokani helps travelers discover accommodation, restaurants,
              Khanavals, dhabas and other local businesses across the Konkan
              region of Maharashtra, India.
            </p>
            <p>
              This Cancellation &amp; Refund Policy explains the rules for
              accommodation bookings, restaurant reservations, food-related
              complaints and partner subscription cancellations.
            </p>
            <p>LocalKokani offers two partner plans:</p>
            <ul>
              <li>
                <strong>Basic Listing (Free):</strong> Customer enquiries are
                routed through LocalKokani&apos;s WhatsApp, and commission
                applies to confirmed bookings under the agreed terms.
              </li>
              <li>
                <strong>Premium Plan (Paid):</strong> Customers can contact the
                business owner directly through the owner&apos;s WhatsApp
                number, with additional listing and other features.
              </li>
            </ul>
            <p>
              The cancellation and refund process depends on the selected
              partner plan and the terms communicated by the relevant business
              before a booking or reservation is confirmed.
            </p>

            <h2>2. Cancellation Rules for Accommodation Bookings</h2>
            <p>
              This section applies to hotels, resorts, homestays, villas,
              cottages, guest houses, lodges, farm stays and other accommodation
              businesses listed on LocalKokani.
            </p>
            <p>
              Each property may have its own cancellation rules, including:
            </p>
            <ul>
              <li>Free cancellation deadlines.</li>
              <li>Advance payment and deposit conditions.</li>
              <li>Cancellation charges.</li>
              <li>Refund eligibility and timelines.</li>
              <li>Check-in and check-out conditions.</li>
              <li>No-show and late-arrival rules.</li>
              <li>
                Special conditions for peak seasons, holidays or group bookings.
              </li>
            </ul>
            <p>
              <strong>
                Travelers must read the cancellation rules displayed in the
                property&apos;s description or About section and confirm the
                applicable terms with the owner before making a booking or
                paying an advance.
              </strong>
            </p>
            <p>
              Once a booking is confirmed, the cancellation conditions agreed
              for that booking will apply, subject to applicable law and any
              non-waivable consumer rights.
            </p>

            <h2>3. Basic Listing (Free) — Booking and Cancellation Process</h2>
            <p>
              Under the Basic Listing plan, accommodation enquiries and bookings
              are coordinated through LocalKokani&apos;s WhatsApp.
            </p>
            <p>The process generally works as follows:</p>
            <ol>
              <li>The traveler contacts LocalKokani with a booking enquiry.</li>
              <li>
                LocalKokani coordinates with the property owner to check
                availability and booking details.
              </li>
              <li>
                After the booking is agreed and confirmed, LocalKokani may
                collect an advance payment from the traveler.
              </li>
              <li>LocalKokani confirms the booking with the owner.</li>
              <li>
                LocalKokani transfers the collected advance to the owner after
                deducting the agreed commission.
              </li>
              <li>
                LocalKokani shares the owner&apos;s contact number with the
                traveler for further communication.
              </li>
            </ol>

            <h3>3.1 Cancellation After Booking Confirmation</h3>
            <p>
              If a traveler cancels a confirmed booking, the cancellation rules
              communicated by the property and accepted by the traveler will
              apply.
            </p>
            <p>
              Once the advance has been transferred to the owner,{" "}
              <strong>
                the property owner is responsible for handling any refund due to
                the traveler
              </strong>
              , in accordance with the agreed cancellation conditions and
              applicable law.
            </p>
            <p>
              If the booking is cancelled and a refund is due, LocalKokani will
              return its deducted commission to the owner, as applicable, to
              facilitate the refund process.
            </p>
            <p>
              The return of LocalKokani&apos;s commission does not itself mean
              that the traveler is automatically entitled to a full refund. The
              amount and eligibility of the traveler&apos;s refund depend on the
              booking&apos;s disclosed cancellation terms and applicable law.
            </p>

            <h3>3.2 Refund Requests</h3>
            <p>
              Travelers should contact the property owner directly regarding
              cancellation requests and refunds after the advance has been
              transferred.
            </p>
            <p>
              LocalKokani may assist with communication or provide relevant
              booking information where reasonably possible. However, LocalKokani
              does not guarantee a particular refund outcome when the booking and
              refund are being handled by the owner.
            </p>
            <p>
              Where LocalKokani has not yet transferred the advance, travelers
              may contact LocalKokani to discuss the cancellation and any refund
              due under the agreed booking conditions and applicable law.
            </p>

            <h3>3.3 Booking Confirmation</h3>
            <p>
              Travelers should ensure that they receive confirmation of the
              booking and retain the payment receipt, booking details and
              applicable cancellation conditions.
            </p>
            <p>
              A request or enquiry alone does not constitute a confirmed
              booking.
            </p>

            <h2>4. Premium Plan — Booking and Cancellation Process</h2>
            <p>
              Under the Premium Plan, the owner&apos;s WhatsApp number is
              displayed or made available for direct customer enquiries.
            </p>
            <p>
              The traveler contacts the owner directly to discuss availability,
              prices, booking conditions, advance payments and confirmation.
            </p>
            <p>For bookings made directly between the traveler and the owner:</p>
            <ul>
              <li>The owner is responsible for confirming the booking.</li>
              <li>
                The owner is responsible for collecting any advance or payment.
              </li>
              <li>
                The owner is responsible for communicating cancellation and
                refund conditions.
              </li>
              <li>
                The owner is responsible for processing any refund due under the
                booking terms and applicable law.
              </li>
            </ul>
            <p>
              <strong>
                LocalKokani does not collect or process the advance for these
                direct bookings unless a separate arrangement is expressly
                agreed. LocalKokani is not responsible for managing the
                cancellation or refund of a direct booking handled by the owner.
              </strong>
            </p>
            <p>
              Travelers should contact the owner directly if they need to
              cancel, change a booking or request a refund.
            </p>
            <p>
              LocalKokani may assist with communication where appropriate, but
              does not guarantee that a direct booking will be cancelled or
              refunded.
            </p>

            <h2>5. Restaurant Table Reservations</h2>
            <p>
              This section applies to restaurants, Khanavals, dhabas and other
              food businesses listed on LocalKokani.
            </p>
            <p>
              Before confirming a table reservation, travelers should check the
              restaurant&apos;s stated cancellation conditions and confirm any
              deposit, advance payment, late-arrival or no-show rules directly
              with the restaurant.
            </p>
            <p>
              For Premium Plan businesses, travelers contact the restaurant owner
              directly. The restaurant owner is responsible for managing the
              reservation, any cancellation and any refund due.
            </p>
            <p>
              For Basic Listing businesses, enquiries may be coordinated through
              LocalKokani. If a restaurant reservation involves an advance
              collected by LocalKokani, the applicable payment and cancellation
              conditions will be communicated before confirmation.
            </p>
            <p>
              Any cancellation fee or deposit restriction must be disclosed
              before the customer commits and must comply with applicable law.
            </p>

            <h2>6. Food Quality, Incorrect or Incomplete Orders</h2>
            <p>
              LocalKokani helps customers discover food businesses but does not
              prepare, cook, package or deliver food unless expressly stated
              otherwise for a particular service.
            </p>
            <p>
              The food business is responsible for the food it prepares or
              supplies, including its quality, quantity, hygiene, safety and
              accuracy.
            </p>
            <p>
              If food is unsatisfactory, incorrect, incomplete, damaged or not
              delivered as agreed, the customer should contact the restaurant or
              food business directly as soon as possible and provide the order
              details.
            </p>
            <p>
              The business is responsible for reviewing the complaint and
              providing any replacement, correction, refund or other remedy
              required by its stated terms and applicable law.
            </p>
            <p>
              <strong>
                LocalKokani is not responsible for food preparation, food
                quality, incorrect items, missing items or fulfilment of orders
                handled directly by the food business.
              </strong>{" "}
              LocalKokani may assist with communication where reasonably
              possible, but cannot guarantee a particular resolution.
            </p>
            <p>
              Nothing in this policy excludes any responsibility or consumer
              rights that cannot lawfully be excluded under applicable law.
            </p>

            <h2>7. Cancellation by a Property or Restaurant</h2>
            <p>
              If a property owner or restaurant cancels a confirmed booking or
              reservation, the business should inform the customer promptly and
              explain the available options.
            </p>
            <p>
              Any advance payment or deposit must be refunded where required by
              the applicable booking terms and law.
            </p>
            <p>
              The business may offer an alternative date, accommodation option
              or service, but the customer is not required to accept an
              alternative they do not agree to.
            </p>
            <p>
              For Basic Listing accommodation bookings where LocalKokani
              collected and transferred the advance, the owner is responsible
              for arranging any refund due after receiving the payment.
              LocalKokani will return its commission to the owner as applicable
              to support the refund process.
            </p>
            <p>
              For Premium Plan bookings and direct restaurant transactions, the
              owner or restaurant is responsible for handling the cancellation
              and any refund due.
            </p>

            <h2>8. Partner Premium Plan Cancellation and Refunds</h2>
            <p>The Premium Plan is a paid subscription that may include:</p>
            <ul>
              <li>
                A Premium badge indicating an active paid LocalKokani
                subscription.
              </li>
              <li>
                Custom badges, such as &quot;Top Rated,&quot; where awarded under
                applicable criteria.
              </li>
              <li>Direct WhatsApp enquiries to the owner&apos;s number.</li>
              <li>Google Maps location on the listing.</li>
              <li>Priority support.</li>
            </ul>

            <h3>8.1 Cancelling a Premium Subscription</h3>
            <p>
              A partner who wishes to discontinue the Premium Plan may contact
              LocalKokani at{" "}
              <a href="mailto:localkokani001@gmail.com">
                localkokani001@gmail.com
              </a>
              .
            </p>
            <p>
              The request should include the registered business name, contact
              details and subscription information.
            </p>

            <h3>8.2 Non-Refundable Subscription Fee</h3>
            <p>
              <strong>
                The Premium Plan subscription fee is non-refundable once the
                subscription has been activated
              </strong>
              , including when a partner chooses to discontinue the plan before
              its expiry date, except where a refund is required by applicable
              law or expressly agreed in writing by LocalKokani.
            </p>
            <p>
              When the subscription expires or is cancelled, Premium features and
              the Premium badge may be removed or deactivated. A business may
              remain listed under the Basic Listing plan if it continues to meet
              the applicable listing requirements.
            </p>
            <p>
              A Premium badge indicates an active paid LocalKokani subscription;
              it is not a government certification, guarantee of service quality
              or food safety certification.
            </p>

            <h2>9. Travel Accidents, Safety and Unforeseen Events</h2>
            <p>
              Travel may involve risks, including road accidents, injuries,
              illness, severe weather, flooding, landslides, transport
              disruptions and other unforeseen circumstances.
            </p>
            <p>
              Travelers are responsible for making informed travel decisions,
              following official safety advisories, using appropriate
              precautions and obtaining suitable travel or personal insurance
              where appropriate.
            </p>
            <p>
              LocalKokani operates as a business discovery and enquiry
              facilitation platform. It does not organize or supervise every
              aspect of a traveler&apos;s journey and does not control independent
              property owners, restaurants, transport providers, roads or
              weather conditions.
            </p>
            <p>
              <strong>
                To the extent permitted by applicable law, LocalKokani is not
                responsible for accidents, injuries, losses or other incidents
                arising from a traveler&apos;s journey or from services
                independently provided by a listed business.
              </strong>
            </p>
            <p>
              This statement does not exclude or limit any liability or legal
              responsibility that cannot lawfully be excluded or limited.
            </p>
            <p>
              Travelers should contact the relevant emergency services if an
              accident or immediate safety issue occurs.
            </p>

            <h2>10. Refund Processing and Payment Records</h2>
            <p>
              Refunds are handled according to the payment arrangement for the
              particular transaction.
            </p>
            <ul>
              <li>
                <strong>Basic Listing booking:</strong> If LocalKokani collected
                an advance and transferred it to the owner, the owner is
                responsible for any refund due after the transfer. LocalKokani
                will return its commission to the owner as applicable when the
                booking is cancelled.
              </li>
              <li>
                <strong>Premium Plan booking:</strong> The traveler contacts the
                owner directly, and the owner handles any refund due.
              </li>
              <li>
                <strong>Restaurant reservation or food order:</strong> The
                restaurant or the party that received the payment is responsible
                for processing any refund due, subject to the applicable terms
                and law.
              </li>
              <li>
                <strong>Premium subscription fee:</strong> Non-refundable after
                activation, except where required by law or expressly agreed in
                writing.
              </li>
            </ul>
            <p>
              Travelers should retain booking confirmations, payment receipts,
              messages and cancellation records.
            </p>
            <p>
              Any refund processing time may depend on the payment method, bank
              or other payment provider. The responsible party should communicate
              the expected processing time where reasonably possible.
            </p>

            <h2>11. How to Contact LocalKokani</h2>
            <p>
              For help with an enquiry coordinated by LocalKokani, or for
              clarification about this policy, contact:
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
            <p>
              When contacting us, please provide the business name, booking
              reference if available, transaction date and a brief description
              of your request. Do not send passwords or full payment-card
              details.
            </p>

            <h2>12. Policy Updates</h2>
            <p>
              LocalKokani may update this policy to reflect changes in its
              services, partner arrangements or applicable law.
            </p>
            <p>
              The latest version will be published on this page with a revised
              effective date. Changes to an existing booking will be subject to
              the conditions applicable to that booking and any mandatory legal
              requirements.
            </p>

            <h2>13. Governing Law</h2>
            <p>This policy is governed by the laws of India.</p>
            <p>
              Any dispute will be handled in accordance with applicable law and
              the relevant agreement. Nothing in this policy removes any
              statutory consumer right or remedy that cannot lawfully be
              excluded.
            </p>

            <hr />

            <p>
              <strong>Important for Travelers:</strong> Before paying an advance
              or confirming a booking, read the cancellation rules in the
              property&apos;s or restaurant&apos;s About section and confirm any
              unclear conditions directly with the owner. Keep a copy of the
              terms and payment confirmation for your records.
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