// import React from "react";
// import { motion } from "framer-motion";
// import { ShieldCheck, Sparkles, PenLine } from "lucide-react";

// export default function GemstoneCertificate() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-gray-100 overflow-hidden">
//       {/* Background aura */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-200/20 via-transparent to-transparent opacity-60 blur-3xl" />

//       <div className="relative z-10 container mx-auto px-3 md:px-6 lg:px-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-6 md:mb-8"
//         >
//           <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-1">
//             🕉 Gemstone Authenticity Certificate
//           </h2>
//           <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
//             Every gemstone from{" "}
//             <span className="font-semibold text-yellow-600">Veda Gemstones</span>{" "}
//             is verified, certified, and blessed for spiritual and astrological harmony.
//           </p>
//         </motion.div>

//         {/* Certificate Card */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           whileHover={{ scale: 1.01 }}
//           className="relative bg-white mx-auto max-w-2xl rounded-xl shadow-lg overflow-hidden border border-yellow-200 group"
//         >
//           {/* Animated border */}
//           <div className="absolute inset-0 rounded-xl pointer-events-none before:content-[''] before:absolute before:inset-0 before:rounded-xl before:border-[1.5px] before:border-transparent before:bg-[conic-gradient(from_0deg,transparent_0deg,rgba(253,224,71,0.5)_120deg,transparent_360deg)] before:animate-[spin_8s_linear_infinite]" />

//           {/* Header strip */}
//           <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 py-1.5 px-4 flex justify-between items-center text-white text-sm">
//             <h3 className="font-semibold flex items-center gap-2">
//               <ShieldCheck size={16} />
//               Certified Natural Gemstone
//             </h3>
//             <Sparkles className="text-yellow-200 animate-pulse" size={16} />
//           </div>

//           {/* Body */}
//           <div className="relative p-4 md:p-5">
//             <img
//               src="https://imgcdn1.gempundit.com/media/wysiwyg/grsss-bg-img-040324.webp?imgeng=/w_960/f_webp/cmpr_20/s_7&aio-w=960"
//               alt="Gemstone Authenticity"
//               className="w-full max-h-56 object-contain rounded-md border border-gray-100 mb-3 shadow-sm transition-transform duration-700 group-hover:scale-[1.01]"
//             />

//             <div className="space-y-2 text-gray-700 text-sm md:text-base">
//               <p>
//                 This certifies that the gemstone described below has been tested and found to be{" "}
//                 <span className="font-semibold text-yellow-700">
//                   100% Natural, Untreated, and Energy-Activated
//                 </span>{" "}
//                 according to Vedic principles.
//               </p>

//               {/* Certificate details */}
//               <div className="bg-gray-50 border border-gray-100 rounded-md p-2.5 text-sm">
//                 <p><span className="font-semibold text-gray-800">Gem Type:</span> Yellow Sapphire (Pukhraj)</p>
//                 <p><span className="font-semibold text-gray-800">Weight:</span> 5.25 Carats</p>
//                 <p><span className="font-semibold text-gray-800">Origin:</span> Ceylon (Sri Lanka)</p>
//                 <p><span className="font-semibold text-gray-800">Certified by:</span> Veda Gemstones Laboratory (VGL)</p>
//                 <p><span className="font-semibold text-gray-800">Certificate ID:</span> VGL-0825-YS</p>
//               </div>

//               {/* Signature & Seal */}
//               <div className="flex justify-between items-center mt-3">
//                 <div className="flex flex-col text-left">
//                   <PenLine size={16} className="text-gray-500 mb-0.5" />
//                   <div className="font-medium text-gray-900 text-sm">
//                     Saurabh Gupta
//                   </div>
//                   <div className="text-gray-500 text-xs">
//                     Founder & Gem Expert
//                   </div>
//                 </div>

//                 {/* Wax Seal */}
//                 <div className="relative">
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
//                     className="w-10 h-10 bg-red-700 rounded-full shadow-md flex items-center justify-center text-white font-bold text-[9px] border-2 border-red-900 relative"
//                   >
//                     VEDA
//                     <span className="absolute w-7 h-7 bg-red-600 opacity-50 blur-md rounded-full"></span>
//                   </motion.div>
//                   <p className="text-[9px] text-gray-500 mt-0.5 text-center">
//                     Wax Seal
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
// export default function GemstoneCertificate() {
//   return (
//     <div className="bg-yellow-50 py-10 px-4 flex flex-col items-center">
//       {/* Certificate Image */}
//       <img
//         src="https://imgcdn1.gempundit.com/media/wysiwyg/grsss-bg-img-040324.webp?imgeng=/w_960/f_webp/cmpr_20/s_7&aio-w=960"
//         alt="GRS Gemstone Certificate"
//         className="w-full max-w-3xl rounded-lg shadow-lg mb-6"
//       />

