import React from 'react';

interface FooterProps {
  onNavigate: (tab: 'home' | 'donate' | 'about' | 'impact' | 'gallery' | 'contact' | 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1b2a20] text-[#d6cdbe] pt-12 pb-8 border-t border-[#2d4033] text-xs font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Address */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
              <span className="text-lg">🐾</span>
              <span className="font-serif font-bold text-lg text-white">Feed A Dog Welfare Trust</span>
            </div>

            <div className="text-[#a89e8e] leading-relaxed space-y-1">
              <p className="font-semibold text-white">Registered Address:</p>
              <p>Plot 14, Lane 3, Anand Nagar, Sanganer Road</p>
              <p>Jaipur, Rajasthan — 302015, India</p>
              <p className="text-[11px] text-[#837869] pt-1">Government Reg. #DEL/NGO/2023 • Section 80G Tax Exempted</p>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-serif font-bold text-sm text-white">Contact Us</h4>
            <ul className="space-y-1 text-[#a89e8e]">
              <li>Email: <a href="mailto:hello@feedadog.org" className="hover:text-white underline">hello@feedadog.org</a></li>
              <li>Phone: <a href="tel:+919829012345" className="hover:text-white">+91 98290 12345</a></li>
              <li>Jaipur Hub: Sanganer Gate Kitchen</li>
              <li>Delhi Hub: Okhla Phase III Route</li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-serif font-bold text-sm text-white">Navigation</h4>
            <div className="flex flex-col space-y-1 text-[#a89e8e]">
              <button onClick={() => onNavigate('home')} className="text-left hover:text-white cursor-pointer">
                Home
              </button>
              <button onClick={() => onNavigate('about')} className="text-left hover:text-white cursor-pointer">
                Founder Story
              </button>
              <button onClick={() => onNavigate('impact')} className="text-left hover:text-white cursor-pointer">
                Daily Drives
              </button>
              <button onClick={() => onNavigate('gallery')} className="text-left hover:text-white cursor-pointer">
                Photo Gallery
              </button>
              <button onClick={() => onNavigate('privacy')} className="text-left hover:text-white cursor-pointer">
                Privacy Policy
              </button>
              <button onClick={() => onNavigate('terms')} className="text-left hover:text-white cursor-pointer">
                Terms & Conditions
              </button>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-[#2d4033] text-center text-[#837869] text-[11px]">
          <p>© {new Date().getFullYear()} Feed A Dog Welfare Trust. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
