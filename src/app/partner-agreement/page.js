// src/app/partner-agreement/page.js
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Partner Agreement | Local Kokani",
  description:
    "The Partner Agreement governing the relationship between Local Kokani and businesses that list on the platform, including plans, commissions, and obligations.",
  path: "/partner-agreement",
  keywords: [
    "partner agreement",
    "business partner terms",
    "listing agreement",
    "commission terms",
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
            Effective Date: 12 October 2026
          </p>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-a:text-secondary">
            <h2>1. Parties to This Agreement</h2>
            <p>This Partner Agreement (&quot;Agreement&quot;) is entered into between:</p>
            <p>
              <strong>LocalKokani</strong>, the platform operating at{" "}
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
              company, partnership, organization or authorized representative
              registering a business listing on LocalKokani
              (&quot;Partner,&quot; &quot;you&quot; or &quot;your&quot;).
            </p>
            <p>
              The Partner&apos;s registered business details, selected plan,
              applicable fees and any agreed commission terms will be recorded
              in the registration form, plan confirmation or a separate written
              agreement.
            </p>
            <p>
              By submitting a partner registration, accepting this Agreement and
              using the partner services, you agree to its applicable terms.
            </p>

            <h2>2. Purpose of the Agreement</h2>
            <p>
              LocalKokani helps travelers discover accommodation, restaurants
              and local food experiences across the Konkan region of
              Maharashtra, India.
            </p>
            <p>
              The Platform may display business information, photographs,
              amenities, menus, prices, contact details and other relevant
              information to help customers discover and contact listed
              businesses.
            </p>
            <p>
              This Agreement establishes the conditions under which a Partner
              may list and promote a business on LocalKokani.
            </p>
            <p>It applies to businesses including, but not limited to:</p>
            <ul>
              <li>Hotels, resorts and homestays.</li>
              <li>
                Villas, cottages, lodges, guest houses and farm stays.
              </li>
              <li>Restaurants, Khanavals, dhabas and eateries.</li>
              <li>
                Local food providers and other eligible tourism-related
                businesses accepted by LocalKokani.
              </li>
            </ul>

            <h2>3. Nature of the Relationship</h2>
            <p>
              Unless a separate written agreement expressly provides otherwise:
            </p>
            <ol>
              <li>
                LocalKokani acts as a listing, discovery and enquiry
                facilitation platform.
              </li>
              <li>
                The Partner independently operates and manages its business.
              </li>
              <li>
                The Partner is responsible for providing accommodation, food or
                other advertised services.
              </li>
              <li>
                The Partner is not an employee, agent, franchisee or legal
                representative of LocalKokani.
              </li>
              <li>
                Listing a business does not create a partnership, joint venture,
                employment or agency relationship in the legal sense between the
                parties.
              </li>
              <li>
                LocalKokani does not guarantee a minimum number of enquiries,
                bookings, reservations, customers or sales.
              </li>
            </ol>
            <p>
              The Partner must not represent itself as an employee, official
              representative or authorized agent of LocalKokani unless expressly
              authorized in writing.
            </p>

            <h2>4. Registration and Business Information</h2>
            <p>
              The Partner agrees to provide complete, accurate and current
              information, including where applicable:
            </p>
            <ul>
              <li>Owner or authorized representative&apos;s name.</li>
              <li>Business name and address.</li>
              <li>Telephone number, WhatsApp number and email address.</li>
              <li>
                Accommodation details, room types, amenities and capacity.
              </li>
              <li>
                Restaurant information, cuisine, menu, prices and operating
                hours.
              </li>
              <li>
                Photographs of the property, premises, facilities, food or
                services.
              </li>
              <li>
                Applicable licences, registrations and supporting documents.
              </li>
              <li>Selected partner plan and accepted commercial terms.</li>
            </ul>
            <p>
              The Partner confirms that it owns the business or has authority to
              represent it and submit its information.
            </p>
            <p>
              The Partner must promptly inform LocalKokani of material changes
              to ownership, contact details, prices, availability, menu,
              amenities, licences or business operations.
            </p>
            <p>
              LocalKokani may request additional information, corrections or
              documents where reasonably necessary.
            </p>

            <h2>5. Partner Plans</h2>
            <p>
              LocalKokani may offer free and paid listing plans. Available plans,
              prices, duration and features will be disclosed on the website or
              in a written plan confirmation.
            </p>

            <h3>5.1 Free Listing Plan</h3>
            <p>
              Under the Free Listing Plan, a Partner may receive a business
              listing without an annual listing fee, subject to the conditions
              communicated during registration.
            </p>
            <p>
              Depending on the agreed workflow, enquiries may be received by
              LocalKokani and coordinated with the Partner.
            </p>
            <p>
              Where the Partner accepts a commission arrangement, the applicable
              commission is governed by Section 6 and the written commission
              schedule or confirmation.
            </p>
            <p>
              A free listing does not guarantee bookings, customers, sales or
              enquiries.
            </p>

            <h3>5.2 Direct Connect Plan</h3>
            <p>The Direct Connect Plan may include:</p>
            <ul>
              <li>Direct customer contact through telephone or WhatsApp.</li>
              <li>Enhanced listing information and photographs.</li>
              <li>
                Additional listing or promotional features described in the
                plan.
              </li>
              <li>Direct management of enquiries by the Partner.</li>
            </ul>
            <p>
              The annual fee, validity period and included features will be
              disclosed before purchase.
            </p>
            <p>
              Unless the Partner expressly agrees otherwise in writing,
              transactions handled directly by the Partner under this plan will
              not attract a LocalKokani commission merely because the customer
              has viewed the listing.
            </p>

            <h3>5.3 Verified Premium Plan</h3>
            <p>The Verified Premium Plan may include:</p>
            <ul>
              <li>
                A verified badge after the applicable verification checks.
              </li>
              <li>Enhanced listing presentation.</li>
              <li>
                Featured placement or increased visibility, subject to the plan
                terms.
              </li>
              <li>Direct customer contact options.</li>
              <li>
                Other features stated in the applicable plan description.
              </li>
            </ul>
            <p>
              The annual price, validity period and included features will be
              disclosed before purchase.
            </p>
            <p>
              A paid plan does not guarantee search ranking, customer traffic,
              enquiries, bookings or revenue.
            </p>

            <h3>5.4 Plan Activation and Renewal</h3>
            <p>
              A paid plan becomes active according to the activation terms
              communicated at purchase.
            </p>
            <p>
              The Partner is responsible for reviewing the plan details, fees,
              duration and renewal conditions before payment.
            </p>
            <p>
              Automatic renewal, if offered, must be clearly disclosed and
              authorized. Any change in renewal price or conditions will be
              communicated as required by applicable law.
            </p>

            <h2>6. Commission and Referral Arrangements</h2>
            <p>
              A commission is payable only when the Partner has expressly
              accepted the applicable commission terms in writing.
            </p>
            <p>
              The commission schedule or written confirmation must identify:
            </p>
            <ol>
              <li>The applicable rate or fixed amount.</li>
              <li>The transactions or referrals that qualify.</li>
              <li>
                The method for attributing a transaction to LocalKokani.
              </li>
              <li>The amount on which commission is calculated.</li>
              <li>The deadline and method for payment.</li>
              <li>
                How cancellations, no-shows, refunds and disputed transactions
                are treated.
              </li>
            </ol>

            <h3>6.1 Accommodation Referrals</h3>
            <p>
              For accommodation businesses, a qualifying booking may include a
              booking referred or coordinated by LocalKokani, as defined in the
              agreed commission schedule.
            </p>
            <p>
              The commission terms should state whether commission is based on
              the completed stay, the amount actually received by the Partner,
              or another expressly agreed basis.
            </p>

            <h3>6.2 Restaurant and Food-Business Referrals</h3>
            <p>
              For restaurants, Khanavals, dhabas and other food businesses, the
              parties must expressly agree on what constitutes a qualifying
              referral.
            </p>
            <p>
              The agreement may use an enquiry record, referral code, booking
              confirmation or another mutually agreed attribution method.
            </p>
            <p>
              A commission must not be assumed to apply to every customer who
              visits a restaurant or views its listing unless that arrangement
              has been clearly agreed.
            </p>

            <h3>6.3 Commission Payments and Records</h3>
            <p>
              The Partner agrees to provide accurate information reasonably
              necessary to reconcile qualifying transactions under the agreed
              commission arrangement.
            </p>
            <p>
              Commission invoices or payment requests will identify the relevant
              period, transactions and amount due where appropriate.
            </p>
            <p>
              If a commission is disputed, the parties will review the relevant
              records and attempt to resolve the matter in good faith.
            </p>
            <p>
              No new or increased commission rate will apply retrospectively
              without the Partner&apos;s agreement, except where permitted or
              required by law.
            </p>

            <h2>7. Payments and Refunds</h2>
            <p>
              Unless LocalKokani expressly confirms a different arrangement for
              a particular transaction, customers pay the Partner directly for
              accommodation, restaurant reservations, food orders and other
              business services.
            </p>
            <p>
              The Partner is responsible for issuing appropriate receipts,
              invoices or confirmations and complying with applicable tax and
              consumer requirements.
            </p>
            <p>
              Where a payment is collected by LocalKokani under an expressly
              agreed arrangement, the applicable payment, settlement,
              cancellation and refund terms will be communicated separately.
            </p>
            <p>
              Partner plan fees and commission payments are separate obligations
              and must be handled according to their respective agreed terms.
            </p>

            <h2>8. Partner Responsibilities</h2>
            <p>The Partner agrees to:</p>
            <ul>
              <li>
                Provide the services described in the listing honestly and
                professionally.
              </li>
              <li>
                Keep business information, photographs, prices and service
                details accurate.
              </li>
              <li>Respond to enquiries within a reasonable time.</li>
              <li>
                Confirm availability and booking conditions before accepting a
                customer.
              </li>
              <li>
                Disclose taxes, deposits, additional charges and relevant
                restrictions before confirmation.
              </li>
              <li>Maintain suitable service, hygiene and safety standards.</li>
              <li>
                Obtain and maintain all licences, registrations and permissions
                required by law.
              </li>
              <li>
                Handle customer complaints, cancellations and refunds fairly.
              </li>
              <li>
                Protect customer contact information and use it only for lawful
                purposes.
              </li>
              <li>
                Avoid fake reviews, misleading advertising, fraudulent activity
                and unauthorized use of third-party content.
              </li>
              <li>
                Notify LocalKokani of material changes that affect the listing
                or its compliance.
              </li>
            </ul>
            <p>
              The Partner remains responsible for its staff, contractors,
              premises, operations, customer service and business obligations.
            </p>

            <h2>9. Additional Obligations for Accommodation Partners</h2>
            <p>Accommodation Partners must ensure that:</p>
            <ol>
              <li>
                The property is lawfully operated and available for the
                advertised purpose.
              </li>
              <li>
                Room descriptions, capacity, amenities and photographs are
                accurate.
              </li>
              <li>
                Rates, deposits, taxes and additional charges are clearly
                disclosed.
              </li>
              <li>Availability is updated as reasonably practicable.</li>
              <li>
                Check-in, check-out, guest identification and property rules are
                communicated clearly.
              </li>
              <li>
                Applicable safety, hygiene, fire and other regulatory
                requirements are met.
              </li>
              <li>
                Confirmed bookings and cancellations are handled according to
                the disclosed terms and applicable law.
              </li>
            </ol>
            <p>
              A Partner must not advertise accommodation that it has no
              authority to offer.
            </p>

            <h2>10. Additional Obligations for Food Businesses</h2>
            <p>
              Restaurant, Khanaval, dhaba and other food-business Partners must
              ensure that:
            </p>
            <ol>
              <li>
                Menu items, prices, operating hours and advertised services are
                accurate.
              </li>
              <li>
                Applicable food safety and hygiene requirements are followed.
              </li>
              <li>
                Required FSSAI registration or licensing and other permissions
                are maintained.
              </li>
              <li>
                Allergen information and other legally required disclosures are
                provided where applicable.
              </li>
              <li>
                Delivery charges, minimum orders and additional fees are
                disclosed before the customer commits.
              </li>
              <li>
                Reservations, takeaway orders, delivery arrangements and
                complaints are handled fairly.
              </li>
              <li>
                Required invoices, receipts and tax records are maintained.
              </li>
            </ol>
            <p>
              The Partner remains responsible for food preparation, storage,
              handling, quality, safety and fulfilment of orders.
            </p>

            <h2>11. Verification and Verified Badge</h2>
            <p>
              LocalKokani may review business details, identity documents,
              location information, licences or other supporting records under
              its Verification Policy.
            </p>
            <p>
              The Partner agrees to provide genuine documents and cooperate with
              reasonable verification requests.
            </p>
            <p>
              A verified badge indicates only that the Partner has passed the
              checks described in the Verification Policy at the relevant time.
            </p>
            <p>
              The badge is not government approval, a government-issued
              certification or a guarantee of service quality. For food
              businesses, it does not represent FSSAI approval or certify food
              safety compliance.
            </p>
            <p>
              LocalKokani may withhold, suspend or remove the badge if
              verification requirements are not met, information becomes
              materially inaccurate or a credible compliance concern arises.
            </p>
            <p>
              The Partner must not alter the badge or claim that it represents a
              certification or endorsement that LocalKokani has not granted.
            </p>

            <h2>12. Content and Promotional Rights</h2>
            <p>
              The Partner retains ownership of content it owns and submits to
              LocalKokani.
            </p>
            <p>
              The Partner grants LocalKokani a non-exclusive, royalty-free
              permission to use, reproduce, resize, format, display and
              distribute submitted business descriptions, photographs, menus,
              logos and other authorized materials for the purposes of hosting,
              maintaining, improving and promoting the listing and LocalKokani
              platform.
            </p>
            <p>
              This permission covers the website, associated social media pages
              and other LocalKokani promotional channels for the duration
              reasonably required for these purposes, subject to applicable law
              and any agreed restrictions.
            </p>
            <p>
              The Partner confirms that it has the necessary rights and
              permissions to submit the content.
            </p>
            <p>
              The Partner may request correction or removal of content it is
              authorized to control. LocalKokani may remove content that
              infringes rights, breaches these Terms or violates applicable law.
            </p>

            <h2>13. Customer Data and Privacy</h2>
            <p>
              Where LocalKokani shares customer enquiry information with a
              Partner, the Partner must:
            </p>
            <ul>
              <li>
                Use the information only for the relevant enquiry, booking,
                reservation or service.
              </li>
              <li>
                Keep the information secure and restrict access to authorized
                personnel.
              </li>
              <li>
                Avoid selling, publishing or sharing it with unauthorized third
                parties.
              </li>
              <li>
                Avoid unrelated marketing unless the necessary permission has
                been obtained.
              </li>
              <li>
                Retain and delete information in accordance with applicable law
                and legitimate business requirements.
              </li>
            </ul>
            <p>
              The Partner must notify LocalKokani promptly if it becomes aware
              of a material data breach involving customer information obtained
              through the Platform, where legally appropriate.
            </p>
            <p>
              The Partner must comply with applicable privacy and data protection
              laws.
            </p>

            <h2>14. Cancellations, Refunds and Customer Complaints</h2>
            <p>
              Unless LocalKokani expressly manages a particular transaction, the
              Partner is responsible for its bookings, reservations, food orders,
              cancellations, refunds and customer complaints.
            </p>
            <p>
              The Partner must communicate applicable cancellation terms before
              the customer commits and must comply with those terms and
              applicable law.
            </p>
            <p>
              If LocalKokani receives a complaint about the Partner, it may
              request a response, records or supporting evidence and may assist
              with communication where appropriate.
            </p>
            <p>
              LocalKokani does not guarantee a particular dispute outcome and is
              not automatically responsible for resolving disputes arising from
              services provided independently by the Partner.
            </p>

            <h2>15. Intellectual Property and Platform Use</h2>
            <p>
              The LocalKokani name, logo, original website content, design and
              platform materials are owned by or licensed to LocalKokani unless
              otherwise stated.
            </p>
            <p>
              The Partner may use LocalKokani branding only with appropriate
              permission and in accordance with any applicable brand guidelines.
            </p>
            <p>
              The Partner must not copy, modify, sell, distribute or commercially
              exploit LocalKokani intellectual property without authorization,
              except where permitted by law.
            </p>
            <p>
              Listing a business does not transfer ownership of
              LocalKokani&apos;s intellectual property to the Partner.
            </p>

            <h2>16. Suspension and Termination</h2>
            <p>
              Either party may request termination of the partner relationship
              by providing notice through an appropriate written channel, subject
              to existing contractual obligations and applicable law.
            </p>
            <p>
              LocalKokani may suspend or remove a listing, restrict partner
              access, withhold a verified badge or terminate this Agreement where
              reasonably necessary because of:
            </p>
            <ul>
              <li>
                A material breach of this Agreement or an applicable policy.
              </li>
              <li>False or misleading business information.</li>
              <li>
                Missing, expired or unverifiable required documents.
              </li>
              <li>
                Credible evidence of fraud, unlawful activity or serious
                customer harm.
              </li>
              <li>
                Misuse of customer information or LocalKokani&apos;s platform.
              </li>
              <li>A legal requirement or material safety concern.</li>
            </ul>
            <p>
              Where reasonably practicable, LocalKokani will provide notice and
              an opportunity to correct a remediable issue. Immediate action may
              be taken where necessary to address serious risks or legal
              obligations.
            </p>
            <p>
              Termination does not automatically cancel outstanding fees,
              properly agreed commissions or other obligations that accrued
              before termination.
            </p>
            <p>
              Refunds for paid plans will be handled according to the applicable
              plan terms and law.
            </p>

            <h2>17. Liability and Responsibility</h2>
            <p>
              The Partner is responsible for the operation of its business, the
              accuracy of its listing, the services it provides and its
              compliance with applicable laws.
            </p>
            <p>
              To the extent permitted by law, LocalKokani does not guarantee
              uninterrupted platform availability, specific search placement, a
              minimum number of leads or commercial results.
            </p>
            <p>
              Neither party is responsible for losses to the extent they arise
              from the other party&apos;s breach, negligence or unlawful
              conduct, subject to applicable law.
            </p>
            <p>
              Nothing in this Agreement excludes or limits liability that cannot
              lawfully be excluded or limited.
            </p>

            <h2>18. Indemnity</h2>
            <p>
              To the extent permitted by applicable law, the Partner may be
              responsible for reasonable losses, claims, liabilities and
              expenses arising directly from the Partner&apos;s unlawful
              conduct, material breach of this Agreement, infringement of
              third-party rights or negligent provision of services.
            </p>
            <p>
              This does not apply to the extent a loss is caused by
              LocalKokani&apos;s own negligence, wilful misconduct or other
              conduct for which responsibility cannot lawfully be excluded.
            </p>
            <p>
              Any claim will be assessed according to the facts, applicable law
              and the parties&apos; respective responsibilities.
            </p>

            <h2>19. Amendments to This Agreement</h2>
            <p>
              LocalKokani may update this Agreement to reflect changes to its
              platform, services, plan structure or applicable law.
            </p>
            <p>
              Updated terms will be published on the website with a revised
              effective date. Where a change materially affects an existing
              commercial arrangement, LocalKokani will provide appropriate notice
              and obtain any agreement required by law.
            </p>
            <p>
              Changes to commission rates, qualifying transactions or other
              material commercial terms require the Partner&apos;s agreement
              before they apply, except where permitted or required by law.
            </p>

            <h2>20. Governing Law and Dispute Resolution</h2>
            <p>This Agreement is governed by the laws of India.</p>
            <p>
              The parties will first attempt to resolve disputes through
              good-faith discussion. If a dispute cannot be resolved informally,
              it may be referred to the competent courts having jurisdiction
              under applicable law in Maharashtra, India, subject to mandatory
              legal requirements.
            </p>
            <p>
              Nothing in this clause prevents either party from approaching a
              competent authority or forum where applicable law provides that
              right.
            </p>

            <h2>21. Acceptance and Electronic Records</h2>
            <p>
              The Partner may accept this Agreement through an electronic
              checkbox, electronic signature or another method supported by
              LocalKokani.
            </p>
            <p>
              The Partner confirms that it has read and understood this
              Agreement, has authority to accept it and agrees to the terms
              applicable to its selected plan and business.
            </p>
            <p>
              LocalKokani may retain reasonable records of acceptance, including
              the agreement version, date and time, registration details and
              relevant electronic confirmation, subject to applicable law and
              privacy requirements.
            </p>
            <p>
              The Partner should retain a copy of the Agreement and any separate
              plan or commission confirmation for its records.
            </p>

            <h2>22. Contact Information</h2>
            <p>
              For partner registration, plan details, commission arrangements,
              verification, listing changes or questions about this Agreement,
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
              By accepting this Agreement, the Partner confirms that the
              information provided is accurate, that the Partner has authority
              to list the business, and that the Partner agrees to the
              applicable terms and any separately accepted plan or commission
              schedule.
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
              <strong>Selected Plan:</strong>{" "}
              ____________________________________
            </p>
            <p>
              <strong>Accepted Commission Terms, if applicable:</strong>{" "}
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
              <em>Stay with Locals</em>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}