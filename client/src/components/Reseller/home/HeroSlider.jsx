// src/components/UniqueHeroSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCreative } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    brand: "evelen",
    title: "is LIVE",
    subtitle: "Statement prints and polished silhouettes for boutiques.",
    buttonText: "EXPLORE THE COLLECTION",
    leftImage: "https://images.pexels.com/photos/36730416/pexels-photo-36730416.jpeg",
    rightImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop",
  }
];

export default function UniqueHeroSlider() {
  return (
    <div className="relative h-screen max-h-[740px] overflow-hidden bg-[#fdf2f8]">
      <Swiper
        modules={[Autoplay, Pagination, EffectCreative]}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -400],
          },
          next: {
            shadow: true,
            translate: ["20%", 0, -400],
          },
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.unique-pagination',
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="h-full relative flex items-center">
              <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center h-full relative z-10">
                
                {/* Left Floating Card */}
                <div className="md:col-span-5 flex justify-center md:justify-end">
                  <div className="relative group">
                    <div className="absolute -inset-6 bg-gradient-to-br from-pink-200 to-rose-100 rounded-[3rem] rotate-[-6deg] group-hover:rotate-[-3deg] transition-transform duration-700" />
                    <img
                      src={slide.leftImage}
                      alt="Model"
                      className="relative w-full max-w-[380px] md:max-w-[460px] rounded-3xl shadow-2xl object-cover z-10"
                    />
                  </div>
                </div>

                {/* Center Content - Unique Typography */}
                <div className="md:col-span-2 text-center z-20 space-y-8">
                  <div className="inline-flex items-center gap-3">
                    <div className="h-px w-12 bg-rose-400" />
                    <span className="uppercase tracking-[4px] text-sm font-medium text-rose-600">New Season</span>
                    <div className="h-px w-12 bg-rose-400" />
                  </div>

                  <h1 className="text-6xl md:text-[5.2rem] leading-none font-light tracking-tighter text-gray-900">
                    {slide.brand} 
                    <span className="block font-serif italic text-rose-600 text-6xl md:text-[4.8rem]">is LIVE</span>
                  </h1>

                  <p className="text-lg md:text-xl text-gray-600 max-w-xs mx-auto">
                    {slide.subtitle}
                  </p>

                  {/* <button className="mt-6 group relative px-10 py-4 bg-black text-white rounded-2xl font-medium text-lg overflow-hidden">
                    <span className="relative z-10 group-hover:text-rose-300 transition-colors">
                      {slide.buttonText}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button> */}
                </div>

                {/* Right Floating Circle */}
                <div className="md:col-span-5 hidden md:flex justify-start relative">
                  <div className="relative">
                    {/* Multiple decorative rings */}
                    <div className="absolute -inset-16 border border-rose-200/60 rounded-full" />
                    <div className="absolute -inset-24 border border-rose-100/40 rounded-full" />
                    
                    <img
                      src={slide.rightImage}
                      alt="Model"
                      className="w-full max-w-[420px] rounded-full shadow-2xl object-cover relative z-10 ring-8 ring-white"
                    />

                    {/* Floating flower accent */}
                    <div className="absolute -bottom-10 -right-10 bg-white rounded-2xl p-5 shadow-xl rotate-6 hover:rotate-0 transition-transform">
                      <img 
                        src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=140" 
                        alt="Flower" 
                        className="w-24 h-24 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle background pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#f8d7e3_0.8px,transparent_1px)] bg-[length:20px_20px] opacity-40 pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="unique-pagination absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-50" />
    </div>
  );
}