import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      alert("Login Successful! Welcome back.");
      window.location.href = "/reseller/dashboard";
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black font-sans relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#4f46e520_0%,transparent_50%)]" />

      <div className="max-w-md mx-auto px-4 py-16 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 py-2.5 rounded-full text-sm font-medium mb-6">
            <Sparkles size={18} className="text-yellow-400" />
            WELCOME BACK
          </div>
          <h1 className="text-5xl font-bold text-white tracking-tight">
            Login to your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">account</span>
          </h1>
          <p className="text-zinc-400 mt-4 text-lg">
            Access your Drop Shipping Business
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-5 top-4 text-zinc-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-zinc-500 focus:border-violet-500 outline-none transition"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-5 top-4 text-zinc-400" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-14 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-zinc-500 focus:border-violet-500 outline-none transition"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-4 text-zinc-400 hover:text-white transition"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <a 
                href="/forgot-password" 
                className="text-sm text-violet-400 hover:text-violet-300 font-medium transition"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 disabled:from-gray-600 disabled:to-gray-600 text-white py-5 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all active:scale-95"
            >
              {isLoading ? (
                "Logging you in..."
              ) : (
                <>
                  Login  <ArrowRight size={24} />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-zinc-500 text-sm">OR</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <p className="text-zinc-400">
              New here?{" "}
              <a 
                href="/register" 
                className="text-white font-semibold hover:underline transition"
              >
                Join as a Drop Shipper
              </a>
            </p>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="flex justify-center gap-8 mt-10 text-xs text-zinc-500">
          <div className="flex items-center gap-1.5">
            🔒 Secure Login
          </div>
          <div>SSL Encrypted</div>
          <div>Protected by Cloudflare</div>
        </div>

        <p className="text-center text-zinc-500 text-xs mt-8">
          Having trouble? <span className="text-zinc-400 hover:text-white cursor-pointer">Contact Support</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;