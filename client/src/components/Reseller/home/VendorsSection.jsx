// src/components/VendorsSection.jsx
import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const vendors = [
  {
    id: 1,
    name: "GLAM",
    minimum: "$300 minimum",
    shipping: "FG Free Shipping $300+",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "TIC TOC",
    minimum: "No minimum",
    shipping: "FG Free Shipping $300+",
    image: "https://images.pexels.com/photos/7346178/pexels-photo-7346178.jpeg",
  },
  {
    id: 3,
    name: "Fore Collection",
    minimum: "$100 minimum",
    shipping: "",
    image: "https://images.pexels.com/photos/32203034/pexels-photo-32203034.jpeg",
  },
  {
    id: 4,
    name: "Mimosa",
    minimum: "$50 minimum",
    shipping: "",
    image: "https://images.pexels.com/photos/7179580/pexels-photo-7179580.jpeg",
  },
  {
    id: 5,
    name: "Flying Tomato",
    minimum: "No minimum",
    shipping: "FG Free Shipping $300+",
    image: "https://images.pexels.com/photos/32203034/pexels-photo-32203034.jpeg",
  },
];

export default function VendorsSection() {
  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-1">
              Vendors You'll Love to Shop
            </h2>
          </div>
          <a href="/vendors" className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors">
            View All 
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Vendors Grid / Carousel */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {vendors.map((vendor) => (
              <div 
                key={vendor.id} 
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Vendor Info */}
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{vendor.name}</h3>
                  
                  <p className="text-sm text-gray-600 mb-3">{vendor.minimum}</p>

                  {vendor.shipping && (
                    <p className="text-xs text-blue-600 flex items-center gap-1">
                      🚚 {vendor.shipping}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows (Desktop) */}
          <button className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-pink-50 transition-all">
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </button>
          
          <button className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-pink-50 transition-all">
            <ArrowRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}