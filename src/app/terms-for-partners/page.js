// src/app/terms-for-partners/page.js
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Terms for Partners | Local Kokani",
  description:
    "Terms governing the relationship between Local Kokani and businesses that register, list, or purchase partner plans on the platform.",
  path: "/terms-for-partners",
  keywords: [
    "terms for partners",
    "partner terms",
    "business listing terms",
    "partner agreement",
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
            Effective Date: 12 October 2026
          </p>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-a:text-secondary">
            <h2>1. Introduction</h2>
            <p>
              Welcome to LocalKokani, a platform that helps travelers discover
              accommodation, restaurants and local food experiences across the
              Konkan region of Maharashtra, India.
            </p>
            <p>
              These Terms for Partners (&quot;Terms&quot;) govern the
              relationship between LocalKokani (&quot;we,&quot; &quot;us&quot;
              or &quot;our&quot;) and businesses or individuals who register,
              submit a listing, purchase a partner plan or otherwise use our
              platform to promote their services.
            </p>
            <p>
              These Terms apply to accommodation providers, including hotels,
              resorts, homestays, villas, cottages, guest houses, lodges and
              farm stays, as well as restaurants, Khanavals, dhabas, eateries
              and other food businesses.
            </p>
            <p>
              By registering as a partner or submitting a business listing, you
              agree to these Terms, our Privacy Policy, Terms &amp; Conditions,
              Disclaimer, Verification Policy and other applicable policies
              published on our website.
            </p>
            <p>
              If you do not agree to these Terms, please do not register or use
              LocalKokani&apos;s partner services.
            </p>

            <h2>2. Definitions</h2>
            <ul>
              <li>
                <strong>LocalKokani:</strong> The online platform operated to
                help travelers discover local businesses and submit enquiries.
              </li>
              <li>
                <strong>Partner:</strong> A property owner, restaurant owner,
                business operator or an authorized representative who registers
                or lists a business on LocalKokani.
              </li>
              <li>
                <strong>Listing:</strong> The business profile, photographs,
                contact information, amenities, menus, prices, services and
                other information displayed on the platform.
              </li>
              <li>
                <strong>Enquiry:</strong> A request from a traveler or customer
                regarding accommodation, reservations, food services,
                availability, pricing or other business offerings.
              </li>
              <li>
                <strong>Free Listing Plan:</strong> A listing arrangement
                available without an annual listing fee, subject to the
                applicable commission or referral terms agreed with LocalKokani.
              </li>
              <li>
                <strong>Direct Connect Plan:</strong> A paid annual plan
                intended to provide enhanced listing features and direct
                customer contact options, subject to the plan details displayed
                at purchase.
              </li>
              <li>
                <strong>Verified Premium Plan:</strong> A paid annual plan that
                may include enhanced visibility, a verified badge and other
                features described in the applicable plan.
              </li>
              <li>
                <strong>Commission:</strong> A fee payable to LocalKokani for
                eligible bookings, sales or referrals where the commission
                arrangement has been expressly agreed.
              </li>
              <li>
                <strong>Customer:</strong> A traveler or other individual who
                views a listing or contacts a partner through or as a result of
                LocalKokani.
              </li>
            </ul>

            <h2>3. Eligibility and Partner Registration</h2>
            <p>To register as a partner, you must:</p>
            <ol>
              <li>
                Be at least 18 years old and legally capable of entering into an
                agreement.
              </li>
              <li>
                Own the listed business or have appropriate authority to
                represent it.
              </li>
              <li>
                Provide accurate, complete and current registration and business
                information.
              </li>
              <li>
                Have the permits, registrations and licences required for your
                business and location.
              </li>
              <li>
                Provide supporting documents when reasonably requested for
                verification or compliance.
              </li>
              <li>Accept the applicable partner terms and plan conditions.</li>
            </ol>
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials and for activity conducted through your
              account.
            </p>
            <p>
              If you register on behalf of a company, partnership or another
              business, you confirm that you are authorized to bind that
              business to these Terms.
            </p>

            <h2>4. Business Listings and Information</h2>
            <p>
              Partners must ensure that all information submitted to LocalKokani
              is truthful, accurate, current and not misleading.
            </p>
            <p>Depending on your business, this may include:</p>
            <ul>
              <li>Business or property name and full address.</li>
              <li>Owner or authorized representative&apos;s contact details.</li>
              <li>
                Accommodation types, room categories, occupancy limits and
                amenities.
              </li>
              <li>
                Restaurant details, cuisine, menu, operating hours and available
                services.
              </li>
              <li>
                Current prices, taxes, additional charges and applicable
                conditions.
              </li>
              <li>
                Actual photographs of the property, rooms, facilities, premises,
                food or services.
              </li>
              <li>
                Availability information, reservation requirements and
                cancellation conditions.
              </li>
              <li>
                Relevant licences, registrations and other supporting documents.
              </li>
            </ul>
            <p>
              You must promptly notify LocalKokani of significant changes,
              including changes to ownership, address, contact information,
              prices, amenities, menu, operating hours, licences or business
              operations.
            </p>
            <p>
              LocalKokani may request corrections, supporting documents or
              updated photographs. We may edit formatting, remove inappropriate
              material or temporarily hide a listing where reasonably necessary
              to protect users, comply with applicable law or maintain platform
              quality.
            </p>
            <p>
              A listing does not constitute a guarantee of bookings, sales,
              enquiries or revenue.
            </p>

            <h2>5. Partner Plans and Fees</h2>
            <p>
              LocalKokani may offer free and paid listing plans. The available
              features, prices, duration and conditions will be described on the
              website or in the applicable plan confirmation.
            </p>

            <h3>5.1 Free Listing Plan</h3>
            <p>
              The Free Listing Plan may allow your business to appear on
              LocalKokani without an annual listing fee.
            </p>
            <p>
              Under this plan, enquiries may be received and coordinated by
              LocalKokani before being referred to the partner. Where
              applicable, a commission may be payable for eligible bookings or
              referrals.
            </p>
            <p>
              <strong>
                A commission is payable only where the applicable commission
                rate or calculation method, attribution rules and payment terms
                have been disclosed to and accepted by the partner in writing.
              </strong>{" "}
              The agreement should specify which transactions qualify, how
              cancellations and refunds affect the commission, and when payment
              is due.
            </p>

            <h3>5.2 Direct Connect Plan</h3>
            <p>The Direct Connect Plan may include features such as:</p>
            <ul>
              <li>Direct customer contact through WhatsApp or telephone.</li>
              <li>
                Enhanced business listing information and photographs.
              </li>
              <li>
                Additional visibility or promotional features described in the
                plan.
              </li>
              <li>Direct handling of enquiries by the partner.</li>
            </ul>
            <p>
              The annual fee, duration and included features will be
              communicated before purchase.
            </p>
            <p>
              Unless otherwise expressly agreed in writing, the Direct Connect
              Plan does not carry a commission on enquiries and transactions
              handled directly by the partner under the plan. Any separate
              referral or commission arrangement must be disclosed and agreed in
              advance.
            </p>

            <h3>5.3 Verified Premium Plan</h3>
            <p>The Verified Premium Plan may include features such as:</p>
            <ul>
              <li>
                A verified badge following the applicable verification process.
              </li>
              <li>Enhanced listing presentation.</li>
              <li>
                Featured placement or increased visibility, subject to the plan
                conditions.
              </li>
              <li>Direct customer contact options.</li>
              <li>Other promotional features stated in the plan description.</li>
            </ul>
            <p>
              A paid plan does not guarantee a specific search ranking, number
              of views, enquiries, reservations, bookings or sales.
            </p>
            <p>
              The meaning and limitations of the verified badge are explained in
              our Verification Policy.
            </p>

            <h3>5.4 Plan Payments, Renewal and Refunds</h3>
            <p>
              Plan fees must be paid through the payment method or process
              specified by LocalKokani.
            </p>
            <p>
              Before purchasing, partners should review the applicable plan
              price, validity period, included features and renewal conditions.
              Any automatic renewal arrangement must be clearly disclosed and
              authorized.
            </p>
            <p>
              Unless otherwise stated in the plan terms or required by applicable
              law, annual plan fees are non-refundable once the plan has been
              activated. This does not affect any rights or remedies available
              under applicable law.
            </p>
            <p>
              LocalKokani may revise plan prices or features for future purchases
              or renewals by providing appropriate notice. Changes will not
              retroactively alter fees or conditions already agreed for an
              active plan unless permitted by law or mutually agreed.
            </p>

            <h2>6. Enquiries, Bookings and Customer Transactions</h2>
            <p>
              LocalKokani helps customers discover businesses and connect with
              partners. The actual service is provided by the partner.
            </p>
            <p>
              Depending on the listing and plan, enquiries may be:
            </p>
            <ol>
              <li>
                Received by LocalKokani and forwarded to the partner.
              </li>
              <li>Coordinated by LocalKokani with the partner.</li>
              <li>
                Sent directly to the partner through a displayed telephone
                number, WhatsApp link or other contact method.
              </li>
            </ol>
            <p>
              Partners are responsible for responding promptly and
              professionally to enquiries, confirming availability and providing
              accurate information.
            </p>
            <p>
              An enquiry is not a confirmed booking or reservation unless the
              relevant business confirms it according to its stated process.
            </p>
            <p>
              Partners must clearly communicate booking or reservation
              conditions, including deposits, advance payments, check-in and
              check-out times, table reservation requirements, order minimums,
              taxes, extra charges and applicable cancellation rules.
            </p>
            <p>
              Unless a specific service is expressly offered by LocalKokani,
              LocalKokani does not itself provide accommodation, prepare or
              deliver food, confirm reservations on behalf of a business, or
              guarantee the performance of a partner.
            </p>

            <h2>7. Commission and Referral Terms</h2>
            <p>
              Commission arrangements may apply to eligible transactions arising
              from enquiries or referrals handled by LocalKokani.
            </p>
            <p>
              Before a commission arrangement becomes applicable, the partner
              and LocalKokani must agree in writing on:
            </p>
            <ul>
              <li>The applicable commission rate or amount.</li>
              <li>
                The transactions, bookings, orders or referrals to which it
                applies.
              </li>
              <li>How a transaction is attributed to LocalKokani.</li>
              <li>
                Whether commission is calculated on the total amount, the amount
                received or another specified basis.
              </li>
              <li>
                The treatment of cancellations, no-shows, refunds, partial
                refunds and disputed transactions.
              </li>
              <li>The payment deadline and method.</li>
              <li>
                Any applicable reporting or reconciliation procedure.
              </li>
            </ul>
            <p>
              For accommodation providers, an agreement may define a qualifying
              booking as one referred by LocalKokani and completed under the
              agreed attribution rules.
            </p>
            <p>
              For restaurants and other food businesses, a separate written
              arrangement must specify how a qualifying referral is identified.
              For example, it may use a recorded enquiry, a referral code or
              another mutually agreed method. A commission should not be assumed
              to apply merely because a customer has viewed a public listing.
            </p>
            <p>
              Partners must not knowingly misrepresent, conceal or falsify
              transactions that are subject to an agreed commission.
            </p>
            <p>
              If a commission amount is disputed, the parties should share
              relevant records and attempt to resolve the issue in good faith.
              No new or increased commission rate will apply retrospectively
              without the partner&apos;s agreement, except where required by
              law.
            </p>

            <h2>8. Partner Responsibilities</h2>
            <p>Each partner is responsible for:</p>
            <ol>
              <li>
                Providing the advertised accommodation, food or other services
                as described.
              </li>
              <li>
                Maintaining suitable premises, facilities, hygiene and safety
                standards relevant to the business.
              </li>
              <li>
                Providing truthful prices, availability, menu details and service
                conditions.
              </li>
              <li>Treating customers fairly and professionally.</li>
              <li>
                Handling customer complaints, service failures and agreed
                refunds promptly.
              </li>
              <li>
                Maintaining all registrations, permissions and licences required
                by law.
              </li>
              <li>
                Complying with consumer protection, tax, food safety, fire
                safety, labour, privacy and other applicable legal requirements.
              </li>
              <li>
                Avoiding misleading advertising, fake reviews, impersonation,
                discrimination prohibited by law and fraudulent conduct.
              </li>
              <li>
                Obtaining the necessary permissions for photographs, logos,
                menus and other submitted content.
              </li>
              <li>
                Informing LocalKokani of any material change that could affect
                the accuracy or legitimacy of the listing.
              </li>
            </ol>
            <p>
              LocalKokani may request reasonable evidence of compliance when
              needed to assess a listing or respond to a credible complaint.
            </p>

            <h2>9. Additional Requirements for Accommodation Partners</h2>
            <p>Accommodation partners must ensure that:</p>
            <ul>
              <li>
                The property is legally operated and available for the
                advertised use.
              </li>
              <li>
                Room descriptions, photographs, occupancy limits and amenities
                are accurate.
              </li>
              <li>
                Rates, taxes, deposits and additional charges are disclosed
                before a customer commits to a booking.
              </li>
              <li>
                Check-in, check-out, guest identification and house rules are
                communicated clearly.
              </li>
              <li>
                Reservation availability is updated as reasonably practicable.
              </li>
              <li>
                Any cancellation, refund or overbooking issue is handled
                according to the agreed booking terms and applicable law.
              </li>
              <li>
                Guest safety, hygiene, fire precautions and other applicable
                requirements are addressed.
              </li>
            </ul>
            <p>
              Partners must not advertise accommodation they do not own, manage
              or have authority to offer.
            </p>

            <h2>10. Additional Requirements for Restaurants and Food Businesses</h2>
            <p>
              Restaurant, Khanaval, dhaba and other food-business partners must
              ensure that:
            </p>
            <ul>
              <li>
                Menu items, prices, portions and advertised services are
                accurately described.
              </li>
              <li>
                Opening hours, location, contact information and reservation
                availability are kept current.
              </li>
              <li>
                Applicable food safety, hygiene, handling and storage
                requirements are followed.
              </li>
              <li>
                Required FSSAI registration or licensing and other applicable
                permissions are maintained.
              </li>
              <li>
                Allergen information and other legally required food disclosures
                are provided where applicable.
              </li>
              <li>
                Customers are informed of relevant delivery charges, minimum
                orders, service charges and other fees before they commit.
              </li>
              <li>
                Table reservations, takeaway orders, delivery arrangements,
                cancellations and refunds are handled fairly and in accordance
                with applicable law.
              </li>
            </ul>
            <p>
              Unless expressly stated otherwise, LocalKokani does not prepare,
              package, sell or deliver food. The food business remains
              responsible for the quality, safety and fulfilment of its
              offerings.
            </p>

            <h2>11. Verification and Verified Badge</h2>
            <p>
              LocalKokani may conduct checks to assess business identity, contact
              information, location, submitted documents or other listing
              details.
            </p>
            <p>
              A verified badge means only that the business has passed the checks
              described in our Verification Policy at the relevant time.
            </p>
            <p>
              <strong>
                Verification is not a government endorsement, licence,
                accreditation, safety certification or guarantee of service
                quality.
              </strong>{" "}
              For food businesses, a LocalKokani verified badge does not
              represent FSSAI approval or certify food safety compliance.
            </p>
            <p>
              Partners must provide genuine documents and cooperate with
              reasonable verification requests. A badge may be withheld, removed
              or suspended if information cannot be verified, documents expire,
              material discrepancies arise or a credible compliance concern is
              identified.
            </p>
            <p>
              Partners must not alter, copy or use the badge in a way that
              falsely implies government approval or a certification that
              LocalKokani has not granted.
            </p>

            <h2>12. Photographs, Content and Promotional Permission</h2>
            <p>
              Partners retain ownership of the content they own and submit to
              LocalKokani.
            </p>
            <p>
              By submitting photographs, descriptions, logos, menus and other
              materials, you grant LocalKokani a non-exclusive, royalty-free
              permission to use, reproduce, resize, format, display and
              distribute those materials for operating, promoting and improving
              your listing and the LocalKokani platform.
            </p>
            <p>
              This permission applies to the website, associated social media
              pages and other LocalKokani marketing channels, for the duration
              reasonably required for these purposes and subject to applicable
              law and any agreed restrictions.
            </p>
            <p>
              You confirm that you have the necessary rights and permissions to
              submit this content. You must not submit copyrighted, misleading,
              unlawful or unauthorized material.
            </p>
            <p>
              You may request correction or removal of content you are
              authorized to control. LocalKokani may remove content that violates
              these Terms or applicable law.
            </p>

            <h2>13. Customer Data and Privacy</h2>
            <p>
              Partners must handle customer contact information and other
              personal data lawfully and only for legitimate purposes connected
              with the enquiry, reservation, booking or service.
            </p>
            <p>Partners must not:</p>
            <ul>
              <li>Sell, publish or misuse customer contact information.</li>
              <li>
                Send unrelated marketing messages without the necessary
                permission.
              </li>
              <li>
                Share customer information with unauthorized third parties.
              </li>
              <li>
                Use customer data for fraud, harassment or unlawful
                discrimination.
              </li>
              <li>
                Retain personal information longer than reasonably necessary,
                subject to applicable legal requirements.
              </li>
            </ul>
            <p>
              Where LocalKokani shares enquiry information with a partner, the
              partner is responsible for protecting that information and
              complying with applicable data protection and privacy
              requirements.
            </p>
            <p>
              Partners should review LocalKokani&apos;s{" "}
              <a href="/privacy-policy">Privacy Policy</a> for information about
              how the platform handles personal data.
            </p>

            <h2>14. Reviews, Complaints and Disputes with Customers</h2>
            <p>
              Partners must not create, purchase or solicit fake reviews,
              manipulate ratings, threaten customers over reviews, or submit
              false complaints about competing businesses.
            </p>
            <p>
              LocalKokani may review reports about a listing and may request a
              partner&apos;s response or supporting evidence.
            </p>
            <p>
              Partners remain responsible for resolving disputes relating to
              their services, including accommodation quality, food quality,
              service delivery, payment, cancellations and refunds.
            </p>
            <p>
              LocalKokani may assist with communication where appropriate, but
              we do not guarantee a particular dispute outcome and are not
              required to act as an arbitrator between partners and customers.
            </p>

            <h2>15. Prohibited Activities</h2>
            <p>Partners must not:</p>
            <ul>
              <li>
                Provide false identity, ownership, licensing or business
                information.
              </li>
              <li>List a business without the required authority.</li>
              <li>Advertise illegal, prohibited or deceptive services.</li>
              <li>
                Misrepresent prices, facilities, menu items, availability or
                customer reviews.
              </li>
              <li>
                Use LocalKokani to defraud, harass or mislead customers.
              </li>
              <li>
                Attempt unauthorized access to the platform or interfere with
                its operation.
              </li>
              <li>
                Copy or misuse LocalKokani&apos;s branding, website content or
                intellectual property.
              </li>
              <li>
                Circumvent an expressly agreed commission arrangement by
                concealing a qualifying referral.
              </li>
              <li>
                Use customer data for purposes inconsistent with applicable law
                or the customer&apos;s permissions.
              </li>
              <li>
                Make false claims about LocalKokani verification or its
                relationship with public authorities.
              </li>
            </ul>

            <h2>16. Suspension, Removal and Termination</h2>
            <p>
              LocalKokani may temporarily suspend or remove a listing, withhold
              a badge, restrict partner access or terminate a partner
              relationship where reasonably necessary, including when:
            </p>
            <ul>
              <li>These Terms or another applicable policy are breached.</li>
              <li>
                Material listing information is false, misleading or outdated.
              </li>
              <li>
                Required documents are not provided or cannot be verified.
              </li>
              <li>
                There is credible evidence of fraud, unlawful activity, serious
                customer harm or repeated complaints.
              </li>
              <li>
                The partner misuses customer information or LocalKokani&apos;s
                platform.
              </li>
              <li>
                Continued publication may violate applicable law or create a
                material safety or security risk.
              </li>
            </ul>
            <p>
              Where reasonably practicable, LocalKokani will provide notice and
              an opportunity to correct a remediable issue. Immediate action may
              be taken when necessary to address serious risks or legal
              obligations.
            </p>
            <p>
              Partners may request removal of their listing or termination of
              their participation by contacting LocalKokani. Outstanding fees,
              properly agreed commissions and other accrued obligations remain
              subject to their applicable terms.
            </p>
            <p>
              Any refund of an unused paid-plan fee will be handled according to
              the plan terms and applicable law.
            </p>

            <h2>17. Intellectual Property</h2>
            <p>
              The LocalKokani name, logo, website design, original content and
              platform materials are owned by or licensed to LocalKokani, unless
              otherwise stated.
            </p>
            <p>
              Partners may use LocalKokani branding only with permission and in
              accordance with any provided brand guidelines. Listing a business
              on the platform does not transfer ownership of LocalKokani
              intellectual property to the partner.
            </p>
            <p>
              Partners must not reproduce, sell, distribute or commercially
              exploit LocalKokani materials without prior authorization, except
              where permitted by law.
            </p>

            <h2>18. Limitation of Responsibility</h2>
            <p>
              LocalKokani acts as a discovery, listing and enquiry facilitation
              platform. Unless expressly agreed otherwise, it does not operate
              the listed properties or food businesses and does not control
              their day-to-day services.
            </p>
            <p>
              To the extent permitted by applicable law, LocalKokani does not
              guarantee uninterrupted platform availability, a particular
              listing position, a minimum number of enquiries or the commercial
              success of a partner&apos;s listing.
            </p>
            <p>
              Partners are responsible for their business operations, services,
              staff, premises, customer transactions, legal compliance and
              representations made to customers.
            </p>
            <p>
              Nothing in these Terms excludes or limits liability that cannot
              lawfully be excluded or limited, including any non-waivable rights
              or remedies under applicable law.
            </p>

            <h2>19. Indemnity</h2>
            <p>
              To the extent permitted by applicable law, a partner may be
              responsible for reasonable losses, claims, liabilities and
              expenses arising directly from the partner&apos;s unlawful
              conduct, material breach of these Terms, infringement of
              third-party rights or negligent provision of services.
            </p>
            <p>
              This provision does not apply to the extent a loss is caused by
              LocalKokani&apos;s own negligence, wilful misconduct or other
              conduct for which responsibility cannot lawfully be excluded.
            </p>
            <p>
              Any claim will be assessed according to the facts, applicable law
              and the parties&apos; respective responsibilities.
            </p>

            <h2>20. Changes to These Terms</h2>
            <p>
              LocalKokani may update these Terms to reflect changes in the
              platform, partner plans, operational requirements or applicable
              law.
            </p>
            <p>
              The updated version will be published on this page with a revised
              effective date. Where required by law or where a material change
              affects an existing partner arrangement, LocalKokani will provide
              appropriate notice and obtain any necessary agreement.
            </p>
            <p>
              Continued use after an update takes effect may constitute
              acceptance where legally valid. If you do not agree to a material
              change, you may contact LocalKokani to discuss the effect on your
              participation.
            </p>

            <h2>21. Governing Law and Dispute Resolution</h2>
            <p>These Terms are governed by the laws of India.</p>
            <p>
              The parties will first attempt to resolve disputes through
              good-faith discussion. If a dispute cannot be resolved informally,
              it may be referred to the competent courts having jurisdiction
              under applicable law in Maharashtra, India, subject to any
              mandatory legal requirements.
            </p>
            <p>
              Nothing in this clause removes a right to approach a competent
              authority or forum where applicable law provides that right.
            </p>

            <h2>22. Contact Us</h2>
            <p>
              For partner registration, listing changes, plan details,
              commissions, verification, complaints or questions about these
              Terms, contact:
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
              By registering or submitting a business listing on LocalKokani,
              you acknowledge that you have read and agreed to these Terms and
              the applicable policies.
            </p>

            <hr />

            <p>
              <em>
                This document is a general business-policy draft, not legal
                advice. Please have an Indian legal professional review it
                before publication, particularly the commission, paid-plan,
                refund, privacy and liability provisions.
              </em>
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