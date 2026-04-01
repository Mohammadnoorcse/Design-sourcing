import { useState } from "react";
import { Search, HelpCircle, Truck, CreditCard, User, Award, MessageCircle, ArrowRight, ChevronDown } from "lucide-react";

const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const categories = [
    { icon: <Truck size={32} />, title: "Orders & Shipping", count: "28 Articles" },
    { icon: <CreditCard size={32} />, title: "Payments & Refunds", count: "18 Articles" },
    { icon: <User size={32} />, title: "Account & Profile", count: "15 Articles" },
    { icon: <Award size={32} />, title: "Reseller Commission", count: "22 Articles" },
  ];

  const faqs = [
    {
      q: "How long does delivery take?",
      a: "Standard delivery takes 3-7 business days within Bangladesh. Dhaka Metro usually gets faster delivery (1-4 days)."
    },
    {
      q: "How do I become a reseller?",
      a: "Simply register on our platform, pay the one-time ৳3000 registration fee, and your account will be activated within 48 hours."
    },
    {
      q: "When do I get my commission paid?",
      a: "Commissions are paid twice every month — on the 15th and the last day of the month via bKash or Bank Transfer."
    },
    {
      q: "Can I return a product?",
      a: "Yes. You have 14 days from delivery to request a return or exchange if the product is unused and in original condition."
    },
    {
      q: "How do I track my order?",
      a: "Go to Track Order page and enter your Order ID (DSB-XXXXXX). You can also track directly from your dashboard."
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
     

      {/* Hero */}
      <div className="bg-gradient-to-br from-zinc-950 to-black text-white py-28">
        <div className="max-w-4xl mx-auto text-center px-6">
          <HelpCircle className="mx-auto text-violet-400 mb-6" size={64} />
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">How Can We Help You?</h1>
          <p className="text-xl text-zinc-400 mb-10">Search our help center or browse topics below</p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for orders, commissions, returns..."
              className="w-full px-8 py-7 text-lg bg-white/10 border border-white/20 rounded-3xl focus:border-violet-500 outline-none text-white placeholder-zinc-400"
            />
            <Search className="absolute right-8 top-1/2 -translate-y-1/2 text-zinc-400" size={28} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20">
        {/* Categories */}
        <h2 className="text-4xl font-semibold text-center mb-12">Popular Topics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white border border-gray-100 hover:border-violet-300 rounded-3xl p-10 transition-all hover:shadow-xl group">
              <div className="mb-6 text-violet-600 group-hover:scale-110 transition">{cat.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{cat.title}</h3>
              <p className="text-gray-500">{cat.count}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-3xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition"
                >
                  <span className="text-lg font-medium pr-8">{faq.q}</span>
                  <ChevronDown className={`transition ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-8 overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40 pb-8' : 'max-h-0'}`}>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still Need Help? */}
        <div className="mt-24 bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white rounded-3xl p-16 text-center">
          <MessageCircle className="mx-auto mb-6" size={56} />
          <h3 className="text-4xl font-semibold mb-4">Still Have Questions?</h3>
          <p className="text-xl text-violet-100 mb-10 max-w-md mx-auto">
            Our friendly support team is ready to help you personally.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contact"
              className="bg-white text-black px-12 py-6 rounded-3xl font-semibold text-lg hover:bg-gray-100 transition flex items-center justify-center gap-3"
            >
              Contact Support <ArrowRight />
            </a>
            <a 
              href="https://wa.me/8801700123456"
              target="_blank"
              className="border border-white/40 px-12 py-6 rounded-3xl font-semibold text-lg hover:bg-white/10 transition"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default HelpCenterPage;