// import React from "react";

// export default function GemstoneCategories() {
//   const gems = [
//     { name: "Ruby (Manik)", planet: "🔆", benefit: "Power, Leadership, Confidence", img: "https://imgcdn1.gempundit.com/media/catalog/category/Ruby-_Manik_-1_1.jpg?imgeng=/w_525/f_webp/cmpr_20/s_7" },
//     { name: "Pearl (Moti)", planet: "🌙", benefit: "Peace, Emotional Balance", img: "https://imgcdn1.gempundit.com/media/catalog/category/pearl_3.png?imgeng=/w_525/f_webp/cmpr_20/s_7" },
//     { name: "Emerald (Panna)", planet: "💚", benefit: "Intelligence, Speech, Business", img: "https://imgcdn1.gempundit.com/media/catalog/category/emerald-210203.png?imgeng=/w_525/f_webp/cmpr_20/s_7" },
//     { name: "Yellow Sapphire (Pukhraj)", planet: "💛", benefit: "Wisdom, Prosperity", img: "https://imgcdn1.gempundit.com/media/catalog/category/yellow-sapphire-210203.png?imgeng=/w_525/f_webp/cmpr_20/s_7" },
//     { name: "Blue Sapphire (Neelam)", planet: "🔷", benefit: "Discipline, Success, Stability", img: "https://imgcdn1.gempundit.com/media/catalog/category/blue-sapphire-210203_1.png?imgeng=/w_525/f_webp/cmpr_20/s_7" },
//     { name: "Red Coral (Moonga)", planet: "🔴", benefit: "Courage, Vitality", img: "https://imgcdn1.gempundit.com/media/catalog/category/Red_Coral_1_1.jpg?imgeng=/w_525/f_webp/cmpr_20/s_7" },
//     { name: "Diamond (Heera)", planet: "💎", benefit: "Love, Luxury, Relationships", img: "https://assets.vedicgems.com/assets/sds/icons/diamond.svg?width=480&quality=85&auto=webp" },
//     { name: "Hessonite (Gomed)", planet: "🟤", benefit: "Fame, Focus, Protection", img: "https://imgcdn1.gempundit.com/media/catalog/category/hessonite.png?imgeng=/w_525/f_webp/cmpr_20/s_7" },
//     { name: "Cat's Eye (Lehsunia)", planet: "🐯", benefit: "Spiritual Growth, Protection", img: "https://assets.vedicgems.com/assets/sds/icons/cats-eye.png?width=480&quality=85&auto=webp" },
//   ];

//   return (
//     <section className="bg-white py-12 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">✨ Choose the Gemstone that Aligns with Your Planet ✨</h2>

//         <div className="grid gap-6 md:grid-cols-3">
//           {gems.map((gem) => (
//             <article
//               key={gem.name}
//               className="flex flex-col bg-white border rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
//             >
//               <div className="relative overflow-hidden h-56 md:h-64">
//                 <img
//                   src={gem.img}
//                   alt={gem.name}
//                   className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
//                 />
//                 <div className="absolute left-3 top-3 bg-white/90 rounded-full px-3 py-1 text-sm font-medium shadow">
//                   <span className="mr-2">{gem.planet}</span>
//                   <span className="hidden md:inline">{gem.name.split(' (')[0]}</span>
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
//               </div>

//               <div className="p-5 flex-1 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-lg font-semibold mb-2">{gem.name}</h3>
//                   <p className="text-sm text-gray-600 mb-4">{gem.benefit}</p>
//                 </div>

//                 <div className="mt-2">
//                   <button
//                     className="w-full md:w-auto inline-flex items-center justify-center px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm font-medium shadow-sm hover:bg-gray-50 transition"
//                     aria-label={`Know more about ${gem.name}`}
//                   >
//                     Know More
//                   </button>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         <style>{`@media (max-width: 767px) { .grid { display: grid; grid-auto-flow: column; grid-auto-columns: 85%; overflow-x: auto; gap: 1rem; padding-bottom: 0.5rem; }::-webkit-scrollbar{height:8px}::-webkit-scrollbar-thumb{background:#e5e7eb;border-radius:9999px}}`}</style>
//       </div>
//     </section>
//   );
// }


