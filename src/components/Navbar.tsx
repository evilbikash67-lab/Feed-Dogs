import React from 'react';

interface NavbarProps {
  activeTab: 'home' | 'donate' | 'about' | 'impact' | 'gallery' | 'contact' | 'privacy' | 'terms';
  setActiveTab: (tab: 'home' | 'donate' | 'about' | 'impact' | 'gallery' | 'contact' | 'privacy' | 'terms') => void;
  onDonateClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onDonateClick
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F4]/95 backdrop-blur-xs border-b border-[#E3D9C6] text-[#2c221e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        
        {/* NGO Title */}
        <div 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <span className="text-lg">🐾</span>
          <div>
            <span className="font-serif font-bold text-lg text-[#1b3b2b] tracking-tight group-hover:text-[#c25928] transition-colors">
              Feed A Dog Foundation
            </span>
            <span className="ml-2 text-[11px] text-[#5a483c] hidden sm:inline font-sans border-l border-[#D2C8B6] pl-2">
              Reg. Welfare Trust #DEL/2023
            </span>
          </div>
        </div>

        {/* Minimal Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-[#4a3525]">
          <button
            id="nav-btn-home"
            onClick={() => setActiveTab('home')}
            className={`transition-colors cursor-pointer ${
              activeTab === 'home' ? 'text-[#1b3b2b] font-bold underline underline-offset-4 decoration-[#c25928]' : 'hover:text-[#1b3b2b]'
            }`}
          >
            Home
          </button>

          <button
            id="nav-btn-about"
            onClick={() => setActiveTab('about')}
            className={`transition-colors cursor-pointer ${
              activeTab === 'about' ? 'text-[#1b3b2b] font-bold underline underline-offset-4 decoration-[#c25928]' : 'hover:text-[#1b3b2b]'
            }`}
          >
            Founder Story
          </button>

          <button
            id="nav-btn-impact"
            onClick={() => setActiveTab('impact')}
            className={`transition-colors cursor-pointer ${
              activeTab === 'impact' ? 'text-[#1b3b2b] font-bold underline underline-offset-4 decoration-[#c25928]' : 'hover:text-[#1b3b2b]'
            }`}
          >
            Daily Drives
          </button>

          <button
            id="nav-btn-gallery"
            onClick={() => setActiveTab('gallery')}
            className={`transition-colors cursor-pointer ${
              activeTab === 'gallery' ? 'text-[#1b3b2b] font-bold underline underline-offset-4 decoration-[#c25928]' : 'hover:text-[#1b3b2b]'
            }`}
          >
            Photos
          </button>

          <button
            id="nav-btn-contact"
            onClick={() => setActiveTab('contact')}
            className={`transition-colors cursor-pointer ${
              activeTab === 'contact' ? 'text-[#1b3b2b] font-bold underline underline-offset-4 decoration-[#c25928]' : 'hover:text-[#1b3b2b]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Donate Button - The ONLY Accent Color */}
        <div className="flex items-center gap-3">
          <button
            id="nav-cta-donate"
            onClick={() => {
              setActiveTab('home');
              setTimeout(onDonateClick, 50);
            }}
            className="px-4 py-1.5 rounded-md bg-[#c25928] hover:bg-[#aa4a1e] text-white font-medium text-xs transition-colors cursor-pointer shadow-xs"
          >
            Donate ₹10
          </button>
        </div>

      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex items-center justify-around bg-[#F3EFE6] border-t border-[#E3D9C6] py-1.5 px-2 text-xs font-medium text-[#4a3525]">
        <button onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'font-bold text-[#1b3b2b]' : ''}>
          Home
        </button>
        <button onClick={() => setActiveTab('about')} className={activeTab === 'about' ? 'font-bold text-[#1b3b2b]' : ''}>
          Story
        </button>
        <button onClick={() => setActiveTab('impact')} className={activeTab === 'impact' ? 'font-bold text-[#1b3b2b]' : ''}>
          Drives
        </button>
        <button onClick={() => setActiveTab('gallery')} className={activeTab === 'gallery' ? 'font-bold text-[#1b3b2b]' : ''}>
          Photos
        </button>
        <button onClick={() => setActiveTab('contact')} className={activeTab === 'contact' ? 'font-bold text-[#1b3b2b]' : ''}>
          Contact
        </button>
      </div>
    </header>
  );
};
