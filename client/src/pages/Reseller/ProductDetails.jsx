import { useState } from 'react';
import { Star, Heart, Share2, Truck, RotateCcw } from 'lucide-react';
import SummerLinenSection from '../../components/Reseller/home/SummerLinenSection';

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('XS');
  const [activeTab, setActiveTab] = useState('reviews'); // 'details', 'reviews', 'discussion'

  const colors = ['#E5E7EB', '#1F2937']; // Light beige & Black
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const reviews = [
    {
      name: "Alex Done",
      time: "Yesterday",
      rating: 5,
      comment: "Nice fashion jacket. It wear very sharply on the body.",
      likes: 44,
    },
    {
      name: "Dansky",
      time: "2 days ago",
      rating: 5,
      comment: "Excellent fashion jacket.",
      likes: 30,
    },
    {
      name: "Mikzu Ui",
      time: "4 days ago",
      rating: 5,
      comment: "Good it suitable for body fit.",
      likes: 25,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          Woman Fashion &gt; Nadetta Coat Beige &gt; Jackets &gt; Coats
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <img 
                src="https://picsum.photos/id/1015/600/750" 
                alt="Jorpeche Oversize Fit Blazer"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {[1015, 1020, 1033, 106].map((id, i) => (
                <div 
                  key={i} 
                  className="aspect-square bg-white rounded-xl overflow-hidden border-2 border-gray-200 hover:border-black cursor-pointer transition"
                >
                  <img 
                    src={`https://picsum.photos/id/${id}/200/200`} 
                    alt={`View ${i+1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">
                Jorpeche Oversize Fit Blazer
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <span className="text-gray-600">(4.8 from 350 Reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-black">$299.00</span>
              <span className="text-2xl text-gray-400 line-through">$320.00</span>
            </div>

            {/* Colors */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Available Color</p>
              <div className="flex gap-3">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-9 h-9 rounded-full border-2 transition-all ${
                      selectedColor === index ? 'border-black scale-110' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Available Size</p>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2.5 border rounded-xl text-sm font-medium transition-all ${
                      selectedSize === size 
                        ? 'bg-black text-white border-black' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Quantity</p>
              <div className="flex items-center border border-gray-300 rounded-2xl w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-xl hover:bg-gray-100 rounded-l-2xl transition"
                >
                  −
                </button>
                <span className="px-6 py-3 text-lg font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-xl hover:bg-gray-100 rounded-r-2xl transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button className="flex-1 bg-black text-white py-4 rounded-2xl font-semibold hover:bg-gray-800 transition text-lg">
                BUY IT NOW
              </button>
              <button className="flex-1 border-2 border-black py-4 rounded-2xl font-semibold hover:bg-gray-50 transition text-lg">
                ADD TO CART
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex gap-6 text-sm text-gray-600 pt-2">
              <div className="flex items-center gap-2">
                <Truck size={20} />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw size={20} />
                <span>30 Days Return</span>
              </div>
            </div>

            {/* SKU & Tags */}
            <div className="pt-6 border-t text-sm">
              <p><span className="font-medium">SKU:</span> GHTF9345AAAA</p>
              <p className="mt-1">
                <span className="font-medium">Tags:</span> Men, Coat, Fashion, Jacket
              </p>
            </div>

            {/* Share */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Share:</span>
              <div className="flex gap-3">
                <button className="hover:text-blue-600"><Share2 size={20} /></button>
                <button>𝕏</button>
                <button>📘</button>
                <button>📸</button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="mt-16 border-b border-gray-200">
          <div className="flex gap-8 text-lg font-medium">
            <button
              onClick={() => setActiveTab('details')}
              className={`pb-4 px-1 transition-colors relative ${
                activeTab === 'details'
                  ? 'text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-black'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Details
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-4 px-1 transition-colors relative ${
                activeTab === 'reviews'
                  ? 'text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-black'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Reviews
            </button>
            <button
              onClick={() => setActiveTab('discussion')}
              className={`pb-4 px-1 transition-colors relative ${
                activeTab === 'discussion'
                  ? 'text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-black'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Discussion
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-10">
          {/* Details Tab */}
          {activeTab === 'details' && (
            <div className="prose max-w-none text-gray-700">
              <h3 className="text-2xl font-semibold mb-4">Product Description</h3>
              <p className="leading-relaxed">
                The Jorpeche Oversize Fit Blazer is crafted from premium quality fabric, 
                offering a relaxed yet sophisticated silhouette. Perfect for both casual 
                and formal occasions, this blazer features a structured shoulder, notched lapel, 
                and double-breasted button closure.
              </p>
              <ul className="list-disc pl-6 mt-6 space-y-2">
                <li>Oversized relaxed fit</li>
                <li>Premium wool blend fabric</li>
                <li>Notched lapels</li>
                <li>Double-breasted button front</li>
                <li>Two functional flap pockets</li>
                <li>Fully lined interior</li>
              </ul>
            </div>
          )}

          {/* Reviews Tab (Active by default) */}
          {activeTab === 'reviews' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold">Customer Reviews</h2>
                <div className="text-right">
                  <div className="flex items-center gap-1 justify-end">
                    <span className="text-4xl font-bold">4.8</span>
                    <div>
                      <div className="flex text-yellow-400">★★★★☆</div>
                      <p className="text-sm text-gray-500">(107 Reviews)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-xs text-gray-500">{review.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex text-yellow-400 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>

                    <p className="text-gray-700 leading-relaxed">{review.comment}</p>

                    <div className="flex gap-4 mt-6 text-sm text-gray-500">
                      <span>❤️ {review.likes}</span>
                      <span>💬 0</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Discussion Tab */}
          {activeTab === 'discussion' && (
            <div className="text-center py-16 text-gray-500">
              <p className="text-xl">Discussion section coming soon...</p>
              <p className="mt-2">Users will be able to ask questions and engage with the community here.</p>
            </div>
          )}
        </div>

        {/* relative product */}
        <SummerLinenSection/>
      </div>
    </div>
  );
};

export default ProductDetails;