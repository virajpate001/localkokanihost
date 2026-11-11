// src/app/terms-and-conditions/page.js
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions | Local Kokani",
  description:
    "Terms and conditions governing the use of Local Kokani's discovery, listing, and enquiry platform, including partner plans, the  fixed commission across accommodation, restaurant reservations, and food orders.",
  path: "/terms-and-conditions",
  keywords: [
    "terms and conditions",
    "terms of service",
    "user agreement",
    "partner plans",
    "fixed commission",
    "food orders",
    "restaurant reservations",
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
            Effective Date: 2 November 2026
          </p>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-a:text-secondary">
            <h2>1. Introduction</h2>
            <p>Welcome to LocalKokani.</p>
            <p>
              LocalKokani is an online platform that helps travelers discover
              accommodation, restaurants, food services and local experiences
              across the Konkan region of Maharashtra, India.
            </p>
            <p>
              These Terms &amp; Conditions (&quot;Terms&quot;) govern your
              access to and use of{" "}
              <a
                href="https://www.localkokani.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.localkokani.com
              </a>
              , including its listings, business information, enquiry services,
              booking coordination and related features.
            </p>
            <p>
              By accessing or using the website, you agree to these Terms and
              the applicable policies published on our website. If you do not
              agree, please discontinue using the website.
            </p>
            <p>
              These Terms apply to travelers, website visitors, accommodation
              providers, restaurant owners, food businesses and other business
              partners.
            </p>

            <h2>2. About LocalKokani</h2>
            <p>
              LocalKokani is a business discovery, listing and enquiry
              facilitation platform that connects travelers and customers with
              local businesses across Konkan.
            </p>
            <p>The platform may display:</p>
            <ul>
              <li>Hotels and resorts.</li>
              <li>Homestays, villas and cottages.</li>
              <li>Guest houses, lodges and farm stays.</li>
              <li>Restaurants, Khanavals, dhabas and eateries.</li>
              <li>Restaurant table reservations.</li>
              <li>Food orders, takeaway and other food services.</li>
              <li>
                Other eligible local businesses and tourism-related services.
              </li>
            </ul>
            <p>
              Unless expressly stated otherwise, accommodation and food services
              are provided by independent businesses, not by LocalKokani itself.
            </p>
            <p>
              A listing on LocalKokani does not mean that the business is owned,
              managed, operated or officially endorsed by LocalKokani.
            </p>

            <h2>3. Eligibility and User Responsibilities</h2>
            <p>
              You must use LocalKokani lawfully and provide accurate information
              when submitting an enquiry, making a booking, placing an order or
              registering a business.
            </p>
            <p>You agree not to:</p>
            <ul>
              <li>Provide false, misleading or fraudulent information.</li>
              <li>Use the website for unlawful purposes.</li>
              <li>Misuse another person&apos;s contact information.</li>
              <li>
                Attempt unauthorized access to the website or its systems.
              </li>
              <li>
                Upload harmful, abusive, infringing or misleading content.
              </li>
              <li>
                Impersonate another person, business or LocalKokani
                representative.
              </li>
              <li>
                Interfere with the website&apos;s operation or security.
              </li>
            </ul>
            <p>
              You are responsible for reviewing relevant business information
              and confirming important details before making a booking,
              reservation, payment or food order.
            </p>

            <h2>4. Business Listings and Information</h2>
            <p>
              LocalKokani may display information provided by business owners,
              including descriptions, prices, photographs, amenities, menus,
              contact information, operating hours and location details.
            </p>
            <p>
              Business owners are responsible for ensuring that their submitted
              information is accurate, current and not misleading.
            </p>
            <p>
              We may review, update formatting, correct apparent errors, request
              supporting information or remove a listing where reasonably
              necessary.
            </p>
            <p>
              Although we aim to maintain useful and accurate listings, we
              cannot guarantee that every detail is complete, current or
              error-free at all times. Availability, prices, amenities, menus
              and business operations may change.
            </p>
            <p>
              Travelers and customers should confirm important information
              directly with the relevant business before committing to a
              booking, reservation or purchase.
            </p>

            <h2>5. Partner Plans</h2>
            <p>LocalKokani provides two partner plans.</p>

            <h3>5.1 Basic Listing (Free)</h3>
            <p>The Basic Listing plan may include:</p>
            <ul>
              <li>A standard business listing page.</li>
              <li>Basic visibility on LocalKokani.</li>
              <li>
                Customer enquiries routed through LocalKokani&apos;s WhatsApp.
              </li>
              <li>Booking, reservation and order coordination.</li>
              <li>
                A fixed commission  per unique confirmed Reference ID.
              </li>
            </ul>
            <p>
              For Basic Listing transactions, LocalKokani may coordinate
              enquiries, confirmations and advance payments through its official
              communication channels.
            </p>
            <p>The commission applies to the following categories:</p>
            <ul>
              <li>Hotel and resort bookings.</li>
              <li>Homestay, villa, cottage and lodge bookings.</li>
              <li>Guest house and other accommodation bookings.</li>
              <li>Restaurant and Khanaval reservations.</li>
              <li>Restaurant table bookings.</li>
              <li>Food orders.</li>
              <li>Takeaway orders.</li>
              <li>
                Other eligible services listed on LocalKokani, where the fixed
                commission has been separately disclosed and accepted.
              </li>
            </ul>
            <p>
              <strong>Fixed Commission: per unique confirmed Reference ID.</strong>
            </p>
            <p>
              The commission is charged only once per unique confirmed Reference
              ID, regardless of the number of rooms, nights, guests, food items
              or quantities included in that transaction.
            </p>
            <p>
              If a transaction is modified under the same Reference ID, no
              additional commission will be charged solely because of that
              modification.
            </p>
            <p>
              Separate confirmed transactions with different Reference IDs
              attract separate commissions.
            </p>
            <p>
              No commission is payable for general enquiries or unconfirmed
              transactions.
            </p>
            <p>
              The applicable commission and payment arrangement must be
              communicated to and accepted by the Partner before the transaction
              is confirmed.
            </p>

            <h3>5.2 Premium Plan (Paid)</h3>
            <p>The Premium Plan may include:</p>
            <ul>
              <li>A Premium badge.</li>
              <li>
                Custom badges, such as &quot;Top Rated,&quot; where awarded
                under applicable criteria.
              </li>
              <li>Direct WhatsApp enquiries to the owner&apos;s number.</li>
              <li>Google Maps location on the business listing.</li>
              <li>Priority visibility.</li>
              <li>Priority support.</li>
            </ul>
            <p>
              The Premium Plan price, validity period and included features will
              be disclosed before purchase.
            </p>
            <p>
              For Premium Plan transactions, customers contact the owner
              directly. The owner is responsible for confirming availability,
              accepting orders, collecting payments and managing the
              transaction.
            </p>
            <p>
              No standard fixed commission applies to direct
              Premium Plan transactions unless separately agreed in writing.
            </p>

            <h3>5.3 Premium Badge</h3>
            <p>
              The Premium badge indicates that the business has an active paid
              subscription with LocalKokani.
            </p>
            <p>
              The Premium badge is not a government certification, official
              tourism approval, guarantee of service quality or food safety
              certification.
            </p>
            <p>
              Custom badges such as &quot;Top Rated&quot; may be provided
              according to LocalKokani&apos;s applicable criteria. Their presence
              should not be interpreted as a guarantee of future performance.
            </p>

            <h3>5.4 Premium Subscription Cancellation</h3>
            <p>
              Premium Plan subscription fees are non-refundable after
              activation, including when a partner chooses to discontinue the
              plan before expiry, except where a refund is required by
              applicable law or expressly agreed in writing by LocalKokani.
            </p>
            <p>
              When the subscription expires or is cancelled, the Premium badge
              and associated features may be deactivated. A business may remain
              eligible for a Basic Listing, subject to the applicable listing
              requirements.
            </p>

            <h2>6. Enquiries, Bookings, Reservations and Orders</h2>
            <p>
              A customer enquiry does not automatically constitute a confirmed
              booking, reservation or order.
            </p>
            <p>
              Availability, pricing, booking requirements, order details and
              final confirmation must be established through the applicable
              process.
            </p>

            <h3>6.1 Basic Listing Transactions</h3>
            <p>
              For Basic Listing transactions coordinated through LocalKokani,
              the process may include:
            </p>
            <ol>
              <li>
                The customer submits an enquiry, reservation request or order
                request through LocalKokani.
              </li>
              <li>
                LocalKokani coordinates with the relevant business regarding
                availability, prices and other details.
              </li>
              <li>The business confirms the transaction.</li>
              <li>
                A unique Booking or Order Reference ID is assigned to the
                confirmed transaction.
              </li>
              <li>
                LocalKokani may collect an advance or applicable payment from
                the customer.
              </li>
              <li>
                LocalKokani may deduct the applicable fixed commission and
                transfer the remaining amount to the Partner, according to the
                agreed payment arrangement.
              </li>
              <li>
                The Partner&apos;s contact details may be shared with the
                customer for further communication.
              </li>
            </ol>
            <p>
              The fixed commission applies once per unique confirmed Reference
              ID, regardless of the number of rooms, nights, guests, food items
              or quantities included in that transaction.
            </p>
            <p>
              For transactions where the Partner directly collects the payment,
              the Partner remains responsible for paying the agreed commission
              to LocalKokani.
            </p>
            <p>
              The applicable cancellation and refund conditions must be
              communicated before the transaction is confirmed.
            </p>

            <h3>6.2 Premium Plan Transactions</h3>
            <p>
              For Premium Plan businesses, customers can contact the owner
              directly through the contact details provided on the listing.
            </p>
            <p>
              The owner and customer are responsible for confirming
              availability, prices, payment arrangements, order details, booking
              conditions, cancellation conditions and refunds.
            </p>
            <p>
              Unless separately agreed, LocalKokani does not collect or process
              payments for these direct transactions.
            </p>

            <h2>7. Payments, Commission and Refunds</h2>
            <p>
              Payment arrangements depend on the selected partner plan and the
              particular transaction.
            </p>

            <h3>7.1 Fixed Commission for Basic Listing</h3>
            <p>
              For every confirmed Basic Listing transaction, LocalKokani charges
              a fixed commission per unique
              confirmed Booking or Order Reference ID.
            </p>
            <p>This fixed commission applies equally to:</p>
            <ul>
              <li>Accommodation bookings.</li>
              <li>Hotel and resort reservations.</li>
              <li>Homestay, villa, cottage and lodge bookings.</li>
              <li>Restaurant and Khanaval reservations.</li>
              <li>Restaurant table bookings.</li>
              <li>Food orders.</li>
              <li>Takeaway orders.</li>
              <li>
                Other eligible services where the commission has been disclosed
                and accepted.
              </li>
            </ul>
            <p>
              The commission applies only once per unique Reference ID,
              regardless of the number of rooms, nights, guests, food items or
              quantities included in the transaction.
            </p>
            <p>
              <strong>Examples:</strong>
            </p>
            <ul>
              <li>
                One confirmed accommodation Reference ID covering multiple rooms
                or nights: ₹500 commission. 
              </li>
              <li>
                One confirmed food Order Reference ID containing multiple food
                items: ₹500 commission.
              </li>
              <li>
                One confirmed restaurant reservation Reference ID for multiple
                guests: ₹500 commission.
              </li>
              <li>Two separate confirmed Reference IDs: ₹1,000 commission.</li>
              <li>A general enquiry or unconfirmed transaction: No commission.</li>
              <li>
                A modification under the same Reference ID: No additional
                commission solely because of the modification.
              </li>
            </ul>

            <h3>7.2 Advance Payment and Commission Deduction</h3>
            <p>
              Where LocalKokani collects an advance or payment for a confirmed
              Basic Listing transaction, it may deduct the applicable ₹500
              commission before transferring the remaining amount to the
              Partner, provided this arrangement has been disclosed and
              accepted.
            </p>
            <p>
              <strong>Example:</strong>
            </p>
            <p>
              If the total transaction amount is ₹3,000 and the customer pays an
              advance of ₹1,000:
            </p>
            <ul>
              <li>Total transaction amount: ₹3,000.</li>
              <li>Advance collected by LocalKokani: ₹1,000.</li>
              <li>LocalKokani commission: ₹500.</li>
              <li>Amount transferred to the Partner: ₹500.</li>
              <li>
                Remaining amount payable by the customer directly to the
                Partner: ₹2,000.
              </li>
            </ul>
            <p>
              The Partner receives a total of ₹2,500, and LocalKokani retains
              ₹500 as commission.
            </p>
            <p>
              If the advance collected is less than ₹500, the Partner must pay
              the commission shortfall separately, provided this arrangement was
              disclosed and accepted before the transaction was confirmed.
            </p>
            <p>
              Wherever possible, the advance should be sufficient to cover the
              commission.
            </p>

            <h3>7.3 Commission on Directly Collected Payments</h3>
            <p>
              If a Basic Listing Partner directly collects the full or partial
              payment from the customer, the Partner remains responsible for
              paying the agreed fixed commission to LocalKokani for each unique
              confirmed Reference ID.
            </p>
            <p>
              The Partner must maintain accurate records of confirmed
              transactions and commission payments.
            </p>

            <h3>7.4 Commission Reversal on Cancellation</h3>
           
            <p>
              If the commission has already been collected or deducted, the fixed commission shall be returned to the Partner.
            </p>
            <p>
              The return of LocalKokani&apos;s commission to the Partner is
              separate from the customer&apos;s payment refund.
            </p>
            <p>
              The customer&apos;s refund shall be determined according to the
              cancellation and refund conditions communicated before
              confirmation and applicable law.
            </p>
            <p>
              If the advance or payment has already been transferred to the
              Partner, the Partner is responsible for refunding the customer any
              amount due.
            </p>
            <p>
              If the payment is still held by LocalKokani, LocalKokani will
              coordinate or process the applicable refund in accordance with the
              agreed conditions and applicable law.
            </p>

            <h3>7.5 Premium Plan Transactions</h3>
            <p>
              For direct Premium Plan transactions, the Partner manages booking
              confirmation, order confirmation, payment collection, cancellation
              and refunds.
            </p>
            <p>
              No standard fixed commission applies to direct
              Premium Plan transactions unless a separate written commercial
              arrangement has been accepted by the Partner.
            </p>

            <h3>7.6 Payment Records and Receipts</h3>
            <p>
              Customers and Partners should retain payment receipts, transaction
              confirmations, cancellation messages and other relevant records.
            </p>
            <p>
              LocalKokani will provide appropriate records for payments it
              collects, where applicable.
            </p>
            <p>
              Businesses remain responsible for receipts, invoices, taxes and
              other records relating to payments they receive directly.
            </p>

            <h2>8. Cancellation Policy</h2>
            <p>
              Cancellation rules may differ between properties, restaurants and
              food businesses.
            </p>
            <p>The relevant business may specify conditions relating to:</p>
            <ul>
              <li>Free cancellation deadlines.</li>
              <li>Advance payments and deposits.</li>
              <li>Cancellation charges.</li>
              <li>Refund eligibility and timelines.</li>
              <li>No-shows and late arrivals.</li>
              <li>Changes to booking dates or guest numbers.</li>
              <li>Restaurant table reservations.</li>
              <li>Food order preparation and fulfilment.</li>
              <li>Takeaway and delivery orders.</li>
              <li>Order changes and cancellations.</li>
            </ul>
            <p>
              Customers must read the applicable cancellation conditions
              displayed on the listing or communicated by the business before
              confirming a booking, reservation or order.
            </p>
            <p>
              Once a transaction is confirmed, the terms agreed for that
              transaction apply, subject to applicable law and non-waivable
              consumer rights.
            </p>

            <h3>8.1 Basic Listing Cancellations</h3>
            <p>
              For confirmed Basic Listing transactions, if a transaction is
              cancelled by either the customer or the Partner, LocalKokani shall
              reverse the applicable fixed commission and return it to the
              Partner if it has already been collected or deducted.
            </p>
            <p>
              The customer&apos;s advance payment refund shall be handled
              separately according to the cancellation conditions communicated
              before confirmation and applicable law.
            </p>
            <p>
              If the payment has already been transferred to the Partner, the
              Partner is responsible for processing any customer refund due.
            </p>
            <p>
              If the payment is still held by LocalKokani, LocalKokani will
              coordinate or process the applicable refund in accordance with the
              agreed cancellation conditions and applicable law.
            </p>

            <h3>8.2 Accommodation Cancellations</h3>
            <p>
              For accommodation bookings, cancellation and refund conditions
              may vary by property.
            </p>
            <p>
              Travelers should confirm the applicable cancellation conditions
              directly with the owner before confirming the booking.
            </p>
            <p>
              The Partner is responsible for honoring the agreed cancellation
              and refund conditions and applicable law.
            </p>

            <h3>8.3 Restaurant Reservations and Food Orders</h3>
            <p>
              Restaurant table reservations, Khanaval reservations, food orders,
              takeaway orders and delivery transactions are governed by the
              cancellation, refund and service conditions communicated by the
              relevant business.
            </p>
            <p>
              Customers should confirm cancellation deadlines, advance payment
              conditions, refund eligibility, order preparation status, order
              changes and other applicable conditions directly with the
              restaurant before confirming a reservation or order.
            </p>
           
            <p>
              The customer&apos;s refund remains separate and is determined by
              the applicable cancellation conditions and law.
            </p>

            <h3>8.4 Premium Plan Cancellations</h3>
            <p>
              For Premium Plan transactions, customers must contact the owner
              directly regarding cancellations, rescheduling and refunds.
            </p>
            <p>
              The Partner is responsible for handling these matters under the
              agreed terms and applicable law.
            </p>

            <h2>9. Restaurants, Food Quality and Orders</h2>
            <p>
              LocalKokani helps users discover restaurants, Khanavals, dhabas and
              other food businesses across Konkan.
            </p>
            <p>
              Unless expressly stated otherwise, LocalKokani does not prepare,
              cook, package, sell or deliver food.
            </p>
            <p>
              Food businesses are independently responsible for their food
              services, including:
            </p>
            <ul>
              <li>Food preparation and quality.</li>
              <li>Food safety and hygiene.</li>
              <li>Cleanliness of kitchens and premises.</li>
              <li>Safe food handling and storage.</li>
              <li>Correct menu items and quantities.</li>
              <li>Accurate menu descriptions and pricing.</li>
              <li>Disclosure of applicable additional charges.</li>
              <li>Order preparation and fulfilment.</li>
              <li>Packaging and delivery arrangements, where applicable.</li>
              <li>Handling customer complaints and refunds where due.</li>
            </ul>

            <h3>9.1 Food Quality and Hygiene</h3>
            <p>
              Restaurants and food businesses are responsible for maintaining
              appropriate hygiene, food quality and food safety standards.
            </p>
            <p>
              They must comply with applicable food safety laws, including
              relevant FSSAI requirements and other applicable regulations.
            </p>
            <p>
              LocalKokani does not independently prepare, inspect or guarantee
              the quality or safety of food supplied by independent businesses.
            </p>
            <p>
              Customers should contact the relevant restaurant directly regarding
              food quality, hygiene, ingredients, allergens or other
              food-related concerns.
            </p>

            <h3>9.2 Menu, Pricing and Availability</h3>
            <p>
              Restaurant owners are responsible for ensuring that their menus,
              prices, food descriptions, operating hours and availability are
              accurate and current.
            </p>
            <p>
              Prices and menu items may change without prior notice. Customers
              should confirm important details with the restaurant before placing
              an order.
            </p>
            <p>
              Any additional charges, including delivery, packaging or service
              charges, should be disclosed before order confirmation.
            </p>

            <h3>9.3 Food Orders and Fulfilment</h3>
            <p>
              Restaurants and food businesses are responsible for preparing and
              fulfilling confirmed food orders as agreed with customers.
            </p>
            <p>
              They are responsible for correct items, quantities, preparation,
              packaging and delivery or takeaway arrangements, as applicable.
            </p>
            <p>
              LocalKokani is not ordinarily responsible for delays, incorrect
              orders, missing items or food preparation issues caused by
              independent businesses.
            </p>
            <p>
              Customers should report order-related problems directly to the
              responsible restaurant or food business.
            </p>

            <h3>9.4 Food Complaints and Refunds</h3>
            <p>
              If food is unsatisfactory, incorrect, incomplete, damaged or not
              delivered as agreed, the customer should contact the relevant food
              business directly.
            </p>
            <p>
              The restaurant or food business is responsible for addressing
              complaints, providing replacements, correcting orders or issuing
              refunds where due under the agreed terms and applicable law.
            </p>
            <p>
              LocalKokani may assist with communication where appropriate, but
              does not guarantee a particular complaint outcome.
            </p>
            <p>
              Nothing in these Terms excludes any consumer right or legal remedy
              that cannot lawfully be excluded.
            </p>

            <h2>10. Travel Safety, Accidents and Emergencies</h2>
            <p>
              Travel involves risks that may include road accidents, injuries,
              illness, severe weather, flooding, landslides, transport
              disruptions and other unforeseen circumstances.
            </p>
            <p>
              Travelers are responsible for making informed decisions, following
              official safety advisories, taking reasonable precautions and
              arranging appropriate insurance where suitable.
            </p>
            <p>
              LocalKokani is a discovery and enquiry facilitation platform. It
              does not control road conditions, weather, independent transport
              providers, accommodation operations or every aspect of a
              traveler&apos;s journey.
            </p>
            <p>
              To the extent permitted by applicable law, LocalKokani is not
              responsible for accidents, injuries, losses or incidents arising
              from travel activities or services independently provided by third
              parties.
            </p>
            <p>
              This provision does not exclude liability that cannot lawfully be
              excluded, including responsibility arising from
              LocalKokani&apos;s own legally actionable conduct.
            </p>
            <p>
              In an emergency, contact the appropriate local emergency services
              and follow official safety instructions.
            </p>

            <h2>11. Verification and Business Credentials</h2>
            <p>
              LocalKokani may review information or documents submitted by a
              business to assess its identity and listing details.
            </p>
            <p>
              Any verification or Premium badge is limited to the meaning
              expressly stated in the applicable policy.
            </p>
            <p>
              The Premium badge indicates an active paid subscription. It does
              not certify the legality, safety, quality or reliability of the
              business.
            </p>
            <p>
              LocalKokani does not represent that every listed business has been
              independently audited or certified by a government authority.
            </p>
            <p>
              Partners remain responsible for maintaining all licences,
              registrations and permissions required for their operations,
              including applicable food business registrations or licences.
            </p>

            <h2>12. Partner Responsibilities</h2>
            <p>All business partners must:</p>
            <ul>
              <li>Provide accurate listing details and genuine photographs.</li>
              <li>
                Keep prices, menus, amenities, contact details and availability
                current.
              </li>
              <li>Respond to customer enquiries professionally.</li>
              <li>
                Disclose booking conditions and additional charges before
                confirmation.
              </li>
              <li>
                Maintain appropriate premises, hygiene and safety standards.
              </li>
              <li>Obtain and maintain required licences and registrations.</li>
              <li>
                Comply with applicable consumer, tax, privacy, food safety and
                other laws.
              </li>
              <li>
                Handle customer complaints, cancellations and refunds fairly.
              </li>
              <li>Avoid fraudulent, misleading or unlawful activities.</li>
              <li>
                Pay applicable commissions according to the agreed payment
                arrangement.
              </li>
            </ul>
            <p>
              Accommodation Partners must honor confirmed bookings and follow
              the agreed booking, payment, commission, cancellation and refund
              arrangements.
            </p>
            <p>
              Restaurant and food business Partners are responsible for their
              menus, food preparation, hygiene, food safety, pricing, order
              fulfilment and customer remedies where due.
            </p>
            <p>
              Partners must not misrepresent their relationship with LocalKokani
              or make unsupported claims about badges, certifications or
              endorsements.
            </p>
            <p>
              Further details are set out in the{" "}
              <a href="/terms-for-partners">Terms for Partners</a> and{" "}
              <a href="/partner-agreement">Partner Agreement</a>.
            </p>

            <h2>13. Reviews, Complaints and Misuse</h2>
            <p>
              Users must not submit fake reviews, manipulate ratings, impersonate
              others, harass business owners or publish unlawful content.
            </p>
            <p>
              LocalKokani may review complaints, request supporting information,
              moderate content or remove listings where reasonably necessary.
            </p>
            <p>
              Where appropriate, LocalKokani may assist communication between
              customers and businesses. However, LocalKokani does not guarantee a
              particular dispute outcome and is not automatically responsible
              for independently provided services.
            </p>
            <p>
              Users should provide accurate information when reporting a
              problem.
            </p>

            <h2>14. Privacy and Personal Information</h2>
            <p>
              LocalKokani may collect information such as contact details,
              enquiry information, business registration details and other
              information described in the Privacy Policy.
            </p>
            <p>
              Where enquiry details are shared with a business, the recipient
              must use them for legitimate purposes connected with the enquiry
              or service and handle them in accordance with applicable law.
            </p>
            <p>
              Users should avoid sharing unnecessary sensitive information
              through public listings, enquiries or messages.
            </p>
            <p>
              For details about information collection, use, sharing, retention
              and applicable privacy rights, please read our{" "}
              <a href="/privacy-policy">Privacy Policy</a> and{" "}
              <a href="/cookie-policy">Cookie Policy</a>.
            </p>

            <h2>15. Third-Party Services and Links</h2>
            <p>
              The website may contain links to or integrations with third-party
              services, including WhatsApp, Google Maps, social media platforms
              and other external websites.
            </p>
            <p>
              These services are governed by their own terms and privacy
              policies.
            </p>
            <p>
              LocalKokani does not control the operation, availability or
              content of external services and is not responsible for their
              independent practices, subject to applicable law.
            </p>
            <p>
              Users should review the terms of any third-party service before
              using it.
            </p>

            <h2>16. Intellectual Property</h2>
            <p>
              The LocalKokani name, logo, original website content, design and
              other platform materials are owned by or licensed to LocalKokani,
              unless otherwise stated.
            </p>
            <p>
              You may not reproduce, distribute, modify or commercially exploit
              LocalKokani materials without authorization, except where
              permitted by law.
            </p>
            <p>
              Business partners retain ownership of content they own and submit,
              while granting LocalKokani the permissions reasonably necessary to
              display and promote their listings according to the Partner
              Agreement.
            </p>
            <p>
              Users must respect third-party intellectual property rights.
            </p>

            <h2>17. Website Availability and Changes</h2>
            <p>
              We aim to maintain a useful and accessible platform but do not
              guarantee uninterrupted availability, error-free operation or the
              permanent availability of any listing or feature.
            </p>
            <p>
              We may update, suspend, modify or discontinue website features
              where reasonably necessary for maintenance, security, operational
              improvements or legal compliance.
            </p>
            <p>
              Where a change materially affects an existing paid partner
              arrangement, we will provide appropriate notice and any remedy or
              agreement required by applicable law.
            </p>

            <h2>18. Limitation of Liability</h2>
            <p>
              To the extent permitted by applicable law, LocalKokani does not
              guarantee the accuracy of every third-party listing, the
              availability of independent businesses, the quality of
              independently supplied services or a particular booking or order
              outcome.
            </p>
            <p>
              LocalKokani is not ordinarily responsible for disputes arising
              directly between a customer and an independent property owner,
              restaurant or other service provider, except to the extent
              responsibility arises under applicable law or from
              LocalKokani&apos;s own conduct.
            </p>
            <p>
              Nothing in these Terms excludes or limits any liability, statutory
              consumer right or remedy that cannot lawfully be excluded or
              limited.
            </p>

            <h2>19. Suspension and Termination</h2>
            <p>
              LocalKokani may restrict access, remove content or suspend a
              listing where reasonably necessary due to false information,
              policy violations, fraud, security concerns, legal requirements or
              credible risks to users.
            </p>
            <p>
              Where reasonably practicable, we may provide notice and an
              opportunity to correct a remediable issue.
            </p>
            <p>
              Partners who wish to discontinue their listing or Premium
              subscription may contact LocalKokani. Subscription fees remain
              subject to the applicable non-refund terms and any rights provided
              by law.
            </p>
            <p>
              Termination does not automatically extinguish outstanding payment
              obligations or other rights and obligations that accrued before
              termination.
            </p>

            <h2>20. Changes to These Terms</h2>
            <p>
              We may update these Terms to reflect changes in our services,
              partner plans, operations or applicable law.
            </p>
            <p>
              The latest version will be published on this page with an updated
              effective date. Users and partners should review the Terms
              periodically.
            </p>
            <p>
              Where a material change affects an existing transaction or
              contractual arrangement, the change will be handled in accordance
              with the applicable agreement and law.
            </p>
            <p>
              These revised commission terms apply to transactions confirmed on
              or after 2 November 2026. They do not retrospectively change the
              agreed terms of transactions confirmed before that date.
            </p>
            <p>
              Existing Partners will be informed of material changes to their
              commercial terms, and their acceptance will be obtained where
              required.
            </p>

            <h2>21. Governing Law and Dispute Resolution</h2>
            <p>These Terms are governed by the laws of India.</p>
            <p>
              The parties should first attempt to resolve disputes through
              good-faith communication. Where a dispute cannot be resolved
              informally, it may be referred to a competent court or forum under
              applicable law in Maharashtra, India, subject to mandatory
              jurisdiction and consumer protection requirements.
            </p>
            <p>
              Nothing in these Terms prevents a user from exercising a statutory
              right or approaching a competent authority or forum where permitted
              by law.
            </p>

            <h2>22. Contact Us</h2>
            <p>
              For questions, listing concerns, booking enquiries, food order
              concerns or other matters relating to these Terms, please contact:
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
                  localkokani@gmail.com
                </a>
              </li>
            
              <li>
                <strong>Service Area:</strong> Konkan, Maharashtra, India
              </li>
            </ul>

            <hr />

            <p>
              By using LocalKokani, you acknowledge that you have read these
              Terms &amp; Conditions and agree to the provisions applicable to
              your use of the platform, subject to applicable law.
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