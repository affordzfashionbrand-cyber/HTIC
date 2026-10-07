import React, { useState } from 'react';
import { submitToGoogleSheet } from '../utils/formSubmit';

interface PartnershipsScreenProps {
  onNavigateTab: (tab: string) => void;
}

export const PartnershipsScreen: React.FC<PartnershipsScreenProps> = ({ onNavigateTab }) => {
  const [partnerType, setPartnerType] = useState('Hospital');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    institutionName: '',
    contactPerson: '',
    email: '',
    phone: '',
    partnershipTrack: 'Hospitals & Healthcare Institutions',
    proposalScope: ''
  });

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitToGoogleSheet('PARTNERSHIP_INQUIRIES', inquiryData);
      setInquirySubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full bg-[#edf7fc] overflow-hidden py-14 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2e9bd7]/5 via-transparent to-[#edf7fc] pointer-events-none"></div>
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#2e9bd7]/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#bce0f5] text-[#2e9bd7] text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">handshake</span>
                <span>Institutional Alliances & Clinical Trials</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111c2d] tracking-tight">
                Building Stronger Healthcare Innovation Together
              </h1>
              <p className="text-base text-[#525f75] leading-relaxed max-w-2xl">
                Healthcare innovation achieves transformative scale when clinicians, engineers, industry leaders, global academic institutions, and specialized investors unite. HTIC–MTI serves as the operational bridge translating clinical gaps into validated, commercially viable technologies.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href="#alliance-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2e9bd7] text-white font-heading font-semibold text-xs rounded-xl hover:bg-[#207eb3] transition-colors cursor-pointer"
                >
                  <span>Initiate Partnership Inquiry</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                </a>
                <button
                  onClick={() => onNavigateTab('incubation')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#2e9bd7] border border-[#bcc9c6]/40 font-heading font-semibold text-xs rounded-xl hover:bg-[#bce0f5] transition-colors cursor-pointer"
                >
                  <span>Explore Incubation Tracks</span>
                </button>
              </div>
            </div>

            {/* Visual Mosaic Panel */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white border border-[#bcc9c6]/30 relative group">
                <img
                  className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  alt="Biomedical engineering laboratory at IIT Madras Research Park with surgeons calibrating robotic surgical instruments"
                  src="/images/home/IMG-20191123-WA0029_1879d4.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#263143]/85 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 border border-white/40">
                  <div>
                    <p className="text-[10px] sm:text-[11px] font-bold text-[#2e9bd7] uppercase tracking-wider">Clinical Co-Design Lab</p>
                    <p className="font-heading font-bold text-xs text-[#111c2d]">5th Floor, D-Block Prototyping Facility</p>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#edf7fc] text-[#2e9bd7] font-mono text-[10px] sm:text-[11px] font-bold self-start sm:self-auto">
                    Class 10k Ready
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-[#bcc9c6]/30 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between text-[#2e9bd7] mb-2">
                <span className="material-symbols-outlined text-[20px] sm:text-[24px]">local_hospital</span>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#525f75]">Tier-1 Network</span>
              </div>
              <div>
                <div className="font-heading text-xl sm:text-3xl font-bold text-[#111c2d]">25+</div>
                <p className="text-[10px] sm:text-xs text-[#525f75] mt-1">Apex Hospital Networks & Colleges</p>
              </div>
            </div>

            <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-[#bcc9c6]/30 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between text-[#2e9bd7] mb-2">
                <span className="material-symbols-outlined text-[20px] sm:text-[24px]">precision_manufacturing</span>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#525f75]">Manufacturing</span>
              </div>
              <div>
                <div className="font-heading text-xl sm:text-3xl font-bold text-[#111c2d]">40+</div>
                <p className="text-[10px] sm:text-xs text-[#525f75] mt-1">Industry & MedTech OEM Partners</p>
              </div>
            </div>

            <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-[#bcc9c6]/30 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between text-[#2e9bd7] mb-2">
                <span className="material-symbols-outlined text-[20px] sm:text-[24px]">biotech</span>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#525f75]">IITM Ecosystem</span>
              </div>
              <div>
                <div className="font-heading text-xl sm:text-3xl font-bold text-[#111c2d]">18+</div>
                <p className="text-[10px] sm:text-xs text-[#525f75] mt-1">Deep-Tech Academic Labs</p>
              </div>
            </div>

            <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-[#bcc9c6]/30 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between text-[#825100] mb-2">
                <span className="material-symbols-outlined text-[20px] sm:text-[24px]">account_balance</span>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#825100]">Syndicated</span>
              </div>
              <div>
                <div className="font-heading text-xl sm:text-3xl font-bold text-[#111c2d]">₹120Cr+</div>
                <p className="text-[10px] sm:text-xs text-[#525f75] mt-1">Grants & Co-Investments Mobilized</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 CORE INSTITUTIONAL PARTNERSHIP TRACKS */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20" id="tracks">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <span className="font-heading text-xs uppercase tracking-widest text-[#2e9bd7] font-bold block mb-1">
              Collaborative Architecture
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111c2d]">
              6 Core Institutional Partnership Tracks
            </h2>
            <p className="text-sm text-[#525f75] mt-1">
              Structured conduits tailored for clinical institutions, deep-tech researchers, multi-national OEMs, and healthcare impact funds.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#525f75]">
            <span className="w-2 h-2 rounded-full bg-[#2e9bd7]"></span>
            <span>Governed by IIT Madras Translational Framework</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: 'apartment',
              title: 'Hospitals & Healthcare Institutions',
              badge: 'Bedside Co-Design',
              desc: 'Clinical immersion, bedside observational validation, investigator-led device pilots, and Institutional Ethics Committee (IEC) cleared early-feasibility trials across 3,500+ affiliated beds.',
              points: [
                'Apollo Hospitals, CMC Vellore, Sankara Nethralaya, AIIMS partner nodes.',
                'Fast-track clinical feedback loops embedded directly inside ORs and ICUs.'
              ],
              cta: 'Partner as Clinical Site'
            },
            {
              icon: 'precision_manufacturing',
              title: 'Industry & MedTech OEMs',
              badge: 'Co-Development',
              desc: 'Bilateral R&D co-development, contract engineering, precision manufacturing, supply-chain scale, and corporate technology licensing with global biomedical leaders.',
              points: [
                'IEC 60601 pre-certification & Class 10,000 cleanroom rapid tooling.',
                'OEM pilot production lines adhering to ISO 13485 quality frameworks.'
              ],
              cta: 'Explore Industry R&D Track'
            },
            {
              icon: 'school',
              title: 'Universities & Research Institutions',
              badge: 'Academic IP',
              desc: 'Joint translational research grants, faculty cross-appointments, PhD clinician fellowships, and fundamental engineering IP commercialization.',
              points: [
                'Cross-collaboration with IITM Biotech, Applied Mechanics & Electrical Eng.',
                'Dual mentorship frameworks bridging medical faculties with engineers.'
              ],
              cta: 'Connect for Academic Research'
            },
            {
              icon: 'monetization_on',
              title: 'Investors & Healthcare VCs',
              badge: 'Venture Pipeline',
              desc: 'Direct access to de-risked, clinically validated, and patent-protected deep-tech MedTech pipelines from lab-scale benchtop to commercial market clearance.',
              points: [
                'Pre-screened cohort pitch rounds and verified TRL validation dossiers.',
                'Co-investment syndicates with BIRAC & institutional equity match schemes.'
              ],
              cta: 'Join Investor Syndicate'
            },
            {
              icon: 'account_balance',
              title: 'Government & Innovation Ecosystems',
              badge: 'Public Health Scale',
              desc: 'Public health deployment, Ayushman Bharat health-post integration, translational grant structuring, and national health policy sandboxes.',
              points: [
                'Key alliances: BIRAC, Department of Biotechnology (DBT), ICMR, MeitY.',
                'Integrated support for NITI Aayog Atal Innovation Mission guidelines.'
              ],
              cta: 'Review Ecosystem Engagements'
            },
            {
              icon: 'hub',
              title: 'Technology & Ecosystem Partners',
              badge: 'Hardware & Cloud',
              desc: 'Cloud biomedical telemetry, AI/ML compute infrastructure, FPGA/embedded hardware tools, biocompatible resin sourcing, and regulatory consulting.',
              points: [
                'Keysight RF test suites, Formlabs biocompatible 3D fabrication access.',
                'CDSCO navigators and specialized biomedical IP attorney panels.'
              ],
              cta: 'Become a Technology Partner'
            }
          ].map((track, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#bcc9c6]/30 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#edf7fc] text-[#2e9bd7] group-hover:bg-[#2e9bd7] group-hover:text-white flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-[24px]">{track.icon}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#bce0f5] text-[#2e9bd7]">
                    {track.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-base text-[#111c2d] group-hover:text-[#2e9bd7] transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-xs text-[#525f75] mt-2 leading-relaxed">
                    {track.desc}
                  </p>
                </div>

                <div className="space-y-1.5 pt-1 text-xs text-[#525f75]">
                  {track.points.map((pt, pidx) => (
                    <div key={pidx} className="flex items-start gap-1.5">
                      <span className="material-symbols-outlined text-[#2e9bd7] text-[16px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#bcc9c6]/20">
                <a
                  href="#alliance-form"
                  onClick={() => setPartnerType(track.title)}
                  className="inline-flex items-center text-[#2e9bd7] font-heading font-bold text-xs hover:underline gap-1 cursor-pointer"
                >
                  <span>{track.cta}</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ALLIANCE INQUIRY & STRATEGIC ENGAGEMENT FORM */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16" id="alliance-form">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 border border-[#bcc9c6]/30 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#2e9bd7]/10 text-[#2e9bd7] text-xs font-bold uppercase tracking-wider">
                Institutional Partnership Inquiry
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111c2d] tracking-tight">
                Initiate an Institutional or Strategic Collaboration
              </h2>
              <p className="text-sm text-[#525f75] leading-relaxed">
                Connect directly with the HTIC–MTI alliance office to discuss clinical trial nodes, bilateral R&D sponsoring, incubation pipelines, joint grants, or faculty research translation.
              </p>

              {inquirySubmitted ? (
                <div className="p-6 rounded-2xl bg-[#edf7fc] border border-[#2e9bd7]/30 space-y-3">
                  <div className="flex items-center gap-2 text-[#2e9bd7]">
                    <span className="material-symbols-outlined text-2xl">check_circle</span>
                    <h4 className="font-heading font-bold text-base text-[#111c2d]">
                      Inquiry Dispatched to Alliance Secretariat
                    </h4>
                  </div>
                  <p className="text-xs text-[#525f75] leading-relaxed">
                    Thank you, <strong>{inquiryData.contactPerson || 'partner'}</strong>. Your inquiry for <strong>{inquiryData.institutionName || 'your organization'}</strong> under track "{inquiryData.partnershipTrack}" has been registered. An institutional liaison officer will reach out within 48 business hours.
                  </p>
                  <button
                    onClick={() => setInquirySubmitted(false)}
                    className="text-xs font-bold text-[#2e9bd7] hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3d4947] mb-1">
                        Institution / Organization Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryData.institutionName}
                        onChange={(e) => setInquiryData({ ...inquiryData, institutionName: e.target.value })}
                        placeholder="e.g. Apex Hospital, BioTech Corp"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#bcc9c6]/40 bg-[#f9f9ff] text-xs text-[#111c2d] focus:outline-none focus:border-[#2e9bd7]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#3d4947] mb-1">
                        Contact Person & Designation *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryData.contactPerson}
                        onChange={(e) => setInquiryData({ ...inquiryData, contactPerson: e.target.value })}
                        placeholder="e.g. Dr. K. Sharma, Medical Director"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#bcc9c6]/40 bg-[#f9f9ff] text-xs text-[#111c2d] focus:outline-none focus:border-[#2e9bd7]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3d4947] mb-1">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiryData.email}
                        onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                        placeholder="director@institution.org"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#bcc9c6]/40 bg-[#f9f9ff] text-xs text-[#111c2d] focus:outline-none focus:border-[#2e9bd7]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#3d4947] mb-1">
                        Partnership Track
                      </label>
                      <select
                        value={inquiryData.partnershipTrack}
                        onChange={(e) => setInquiryData({ ...inquiryData, partnershipTrack: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#bcc9c6]/40 bg-[#f9f9ff] text-xs text-[#111c2d] focus:outline-none focus:border-[#2e9bd7]"
                      >
                        <option value="Hospitals & Healthcare Institutions">Hospitals & Clinical Site Trial Node</option>
                        <option value="Industry & MedTech OEMs">Industry & MedTech OEM Co-Development</option>
                        <option value="Universities & Research Institutions">Academic & Joint Faculty Research</option>
                        <option value="Investors & Healthcare VCs">Venture Syndicate & Co-Investment</option>
                        <option value="Government & Innovation Ecosystems">Government & Public Health Deployment</option>
                        <option value="Technology & Ecosystem Partners">Hardware, Prototyping & Cloud Telemetry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3d4947] mb-1">
                      Brief Proposal Scope or Clinical Focus *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={inquiryData.proposalScope}
                      onChange={(e) => setInquiryData({ ...inquiryData, proposalScope: e.target.value })}
                      placeholder="Outline your hospital specialty, therapeutic interest, or proposed bilateral engineering project..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#bcc9c6]/40 bg-[#f9f9ff] text-xs text-[#111c2d] focus:outline-none focus:border-[#2e9bd7] resize-y"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto px-6 py-3 text-white font-heading font-semibold text-xs rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                      isSubmitting ? 'bg-[#bcc9c6] cursor-not-allowed' : 'bg-[#2e9bd7] hover:bg-[#207eb3]'
                    }`}
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Alliance Inquiry'}</span>
                    {!isSubmitting && <span className="material-symbols-outlined text-[16px]">send</span>}
                  </button>
                </form>
              )}
            </div>

            {/* Secretariat Desk Info Card */}
            <div className="lg:col-span-5 bg-[#edf7fc] rounded-2xl p-6 border border-[#bcc9c6]/30 space-y-4">
              <div className="border-b border-[#bcc9c6]/30 pb-3">
                <h3 className="font-heading font-bold text-base text-[#111c2d]">
                  Alliance Office Secretariat
                </h3>
                <p className="text-xs text-[#525f75] mt-0.5">
                  Dedicated coordination desk at IIT Madras Research Park
                </p>
              </div>

              <div className="space-y-2 text-xs">
                <a
                  href="mailto:mti-incubator@htic.iitm.ac.in"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#bcc9c6]/30 hover:border-[#2e9bd7] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#edf7fc] text-[#2e9bd7] flex items-center justify-center shrink-0 group-hover:bg-[#2e9bd7] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#525f75] text-[10px] uppercase">Alliance Desk Email</p>
                    <p className="font-semibold text-[#111c2d] group-hover:text-[#2e9bd7]">
                      mti-incubator@htic.iitm.ac.in
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+914466469800"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#bcc9c6]/30 hover:border-[#2e9bd7] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#edf7fc] text-[#2e9bd7] flex items-center justify-center shrink-0 group-hover:bg-[#2e9bd7] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[18px]">call</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#525f75] text-[10px] uppercase">Direct Telephone Desk</p>
                    <p className="font-semibold text-[#111c2d] group-hover:text-[#2e9bd7]">
                      +91 (44) 6646 9800
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#bcc9c6]/30">
                  <div className="w-8 h-8 rounded-lg bg-[#edf7fc] text-[#2e9bd7] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#525f75] text-[10px] uppercase">Physical Office</p>
                    <p className="font-semibold text-[#111c2d]">
                      5th Floor, D-Block, IITM Research Park, Chennai
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGH-IMPACT INSTITUTIONAL CTA SECTION */}
      <section className="w-full bg-[#061220] text-white py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#2e9bd7]/20 text-[#bce0f5] text-xs font-bold uppercase tracking-wider">
            Collaborative Frontier · IIT Madras
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Let's Build Better Healthcare Together
          </h2>
          <p className="text-base text-[#d6e3fe] leading-relaxed max-w-2xl mx-auto">
            Whether you are a hospital seeking bedside breakthrough devices, an industry leader looking for R&D synergies, an academic institution with translational IP, or an investor seeking de-risked MedTech ventures — our doors at IIT Madras Research Park are open.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onNavigateTab('incubation')}
              className="px-6 py-3 bg-[#2e9bd7] text-white font-heading font-semibold text-xs rounded-xl hover:bg-[#207eb3] transition-colors cursor-pointer"
            >
              Apply for Incubation
            </button>
            <a
              href="#alliance-form"
              className="px-6 py-3 bg-white/10 text-white font-heading font-semibold text-xs rounded-xl hover:bg-white/20 transition-colors cursor-pointer border border-white/20"
            >
              Partner with HTIC
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
