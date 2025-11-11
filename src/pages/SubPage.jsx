
import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Search, X, Gem, Palette, ListChecks, ChevronRight, ArrowLeft, Loader } from "lucide-react";
import Hero from "./Hero";
import { useNavigate } from 'react-router-dom'; 
import GemsFeatures from "./GemsFeatures";
import Chat from "../components/Chat";

// --- Data: Over 50 Gemstones Structured by Category (Unchanged) ---
const GEMSTONE_DATA = [
  // ... (Your GEMSTONE_DATA is here) ...
  { name: "Blue Sapphire", category: "ZODIAC STONES", shape: "pear", color: "BLUE", src: "https://imgcdn1.gempundit.com/media/catalog/category/blue-sapphire-210203_1.png", link: "#" },
  { name: "Cat's Eye", category: "ZODIAC STONES", shape: "round", color: "YELLOW", src: "https://imgcdn1.gempundit.com/media/catalog/category/cats-eyes-28052025_1.png", link: "#" },
  { name: "Emerald", category: "ZODIAC STONES", shape: "oval", color: "GREEN", src: "https://imgcdn1.gempundit.com/media/catalog/category/emerald-210203.png", link: "#" },
  { name: "Hessonite (Gomed)", category: "ZODIAC STONES", shape: "round", color: "BROWN", src: "https://imgcdn1.gempundit.com/media/catalog/category/hessonite.png", link: "#" },
  { name: "Pearl (Moti)", category: "ZODIAC STONES", shape: "round", color: "WHITE", src: "https://imgcdn1.gempundit.com/media/catalog/category/pearl_3.png", link: "#" },
  { name: "Ruby (Manik)", category: "ZODIAC STONES", shape: "oval", color: "RED", src: "https://imgcdn1.gempundit.com/media/catalog/category/Ruby-_Manik-141025.png", link: "#" },
  { name: "Red Coral (Moonga)", category: "ZODIAC STONES", shape: "cabochon", color: "RED", src: "https://imgcdn1.gempundit.com/media/catalog/category/red-coral-141025.png", link: "#" },
  { name: "White Sapphire", category: "ZODIAC STONES", shape: "round", color: "WHITE", src: "https://imgcdn1.gempundit.com/media/catalog/category/white-sapphire_1.png", link: "#" },
  { name: "Yellow Sapphire (Pukhraj)", category: "ZODIAC STONES", shape: "cushion", color: "YELLOW", src: "https://imgcdn1.gempundit.com/media/catalog/category/yellow-sapphire-210203.png", link: "#" },

  // --- POPULAR VEDIC GEMS ---
  { name: "Amethyst", category: "POPULAR VEDIC GEMS", shape: "round", color: "PURPLE", src: "./Untitled_design__4_-removebg-preview.png", link: "#" },
  { name: "Citrine (Sunela)", category: "POPULAR VEDIC GEMS", shape: "round", color: "YELLOW", src: "https://imgcdn1.gempundit.com/media/catalog/category/citrine-28052025_1.png", link: "#" },
  { name: "Fire Opal", category: "POPULAR VEDIC GEMS", shape: "round", color: "ORANGE", src: "https://imgcdn1.gempundit.com/media/catalog/category/fire-opal-261124.png", link: "#" },
  { name: "Garnet", category: "POPULAR VEDIC GEMS", shape: "round", color: "RED", src: "https://imgcdn1.gempundit.com/media/catalog/category/garnet-061025.png", link: "#" },
  { name: "Iolite (Neeli)", category: "POPULAR VEDIC GEMS", shape: "oval", color: "BLUE", src: "./Untitled_design__3_-removebg-preview.png", link: "#" },
  { name: "Navratna", category: "POPULAR VEDIC GEMS", shape: "mix", color: "MULTICOLORED", src:"./Untitled_design-removebg-preview.png",  link: "#" },
  { name: "Opal", category: "POPULAR VEDIC GEMS", shape: "oval", color: "WHITE", src: "https://cdn.dhanshreegems.com/wysiwyg/gemstones/WHITE_Opal.png", link: "#" },
  { name: "Peridot", category: "POPULAR VEDIC GEMS", shape: "trillion", color: "GREEN", src: "https://imgcdn1.gempundit.com/media/catalog/category/Peridot-061025.png", link: "#" },
  { name: "Pitambari Neelam", category: "POPULAR VEDIC GEMS", shape: "pear", color: "YELLOW", src: "https://imgcdn1.gempundit.com/media/catalog/category/Pitambari-Sapphire.png", link: "#" },
  { name: "Turquoise", category: "POPULAR VEDIC GEMS", shape: "cabochon", color: "BLUE", src: "https://imgcdn1.gempundit.com/media/catalog/category/turquoise-061025.png", link: "#" },
  { name: "White Coral", category: "POPULAR VEDIC GEMS", shape: "cabochon", color: "WHITE", src: "https://imgcdn1.gempundit.com/media/catalog/category/White-Coral-061025.png", link: "#" },
  { name: "Yellow Topaz", category: "POPULAR VEDIC GEMS", shape: "round", color: "YELLOW", src: "https://imgcdn1.gempundit.com/media/catalog/category/yellow-topaz-261124.png", link: "#" },
  { name: "Zircon", category: "POPULAR VEDIC GEMS", shape: "round", color: "BROWN", src: "https://imgcdn1.gempundit.com/media/catalog/category/zircon_1.png", link: "#" },

  // --- EXCLUSIVE GEMSTONES ---
  { name: "Alexandrite", category: "EXCLUSIVE GEMSTONES", shape: "oval", color: "GREEN", src: "https://imgcdn1.gempundit.com/media/catalog/category/alexandrite.png", link: "#" },
  { name: "Burmese Ruby", category: "EXCLUSIVE GEMSTONES", shape: "round", color: "RED", src: "https://imgcdn1.gempundit.com/media/catalog/category/burmese-ruby-061025.png", link: "#" },
  { name: "Columbian Emerald", category: "EXCLUSIVE GEMSTONES", shape: "oval", color: "GREEN", src: "https://imgcdn1.gempundit.com/media/catalog/category/colombian-emerald-061025.png", link: "#" },
  { name: "Cornflower Blue Sapphire", category: "EXCLUSIVE GEMSTONES", shape: "round", color: "BLUE", src: "https://imgcdn1.gempundit.com/media/catalog/category/cornflower-blue-sapphire-261124.png", link: "#" },
  { name: "Kashmir Blue Sapphire", category: "EXCLUSIVE GEMSTONES", shape: "oval", color: "BLUE", src: "https://imgcdn1.gempundit.com/media/catalog/category/Kashmir-Blue-Sapphire-061025.png", link: "#" },
  { name: "No Oil Emerald", category: "EXCLUSIVE GEMSTONES", shape: "emerald", color: "GREEN", src: "https://imgcdn1.gempundit.com/media/catalog/category/no-oil-emerald-141025.png", link: "#" },
  { name: "Panjshir Emerald", category: "EXCLUSIVE GEMSTONES", shape: "oval", color: "GREEN", src: "https://imgcdn1.gempundit.com/media/catalog/category/Panjshir-Emerald-1_1-061025.png", link: "#" },
  { name: "Padparadscha Sapphire", category: "EXCLUSIVE GEMSTONES", shape: "cushion", color: "ORANGE", src: "https://imgcdn1.gempundit.com/media/catalog/category/Padparadscha-Sapphire-061025.png", link: "#" },
  { name: "Paraiba Tourmaline", category: "EXCLUSIVE GEMSTONES", shape: "round", color: "BLUE", src: "https://imgcdn1.gempundit.com/media/catalog/category/paraiba_Tourmaline-061025.png", link: "#" },
  { name: "Pigeon Blood Ruby", category: "EXCLUSIVE GEMSTONES", shape: "oval", color: "RED", src: "https://imgcdn1.gempundit.com/media/catalog/category/pigeon_blood_ruby_nav-061025.png", link: "#" },
  { name: "Pink Sapphire", category: "EXCLUSIVE GEMSTONES", shape: "round", color: "PINK", src: "https://imgcdn1.gempundit.com/media/catalog/category/pink-sapphire-261124.png", link: "#" },
  { name: "Royal Blue Sapphire", category: "EXCLUSIVE GEMSTONES", shape: "oval", color: "BLUE", src: "https://imgcdn1.gempundit.com/media/catalog/category/royal-blue-sapphire-261124.png", link: "#" },
  { name: "Tanzanite", category: "EXCLUSIVE GEMSTONES", shape: "trillion", color: "PURPLE", src: "https://imgcdn1.gempundit.com/media/catalog/category/tanzanite-191204.png", link: "#" },
  { name: "Vivid Green Emerald", category: "EXCLUSIVE GEMSTONES", shape: "emerald", color: "GREEN", src: "https://imgcdn1.gempundit.com/media/catalog/category/Vivid_Green_Emerald-061025.png", link: "#" },

  // --- OTHER GEMSTONES ---
  { name: "Amber", category: "OTHER GEMSTONES", shape: "round", color: "YELLOW", src: "https://imgcdn1.gempundit.com/media/catalog/category/amber-061025.png", link: "#" },
  { name: "Ametrine", category: "OTHER GEMSTONES", shape: "emerald", color: "MULTICOLORED", src: "./ametrine_-_Edited-removebg-preview.png", link: "#" },
  { name: "Aquamarine", category: "OTHER GEMSTONES", shape: "oval", color: "BLUE", src: "https://imgcdn1.gempundit.com/media/catalog/category/Aquamarine_4.png", link: "#" },
  { name: "Blue Topaz", category: "OTHER GEMSTONES", shape: "oval", color: "BLUE", src: "./Untitled_design__5_-removebg-preview.png", link: "#" },
  { name: "Kyanite", category: "OTHER GEMSTONES", shape: "oval", color: "BLUE", src: "https://imgcdn1.gempundit.com/media/catalog/category/kynaite-060820_1.png", link: "#" },
  { name: "Lapis Lazuli", category: "OTHER GEMSTONES", shape: "round", color: "BLUE", src: "./Untitled_design__2_-removebg-preview.png", link: "#" },
  { name: "Moldavite", category: "OTHER GEMSTONES", shape: "rough", color: "GREEN", src: "https://imgcdn1.gempundit.com/media/catalog/category/moldavite_1_2.png", link: "#" },
  { name: "Moonstone", category: "OTHER GEMSTONES", shape: "cabochon", color: "WHITE", src: "https://imgcdn1.gempundit.com/media/catalog/category/moonstone-28052025.png", link: "#" },
  { name: "Star Ruby", category: "OTHER GEMSTONES", shape: "cabochon", color: "RED", src: "https://imgcdn1.gempundit.com/media/catalog/category/star-ruby-1_1.png", link: "#" },
  { name: "Tourmaline", category: "OTHER GEMSTONES", shape: "baguette", color: "MULTICOLORED", src: "https://imgcdn1.gempundit.com/media/catalog/category/tourmaline_3.png", link: "#" },
  { name: "Spinel", category: "OTHER GEMSTONES", shape: "round", color: "RED", src: "https://imgcdn1.gempundit.com/media/catalog/category/spinel_1_1.png", link: "#" },
  { name: "Blue Zircon", category: "OTHER GEMSTONES", shape: "pear", color: "BLUE", src: "https://imgcdn1.gempundit.com/media/catalog/category/brown-zircon-261124.png", link: "#" },
  { name: "Basra Pearl", category: "OTHER GEMSTONES", shape: "round", color: "WHITE", src: "https://imgcdn1.gempundit.com/media/catalog/category/basra-pearls-061025.png", link: "#" },
  { name: "Black Onyx", category: "OTHER GEMSTONES", shape: "round", color: "BLACK", src: "https://imgcdn1.gempundit.com/media/catalog/category/black-onyx-261124.png", link: "#" },
  { name: "Clinohumite", category: "OTHER GEMSTONES", shape: "round", color: "RED", src: "./clinohumite-removebg-preview.png", link: "#" },
  { name: "Fire Agate", category: "OTHER GEMSTONES", shape: "round", color: "BROWN", src: "https://imgcdn1.gempundit.com/media/catalog/category/fire-agate-061025.png", link: "#" },
  { name: "Jasper", category: "OTHER GEMSTONES", shape: "oval", color: "RED", src: "./Untitled_design__8_-removebg-preview.png", link: "#" },
  { name: "Pyrite", category: "OTHER GEMSTONES", shape: "round", color: "WHITE", src: "./Untitled_design__7_-removebg-preview.png", link: "#" },
  { name: "Malachite", category: "OTHER GEMSTONES", shape: "round", color: "GREEN", src: "./Untitled_design__1_-removebg-preview - Copy.png", link: "#" },
  { name: "Howlite", category: "OTHER GEMSTONES", shape: "round", color: "BLUE", src: "./Untitled_design__6_-removebg-preview.png", link: "#" },
  { name: "Fluorite", category: "OTHER GEMSTONES", shape: "oval", color: "GREEN", src: "https://imgcdn1.gempundit.com/media/catalog/category/fluorite-28052025.png", link: "#" },

  // --- SPECIAL COLLECTIONS ---
  { name: "Matched Pairs", category: "SPECIAL COLLECTIONS", shape: "mix", color: "WHITE", src: "./Matched-Pairs-removebg-preview.png", link: "#" },
  { name: "Gemstone Sets", category: "SPECIAL COLLECTIONS", shape: "mix", color: "MULTICOLORED", src: "./sets-removebg-preview.png", link: "#" },

  { name: "Fancy Cuts", category: "SPECIAL COLLECTIONS", shape: "mix", color: "PINK", src: "./gp110384-2-180123-removebg-preview.png", link: "#" },
  { name: "Carved Gemstones", category: "SPECIAL COLLECTIONS", shape: "carved", color: "GREEN", src: "./Carved-Gemstones-removebg-preview.png", link: "#" },
  { name: "Coral Ganesha", category: "SPECIAL COLLECTIONS", shape: "carved", color: "RED", src: "./Coral-Ganesha-removebg-preview.png", link: "#" },

  { name: "GRS Certified Gemstones", category: "SPECIAL COLLECTIONS", shape: "round", color: "BLUE", src: "./gp152294-1-240625-removebg-preview.png",
 link: "#" },

 {name: "GRS Certified Gemstones", category: "SPECIAL COLLECTIONS", shape: "oval", color: "YELLOW", src: "./gp151057-1-310525-removebg-preview.png", link: "#"},

  { name: "Gubelin Certified Gemstones", category: "SPECIAL COLLECTIONS", shape: "pear", color: "RED", src: "./gp100380-1-060922-removebg-preview.png", link: "#" },
  { name: "IGI Certified Gemstones", category: "SPECIAL COLLECTIONS", shape: "emerald", color: "BROWN", src: "./gp111383-3-150323-removebg-preview.png", link: "#" },
];

