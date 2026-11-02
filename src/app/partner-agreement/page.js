// src/app/partner-agreement/page.js
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Partner Agreement | Local Kokani",
  description:
    "The Partner Agreement between Local Kokani and businesses listing on the platform, covering Partner Plans, the ₹500 fixed commission on accommodation and food transactions, payments, cancellations, and partner obligations.",
  path: "/partner-agreement",
  keywords: [
    "partner agreement",
    "business partner terms",
    "listing agreement",
    "commission terms",
    "food business agreement",
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
            Effective Date: 2 November 2026
          </p>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-a:text-secondary">
            <p>
              This Partner Agreement (&quot;Agreement&quot;) is entered into
              between:
            </p>
            <p>
              <strong>LocalKokani</strong>, a Konkan-based online discovery and
              enquiry facilitation platform operating through{" "}
              <a
                href="https://localkokani.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://localkokani.com/
              </a>{" "}
              (&quot;LocalKokani&quot;, &quot;Platform&quot;, &quot;we&quot;,
              &quot;us&quot; or &quot;our&quot;);
            </p>
            <p>AND</p>
            <p>
              The hotel, homestay, resort, villa, lodge, guest house,
              restaurant, Khanaval, dhaba, food business or other service
              provider registering on or listing their business with LocalKokani
              (&quot;Partner&quot;, &quot;you&quot; or &quot;your&quot;).
            </p>
            <p>
              By registering, listing a business, selecting a Partner Plan, or
              electronically accepting this Agreement, the Partner agrees to the
              following terms and conditions.
            </p>

            <hr />

            <h2>1. Parties and Partner Details</h2>
            <p>
              The Partner agrees to provide accurate business information during
              registration, including:
            </p>
            <ul>
              <li>Business name and type</li>
              <li>Owner or authorised representative&apos;s name</li>
              <li>Business address and contact details</li>
              <li>Selected Partner Plan</li>
              <li>Applicable subscription fee, if any</li>
              <li>
                Commission and payment terms applicable under this Agreement
              </li>
            </ul>
            <p>
              The registration details and electronic acceptance records may
              form part of this Agreement.
            </p>

            <h2>2. Purpose of the Agreement</h2>
            <p>
              LocalKokani provides an online platform to help travellers and
              customers discover local businesses and services across the Konkan
              region of Maharashtra.
            </p>
            <p>The platform may feature:</p>
            <ul>
              <li>Hotels, resorts and homestays</li>
              <li>Villas, cottages, guest houses and lodges</li>
              <li>Restaurants, Khanavals and dhabas</li>
              <li>Restaurant table reservations</li>
              <li>Food orders and takeaway services</li>
              <li>Other eligible local tourism and hospitality services</li>
            </ul>
            <p>
              This Agreement establishes the responsibilities, commercial terms
              and working relationship between LocalKokani and the Partner.
            </p>

            <h2>3. Nature of the Relationship</h2>
            <p>
              3.1. The Partner operates as an independent business and is solely
              responsible for its business operations.
            </p>
            <p>
              3.2. Nothing in this Agreement creates an employer-employee
              relationship, partnership, franchise, joint venture or general
              agency between LocalKokani and the Partner.
            </p>
            <p>
              3.3. LocalKokani provides discovery, listing, enquiry and booking
              coordination facilities as applicable to the selected Partner
              Plan.
            </p>
            <p>
              3.4. LocalKokani does not guarantee any minimum number of
              enquiries, reservations, bookings, customers, orders or revenue.
            </p>
            <p>
              3.5. The Partner remains responsible for delivering the
              accommodation, food or other services purchased by customers.
            </p>

            <h2>4. Registration and Eligibility</h2>
            <p>
              4.1. The Partner must provide genuine, accurate and complete
              registration information.
            </p>
            <p>
              4.2. The Partner must be legally authorised to operate the listed
              business.
            </p>
            <p>
              4.3. The Partner must provide relevant licences, registrations,
              permissions or documents when requested by LocalKokani.
            </p>
            <p>
              4.4. LocalKokani may request additional information to verify the
              business or its authorised representative.
            </p>
            <p>
              4.5. LocalKokani may reject, suspend or remove a listing if the
              information supplied is false, misleading, incomplete or in
              violation of applicable law.
            </p>

            <h2>5. Partner Plans</h2>
            <p>LocalKokani currently offers the following Partner Plans:</p>

            <h3>5.1. Basic Listing – Free</h3>
            <p>The Basic Listing may include:</p>
            <ul>
              <li>Standard business listing page</li>
              <li>Basic visibility on LocalKokani</li>
              <li>Business information, photographs and service details</li>
              <li>
                Customer enquiries routed through LocalKokani&apos;s WhatsApp or
                other designated communication channels
              </li>
              <li>
                Booking, reservation or order coordination where applicable
              </li>
              <li>
                Commission on qualifying confirmed transactions as specified in
                Section 7
              </li>
            </ul>
            <p>
              For Basic Listing transactions, the fixed commission is ₹500 per
              unique confirmed Booking/Order Reference ID, subject to the terms
              of this Agreement.
            </p>
            <p>
              This commission applies to eligible accommodation bookings,
              restaurant reservations, food orders and takeaway orders.
            </p>

            <h3>5.2. Premium Plan – Paid</h3>
            <p>The Premium Plan may include:</p>
            <ul>
              <li>Premium badge indicating an active paid subscription</li>
              <li>
                Eligible custom badges, such as &quot;Top Rated&quot;
              </li>
              <li>
                Direct WhatsApp enquiries to the Partner&apos;s contact number
              </li>
              <li>Google Maps location on the business listing</li>
              <li>
                Priority listing visibility or promotional placement, where
                offered
              </li>
              <li>Priority support</li>
            </ul>
            <p>
              Premium Plan benefits are subject to the selected subscription
              package and its applicable conditions.
            </p>

            <h3>5.3. Meaning of Badges</h3>
            <p>
              A Premium badge or custom badge indicates a platform listing or
              subscription status only.
            </p>
            <p>
              It does not represent government certification, legal approval,
              FSSAI certification, guaranteed quality, safety certification or
              an independent guarantee by LocalKokani.
            </p>

            <h2>6. Premium Subscription Fee and Cancellation</h2>
            <p>
              6.1. The Partner must pay the applicable Premium subscription fee
              before activation.
            </p>
            <p>
              6.2. Premium benefits will be activated after successful payment
              and any required verification.
            </p>
            <p>
              6.3. The Premium subscription fee is non-refundable after
              activation, except where a refund is required by applicable law or
              expressly agreed to in writing by LocalKokani.
            </p>
            <p>
              6.4. Subscription duration, renewal terms and applicable fees will
              be communicated to the Partner before purchase.
            </p>
            <p>
              6.5. The Partner must ensure that subscription payments are made
              through the payment method or process designated by LocalKokani.
            </p>

            <h2>7. Commission on Basic Listing Transactions</h2>

            <h3>7.1. Fixed Commission</h3>
            <p>
              For eligible Basic Listing transactions, the Partner agrees to pay
              LocalKokani a fixed commission of:
            </p>
            <p>
              <strong>
                ₹500 (Rupees Five Hundred Only) per unique confirmed
                Booking/Order Reference ID.
              </strong>
            </p>
            <p>This fixed commission applies equally to:</p>
            <ul>
              <li>Hotel and resort bookings</li>
              <li>Homestay and villa bookings</li>
              <li>Cottage, guest house and lodge bookings</li>
              <li>Other eligible accommodation bookings</li>
              <li>Restaurant table reservations</li>
              <li>Restaurant and Khanaval bookings</li>
              <li>Food orders</li>
              <li>Takeaway orders</li>
            </ul>

            <h3>7.2. One Reference ID, One Commission</h3>
            <p>
              The commission is calculated per unique confirmed Booking/Order
              Reference ID, not per room, guest, night, food item or quantity.
            </p>
            <p>Examples:</p>
            <ul>
              <li>
                One confirmed hotel booking with multiple rooms or nights under
                one Reference ID: ₹500.
              </li>
              <li>
                One confirmed food order containing multiple food items under
                one Reference ID: ₹500.
              </li>
              <li>
                One confirmed restaurant reservation under one Reference ID:
                ₹500.
              </li>
              <li>
                Two separate confirmed transactions with two different Reference
                IDs: ₹1,000.
              </li>
            </ul>

            <h3>7.3. Enquiries and Unconfirmed Transactions</h3>
            <p>No commission is payable merely for:</p>
            <ul>
              <li>An enquiry</li>
              <li>A customer asking for prices or availability</li>
              <li>An unconfirmed reservation or booking</li>
              <li>An order that has not been confirmed</li>
            </ul>
            <p>
              The commission becomes applicable when an eligible transaction is
              confirmed and assigned a Booking/Order Reference ID.
            </p>

            <h3>7.4. Modifications</h3>
            <p>
              A modification to an existing confirmed transaction under the same
              Reference ID will not attract an additional commission solely
              because of that modification.
            </p>
            <p>
              If a new and independent transaction is confirmed under a separate
              Reference ID, a separate commission will apply.
            </p>

            <h3>7.5. Commission for Premium Plan Transactions</h3>
            <p>
              For transactions received and handled directly by a Premium
              Partner through the direct contact facilities provided under the
              Premium Plan, the standard ₹500 commission does not apply.
            </p>
            <p>
              Any separate commission arrangement must be specifically disclosed
              and accepted in writing by both parties before the relevant
              transaction is confirmed.
            </p>

            <h3>7.6. Disclosure and Acceptance</h3>
            <p>
              The applicable commission and payment arrangement must be
              communicated to the Partner and accepted before the relevant
              transaction is confirmed.
            </p>

            <h2>8. Basic Listing Booking, Reservation and Payment Process</h2>

            <h3>8.1. Enquiry and Confirmation</h3>
            <p>
              For Basic Listing transactions, LocalKokani may receive customer
              enquiries through its website, WhatsApp or other communication
              channels.
            </p>
            <p>
              LocalKokani may coordinate with the Partner to check availability,
              pricing, service details and confirmation.
            </p>
            <p>
              The transaction will be treated as confirmed when the Partner
              accepts the transaction and a Booking/Order Reference ID is
              assigned or communicated.
            </p>

            <h3>8.2. Payment Collected by LocalKokani</h3>
            <p>
              Where LocalKokani collects an advance or other customer payment on
              behalf of the Partner under an agreed arrangement:
            </p>
            <ul>
              <li>
                The payment amount and applicable conditions will be
                communicated to the customer.
              </li>
              <li>
                LocalKokani may deduct the applicable ₹500 commission from the
                amount collected.
              </li>
              <li>
                The remaining payable amount will be transferred to the Partner
                according to the communicated settlement arrangement.
              </li>
              <li>
                The Partner remains responsible for delivering the confirmed
                service or order.
              </li>
            </ul>

            <h3>8.3. Payment Collected Directly by the Partner</h3>
            <p>
              Where the Partner directly collects payment from the customer for
              a Basic Listing transaction:
            </p>
            <ul>
              <li>
                The Partner must pay the applicable ₹500 commission to
                LocalKokani.
              </li>
              <li>
                The Partner must provide reasonable confirmation of the
                transaction when requested.
              </li>
              <li>
                The Partner must not conceal, misreport or deliberately avoid
                commission on a qualifying confirmed transaction.
              </li>
            </ul>

            <h3>8.4. Restaurant and Food Transactions</h3>
            <p>
              The same commission and payment principles apply to eligible
              restaurant reservations, food orders and takeaway orders.
            </p>
            <p>
              The payment collection method, order confirmation and settlement
              arrangement will be communicated to the Partner before the
              transaction is confirmed.
            </p>

            <h3>8.5. Payment Records</h3>
            <p>
              The Partner should maintain accurate records of confirmed
              transactions, payments, cancellations and refunds and cooperate
              with LocalKokani in resolving transaction-related discrepancies.
            </p>

            <h2>9. Cancellation, Commission Reversal and Customer Refunds</h2>

            <h3>9.1. Cancellation of a Confirmed Basic Listing Transaction</h3>
            <p>
              If a confirmed transaction under a Basic Listing is cancelled by
              either the customer or the Partner:
            </p>
            <ul>
             
              <li>
                If the commission has already been collected or deducted, the
                full ₹500 will be returned to the Partner.
              </li>
             
            </ul>
            <p>
              This rule applies to accommodation bookings, restaurant
              reservations, food orders and takeaway orders.
            </p>

            <h3>9.2. Customer Refunds Are Separate</h3>
            <p>
              The reversal of LocalKokani&apos;s commission is separate from any
              refund payable to the customer.
            </p>
            <p>
              Customer refunds will be governed by the cancellation conditions
              communicated before confirmation, the relevant transaction
              arrangement and applicable law.
            </p>

            <h3>9.3. Where the Advance Has Been Transferred to the Partner</h3>
            <p>
              If the customer&apos;s advance or payment has already been
              transferred to the Partner, the Partner is responsible for
              processing any customer refund due from the Partner under the
              applicable cancellation conditions and law.
            </p>
            <p>
              The Partner must cooperate with LocalKokani in resolving
              refund-related enquiries.
            </p>

            <h3>9.4. Where the Payment Is Still Held by LocalKokani</h3>
            <p>
              If the customer&apos;s payment is still held by LocalKokani,
              LocalKokani will coordinate or process the applicable refund in
              accordance with the communicated cancellation conditions and
              applicable law.
            </p>

            <h3>9.5. Premium Plan Direct Transactions</h3>
            <p>
              For transactions handled directly by a Premium Partner, the
              Partner is responsible for customer cancellations, refunds and
              related communication.
            </p>
            <p>
              The Partner must disclose its cancellation and refund conditions
              to customers before confirming a transaction.
            </p>

            <h3>9.6. Cancellation Records</h3>
            <p>
              The Partner must promptly inform LocalKokani about cancellations,
              failed fulfilments and customer refunds relating to transactions
              referred or coordinated through the platform.
            </p>

            <h2>10. Partner Responsibilities</h2>
            <p>The Partner agrees to:</p>
            <p>
              10.1. Provide accurate business information, prices, photographs,
              contact details and service descriptions.
            </p>
            <p>
              10.2. Keep listing information updated, including availability,
              operating hours and applicable charges.
            </p>
            <p>
              10.3. Honour confirmed bookings, reservations and orders accepted
              by the Partner.
            </p>
            <p>10.4. Communicate honestly and professionally with customers.</p>
            <p>
              10.5. Inform customers of applicable advance payments,
              cancellation conditions, additional charges and service
              restrictions before confirmation.
            </p>
            <p>
              10.6. Maintain appropriate standards of cleanliness, safety,
              hygiene and customer service.
            </p>
            <p>
              10.7. Respond to customer enquiries and booking or order requests
              within a reasonable time.
            </p>
            <p>
              10.8. Inform LocalKokani promptly about business closures, changes
              in ownership, changes in contact details or changes that may
              affect a listing.
            </p>
            <p>10.9. Cooperate in resolving genuine customer complaints.</p>
            <p>
              10.10. Pay applicable commission and subscription fees according
              to this Agreement.
            </p>

            <h2>11. Additional Requirements for Accommodation Partners</h2>
            <p>Accommodation Partners must:</p>
            <p>
              11.1. Maintain safe, clean and reasonably suitable accommodation
              facilities.
            </p>
            <p>
              11.2. Provide accurate room descriptions, photographs, facilities,
              prices and availability.
            </p>
            <p>
              11.3. Disclose check-in and check-out times, occupancy limits,
              house rules and additional charges.
            </p>
            <p>11.4. Honour confirmed accommodation bookings.</p>
            <p>
              11.5. Comply with applicable local laws, tourism requirements,
              safety rules and registration requirements.
            </p>
            <p>
              11.6. Maintain guest records and follow applicable identity
              verification requirements.
            </p>
            <p>
              11.7. Inform customers about property-specific restrictions or
              conditions before confirmation.
            </p>
            <p>
              11.8. Remain responsible for accommodation quality, guest safety
              and service delivery.
            </p>

            <h2>12. Additional Requirements for Restaurants and Food Businesses</h2>
            <p>
              Restaurant, Khanaval, dhaba and other food business Partners must:
            </p>
            <p>
              12.1. Provide accurate menus, food descriptions, prices and
              operating hours.
            </p>
            <p>
              12.2. Clearly disclose applicable taxes, packaging charges,
              delivery charges and other additional costs.
            </p>
            <p>
              12.3. Maintain appropriate food hygiene, cleanliness, storage and
              preparation standards.
            </p>
            <p>
              12.4. Obtain and maintain applicable FSSAI registration or licence
              and other required permissions.
            </p>
            <p>
              12.5. Provide accurate information about ingredients and allergens
              wherever relevant and required.
            </p>
            <p>
              12.6. Accept and fulfil only those orders or reservations that the
              business can reasonably serve.
            </p>
            <p>
              12.7. Prepare and deliver food in accordance with applicable food
              safety requirements.
            </p>
            <p>
              12.8. Inform customers promptly about unavailable items, delays,
              changes or order cancellations.
            </p>
            <p>
              12.9. Handle food quality complaints, incorrect orders and
              fulfilment issues responsibly.
            </p>
            <p>
              12.10. Issue invoices or receipts where required by applicable
              law.
            </p>
            <p>
              12.11. Remain solely responsible for food preparation, quality,
              safety, packaging, delivery and fulfilment.
            </p>
            <p>
              LocalKokani is a discovery and enquiry facilitation platform and
              does not prepare, manufacture, store or independently inspect food
              supplied by Partners.
            </p>

            <h2>13. Licences and Regulatory Compliance</h2>
            <p>
              13.1. The Partner is solely responsible for obtaining and
              maintaining all licences, registrations, permits and approvals
              required to operate the business.
            </p>
            <p>
              13.2. Depending on the nature of the business, these may include:
            </p>
            <ul>
              <li>Local Gram Panchayat or municipal permissions</li>
              <li>Shop and Establishment registration, where applicable</li>
              <li>FSSAI registration or licence for food businesses</li>
              <li>GST registration, where applicable</li>
              <li>
                Tourism or accommodation-related registrations, where applicable
              </li>
              <li>
                Fire, safety, building or other statutory permissions, where
                applicable
              </li>
            </ul>
            <p>
              13.3. The Partner must comply with applicable central, state and
              local laws.
            </p>
            <p>
              13.4. LocalKokani does not provide legal certification or
              guarantee that a Partner&apos;s business is compliant with all
              regulatory requirements.
            </p>
            <p>
              13.5. LocalKokani may request copies of relevant licences or
              documents and may suspend a listing if required documents are not
              provided or if serious compliance concerns arise.
            </p>

            <h2>14. Business Content and Promotional Permission</h2>
            <p>
              14.1. The Partner grants LocalKokani permission to use the
              Partner&apos;s business name, logo, photographs, videos, menu,
              descriptions and other submitted content for listing, display,
              promotion and marketing of the Partner&apos;s business on
              LocalKokani and its associated promotional channels.
            </p>
            <p>
              14.2. The Partner confirms that it owns or has permission to use
              the submitted content.
            </p>
            <p>
              14.3. The Partner must not submit copyrighted, misleading,
              unauthorised or unlawful content.
            </p>
            <p>
              14.4. LocalKokani may resize, format or make reasonable
              presentation edits to submitted content for website and
              promotional display without materially misrepresenting the
              business.
            </p>
            <p>
              14.5. The Partner may request correction or removal of its
              content, subject to applicable legal, contractual and
              record-retention requirements.
            </p>

            <h2>15. Customer Information and Privacy</h2>
            <p>
              15.1. The Partner must use customer information received through
              LocalKokani only for the relevant enquiry, booking, reservation,
              order or service.
            </p>
            <p>
              15.2. The Partner must not sell, misuse, disclose or commercially
              exploit customer information without a lawful basis and any
              required consent.
            </p>
            <p>
              15.3. The Partner must take reasonable steps to protect customer
              contact details, booking information and other personal
              information.
            </p>
            <p>
              15.4. The Partner must not use customer information for
              unsolicited marketing or unrelated communications.
            </p>
            <p>
              15.5. Both parties must comply with applicable data protection and
              privacy laws.
            </p>
            <p>
              15.6. LocalKokani&apos;s{" "}
              <a href="/privacy-policy">Privacy Policy</a> will apply to the
              platform&apos;s collection and use of personal information.
            </p>

            <h2>16. Prohibited Activities</h2>
            <p>The Partner must not:</p>
            <p>
              16.1. Provide false, misleading or fraudulent business
              information.
            </p>
            <p>
              16.2. Display fake photographs, reviews, ratings, licences or
              certifications.
            </p>
            <p>
              16.3. Mislead customers about prices, availability, facilities or
              services.
            </p>
            <p>
              16.4. Engage in unlawful, discriminatory, abusive or fraudulent
              practices.
            </p>
            <p>
              16.5. Use LocalKokani to promote prohibited or illegal goods or
              services.
            </p>
            <p>16.6. Misuse customer information or engage in spam.</p>
            <p>
              16.7. Deliberately conceal qualifying confirmed transactions
              referred or coordinated through LocalKokani to avoid an agreed
              commission.
            </p>
            <p>
              16.8. Misrepresent a Premium badge or other platform badge as a
              government-issued certification or guarantee.
            </p>
            <p>
              16.9. Engage in conduct that may damage the reputation, security
              or lawful operation of LocalKokani.
            </p>

            <h2>17. Suspension and Termination</h2>
            <p>
              17.1. LocalKokani may suspend, restrict or remove a Partner
              listing if the Partner:
            </p>
            <ul>
              <li>Violates this Agreement</li>
              <li>Provides false or misleading information</li>
              <li>Fails to fulfil confirmed bookings or orders repeatedly</li>
              <li>Engages in fraud or misconduct</li>
              <li>Fails to pay applicable dues</li>
              <li>Violates applicable law</li>
              <li>Creates a material risk to customers or the platform</li>
            </ul>
            <p>
              17.2. Where reasonably possible, LocalKokani may provide notice and
              an opportunity to address the issue before suspension or
              termination.
            </p>
            <p>
              17.3. The Partner may request removal of its listing or
              termination of its participation by contacting LocalKokani.
            </p>
            <p>
              17.4. Termination does not remove obligations relating to
              confirmed transactions, outstanding payments, refunds,
              confidentiality, customer information or other matters that by
              their nature continue after termination.
            </p>
            <p>
              17.5. Any eligible commission reversal and customer refund
              obligations will remain subject to Section 9.
            </p>

            <h2>18. Liability and Indemnity</h2>
            <p>
              18.1. The Partner is solely responsible for the accommodation,
              food, products or services supplied by the Partner.
            </p>
            <p>
              18.2. LocalKokani does not own, manage or operate the
              Partner&apos;s business and does not independently control the
              Partner&apos;s day-to-day operations.
            </p>
            <p>
              18.3. LocalKokani is not responsible for the Partner&apos;s
              service quality, food preparation, property conditions, business
              licences, staff conduct, customer disputes or failure to fulfil a
              transaction, except to the extent liability cannot be excluded
              under applicable law.
            </p>
            <p>
              18.4. The Partner agrees to be responsible for claims, losses,
              penalties, damages or expenses arising from the Partner&apos;s
              negligence, misconduct, unlawful activity, inaccurate information
              or breach of this Agreement, subject to applicable law.
            </p>
            <p>
              18.5. Nothing in this Agreement excludes or limits any liability
              that cannot legally be excluded or limited under applicable law.
            </p>
            <p>
              18.6. Both parties will act reasonably and cooperate to resolve
              disputes arising from transactions facilitated through the
              platform.
            </p>

            <h2>19. Changes to This Agreement</h2>
            <p>
              19.1. LocalKokani may update this Agreement to reflect changes in
              platform services, operational processes or applicable law.
            </p>
            <p>
              19.2. Material changes to commission, subscription fees, payment
              arrangements or other commercial terms will be communicated to the
              Partner.
            </p>
            <p>
              19.3. A material change to commercial terms will apply to the
              Partner only after the Partner has accepted the revised terms,
              except where a change is required by law.
            </p>
            <p>
              19.4. The revised Agreement will display its updated Effective
              Date.
            </p>
            <p>
              19.5. The revised commission policy effective from 2 November 2026
              will not apply retrospectively to transactions already confirmed
              before that date.
            </p>
            <p>
              19.6. Existing Partners will be notified of the revised commercial
              terms and their acceptance will be obtained where required before
              the revised terms are applied to them.
            </p>

            <h2>20. Governing Law and Dispute Resolution</h2>
            <p>20.1. This Agreement will be governed by the laws of India.</p>
            <p>
              20.2. The parties will first attempt to resolve disputes through
              good-faith communication.
            </p>
            <p>
              20.3. If the dispute cannot be resolved amicably, either party may
              pursue the remedies available under applicable Indian law before a
              court or competent authority having jurisdiction.
            </p>

            <h2>21. Electronic Acceptance and Agreement Records</h2>
            <p>
              21.1. The Partner may accept this Agreement electronically through
              a checkbox, online registration process, electronic signature or
              another acceptance method provided by LocalKokani.
            </p>
            <p>
              21.2. Electronic acceptance will indicate that the Partner has
              read, understood and agreed to this Agreement.
            </p>
            <p>21.3. LocalKokani may maintain records of:</p>
            <ul>
              <li>Partner or business name</li>
              <li>Authorised representative details</li>
              <li>Selected Partner Plan</li>
              <li>Agreement version and Effective Date</li>
              <li>Date and time of acceptance</li>
              <li>Registration details and electronic acceptance confirmation</li>
            </ul>
            <p>
              21.4. The Partner should retain a copy of this Agreement and any
              separate written commercial terms accepted by the Partner.
            </p>
            <p>
              21.5. Any separate written agreement signed or electronically
              accepted by both parties will form part of the commercial
              arrangement between them. If there is a conflict, the specific
              agreed written term will prevail only to the extent of that
              conflict and subject to applicable law.
            </p>

            <h2>22. Contact Information</h2>
            <p>
              For questions, Partner support, listing updates, commission
              queries, cancellations or other matters relating to this
              Agreement, contact:
            </p>
            <p>
              <strong>LocalKokani</strong>
            </p>
            <ul>
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