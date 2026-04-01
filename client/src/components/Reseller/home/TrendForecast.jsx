// src/components/TrendForecast.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    brand: "Kentce Fashion",
    name: "Kentucky Leopard Ky Letter Reversible Sweatshirt",
    price: 17.35,
    image: "https://images.pexels.com/photos/33179938/pexels-photo-33179938.jpeg",
    promo: "Up to 10% Off with promo",
    colors: "2 colors available",
  },
  {
    id: 2,
    brand: "Bus Stop",
    name: "2245",
    price: 15.50,
    image: "https://images.pexels.com/photos/10037708/pexels-photo-10037708.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=189&fit=crop&h=306",
    colors: "2 colors available",
  },
  {
    id: 3,
    brand: "HRT&LUV",
    name: "Rock Star Mineral Graphic Dress",
    price: 19.50,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop",
    shipping: "FG Free Shipping $300+",
    colors: "4 colors available",
  },
  {
    id: 4,
    brand: "Zutter",
    name: "Nashville Postage Stamp Graphic Leopard Top",
    price: 18.00,
    image: "https://images.pexels.com/photos/11028791/pexels-photo-11028791.jpeg",
    colors: "2 colors available",
  },
  {
    id: 5,
    brand: "Lotus Fashion Collection",
    name: "Rodeo Time Cowboy Graphic Top",
    price: 15.00,
    image: "https://images.pexels.com/photos/32755012/pexels-photo-32755012.jpeg",
    promo: "Up to 5% Off with promo",
    colors: "9 colors available",
  },
  {
    id: 6,
    brand: "BLUME AND CO.",
    name: "Charleston Cocktail Club Oversized Sweatshirt",
    price: 21.50,
    image: "https://images.pexels.com/photos/7036557/pexels-photo-7036557.jpeg",
    shipping: "FG Free Shipping $300+",
    colors: "4 colors available",
  },
];

export default function TrendForecast() {
  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Trend Forecast: Graphics & Fonts
          </h2>
          <a href="/trends" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-pink-600 transition-colors group">
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
              <div className="space-y-1.5">
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