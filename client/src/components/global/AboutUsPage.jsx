import { Users, Target, Award, Heart, ArrowRight, Star, Zap } from "lucide-react";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
     

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-zinc-950 to-black text-white pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_center,#7c3aed40_0%,transparent_70%)]" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-8 py-3 rounded-3xl mb-8 border border-white/20">
            <Star className="text-yellow-400" size={28} />
            <span className="uppercase tracking-[4px] text-sm font-semibold">Since 2024</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tighter leading-none mb-8">
            Empowering the Next<br />
            Generation of<br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Bangladeshi Entrepreneurs
            </span>
          </h1>

          <p className="text-2xl text-zinc-400 max-w-3xl mx-auto">
            We make drop shipping simple, profitable, and accessible for everyone in Bangladesh.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                DropShip BD was founded in 2024 with a simple mission: <span className="font-semibold text-gray-900">Make entrepreneurship accessible to every Bangladeshi.</span>
              </p>
              <p>
                Frustrated by the high barriers of traditional business — inventory, warehouses, and huge capital — we created a platform where anyone can start selling online with zero risk.
              </p>
              <p>
                Today, thousands of resellers across Bangladesh are earning from home, building their dreams, and creating financial freedom through our platform.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-violet-200 to-fuchsia-200 rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')] bg-cover bg-center" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-3xl shadow-2xl p-8 max-w-[260px]">
              <div className="flex items-center gap-4">
                <div className="text-5xl font-bold text-violet-600">5000+</div>
                <div className="text-gray-600 leading-tight">
                  Active<br />Resellers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl p-12 border border-gray-100">
              <Target className="text-violet-600 mb-6" size={52} />
              <h3 className="text-4xl font-semibold mb-6">Our Mission</h3>
              <p className="text-xl text-gray-700">
                To democratize e-commerce in Bangladesh by removing all barriers so that anyone with a smartphone and determination can build a successful online business.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-12 border border-gray-100">
              <Zap className="text-fuchsia-600 mb-6" size={52} />
              <h3 className="text-4xl font-semibold mb-6">Our Vision</h3>
              <p className="text-xl text-gray-700">
                To become the backbone of Bangladesh’s digital economy — creating thousands of jobs and empowering a new generation of young entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "8,450+", label: "Happy Resellers" },
            { number: "1.2 Cr+", label: "Monthly Sales" },
            { number: "98%", label: "Delivery Success" },
            { number: "42", label: "Cities Served" },
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-3xl py-12 hover:border-violet-200 transition-all">
              <div className="text-5xl font-bold text-gray-900">{stat.number}</div>
              <div className="text-gray-600 mt-3 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-8 py-20 bg-black text-white rounded-t-[4rem]">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">Our Core Values</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: <Heart size={42} />, title: "Transparency", desc: "Clear policies, no hidden fees" },
            { icon: <Award size={42} />, title: "Reliability", desc: "On-time delivery, every time" },
            { icon: <Users size={42} />, title: "Community", desc: "We grow when you grow" },
            { icon: <Star size={42} />, title: "Innovation", desc: "Constantly improving our platform" },
          ].map((value, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all">
              <div className="mb-6 text-violet-400">{value.icon}</div>
              <h4 className="text-2xl font-semibold mb-3">{value.title}</h4>
              <p className="text-gray-400">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 py-28 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-6xl font-bold tracking-tighter mb-6">
            Ready to be part of the movement?
          </h2>
          <p className="text-2xl text-violet-100 mb-12">
            Join thousands of successful resellers today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/register" className="bg-white text-black px-12 py-6 rounded-3xl font-semibold text-xl hover:bg-gray-100 transition flex items-center justify-center gap-3">
              Start Selling Today
              <ArrowRight size={28} />
            </a>
            <a href="/careers" className="border-2 border-white px-12 py-6 rounded-3xl font-semibold text-xl hover:bg-white/10 transition">
              Join Our Team
            </a>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default AboutUsPage;