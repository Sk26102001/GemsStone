
import React, { useState, useMemo, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ShoppingBagIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Play } from "lucide-react";
import { SideBySideMagnifier } from "react-image-magnifiers";

// Local components (assumed available)

import Chat from "../components/Chat";
import Policy from "../components/Policy";

import Review from "../components/Review";
import AwardsSection from "../components/AwardSection";
import GemsFeatures from "./GemsFeatures";
import ShippingPolicy from "../components/ShippingPolicy"
// --- Main Page (Merged Coral) ---
export default function GemstoneFinalPage() {
  const { gemName, id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  // const { gem, details,globalIndex } = location.state || {};
const { gem, details, globalIndex = 0 } = location.state || {};

  // If the route was opened directly (no state), we can attempt to fallback a bit
  useEffect(() => {
    // no-op for now — you could fetch gem by id here if you have an API
  }, []);

  if (!gem || !details || globalIndex) {
    return (
      <div className="text-center py-20 bg-red-50 text-red-700 p-10 m-10 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold">Gemstone Not Found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-5 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  // ---------- RedCoral-like state & data (merged) ----------
  const [diamondqualitys, setDiamondquality] = useState("null");
    const [ringsizesystems, setRingsizesystem] = useState("null");
      const [ringsizes, setRingsize] = useState("null");
      const [poojaOption, setPoojaOption] = useState("No Energization");
  const [selectedType, setSelectedType] = useState(null);
  const [selectedMetal, setSelectedMetal] = useState("");
  const [selectedDesignImage, setSelectedDesignImage] = useState(null);
  const [selectedDesignIndex, setSelectedDesignIndex] = useState(null);
  const [showSpecs, setShowSpecs] = useState(true);
  const [activeFAQ, setActiveFAQ] = useState(null);



  // Product Specifications (Example Data)
// const productSpecifications = [
//   { label: "Gemstone Name", value: details.displayName },
//   { label: "Origin", value: details.origin || "Not specified" },
//   { label: "Shape", value: "Oval" },
//   { label: "Color", value: details.color || gem.color || "Not specified" },

//   { label: "Transparency", value: "Translucent" },
//   { label: "Treatment", value: "Unheated & Natural" },
//   { label: "Certification", value: "GemPundit Certified Lab" },
//   { label: "Weight", value: `${(3.0 + globalIndex / 10).toFixed(2)} Carats` },
//   { label: "Dimensions", value: "8.5 x 6.5 x 4.5 mm (Approx)" },
//   { label: "Product Code", value: `GEM-${id || "001"}` },
// ];
const productSpecifications = [
  { label: "Gemstone Name", value: details.displayName },
  { label: "Origin", value: details.origin || "Not specified" },
  { label: "Shape", value: details.shape || gem.shape || "Oval" },
  { label: "Color", value: details.color || gem.color || "Not specified" },
  { label: "Transparency", value: "Translucent" },
  { label: "Treatment", value: "Unheated & Natural" },
  { label: "Certification", value: "GemPundit Certified Lab" },
  { label: "Weight", value: `${(3.0 + globalIndex / 10).toFixed(2)} Carats` },
  { label: "Dimensions", value: "8.5 x 6.5 x 4.5 mm (Approx)" },
  { label: "Product Code", value: `GEM-${id || "001"}` },
];


  // Initializing mainMedia with the gemstone image
  const [mainMedia, setMainMedia] = useState({ type: "image", src: gem.src });
  const [selectedExtraImages, setSelectedExtraImages] = useState([]);


  const sampleMedia = [
    { type: "image", src: gem.src || "../data/gp147009-2-70225_-_Edited-removebg-preview.png" },
    // fallback / placeholder thumbnails (you can replace/add more)
    { type: "image", src: gem.src || "" },
     { type: "image", src: gem.src || "" },
      { type: "image", src: gem.src || "" },
      { type: "video", src: gem.src || "" },
  ];

  // NOTE: These designs are generic ring/pendant/bracelet designs. In a real app,
  // the design set for each metal would need to be filtered by selectedType (Ring/Pendant/Bracelet).
  const allDesigns = {
    Silver: [
      {
      src: [
        "https://imgcdn1.gempundit.com/media/catalog/product/g/p/gp147009-1-70225.jpg?imgeng=/w_960/f_webp/cmpr_20/s_7",
        "https://imgcdn1.gempundit.com/media/catalog/product/g/p/gp147009-1-70225.jpg?imgeng=/w_960/f_webp/cmpr_20/s_7",
      ],
        alt: "Silver Design 1",
      },
      {
      src: [
        "https://imgcdn1.gempundit.com/media/catalog/product/g/p/gp147009-1-70225.jpg?imgeng=/w_960/f_webp/cmpr_20/s_7",
        "https://imgcdn1.gempundit.com/media/catalog/product/g/p/gp147009-1-70225.jpg?imgeng=/w_960/f_webp/cmpr_20/s_7",
      ],
        alt: "Silver Design 2",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208152/837/100x/AC8-silver-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "Silver Design 3",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208152/838/100x/AC9-silver-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "Silver Design 4",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208152/839/100x/AC10-silver-a-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "Silver Design 5",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208152/840/100x/AC11-silver-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "Silver Design 6",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208152/841/100x/AC12-silver-o-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "Silver Design 7",
      },
    ],
    "Panchdhatu (Brass)": [
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682818/851/100x/AC6-panch-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "Panchdhatu Design 1",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682818/852/100x/AC7-panch-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "Panchdhatu Design 2",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682818/853/100x/AC8-panch-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "Panchdhatu Design 3",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682818/854/100x/AC9-panch-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "Panchdhatu Design 4",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682818/855/100x/AC10-panch-a-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "Panchdhatu Design 5",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682818/856/100x/AC11-panch-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "Panchdhatu Design 6",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682818/857/100x/AC12-panch-o-_1_1.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "Panchdhatu Design 7",
      },
    ],
    // NOTE: '22K Yellow Gold' is duplicated in original code, fixing one copy to be accurate for a demo
    "22K Yellow Gold": [
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682829/934/100x/AC9-gold-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "22K Gold Design 1",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682829/932/100x/AC7-gold-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "22K Gold Design 2",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682829/933/100x/AC8-gold-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "22K Gold Design 3",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682829/934/100x/AC9-gold-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "22K Gold Design 4",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682829/935/100x/AC10-gold-a-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "22K Gold Design 5",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682829/936/100x/AC11-gold-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "22K Gold Design 6",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682829/937/100x/AC12-gold-o-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "22K Gold Design 7",
      },
    ],
    "18K White Gold": [
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682829/937/100x/AC12-gold-o-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "18K White Gold 1",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/1/100x/ring-design-4.jpg",
        alt: "18K White Gold 2",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/1/100x/ring-design-3.jpg",
        alt: "18K White Gold 3",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682818/851/100x/AC6-panch-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "18K White Gold 4",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/1/100x/ring-design-2.jpg",
        alt: "18K White Gold 5",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/1/100x/ring-design-4.jpg",
        alt: "18K White Gold 6",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/1/100x/ring-design-3.jpg",
        alt: "18K White Gold 7",
      },
    ],
    "18K Yellow Gold": [
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/1/100x/ring-design-2.jpg",
        alt: "18K Yellow Gold 1",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/1/100x/ring-design-4.jpg",
        alt: "18K Yellow Gold 2",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/1/100x/ring-design-3.jpg",
        alt: "18K Yellow Gold 3",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682818/851/100x/AC6-panch-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "18K Yellow Gold 4",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/1/100x/ring-design-2.jpg",
        alt: "18K Yellow Gold 5",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/1/100x/ring-design-4.jpg",
        alt: "18K Yellow Gold 6",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/1/100x/ring-design-3.jpg",
        alt: "18K Yellow Gold 7",
      },
    ],
    "14K White Gold": [
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/1/100x/ring-design-2.jpg",
        alt: "14K White Gold Design 1",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/1/100x/ring-design-4.jpg",
        alt: "14K White Gold 2",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/1/100x/ring-design-3.jpg",
        alt: "14K White Gold 3",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682818/851/100x/AC6-panch-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "14K White Gold 4",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/1/100x/ring-design-2.jpg",
        alt: "14K White Gold 5",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/1/100x/ring-design-4.jpg",
        alt: "14K White Gold 6",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/1/100x/ring-design-3.jpg",
        alt: "14K White Gold 7",
      },
    ],
    "14K Yellow Gold": [
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682830/899/100x/AC6-gold-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "14K Yellow Gold 1",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682830/900/100x/AC7-gold-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "14K Yellow Gold 2",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682830/901/100x/AC8-gold-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "14K Yellow Gold 3",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682830/902/100x/AC9-gold-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "14K Yellow Gold 4",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682830/903/100x/AC10-gold-a-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "14K Yellow Gold 5",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682830/904/100x/AC11-gold-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "14K Yellow Gold 6",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682830/905/100x/AC12-gold-o-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "14K Yellow Gold 7",
      },
    ],
    // The previous '22K Yellow Gold' array was duplicated. Removing the second copy here to avoid confusion.
    Platinum: [
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682819/947/100x/AC6-silver-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "Platinum 1",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682819/948/100x/AC7-silver-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "Platinum 2",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682819/949/100x/AC8-silver-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "Platinum 3",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682819/950/100x/AC9-silver-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "Platinum 4",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682819/951/100x/AC10-silver-a-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "Platinum 5",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682819/952/100x/AC11-silver-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "Platinum 6",
      },
      {
        src: "https://imgcdn1.gempundit.com/media/customoptions/2352/682819/953/100x/AC12-silver-o-_2_.jpg?imgeng=/w_525/cmpr_20/s_7",
        alt: "Platinum7",
      },
    ],
  };

  const extraImages = [
    {
      src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/333/100x/loosegemstone1.png",
      title: "Loose Gemstone",
    },
    {
      src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/1/100x/ring.png",
      title: "Ring",
    },
    {
      src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/2/100x/pendent.png",
      title: "Pendant",
    },
    {
      src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/3/100x/bracelet.png",
      title: "Bracelet",
    },
  ];

  const benefits = [
    "Gives Courage",
    "Cures Blood Disorders",
    "Athletic Capabilities",
    "Overcoming Obstacles",
  ];

  const weights = [
    "-- Please Select --",
    "7.25 ratti (6.53 carat) Rs.189,370",
    "7.50 ratti (6.75 carat) Rs.195,750",
    "8.00 ratti (7.20 carat) Rs.208,800",
  ];
  const poojaOptions = [
    "No Energization",
    "Basic Energization (Free)",
    "Vedic Pooja (Extra 1 Day) +Rs.1,100",
    "Prana Pratishta Pooja (Extra 1 Day) +Rs.2,100",
  ];

