import { RefreshCw, Shield, Clock, Truck, AlertTriangle, CheckCircle, ArrowLeft } from "lucide-react";

const ReturnsExchangesPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
    

      {/* Hero */}
      <div className="bg-gradient-to-br from-zinc-950 to-black text-white pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-8 py-3 rounded-3xl mb-8">
            <RefreshCw className="text-emerald-400" size={32} />
            <span className="uppercase tracking-widest text-sm font-semibold">RETURNS & EXCHANGES</span>
          </div>
          <h1 className="text-7xl font-bold tracking-tighter leading-none mb-6">
            Simple. Fair.<br />Customer First.
          </h1>
          <p className="text-2xl text-zinc-400 max-w-2xl mx-auto">
            We stand behind every product we deliver. Hassle-free returns & exchanges for our resellers and their customers.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Policy Summary */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-10 mb-16 text-center">
          <h2 className="text-3xl font-semibold text-emerald-800 mb-4">14-Day Easy Return Policy</h2>
          <p className="text-emerald-700 text-lg">
            You can return or exchange any product within <strong>14 days</strong> of delivery if it meets our policy conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <div className="mx-auto w-20 h-20 bg-violet-100 rounded-3xl flex items-center justify-center mb-6">
              <Clock className="text-violet-600" size={42} />
            </div>
            <h3 className="font-semibold text-xl">14 Days</h3>
            <p className="text-gray-600 mt-2">From delivery date</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-20 h-20 bg-violet-100 rounded-3xl flex items-center justify-center mb-6">
              <Truck className="text-violet-600" size={42} />
            </div>
            <h3 className="font-semibold text-xl">Free Pickup</h3>
            <p className="text-gray-600 mt-2">Inside Dhaka Metro Area</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-20 h-20 bg-violet-100 rounded-3xl flex items-center justify-center mb-6">
              <Shield className="text-violet-600" size={42} />
            </div>
            <h3 className="font-semibold text-xl">100% Refund</h3>
            <p className="text-gray-600 mt-2">If product is unused & undamaged</p>
          </div>
        </div>

        {/* Detailed Policy */}
        <div className="space-y-16">
          <div>
            <h2 className="text-4xl font-semibold mb-8 flex items-center gap-4">
              <CheckCircle className="text-emerald-600" size={36} />
              Eligible for Return / Exchange
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Product is defective or damaged on arrival",
                "Wrong item or size delivered",
                "Product doesn't match description",
                "Changed your mind (unused condition)"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-gray-50 p-6 rounded-2xl">
                  <CheckCircle className="text-emerald-500 mt-1" size={24} />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-semibold mb-8 flex items-center gap-4 text-red-700">
              <AlertTriangle className="text-red-600" size={36} />
              Not Eligible for Return
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Used or worn products",
                "Products without original packaging & tags",
                "Personalized or custom-made items",
                "Expired or perishable goods",
                "Products damaged by customer"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-red-50 p-6 rounded-2xl">
                  <AlertTriangle className="text-red-500 mt-1" size={24} />
                  <p className="text-red-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Return Process */}
          <div className="bg-gray-900 text-white rounded-3xl p-12">
            <h2 className="text-4xl font-semibold mb-10 text-center">How to Return or Exchange</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Submit Request", desc: "Contact support within 14 days" },
                { step: "02", title: "Get Approval", desc: "We'll review and approve your request" },
                { step: "03", title: "Schedule Pickup", desc: "Free pickup from your address" },
                { step: "04", title: "Refund / Exchange", desc: "Processed within 3-5 business days" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center text-3xl font-bold mb-6">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-xl mb-3">{item.title}</h4>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-20 bg-amber-50 border border-amber-200 rounded-3xl p-10">
          <h3 className="font-semibold text-2xl mb-6 flex items-center gap-3">
            <AlertTriangle className="text-amber-600" /> Important Notes
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li>• Return shipping is free only inside Dhaka. Outside Dhaka, customer bears the cost.</li>
            <li>• Refund will be issued to the original payment method within 5-7 business days.</li>
            <li>• For exchanges, new product will be shipped after we receive the returned item.</li>
            <li>• All returned products must be in sellable condition with original packaging.</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white rounded-3xl p-16">
          <h3 className="text-4xl font-semibold mb-6">Need Help with a Return?</h3>
          <p className="text-xl text-violet-100 mb-8">Our support team is ready to assist you.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contact" className="bg-white text-black px-12 py-6 rounded-3xl font-semibold text-xl hover:bg-gray-100 transition">
              Contact Support
            </a>
            <a href="https://wa.me/8801700123456" target="_blank" className="border border-white/40 px-12 py-6 rounded-3xl font-semibold text-xl hover:bg-white/10 transition">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ReturnsExchangesPage;