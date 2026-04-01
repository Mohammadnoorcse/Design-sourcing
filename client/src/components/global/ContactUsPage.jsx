import { Mail, Phone, MapPin, Clock, Send, ArrowRight, Star, MessageCircle, Heart } from "lucide-react";
import { useState } from "react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Thank you! Your message has been sent. We'll reply within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
    

      {/* Hero Section - Ultra Luxurious */}
      <div className="relative bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white pt-36 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_top,#7c3aed30_0%,transparent_60%)]" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-3xl border border-white/20 px-10 py-4 rounded-full mb-10">
            <Heart className="text-pink-400" size={32} />
            <span className="uppercase tracking-[4px] text-sm font-semibold">Personal Support</span>
          </div>

          <h1 className="text-7xl md:text-[5.5rem] font-bold tracking-tighter leading-none mb-8">
            Talk to the Team<br />Behind Your Success
          </h1>
          <p className="text-2xl text-zinc-400 max-w-3xl mx-auto">
            Real humans. Real help. Whether you're a new reseller or a long-time partner — we're always ready to support you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 -mt-12 relative z-20 pb-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-2xl p-14 border border-gray-100">
              <div className="mb-10">
                <h2 className="text-4xl font-bold tracking-tight">Send Us a Message</h2>
                <p className="text-gray-600 mt-3">Average response time: 4-12 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-9">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-8 py-5 bg-gray-50 border border-gray-200 focus:border-violet-400 rounded-2xl outline-none transition text-lg"
                      placeholder="Ahmed Khan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-8 py-5 bg-gray-50 border border-gray-200 focus:border-violet-400 rounded-2xl outline-none transition text-lg"
                      placeholder="hello@yourbusiness.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-8 py-5 bg-gray-50 border border-gray-200 focus:border-violet-400 rounded-2xl outline-none transition text-lg"
                    placeholder="Reseller Support • Partnership • Technical Help"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">How Can We Help?</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="w-full px-8 py-6 bg-gray-50 border border-gray-200 focus:border-violet-400 rounded-3xl outline-none transition resize-none text-lg"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-7 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-3xl font-semibold text-2xl flex items-center justify-center gap-4 hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-2xl shadow-violet-500/40"
                >
                  Send Message
                  <Send size={28} />
                </button>
              </form>
            </div>
          </div>

          {/* Right Sidebar - Contact Info */}
          <div className="lg:col-span-5 space-y-8 pt-6">
            {/* Direct Contact Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-12">
              <h3 className="text-3xl font-semibold mb-10">Direct Contact</h3>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail size={32} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">General & Support</p>
                    <a href="mailto:support@dropshipbd.com" className="text-2xl hover:text-violet-400 transition">support@dropshipbd.com</a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone size={32} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Call / WhatsApp</p>
                    <a href="tel:+8801700123456" className="text-2xl hover:text-violet-400 transition">+880 1700-123456</a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Office</p>
                    <p className="text-xl leading-tight">House 45, Road 12, Block F<br />Gulshan-2, Dhaka 1212</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours + WhatsApp */}
            <div className="bg-white border border-gray-100 rounded-3xl p-10">
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-2xl font-semibold">Office Hours</h4>
                <Clock className="text-emerald-600" size={32} />
              </div>
              <div className="space-y-5 text-lg">
                <div className="flex justify-between">
                  <span>Sat - Thu</span>
                  <span className="font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Friday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>

              <a 
                href="https://wa.me/8801700123456" 
                target="_blank"
                className="mt-10 w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-5 rounded-2xl font-semibold transition"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Office Location Visual */}
      <div className="max-w-7xl mx-auto px-8 pb-24">
        <div className="rounded-3xl overflow-hidden shadow-2xl h-[520px] relative">
          <img 
            src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2069" 
            alt="DropShip BD Office" 
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-12 left-12 text-white">
            <p className="uppercase text-xs tracking-widest mb-2">Headquarters</p>
            <p className="text-4xl font-semibold">Gulshan-2, Dhaka</p>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default ContactUsPage;