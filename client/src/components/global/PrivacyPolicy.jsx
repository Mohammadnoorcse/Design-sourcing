import { Shield, Lock, Users, Award, Eye, ArrowLeft, CheckCircle } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
    

      <div className="max-w-5xl mx-auto px-6 pt-16 pb-24">
        <div className="max-w-3xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 px-6 py-3 rounded-3xl text-sm font-semibold mb-6 shadow-sm">
              <Shield size={22} /> TRUST & TRANSPARENCY
            </div>
            
            <h1 className="text-6xl font-bold text-gray-900 tracking-tighter leading-none">
              Reseller Privacy Policy
            </h1>
            <p className="text-gray-500 mt-6 text-xl">
              Last updated: April 01, 2026
            </p>
          </div>

          {/* Trust Bar */}
          <div className="flex justify-center gap-8 mb-16 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-emerald-500" size={20} /> Bank-Level Security
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-emerald-500" size={20} /> No Data Selling
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-emerald-500" size={20} /> Full Transparency
            </div>
          </div>

          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="text-2xl text-gray-700 leading-relaxed mb-16">
              At DropShip BD, we deeply respect your privacy as a Reseller. 
              This policy explains how we collect, protect, and use your information while you grow your business with us.
            </p>

            {/* Section 1 */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-3xl p-10 mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-violet-100 rounded-2xl flex items-center justify-center">
                  <Users size={28} className="text-violet-600" />
                </div>
                <h2 className="text-3xl font-semibold text-gray-900">1. Information We Collect</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
                <div className="space-y-4">
                  <p><strong>Personal:</strong> Name, email, phone, NID</p>
                  <p><strong>Business:</strong> Store name, website, address</p>
                </div>
                <div className="space-y-4">
                  <p><strong>Financial:</strong> Payment history & commission records</p>
                  <p><strong>Activity:</strong> Orders, login history, customer interactions</p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 flex items-center gap-4">
              <Award className="text-amber-500" size={32} />
              2. How We Use Your Information
            </h2>
            <div className="space-y-6 mb-16">
              {[
                "Create and manage your reseller account",
                "Track and pay your commissions accurately",
                "Send important business updates and product alerts",
                "Improve our platform based on your usage",
                "Provide customer support when needed"
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-semibold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 text-[17px]">{item}</p>
                </div>
              ))}
            </div>

            {/* Security Highlight */}
            <div className="bg-gray-900 text-white rounded-3xl p-12 mb-16 relative overflow-hidden">
              <div className="absolute top-8 right-8 opacity-10">
                <Lock size={120} />
              </div>
              <h2 className="text-3xl font-semibold mb-6">3. We Take Security Seriously</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Your data and earnings are protected with enterprise-grade security. 
                We use SSL encryption, secure servers in Bangladesh, and regular audits.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-5 py-2 bg-white/10 rounded-2xl text-sm">SSL Encryption</span>
                <span className="px-5 py-2 bg-white/10 rounded-2xl text-sm">2FA Available</span>
                <span className="px-5 py-2 bg-white/10 rounded-2xl text-sm">Data Encrypted</span>
              </div>
            </div>

            {/* Information Sharing */}
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">4. Information Sharing</h2>
            <p className="mb-8">We <strong>never sell</strong> your personal data. We only share when absolutely necessary:</p>
            
            <div className="bg-gray-50 rounded-3xl p-10 space-y-6">
              <div className="flex gap-6">
                <div className="text-violet-600">→</div>
                <div>Payment gateways (bKash, Nagad, Rocket, Banks)</div>
              </div>
              <div className="flex gap-6">
                <div className="text-violet-600">→</div>
                <div>Courier partners for order fulfillment</div>
              </div>
              <div className="flex gap-6">
                <div className="text-violet-600">→</div>
                <div>Legal authorities only when required by Bangladeshi law</div>
              </div>
            </div>

            <h2 className="text-3xl font-semibold text-gray-900 mt-16 mb-8">5. Your Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Access your personal data",
                "Correct inaccurate information",
                "Request data deletion",
                "Withdraw consent anytime",
                "Download your data",
                "Close your reseller account"
              ].map((right, i) => (
                <div key={i} className="flex items-center gap-4 bg-white border border-gray-100 hover:border-violet-200 p-6 rounded-2xl transition">
                  <CheckCircle className="text-emerald-500" size={24} />
                  <p className="font-medium text-gray-800">{right}</p>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-20 bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white rounded-3xl p-12 text-center">
              <h3 className="text-3xl font-semibold mb-4">Have Questions?</h3>
              <p className="text-violet-100 text-lg mb-8">Our team is ready to help you.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:privacy@dropshipbd.com" className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition">
                  privacy@dropshipbd.com
                </a>
                <a href="tel:+8801700123456" className="border border-white/50 px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition">
                  +880 1700-123456
                </a>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;