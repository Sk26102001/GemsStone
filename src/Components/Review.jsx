
// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

// export default function Review() {
//   const [page, setPage] = useState(0);
//   const [expanded, setExpanded] = useState({});
//   const reviewsPerPage = 3;

//   const reviews = [
//     {
//       id: 1,
//       image: "https://imgcdn1.gempundit.com/media/testimonial/17225992593212.jpg",
//       title: "Quality red coral with lab certification.",
//       name: "S Mohanty",
//       location: "India",
//       review:
//         "Satisfied with their prompt customer service and hassle-free delivery process. Ordered a Red Coral Gemstone that came with a lab certificate, and the quality of the gem was amazing. Will definitely shop again!",
//     },
//     {
//       id: 2,
//       image: "https://imgcdn1.gempundit.com/media/testimonial/17284704189895.jpg",
//       title: "Exceptional quality and seamless shopping experience.",
//       name: "Mukund Kumar",
//       location: "India",
//       review:
//         "Amazing experience buying the gemstone and gold ring from GemPundit. The team was very professional and supportive. The product was exactly as shown and arrived on time. Highly recommend their service!",
//     },
//     {
//       id: 3,
//       image: "https://imgcdn1.gempundit.com/media/testimonial/17285500218334.jpg",
//       title: "Excellence and very professional service.",
//       name: "Shreyashkar",
//       location: "India",
//       review:
//         "The red coral ring I received was excellent. Packaging, finish, and gemstone clarity were perfect. Appreciate their transparent pricing and quick response on WhatsApp!",
//     },
//     {
//       id: 4,
//       image: "https://imgcdn1.gempundit.com/media/testimonial/15240504884238.jpg",
//       title: "Authentic product with great value.",
//       name: "Neha Patel",
//       location: "USA",
//       review:
//         "Purchased a coral stone and was amazed at the authenticity certificate. Packaging was very premium. Delivery was quick, and support guided me throughout the process.",
//     },
//     {
//       id: 5,
//       image: "https://via.placeholder.com/150x150?text=Gold+Ring",
//       title: "Simply beautiful and genuine gemstone.",
//       name: "Rahul Verma",
//       location: "Delhi, India",
//       review:
//         "The gemstone was genuine and beautifully polished. I appreciate the lab report that came along. Delivery was smooth, and the staff was courteous.",
//     },
//     {
//       id: 6,
//       image: "https://via.placeholder.com/150x150?text=Red+Gem",
//       title: "Highly satisfied with the product.",
//       name: "Aarti Sharma",
//       location: "Canada",
//       review:
//         "I loved the coral pendant I bought! It looked even better than the pictures. Packaging was neat and delivery time was faster than expected. Highly recommended!",
//     },
//   ];

//   const totalPages = Math.ceil(reviews.length / reviewsPerPage);

//   const toggleExpand = (id) => {
//     setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   const handlePrev = () => {
//     setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
//   };

//   const handleNext = () => {
//     setPage((p) => (p === totalPages - 1 ? 0 : p + 1));
//   };

//   const currentReviews = reviews.slice(
//     page * reviewsPerPage,
//     page * reviewsPerPage + reviewsPerPage
//   );

//   return (
//     <section className="bg-gray-50 py-12">
//       <div className="max-w-7xl mx-auto px-6 relative">
//         {/* HEADER */}
//         <div className="flex flex-wrap justify-between items-center mb-10 gap-4">
//           {/* Google & Trustpilot */}
//           <div className="flex items-center gap-4 flex-wrap">
//             {/* Google */}
//             <div className="flex items-center gap-3 bg-white rounded-full px-5 py-2 shadow border border-gray-200">
//               <img
//                 src="https://www.svgrepo.com/show/475656/google-color.svg"
//                 alt="Google"
//                 className="w-6 h-6"
//               />
//               <div>
//                 <div className="font-semibold text-gray-800 text-sm">
//                   4.7 <span className="text-yellow-400">★★★★★</span>
//                 </div>
//                 <div className="text-xs text-gray-500">
//                   2500+ Google Reviews
//                 </div>
//               </div>
//             </div>

//             {/* Trustpilot */}
//             <div className="flex items-center gap-3 bg-white rounded-full px-5 py-2 shadow border border-gray-200">
//               <img
//                 src="https://cdn.worldvectorlogo.com/logos/trustpilot-2.svg"
//                 alt="Trustpilot"
//                 className="w-6 h-6"
//               />
//               <div>
//                 <div className="font-semibold text-gray-800 text-sm">
//                   4.4 <span className="text-green-500">★★★★★</span>
//                 </div>
//                 <div className="text-xs text-gray-500">
//                   960+ Trustpilot Reviews
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Title */}
//           <div className="flex-1 flex justify-center">
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">
//               <span className="border-b-4 border-red-500 pb-1">
//                 User Review
//               </span>
//             </h2>
//           </div>
//         </div>

