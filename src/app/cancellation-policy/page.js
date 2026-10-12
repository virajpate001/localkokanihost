// src/app/cancellation-policy/page.js
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  title: "Cancellation Policy | Local Kokani",
  description:
    "How cancellations, changes, no-shows, and refunds are handled for accommodation bookings, restaurant reservations, food orders, and partner listing plans on Local Kokani.",
  path: "/cancellation-policy",
  keywords: [
    "cancellation policy",
    "refund policy",
    "booking cancellation",
    "reservation cancellation",
    "local kokani cancellation",
  ],
});

export default function CancellationPolicyPage() {
  return (
    <>
      <div className="bg-secondary dark:bg-gray-900">
        <Breadcrumbs
          items={[{ name: "Cancellation Policy", url: "/cancellation-policy" }]}
        />
      </div>

      <section className="py-16 bg-white ">
        <div className="container-custom max-w-3xl">
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-primary mb-2">
            Cancellation Policy
          </h1>
          <p className="text-gray-400 text-sm mb-10">
            Effective Date: 12 October 2026
          </p>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-a:text-secondary">
            <h2>1. Introduction</h2>
            <p>
              At LocalKokani, we help travelers discover accommodation,
              restaurants and local food experiences across the Konkan region of
              Maharashtra, India.
            </p>
            <p>
              This Cancellation Policy explains how cancellations, changes,
              no-shows and refunds are handled for accommodation bookings,
              restaurant reservations, food orders and partner listing plans.
            </p>
            <p>
              LocalKokani primarily operates as a discovery, listing and enquiry
              facilitation platform. Unless expressly stated otherwise, the
              accommodation provider or food business is responsible for
              confirming the booking or reservation, delivering the service, and
              handling customer payments, cancellations and refunds.
            </p>
            <p>
              This policy should be read together with our Terms &amp;
              Conditions, Terms for Travelers, Terms for Partners and Privacy
              Policy.
            </p>

            <h2>2. General Cancellation Rules</h2>
            <p>
              Before confirming a booking, reservation or order, customers
              should check the relevant business&apos;s cancellation terms,
              including:
            </p>
            <ul>
              <li>The deadline for cancelling without a fee.</li>
              <li>Any cancellation fee or non-refundable deposit.</li>
              <li>The rules for changes, rescheduling and no-shows.</li>
              <li>The refund amount and expected processing time.</li>
              <li>
                Any special conditions for holidays, peak seasons, group
                bookings or special packages.
              </li>
            </ul>
            <p>
              Cancellation terms may vary by business and service. The
              applicable terms should be communicated before the customer
              commits to the transaction.
            </p>
            <p>
              If a business has not clearly disclosed a cancellation fee or
              restriction, it should not assume that an undisclosed charge
              automatically applies. All cancellation and refund conditions
              remain subject to applicable law.
            </p>

            <h2>3. Accommodation Bookings</h2>
            <p>
              This section applies to hotels, resorts, homestays, villas,
              cottages, lodges, guest houses, farm stays and other accommodation
              providers listed on LocalKokani.
            </p>

            <h3>3.1 Customer-Initiated Cancellations</h3>
            <p>If you wish to cancel an accommodation booking:</p>
            <ol>
              <li>
                Contact the accommodation provider using the confirmation
                details supplied to you.
              </li>
              <li>
                If LocalKokani coordinated the booking, you may also contact us
                at +91 9209543850 or localkokani001@gmail.com.
              </li>
              <li>
                Request written confirmation of the cancellation and any
                applicable refund.
              </li>
              <li>
                Keep your booking reference, payment receipt and cancellation
                confirmation for your records.
              </li>
            </ol>
            <p>
              The accommodation provider&apos;s disclosed cancellation terms
              will generally determine whether a cancellation fee applies and
              what refund is due, subject to applicable law.
            </p>

            <h3>3.2 Advance Payments and Deposits</h3>
            <p>
              If you paid an advance or deposit directly to the accommodation
              provider, the provider is generally responsible for processing any
              refund that is due.
            </p>
            <p>
              If a booking involves a payment collected by LocalKokani under an
              expressly agreed arrangement, the refund will be handled according
              to the disclosed booking terms and applicable law.
            </p>
            <p>
              Customers should not assume that every advance payment is
              refundable. The refund entitlement depends on the terms disclosed
              before confirmation, the circumstances of cancellation and
              applicable law.
            </p>

            <h3>3.3 Changes to Dates or Guests</h3>
            <p>
              Requests to change travel dates, room types, the number of guests
              or the duration of a stay are subject to the accommodation
              provider&apos;s availability and approval.
            </p>
            <p>
              Changes may affect the total price. Any revised charges should be
              communicated before the customer agrees to the change.
            </p>

            <h3>3.4 No-Shows and Late Arrivals</h3>
            <p>
              If a customer does not arrive or fails to notify the accommodation
              provider of a cancellation, the provider may apply its disclosed
              no-show or late-arrival policy, subject to applicable law.
            </p>
            <p>
              Customers who expect to arrive late should contact the property as
              early as possible.
            </p>

            <h3>3.5 Cancellation by an Accommodation Provider</h3>
            <p>
              If a property cancels a confirmed booking, the provider should
              notify the customer promptly, explain the available options and
              arrange any refund due under the booking terms and applicable law.
            </p>
            <p>
              Where reasonably possible, the provider may offer alternative
              dates or comparable accommodation. Customers are not required to
              accept an alternative they do not agree to.
            </p>
            <p>
              Customers may contact LocalKokani for assistance communicating
              with a listed property. However, unless LocalKokani expressly
              handled the booking or payment, the property remains responsible
              for the booking and any refund it owes.
            </p>

            <h2>4. Restaurant Table Reservations</h2>
            <p>
              This section applies to restaurants, Khanavals, dhabas, eateries
              and other food businesses listed on LocalKokani.
            </p>

            <h3>4.1 Cancelling a Table Reservation</h3>
            <p>
              Customers should contact the restaurant directly to cancel or
              change a reservation.
            </p>
            <p>
              If the restaurant requires advance notice or a deposit, the
              applicable conditions and any cancellation fee should be disclosed
              before the reservation is confirmed.
            </p>

            <h3>4.2 Late Arrivals and No-Shows</h3>
            <p>
              Restaurants may have limited seating and may release a table after
              a stated waiting period if the customer has not arrived. Any
              deposit or no-show fee must be based on the conditions communicated
              before confirmation and must comply with applicable law.
            </p>
            <p>
              Customers should inform the restaurant if they expect to arrive
              late or cannot attend.
            </p>

            <h3>4.3 Restaurant-Initiated Cancellations</h3>
            <p>
              If a restaurant cancels a confirmed reservation, it should notify
              the customer promptly. Any deposit or advance payment should be
              refunded where due under the disclosed terms and applicable law.
            </p>
            <p>
              LocalKokani does not guarantee table availability and is not
              responsible for a restaurant&apos;s seating capacity, opening
              hours or operational decisions.
            </p>

            <h2>5. Food Orders, Takeaway and Delivery</h2>
            <p>
              Some listed food businesses may accept takeaway, delivery or other
              food orders through their own channels.
            </p>
            <p>
              Unless LocalKokani expressly confirms that it operates the
              ordering and payment process for a particular transaction, orders
              are placed with the food business or its chosen service provider.
            </p>
            <p>
              Before cancelling a food order, customers should contact the
              business or ordering provider as soon as possible.
            </p>
            <p>
              Cancellation and refund eligibility may depend on whether the
              order has been accepted, prepared, dispatched or delivered, as
              well as the terms disclosed at the time of ordering.
            </p>
            <p>
              Where an order is incorrect, incomplete, damaged or not delivered,
              customers should contact the business or ordering provider promptly
              and provide relevant details or evidence where reasonably
              requested. The responsible provider should assess the complaint
              and provide any remedy required by the agreed terms and applicable
              law.
            </p>
            <p>
              Nothing in this policy removes any consumer rights that cannot
              lawfully be excluded.
            </p>

            <h2>6. Refunds and Processing Time</h2>
            <p>
              Refunds are handled by the party that received the payment, unless
              another arrangement was expressly agreed.
            </p>
            <ul>
              <li>
                <strong>
                  Payment made directly to a property or restaurant:
                </strong>{" "}
                Contact that business to request the applicable refund.
              </li>
              <li>
                <strong>
                  Payment made through a third-party payment or booking
                  provider:
                </strong>{" "}
                Follow that provider&apos;s process and the relevant transaction
                terms.
              </li>
              <li>
                <strong>Payment collected by LocalKokani:</strong> Contact
                LocalKokani with the booking or order reference and proof of
                payment.
              </li>
            </ul>
            <p>
              Once a refund is approved, the time it takes to reach the customer
              may depend on the payment method, bank, card issuer or payment
              service provider. The responsible party should communicate the
              expected processing time where it can reasonably be established.
            </p>
            <p>
              LocalKokani cannot guarantee the processing time of a bank or
              third-party provider.
            </p>

            <h2>7. LocalKokani Partner Plan Cancellations</h2>
            <p>
              This section applies to businesses that purchase a paid annual
              listing plan, including Direct Connect and Verified Premium plans.
            </p>

            <h3>7.1 Cancelling a Partner Plan</h3>
            <p>
              A partner who wishes to discontinue a paid plan should contact
              LocalKokani at localkokani001@gmail.com and include the registered
              business name, contact details and plan information.
            </p>
            <p>
              Cancellation of a plan may stop a future renewal or end the plan
              according to the applicable plan terms. It does not necessarily
              entitle the partner to a refund for an already activated plan.
            </p>

            <h3>7.2 Refunds for Partner Plans</h3>
            <p>
              Unless a different refund commitment has been stated in writing or
              a refund is required by applicable law, annual partner plan fees
              are generally non-refundable once the plan has been activated.
            </p>
            <p>
              If LocalKokani is unable to provide a material paid feature for
              reasons within its control, the partner may contact us to request
              a review. Any adjustment or refund will be considered according to
              the plan terms, the circumstances and applicable law.
            </p>

            <h3>7.3 Suspension or Removal of a Listing</h3>
            <p>
              If a listing is suspended or removed because of a partner&apos;s
              breach of the applicable terms, a refund is not automatic and will
              be assessed under the relevant plan conditions and applicable law.
            </p>
            <p>
              If LocalKokani discontinues a material paid service, any applicable
              notice, refund or other remedy will be handled according to the
              plan agreement and applicable law.
            </p>

            <h2>8. Emergencies and Unforeseen Circumstances</h2>
            <p>
              Severe weather, flooding, landslides, transport disruptions,
              government restrictions, safety concerns and other unforeseen
              events may affect travel and business operations in the Konkan
              region.
            </p>
            <p>
              Customers and businesses should communicate promptly if an
              unforeseen event affects a confirmed booking, reservation or
              order.
            </p>
            <p>
              The relevant business should assess reasonable options, such as
              rescheduling, cancellation or a refund, based on the circumstances,
              the disclosed terms and applicable law. This section does not
              guarantee a full refund in every emergency, nor does it remove
              rights or remedies required by law.
            </p>
            <p>
              Customers should follow official safety instructions and avoid
              travelling when conditions are unsafe.
            </p>

            <h2>9. How to Request Help from LocalKokani</h2>
            <p>
              If you need help contacting a listed business or clarifying a
              cancellation issue, contact us with the following details:
            </p>
            <ul>
              <li>Your name and contact information.</li>
              <li>Business or property name.</li>
              <li>Booking, reservation or order reference, if available.</li>
              <li>Date of the transaction.</li>
              <li>Payment details or receipt, if relevant.</li>
              <li>
                A brief description of the cancellation or refund issue.
              </li>
            </ul>
            <p>
              <strong>Contact LocalKokani</strong>
            </p>
            <ul>
              <li>
                Website:{" "}
                <a
                  href="https://www.localkokani.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.localkokani.com
                </a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:localkokani001@gmail.com">
                  localkokani001@gmail.com
                </a>
              </li>
             
            </ul>
            <p>
              Please do not send passwords, full card details or other
              unnecessary sensitive information.
            </p>
            <p>
              LocalKokani may help facilitate communication, but we cannot
              promise a particular outcome where the transaction is managed by
              an independent business or third-party provider.
            </p>

            <h2>10. Policy Updates</h2>
            <p>
              LocalKokani may update this policy to reflect changes in its
              services, partner arrangements or applicable law.
            </p>
            <p>
              The updated policy will be published on this page with a revised
              effective date. Customers and partners should review the policy
              before making a new booking, reservation, order or plan purchase.
            </p>
            <p>
              Any change to an existing transaction will be subject to the terms
              applicable to that transaction and any mandatory legal
              requirements.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              This policy is governed by the laws of India. Disputes will be
              addressed in accordance with applicable law and the
              dispute-resolution provisions of the relevant agreement.
            </p>
            <p>
              Nothing in this policy limits any consumer rights or remedies that
              cannot lawfully be excluded.
            </p>

            <hr />

            <p>
              <strong>Important:</strong> The cancellation conditions for an
              individual accommodation booking, restaurant reservation or food
              order should be clearly disclosed before confirmation. Where those
              conditions differ from this general policy, the applicable
              transaction terms should be consistent with applicable law and
              should not override any non-waivable customer rights.
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