// This structure defines the fixed list view for CATEGORY mode. (Unchanged)
const CATEGORY_STRUCTURE = [
  {
    title: "ZODIAC STONES (RASHI RATNA)",
    icon: '',
    gems: [
      "Blue Sapphire", "Cat's Eye", "Emerald (Panna)", "Hessonite (Gomed)",
      "Pearl (Moti)", "Ruby (Manik)", "Red Coral (Moonga)", "White Sapphire",
      "Yellow Sapphire (Pukhraj)",
    ],
  },
  {
    title: "POPULAR VEDIC GEMS",
    icon: '',
    gems: [
      "Amethyst", "Citrine (Sunela)", "Fire Opal", "Garnet", "Iolite (Neeli)", "Navratna",
      "Opal", "Peridot", "Pitambari Neelam", "Turquoise", "White Coral", "Yellow Topaz", "Zircon",
    ],
  },
  {
    title: "EXCLUSIVE GEMSTONES",
    icon: '',
    gems: [
      "Alexandrite", "Burmese Ruby", "Columbian Emerald", "Cornflower Blue Sapphire",
      "Kashmir Blue Sapphire", "No Oil Emerald", "Panjshir Emerald", "Padparadscha Sapphire",
      "Paraiba Tourmaline", "Pigeon Blood Ruby", "Pink Sapphire", "Royal Blue Sapphire",
      "Tanzanite", "Vivid Green Emerald",
    ],
  },
  {
    title: "OTHER GEMSTONES",
    icon: '',
    gems: [
      "Amber", "Ametrine", "Aquamarine", "Blue Topaz", "Kyanite", "Lapis Lazuli",
      "Moldavite", "Moonstone", "Star Ruby", "Tourmaline", "Spinel", "Blue Zircon",
      "Basra Pearl", "Black Onyx", "Clinohumite", "Fire Agate", "Jasper", "Pyrite", "Malachite", "Howlite", "Fluorite",
    ],
  },
  {
    title: "SPECIAL COLLECTIONS",
    icon: '',
    gems: [
      "Matched Pairs", "Gemstone Sets", "Fancy Cuts", "Carved Gemstones",
      "Coral Ganesha", "GRS Certified Gemstones", "GIA Certified Gemstones",
      "Gubelin Certified Gemstones", "IGI Certified Gemstones",
    ],
  },
];


