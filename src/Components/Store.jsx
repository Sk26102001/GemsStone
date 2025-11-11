import React from "react";

const Store = () => {
  const specs = [
    [
      { label: "Gemstone", value: "Red Coral" },
      {
        label: "Treatment",
        value: "Unheated and Untreated (No Indications Observed)",
        important: true,
      },
      { label: "Cut", value: "Cabochon" },
    ],
    [
      { label: "Certification", value: "Free Lab Certificate" },
      { label: "Quality", value: "Luxury" },
      { label: "Shape", value: "Oval" },
    ],
    [
      { label: "Return Policy", value: "10 Day Money-Back Returns*" },
      { label: "Origin", value: "Japan" },
      { label: "Colour", value: "Red" },
    ],
    [
      { label: "Specific Gravity", value: "2.7" },
      { label: "Refractive Index", value: "1.550 Spot" },
      { label: "Shape", value: "Oval" },
    ],
  ];

  return (
    <div className="w-full p-4">
      {/* 👇 full width box */}
      <div className="w-full bg-white border rounded-lg overflow-hidden shadow-sm">
        {specs.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid grid-cols-3 text-sm ${
              rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
            }`}
          >
            {row.map((item, i) => (
              <div
                key={i}
                className="flex items-start border-b last:border-0 border-gray-200 p-3"
              >
                <div className="w-36 font-semibold text-gray-800">
                  {item.label}
                </div>
                <span className="px-1">:</span>
                <div className="text-gray-700 flex items-center gap-1">
                  {item.important && (
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full" />
                  )}
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
