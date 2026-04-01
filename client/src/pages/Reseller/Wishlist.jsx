// src/pages/Wishlist.jsx
import React, { useState } from 'react';
import { Heart, Trash2, ShoppingCart, Share2 } from 'lucide-react';

const initialWishlist = [
  {
    id: 1,
    brand: "MABLE",
    name: "Smocked Tiered Halter Open Back Midi Dress",
    price: 32.75,
    image: "https://images.pexels.com/photos/26309759/pexels-photo-26309759.jpeg",
    color: "Blush Pink",
  },
  {
    id: 2,
    brand: "Shop SevenDay",
    name: "Floral Print Lace Trim Mini Dress",
    price: 23.75,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&auto=format&fit=crop",
    color: "Sage Green",
  },
  {
    id: 3,
    brand: "INA",
    name: "Luxe Floral Jacquard Corset Mini Dress",
    price: 30.50,
    image: "https://images.pexels.com/photos/20297231/pexels-photo-20297231.jpeg",
    color: "Ivory",
  },
  {
    id: 4,
    brand: "TIC TOC",
    name: "Wilder Floral Lace Mesh Fringe Top",
    price: 14.50,
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&auto=format&fit=crop",
    color: "Midnight Black",
  },
];

export default function Wishlist() {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const removeItem = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  const addToCart = (id) => {
    alert(`Added to cart! 🎉`);
    removeItem(id);
  };

  return (
    <div className=" bg-gradient-to-br from-rose-50 via-pink-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-5">
        {/* Unique Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Heart className="h-10 w-10 text-rose-500" fill="currentColor" />
            <h1 className="text-5xl font-light tracking-tighter text-gray-900">Your Wishlist</h1>
          </div>
          <p className="text-gray-600 text-lg">Items you've fallen in love with ❤️</p>
          <p className="text-sm text-gray-500 mt-2">{wishlist.length} saved items</p>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-24">
            <Heart className="h-24 w-24 text-gray-200 mx-auto mb-6" />
            <h3 className="text-3xl font-light text-gray-900">Your wishlist is empty</h3>
            <p className="text-gray-600 mt-4 max-w-md mx-auto">
              Start adding beautiful pieces you love. They'll wait here for you.
            </p>
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-4 gap-8 space-y-8">
            {wishlist.map((item, index) => (
              <div
                key={item.id}
                className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 break-inside-avoid`}
              >
                {/* Image with floating heart */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Floating Wishlist Heart */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg">
                    <Heart className="h-6 w-6 text-rose-500" fill="currentColor" />
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute bottom-6 right-6 p-3 bg-white/90 backdrop-blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-all hover:bg-red-50"
                  >
                    <Trash2 className="h-5 w-5 text-red-500" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-pink-600 font-medium tracking-wide text-sm">{item.brand}</p>
                      <h3 className="font-medium text-gray-900 mt-1.5 line-clamp-2 leading-tight text-lg">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-xl font-semibold text-gray-900 whitespace-nowrap">
                      ${item.price}
                    </p>
                  </div>

                  <p className="text-sm text-gray-500 mt-3">{item.color}</p>

                  <button
                    onClick={() => addToCart(item.id)}
                    className="mt-8 w-full bg-black hover:bg-gray-900 text-white py-4 rounded-2xl font-medium flex items-center justify-center gap-3 transition-all active:scale-95"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Share Wishlist */}
        {wishlist.length > 0 && (
          <div className="text-center mt-16">
            <button className="inline-flex items-center gap-3 px-8 py-4 border border-gray-300 rounded-2xl hover:bg-gray-50 transition-all">
              <Share2 className="h-5 w-5" />
              <span className="font-medium">Share Wishlist</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}