const allColors = [...new Set(GEMSTONE_DATA.map(g => g.color))].sort();

// Helper functions (shapeClass, getColorClass are unchanged)
const shapeClass = (shape) => {
  switch (shape) {
    case "round":
      return "rounded-full";
    case "oval":
      return "rounded-[48%_52%_48%_52%/52%_48%_52%_48%]";
    case "emerald":
      return "rounded-md";
    case "pear":
      return "rounded-[56%_56%_64%_64%/66%_66%_38%_38%]";
    case "cushion":
      return "rounded-[10px]";
    case "cabochon":
      return "rounded-[50%_50%_50%_50%/60%_60%_40%_40%]";
    default:
      return "rounded-xl";
  }
};

const getColorClass = (color) => {
  switch (color.toUpperCase()) {
    case 'RED': return 'bg-red-600';
    case 'ORANGE': return 'bg-orange-500';
    case 'GREEN': return 'bg-emerald-600';
    case 'YELLOW': return 'bg-yellow-400';
    case 'BLUE': return 'bg-sky-500';
    case 'PURPLE': return 'bg-purple-600';
    case 'WHITE': return 'bg-gray-300';
    case 'BLACK': return 'bg-gray-800';
    case 'PINK': return 'bg-pink-400';
    case 'BROWN': return 'bg-amber-800';
    case 'MULTICOLORED': return 'bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500';
    default: return 'bg-gray-400';
  }
};