//         {/* REVIEW CARDS */}
//         <div className="relative group flex items-center">
//           {/* Left Arrow */}
//           <button
//             onClick={handlePrev}
//             className="absolute -left-6 z-10 bg-white border rounded-full shadow w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
//           >
//             <ChevronLeft size={20} />
//           </button>

//           <div className="flex justify-between w-full gap-6 overflow-hidden">
//             {currentReviews.map((r) => {
//               const isExpanded = expanded[r.id];
//               const shortText =
//                 r.review.length > 160
//                   ? r.review.slice(0, 160) + "..."
//                   : r.review;

//               return (
//                 <div
//                   key={r.id}
//                   className="flex-1 bg-white border border-gray-200 rounded-xl p-6 flex flex-col shadow-sm hover:shadow-md transition"
//                 >
//                   <div className="flex items-start gap-4">
//                     <img
//                       src={r.image}
//                       alt={r.title}
//                       className="w-20 h-20 object-cover rounded-md border"
//                     />
//                     <div>
//                       <h3 className="font-semibold text-gray-900 text-base mb-1">
//                         {r.title}
//                       </h3>
//                       <div className="flex items-center gap-2 text-sm">
//                         <span>5/5</span>
//                         <span className="text-yellow-400">
//                           {"★★★★★".slice(0, 5)}
//                         </span>
//                       </div>
//                       <div className="flex items-center gap-2 mt-1 text-sm">
//                         <span className="font-medium text-gray-800">
//                           {r.name}
//                         </span>
//                         <span className="text-gray-500">• {r.location}</span>
//                         <CheckCircle size={14} className="text-green-500" />
//                         <span className="text-green-600 text-xs">
//                           Verified Buyer
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   <p className="mt-3 text-sm text-gray-700 leading-relaxed">
//                     {isExpanded ? r.review : shortText}{" "}
//                     {r.review.length > 160 && (
//                       <button
//                         onClick={() => toggleExpand(r.id)}
//                         className="text-black font-medium underline ml-1"
//                       >
//                         {isExpanded ? "Show less" : "Read more"}
//                       </button>
//                     )}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={handleNext}
//             className="absolute -right-6 z-10 bg-white border rounded-full shadow w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
//           >
//             <ChevronRight size={20} />
//           </button>
//         </div>

//         {/* PAGE INDICATORS */}
//         <div className="flex justify-center mt-6 gap-2">
//           {Array.from({ length: totalPages }).map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setPage(i)}
//               className={`w-3 h-3 rounded-full ${
//                 i === page ? "bg-red-500" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

