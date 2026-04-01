// src/components/SummerLinenSection.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    brand: "Peach Love California",
    name: "Textured Linen Woven Lace Bow Bubble Sleeve Maxi",
    price: 32.00,
    image: "https://images.pexels.com/photos/28339243/pexels-photo-28339243.jpeg",
    shipping: "FG Free Shipping $300+",
    colors: "2 colors available",
  },
  {
    id: 2,
    brand: "IN LOOM",
    name: "Linen Blend Button Dress",
    price: 36.25,
    image: "https://media.istockphoto.com/id/577661634/photo/beautiful-young-woman-in-a-summer-dress.jpg?b=1&s=612x612&w=0&k=20&c=UNYBMBP_ppXZRUOyHnDlCxSeEjlo2Zr_KtUkcwPatrY=",
    colors: "3 colors available",
  },
  {
    id: 3,
    brand: "Strut & Bolt",
    name: "Top-stitch Sleeveless Linen Midi Dress",
    price: 32.50,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop",
    promo: "Up to 10% Off with promo",
    colors: "7 colors available",
  },
  {
    id: 4,
    brand: "endless rose",
    name: "Folded Strapless Linen Maxi Dress",
    price: 56.00,
    image: "https://images.pexels.com/photos/18517599/pexels-photo-18517599.png",
    shipping: "Free Shipping $200+ Orders",
    colors: "1 colors available",
  },
  {
    id: 5,
    brand: "Klesis",
    name: "Linen Set Look Jumpsuit",
    price: 27.50,
    image: "https://images.pexels.com/photos/35017432/pexels-photo-35017432.jpeg",
    colors: "2 colors available",
  },
  {
    id: 6,
    brand: "Love Poem",
    name: "Tie Waist Linen Blend Wide Leg Pants",
    price: 8.00,
    image: "https://images.pexels.com/photos/31094900/pexels-photo-31094900.jpeg",
    shipping: "FG Free Shipping $300+",
    promo: "Up to 5% Off with promo",
    colors: "3 colors available",
  },
];

export default function SummerLinenSection() {
  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Boutique Must-Haves: Summer Linen
          </h2>
          <a href="/summer-linen" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-pink-600 transition-colors group">
            View All 
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 mb-4 shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <p className="font-medium text-sm text-gray-900">{product.brand}</p>
                <p className="text-sm text-gray-600 line-clamp-2 leading-tight min-h-[42px]">
                  {product.name}
                </p>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-semibold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                {/* Extra Info */}
                {product.promo && (
                  <p className="text-xs text-green-600 font-medium">{product.promo}</p>
                )}
                {product.shipping && (
                  <p className="text-xs text-blue-600 flex items-center gap-1">
                    🚚 {product.shipping}
                  </p>
                )}
                <p className="text-xs text-gray-500">{product.colors}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}