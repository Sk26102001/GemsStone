import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  Clock,
  CheckCircle,
} from "lucide-react";


// ----------------------------------------------------
// ⭐ 100% Working Vimeo Thumbnail Fetcher
// ----------------------------------------------------
const getVimeoThumbnailUrl = async (vimeoUrl) => {
  const match = vimeoUrl.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
  if (!match) {
    return "https://via.placeholder.com/640x360?text=Thumbnail+Not+Found";
  }

  const videoId = match[1];

  try {
    const response = await fetch(`https://vimeo.com/api/v2/video/${videoId}.json`);
    const data = await response.json();
    return data[0].thumbnail_large; // Correct thumbnail (640px)
  } catch (err) {
    return "https://via.placeholder.com/640x360?text=Thumbnail+Not+Found";
  }
};


// ----------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------
export default function VideoTestimonial() {
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState("");

  // ⭐ Responsive card count
  const [videosPerPage, setVideosPerPage] = useState(3);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setVideosPerPage(1);
      else if (window.innerWidth < 1024) setVideosPerPage(2);
      else setVideosPerPage(3);
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const testimonials = [
    {
      id: 1,
      title: "Seamless Integration & Results",
      url: "https://player.vimeo.com/video/76979871",
      name: "Alex Johnson, CEO of TechCorp",
      duration: "2:15",
    },
    {
      id: 2,
      title: "Game-Changing Customer Service",
      url: "https://player.vimeo.com/video/22439234",
      name: "Maria Garcia, Founder of DesignCo",
      duration: "0:45",
    },
    {
      id: 3,
      title: "Exceptional Value and Quality",
      url: "https://player.vimeo.com/video/146022717",
      name: "David Lee, VP of Marketing",
      duration: "1:30",
    },
    {
      id: 4,
      title: "Highly Recommended Solution",
      url: "https://player.vimeo.com/video/76979871",
      name: "Sarah Chen, Project Manager",
      duration: "0:58",
    },
    {
      id: 5,
      title: "Boosted Our Team Efficiency",
      url: "https://player.vimeo.com/video/76979871",
      name: "Ethan White, CTO",
      duration: "1:10",
    },
  ];

  const totalPages = Math.ceil(testimonials.length / videosPerPage);

  const openPopup = (videoUrl) => {
    setActiveVideoUrl(videoUrl + "?autoplay=1");
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
    setActiveVideoUrl("");
  };

  const handlePrev = () =>
    setPage((p) => (p === 0 ? totalPages - 1 : p - 1));

  const handleNext = () =>
    setPage((p) => (p === totalPages - 1 ? 0 : p + 1));


  // ----------------------------------------------------
  // SINGLE VIDEO CARD
  // ----------------------------------------------------
  const VideoTestimonialCard = ({ video }) => {
    const [thumbnailSrc, setThumbnailSrc] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      let mounted = true;

      getVimeoThumbnailUrl(video.url).then((url) => {
        if (mounted) {
          setThumbnailSrc(url);
          setLoading(false);
        }
      });

      return () => (mounted = false);
    }, [video.url]);

    return (
      <div
        onClick={() => openPopup(video.url)}
        className="flex-1 bg-white/90 backdrop-blur-sm border border-yellow-100 rounded-2xl flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 max-w-sm mx-auto cursor-pointer overflow-hidden"
      >
        <div className="relative w-full h-48 sm:h-56 overflow-hidden group">

          {/* Loading Skeleton */}
          {loading && (
            <div className="w-full h-full bg-gray-200 animate-pulse" />
          )}

          {!loading && (
            <img
              src={thumbnailSrc}
              alt={video.title}
              className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
            />
          )}

          <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 group-hover:bg-black/10">
            <PlayCircle
              size={64}
              className="text-white opacity-90 transition-transform duration-300 group-hover:opacity-100 group-hover:scale-110 drop-shadow-lg"
            />
          </div>

          <div className="absolute top-3 right-3 flex items-center gap-1 text-white text-sm font-bold px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm">
            <Clock size={14} />
            {video.duration}
          </div>
        </div>

        <div className="p-6 sm:p-8 flex flex-col flex-grow">
          <h3 className="font-serif font-bold text-[#6b3e08] text-xl mb-3 line-clamp-2">
            "{video.title}"
          </h3>

          <div className="flex items-center gap-2 text-sm mt-auto pt-2 border-t border-gray-100 flex-wrap">
            <span className="font-medium text-gray-800">{video.name}</span>
            <span className="text-gray-500">• Valued Client</span>
            <CheckCircle size={15} className="text-green-500" />
            <span className="text-green-600 text-xs font-medium">
              Verified User
            </span>
          </div>
        </div>
      </div>
    );
  };


  // ----------------------------------------------------
  // RENDER
  // ----------------------------------------------------
  return (
    <section className="bg-gradient-to-b from-[#fff8f0] to-[#fdfaf6] py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#6b3e08]">
            Video Testimonials
          </h2>
          <p className="mt-2 text-[#8c6239] text-xs sm:text-sm uppercase tracking-widest font-semibold">
            Hear Success Stories Directly From Our Clients
          </p>
        </div>

        {/* ⭐ FIXED CAROUSEL */}
        <div className="relative group flex items-center">

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:-left-6 z-20 bg-white/80 backdrop-blur-md border border-yellow-100 rounded-full shadow-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition disabled:opacity-30"
            disabled={page === 0}
          >
            <ChevronLeft size={22} className="text-yellow-700" />
          </button>

          {/* Track */}
          <div className="overflow-hidden w-full">
            <div
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${page * (100 / totalPages)}%)`,
              }}
            >
              {testimonials.map((video) => (
                <div
                  key={video.id}
                  className="flex-shrink-0"
                  style={{ width: `${100 / videosPerPage}%` }}
                >
                  <VideoTestimonialCard video={video} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 sm:-right-6 z-20 bg-white/80 backdrop-blur-md border border-yellow-100 rounded-full shadow-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition disabled:opacity-30"
            disabled={page === totalPages - 1}
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


      {/* POPUP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100]"
          onClick={closePopup}
        >
          <div
            className="w-[95%] max-w-4xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute -top-12 right-0 md:-right-8 md:-top-8 bg-white/20 text-white w-10 h-10 rounded-full text-2xl font-light hover:bg-white/40 transition-all z-10"
            >
              ✕
            </button>

            <div
              className="relative w-full"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                src={activeVideoUrl}
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl border-4 border-yellow-600"
                allow="autoplay; fullscreen; picture-in-picture"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
