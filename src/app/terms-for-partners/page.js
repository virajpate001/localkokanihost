// src/app/terms-for-partners/page.js
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Terms for Partners | Local Kokani",
  description:
    "Terms governing the registration, listing, promotion, and use of Local Kokani by accommodation providers, restaurants, and other partner businesses.",
  path: "/terms-for-partners",
  keywords: [
    "terms for partners",
    "partner terms",
    "business listing terms",
    "partner plans",
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
              These Terms for Partners govern the registration, listing,
              promotion and use of LocalKokani by accommodation providers,
              restaurant owners and other eligible businesses.
            </p>
            <p>
              These Terms apply to hotels, resorts, homestays, villas, cottages,
              guest houses, lodges, farm stays, restaurants, Khanavals, dhabas,
              eateries and other eligible local businesses.
            </p>
            <p>
              By registering a business, submitting a listing, purchasing a
              Premium Plan or using partner services, you agree to these Terms,
              the <a href="/partner-agreement">Partner Agreement</a> and other
              applicable policies published on LocalKokani.
            </p>

            <h2>2. Eligibility and Registration</h2>
            <p>To register as a partner, you must:</p>
            <ul>
              <li>
                Be at least 18 years old and legally capable of entering into an
                agreement.
              </li>
              <li>Own the business or be authorized to represent it.</li>
              <li>
                Provide accurate, complete and current registration details.
              </li>
              <li>
                Maintain the licences, registrations and permissions required
                for your business.
              </li>
              <li>Provide supporting documents when reasonably requested.</li>
              <li>
                Accept the applicable plan conditions and commission terms.
              </li>
            </ul>
            <p>
              If you register on behalf of a company, partnership or another
              business, you confirm that you have authority to bind that
              business to these Terms.
            </p>
            <p>
              You are responsible for keeping your account credentials
              confidential and for activity conducted through your account.
            </p>

            <h2>3. Partner Plans</h2>
            <p>
              LocalKokani offers two partner plans: Basic Listing (Free) and
              Premium Plan (Paid).
            </p>

            <h3>3.1 Basic Listing (Free)</h3>
            <p>The Basic Listing plan includes:</p>
            <ul>
              <li>A standard listing page for your business.</li>
              <li>Basic visibility on LocalKokani.</li>
              <li>
                Customer enquiries routed through LocalKokani&apos;s WhatsApp.
              </li>
              <li>Booking coordination for applicable enquiries.</li>
              <li>
                Commission on confirmed bookings according to the commission
                terms accepted by you.
              </li>
            </ul>
            <p>
              For accommodation bookings coordinated through LocalKokani, the
              platform may collect an advance from the traveler, confirm the
              booking with you, transfer the advance after deducting the agreed
              commission, and share your contact number with the traveler.
            </p>
            <p>
              The applicable commission rate, calculation method, qualifying
              bookings and payment terms must be disclosed and accepted by you
              in writing.
            </p>
            <p>
              A free listing does not guarantee enquiries, bookings, customers or
              revenue.
            </p>

            <h3>3.2 Premium Plan (Paid)</h3>
            <p>The Premium Plan may include:</p>
            <ul>
              <li>A Premium badge.</li>
              <li>
                Custom badges, such as &quot;Top Rated,&quot; where awarded under
                applicable criteria.
              </li>
              <li>
                Direct WhatsApp enquiries to your registered business number.
              </li>
              <li>Google Maps location on your listing.</li>
              <li>Priority support.</li>
            </ul>
            <p>
              The subscription price, validity period and included features will
              be disclosed before purchase.
            </p>
            <p>
              Premium placement or promotional features do not guarantee a
              particular search ranking, number of enquiries, bookings or sales.
            </p>

            <h3>3.3 Premium Badge</h3>
            <p>
              The Premium badge indicates that your business has an active paid
              subscription with LocalKokani.
            </p>
            <p>
              It is not a government certification, tourism licence, guarantee of
              service quality or food safety certification. It does not imply
              government endorsement or FSSAI approval.
            </p>
            <p>
              Custom badges, such as &quot;Top Rated,&quot; may be provided
              according to LocalKokani&apos;s applicable criteria. A badge must
              not be presented as a certification or endorsement beyond its
              stated meaning.
            </p>
            <p>
              The Premium badge and related features may be deactivated when the
              subscription expires, is cancelled or is suspended in accordance
              with these Terms.
            </p>

            <h2>4. Premium Subscription Payments and Cancellation</h2>
            <p>
              The Premium Plan fee must be paid through the payment method or
              process specified by LocalKokani.
            </p>
            <p>
              Before purchasing, you should review the price, duration, features
              and renewal conditions.
            </p>
            <p>
              <strong>
                The Premium Plan subscription fee is non-refundable after
                activation
              </strong>
              , including where you choose to discontinue the subscription
              before its expiry date, except where a refund is required by
              applicable law or expressly agreed in writing by LocalKokani.
            </p>
            <p>
              To request cancellation or discontinuation, contact{" "}
              <a href="mailto:localkokani001@gmail.com">
                localkokani001@gmail.com
              </a>{" "}
              and provide your business name and subscription details.
            </p>
            <p>
              Cancellation may stop a future renewal or end the plan according
              to the applicable terms. It does not automatically entitle you to a
              refund for an activated subscription.
            </p>
            <p>
              When your subscription expires or is cancelled, the Premium badge
              and Premium features may be deactivated. Your business may remain
              listed under the Basic Listing plan if it continues to satisfy the
              applicable listing requirements.
            </p>
            <p>
              Any automatic renewal arrangement must be clearly disclosed and
              authorized.
            </p>

            <h2>5. Business Listing Information</h2>
            <p>
              You are responsible for ensuring that your listing is accurate,
              current and not misleading.
            </p>
            <p>Depending on your business, this may include:</p>
            <ul>
              <li>Business name, address and contact information.</li>
              <li>
                Property type, room categories, capacity and amenities.
              </li>
              <li>
                Restaurant details, cuisine, menu, prices and operating hours.
              </li>
              <li>
                Photographs of the property, premises, facilities, food or
                services.
              </li>
              <li>Availability and reservation requirements.</li>
              <li>Taxes, additional charges and relevant restrictions.</li>
              <li>
                Applicable licences, registrations and supporting documents.
              </li>
            </ul>
            <p>
              You must promptly notify LocalKokani of material changes to
              ownership, contact details, prices, amenities, menus, availability,
              licences or business operations.
            </p>
            <p>
              LocalKokani may request corrections, updated photographs or
              supporting documents and may hide or remove a listing when
              reasonably necessary to address inaccuracies, policy breaches,
              legal requirements or safety concerns.
            </p>

            <h2>6. Booking Enquiries and Customer Communication</h2>

            <h3>6.1 Basic Listing</h3>
            <p>
              Under the Basic Listing plan, customer enquiries are routed through
              LocalKokani&apos;s WhatsApp.
            </p>
            <p>For accommodation bookings, the general process is:</p>
            <ol>
              <li>A traveler submits a booking enquiry.</li>
              <li>
                LocalKokani coordinates with you to check availability and
                booking details.
              </li>
              <li>The booking is confirmed according to the agreed process.</li>
              <li>LocalKokani may collect an advance from the traveler.</li>
              <li>
                LocalKokani transfers the collected advance to you after
                deducting the agreed commission.
              </li>
              <li>
                LocalKokani shares your contact number with the traveler for
                further communication.
              </li>
            </ol>
            <p>
              You must provide accurate availability, prices and booking
              conditions before confirmation.
            </p>
            <p>
              The process for restaurant reservations or other transactions
              involving an advance will be communicated separately where
              applicable.
            </p>

            <h3>6.2 Premium Plan</h3>
            <p>
              Under the Premium Plan, travelers can contact you directly through
              your registered WhatsApp number.
            </p>
            <p>
              You are responsible for responding to enquiries, confirming
              availability, communicating prices and booking terms, collecting
              payments and issuing confirmations.
            </p>
            <p>
              Unless a separate arrangement is expressly agreed, LocalKokani does
              not collect or process payments for bookings arranged directly
              between you and the traveler.
            </p>

            <h2>7. Commission and Confirmed Bookings</h2>
            <p>
              Commission applies to qualifying confirmed bookings under the
              Basic Listing plan according to the written commission terms
              accepted by you.
            </p>
            <p>The commission terms must specify:</p>
            <ul>
              <li>The commission rate or fixed amount.</li>
              <li>Which bookings or referrals qualify.</li>
              <li>How a transaction is attributed to LocalKokani.</li>
              <li>The amount on which commission is calculated.</li>
              <li>The payment or settlement process.</li>
              <li>
                The treatment of cancellations, no-shows and refunds.
              </li>
            </ul>
            <p>
              For accommodation bookings, the agreed terms should clarify whether
              commission is calculated on the total booking price, the amount
              actually received or another specified basis.
            </p>
            <p>
              For restaurants and other food businesses, any commission
              arrangement must separately define qualifying referrals and the
              method used to identify them. A commission should not be assumed to
              apply to every customer who views a listing.
            </p>
            <p>
              No new or increased commission rate will apply retrospectively
              without your agreement, except where permitted or required by law.
            </p>

            <h2>8. Cancellation and Refund Responsibilities</h2>
            <p>
              You must clearly disclose your cancellation rules in your business
              listing&apos;s About section and communicate any relevant
              conditions before confirming a booking or reservation.
            </p>
            <p>
              Your cancellation rules may include free cancellation deadlines,
              advance payment requirements, cancellation charges, no-show
              conditions and refund timelines.
            </p>

            <h3>8.1 Basic Listing Accommodation Bookings</h3>
            <p>
              Where LocalKokani collects an advance and transfers it to you after
              deducting the agreed commission, you are responsible for handling
              any traveler refund due after the transfer, in accordance with the
              applicable booking conditions and law.
            </p>
            <p>
              If a booking is cancelled, LocalKokani will return its deducted
              commission to you as applicable under the agreed commission
              arrangement.
            </p>
            <p>
              The commission reversal does not itself determine whether the
              traveler is entitled to a full or partial refund. You must assess
              the traveler&apos;s refund according to the disclosed cancellation
              terms and applicable law.
            </p>
            <p>
              If LocalKokani has not transferred the advance, the cancellation
              and any refund due will be handled according to the applicable
              booking terms and payment arrangement.
            </p>

            <h3>8.2 Premium Plan Bookings</h3>
            <p>
              For bookings arranged directly between you and a traveler, you are
              responsible for:
            </p>
            <ul>
              <li>Confirming the booking.</li>
              <li>Receiving payments and issuing appropriate receipts.</li>
              <li>Communicating cancellation conditions.</li>
              <li>Handling cancellation requests.</li>
              <li>
                Processing any refund due under the booking terms and applicable
                law.
              </li>
            </ul>
            <p>
              LocalKokani does not ordinarily manage cancellations or refunds for
              direct bookings that it did not handle.
            </p>

            <h3>8.3 Restaurant Reservations and Food Orders</h3>
            <p>
              You are responsible for handling reservations, food orders,
              complaints, cancellations and refunds for services you provide,
              subject to the disclosed terms and applicable law.
            </p>
            <p>
              If food is incorrect, incomplete, unsatisfactory or not delivered
              as agreed, you must assess the complaint and provide any
              replacement, correction, refund or other remedy required by law.
            </p>
            <p>
              LocalKokani may assist with communication where appropriate but
              does not guarantee a particular dispute outcome.
            </p>

            <h2>9. Responsibilities of Accommodation Partners</h2>
            <p>Accommodation partners must ensure that:</p>
            <ul>
              <li>
                The property is lawfully operated and available for the
                advertised use.
              </li>
              <li>
                Room descriptions, photographs, capacity and amenities are
                accurate.
              </li>
              <li>
                Rates, taxes, deposits and additional charges are clearly
                disclosed.
              </li>
              <li>Availability is kept current as reasonably practicable.</li>
              <li>
                Check-in, check-out and guest requirements are communicated.
              </li>
              <li>
                Required safety, hygiene, fire and other regulatory standards
                are met.
              </li>
              <li>
                Confirmed bookings, cancellations and refunds are handled fairly.
              </li>
            </ul>
            <p>
              You must not list accommodation you do not own, manage or have
              authority to offer.
            </p>

            <h2>10. Responsibilities of Restaurant and Food-Business Partners</h2>
            <p>
              Restaurant, Khanaval, dhaba and other food-business partners must
              ensure that:
            </p>
            <ul>
              <li>
                Menu items, prices, operating hours and services are accurately
                described.
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
                Additional charges, minimum orders and delivery fees are
                disclosed before the customer commits.
              </li>
              <li>Orders, reservations, complaints and refunds are handled fairly.</li>
              <li>Required invoices, receipts and tax records are maintained.</li>
            </ul>
            <p>
              You remain responsible for the preparation, quality, safety and
              fulfilment of the food or services you supply.
            </p>

            <h2>11. Licences and Legal Compliance</h2>
            <p>
              You are responsible for obtaining and maintaining all registrations,
              licences, permissions and approvals required for your business and
              location.
            </p>
            <p>
              These may include applicable business registrations, local
              permissions, accommodation-related requirements, food business
              registrations or licences, tax registrations and safety
              requirements.
            </p>
            <p>
              You must provide genuine supporting documents when reasonably
              requested.
            </p>
            <p>
              LocalKokani&apos;s listing or Premium badge does not replace any
              legal licence, registration or certification you are required to
              hold.
            </p>

            <h2>12. Customer Information and Privacy</h2>
            <p>
              Where LocalKokani shares a traveler&apos;s enquiry details with you,
              you must use that information only for legitimate purposes
              connected with the enquiry, booking or service.
            </p>
            <p>
              You must not sell, publish, misuse or share customer information
              with unauthorized third parties.
            </p>
            <p>
              You must protect customer information, restrict access to authorized
              personnel and comply with applicable privacy and data protection
              laws.
            </p>
            <p>
              You should review LocalKokani&apos;s{" "}
              <a href="/privacy-policy">Privacy Policy</a> for information about
              how the platform handles personal information.
            </p>

            <h2>13. Photographs, Business Content and Promotional Rights</h2>
            <p>
              You retain ownership of content you own and submit to LocalKokani.
            </p>
            <p>
              By submitting photographs, descriptions, menus, logos and other
              materials, you grant LocalKokani a non-exclusive, royalty-free
              permission to use, reproduce, format, display and distribute those
              materials for hosting, maintaining and promoting your listing and
              the LocalKokani platform.
            </p>
            <p>
              This permission covers the website, associated social media pages
              and other LocalKokani promotional channels for the duration
              reasonably required for these purposes, subject to applicable law
              and any agreed restrictions.
            </p>
            <p>
              You confirm that you have the rights and permissions necessary to
              submit the content.
            </p>
            <p>
              LocalKokani may remove material that infringes third-party rights,
              violates these Terms or breaches applicable law.
            </p>

            <h2>14. Prohibited Activities</h2>
            <p>You must not:</p>
            <ul>
              <li>Provide false business, ownership or licence information.</li>
              <li>Advertise services you are not authorized to provide.</li>
              <li>
                Mislead customers about prices, availability, amenities, menus or
                services.
              </li>
              <li>Create fake reviews or manipulate ratings.</li>
              <li>Misuse customer information.</li>
              <li>
                Misrepresent the meaning of the Premium badge or custom badges.
              </li>
              <li>Use LocalKokani for fraud or unlawful activities.</li>
              <li>Infringe third-party intellectual property rights.</li>
              <li>
                Conceal qualifying bookings to avoid a commission that you have
                expressly agreed to pay.
              </li>
            </ul>

            <h2>15. Listing Suspension and Termination</h2>
            <p>
              LocalKokani may suspend or remove a listing, deactivate a Premium
              badge, restrict partner access or terminate a partner relationship
              where reasonably necessary because of:
            </p>
            <ul>
              <li>
                A material breach of these Terms or the Partner Agreement.
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
              You may request removal of your listing or discontinuation of your
              plan by contacting LocalKokani.
            </p>
            <p>
              Termination does not automatically cancel outstanding fees,
              properly agreed commissions or other obligations that accrued
              before termination. Any refund of a subscription fee is governed by
              the applicable plan terms and law.
            </p>

            <h2>16. Limitation of Responsibility</h2>
            <p>
              LocalKokani helps travelers discover businesses and facilitates
              enquiries. Unless expressly agreed otherwise, it does not operate
              your business or control your day-to-day services.
            </p>
            <p>
              You remain responsible for your listing, business operations, staff,
              premises, services, customer transactions and legal compliance.
            </p>
            <p>
              To the extent permitted by law, LocalKokani does not guarantee
              uninterrupted website availability, a particular search ranking, a
              minimum number of enquiries or commercial success.
            </p>
            <p>
              Nothing in these Terms excludes or limits liability that cannot
              lawfully be excluded or limited.
            </p>

            <h2>17. Changes to These Terms</h2>
            <p>
              LocalKokani may update these Terms to reflect changes in its
              services, partner plans, operational requirements or applicable
              law.
            </p>
            <p>
              The updated version will be published on this page with a revised
              effective date. Where a material change affects an existing
              commercial arrangement, appropriate notice and any agreement
              required by law will be provided.
            </p>
            <p>
              Changes to commission rates or other material commercial terms
              require your agreement before they apply, except where permitted or
              required by law.
            </p>

            <h2>18. Governing Law and Dispute Resolution</h2>
            <p>These Terms are governed by the laws of India.</p>
            <p>
              The parties should first attempt to resolve disputes through
              good-faith discussion. If a dispute cannot be resolved informally,
              it may be referred to a competent court or forum under applicable
              law in Maharashtra, India, subject to mandatory legal requirements.
            </p>
            <p>
              Nothing in this clause removes any right to approach a competent
              authority or forum where applicable law provides that right.
            </p>

            <h2>19. Contact Us</h2>
            <p>
              For partner registration, listing updates, plan details,
              commissions, cancellations or questions about these Terms, contact:
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
              By registering or maintaining a business listing on LocalKokani,
              you acknowledge that you have read and agree to these Terms for
              Partners and the applicable plan and commission conditions you have
              accepted, subject to applicable law.
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