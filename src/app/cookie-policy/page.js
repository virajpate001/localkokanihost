// src/app/cookie-policy/page.js
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Cookie Policy | Local Kokani",
  description:
    "How Local Kokani may use cookies and similar technologies on its website, and how visitors can manage their cookie preferences.",
  path: "/cookie-policy",
  keywords: [
    "cookie policy",
    "cookies",
    "local storage",
    "analytics cookies",
    "local kokani cookies",
  ],
});

export default function CookiePolicyPage() {
  return (
    <>
      <div className="bg-secondary dark:bg-gray-900">
        <Breadcrumbs items={[{ name: "Cookie Policy", url: "/cookie-policy" }]} />
      </div>

      <section className="py-16 bg-white ">
        <div className="container-custom max-w-3xl">
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-primary mb-2">
            Cookie Policy
          </h1>
          <p className="text-gray-400 text-sm mb-10">
            Effective Date: 12 October 2026
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
              This Cookie Policy explains how cookies and similar technologies
              may be used when you visit{" "}
              <a
                href="https://www.localkokani.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.localkokani.com
              </a>
              .
            </p>
            <p>
              We use these technologies, where applicable, to help our website
              function, remember certain preferences, understand website usage
              and improve your browsing experience.
            </p>
            <p>
              This policy should be read together with our{" "}
              <a href="/privacy-policy">Privacy Policy</a> and{" "}
              <a href="/terms-and-conditions">Terms &amp; Conditions</a>.
            </p>

            <h2>2. What Are Cookies?</h2>
            <p>
              Cookies are small text files that a website may store on your
              device when you visit it. They can help the website remember
              information about your visit or recognize your browser during a
              later visit.
            </p>
            <p>
              Other technologies, such as local storage, pixels, tags and similar
              identifiers, may also be used for comparable purposes.
            </p>
            <p>
              Some technologies are necessary for the website to function, while
              others may be used for analytics, personalization or advertising,
              depending on the services installed on the website.
            </p>

            <h2>3. Types of Cookies We May Use</h2>
            <p>
              The cookies or similar technologies used by LocalKokani depend on
              the website features and third-party services enabled at the time
              of your visit.
            </p>

            <h3>3.1 Strictly Necessary Cookies</h3>
            <p>
              These technologies may be required to provide essential website
              functionality, protect the website, maintain a session or support
              security features.
            </p>
            <p>
              Where applicable law permits, strictly necessary technologies may
              be used without consent when they are genuinely required for the
              service requested by the user.
            </p>

            <h3>3.2 Functional Cookies</h3>
            <p>
              Functional cookies or similar technologies may help remember
              preferences or settings and support features that make the website
              easier to use.
            </p>
            <p>
              For example, they may support a preference you have selected or
              help maintain a requested feature across pages.
            </p>
            <p>
              These technologies will be used where applicable and subject to any
              consent requirements under relevant law.
            </p>

            <h3>3.3 Analytics and Performance Cookies</h3>
            <p>
              If analytics tools are enabled, they may help us understand how
              visitors use the website, such as which pages receive visits, how
              users navigate the website and whether technical errors occur.
            </p>
            <p>
              We may use this information to improve website performance and
              content.
            </p>
            <p>
              Analytics technologies will be used only as appropriate for the
              tools installed and the applicable consent and privacy
              requirements.
            </p>

            <h3>3.4 Advertising and Marketing Cookies</h3>
            <p>
              If advertising or marketing technologies are introduced, they may
              be used to measure promotional campaigns or provide relevant
              advertising.
            </p>
            <p>
              LocalKokani does not claim to use advertising cookies simply
              because such technologies are described in this policy. Their use
              will depend on the services actually enabled on the website and
              any required user consent.
            </p>

            <h3>3.5 Third-Party Technologies</h3>
            <p>
              Some website features may connect to third-party services, such as
              maps, social media, embedded content, communication tools or
              analytics providers.
            </p>
            <p>
              When you interact with these features, the relevant third party
              may collect information or set cookies according to its own
              policies and technical configuration.
            </p>
            <p>
              LocalKokani does not control cookies set directly by third-party
              websites or services. You should review the applicable third
              party&apos;s privacy and cookie information for further details.
            </p>

            <h2>4. Why We Use Cookies</h2>
            <p>
              Where applicable, cookies and similar technologies may help us:
            </p>
            <ul>
              <li>Keep essential website features working.</li>
              <li>Support security and prevent misuse.</li>
              <li>Remember preferences and improve usability.</li>
              <li>
                Understand website performance and visitor interactions.
              </li>
              <li>Identify technical errors and improve reliability.</li>
              <li>
                Support third-party features requested by visitors.
              </li>
              <li>
                Measure marketing activities if marketing tools are enabled.
              </li>
            </ul>
            <p>
              We aim to use these technologies only for legitimate and disclosed
              purposes.
            </p>

            <h2>5. How to Manage Cookies</h2>
            <p>
              You can manage cookies through your browser settings. Depending on
              your browser, you may be able to:
            </p>
            <ul>
              <li>View stored cookies.</li>
              <li>Delete existing cookies.</li>
              <li>Block some or all cookies.</li>
              <li>Receive notifications when cookies are being stored.</li>
              <li>Configure settings for individual websites.</li>
            </ul>
            <p>
              Blocking or deleting certain cookies may affect website features
              or cause some functionality to stop working as expected.
            </p>
            <p>
              If LocalKokani provides a cookie preference banner or settings
              panel, you may also use it to manage the optional technologies
              covered by that tool.
            </p>
            <p>
              Where applicable law requires consent, optional cookies or similar
              technologies should not be activated before the required consent
              is obtained. Users should be able to withdraw or change their
              consent where required.
            </p>

            <h2>6. Third-Party Links and Services</h2>
            <p>
              LocalKokani may provide links or features that connect you to
              external services, including WhatsApp, Google Maps, social media
              platforms or other third-party websites.
            </p>
            <p>
              When you open or interact with an external service, its own
              privacy practices and cookie settings may apply. Visiting or
              interacting with those services may allow them to collect
              information according to their policies.
            </p>
            <p>
              We encourage you to review the privacy and cookie policies of any
              third-party service you use.
            </p>

            <h2>7. Personal Information and Cookies</h2>
            <p>
              Cookies do not necessarily identify you directly, but information
              collected through cookies or similar technologies may be
              associated with other information, depending on the technology and
              configuration.
            </p>
            <p>
              Where cookie-related information constitutes personal data,
              LocalKokani will handle it in accordance with our Privacy Policy
              and applicable law.
            </p>
            <p>
              For details about the personal information we collect, how we use
              it, when we share it and how you may exercise applicable rights,
              please review our{" "}
              <a href="/privacy-policy">Privacy Policy</a>.
            </p>

            <h2>8. Data Retention</h2>
            <p>
              Cookie and storage durations vary according to their purpose and
              technical configuration.
            </p>
            <p>
              Some cookies are temporary and may expire when you close your
              browser. Others may remain on your device until they expire or are
              deleted.
            </p>
            <p>
              Where applicable, retention periods for information collected
              through analytics or other services are determined by the
              configuration of those services and our legitimate operational
              requirements, subject to applicable law.
            </p>
            <p>
              We aim to retain information only for as long as reasonably
              necessary for the relevant purpose or as required by law.
            </p>

            <h2>9. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy when our website features,
              technologies, third-party integrations or legal requirements
              change.
            </p>
            <p>
              The latest version will be published on this page with an updated
              effective date.
            </p>
            <p>
              We encourage visitors to review this page periodically to
              understand how cookies and similar technologies may be used.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have questions about this Cookie Policy or the use of
              cookies on LocalKokani, please contact us:
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
              <em>
                This Cookie Policy describes technologies that may be used
                depending on the website&apos;s actual configuration. The
                presence of a description in this policy does not mean a
                particular cookie, analytics tool or advertising service is
                currently active.
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