// Data for the 'Diamond Substitute' dropdown
const diamondquality = [
    "-- Select Diamond Quality --",
    "No Substitute Stones (Only Gemstone)",
    "Standard (Zircon/CZ) - Free",
    "Premium (Moissanite) - +Rs.5,000",
    "Natural Diamond (SI-GH) - +Rs.15,000",
];

// Data for the 'Ring Size System' dropdown (e.g., US, UK, Indian)
const ringsizesystem = [
    "-- Select Size System --",
    "US & Canada (Standard)",
    "UK & Australia (Alphabetical)",
    "Indian (Standard)",
    "European (Millimeters)",
];

// Data for the 'Ring Size' dropdown (placeholder values, often populated dynamically)
const ringsize = [
    "-- Select Ring Size --",
    "Size 4 / H (46.8mm)",
    "Size 4.5 / I (48.0mm)",
    "Size 5 / J (49.3mm)",
    "Size 5.5 / K (50.6mm)",
    "Size 6 / L (51.9mm)",
    "Size 6.5 / M (53.1mm)",
    "Size 7 / N (54.4mm)",
    "Size 7.5 / O (55.7mm)",
    "Size 8 / P (57.0mm)",
    "Size 8.5 / Q (58.3mm)",
    "Size 9 / R (59.5mm)",
    "Size 9.5 / S (60.8mm)",
    "Size 10 / T (62.1mm)",
    "Size 10.5 / U (63.4mm)",
    "Size 11 / V (64.6mm)",
  ];

  // Handlers
  const handleMetalChange = (e) => {
    const metal = e.target.value;
    setSelectedMetal(metal);
    setSelectedDesignIndex(null);

    // FIX 2: Set the selectedDesignImage to the base image for the selectedType,
    // but use the larger size for the preview (400x).
    const defaultImage = extraImages.find((i) => i.title === selectedType);
    if (defaultImage) {
      setSelectedDesignImage(defaultImage.src.replace("100x/", "100x/")); // Use 400x for the preview image
    }
  };

  // const handleDesignSelect = (design, index) => {
  //   setSelectedDesignIndex(index);

  //   setSelectedDesignImage(design.src.replace("100x/", "100x/"));
  // };
  const handleDesignSelect = (design, index) => {
  setSelectedDesignIndex(index);
  // Use first image as main preview
  setSelectedDesignImage(design.src[0]);
  // Optionally store both images (for switching)
  setSelectedExtraImages(design.src);
};


  const handleSelectType = (item) => {
    setSelectedType(item.title);
    setSelectedMetal("");
    setSelectedDesignIndex(null);

    if (item.title === "Loose Gemstone") {
      setSelectedDesignImage(null);
      // Main media changes back to the loose gemstone
      setMainMedia({ type: "image", src: gem.src });
    } else {
      // FIX 1: DO NOT change mainMedia when selecting a type (Ring/Pendant/Bracelet).
      // It should remain the loose gemstone image until a specific design is picked.
      // We only set the small preview image (selectedDesignImage) here.
      setSelectedDesignImage(item.src.replace("100x/", "100x/"));
      // setMainMedia({ type: "image", src: item.src.replace("100x/", "100x/") }); // REMOVED
    }
  };

  const filteredDesigns = useMemo(() => {
    if (selectedMetal && allDesigns[selectedMetal])
      return allDesigns[selectedMetal];
    return [];
  }, [selectedMetal]);

  const handleBuyNow = () => {
    alert(
      `Buying Gemstone ${gem.id} (${
        details.displayName
      }) for ₹${gem.discountedPrice.toLocaleString()}!`
    );
  };

  // ---------- Render ----------
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 p-6 max-w-8xl mx-auto">

      {/* 🌟 Breadcrumb Section */}
