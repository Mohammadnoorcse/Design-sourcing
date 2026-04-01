// src/components/FreeShippingVendors.jsx
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const vendors = [
  {
    id: 1,
    name: "By Adina Eden",
    minimum: "$100 minimum",
    shipping: "FG Free Shipping $100+",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Bagel",
    minimum: "$50 minimum",
    shipping: "FG Free Shipping $300+",
    image: "https://images.pexels.com/photos/26309759/pexels-photo-26309759.jpeg",
  },
  {
    id: 3,
    name: "De Vave",
    minimum: "No minimum",
    shipping: "FG Free Shipping $300+",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Great Smoky",
    minimum: "No minimum",
    shipping: "FG Free Shipping $300+",
    image: "https://images.pexels.com/photos/31961168/pexels-photo-31961168.jpeg",
  },
  {
    id: 5,
    name: "Funky Monkey Fashion",
    minimum: "$50 minimum",
    shipping: "FG Free Shipping $100+",
    image: "https://images.pexels.com/photos/20297231/pexels-photo-20297231.jpeg",
  },
];

export default function FreeShippingVendors() {
  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            FG Free Shipping Vendors
          </h2>
        </div>

        {/* Vendors Grid with Navigation */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {vendors.map((vendor) => (
              <div 
                key={vendor.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
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
                <div className="p-5 space-y-2">
                  <h3 className="font-semibold text-lg text-gray-900">{vendor.name}</h3>
                  
                  <p className="text-sm text-gray-600">{vendor.minimum}</p>
                  
                  <p className="text-xs text-blue-600 flex items-center gap-1 font-medium">
                    🚚 {vendor.shipping}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-pink-50 transition-all z-10">
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </button>
          
          <button className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-pink-50 transition-all z-10">
            <ArrowRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}