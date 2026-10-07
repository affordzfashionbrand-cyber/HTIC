import React, { useState } from 'react';
import { TEAM_DATA, MILESTONES_DATA, PARTNERS_LOGOS, TeamMember } from '../data/mockData';

interface AboutScreenProps {
  onNavigateTab: (tab: string) => void;
  onOpenTour: () => void;
  selectedTeamId?: string | null;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({
  onNavigateTab,
  onOpenTour,
  selectedTeamId
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [viewingMember, setViewingMember] = useState<TeamMember | null>(null);

  const filterTabs = [
    { id: 'ALL', label: 'All Directory' },
    { id: 'STEERING_COMMITTEE', label: 'Steering Committee' },
    { id: 'CLINICAL_ADVISORY_BOARD', label: 'Clinical Advisory Board' },
    { id: 'SCREENING_COMMITTEE', label: 'Screening Committee' },
    { id: 'MENTORS', label: 'Mentors' },
    { id: 'TEAM', label: 'Team' }
  ];

  const filteredMembers = TEAM_DATA.filter((m) => {
    if (activeCategory === 'ALL') return true;
    return m.category === activeCategory;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Top Sovereign Institutional Context Header */}
      <section className="w-full bg-[#edf7fc] py-3 border-b border-[#bcc9c6]/30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#525f75]">
            <div className="flex flex-wrap items-center gap-1.5 font-semibold">
              <span className="material-symbols-outlined text-[16px] text-[#2e9bd7]">account_balance</span>
              <span className="text-[#3d4947]">IIT Madras Research Park</span>
              <span className="text-[#bcc9c6]">/</span>
              <span className="text-[#3d4947]">BIRAC & DST BioNEST Center</span>
              <span className="text-[#bcc9c6]">/</span>
              <span className="text-[#2e9bd7]">About HTIC–MTI</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#bce0f5] text-[#2e9bd7] font-bold text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2e9bd7] animate-pulse"></span>
              <span>Joint Centre of Excellence · IIT Madras & DBT, Govt. of India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="w-full bg-white py-12 lg:py-16 shadow-xs relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#bce0f5]/30 blur-3xl pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#bce0f5] text-[#2e9bd7] text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>Established at IIT Madras in 2011</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111c2d] tracking-tight leading-tight text-balance">
                Translating Deep Engineering into <span className="text-[#2e9bd7]">Life-Saving</span> Clinical Impact
              </h1>
              <p className="text-base text-[#525f75] max-w-3xl leading-relaxed">
                The Healthcare Technology Innovation Centre (HTIC), a multi-disciplinary R&D center established jointly by Indian Institute of Technology Madras (IITM) and Department of Biotechnology (DBT), Government of India, brings together technologists, clinicians, and entrepreneurs to build indigenous medical devices for India and global healthcare challenges.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#leadership"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2e9bd7] text-white font-heading font-semibold text-xs rounded-xl shadow-xs hover:bg-[#207eb3] transition-all cursor-pointer"
                >
                  <span>Explore Governance & Leadership</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                </a>
                <button
                  onClick={onOpenTour}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#edf7fc] text-[#111c2d] font-heading font-semibold text-xs rounded-xl hover:bg-[#bce0f5] transition-all cursor-pointer border border-[#bcc9c6]/40"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#2e9bd7]">calendar_month</span>
                  <span>Book Facility Tour</span>
                </button>
              </div>
            </div>

            {/* Visual Stat Card */}
            <div className="lg:col-span-4 bg-[#edf7fc] p-6 rounded-2xl border border-[#bcc9c6]/30 shadow-xs space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="font-heading text-4xl font-bold text-[#2e9bd7]">14+</span>
                  <span className="text-xs font-semibold text-[#525f75]">Years Active</span>
                </div>
                <p className="font-heading font-bold text-sm text-[#111c2d]">
                  Institutional Translation Engine
                </p>
                <p className="text-xs text-[#525f75] leading-relaxed">
                  Incubating high-risk hardware, implantable biomaterials, and advanced surgical robotics platforms.
                </p>
              </div>
              <div className="pt-2 border-t border-[#bcc9c6]/30 flex items-center justify-between text-xs text-[#525f75]">
                <span className="inline-flex items-center gap-1 font-semibold text-[#2e9bd7]">
                  <span className="material-symbols-outlined text-[16px]">domain</span> IITM Research Park
                </span>
                <span>D-Block 5th Floor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metric Ribbon */}
      <section className="w-full bg-[#bce0f5] py-6 border-y border-[#bcc9c6]/30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-xl shadow-xs text-center border border-[#bcc9c6]/30">
              <div className="font-heading text-3xl font-bold text-[#2e9bd7] leading-none">14+</div>
              <div className="text-xs font-bold text-[#111c2d] mt-1">Years Experience</div>
              <div className="text-[11px] text-[#525f75]">MedTech Translation</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-xs text-center border border-[#bcc9c6]/30">
              <div className="font-heading text-3xl font-bold text-[#2e9bd7] leading-none">70+</div>
              <div className="text-xs font-bold text-[#111c2d] mt-1">Startups Incubated</div>
              <div className="text-[11px] text-[#525f75]">Biomedical Ventures</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-xs text-center border border-[#bcc9c6]/30">
              <div className="font-heading text-3xl font-bold text-[#2e9bd7] leading-none">25+</div>
              <div className="text-xs font-bold text-[#111c2d] mt-1">Intellectual Property</div>
              <div className="text-[11px] text-[#525f75]">Granted & Filed Patents</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & The HTIC Triad */}
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
          <div className="max-w-2xl">
            <span className="font-heading text-xs uppercase tracking-widest text-[#2e9bd7] font-bold block mb-1">
              Institutional Mandate
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111c2d] tracking-tight">
              Architected for National Health Resilience
            </h2>
            <p className="text-sm text-[#525f75] mt-1">
              Uncompromising biomedical standards designed to transition benchside discoveries directly into operational hospital ICUs and primary care clinics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mission */}
            <div className="bg-[#edf7fc] p-6 rounded-2xl border border-[#bcc9c6]/30 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-[#bce0f5] flex items-center justify-center text-[#2e9bd7]">
                  <span className="material-symbols-outlined text-[26px]">assignment_turned_in</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-[#111c2d]">Our Mission</h3>
                <p className="text-xs text-[#525f75] leading-relaxed">
                  Democratize affordable, high-precision healthcare technology by bridging academic engineering with hospital bedside reality, mitigating early stage deep-tech market risks.
                </p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#bcc9c6]/30 text-xs">
                <span className="font-bold text-[#2e9bd7]">Target Impact:</span>
                <span className="text-[#525f75] block mt-0.5">
                  Reducing indigenous capital expenditure on critical diagnostic hardware by up to 60%.
                </span>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-[#edf7fc] p-6 rounded-2xl border border-[#bcc9c6]/30 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-[#bce0f5] flex items-center justify-center text-[#2e9bd7]">
                  <span className="material-symbols-outlined text-[26px]">visibility</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-[#111c2d]">Our Vision</h3>
                <p className="text-xs text-[#525f75] leading-relaxed">
                  Make India self-reliant in critical medical devices, surgical robotics, point-of-care diagnostics, and digital health telemetry via sovereign research and translational acceleration.
                </p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#bcc9c6]/30 text-xs">
                <span className="font-bold text-[#2e9bd7]">Horizon 2030:</span>
                <span className="text-[#525f75] block mt-0.5">
                  Over 200 indigenous CDSCO Class C & D certified surgical technologies deployed pan-India.
                </span>
              </div>
            </div>

            {/* HTIC Triad */}
            <div className="bg-[#edf7fc] p-6 rounded-2xl border border-[#bcc9c6]/30 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-[#bce0f5] flex items-center justify-center text-[#825100]">
                  <span className="material-symbols-outlined text-[26px]">hub</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-[#111c2d]">The HTIC Triad</h3>
                <p className="text-xs text-[#525f75] leading-relaxed">
                  Clinician Immersion + IITM Engineering Rigor + Sovereign Non-Dilutive Capital. A continuous triangle that shields founders from product-market divergence.
                </p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#bcc9c6]/30 text-xs">
                <span className="font-bold text-[#825100]">Institutional Pillar:</span>
                <span className="text-[#525f75] block mt-0.5">
                  Direct partnership with BIRAC, DST, and IIT Madras Central Research Facilities.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership, Steering Committee & Clinical Advisory Board */}
      <section className="w-full bg-[#f9f9ff] py-16 lg:py-20" id="leadership">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
          <div className="max-w-2xl">
            <span className="font-heading text-xs uppercase tracking-widest text-[#2e9bd7] font-bold block mb-1">
              Governance & Stewardship
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111c2d] tracking-tight">
              Leadership & Advisory Directory
            </h2>
            <p className="text-sm text-[#525f75] mt-1">
              Distinguished leaders from IIT Madras, apex government bodies, clinical institutions, mentors, and the dedicated execution team driving national healthcare translation.
            </p>
          </div>

          {/* Directory Filter Tabs */}
          <div className="flex flex-nowrap overflow-x-auto gap-2 pb-2 border-b border-[#bcc9c6]/30 -mx-4 px-4 sm:mx-0 sm:px-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#2e9bd7] text-white shadow-xs'
                    : 'bg-white text-[#525f75] border border-[#bcc9c6]/40 hover:text-[#111c2d]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white p-5 rounded-2xl border border-[#bcc9c6]/30 shadow-xs flex flex-col justify-between hover:shadow-md transition-all group"
              >
                <div className="space-y-3.5">
                  <div className="w-full aspect-square rounded-xl overflow-hidden bg-[#bce0f5] border border-[#bcc9c6]/30 flex items-center justify-center p-2">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-[#edf7fc] text-[#2e9bd7] font-mono text-[10px] font-bold">
                        {member.categoryLabel}
                      </span>
                      <span className="text-[11px] text-[#525f75]">{member.institution}</span>
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#111c2d] mt-1">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#2e9bd7] font-semibold mt-0.5 line-clamp-2">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-xs text-[#525f75] leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#bcc9c6]/30 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.slice(0, 2).map((exp, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium text-[#525f75] bg-[#edf7fc] px-1.5 py-0.5 rounded"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setViewingMember(member)}
                    className="text-[#2e9bd7] hover:underline text-xs font-bold cursor-pointer shrink-0 ml-1"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Milestones */}
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-widest text-[#2e9bd7] font-bold block mb-1">
              14-Year Translation Arc
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111c2d] tracking-tight">
              From Laboratory Inception to National Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MILESTONES_DATA.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#edf7fc] border border-[#bcc9c6]/30 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-heading font-bold text-xl text-[#2e9bd7]">{m.year}</span>
                    {m.badge && (
                      <span className="px-2 py-0.5 rounded bg-white text-[#2e9bd7] text-[10px] font-bold border border-[#bcc9c6]/40">
                        {m.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="font-heading font-bold text-sm text-[#111c2d] mb-1">{m.title}</h4>
                  <p className="text-xs text-[#525f75] leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sovereign Accreditations Strip */}
      <section className="w-full bg-[#f9f9ff] py-14 border-t border-[#bcc9c6]/30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold text-[#6d7a77] uppercase tracking-widest">
              Recognized & Supported By
            </span>
            <h3 className="font-heading font-bold text-lg text-[#111c2d] mt-0.5">
              National Innovation & Regulatory Frameworks
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
            {PARTNERS_LOGOS.slice(0, 5).map((logo, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-xl border border-[#bcc9c6]/30 text-center flex flex-col items-center justify-center shadow-xs"
              >
                {logo.logo ? (
                  <div className="h-10 flex items-center justify-center mb-1">
                    <img src={logo.logo} alt={logo.name} className="max-h-9 max-w-full object-contain" />
                  </div>
                ) : (
                  <span className="material-symbols-outlined text-[#2e9bd7] text-[28px] mb-1">
                    {logo.icon}
                  </span>
                )}
                <span className="font-heading font-bold text-xs text-[#111c2d] line-clamp-1">{logo.name}</span>
                <span className="text-[10px] text-[#525f75] mt-0.5">{logo.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="w-full bg-[#263143] py-14 text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold text-[#bce0f5] uppercase tracking-wider">
              Institutional Collaboration
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
              Join the Forefront of Indigenous MedTech Translation
            </h2>
            <p className="text-xs sm:text-sm text-[#cfdaf2]">
              Whether you are an engineering team with an early bench prototype or a clinician seeking institutional co-development, HTIC delivers sovereign lab facilities, clinical trials, and non-dilutive translation funding.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              onClick={() => onNavigateTab('incubation')}
              className="w-full sm:w-auto px-6 py-3 bg-[#2e9bd7] text-white font-heading font-semibold text-xs rounded-xl hover:bg-[#207eb3] transition-all cursor-pointer"
            >
              Explore Incubation
            </button>
            <button
              onClick={() => onNavigateTab('contact')}
              className="w-full sm:w-auto px-6 py-3 bg-white/10 text-white font-heading font-semibold text-xs rounded-xl hover:bg-white/20 transition-all cursor-pointer border border-white/20"
            >
              Connect with Secretariat
            </button>
          </div>
        </div>
      </section>

      {/* Member Details Modal */}
      {viewingMember && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="member-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111c2d]/65 backdrop-blur-sm"
          onClick={() => setViewingMember(null)}
        >
          <div
            className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-[#bcc9c6]/40 p-4 sm:p-6 space-y-4 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={viewingMember.image}
                  alt={viewingMember.name}
                  className="w-14 h-14 rounded-xl object-cover border border-[#bcc9c6]/30"
                />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2e9bd7]">
                    {viewingMember.categoryLabel}
                  </span>
                  <h3 id="member-modal-title" className="font-heading font-bold text-base text-[#111c2d]">
                    {viewingMember.name}
                  </h3>
                  <p className="text-xs text-[#525f75]">{viewingMember.role}</p>
                </div>
              </div>
              <button
                onClick={() => setViewingMember(null)}
                className="p-1 text-[#525f75] hover:text-[#111c2d]"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="text-xs text-[#525f75] leading-relaxed border-t border-[#bcc9c6]/20 pt-3">
              <p>{viewingMember.bio}</p>
            </div>

            <div className="space-y-1.5 pt-1">
              <p className="text-[11px] font-bold text-[#111c2d] uppercase tracking-wider">
                Domain Specialties:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {viewingMember.expertise.map((exp, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-[#2e9bd7] bg-[#edf7fc] px-2 py-0.5 rounded-lg border border-[#bcc9c6]/30"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setViewingMember(null)}
                className="px-4 py-1.5 bg-[#edf7fc] text-xs font-semibold text-[#111c2d] rounded-lg hover:bg-[#bce0f5]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
