import { useState } from 'react';
import { Star, Heart, ShoppingCart, Clock, Zap } from 'lucide-react';

const HotDealsPage = () => {
  const [wishlist, setWishlist] = useState([]);

  const hotDeals = [
    {
      id: 1,
      name: "Jorpeche Oversize Fit Blazer",
      originalPrice: 320,
      salePrice: 299,
      discount: 7,
      rating: 4.8,
      reviews: 350,
      image: "https://picsum.photos/id/1015/400/500",
      color: "Beige",
      inStock: true,
      timeLeft: "18h 45m"
    },
    {
      id: 2,
      name: "Premium Slim Fit Chino Pants",
      originalPrice: 120,
      salePrice: 79,
      discount: 34,
      rating: 4.6,
      reviews: 128,
      image: "https://picsum.photos/id/1080/400/500",
      color: "Khaki",
      inStock: true,
      timeLeft: "12h 20m"
    },
    {
      id: 3,
      name: "Oversized Hooded Sweatshirt",
      originalPrice: 95,
      salePrice: 59,
      discount: 38,
      rating: 4.9,
      reviews: 245,
      image: "https://picsum.photos/id/201/400/500",
      color: "Black",
      inStock: false,
      timeLeft: "6h 10m"
    },
    {
      id: 4,
      name: "Leather Chelsea Boots",
      originalPrice: 250,
      salePrice: 189,
      discount: 24,
      rating: 4.7,
      reviews: 89,
      image: "https://picsum.photos/id/106/400/500",
      color: "Brown",
      inStock: true,
      timeLeft: "23h 55m"
    },
    {
      id: 5,
      name: "Classic Oxford Shirt",
      originalPrice: 85,
      salePrice: 49,
      discount: 42,
      rating: 4.5,
      reviews: 312,
      image: "https://picsum.photos/id/133/400/500",
      color: "White",
      inStock: true,
      timeLeft: "9h 30m"
    },
    {
      id: 6,
      name: "Denim Trucker Jacket",
      originalPrice: 145,
      salePrice: 99,
      discount: 32,
      rating: 4.8,
      reviews: 167,
      image: "https://picsum.photos/id/160/400/500",
      color: "Blue",
      inStock: true,
      timeLeft: "15h 40m"
    }
  ];

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(itemId => itemId !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const addToCart = (product) => {
    alert(`${product.name} added to cart!`);
    // You can integrate with your cart context here
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-red-100 text-red-600 px-6 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="text-red-500" size={22} />
            HOT DEALS - LIMITED TIME ONLY
          </div>
          <h1 className="text-5xl font-semibold text-gray-900">Hot Deals</h1>
          <p className="text-gray-600 mt-3 max-w-md mx-auto">
            Grab these amazing offers before they expire. Updated daily with the best discounts.
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotDeals.map((deal) => {
            const isWishlisted = wishlist.includes(deal.id);
            
            return (
              <div 
                key={deal.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image + Discount Badge */}
                <div className="relative">
                  <img 
                    src={deal.image} 
                    alt={deal.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-2xl">
                    -{deal.discount}%
                  </div>

                  {/* Wishlist Button */}
                  <button 
                    onClick={() => toggleWishlist(deal.id)}
                    className="absolute top-4 left-4 p-3 bg-white rounded-2xl shadow-md hover:bg-gray-100 transition"
                  >
                    <Heart 
                      size={20} 
                      className={isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"} 
                    />
                  </button>

                  {/* Time Left */}
                  <div className="absolute bottom-4 left-4 bg-black/80 text-white text-xs px-4 py-1.5 rounded-2xl flex items-center gap-2">
                    <Clock size={16} />
                    <span>{deal.timeLeft}</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill={i < Math.floor(deal.rating) ? "currentColor" : "none"} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({deal.reviews})</span>
                  </div>

                  <h3 className="font-semibold text-xl text-gray-900 line-clamp-2 min-h-[56px]">
                    {deal.name}
                  </h3>

                  <p className="text-gray-600 text-sm mt-1">{deal.color}</p>

                  {/* Pricing */}
                  <div className="flex items-center gap-3 mt-4">
                    <span className="text-3xl font-bold text-black">
                      ${deal.salePrice}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      ${deal.originalPrice}
                    </span>
                  </div>

                  {/* Stock & Buttons */}
                  <div className="mt-6 flex gap-3">
                    <button 
                      onClick={() => addToCart(deal)}
                      disabled={!deal.inStock}
                      className={`flex-1 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all ${
                        deal.inStock 
                          ? 'bg-black text-white hover:bg-gray-800' 
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart size={20} />
                      {deal.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>

                    <button 
                      onClick={() => window.location.href = `/product/${deal.id}`}
                      className="px-6 py-4 border border-gray-300 rounded-2xl hover:bg-gray-50 transition"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner / Countdown Section */}
        <div className="mt-20 bg-gradient-to-r from-black to-gray-900 text-white rounded-3xl p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-semibold mb-4">Flash Sale Ends Soon!</h2>
            <p className="text-gray-300 mb-8">
              Don't miss out on these limited-time offers. New deals drop every day at midnight.
            </p>
            <button className="bg-white text-black px-10 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition text-lg">
              Shop All Deals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDealsPage;