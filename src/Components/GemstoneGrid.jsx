

import React from "react";

import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
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
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 px-4 md:px-10">
        {allGemstones.map((gem, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <div className="w-full h-30 flex items-center justify-center">
              <img
                src={gem.src}
                alt={gem.name}
                className="object-contain w-full h-full"
              />
            </div>
            <h2 className="mt-2 text-lg font-semibold text-[#6b3e08]">
              {gem.name}
            </h2>
            <p className="text-sm text-gray-500">{gem.hindi}</p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-10">
<button
        onClick={() => navigate('/GemsStone/subpage')}
        className="font-semibold text-lg md:text-xl py-3 px-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full shadow-lg hover:from-yellow-600 hover:to-orange-600 transition duration-300"
      >
        View More
      </button>
      </div>
    </section>
  );
};

export default GemstoneGrid;
