// src/components/ShopByCategory.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const categories = [
  {
    id: 1,
    title: "Women's Apparel",
    image:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Shoes",
    image:
      "https://images.pexels.com/photos/19166246/pexels-photo-19166246.jpeg",
  },
  {
    id: 3,
    title: "Accessories",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Jewelry",
    image:
      "https://images.unsplash.com/photo-1611590027211-b954fd027b51?w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Bags",
    image:
      "https://images.pexels.com/photos/4937323/pexels-photo-4937323.jpeg",
  },
  {
    id: 6,
    title: "Kids & Baby",
    image:
      "https://images.pexels.com/photos/4858394/pexels-photo-4858394.jpeg",
  },
  {
    id: 5,
    title: "Bags",
    image:
      "https://images.pexels.com/photos/4937323/pexels-photo-4937323.jpeg",
  },
  {
    id: 6,
    title: "Kids & Baby",
    image:
      "https://images.pexels.com/photos/4858394/pexels-photo-4858394.jpeg",
  },
];

export default function ShopByCategory() {
  return (
    <div className="py-16 bg-white">
      <div className="w-full mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
            SHOP BY CATEGORY
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".category-prev",
              nextEl: ".category-next",
            }}
            loop={true}
            className="category-swiper"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <div className="group flex flex-col items-center cursor-pointer">
                  {/* Hexagon Image */}
                  <div className="relative w-40 h-40 md:w-44 md:h-44 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-rose-100 rounded-[3rem] rotate-12 group-hover:rotate-6 transition-transform duration-500" />

                    <div className="relative w-full h-full overflow-hidden rounded-[2.8rem] shadow-md border-4 border-white">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Label */}
                  <p className="mt-6 text-center font-medium text-gray-800 text-base md:text-lg tracking-tight">
                    {category.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="category-prev absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-pink-50 transition-all hidden md:flex items-center justify-center">
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button className="category-next absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-pink-50 transition-all hidden md:flex items-center justify-center">
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
