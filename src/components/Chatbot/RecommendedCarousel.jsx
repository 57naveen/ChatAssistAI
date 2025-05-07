import { ChevronLeft, ChevronRight, X } from "lucide-react";
import React, { useRef, useState } from "react";

const RecommendedCarousel = ({ items }) => {
  const scrollRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);
  
  const activeIndex = clickedIndex !== null ? clickedIndex : hoveredIndex;
  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  const hoveredItem = hoveredIndex !== null ? items[hoveredIndex] : null;

  return (
    <div className="bg-white p-4 relative">
      <p className="font-medium text-gray-700 mb-3">Recommended for you:</p>

      {/* Global Top Popup */}
      {activeItem && (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full z-50 w-[30rem] backdrop-blur-sm bg-white/0 border-gray-200 shadow-2xl rounded-2xl p-6 text-left animate-fade-in">
    {/* Header */}
    <div className="flex justify-between items-start mb-4">
      <div>
        <h2 className="text-xl font-bold text-yellow-600">{activeItem.name}</h2>
        <p className="text-sm text-gray-500">Product Details</p>
      </div>
      <button
        onClick={() => {
          setHoveredIndex(null);
          setClickedIndex(null);
        }}
        className="text-gray-400 hover:text-gray-700 transition-colors"
        aria-label="Close"
      >
        <X size={18} />
      </button>
    </div>

    {/* Info Grid */}
    <div className="grid grid-cols-1 gap-3 text-sm text-gray-700">
      <div>
        <span className="font-semibold text-gray-900">Description:</span><br />
        {activeItem.description || "No description available."}
      </div>

      <div>
        <span className="font-semibold text-gray-900">Price:</span> {activeItem.price || "N/A"}
      </div>

      <div>
        <span className="font-semibold text-gray-900">Rating:</span> {activeItem.rating || "N/A"} ⭐
      </div>

      <div>
        <span className="font-semibold text-gray-900">User Experience:</span><br />
        {activeItem.experience || "No user feedback available."}
      </div>

      <div>
        <span className="font-semibold text-gray-900">Expiry Date:</span> {activeItem.expiry || "No expiry available."}
      </div>
    </div>
  </div>
)}


      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 mt-4 -translate-y-1/2 bg-yellow-500 shadow p-2 rounded-full z-10 hover:bg-yellow-600"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 mt-4 top-1/2 -translate-y-1/2 bg-yellow-500 shadow p-2 rounded-full z-10 hover:bg-yellow-600"
      >
        <ChevronRight size={20} />
      </button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth"
      >
        {items.map((item, idx) => (
        <div
        key={idx}
        className="relative min-w-[140px] px-3   bg-[#fff7ec] border border-orange-200 rounded-xl text-center text-sm text-gray-800 shadow cursor-pointer hover:bg-orange-100 flex-shrink-0"
        onMouseEnter={() => clickedIndex === null && setHoveredIndex(idx)}
        onMouseLeave={() => clickedIndex === null && setHoveredIndex(null)}
        onClick={() => setClickedIndex(idx)}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-[120px] h-[106px] object-contain mx-auto rounded"
      />
        <p className="font-bold mb-2 ">{item.name}</p>
      </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCarousel;
