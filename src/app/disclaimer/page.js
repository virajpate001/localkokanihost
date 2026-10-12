// src/app/disclaimer/page.js
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Disclaimer | Local Kokani",
  description:
    "Important limitations of Local Kokani's role as a discovery, listing, and enquiry platform, and the responsibilities of users and listed businesses.",
  path: "/disclaimer",
  keywords: [
    "disclaimer",
    "platform limitations",
    "listing platform disclaimer",
    "verified badge disclaimer",
    "local kokani disclaimer",
  ],
});

export default function DisclaimerPage() {
  return (
    <>
      <div className="bg-secondary dark:bg-gray-900">
        <Breadcrumbs items={[{ name: "Disclaimer", url: "/disclaimer" }]} />
      </div>

      <section className="py-16 bg-white ">
        <div className="container-custom max-w-3xl">
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-primary mb-2">
            Disclaimer
          </h1>
          <p className="text-gray-400 text-sm mb-10">
            Effective Date: 12 October 2026
          </p>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-a:text-secondary">
            <h2>1. Introduction</h2>
            <p>
              Welcome to <strong>LocalKokani</strong>.
            </p>
            <p>
              LocalKokani is an online discovery, listing, and enquiry platform
              that helps travelers and customers discover hotels, resorts,
              homestays, villas, restaurants, Khanavals, and other local
              businesses across the Konkan region of Maharashtra, India.
            </p>
            <p>
              This Disclaimer explains the limitations of our role and the
              responsibilities of users and listed businesses when using our
              website.
            </p>
            <p>
              By accessing or using LocalKokani, you acknowledge that you have
              read this Disclaimer.
            </p>

            <h2>2. Nature of Our Platform</h2>
            <p>
              LocalKokani operates as a business discovery, listing, and enquiry
              platform.
            </p>
            <p>
              We help users discover businesses and connect with their owners or
              authorized representatives through website listings, WhatsApp,
              telephone, and other available communication channels.
            </p>
            <p>
              Unless expressly stated otherwise, LocalKokani does not own,
              operate, manage, or directly provide the accommodation, dining, or
              other services offered by listed businesses.
            </p>
            <p>
              The services are provided by the respective independent business
              owners.
            </p>

            <h2>3. Accuracy of Business Information</h2>
            <p>
              Information published on LocalKokani may be supplied by business
              owners, their authorized representatives, or other sources used
              for listing purposes.
            </p>
            <p>This information may include:</p>
            <ul>
              <li>Business names, addresses, and contact details</li>
              <li>Accommodation descriptions and room prices</li>
              <li>Restaurant menus, food prices, and cuisine information</li>
              <li>Photographs, videos, and promotional materials</li>
              <li>Amenities, facilities, and available services</li>
              <li>Opening hours, operating days, and availability</li>
              <li>Special offers, discounts, and promotional claims</li>
              <li>Directions, distances, and nearby attractions</li>
            </ul>
            <p>
              Although we may review information before publication, we do not
              guarantee that every listing is complete, accurate, current, or
              error-free.
            </p>
            <p>
              Prices, facilities, menus, availability, and business operations
              may change without our knowledge.
            </p>
            <p>
              Customers should confirm important information directly with the
              relevant business before making travel arrangements, placing an
              order, or making a payment.
            </p>

            <h2>4. Accommodation Services</h2>
            <p>
              Hotels, resorts, homestays, villas, cottages, and other
              accommodation providers listed on LocalKokani operate
              independently.
            </p>
            <p>LocalKokani does not guarantee:</p>
            <ul>
              <li>Room availability or booking confirmation</li>
              <li>Accuracy of room rates or occupancy information</li>
              <li>Cleanliness, facilities, or service quality</li>
              <li>Property safety or suitability for a particular guest</li>
              <li>Views, amenities, or facilities shown in photographs</li>
              <li>The fulfilment of special requests</li>
              <li>The availability of advertised discounts or offers</li>
            </ul>
            <p>
              Customers should confirm room details, check-in and check-out
              times, guest policies, payment requirements, cancellation terms,
              and other important conditions directly with the accommodation
              provider.
            </p>

            <h2>5. Restaurants, Khanavals, and Food Businesses</h2>
            <p>
              Restaurants, Khanavals, dhabas, and other food businesses listed
              on LocalKokani independently prepare and provide their food and
              dining services.
            </p>
            <p>
              Menus, prices, ingredients, portion sizes, availability, operating
              hours, seating arrangements, and other details may change.
            </p>
            <p>LocalKokani does not independently guarantee:</p>
            <ul>
              <li>Food quality, taste, or freshness</li>
              <li>
                Ingredient accuracy or the absence of particular allergens
              </li>
              <li>Hygiene practices or food safety standards</li>
              <li>Availability of specific dishes</li>
              <li>Accuracy of menu photographs</li>
              <li>Seating availability or table reservation confirmation</li>
              <li>Delivery, takeaway, or dining arrangements</li>
            </ul>
            <p>
              Customers with allergies, dietary restrictions, or other
              food-related concerns should confirm the relevant details directly
              with the restaurant before ordering or consuming food.
            </p>
            <p>
              Each food business remains responsible for its food preparation,
              hygiene, food safety, applicable licences, and compliance with
              relevant laws.
            </p>

            <h2>6. Bookings, Reservations, and Enquiries</h2>
            <p>
              Submitting an enquiry through LocalKokani does not automatically
              confirm a hotel booking, restaurant reservation, food order, or
              other service.
            </p>
            <p>
              A reservation or order is confirmed only when the relevant
              business confirms it through an agreed communication channel.
            </p>
            <p>
              For free-plan listings, LocalKokani may receive enquiries,
              communicate with customers, and coordinate with business owners.
            </p>
            <p>
              For eligible paid listings, customers may contact businesses
              directly through published phone numbers or WhatsApp links.
            </p>
            <p>
              Customers should obtain confirmation of all essential details from
              the business before relying on an enquiry or making further
              arrangements.
            </p>

            <h2>7. Payments, Cancellations, and Refunds</h2>
            <p>
              Under our standard listing model, customers generally make
              payments directly to the relevant business.
            </p>
            <p>
              LocalKokani does not currently collect customer booking payments
              through the website under this model.
            </p>
            <p>
              Unless a particular service expressly states otherwise, LocalKokani
              does not process or control payments, deposits, refunds,
              cancellation charges, or financial settlements between customers
              and businesses.
            </p>
            <p>
              The relevant business is responsible for communicating its
              applicable payment, cancellation, and refund terms to the
              customer, subject to applicable law.
            </p>
            <p>
              For commission-based listings, any commission payable by a
              business to LocalKokani is governed by the applicable Partner
              Agreement.
            </p>

            <h2>8. Verified Badge</h2>
            <p>
              LocalKokani may display a Verified badge for eligible
              accommodation providers, restaurants, Khanavals, and other
              businesses that complete our internal verification process.
            </p>
            <p>
              Depending on the business category, verification may involve
              reviewing identity details, contact information, business
              location, submitted documents, or listing information.
            </p>
            <p>
              The Verified badge indicates that specified information has been
              reviewed under LocalKokani&apos;s verification criteria.
            </p>
            <p>It does not represent:</p>
            <ul>
              <li>Government approval or official government certification</li>
              <li>Tourism Department certification</li>
              <li>FSSAI certification or food safety approval</li>
              <li>A guarantee of service quality or customer satisfaction</li>
              <li>
                A guarantee of cleanliness, food safety, or accommodation safety
              </li>
              <li>
                A guarantee of future availability or business performance
              </li>
            </ul>
            <p>
              Verification is limited to the checks actually completed.
              Customers should independently assess whether a business meets
              their requirements.
            </p>

            <h2>9. Third-Party Services and External Links</h2>
            <p>
              Our website may include links or integrations involving WhatsApp,
              Google Maps, social media platforms, external business websites,
              and other third-party services.
            </p>
            <p>These services operate independently of LocalKokani.</p>
            <p>
              We are not responsible for their content, availability, privacy
              practices, security, or service performance.
            </p>
            <p>
              When you follow an external link or contact a business through a
              third-party platform, your interaction may be subject to that
              platform&apos;s terms and policies.
            </p>

            <h2>10. Travel Information and Recommendations</h2>
            <p>
              LocalKokani may publish destination guides, travel suggestions,
              attraction information, road-trip ideas, local food
              recommendations, and other informational content about Konkan.
            </p>
            <p>
              Such information is provided for general informational purposes.
            </p>
            <p>
              Travel conditions, opening hours, accessibility, weather, road
              conditions, attraction availability, and local restrictions may
              change.
            </p>
            <p>
              Customers and travelers should independently verify important
              details before travelling and follow applicable laws, local
              guidance, and safety instructions.
            </p>

            <h2>11. Limitation of Liability</h2>
            <p>
              To the extent permitted by applicable law, LocalKokani is not
              responsible for the independent acts, omissions,
              representations, or services of listed businesses.
            </p>
            <p>This includes disputes relating to:</p>
            <ul>
              <li>Accommodation quality or property conditions</li>
              <li>Food quality, ingredients, or food safety</li>
              <li>Pricing or availability</li>
              <li>Booking, reservation, or order confirmation</li>
              <li>Cancellations, deposits, or refunds</li>
              <li>Customer service or business conduct</li>
              <li>
                Losses or inconvenience arising from arrangements made directly
                with a business
              </li>
            </ul>
            <p>
              LocalKokani also does not guarantee uninterrupted website
              availability or error-free operation.
            </p>
            <p>
              Nothing in this Disclaimer excludes or limits liability where
              such exclusion or limitation is prohibited by applicable law.
            </p>

            <h2>12. User Responsibility</h2>
            <p>
              By using LocalKokani, you acknowledge that you are responsible for
              making informed decisions before engaging with a listed business.
            </p>
            <p>We encourage all customers to:</p>
            <ul>
              <li>Confirm prices and availability directly.</li>
              <li>Check the business&apos;s terms before paying.</li>
              <li>Obtain booking or reservation confirmation.</li>
              <li>Verify important facilities and special requirements.</li>
              <li>
                Confirm food ingredients and allergy-related concerns directly
                with the restaurant.
              </li>
              <li>
                Exercise appropriate care when making payments or sharing
                personal information.
              </li>
            </ul>

            <h2>13. Changes to This Disclaimer</h2>
            <p>
              We may update this Disclaimer from time to time to reflect changes
              in our services, website features, or applicable legal
              requirements.
            </p>
            <p>
              Any revised version will be published on this page with an updated
              Effective Date.
            </p>

            <h2>14. Contact Us</h2>
            <p>
              If you have questions regarding this Disclaimer, please contact
              us:
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