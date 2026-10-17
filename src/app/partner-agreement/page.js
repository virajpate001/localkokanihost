// src/app/partner-agreement/page.js
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Partner Agreement | Local Kokani",
  description:
    "The Partner Agreement governing the relationship between Local Kokani and businesses listing on the platform, including Basic Listing and Premium Plan terms, commissions, and obligations.",
  path: "/partner-agreement",
  keywords: [
    "partner agreement",
    "business partner terms",
    "listing agreement",
    "commission terms",
    "premium plan agreement",
    "local kokani partner",
  ],
});

export default function PartnerAgreementPage() {
  return (
    <>
      <div className="bg-secondary dark:bg-gray-900">
        <Breadcrumbs
          items={[{ name: "Partner Agreement", url: "/partner-agreement" }]}
        />
      </div>

      <section className="py-16 bg-white ">
        <div className="container-custom max-w-3xl">
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-primary mb-2">
            LocalKokani Partner Agreement
          </h1>
          <p className="text-gray-400 text-sm mb-10">
            Effective Date: 17 October 2026
          </p>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-a:text-secondary">
            <h2>1. Parties to This Agreement</h2>
            <p>
              This Partner Agreement (&quot;Agreement&quot;) is entered into
              between:
            </p>
            <p>
              <strong>LocalKokani</strong>, an online business discovery and
              enquiry facilitation platform operating at{" "}
              <a
                href="https://www.localkokani.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.localkokani.com
              </a>{" "}
              (&quot;LocalKokani,&quot; &quot;Platform,&quot; &quot;we,&quot;
              &quot;us&quot; or &quot;our&quot;);
            </p>
            <p>and</p>
            <p>
              <strong>The Partner</strong>, being the individual, proprietor,
              company, partnership or other authorized business representative
              registering a business on LocalKokani (&quot;Partner,&quot;
              &quot;you&quot; or &quot;your&quot;).
            </p>
            <p>
              The Partner&apos;s business details, selected plan, subscription
              fee, and applicable commission terms will be recorded during
              registration or in a separate written confirmation.
            </p>
            <p>
              By accepting this Agreement and using LocalKokani&apos;s partner
              services, you agree to the provisions applicable to your business
              and selected plan.
            </p>

            <h2>2. Purpose of the Agreement</h2>
            <p>
              LocalKokani helps travelers discover accommodation, restaurants,
              Khanavals, dhabas and other local businesses across the Konkan
              region of Maharashtra, India.
            </p>
            <p>
              This Agreement establishes the conditions for listing and
              promoting a business on LocalKokani, handling customer enquiries,
              collecting and transferring advances where applicable, paying
              agreed commissions and managing partner subscriptions.
            </p>
            <p>It applies to eligible businesses, including:</p>
            <ul>
              <li>Hotels, resorts and homestays.</li>
              <li>
                Villas, cottages, guest houses, lodges and farm stays.
              </li>
              <li>Restaurants, Khanavals, dhabas and eateries.</li>
              <li>
                Other eligible local businesses and tourism-related service
                providers.
              </li>
            </ul>

            <h2>3. Nature of the Relationship</h2>
            <p>
              Unless a separate written agreement expressly states otherwise:
            </p>
            <ol>
              <li>
                LocalKokani provides business listings and facilitates customer
                enquiries.
              </li>
              <li>
                The Partner independently owns or operates the listed business.
              </li>
              <li>
                The Partner is responsible for providing the advertised
                accommodation, food or other services.
              </li>
              <li>
                This Agreement does not create an employment, franchise, joint
                venture or general agency relationship between the parties.
              </li>
              <li>
                LocalKokani does not guarantee a minimum number of enquiries,
                bookings, customers or sales.
              </li>
            </ol>
            <p>
              The Partner must not represent itself as an employee, legal
              representative or authorized agent of LocalKokani unless expressly
              authorized in writing.
            </p>

            <h2>4. Registration and Eligibility</h2>
            <p>The Partner confirms that it:</p>
            <ul>
              <li>Is legally capable of entering into this Agreement.</li>
              <li>Owns the business or has authority to represent it.</li>
              <li>
                Provides accurate and complete registration information.
              </li>
              <li>
                Holds the licences, registrations and permissions required for
                its business.
              </li>
              <li>
                Has the necessary rights to submit business photographs,
                descriptions, logos and other content.
              </li>
              <li>
                Will comply with applicable laws and the policies published on
                LocalKokani.
              </li>
            </ul>
            <p>
              The Partner must notify LocalKokani promptly of material changes to
              its ownership, contact details, business address, prices, services,
              licences or operating status.
            </p>
            <p>
              LocalKokani may request supporting documents or corrections where
              reasonably necessary.
            </p>

            <h2>5. Partner Plans</h2>
            <p>LocalKokani offers two partner plans.</p>

            <h3>5.1 Basic Listing (Free)</h3>
            <p>The Basic Listing plan includes:</p>
            <ul>
              <li>A standard business listing page.</li>
              <li>Basic visibility on LocalKokani.</li>
              <li>
                Customer enquiries routed through LocalKokani&apos;s WhatsApp.
              </li>
              <li>Booking coordination for applicable enquiries.</li>
              <li>
                Commission on qualifying confirmed bookings according to the
                commission terms accepted by the Partner.
              </li>
            </ul>
            <p>
              For applicable accommodation bookings, LocalKokani may collect an
              advance from the traveler, confirm the booking with the Partner,
              transfer the advance after deducting the agreed commission and
              share the Partner&apos;s contact number with the traveler.
            </p>
            <p>
              The applicable commission rate, calculation method, qualifying
              bookings and payment conditions must be disclosed and accepted by
              the Partner in writing before they apply.
            </p>
            <p>A free listing does not guarantee enquiries, bookings or revenue.</p>

            <h3>5.2 Premium Plan (Paid)</h3>
            <p>The Premium Plan may include:</p>
            <ul>
              <li>A Premium badge.</li>
              <li>
                Custom badges, such as &quot;Top Rated,&quot; where awarded under
                applicable criteria.
              </li>
              <li>
                Direct WhatsApp enquiries to the Partner&apos;s registered
                number.
              </li>
              <li>Google Maps location on the business listing.</li>
              <li>Priority support.</li>
            </ul>
            <p>
              The annual subscription price, validity period and included
              features will be disclosed before purchase.
            </p>
            <p>
              The Premium Plan does not guarantee a particular search ranking,
              number of enquiries, bookings or sales.
            </p>

            <h3>5.3 Meaning of the Premium Badge</h3>
            <p>
              The Premium badge indicates that the business has an active paid
              subscription with LocalKokani.
            </p>
            <p>
              It is not a government certification, tourism licence, guarantee of
              service quality or food safety certification. It does not imply
              government endorsement or FSSAI approval.
            </p>
            <p>
              Custom badges are subject to their stated criteria and must not be
              misrepresented as official certifications or guarantees.
            </p>
            <p>
              The Premium badge may be deactivated when the subscription expires,
              is cancelled or is suspended under this Agreement.
            </p>

            <h2>6. Premium Subscription Fee and Cancellation</h2>
            <p>
              The Partner must pay the applicable Premium Plan fee through the
              payment method or process specified by LocalKokani.
            </p>
            <p>
              Before purchasing, the Partner should review the price, validity
              period, included features and renewal conditions.
            </p>
            <p>
              <strong>
                The Premium Plan subscription fee is non-refundable after
                activation
              </strong>
              , including when the Partner voluntarily discontinues the plan
              before expiry, except where a refund is required by applicable law
              or expressly agreed in writing by LocalKokani.
            </p>
            <p>
              To request cancellation, the Partner should contact{" "}
              <a href="mailto:localkokani001@gmail.com">
                localkokani001@gmail.com
              </a>{" "}
              and provide the registered business name and subscription details.
            </p>
            <p>
              Cancellation may stop a future renewal or end the plan according to
              the applicable terms. It does not automatically entitle the Partner
              to a refund for an activated subscription.
            </p>
            <p>
              When the subscription expires or is cancelled, the Premium badge and
              associated features may be deactivated. The business may remain
              listed under the Basic Listing plan if it satisfies the applicable
              listing requirements.
            </p>
            <p>
              Any automatic renewal arrangement must be clearly disclosed and
              authorized.
            </p>

            <h2>7. Commission on Basic Listing Bookings</h2>
            <p>
              Commission applies only to qualifying bookings under the Basic
              Listing plan for which the Partner has accepted the applicable
              commission terms in writing.
            </p>
            <p>The commission schedule or written confirmation must specify:</p>
            <ol>
              <li>The commission rate or fixed amount.</li>
              <li>Which bookings or referrals qualify.</li>
              <li>How a transaction is attributed to LocalKokani.</li>
              <li>The amount on which commission is calculated.</li>
              <li>The payment or settlement process.</li>
              <li>
                The treatment of cancellations, no-shows, refunds and disputed
                transactions.
              </li>
            </ol>
            <p>
              For accommodation bookings, the commission basis must be specified,
              such as the total booking price, the amount actually received or
              another agreed calculation method.
            </p>
            <p>
              For restaurants and food businesses, the parties must separately
              define qualifying referrals and how they are identified. A
              commission does not automatically apply to every customer who views
              a listing or visits a business.
            </p>
            <p>
              No new or increased commission rate will apply retrospectively
              without the Partner&apos;s agreement, except where permitted or
              required by law.
            </p>

            <h2>8. Basic Listing Booking and Advance-Payment Process</h2>
            <p>
              For applicable accommodation bookings coordinated through
              LocalKokani, the general process is:
            </p>
            <ol>
              <li>
                A traveler submits an enquiry through LocalKokani&apos;s
                WhatsApp.
              </li>
              <li>
                LocalKokani contacts the Partner to check availability, pricing
                and booking conditions.
              </li>
              <li>The booking is confirmed according to the agreed process.</li>
              <li>LocalKokani may collect an advance from the traveler.</li>
              <li>
                LocalKokani transfers the collected advance to the Partner after
                deducting the agreed commission.
              </li>
              <li>
                LocalKokani shares the Partner&apos;s contact number with the
                traveler for further communication.
              </li>
            </ol>
            <p>
              The Partner must provide accurate availability, prices, amenities
              and booking conditions before confirmation.
            </p>
            <p>
              The Partner agrees to accept the agreed commission deduction and
              provide reasonable information necessary to reconcile the booking.
            </p>
            <p>
              Any restaurant reservation or other transaction involving an advance
              will be governed by the payment and commission terms communicated
              for that transaction.
            </p>

            <h2>9. Cancellation and Refund Responsibilities</h2>
            <p>
              The Partner must disclose its cancellation rules in the business
              listing&apos;s About section and communicate applicable conditions
              before a booking or reservation is confirmed.
            </p>
            <p>
              The conditions should explain any free cancellation deadline,
              advance payment requirement, cancellation charge, no-show rule and
              refund timeline.
            </p>

            <h3>9.1 Basic Listing Accommodation Bookings</h3>
            <p>
              Where LocalKokani collects an advance and transfers it to the
              Partner after deducting the agreed commission, the Partner is
              responsible for handling any traveler refund due after the transfer,
              according to the applicable booking terms and law.
            </p>
            <p>
              If a confirmed booking is cancelled, LocalKokani will return its
              deducted commission to the Partner as applicable under the agreed
              commission arrangement.
            </p>
            <p>
              The commission reversal does not automatically determine whether the
              traveler is entitled to a full or partial refund. The Partner must
              assess and process any refund due under the disclosed cancellation
              conditions and applicable law.
            </p>
            <p>
              If the advance has not yet been transferred, the cancellation and
              any refund due will be handled according to the applicable booking
              terms and payment arrangement.
            </p>

            <h3>9.2 Premium Plan Bookings</h3>
            <p>
              For bookings arranged directly between the Partner and a traveler,
              the Partner is responsible for confirming the booking, receiving
              payments, communicating cancellation terms and processing any refund
              due.
            </p>
            <p>
              LocalKokani does not ordinarily collect payments or manage
              cancellations and refunds for these direct bookings, except where a
              separate arrangement or applicable law provides otherwise.
            </p>

            <h3>9.3 Restaurant Reservations and Food Orders</h3>
            <p>
              The Partner is responsible for handling restaurant reservations,
              food orders, cancellations, complaints and refunds for services it
              provides, subject to the disclosed terms and applicable law.
            </p>
            <p>
              If food is incorrect, incomplete, unsatisfactory or not delivered as
              agreed, the Partner must assess the complaint and provide any remedy
              required by the applicable terms and law.
            </p>
            <p>
              LocalKokani may assist with communication where appropriate but does
              not guarantee a particular dispute outcome.
            </p>

            <h2>10. Partner Responsibilities</h2>
            <p>The Partner agrees to:</p>
            <ul>
              <li>
                Keep business information, prices, availability and contact
                details accurate.
              </li>
              <li>Provide the services described in its listing.</li>
              <li>Respond to enquiries within a reasonable time.</li>
              <li>
                Confirm booking conditions and additional charges before
                accepting a booking.
              </li>
              <li>
                Maintain appropriate service, hygiene and safety standards.
              </li>
              <li>
                Handle customer complaints, cancellations and refunds fairly.
              </li>
              <li>
                Maintain all legally required licences and registrations.
              </li>
              <li>Protect customer contact information.</li>
              <li>
                Avoid misleading advertisements, fraudulent activity and fake
                reviews.
              </li>
              <li>
                Notify LocalKokani of material changes affecting the listing or
                business.
              </li>
            </ul>
            <p>
              The Partner remains responsible for its staff, contractors,
              premises, service delivery and business operations.
            </p>

            <h2>11. Additional Requirements for Accommodation Partners</h2>
            <p>Accommodation Partners must ensure that:</p>
            <ul>
              <li>
                The property is lawfully operated and available for the
                advertised use.
              </li>
              <li>
                Room descriptions, capacity, amenities and photographs are
                accurate.
              </li>
              <li>
                Rates, taxes, deposits and additional charges are disclosed.
              </li>
              <li>Availability is updated as reasonably practicable.</li>
              <li>
                Check-in, check-out and guest requirements are communicated
                clearly.
              </li>
              <li>
                Applicable safety, hygiene and regulatory requirements are met.
              </li>
              <li>
                Confirmed bookings, cancellations and refunds are handled fairly.
              </li>
            </ul>
            <p>
              The Partner must not advertise a property it does not own, manage or
              have authority to offer.
            </p>

            <h2>12. Additional Requirements for Food Businesses</h2>
            <p>
              Restaurant, Khanaval, dhaba and other food-business Partners must
              ensure that:
            </p>
            <ul>
              <li>
                Menu items, prices, operating hours and advertised services are
                accurate.
              </li>
              <li>
                Applicable food safety, hygiene and handling requirements are
                followed.
              </li>
              <li>
                Required FSSAI registration or licensing and other permissions
                are maintained.
              </li>
              <li>
                Legally required allergen and food disclosures are provided where
                applicable.
              </li>
              <li>
                Delivery charges, minimum orders and additional fees are disclosed
                before the customer commits.
              </li>
              <li>
                Reservations, food orders and complaints are handled fairly.
              </li>
              <li>
                Required invoices, receipts and tax records are maintained.
              </li>
            </ul>
            <p>
              The Partner remains responsible for food preparation, quality,
              safety and fulfilment.
            </p>

            <h2>13. Licences and Regulatory Compliance</h2>
            <p>
              The Partner is responsible for obtaining and maintaining all
              licences, registrations and permissions required for its business
              and location.
            </p>
            <p>
              Depending on the business, these may include business registrations,
              local permissions, accommodation-related requirements, FSSAI
              registration or licensing, tax registrations and applicable safety
              requirements.
            </p>
            <p>
              LocalKokani&apos;s listing or Premium badge does not replace any
              legal licence, registration or certification.
            </p>
            <p>
              The Partner must provide genuine supporting documents when
              reasonably requested.
            </p>

            <h2>14. Business Content and Promotional Permission</h2>
            <p>
              The Partner retains ownership of content it owns and submits to
              LocalKokani.
            </p>
            <p>
              The Partner grants LocalKokani a non-exclusive, royalty-free
              permission to use, reproduce, format, display and distribute
              submitted photographs, descriptions, menus, logos and other
              authorized materials for hosting, maintaining and promoting the
              listing and LocalKokani platform.
            </p>
            <p>
              This permission covers the website, associated social media pages
              and other LocalKokani promotional channels for the duration
              reasonably required for these purposes, subject to applicable law
              and any agreed restrictions.
            </p>
            <p>
              The Partner confirms that it has the rights and permissions
              necessary to submit the content.
            </p>
            <p>
              LocalKokani may remove content that infringes third-party rights,
              violates this Agreement or breaches applicable law.
            </p>

            <h2>15. Customer Information and Privacy</h2>
            <p>
              Where LocalKokani shares a traveler&apos;s enquiry information with
              the Partner, the Partner must use it only for legitimate purposes
              connected with the enquiry, booking or service.
            </p>
            <p>
              The Partner must not sell, publish, misuse or share customer
              information with unauthorized third parties.
            </p>
            <p>
              The Partner must take reasonable steps to protect customer
              information, restrict access to authorized personnel and comply with
              applicable privacy and data protection laws.
            </p>
            <p>
              The Partner should review LocalKokani&apos;s{" "}
              <a href="/privacy-policy">Privacy Policy</a> for further details
              about the Platform&apos;s handling of personal information.
            </p>

            <h2>16. Prohibited Activities</h2>
            <p>The Partner must not:</p>
            <ul>
              <li>
                Provide false ownership, business or licensing information.
              </li>
              <li>Advertise services it is not authorized to provide.</li>
              <li>
                Mislead customers about prices, availability, amenities, menus or
                services.
              </li>
              <li>Create fake reviews or manipulate ratings.</li>
              <li>Misuse customer information.</li>
              <li>Misrepresent the Premium badge or custom badges.</li>
              <li>Use LocalKokani for fraudulent or unlawful activities.</li>
              <li>Infringe third-party intellectual property rights.</li>
              <li>
                Conceal qualifying bookings to avoid a commission expressly
                agreed to be payable.
              </li>
            </ul>

            <h2>17. Suspension and Termination</h2>
            <p>
              LocalKokani may suspend or remove a listing, deactivate a Premium
              badge, restrict partner access or terminate this Agreement where
              reasonably necessary because of:
            </p>
            <ul>
              <li>
                A material breach of this Agreement or an applicable policy.
              </li>
              <li>False or misleading business information.</li>
              <li>Missing or unverifiable required documents.</li>
              <li>
                Credible evidence of fraud, unlawful activity or serious customer
                harm.
              </li>
              <li>Misuse of customer information or the platform.</li>
              <li>Legal requirements or material safety concerns.</li>
            </ul>
            <p>
              Where reasonably practicable, LocalKokani will provide notice and an
              opportunity to correct a remediable issue. Immediate action may be
              taken where necessary to address serious risks or legal obligations.
            </p>
            <p>
              The Partner may request removal of its listing or discontinuation of
              its subscription by contacting LocalKokani.
            </p>
            <p>
              Termination does not automatically cancel outstanding fees, properly
              agreed commissions or other obligations accrued before termination.
              Refunds of subscription fees remain subject to the applicable plan
              terms and law.
            </p>

            <h2>18. Liability and Indemnity</h2>
            <p>
              The Partner remains responsible for the operation of its business,
              the accuracy of its listing, the services it provides and its
              compliance with applicable laws.
            </p>
            <p>
              To the extent permitted by applicable law, the Partner may be
              responsible for reasonable losses, claims and expenses arising
              directly from its unlawful conduct, material breach of this
              Agreement, infringement of third-party rights or negligent provision
              of services.
            </p>
            <p>
              Nothing in this Agreement excludes or limits liability that cannot
              lawfully be excluded or limited, including responsibility for a
              party&apos;s own legally actionable conduct.
            </p>

            <h2>19. Changes to This Agreement</h2>
            <p>
              LocalKokani may update this Agreement to reflect changes in the
              platform, partner plans, services or applicable law.
            </p>
            <p>
              The updated version will be published on the website with a revised
              effective date. Where a change materially affects an existing
              commercial arrangement, appropriate notice and any agreement
              required by law will be provided.
            </p>
            <p>
              Changes to commission rates or other material commercial terms
              require the Partner&apos;s agreement before they apply, except where
              permitted or required by law.
            </p>

            <h2>20. Governing Law and Dispute Resolution</h2>
            <p>This Agreement is governed by the laws of India.</p>
            <p>
              The parties should first attempt to resolve disputes through
              good-faith discussion. If a dispute cannot be resolved informally,
              it may be referred to a competent court or forum under applicable
              law in Maharashtra, India, subject to mandatory legal requirements.
            </p>
            <p>
              Nothing in this clause removes a right to approach a competent
              authority or forum where applicable law provides that right.
            </p>

            <h2>21. Electronic Acceptance</h2>
            <p>
              The Partner may accept this Agreement through an electronic
              checkbox, electronic signature or another method supported by
              LocalKokani.
            </p>
            <p>
              By accepting, the Partner confirms that it has read and understood
              this Agreement, has authority to accept it and agrees to the terms
              applicable to its selected plan and any separately accepted
              commission schedule.
            </p>
            <p>
              LocalKokani may retain reasonable records of acceptance, including
              the agreement version, date and time, registration details and
              electronic confirmation, subject to applicable law and privacy
              requirements.
            </p>
            <p>
              The Partner should retain a copy of this Agreement and any separate
              plan or commission confirmation.
            </p>

            <h2>22. Contact Information</h2>
            <p>
              For partner registration, plan details, commission arrangements,
              listing updates, cancellations or questions about this Agreement,
              contact:
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

            <h2>Partner Acknowledgement</h2>
            <p>
              By accepting this Agreement, the Partner confirms that the business
              information provided is accurate, that the Partner is authorized to
              list the business and that the Partner agrees to the applicable
              terms and any separately accepted plan or commission schedule.
            </p>
            <p>
              <strong>Partner / Business Name:</strong>{" "}
              __________________________
            </p>
            <p>
              <strong>Authorized Representative:</strong>{" "}
              _________________________
            </p>
            <p>
              <strong>Selected Plan:</strong> Basic Listing / Premium Plan
            </p>
            <p>
              <strong>Commission Terms Accepted, if applicable:</strong>{" "}
              ___________
            </p>
            <p>
              <strong>Date of Acceptance:</strong>{" "}
              _______________________________
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