// import React from "react";

// export default function GemstoneCategories() {
//   const gems = [
//     { name: "Ruby (Manik)", planet: "🔆", benefit: "Power, Leadership, Confidence", img: "https://imgcdn1.gempundit.com/media/catalog/category/Ruby-_Manik_-1_1.jpg?imgeng=/w_525/f_webp/cmpr_20/s_7" },
//     { name: "Pearl (Moti)", planet: "🌙", benefit: "Peace, Emotional Balance", img: "https://imgcdn1.gempundit.com/media/catalog/category/pearl_3.png?imgeng=/w_525/f_webp/cmpr_20/s_7" },
//     { name: "Emerald (Panna)", planet: "💚", benefit: "Intelligence, Speech, Business", img: "https://imgcdn1.gempundit.com/media/catalog/category/emerald-210203.png?imgeng=/w_525/f_webp/cmpr_20/s_7" },
//     { name: "Yellow Sapphire (Pukhraj)", planet: "💛", benefit: "Wisdom, Prosperity", img: "https://imgcdn1.gempundit.com/media/catalog/category/yellow-sapphire-210203.png?imgeng=/w_525/f_webp/cmpr_20/s_7" },
//     { name: "Blue Sapphire (Neelam)", planet: "🔷", benefit: "Discipline, Success, Stability", img: "https://imgcdn1.gempundit.com/media/catalog/category/blue-sapphire-210203_1.png?imgeng=/w_525/f_webp/cmpr_20/s_7" },
//     { name: "Red Coral (Moonga)", planet: "🔴", benefit: "Courage, Vitality", img: "https://imgcdn1.gempundit.com/media/catalog/category/Red_Coral_1_1.jpg?imgeng=/w_525/f_webp/cmpr_20/s_7" },
//     { name: "Diamond (Heera)", planet: "💎", benefit: "Love, Luxury, Relationships", img: "https://assets.vedicgems.com/assets/sds/icons/diamond.svg?width=480&quality=85&auto=webp" },
//     { name: "Hessonite (Gomed)", planet: "🟤", benefit: "Fame, Focus, Protection", img: "https://copilot.microsoft.com/th/id/BCO.db9c256b-0371-4baf-950f-5efb8d30cc3f.png" },
// { 
//   name: "Kunzite", 
//   planet: "🌙", 
//   benefit: "Emotional Healing, Love, Inner Peace", 
//   // img: "./Copilot_20251022_182045.png" https://imgcdn1.gempundit.com/media/catalog/category/hessonite.png?imgeng=/w_525/f_webp/cmpr_20/s_7
// },



//   ];

//   return (
//     <section className="bg-white py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">✨ Choose the Gemstone that Aligns with Your Planet ✨</h2>

//         <div className="grid gap-8 md:grid-cols-3">
//           {gems.map((gem) => (
//             <article
//               key={gem.name}
//               className="flex flex-col bg-white border rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200 w-full"
//             >
//               <div className="relative overflow-hidden h-48 md:h-56">
//                 <img
//                   src={gem.img}
//                   alt={gem.name}
//                   className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
//                 />
//                 <div className="absolute left-3 top-3 bg-white/90 rounded-full px-3 py-1 text-sm font-medium shadow">
//                   <span className="mr-2">{gem.planet}</span>
//                   <span className="hidden md:inline">{gem.name.split(' (')[0]}</span>
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-50 transition-opacity duration-300 pointer-events-none" />
//               </div>

//               <div className="p-6 flex-1 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-lg font-semibold mb-2 text-gray-800">{gem.name}</h3>
//                   <p className="text-sm text-gray-600 mb-4">{gem.benefit}</p>
//                 </div>