export default function Review() {
  const [page, setPage] = useState(0);
  const [expanded, setExpanded] = useState({});
  const [reviewsPerPage, setReviewsPerPage] = useState(3);

  // Adjust number of cards per slide based on screen width
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setReviewsPerPage(1);
      else if (window.innerWidth < 1024) setReviewsPerPage(2);
      else setReviewsPerPage(3);
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const reviews = [
    {
      id: 1,
      image: "https://imgcdn1.gempundit.com/media/testimonial/17225992593212.jpg",
      title: "Quality red coral with lab certification.",
      name: "S Mohanty",
      location: "India",
      review:
        "Satisfied with their prompt customer service and hassle-free delivery process. Ordered a Red Coral Gemstone that came with a lab certificate, and the quality of the gem was amazing. Will definitely shop again!",
    },
    {
      id: 2,
      image: "https://imgcdn1.gempundit.com/media/testimonial/17284704189895.jpg",
      title: "Exceptional quality and seamless shopping experience.",
      name: "Mukund Kumar",
      location: "India",
      review:
        "Amazing experience buying the gemstone and gold ring from GemPundit. The team was very professional and supportive. The product was exactly as shown and arrived on time. Highly recommend their service!",
    },
    {
      id: 3,
      image: "https://imgcdn1.gempundit.com/media/testimonial/17285500218334.jpg",
      title: "Excellence and very professional service.",
      name: "Shreyashkar",
      location: "India",
      review:
        "The red coral ring I received was excellent. Packaging, finish, and gemstone clarity were perfect. Appreciate their transparent pricing and quick response on WhatsApp!",
    },
    {
      id: 4,
      image: "https://imgcdn1.gempundit.com/media/testimonial/15240504884238.jpg",
      title: "Authentic product with great value.",
      name: "Neha Patel",
      location: "USA",
      review:
        "Purchased a coral stone and was amazed at the authenticity certificate. Packaging was very premium. Delivery was quick, and support guided me throughout the process.",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150x150?text=Gold+Ring",
      title: "Simply beautiful and genuine gemstone.",
      name: "Rahul Verma",
      location: "Delhi, India",
      review:
        "The gemstone was genuine and beautifully polished. I appreciate the lab report that came along. Delivery was smooth, and the staff was courteous.",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/150x150?text=Red+Gem",
      title: "Highly satisfied with the product.",
      name: "Aarti Sharma",
      location: "Canada",
      review:
        "I loved the coral pendant I bought! It looked even better than the pictures. Packaging was neat and delivery time was faster than expected. Highly recommended!",
    },
  ];

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePrev = () => {
    setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  };

  const handleNext = () => {
    setPage((p) => (p === totalPages - 1 ? 0 : p + 1));
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const currentReviews = reviews.slice(
    page * reviewsPerPage,
    page * reviewsPerPage + reviewsPerPage
  );

  return (
    <section className="bg-gradient-to-b from-[#fff8f0] to-[#fdfaf6] py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        
        {/* Title - Moved to Top Center */}
        <div className="text-center mb-12"> 
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#6b3e08]">
            Trusted Customer Reviews
          </h2>
          <p className="mt-2 text-[#8c6239] text-xs sm:text-sm uppercase tracking-widest font-semibold">
            Real Experiences From Our Happy Buyers
          </p>
        </div>

        {/* Header (Original Ratings Position Maintained) */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-8">
          {/* Ratings */}
          <div className="flex items-center gap-4 flex-wrap justify-center w-full">
            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md rounded-full px-6 py-3 shadow-md border border-yellow-100">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-7 h-7"
              />
              <div>
                <div className="font-semibold text-gray-800 text-sm">
                  4.7 <span className="text-yellow-400">★★★★★</span>
                </div>
                <div className="text-xs text-gray-600">2500+ Google Reviews</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md rounded-full px-6 py-3 shadow-md border border-green-100">
              <img
                src="https://cdn.worldvectorlogo.com/logos/trustpilot-2.svg"
                alt="Trustpilot"
                className="w-7 h-7"
              />
              <div>
                <div className="font-semibold text-gray-800 text-sm">
                  4.4 <span className="text-green-500">★★★★★</span>
                </div>
                <div className="text-xs text-gray-600">960+ Trustpilot Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative group flex items-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:-left-6 z-10 bg-white/80 backdrop-blur-md border border-yellow-100 rounded-full shadow-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronLeft size={22} className="text-yellow-700" />
          </button>

          {/* Review Cards */}
          <div className="flex justify-center gap-6 sm:gap-8 w-full transition-transform">
            {currentReviews.map((r) => {
              const isExpanded = expanded[r.id];
              const shortText =
                r.review.length > 150
                  ? r.review.slice(0, 150) + "..."
                  : r.review;

              return (
                <div
                  key={r.id}
                  className="flex-1 bg-white/90 backdrop-blur-sm border border-yellow-100 rounded-2xl p-6 sm:p-8 flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 max-w-sm mx-auto"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl border-2 border-yellow-200 shadow-sm"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">
                        {r.title}
                      </h3>
                      <div className="flex items-center gap-1 text-yellow-400 text-sm mb-1">
                        {"★★★★★".split("").map((star, i) => (
                          <span key={i}>{star}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-sm mt-1 flex-wrap">
                        <span className="font-medium text-gray-800">{r.name}</span>
                        <span className="text-gray-500">• {r.location}</span>
                        <CheckCircle size={15} className="text-green-500" />
                        <span className="text-green-600 text-xs font-medium">
                          Verified Buyer
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-gray-700 leading-relaxed italic">
                    “{isExpanded ? r.review : shortText}”
                    {r.review.length > 150 && (
                      <button
                        onClick={() => toggleExpand(r.id)}
                        className="text-yellow-700 font-medium underline ml-1 hover:text-yellow-800"
                      >
                        {isExpanded ? "Show less" : "Read more"}
                      </button>
                    )}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 sm:-right-6 z-10 bg-white/80 backdrop-blur-md border border-yellow-100 rounded-full shadow-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronRight size={22} className="text-yellow-700" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                i === page
                  ? "bg-gradient-to-r from-yellow-500 to-orange-500 scale-110"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}