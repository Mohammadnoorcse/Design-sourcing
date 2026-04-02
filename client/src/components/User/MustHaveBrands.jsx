// src/components/ExclusiveBrands.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const brands = [
  {
    name: 'MABLE',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&auto=format&fit=crop&q=80',
    description: 'Elegant pearl-embellished pieces',
  },
  {
    name: 'ZENANANA',
    image: 'https://images.pexels.com/photos/6069566/pexels-photo-6069566.jpeg',
    description: 'Sustainable · Ethical · Affordable',
  },
  {
    name: 'So ME',
    image: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=800&auto=format&fit=crop&q=80',
    description: 'Embroidered romantic details',
  },
  {
    name: 'LovelyDay',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=80',
    description: 'Elegant evening wear',
  },
];

export default function MustHaveBrands() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-wide">
            Must Have Brands Only on DESIGN
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Build your store with unique items and stay ahead of the competition
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* For simplicity - using flex + overflow + snap */}
          <div className="overflow-x-auto pb-6 scrollbar-hide">
            <div className="flex gap-6 md:gap-8 snap-x snap-mandatory">
              {brands.map((brand) => (
                <Link to="/register"
                  key={brand.name}
                  className="flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[32vw] lg:w-[24vw] snap-center"
                >
                  <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                    {/* Image */}
                    <div className="aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-gray-100">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>

                    {/* Overlay name */}
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                      <h3 className="text-white text-xl md:text-2xl font-medium tracking-wider">
                        {brand.name}
                      </h3>
                      {brand.description && (
                        <p className="text-white/80 text-sm mt-1.5 font-light">
                          {brand.description}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Decorative arrows (optional - can be made functional with state + scroll) */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-4 w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white transition-colors z-10 hidden md:flex"
            aria-label="Previous"
          >
            ←
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-4 w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white transition-colors z-10 hidden md:flex"
            aria-label="Next"
          >
            →
          </button>
        </div>

        {/* Mobile hint */}
        <p className="text-center text-sm text-gray-500 mt-6 md:hidden">
          Swipe to explore →
        </p>
      </div>
    </section>
  );
}