

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "💎",
    title: "Global Certification",
    desc: "Verified for trusted authenticity by international labs."
  },
  {
    icon: "🛡",
    title: "Premium Quality",
    desc: "Each stone hand-selected for exceptional brilliance and purity."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1, 
      staggerChildren: 0.2 
    } 
  }
};

export default function CertifiedStonesSection() {
  return (
    <motion.section
      // Adjusted padding: Vertical stack on mobile (py-12), horizontal on desktop (py-20)
      className="relative bg-gray-50 flex flex-col md:flex-row items-center justify-center px-0 md:px-16 gap-0 overflow-hidden py-12 md:py-20"
      initial="hidden"
      whileInView="visible" // Use whileInView for scroll-based animation trigger
      variants={fadeUp}
      viewport={{ once: true, amount: 0.2 }} // Only trigger once
    >
      {/* Modern Blurs - Gold/Blue */}
      <div className="absolute left-[-50px] top-[-120px] w-[350px] h-[350px] rounded-full bg-amber-200 opacity-30 blur-3xl pointer-events-none"></div>
      <div className="absolute right-[-100px] bottom-[-80px] w-[450px] h-[300px] rounded-full bg-blue-200 opacity-25 blur-2xl pointer-events-none"></div>
      
      {/* Certificate Image Container - Removed min-h-[80vh] */}
      <motion.div
        // Added responsive vertical padding (py-8) for mobile separation, no py on md
        className="w-full md:w-1/2 flex items-center justify-center z-10 py-8 md:py-0 px-4 sm:px-6"
        transition={{ type: "spring", stiffness: 190 }}
        variants={fadeUp} // Reuse fadeUp for initial position
      >
        <motion.img
          src="https://imgcdn1.gempundit.com/media/wysiwyg/grsss-bg-img-040324.webp?imgeng=/w_960/f_webp/cmpr_20/s_7&aio-w=960 sm:px-6"
          alt="Gemstone Certificate"
          // Set max-width on mobile (max-w-sm) to prevent the image from being too wide, 
          // and used max-h-[90vh] with object-contain to scale properly.
          className="bg-white shadow-2xl rounded-2xl border-4 border-amber-400/80 w-auto max-w-sm sm:max-w-md md:max-w-full max-h-[90vh] object-contain" 
          initial={{ opacity: 0, scale: 0.93 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </motion.div>
      
      {/* Info & Features Content */}
      <motion.div
        // Added responsive padding (px-6) and vertical padding (py-12) for content area
        className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left gap-8 px-6 z-10 py-12"
        variants={fadeUp} // Reuse fadeUp for overall animation
      >
        <motion.h2
          className="font-extrabold text-amber-700 text-4xl md:text-5xl drop-shadow-sm tracking-tightest mt-8 md:mt-0"
          variants={fadeUp} // Individual item animation
        >
          The Seal of Authenticity
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl text-gray-700 font-normal max-w-lg leading-relaxed"
          variants={fadeUp} // Individual item animation
        >
          Every gemstone comes with our guarantee—certified by world-renowned laboratories, ensuring clarity and value beyond compare.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 w-full max-w-xl">
          {features.map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-400 transition duration-300"
              variants={fadeUp} // Individual item animation
              transition={{ duration: 0.6, delay: i * 0.15 }} // Delay added to the individual transition
            >
              {/* Icon */}
              <div className="text-4xl mb-2 text-blue-600">{icon}</div>
              {/* Title */}
              <div className="font-bold text-gray-900 text-lg">{title}</div>
              <div className="text-gray-600 text-sm mt-1 font-light">{desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
