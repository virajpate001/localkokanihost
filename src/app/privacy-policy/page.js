// src/app/privacy-policy/page.js
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | Local Kokani",
  description:
    "How Local Kokani collects, uses, and protects your personal information.",
  path: "/privacy-policy",
  keywords: [
    "privacy policy",
    "data protection",
    "personal information",
    "user privacy",
  ],
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-secondary dark:bg-gray-900">
        <Breadcrumbs
          items={[{ name: "Privacy Policy", url: "/privacy-policy" }]}
        />
      </div>

      <section className="py-16 bg-white ">
        <div className="container-custom max-w-3xl">
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-primary mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm mb-10">
            Effective Date: 12 October 2026
          </p>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-a:text-secondary">
            <h2>1. Introduction</h2>
            <p>
              Welcome to <strong>LocalKokani</strong> (&quot;we&quot;,
              &quot;our&quot;, &quot;us&quot;, or &quot;the Platform&quot;).
            </p>
            <p>
              LocalKokani is an online discovery and listing platform that helps
              travelers explore hotels, resorts, homestays, villas, restaurants,
              Khanavals, and other local businesses across the Konkan region of
              Maharashtra, India.
            </p>
            <p>
              We respect your privacy and are committed to handling your
              personal information responsibly. This Privacy Policy explains
              what information we collect, how we use it, when we share it, and
              the choices available to you when you visit or use our website.
            </p>
            <p>
              This policy applies to all website visitors, travelers, customers,
              property owners, restaurant owners, and other business partners
              who interact with LocalKokani.
            </p>
            <p>
              By using our website, you acknowledge that you have read this
              Privacy Policy.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We may collect the following categories of information, depending
              on how you use our website.
            </p>

            <h3>2.1 Information Provided by Travelers and Customers</h3>
            <p>
              When you contact us or submit an enquiry, we may collect:
            </p>
            <ul>
              <li>Name</li>
              <li>Mobile number and WhatsApp number</li>
              <li>Email address, if provided</li>
              <li>Destination or business you are enquiring about</li>
              <li>Check-in and check-out dates, where applicable</li>
              <li>Number of guests</li>
              <li>Room, dining, or other service requirements</li>
              <li>Budget and special requests voluntarily provided</li>
              <li>Messages and communications with our team</li>
            </ul>
            <p>
              Please avoid sharing unnecessary sensitive personal information
              through enquiry forms or messages.
            </p>

            <h3>2.2 Information Provided by Business Partners</h3>
            <p>
              When registering a hotel, resort, homestay, villa, restaurant,
              Khanaval, or other business, we may collect:
            </p>
            <ul>
              <li>Owner&apos;s or authorized representative&apos;s name</li>
              <li>Business name and type</li>
              <li>Mobile number and WhatsApp number</li>
              <li>Email address</li>
              <li>Business address and location</li>
              <li>Property or restaurant descriptions</li>
              <li>
                Room details, accommodation prices, menus, food prices, and
                amenities
              </li>
              <li>
                Operating hours, availability, and service information
              </li>
              <li>Business photographs, logos, and social media links</li>
              <li>
                Business registration or licence information, where applicable
              </li>
              <li>Verification documents, where required</li>
              <li>
                Selected subscription plan and partner agreement acceptance
                records
              </li>
              <li>Commission-related records, where applicable</li>
            </ul>
            <p>
              Please submit documents only through the designated registration
              or verification process.
            </p>

            <h3>2.3 Automatically Collected Information</h3>
            <p>
              When you visit our website, we or our service providers may
              collect certain technical information, where enabled:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device and operating system information</li>
              <li>Pages visited and referring website</li>
              <li>Visit date, time, and approximate usage information</li>
              <li>Cookie identifiers and analytics information, where applicable</li>
            </ul>
            <p>
              The information collected depends on the website features and
              tools actually in use.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>We may use your information to:</p>
            <ul>
              <li>
                Display hotels, resorts, homestays, villas, restaurants, and
                Khanavals on our platform.
              </li>
              <li>Process and review business registrations.</li>
              <li>Publish business listings and relevant contact information.</li>
              <li>Receive, manage, and forward customer enquiries.</li>
              <li>Connect travelers with business owners.</li>
              <li>
                Communicate with customers and partners through phone, email, or
                WhatsApp.
              </li>
              <li>Verify submitted business and contact information.</li>
              <li>
                Manage subscriptions, partner plans, and commission
                arrangements.
              </li>
              <li>
                Maintain records of agreement acceptance and registration
                activity.
              </li>
              <li>Respond to complaints, disputes, and support requests.</li>
              <li>Prevent fraud, misuse, and unauthorized activity.</li>
              <li>
                Improve website functionality, performance, and user experience.
              </li>
              <li>Comply with applicable legal obligations.</li>
            </ul>
            <p>
              We will use personal information for purposes consistent with this
              policy and applicable law.
            </p>

            <h2>4. Public Business Listings</h2>
            <p>
              Information displayed on a business listing may be publicly
              accessible.
            </p>
            <p>
              Depending on the business&apos;s selected plan and the information
              approved for publication, this may include:
            </p>
            <ul>
              <li>Business or property name</li>
              <li>Business category</li>
              <li>Location and address</li>
              <li>Photographs and descriptions</li>
              <li>Room prices, menus, and food prices</li>
              <li>Amenities, facilities, and operating hours</li>
              <li>Public business contact details</li>
              <li>Verified status, where applicable</li>
              <li>Website and social media links</li>
            </ul>
            <p>
              For free listings where enquiries are managed by LocalKokani,
              customers may contact our team rather than receiving the
              owner&apos;s direct contact details.
            </p>
            <p>
              For eligible paid listings, the owner&apos;s approved business
              contact number or WhatsApp link may be displayed so customers can
              contact the business directly.
            </p>
            <p>
              Business partners should not submit personal contact details for
              public display unless they understand and authorize that use.
            </p>

            <h2>5. How We Share Information</h2>
            <p>
              We do not sell personal information to third parties as a business
              model.
            </p>
            <p>We may share relevant information in the following circumstances.</p>

            <h3>5.1 With Business Owners</h3>
            <p>
              When a traveler submits an enquiry, we may share the information
              reasonably necessary for the relevant business to respond.
            </p>
            <p>
              For example, we may share a traveler&apos;s name, contact number,
              requested dates, guest count, or requirements with a hotel owner
              for an accommodation enquiry.
            </p>
            <p>
              For restaurant enquiries, we may share the customer&apos;s contact
              details and enquiry information with the restaurant where
              necessary to respond to the request.
            </p>
            <p>We aim to share only information relevant to the enquiry.</p>

            <h3>5.2 With Service Providers</h3>
            <p>
              We may use third-party providers to operate our website, hosting,
              storage, security, communication, analytics, or technical
              infrastructure.
            </p>
            <p>
              These providers may process information on our behalf as necessary
              to provide their services, subject to applicable requirements.
            </p>

            <h3>5.3 For Legal or Safety Reasons</h3>
            <p>
              We may disclose information when reasonably necessary to comply
              with applicable law, respond to lawful requests, investigate
              suspected fraud, protect our rights, or address security concerns.
            </p>

            <h3>5.4 Business Transfers</h3>
            <p>
              If LocalKokani undergoes a merger, restructuring, acquisition, or
              transfer of business assets, relevant information may be
              transferred as permitted by applicable law.
            </p>

            <h2>6. WhatsApp and Third-Party Services</h2>
            <p>
              Our website may include links or buttons for WhatsApp, Google
              Maps, social media platforms, and other third-party services.
            </p>
            <p>
              When you use these services, your interaction may be governed by
              the relevant third party&apos;s terms and privacy policy.
            </p>
            <p>
              For example, clicking a WhatsApp button may open WhatsApp and
              share information that you choose to send in your message.
            </p>
            <p>
              LocalKokani does not control the independent privacy practices,
              availability, or security of third-party platforms.
            </p>
            <p>
              Please review the relevant third-party privacy policies before
              using their services.
            </p>

            <h2>7. Business Verification and Documents</h2>
            <p>
              LocalKokani may review business information and supporting
              documents to determine whether a listing qualifies for a Premium
              badge.
            </p>
            <p>
              Depending on the business category and verification requirements,
              this process may involve reviewing identity details, contact
              information, business location, property information, or
              applicable registration and licence details.
            </p>
            <p> 
              Verification documents are intended for review and should not be
              displayed publicly unless publication is necessary, lawful, and
              appropriately authorized.
            </p>
            <p>
              We do not represent our internal Premium badge as government
              certification or a guarantee of business quality.
            </p>
            <p>
              We take reasonable steps to restrict access to verification
              information to authorized personnel and service providers who need
              it for legitimate purposes.
            </p>

            <h2>8. Data Storage and Security</h2>
            <p>
              We use reasonable technical and organizational safeguards intended
              to protect personal information from unauthorized access,
              alteration, disclosure, or destruction.
            </p>
            <p> 
              Depending on our technical setup, safeguards may include access
              controls, authentication, secure connections, restricted document
              access, and backups.
            </p>
            <p>
              However, no online platform or electronic storage method can be
              guaranteed to be completely secure.
            </p>
            <p>
              Users and business partners should ensure that their account
              credentials and verification documents are shared only through
              authorized channels.
            </p>

            <h2>9. Data Retention</h2>
            <p>
              We retain information for as long as reasonably necessary for the
              purposes described in this policy, including:
            </p>
            <ul>
              <li>Maintaining active business listings</li>
              <li>Managing customer enquiries</li>
              <li>Administering subscriptions and commissions</li>
              <li>Maintaining partner agreements and acceptance records</li>
              <li>Resolving complaints and disputes</li>
              <li>Meeting applicable legal and accounting requirements</li>
              <li>Preventing fraud and misuse</li>
            </ul>
            <p>
              When information is no longer required, we will take reasonable
              steps to delete it, anonymize it, or securely dispose of it,
              subject to applicable legal obligations and legitimate
              record-retention needs.
            </p>

            <h2>10. Cookies and Analytics</h2>
            <p>
              LocalKokani may use cookies and similar technologies to support
              website functionality, remember preferences, understand website
              traffic, and improve performance.
            </p>
            <p>
              If analytics or advertising technologies are enabled, they may
              collect information about how visitors interact with our website.
            </p>
            <p>
              You can manage cookies through your browser settings and any
              cookie preferences made available on our website. Blocking certain
              cookies may affect some website features.
            </p>
            <p>
              For more details, please refer to our Cookie Policy.
            </p>

            <h2>11. Your Privacy Rights and Choices</h2>
            <p>Subject to applicable law, you may request to:</p>
            <ul>
              <li>Access personal information we hold about you.</li>
              <li>Correct inaccurate or incomplete information.</li>
              <li>Update your contact details.</li>
              <li>
                Request deletion of personal information where legally
                permissible.
              </li>
              <li>Withdraw consent where processing relies on consent.</li>
              <li>Raise concerns about how your information is handled.</li>
              <li>
                Request removal or correction of a business listing you own or
                are authorized to manage.
              </li>
            </ul>
            <p>
              Some information may need to be retained to comply with legal
              obligations or resolve disputes.
            </p>
            <p>
              To exercise these rights, contact us using the details in the
              Contact Us section.
            </p>
            <p>
              We may need to verify your identity or authority before processing
              a request.
            </p>

            <h2>12. Children&apos;s Privacy</h2>
            <p>
              LocalKokani is intended for general audiences and business users,
              not specifically for children.
            </p>
            <p>
              We do not knowingly seek to collect personal information directly
              from children in circumstances where parental consent or other
              legal requirements apply.
            </p>
            <p>
              If you believe a child has provided personal information to us
              improperly, please contact us so we can review the matter and take
              appropriate action.
            </p>

            <h2>13. Third-Party Links</h2>
            <p>
              Our website may contain links to external websites operated by
              hotels, restaurants, social networks, mapping services, or other
              third parties.
            </p>
            <p>
              We are not responsible for the content, security, or privacy
              practices of those websites.
            </p>
            <p>
              Visiting an external website is subject to that website&apos;s own
              terms and privacy policy.
            </p>

            <h2>14. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy when our services, website
              features, or legal obligations change.
            </p>
            <p>
              The revised version will be published on this page with an updated
              Effective Date.
            </p>
            <p>
              Where required by applicable law, we will provide additional
              notice or obtain consent for material changes.
            </p>

            <h2>15. Contact Us</h2>
            <p>
              If you have questions, requests, or complaints regarding this
              Privacy Policy or the handling of your personal information,
              please contact us.
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href="https://www.localkokani.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.localkokani.com
              </a>
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:localkokani001@gmail.com">
                localkokani001@gmail.com
              </a>
             
            </p>
            <p>
              Please include sufficient information to help us identify your
              enquiry without sending unnecessary sensitive documents.
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