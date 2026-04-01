import { useState } from 'react';
import { Package, Truck, CheckCircle, Clock, X, Calendar, MapPin } from 'lucide-react';

const MyOrdersPage = () => {
  const [orders] = useState([
    {
      id: "ORD-78492",
      date: "March 25, 2026",
      status: "Delivered",
      total: 299,
      items: [
        {
          name: "Jorpeche Oversize Fit Blazer",
          color: "Beige",
          size: "XS",
          price: 299,
          image: "https://picsum.photos/id/1015/120/120"
        }
      ],
      trackingNumber: "TRK987654321",
      estimatedDelivery: "March 28, 2026",
      address: "House 12, Road 5, Gulshan-1, Dhaka 1212",
      paymentMethod: "Visa •••• 4242"
    },
    {
      id: "ORD-78491",
      date: "March 20, 2026",
      status: "Shipped",
      total: 478,
      items: [
        {
          name: "Jorpeche Oversize Fit Blazer",
          color: "Beige",
          size: "M",
          price: 299,
          image: "https://picsum.photos/id/1015/120/120"
        },
        {
          name: "Slim Fit Premium Jeans",
          color: "Dark Blue",
          size: "32",
          price: 89,
          image: "https://picsum.photos/id/1080/120/120"
        }
      ],
      trackingNumber: "TRK987654320",
      estimatedDelivery: "March 30, 2026",
      address: "Apartment 7B, Banani DOHS, Dhaka",
      paymentMethod: "Mastercard •••• 8888"
    }
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered": return "bg-green-100 text-green-700 border-green-200";
      case "Shipped": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Processing": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Delivered": return <CheckCircle size={20} />;
      case "Shipped": return <Truck size={20} />;
      default: return <Clock size={20} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-semibold text-gray-900">My Orders</h1>
            <p className="text-gray-600 mt-1">Track and manage your orders</p>
          </div>
          <div className="text-sm text-gray-500">
            Showing {orders.length} orders
          </div>
        </div>

        <div className="space-y-8">
          {orders.map((order) => (
            <div 
              key={order.id}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Order Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-xs text-gray-500">ORDER ID</p>
                    <p className="font-mono font-semibold text-gray-900">{order.id}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">ORDER DATE</p>
                    <p className="font-medium">{order.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <div className={`flex items-center gap-2 px-4 py-1.5 rounded-2xl border text-sm font-medium ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    <span>{order.status}</span>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="p-6">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.color} • Size {item.size}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-lg">${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Footer */}
              <div className="border-t border-gray-100 p-6 flex flex-col md:flex-row items-center justify-between bg-gray-50">
                <div>
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="text-2xl font-semibold text-gray-900">${order.total}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-0 w-full md:w-auto">
                  <button 
                    onClick={() => setSelectedOrder(order)}
                    className="flex-1 md:flex-none px-8 py-3 bg-black text-white rounded-2xl font-medium hover:bg-gray-900 transition"
                  >
                    View Order Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ==================== ORDER DETAILS MODAL ==================== */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-xl">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <p className="text-xs text-gray-500">ORDER ID</p>
                <p className="font-mono text-lg font-semibold">{selectedOrder.id}</p>
              </div>
              <button 
                onClick={() => setSelectedOrder(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              {/* Status */}
              <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-2xl text-sm font-medium mb-6 ${getStatusColor(selectedOrder.status)}`}>
                {getStatusIcon(selectedOrder.status)}
                <span>{selectedOrder.status}</span>
              </div>

              {/* Items */}
              <h3 className="font-semibold text-lg mb-4">Order Items</h3>
              <div className="space-y-6 mb-8">
                {selectedOrder.items.map((item, index) => (
                  <div key={index} className="flex gap-5 border-b pb-6 last:border-b-0 last:pb-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-2xl"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Color: {item.color} • Size: {item.size}
                      </p>
                      <p className="mt-3 font-semibold">${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h3 className="font-semibold mb-4">Order Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${selectedOrder.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                  <div className="h-px bg-gray-200 my-3"></div>
                  <div className="flex justify-between font-semibold text-base">
                    <span>Total</span>
                    <span>${selectedOrder.total}</span>
                  </div>
                </div>
              </div>

              {/* Shipping & Payment Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={20} className="text-gray-500" />
                    <h4 className="font-semibold">Shipping Address</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{selectedOrder.address}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={20} className="text-gray-500" />
                    <h4 className="font-semibold">Estimated Delivery</h4>
                  </div>
                  <p className="text-gray-700">{selectedOrder.estimatedDelivery}</p>

                  {selectedOrder.trackingNumber && (
                    <div className="mt-6">
                      <p className="text-xs text-gray-500">TRACKING NUMBER</p>
                      <p className="font-mono font-medium">{selectedOrder.trackingNumber}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t flex gap-3">
              <button 
                onClick={() => setSelectedOrder(null)}
                className="flex-1 py-3.5 border border-gray-300 rounded-2xl font-medium hover:bg-gray-50 transition"
              >
                Close
              </button>
              {selectedOrder.status === "Delivered" && (
                <button className="flex-1 py-3.5 bg-black text-white rounded-2xl font-medium hover:bg-gray-900 transition">
                  Leave a Review
                </button>
              )}
              {selectedOrder.status === "Shipped" && (
                <button className="flex-1 py-3.5 bg-black text-white rounded-2xl font-medium hover:bg-gray-900 transition">
                  Track Package
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrdersPage;