// import React from "react";
// import { CheckCircle } from "lucide-react";

// const MakingProcess = () => {
//   const steps = [
//     { id: 1, title: "Gem Selection", desc: "We handpick natural, high-quality gemstones from trusted sources." },
//     { id: 2, title: "Purification", desc: "Each gem is purified using sacred mantras and Ganga Jal rituals." },
//     { id: 3, title: "Energization in Kashi", desc: "Our Vedic Acharyas energize every gem to unlock its divine power." },
//     { id: 4, title: "Certification", desc: "Each gemstone is certified for authenticity and purity." },
//   ];

//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-yellow-800 mb-10">
//           🔱 How Your Gemstone is Made Sacred
//         </h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {steps.map((step) => (
//             <div
//               key={step.id}
//               className="p-6 rounded-2xl shadow-md border border-yellow-100 hover:shadow-lg transition"
//             >
//               <CheckCircle className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold text-yellow-800 mb-2">
//                 {step.title}
//               </h3>
//               <p className="text-gray-700">{step.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MakingProcess;


// import React from "react";
// import {
//   Gem,
//   Droplets,
//   Sun,
//   BadgeCheck,
// } from "lucide-react"; // 👈 icons import kiye

// const MakingProcess = () => {
//   const steps = [
//     {
//       id: 1,
//       title: "Gem Selection",
//       desc: "We handpick natural, high-quality gemstones from trusted sources.",
//       icon: <Gem className="w-10 h-10 text-yellow-500 mx-auto mb-4" />,
//     },
//     {
//       id: 2,
//       title: "Purification",
//       desc: "Each gem is purified using sacred mantras and Ganga Jal rituals.",
//       icon: <Droplets className="w-10 h-10 text-yellow-500 mx-auto mb-4" />,
//     },
//     {
//       id: 3,
//       title: "Energization in Kashi",
//       desc: "Our Vedic Acharyas energize every gem to unlock its divine power.",
//       icon: <Sun className="w-10 h-10 text-yellow-500 mx-auto mb-4" />,
//     },
//     {
//       id: 4,
//       title: "Certification",
//       desc: "Each gemstone is certified for authenticity and purity.",
//       icon: <BadgeCheck className="w-10 h-10 text-yellow-500 mx-auto mb-4" />,
//     },
//   ];

//   return (
//     <section className="bg-white py-16">
//       {/* ===== Video Section ===== */}
//       <div className="max-w-6xl mx-auto px-4 mb-12">
//         <div className="rounded-2xl overflow-hidden shadow-lg border border-yellow-200">
//           <video
//             src="gems.mp4" // 👈 apna video public folder me rakho (public/gem.mp4)
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-full h-[300px] md:h-[450px] object-cover"
//           />
//         </div>
//       </div>

//       {/* ===== Text + Steps Section ===== */}
//       <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-yellow-800 mb-10">
//           🔱 How Your Gemstone is Made Sacred
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {steps.map((step) => (
//             <div
//               key={step.id}
//               className="p-6 rounded-2xl shadow-md border border-yellow-100 hover:shadow-lg transition transform hover:-translate-y-1 bg-white"
//             >
//               {step.icon}
//               <h3 className="text-xl font-semibold text-yellow-800 mb-2">
//                 {step.title}
//               </h3>
//               <p className="text-gray-700">{step.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MakingProcess;






import React from "react";
import {
  Gem,
  Droplets,
  Sun,
  BadgeCheck,
  Video, // Adding a new icon for the video section
} from "lucide-react";

const MakingProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Gem Selection",
      desc: "We handpick natural, high-quality gemstones from trusted sources.",
      icon: <Gem className="w-10 h-10 text-yellow-600 mx-auto mb-4" />,
    },
    {
      id: 2,
      title: "Purification",
      desc: "Each gem is purified using sacred mantras and Ganga Jal rituals.",
      icon: <Droplets className="w-10 h-10 text-yellow-600 mx-auto mb-4" />,
    },
    {
      id: 3,
      title: "Energization in Kashi",
      desc: "Our Vedic Acharyas energize every gem to unlock its divine power.",
      icon: <Sun className="w-10 h-10 text-yellow-600 mx-auto mb-4" />,
    },
    {
      id: 4,
      title: "Certification",
      // desc: "Each gemstone is certified for authenticity and purity.",
      desc: "Each gemstone is certified for authenticity and purity by recognized labs.",
      icon: <BadgeCheck className="w-10 h-10 text-yellow-600 mx-auto mb-4" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      {/* ===== Video Section Title and Container ===== */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-12">
        <p className="text-sm font-semibold text-yellow-600 uppercase tracking-wider mb-2">
          Ancient Wisdom, Modern Craftsmanship
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Witness the Sacred Transformation
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          See the journey of your gemstone from its natural state to a fully energized, sacred talisman.
        </p>
      </div>

      {/* Changes for Video Width:
        1. Changed 'max-w-6xl' to 'max-w-full' for a full-width experience within the section padding.
        2. Increased video height for a more cinematic feel.
      */}
      <div className="max-w-7xl mx-auto px-4 mb-16 md:mb-20">
        <div className="w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-100/70">
          <video
            src="gems.mp4" // Ensure this path is correct
            autoPlay
            muted
            loop
            playsInline
            controls // Added controls for better user experience
            // Increased height on larger screens
            className="w-full h-[350px] md:h-[550px] object-cover" 
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* --- */}

      {/* ===== Steps Section ===== */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-800 mb-12">
          🔱 The Four Pillars of Sacred Gemstone Making
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              // Enhanced styling: background color, slight shadow, better border
              className="p-8 rounded-xl bg-white shadow-xl border border-yellow-200/50 flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-2xl"
            >
              {step.icon}
              <h3 className="text-xl font-bold text-yellow-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-700 font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MakingProcess;