//       {/* Certification Logos */}
//       <div className="flex flex-wrap justify-center items-center gap-6">
//         <img src="https://imgcdn1.gempundit.com/media/wysiwyg/gjepc-icon.webp?imgeng=/w_175/f_webp/cmpr_20/s_7&aio-w=175" alt="GIEPC" className="h-12" />
//         <img src="https://imgcdn1.gempundit.com/media/wysiwyg/affiliate-icon02-2.webp?imgeng=/w_175/f_webp/cmpr_20/s_7&aio-w=175" alt="IGI" className="h-12" />
//         <img src="https://imgcdn1.gempundit.com/media/wysiwyg/logo-home-grs-logo-040324.webp?imgeng=/w_175/f_webp/cmpr_20/s_7&aio-w=175" alt="GRS" className="h-12" />
//         <img src="https://imgcdn1.gempundit.com/media/wysiwyg/GIA-logo-logo-040324.webp?imgeng=/w_175/f_webp/cmpr_20/s_7&aio-w=175" alt="GIA" className="h-12" />
//       </div>

//       {/* Title */}
//       <h2 className="mt-8 text-2xl font-semibold text-gray-800">
//         Certified Stones
//       </h2>
//     </div>
//   );
// }
// export default function GemstoneCertificate() {
//   return (
//     <div className="bg-white py-10 px-4 flex flex-col items-center">
//       {/* Certificate Image */}
//       <img
//         src="https://imgcdn1.gempundit.com/media/wysiwyg/grsss-bg-img-040324.webp?imgeng=/w_960/f_webp/cmpr_20/s_7&aio-w=960"
//         alt="GRS Gemstone Certificate"
//         className="w-full max-w-3xl rounded-lg shadow-lg mb-6"
//       />

//       {/* Certification Logos - inline */}
//       <div className="flex justify-center items-center space-x-6 flex-wrap md:flex-nowrap">
//         <img
//           src="https://imgcdn1.gempundit.com/media/wysiwyg/gjepc-icon.webp?imgeng=/w_175/f_webp/cmpr_20/s_7&aio-w=175"
//           alt="GIEPC"
//           className="h-12"
//         />
//         <img
//           src="https://imgcdn1.gempundit.com/media/wysiwyg/affiliate-icon02-2.webp?imgeng=/w_175/f_webp/cmpr_20/s_7&aio-w=175"
//           alt="IGI"
//           className="h-12"
//         />
//         <img
//           src="https://imgcdn1.gempundit.com/media/wysiwyg/logo-home-grs-logo-040324.webp?imgeng=/w_175/f_webp/cmpr_20/s_7&aio-w=175"
//           alt="GRS"
//           className="h-12"
//         />
//         <img
//           src="https://imgcdn1.gempundit.com/media/wysiwyg/GIA-logo-logo-040324.webp?imgeng=/w_175/f_webp/cmpr_20/s_7&aio-w=175"
//           alt="GIA"
//           className="h-12"
//         />
//       </div>

//       {/* Title */}
//       <h2 className="mt-8 text-2xl font-semibold text-gray-800">
//         Certified Stones
//       </h2>
//     </div>
//   );
// }

// export default function GemstoneCertificate() {
//   return (
//     <div className="bg-white py-10 px-4 flex flex-col items-center">
//       <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full">
//         {/* Certificate Image */}
//         <img
//           src="https://imgcdn1.gempundit.com/media/wysiwyg/grsss-bg-img-040324.webp?imgeng=/w_960/f_webp/cmpr_20/s_7&aio-w=960"
//           alt="GRS Gemstone Certificate"
//           className="w-full md:w-2/3 rounded-lg shadow-lg"
//         />

//         {/* Certification Logos - inline, vertically centered, no overlap */}
//         <div className="flex flex-col md:flex-row justify-center items-center md:h-full gap-4">
         
