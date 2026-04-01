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
  Sparkles,
} from "lucide-react";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);

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
    setTimeout(() => {
      setStep(4);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black font-sans overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#4f46e510_0%,transparent_50%)]" />

      <div className="max-w-2xl mx-auto px-4 py-12 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 py-2.5 rounded-full text-sm font-medium mb-6">
            <Sparkles size={18} className="text-yellow-400" />
            DROP SHIPPING PROGRAM
          </div>
          <h1 className="text-5xl font-bold text-white tracking-tight">
            Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">Join as a Drop Shipper</span>
          </h1>
          <p className="text-zinc-400 mt-4 text-lg max-w-md mx-auto">
            Zero inventory. Zero risk. Earn up to 25% commission per sale.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center gap-8 mb-12">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex flex-col items-center">
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 ${
                  step > s
                    ? "bg-emerald-500 border-emerald-500 text-white"
                    : step === s
                    ? "bg-white border-violet-500 text-zinc-900 shadow-xl shadow-violet-500/30"
                    : "border-zinc-700 text-zinc-500"
                }`}
              >
                {step > s ? "✓" : s}
              </div>
              <p className="text-xs text-zinc-400 mt-3 font-medium tracking-widest">
                {s === 1 && "PERSONAL"}
                {s === 2 && "BUSINESS"}
                {s === 3 && "PAYMENT"}
                {s === 4 && "DONE"}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <form onSubmit={handleNext} className="p-10">
              <h2 className="text-3xl font-semibold text-white mb-8">Tell us about yourself</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-5 top-4 text-zinc-400" size={20} />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-zinc-500 focus:border-violet-500 outline-none transition"
                      placeholder="Ahmed Rahman"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-5 top-4 text-zinc-400" size={20} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-zinc-500 focus:border-violet-500 outline-none transition"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-5 top-4 text-zinc-400" size={20} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-zinc-500 focus:border-violet-500 outline-none transition"
                        placeholder="+880 1XXX-XXXXXX"
                      />
                    </div>
                  </div>
                </div>

                {/* Password fields with better UX */}
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Create Password</label>
                  <div className="relative">
                    <Lock className="absolute left-5 top-4 text-zinc-400" size={20} />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-14 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-zinc-500 focus:border-violet-500 outline-none transition"
                      placeholder="••••••••"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-4 text-zinc-400">
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-5 top-4 text-zinc-400" size={20} />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-14 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-zinc-500 focus:border-violet-500 outline-none transition"
                      placeholder="••••••••"
                    />
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-5 top-4 text-zinc-400">
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-10 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white py-5 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all active:scale-95"
              >
                Continue <ArrowRight size={24} />
              </button>
            </form>
          )}

          {/* Step 2: Business Info */}
          {step === 2 && (
            <form onSubmit={handleNext} className="p-10">
              <h2 className="text-3xl font-semibold text-white mb-8">Business Details</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Store / Brand Name</label>
                  <div className="relative">
                    <Store className="absolute left-5 top-4 text-zinc-400" size={20} />
                    <input
                      type="text"
                      name="storeName"
                      value={formData.storeName}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-zinc-500 focus:border-violet-500 outline-none transition"
                      placeholder="StyleHub BD"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Store URL (Optional)</label>
                  <input
                    type="text"
                    name="storeUrl"
                    value={formData.storeUrl}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-zinc-500 focus:border-violet-500 outline-none transition"
                    placeholder="yourstore.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-3">Business Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    {["individual", "company"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, businessType: type }))}
                        className={`p-6 border-2 rounded-2xl text-left transition-all ${
                          formData.businessType === type
                            ? "border-violet-500 bg-violet-500/10"
                            : "border-white/10 hover:border-white/30"
                        }`}
                      >
                        <p className="font-semibold text-white capitalize">{type}</p>
                        <p className="text-sm text-zinc-400">
                          {type === "individual" ? "Single person operation" : "Registered company"}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Business Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-zinc-500 focus:border-violet-500 outline-none transition resize-none"
                    placeholder="House 12, Road 5, Gulshan-2, Dhaka"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-10">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-5 border border-white/20 rounded-2xl font-semibold text-white hover:bg-white/5 transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-5 rounded-2xl font-semibold text-lg hover:brightness-110 transition"
                >
                  Continue to Payment
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="p-10">
              <h2 className="text-3xl font-semibold text-white mb-2">Complete Registration</h2>
              <p className="text-zinc-400">One-time fee • Lifetime access</p>

              <div className="mt-8 bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-3xl p-10 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-zinc-400">Registration Fee</p>
                    <p className="text-6xl font-bold mt-2">৳{registrationFee}</p>
                  </div>
                  <CreditCard size={72} className="text-violet-400" />
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="p-6 border-2 border-violet-500 rounded-2xl bg-white/5 flex items-center gap-4">
                  <input type="radio" checked readOnly className="accent-violet-500" />
                  <div>
                    <p className="font-semibold text-white">bKash / Nagad / Rocket</p>
                    <p className="text-sm text-zinc-400">Instant • Most popular in BD</p>
                  </div>
                </div>

                <div className="p-6 border border-white/10 rounded-2xl flex items-center gap-4 hover:border-white/30 transition">
                  <input type="radio" className="accent-violet-500" />
                  <div>
                    <p className="font-semibold text-white">Bank Transfer</p>
                    <p className="text-sm text-zinc-400">DBBL / Islami Bank / Others</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePayment}
                className="w-full mt-10 bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-white py-5 rounded-2xl font-semibold text-xl transition-all active:scale-[0.98]"
              >
                Pay ৳3000 Now
              </button>

              <button onClick={() => setStep(2)} className="w-full mt-4 text-zinc-400 hover:text-white py-3 transition">
                ← Back
              </button>
            </div>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <div className="p-16 text-center">
              <div className="mx-auto w-28 h-28 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mb-8 shadow-xl">
                <CheckCircle size={72} className="text-white" />
              </div>

              <h2 className="text-4xl font-bold text-white mb-3">Welcome to the Family!</h2>
              <p className="text-emerald-400 font-medium text-xl">Payment Successful • ৳3000 Received</p>

              <p className="text-zinc-400 text-lg mt-6 max-w-sm mx-auto">
                Our team will review your application within 24-48 hours.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mt-12 text-left">
                <p className="font-semibold text-white mb-5">What happens next?</p>
                <ul className="space-y-4 text-zinc-300">
                  <li className="flex items-center gap-3">✅ Confirmation email sent</li>
                  <li className="flex items-center gap-3">✅ Review within 48 hours</li>
                  <li className="flex items-center gap-3">✅ Login credentials delivered</li>
                </ul>
              </div>

              <button
                onClick={() => (window.location.href = "/login")}
                className="mt-12 bg-white text-black px-14 py-5 rounded-2xl font-semibold text-lg hover:bg-zinc-200 transition"
              >
                Go to Login
              </button>
            </div>
          )}
        </div>

        <p className="text-center text-zinc-500 text-sm mt-8">
          Already a drop shipper?{" "}
          <a href="/login" className="text-white hover:underline font-medium">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;