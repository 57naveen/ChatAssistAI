import { ChevronDown, ChevronUp, X } from "lucide-react";
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
        top: direction === "top" ? -200 : 200, // "top" scrolls up, "bottom" scrolls down
        behavior: "smooth",
      });
    }
  };

  const hoveredItem = hoveredIndex !== null ? items[hoveredIndex] : null;

  return (
    <div className="relative h-[70vh] w-64 bg-white p-4 shadow-xl border border-gray-200 rounded-2xl ">
      {/* <p className="font-medium text-gray-700 mt-5">Recommended for you:</p> */}

      {/* Popup */}
      {activeItem && (
  <div className="absolute left-auto right-full top-1/2 -translate-y-1/2 mr-4 z-50 w-[30rem] backdrop-blur-sm bg-white/0 border border-gray-200 shadow-2xl rounded-2xl p-6 text-left animate-fade-in">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h2 className="text-xl font-bold text-sky-600">{activeItem.name}</h2>
        <p className="text-sm text-gray-500">Product Details</p>
      </div>
      <button
        onClick={() => {
          setHoveredIndex(null);
          setClickedIndex(null);
        }}
        className="text-gray-400 hover:text-gray-700"
      >
        <X size={18} />
      </button>
    </div>
    <div className="grid gap-3 text-sm text-gray-700">
      <div><strong>Description:</strong><br />{activeItem.description || "No description."}</div>
      <div><strong>Price:</strong> {activeItem.price || "N/A"}</div>
      <div><strong>Rating:</strong> {activeItem.rating || "N/A"} ⭐</div>
      <div><strong>User Experience:</strong><br />{activeItem.experience || "No feedback."}</div>
      <div><strong>Expiry Date:</strong> {activeItem.expiry || "N/A"}</div>
    </div>
  </div>
)}

      {/* Arrows */}
      <button
        onClick={() => scroll("top")}
        className="absolute left-1/2 -translate-x-1/2 top-1 bg-sky-400 shadow p-2 rounded-full z-10 hover:bg-sky-500"
      >
        <ChevronUp size={20} />
      </button>
      <button
        onClick={() => scroll("bottom")}
        className="absolute left-1/2 -translate-x-1/2 bottom-1 bg-sky-400 shadow p-2 rounded-full z-10 hover:bg-sky-500"
      >
        <ChevronDown size={20} />
      </button>

      {/* Vertical Carousel */}
      <div
        ref={scrollRef}
        className="flex flex-col gap-3 overflow-y-auto no-scrollbar h-[calc(100%-3rem)] mt-7 pr-1"
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center  py-2 bg-[#ecfcff] border border-sky-100 rounded-xl text-center text-sm text-gray-800 shadow cursor-pointer hover:bg-sky-100"
            onMouseEnter={() => clickedIndex === null && setHoveredIndex(idx)}
            onMouseLeave={() => clickedIndex === null && setHoveredIndex(null)}
            onClick={() => setClickedIndex(idx)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-[150px] h-[90px] object-contain mb-2 rounded "
            />
            <p className="font-bold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCarousel;
