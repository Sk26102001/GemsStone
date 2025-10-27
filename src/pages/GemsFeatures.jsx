

import React from "react";

const features = [
  {
    image: "https://cdn.dhanshreegems.com/wysiwyg/natural_gemstones_1_.png",
    title: "Natural Gemstones",
    desc: "Unheated & Untreated",
  },
  {
    image: "https://cdn.dhanshreegems.com/wysiwyg/lab_certified.png",
    title: "Lab Certified",
    desc: "Get Authenticity Proof",
  },
  {
    image: "https://cdn.dhanshreegems.com/wysiwyg/affordable_range.png",
    title: "Affordable Range",
    desc: "Wide Variety",
  },
  {
    image: "https://cdn.dhanshreegems.com/wysiwyg/100__Secure_payment.png",
    title: "100% Payment Secure",
    desc: "Secure Payment",
  },
  {
    image: "https://cdn.dhanshreegems.com/wysiwyg/world_wide_shipping.png",
    title: "World Wide Shipping",
    desc: "Shipping World Wide",
  },
  {
    image: "https://cdn.dhanshreegems.com/wysiwyg/Direct_from_mines_1.png",
    title: "100% Pure",
    desc: "Direct From Mines",
  },
];

export default function GemsFeatures() {
  return (
    <section className="bg-amber-50/50 w-full mt-20 font-sans">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#6b3e08]">
            Why Choose Us
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Experience premium gemstones with authenticity, ethical sourcing, and unmatched quality.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-6 lg:gap-8 text-center">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start bg-white p-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 w-full h-full border border-amber-100"
            >
              {/* Feature Icon/Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-3 sm:mb-4"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/80x80/ffe3cc/8a5f3e?text=💎";
                }}
              />
              {/* Feature Title */}
              <h3 className="text-sm md:text-base lg:text-lg font-bold text-amber-900 mb-0.5 whitespace-normal overflow-hidden text-ellipsis">
                {item.title}
              </h3>
              {/* Feature Description */}
              <p className="text-xs sm:text-sm text-gray-500 font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
