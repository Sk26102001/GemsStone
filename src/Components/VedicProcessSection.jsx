// import React from "react";

// const steps = [
//   { icon: '💎', title: 'Gemstone Selection', desc: 'Based on your Kundali' },
//   { icon: '💧', title: 'Purification', desc: 'Ganga Jal & Panchamrit' },
//   { icon: '🔱', title: 'Energization', desc: 'Vedic Mantra Jap in Kashi' },
//   { icon: '📜', title: 'Packaging', desc: 'With Lab Certificate & Energization Proof' },
//   { icon: '🚚', title: 'Delivery', desc: 'Shipped Worldwide with Blessings' },
// ];

// export default function VedicProcessSection() {
//   return (
//     <section className="bg-white py-16 px-4 relative overflow-hidden">
//       {/* Background animation placeholder */}
//       <div className="absolute inset-0 opacity-20 pointer-events-none">
//         <img
//           src="/images/vedic-yagya.gif" // replace with your soft mantra/Yagya GIF
//           alt="Yagya Animation"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="relative max-w-6xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-green-800">
//           🌿 Sacred Process of Energizing Your Gemstone
//         </h2>

//         <div className="grid md:grid-cols-5 gap-8 text-center">
//           {steps.map((step, idx) => (
//             <div
//               key={step.title}
//               className={`bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300 animate-fadeIn`} 
//               style={{ animationDelay: `${idx * 0.2}s` }}
//             >
//               <div className="text-5xl mb-4 animate-bounce">{step.icon}</div>
//               <h3 className="font-semibold text-lg mb-2 text-gray-800">{step.title}</h3>
//               <p className="text-sm text-gray-600">{step.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// 

import React from "react";

const steps = [
  { icon: "💎", title: "Gemstone Selection", desc: "Based on your Kundali" },
  { icon: "💧", title: "Purification", desc: "Ganga Jal & Panchamrit" },
  { icon: "🔱", title: "Energization", desc: "Vedic Mantra Jap in Kashi" },
  { icon: "📜", title: "Packaging", desc: "With Lab Certificate & Energization Proof" },
  { icon: "🚚", title: "Delivery", desc: "Shipped Worldwide with Blessings" },
];

export default function VedicProcessSection() {
  return (
    <section className="flex flex-col md:flex-row w-full overflow-hidden bg-white py-10 md:py-14">
      {/* Left: Background Video */}
      <div className="relative w-full md:w-[45%] h-[280px] md:h-[65vh] mx-auto rounded-3xl overflow-hidden shadow-lg">
        <video
          src="yaga.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Right: Content Section */}
      <div className="w-full md:w-[55%] flex flex-col justify-center px-6 py-10 md:py-0">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left mb-10">
          🌿 Sacred Process of Energizing Your Gemstone
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 text-center md:text-left">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="text-5xl mb-3">{step.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
              <p className="text-sm text-gray-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
