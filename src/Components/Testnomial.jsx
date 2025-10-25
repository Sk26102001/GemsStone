

// import React from "react";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import { Star } from "lucide-react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const testimonials = [
//   {
//     name: "Beyond my expectations",
//     text: "Initially, I was unsure about buying gemstones online. But after receiving my order, I was amazed by the quality and authenticity. Excellent service and very cooperative staff!",
//     image1: "https://imgcdn1.gempundit.com/media/wysiwyg/arifs-review-2.jpg",
//     image2: "https://imgcdn1.gempundit.com/media/wysiwyg/arifs-review-1.jpg",
//   },
//   {
//     name: "Beautiful Ruby Ring!",
//     text: "The ruby ring I received was simply perfect! The finish, shine, and fit were beyond my expectations. I’ll definitely order again — highly recommend!",
//     image1: "https://imgcdn1.gempundit.com/media/wysiwyg/colin-dsouza-review-2.jpg",
//     image2: "https://imgcdn1.gempundit.com/media/wysiwyg/arifs-review-1.jpg",
//   },
//   {
//     name: "Best quality gemstones",
//     text: "I ordered a Hessonite ring, and everything from packaging to quality was exceptional. The team made the process smooth and delightful!",
//     image1: "https://imgcdn1.gempundit.com/media/wysiwyg/colin-dsouza-review-2.jpg",
//     image2: "https://imgcdn1.gempundit.com/media/wysiwyg/colin-dsouza-review-1.jpg",
//   },
//   {
//     name: "Impressed with the service",
//     text: "I got my gemstone ring in perfect condition. The packaging, quality, and after-sales support were top-notch. Great experience overall!",
//     image1: "https://imgcdn1.gempundit.com/media/wysiwyg/sosul-review.jpg",
//     image2: "https://imgcdn1.gempundit.com/media/wysiwyg/monikas-review.png",
//   },
// ];

// export default function Testimonial() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     speed: 800,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     pauseOnHover: true,
//     responsive: [
//       { breakpoint: 1280, settings: { slidesToShow: 2 } },
//       { breakpoint: 768, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#fffaf5] via-[#fff5ea] to-[#ffe9d9] overflow-hidden">
//       {/* Soft Glow */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full bg-amber-200 opacity-25 animate-pulse"
//             style={{
//               width: Math.random() * 10 + 5 + "px",
//               height: Math.random() * 10 + 5 + "px",
//               top: Math.random() * 100 + "%",
//               left: Math.random() * 100 + "%",
//               animationDuration: Math.random() * 6 + 4 + "s",
//             }}
//           />
//         ))}
//       </div>

//       {/* Header */}
//       <div className="relative z-10 text-center mb-10 sm:mb-14 px-4">
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#6b3e08]">
//           Customer Reviews
//         </h2>
//         <p className="mt-2 text-[#8c6239] text-xs sm:text-sm uppercase tracking-widest font-semibold">
//           Real Experiences From Our Happy Buyers
//         </p>
//         <div className="w-16 sm:w-24 h-[3px] bg-gradient-to-r from-[#ffb347] to-[#ffcc70] mx-auto mt-3 rounded-full animate-pulse" />
//       </div>

//       {/* Carousel */}
//       <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
//         <Slider {...settings}>
//           {testimonials.map((item, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.02 }}
//               transition={{ type: "spring", stiffness: 120 }}
//               className="px-2"
//             >
//               <div className="bg-white/90 backdrop-blur-sm border border-amber-100 rounded-xl shadow-md hover:shadow-xl p-4 sm:p-6 flex flex-col justify-between transition-all duration-300 h-full min-h-[260px] sm:min-h-[280px]">
//                 {/* Images */}
//                 <div className="flex justify-center gap-2 sm:gap-3 mb-4">
//                   <img
//                     src={item.image1}
//                     alt="review"
//                     className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg shadow-sm"
//                   />
//                   <img
//                     src={item.image2}
//                     alt="review"
//                     className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg shadow-sm"
//                   />
//                 </div>

//                 {/* Title + Stars */}
//                 <div className="flex items-center justify-center gap-2 mb-1">
//                   <img
//                     src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
//                     alt="Google"
//                     className="w-5 h-5 sm:w-6 sm:h-6"
//                   />
//                   <h3 className="text-sm sm:text-base italic font-semibold text-[#6b3e08] text-center">
//                     {item.name}
//                   </h3>
//                 </div>

//                 <div className="flex justify-center gap-1 mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
//                     />
//                   ))}
//                 </div>

//                 {/* Text */}
//                 <p className="text-gray-600 text-xs sm:text-sm text-center leading-relaxed line-clamp-4">
//                   {item.text}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </Slider>
//       </div>

//       {/* CTA */}
//       <div className="relative text-center mt-10 sm:mt-14 z-10 px-4">
//         <button className="bg-gradient-to-r from-[#ffb347] via-[#ffe08a] to-[#ffb347] text-[#6b3e08] font-semibold px-6 sm:px-8 py-2 sm:py-2.5 rounded-full shadow-md border border-[#ffcc80] hover:scale-105 hover:shadow-2xl transition-all duration-300 text-xs sm:text-sm md:text-base">
//           Read More Reviews
//         </button>
//       </div>
//     </section>
//   );
// }