// --- Main Component ---

export default function SubPage() {
  const [searchText, setSearchText] = useState("");
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [viewMode, setViewMode] = useState('GALLERY');


  
  // 1. NEW: State to track the active category in the mobile scroll view
  const [selectedCategoryTitle, setSelectedCategoryTitle] = useState(CATEGORY_STRUCTURE[0].title); 
  

  // --- Load More / Mobile Detection ---
  const INITIAL_LOAD_COUNT = 10;
  const LOAD_STEP = 10;
  const MOBILE_BREAKPOINT = 640; 
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD_COUNT);
  const [isMobile, setIsMobile] = useState(false);

  // A-Z array for alphabet filter
  const alphabet = useMemo(() => Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)), []);

  // --- Screen Size Effect (Unchanged) ---
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT);
    };

// useEffect(() => {
//   const handleResize = () => setIsMobile(window.innerWidth < 768);
//   handleResize();
//   window.addEventListener("resize", handleResize);
//   return () => window.removeEventListener("resize", handleResize);
// }, []);


    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);


  // --- Filtering Logic (Memoized) --- (Unchanged)
  const filteredGems = useMemo(() => {
    setVisibleCount(INITIAL_LOAD_COUNT); 

    let results = GEMSTONE_DATA;

    if (searchText) {
      const searchLower = searchText.toLowerCase();
      results = results.filter(g => g.name.toLowerCase().includes(searchLower));
    }
    
    if (!searchText && selectedLetter) {
        results = results.filter(g => g.name.toUpperCase().startsWith(selectedLetter));
    }

    if (selectedColor) {
      results = results.filter(g => g.color.toUpperCase() === selectedColor.toUpperCase());
    }
    
    return results;
  }, [searchText, selectedLetter, selectedColor]);
  
  // --- Handlers --- (Unchanged)
  const handleClearFilters = () => {
    setSearchText("");
    setSelectedLetter(null);
    setSelectedColor(null);
    setVisibleCount(INITIAL_LOAD_COUNT); 
    setViewMode('GALLERY');
  };
  
  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + LOAD_STEP);
  };

  const handleAlphabetClick = (letter) => {
    if (selectedLetter === letter) {
      setSelectedLetter(null);
    } else {
      setSelectedLetter(letter);
      setSearchText(""); 
    }
  };

  const handleColorClick = (color) => {
    if (selectedColor === color) {
      setSelectedColor(null);
    } else {
      setSelectedColor(color);
    }
  };


