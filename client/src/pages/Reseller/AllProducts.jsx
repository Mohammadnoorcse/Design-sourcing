// src/pages/AllProducts.jsx
import React, { useState } from 'react';
import { SlidersHorizontal, Grid, List, Heart } from 'lucide-react';

const mockProducts = [
  {
    id: 1,
    brand: "MABLE",
    name: "Smocked Tiered Halter Open Back Midi Dress",
    price: 32.75,
    image: "https://images.pexels.com/photos/26309759/pexels-photo-26309759.jpeg",
    discount: 15,
  },
  {
    id: 2,
    brand: "Shop SevenDay",
    name: "Floral Print Lace Trim Mini Dress",
    price: 23.75,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    brand: "Anemone",
    name: "Crochet Lace Bralette",
    price: 7.25,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    brand: "INA",
    name: "Luxe Floral Jacquard Corset Mini Dress",
    price: 30.50,
    image: "https://images.pexels.com/photos/20297231/pexels-photo-20297231.jpeg",
  },
  {
    id: 5,
    brand: "TIC TOC",
    name: "Wilder Floral Lace Mesh Fringe Top",
    price: 14.50,
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    brand: "THML CLOTHING",
    name: "Sleeveless Embroidery Detail Dress",
    price: 39.00,
    image: "https://images.pexels.com/photos/31961168/pexels-photo-31961168.jpeg",
  },
];

export default function AllProducts() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('newest');

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="max-w-7xl mx-auto px-5 pt-8 md:pt-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">All Products</h1>
            <p className="text-gray-600 mt-2">Showing 248 products</p>
          </div>

          <div className="flex items-center gap-4 mt-6 md:mt-0">
            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex border rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 ${viewMode === 'grid' ? 'bg-pink-100 text-pink-700' : 'bg-white text-gray-600'} hover:bg-pink-50`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 ${viewMode === 'list' ? 'bg-pink-100 text-pink-700' : 'bg-white text-gray-600'} hover:bg-pink-50`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid' 
          ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' 
          : 'grid-cols-1'}`}>
          
          {mockProducts.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    -{product.discount}%
                  </div>
                )}
                <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-white">
                  <Heart className="h-5 w-5 text-gray-700" />
                </button>
              </div>

              <div className="p-4">
                <p className="font-medium text-gray-900 text-sm">{product.brand}</p>
                <p className="text-sm text-gray-600 line-clamp-2 mt-1 min-h-[42px]">
                  {product.name}
                </p>
                <div className="mt-3 text-lg font-semibold text-gray-900">
                  ${product.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-16">
          <button className="px-10 py-4 bg-black text-white rounded-2xl font-medium hover:bg-gray-900 transition-all">
            Load More Products
          </button>
        </div>
      </div>
    </div>
  );
}