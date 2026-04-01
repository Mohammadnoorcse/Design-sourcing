import React from 'react';

export default function MarketPlace() {
  return (
    <section className="relative bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              More Than a Marketplace.<br className="hidden sm:block" /> A Buying Advantage.
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 font-medium">
              FASHIONNGO has partnered with retailers for over 20+ years to connect buyers with exclusive vendors, trend driven insights,
            </p>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              data backed best sellers, and the know-hows behind smart purchasing decisions
            </p>

            {/* Feature Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              <button className="group flex items-center gap-2 px-6 py-3.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-md">
              
                Style Match
              </button>

              <button className="group flex items-center gap-2 px-6 py-3.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-md">
                
                FG Free Shipping
              </button>

              <button className="group flex items-center gap-2 px-6 py-3.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-md">
                FG Live
              </button>
            </div>
          </div>

          {/* Right: Mobile Mockups */}
          <div className="relative flex justify-center lg:justify-end gap-6 md:gap-10">
            {/* First phone - Style Match */}
            <div className="relative w-64 sm:w-72 md:w-80 transform rotate-[-6deg] z-10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl blur-xl opacity-40" />
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop" 
                alt="Style Match App Demo"
                className="relative rounded-3xl border-8 border-gray-900 object-cover w-full h-auto shadow-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 text-white text-xs sm:text-sm p-3 rounded-xl backdrop-blur-sm">
                <p className="font-semibold">Style Match</p>
                <p className="text-xs opacity-90">Pictures speak a thousand words.</p>
              </div>
            </div>

            {/* Second phone - Shopping Bag / Free Shipping */}
            <div className="relative w-64 sm:w-72 md:w-80 transform rotate-[8deg] z-0 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl blur-xl opacity-40" />
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop"
                alt="Shopping Bag with Free Shipping"
                className="relative rounded-3xl border-8 border-gray-900 object-cover w-full h-auto shadow-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 text-white text-xs sm:text-sm p-3 rounded-xl backdrop-blur-sm">
                <p className="font-semibold">FG Free Shipping Applied</p>
                <p className="text-xs opacity-90">✓ Free Shipping • Saved For Later</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-rose-100 to-transparent opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-100 to-transparent opacity-30 blur-3xl" />
      </div>
    </section>
  );
}