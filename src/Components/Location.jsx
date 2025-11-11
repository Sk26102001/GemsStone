import React, { useState } from "react";
import { ChevronDown, ChevronUp, MapPin } from "lucide-react";

export default function Location() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="w-full bg-gradient-to-r from-[#eef3f9] via-white to-[#fdf3f1] py-10 px-6 flex flex-col md:flex-row justify-center items-center gap-10">
      {/* ---------- LEFT SIDE: TITLE & MAPS ---------- */}
      <div className="flex flex-col items-start md:items-center md:flex-row gap-6">
        <div className="flex flex-col items-start">
          {/* Country Name + Icon */}
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="text-black w-6 h-6" />
            <h2 className="text-2xl font-semibold text-gray-800">Japan</h2>
          </div>

          {/* Map Images */}
          <div className="flex items-center gap-6">
            <img
              src="https://imgcdn1.gempundit.com/media/wysiwyg/originimages/japan.png"
              alt="World Map"
              className="w-48 h-48 rounded-full border border-gray-200 object-cover"
            />
            <img
              src="https://imgcdn1.gempundit.com/media/wysiwyg/originimages/japan.png"
              alt="Japan Map"
              className="w-40 h-40 rounded-full border border-gray-200 object-cover"
            />
          </div>
        </div>
      </div>

      {/* ---------- RIGHT SIDE: DESCRIPTION BOX ---------- */}
      <div className="md:w-2/5 bg-white border border-gray-200 rounded-md p-4 shadow-sm">
        {/* Image + Text */}
        <div className="flex gap-4">
          <img
            src="https://imgcdn1.gempundit.com/media/wysiwyg/origin-img.png"
            alt="Japan Landscape"
            className="w-28 h-24 object-cover rounded-md"
          />
          <p className="text-gray-700 leading-relaxed text-sm">
            Japan, with its blend of modernity and tradition, is famous for
            cultured pearls, especially from the Akoya oyster. These pearls,
            known for their perfect round shape and lustrous sheen, symbolize
            purity and elegance. Japanese culture holds pearls in high esteem,
            often associating them with good luck and prosperity. The meticulous
            cultivation process reflects Japan’s dedication to precision and
            beauty.
          </p>
        </div>

        {/* ---------- More Info Dropdown ---------- */}
        <div className="mt-4 border-t pt-3">
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex justify-between items-center w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 hover:bg-gray-100 transition"
          >
            <span className="font-medium text-gray-800">More Information</span>
            {showMore ? <ChevronUp /> : <ChevronDown />}
          </button>

          {showMore && (
            <div className="mt-3 p-3 bg-gray-50 rounded-md text-gray-700 text-sm animate-fadeIn">
              Japan’s jewelry industry blends traditional artistry with
              high-tech precision. Akoya pearls, renowned worldwide, reflect the
              country’s commitment to craftsmanship and beauty.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
