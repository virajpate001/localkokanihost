// src/app/terms-and-conditions/page.js
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions | Local Kokani",
  description:
    "Terms and conditions governing the use of Local Kokani's discovery, listing, and enquiry platform, including partner plans, bookings, payments, and commissions.",
  path: "/terms-and-conditions",
  keywords: [
    "terms and conditions",
    "terms of service",
    "user agreement",
    "partner plans",
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
            Effective Date: 17 October 2026
          </p>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-a:text-secondary">
            <h2>1. Introduction</h2>
            <p>Welcome to LocalKokani.</p>
            <p>
              LocalKokani is an online platform that helps travelers discover
              accommodation, restaurants and local experiences across the Konkan
              region of Maharashtra, India.
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
              , including its listings, business information, enquiry services
              and related features.
            </p>
            <p>
              By accessing or using the website, you agree to these Terms and
              the applicable policies published on our website. If you do not
              agree, please discontinue using the website.
            </p>
            <p>
              These Terms apply to travelers, website visitors, accommodation
              providers, restaurant owners and other business partners.
            </p>

            <h2>2. About LocalKokani</h2>
            <p>LocalKokani helps users discover and connect with local businesses, including:</p>
            <ul>
              <li>Hotels and resorts.</li>
              <li>Homestays, villas and cottages.</li>
              <li>Guest houses, lodges and farm stays.</li>
              <li>Restaurants, Khanavals, dhabas and eateries.</li>
              <li>
                Other eligible local businesses and tourism-related services.
              </li>
            </ul>
            <p>
              LocalKokani primarily operates as a business discovery, listing
              and enquiry facilitation platform.
            </p>
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
              when submitting an enquiry, making a booking or registering a
              business.
            </p>
            <p>You agree not to:</p>
            <ul>
              <li>
                Provide false, misleading or fraudulent information.
              </li>
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
              reservation or payment.
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
              error-free at all times. Availability, prices, amenities, menus and
              business operations may change.
            </p>
            <p>
              Travelers should confirm important information directly with the
              relevant business before committing to a booking or purchase.
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
              <li>Booking coordination with the relevant business.</li>
              <li>
                Commission on confirmed bookings according to the commission
                terms accepted by the partner.
              </li>
            </ul>
            <p>
              For accommodation bookings handled through LocalKokani, the
              process may include collecting an advance from the traveler,
              confirming the booking with the owner, transferring the advance to
              the owner after deducting the agreed commission, and sharing the
              owner&apos;s contact number with the traveler.
            </p>
            <p>
              The applicable commission rate, calculation method, qualifying
              bookings and payment conditions must be disclosed and accepted by
              the partner.
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
              <li>Priority support.</li>
            </ul>
            <p>
              The Premium Plan price, validity period and included features will
              be disclosed before purchase.
            </p>
            <p>
              Premium features remain subject to the applicable plan terms and
              may be changed or discontinued where reasonably necessary, subject
              to appropriate notice and applicable law.
            </p>

            <h3>5.3 Premium Badge</h3>
            <p>
              The Premium badge indicates that the business has an active paid
              subscription with LocalKokani.
            </p>
            <p>
              <strong>
                The Premium badge is not a government certification, official
                tourism approval, guarantee of service quality or food safety
                certification.
              </strong>{" "}
              It does not indicate that a business has been independently
              certified by a government authority or FSSAI.
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

            <h2>6. Enquiries, Bookings and Reservations</h2>
            <p>
              A customer enquiry does not automatically constitute a confirmed
              booking or reservation.
            </p>
            <p>
              Availability, pricing, booking requirements and final confirmation
              must be established through the applicable process.
            </p>

            <h3>6.1 Basic Listing Bookings</h3>
            <p>
              For accommodation bookings coordinated through LocalKokani:
            </p>
            <ol>
              <li>
                The traveler submits an enquiry through LocalKokani.
              </li>
              <li>
                LocalKokani coordinates with the owner regarding availability
                and booking details.
              </li>
              <li>The booking is confirmed according to the agreed process.</li>
              <li>LocalKokani may collect an advance from the traveler.</li>
              <li>
                The advance is transferred to the owner after deducting the
                agreed commission.
              </li>
              <li>
                The owner&apos;s contact number is shared with the traveler for
                further communication.
              </li>
            </ol>
            <p>
              The applicable cancellation terms must be communicated before the
              traveler commits to the booking.
            </p>
            <p>
              The exact handling of any restaurant reservation or other
              transaction involving an advance will be communicated separately
              where relevant.
            </p>

            <h3>6.2 Premium Plan Bookings</h3>
            <p>
              For Premium Plan businesses, travelers can contact the owner
              directly through the owner&apos;s WhatsApp number.
            </p>
            <p>
              The owner and traveler are responsible for confirming
              availability, prices, payment arrangements, booking terms and
              cancellation conditions.
            </p>
            <p>
              Unless separately agreed, LocalKokani does not collect or process
              payments for these direct bookings.
            </p>

            <h2>7. Payments, Commission and Refunds</h2>
            <p>
              Payment arrangements depend on the selected partner plan and the
              particular transaction.
            </p>

            <h3>7.1 Basic Listing Accommodation Bookings</h3>
            <p>
              Where LocalKokani collects an advance for a confirmed
              accommodation booking, it transfers the advance to the owner after
              deducting the commission agreed with that owner.
            </p>
            <p>
              After the advance has been transferred, the owner is responsible
              for handling any traveler refund due under the agreed booking
              terms and applicable law.
            </p>
            <p>
              If the booking is cancelled and LocalKokani has deducted a
              commission, LocalKokani will return its commission to the owner as
              applicable under the agreed commission arrangement. The commission
              reversal does not itself determine whether the traveler is
              entitled to a full or partial refund.
            </p>
            <p>
              If the advance has not yet been transferred, the traveler may
              contact LocalKokani regarding the cancellation and any refund due.
            </p>

            <h3>7.2 Premium Plan Bookings</h3>
            <p>
              For direct bookings, the traveler generally pays the owner
              directly.
            </p>
            <p>
              The owner is responsible for any refund due under the applicable
              booking terms and law. LocalKokani does not ordinarily manage the
              payment or refund for such direct transactions.
            </p>

            <h3>7.3 Partner Subscription Payments</h3>
            <p>
              Premium subscription fees are governed by the partner plan terms
              and Section 5.4 of these Terms.
            </p>

            <h3>7.4 Receipts and Payment Records</h3>
            <p>
              Travelers and partners should retain payment receipts, booking
              confirmations, cancellation messages and other relevant records.
            </p>
            <p>
              LocalKokani will provide appropriate records for payments it
              collects, where applicable. Businesses remain responsible for
              receipts, invoices, taxes and other records relating to payments
              they receive directly.
            </p>

            <h2>8. Cancellation Policy</h2>
            <p>Cancellation rules may differ between properties and restaurants.</p>
            <p>The applicable business may specify conditions relating to:</p>
            <ul>
              <li>Free cancellation deadlines.</li>
              <li>Advance payments and deposits.</li>
              <li>Cancellation charges.</li>
              <li>Refund eligibility and timelines.</li>
              <li>No-shows and late arrivals.</li>
              <li>Changes to booking dates or guest numbers.</li>
              <li>Restaurant table reservations and food orders.</li>
            </ul>
            <p>
              Travelers must read the cancellation conditions displayed in the
              property&apos;s or restaurant&apos;s About section and confirm any
              unclear terms directly with the owner before booking.
            </p>
            <p>
              Once a booking is confirmed, the terms agreed for that booking
              apply, subject to applicable law and non-waivable consumer rights.
            </p>

            <h3>8.1 Cancellations for Basic Listing Accommodation Bookings</h3>
            <p>
              After the advance has been transferred to the owner, the owner is
              responsible for processing any refund due to the traveler under
              the applicable booking conditions and law.
            </p>
            <p>
              LocalKokani may assist with communication, but does not guarantee a
              particular refund outcome.
            </p>

            <h3>8.2 Cancellations for Premium Plan Bookings</h3>
            <p>
              Travelers must contact the owner directly regarding cancellations,
              rescheduling and refunds for bookings arranged directly with
              Premium Plan businesses.
            </p>
            <p>
              LocalKokani is not ordinarily responsible for processing these
              cancellations or refunds because it does not handle the
              transaction, except where a separate arrangement or applicable law
              provides otherwise.
            </p>
            <p>
              For further information, please refer to the{" "}
              <a href="/cancellation-policy">Cancellation &amp; Refund Policy</a>.
            </p>

            <h2>9. Restaurants, Food Quality and Orders</h2>
            <p>
              LocalKokani helps users discover restaurants, Khanavals, dhabas and
              other food businesses.
            </p>
            <p>
              Unless expressly stated otherwise, LocalKokani does not prepare,
              cook, package, sell or deliver food.
            </p>
            <p>Food businesses are responsible for:</p>
            <ul>
              <li>Food preparation, quality and safety.</li>
              <li>Correct menu items and quantities.</li>
              <li>Hygiene and food-handling practices.</li>
              <li>Pricing and applicable charges.</li>
              <li>Order preparation and fulfilment.</li>
              <li>Handling complaints, replacements and refunds where due.</li>
            </ul>
            <p>
              If food is unsatisfactory, incorrect, incomplete, damaged or not
              delivered as agreed, the customer should contact the food business
              directly.
            </p>
            <p>
              <strong>
                LocalKokani does not ordinarily control or guarantee the quality,
                accuracy or fulfilment of food prepared or supplied by
                independent businesses.
              </strong>{" "}
              We may assist with communication where appropriate, but the
              responsible business must address complaints and provide any
              remedy required by applicable law.
            </p>
            <p>
              Nothing in these Terms excludes any liability or consumer right
              that cannot legally be excluded.
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
              excluded, including any responsibility arising from
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
            </ul>
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
              travelers and businesses. However, LocalKokani does not guarantee a
              particular dispute outcome and is not automatically responsible for
              independently provided services.
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
              LocalKokani does not control the operation, availability or content
              of external services and is not responsible for their independent
              practices, subject to applicable law.
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
              LocalKokani materials without authorization, except where permitted
              by law.
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
              independently supplied services or a particular booking outcome.
            </p>
            <p>
              LocalKokani is not ordinarily responsible for disputes arising
              directly between a traveler and an independent property owner,
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
              For questions, listing concerns, booking enquiries or other matters
              relating to these Terms, please contact:
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