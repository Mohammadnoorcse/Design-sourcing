// src/components/TopPicks.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    brand: "MABLE",
    name: "Smocked Tiered Halter Open Back Midi Dress",
    price: 32.75,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    brand: "Shop SevenDay",
    name: "Floral Print Lace Trim Mini Dress",
    price: 23.75,
    image: "https://images.pexels.com/photos/34477538/pexels-photo-34477538.jpeg",
  },
  {
    id: 3,
    brand: "Anemone",
    name: "Crochet Lace Bralette",
    price: 7.25,
    image: "https://images.pexels.com/photos/8467340/pexels-photo-8467340.jpeg",
  },
  {
    id: 4,
    brand: "INA",
    name: "Luxe Floral Jacquard Corset Mini Dress",
    price: 30.50,
    image: "https://images.pexels.com/photos/5619526/pexels-photo-5619526.jpeg",
  },
  {
    id: 5,
    brand: "TIC TOC",
    name: "Wilder Floral Lace Mesh Fringe Top",
    price: 14.50,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop",
    discount: "Up to 5% Off with promo",
  },
  {
    id: 6,
    brand: "THML CLOTHING",
    name: "Sleeveless Embroidery Detail Dress",
    price: 39.00,
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&auto=format&fit=crop",
  },
];

export default function TopPicks() {
  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Top Picks for You
          </h2>
          <a href="/products" className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors group">
            View All 
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Optional Discount Badge */}
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-white/90 text-xs font-medium px-2.5 py-1 rounded-full">
                    {product.discount}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-1">
                <p className="font-medium text-sm text-gray-900">{product.brand}</p>
                <p className="text-sm text-gray-600 line-clamp-2 leading-tight">
                  {product.name}
                </p>
                <p className="text-base font-semibold text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}