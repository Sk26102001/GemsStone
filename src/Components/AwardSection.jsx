import React from "react";

export default function AwardsSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#f5f6fb] via-white to-[#fdf5f3] flex justify-center py-4">
      <div className="w-[95%] md:w-[90%] lg:w-[85%]">
        <img
          src="https://imgcdn1.gempundit.com/media/wysiwyg/ifa-banner.jpg"
          alt="Awards Section"
          className="w-full h-auto object-contain mx-auto rounded-lg shadow-sm"
        />
      </div>
    </section>
  );
}
