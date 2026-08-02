import React from 'react';

interface HeroProps {
  onDonateClick: () => void;
  onImpactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDonateClick, onImpactClick }) => {
  return (
    <section className="relative py-12 md:py-20 paper-grain border-b border-[#E8E2D5] overflow-hidden text-[#2c221e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          
          {/* Main Hero Story Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1b3b2b] tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#c25928]" />
              <span>Independent Stray Dog Relief • Jaipur & New Delhi</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1b3b2b] leading-[1.18] tracking-tight">
              A warm pot of rice for a dog who slept on cold concrete.
            </h1>

            <p className="text-base sm:text-lg text-[#4a3525] font-sans leading-relaxed max-w-2xl">
              Every afternoon at 3 PM, our kitchen team boils 80kg of rice, turmeric, and fresh eggs in large vats. By 6:30 PM, 18 local volunteers ride out across 12 street routes to feed stray dogs who have no one else.
            </p>

            {/* Natural Action Links */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                id="hero-btn-donate"
                onClick={onDonateClick}
                className="px-6 py-3 rounded-md bg-[#c25928] hover:bg-[#aa4a1e] text-white font-medium text-sm transition-colors shadow-xs cursor-pointer"
              >
                Sponsor Today's Meal (₹10)
              </button>

              <button
                id="hero-btn-impact"
                onClick={onImpactClick}
                className="text-sm font-semibold text-[#1b3b2b] hover:text-[#c25928] underline underline-offset-4 transition-colors cursor-pointer"
              >
                See our daily feeding routes →
              </button>
            </div>

            {/* Realistic Key Details */}
            <div className="pt-6 border-t border-[#E3D9C6] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#5a483c] font-sans">
              <div>
                <p className="font-serif font-bold text-base text-[#1b3b2b]">340+</p>
                <p className="text-[12px]">Street dogs fed daily</p>
              </div>
              <div>
                <p className="font-serif font-bold text-base text-[#1b3b2b]">12 Routes</p>
                <p className="text-[12px]">Across Jaipur & Delhi</p>
              </div>
              <div>
                <p className="font-serif font-bold text-base text-[#1b3b2b]">80G Tax Receipt</p>
                <p className="text-[12px]">Issued automatically</p>
              </div>
            </div>

          </div>

          {/* Documentary Style Asymmetrical Photo Collage */}
          <div className="lg:col-span-5 relative">
            
            {/* Primary Documentary Image with handwritten caption */}
            <div className="bg-white p-3 border border-[#E3D9C6] shadow-md rounded-xs rotate-[-1deg] transition-transform hover:rotate-0 duration-300">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E8E2D5]">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80"
                  alt="Stray dogs eating fresh rice broth"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-handwriting text-stone-700 text-lg mt-2 text-center">
                “Kalu & Bruno waiting at Sanganer Gate, Jaipur — 6:40 PM”
              </p>
            </div>

            {/* Secondary Inset Photo overlapping */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-40 bg-white p-2 border border-[#E3D9C6] shadow-lg rounded-xs rotate-[3deg]">
              <div className="aspect-square overflow-hidden bg-[#E8E2D5]">
                <img
                  src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80"
                  alt="Volunteer feeding pup"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-handwriting text-stone-600 text-sm mt-1 text-center">
                Pups on Route 4
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
