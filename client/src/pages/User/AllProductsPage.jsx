import React, { useState } from 'react';
// Assume you have these icons (lucide-react or heroicons)
import { SlidersHorizontal, Grid, List, Heart, Search, ChevronDown } from 'lucide-react';

const mockProducts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Trendy ${['Floral Dress', 'Striped Shirt', 'Denim Jeans', 'Polka Top', 'Summer Maxi'][i % 5]} #${i + 1}`,
  price: 1200 + i * 150,
  originalPrice: 1800 + i * 200,
  image: `https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=80&${i}`, // replace with your real images
  discount: Math.floor(Math.random() * 40) + 10,
  rating: (Math.random() * 2 + 3).toFixed(1),
}));

function ProductCard({ product }) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Image + Badge */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.discount > 0 && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            -{product.discount}%
          </span>
        )}
        <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 p-2 rounded-full shadow-md hover:bg-white">
          <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-pink-600 transition-colors">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">৳{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">৳{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        <div className="mt-1 flex items-center text-sm text-yellow-500">
          ★ {product.rating} <span className="ml-1 text-gray-400">(120+)</span>
        </div>
      </div>
    </div>
  );
}

export default function AllProductsPage() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortBy, setSortBy] = useState('newest');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner / Title */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 py-10 md:py-14 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center md:text-left">
            All Products
          </h1>
          <p className="mt-3 text-gray-600 text-center md:text-left max-w-2xl">
            Discover trending fashion — dresses, tops, jeans, accessories & more. New arrivals daily!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters – Desktop visible, Mobile collapsible */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-4">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-6">
                <SlidersHorizontal className="h-5 w-5 text-pink-600" /> Filters
              </h2>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Categories</h3>
                {['Dresses', 'Tops', 'Jeans & Pants', 'Accessories', 'Kids', 'Jewelry'].map(cat => (
                  <label key={cat} className="flex items-center gap-2 py-1.5 text-gray-700 hover:text-pink-600 cursor-pointer">
                    <input type="checkbox" className="rounded text-pink-600 focus:ring-pink-500" />
                    {cat}
                  </label>
                ))}
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={priceRange[1]}
                  onChange={e => setPriceRange([0, Number(e.target.value)])}
                  className="w-full accent-pink-600"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>৳0</span>
                  <span>৳{priceRange[1].toLocaleString()}</span>
                </div>
              </div>

              {/* Colors */}
              <div>
                <h3 className="font-medium mb-3">Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-400', 'bg-black', 'bg-pink-500'].map(color => (
                    <button key={color} className={`w-8 h-8 rounded-full ${color} border-2 border-white shadow-sm hover:scale-110 transition-transform`} />
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-600">
                Showing <span className="font-medium text-gray-900">1–20</span> of 248 products
              </p>

              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-600 whitespace-nowrap">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="popular">Popular</option>
                  </select>
                </div>

                <div className="flex border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-pink-100 text-pink-700' : 'bg-white text-gray-600'} hover:bg-pink-50`}
                  >
                    <Grid className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-pink-100 text-pink-700' : 'bg-white text-gray-600'} hover:bg-pink-50`}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid'
                ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
                : 'grid-cols-1'
            }`}>
              {mockProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <button className="px-10 py-4 bg-pink-600 text-white font-medium rounded-xl hover:bg-pink-700 transition shadow-md">
                Load More Products
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}