//           <img
//             src="https://imgcdn1.gempundit.com/media/wysiwyg/affiliate-icon02-2.webp?imgeng=/w_175/f_webp/cmpr_20/s_7&aio-w=175"
//             alt="IGI"
//             className="h-12"
//           />
//           <img
//             src="https://imgcdn1.gempundit.com/media/wysiwyg/logo-home-grs-logo-040324.webp?imgeng=/w_175/f_webp/cmpr_20/s_7&aio-w=175"
//             alt="GRS"
//             className="h-12"
//           />
//           <img
//             src="https://imgcdn1.gempundit.com/media/wysiwyg/GIA-logo-logo-040324.webp?imgeng=/w_175/f_webp/cmpr_20/s_7&aio-w=175"
//             alt="GIA"
//             className="h-12"
//           />
//         </div>
//       </div>

//       {/* Title */}
//       <h2 className="mt-8 text-2xl font-semibold text-gray-800">
//         Certified Stones
//       </h2>
//     </div>
//   );
// }





// import React from "react";
// import { motion } from "framer-motion";

// // Remaining feature set
// const features = [
//   {
//     icon: "💎",
//     title: "Global Certification",
//     desc: "Verified for trusted authenticity by international labs."
//   },
//   {
//     icon: "🛡",
//     title: "Premium Quality",
//     desc: "Each stone hand-selected for exceptional brilliance and purity."
//   }
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 1 } }
// };

// export default function CertifiedStonesSection() {
//   return (
//     <motion.section
//       className="relative bg-white min-h-screen flex flex-col md:flex-row items-center justify-center px-0 md:px-16 gap-0 overflow-hidden"
//       initial="hidden"
//       animate="visible"
//       variants={fadeUp}
//     >
//       {/* Modern Blurs for color accent */}
//       <div className="absolute left-[-50px] top-[-120px] w-[350px] h-[350px] rounded-full bg-pink-300 opacity-40 blur-3xl pointer-events-none"></div>
//       <div className="absolute right-[-100px] bottom-[-80px] w-[450px] h-[300px] rounded-full bg-rose-200 opacity-40 blur-2xl pointer-events-none"></div>
      
//       {/* Certificate Image */}
//       <motion.div
//         className="w-full md:w-1/2 flex items-center justify-center z-10 min-h-[80vh]"
//         style={{ minHeight: "90vh" }}
//         whileHover={{ scale: 1.04, boxShadow: "0 16px 64px rgba(200,0,66,0.14)" }}
//         transition={{ type: "spring", stiffness: 190 }}
//       >
//         <motion.img
//           src="https://imgcdn1.gempundit.com/media/wysiwyg/grsss-bg-img-040324.webp?imgeng=/w_960/f_webp/cmpr_20/s_7&aio-w=960"
//           alt="Gemstone Certificate"
//           className="bg-white shadow-2xl rounded-2xl border-4 border-pink-200 w-auto max-h-[90vh] object-contain"
//           initial={{ opacity: 0, scale: 0.93 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         />
//       </motion.div>
//       {/* Info & Features */}
//       <motion.div
//         className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left gap-8 px-6 z-10"
//         initial="hidden"
//         animate="visible"
//         variants={fadeUp}
//         transition={{ duration: 1.2 }}
//       >
//         <motion.h2
//           className="font-extrabold text-pink-600 text-4xl md:text-5xl drop-shadow-md mt-8 md:mt-0"
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           Certified Stones
//         </motion.h2>
//         <motion.p
//           className="text-lg md:text-2xl text-gray-700 font-medium max-w-md"
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//         >
//           Discover certified gemstones authenticated by global laboratories, quality beyond compare.
//         </motion.p>
//         {/* CTA Buttons */}
//         {/* <div className="flex gap-4 mt-2">
//           <motion.a
//             href="#read-more"
//             className="px-8 py-3 rounded-xl bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition border border-pink-100"
//             whileTap={{ scale: 0.98 }}
//           >
//             Read More
//           </motion.a>
//           <motion.a
//             href="#shop-now"
//             className="px-8 py-3 rounded-xl bg-white text-pink-600 font-semibold shadow-md border border-pink-300 hover:bg-pink-50 hover:scale-105 hover:shadow-lg transition"
//             whileTap={{ scale: 0.98 }}
//           >
//             Shop Now
//           </motion.a>
//         </div> */}
//         {/* Features */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full max-w-xl">
//           {features.map(({ icon, title, desc }, i) => (
//             <motion.div
//               key={title}
//               className="flex flex-col items-center p-7 bg-white/90 rounded-2xl shadow border border-pink-100 hover:bg-pink-50 transition duration-300"
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
//             >
//               <div className="text-3xl mb-1">{icon}</div>
//               <div className="font-bold text-pink-600 text-lg">{title}</div>
//               <div className="text-gray-600 text-sm mt-1">{desc}</div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </motion.section>
//   );
// }






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