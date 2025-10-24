


import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full  overflow-hidden max-h-[90vh]   ">
      {/* 🎥 Background Video */}
      <video
        className="w-full  h-full max-h-screen object-cover"
        src="./Pink Yellow Purple and White Modern Creativity Presentation (2).mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🌑 Subtle Overlay */}
      <div className="absolute inset-0 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
