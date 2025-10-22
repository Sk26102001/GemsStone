// import React from "react";

// const HeroSection = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center text-white"
//       style={{
//         backgroundImage: "url('/h2.jpg')",
//         height: "90vh", // 👈 adjust as needed (60vh / 80vh)
//       }}
//     >
//       {/* ✅ No dark overlay now */}

//       {/* Left-aligned text section */}
//       <div className="relative z-10 h-full flex items-center">
//         <div className="pl-8 md:pl-16 lg:pl-24 max-w-xl space-y-6 bg-black/20 md:bg-transparent p-4 md:p-0 rounded-lg">
//           <h1 className="text-4xl md:text-5xl font-bold text-yellow-200 leading-tight drop-shadow-md">
//             ✨ Divine Energy in Every Gemstone ✨
//           </h1>

//           <p className="text-lg md:text-xl text-yellow-100 drop-shadow-sm">
//             Discover your astrologically prescribed gemstone, energized in Kashi by Vedic Acharyas.
//           </p>

//           <div className="flex flex-wrap gap-4 pt-4">
//             <a
//               href="#find-gemstone"
//               className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300"
//             >
//               ✅ Find Your Gemstone
//             </a>

//             <a
//               href="#talk-astrologer"
//               className="border border-yellow-400 text-yellow-300 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300"
//             >
//               ✅ Talk to Astrologer
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



// import React from "react";

// const HeroSection = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center text-white"
//       style={{
//         backgroundImage: "url('/h1.png')",
//         height: "80vh", // ⬅️ shorter than before
//         paddingTop: "5vh", // optional: push content slightly down
//         paddingBottom: "10vh", // ⬅️ make more space at bottom for gem section
//       }}
//     >
//       <div className="relative z-10 h-full flex items-center">
//         <div className="pl-8 md:pl-16 lg:pl-24 max-w-xl space-y-6 bg-black/20 md:bg-transparent p-4 md:p-0 rounded-lg">
//           <h1 className="text-3xl md:text-4xl font-bold text-yellow-200 leading-tight drop-shadow-md">
//             ✨ Divine Energy in Every Gemstone ✨
//           </h1>

//           <p className="text-md md:text-lg text-yellow-100 drop-shadow-sm">
//             Discover your astrologically prescribed gemstone, energized in Kashi by Vedic Acharyas.
//           </p>

//           <div className="flex flex-wrap gap-4 pt-4">
//             <a
//               href="#find-gemstone"
//               className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300"
//             >
//               ✅ Find Your Gemstone
//             </a>

//             <a
//               href="#talk-astrologer"
//               className="border border-yellow-400 text-yellow-300 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300"
//             >
//               ✅ Talk to Astrologer
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="relative h-[80vh] overflow-hidden text-white">
//       {/* 🎥 Background Video */}
//       <video
//         className="absolute inset-0 w-full h-full  object-contain"
//         src="https://template.canva.com/EAGwwicUDsg/1/0/450w-WAN7e4SdbAI.mp4" // ⬅️ replace with your actual video path or URL
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//        Overlay for readability

//     </section>
//   );
// };

// export default HeroSection;



import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* 🎥 Full-width Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="./800w-DLFpkybWCgw.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🌑 Optional Overlay for subtle cinematic effect */}
      <div className="absolute inset-0 bg-black/20"></div>
    </section>
  );
};

export default HeroSection;
