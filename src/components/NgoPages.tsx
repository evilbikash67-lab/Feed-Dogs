import React, { useState } from 'react';

export const AboutView: React.FC<{ onDonateClick: () => void }> = ({ onDonateClick }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16 text-[#2c221e]">
      
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#1b3b2b]">Our Founder Story</span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1b3b2b] leading-tight">
          How two friends in Jaipur started carrying tiffins of warm rice every evening.
        </h1>
        <p className="text-base sm:text-lg text-[#5a483c] leading-relaxed">
          In November 2019, Amit Khandelwal and Divya Sharma began cooking extra rice and eggs in their home kitchen to feed 8 stray dogs outside a tea stall near Sanganer Gate.
        </p>
      </div>

      {/* Main Story Photo with handwritten caption */}
      <div className="bg-white p-4 border border-[#E3D9C6] shadow-xs rounded-xs space-y-3">
        <div className="aspect-[16/9] overflow-hidden bg-[#E8E2D5] border border-[#E3D9C6]">
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80"
            alt="Founders feeding street dogs in Jaipur"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="font-handwriting text-stone-700 text-lg text-center">
          “Our very first feeding route in Jaipur, winter 2019 — feeding Kalu, Sheru and Motu.”
        </p>
      </div>

      {/* Timeline of Growth */}
      <div className="space-y-6 pt-4">
        <h2 className="text-2xl font-serif font-bold text-[#1b3b2b]">Our Journey Timeline</h2>
        
        <div className="space-y-6 border-l-2 border-[#D2C8B6] pl-6 ml-2 text-xs sm:text-sm">
          
          <div className="relative space-y-1">
            <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#c25928]" />
            <span className="font-serif font-bold text-base text-[#1b3b2b]">November 2019 — The Tiffin Days</span>
            <p className="text-[#5a483c] leading-relaxed">
              Started feeding 8 stray dogs around Sanganer Road using two 5kg stainless steel tiffin carriers carried on a scooter.
            </p>
          </div>

          <div className="relative space-y-1">
            <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#1b3b2b]" />
            <span className="font-serif font-bold text-base text-[#1b3b2b]">April 2021 — Lockdown Relief Kitchen</span>
            <p className="text-[#5a483c] leading-relaxed">
              When tea stalls and restaurants shut during lockdown, street dogs faced acute starvation. We rented a small 200 sq.ft. room, set up two large 50kg vats, and scaled to 120 dogs daily.
            </p>
          </div>

          <div className="relative space-y-1">
            <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#1b3b2b]" />
            <span className="font-serif font-bold text-base text-[#1b3b2b]">October 2023 — Registered Welfare Trust</span>
            <p className="text-[#5a483c] leading-relaxed">
              Officially registered as <strong>Feed A Dog Welfare Trust (#DEL/NGO/2023)</strong> and secured Section 80G tax exemption status so every supporter gets official tax receipts.
            </p>
          </div>

          <div className="relative space-y-1">
            <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#c25928]" />
            <span className="font-serif font-bold text-base text-[#1b3b2b]">Today — 12 Feeding Routes & 340+ Dogs</span>
            <p className="text-[#5a483c] leading-relaxed">
              Supported by 18 active volunteers, 3 electric feeding vans, and hundreds of micro-donors who sponsor ₹10, ₹20, or ₹30 meals every month.
            </p>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#F5F0E6] border border-[#E3D9C6] p-8 text-center space-y-4 rounded-xs">
        <h3 className="text-2xl font-serif font-bold text-[#1b3b2b]">Join us in keeping our feeding vans running</h3>
        <p className="text-xs sm:text-sm text-[#5a483c] max-w-lg mx-auto">
          It takes just ₹10 to sponsor one warm meal bowl today. Every rupee goes directly to wholesale rice, eggs, and broth.
        </p>
        <button
          onClick={onDonateClick}
          className="px-6 py-2.5 bg-[#c25928] hover:bg-[#aa4a1e] text-white font-medium text-xs transition-colors cursor-pointer"
        >
          Sponsor ₹10 Meal
        </button>
      </div>

    </div>
  );
};

export const GalleryView: React.FC = () => {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80',
      caption: 'Kalu eating fresh egg-rice broth on Route 2',
      aspect: 'aspect-[4/3]',
      rotate: 'rotate-[-1deg]',
      rounded: 'rounded-xs'
    },
    {
      url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
      caption: 'The Sanganer pack gathering at 6:30 PM',
      aspect: 'aspect-square',
      rotate: 'rotate-[2deg]',
      rounded: 'rounded-md'
    },
    {
      url: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80',
      caption: 'Lucy enjoying clean drinking water in Koramangala',
      aspect: 'aspect-[3/2]',
      rotate: 'rotate-[-2deg]',
      rounded: 'rounded-xs'
    },
    {
      url: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80',
      caption: 'Three pups getting fed near Okhla Phase III',
      aspect: 'aspect-[4/3]',
      rotate: 'rotate-[1deg]',
      rounded: 'rounded-lg'
    },
    {
      url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
      caption: 'Checking wounds and applying antiseptic spray',
      aspect: 'aspect-square',
      rotate: 'rotate-[-1deg]',
      rounded: 'rounded-xs'
    },
    {
      url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80',
      caption: 'Bruno fully recovered after 6 months of daily care',
      aspect: 'aspect-[3/2]',
      rotate: 'rotate-[2deg]',
      rounded: 'rounded-md'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10 text-[#2c221e]">
      <div className="max-w-2xl space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#1b3b2b]">Candid Photos</span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1b3b2b]">
          Photos from our street feeding drives
        </h1>
        <p className="text-sm text-[#5a483c]">
          Unfiltered moments captured by our volunteers on daily feeding routes in Jaipur & Delhi.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((p, idx) => (
          <div key={idx} className={`bg-white p-3 border border-[#E3D9C6] shadow-xs ${p.rotate} transition-transform hover:rotate-0 duration-300`}>
            <div className={`${p.aspect} ${p.rounded} overflow-hidden bg-[#E8E2D5] border border-[#E3D9C6]`}>
              <img
                src={p.url}
                alt={p.caption}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-handwriting text-stone-700 text-base mt-2 text-center">
              “{p.caption}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Ananya Roy',
      city: 'Jaipur',
      role: 'Monthly Donor (₹100/mo)',
      quote: 'I visited their prep kitchen in Sanganer last month. Seeing 80kg of fresh rice and eggs being cooked in massive steel pots made me realize how authentic this team is.'
    },
    {
      name: 'Dr. Vikram Mehta',
      city: 'New Delhi',
      role: 'Consulting Vet',
      quote: 'They don’t just throw random food scraps. Their meal recipe with turmeric, rice, eggs and chicken broth provides crucial protein and immunity for street dogs.'
    },
    {
      name: 'Sneha Patel',
      city: 'Bengaluru',
      role: 'Donor',
      quote: 'I set up a ₹20 recurring donation. The 80G tax receipt was emailed instantly. Very clean and honest organization.'
    }
  ];

  return (
    <section className="py-12 bg-[#F5F0E6] border-b border-[#E3D9C6] text-[#2c221e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-2xl space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1b3b2b]">Supporter Notes</span>
          <h2 className="text-2xl font-serif font-bold text-[#1b3b2b]">Words from people who know our work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div key={idx} className="bg-white border border-[#E3D9C6] p-5 space-y-3 shadow-xs">
              <p className="text-xs text-[#5a483c] leading-relaxed italic">
                "{r.quote}"
              </p>
              <div className="pt-3 border-t border-[#F3EFE6]">
                <p className="font-serif font-bold text-xs text-[#1b3b2b]">{r.name}</p>
                <p className="text-[11px] text-[#5a483c]">{r.role} • {r.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is ₹10 really enough to feed a stray dog?',
      a: 'Yes! Because we buy 50kg wholesale sacks of rice and cook in bulk 50-liter steel vats, our cost comes to roughly ₹8.50 per bowl of cooked rice, eggs, and broth. The remaining ₹1.50 covers auto-rickshaw fuel for the route.'
    },
    {
      q: 'How do I get my Section 80G tax receipt?',
      a: 'As soon as your payment is completed via Razorpay, our system generates an official Section 80G tax deduction receipt and emails it directly to your inbox.'
    },
    {
      q: 'Can I join an evening feeding drive as a volunteer?',
      a: 'Yes, we welcome volunteers! If you live in Jaipur or Delhi, send us a WhatsApp or message, and you can ride along with our team any evening at 6:00 PM.'
    },
    {
      q: 'What ingredients go into the daily meals?',
      a: 'We prepare boiled white rice, eggs, chicken bone broth for protein, turmeric for anti-inflammatory immunity, and veterinary calcium supplements.'
    }
  ];

  return (
    <section className="py-12 bg-[#FAF8F4] border-b border-[#E8E2D5] text-[#2c221e]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1b3b2b]">Conversational FAQ</span>
          <h2 className="text-2xl font-serif font-bold text-[#1b3b2b]">Questions you might have</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-[#E3D9C6] bg-white">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-4 text-left font-serif font-bold text-sm text-[#1b3b2b] flex justify-between items-center cursor-pointer hover:bg-[#FAF8F4]"
              >
                <span>{faq.q}</span>
                <span className="text-xs font-sans text-[#c25928]">{openIdx === idx ? '−' : '+'}</span>
              </button>

              {openIdx === idx && (
                <div className="p-4 pt-0 text-xs sm:text-sm text-[#5a483c] leading-relaxed border-t border-[#F3EFE6]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ContactView: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Volunteer Inquiry', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-[#2c221e]">
      
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#1b3b2b]">Get In Touch</span>
        <h1 className="text-3xl font-serif font-bold text-[#1b3b2b]">Contact Feed A Dog Foundation</h1>
        <p className="text-sm text-[#5a483c]">
          Reach out if you want to join our feeding routes, inquire about Section 80G tax receipts, or report injured stray dogs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* NGO Address */}
        <div className="md:col-span-5 bg-white border border-[#E3D9C6] p-5 space-y-4 shadow-xs text-xs">
          <h3 className="font-serif font-bold text-base text-[#1b3b2b] border-b border-[#E3D9C6] pb-2">
            Registered NGO Office
          </h3>

          <div className="space-y-3 text-[#5a483c]">
            <div>
              <p className="font-bold text-[#1b3b2b]">Feed A Dog Welfare Trust</p>
              <p>Plot 14, Lane 3, Anand Nagar</p>
              <p>Sanganer Road, Jaipur, Rajasthan - 302015</p>
              <p className="text-[11px] text-stone-500 mt-1">Govt Reg #DEL/NGO/2023</p>
            </div>

            <div>
              <p className="font-bold text-[#1b3b2b]">Kitchen & Route Hubs</p>
              <p>• Jaipur: Sanganer Gate Prep Kitchen</p>
              <p>• New Delhi: Okhla Phase III Center</p>
            </div>

            <div>
              <p className="font-bold text-[#1b3b2b]">Direct Phone & Email</p>
              <p>Phone: +91 98290 12345</p>
              <p>Email: hello@feedadog.org</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7 bg-white border border-[#E3D9C6] p-6 shadow-xs text-xs space-y-4">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <p className="font-serif font-bold text-lg text-[#1b3b2b]">Thank you for writing to us!</p>
              <p className="text-xs text-[#5a483c]">Our volunteer coordinator will reply to your message within 24 hours.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 bg-[#c25928] text-white font-medium text-xs rounded-xs"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <h3 className="font-serif font-bold text-base text-[#1b3b2b]">Send us a message</h3>
              
              <div>
                <label className="block font-semibold text-[#4a3525] mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Priya Sharma"
                  className="w-full px-3 py-2 bg-[#FAF8F4] border border-[#E3D9C6] font-medium text-[#2c221e] focus:outline-none focus:border-[#c25928]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#4a3525] mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="priya@example.com"
                  className="w-full px-3 py-2 bg-[#FAF8F4] border border-[#E3D9C6] font-medium text-[#2c221e] focus:outline-none focus:border-[#c25928]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#4a3525] mb-1">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAF8F4] border border-[#E3D9C6] font-medium text-[#2c221e] focus:outline-none focus:border-[#c25928]"
                >
                  <option value="Volunteer Inquiry">Join Evening Feeding Route as Volunteer</option>
                  <option value="Tax Receipt Query">80G Tax Exemption Receipt Query</option>
                  <option value="Stray Report">Report Injured Stray Dog</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-[#4a3525] mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us how you would like to help..."
                  className="w-full px-3 py-2 bg-[#FAF8F4] border border-[#E3D9C6] font-medium text-[#2c221e] focus:outline-none focus:border-[#c25928]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#c25928] hover:bg-[#aa4a1e] text-white font-medium text-xs transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export const PrivacyPolicyView: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-6 text-[#2c221e] text-xs sm:text-sm">
      <div className="border-b border-[#E3D9C6] pb-4 space-y-1">
        <h1 className="font-serif font-bold text-2xl text-[#1b3b2b]">Privacy Policy</h1>
        <p className="text-xs text-[#5a483c]">Feed A Dog Welfare Trust (#DEL/NGO/2023)</p>
      </div>

      <div className="space-y-4 text-[#5a483c] leading-relaxed">
        <p>
          We respect the privacy of every donor. When you make a contribution to feed stray dogs, we collect basic details (Name, Email, Phone number) solely to issue Section 80G tax exemption receipts and send transaction updates.
        </p>
        <p>
          <strong>Payment Security:</strong> All card, UPI, and net banking transactions are processed through Razorpay using 256-bit SSL encryption. We do not store sensitive payment credentials on our servers.
        </p>
        <p>
          <strong>Data Privacy Guarantee:</strong> We will never sell, trade, or share donor contact details with third-party advertisers or telemarketers.
        </p>
      </div>
    </div>
  );
};

export const TermsView: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-6 text-[#2c221e] text-xs sm:text-sm">
      <div className="border-b border-[#E3D9C6] pb-4 space-y-1">
        <h1 className="font-serif font-bold text-2xl text-[#1b3b2b]">Terms & Conditions</h1>
        <p className="text-xs text-[#5a483c]">Feed A Dog Welfare Trust (#DEL/NGO/2023)</p>
      </div>

      <div className="space-y-4 text-[#5a483c] leading-relaxed">
        <p>
          All donations made to Feed A Dog Welfare Trust are voluntary contributions used directly for bulk food procurement, kitchen prep, and street feeding route logistics across Jaipur & Delhi.
        </p>
        <p>
          <strong>Tax Exemption:</strong> Contributions qualify for 80G tax deduction under Indian Income Tax regulations. Official certificates are generated automatically post-payment.
        </p>
        <p>
          <strong>Refund Policy:</strong> Because funds are immediately deployed for daily perishable food preparation, donations are generally non-refundable except in cases of accidental duplicate transactions.
        </p>
      </div>
    </div>
  );
};
