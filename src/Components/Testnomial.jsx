import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Beyond my expectations",
    text: "Initially, I was unsure about buying gemstones online. But after receiving my order, I was amazed by the quality and authenticity. Excellent service and very cooperative staff!",
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
    text: "I got my gemstone ring in perfect condition. The packaging, quality, and after-sales support were top-notch. Great experience overall!",
    image1: "https://imgcdn1.gempundit.com/media/wysiwyg/sosul-review.jpg",
    image2: "https://imgcdn1.gempundit.com/media/wysiwyg/monikas-review.png",
  },
];

export default function Testnomial() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#fffaf5] via-[#fff5ea] to-[#ffe9d9] overflow-hidden">
      {/* Sparkle Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(18)].map((_, i) => (
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
      <div className="relative z-10 text-center mb-14">
        <h2 className="text-5xl font-serif font-bold text-[#6b3e08]">
          User Reviews
        </h2>
        <p className="mt-3 text-[#8c6239] text-sm uppercase tracking-widest font-semibold">
          Real Experiences From Our Happy Buyers
        </p>
        <div className="w-24 h-[3px] bg-gradient-to-r from-[#ffb347] to-[#ffcc70] mx-auto mt-4 rounded-full animate-pulse" />
      </div>

      {/* Carousel */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="px-3"
            >
              <div className="bg-white/90 backdrop-blur-sm border border-amber-100 rounded-2xl shadow-md hover:shadow-2xl p-8 h-full flex flex-col transition-all duration-500">
                {/* Images */}
                <div className="flex gap-3 justify-center mb-5">
                  <img
                    src={item.image1}
                    alt="review"
                    className="w-28 h-28 object-cover rounded-lg shadow-sm"
                  />
                  <img
                    src={item.image2}
                    alt="review"
                    className="w-28 h-28 object-cover rounded-lg shadow-sm"
                  />
                </div>

                {/* Title + Stars */}
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  <h3 className="text-lg italic font-semibold text-[#6b3e08]">
                    {item.name}
                  </h3>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* CTA Button */}
      <div className="relative text-center mt-16 z-10">
        <button className="bg-gradient-to-r from-[#ffb347] via-[#ffe08a] to-[#ffb347] text-[#6b3e08] font-semibold px-10 py-3 rounded-full shadow-md border-2 border-[#ffcc80] hover:scale-105 hover:shadow-2xl transition-all duration-300">
          Read More Reviews
        </button>
      </div>
    </section>
  );
}
