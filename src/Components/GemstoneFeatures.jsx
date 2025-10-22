// import React from "react";

// const features = [
//   {
//     image: "https://cdn.dhanshreegems.com/wysiwyg/natural_gemstones_1_.png",
//     title: "Natural Gemstones",
//     desc: "Unheated & Untreated",
//   },
//   {
//     image: "https://cdn.dhanshreegems.com/wysiwyg/lab_certified.png",
//     title: "Lab Certified",
//     desc: "Get Authenticity Proof",
//   },
//   {
//     image: "https://cdn.dhanshreegems.com/wysiwyg/affordable_range.png",
//     title: "Affordable Range",
//     desc: "Wide Variety",
//   },
//   {
//     image: "https://cdn.dhanshreegems.com/wysiwyg/100__Secure_payment.png",
//     title: "100% Payment Secure",
//     desc: "Secure Payment",
//   },
//   {
//     image: "https://cdn.dhanshreegems.com/wysiwyg/world_wide_shipping.png",
//     title: "World Wide Shipping",
//     desc: "Shipping World Wide",
//   },
//   {
//     image: "https://cdn.dhanshreegems.com/wysiwyg/Direct_from_mines_1.png",
//     title: "100% Pure",
//     desc: "Direct From Mines",
//   },
// ];

// export default function GemstoneFeatures() {
//   return (
//     <section className="bg-white py-10">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center px-4">
//         {features.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-b from-white to-amber-50 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
//           >
//             <div className="mb-3 p-3 bg-amber-100 rounded-full">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-10 h-10 object-contain"
//               />
//             </div>
//             <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
//             <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// import React from "react";

// const features = [
//   {
//     image: "https://cdn.dhanshreegems.com/wysiwyg/natural_gemstones_1_.png",
//     title: "Natural Gemstones",
//     desc: "Unheated & Untreated",
//   },
//   {
//     image: "https://cdn.dhanshreegems.com/wysiwyg/lab_certified.png",
//     title: "Lab Certified",
//     desc: "Get Authenticity Proof",
//   },
//   {
//     image: "https://cdn.dhanshreegems.com/wysiwyg/affordable_range.png",
//     title: "Affordable Range",
//     desc: "Wide Variety",
//   },
//   {
//     image: "https://cdn.dhanshreegems.com/wysiwyg/100__Secure_payment.png",
//     title: "100% Payment Secure",
//     desc: "Secure Payment",
//   },
//   {
//     image: "https://cdn.dhanshreegems.com/wysiwyg/world_wide_shipping.png",
//     title: "World Wide Shipping",
//     desc: "Shipping World Wide",
//   },
//   {
//     image: "https://cdn.dhanshreegems.com/wysiwyg/Direct_from_mines_1.png",
//     title: "100% Pure",
//     desc: "Direct From Mines",
//   },
// ];

// export default function GemstoneFeatures() {
//   return (
//     <section className="bg-white py-10">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center px-4">
//         {features.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-b from-white to-amber-50 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
//           >
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-14 h-14 object-contain mb-3"
//             />
//             <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
//             <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



// import React from "react";

// const eliteFeatures = [
//   {
//     image: "https://cdn.dhanshreegems.com/wysiwyg/natural_gemstones_1_.png",
//     title: "100% Natural & Untreated",
//     desc: "Every gemstone is guaranteed to be free from heat or chemical enhancements, preserving its true, natural beauty.",
//   },
//   {
//     image: "https://cdn.dhanshreegems.com/wysiwyg/lab_certified.png",
//     title: "Certified Purity & Origin",
//     desc: "We provide official lab certification from leading authorities to assure you of the stone's quality and authenticity.",
//   },
//   {
//     image: "https://cdn.dhanshreegems.com/wysiwyg/Direct_from_mines_1.png",
//     title: "Ethical Direct Sourcing",
//     desc: "By sourcing directly from vetted mines, we ensure ethical practices and offer you unmatched value and transparency.",
//   },
//   {
//     image: "https://cdn.dhanshreegems.com/wysiwyg/world_wide_shipping.png",
//     title: "Fully Insured Global Transit",
//     desc: "Enjoy peace of mind knowing your precious investment is fully insured and handled with care until it reaches your door.",
//   },
// ];

