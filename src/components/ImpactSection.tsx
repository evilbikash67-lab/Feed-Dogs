import React from 'react';

export const ImpactSection: React.FC<{ onDonateNowClick: () => void }> = ({ onDonateNowClick }) => {
  const drives = [
    {
      title: '3:00 PM — Prep Kitchen in Okhla',
      desc: 'Our cooks soak 80kg of rice and prepare chicken broth in giant stainless steel vats.',
      imgUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80',
      caption: 'Fresh rice & broth prep in giant 50kg steel vats',
      aspect: 'aspect-[4/3]',
      rotate: 'rotate-[-1deg]',
      rounded: 'rounded-xs'
    },
    {
      title: '6:30 PM — Sanganer Market Route',
      desc: 'Volunteers pack food into insulated steel containers and load onto three electric 3-wheelers.',
      imgUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=80',
      caption: 'Babulal & Amit serving meals at Route 4, Jaipur',
      aspect: 'aspect-[3/2]',
      rotate: 'rotate-[1deg]',
      rounded: 'rounded-md'
    },
    {
      title: '7:15 PM — Street Feeding & Water Bowls',
      desc: 'Dogs recognize the van horn from two streets away and gather peacefully at fixed points.',
      imgUrl: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=80',
      caption: 'Pups enjoying their evening broth bowl in Koramangala',
      aspect: 'aspect-square',
      rotate: 'rotate-[-2deg]',
      rounded: 'rounded-xs'
    },
    {
      title: '8:00 PM — First Aid & Antiseptic Care',
      desc: 'Volunteers inspect dogs for maggot wounds or limps and apply antiseptic spray on site.',
      imgUrl: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=600&q=80',
      caption: 'Checking Bruno for leg injury before feeding',
      aspect: 'aspect-[4/3]',
      rotate: 'rotate-[1deg]',
      rounded: 'rounded-lg'
    }
  ];

  return (
    <section id="impact-section" className="py-16 paper-grain border-b border-[#E8E2D5] text-[#2c221e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Editorial Header */}
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1b3b2b]">Daily Operations & Drives</span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1b3b2b]">
            Inside our evening feeding drives
          </h2>
          <p className="text-sm text-[#5a483c] leading-relaxed">
            We don't just dump dry kibble on dusty roads. Every evening, our volunteers serve freshly cooked, warm rice broth in clean stainless steel bowls and refill water pots along 12 routes.
          </p>
        </div>

        {/* Candid Event Photos with Irregular Layout & Handwritten Captions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {drives.map((d, idx) => (
            <div
              key={idx}
              className={`bg-white p-3 border border-[#E3D9C6] shadow-xs ${d.rotate} transition-transform hover:rotate-0 duration-300 flex flex-col justify-between`}
            >
              <div className="space-y-3">
                <div className={`${d.aspect} ${d.rounded} overflow-hidden bg-[#E8E2D5] border border-[#E3D9C6]`}>
                  <img
                    src={d.imgUrl}
                    alt={d.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm text-[#1b3b2b]">{d.title}</h3>
                  <p className="text-xs text-[#5a483c] mt-1 leading-normal">{d.desc}</p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-[#F3EFE6]">
                <p className="font-handwriting text-stone-600 text-base leading-tight">
                  “{d.caption}”
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cost Breakdown & Financial Transparency (Clean Editorial Table Style) */}
        <div className="bg-white border border-[#E3D9C6] p-6 sm:p-8 rounded-xs space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#E8E2D5] pb-4">
            <div>
              <h3 className="font-serif font-bold text-xl text-[#1b3b2b]">Where every ₹10 goes</h3>
              <p className="text-xs text-[#5a483c]">Exact cost accounting for a single meal bowl served on the street.</p>
            </div>
            <button
              onClick={onDonateNowClick}
              className="px-5 py-2 bg-[#c25928] hover:bg-[#aa4a1e] text-white font-medium text-xs transition-colors cursor-pointer shrink-0"
            >
              Sponsor 1 Meal (₹10)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#2c221e]">
            <div className="p-4 bg-[#FAF8F4] border border-[#E8E2D5] space-y-1.5">
              <div className="flex justify-between font-serif font-bold text-sm text-[#1b3b2b]">
                <span>₹7.00 (70%)</span>
                <span>Ingredients</span>
              </div>
              <p className="text-[#5a483c]">
                Bulk rice (50kg bags), fresh eggs, turmeric, chicken bones for broth, and canine calcium supplements.
              </p>
            </div>

            <div className="p-4 bg-[#FAF8F4] border border-[#E8E2D5] space-y-1.5">
              <div className="flex justify-between font-serif font-bold text-sm text-[#1b3b2b]">
                <span>₹2.00 (20%)</span>
                <span>Route Fuel & Equipment</span>
              </div>
              <p className="text-[#5a483c]">
                Electric auto-rickshaw charging, stainless steel bowls, and large insulated cooking vats.
              </p>
            </div>

            <div className="p-4 bg-[#FAF8F4] border border-[#E8E2D5] space-y-1.5">
              <div className="flex justify-between font-serif font-bold text-sm text-[#1b3b2b]">
                <span>₹1.00 (10%)</span>
                <span>Street First Aid</span>
              </div>
              <p className="text-[#5a483c]">
                Antiseptic maggot spray, bandage gauze, deworming pills, and annual rabies vaccination drives.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
