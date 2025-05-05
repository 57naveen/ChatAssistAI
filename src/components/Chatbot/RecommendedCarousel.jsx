import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useRef } from 'react'

const RecommendedCarousel = ({items}) => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="bg-white p-4  relative">
      <p className="font-medium text-gray-700 mb-3">Recommended for you:</p>
      
      {/* Arrows */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 mt-4 -translate-y-1/2 bg-yellow-500 shadow p-2 rounded-full z-10 hover:bg-yellow-600"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-2 mt-4 top-1/2 -translate-y-1/2 bg-yellow-500 shadow p-2 rounded-full z-10 hover:bg-yellow-600"
      >
        <ChevronRight size={20} />
      </button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex mx-15 gap-3 overflow-x-auto no-scrollbar scroll-smooth "
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[120px] px-4 py-2 bg-[#fff7ec] border  border-orange-200 rounded-xl text-center text-sm text-gray-800 shadow cursor-pointer hover:bg-orange-100 flex-shrink-0"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecommendedCarousel