import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GEMSTONE_DETAILS } from "../data/gemstoneDetails";
import Chat from "../components/Chat";
import GemsFeatures from "./GemsFeatures";
import {
    PlusIcon,
    ArrowLeftIcon,
    XMarkIcon,
    ChevronDownIcon,
    FunnelIcon,
    ArrowsUpDownIcon,
} from "@heroicons/react/24/outline";
import { ShoppingBagIcon as ShoppingBagIconSolid } from "@heroicons/react/24/solid";

// CONSTANT for pagination limit
const ITEMS_PER_PAGE = 9999;

// --- Helper Functions ---
const calculateDiscountedPrice = (basePrice, discountTag) => {
    let discount = 0;
    if (discountTag === "10% OFF") {
        discount = 0.1;
    }
    return Math.round(basePrice * (1 - discount));
};

// Weight to carat conversion helper - IMPROVED
const getCaratFromWeight = (weightString) => {
    const match = weightString.match(/\(([\d.]+)\s*carat\)/i);
    return match ? parseFloat(match[1]) : 0;
};

// Get weight range for a specific weight option
const getWeightRange = (weightString) => {
    const carat = getCaratFromWeight(weightString);
    // Define a small range around the target carat for matching
    const tolerance = 0.15; // ±0.15 carat tolerance
    return {
        min: carat - tolerance,
        max: carat + tolerance
    };
};

