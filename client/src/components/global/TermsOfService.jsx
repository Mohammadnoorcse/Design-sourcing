import { FileText, Award, Shield, AlertTriangle, Clock, Users, ArrowLeft, CheckCircle, Star } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
   

      <div className="max-w-5xl mx-auto px-6 pt-20 pb-28">
        <div className="max-w-3xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-3 rounded-3xl text-sm font-semibold mb-6 shadow-lg shadow-violet-500/20">
              <Shield size={24} /> OFFICIAL AGREEMENT
            </div>
            
            <h1 className="text-7xl font-bold text-gray-900 tracking-tighter leading-none">
              Terms of Service
            </h1>
            <p className="mt-6 text-2xl text-gray-600">Reseller Program</p>
            <p className="text-gray-400 mt-3">Last updated: April 01, 2026</p>
          </div>

          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="text-2xl leading-relaxed text-gray-700 mb-20 text-center">
              Welcome to the DropShip BD Reseller Program. By joining, you agree to the terms below.
            </p>

            {/* Section Cards */}
            <div className="space-y-16">
              {/* 1. Program Overview */}
              <div className="bg-gradient-to-br from-white to-violet-50 border border-violet-100 rounded-3xl p-12">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center">
                    <Star className="text-violet-600" size={32} />
                  </div>
                  <h2 className="text-4xl font-semibold text-gray-900">1. The Reseller Program</h2>
                </div>
                <p className="text-lg text-gray-700">
                  DropShip BD empowers resellers to sell high-quality products across Bangladesh with zero inventory. 
                  You focus on marketing and sales — we handle everything else.
                </p>
              </div>

              {/* 2. Registration */}
              <div>
                <h2 className="text-4xl font-semibold text-gray-900 mb-8 flex items-center gap-4">
                  <Users className="text-violet-600" size={36} />
                  2. Account Registration
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Must be 18 years or older",
                    "Accurate personal & business details",
                    "One account per individual/company",
                    "Strong password required"
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-100 hover:border-violet-200 p-8 rounded-3xl transition-all">
                      <CheckCircle className="text-emerald-500 mb-4" size={28} />
                      <p className="font-medium text-gray-800">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Commissions */}
              <div className="bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-3xl p-12">
                <div className="flex items-center gap-5 mb-8">
                  <Award className="text-amber-600" size={36} />
                  <h2 className="text-4xl font-semibold text-gray-900">3. Commissions & Payments</h2>
                </div>
                <div className="space-y-6 text-lg">
                  <p><strong>Commission Rate:</strong> 15% – 25% per sale</p>
                  <p><strong>Payout Cycle:</strong> Twice monthly (15th & 30th)</p>
                  <p><strong>Minimum Withdrawal:</strong> ৳3,000</p>
                  <p><strong>Payment Methods:</strong> bKash, Nagad, Bank Transfer</p>
                </div>
              </div>

              {/* Prohibited Activities - Warning Box */}
              <div className="bg-red-50 border border-red-200 rounded-3xl p-12 relative overflow-hidden">
                <div className="absolute -right-6 -top-6 text-red-100">
                  <AlertTriangle size={180} />
                </div>
                <div className="flex items-center gap-5 mb-8">
                  <AlertTriangle className="text-red-600" size={36} />
                  <h2 className="text-4xl font-semibold text-red-900">4. Prohibited Activities</h2>
                </div>
                <ul className="space-y-5 text-red-800 text-lg">
                  <li className="flex gap-4">❌ Spamming or misleading advertising</li>
                  <li className="flex gap-4">❌ Fake reviews or price manipulation</li>
                  <li className="flex gap-4">❌ Unauthorized use of DropShip BD branding</li>
                  <li className="flex gap-4">❌ Multi-level marketing or pyramid schemes</li>
                  <li className="flex gap-4">❌ Selling prohibited or counterfeit products</li>
                </ul>
              </div>

              {/* 5. Order Fulfillment */}
              <div>
                <h2 className="text-4xl font-semibold text-gray-900 mb-8">5. Order Fulfillment</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We guarantee product quality and timely delivery (3–7 working days). 
                  Resellers are responsible for accurate customer communication and after-sales support.
                </p>
              </div>

              {/* 6. Termination */}
              <div className="border-l-4 border-gray-900 pl-8 py-2">
                <h2 className="text-3xl font-semibold text-gray-900">6. Account Termination</h2>
                <p className="mt-4 text-lg">
                  We reserve the right to suspend or terminate accounts for violation of these terms without prior notice.
                </p>
              </div>
            </div>

            {/* Final Agreement */}
            <div className="mt-24 bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-14 text-center">
              <h3 className="text-3xl font-semibold mb-6">Ready to Grow Your Business?</h3>
              <p className="text-gray-400 text-lg max-w-md mx-auto">
                By clicking "Complete Registration", you confirm that you have read and agree to these Terms of Service.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/register" className="bg-white text-black px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition">
                  Accept & Continue
                </a>
                <a href="/privacy-policy" className="border border-white/30 px-10 py-4 rounded-2xl font-semibold hover:bg-white/10 transition">
                  View Privacy Policy
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;