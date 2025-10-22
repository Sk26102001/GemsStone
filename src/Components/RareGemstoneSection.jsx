
// import React from "react";

// const rareGemstones = [
//   {
//     name: "Columbian Emerald",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/new/columbian_emerald.png",
//   },
//   {
//     name: "Kashmiri Neelam",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/new/kashmiri_neelam.png",
//   },
//   {
//     name: "Pink Sapphire",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/new/pink_sapphire.png",
//   },
//   {
//     name: "Burmese Ruby",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/new/burmese_ruby.png",
//   },
// ];

// const RareGemstoneSection = () => {
//   return (
//     <section className="py-12 bg-white text-center">
//       {/* Gemstone Grid */}
//       <div className="grid md:grid-cols-2 grid-cols-1 gap-8 px-4 md:px-20">
//         {rareGemstones.map((gem, index) => (
//           <div
//             key={index}
//             className="relative rounded-2xl overflow-hidden shadow-lg group"
//           >
//             <img
//               src={gem.src}
//               alt={gem.name}
//               className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default RareGemstoneSection;
// import React from "react";

// const rareGemstones = [
//   {
//     name: "Columbian Emerald",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/new/columbian_emerald.png",
//   },
//   {
//     name: "Kashmiri Neelam",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/new/kashmiri_neelam.png",
//   },
//   {
//     name: "Pink Sapphire",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/new/pink_sapphire.png",
//   },
//   {
//     name: "Burmese Ruby",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/new/burmese_ruby.png",
//   },
// ];

// const RareGemstoneSection = () => {
//   return (
//     <section className="py-12 bg-white text-center">
//       {/* Decorative Header */}
//       <div className="w-full bg-white py-8 flex flex-col items-center space-y-4">
//         {/* Decorative Title */}
//         <div className="flex items-center space-x-4">
//           {/* Left Icon */}
//           <span className="text-red-500 text-2xl">🍃</span>

//           {/* Title Text */}
//           <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wide text-gray-800">
//             Rare Gemstones
//           </h1>

//           {/* Right Icon */}
//           <span className="text-red-500 text-2xl">🍃</span>
//         </div>

//         {/* Gradient Bar */}
//         <div className="flex items-center space-x-2">
//           <div className="w-4 h-2 bg-red-500 rounded-sm shadow-md"></div>
//           <div className="w-48 h-2 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 rounded-full shadow-md"></div>
//           <div className="w-4 h-2 bg-red-500 rounded-sm shadow-md"></div>
//         </div>
//       </div>

//       {/* Gemstone Grid */}
//       <div className="grid md:grid-cols-2 grid-cols-1 gap-8 px-4 md:px-20 mt-6">
//         {rareGemstones.map((gem, index) => (
//           <div
//             key={index}
//             className="relative rounded-2xl overflow-hidden shadow-lg group bg-white"
//           >
//             <img
//               src={gem.src}
//               alt={gem.name}
//               className="w-full h-64 object-contain bg-white transform group-hover:scale-105 transition duration-500"
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-white/70 py-2 text-gray-800 font-semibold text-lg">
//               {gem.name}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default RareGemstoneSection;

// import React from "react";

// const rareGemstones = [
//   {
//     name: "Columbian Emerald",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/new/columbian_emerald.png",
//   },
//   {
//     name: "Kashmiri Neelam",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/new/kashmiri_neelam.png",
//   },
//   {
//     name: "Pink Sapphire",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/new/pink_sapphire.png",
//   },
//   {
//     name: "Burmese Ruby",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/new/burmese_ruby.png",
//   },
// ];

// const RareGemstoneSection = () => {
//   return (
//     <section className="py-12 bg-white text-center">
//       {/* Decorative Header */}
//       <div className="w-full py-8 flex flex-col items-center space-y-4">
//         {/* Decorative Title */}
//         <div className="flex items-center space-x-4">
//           <span className="text-red-500 text-2xl">🍃</span>
//           <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wide text-gray-800">
//             Rare Gemstones
//           </h1>
//           <span className="text-red-500 text-2xl">🍃</span>
//         </div>

//         {/* Gradient Bar */}
//         <div className="flex items-center space-x-2">
//           <div className="w-4 h-2 bg-red-500 rounded-sm shadow-md"></div>
//           <div className="w-48 h-2 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 rounded-full shadow-md"></div>
//           <div className="w-4 h-2 bg-red-500 rounded-sm shadow-md"></div>
//         </div>
//       </div>

