import React, { useState } from 'react';
import { CustomerDetails, ConfigStatus } from '../types';

interface DonationCardsProps {
  customer: CustomerDetails;
  setCustomer: React.Dispatch<React.SetStateAction<CustomerDetails>>;
  onInitiatePayment: (amount: number, dogCount: number) => void;
  isLoading: boolean;
  config: ConfigStatus | null;
}

const TIER_OPTIONS = [
  { amount: 10, dogCount: 1, title: 'Feed 1 Dog', desc: 'Provides 1 warm rice & egg bowl today' },
  { amount: 20, dogCount: 2, title: 'Feed 2 Dogs', desc: 'Provides 2 full meal bowls for street strays' },
  { amount: 30, dogCount: 3, title: 'Feed 3 Dogs', desc: 'Meals plus clean hydration at feeding points' },
  { amount: 40, dogCount: 4, title: 'Feed 4 Dogs', desc: 'Sponsors a full meal route for a small pack' },
];

export const DonationCards: React.FC<DonationCardsProps> = ({
  customer,
  setCustomer,
  onInitiatePayment,
  isLoading
}) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(20);
  const [customAmount, setCustomAmount] = useState<number>(50);
  const [isCustomMode, setIsCustomMode] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showTestCardInfo, setShowTestCardInfo] = useState<boolean>(false);

  const handleInputChange = (field: keyof CustomerDetails, value: string) => {
    setCustomer(prev => ({ ...prev, [field]: value }));
  };

  const handlePresetSelect = (amt: number) => {
    setSelectedAmount(amt);
    setIsCustomMode(false);
    setIsModalOpen(true);
  };

  const handleCustomOpen = () => {
    setIsCustomMode(true);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = isCustomMode ? customAmount : selectedAmount;
    const dogCount = Math.max(1, Math.floor(finalAmount / 10));
    onInitiatePayment(finalAmount, dogCount);
  };

  const currentAmount = isCustomMode ? customAmount : selectedAmount;
  const currentDogCount = Math.max(1, Math.floor(currentAmount / 10));

  return (
    <section id="donation-cards-section" className="py-16 bg-[#F5F0E6] border-b border-[#E3D9C6] text-[#2c221e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1b3b2b]">Direct Relief Contribution</span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1b3b2b]">
            Sponsor an evening meal bowl
          </h2>
          <p className="text-sm text-[#5a483c]">
            ₹10 buys fresh rice, eggs, turmeric, and broth for one stray dog. Every payment is logged transparently with tax receipts.
          </p>
        </div>

        {/* Featured Dog Story + Simple Donation Panel (Side by Side Editorial Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Featured Dog Card */}
          <div className="lg:col-span-5 bg-white border border-[#E3D9C6] p-5 shadow-xs rounded-xs space-y-4">
            <div className="aspect-[4/3] bg-[#E8E2D5] overflow-hidden rounded-xs border border-[#E3D9C6]">
              <img
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=700&q=80"
                alt="Champa the street dog"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-lg text-[#1b3b2b]">Featured Dog: Champa</span>
                <span className="text-[11px] font-sans bg-[#FAF8F4] text-[#1b3b2b] px-2 py-0.5 border border-[#E3D9C6]">
                  Jaipur Route 3
                </span>
              </div>
              <p className="text-xs text-[#5a483c] leading-relaxed">
                Found near Sanganer vegetable market with a bad leg injury. She now waits every evening at 6:40 PM by the old banyan tree when our volunteer van arrives. ₹20 covers two full bowls for Champa and her companion.
              </p>
              <p className="font-handwriting text-stone-600 text-base pt-1">
                “Champa has been receiving daily meals for 8 months thanks to small donors.”
              </p>
            </div>
          </div>

          {/* Clean Non-Flashy Donation Options */}
          <div className="lg:col-span-7 bg-white border border-[#E3D9C6] p-6 sm:p-8 shadow-xs rounded-xs space-y-6">
            
            <div>
              <h3 className="font-serif font-bold text-xl text-[#1b3b2b]">Select a donation amount</h3>
              <p className="text-xs text-[#5a483c] mt-0.5">Choose a simple amount to sponsor meals for today's evening route.</p>
            </div>

            {/* Simple 4 Button Tier Grid (No Flashy Gradients) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TIER_OPTIONS.map((tier) => (
                <button
                  key={tier.amount}
                  id={`btn-donate-${tier.amount}`}
                  onClick={() => handlePresetSelect(tier.amount)}
                  className="p-4 border border-[#E3D9C6] hover:border-[#c25928] bg-[#FAF8F4] hover:bg-[#F5F0E6] text-left transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-serif font-bold text-lg text-[#1b3b2b] group-hover:text-[#c25928]">
                      ₹{tier.amount}
                    </span>
                    <span className="text-[11px] font-medium text-[#5a483c] bg-white px-2 py-0.5 border border-[#E3D9C6]">
                      {tier.title}
                    </span>
                  </div>
                  <p className="text-xs text-[#5a483c] leading-normal">{tier.desc}</p>
                </button>
              ))}
            </div>

            {/* Custom Amount Section */}
            <div className="pt-4 border-t border-[#E8E2D5] space-y-3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <p className="font-serif font-bold text-sm text-[#1b3b2b]">Want to sponsor a full feeding drive route?</p>
                  <p className="text-xs text-[#5a483c]">Enter any custom amount (e.g. ₹100 feeds 10 dogs, ₹500 feeds 50 dogs).</p>
                </div>
                
                <button
                  id="btn-donate-custom"
                  onClick={handleCustomOpen}
                  className="px-4 py-2 border border-[#1b3b2b] text-[#1b3b2b] hover:bg-[#1b3b2b] hover:text-white font-medium text-xs transition-colors cursor-pointer shrink-0"
                >
                  Enter Custom Amount
                </button>
              </div>
            </div>

            {/* Transparency Note */}
            <div className="p-3 bg-[#FAF8F4] border border-[#E8E2D5] text-[11px] text-[#5a483c] flex items-center justify-between">
              <span>🔒 256-Bit Encrypted via Razorpay</span>
              <span className="font-semibold text-[#1b3b2b]">Section 80G Tax Exemption Eligible</span>
            </div>

          </div>

        </div>

      </div>

      {/* Clean Payment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF8F4] border border-[#E3D9C6] rounded-xs max-w-md w-full p-6 sm:p-8 space-y-5 shadow-xl text-[#2c221e] relative max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex justify-between items-start border-b border-[#E3D9C6] pb-3">
              <div>
                <h3 className="font-serif font-bold text-xl text-[#1b3b2b]">
                  {isCustomMode ? 'Custom Meal Sponsorship' : `Sponsor ₹${selectedAmount} Donation`}
                </h3>
                <p className="text-xs text-[#5a483c]">Feed A Dog Welfare Trust • Section 80G Tax Exempted</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-[#5a483c] hover:text-black font-bold text-lg p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Selected Amount Summary */}
            <div className="p-3 bg-white border border-[#E3D9C6] space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-[#4a3525]">Total Contribution:</span>
                <span className="font-serif font-bold text-lg text-[#c25928]">₹{currentAmount} INR</span>
              </div>

              {isCustomMode ? (
                <div className="space-y-2 pt-1">
                  <div className="flex gap-2">
                    {[50, 100, 200, 500].map(amt => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setCustomAmount(amt)}
                        className={`flex-1 py-1 text-xs border cursor-pointer font-medium ${
                          customAmount === amt ? 'bg-[#1b3b2b] text-white border-[#1b3b2b]' : 'bg-white text-[#2c221e] border-[#E3D9C6]'
                        }`}
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    min="1"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(Math.max(1, Number(e.target.value)))}
                    className="w-full px-3 py-1.5 bg-white border border-[#E3D9C6] text-sm font-bold text-[#2c221e] focus:outline-none focus:border-[#c25928]"
                  />
                </div>
              ) : null}

              <p className="text-[11px] text-[#1b3b2b] font-medium">
                🐾 This ₹{currentAmount} donation feeds approximately {currentDogCount} stray dog{currentDogCount > 1 ? 's' : ''} on today's route.
              </p>
            </div>

            {/* Donor Form */}
            <form onSubmit={handleFormSubmit} className="space-y-3.5 text-xs">
              
              <div>
                <label className="block font-semibold text-[#4a3525] mb-1">Full Name (for 80G Tax Receipt)</label>
                <input
                  type="text"
                  required
                  value={customer.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-3 py-2 bg-white border border-[#E3D9C6] font-medium text-[#2c221e] focus:outline-none focus:border-[#c25928]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#4a3525] mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={customer.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="ramesh@example.com"
                    className="w-full px-3 py-2 bg-white border border-[#E3D9C6] font-medium text-[#2c221e] focus:outline-none focus:border-[#c25928]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#4a3525] mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={customer.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="9876543210"
                    className="w-full px-3 py-2 bg-white border border-[#E3D9C6] font-medium text-[#2c221e] focus:outline-none focus:border-[#c25928]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#4a3525] mb-1">Dedication / Message (Optional)</label>
                <input
                  type="text"
                  value={customer.dedication || ''}
                  onChange={(e) => handleInputChange('dedication', e.target.value)}
                  placeholder="In memory of Bruno / For stray pups in Jaipur"
                  className="w-full px-3 py-2 bg-white border border-[#E3D9C6] font-medium text-[#2c221e] focus:outline-none focus:border-[#c25928]"
                />
              </div>

              {/* Test Card Info Option */}
              <div>
                <button
                  type="button"
                  onClick={() => setShowTestCardInfo(!showTestCardInfo)}
                  className="text-[11px] text-[#c25928] hover:underline font-medium cursor-pointer"
                >
                  {showTestCardInfo ? 'Hide Razorpay Test Credentials' : 'Click to view Razorpay Test Mode Card Details'}
                </button>

                {showTestCardInfo && (
                  <div className="mt-1.5 p-2.5 bg-white border border-[#E3D9C6] text-[11px] font-mono text-[#5a483c] space-y-0.5">
                    <p>Card: <strong className="text-[#2c221e]">4111 1111 1111 1111</strong></p>
                    <p>Expiry: <strong className="text-[#2c221e]">12/28</strong> | CVV: <strong className="text-[#2c221e]">123</strong> | OTP: <strong className="text-[#2c221e]">123456</strong></p>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="modal-btn-donate-submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-[#c25928] hover:bg-[#aa4a1e] text-white font-medium text-xs transition-colors cursor-pointer disabled:opacity-50"
              >
                {isLoading ? 'Opening Secure Razorpay Window...' : `Proceed to Pay ₹${currentAmount} via Razorpay`}
              </button>

            </form>

          </div>
        </div>
      )}

    </section>
  );
};
