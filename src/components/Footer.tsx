import React from 'react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  onOpenTourModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab, onOpenTourModal }) => {
  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white text-[#111c2d] border-t border-[#bcc9c6]/30 mt-20" id="footer-contact">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Col 1: Institutional Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#145598] text-white flex items-center justify-center font-bold shadow-sm">
                <span className="material-symbols-outlined text-[20px]">health_and_safety</span>
              </div>
              <span className="font-heading font-bold text-lg text-[#111c2d]">HTIC–MTI</span>
            </div>
            <p className="text-sm text-[#525f75] leading-relaxed">
              Catalyzing indigenous medical device innovation and healthcare technologies through premier clinical translation, institutional venture incubation, and deep academic engineering at IIT Madras.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#f0f3ff] text-[#3d4947] text-xs font-semibold border border-[#bcc9c6]/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#145598]"></span>
                BIRAC BioNEST
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#f0f3ff] text-[#3d4947] text-xs font-semibold border border-[#bcc9c6]/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#145598]"></span>
                DST Supported
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#f0f3ff] text-[#3d4947] text-xs font-semibold border border-[#bcc9c6]/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#145598]"></span>
                DBT Initiative
              </span>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-bold text-[#111c2d] uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleTabChange('home')}
                  className="text-[#525f75] hover:text-[#145598] transition-colors cursor-pointer text-left"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabChange('about')}
                  className="text-[#525f75] hover:text-[#145598] transition-colors cursor-pointer text-left"
                >
                  About HTIC & Governance
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabChange('incubation')}
                  className="text-[#525f75] hover:text-[#145598] transition-colors cursor-pointer text-left"
                >
                  Incubation Framework (4 Stages)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabChange('programs')}
                  className="text-[#525f75] hover:text-[#145598] transition-colors cursor-pointer text-left"
                >
                  Funding Grants (BIRAC / DST)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabChange('startups')}
                  className="text-[#525f75] hover:text-[#145598] transition-colors cursor-pointer text-left"
                >
                  Portfolio Startups Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabChange('partnerships')}
                  className="text-[#525f75] hover:text-[#145598] transition-colors cursor-pointer text-left"
                >
                  Hospital & OEM Partnerships
                </button>
              </li>
            </ul>
          </div>


          {/* Col 4: Campus Location & Direct Secretariat */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-bold text-[#111c2d] uppercase tracking-wider">
              IITM Research Park
            </h4>
            <div className="text-sm text-[#525f75] leading-relaxed space-y-1">
              <p className="font-semibold text-[#111c2d]">5th Floor, D-Block, IITM Research Park</p>
              <p>Kanagam Road, Taramani,</p>
              <p>Chennai – 600113, Tamil Nadu, India</p>
            </div>
            <div className="pt-2 space-y-1.5 text-xs text-[#525f75]">
              <p className="flex items-center gap-2">
                <span className="font-semibold text-[#111c2d]">Email:</span>
                <a href="mailto:mti-incubator@htic.iitm.ac.in" className="text-[#145598] hover:underline">
                  mti-incubator@htic.iitm.ac.in
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-[#111c2d]">Phone:</span>
                <a href="tel:+914466469800" className="text-[#111c2d] hover:text-[#145598]">
                  +91 (44) 6646 9800
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-[#111c2d]">Hours:</span>
                <span>Mon – Fri, 09:00 – 18:00 IST</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-[#bcc9c6]/30 flex flex-col md:flex-row items-center justify-between gap-4 mt-10 pt-6">
          <p className="text-xs text-[#525f75] text-center md:text-left leading-relaxed">
            © {new Date().getFullYear()} IIT Madras – Healthcare Technology Innovation Centre (HTIC–MTI). Supported by BIRAC, Department of Biotechnology & DST, Govt. of India.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#525f75]">
            <button
              onClick={() => handleTabChange('about')}
              className="hover:text-[#145598] transition-colors cursor-pointer"
            >
              CDSCO & Ethics Compliance
            </button>
            <span className="text-[#bcc9c6] hidden sm:inline">·</span>
            <button
              onClick={() => handleTabChange('incubation')}
              className="hover:text-[#145598] transition-colors cursor-pointer"
            >
              Incubation Policy
            </button>
            <span className="text-[#bcc9c6] hidden sm:inline">·</span>
            <button
              onClick={() => handleTabChange('contact')}
              className="hover:text-[#145598] transition-colors cursor-pointer"
            >
              Direct Secretariat
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
