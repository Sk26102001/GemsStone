

// import React from "react";
// import { useNavigate } from 'react-router-dom';
// import { Gem, } from "lucide-react";

// // Full list of gemstones (data remains the same)
// const allGemstones = [
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
//     hindi: "(MOONGA)",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/red_coral.png",
//   },
//   {
//     name: "BLUE SAPPHIRE",
//     hindi: "(NEELAM)",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/neelam.png",
//   },
//   {
//     name: "HESSONITE GARNET",
//     hindi: "(GOMED)",
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
//     hindi: "(MOTI)",
//     src: "https://cdn.dhanshreegems.com/wysiwyg/home/pearl.png",
//   },
// ];

// const GemstoneGrid = () => {
//     const navigate = useNavigate();
    
//     // **1. Utility function to create a clean URL slug**
//     const createGemstoneSlug = (name) => name.toLowerCase().replace(/ /g, '-');

//     // **2. Navigation handler function**
//     const handleGemstoneClick = (gemName) => {
//         const slug = createGemstoneSlug(gemName);
//         // Navigate to the dynamic detail page route, e.g., /gemstone-detail/yellow-sapphire
//       navigate(`/GemsStone/gemstone-detail/${slug}`);


//     };

//   return (
//     <section className="py-10 bg-white text-center mt-2">
//       {/* Decorative Heading */}
//       <div className="w-full py-8 flex flex-col items-center space-y-2">
//         <div className="flex items-center space-x-2">
//           <span className="text-red-500 text-2xl"><Gem  className="h-10 w-10 text-blue-300"/></span>
//           <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wide text-[#6b3e08] text-center">
//             Natural Gemstones
//           </h1>
//           <span className="text-red-500 text-2xl">🍃</span>
//         </div>

//         {/* Gradient Bar */}
//         <div className="flex items-center space-x-2">
//           <div className="w-4 h-2 bg-red-500 rounded-sm shadow-md"></div>
//           <div className="w-48 h-2 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 rounded-full shadow-md"></div>
//           <div className="w-4 h-2 bg-red-500 rounded-sm shadow-md"></div>
//         </div>
//       </div>

//       {/* Gemstone Grid */}
//       <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 px-4 md:px-10">
//         {allGemstones.map((gem, index) => (
//           <div
//             key={index}
//              // **ADDED onClick HANDLER HERE**
//              onClick={() => handleGemstoneClick(gem.name)}
//              // **ADDED Tailwind class for visual feedback**
// //             className="flex flex-col items-center transition-transform duration-300 hover:sale-105 **cursor-pointer**"
// className="flex flex-col items-center transition-transform duration-300 hover:scale-105 cursor-pointer"

//           >
//             <div className="w-full h-30 flex items-center justify-center">
//               <img
//                 src={gem.src}
//                 alt={gem.name}
//                 className="object-contain w-full h-full"
//               />
//             </div>
//             <h2 className="mt-2 text-lg font-semibold text-[#6b3e08]">
//               {gem.name}
//             </h2>
//             <p className="text-sm text-gray-500">{gem.hindi}</p>
//           </div>
//         ))}
//       </div>

//       {/* View More Button (Navigation remains the same) */}
//       <div className="text-center mt-10">
//         <button
//         onClick={() => navigate('/GemsStone/subpage')}
//         className="font-semibold text-lg md:text-xl py-3 px-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full shadow-lg hover:from-yellow-600 hover:to-orange-600 transition duration-300"
//       >
//         View More
//       </button>
//       </div>
//     </section>
//   );
// };

// export default GemstoneGrid;



import React from "react";
import { useNavigate } from "react-router-dom";
import { Gem } from "lucide-react";

const allGemstones = [
  { name: "YELLOW SAPPHIRE", hindi: "(PUKHRAJ)", src: "https://cdn.dhanshreegems.com/wysiwyg/home/yellow_sapphire.png" },
  { name: "RUBY", hindi: "(MANIK)", src: "https://cdn.dhanshreegems.com/wysiwyg/home/ruby.png" },
  { name: "RED CORAL", hindi: "(MOONGA)", src: "https://cdn.dhanshreegems.com/wysiwyg/home/red_coral.png" },
  { name: "BLUE SAPPHIRE", hindi: "(NEELAM)", src: "https://cdn.dhanshreegems.com/wysiwyg/home/neelam.png" },
  { name: "HESSONITE GARNET", hindi: "(GOMED)", src: "https://cdn.dhanshreegems.com/wysiwyg/home/gomet.png" },
  { name: "EMERALD", hindi: "(PANNA)", src: "https://cdn.dhanshreegems.com/wysiwyg/home/emerald.png" },
  { name: "OPAL", hindi: "", src: "https://cdn.dhanshreegems.com/wysiwyg/home/opal.png" },
  { name: "PEARL", hindi: "(MOTI)", src: "https://cdn.dhanshreegems.com/wysiwyg/home/pearl.png" },
];

const GemstoneGrid = () => {
  const navigate = useNavigate();

  const createGemstoneSlug = (name) => name.toLowerCase().replace(/ /g, "-");
  const handleGemstoneClick = (gemName) => {
    const slug = createGemstoneSlug(gemName);
    navigate(`/GemsStone/gemstone-detail/${slug}`);
  };

  return (
    <section className="py-10 bg-white text-center mt-2">
      {/* ===== Heading with Reduced Gap ===== */}
      <div className="w-full py-6 flex flex-col items-center space-y-1 mb-4">
        <img
          src="./529-icon-removebg-preview.png"
          alt="Gemstones Banner"
          className="w-28 h-28 object-contain mb-1"
        />

        <div className="flex items-center space-x-2 -mt-1">
          {/* <Gem className="h-8 w-8 text-blue-300" /> */}
          <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wide text-[#6b3e08]">
            Natural Gemstones
          </h1>
          {/* <span className="text-2xl">🍃</span> */}
        </div>

        <div className="flex items-center space-x-2 mt-1">
          <div className="w-3 h-1.5 bg-red-500 rounded-sm shadow-md"></div>
          <div className="w-40 h-1.5 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 rounded-full shadow-md"></div>
          <div className="w-3 h-1.5 bg-red-500 rounded-sm shadow-md"></div>
        </div>
      </div>

      {/* ===== Gemstone Grid ===== */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 px-4 md:px-10">
        {allGemstones.map((gem, index) => (
          <div
            key={index}
            onClick={() => handleGemstoneClick(gem.name)}
            className="flex flex-col items-center transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="w-full h-30 flex items-center justify-center">
              <img src={gem.src} alt={gem.name} className="object-contain w-full h-full" />
            </div>
            <h2 className="mt-2 text-lg font-semibold text-[#6b3e08]">{gem.name}</h2>
            <p className="text-sm text-gray-500">{gem.hindi}</p>
          </div>
        ))}
      </div>

      {/* ===== View More Button ===== */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/GemsStone/subpage")}
          className="font-semibold text-lg md:text-xl py-3 px-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full shadow-lg hover:from-yellow-600 hover:to-orange-600 transition duration-300"
        >
          View More
        </button>
      </div>
    </section>
  );
};

export default GemstoneGrid;
