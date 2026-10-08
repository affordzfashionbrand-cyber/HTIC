import React, { useState } from 'react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenEligibility: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  onOpenSearch,
  onOpenEligibility
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'incubation', label: 'Incubation' },
    { id: 'programs', label: 'Programs' },
    { id: 'startups', label: 'Startups' },
    { id: 'partnerships', label: 'Partnerships' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApplyClick = () => {
    setCurrentTab('incubation');
    setMobileMenuOpen(false);
    // Smooth scroll down to application form after state updates
    setTimeout(() => {
      const el = document.getElementById('htic-mti-incubation-application');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col bg-[#ffffff]/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.03)] border-b border-[#bcc9c6]/30">
      {/* Top Banner Zone: Institutional Logos (Desktop Only) */}
      <div className="hidden xl:block w-full border-b border-[#bcc9c6]/30 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between">
          <a href="http://htic.iitm.ac.in" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 flex items-center hover:opacity-90 transition-opacity focus:outline-none">
            <img 
              src="https://htic.iitm.ac.in/mti/wp-content/themes/medtechincubator/images/logo-supporters-new.png" 
              alt="HTIC Supporters - IIT Madras & DBT" 
              className="h-[52px] w-auto object-contain" 
            />
          </a>
          <button 
            onClick={() => handleNavClick('home')}
            className="flex-shrink-0 flex items-center hover:opacity-90 transition-opacity cursor-pointer focus:outline-none"
          >
            <img 
              src="https://htic.iitm.ac.in/mti/wp-content/themes/medtechincubator/images/logo-mti-option10.png" 
              alt="IIT Madras-HTIC MedTech Incubator (MTI)" 
              className="h-[52px] w-auto object-contain" 
            />
          </button>
        </div>
      </div>

      <div className="h-16 sm:h-20 max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-10 flex items-center justify-between gap-2 sm:gap-4 w-full">
        {/* Left Zone: Hamburger Toggle + HTIC Official Logo (Mobile Only) */}
        <div className="xl:hidden flex items-center gap-2 sm:gap-3.5">
          {/* Mobile Hamburger Toggle on the LEFT */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -ml-1 text-[#3d4947] hover:text-[#145598] rounded-lg hover:bg-[#f0f3ff] transition-colors flex items-center justify-center cursor-pointer focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>

          {/* HTIC Brand Logo (Mobile only, slightly bigger) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center hover:opacity-90 transition-opacity cursor-pointer focus:outline-none"
            aria-label="IIT Madras Healthcare Technology Innovation Centre"
          >
            <img
              src="/images/htic-logo.png"
              alt="Healthcare Technology Innovation Centre"
              className="h-10 sm:h-12 w-auto object-contain max-w-[210px] sm:max-w-none"
            />
          </button>
        </div>

        {/* Center Zone: Navigation Links (Desktop) */}
        <nav className="hidden xl:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-semibold py-2 transition-all cursor-pointer relative ${
                  isActive
                    ? 'text-[#145598] font-bold'
                    : 'text-[#3d4947] hover:text-[#111c2d]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#145598] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Zone: Actions (Search, Eligibility, Apply) */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-[#525f75] hover:text-[#145598] rounded-lg hover:bg-[#f0f3ff] transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Search incubator directory"
            title="Search directory (Ctrl+K)"
          >
            <span className="material-symbols-outlined text-[20px] sm:text-[22px]">search</span>
          </button>

          {/* Apply Primary CTA */}
          <button
            onClick={handleApplyClick}
            className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-2 sm:py-2.5 bg-[#145598] text-white font-heading font-semibold text-xs sm:text-sm rounded-lg shadow-sm hover:bg-[#00407a] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
          >
            <span className="sm:hidden">Apply</span>
            <span className="hidden sm:inline">Apply for Incubation</span>
            <span className="material-symbols-outlined text-[16px] hidden sm:inline">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#bcc9c6]/40 shadow-xl px-4 py-4 max-h-[calc(100vh-5rem)] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-lg text-left text-sm font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#f0f3ff] text-[#145598]'
                      : 'text-[#3d4947] hover:bg-[#f9f9ff] hover:text-[#111c2d]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#145598]" />
                  )}
                </button>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-[#bcc9c6]/20 mt-3 flex flex-col gap-2">
            <button
              onClick={handleApplyClick}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#145598] text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-[#00407a] cursor-pointer"
            >
              <span>Apply for Incubation</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
