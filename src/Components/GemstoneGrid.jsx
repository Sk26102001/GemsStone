
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
    <section className="py-10 bg-white text-center mt-5">
      {/* Updated Decorative Headline */}
      <div className="flex items-center justify-center mb-8 space-x-4">
        <span className="text-red-500 text-2xl">🍃</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-wide text-gray-800">
          Natural Gemstones
        </h2>

      

        <span className="text-red-500 text-2xl">🍃</span>


</div>

      
   


      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-8 px- md:px-10 ">
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
                className={`w-full h-30 flex items-center justify-center ${catEyeWrapperClasses}`}
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