// --- Filter Component (Accordion) with Scrollable Content ---
const FilterAccordion = ({
    title,
    options,
    selectedFilters,
    onFilterChange,
    type = "checkbox",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const filterKey = title.replace(/\s/g, "");

    const isOptionSelected = (option) => {
        return (
            selectedFilters[filterKey] && selectedFilters[filterKey].includes(option)
        );
    };

    return (
        <div className="border-b border-amber-200">
            <button
                className="flex justify-between items-center w-full py-3 px-1 text-left font-semibold text-gray-700 hover:text-[#6b3e08] transition duration-200"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <PlusIcon
                    className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-[#6b3e08]" : ""
                    }`}
                />
            </button>
            {isOpen && (
                <div 
                    className="pb-3 px-1 text-sm text-gray-600 space-y-1 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-300 scrollbar-track-amber-100"
                    onClick={(e) => e.stopPropagation()}
                >
                    {options.map((option) => {
                        if (option === "-- Please Select --") return null;
                        
                        const isSelected = isOptionSelected(option);
                        return (
                            <div key={option}>
                                <label
                                    htmlFor={`${filterKey}-${option}`}
                                    className={`flex items-center p-2 rounded-lg cursor-pointer transition ${
                                        isSelected
                                            ? "bg-amber-100 text-gray-800 font-semibold shadow-inner"
                                            : "hover:bg-amber-50"
                                    }`}
                                >
                                    <input
                                        type={type}
                                        id={`${filterKey}-${option}`}
                                        name={filterKey}
                                        value={option}
                                        checked={isSelected}
                                        onChange={() => onFilterChange(filterKey, option)}
                                        className="mr-2 accent-amber-600 w-4 h-4"
                                    />
                                    {option}
                                </label>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

// --- Gemstone Listing Card ---
const GemstoneCard = ({ gem, details, globalIndex, onNavigate, onAddToCart }) => {
    const basePrice = gem.basePrice;
    const discountedPrice = gem.discountedPrice;
    const discountTag = gem.tags;
    const isBestseller = gem.isBestseller;
    const tagColor = "bg-red-600";

    return (
        <div className="group bg-white rounded-lg overflow-hidden shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-amber-500 relative">
            {/* Discount/Bestseller Tags */}
            <div className="absolute top-0 right-0 m-1 sm:m-2 z-10 space-y-1">
                <span
                    className={`px-2 py-0.5 text-xs font-bold text-white rounded-full ${tagColor} shadow-md block text-center`}
                >
                    {discountTag}
                </span>
                {isBestseller && (
                    <span className="px-2 py-0.5 text-xs font-bold text-white rounded-full bg-amber-500 shadow-md block text-center">
                        Best Seller
                    </span>
                )}
            </div>

            {/* Gem Image */}
            <img
                src={gem.src}
                alt={`${details.displayName} Gem ${gem.id}`}
                className="w-full h-32 sm:h-48 object-contain p-2 sm:p-4 transform group-hover:scale-105 transition-transform duration-500 bg-gray-50 cursor-pointer"
                onClick={() => onNavigate(gem)}
            />

            {/* Content */}
            <div className="p-3 sm:p-4 text-left space-y-0.5">
                <p className="text-xs text-gray-500 sm:text-base">
                    Origin: {gem.origin} | Carats: {gem.carats.toFixed(2)}
                </p>
                <h3 className="text-base font-semibold text-[#6b3e08] sm:text-lg truncate">
                    {details.displayName} - {gem.carats.toFixed(2)} CT
                </h3>

                {/* Price Display */}
                <div className="flex flex-col mt-1 sm:mt-2">
                    {discountTag === "10% OFF" && (
                        <span className="text-sm text-gray-400 line-through sm:text-base">
                            ₹ {basePrice.toLocaleString()}
                        </span>
                    )}
                    <span className="text-lg font-bold text-red-600 sm:text-xl">
                        ₹ {discountedPrice.toLocaleString()}
                    </span>
                </div>

                {/* Button: Add to Cart */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        if (onAddToCart) {
                            onAddToCart(gem);
                        }
                    }}
                    className="w-full mt-2 sm:mt-3 py-1.5 text-sm sm:py-2 sm:text-base font-bold bg-gradient-to-r from-orange-400 to-yellow-500 text-white rounded-md hover:from-orange-500 hover:to-yellow-600 transition flex items-center justify-center"
                >
                    <ShoppingBagIconSolid className="w-4 h-4 mr-1" /> ADD TO CART
                </button>
            </div>
        </div>
    );
};

// --- Desktop Sort Dropdown ---
const SortDropdown = ({ options, currentSort, onSortChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
                {currentSort}
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </button>

            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 z-20"
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <div className="py-1">
                        {options.map((option) => (
                            <button
                                key={option}
                                onClick={() => {
                                    onSortChange(option);
                                    setIsOpen(false);
                                }}
                                className={`block w-full text-left px-4 py-2 text-sm transition duration-150 ease-in-out ${
                                    currentSort === option
                                        ? "bg-amber-100 font-semibold text-gray-900"
                                        : "text-gray-700 hover:bg-amber-50"
                                }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

// --- Mobile Sort Dropdown ---
const SortDropdownMobile = ({ options, currentSort, onSortChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative flex-1 mx-1">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-3 px-4 flex items-center justify-center bg-white border border-gray-300 text-sm font-medium text-gray-700 rounded-lg shadow-md hover:bg-gray-50"
            >
                <ArrowsUpDownIcon className="h-5 w-5 mr-2" />
                Sort By
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </button>

            {isOpen && (
                <div className="fixed bottom-0 left-0 right-0 max-h-1/2 rounded-t-xl shadow-2xl bg-white ring-1 ring-black ring-opacity-5 z-50 overflow-y-auto">
                    <div className="p-4 border-b flex justify-between items-center">
                        <h3 className="text-lg font-bold text-amber-600">Sort Options</h3>
                        <button onClick={() => setIsOpen(false)} className="p-1">
                            <XMarkIcon className="w-6 h-6 text-gray-700" />
                        </button>
                    </div>
                    <div className="py-1">
                        {options.map((option) => (
                            <button
                                key={option}
                                onClick={() => {
                                    onSortChange(option);
                                    setIsOpen(false);
                                }}
                                className={`block w-full text-left px-4 py-3 text-base transition duration-150 ease-in-out ${
                                    currentSort === option
                                        ? "bg-amber-100 font-bold text-gray-900"
                                        : "text-gray-700 hover:bg-amber-50"
                                }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

// --- Mobile Filter Sidebar with Scrollable Sections ---
const FilterSidebar = ({ isOpen, onClose, selectedFilters, onFilterChange, onClearFilters }) => {
    
    // Weight options without price amounts
    const weights = [
        "-- Please Select --",
        "4.25 ratti (3.83 carat)",
        "4.50 ratti (4.05 carat)",
        "5.00 ratti (4.50 carat)",
        "5.50 ratti (4.95 carat)",
        "6.00 ratti (5.40 carat)",
        "6.25 ratti (5.63 carat)",
        "6.50 ratti (5.85 carat)",
        "7.00 ratti (6.30 carat)",
        "7.25 ratti (6.53 carat)",
        "7.50 ratti (6.75 carat)",
        "8.00 ratti (7.20 carat)",
        "8.50 ratti (7.65 carat)",
        "9.00 ratti (8.10 carat)",
        "9.50 ratti (8.55 carat)",
        "10.00 ratti (9.00 carat)",
        "11.00 ratti (9.90 carat)",
    ];

    const filterOptions = useMemo(() => ([
        { title: "Price", options: ["Under ₹50k", "₹50k - ₹1L", "₹1L - ₹2L", "Above ₹2L"], type: "radio" },
        { title: "Weight", options: weights, type: "radio" },
        { title: "Colour", options: ["Deep Yellow", "Light Yellow", "Brownish", "Deep Blue", "Royal Blue", "Cornflower Blue"], type: "checkbox" },
        { title: "Shape", options: ["Oval", "Cushion", "Round", "Pear", "Emerald", "Cabochon"], type: "checkbox" },
        { title: "Origin", options: ["Sri Lanka", "Bangkok", "Ceylon", "Kashmir", "Burma"], type: "checkbox" },
        { title: "Treatment", options: ["Heated", "Unheated", "Treated"], type: "checkbox" },
        { title: "Cut", options: ["Faceted", "Cabochon", "Step"], type: "checkbox" },
    ]), [weights]);

    const activeFilterCount = Object.keys(selectedFilters).length;

    return (
        <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={onClose}>
            <div className="absolute inset-0 bg-yellow-700 bg-opacity-50"></div>
            <div className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
                <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 sticky top-0 z-10">
                    <h2 className="text-xl font-bold text-amber-600">Filter ({activeFilterCount})</h2>
                    <button onClick={onClose} className="p-2 text-gray-700 hover:text-gray-500">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>
                
                {/* Scrollable filter content */}
                <div className="p-4 pb-20 overflow-y-auto max-h-[calc(100vh-140px)] scrollbar-thin scrollbar-thumb-amber-300 scrollbar-track-amber-100">
                    {activeFilterCount > 0 && (
                        <button onClick={onClearFilters} className="w-full px-4 py-2 mb-4 text-white font-bold bg-red-600 rounded-lg hover:bg-red-700 transition">
                            Clear All ({activeFilterCount})
                        </button>
                    )}
                    {filterOptions.map(filter => (
                        <FilterAccordion
                            key={filter.title}
                            {...filter}
                            selectedFilters={selectedFilters}
                            onFilterChange={onFilterChange}
                        />
                    ))}
                </div>

                <div className="p-4 border-t border-gray-200 sticky bottom-0 bg-white shadow-t-lg z-10">
                    <button onClick={onClose} className="w-full py-3 text-lg font-bold bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition">
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- Mobile Bottom Bar ---
const MobileBottomBar = ({ onOpenFilter, sortOptions, currentSort, onSortChange, filterCount }) => (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white border-t border-gray-200 shadow-2xl p-2 flex justify-around">
        <button onClick={onOpenFilter} className="flex-1 mx-1 flex items-center justify-center py-3 bg-amber-600 text-white rounded-lg font-semibold shadow-md hover:bg-amber-700 transition relative">
            <FunnelIcon className="h-5 w-5 mr-1" /> Filter
            {filterCount > 0 && (
                <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {filterCount}
                </span>
            )}
        </button>
        <SortDropdownMobile options={sortOptions} currentSort={currentSort} onSortChange={onSortChange} />
    </div>
);

// --- Main Detail Page Component ---
const GemstoneDetailPage = () => {
    const { gemName } = useParams();
    const navigate = useNavigate();

    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [gemFound, setGemFound] = useState(true);
    const [selectedFilters, setSelectedFilters] = useState({});
    const [sortOrder, setSortOrder] = useState("Price: Low to High");
    const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);

    // Weight options without price amounts
    const weights = useMemo(() => ([
        "-- Please Select --",
        "4.25 ratti (3.83 carat)",
        "4.50 ratti (4.05 carat)",
        "5.00 ratti (4.50 carat)",
        "5.50 ratti (4.95 carat)",
        "6.00 ratti (5.40 carat)",
        "6.25 ratti (5.63 carat)",
        "6.50 ratti (5.85 carat)",
        "7.00 ratti (6.30 carat)",
        "7.25 ratti (6.53 carat)",
        "7.50 ratti (6.75 carat)",
        "8.00 ratti (7.20 carat)",
        "8.50 ratti (7.65 carat)",
        "9.00 ratti (8.10 carat)",
        "9.50 ratti (8.55 carat)",
        "10.00 ratti (9.00 carat)",
        "11.00 ratti (9.90 carat)",
    ]), []);

    // Navigation handler
    const handleCardClick = useCallback((gem) => {
        navigate(`/GemsStone/gemstone-detail/${gemName}/${gem.id}`, {
            state: { gem, details: details },
        });
    }, [navigate, gemName, details]);

    // Add to Cart handler
    const handleAddToCart = useCallback((gem) => {
        console.log(`**SUCCESS:** Added Gem ID: ${gem.id} (Price: ${gem.discountedPrice.toLocaleString()}) to cart!`);
        alert(`Added ${details.displayName} to cart!`);
    }, [details]);

    // Filter change handler
    const handleFilterChange = useCallback((filterKey, option) => {
        setSelectedFilters((prevFilters) => {
            const currentOptions = prevFilters[filterKey] || [];
            let newOptions;

            if (filterKey === "Price" || filterKey === "Weight") {
                newOptions = currentOptions.includes(option) || option === "-- Please Select --" ? [] : [option];
            } else {
                newOptions = currentOptions.includes(option)
                    ? currentOptions.filter((o) => o !== option)
                    : [...currentOptions, option];
            }

            if (newOptions.length === 0) {
                const { [filterKey]: removedKey, ...rest } = prevFilters;
                return rest;
            }

            return {
                ...prevFilters,
                [filterKey]: newOptions,
            };
        });
    }, []);

    // Function to process and filter designs with IMPROVED WEIGHT FILTERING
    const getFilteredAndSortedDesigns = useCallback(() => {
        if (!details || !details.relatedDesigns) return [];

        const bestSellerIndices = [0, 2, 3, 7, 9, 12];

        let processedDesigns = details.relatedDesigns.map((gem, index) => {
            const basePrice = gem.price || Math.round(80000 + index * 5000);
            let discountTag = "10% OFF";
            let isBestseller = bestSellerIndices.includes(index);

            // Generate consistent carat values based on index for proper filtering
            const baseCarat = 3.0 + (index * 0.5); // More realistic carat progression
            const carat = gem.carats || baseCarat;
            
            // Find the closest matching weight option for this gem
            const gemCarat = carat;
            let closestWeight = weights[1]; // Default to first weight option
            let minDifference = Infinity;

            weights.forEach(weight => {
                if (weight === "-- Please Select --") return;
                const weightCarat = getCaratFromWeight(weight);
                const difference = Math.abs(weightCarat - gemCarat);
                if (difference < minDifference) {
                    minDifference = difference;
                    closestWeight = weight;
                }
            });

            return {
                ...gem,
                carats: carat,
                basePrice,
                discountedPrice: calculateDiscountedPrice(basePrice, discountTag),
                tags: discountTag,
                isBestseller: isBestseller,
                // Ensure all filterable properties exist
                shape: gem.shape || ["Oval", "Cushion", "Round", "Pear", "Emerald", "Cabochon"][index % 6],
                cut: gem.cut || ["Faceted", "Cabochon", "Step"][index % 3],
                treatment: gem.treatment || ["Heated", "Unheated", "Treated"][index % 3],
                origin: gem.origin || ["Sri Lanka", "Bangkok", "Ceylon", "Kashmir", "Burma"][index % 5],
                color: gem.color || ["Deep Yellow", "Light Yellow", "Brownish", "Deep Blue", "Royal Blue"][index % 5],
                weight: gem.weight || closestWeight,
                // Store the actual carat value for accurate filtering
                actualCarat: carat
            };
        });

        // --- COMPREHENSIVE FILTERING ---
        let filteredDesigns = processedDesigns.filter((design) => {
            return Object.entries(selectedFilters).every(([key, values]) => {
                if (values.length === 0) return true;

                // Price Filter
                if (key === "Price") {
                    return values.some((val) => {
                        const price = design.basePrice;
                        if (val === "Under ₹50k") return price < 50000;
                        if (val === "₹50k - ₹1L") return price >= 50000 && price <= 100000;
                        if (val === "₹1L - ₹2L") return price > 100000 && price <= 200000;
                        if (val === "Above ₹2L") return price > 200000;
                        return false;
                    });
                }
                
                // IMPROVED: Weight Filter - Use carat range matching
                if (key === "Weight") {
                    return values.some(selectedWeight => {
                        if (selectedWeight === "-- Please Select --") return false;
                        
                        const selectedCarat = getCaratFromWeight(selectedWeight);
                        const designCarat = design.actualCarat || design.carats;
                        
                        // Use a small tolerance range for matching
                        const tolerance = 0.25; // ±0.25 carat tolerance
                        const minCarat = selectedCarat - tolerance;
                        const maxCarat = selectedCarat + tolerance;
                        
                        return designCarat >= minCarat && designCarat <= maxCarat;
                    });
                }
                
                // Color Filter
                if (key === "Colour") {
                    return values.some(color => 
                        design.color && design.color.toLowerCase().includes(color.toLowerCase().replace('deep', '').replace('light', '').trim())
                    );
                }
                
                // Shape Filter
                if (key === "Shape") {
                    return values.some(shape => 
                        design.shape && design.shape.toLowerCase() === shape.toLowerCase()
                    );
                }
                
                // Origin Filter
                if (key === "Origin") {
                    return values.some(origin => 
                        design.origin && design.origin.toLowerCase().includes(origin.toLowerCase())
                    );
                }
                
                // Treatment Filter
                if (key === "Treatment") {
                    return values.some(treatment => 
                        design.treatment && design.treatment.toLowerCase() === treatment.toLowerCase()
                    );
                }
                
                // Cut Filter
                if (key === "Cut") {
                    return values.some(cut => 
                        design.cut && design.cut.toLowerCase() === cut.toLowerCase()
                    );
                }
                
                return true;
            });
        });

        // --- SORTING ---
        filteredDesigns.sort((a, b) => {
            if (sortOrder === "Price: Low to High") {
                return a.discountedPrice - b.discountedPrice;
            }
            if (sortOrder === "Price: High to Low") {
                return b.discountedPrice - a.discountedPrice;
            }
            if (sortOrder === "Weight (Carats)") {
                return (a.actualCarat || a.carats || 0) - (b.actualCarat || b.carats || 0);
            }
            if (sortOrder === "Newest Arrivals") {
                return b.id - a.id;
            }
            return a.id - b.id;
        });

        return filteredDesigns;
    }, [details, selectedFilters, sortOrder, weights]);

    useEffect(() => {
        setLoading(true);
        const data = GEMSTONE_DETAILS[gemName];

        if (!data) {
            setGemFound(false);
            setLoading(false);
            return; 
        }
        setGemFound(true);
        setDetails(data);
        setSelectedFilters({});
        setSortOrder("Price: Low to High");
        setLoading(false);
        window.scrollTo(0, 0);
    }, [gemName]);

    if (loading) {
        return <div className="text-center py-20 text-2xl text-amber-800">Loading details...</div>;
    }

    if (!gemFound || !details) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
                <div className="p-10 bg-white rounded-xl shadow-2xl border-t-4 border-amber-600">
                    <h2 className="text-4xl font-bold text-red-600 mb-4">Gemstone Not Found 🥺</h2>
                    <p className="text-xl text-gray-700 mb-8">
                        The gemstone **"{gemName}"** could not be located in our catalog.
                    </p>
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center justify-center px-6 py-3 bg-amber-500 text-white font-bold rounded-lg shadow-md hover:bg-amber-600 transition duration-300"
                    >
                        <ArrowLeftIcon className="w-5 h-5 mr-2" />
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    const allFilteredDesigns = getFilteredAndSortedDesigns();
    const totalDesigns = allFilteredDesigns.length;
    const designsToShow = allFilteredDesigns;
    const activeFilterCount = Object.keys(selectedFilters).length;

    const sortOptions = [
        "Weight (Carats)",
        "Price: Low to High",
        "Price: High to Low",
        "Newest Arrivals",
    ];
    
    // Header Section
    const DetailHero = () => (
        <div className="relative w-full overflow-hidden bg-amber-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center">
                <div className="md:w-3/5 text-left md:pr-10">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#6b3e08]">
                        {details.displayName}
                        <span className="text-2xl font-light text-gray-500 block mt-2">
                            {details.hindiName}
                        </span>
                    </h1>
                    <p className="mt-6 text-xl text-gray-700 leading-relaxed max-w-xl">
                        {details.description}
                    </p>
                </div>
                <div className="md:w-2/5 mt-8 md:mt-0 flex justify-center">
                    <img
                        src="../istockphoto-154960096-612x612-removebg-preview.png"
                        alt={`${details.displayName} illustration`}
                        className="w-full max-w-xs md:max-w-md object-cover mr-10"
                        style={{
                            filter: "brightness(1.1) drop-shadow(0 10px 15px rgba(0,0,0,0.2))",
                        }}
                    />
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-white pb-20 lg:pb-0">
            <DetailHero />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Desktop Filter and Sort Bar */}
                <div className="hidden lg:flex justify-between items-center mb-6 border-b pb-4">
                    <span className="text-xl font-semibold text-gray-800">
                        Showing {totalDesigns} {totalDesigns === 1 ? 'Item' : 'Items'}
                        {activeFilterCount > 0 && ` (Filtered)`}
                    </span>
                    <div className="flex items-center space-x-3">
                        <label className="text-gray-600 font-semibold text-sm">Sort By:</label>
                        <SortDropdown options={sortOptions} currentSort={sortOrder} onSortChange={setSortOrder} />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar / Filters (Desktop Only) with Scrollable Content */}
                    <aside className="hidden lg:block lg:w-1/4 w-full p-4 bg-gray-50 rounded-xl shadow-inner h-fit overflow-y-auto sticky top-4">
                        <h2 className="text-2xl font-serif font-bold text-[#6b3e08] mb-4 border-b-2 border-amber-300 pb-2">
                            Filters
                        </h2>
                        {Object.keys(selectedFilters).length > 0 && (
                            <button
                                onClick={() => setSelectedFilters({})}
                                className="w-full px-4 py-2 mb-4 text-white font-bold bg-gradient-to-r from-orange-400 to-yellow-500 rounded-lg hover:from-orange-500 hover:to-yellow-600 transition"
                            >
                                Clear All Filters
                            </button>
                        )}
                        
                        {/* Scrollable filter sections */}
                        <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-thin scrollbar-thumb-amber-300 scrollbar-track-amber-100 pr-2">
                            <FilterAccordion
                                title="Price"
                                options={["Under ₹50k", "₹50k - ₹1L", "₹1L - ₹2L", "Above ₹2L"]}
                                selectedFilters={selectedFilters}
                                onFilterChange={handleFilterChange}
                                type="radio"
                            />
                            <FilterAccordion
                                title="Weight"
                                options={weights}
                                selectedFilters={selectedFilters}
                                onFilterChange={handleFilterChange}
                                type="radio"
                            />
                            <FilterAccordion
                                title="Colour"
                                options={["Deep Yellow", "Light Yellow", "Brownish", "Deep Blue", "Royal Blue", "Cornflower Blue"]}
                                selectedFilters={selectedFilters}
                                onFilterChange={handleFilterChange}
                            />
                            <FilterAccordion
                                title="Shape"
                                options={["Oval", "Cushion", "Round", "Pear", "Emerald", "Cabochon"]}
                                selectedFilters={selectedFilters}
                                onFilterChange={handleFilterChange}
                            />
                            <FilterAccordion
                                title="Origin"
                                options={["Sri Lanka", "Bangkok", "Ceylon", "Kashmir", "Burma"]}
                                selectedFilters={selectedFilters}
                                onFilterChange={handleFilterChange}
                            />
                            <FilterAccordion
                                title="Treatment"
                                options={["Heated", "Unheated", "Treated"]}
                                selectedFilters={selectedFilters}
                                onFilterChange={handleFilterChange}
                            />
                            <FilterAccordion
                                title="Cut"
                                options={["Faceted", "Cabochon", "Step"]}
                                selectedFilters={selectedFilters}
                                onFilterChange={handleFilterChange}
                            />
                        </div>
                    </aside>

                    {/* Gemstone Listing Grid */}
                    <section className="lg:w-3/4 w-full">
                        <div className="lg:hidden text-lg font-semibold text-gray-700 mb-4">
                            Showing {totalDesigns} {totalDesigns === 1 ? 'Item' : 'Items'}
                            {activeFilterCount > 0 && ` (Filtered)`}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                            {designsToShow.length > 0 ? (
                                designsToShow.map((gem, index) => (
                                    <GemstoneCard
                                        key={gem.id}
                                        gem={gem}
                                        details={details}
                                        globalIndex={index}
                                        onNavigate={handleCardClick}
                                        onAddToCart={handleAddToCart}
                                    />
                                ))
                            ) : (
                                <div className="col-span-full text-center py-12">
                                    <p className="text-xl text-gray-500">No gemstones match your current filters.</p>
                                    <button
                                        onClick={() => setSelectedFilters({})}
                                        className="mt-4 px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
                                    >
                                        Clear Filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </section>
                </div>

                {/* Mobile Filter Sidebar */}
                <FilterSidebar
                    isOpen={isFilterSidebarOpen}
                    onClose={() => setIsFilterSidebarOpen(false)}
                    selectedFilters={selectedFilters}
                    onFilterChange={handleFilterChange}
                    onClearFilters={() => setSelectedFilters({})}
                />

                {/* Mobile Bottom Bar */}
                <MobileBottomBar
                    onOpenFilter={() => setIsFilterSidebarOpen(true)}
                    sortOptions={sortOptions}
                    currentSort={sortOrder}
                    onSortChange={setSortOrder}
                    filterCount={activeFilterCount}
                />

                {/* Floating Chat Button */}
                <Chat />
                <GemsFeatures />
            </div>
        </div>
    );
};

export default GemstoneDetailPage;