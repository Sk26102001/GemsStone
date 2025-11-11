import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-gray-800 leading-relaxed">
      {/* Shipping Policy Title */}
      <h1 className="text-3xl md:text-4xl font-serif text-center font-semibold mb-8">
        Shipping Policy
      </h1>

      {/* Shipping Policy Content */}
      <p>
        Veda-Store offers a <strong>COD option</strong> on order value{" "}
        <strong>above INR 5,000.</strong>
      </p>
      <p className="mt-3">
        For orders <strong>below INR 5,000</strong>, shipment of{" "}
        <strong>INR 100</strong> will be charged.
      </p>
      <p className="mt-3">
        <strong>Free Shipping</strong> is available on all orders above{" "}
        <strong>INR 5,000.</strong>
      </p>
      <p className="mt-3">
        Orders valued under <strong>INR 50K (approx. $601.12)</strong> can avail
        a postal shipping service at a flat rate of{" "}
        <strong>INR 999 (approx. $12.01)</strong> for our customers from
        Australia, New Zealand, and select regions of Asia*. Please note that
        the delivery period for this service is estimated at{" "}
        <strong>15-20 days.</strong>
      </p>

      <p className="mt-3">
        <strong>Note:</strong> Countries in Asia eligible for shipping service:
        Bhutan, Hong Kong, Indonesia, Japan, Malaysia, Mongolia, Philippines,
        Singapore, South Korea, Sri Lanka, Thailand, Vietnam, and Cambodia.
      </p>

      <p className="mt-3">
        International Free Express Shipping takes <strong>4-7 days</strong> for
        delivery and is available on all{" "}
        <strong>
          orders above INR 1,50,000 (approx USD 1875 as of July-2023).
        </strong>
      </p>

      <p className="mt-3">
        All Express shipments are sent through reputed courier service providers
        such as <strong>FedEx, UPS, Sequel, etc.</strong> (mostly trackable).
      </p>

      <p className="mt-3">
        For international orders a shipping amount of{" "}
        <strong>INR 3,600 (approx. USD 45)</strong> will be charged.
      </p>

      <p className="mt-3">
        For countries like Belgium, if the order value is{" "}
        <strong>above INR 40,000 (USD 540)</strong>, a shipping amount of{" "}
        <strong>INR 8,000 (approx. USD 110)</strong> will be charged.
      </p>

      {/* FAQ - Shipping within India */}
      <h2 className="text-2xl md:text-3xl font-serif font-semibold mt-12 mb-6">
        Frequently Asked Questions: Shipping within India
      </h2>

      <div className="space-y-6">
        <div>
          <p className="font-semibold">
            What does the Days to Dispatch mean? (How soon will my order be
            shipped?)
          </p>
          <p className="mt-2">
            The Days of Dispatch is the number of days we take to ready your
            package and hand over to the courier company. The days for dispatch
            is clearly mentioned on each product page. This will typically vary
            based on what product you purchased, whether you want it to be
            studded in a jewellery piece, or you want an additional lab
            certificate along with it. For example, a loose gemstone typically
            gets shipped in 1-2 days. However, a gemstone requested to be studded
            in a ring, will typically take 4-5 days. Similarly, a gemstone
            requested with an additional lab certificate will take even longer.
          </p>
        </div>

        <div>
          <p className="font-semibold">How long does it take to deliver my order?</p>
          <p className="mt-2">
            Our courier partners typically deliver orders to Metro cities in
            India within Next Day to 3 Days. For non-metros, our courier
            partners typically take 2 days - 7 days to deliver the product from
            the date of dispatch. The date of dispatch is dependant on the
            product that you purchase (loose gemstone, or mounted in jewelry) and
            this date is stated on the product page. If you have any questions,
            or doubts, please initiate a Live Chat with us, or Call us at
            0124-4106764
          </p>
        </div>

        <div>
          <p className="font-semibold">Is my shipment safe?</p>
          <p className="mt-2">
            All our shipments are packaged with great care in durable,
            tamper-evident packaging (similar to the packaging of ecommerce
            leaders in India like Flipkart). Additionally, all our shipments are
            insured. The insurance cost is included in our shipping costs, and
            you do not need to pay anything extra.
          </p>
        </div>

        <div>
          <p className="font-semibold">Can I track my shipment?</p>
          <p className="mt-2">
            Yes, you can track your shipment online. All our shipments within
            India are sent by reputed couriers like FedEx, Aramex, etc. As soon
            as the product is dispatched from our office, you shall receive an
            email with the Tracking ID and instructions to guide you.
          </p>
        </div>

        <div>
          <p className="font-semibold">
            Are there any hidden costs (sales tax, octroi etc.)?
          </p>
          <p className="mt-2">
            No, there are no hidden costs. The amount mentioned at the time of
            placing the order and on your order receipt is what the product
            costs you. Any applicable octroi, etc. is paid by the company.
          </p>
        </div>
      </div>

      {/* FAQ - International Shipping */}
      <h2 className="text-2xl md:text-3xl font-serif font-semibold mt-12 mb-6">
        Frequently Asked Questions: International Shipping
      </h2>

      <div className="space-y-6">
        <div>
          <p className="font-semibold">Which countries do you ship to?</p>
          <p className="mt-2">
            We ship to 100+ countries and territories - from Falkland Islands to
            Japan, all countries big and small. Best still, we offer free
            shipping WORLDWIDE for all orders above INR 1,50,000 (approx USD
            1875 as on 10-July-2023)
          </p>
        </div>

        <div>
          <p className="font-semibold">Which countries do you offer FREE SHIPPING?</p>
          <p className="mt-2">
            We provide FREE EXPRESS SHIPPING WORLDWIDE for orders above INR
            1,50,000 (approx USD 1875 as on 10-July-2023). (Note: These Shipments
            are sent by express courier like FedEx, Aramex, etc. and typically
            take 2-10 days to deliver)
          </p>
        </div>
        <div>
          <p className="font-semibold">What Shipping Options can I choose from?</p>
          <p className="mt-2">
            As mentioned earlier, for orders above INR 1,50,000, we offer Free Express Shipping Worldwide.
