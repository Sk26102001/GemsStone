
import React from "react";
import { motion } from "framer-motion";

// Remaining feature set (icons are kept, but colors will be controlled by CSS)
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
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

export default function CertifiedStonesSection() {
  return (
    <motion.section
      className="relative bg-gray-50 min-h-screen flex flex-col md:flex-row items-center justify-center px-0 md:px-16 gap-0 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      {/* Modern Blurs - Changed from Pink to Gold/Blue */}
      <div className="absolute left-[-50px] top-[-120px] w-[350px] h-[350px] rounded-full bg-amber-200 opacity-30 blur-3xl pointer-events-none"></div>
      <div className="absolute right-[-100px] bottom-[-80px] w-[450px] h-[300px] rounded-full bg-blue-200 opacity-25 blur-2xl pointer-events-none"></div>
      
      {/* Certificate Image - Hover Effect Removed */}
      <motion.div
        className="w-full md:w-1/2 flex items-center justify-center z-10 min-h-[80vh]"
        // style={{ minHeight: "90vh" }} // Keep as is or remove for more control
        transition={{ type: "spring", stiffness: 190 }}
      >
        <motion.img
          src="https://imgcdn1.gempundit.com/media/wysiwyg/grsss-bg-img-040324.webp?imgeng=/w_960/f_webp/cmpr_20/s_7&aio-w=960"
          alt="Gemstone Certificate"
          // Removed all pink/rose border classes. Used border-amber-400 for a premium gold accent.
          className="bg-white shadow-2xl rounded-2xl border-4 border-amber-400/80 w-auto max-h-[90vh] object-contain" 
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.div>
      
      {/* Info & Features */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left gap-8 px-6 z-10 py-12"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 1.2 }}
      >
        <motion.h2
          // Changed text-pink-600 to text-amber-600
          className="font-extrabold text-amber-600 text-4xl md:text-5xl drop-shadow-sm tracking-tightest mt-8 md:mt-0"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          The Seal of Authenticity
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl text-gray-700 font-normal max-w-lg leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Every gemstone comes with our guarantee—certified by world-renowned laboratories, ensuring clarity and value beyond compare.
        </motion.p>

        {/* Features Grid - Refined Colors and Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 w-full max-w-xl">
          {features.map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              // Changed all pink/rose hover classes to blue/amber
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-400 transition duration-300"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
            >
              {/* Icon */}
              <div className="text-4xl mb-2 text-blue-600">{icon}</div>
              {/* Title - Changed text-pink-600 to text-gray-900 for boldness */}
              <div className="font-bold text-gray-900 text-lg">{title}</div>
              <div className="text-gray-600 text-sm mt-1 font-light">{desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}