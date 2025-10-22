// import React from "react";

// const gemstones = [
//   {
//     name: "YELLOW SAPPHIRE",
//     hindi: "(PUKHRAJ)",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/yellow_sapphire.png",
//   },
//   {
//     name: "RUBY",
//     hindi: "(MANIK)",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/ruby.png",
//   },
//   {
//     name: "RED CORAL",
//     hindi: "",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/red_coral.png",
//   },
//   {
//     name: "BLUE SAPPHIRE",
//     hindi: "(NEELAM)",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/neelam.png",
//   },
//   {
//     name: "HESSONITE GARNET",
//     hindi: "",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/gomet.png",
//   },
//   {
//     name: "EMERALD",
//     hindi: "(PANNA)",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/emerald.png",
//   },
//   {
//     name: "OPAL",
//     hindi: "",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/opal.png",
//   },
//   {
//     name: "PEARL",
//     hindi: "",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/pearl.png",
//   },
// ];

// const GemstoneGrid = () => {
//   return (
//     <section className="py-10 bg-white text-center">
//       <h2 className="text-3xl font-semibold text-gray-800 mb-8">
//         <span className="relative inline-block">
//           Natural Gemstone
//           <span className="absolute left-0 -bottom-1 w-full h-1 bg-orange-500 rounded"></span>
//         </span>
//       </h2>

//       <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 px-4 md:px-16">
//         {gemstones.map((gem, index) => (
//           <div
//             key={index}
//             className="relative rounded-2xl overflow-hidden shadow-md group"
//           >
//             <img
//               src={gem.src}
//               alt={gem.name}
//               className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
//             />
//             <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white font-semibold">
//               <p>{gem.name}</p>
//               {gem.hindi && <p className="text-sm">{gem.hindi}</p>}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default GemstoneGrid

// import React from "react";

// const gemstones = [
//   { src: "https://cdn.dhanshreegems.com/wysiwyg/home/yellow_sapphire.png" },
//   { src: "https://cdn.dhanshreegems.com/wysiwyg/home/ruby.png" },
//   { src: "https://cdn.dhanshreegems.com/wysiwyg/home/red_coral.png" },
//   { src: "https://cdn.dhanshreegems.com/wysiwyg/home/neelam.png" },
//   { src: "https://cdn.dhanshreegems.com/wysiwyg/home/gomet.png" },
//   { src: "https://cdn.dhanshreegems.com/wysiwyg/home/emerald.png" },
//   { src: "https://cdn.dhanshreegems.com/wysiwyg/home/opal.png" },
//   { src: "https://cdn.dhanshreegems.com/wysiwyg/home/pearl.png" },
// ];

// const GemstoneGrid = () => {
//   return (
//     <section className="py-12 bg-gradient-to-b from-yellow-50 via-white to-yellow-50 text-center">
//       {/* Decorative Header */}
//       <div className="w-full py-8 flex flex-col items-center space-y-4">
//         {/* Decorative Title */}
//         <div className="flex items-center space-x-4">
//           <span className="text-red-500 text-2xl">🍃</span>
//           <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wide text-gray-800">
//             Natural Gemstones
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
//       <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 px-4 md:px-16 mt-6">
//         {gemstones.map((gem, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 p-4"
//           >
//             <div className="w-full h-44 flex items-center justify-center bg-yellow-50 rounded-xl p-2">
//               <img
//                 src={gem.src}
//                 alt={`Gemstone ${index + 1}`}
//                 className="object-contain w-full h-full"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default GemstoneGrid;import React from "react";
// import React from "react";
// const gemstones = [
//   {
//     name: "YELLOW SAPPHIRE",
//     hindi: "(PUKHRAJ)",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/yellow_sapphire.png",
//   },
//   {
//     name: "RUBY",
//     hindi: "(MANIK)",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/ruby.png",
//   },
//   {
//     name: "RED CORAL",
//     hindi: "",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/red_coral.png",
//   },
//   {
//     name: "BLUE SAPPHIRE",
//     hindi: "(NEELAM)",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/neelam.png",
//   },
//   {
//     name: "HESSONITE GARNET",
//     hindi: "",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/gomet.png",
//   },
//   {
//     name: "EMERALD",
//     hindi: "(PANNA)",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/emerald.png",
//   },
//   {
//     name: "OPAL",
//     hindi: "",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/opal.png",
//   },
//   {
//     name: "PEARL",
//     hindi: "",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/pearl.png",
//   },
// ];

