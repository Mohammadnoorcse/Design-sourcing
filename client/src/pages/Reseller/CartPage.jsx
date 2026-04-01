import { useState } from 'react';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Jorpeche Oversize Fit Blazer",
      color: "Beige",
      size: "XS",
      price: 299,
      quantity: 1,
      image: "https://picsum.photos/id/1015/300/300",
    },
    {
      id: 2,
      name: "Slim Fit Premium Jeans",
      color: "Dark Blue",
      size: "32",
      price: 89,
      quantity: 2,
      image: "https://picsum.photos/id/1080/300/300",
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-semibold text-gray-900">Your Cart</h1>
            <p className="text-gray-600 mt-1">{cartItems.length} items</p>
          </div>
          <button 
            onClick={() => window.history.back()}
            className="text-gray-600 hover:text-black flex items-center gap-2"
          >
            ← Continue Shopping
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-3xl p-16 text-center">
                <ShoppingBag size={80} className="mx-auto text-gray-300 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-700">Your cart is empty</h3>
                <p className="text-gray-500 mt-2">Looks like you haven't added anything yet.</p>
                <button className="mt-8 bg-black text-white px-8 py-4 rounded-2xl font-medium">
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white rounded-3xl p-6 flex flex-col md:flex-row gap-6 shadow-sm border border-gray-100"
                >
                  {/* Product Image */}
                  <div className="w-full md:w-48 h-48 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-xl text-gray-900">{item.name}</h3>
                        <p className="text-gray-600 mt-1">
                          Color: <span className="font-medium">{item.color}</span> • 
                          Size: <span className="font-medium">{item.size}</span>
                        </p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-600 transition p-2"
                      >
                        <Trash2 size={22} />
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-gray-300 rounded-2xl overflow-hidden">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-4 py-3 hover:bg-gray-100 transition"
                        >
                          <Minus size={18} />
                        </button>
                        <span className="px-6 py-3 font-medium text-lg border-x border-gray-300">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-4 py-3 hover:bg-gray-100 transition"
                        >
                          <Plus size={18} />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-2xl font-semibold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-500">${item.price} each</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 sticky top-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">FREE</span>
                </div>
                <div className="h-px bg-gray-200 my-4"></div>
                
                <div className="flex justify-between text-xl font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mt-8">
                <p className="text-sm font-medium text-gray-700 mb-2">Promo Code</p>
                <div className="flex gap-3">
                  <input 
                    type="text" 
                    placeholder="Enter code"
                    className="flex-1 px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-black"
                  />
                  <button className="px-6 bg-black text-white rounded-2xl font-medium hover:bg-gray-800 transition">
                    Apply
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <button 
                className="w-full mt-10 bg-black text-white py-4 rounded-2xl text-lg font-semibold hover:bg-gray-900 transition flex items-center justify-center gap-3"
              >
                Proceed to Checkout
                <ArrowRight size={22} />
              </button>

              <div className="mt-6 text-center text-xs text-gray-500">
                Taxes calculated at checkout • Secure checkout
              </div>

              {/* Trust Icons */}
              <div className="flex justify-center gap-6 mt-8 opacity-75">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Visa_2022.svg" alt="Visa" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Mastercard_2019_logo.svg" alt="Mastercard" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_Pay_logo.svg" alt="Apple Pay" className="h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products (Optional) */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-8">You may also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden hover:shadow-md transition">
                <img 
                  src={`https://picsum.photos/id/${1000 + i}/300/300`} 
                  alt="Recommended"
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4">
                  <p className="font-medium line-clamp-2">Premium Cotton Shirt</p>
                  <p className="text-gray-600 mt-1">$69.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;