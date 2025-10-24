

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
    <section className="py-8 bg-white text-center">
      {/* Decorative Header */}
      <div className="w-full py-8 flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-4 ">
          <span className="text-red-500 text-2xl">🍃</span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wide text-gray-800 ">
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






