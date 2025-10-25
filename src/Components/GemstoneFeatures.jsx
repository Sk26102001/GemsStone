
import React from "react";
import { motion } from "framer-motion";

// 💎 Data with Improved Titles for Impact
const eliteFeatures = [
  {
    image: "https://cdn.dhanshreegems.com/wysiwyg/natural_gemstones_1_.png",
    title: "100% Certified Natural", // Enhanced Title
    desc: "Every gemstone is guaranteed to be free from heat or chemical enhancements, preserving its true, natural beauty.",
  },
  {
    image: "https://cdn.dhanshreegems.com/wysiwyg/lab_certified.png",
    title: "Official Lab Authenticity", // Enhanced Title
    desc: "We provide official lab certification from leading authorities to assure you of the stone's quality and authenticity.",
  },
  {
    image: "https://cdn.dhanshreegems.com/wysiwyg/Direct_from_mines_1.png",
    title: "Vetted Ethical Sourcing", // Enhanced Title
    desc: "By sourcing directly from vetted mines, we ensure ethical practices and offer you unmatched value and transparency.",
  },
  {
    image: "https://cdn.dhanshreegems.com/wysiwyg/world_wide_shipping.png",
    title: "Fully Insured Global Delivery", // Enhanced Title
    desc: "Enjoy peace of mind knowing your precious investment is fully insured and handled with care until it reaches your door.",
  },
];

// Animation variants for the container
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Delay between each card's animation
    },
  },
};

// Animation variants for the individual cards
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};


export default function EliteGemstoneFeatures() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Subtle background element for premium feel */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-amber-50/50 [clip-path:polygon(0%_0%,100%_0%,100%_40%,0%_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header with Better Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
        
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#6b3e08] leading-tight">
            Why Choose Us
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Experience true gemstone perfection built on integrity, verifiable authenticity, and unwavering excellence.
          </p>
        </motion.div>

        {/* Feature Grid: Single Row on Large Screens */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }} // Trigger animation when 40% of component is visible
        >
          {eliteFeatures.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-amber-50/50 hover:shadow-2xl hover:shadow-amber-100/70 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image / Icon with premium styling */}
              <div className="relative flex-shrink-0 w-20 h-20 mb-4">
                <div className="absolute inset-0 bg-amber-100 rounded-full blur-xl opacity-20" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="relative w-full h-full object-contain p-2"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}