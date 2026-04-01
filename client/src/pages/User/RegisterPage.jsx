import { useState } from "react";
import {
  User,
  Store,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle,
  CreditCard,
} from "lucide-react";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1); // 1: Personal Info, 2: Business Info, 3: Payment, 4: Success

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    storeName: "",
    storeUrl: "",
    businessType: "individual",
    address: "",
    city: "Dhaka",
    whyJoin: "",
  });

  const registrationFee = 3000;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setStep(4); // Go to success
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full text-sm font-medium mb-4">
            🚀 DROP SHIPPING PROGRAM
          </div>
          <h1 className="text-4xl font-semibold text-gray-900">
            Join as a Drop Shipper
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            Start your own online business with zero inventory. Earn up to 25% commission.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center gap-6 mb-12 overflow-x-auto pb-2">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`flex items-center gap-3 ${step >= s ? "opacity-100" : "opacity-40"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 font-semibold transition-all ${
                  step >= s
                    ? "bg-black border-black text-white"
                    : "border-gray-300 text-gray-400"
                }`}
              >
                {step > s ? "✓" : s}
              </div>
              <div className="text-sm font-medium whitespace-nowrap">
                {s === 1 && "Personal Info"}
                {s === 2 && "Business Info"}
                {s === 3 && "Payment"}
                {s === 4 && "Complete"}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

          {/* Step 1: Personal Information */}
          {step === 1 && (
            <form onSubmit={handleNext} className="p-10">
              <h2 className="text-2xl font-semibold mb-8">Personal Information</h2>
              {/* ... (Your existing personal info form - unchanged) ... */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-5 top-4 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-5 top-4 text-gray-400" size={20} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-5 top-4 text-gray-400" size={20} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black"
                        placeholder="+880 1XXX-XXXXXX"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Create Password</label>
                  <div className="relative">
                    <Lock className="absolute left-5 top-4 text-gray-400" size={20} />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-14 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black"
                      placeholder="Create a strong password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-5 top-4 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-5 top-4 text-gray-400" size={20} />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-14 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-5 top-4 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-10 bg-black text-white py-5 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 hover:bg-gray-800 transition"
              >
                Continue <ArrowRight size={22} />
              </button>
            </form>
          )}

          {/* Step 2: Business Information */}
          {step === 2 && (
            <form onSubmit={handleNext} className="p-10">
              <h2 className="text-2xl font-semibold mb-8">Business Information</h2>
              {/* ... Your existing business info form ... */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Store / Brand Name</label>
                  <div className="relative">
                    <Store className="absolute left-5 top-4 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="storeName"
                      value={formData.storeName}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black"
                      placeholder="e.g. StyleHub BD"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Store URL (Optional)</label>
                  <input
                    type="text"
                    name="storeUrl"
                    value={formData.storeUrl}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black"
                    placeholder="yourstore.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, businessType: "individual" }))}
                      className={`p-5 border-2 rounded-2xl text-left transition ${formData.businessType === "individual" ? "border-black" : "border-gray-200"}`}
                    >
                      <p className="font-medium">Individual</p>
                      <p className="text-sm text-gray-500">Single person business</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, businessType: "company" }))}
                      className={`p-5 border-2 rounded-2xl text-left transition ${formData.businessType === "company" ? "border-black" : "border-gray-200"}`}
                    >
                      <p className="font-medium">Company</p>
                      <p className="text-sm text-gray-500">Registered business</p>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black"
                    placeholder="Full address"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-10">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-5 border border-gray-300 rounded-2xl font-semibold hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-black text-white py-5 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition"
                >
                  Continue to Payment
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="p-10">
              <h2 className="text-2xl font-semibold mb-2">Complete Your Registration</h2>
              <p className="text-gray-600 mb-8">One-time registration fee</p>

              <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-10 mb-8">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-400 text-sm">Registration Fee</p>
                    <p className="text-5xl font-bold mt-2">৳{registrationFee}</p>
                  </div>
                  <CreditCard size={60} className="opacity-80" />
                </div>
              </div>

              <div className="space-y-4 mb-10">
                <div className="p-6 border-2 border-black rounded-2xl flex items-center gap-4 bg-gray-50">
                  <input type="radio" checked readOnly className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">bKash / Nagad / Rocket</p>
                    <p className="text-sm text-gray-600">Most popular in Bangladesh</p>
                  </div>
                </div>

                <div className="p-6 border border-gray-300 rounded-2xl flex items-center gap-4 hover:border-gray-400 transition">
                  <input type="radio" className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">Bank Transfer</p>
                    <p className="text-sm text-gray-600">Dutch Bangla Bank / Islami Bank</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePayment}
                className="w-full bg-black hover:bg-gray-800 text-white py-5 rounded-2xl font-semibold text-lg transition flex items-center justify-center gap-3"
              >
                Pay ৳3000 Now
              </button>

              <button
                onClick={() => setStep(2)}
                className="w-full mt-4 text-gray-600 py-4 hover:text-black transition"
              >
                ← Back
              </button>

              <p className="text-center text-xs text-gray-500 mt-6">
                This is a one-time registration fee. No monthly charges.
              </p>
            </div>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <div className="p-16 text-center">
              <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
                <CheckCircle size={60} className="text-green-600" />
              </div>

              <h2 className="text-3xl font-semibold text-gray-900 mb-3">
                Registration Successful!
              </h2>
              <p className="text-green-600 font-medium mb-2">৳3000 Payment Received</p>
              <p className="text-gray-600 text-lg mb-10">
                Welcome aboard! Our team will review your application within 24-48 hours.
              </p>

              <div className="bg-gray-50 rounded-2xl p-8 mb-10 text-left">
                <p className="font-medium mb-4">Next Steps:</p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-3">✓ Confirmation email sent</li>
                  <li className="flex items-start gap-3">✓ Account activation within 48 hours</li>
                  <li className="flex items-start gap-3">✓ Login details will be sent to your email</li>
                </ul>
              </div>

              <button
                onClick={() => (window.location.href = "/login")}
                className="bg-black text-white px-12 py-5 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition"
              >
                Go to Login
              </button>
            </div>
          )}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Already have an account?{" "}
          <a href="/login" className="text-black font-medium hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;