// components/LuxuryHero.tsx
export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-100 via-amber-50 to-stone-50">
      {/* Background Image – luxurious boutique interior */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 z-10" />

        {/* Best matching high-end boutique image – elegant showroom with mannequins, chandeliers, gold accents */}
        <img
          src="https://www.weddlegilmore.com/content/work/ralph-lauren-boulevard-st-germain/luxurious-boutique-mannequins.jpg"
          alt="Luxurious fashion boutique interior with elegant mannequins, crystal chandelier, gold detailing and spacious showroom"
          className="w-full h-full object-cover object-center brightness-[0.85] contrast-[1.05] scale-105"
          loading="eager"
        />
      </div>

      {/* Content Overlay – centered, elegant typography */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 text-center text-white drop-shadow-2xl">
       

        {/* Subtext – builds desire & trust */}
        <p className="text-xl sm:text-2xl md:text-3xl font-light max-w-4xl mx-auto leading-relaxed mb-10 md:mb-14 opacity-90">
          Experience luxurious comfort without compromising on style.  
          Our fashion pieces are designed for both quality and elegance —  
          look and feel your best.
        </p>

        {/* Primary CTA – bold pink/red like the example, with hover lift */}
        <a
          href="#shop"
          className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-7 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-xl sm:text-2xl uppercase tracking-wider shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300"
        >
          SHOP NOW
        </a>

        {/* Optional subtle trust line */}
        <p className="mt-12 md:mt-16 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto font-light">
          Premium quality • Timeless designs • Made for the modern woman
        </p>
      </div>
    </section>
  );
}