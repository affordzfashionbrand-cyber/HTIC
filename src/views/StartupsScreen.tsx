import React, { useState } from 'react';
import { STARTUPS_DATA, Startup } from '../data/mockData';

interface StartupsScreenProps {
  onOpenStartupModal: (startup: Startup) => void;
  onNavigateTab: (tab: string) => void;
}

export const StartupsScreen: React.FC<StartupsScreenProps> = ({
  onOpenStartupModal,
  onNavigateTab
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const [selectedStage, setSelectedStage] = useState<string>('all');

  const sectorPills = [
    { id: 'all', label: 'All Sectors' },
    { id: 'robotics', label: 'Surgical & Robotics' },
    { id: 'diagnostics', label: 'Point-of-Care Diagnostics' },
    { id: 'ai', label: 'AI & Digital Health' },
    { id: 'implants', label: 'Biomaterials & Implants' },
    { id: 'assistive', label: 'Assistive Tech' }
  ];

  const filteredStartups = STARTUPS_DATA.filter((startup) => {
    const matchesSearch =
      !searchTerm ||
      startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.founders.some((f) => f.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesSector =
      selectedSector === 'all' || startup.sector === selectedSector;

    const matchesStage =
      selectedStage === 'all' || startup.stage === selectedStage;

    return matchesSearch && matchesSector && matchesStage;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Top Meta Strip */}
      <section className="w-full bg-[#e8fdf8] py-2.5 border-b border-[#bcc9c6]/30 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-2 text-xs text-[#525f75]">
          <div className="flex items-center gap-1.5 font-semibold">
            <span className="text-[#1eb495]">IIT Madras Research Park</span>
            <span className="text-[#bcc9c6]">/</span>
            <span>BIRAC & DST Supported Incubator</span>
            <span className="text-[#bcc9c6]">/</span>
            <span className="text-[#111c2d]">Portfolio & Alumni Startups Directory</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-white px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#1eb495] border border-[#bcc9c6]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1eb495] animate-pulse"></span>
              Cohort Active Registry
            </span>
            <span className="hidden sm:inline text-[#bcc9c6]">|</span>
            <span className="hidden sm:inline text-[11px]">ISO 13485 & CDSCO Clinical Validation Hub</span>
          </div>
        </div>
      </section>

      {/* Header Hero & Key Portfolio Metrics */}
      <section className="w-full bg-white py-12 lg:py-16 px-4 sm:px-6 lg:px-10 relative overflow-hidden">
        <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-[#1eb495]/5 blur-3xl pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#a9f5e1] text-[#1eb495] text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">biotech</span>
              <span>HTIC Incubated Startups</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111c2d] tracking-tight">
              HTIC MedTech Startups
            </h1>
            <p className="text-base text-[#525f75] leading-relaxed max-w-3xl">
              Explore over 85+ deep-tech biomedical startups incubated and accelerated at HTIC–MTI, translating hospital unmet needs into validated medical devices, point-of-care diagnostics, surgical robotics, and AI healthcare telemetry.
            </p>
          </div>

          {/* Institutional Metric Strip */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div className="bg-[#e8fdf8] p-3.5 sm:p-5 rounded-2xl border border-[#bcc9c6]/30 space-y-1">
              <div className="flex items-center justify-between text-[#1eb495]">
                <span className="text-[10px] sm:text-[11px] uppercase font-bold text-[#525f75] tracking-wider">
                  Active & Graduated
                </span>
                <span className="material-symbols-outlined text-[18px] sm:text-[20px]">science</span>
              </div>
              <div className="text-xl sm:text-3xl font-heading font-bold text-[#111c2d]">85+</div>
              <p className="text-[10px] sm:text-xs text-[#525f75]">Incubated MedTech & Deep-Bio Enterprises</p>
            </div>

            <div className="bg-[#e8fdf8] p-3.5 sm:p-5 rounded-2xl border border-[#bcc9c6]/30 space-y-1">
              <div className="flex items-center justify-between text-[#1eb495]">
                <span className="text-[10px] sm:text-[11px] uppercase font-bold text-[#525f75] tracking-wider">
                  Follow-on Capital
                </span>
                <span className="material-symbols-outlined text-[18px] sm:text-[20px]">payments</span>
              </div>
              <div className="text-xl sm:text-3xl font-heading font-bold text-[#111c2d]">₹50+ Cr</div>
              <p className="text-[10px] sm:text-xs text-[#525f75]">Raised from VCs & Angel Syndicates</p>
            </div>

            <div className="bg-[#e8fdf8] p-3.5 sm:p-5 rounded-2xl border border-[#bcc9c6]/30 space-y-1">
              <div className="flex items-center justify-between text-[#1eb495]">
                <span className="text-[10px] sm:text-[11px] uppercase font-bold text-[#525f75] tracking-wider">
                  Clinical Footprint
                </span>
                <span className="material-symbols-outlined text-[18px] sm:text-[20px]">personal_injury</span>
              </div>
              <div className="text-xl sm:text-3xl font-heading font-bold text-[#111c2d]">4.2M+</div>
              <p className="text-[10px] sm:text-xs text-[#525f75]">Patients Screened & Treated</p>
            </div>

            <div className="bg-[#e8fdf8] p-3.5 sm:p-5 rounded-2xl border border-[#bcc9c6]/30 space-y-1">
              <div className="flex items-center justify-between text-[#1eb495]">
                <span className="text-[10px] sm:text-[11px] uppercase font-bold text-[#525f75] tracking-wider">
                  Regulatory & IP
                </span>
                <span className="material-symbols-outlined text-[18px] sm:text-[20px]">verified_user</span>
              </div>
              <div className="text-xl sm:text-3xl font-heading font-bold text-[#111c2d]">42 / 18</div>
              <p className="text-[10px] sm:text-xs text-[#525f75]">Patents & CDSCO Approvals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Directory & Search Console */}
      <section className="w-full bg-[#f9f9ff] py-12 px-4 sm:px-6 lg:px-10 border-t border-[#bcc9c6]/30">
        <div className="max-w-[1440px] mx-auto space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1eb495] block mb-1">
              Portfolio Directory
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111c2d] tracking-tight">
              Our Incubation Portfolio
            </h2>
            <p className="text-sm text-[#525f75] mt-1">
              Groundbreaking healthtech and clinical ventures supported by HTIC–MTI facilities, grants, and mentors.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#bcc9c6]/30 shadow-xs space-y-4">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
              <div className="relative flex-1">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#525f75] text-[20px]">
                  search
                </span>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search startups, technologies, founders, patents..."
                  className="w-full pl-10 pr-4 py-2.5 bg-[#e8fdf8] border border-[#bcc9c6]/40 rounded-xl text-xs text-[#111c2d] focus:outline-none focus:border-[#1eb495] focus:bg-white transition-colors"
                />
              </div>

              {/* Development Stage Dropdown */}
              <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5 sm:gap-3">
                <div className="flex items-center gap-2">
                  <label className="text-xs font-semibold text-[#525f75] whitespace-nowrap">
                    Stage:
                  </label>
                  <select
                    value={selectedStage}
                    onChange={(e) => setSelectedStage(e.target.value)}
                    className="px-2.5 sm:px-3 py-1.5 sm:py-2 bg-[#e8fdf8] border border-[#bcc9c6]/40 rounded-xl text-xs text-[#111c2d] focus:outline-none focus:border-[#1eb495]"
                  >
                    <option value="all">All Maturity Stages</option>
                    <option value="Prototyping">Prototyping (TRL 4–5)</option>
                    <option value="Clinical Validation">Clinical Validation (TRL 6–7)</option>
                    <option value="Commercial">Commercial / Licensed (TRL 8–9)</option>
                  </select>
                </div>
                <span className="text-xs font-semibold text-[#525f75] whitespace-nowrap">
                  Showing <strong className="text-[#1eb495]">{filteredStartups.length}</strong> Startups
                </span>
              </div>
            </div>

            {/* Filter categories with horizontal scroll on mobile */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 text-xs -mx-1 px-1">
              {sectorPills.map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setSelectedSector(pill.id)}
                  className={`px-3 py-1.5 rounded-full font-semibold shrink-0 transition-all cursor-pointer ${
                    selectedSector === pill.id
                      ? 'bg-[#1eb495] text-white shadow-xs'
                      : 'bg-[#e8fdf8] text-[#525f75] border border-[#bcc9c6]/30 hover:border-[#1eb495]'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          {filteredStartups.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#bcc9c6]/30">
              <span className="material-symbols-outlined text-4xl text-[#bcc9c6]">search_off</span>
              <p className="font-heading font-bold text-base text-[#111c2d] mt-2">
                No matching startups found
              </p>
              <p className="text-xs text-[#525f75] mt-1">
                Try clearing search terms or selecting 'All Sectors'.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedSector('all');
                  setSelectedStage('all');
                }}
                className="mt-3 px-4 py-2 bg-[#1eb495] text-white text-xs font-semibold rounded-lg"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStartups.map((startup) => (
                <div
                  key={startup.id}
                  className="bg-white border border-[#bcc9c6]/30 hover:border-[#1eb495] rounded-2xl shadow-xs hover:shadow-md transition-all flex flex-col items-center justify-center p-6 sm:p-8 group cursor-pointer text-center min-h-[240px]"
                  onClick={() => {
                    if (startup.website) {
                      window.open(startup.website, '_blank');
                    } else {
                      onOpenStartupModal(startup);
                    }
                  }}
                >
                  <div className="w-20 h-20 mb-4 rounded-xl bg-[#e8fdf8] flex items-center justify-center font-heading text-3xl font-bold text-[#1eb495] shrink-0 group-hover:bg-[#1eb495] group-hover:text-white transition-colors overflow-hidden border border-[#bcc9c6]/30">
                    {startup.logo ? (
                      <img src={startup.logo} alt={startup.name} className="w-full h-full object-contain p-2 bg-white" />
                    ) : (
                      startup.initials
                    )}
                  </div>
                  
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#111c2d] group-hover:text-[#1eb495] transition-colors leading-snug line-clamp-3">
                    {startup.name}
                  </h3>
                  
                  <div className="mt-4 flex items-center justify-center text-[#1eb495] opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                    <span className="text-xs font-semibold">{startup.website ? 'Visit Website' : 'View Profile'}</span>
                    <span className="material-symbols-outlined text-[16px] ml-1">{startup.website ? 'open_in_new' : 'arrow_forward'}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* From Cleanroom Prototyping to Clinical Bedsides: The HTIC Advantage */}
      <section className="w-full bg-[#e8fdf8] py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1440px] mx-auto space-y-10">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs text-[#1eb495] font-heading font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[18px]">account_tree</span>
              <span>Engineering Pipeline</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111c2d]">
              From Cleanroom Prototyping to Clinical Bedsides: The HTIC Advantage
            </h2>
            <p className="text-sm text-[#525f75]">
              HTIC-MTI operates at the convergence of IIT Madras engineering faculty, clinical super-specialists, and regulatory bodies—shortening device commercialization cycles from 7 years to under 30 months.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-xs space-y-3 border border-[#bcc9c6]/30">
              <div className="w-12 h-12 rounded-xl bg-[#e8fdf8] flex items-center justify-center text-[#1eb495]">
                <span className="material-symbols-outlined text-[26px]">medical_services</span>
              </div>
              <h3 className="font-heading font-bold text-base text-[#111c2d]">Direct Bedside Immersion</h3>
              <p className="text-xs text-[#525f75] leading-relaxed">
                Continuous on-ground access to 3,500+ hospital beds across Chennai & Vellore for direct observational ethnography and rapid device trial feedback.
              </p>
              <div className="text-xs font-bold text-[#1eb495]">CMC Vellore, Apollo, MMM</div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xs space-y-3 border border-[#bcc9c6]/30">
              <div className="w-12 h-12 rounded-xl bg-[#e8fdf8] flex items-center justify-center text-[#1eb495]">
                <span className="material-symbols-outlined text-[26px]">precision_manufacturing</span>
              </div>
              <h3 className="font-heading font-bold text-base text-[#111c2d]">IITM Micro-Fab Labs</h3>
              <p className="text-xs text-[#525f75] leading-relaxed">
                Complete in-house ISO Class 7/8 cleanrooms, 5-axis micromachining, stereolithography bio-printing, and high-frequency RF telemetry testbenches.
              </p>
              <div className="text-xs font-bold text-[#1eb495]">IITM Research Park D-Block</div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xs space-y-3 border border-[#bcc9c6]/30">
              <div className="w-12 h-12 rounded-xl bg-[#e8fdf8] flex items-center justify-center text-[#1eb495]">
                <span className="material-symbols-outlined text-[26px]">policy</span>
              </div>
              <h3 className="font-heading font-bold text-base text-[#111c2d]">CDSCO Regulatory Unit</h3>
              <p className="text-xs text-[#525f75] leading-relaxed">
                Full-time biomedical quality engineers navigating Medical Device Rules (MDR 2017), MD-9 manufacturing licenses, biocompatibility (ISO 10993), and electrical safety.
              </p>
              <div className="text-xs font-bold text-[#1eb495]">18 Successful Audits</div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xs space-y-3 border border-[#bcc9c6]/30">
              <div className="w-12 h-12 rounded-xl bg-[#e8fdf8] flex items-center justify-center text-[#1eb495]">
                <span className="material-symbols-outlined text-[26px]">savings</span>
              </div>
              <h3 className="font-heading font-bold text-base text-[#111c2d]">Zero-Dilution Grants</h3>
              <p className="text-xs text-[#525f75] leading-relaxed">
                Assistance in securing sovereign non-dilutive translation funding through BIRAC BIG, SPARSH, DST NIDHI-SEED, and specialized IITM translation endowments.
              </p>
              <div className="text-xs font-bold text-[#1eb495]">₹50L - ₹1.5 Cr per grant</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
