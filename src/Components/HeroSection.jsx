




import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden max-h-[90vh]">
      {/* 🎥 Background Video/Image */}
      <img
        className="w-full h-full max-h-screen object-cover"
        src="./Gemstone Banner 2.png"
        autoPlay
        loop
        muted
        playsInline
        alt="Banner background"
      />



      {/* Bottom Highlight with Seamless Animation (Your existing code) */}
      <div className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 text-white py-2 font-semibold text-base md:text-lg overflow-hidden relative">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 28, // slower, smoother continuous motion
            ease: "linear",
          }}
        >
          {/* 💎 English + Hindi Gemstone Highlights */}
          <span className="mx-8">💎 Discover 100% Natural Gemstones — Certified & Energized 💎</span>
          <span className="mx-8">💎 जानिए १००% प्राकृतिक रत्न — प्रमाणित और ऊर्जा सम्पन्न 💎</span>
          <span className="mx-8">🌟 Choose the Right Gemstone to Boost Luck & Prosperity 🌟</span>
          <span className="mx-8">🌟 सही रत्न चुनें और पाएं भाग्य एवं समृद्धि में वृद्धि 🌟</span>
          <span className="mx-8">🔮 Personalized Gem Recommendations by Expert Astrologers 🔮</span>
          <span className="mx-8">🔮 अनुभवी ज्योतिषियों द्वारा व्यक्तिगत रत्न परामर्श 🔮</span>
          <span className="mx-8">💫 Certified Yellow Sapphire, Emerald, Ruby, Blue Sapphire & More 💫</span>
          <span className="mx-8">💫 प्रमाणित पुखराज, पन्ना, माणिक, नीलम और अन्य रत्न 💫</span>
          <span className="mx-8">🌞 Bring Positive Energy, Health & Success into Your Life 🌞</span>
          <span className="mx-8">🌞 अपने जीवन में सकारात्मक ऊर्जा, स्वास्थ्य और सफलता लाएं 🌞</span>
          <span className="mx-8">✨ Free Gemstone Consultation & Authentic Lab Certificates ✨</span>
          <span className="mx-8">✨ मुफ्त रत्न परामर्श और प्रमाणिक लैब सर्टिफिकेट ✨</span>
          {/* Duplicate for seamless looping */}
          <span className="mx-8">💎 Discover 100% Natural Gemstones — Certified & Energized 💎</span>
          <span className="mx-8">💎 जानिए १००% प्राकृतिक रत्न — प्रमाणित और ऊर्जा सम्पन्न 💎</span>
          <span className="mx-8">🌟 Choose the Right Gemstone to Boost Luck & Prosperity 🌟</span>
          <span className="mx-8">🌟 सही रत्न चुनें और पाएं भाग्य एवं समृद्धि में वृद्धि 🌟</span>
          <span className="mx-8">🔮 Personalized Gem Recommendations by Expert Astrologers 🔮</span>
          <span className="mx-8">🔮 अनुभवी ज्योतिषियों द्वारा व्यक्तिगत रत्न परामर्श 🔮</span>
          <span className="mx-8">💫 Certified Yellow Sapphire, Emerald, Ruby, Blue Sapphire & More 💫</span>
          <span className="mx-8">💫 प्रमाणित पुखराज, पन्ना, माणिक, नीलम और अन्य रत्न 💫</span>
          <span className="mx-8">🌞 Bring Positive Energy, Health & Success into Your Life 🌞</span>
          <span className="mx-8">🌞 अपने जीवन में सकारात्मक ऊर्जा, स्वास्थ्य और सफलता लाएं 🌞</span>
          <span className="mx-8">✨ Free Gemstone Consultation & Authentic Lab Certificates ✨</span>
          <span className="mx-8">✨ मुफ्त रत्न परामर्श और प्रमाणिक लैब सर्टिफिकेट ✨</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;