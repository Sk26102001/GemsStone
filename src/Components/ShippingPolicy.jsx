import React from "react";

const ShippingPolicy = () => {
  return (
    // Use container for centering and sm:px-6 for better padding on small screens
    <div className="container  mx-auto px-4 sm:px-6 py-8 md:py-12 text-gray-800 text-sm sm:text-base leading-relaxed">
      {/* Shipping Policy Title */}
      <h1 className="text-3xl sm:text-4xl font-serif text-center font-bold mb-6 sm:mb-8 text-indigo-800">
        📦 Shipping Policy
      </h1>

      <hr className="mb-8" />

      {/* Shipping Policy Content - Use space-y-3 for consistent vertical rhythm */}
      <div className="space-y-3">
        <p>
          Veda-Store offers a **COD option** on order value{" "}
          **above INR 5,000.**
        </p>
        <p>
          For orders **below INR 5,000**, a shipment fee of{" "}
          **INR 100** will be charged.
        </p>
        <p>
          **Free Shipping** is available on all orders **above INR 5,000.**
        </p>
        <p className="p-3 bg-indigo-50 border-l-4 border-indigo-500 rounded-md">
          Orders valued under **INR 50K (approx. $601.12)** can avail a postal
          shipping service at a flat rate of{" "}
          **INR 999 (approx. $12.01)** for customers from **Australia, New
          Zealand, and select regions of Asia***. The estimated delivery period
          is **15-20 days.**
        </p>
        <p className="text-xs sm:text-sm text-gray-600 italic">
          **\*Note:** Countries in Asia eligible for this shipping service:
          Bhutan, Hong Kong, Indonesia, Japan, Malaysia, Mongolia, Philippines,
          Singapore, South Korea, Sri Lanka, Thailand, Vietnam, and Cambodia.
        </p>
        <p>
          International **Free Express Shipping** takes **4-7 days** for delivery
          and is available on all{" "}
          **orders above INR 1,50,000 (approx USD 1875 as of July-2023).**
        </p>
        <p>
          All Express shipments are sent through reputed courier service
          providers such as **FedEx, UPS, Sequel, etc.** (mostly trackable).
        </p>
        <p>
          For international orders a standard shipping amount of{" "}
          **INR 3,600 (approx. USD 45)** will be charged.
        </p>
        <p className="font-medium">
          For countries like **Belgium**, if the order value is{" "}
          **above INR 40,000 (USD 540)**, a shipping amount of{" "}
          **INR 8,000 (approx. USD 110)** will be charged.
        </p>
      </div>

      <hr className="my-8" />

      {/* FAQ - Shipping within India */}
      <h2 className="text-xl sm:text-2xl font-serif font-bold mt-10 mb-4 text-indigo-700">
        🇮🇳 Frequently Asked Questions: Shipping within India
      </h2>

      <div className="space-y-6">
        {/* FAQ Item 1 */}
        <div className="p-4 border border-gray-200 rounded-lg">
          <p className="font-bold text-base sm:text-lg text-indigo-600">
            What does the Days to Dispatch mean? (How soon will my order be
            shipped?)
          </p>
          <p className="mt-2 text-gray-700">
            The **Days of Dispatch** is the number of days we take to ready your
            package and hand over to the courier company. The days for dispatch
            is clearly mentioned on each product page. This typically varies
            based on the product (loose gemstone, studded in jewellery, or with
            an additional lab certificate). For example, a loose gemstone is
            shipped in **1-2 days**, while a gemstone requested to be studded in
            a ring will typically take **4-5 days**.
          </p>
        </div>

        {/* FAQ Item 2 */}
        <div className="p-4 border border-gray-200 rounded-lg">
          <p className="font-bold text-base sm:text-lg text-indigo-600">
            How long does it take to deliver my order?
          </p>
          <p className="mt-2 text-gray-700">
            Our courier partners typically deliver orders to **Metro cities** in
            India within **Next Day to 3 Days**. For **non-metros**, delivery
            takes **2 days - 7 days** from the date of dispatch. The dispatch
            date is product-dependent and stated on the product page. For
            questions, please initiate a Live Chat or Call us at{" "}
            <a href="tel:0124-4106764" className="text-indigo-500 hover:underline">
              0124-4106764
            </a>.
          </p>
        </div>

        {/* FAQ Item 3 */}
        <div className="p-4 border border-gray-200 rounded-lg">
          <p className="font-bold text-base sm:text-lg text-indigo-600">
            Is my shipment safe?
          </p>
          <p className="mt-2 text-gray-700">
            Yes, all our shipments are packaged with great care in durable,
            tamper-evident packaging. Additionally, all our shipments are
            **insured**, with the cost included in our shipping fee.
          </p>
        </div>

        {/* FAQ Item 4 */}
        <div className="p-4 border border-gray-200 rounded-lg">
          <p className="font-bold text-base sm:text-lg text-indigo-600">
            Can I track my shipment?
          </p>
          <p className="mt-2 text-gray-700">
            Yes, all shipments within India are sent by reputed couriers like
            FedEx, Aramex, etc., and can be tracked online. An email with the
            **Tracking ID and instructions** will be sent upon dispatch.
          </p>
        </div>

        {/* FAQ Item 5 */}
        <div className="p-4 border border-gray-200 rounded-lg">
          <p className="font-bold text-base sm:text-lg text-indigo-600">
            Are there any hidden costs (sales tax, octroi etc.)?
          </p>
          <p className="mt-2 text-gray-700">
            **No**, there are no hidden costs. The amount mentioned at the time
            of placing the order is the final cost. Any applicable octroi, etc.,
            is paid by the company.
          </p>
        </div>
      </div>

      <hr className="my-8" />

      {/* FAQ - International Shipping */}
      <h2 className="text-xl sm:text-2xl font-serif font-bold mt-10 mb-4 text-indigo-700">
        ✈️ Frequently Asked Questions: International Shipping
      </h2>

      <div className="space-y-6">
        {/* FAQ Item 1 */}
        <div className="p-4 border border-gray-200 rounded-lg">
          <p className="font-bold text-base sm:text-lg text-indigo-600">
            Which countries do you ship to?
          </p>
          <p className="mt-2 text-gray-700">
            We ship to **100+ countries and territories** worldwide. We offer{" "}
            **free shipping WORLDWIDE** for all orders above{" "}
            **INR 1,50,000 (approx USD 1875 as on 10-July-2023).**
          </p>
        </div>

        {/* FAQ Item 2 */}
        <div className="p-4 border border-gray-200 rounded-lg">
          <p className="font-bold text-base sm:text-lg text-indigo-600">
            Which countries do you offer FREE SHIPPING?
          </p>
          <p className="mt-2 text-gray-700">
            We provide **FREE EXPRESS SHIPPING WORLDWIDE** for orders above
            **INR 1,50,000** (approx USD 1875). These express shipments (FedEx,
            Aramex, etc.) typically take **2-10 days** for delivery.
          </p>
        </div>

        {/* FAQ Item 3 */}
        <div className="p-4 border border-gray-200 rounded-lg">
          <p className="font-bold text-base sm:text-lg text-indigo-600">
            What Shipping Options can I choose from?
          </p>
          <p className="mt-2 text-gray-700 space-y-3">
            <span className="block">
              For orders above INR 1,50,000, we offer **Free Express Shipping**
              Worldwide.
            </span>
            <span className="block">
              For orders below this value, you can choose between:
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  **Postal Shipping** (**10-15 days**)
                </li>
                <li>
                  **Express Shipping** (**2-10 days**)
                </li>
              </ul>
            </span>
            <span className="block italic text-sm">
              Example subsidized rates: Express Shipping to Canada is INR 3600
              (approx CA$ 60); Express Shipping to many European countries is INR
              3600 (approx EUR 40).
            </span>
            <span className="block bg-yellow-50 p-3 rounded-md border-l-4 border-yellow-500">
              Orders under **INR 50K** for customers in the U.S.A, Australia, New
              Zealand, and select Asian regions (see list below) can avail a
              postal service at a flat rate of **INR 999** (approx. $12.01) with
              a **15-20 day** estimated delivery period.
            </span>
            <span className="block text-xs sm:text-sm text-gray-600 italic">
              **Note on Couriers:** Certain courier companies have restrictions
              on specific gemstones/jewellery. In such cases, orders are
              dispatched via the next best courier or **EMS SpeedPost** (up to
              5-15 days). Postal shipments may not be trackable online; all
              Express Shipments are trackable.
            </span>
          </p>
        </div>

        {/* FAQ Item 4 */}
        <div className="p-4 border border-gray-200 rounded-lg">
          <p className="font-bold text-base sm:text-lg text-indigo-600">
            What about Custom Charges, Duties, etc.?
          </p>
          <p className="mt-2 text-gray-700 space-y-3">
            <span className="block">
              We are **not responsible** for any **custom charges, duties, or
              VAT** your country may charge, as these vary and are beyond our
              control.
            </span>
            <span className="block font-medium">
              *Good to know:* Currently, there is **no import duty on loose
              gemstones** in the US, Canada, and Europe. In other countries, this
              is typically around **1% only**. Contact your local customs for
              clarification.
            </span>
            <span className="block text-sm text-red-700">
              **Important:** For international orders that are **refused or
              cancelled AFTER dispatch**, the customer is liable for **all custom
              duties and VAT** charged to return the items to us. The refund will
              be the balance less all such fees.
            </span>
          </p>
        </div>

        {/* FAQ Item 5 */}
        <div className="p-4 border border-gray-200 rounded-lg">
          <p className="font-bold text-base sm:text-lg text-indigo-600">
            Is my shipment safe?
          </p>
          <p className="mt-2 text-gray-700">
            All international shipments are packaged with **double care** in
            durable, tamper-evident packaging and are fully **insured**. We partner
            with reputable logistics providers like **FedEx**.
          </p>
        </div>
        
        {/* FAQ Item 6 */}
        <div className="p-4 border border-gray-200 rounded-lg">
          <p className="font-bold text-base sm:text-lg text-indigo-600">
            Can I track my shipment?
          </p>
          <p className="mt-2 text-gray-700">
            All our shipments can be tracked online. Express shipments (FedEx,
            Aramex) provide reliable tracking. Note that postal shipments to
            certain countries may experience delayed tracking updates.
          </p>
        </div>

        {/* FAQ Item 7 */}
        <div className="p-4 border border-gray-200 rounded-lg">
          <p className="font-bold text-base sm:text-lg text-indigo-600">
            Do I need to show my identification to my local courier service for
            shipping?
          </p>
          <p className="mt-2 text-gray-700">
            In some countries, for **high-value shipments**, a valid
            identification (**Tax ID, social security number, etc.**) may need
            to be shown to your local courier for customs clearance. We recommend
            sharing this information for a smoother experience.
          </p>
        </div>

        {/* FAQ Item 8 */}
        <div className="p-4 border border-gray-200 rounded-lg">
          <p className="font-bold text-base sm:text-lg text-indigo-600">
            Which are the gemstones that are not shipped outside India?
          </p>
          <p className="mt-2 text-gray-700">
            **Amber** and **Ammolite** are the two varieties of gemstones that we
            do not ship outside India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;