For orders below that value, you have an option to select from Postal Shipping (10-15 days) and Express Shipping (2-10 days). Both these options are highly subsidized by us. For example, Express Shipping to Canada costs only INR 3600 (approx CA$ 60). While Express Shipping to Belgium, Denmark, France, Germany, Italy, Luxembourg, Netherlands, Spain, Switzerland and some other European Countries for only INR 3600 (approx EUR 40).

Orders valued under INR 50K (approx. $601.12) can avail a postal shipping service at a flat rate of INR 999 (approx. $12.01) for our customers from the U.S.A, Australia, New Zealand, and select regions of Asia*. Please note that the delivery period for this service is estimated at 15-20 days.
Note: Countries in Asia eligible for shipping service: Bhutan, Hong Kong, Indonesia, Japan, Malaysia, Mongolia, Philippines, Singapore, South Korea, Sri Lanka, Thailand, Vietnam, and Cambodia.

Please note that certain courier companies have restrictions on carrying certain types of natural gemstones and jewellery outside India. For example: Aramex may not carry gold jewellery, FedEx may refuse a certain type of natural gemstone, etc. For such gemstones, the orders are dispatched from the next best courier, or through the alternate express shipper EMS SpeedPost which does not have such restrictions (takes upto 5-15 days to deliver). This usually affects a small number of orders and courier policies may vary with time. Please feel free to contact our customer support team before placing your order to know the situation at that time.

Note: Postal shipments in some cases may not be trackable online. All Express Shipments are trackable online.
          </p>
        </div>

        <div>
          <p className="font-semibold">What about Custom Charges, Duties, etc.?</p>
          <p className="mt-2">
           Please be advised that we are not responsible for any custom charges, duties, VAT, etc. that your country may be charging as these vary from case-to-case and are beyond our reach. However, note that currently there is no import duty on loose gemstones in the US, Canada and Europe. In other countries, this typically ranges around 1% only. Additionally, professional buyers can also recover the VAT. You are advised to contact your local customs for any clarification. Additionally, feel free to contact us, and we may in some cases have older experiences from customers to share.

Also, please note that for international orders that AFTER dispatch, are either refused by the customer, or cancelled, the customer will be liable for all custom duties and VAT charged by their country, in order to return the items back to us. Only after receipt of the item by us, any balance due to the customer, less all fees, custom duties and VAT, will be refunded to the customer as per the refund timeline.
          </p>
        </div>

            <div>
          <p className="font-semibold">Is my shipment safe?</p>
          <p className="mt-2">
         All our international shipments are packaged with double care! We understand that the journey is long and far, and ensure that you will not be disappointed. Additionally, we partner with reputable logistics providers like FedEx that take good care of your package. Our shipments are sent in durable, tamper-evident packaging. Additionally, all our shipments are insured. The insurance cost is included in our shipping costs, and you do not need to pay anything extra.
          </p>
        </div>
            <div>
          <p className="font-semibold">Can I track my shipment?</p>
          <p className="mt-2">
        All our shipments can be tracked online. However, postal shipments to certain countries like Afghanistan, etc. may see a delayed tracking. Note that all our express shipments are sent through reputed logistics carriers like FedEx and Aramex.
          </p>
        </div>

                 <div>
          <p className="font-semibold">Do I need to show my identification to my local courier service for shipping?</p>
          <p className="mt-2">
      In some countries, for high-value shipments, you will need to show a valid identification (Tax ID, social security number, etc.) to your local courier service for customs clearance. We recommend sharing this information with your courier for a smoother shopping experience. 
      </p>
        </div>

         <div>
          <p className="font-semibold">Which are the gemstones that are not shipped outside India?</p>
          <p className="mt-2">
            Amber and Ammolite are the two varieties of gemstones that we do not ship outside India.
            </p>
        </div>



      </div>
    </div>
  );
};

export default ShippingPolicy;