//                 <div className="mt-2">
//                   <button
//                     className="w-full md:w-auto inline-flex items-center justify-center px-6 py-2 rounded-lg text-white bg-gradient-to-r from-yellow-400 to-orange-500 text-sm font-medium shadow-md hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
//                     aria-label={`Know more about ${gem.name}`}
//                   >
//                     Know More
//                   </button>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         <style>{`@media (max-width: 767px) { .grid { display: grid; grid-auto-flow: column; grid-auto-columns: 85%; overflow-x: auto; gap: 1rem; padding-bottom: 0.5rem; }::-webkit-scrollbar{height:8px}::-webkit-scrollbar-thumb{background:#e5e7eb;border-radius:9999px}}`}</style>
//       </div>
//     </section>
//   );
// }





import React, { useState } from "react";

export default function GemCategories() {
  const allGems = [
    // 👈 Un-commented Ruby so the item is visible and the array length is correct
    { name: "Ruby (Manik)", planet: "🔆", benefit: "Power, Leadership, Confidence", img: "https://imgcdn1.gempundit.com/media/catalog/category/Ruby-_Manik_-1_1.jpg?imgeng=/w_525/f_webp/cmpr_20/s_7" },
    { name: "Pearl (Moti)", planet: "🌙", benefit: "Peace, Emotional Balance", img: "https://imgcdn1.gempundit.com/media/catalog/category/pearl_3.png?imgeng=/w_525/f_webp/cmpr_20/s_7" },
    { name: "Emerald (Panna)", planet: "💚", benefit: "Intelligence, Speech, Business", img: "https://imgcdn1.gempundit.com/media/catalog/category/emerald-210203.png?imgeng=/w_525/f_webp/cmpr_20/s_7" },
    { name: "Yellow Sapphire (Pukhraj)", planet: "💛", benefit: "Wisdom, Prosperity", img: "https://imgcdn1.gempundit.com/media/catalog/category/yellow-sapphire-210203.png?imgeng=/w_525/f_webp/cmpr_20/s_7" },
    { name: "Blue Sapphire (Neelam)", planet: "🔷", benefit: "Discipline, Success, Stability", img: "https://imgcdn1.gempundit.com/media/catalog/category/blue-sapphire-210203_1.png?imgeng=/w_525/f_webp/cmpr_20/s_7" },
    { name: "Red Coral (Moonga)", planet: "🔴", benefit: "Courage, Vitality", img: "https://imgcdn1.gempundit.com/media/catalog/category/Red_Coral_1_1.jpg?imgeng=/w_525/f_webp/cmpr_20/s_7" },
    { name: "Diamond (Heera)", planet: "💎", benefit: "Love, Luxury, Relationships", img: "https://assets.vedicgems.com/assets/sds/icons/diamond.svg?width=480&quality=85&auto=webp" },
    { name: "Hessonite (Gomed)", planet: "🟤", benefit: "Fame, Focus, Protection", img: "https://imgcdn1.gempundit.com/media/catalog/category/hessonite.png?imgeng=/w_525/f_webp/cmpr_20/s_7" },
    { name: "Kunzite", planet: "🌙", benefit: "Emotional Healing, Love, Inner Peace", img: "https://cdn.dhanshreegems.com/wysiwyg/new/kunzite_gemstone.png" },
    { name: "Opal", planet: "✨", benefit: "Creativity, Passion, Charm", img: "https://imgcdn1.gempundit.com/media/catalog/category/opal_1.png?imgeng=/w_525/f_webp/cmpr_20/s_7" },
    { name: "Garnet", planet: "🔥", benefit: "Energy, Confidence, Motivation", img: "https://imgcdn1.gempundit.com/media/catalog/category/garnet_2.png?imgeng=/w_525/f_webp/cmpr_20/s_7" },
    { name: "Amethyst", planet: "💜", benefit: "Calmness, Spiritual Growth, Focus", img: "https://imgcdn1.gempundit.com/media/catalog/category/amethyst_1.png?imgeng=/w_525/f_webp/cmpr_20/s_7" },
    { name: "Lapis Lazuli", planet: "🔵", benefit: "Wisdom, Truth, Self-Awareness", img: "https://imgcdn1.gempundit.com/media/catalog/category/lapis-lazuli_1.png?imgeng=/w_525/f_webp/cmpr_20/s_7" },
    { name: "Turquoise (Firoza)", planet: "🌀", benefit: "Luck, Protection, Positivity", img: "https://imgcdn1.gempundit.com/media/catalog/category/turquoise_1.png?imgeng=/w_525/f_webp/cmpr_20/s_7" },
    { name: "Alexandrite", planet: "🌈", benefit: "Transformation, Balance, Fortune", img: "https://imgcdn1.gempundit.com/media/catalog/category/alexandrite_1.png?imgeng=/w_525/f_webp/cmpr_20/s_7" },
    { name: "Tanzanite", planet: "🔮", benefit: "Intuition, Clarity, Creativity", img: "https://imgcdn1.gempundit.com/media/catalog/category/tanzanite_1.png?imgeng=/w_525/f_webp/cmpr_20/s_7" },
  ]; // Total items: 16

  const [visibleCount, setVisibleCount] = useState(6); // Shows the first 6 gems

  const loadMore = () => {
    // This ensures we load 6 more, but never exceed the total length of the array
    setVisibleCount((prev) => Math.min(prev + 6, allGems.length));
  };

  const visibleGems = allGems.slice(0, visibleCount);
  
  // A variable to check if the button should be shown
  const showLoadMoreButton = visibleCount < allGems.length;

  return (
    <section className="bg-gray-50 py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          ✨ Choose the Gemstone that Aligns with Your Planet ✨
        </h2>

        {/* Changed grid layout for better mobile scrolling and desktop viewing */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {visibleGems.map((gem) => (
            <article
              key={gem.name}
              className="flex flex-col bg-white border border-yellow-100 rounded-xl shadow-lg overflow-hidden transition transform hover:scale-[1.02] duration-300 w-full"
            >
              <div className="relative overflow-hidden h-48 md:h-56">
                <img
                  src={gem.img}
                  alt={gem.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute left-4 top-4 bg-white/95 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 shadow-md">
                  {gem.planet} {gem.name.split(" (")[0]}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-yellow-800">{gem.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{gem.benefit}</p>
                </div>

                <div className="mt-3">
                  <button
                    className="w-full inline-flex items-center justify-center px-4 py-2 rounded-full text-white bg-yellow-600 text-sm font-semibold shadow-md hover:bg-yellow-700 transition duration-300"
                    aria-label={`Know more about ${gem.name}`}
                  >
                    Know More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 🌟 View More Button (Conditional Rendering) */}
        {showLoadMoreButton && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="px-10 py-3 text-white bg-yellow-600 rounded-full font-bold text-base shadow-xl hover:bg-yellow-700 transition duration-300 transform hover:scale-[1.02] ring-4 ring-yellow-200"
            >
              View More Gems ({allGems.length - visibleCount} Left)
            </button>
          </div>
        )}

        {/* The mobile scroll style is not needed with the standard Tailwind grid, 
            but I'll keep it commented out for reference if you prefer that layout. */}
        {/*
        <style>{`
          @media (max-width: 767px) {
            .grid {
              display: grid;
              grid-auto-flow: column;
              grid-auto-columns: 85%;
              overflow-x: auto;
              gap: 1rem;
              padding-bottom: 0.5rem;
            }
            ::-webkit-scrollbar { height: 8px }
            ::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 9999px }
          }
        `}</style>
        */}
      </div>
    </section>
  );
}