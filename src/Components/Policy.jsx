
import React from "react";
import { Truck, RefreshCcw, CreditCard } from "lucide-react";

export default function Policy() {
  const policies = [
    {
      icon: <Truck className="w-6 h-6 text-red-500" />,
      title: "Shipping Policy",
      content: [
        "Worldwide Shipping is available.",
        "Free shipping on orders over INR 5,000 in India.",
        "COD is available for orders over INR 5,000 in India.",
        "International Express Shipping takes 4–7 days for delivery.",
      ],
      link: "know more",
    },
    {
      icon: <RefreshCcw className="w-6 h-6 text-red-500" />,
      title: "Return Policy",
      content: [
        "Get 100% moneyback on returning loose gemstones within 10 days for a full refund of the gemstone price.",
        "Return Shipment is at customer’s cost.",
        "Shipping Charges, GST/VAT and duties are not refundable.",
      ],
      link: "know more",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-red-500" />,
      title: "Payment Method",
      content: [
        "Credit Cards: All Visa, MasterCard and American Express Credit Cards are accepted.",
        "Debit Cards (India): All Visa and Maestro Debit Cards are accepted.",
        "PayPal, Net Banking, Cash Cards.",
      ],
      link: "know more",
    },
  ];

  return (
    <div className="bg-white flex flex-col items-center py-12 px-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10 relative text-center">
        Things you want to know before purchase
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-red-500"></span>
      </h2>

      {/* Container */}
      <div className="grid md:grid-cols-3 gap-4 w-full max-w-6xl border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        {policies.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 hover:bg-white transition-all border-r last:border-r-0 border-gray-200 p-6"
          >
            <div className="flex items-center gap-2 mb-3">
              {item.icon}
              <h3 className="font-semibold text-gray-800 text-lg">
                {item.title}
              </h3>
            </div>

            <ul className="text-sm text-gray-700 space-y-1 mb-2">
              {item.content.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {i === 0 ? (
                    <span className="font-medium">{line}</span>
                  ) : (
                    line
                  )}
                </li>
              ))}
            </ul>

            <button className="text-sm text-red-500 font-medium hover:underline">
              {item.link}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