<div className="mb-6 text-lg font-semibold">
  <span className="text-gray-700">Home / Gemstones / </span>
  <span
    className="text-red-700 transition-colors duration-300"
  >
    {details.displayName}
  </span>
</div>


      <div className="grid md:grid-cols-2 gap-15">
        {/* Left: Media */}
        <div>
<div className="w-full rounded-xl shadow-lg overflow-hidden h-[400px] sm:h-[450px] md:h-[450px] "
>
  {mainMedia.type === "image" ? (
    <SideBySideMagnifier
      imageSrc={mainMedia.src}
      largeImageSrc={mainMedia.src
        .replace("400x/", "100x/")
        .replace("100x/", "100x/")}
      switchSides={true}
      zoomPosition="right"
      overlayOpacity={0.5}
      className="rounded-xl w-full h-full object-contain"
    />
  ) : (
    <video
      src={mainMedia.src}
      controls
      autoPlay
      loop
      className="w-full h-full rounded-xl object-contain"
      style={{
        backgroundColor: "black",
      }}
    />
  )}
</div>


          {/* Thumbnails (use sampleMedia) */}
          <div className="flex gap-3 mt-4">
            {sampleMedia.map((item, i) => (
              <div
                key={i}
                className={`relative w-20 h-16 rounded overflow-hidden border cursor-pointer group ${
                  mainMedia.src === item.src
                    ? "border-[#f3bd10] ring-2 ring-[#f3bd10]"
                    : "border-gray-200"
                }`}
                onClick={() => setMainMedia(item)}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`Sample ${i + 1}`}
                    className="w-full h-full object-cover group-hover:opacity-80 transition"
                  />
                ) : (
                  <>
                    <video
                      src={item.src}
                      muted
                      className="w-full h-full object-cover group-hover:opacity-80 transition"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-2 group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>


<div className="mt-10 text-center overflow-hidden">
  {/* 💫 Inline CSS for Smooth Floating Animation */}
  <style>{`
    @keyframes smoothBounce {
      0%, 100% {
        transform: translateY(0);
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
      }
      50% {
        transform: translateY(-8px);
        text-shadow: 0 0 20px rgba(255, 230, 100, 0.8);
      }
    }

    .animate-smoothBounce {
      display: inline-block;
      animation: smoothBounce 1.5s ease-in-out infinite;
      transition: all 0.3s ease-in-out;
    }
  `}</style>

  {/* 🌟 Smooth Floating Offer Text */}
  <h2 className="text-xl sm:text-2xl font-semibold text-orange-600 animate-smoothBounce inline-block whitespace-nowrap">
    💎 Special Festive Offer! Get{" "}
    <span className="text-yellow-500 font-bold">15% OFF</span> on All Gemstones ✨
  </h2>
</div>

{/* 👇 Show Selected Design Preview Below Offer Section */}
{/* 🖼️ Selected Design Image Preview */}
{/* 🖼️ Selected Metal Design Preview */}
{/* {selectedDesignImage && (
  <div className="mt-8 border border-gray-300 rounded-xl p-2 bg-white shadow-sm">
    <img
      src={selectedDesignImage}
      alt="Selected Metal Design"
      className="w-full h-90 rounded-lg object-contain"
      style={{
        imageRendering: "high-quality",
        transform: "none",
        filter: "none",
      }}
    />
  </div>
)} */}

{selectedExtraImages.length > 0 && (
  <div className="w-full rounded-xl shadow-lg overflow-hidden h-[400px] sm:h-[450px] md:h-[450px]">
    {selectedExtraImages.map((img, i) => (
      <img
        key={i}   
        src={img}
        alt={`Selected Design View ${i + 1}`}
        className="rounded-xl w-full h-full object-contain"
      />
    ))}
  </div>
)}










        </div>

        {/* Right: Product Details */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-semibold mb-1">
                {details.displayName}
              </h1>
              <p className="text-sm text-gray-600">
                {details.origin || "Origin not specified"}
              </p>
<p className="text-base text-gray-500">
  Origin: {details.origin?.split(",")[0] || "Unknown"} | Carats:{" "}
  {(3.0 + ((Number(globalIndex) || 0) / 10)).toFixed(2)}
</p>

        <h3 className="text-lg font-semibold text-[#6b3e08]">
          {details.displayName} - {(3.0 + globalIndex / 10).toFixed(2)} CT
        </h3>

            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-red-600">
                ₹ {gem.discountedPrice.toLocaleString()}
              </p>
              {gem.tags === "10% OFF" && (
                <p className="text-sm text-gray-500 line-through">
                  ₹ {gem.basePrice.toLocaleString()}
                </p>
              )}
            </div>
          </div>

          {/* Weight select */}
          <div className="flex justify-between items-center py-3 border-b-2 border-gray-400 border-dotted mb-4">
            <label className="font-medium text-sm text-gray-800">
              WEIGHT <span className="text-red-500">*</span>
            </label>
            <select
              className="border border-gray-300 rounded-md p-2 text-sm w-66 appearance-none bg-white"
              defaultValue={weights[0]}
            >
              {weights.map((w, i) => (
                <option key={i}>{w}</option>
              ))}
            </select>
          </div>

          {/* Certification */}
          <div className="flex justify-between items-center py-3 border-b-2 border-gray-400 border-dotted mb-4">
            <label className="font-medium text-sm text-gray-800">
              CERTIFICATION <span className="text-red-500">*</span>
            </label>
            <select className="border border-gray-300 rounded-md p-2 text-sm w-66 appearance-none bg-white">
              {weights.map((w, i) => (
                <option key={i}>{w}</option>
              ))}
            </select>
          </div>

          {/* Pooja */}
          <div className="flex justify-between items-center py-3 border-b-2 border-gray-400 border-dotted mb-4">
            <label className="font-medium text-sm text-gray-800">
              POOJA/ ENERGIZATION <span className="text-red-500">*</span>
            </label>
            <select
              value={poojaOption}
              onChange={(e) => setPoojaOption(e.target.value)}
              className="border border-gray-300 rounded-md p-2 text-sm w-66 appearance-none bg-white"
            >
              {poojaOptions.map((p, i) => (
                <option key={i}>{p}</option>
              ))}
            </select>
          </div>

          {/* Select Type (Ring/Pendant/Bracelet) */}
          <h2 className="mt-6 mb-2 font-medium text-sm text-gray-800">
            SELECT FOR RING / PENDANT / BRACELET{" "}
            <span className="text-red-500">*</span>
          </h2>
          <div className="h-1 w-65 bg-[#f3bd10] mb-4 rounded"></div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {extraImages.map((item, i) => (
              <div
                key={i}
                className={`text-center cursor-pointer border rounded-lg p-2 ${
                  selectedType === item.title
                    ? "border-[#f3bd10] ring-2 ring-[#f3bd10] bg-yellow-50"
                    : "border-gray-200"
                }`}
                onClick={() => handleSelectType(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-24 h-20 mx-auto rounded object-cover"
                />
                <p className="mt-1 text-sm font-medium text-gray-800">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* Selected Type Options (Metal + Designs) */}
          {selectedType && selectedType !== "Loose Gemstone" && (
            <div className="mb-6 p-4 border rounded bg-gray-50">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <div className="col-span-1 flex justify-center items-start">
                  {/* Updated to ensure 400x is used as default image if no design is selected yet */}
                  <img
                    src={
                      selectedDesignImage ||
                      extraImages
                        .find((i) => i.title === selectedType)
                        ?.src.replace("100x/", "400x/")
                    }
                    alt={selectedType}
                    className="w-full max-w-40 h-auto object-contain rounded-lg shadow-md border-2 border-gray-200"
                  />
                </div>

                <div className="col-span-3">
                  <p className="mb-2 text-gray-800 font-medium text-sm">
                    ✅ You Have Selected <b>{selectedType}</b>.{" "}
                    <button
                      onClick={() => handleSelectType(extraImages[0])}
                      className="inline-block text-[#f3bd10] hover:text-[#e0a900] underline font-medium"
                    >
                      Click here to change your preference
                    </button>
                  </p>
                  <p className="text-xs text-gray-600 mb-4">
                    You can opt to have your gemstone in a Ring, Bracelet or a
                    Necklace.
                  </p>

                  <div className="flex justify-between items-center py-2 border-b-2 border-gray-500 border-dotted mb-4">
                    <label className="text-center font-medium text-sm text-gray-800 flex-shrink-0">
                      METAL <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="border border-gray-300 rounded-md p-2 text-sm w-50 ml-4 appearance-none bg-white"
                      value={selectedMetal}
                      onChange={handleMetalChange}
                    >
                      <option value="">-- Please Select --</option>
                      {(selectedType === "Ring" ||
                        selectedType === "Pendant") && (
                        <>
                          <option>Silver</option>
                          <option>Panchdhatu (Brass)</option>
                          <option>22K Yellow Gold</option>
                          <option>18K White Gold</option>
                          <option>18K Yellow Gold</option>
                          <option>14K White Gold</option>
                          <option>14K Yellow Gold</option>
                          <option>Platinum</option>
                        </>
                      )}
                      {selectedType === "Bracelet" && (
                        <>
                          <option>Silver</option>
                          <option>Gold</option>
                          <option>Leather</option>
                        </>
                      )}
                    </select>
                  </div>

                  <h3 className="font-medium text-sm text-gray-800 mb-2">
                    DESIGN OPTIONS
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 overflow-x-auto pb-2">
                    {filteredDesigns.map((design, index) => (
                      <div
                        key={index}
                        className={`flex-shrink-0 text-center cursor-pointer p-1 ${
                          selectedDesignIndex === index
                            ? "border-2 border-[#f3bd10] ring-2 ring-[#f3bd10] bg-yellow-50 rounded"
                            : ""
                        }`}
                        onClick={() => handleDesignSelect(design, index)}
                      >
                        <img
                          src={design.src}
                          alt={design.alt || `Design ${index + 1}`}
                          className="w-full h-16 object-cover hover:border-[#f3bd10] rounded"
                        />
                        <p className="text-xs text-gray-600 mt-1">
                          {design.alt || `Design ${index + 1}`}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center py-3 border-b-2 border-gray-400 border-dotted mt-4 mb-4">
                    <label className="font-medium text-sm text-gray-800">
                      DIAMOND QUALITY <span className="text-red-500">*</span>
                    </label>
                    <select className="border border-gray-300 rounded-md p-2 text-sm w-50 ml-4 appearance-none bg-white">
                      {diamondquality.map((w, i) => (
                        <option key={i}>{w}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex justify-between items-center w-full py-3 border-b-2 border-gray-400 border-dotted mb-4">
                    <label className="font-medium text-sm text-gray-800">
                      RING SIZE SYSTEM <span className="text-red-500">*</span>
                    </label>
                    <select className="border border-gray-300 rounded-md p-2 text-sm w-50 ml-4 appearance-none bg-white">
                      {ringsizesystem.map((w, i) => (
                        <option key={i}>{w}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b-2 border-gray-400 border-dotted mt-4 mb-4">
                    <label className="font-medium text-sm text-gray-800">
                      RING SIZE <span className="text-red-500">*</span>
                    </label>
                    <select className="border border-gray-300 rounded-md p-2 text-sm w-50 ml-4 appearance-none bg-white">
                      {ringsize.map((w, i) => (
                        <option key={i}>{w}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Add to Cart / Buy Now */}
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg shadow-md hover:from-orange-600 hover:to-yellow-600 transition flex items-center">
              <ShoppingBagIcon className="w-5 h-5 inline mr-2" /> ADD TO CART
            </button>

            <button
              onClick={handleBuyNow}
              className="px-6 py-3 border-2 border-amber-600 text-amber-700 font-bold rounded-lg hover:bg-amber-50 transition"
            >
              BUY NOW
            </button>
          </div>

          <p className="mt-3 text-sm text-gray-600">
            Expected Dispatch Date : <b>16 OCT, 2025</b>
          </p>
        </div>
      </div>

      {/* Benefits / Product Details */}
      <div className="mt-12 border-t pt-6">
        <h2 className="text-xl font-semibold mb-2">
          PRODUCT DETAIL : {details.displayName}
        </h2>
        <p className="text-gray-700 mb-4">{details.description}</p>

        <h3 className="text-lg font-semibold mb-4">Benefits:</h3>
        <div className="flex flex-wrap gap-6 mb-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full shadow-sm"
            >
              <span className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full font-bold text-sm">
                ✓
              </span>
              <span className="text-gray-800 font-medium">{benefit}</span>
            </div>
          ))}
        </div>


{/* 💫 Ultimate Premium Product Specification */}
<div className="relative mt-20 rounded-3xl overflow-hidden border border-[#e6c87a]/70 bg-gradient-to-br from-[#fff8ef] via-[#fffaf3] to-[#f9f2e8] shadow-[0_4px_40px_rgba(216,180,122,0.2)] p-10 transition-all duration-700 hover:shadow-[0_8px_60px_rgba(199,143,47,0.35)]">

  {/* Header */}
  <button
    onClick={() => setShowSpecs(!showSpecs)}
    className="flex justify-between items-center w-full text-left"
  >
    <h2 className="text-3xl font-bold tracking-wide bg-gradient-to-r from-[#b78b29] via-[#e0b954] to-[#6b3e08] bg-clip-text text-transparent drop-shadow-sm">
      Product Specifications
    </h2>
    <span
      className={`text-4xl font-semibold text-[#6b3e08] transform transition-transform duration-300 ${
        showSpecs ? "rotate-180" : "rotate-0"
      }`}
    >
      ▼
    </span>
  </button>

  {/* Animated Divider */}
  <div className="mt-4 mb-6 h-[2px] w-full bg-gradient-to-r from-transparent via-[#e0b954] to-transparent animate-pulse"></div>

  {/* Collapsible Section */}
  <div
    className={`transition-all duration-700 ease-in-out overflow-hidden ${
      showSpecs ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <div className="grid md:grid-cols-2 gap-x-14 gap-y-6 text-gray-800 mt-6">
      {productSpecifications.map((spec, index) => (
        <div
          key={index}
          className="flex justify-between items-center group border-b border-dashed border-[#e5d1a1] pb-3 px-2 transition-all duration-300 hover:bg-[#fffdf7] hover:scale-[1.01] rounded-lg"
        >
          <span className="font-semibold text-[#5a3d10] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[#d3ad4a] to-[#9a712e] inline-block shadow-sm"></span>
            {spec.label}
          </span>
          <span className="text-[#4b3b1f] font-medium bg-gradient-to-r from-[#fdf6e5] to-[#fffaf0] px-3 py-1 rounded-full border border-[#f1e1b1]/60 shadow-sm">
            {spec.value}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Glow Effect Border */}
  <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-[#f9e6a1]/10 via-transparent to-[#f3d19e]/20 opacity-0 hover:opacity-100 pointer-events-none transition-all duration-700"></div>
</div>




        {/* Bottom components */}
       
        <Chat />
        <Policy />
        {/* <Location /> */}
        <Review />
        <AwardsSection />

{/* 💎 Premium FAQ Section */}
<section className="mt-24 bg-gradient-to-br from-[#fff9ef] via-[#fff3e5] to-[#f8efdd] py-14 px-6 md:px-12 rounded-3xl shadow-[0_4px_30px_rgba(222,186,120,0.25)] border border-[#e8d4a2]/50">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold bg-gradient-to-r from-[#b78b29] via-[#e0b954] to-[#6b3e08] bg-clip-text text-transparent mb-10">
      Frequently Asked Questions
    </h2>
  </div>

  <div className="max-w-4xl mx-auto space-y-5">
    {[
      {
        question: "Are your gemstones natural and certified?",
        answer:
          "Yes, all our gemstones are 100% natural and come with government-recognized certification ensuring authenticity and purity.",
      },
      {
        question: "Can I customize my gemstone jewelry?",
        answer:
          "Absolutely! You can select your gemstone type, metal, and design preferences. Our artisans handcraft each piece to your specifications.",
      },
      {
        question: "Do you provide astrology consultation before purchase?",
        answer:
          "Yes, we offer complimentary astrology consultation with certified astrologers to help you choose the most suitable gemstone for you.",
      },
      {
        question: "What is your return and exchange policy?",
        answer:
          "We offer a hassle-free 7-day return and exchange policy on all certified gemstones and jewelry if the product remains unused and sealed.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Delivery typically takes 5–7 business days within India. For international orders, it may take up to 10–15 days depending on location.",
      },
    ].map((faq, index) => (
      <div
        key={index}
        className="group bg-white/70 backdrop-blur-lg border border-[#e8dcb3]/70 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500"
      >
        <button
          onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
          className="w-full flex justify-between items-center text-left p-5 md:p-6"
        >
          <span className="text-lg md:text-xl font-semibold text-[#5a3d10]">
            {faq.question}
          </span>
          <span
            className={`text-3xl font-bold text-[#b78b29] transform transition-transform duration-300 ${
              activeFAQ === index ? "rotate-45" : "rotate-0"
            }`}
          >
            +
          </span>
        </button>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            activeFAQ === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-6 text-[#4a3a25] text-base leading-relaxed border-t border-dashed border-[#e8dcb3]/70">
            {faq.answer}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
<GemsFeatures/>
<ShippingPolicy/>



      </div>
    </div>
  );
}


