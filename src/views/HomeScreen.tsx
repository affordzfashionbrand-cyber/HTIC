import React, { useState } from 'react';
import { STARTUPS_DATA, PROGRAMS_DATA, GALLERY_DATA } from '../data/mockData';

interface HomeScreenProps {
  onNavigateTab: (tab: string) => void;
  onOpenStartup: (id: string) => void;
  onOpenEligibility: () => void;
  onOpenTour: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigateTab,
  onOpenStartup,
  onOpenEligibility,
  onOpenTour
}) => {
  const [programFilter, setProgramFilter] = useState<'all' | 'birac' | 'dst'>('all');
  const [startupCategory, setStartupCategory] = useState<'all' | 'devices' | 'diagnostics' | 'ai'>('all');

  const filteredPrograms = PROGRAMS_DATA.filter((p) => {
    if (programFilter === 'all') return true;
    return p.category === programFilter;
  });

  const featuredStartups = STARTUPS_DATA.filter((s) => {
    if (startupCategory === 'all') return true;
    if (startupCategory === 'devices') return s.sector === 'robotics' || s.sector === 'assistive';
    if (startupCategory === 'diagnostics') return s.sector === 'diagnostics';
    if (startupCategory === 'ai') return s.sector === 'ai';
    return true;
  });

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-white">
        {/* Ambient atmospheric gradients */}
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-[#2e9bd7]/5 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-[420px] h-[420px] rounded-full bg-[#d6e3fe]/40 blur-3xl pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-8 pb-14 lg:pt-14 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 flex flex-col items-start space-y-5 z-10">
              <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-[#edf7fc] text-[#3d4947] text-xs font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#2e9bd7] animate-pulse"></span>
                <span className="font-bold text-[#2e9bd7]">Supported by BIRAC</span>
                <span className="text-[#bcc9c6] hidden sm:inline">|</span>
                <span className="text-[#525f75]">IIT Madras Research Park</span>
              </div>

              <h1 className="font-heading text-2xl sm:text-4xl lg:text-[46px] lg:leading-[54px] font-bold text-[#111c2d] tracking-tight text-balance">
                Building the Future of Healthcare, <span className="text-[#2e9bd7]">One Innovation</span> at a Time
              </h1>

              <p className="text-sm sm:text-lg text-[#525f75] leading-relaxed max-w-xl">
                IIT Madras – HTIC MedTech Incubator supports innovators, entrepreneurs and early-stage startups in transforming healthcare ideas into meaningful, market-ready solutions.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto">
                <button
                  onClick={() => onNavigateTab('incubation')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2e9bd7] text-white font-heading font-semibold text-sm rounded-xl shadow-md hover:bg-[#207eb3] hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Explore Incubation</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <button
                  onClick={() => onNavigateTab('partnerships')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#edf7fc] text-[#111c2d] font-heading font-semibold text-sm rounded-xl hover:bg-[#e7eeff] transition-all cursor-pointer border border-[#bcc9c6]/40"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#2e9bd7]">handshake</span>
                  <span>Partner With Us</span>
                </button>
              </div>

              {/* Sub-strip feature */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 pt-2 text-xs text-[#525f75]">
                <button
                  onClick={onOpenEligibility}
                  className="inline-flex items-center gap-1.5 text-[#2e9bd7] font-semibold hover:underline cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>Check Your TRL Score & Qualified Grants</span>
                </button>
                <span className="text-[#bcc9c6] hidden sm:inline">·</span>
                <button
                  onClick={onOpenTour}
                  className="hover:text-[#2e9bd7] transition-colors cursor-pointer"
                >
                  Visit Prototyping Cleanrooms
                </button>
              </div>
            </div>

            {/* Right Hero Visual Panel */}
            <div className="lg:col-span-6 relative w-full max-w-lg mx-auto lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#e7eeff] border border-[#bcc9c6]/30">
                <img
                  className="w-full h-[320px] sm:h-[420px] lg:h-[460px] object-cover"
                  src="/images/other/banner-slide-1_4fa419.jpg"
                  alt="IIT Madras HTIC MedTech Incubator - Research Park Infrastructure"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#263143]/90 via-[#263143]/25 to-transparent"></div>

                {/* Floating Telemetry Metric 1 (Top Left) */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#263143]/90 backdrop-blur-md rounded-xl p-2.5 sm:p-3 text-[#ecf1ff] shadow-lg max-w-[150px] sm:max-w-[180px] border border-white/10">
                  <div className="flex items-center justify-between pb-1">
                    <span className="text-[10px] sm:text-[11px] font-mono text-[#bce0f5] uppercase tracking-wider">
                      Kinematics
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#bce0f5] animate-ping"></span>
                  </div>
                  <p className="font-heading font-bold text-base sm:text-lg text-white">0.18 mm</p>
                  <p className="text-[10px] sm:text-[11px] text-[#cfdaf2]">Surgical tool precision</p>
                </div>

                {/* Floating Telemetry Metric 2 (Top Right - Desktop/Tablet) */}
                <div className="hidden sm:block absolute top-4 right-4 bg-[#263143]/90 backdrop-blur-md rounded-xl p-3 text-[#ecf1ff] shadow-lg text-right border border-white/10">
                  <span className="text-[11px] font-semibold text-[#ffddb8]">CDSCO Class B & C Ready</span>
                  <p className="font-heading font-bold text-sm text-white mt-0.5">IEC 60601-1</p>
                  <span className="text-[11px] text-[#cfdaf2]">Compliance validated</span>
                </div>

                {/* Bottom Telemetry Wave Strip */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#263143]/90 backdrop-blur-md rounded-xl p-2.5 sm:p-4 text-[#ecf1ff] flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 border border-white/10">
                  <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#207eb3]/50 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[#bce0f5] text-[18px] sm:text-[22px]">vital_signs</span>
                    </div>
                    <div>
                      <p className="text-[11px] sm:text-xs font-bold text-[#bce0f5] uppercase tracking-wider">
                        Continuous Clinical Telemetry
                      </p>
                      <p className="text-[10px] sm:text-xs text-[#ecf1ff] line-clamp-1 sm:line-clamp-none">
                        Live multi-parametric signal testing on surgical phantoms
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block w-28 h-7">
                    <svg className="w-full h-full text-[#bce0f5]" fill="none" viewBox="0 0 100 24">
                      <path
                        d="M0,12 L20,12 L25,4 L30,20 L35,8 L40,16 L45,12 L70,12 L75,2 L80,22 L85,12 L100,12"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Macro Institutional Metric Stat Cards */}
          <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div className="p-3.5 sm:p-5 rounded-2xl bg-[#edf7fc] border border-[#bcc9c6]/30 flex flex-col justify-between shadow-xs">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#bce0f5] flex items-center justify-center text-[#2e9bd7] mb-2 sm:mb-3">
                <span className="material-symbols-outlined text-[18px] sm:text-[22px]">license</span>
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-3xl font-bold text-[#111c2d] tracking-tight">25+</h3>
                <p className="font-heading font-semibold text-xs sm:text-sm text-[#111c2d] mt-0.5 sm:mt-1">MedTech Patents</p>
                <p className="text-[10px] sm:text-xs text-[#525f75] mt-0.5">Filed & granted globally</p>
              </div>
            </div>

            <div className="p-3.5 sm:p-5 rounded-2xl bg-[#edf7fc] border border-[#bcc9c6]/30 flex flex-col justify-between shadow-xs">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#bce0f5] flex items-center justify-center text-[#2e9bd7] mb-2 sm:mb-3">
                <span className="material-symbols-outlined text-[18px] sm:text-[22px]">rocket_launch</span>
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-3xl font-bold text-[#111c2d] tracking-tight">80+</h3>
                <p className="font-heading font-semibold text-xs sm:text-sm text-[#111c2d] mt-0.5 sm:mt-1">Startups Incubated</p>
                <p className="text-[10px] sm:text-xs text-[#525f75] mt-0.5">Deep MedTech & diagnostics</p>
              </div>
            </div>

            <div className="p-3.5 sm:p-5 rounded-2xl bg-[#edf7fc] border border-[#bcc9c6]/30 flex flex-col justify-between shadow-xs">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#bce0f5] flex items-center justify-center text-[#825100] mb-2 sm:mb-3">
                <span className="material-symbols-outlined text-[18px] sm:text-[22px]">account_balance</span>
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-3xl font-bold text-[#111c2d] tracking-tight">₹41+Cr</h3>
                <p className="font-heading font-semibold text-xs sm:text-sm text-[#111c2d] mt-0.5 sm:mt-1">Grants Catalyzed</p>
                <p className="text-[10px] sm:text-xs text-[#525f75] mt-0.5">Dilution-free & seed funding</p>
              </div>
            </div>

            <div className="p-3.5 sm:p-5 rounded-2xl bg-[#edf7fc] border border-[#bcc9c6]/30 flex flex-col justify-between shadow-xs">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#bce0f5] flex items-center justify-center text-[#2e9bd7] mb-2 sm:mb-3">
                <span className="material-symbols-outlined text-[18px] sm:text-[22px]">trending_up</span>
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-3xl font-bold text-[#111c2d] tracking-tight">₹10+Cr</h3>
                <p className="font-heading font-semibold text-xs sm:text-sm text-[#111c2d] mt-0.5 sm:mt-1">Angel & VC Capital</p>
                <p className="text-[10px] sm:text-xs text-[#525f75] mt-0.5">Early stage investment mobilized</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST STRIP */}
      <section className="w-full bg-[#bce0f5] py-4 sm:py-5 border-y border-[#bcc9c6]/30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 text-center text-xs sm:text-sm font-semibold text-[#111c2d]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#2e9bd7] text-[20px]">biotech</span>
              <span>BIRAC Supported BioNEST</span>
            </div>
            <span className="text-[#bcc9c6] hidden lg:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#2e9bd7] text-[20px]">health_and_safety</span>
              <span>Healthcare Technology Innovation Centre (HTIC)</span>
            </div>
            <span className="text-[#bcc9c6] hidden lg:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#2e9bd7] text-[20px]">hub</span>
              <span>National MedTech Ecosystem</span>
            </div>
            <span className="text-[#bcc9c6] hidden lg:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#2e9bd7] text-[20px]">domain</span>
              <span>Research + Industry + Clinical Network</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHO WE ARE */}
      <section className="w-full py-16 lg:py-20 bg-white" id="about">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#e7eeff]">
                <img
                  alt="Biomedical engineer testing cleanroom medical device at IIT Madras Research Park"
                  className="w-full h-[320px] sm:h-[440px] object-cover"
                  src="/images/home/IMG_8422-e1533203955302_e657d4.jpg"
                />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-lg border border-[#bcc9c6]/30">
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#2e9bd7] text-white flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px] sm:text-[20px]">precision_manufacturing</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xs sm:text-sm text-[#111c2d]">
                        Integrated MedTech Prototyping
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#525f75] mt-0.5">
                        IITM Research Park Advanced Testing and ISO Cleanroom Facility
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Column */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              <div className="inline-flex items-center gap-1.5 text-[#2e9bd7] font-heading font-bold text-xs uppercase tracking-wider">
                <span className="material-symbols-outlined text-[18px]">verified_user</span>
                <span>Who We Are</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111c2d] tracking-tight">
                Where Healthcare Innovation Meets Opportunity
              </h2>
              <p className="font-heading text-base font-semibold text-[#2e9bd7]">
                A dedicated wing of the Healthcare Technology Innovation Centre (HTIC), IIT Madras.
              </p>
              <p className="text-sm text-[#525f75] leading-relaxed">
                IIT Madras – HTIC MedTech Incubator (MTI) is a specialized MedTech incubation ecosystem supported by BIRAC and established as a dedicated wing of the Healthcare Technology Innovation Centre (HTIC), IIT Madras. HTIC–MTI brings together entrepreneurs, researchers, healthcare professionals, industry partners and technology experts to develop solutions that address real healthcare needs.
              </p>

              {/* Institutional Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-[#edf7fc] border border-[#bcc9c6]/30 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#bce0f5] text-[#2e9bd7] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">stethoscope</span>
                  </div>
                  <h5 className="font-heading font-bold text-sm text-[#111c2d]">Clinical Immersion</h5>
                  <p className="text-xs text-[#525f75] leading-snug">
                    Direct bedside access to teaching hospitals and leading surgical teams.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#edf7fc] border border-[#bcc9c6]/30 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#bce0f5] text-[#2e9bd7] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">gavel</span>
                  </div>
                  <h5 className="font-heading font-bold text-sm text-[#111c2d]">Regulatory Navigation</h5>
                  <p className="text-xs text-[#525f75] leading-snug">
                    CDSCO, CE, and US-FDA conformity assessment & test protocols.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#edf7fc] border border-[#bcc9c6]/30 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#bce0f5] text-[#2e9bd7] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">memory</span>
                  </div>
                  <h5 className="font-heading font-bold text-sm text-[#111c2d]">Deep Bio-Engineering</h5>
                  <p className="text-xs text-[#525f75] leading-snug">
                    Optics, microfluidics, embedded sensors, and medical-grade AI.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigateTab('about')}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#525f75] text-white font-heading font-semibold text-xs rounded-xl hover:bg-[#3a475c] transition-all cursor-pointer"
                >
                  <span>Know More About HTIC–MTI Governance</span>
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: MORE THAN INCUBATION (8-Feature Grid) */}
      <section className="w-full py-16 lg:py-20 bg-[#edf7fc]" id="incubation-overview">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 text-[#2e9bd7] font-heading font-bold text-xs uppercase tracking-wider mb-1">
              <span className="material-symbols-outlined text-[18px]">medical_services</span>
              <span>Comprehensive Incubation Value</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111c2d] tracking-tight">
              More Than Incubation
            </h2>
            <p className="text-base text-[#525f75] mt-2">
              Building a healthcare product requires more than an idea. It requires technology, clinical understanding, validation, business expertise and the right ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: 'corporate_fare',
                title: 'Workspace & Infrastructure',
                desc: 'ISO standard wet chemistry labs, electronics fabrication benches, cleanroom assembly areas, and high-precision 3D bioprinting suites.',
                link: 'Explore cleanroom tiers'
              },
              {
                icon: 'clinical_notes',
                title: 'Mentoring',
                desc: 'Direct advisory panels from active clinicians, senior biomedical engineers, MedTech regulatory strategists, and venture capital partners.',
                link: 'View mentor directory'
              },
              {
                icon: 'share',
                title: 'Healthcare Ecosystem',
                desc: 'Institutional pipeline directly integrated with apex government hospitals, private specialty networks, and rural primary health centers.',
                link: 'Hospital partners list'
              },
              {
                icon: 'construction',
                title: 'Product Development',
                desc: 'End-to-end hardware prototyping, optical system calibration, multi-layer PCB design, biocompatible casing, and firmware optimization.',
                link: 'Prototyping equipment'
              },
              {
                icon: 'trending_up',
                title: 'Business Support',
                desc: 'MedTech go-to-market strategies, clinical health economics validation, hospital procurement pathways, and Ayushman Bharat reimbursement structuring.',
                link: 'Market pathways'
              },
              {
                icon: 'factory',
                title: 'Industrial Interactions',
                desc: 'Bilateral partnerships with major biomedical original equipment manufacturers for mass tooling, supply chain, and pilot manufacturing.',
                link: 'Corporate alliances'
              },
              {
                icon: 'payments',
                title: 'Funding Opportunities',
                desc: 'Direct access and facilitation for BIRAC SPARSH, DST NIDHI PRAYAS, seed catalytic funding, and premier healthcare VC syndicate rounds.',
                link: 'Grant schemes'
              },
              {
                icon: 'model_training',
                title: 'Training & Capacity Building',
                desc: 'Specialized masterclasses on IEC 60601-1 electrical safety, biomedical software lifecycle (IEC 62304), Good Clinical Practice (GCP), and IP filing.',
                link: 'Upcoming masterclasses'
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#bcc9c6]/30 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-[#edf7fc] group-hover:bg-[#2e9bd7] group-hover:text-white text-[#2e9bd7] flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-[24px]">{card.icon}</span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#111c2d] group-hover:text-[#2e9bd7] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#525f75] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-4 flex items-center text-[#2e9bd7] font-heading font-semibold text-xs">
                  <span>{card.link}</span>
                  <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: INNOVATION JOURNEY ('From Idea to Impact') */}
      <section className="w-full py-16 lg:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1 text-[#2e9bd7] font-heading font-bold text-xs uppercase tracking-wider mb-1">
              <span className="material-symbols-outlined text-[18px]">alt_route</span>
              <span>From Idea to Impact</span>
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111c2d] tracking-tight">
              A Structured Journey for Healthcare Innovators
            </h2>
            <p className="text-sm text-[#525f75] mt-2">
              De-risking medical devices through clinical validation milestones, strict regulatory checkpoints, and venture scaling frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                trl: 'TRL 1–3',
                title: 'The Curious',
                subtitle: 'Explore and validate clinical opportunity',
                desc: 'Intensive clinical immersion, unmet clinical need validation, systematic literature review, initial concept risk analysis, and provisional patent filing.',
                outcome: 'Need Validation Review',
                color: 'border-[#2e9bd7]'
              },
              {
                num: '02',
                trl: 'TRL 4–5',
                title: 'The Builder',
                subtitle: 'Build and refine your functional prototype',
                desc: 'Functional benchtop testing, custom PCB fabrication, biocompatibility assessments, firmware refinement, cleanroom batch assembly, and pilot data.',
                outcome: 'Benchtop Proof of Concept',
                color: 'border-[#2e9bd7]'
              },
              {
                num: '03',
                trl: 'TRL 6–7',
                title: 'The Marketer',
                subtitle: 'Validate clinical efficacy & commercialize',
                desc: 'Formal clinical safety trials at partner hospitals, CDSCO regulatory Device Master File compilation, ISO 13485 audit readiness, and pricing studies.',
                outcome: 'CDSCO Trial Clearance',
                color: 'border-[#825100]'
              },
              {
                num: '04',
                trl: 'TRL 8–9',
                title: 'The Operator',
                subtitle: 'Scale the business and healthcare team',
                desc: 'Commercial hospital procurement onboarding, OEM contract manufacturing integration, institutional funding round, and global regulatory filing (CE/FDA).',
                outcome: 'Market Commercialization',
                color: 'border-[#207eb3]'
              }
            ].map((stage, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#edf7fc] border border-[#bcc9c6]/30 shadow-xs flex flex-col justify-between relative overflow-hidden group hover:bg-[#e7eeff] transition-colors"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${stage.color.replace('border-', 'bg-')}`}></div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-heading font-bold text-2xl text-[#2e9bd7]">{stage.num}</span>
                    <span className="px-2 py-0.5 rounded bg-white text-[#2e9bd7] font-mono text-[11px] font-bold border border-[#bcc9c6]/40">
                      {stage.trl}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#111c2d] mb-0.5">{stage.title}</h3>
                  <p className="text-xs font-semibold text-[#525f75] mb-3">{stage.subtitle}</p>
                  <p className="text-xs text-[#525f75] leading-relaxed">{stage.desc}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#bcc9c6]/30 flex items-center gap-1.5 text-xs text-[#2e9bd7] font-semibold">
                  <span className="material-symbols-outlined text-[16px]">task_alt</span>
                  <span>{stage.outcome}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigateTab('incubation')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2e9bd7] text-white font-heading font-semibold text-xs rounded-xl hover:bg-[#207eb3] transition-colors cursor-pointer"
            >
              <span>Explore Detailed 4-Stage Incubation Framework</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>


      {/* SECTION 7: PROGRAMS & FUNDING (Tabbed View) */}
      <section className="w-full py-16 lg:py-20 bg-white" id="programs-overview">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-flex items-center gap-1 text-[#2e9bd7] font-heading font-bold text-xs uppercase tracking-wider mb-1">
                <span className="material-symbols-outlined text-[18px]">auto_stories</span>
                <span>Funding & Acceleration Grants</span>
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111c2d] tracking-tight">
                Support for Different Stages of Innovation
              </h2>
              <p className="text-sm text-[#525f75] mt-1">
                Access non-dilutive government grants, specialized lab fellowships, and proof-of-concept capital.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#edf7fc] border border-[#bcc9c6]/30 self-start md:self-auto">
              <button
                onClick={() => setProgramFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  programFilter === 'all'
                    ? 'bg-[#2e9bd7] text-white shadow-xs'
                    : 'text-[#525f75] hover:text-[#111c2d]'
                }`}
              >
                All Grants
              </button>
              <button
                onClick={() => setProgramFilter('birac')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  programFilter === 'birac'
                    ? 'bg-[#2e9bd7] text-white shadow-xs'
                    : 'text-[#525f75] hover:text-[#111c2d]'
                }`}
              >
                BIRAC Supported
              </button>
              <button
                onClick={() => setProgramFilter('dst')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  programFilter === 'dst'
                    ? 'bg-[#2e9bd7] text-white shadow-xs'
                    : 'text-[#525f75] hover:text-[#111c2d]'
                }`}
              >
                DST NIDHI
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                className="p-6 rounded-2xl bg-[#edf7fc] border border-[#bcc9c6]/30 shadow-xs flex flex-col justify-between hover:border-[#2e9bd7]/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded bg-white text-[#111c2d] text-[11px] font-semibold border border-[#bcc9c6]/40">
                      {prog.categoryLabel}
                    </span>
                    <span className="font-heading font-bold text-sm text-[#2e9bd7]">
                      {prog.grantAmount}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#111c2d]">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-[#2e9bd7] font-medium mb-3">
                    {prog.subTitle}
                  </p>
                  <p className="text-xs text-[#525f75] leading-relaxed">
                    {prog.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#bcc9c6]/30 flex items-center justify-between">
                  <span className="text-xs text-[#525f75]">{prog.stageTarget}</span>
                  <button
                    onClick={() => onNavigateTab('incubation')}
                    className="text-[#2e9bd7] font-heading font-bold text-xs flex items-center hover:underline cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: STARTUPS & PORTFOLIO SPOTLIGHT */}
      <section className="w-full py-16 lg:py-20 bg-[#f9f9ff]" id="startups-overview">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-flex items-center gap-1 text-[#2e9bd7] font-heading font-bold text-xs uppercase tracking-wider mb-1">
                <span className="material-symbols-outlined text-[18px]">hub</span>
                <span>HTIC Portfolio</span>
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111c2d] tracking-tight">
                Building the Next Generation of Healthcare Companies
              </h2>
              <p className="text-sm text-[#525f75] mt-1">
                Explore breakthrough MedTech ventures originating and scaling within the HTIC–MTI ecosystem.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setStartupCategory('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  startupCategory === 'all'
                    ? 'bg-[#2e9bd7] text-white'
                    : 'bg-white text-[#525f75] border border-[#bcc9c6]/40 hover:border-[#2e9bd7]'
                }`}
              >
                All MedTech
              </button>
              <button
                onClick={() => setStartupCategory('devices')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  startupCategory === 'devices'
                    ? 'bg-[#2e9bd7] text-white'
                    : 'bg-white text-[#525f75] border border-[#bcc9c6]/40 hover:border-[#2e9bd7]'
                }`}
              >
                Medical Devices
              </button>
              <button
                onClick={() => setStartupCategory('diagnostics')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  startupCategory === 'diagnostics'
                    ? 'bg-[#2e9bd7] text-white'
                    : 'bg-white text-[#525f75] border border-[#bcc9c6]/40 hover:border-[#2e9bd7]'
                }`}
              >
                Diagnostics
              </button>
              <button
                onClick={() => setStartupCategory('ai')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  startupCategory === 'ai'
                    ? 'bg-[#2e9bd7] text-white'
                    : 'bg-white text-[#525f75] border border-[#bcc9c6]/40 hover:border-[#2e9bd7]'
                }`}
              >
                Digital Health & AI
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredStartups.slice(0, 4).map((startup) => (
              <div
                key={startup.id}
                className="p-5 rounded-2xl bg-white border border-[#bcc9c6]/30 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-[#edf7fc] text-[#2e9bd7] font-heading font-bold text-sm flex items-center justify-center shrink-0 group-hover:bg-[#2e9bd7] group-hover:text-white transition-colors overflow-hidden border border-[#bcc9c6]/30">
                      {startup.logo ? (
                        <img src={startup.logo} alt={startup.name} className="w-full h-full object-contain p-1" />
                      ) : (
                        startup.initials
                      )}
                    </div>
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#bce0f5] text-[#2e9bd7]">
                      {startup.stage}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-base text-[#111c2d] group-hover:text-[#2e9bd7] transition-colors leading-snug">
                    {startup.name}
                  </h4>
                  <div className="flex flex-wrap gap-1.5 my-2">
                    <span className="text-[11px] font-semibold text-[#2e9bd7]">
                      {startup.sectorLabel}
                    </span>
                    {startup.womenLed && (
                      <span className="text-[11px] font-semibold text-[#825100]">
                        · Women-Led
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#525f75] leading-relaxed line-clamp-3">
                    {startup.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#bcc9c6]/30 flex items-center justify-between">
                  <span className="text-[11px] text-[#525f75]">{startup.patentStatus}</span>
                  <button
                    onClick={() => onOpenStartup(startup.id)}
                    className="text-[#2e9bd7] font-heading font-bold text-xs flex items-center hover:underline cursor-pointer"
                  >
                    <span>View Profile</span>
                    <span className="material-symbols-outlined text-[16px] ml-0.5">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-[#bce0f5] text-center flex flex-col sm:flex-row items-center justify-between gap-3 border border-[#bcc9c6]/30">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#2e9bd7] text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">database</span>
              </div>
              <p className="font-heading font-bold text-sm text-[#111c2d] text-left">
                + 38 More Innovations in Active Incubation
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('startups')}
              className="inline-flex items-center gap-1 text-[#2e9bd7] font-heading font-bold text-xs hover:underline cursor-pointer"
            >
              <span>Search Complete Portfolio Directory</span>
              <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION: AUTHENTIC FACILITY & CLEANROOM GALLERY */}
      <section className="w-full py-16 lg:py-20 bg-white border-t border-[#bcc9c6]/30" id="facility-gallery">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-flex items-center gap-1 text-[#2e9bd7] font-heading font-bold text-xs uppercase tracking-wider mb-1">
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                <span>Infrastructure & Facility Archive</span>
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111c2d] tracking-tight">
                Inside HTIC–MTI Labs & Cleanrooms
              </h2>
              <p className="text-sm text-[#525f75] mt-1">
                Take a visual tour through our ISO Class 7/8 cleanrooms, rapid prototyping bays, and surgical telemetry suites.
              </p>
            </div>
            <button
              onClick={onOpenTour}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#edf7fc] text-[#2e9bd7] border border-[#bcc9c6]/40 hover:bg-[#bce0f5] font-heading font-semibold text-xs rounded-xl transition-all cursor-pointer self-start md:self-auto"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>Schedule On-Site Tour</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_DATA.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-[#bce0f5] border border-[#bcc9c6]/30 shadow-xs hover:shadow-md transition-all aspect-square"
              >
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111c2d]/90 via-[#111c2d]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 text-white">
                  <span className="text-[10px] font-mono text-[#bce0f5] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <p className="font-heading font-medium text-xs text-white leading-snug mt-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: PARTNERSHIP & INCUBATION DUAL CTA */}
      <section className="w-full py-16 lg:py-20 bg-[#263143] text-[#ecf1ff] relative overflow-hidden" id="partner">
        <div className="absolute -right-20 top-0 w-96 h-96 rounded-full bg-[#2e9bd7]/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -left-20 bottom-0 w-96 h-96 rounded-full bg-[#825100]/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Ready to Transform Healthcare with IIT Madras?
            </h2>
            <p className="text-base text-[#cfdaf2] leading-relaxed">
              Whether you are an aspiring MedTech founder with an early-stage prototype or a healthcare network seeking to pilot cutting-edge medical technologies, HTIC provides the institutional backing you need.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                onClick={() => onNavigateTab('incubation')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#2e9bd7] text-white font-heading font-semibold text-sm rounded-xl shadow-lg hover:bg-[#207eb3] transition-all cursor-pointer"
              >
                <span>Apply for Incubation</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <button
                onClick={() => onNavigateTab('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white font-heading font-semibold text-sm rounded-xl hover:bg-white/20 transition-all cursor-pointer border border-white/20"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <span>Contact Secretariat</span>
              </button>
            </div>

            <p className="text-xs text-[#cfdaf2]/80 pt-2">
              Direct questions? Speak with our incubation committee at{' '}
              <a href="mailto:mti-incubator@htic.iitm.ac.in" className="text-[#bce0f5] underline">
                mti-incubator@htic.iitm.ac.in
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