// const GemstoneGrid = () => {
//   return (
//     <section className="py-10 bg-white text-center">
//       <h2 className="text-3xl font-semibold text-gray-800 mb-8">
//         <span className="relative inline-block">
//           Natural Gemstone
//           <span className="absolute left-0 -bottom-1 w-full h-1 bg-orange-500 rounded"></span>
//         </span>
//       </h2>

//       <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 px-4 md:px-16">
//         {gemstones.map((gem, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
//           >
//             <div className="w-full h-48 flex items-center justify-center">
//               <img
//                 src={gem.src}
//                 alt={gem.name}
//                 className="object-contain w-full h-full"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default GemstoneGrid;





// import React from "react";

// const gemstones = [
//   {
//     name: "YELLOW SAPPHIRE",
//     hindi: "(PUKHRAJ)",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/yellow_sapphire.png",
//   },
//   {
//     name: "RUBY",
//     hindi: "(MANIK)",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/ruby.png",
//   },
//   {
//     name: "RED CORAL",
//     hindi: "",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/red_coral.png",
//   },
//   {
//     name: "BLUE SAPPHIRE",
//     hindi: "(NEELAM)",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/neelam.png",
//   },
//   {
//     name: "HESSONITE GARNET",
//     hindi: "",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/gomet.png",
//   },
//   {
//     name: "EMERALD",
//     hindi: "(PANNA)",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/emerald.png",
//   },
//   {
//     name: "OPAL",
//     hindi: "",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/opal.png",
//   },
//   {
//     name: "PEARL",
//     hindi: "",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/pearl.png",
//   },

// ];

// const GemstoneGrid = () => {
//   return (
//     <section className="py-10 bg-white text-center">
//       {/* Updated Decorative Headline */}
//       <div className="flex items-center justify-center mb-8 space-x-4">
//         <span className="text-red-500 text-2xl">🍃</span>
//         <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-wide text-gray-800">
//           Natural Gemstones
//         </h2>
//         <span className="text-red-500 text-2xl">🍃</span>
//       </div>

//       <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 px-4 md:px-10">
//         {gemstones.map((gem, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
//           >
//             <div className="w-full h-48 flex items-center justify-center">
//               <img
//                 src={gem.src}
//                 alt={gem.name}
//                 className="object-contain w-full h-full "
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//       <div><button type="button" className=" font-semibold text-2xl py-2 px-4 bg-gradient-to-r from-red-200 rounded-2xl to-orange-100 hover:bg-gradient-to-r from-red-200 rounded-2xl to-orange-100 ">View more</button></div>
//     </section>
//   );
// };

// export default GemstoneGrid;











import React, { useState } from "react";