// export default function EliteGemstoneFeatures() {
//   return (
//     <section className="bg-gray-50 py-16 sm:py-24">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Section Header - Focused and High-Impact */}
//         <div className="text-center mb-16 max-w-3xl mx-auto">
//           <p className="text-base font-medium text-gray-600 uppercase tracking-widest mb-2">
//             Our Foundation
//           </p>
//           <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
//             The Pillars of Our Promise
//           </h2>
//         </div>

//         {/* Feature Grid - Side-Aligned & Spaced */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
//           {eliteFeatures.map((item) => (
//             <div 
//               key={item.title} 
//               className="flex items-start space-x-6 p-4 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg"
//             >
//               {/* Icon / Image Container - Clean and Prominent */}
//               <div className="flex-shrink-0 w-12 h-12 mt-1">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-contain filter grayscale opacity-75 hover:opacity-100 transition-opacity"
//                 />
//               </div>

//               {/* Text Content */}
//               <div>
//                 <h3 className="text-xl font-bold text-gray-900 leading-snug">
//                   {item.title}
//                 </h3>
//                 <p className="mt-2 text-base text-gray-600">
//                   {item.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Added Footer Element for Trust */}
//         <div className="mt-16 pt-8 border-t border-gray-100 text-center">
//              <p className="text-sm text-gray-500">
//                 Browse our curated collection and experience the difference true quality makes.
//             </p>
//         </div>
//       </div>
//     </section>
//   );
// }







import React from "react";
import { motion } from "framer-motion";

const eliteFeatures = [
  {
    image: "https://cdn.dhanshreegems.com/wysiwyg/natural_gemstones_1_.png",
    title: "100% Natural & Untreated",
    desc: "Every gemstone is guaranteed to be free from heat or chemical enhancements, preserving its true, natural beauty.",
  },
  {
    image: "https://cdn.dhanshreegems.com/wysiwyg/lab_certified.png",
    title: "Certified Purity & Origin",
    desc: "We provide official lab certification from leading authorities to assure you of the stone's quality and authenticity.",
  },
  {
    image: "https://cdn.dhanshreegems.com/wysiwyg/Direct_from_mines_1.png",
    title: "Ethical Direct Sourcing",
    desc: "By sourcing directly from vetted mines, we ensure ethical practices and offer you unmatched value and transparency.",
  },
  {
    image: "https://cdn.dhanshreegems.com/wysiwyg/world_wide_shipping.png",
    title: "Fully Insured Global Transit",
    desc: "Enjoy peace of mind knowing your precious investment is fully insured and handled with care until it reaches your door.",
  },
];

export default function EliteGemstoneFeatures() {
  return (
    <section className="relative bg-gradient-to-b from-amber-50 via-white to-amber-100 py-20 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,215,150,0.2),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase font-medium tracking-widest text-amber-600 mb-3">
            Our Foundation
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            The Pillars of Our Promise
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Experience gemstone perfection through integrity, authenticity, and excellence.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {eliteFeatures.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex items-start space-x-6 bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-amber-100 hover:shadow-xl hover:bg-white transition-all duration-300"
            >
              {/* Image with glow */}
              <div className="relative flex-shrink-0 w-16 h-16">
                <div className="absolute inset-0 bg-amber-100 rounded-full blur-lg opacity-40" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="relative w-16 h-16 object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-amber-200 text-center"
        >
          <p className="text-sm text-gray-600">
            Browse our curated collection and experience the difference true quality makes.
          </p>
          <button className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white font-medium shadow-md hover:from-amber-500 hover:to-orange-600 transition-all duration-300">
            Explore Collection
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}
