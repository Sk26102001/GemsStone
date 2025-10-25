import React, { useState } from "react";

const faqs = [
  {
    question: "How do I know which gemstone suits me?",
    answer:
      "You can find your gemstone based on your astrological chart (Kundali) and planetary positions. Our experts guide you through the process.",
  },
  {
    question: "Can I wear multiple gemstones together?",
    answer:
      "Yes, but it's recommended to consult an astrologer first, as some combinations may affect the energies of the stones.",
  },
  {
    question: "Are your stones lab-certified?",
    answer:
      "Absolutely! All our gemstones come with proper certification to verify their authenticity and quality.",
  },
  {
    question: "How long does energization take?",
    answer:
      "Energization is done using traditional Vedic rituals. Depending on the type of gemstone, it usually takes 1–3 hours per stone.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* 🌿 Decorative Header (Responsive) */}
<div className="w-full flex flex-col items-center text-center mb-12 px-4">
  <div className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4">
    <span className="text-green-500 text-lg sm:text-xl md:text-2xl lg:text-3xl">🍃</span>
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#6b3e08] leading-tight">
      Frequently Asked Questions
    </h2>
    <span className="text-green-500 text-lg sm:text-xl md:text-2xl lg:text-3xl">🍃</span>
  </div>



   {/* Gradient Bar */}

          <div className="flex items-center space-x-2 mt-2">
  {/* Left small block */}
  <div className="w-4 h-2 bg-red-500 rounded-sm shadow-md"></div>

  {/* Gradient bar - responsive width */}
  <div className="h-2 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 rounded-full shadow-md
                  w-24 sm:w-32 md:w-48 lg:w-94"></div>

  {/* Right small block */}
  <div className="w-4 h-2 bg-red-500 rounded-sm shadow-md"></div>
</div>

</div>
        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer transition-all hover:shadow-xl"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span className="text-yellow-500 font-bold text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <p className="mt-4 text-gray-600 text-sm md:text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