// Full list of gemstones
const allGemstones = [
  {
    name: "YELLOW SAPPHIRE",
    hindi: "(PUKHRAJ)",
    src: "https://cdn.dhanshreegems.com/wysiwyg/home/yellow_sapphire.png",
  },
  {
    name: "RUBY",
    hindi: "(MANIK)",
    src: "https://cdn.dhanshreegems.com/wysiwyg/home/ruby.png",
  },
  {
    name: "RED CORAL",
    hindi: "(MOONGA)",
    src: "https://cdn.dhanshreegems.com/wysiwyg/home/red_coral.png",
  },
  {
    name: "BLUE SAPPHIRE",
    hindi: "(NEELAM)",
    src: "https://cdn.dhanshreegems.com/wysiwyg/home/neelam.png",
  },
  {
    name: "HESSONITE GARNET",
    hindi: "(GOMED)",
    src: "https://cdn.dhanshreegems.com/wysiwyg/home/gomet.png",
  },
  {
    name: "EMERALD",
    hindi: "(PANNA)",
    src: "https://cdn.dhanshreegems.com/wysiwyg/home/emerald.png",
  },
  {
    name: "OPAL",
    hindi: "",
    src: "https://cdn.dhanshreegems.com/wysiwyg/home/opal.png",
  },
  {
    name: "PEARL",
    hindi: "(MOTI)",
    src: "https://cdn.dhanshreegems.com/wysiwyg/home/pearl.png",
  },
  // --- Additional Gems for 'View More' ---
  {
    name: "CAT'S EYE",
    hindi: "(LEHSUNIA)",
    src: "./Copilot_20251022_182656 - Edited.png",
  },
  {
    name: "DIAMOND",
    hindi: "(HEERA)",
    src: "./Copilot_20251022_182045 - Edited.png",
  },
  // {
  //   name: "TANZANITE",
  //   hindi: "",
  //   src: "https://cdn.dhanshreegems.com/wysiwyg/new/tanzanite_gemstone.png",
  // },
  // {
  //   name: "GARNET",
  //   hindi: "",
  //   src: "https://cdn.dhanshreegems.com/wysiwyg/new/garnet_gemstone.png",
  // },
];

// --- Component Start ---

const GemstoneGrid = () => {
  const initialCount = 8;
  const loadIncrement = 4;

  const [visibleCount, setVisibleCount] = useState(initialCount);

  const loadMore = () => {
    setVisibleCount((prevCount) =>
      Math.min(prevCount + loadIncrement, allGemstones.length)
    );
  };

  const visibleGems = allGemstones.slice(0, visibleCount);
  const showLoadMoreButton = visibleCount < allGemstones.length;

  return (
    <section className="py-10 bg-white text-center">
      {/* Updated Decorative Headline */}
      <div className="flex items-center justify-center mb-8 space-x-4">
        <span className="text-red-500 text-2xl">🍃</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-wide text-gray-800">
          Natural Gemstones
        </h2>
        <span className="text-red-500 text-2xl">🍃</span>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-8 px-4 md:px-10 ">
        {visibleGems.map((gem, index) => {
          // Conditional ClassName for newly loaded images (Fade-in effect)
          const isNewlyLoaded = index >= initialCount;
          const newGemClasses = isNewlyLoaded
            ? "animate-fadeIn duration-500"
            : "";

          // Conditional ClassName for Cat's Eye (rounded-xl)
          // We apply the border/padding to the image wrapper for visual effect here
          const catEyeWrapperClasses = gem.name === "CAT'S EYE" 
            ? "rounded-xl"
            : "";
          
          // Base item classes (only contains animation/hover now)
          const baseItemClasses = "flex flex-col items-center transition-transform duration-300 hover:scale-105";

          return (
            <div
              key={index}
              // Combined base item classes and the conditional animation class
              className={`${baseItemClasses} ${newGemClasses}`} 
            >
              {/* Image Container - Now includes Cat's Eye specific styling */}
              <div 
                className={`w-full h-48 flex items-center justify-center ${catEyeWrapperClasses}`}
              >
                <img
                  src={gem.src}
                  alt={gem.name}
                  // Removed rounded-xl from image itself to be consistent with wrapper styling
                  className="object-contain w-full h-full"
                />
              </div>
              {/* Removed <p> tags for name and hindi title */}
            </div>
          );
        })}
      </div>
      
      {/* View More Button */}
      {showLoadMoreButton && (
        <div className="text-center mt-8">
          <button
            type="button"
            onClick={loadMore}
            className="font-semibold text-lg md:text-xl py-3 px-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full shadow-lg hover:from-yellow-600 hover:to-orange-600 transition duration-300"
          >
            View More Gems 
          </button>
        </div>
      )}
      
      {/* Custom CSS for the fade-in effect */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default GemstoneGrid;