import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Beyond my expectations",
    text: "Initially, I was unsure about buying gemstones online. But after receiving my order, I was amazed by the quality and authenticity. Excellent service and very cooperative staff! This long sentence is added to test line clamping and ensure consistent card height across all devices.",
    image1: "https://imgcdn1.gempundit.com/media/wysiwyg/arifs-review-2.jpg",
    image2: "https://imgcdn1.gempundit.com/media/wysiwyg/arifs-review-1.jpg",
  },
  {
    name: "Beautiful Ruby Ring!",
    text: "The ruby ring I received was simply perfect! The finish, shine, and fit were beyond my expectations. I’ll definitely order again — highly recommend!",
    image1: "https://imgcdn1.gempundit.com/media/wysiwyg/colin-dsouza-review-2.jpg",
    image2: "https://imgcdn1.gempundit.com/media/wysiwyg/arifs-review-1.jpg",
  },
  {
    name: "Best quality gemstones",
    text: "I ordered a Hessonite ring, and everything from packaging to quality was exceptional. The team made the process smooth and delightful!",
    image1: "https://imgcdn1.gempundit.com/media/wysiwyg/colin-dsouza-review-2.jpg",
    image2: "https://imgcdn1.gempundit.com/media/wysiwyg/colin-dsouza-review-1.jpg",
  },
  {
    name: "Impressed with the service",
    text: "I got my gemstone ring in perfect condition. The packaging, quality, and after-sales support were top-notch. Great experience overall! A shorter review for testing minimal height.",
    image1: "https://imgcdn1.gempundit.com/media/wysiwyg/sosul-review.jpg",
    image2: "https://imgcdn1.gempundit.com/media/wysiwyg/monikas-review.png",
  },
];

export default function Testimonial() {
  // Custom Next Arrow component to ensure better navigation visibility
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !right-4 !w-8 !h-8 bg-white/70 rounded-full shadow-lg border border-amber-200 flex items-center justify-center before:!content-['\\276F'] before:!text-amber-700 before:!text-sm hover:bg-white transition-all`}
        style={{ ...style, display: "flex", zIndex: 10 }}
        onClick={onClick}
      />
    );
  };

  // Custom Prev Arrow component
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !left-4 !w-8 !h-8 bg-white/70 rounded-full shadow-lg border border-amber-200 flex items-center justify-center before:!content-['\\276E'] before:!text-amber-700 before:!text-sm hover:bg-white transition-all`}
        style={{ ...style, display: "flex", zIndex: 10 }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <NextArrow />, // Use custom arrows
    prevArrow: <PrevArrow />, // Use custom arrows
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } }, // Keep 3 for large screen consistency
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // 2 for medium screens (lg)
      { breakpoint: 768, settings: { slidesToShow: 1 } }, // 1 for small screens (md and below)
    ],
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#fffaf5] via-[#fff5ea] to-[#ffe9d9] overflow-hidden">
      {/* Soft Glow/Background Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-200 opacity-25 animate-pulse"
            style={{
              width: Math.random() * 10 + 5 + "px",
              height: Math.random() * 10 + 5 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDuration: Math.random() * 6 + 4 + "s",
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-10 sm:mb-14 px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#6b3e08]">
          Trusted Customer Reviews
        </h2>
        <p className="mt-2 text-[#8c6239] text-xs sm:text-sm uppercase tracking-widest font-semibold">
          Real Experiences From Our Happy Buyers
        </p>
        <div className="w-16 sm:w-24 h-[3px] bg-gradient-to-r from-[#ffb347] to-[#ffcc70] mx-auto mt-3 rounded-full animate-pulse" />
      </div>

      {/* Carousel */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="p-2 h-full" // Ensure padding is applied to the slide
            >
              {/* CARD CONTAINER: Removed fixed min-height to ensure the card only takes the space required by the content. 
                  h-full ensures it matches the height of the tallest card in the current slide view. */}
              <div className="bg-white/90 backdrop-blur-sm border border-amber-100 rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col transition-all duration-300 h-full">
                
                {/* Images Container: Fixed alignment issue by using flex-row and items-center */}
                <div className="flex flex-row items-center justify-center gap-3 mb-4">
                  <img
                    src={item.image1}
                    alt="review image 1"
                    // Fixed aspect ratio and object-fit for perfect alignment
                    className="w-24 h-24 object-cover rounded-lg shadow-md border-2 border-amber-100" 
                    onError={(e) => {e.target.onerror = null; e.target.src="https://placehold.co/96x96/f7e0c4/8c6239?text=Image+1"}}
                  />
                  <img
                    src={item.image2}
                    alt="review image 2"
                    // Fixed aspect ratio and object-fit for perfect alignment
                    className="w-24 h-24 object-cover rounded-lg shadow-md border-2 border-amber-100"
                    onError={(e) => {e.target.onerror = null; e.target.src="https://placehold.co/96x96/f7e0c4/8c6239?text=Image+2"}}
                  />
                </div>

                {/* Title + Stars (Centered) */}
                <div className="flex flex-col items-center justify-center mb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      alt="Google Review"
                      className="w-5 h-5"
                    />
                    <h3 className="text-sm sm:text-base italic font-semibold text-[#6b3e08] text-center">
                      {item.name}
                    </h3>
                  </div>
                  
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Text: Used line-clamp-4 and flex-grow for text consistency */}
                <p className="text-gray-600 text-sm text-center leading-relaxed line-clamp-4 mt-auto">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* CTA */}
      <div className="relative text-center mt-12 z-10 px-4">
        <button className="bg-gradient-to-r from-[#ffb347] via-[#ffe08a] to-[#ffb347] text-[#6b3e08] font-semibold px-8 py-3 rounded-full shadow-lg border border-[#ffcc80] hover:scale-105 hover:shadow-2xl transition-all duration-300 text-base">
          Read More Reviews
        </button>
      </div>
    </section>
  );
}
