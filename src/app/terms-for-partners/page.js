// src/app/terms-for-partners/page.js
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Terms for Partners | Local Kokani",
  description:
    "Terms governing the registration, listing, and promotion of businesses on Local Kokani, including Basic Listing and Premium Plan terms, the ₹500 fixed commission for accommodation and food transactions, and partner obligations.",
  path: "/terms-for-partners",
  keywords: [
    "terms for partners",
    "partner terms",
    "business listing terms",
    "partner plans",
    "fixed commission",
    "food business terms",
    "local kokani partners",
  ],
});

export default function TermsForPartnersPage() {
  return (
    <>
      <div className="bg-secondary dark:bg-gray-900">
        <Breadcrumbs
          items={[{ name: "Terms for Partners", url: "/terms-for-partners" }]}
        />
      </div>

      <section className="py-16 bg-white ">
        <div className="container-custom max-w-3xl">
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-primary mb-2">
            Terms for Partners
          </h1>
          <p className="text-gray-400 text-sm mb-10">
            Effective Date: 2 November 2026
          </p>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-a:text-secondary">
            <h2>1. Introduction</h2>
            <p>Welcome to LocalKokani.</p>
            <p>
              These Terms for Partners govern the relationship between
              LocalKokani (&quot;LocalKokani&quot;, &quot;we&quot;,
              &quot;our&quot; or &quot;us&quot;) and businesses or service
              providers (&quot;Partner&quot;, &quot;you&quot; or
              &quot;your&quot;) that register, create listings or promote their
              services through the LocalKokani platform.
            </p>
            <p>
              LocalKokani is a platform that helps travelers discover
              accommodation, restaurants, Khanavals, dhabas, food services and
              local experiences across the Konkan region of Maharashtra, India.
            </p>
            <p>
              By registering, submitting business information, purchasing a
              Partner Plan or using LocalKokani&apos;s services, you agree to
              these Terms, our{" "}
              <a href="/terms-and-conditions">Terms and Conditions</a>,{" "}
              <a href="/privacy-policy">Privacy Policy</a> and other applicable
              policies.
            </p>
            <p>
              Please read these Terms carefully before registering or using our
              platform.
            </p>

            <h2>2. Eligibility to Become a Partner</h2>
            <p>To register as a Partner on LocalKokani, you must:</p>
            <ul>
              <li>
                Be the owner, authorized representative or legally permitted
                operator of the business.
              </li>
              <li>Provide accurate and complete business information.</li>
              <li>
                Have the necessary permissions, registrations and licences
                required to operate your business.
              </li>
              <li>Be legally eligible to enter into an agreement.</li>
              <li>
                Agree to comply with applicable Indian laws and regulations.
              </li>
              <li>
                Provide valid contact details for communication and business
                enquiries.
              </li>
            </ul>
            <p>
              LocalKokani reserves the right to review, approve, reject, suspend
              or remove a business listing if the information provided is
              inaccurate, misleading, incomplete or in violation of these Terms
              or applicable law.
            </p>
            <p>
              Registration or listing on LocalKokani does not replace any
              government registration, licence, permit or statutory approval
              required for your business.
            </p>

            <h2>3. Partner Plans</h2>
            <p>LocalKokani currently offers the following Partner Plans.</p>

            <h3>3.1 Basic Listing – Free Plan</h3>
            <p>
              The Basic Listing plan allows eligible businesses to display their
              services on LocalKokani without a subscription fee.
            </p>
            <p>Features may include:</p>
            <ul>
              <li>Standard business listing page.</li>
              <li>Basic visibility on the LocalKokani platform.</li>
              <li>Business description, photographs and service information.</li>
              <li>
                Customer enquiries routed through LocalKokani WhatsApp.
              </li>
              <li>
                Booking, reservation and order coordination through
                LocalKokani.
              </li>
              <li>Commission-based transaction arrangement.</li>
            </ul>
            <p>
              A commission of ₹500 per unique confirmed Booking / Order
              Reference ID applies to eligible Basic Listing transactions as
              explained in Section 7.
            </p>

            <h3>3.2 Premium Plan – Paid Plan</h3>
            <p>
              The Premium Plan provides additional listing visibility and
              features, which may include:
            </p>
            <ul>
              <li>Premium badge indicating an active paid subscription.</li>
              <li>Custom listing badges, where applicable.</li>
              <li>
                Direct WhatsApp enquiries to the Partner&apos;s registered
                number.
              </li>
              <li>Google Maps location on the business listing.</li>
              <li>Priority listing visibility.</li>
              <li>Priority support from LocalKokani.</li>
            </ul>
            <p>
              Premium Plan features may be updated or changed from time to time.
            </p>
            <p>
              The Premium badge indicates an active paid subscription only. It
              is not a government certification, licence, inspection certificate
              or guarantee of service quality.
            </p>
            <p>
              Unless a separate commission arrangement is disclosed and agreed
              to in writing, direct transactions completed through a Premium
              Plan listing are not subject to the standard ₹500 commission.
            </p>

            <h2>4. Premium Subscription, Payment and Cancellation</h2>
            <p>The Premium Plan is a paid subscription service.</p>
            <ul>
              <li>
                The applicable subscription price and duration will be
                communicated before payment.
              </li>
              <li>
                Premium features will be activated after successful payment and
                applicable verification.
              </li>
              <li>
                Partners must provide accurate payment and business details.
              </li>
              <li>
                Premium subscription fees are non-refundable once the
                subscription has been activated, except where a refund is
                required by applicable law or expressly agreed to in writing by
                LocalKokani.
              </li>
              <li>
                Cancellation of a Premium subscription does not automatically
                entitle the Partner to a refund for the unused subscription
                period.
              </li>
              <li>
                LocalKokani may change subscription features or pricing for
                future subscription periods by providing appropriate notice.
              </li>
            </ul>
            <p>
              Partners are responsible for keeping track of their subscription
              validity and renewal requirements.
            </p>

            <h2>5. Business Listing Information and Accuracy</h2>
            <p>
              Partners must provide accurate, complete and up-to-date business
              information.
            </p>
            <p>This may include:</p>
            <ul>
              <li>Business name and category.</li>
              <li>Owner or authorized representative details.</li>
              <li>Business address and location.</li>
              <li>Contact number and WhatsApp number.</li>
              <li>Accommodation details, room types and facilities.</li>
              <li>Restaurant details, menu and food prices.</li>
              <li>Business operating hours.</li>
              <li>Photographs, videos and descriptions.</li>
              <li>Pricing, taxes and additional charges.</li>
              <li>Booking, reservation and cancellation conditions.</li>
              <li>Applicable licences and registration details.</li>
            </ul>
            <p>
              Partners must promptly inform LocalKokani about changes to business
              details, prices, availability, contact numbers, operating hours or
              services.
            </p>
            <p>
              LocalKokani may edit, update, reject or remove inaccurate,
              misleading, inappropriate or outdated listing information.
            </p>
            <p>
              Partners are responsible for the accuracy of all information they
              provide.
            </p>

            <h2>6. Customer Enquiries, Bookings, Reservations and Orders</h2>
            <p>
              LocalKokani may facilitate customer enquiries and transactions for
              accommodation and food-related businesses.
            </p>

            <h3>6.1 Basic Listing Process</h3>
            <p>For Basic Listing Partners:</p>
            <ol>
              <li>A customer submits an enquiry through LocalKokani.</li>
              <li>
                LocalKokani forwards or coordinates the enquiry with the
                Partner.
              </li>
              <li>
                The Partner confirms availability, pricing and applicable
                conditions.
              </li>
              <li>
                LocalKokani communicates the relevant details to the customer.
              </li>
              <li>
                Once the customer accepts the disclosed terms and the Partner
                confirms the transaction, a Booking or Order Reference ID may be
                issued.
              </li>
              <li>
                The transaction is treated as confirmed once the applicable
                confirmation process is completed.
              </li>
            </ol>
            <p>This process may apply to:</p>
            <ul>
              <li>Hotel and resort bookings.</li>
              <li>Homestay and villa bookings.</li>
              <li>Cottage, guest house and lodge bookings.</li>
              <li>Restaurant table reservations.</li>
              <li>Khanaval and dhaba reservations.</li>
              <li>Food orders and takeaway orders.</li>
            </ul>
            <p>
              Partners must respond to enquiries promptly and provide accurate
              availability, prices and service details.
            </p>
            <p>
              An enquiry alone does not constitute a confirmed transaction and
              does not attract commission.
            </p>

            <h3>6.2 Premium Plan Process</h3>
            <p>For Premium Plan Partners:</p>
            <ul>
              <li>
                Customers may contact the Partner directly through the WhatsApp
                number or contact details displayed on the listing.
              </li>
              <li>The Partner is responsible for responding to enquiries.</li>
              <li>
                The Partner independently confirms bookings, reservations and
                orders.
              </li>
              <li>The Partner collects payments directly from customers.</li>
              <li>
                The Partner handles customer communication, fulfilment,
                cancellations and applicable refunds.
              </li>
            </ul>
            <p>
              Unless separately agreed in writing, standard ₹500 commission does
              not apply to these direct Premium Plan transactions.
            </p>

            <h3>6.3 Booking and Order Reference IDs</h3>
            <p>
              Partners must maintain accurate records of confirmed transactions
              and their Reference IDs.
            </p>
            <p>
              A unique Reference ID identifies one confirmed transaction for
              commission calculation.
            </p>
            <p>
              A modification under the same Reference ID does not attract
              additional commission solely because of the modification.
            </p>
            <p>
              Separate independent confirmed transactions with separate Reference
              IDs are treated as separate transactions.
            </p>

            <h2>7. Commission and Confirmed Transactions</h2>

            <h3>7.1 Basic Listing Commission</h3>
            <p>
              A fixed commission of{" "}
              <strong>₹500 per unique confirmed Booking / Order Reference ID</strong>{" "}
              applies to eligible Basic Listing transactions.
            </p>
            <p>
              The same commission applies to accommodation and restaurant/food
              services.
            </p>
            <p>Eligible transactions include:</p>
            <p><strong>Accommodation:</strong></p>
            <ul>
              <li>Hotels.</li>
              <li>Resorts.</li>
              <li>Homestays.</li>
              <li>Villas.</li>
              <li>Cottages.</li>
              <li>Guest houses.</li>
              <li>Lodges.</li>
              <li>Other listed accommodation services.</li>
            </ul>
            <p><strong>Restaurant and Food Services:</strong></p>
            <ul>
              <li>Restaurant table reservations.</li>
              <li>Restaurant bookings.</li>
              <li>Khanaval and dhaba reservations.</li>
              <li>Food orders.</li>
              <li>Takeaway orders.</li>
              <li>Other eligible food-service transactions.</li>
            </ul>

            <h3>7.2 One Commission Per Reference ID</h3>
            <p>
              The commission is calculated per unique confirmed Reference ID,
              not per room, night, guest, food item or quantity.
            </p>
            <p>Examples:</p>
            <div className="not-prose overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary/10">
                    <th className="text-left p-3 border border-gray-200 font-semibold">
                      Confirmed Transaction
                    </th>
                    <th className="text-right p-3 border border-gray-200 font-semibold">
                      Commission
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-gray-200">
                      One booking with 1 room
                    </td>
                    <td className="p-3 border border-gray-200 text-right">
                      ₹500
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">
                      One booking with 3 rooms
                    </td>
                    <td className="p-3 border border-gray-200 text-right">
                      ₹500
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">
                      One booking with 5 nights
                    </td>
                    <td className="p-3 border border-gray-200 text-right">
                      ₹500
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">
                      One booking with multiple guests
                    </td>
                    <td className="p-3 border border-gray-200 text-right">
                      ₹500
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">
                      One food order with 5 items
                    </td>
                    <td className="p-3 border border-gray-200 text-right">
                      ₹500
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">
                      One food order with multiple quantities
                    </td>
                    <td className="p-3 border border-gray-200 text-right">
                      ₹500
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">
                      Two separate confirmed Reference IDs
                    </td>
                    <td className="p-3 border border-gray-200 text-right">
                      ₹1,000
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">
                      Three separate confirmed Reference IDs
                    </td>
                    <td className="p-3 border border-gray-200 text-right">
                      ₹1,500
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>7.3 When Commission Applies</h3>
            <p>Commission applies only when:</p>
            <ul>
              <li>The Partner is on the Basic Listing plan.</li>
              <li>The transaction is eligible for commission.</li>
              <li>
                The transaction has been confirmed through the applicable
                process.
              </li>
              <li>
                A unique Booking or Order Reference ID has been issued or
                recorded.
              </li>
            </ul>
            <p>No commission applies to:</p>
            <ul>
              <li>General enquiries.</li>
              <li>Unconfirmed bookings or orders.</li>
              <li>
                Transactions that have not been accepted by the customer and
                Partner.
              </li>
              <li>
                Modifications under the same Reference ID solely because of the
                modification.
              </li>
            </ul>

            <h3>7.4 Payment of Commission</h3>
            <p>Depending on the payment arrangement:</p>
            <p><strong>Where LocalKokani collects payment:</strong></p>
            <ul>
              <li>
                LocalKokani may collect the advance or applicable transaction
                payment.
              </li>
              <li>LocalKokani may deduct the agreed ₹500 commission.</li>
              <li>
                The remaining applicable amount may be transferred to the
                Partner.
              </li>
            </ul>
            <p>
              <strong>
                Where the Partner collects payment directly under a Basic
                Listing transaction:
              </strong>
            </p>
            <ul>
              <li>
                The Partner remains responsible for paying the agreed ₹500
                commission to LocalKokani for each eligible confirmed Reference
                ID.
              </li>
              <li>
                The Partner must provide accurate transaction details and
                payment records when reasonably requested.
              </li>
            </ul>
            <p>
              The payment and commission arrangement must be disclosed and
              accepted before the transaction is confirmed.
            </p>

            <h3>7.5 Premium Plan Commission</h3>
            <p>
              No standard ₹500 commission applies to direct transactions
              completed through Premium Plan listings.
            </p>
            <p>
              A separate commission may apply only where it has been separately
              disclosed and expressly agreed to in writing by the Partner and
              LocalKokani.
            </p>

            <h2>8. Cancellation, Commission Reversal and Customer Refunds</h2>

            <h3>8.1 Cancellation of Confirmed Transactions</h3>
            <p>
              If a confirmed Basic Listing transaction is cancelled by either
              the customer or the Partner:
            </p>
            <ul>
             
              <li>
                If the commission has already been collected or deducted, the
                full ₹500 will be returned to the Partner under the agreed
                payment arrangement.
              </li>
              <li>
                The Partner must promptly inform LocalKokani about the
                cancellation and provide the relevant Reference ID.
              </li>
            </ul>
            <p>
              This rule applies to eligible accommodation bookings, restaurant
              reservations and food orders.
            </p>

            <h3>8.2 Customer Refunds</h3>
            <p>The customer&apos;s refund is separate from the commission reversal.</p>
            <p>
              The Partner must clearly disclose the applicable cancellation and
              refund conditions before confirming a transaction.
            </p>
            <p>
              The Partner is responsible for providing any customer refund due
              under the disclosed cancellation conditions and applicable law
              where the advance or payment has already been transferred to the
              Partner.
            </p>
            <p>
              Where the customer&apos;s payment is still held by LocalKokani,
              LocalKokani may coordinate or process the applicable refund
              according to the agreed arrangement, disclosed conditions and
              applicable law.
            </p>

            <h3>8.3 Cancellation by Partner</h3>
            <p>
              If the Partner cannot fulfil a confirmed booking, reservation or
              order, the Partner must:
            </p>
            <ul>
              <li>Inform LocalKokani and the customer promptly.</li>
              <li>Provide a clear reason for the cancellation.</li>
              <li>
                Refund amounts due to the customer in accordance with the
                disclosed conditions and applicable law.
              </li>
              <li>Cooperate in resolving the customer&apos;s complaint.</li>
              <li>Provide any relevant transaction or refund records.</li>
            </ul>
            <p>
              Any alternative booking or service arrangement is subject to the
              customer&apos;s acceptance.
            </p>

            <h3>8.4 Cancellation by Customer</h3>
            <p>
              If a customer cancels a booking, reservation or order, the Partner
              must follow the cancellation conditions communicated before
              confirmation and applicable law.
            </p>
            <p>
              Partners must not impose undisclosed cancellation charges or
              deductions.
            </p>

            <h3>8.5 Premium Plan Transactions</h3>
            <p>
              For direct Premium Plan transactions, the Partner is responsible
              for handling cancellations and customer refunds directly, subject
              to the agreed conditions and applicable law.
            </p>

            <h2>9. Accommodation Partner Responsibilities</h2>
            <p>
              Partners operating hotels, resorts, homestays, villas, cottages,
              guest houses, lodges or other accommodation businesses must:
            </p>
            <ul>
              <li>Provide accurate room details, photographs and facilities.</li>
              <li>
                Maintain the property in a safe and reasonably clean condition.
              </li>
              <li>
                Clearly disclose room rates, taxes and additional charges.
              </li>
              <li>Confirm room availability before accepting a booking.</li>
              <li>
                Honour confirmed bookings, subject to applicable law and the
                agreed conditions.
              </li>
              <li>Clearly communicate check-in and check-out timings.</li>
              <li>
                Disclose property rules and cancellation conditions before
                confirmation.
              </li>
              <li>
                Provide the services and facilities represented in the listing.
              </li>
              <li>Treat customers fairly and professionally.</li>
              <li>Address customer complaints promptly.</li>
              <li>
                Inform LocalKokani about changes affecting confirmed bookings.
              </li>
            </ul>
            <p>
              The Partner is responsible for the actual accommodation, guest
              safety within the Partner&apos;s control, service delivery and
              applicable statutory compliance.
            </p>

            <h2>10. Restaurant and Food Business Partner Responsibilities</h2>
            <p>
              Partners operating restaurants, Khanavals, dhabas or other food
              businesses must:
            </p>
            <ul>
              <li>Provide accurate restaurant details and operating hours.</li>
              <li>Keep menu information and food prices updated.</li>
              <li>Confirm table availability before accepting reservations.</li>
              <li>Confirm food orders and takeaway availability.</li>
              <li>
                Prepare and serve food in accordance with applicable food safety
                requirements.
              </li>
              <li>
                Maintain appropriate hygiene and sanitation standards.
              </li>
              <li>Use safe and suitable ingredients.</li>
              <li>
                Provide accurate information about food items and known
                allergens.
              </li>
              <li>
                Prepare and fulfil orders according to the confirmed details.
              </li>
              <li>
                Communicate delays, unavailability or order changes promptly.
              </li>
              <li>
                Clearly disclose applicable payment and cancellation conditions.
              </li>
              <li>
                Handle complaints about food quality, incorrect orders and
                service issues.
              </li>
              <li>
                Process applicable customer refunds or remedies in accordance
                with the disclosed policy and applicable law.
              </li>
            </ul>
            <p>
              The Partner is solely responsible for food preparation, food
              quality, packaging, takeaway handling, order fulfilment and any
              delivery services operated by the Partner.
            </p>
            <p>
              LocalKokani does not ordinarily prepare, package, sell or deliver
              food.
            </p>

            <h2>11. Licences, Registrations and Legal Compliance</h2>
            <p>
              Partners are solely responsible for obtaining, maintaining and
              renewing all licences, registrations, permits and approvals
              required to operate their businesses.
            </p>
            <p>
              Depending on the type and location of the business, these may
              include:
            </p>
            <ul>
              <li>
                Applicable local Gram Panchayat or municipal permissions.
              </li>
              <li>
                FSSAI registration or licence for food businesses, as
                applicable.
              </li>
              <li>GST registration, where legally required.</li>
              <li>Shops and Establishments registration, where applicable.</li>
              <li>Fire safety permissions or compliance, where applicable.</li>
              <li>
                Tourism, lodging or accommodation-related registrations, where
                applicable.
              </li>
              <li>
                Any other statutory permission required by the relevant
                authority.
              </li>
            </ul>
            <p>
              Partners must provide copies or details of relevant licences and
              registrations when requested by LocalKokani.
            </p>
            <p>
              Partners must immediately inform LocalKokani if a required licence
              or registration expires, is suspended, is cancelled or is
              otherwise no longer valid.
            </p>
            <p>
              LocalKokani may suspend or remove a listing if the Partner fails to
              provide required compliance information or if the business appears
              to be operating unlawfully.
            </p>
            <p>
              Listing on LocalKokani does not mean that LocalKokani has certified
              the Partner&apos;s legal compliance.
            </p>

            <h2>12. Customer Information and Privacy</h2>
            <p>
              Partners may receive customer information, such as names, phone
              numbers, enquiry details and booking or order information, for the
              purpose of responding to enquiries and fulfilling confirmed
              transactions.
            </p>
            <p>Partners agree to:</p>
            <ul>
              <li>
                Use customer information only for the relevant enquiry, booking,
                reservation or order.
              </li>
              <li>Keep customer information confidential.</li>
              <li>
                Not sell, misuse or share customer information without lawful
                authority.
              </li>
              <li>Take reasonable steps to protect customer information.</li>
              <li>Avoid unsolicited marketing or unrelated communication.</li>
              <li>Comply with applicable data protection and privacy laws.</li>
              <li>
                Delete or securely dispose of customer information when it is no
                longer required, subject to legal record-keeping obligations.
              </li>
            </ul>
            <p>
              Partners must not use LocalKokani to collect customer information
              for unrelated or unauthorized purposes.
            </p>

            <h2>13. Listing Content, Photographs and Intellectual Property</h2>
            <p>
              Partners must ensure that all photographs, videos, descriptions,
              logos, menus and other content submitted to LocalKokani are
              accurate and that they have the necessary rights or permissions to
              use them.
            </p>
            <p>
              By submitting content, Partners authorize LocalKokani to display,
              reproduce, resize, format and use that content for:
            </p>
            <ul>
              <li>Business listings on LocalKokani.</li>
              <li>Website and platform promotion.</li>
              <li>Social media promotion.</li>
              <li>
                Marketing and advertising of the listed business through
                LocalKokani.
              </li>
            </ul>
            <p>
              This permission is limited to the purpose of operating and
              promoting the Partner&apos;s listing and related LocalKokani
              services.
            </p>
            <p>Partners must not submit:</p>
            <ul>
              <li>Copyrighted content without permission.</li>
              <li>False or misleading photographs.</li>
              <li>
                Content belonging to another business without authorization.
              </li>
              <li>Offensive, unlawful or inappropriate material.</li>
              <li>Misleading prices, offers or service claims.</li>
            </ul>
            <p>
              LocalKokani may remove content that violates these Terms or
              applicable law.
            </p>

            <h2>14. Prohibited Activities</h2>
            <p>Partners must not:</p>
            <ul>
              <li>Provide false, misleading or incomplete business information.</li>
              <li>Accept bookings or orders they cannot fulfil.</li>
              <li>Misrepresent prices, facilities, menus or services.</li>
              <li>Use fake photographs, reviews or ratings.</li>
              <li>Misuse customer information.</li>
              <li>Engage in fraudulent transactions.</li>
              <li>
                Harass or threaten customers or LocalKokani representatives.
              </li>
              <li>Use LocalKokani to promote unlawful services.</li>
              <li>Attempt to interfere with the website or its systems.</li>
              <li>Impersonate another business or individual.</li>
              <li>
                Make unauthorized changes to LocalKokani content or systems.
              </li>
              <li>
                Engage in any activity that damages the reputation or proper
                operation of the platform.
              </li>
            </ul>
            <p>
              LocalKokani may take appropriate action, including listing
              suspension or termination, if these activities are identified.
            </p>

            <h2>15. Suspension and Termination</h2>
            <p>
              LocalKokani may temporarily suspend or permanently remove a
              Partner listing or subscription if:
            </p>
            <ul>
              <li>The Partner violates these Terms.</li>
              <li>The Partner provides false or misleading information.</li>
              <li>The Partner fails to fulfil confirmed transactions.</li>
              <li>
                The Partner repeatedly receives substantiated customer
                complaints.
              </li>
              <li>The Partner misuses customer information.</li>
              <li>
                The Partner fails to maintain legally required licences or
                registrations.
              </li>
              <li>
                The Partner engages in fraudulent or unlawful activities.
              </li>
              <li>
                The Partner&apos;s conduct creates a material risk to customers
                or the platform.
              </li>
            </ul>
            <p>
              Where reasonably possible, LocalKokani may provide notice and an
              opportunity to resolve the issue before suspension or termination.
              Immediate action may be taken where necessary to address serious
              risks, suspected fraud, legal requirements or customer safety
              concerns.
            </p>
            <p>
              Partners may request removal of their listing by contacting
              LocalKokani.
            </p>
            <p>
              Termination does not remove obligations relating to outstanding
              payments, commission, customer refunds, confirmed transactions,
              privacy or other obligations that should reasonably continue after
              termination.
            </p>
            <p>
              Premium subscription fees remain subject to the non-refundable
              policy in Section 4, except where a refund is required by law or
              expressly agreed in writing.
            </p>

            <h2>16. Limitation of Liability</h2>
            <p>
              LocalKokani operates as a platform for business discovery and
              enquiry facilitation.
            </p>
            <p>
              LocalKokani does not own, operate or control independent Partner
              businesses and does not directly provide accommodation, food
              preparation, restaurant services or other Partner services unless
              expressly stated.
            </p>
            <p>
              To the extent permitted by applicable law, LocalKokani is not
              responsible for:
            </p>
            <ul>
              <li>The Partner&apos;s business operations.</li>
              <li>Accommodation quality or availability.</li>
              <li>Food preparation, hygiene or quality.</li>
              <li>Incorrect or delayed orders.</li>
              <li>Partner pricing or additional charges.</li>
              <li>The Partner&apos;s failure to fulfil confirmed services.</li>
              <li>
                Accidents, injuries, theft or loss arising from the
                Partner&apos;s business operations.
              </li>
              <li>Disputes between customers and Partners.</li>
              <li>Any inaccurate information supplied by a Partner.</li>
            </ul>
            <p>
              Partners remain responsible for their own business operations,
              employees, services, customer dealings and statutory obligations.
            </p>
            <p>
              Nothing in these Terms excludes or limits liability that cannot
              legally be excluded or limited under applicable Indian law.
            </p>

            <h2>17. Changes to These Terms</h2>
            <p>
              LocalKokani may update these Terms from time to time to reflect
              changes in services, platform operations, Partner arrangements or
              applicable laws.
            </p>
            <p>
              Updated Terms will be published on this page with a revised
              Effective Date.
            </p>
            <p>
              The revised commission and payment rules stated in these Terms are
              effective from <strong>2 November 2026</strong>.
            </p>
            <p>
              These revised rules apply to eligible transactions confirmed on or
              after that date, subject to disclosure and acceptance of the
              applicable commission and payment arrangement.
            </p>
            <p>
              Transactions confirmed before 2 November 2026 will remain subject
              to the commission and payment arrangements applicable when they
              were confirmed, unless the Partner and LocalKokani expressly agree
              otherwise.
            </p>
            <p>
              Existing Partners will be notified of material changes where
              appropriate. Where required, LocalKokani will obtain the
              Partner&apos;s acceptance before applying revised terms to future
              transactions.
            </p>
            <p>Partners are encouraged to review this page periodically.</p>

            <h2>18. Governing Law and Dispute Resolution</h2>
            <p>These Terms are governed by the laws of India.</p>
            <p>
              Any dispute between LocalKokani and a Partner should first be
              addressed through good-faith communication and an attempt to
              resolve the matter amicably.
            </p>
            <p>
              If the dispute cannot be resolved through communication, it may be
              referred to the competent courts or authorities having jurisdiction
              under applicable Indian law.
            </p>
            <p>
              Nothing in these Terms prevents either party from exercising rights
              or remedies available under applicable law.
            </p>

            <h2>19. Contact Us</h2>
            <p>
              For Partner registration, listing updates, subscription enquiries,
              commission questions, payment matters or other Partner-related
              support, please contact:
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
              We will make reasonable efforts to respond to genuine Partner
              enquiries and support requests.
            </p>

            <hr />

            <p>
              <strong>
                By registering as a Partner or continuing to use LocalKokani
                Partner services, you acknowledge that you have read and agreed
                to these Terms, including the applicable Partner Plan,
                commission, payment, cancellation and refund conditions.
              </strong>
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