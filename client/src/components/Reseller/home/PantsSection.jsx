// src/components/PantsSection.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const pants = [
  {
    id: 1,
    brand: "Mustard Seed",
    name: "Tie-waist Flowy Wide Leg Pants",
    price: 24.75,
    image: "https://images.pexels.com/photos/19995459/pexels-photo-19995459.jpeg",
  },
  {
    id: 2,
    brand: "Camellia",
    name: "Cotton Eyelet Wide-leg Trousers",
    price: 27.75,
    image: "https://images.pexels.com/photos/31400265/pexels-photo-31400265.jpeg",
  },
  {
    id: 3,
    brand: "ZENANA",
    name: "Woven Airflow Elastic Waistband Pants",
    price: 7.90,
    image: "https://images.pexels.com/photos/31961168/pexels-photo-31961168.jpeg",
  },
  {
    id: 4,
    brand: "Valentine",
    name: "Dressy Polka Dot Pants",
    price: 18.50,
    image: "https://images.pexels.com/photos/26309759/pexels-photo-26309759.jpeg",
  },
  {
    id: 5,
    brand: "Risen Jeans",
    name: "High Rise Relaxed Barrel Cuffed Pants",
    price: 25.50,
    image: "https://images.pexels.com/photos/8291808/pexels-photo-8291808.jpeg",
  },
  {
    id: 6,
    brand: "Vine & Love",
    name: "Gingham Casual Pants",
    price: 20.75,
    image: "https://images.pexels.com/photos/20297231/pexels-photo-20297231.jpeg",
  },
];

export default function PantsSection() {
  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            
            <h2 className="text-3xl font-semibold text-gray-900 mt-1">Pants</h2>
          </div>
          
          <a href="/pants" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-pink-600 transition-colors group">
            View All 
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {pants.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 mb-4 shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-1">
                <p className="font-medium text-gray-900 text-sm">{item.brand}</p>
                <p className="text-sm text-gray-600 line-clamp-2 leading-tight min-h-[42px]">
                  {item.name}
                </p>
                <p className="text-base font-semibold text-gray-900">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}