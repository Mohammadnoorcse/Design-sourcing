import { Users, Award, Heart, ArrowRight, MapPin, Clock, Zap, Star, ChevronRight } from "lucide-react";

const CareersPage = () => {
  const positions = [
    {
      title: "Senior Marketing Executive",
      department: "Growth & Marketing",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      salary: "৳45,000 – ৳75,000",
      experience: "3+ years",
    },
    {
      title: "E-commerce Operations Manager",
      department: "Operations",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      salary: "৳65,000 – ৳95,000",
      experience: "4+ years",
    },
    {
      title: "Customer Success Specialist",
      department: "Support",
      location: "Dhaka (Hybrid)",
      type: "Full-time",
      salary: "৳30,000 – ৳45,000",
      experience: "1+ years",
    },
    {
      title: "Brand & Graphic Designer",
      department: "Creative",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      salary: "৳40,000 – ৳60,000",
      experience: "2+ years",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-hidden">
   

      {/* Hero Section - More Dramatic */}
      <div className="relative bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#7c3aed30_0%,transparent_60%)]" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-3 rounded-3xl mb-8">
            <Star className="text-yellow-400" size={26} />
            <span className="uppercase tracking-[3px] text-sm font-semibold">Join the Movement</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
            Build Tomorrow's<br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              E-commerce Empire
            </span>
          </h1>

          <p className="text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            We're looking for passionate people who want to revolutionize drop shipping in Bangladesh.
          </p>

          <a 
            href="#open-positions"
            className="mt-12 inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-3xl font-semibold text-xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-violet-500/30"
          >
            Explore Open Roles
            <ArrowRight size={28} />
          </a>
        </div>
      </div>

      {/* Why Join Us - Elevated */}
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 tracking-tight">Why Talented People Choose Us</h2>
          <p className="text-gray-600 mt-4 text-xl">More than just a job — a mission to empower Bangladeshi entrepreneurs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Award size={52} className="text-violet-600" />,
              title: "Competitive Compensation",
              desc: "Best-in-class salary + performance bonuses + festival allowances"
            },
            {
              icon: <Heart size={52} className="text-rose-500" />,
              title: "Passionate Culture",
              desc: "Young, energetic team that actually cares about your growth"
            },
            {
              icon: <Clock size={52} className="text-emerald-600" />,
              title: "Work-Life Balance",
              desc: "Hybrid work, flexible hours & generous paid time off"
            },
          ].map((item, i) => (
            <div key={i} className="group bg-white border border-gray-100 hover:border-violet-200 rounded-3xl p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-8 transition-transform group-hover:scale-110 duration-500">{item.icon}</div>
              <h3 className="text-3xl font-semibold mb-4 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div id="open-positions" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 tracking-tight">Open Positions</h2>
              <p className="text-gray-600 mt-3 text-xl">Be part of something big</p>
            </div>
            <a href="mailto:careers@dropshipbd.com" className="text-violet-600 font-medium flex items-center gap-2 hover:gap-3 transition-all mt-6 md:mt-0">
              Send your CV <ChevronRight />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {positions.map((job, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl border border-transparent hover:border-violet-300 p-10 flex flex-col md:flex-row md:items-center gap-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-violet-600 font-semibold">{job.department}</span>
                    <div className="h-px flex-1 bg-gray-200"></div>
                  </div>
                  <h3 className="text-3xl font-semibold text-gray-900 group-hover:text-violet-700 transition mt-3">{job.title}</h3>
                </div>

                <div className="flex flex-wrap md:flex-nowrap gap-8 text-gray-600">
                  <div>
                    <p className="text-xs uppercase tracking-widest">Location</p>
                    <p className="font-medium flex items-center gap-2"><MapPin size={18} />{job.location}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest">Salary</p>
                    <p className="font-medium">{job.salary}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest">Experience</p>
                    <p className="font-medium">{job.experience}</p>
                  </div>
                </div>

                <button className="md:ml-auto bg-black text-white px-10 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:bg-violet-600 hover:scale-105 transition-all">
                  Apply Now 
                  <ArrowRight size={22} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-600 text-white py-28">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-6xl font-bold tracking-tighter leading-none mb-8">
            Ready to Shape the Future<br />of Drop Shipping?
          </h2>
          <p className="text-2xl text-violet-100 mb-12">Send us your resume. Let's build something extraordinary together.</p>
          
          <a 
            href="mailto:careers@dropshipbd.com"
            className="inline-flex items-center gap-4 bg-white text-black px-16 py-7 rounded-3xl text-2xl font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            careers@dropshipbd.com
          </a>
        </div>
      </div>

     
    </div>
  );
};

export default CareersPage;