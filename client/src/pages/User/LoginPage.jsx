import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("Login Successful! Welcome back.");
      // Redirect to dashboard or home
      window.location.href = "/reseller/dashboard";
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-md mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            👋 WELCOME BACK
          </div>
          <h1 className="text-4xl font-semibold text-gray-900">Login to your account</h1>
          <p className="text-gray-600 mt-3">
            Access your Drop Shipping Dashboard
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-5 top-4 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-5 top-4 text-gray-400" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-14 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-4 text-gray-400 hover:text-gray-600 transition"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <a 
                href="/forgot-password" 
                className="text-sm text-black hover:underline font-medium"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white py-5 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition"
            >
              {isLoading ? (
                "Logging in..."
              ) : (
                <>
                  Login <ArrowRight size={22} />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a 
                href="/register" 
                className="text-black font-semibold hover:underline"
              >
                Register as Drop Shipper
              </a>
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center gap-8 mt-10 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            🔒 Secure Login
          </div>
          <div>SSL Protected</div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-8">
          Having trouble logging in? Contact support
        </p>
      </div>
    </div>
  );
};

export default LoginPage;