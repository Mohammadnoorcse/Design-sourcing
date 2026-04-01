import { useState } from "react";
import { Truck, Package, CheckCircle, Clock, MapPin, Phone, ArrowLeft, Search } from "lucide-react";

const TrackOrderPage = () => {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  // Simulated order data
  const demoOrder = {
    id: "DSB-784392",
    status: "shipped",
    progress: 75,
    estimatedDelivery: "April 05, 2026",
    customer: "Rahim Ahmed",
    phone: "+880 1712-345678",
    address: "House 23, Road 7, Mirpur-10, Dhaka",
    items: [
      { name: "Wireless Headphones", qty: 1, price: 2450 },
      { name: "Smart Watch Pro", qty: 1, price: 3890 },
    ],
    timeline: [
      { status: "Order Placed", date: "March 28, 2026", done: true },
      { status: "Payment Confirmed", date: "March 28, 2026", done: true },
      { status: "Processing", date: "March 29, 2026", done: true },
      { status: "Shipped", date: "March 31, 2026", done: true },
      { status: "Out for Delivery", date: "April 03, 2026", done: false },
      { status: "Delivered", date: "Expected April 05", done: false },
    ]
  };

  const handleTrack = (e) => {
    e.preventDefault();
    if (!orderId) return;
    
    setLoading(true);
    setTimeout(() => {
      setOrder(demoOrder);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white font-sans">


      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">Track Your Order</h1>
          <p className="text-gray-600 mt-3 text-lg">Enter your Order ID to track delivery status</p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleTrack} className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value.toUpperCase())}
              placeholder="Enter Order ID (e.g. DSB-784392)"
              className="w-full px-8 py-6 text-lg border border-gray-200 rounded-3xl focus:border-violet-500 outline-none transition"
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black text-white px-10 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:bg-gray-800 transition"
            >
              {loading ? "Tracking..." : "Track Order"} <Search size={22} />
            </button>
          </div>
        </form>

        {/* Order Tracking Result */}
        {order && (
          <div className="space-y-10">
            {/* Order Summary */}
            <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <p className="text-sm text-gray-500">Order ID</p>
                  <p className="text-3xl font-bold text-gray-900">{order.id}</p>
                </div>
                <div className="px-6 py-3 bg-emerald-100 text-emerald-700 rounded-2xl font-medium">
                  {order.status === "shipped" ? "🚚 On the Way" : "Processing"}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div>
                  <p className="text-gray-500">Customer</p>
                  <p className="font-medium">{order.customer}</p>
                </div>
                <div>
                  <p className="text-gray-500">Estimated Delivery</p>
                  <p className="font-medium text-emerald-600">{order.estimatedDelivery}</p>
                </div>
                <div>
                  <p className="text-gray-500">Phone</p>
                  <p className="font-medium">{order.phone}</p>
                </div>
                <div>
                  <p className="text-gray-500">Total Amount</p>
                  <p className="font-medium">৳{(order.items.reduce((a, b) => a + b.price, 0)).toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="bg-white border border-gray-100 rounded-3xl p-10">
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-10">
                <div 
                  className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-1000" 
                  style={{ width: `${order.progress}%` }}
                />
              </div>

              {/* Timeline */}
              <div className="space-y-10">
                {order.timeline.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1
                      ${step.done ? 'bg-emerald-500 text-white' : 'border-2 border-gray-300'}`}>
                      {step.done ? <CheckCircle size={20} /> : <Clock size={20} />}
                    </div>
                    <div className="flex-1">
                      <p className={`font-semibold ${step.done ? 'text-emerald-700' : 'text-gray-500'}`}>
                        {step.status}
                      </p>
                      <p className="text-sm text-gray-500">{step.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Products */}
            <div className="bg-white border border-gray-100 rounded-3xl p-10">
              <h3 className="font-semibold text-xl mb-6">Items in this Order</h3>
              <div className="space-y-6">
                {order.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b last:border-none">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                    </div>
                    <p className="font-semibold">৳{item.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-gray-50 rounded-3xl p-10">
              <div className="flex items-start gap-4">
                <MapPin className="text-violet-600 mt-1" size={28} />
                <div>
                  <p className="font-semibold text-lg">Delivery Address</p>
                  <p className="text-gray-600 mt-1 leading-relaxed">{order.address}</p>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="text-center pt-8">
              <p className="text-gray-600 mb-6">Need help with this order?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="flex items-center justify-center gap-3 border border-gray-300 px-8 py-4 rounded-2xl hover:bg-gray-50 transition">
                  <Phone size={20} /> Call Support
                </a>
                <a href="https://wa.me/8801700123456" target="_blank" className="flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-4 rounded-2xl hover:bg-green-600 transition">
                  💬 WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        )}

        {!order && (
          <div className="text-center py-20 text-gray-400">
            Enter your Order ID above to track your package
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrderPage;