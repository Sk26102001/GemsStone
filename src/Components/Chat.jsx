

import React, { useState } from "react";
import { Phone, MessageCircle, Gift, Star, X } from "lucide-react";

export default function Chat() {
  const [isCallOpen, setIsCallOpen] = useState(false);

  // Replace with your business or personal WhatsApp number
  const whatsappNumber = "919876543210"; // <-- no '+' sign here
  const whatsappMessage = "Hi! I’d like to know more about gemstones 💎";

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center overflow-hidden h-[50vh]">
      {/* === Background Gradient === */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-blue-300 via-blue-200 to-pink-200 rounded-t-[120px]" />

      {/* === Expert Image === */}
      <div className="absolute left-0 bottom-0 w-1/2 h-full z-10 flex items-end pointer-events-none">
        <img
          src="https://imgcdn1.gempundit.com/media/wysiwyg/expert-image-gp.png"
          alt="Gem Expert"
          className="object-contain h-full max-h-[90%] translate-x-25 md:translate-x-24"
        />
      </div>

      {/* === Card === */}
      <div className="relative z-30 flex w-full md:w-1/2 items-center justify-center h-full px-6">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden backdrop-blur-md w-full">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-blue-50 via-pink-50 to-pink-100 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-medium text-gray-800 leading-snug">
              Find your perfect gemstone with our...
            </h2>
          </div>

          {/* Card Content */}
          <div className="bg-white p-6 md:p-8 flex flex-col justify-between h-[calc(100%-72px)]">
            {/* Features */}
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm md:text-base gap-4 md:gap-2 mb-6 md:mb-8">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-gray-700" />
                <p>
                  <strong>Personalized</strong> Expert Recommendation
                </p>
              </div>

              <div className="hidden md:block h-5 w-px bg-gray-300"></div>

              <div className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-gray-700" />
                <p>
                  <strong>Offers</strong> Exclusive Discount
                </p>
              </div>

              <div className="hidden md:block h-5 w-px bg-gray-300"></div>

              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-gray-700" />
                <p>
                  <strong>100%</strong> Satisfaction Guarantee
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 md:gap-6">
              <button
                onClick={openWhatsApp}
                className="relative z-50 flex items-center justify-center gap-2 border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white text-sm md:text-lg py-2 md:py-3 px-6 md:px-10 rounded-xl transition-all duration-200 shadow-md"
              >
                <MessageCircle className="w-5 h-5 pointer-events-none" /> CHAT NOW
              </button>

              <button
                onClick={() => setIsCallOpen(true)}
                className="relative z-50 flex items-center justify-center gap-2 bg-black hover:bg-blue-500 text-white text-sm md:text-lg py-2 md:py-3 px-6 md:px-10 rounded-xl shadow-md"
              >
                <Phone className="w-5 h-5 pointer-events-none" /> CALL US
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* === Call Modal === */}
      {isCallOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-[90%] md:w-[400px] p-6 relative text-center">
            <button
              onClick={() => setIsCallOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <X size={20} />
            </button>
            <Phone className="w-10 h-10 mx-auto text-green-500 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              📞 Call Our Gem Expert
            </h3>
            <p className="text-gray-600 mb-5">
              For quick help, please call us on:
            </p>
            <a
              href="tel:+919876543210"
              className="block text-lg font-bold text-green-600 mb-4"
            >
              +91 98765 43210
            </a>
            <button
              onClick={() => (window.location.href = "tel:+919876543210")}
              className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded-lg font-semibold transition"
            >
              Call Now
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