// category name navigate
const handleCategoryGemClick = (gemName) => {
  const gem = GEMSTONE_DATA.find(
    (item) => item.name.toLowerCase() === gemName.toLowerCase()
  );

  if (gem) {
    const formattedName = gem.name.toLowerCase().replace(/\s+/g, "-");
    navigate(`/GemsStone/gemstone-detail/${formattedName}`, { state: { gem } });
  } else {
    console.error("Gem not found:", gemName);
  }
};

  const navigate = useNavigate();
const handleNavigateToDetails = (gem) => {
    // format gem name for URL (remove spaces, lowercase)
    const formattedName = gem.name.toLowerCase().replace(/\s+/g, "-");

    // navigate to /GemsStone/gemstone-detail/:gemName
    navigate(`/GemsStone/gemstone-detail/${formattedName}`, { state: { gem } });
  };


  
// --- MODIFIED: GemstoneCard Component for Textured, Premium Look ---
const GemstoneCard = useCallback(({ gem }) => (
    <a
      // href={gem.link}
        onClick={() => handleNavigateToDetails(gem)}

      className="group relative block w-full rounded-xl **bg-amber-50** shadow-xl overflow-hidden
                 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl
                 border-2 border-transparent hover:border-amber-500" // Stronger golden hover border
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl **bg-amber-100/50**">
        
        {/* Background Texture/Light - Linen Effect */}
        <div className="absolute inset-0 bg-repeat opacity-50" 
             style={{ backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjUiIG51bE9jdGF2ZXM9IjIiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMSIvPjwvc3ZnPg==)' }}>
        </div>
        
        {/* Pedestal Effect - Warmer Tone with Shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-amber-50 rounded-t-lg
                        shadow-[0_-10px_20px_-8px_rgba(139,92,246,0.3)] flex items-center justify-center">
            {/* Inner pedestal detail */}
            <div className="w-2/3 h-2 bg-amber-200 rounded-full shadow-inner"></div>
        </div>

        {/* Gemstone Image */}
        <img
          src={gem.src}
          alt={gem.name}
          className={`absolute bottom-[10%] left-1/2 -translate-x-1/2 object-contain max-h-[75%] max-w-[75%]
                      transition-transform duration-500 ease-out group-hover:scale-110`}
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x112/fff/8c6239?text=Gem" }}
        />
      </div>

      {/* Gem Name Section - Integrated into warm card body */}
      <div className="py-4 px-3 text-center **bg-amber-50** border-t border-amber-200">
          <h3 className="text-lg font-serif font-bold text-[#6b3e08] truncate">
              {gem.name}
          </h3>
      </div>
    </a>
  ), []);


  const AlphabetFilter = () => (
    <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 p-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-inner border border-amber-100">
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => handleAlphabetClick(letter)}
          disabled={!!searchText} 
          className={`w-8 h-8 text-lg font-bold rounded-full transition-all duration-200 
            ${selectedLetter === letter 
                ? 'bg-[#6b3e08] text-white shadow-lg scale-110' 
                : 'bg-white text-[#6b3e08] hover:bg-amber-100/80'
            }
            ${!!searchText ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`
          }
        >
          {letter}
        </button>
      ))}
    </div>
  );

  const ColorFilter = () => (
    <div className="flex flex-wrap justify-center gap-3 py-4">
      {allColors.map((color) => (
        <button
          key={color}
          onClick={() => handleColorClick(color)}
          className={`flex items-center space-x-2 p-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md ${
            selectedColor === color
              ? `${getColorClass(color)} text-white ring-4 ring-amber-300 ring-offset-2 ring-offset-[#fffaf5]`
              : 'bg-white text-[#6b3e08] hover:bg-amber-50'
          }`}
        >
          <span className={`w-4 h-4 rounded-full ${getColorClass(color)} border border-gray-200`}></span>
          <span>{color}</span>
        </button>
      ))}
    </div>
  );

  const FilterSummary = () => {
    const activeFilters = [
      searchText && `Name: "${searchText}"`,
      selectedLetter && `Starts with: "${selectedLetter}"`,
      selectedColor && `Color: ${selectedColor}`,
    ].filter(Boolean);

    if (activeFilters.length === 0) return null;

    return (
      <div className="p-3 bg-amber-50/50 rounded-lg shadow-inner mt-6 border border-amber-100 flex items-center justify-between">
        <p className="text-sm font-medium text-[#6b3e08]">
          **Active Filters:** {activeFilters.join(' | ')} ({filteredGems.length} results)
        </p>
        <button onClick={handleClearFilters} className="text-gray-500 hover:text-red-600 transition-colors p-1 rounded-full hover:bg-red-50" aria-label="Clear all filters">
          <X className="w-4 h-4" />
        </button>
        </div>
    );
  };

  // 2. NEW: Mobile-only scrollable category buttons
  const MobileCategoryScroll = () => (
    <div 
      // Hide on screens larger than mobile (sm:hidden)
      // Enable horizontal scrolling and prevent wrapping (flex overflow-x-scroll whitespace-nowrap)
      className="sm:hidden flex overflow-x-scroll pb-4 mb-4 whitespace-nowrap"
      // Inline style to hide the standard scrollbar on most browsers
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
    >
      {CATEGORY_STRUCTURE.map((category) => (
        <button
          key={category.title}
          // Update the state when clicked
          onClick={() => setSelectedCategoryTitle(category.title)}
          className={`
            shrink-0 px-5 py-2.5 mx-1.5 
            rounded-full text-sm font-semibold 
            transition-all duration-300 shadow-md 
            ${selectedCategoryTitle === category.title
              ? 'bg-gradient-to-r from-orange-500 to-yellow-400 text-white ring-2 ring-amber-300 scale-105'
              : 'bg-white text-gray-700 hover:bg-amber-100/70'
            }
          `}
        >
          {category.icon} {category.title.split(' ')[0]}
        </button>
      ))}
    </div>
  );


  // 3. MODIFIED: CategoryView now uses MobileCategoryScroll and filters list for mobile
  const CategoryView = () => (
    <>
      {/* --- Back Button --- */}
      <div className="mb-8 flex justify-start">
        <button 
          onClick={() => setViewMode('GALLERY')}
          className="flex items-center space-x-2 px-6 py-3 bg-[#ffb347] text-[#6b3e08] font-bold rounded-full shadow-lg transition-all duration-300 hover:bg-[#ff9933] hover:shadow-xl ring-2 ring-white ring-offset-2 ring-offset-[#fffaf5]"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Gems Gallery</span>
        </button>
        <div className="flex-grow"></div>
      </div>
    
      {/* --- RENDER MOBILE SCROLL FILTER HERE --- */}
      <MobileCategoryScroll />

      {/* --- DESKTOP VIEW: Full Grid --- */}
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {CATEGORY_STRUCTURE.map((category, index) => (
          <div key={index} className="p-6 bg-white rounded-2xl shadow-xl border-t-8 border-amber-300 transition-all duration-500 hover:shadow-2xl h-full w-full flex flex-col">
            <h3 className="text-xl font-bold font-serif mb-4 text-[#6b3e08] flex items-center shrink-0">
              {category.icon} 
              <span className="ml-3">{category.title}</span>
            </h3>
            
            <hr className="border-t border-amber-100 mb-4 shrink-0" />

            {/* List of Gems */}
            <ul className="space-y-2 text-gray-700 list-none p-0 flex-grow overflow-auto">
              {category.gems.map((gemName, gemIndex) => (
                <li key={gemIndex} className="flex items-start text-base hover:bg-amber-50/50 p-1 rounded-md transition-colors">
                  <ChevronRight className="w-4 h-4 text-amber-500 mt-1 mr-2 shrink-0" />
{/*                   <a href="#" className="hover:text-[#8c6239] transition-colors font-medium">
                      {gemName}
                  </a> */}
<p
  onClick={() => handleCategoryGemClick(gemName)}
  className="cursor-pointer hover:text-[#8c6239] transition-colors font-medium"
>
  {gemName}
</p>

                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* --- MOBILE VIEW: Single Filtered List --- */}
      <div className="sm:hidden mt-6">
        {CATEGORY_STRUCTURE
          // Filter to show only the currently selected category
          .filter(c => c.title === selectedCategoryTitle)
          .map((category) => (
            <div key={category.title} className="p-6 bg-white rounded-2xl shadow-xl border-t-8 border-amber-300">
              <h3 className="text-2xl font-bold font-serif mb-4 text-[#6b3e08] flex items-center">
                {category.icon} 
                <span className="ml-3">{category.title}</span>
              </h3>
              <hr className="border-t border-amber-100 mb-4" />
              <ul className="space-y-3 text-gray-700 list-none p-0">
                {category.gems.map((gemName, gemIndex) => (
                  <li key={gemIndex} className="flex items-start text-base hover:bg-amber-50/50 p-1 rounded-md transition-colors">
                    <ChevronRight className="w-4 h-4 text-amber-500 mt-1 mr-2 shrink-0" />
{/*                     <a href="#" className="hover:text-[#8c6239] transition-colors font-medium">
                        {gemName}
                    </a> */}
<p
  onClick={() => handleCategoryGemClick(gemName)}
  className="cursor-pointer hover:text-[#8c6239] transition-colors font-medium"
>
  {gemName}
</p>

                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </>
  );

  const GalleryView = () => {
    const shouldSlice = isMobile && filteredGems.length > INITIAL_LOAD_COUNT;

    const gemsToDisplay = shouldSlice
      ? filteredGems.slice(0, visibleCount)
      : filteredGems;

    const hasMore = filteredGems.length > visibleCount;

    return (
      <>
        <FilterSummary />
        {/* Grid kept at xl:grid-cols-4 and gap-10 for larger cards and wider spacing */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 mt-6">
          {gemsToDisplay.map((g) => (
            <GemstoneCard key={g.name} gem={g} />
          ))}
        </div>

        {filteredGems.length > 0 && hasMore && isMobile && (
          <div className="mt-8 text-center">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-[#ffb347] text-[#6b3e08] font-bold rounded-full shadow-lg transition-all duration-300 hover:bg-[#ff9933] hover:shadow-xl flex items-center justify-center mx-auto"
            >
              <Loader className="w-5 h-5 mr-2 animate-spin-slow" />
              Load More 
            </button>
          </div>
        )}

        {filteredGems.length === 0 && (
          <p className="text-center text-xl text-gray-500 mt-12 py-10 bg-white/80 rounded-xl shadow-inner border border-amber-100">
            <X className="inline-block w-6 h-6 mr-2 text-red-500" />
            No gemstones match your current filters. Try clearing your search.
          </p>
        )}
      </>
    );
  };


// --- Render ---
  return (

  
    <section className=" min-h-screen bg-gradient-to-b from-[#fffaf5] to-[#fffaf5] font-sans">
        {/* MODIFIED: Removed 'mb-20' and 'pb-12' from the section to fully remove extra bottom space. */}

      <div className="">
          <Hero/>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
        {/* --- Header & Search --- */}
        <header className="text-center mb-10 sm:mb-14 pt-12">
            {/* ADDED: pt-12 to the header for top spacing after the Hero component. */}
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#6b3e08] mb-2">
            Explore Our Gemstone Collection
          </h1>
          <p className="text-lg text-[#8c6239]">
            "Find the perfect GemsStone that matches your personality.”
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search by gemstone name..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                setSelectedLetter(null); 
              }}
              className="w-full pl-12 pr-4 py-3 border-2 border-amber-300 rounded-full shadow-lg focus:border-[#6b3e08] focus:ring-1 focus:ring-[#6b3e08] transition-all duration-300 text-gray-700 placeholder-gray-400"
            />
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-amber-500" />
            {searchText && (
              <button onClick={() => setSearchText("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500">
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </header>
        
 {/* --- Tab / View Switch --- */}
<div className="flex flex-wrap justify-center border-b border-amber-200 mb-6">
  <button
    onClick={() => setViewMode('GALLERY')}
    className={`py-3 px-6 text-base sm:text-lg font-semibold flex items-center transition-colors duration-300 ${
      viewMode === 'GALLERY'
        ? 'text-[#6b3e08] border-b-4 border-[#ffb347]'
        : 'text-gray-500 hover:text-[#8c6239]'
    }`}
  >
    <Gem className="w-5 h-5 mr-2" />
    Gems Gallery
  </button>

  <button
    onClick={() => setViewMode('CATEGORY')}
    onClickCapture={handleClearFilters}
    className={`py-3 px-6 text-base sm:text-lg font-semibold flex items-center transition-colors duration-300 ${
      viewMode === 'CATEGORY'
        ? 'text-[#6b3e08] border-b-4 border-[#ffb347]'
        : 'text-gray-500 hover:text-[#8c6239]'
    }`}
  >
    <ListChecks className="w-5 h-5 mr-2" />
    Select Your Gems Category
  </button>
</div>

{/* --- Filter Controls (Visible in Gallery Mode) --- */}
{viewMode === 'GALLERY' && (
  <>
    <h2 className="text-lg sm:text-xl font-bold text-center text-[#6b3e08] my-4 pt-4 flex items-center justify-center">
      <Palette className="w-5 h-5 mr-2" />
      BY COLOR
    </h2>
    <ColorFilter />

    <h2 className="text-lg sm:text-xl font-bold text-center text-[#6b3e08] my-6 flex items-center justify-center">
      <Gem className="w-5 h-5 mr-2" />
      BY NAME (A–Z)
    </h2>
    <AlphabetFilter />
  </>
)}

{/* --- Results Display --- */}
<div className="mt-8">
  {viewMode === 'GALLERY' ? <GalleryView /> : <CategoryView />}
</div>




</div>
<div className="mt-15"><Chat/></div>

    <div className="">
        {/* Controlled padding at the bottom of the page */}
        <GemsFeatures/>
    </div>





    </section>

  );
}