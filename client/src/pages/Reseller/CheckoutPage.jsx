import { useState } from 'react';
import { ArrowLeft, CreditCard, Truck, Shield, Check, User } from 'lucide-react';

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('bkash');
  const [shippingFor, setShippingFor] = useState('client'); 
  const [clientPaymentAmount, setClientPaymentAmount] = useState("");

  // Mock Cart Data
  const cartItems = [
    {
      id: 1,
      name: "Jorpeche Oversize Fit Blazer",
      color: "Beige",
      size: "XS",
      price: 299,
      quantity: 1,
      image: "https://picsum.photos/id/1015/100/100"
    },
    {
      id: 2,
      name: "Slim Fit Premium Jeans",
      color: "Dark Blue",
      size: "32",
      price: 89,
      quantity: 2,
      image: "https://picsum.photos/id/1080/100/100"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal;

  // Reseller's Own Information (Pre-filled)
  const ownInfo = {
    fullName: "Mohammad Rahman",
    email: "mohammad@example.com",
    phone: "+880 1712-345678",
    address: "House 45, Road 12, Block E, Banani",
    city: "Dhaka",
    postcode: "1213"
  };

  // Client Shipping Data
  const [clientData, setClientData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "Dhaka",
    postcode: ""

  });

  const [notes, setNotes] = useState("");

  // Get current shipping data based on selection
  const currentShippingData = shippingFor === 'own' ? ownInfo : clientData;

  const handleClientInputChange = (e) => {
    const { name, value } = e.target;
    setClientData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition"
          >
            <ArrowLeft size={20} /> Back to Cart
          </button>
          <div className="h-6 w-px bg-gray-300"></div>
          <h1 className="text-3xl font-semibold text-gray-900">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Side */}
          <div className="lg:col-span-7">
            {/* Progress Steps */}
            <div className="flex justify-between mb-10 px-2">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    step >= s ? 'bg-black border-black text-white' : 'border-gray-300 text-gray-400'
                  }`}>
                    {step > s ? <Check size={20} /> : s}
                  </div>
                  <p className={`text-xs mt-2 font-medium ${step >= s ? 'text-black' : 'text-gray-400'}`}>
                    {s === 1 && 'Shipping'}
                    {s === 2 && 'Payment'}
                    {s === 3 && 'Confirm'}
                  </p>
                </div>
              ))}
            </div>

            {/* Step 1: Shipping Information */}
            {step === 1 && (
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>

                {/* Toggle Switch */}
                <div className="flex bg-gray-100 rounded-2xl p-1 mb-8 w-fit">
                  <button
                    onClick={() => setShippingFor('client')}
                    className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                      shippingFor === 'client' ? 'bg-white shadow-sm text-black' : 'text-gray-600'
                    }`}
                  >
                    <User size={18} />
                    Shipping for Client
                  </button>
                  <button
                    onClick={() => setShippingFor('own')}
                    className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                      shippingFor === 'own' ? 'bg-white shadow-sm text-black' : 'text-gray-600'
                    }`}
                  >
                    My Own Information
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={currentShippingData.fullName}
                        onChange={shippingFor === 'client' ? handleClientInputChange : undefined}
                        disabled={shippingFor === 'own'}
                        className={`w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black ${
                          shippingFor === 'own' ? 'bg-gray-100 cursor-not-allowed' : ''
                        }`}
                        placeholder="Enter name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={currentShippingData.phone}
                        onChange={shippingFor === 'client' ? handleClientInputChange : undefined}
                        disabled={shippingFor === 'own'}
                        className={`w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black ${
                          shippingFor === 'own' ? 'bg-gray-100 cursor-not-allowed' : ''
                        }`}
                        placeholder="+880 1XXX-XXXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={currentShippingData.email}
                      onChange={shippingFor === 'client' ? handleClientInputChange : undefined}
                      disabled={shippingFor === 'own'}
                      className={`w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black ${
                        shippingFor === 'own' ? 'bg-gray-100 cursor-not-allowed' : ''
                      }`}
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
                    <textarea 
                      name="address"
                      value={currentShippingData.address}
                      onChange={shippingFor === 'client' ? handleClientInputChange : undefined}
                      disabled={shippingFor === 'own'}
                      rows={3}
                      className={`w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black ${
                        shippingFor === 'own' ? 'bg-gray-100 cursor-not-allowed' : ''
                      }`}
                      placeholder="Detailed delivery address"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input 
                        type="text" 
                        name="city"
                        value={currentShippingData.city}
                        onChange={shippingFor === 'client' ? handleClientInputChange : undefined}
                        disabled={shippingFor === 'own'}
                        className={`w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black ${
                          shippingFor === 'own' ? 'bg-gray-100 cursor-not-allowed' : ''
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Postcode</label>
                      <input 
                        type="text" 
                        name="postcode"
                        value={currentShippingData.postcode}
                        onChange={shippingFor === 'client' ? handleClientInputChange : undefined}
                        disabled={shippingFor === 'own'}
                        className={`w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black ${
                          shippingFor === 'own' ? 'bg-gray-100 cursor-not-allowed' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* NEW: Client Total Payment - Only show when Shipping for Client */}
      {shippingFor === 'client' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Client Total Payment Amount
          </label>
          <div className="relative">
            <span className="absolute left-6 top-4 text-gray-500 font-semibold">৳</span>
            <input 
              type="number" 
              value={clientPaymentAmount || ''}
              onChange={(e) => setClientPaymentAmount(e.target.value)}
              className="w-full pl-12 pr-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black text-lg font-medium"
              placeholder="Enter total amount client will pay"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            This is the amount the client will pay you directly
          </p>
        </div>
      )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Order Notes (Optional)</label>
                    <textarea 
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Special instructions for delivery..."
                      rows={3}
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black"
                    />
                  </div>
                
                </div>

                <button 
                  onClick={() => setStep(2)}
                  className="w-full mt-10 bg-black text-white py-5 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition"
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {/* Step 2: Payment (Unchanged) */}
            {step === 2 && (
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-semibold mb-8">Payment Method</h2>

                <div className="space-y-4">
                  <div 
                    onClick={() => setPaymentMethod('bkash')}
                    className={`p-6 border-2 rounded-2xl cursor-pointer transition-all ${paymentMethod === 'bkash' ? 'border-black' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-pink-500 text-white rounded-xl flex items-center justify-center font-bold">bKash</div>
                      <div>
                        <p className="font-semibold">bKash Payment</p>
                        <p className="text-sm text-gray-600">Pay via bKash Mobile Banking</p>
                      </div>
                    </div>
                  </div>

                  <div 
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-6 border-2 rounded-2xl cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-black' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <div className="flex items-center gap-4">
                      <Truck size={48} className="text-gray-700" />
                      <div>
                        <p className="font-semibold">Cash on Delivery</p>
                        <p className="text-sm text-gray-600">Pay when product is delivered</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex gap-4">
                  <button 
                    onClick={() => setStep(1)}
                    className="flex-1 py-5 border border-gray-300 rounded-2xl font-semibold hover:bg-gray-50 transition"
                  >
                    Back
                  </button>
                  <button 
                    onClick={handlePlaceOrder}
                    className="flex-1 bg-black text-white py-5 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition"
                  >
                    Place Order • ৳{total}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Success */}
            {step === 3 && (
              <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100">
                <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
                  <Check size={48} className="text-green-600" />
                </div>
                <h2 className="text-3xl font-semibold text-green-700 mb-3">Order Placed Successfully!</h2>
                <p className="text-gray-600 text-lg">Thank you for your purchase.</p>
                
                <div className="my-10 p-8 bg-gray-50 rounded-2xl">
                  <p className="text-sm text-gray-500">Order ID</p>
                  <p className="font-mono text-2xl font-semibold text-black">ORD-78496</p>
                </div>

                <button 
                  onClick={() => window.location.href = '/reseller/orders'}
                  className="bg-black text-white px-12 py-5 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition"
                >
                  View My Orders
                </button>
              </div>
            )}
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-8">
              <h3 className="text-xl font-semibold mb-6">Order Summary</h3>

              <div className="space-y-6 mb-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-5">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-2xl"
                    />
                    <div className="flex-1">
                      <p className="font-medium leading-tight">{item.name}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.color} • Size {item.size} × {item.quantity}
                      </p>
                      <p className="font-semibold mt-2">৳{(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-6 space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>৳{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600 font-medium">FREE</span>
                </div>
                <div className="h-px bg-gray-200 my-4"></div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>৳{total}</span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3 text-xs text-gray-500">
                <Shield size={18} />
                <span>Secure checkout powered by SSL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;