//       {/* Gemstone Grid */}
//       <div className="grid md:grid-cols-2 grid-cols-1 gap-8 px-4 md:px-20 mt-6">
//         {rareGemstones.map((gem, index) => (
//           <div
//             key={index}
//             className="rounded-2xl overflow-hidden shadow-lg group bg-white"
//           >
//             <img
//               src={gem.src}
//               alt={gem.name}
//               className="w-full h-64 object-contain transform group-hover:scale-105 transition duration-500"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default RareGemstoneSection;






import React from "react";

const rareGemstones = [
  {
    name: "Columbian Emerald",
    src: "https://cdn.dhanshreegems.com/wysiwyg/new/columbian_emerald.png",
  },
  {
    name: "Kashmiri Neelam",
    src: "https://cdn.dhanshreegems.com/wysiwyg/new/kashmiri_neelam.png",
  },
  {
    name: "Pink Sapphire",
    src: "https://cdn.dhanshreegems.com/wysiwyg/new/pink_sapphire.png",
  },
  {
    name: "Burmese Ruby",
    src: "https://cdn.dhanshreegems.com/wysiwyg/new/burmese_ruby.png",
  },
];

const RareGemstoneSection = () => {
  return (
    <section className="py-12 bg-white text-center">
      {/* Decorative Header */}
      <div className="w-full py-8 flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-4">
          <span className="text-red-500 text-2xl">🍃</span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wide text-gray-800">
            Rare Gemstones
          </h1>
          <span className="text-red-500 text-2xl">🍃</span>
        </div>

        {/* Gradient Bar */}
        <div className="flex items-center space-x-2">
          <div className="w-4 h-2 bg-red-500 rounded-sm shadow-md"></div>
          <div className="w-48 h-2 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 rounded-full shadow-md"></div>
          <div className="w-4 h-2 bg-red-500 rounded-sm shadow-md"></div>
        </div>
      </div>

      {/* Gemstone Grid */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 px-4 md:px-10 mt-6">
        {rareGemstones.map((gem, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-2xl shadow-lg inline-block transition-transform duration-300 hover:-translate-y-1"
          >
            <img
              src={gem.src}
              alt={gem.name}
              className="object-cover h-full w-full transform group-hover:scale-110 transition-transform duration-500 ease-out"
            />
            <h3 className="text-lg font-semibold text-gray-800 mt-3">
              {gem.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RareGemstoneSection;







// import React from "react";

// const rareGemstones = [
//   {
//     name: "Columbian Emerald",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/new/columbian_emerald.png",
//   },
//   {
//     name: "Kashmiri Neelam",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/new/kashmiri_neelam.png",
//   },
//   {
//     name: "Pink Sapphire",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/new/pink_sapphire.png",
//   },
//   {
//     name: "Burmese Ruby",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/new/burmese_ruby.png",
//   },
// ];

// const RareGemstoneSection = () => {
//   return (
//     <section className="py-12 bg-white text-center">
//       {/* Decorative Header */}
//       <div className="w-full py-8 flex flex-col items-center space-y-4">
//         <div className="flex items-center space-x-4">
//           <span className="text-red-500 text-2xl">🍃</span>
//           <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wide text-gray-800">
//             Rare Gemstones
//           </h1>
//           <span className="text-red-500 text-2xl">🍃</span>
//         </div>

//         {/* Gradient Bar */}
//         <div className="flex items-center space-x-2">
//           <div className="w-4 h-2 bg-red-500 rounded-sm shadow-md"></div>
//           <div className="w-48 h-2 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 rounded-full shadow-md"></div>
//           <div className="w-4 h-2 bg-red-500 rounded-sm shadow-md"></div>
//         </div>
//       </div>

//       {/* Gemstone Grid */}
//       <div className="grid md:grid-cols-2 grid-cols-1 gap-8 px-4 md:px-10 mt-6">
//         {rareGemstones.map((gem, index) => (
//           <div
//             key={index}
//             className="group rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"
//           >
//             <div className="aspect-square overflow-hidden bg-gray-50">
//               <img
//                 src={gem.src}
//                 alt={gem.name}
//                 className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500 ease-out"
//               />
//             </div>
//             <h3 className="text-lg font-semibold text-gray-800 mt-3">
//               {gem.name}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default RareGemstoneSection;
