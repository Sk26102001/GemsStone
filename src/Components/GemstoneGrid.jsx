

import React from "react";

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

];

const GemstoneGrid = () => {
  return (
    <section className="py-10 bg-white text-center mt-2">
      {/* Decorative Heading */}
      <div className="w-full py-8 flex flex-col items-center space-y-2">
        <div className="flex items-center space-x-2">
          <span className="text-red-500 text-2xl">🍃</span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wide text-[#6b3e08] text-center">
            Natural Gemstones
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
      <div className="grid md:grid-cols-4 sm:grid-cols-1 grid-cols-1 gap-4 lg:gap-13 px-4 md:px-10">
        {allGemstones.map((gem, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <div
              className={`w-full h-30 flex items-center justify-center ${
                gem.name === "CAT'S EYE" ? "rounded-xl" : ""
              }`}
            >
              <img
                src={gem.src}
                alt={gem.name}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>

      {/* View More Button (UI only – no functionality) */}
      <div className="text-center mt-15">
        <button
          type="button"
          className="font-semibold text-lg md:text-xl py-3 px-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full shadow-lg hover:from-yellow-600 hover:to-orange-600 transition duration-300 cursor-default"
        >
          View More Gems
        </button>
      </div>

      {/* Fade-in animation (optional) */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default GemstoneGrid;
