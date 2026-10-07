import React, { useState, useEffect } from 'react';
import { FAQS_DATA } from '../data/mockData';
import { submitToGoogleSheet } from '../utils/formSubmit';

interface IncubationScreenProps {
  onOpenEligibility: () => void;
  prefillData?: { trl: string; stage: string; grants: string } | null;
}

export const IncubationScreen: React.FC<IncubationScreenProps> = ({
  onOpenEligibility,
  prefillData
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    companyName: '',
    website: '',
    aboutCompany: '',
    founderName: '',
    founderProfileUrl: '',
    teamSize: '1-5',
    solutionNature: 'Hardware',
    originStory: '',
    teamSkills: '',
    solutionDescription: '',
    trlMilestone: 'PoC',
    areas: ['Imaging'] as string[],
    supportNeeded: ['Cleanroom', 'Clinical'] as string[]
  });

  useEffect(() => {
    if (prefillData) {
      if (prefillData.trl.includes('1–3')) {
        setFormData((prev) => ({ ...prev, trlMilestone: 'Ideation' }));
      } else if (prefillData.trl.includes('4–5')) {
        setFormData((prev) => ({ ...prev, trlMilestone: 'Functional MVP' }));
      } else if (prefillData.trl.includes('6–7')) {
        setFormData((prev) => ({ ...prev, trlMilestone: 'Clinical Validation' }));
      } else {
        setFormData((prev) => ({ ...prev, trlMilestone: 'Regulatory Filing' }));
      }
    }
  }, [prefillData]);

  const handleAreaToggle = (area: string) => {
    if (formData.areas.includes(area)) {
      setFormData({ ...formData, areas: formData.areas.filter((a) => a !== area) });
    } else {
      setFormData({ ...formData, areas: [...formData.areas, area] });
    }
  };

  const handleSupportToggle = (sup: string) => {
    if (formData.supportNeeded.includes(sup)) {
      setFormData({ ...formData, supportNeeded: formData.supportNeeded.filter((s) => s !== sup) });
    } else {
      setFormData({ ...formData, supportNeeded: [...formData.supportNeeded, sup] });
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitToGoogleSheet('APPLICATIONS', formData);
      const mockId = `HTIC-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionId(mockId);
      setFormSubmitted(true);
      // Scroll to success banner
      const el = document.getElementById('htic-mti-incubation-application');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormSubmitted(false);
    setFormData({
      email: '',
      phone: '',
      companyName: '',
      website: '',
      aboutCompany: '',
      founderName: '',
      founderProfileUrl: '',
      teamSize: '1-5',
      solutionNature: 'Hardware',
      originStory: '',
      teamSkills: '',
      solutionDescription: '',
      trlMilestone: 'PoC',
      areas: ['Imaging'],
      supportNeeded: ['Cleanroom', 'Clinical']
    });
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full bg-[#e8fdf8] overflow-hidden py-12 md:py-20 lg:py-24">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#1eb495]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 w-[30rem] h-[30rem] rounded-full bg-[#a9f5e1]/30 blur-3xl pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text Column */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-[#1eb495]/10 text-[#1eb495] max-w-full">
                <span className="w-2 h-2 rounded-full bg-[#1eb495] animate-pulse"></span>
                <span className="font-heading font-bold text-[11px] sm:text-xs uppercase tracking-wider">
                  HTIC–MTI Incubation Pipeline · Cohort Admissions Open
                </span>
              </div>

              <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-[#111c2d] tracking-tight leading-tight text-balance">
                From Healthcare Idea to Real-World <span className="text-[#1eb495] underline decoration-[#1eb495]/30 decoration-wavy">Clinical Impact</span>
              </h1>

              <p className="text-base sm:text-lg text-[#525f75] max-w-2xl leading-relaxed">
                Every breakthrough innovation begins somewhere. HTIC–MTI guides biomedical engineers, clinicians, and deep-tech founders through structured technology derisking, hospital bedside trials, ISO 13485 certification, and commercial scale.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    const el = document.getElementById('htic-mti-incubation-application');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1eb495] text-white font-heading font-semibold text-sm rounded-xl shadow-md hover:bg-[#15987d] transition-all cursor-pointer"
                >
                  <span>Apply for Incubation</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <button
                  onClick={onOpenEligibility}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#1eb495] border border-[#bcc9c6]/50 font-heading font-semibold text-sm rounded-xl hover:bg-[#e8fdf8] transition-all cursor-pointer"
                >
                  <span>Check TRL Eligibility</span>
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                </button>
              </div>

              {/* Pre-fill Alert if user came from TRL assessment */}
              {prefillData && (
                <div className="p-3.5 rounded-xl bg-white border border-[#1eb495]/40 flex items-center gap-3 shadow-xs">
                  <span className="material-symbols-outlined text-[#1eb495]">check_circle</span>
                  <div className="text-xs">
                    <p className="font-bold text-[#111c2d]">
                      TRL Diagnostic Active: {prefillData.trl} ({prefillData.stage})
                    </p>
                    <p className="text-[#525f75]">
                      Your application below has been pre-configured with your diagnostic milestone.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#e7eeff] aspect-[4/3] w-full border border-[#bcc9c6]/30">
                <img
                  className="w-full h-full object-cover"
                  alt="Clinical biomedical engineers testing robotic surgical device inside IIT Madras research park lab"
                  src="/images/home/IMG_19700222_034521-e1517322328223_4dab88.jpg"
                />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-white/90 backdrop-blur-md shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 border border-white/40">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#1eb495] text-white flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px] sm:text-[22px]">biotech</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xs sm:text-sm text-[#111c2d]">ISO Class 7/8 Cleanrooms</h4>
                      <p className="text-[10px] sm:text-xs text-[#525f75]">IITM Research Park Bio-Engineering Facility</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-[#d6e3fe] text-[#58657b] font-heading font-semibold text-[10px] sm:text-xs self-start sm:self-auto">
                    Active Lab
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-STAGE MEDTECH JOURNEY (DEEP DIVE SECTION) */}
      <section className="py-16 md:py-24 bg-white max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-3xl">
            <span className="font-heading text-xs uppercase tracking-widest text-[#1eb495] block mb-2 font-bold">
              The Structured Pathway
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111c2d] tracking-tight">
              From Idea to Clinical Impact: The 4-Stage MedTech Journey
            </h2>
            <p className="text-base text-[#525f75] mt-3">
              Medical device development differs fundamentally from generic software. We align engineering milestones directly with Technology Readiness Levels (TRL) and CDSCO regulatory checkpoints.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-1.5 px-3 py-1.5 bg-[#a9f5e1] rounded-lg text-[#111c2d] font-heading font-semibold text-xs">
            <span className="material-symbols-outlined text-[16px] text-[#1eb495]">timeline</span>
            <span>TRL 1 through TRL 9 Alignment</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Stage 1 */}
          <div className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#bcc9c6]/30 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#1eb495]"></div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading text-3xl font-bold text-[#1eb495]/30 group-hover:text-[#1eb495]/50 transition-colors">
                  01
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#e8fdf8] text-[#1eb495] font-mono text-xs font-bold border border-[#bcc9c6]/40">
                  TRL 1–3
                </span>
              </div>
              <div className="mb-3">
                <h3 className="font-heading font-bold text-lg text-[#111c2d]">The Curious</h3>
                <span className="text-xs text-[#525f75] font-semibold">Timeline: 2–4 Months</span>
              </div>
              <p className="text-xs text-[#525f75] mb-5 leading-relaxed">
                Explore the unmet clinical need, dissect pathology workflows, and evaluate scientific feasibility alongside senior clinicians.
              </p>
              <div className="space-y-3.5 text-xs">
                <div>
                  <p className="font-bold text-[#111c2d] uppercase tracking-wider text-[11px]">Target Cohort</p>
                  <p className="text-[#525f75] mt-0.5">Clinicians with pain points, PhD scholars, and biomedical researchers.</p>
                </div>
                <div>
                  <p className="font-bold text-[#111c2d] uppercase tracking-wider text-[11px]">Key Activities</p>
                  <ul className="text-[#525f75] space-y-1 mt-1">
                    <li className="flex items-start gap-1">
                      <span className="material-symbols-outlined text-[#1eb495] text-[14px] mt-0.5">check_circle</span>
                      <span>Clinical immersion at partner hospitals</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="material-symbols-outlined text-[#1eb495] text-[14px] mt-0.5">check_circle</span>
                      <span>Prior-art & medical patent landscape analysis</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-[#111c2d] uppercase tracking-wider text-[11px]">HTIC Support</p>
                  <p className="text-[#525f75] mt-0.5">Dedicated clinician mentor, patent search, BIRAC SPARSH / BIG writing support.</p>
                </div>
                <div className="p-2.5 rounded-lg bg-[#e8fdf8] border border-[#bcc9c6]/30">
                  <p className="text-[11px] font-bold text-[#1eb495]">Milestone Outcome</p>
                  <p className="text-xs font-semibold text-[#111c2d]">Verified Clinical Need Dossier & Patent Draft</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 2 */}
          <div className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#bcc9c6]/30 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#1eb495]"></div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading text-3xl font-bold text-[#1eb495]/30 group-hover:text-[#1eb495]/50 transition-colors">
                  02
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#e8fdf8] text-[#1eb495] font-mono text-xs font-bold border border-[#bcc9c6]/40">
                  TRL 4–5
                </span>
              </div>
              <div className="mb-3">
                <h3 className="font-heading font-bold text-lg text-[#111c2d]">The Builder</h3>
                <span className="text-xs text-[#525f75] font-semibold">Timeline: 6–9 Months</span>
              </div>
              <p className="text-xs text-[#525f75] mb-5 leading-relaxed">
                Transform proof-of-concept into verified functional benchtop prototypes inside specialized ISO cleanrooms.
              </p>
              <div className="space-y-3.5 text-xs">
                <div>
                  <p className="font-bold text-[#111c2d] uppercase tracking-wider text-[11px]">Target Cohort</p>
                  <p className="text-[#525f75] mt-0.5">Early-stage founders with working benchtop electronics or biological assays.</p>
                </div>
                <div>
                  <p className="font-bold text-[#111c2d] uppercase tracking-wider text-[11px]">Key Activities</p>
                  <ul className="text-[#525f75] space-y-1 mt-1">
                    <li className="flex items-start gap-1">
                      <span className="material-symbols-outlined text-[#1eb495] text-[14px] mt-0.5">check_circle</span>
                      <span>Multi-layer medical PCB design & verification</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="material-symbols-outlined text-[#1eb495] text-[14px] mt-0.5">check_circle</span>
                      <span>Biocompatible resin 3D printing & rapid tooling</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-[#111c2d] uppercase tracking-wider text-[11px]">HTIC Support</p>
                  <p className="text-[#525f75] mt-0.5">Access to ISO Class 7/8 cleanrooms, Keysight instrumentation, materials advisory.</p>
                </div>
                <div className="p-2.5 rounded-lg bg-[#e8fdf8] border border-[#bcc9c6]/30">
                  <p className="text-[11px] font-bold text-[#1eb495]">Milestone Outcome</p>
                  <p className="text-xs font-semibold text-[#111c2d]">Validated Working Prototype & Test Reports</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 3 */}
          <div className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#bcc9c6]/30 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#825100]"></div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading text-3xl font-bold text-[#825100]/30 group-hover:text-[#825100]/50 transition-colors">
                  03
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#e8fdf8] text-[#825100] font-mono text-xs font-bold border border-[#bcc9c6]/40">
                  TRL 6–7
                </span>
              </div>
              <div className="mb-3">
                <h3 className="font-heading font-bold text-lg text-[#111c2d]">The Marketer</h3>
                <span className="text-xs text-[#525f75] font-semibold">Timeline: 6–12 Months</span>
              </div>
              <p className="text-xs text-[#525f75] mb-5 leading-relaxed">
                Validate clinical safety and diagnostic efficacy through pilot trials in accredited tertiary hospitals.
              </p>
              <div className="space-y-3.5 text-xs">
                <div>
                  <p className="font-bold text-[#111c2d] uppercase tracking-wider text-[11px]">Target Cohort</p>
                  <p className="text-[#525f75] mt-0.5">Teams with freeze-locked prototypes ready for Ethics Committee scrutiny.</p>
                </div>
                <div>
                  <p className="font-bold text-[#111c2d] uppercase tracking-wider text-[11px]">Key Activities</p>
                  <ul className="text-[#525f75] space-y-1 mt-1">
                    <li className="flex items-start gap-1">
                      <span className="material-symbols-outlined text-[#825100] text-[14px] mt-0.5">check_circle</span>
                      <span>Institutional Ethics Committee (IEC) clearances</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="material-symbols-outlined text-[#825100] text-[14px] mt-0.5">check_circle</span>
                      <span>CDSCO Device Master File & ISO 13485 readiness</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-[#111c2d] uppercase tracking-wider text-[11px]">HTIC Support</p>
                  <p className="text-[#525f75] mt-0.5">Clinical coordinators, trial affiliations (Apollo, CMC), CDSCO liaison.</p>
                </div>
                <div className="p-2.5 rounded-lg bg-[#e8fdf8] border border-[#bcc9c6]/30">
                  <p className="text-[11px] font-bold text-[#825100]">Milestone Outcome</p>
                  <p className="text-xs font-semibold text-[#111c2d]">Clinical Validation Report & MD-14 License</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 4 */}
          <div className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#bcc9c6]/30 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#15987d]"></div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading text-3xl font-bold text-[#15987d]/30 group-hover:text-[#15987d]/50 transition-colors">
                  04
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#e8fdf8] text-[#15987d] font-mono text-xs font-bold border border-[#bcc9c6]/40">
                  TRL 8–9
                </span>
              </div>
              <div className="mb-3">
                <h3 className="font-heading font-bold text-lg text-[#111c2d]">The Operator</h3>
                <span className="text-xs text-[#525f75] font-semibold">Timeline: Ongoing Scale</span>
              </div>
              <p className="text-xs text-[#525f75] mb-5 leading-relaxed">
                Scale manufacturing, transition to commercial production lines, establish hospital procurement, raise capital.
              </p>
              <div className="space-y-3.5 text-xs">
                <div>
                  <p className="font-bold text-[#111c2d] uppercase tracking-wider text-[11px]">Target Cohort</p>
                  <p className="text-[#525f75] mt-0.5">Incorporated ventures with validated clinical evidence preparing for procurement.</p>
                </div>
                <div>
                  <p className="font-bold text-[#111c2d] uppercase tracking-wider text-[11px]">Key Activities</p>
                  <ul className="text-[#525f75] space-y-1 mt-1">
                    <li className="flex items-start gap-1">
                      <span className="material-symbols-outlined text-[#15987d] text-[14px] mt-0.5">check_circle</span>
                      <span>OEM contract manufacturer tie-ups & supply chain</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="material-symbols-outlined text-[#15987d] text-[14px] mt-0.5">check_circle</span>
                      <span>Series A investor syndicate roadshows</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-[#111c2d] uppercase tracking-wider text-[11px]">HTIC Support</p>
                  <p className="text-[#525f75] mt-0.5">IITM Research Park investor syndicate, bilateral medtech OEM alliances.</p>
                </div>
                <div className="p-2.5 rounded-lg bg-[#e8fdf8] border border-[#bcc9c6]/30">
                  <p className="text-[11px] font-bold text-[#15987d]">Milestone Outcome</p>
                  <p className="text-xs font-semibold text-[#111c2d]">Market Clearance, Hospital Sales & Equity Round</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO CAN APPLY (COMPREHENSIVE ELIGIBILITY FRAMEWORK) */}
      <section className="py-16 md:py-24 bg-[#e8fdf8]" id="eligibility">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-heading text-xs uppercase tracking-widest text-[#1eb495] font-bold block mb-2">
              Eligibility & Cohort Profiles
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111c2d] tracking-tight">
              Who Can Apply for HTIC–MTI Incubation?
            </h2>
            <p className="text-base text-[#525f75] mt-3">
              We support visionaries across the entire healthcare spectrum—from individual clinical innovators to incorporated deep-tech enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'school',
                title: 'Individual Innovators & Academicians',
                desc: 'Faculty members, PhD scholars, and independent engineers with proprietary medical tech ideas or provisional patents.',
                pathway: 'Willingness to incorporate an Indian Private Limited entity within 6 months of cohort induction.'
              },
              {
                icon: 'stethoscope',
                title: 'Clinicians & Healthcare Professionals',
                desc: 'Practicing physicians, surgeons, and nurses with first-hand clinical insight and validated unmet surgical or diagnostic needs.',
                pathway: 'Paired with IIT Madras engineering co-founders, embedded researchers, and specialized hardware fellows.'
              },
              {
                icon: 'rocket_launch',
                title: 'Early-Stage MedTech Startups',
                desc: 'Registered Indian entities (DPIIT recognized) less than 5 years old working on hardware medical devices, diagnostics, or IoMT.',
                pathway: 'Non-predatory, institutional-friendly incubation terms aligned directly with IIT Madras norms.'
              },
              {
                icon: 'memory',
                title: 'Biomedical Engineers & Hardware Teams',
                desc: 'Multi-disciplinary teams with verified expertise in microfluidics, biosensors, embedded robotics, or healthcare AI.',
                pathway: 'Direct seed grant pipeline (up to ₹50 Lakhs) and heavily subsidized lab bench space at IITM Research Park.'
              },
              {
                icon: 'workspace_premium',
                title: 'Women-Led MedTech Innovators',
                desc: 'Ventures with female founders or majority women executive leadership in medical technology, diagnostic tools, and therapeutic devices.',
                pathway: 'Dedicated grant priorities (BIRAC WinER fellowship), executive mentor advisory, and leadership acceleration.'
              },
              {
                icon: 'science',
                title: 'Translational Research Spin-offs',
                desc: 'Research projects emerging from IIT Madras, CSIR laboratories, ICMR institutes, or national research centers aiming for clinical launch.',
                pathway: 'Formal institutional technology transfer documentation and patent commercial licensing assistance.'
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#bcc9c6]/30 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#e8fdf8] text-[#1eb495] flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[24px]">{card.icon}</span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#111c2d] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#525f75] mb-4 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-[#e8fdf8] border border-[#bcc9c6]/30 text-xs">
                  <span className="font-bold text-[#1eb495] uppercase tracking-wider text-[11px] block">
                    Incubation Alignment
                  </span>
                  <p className="text-[#525f75] mt-0.5">{card.pathway}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-STEP EVALUATION PROTOCOL */}
      <section className="py-16 md:py-20 bg-white max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full" id="apply-process">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-heading text-xs uppercase tracking-widest text-[#1eb495] font-bold block mb-2">
            Institutional Review Process
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111c2d] tracking-tight">
            How Applications Are Evaluated
          </h2>
          <p className="text-sm text-[#525f75] mt-2">
            Our rigorous 5-step evaluation protocol balances clinical urgency, engineering practicality, patient safety, and market potential.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            {
              step: '01',
              title: 'Online Application',
              desc: 'Submit clinical unmet need, preliminary architecture, and IP claims.',
              timeline: 'Avg: 3–5 Days'
            },
            {
              step: '02',
              title: 'Internal Screening',
              desc: 'HTIC technical committee audits prior-art novelty and biosafety.',
              timeline: 'Avg: 7–10 Days'
            },
            {
              step: '03',
              title: 'Expert Committee Pitch',
              desc: 'Pitch to IIT Madras faculty, hospital clinicians, and MedTech founders.',
              timeline: 'Virtual or In-Person'
            },
            {
              step: '04',
              title: 'Due Diligence & Ethics',
              desc: 'Institutional clearances, background checks, and biosafety review.',
              timeline: 'Ethics Clearance'
            },
            {
              step: '05',
              title: 'Onboarding & Labs',
              desc: 'Incubation agreement, seed grant sanction, and cleanroom badges.',
              timeline: 'Cohort Induction'
            }
          ].map((s, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#e8fdf8] border border-[#bcc9c6]/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-lg bg-[#1eb495] text-white font-heading font-bold text-xs flex items-center justify-center">
                    {s.step}
                  </span>
                  <span className="material-symbols-outlined text-[#6d7a77] text-[18px]">
                    fact_check
                  </span>
                </div>
                <h4 className="font-heading font-bold text-sm text-[#111c2d] mb-1.5">{s.title}</h4>
                <p className="text-xs text-[#525f75] leading-relaxed">{s.desc}</p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-[#bcc9c6]/30 text-[11px] font-semibold text-[#1eb495]">
                {s.timeline}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQS ACCORDION */}
      <section className="py-16 md:py-20 bg-[#f9f9ff] max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <span className="font-heading text-xs uppercase tracking-widest text-[#1eb495] font-bold block mb-2">
              Clear Answers
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111c2d] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#525f75] mt-2">
              Everything you need to know about IP ownership, clinical practice arrangements, equity norms, and grant funding at HTIC–MTI.
            </p>
            <div className="mt-6 p-4 rounded-xl bg-white border border-[#bcc9c6]/30">
              <p className="text-xs font-bold text-[#111c2d]">Have a specific query?</p>
              <p className="text-xs text-[#525f75] mt-1 mb-3">
                Our incubation managers review specific pre-application queries every week.
              </p>
              <a
                href="mailto:mti-incubator@htic.iitm.ac.in"
                className="text-xs font-bold text-[#1eb495] inline-flex items-center gap-1 hover:underline"
              >
                <span>Email Incubation Office</span>
                <span className="material-symbols-outlined text-[14px]">mail</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-3">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#bcc9c6]/30 shadow-xs transition-all cursor-pointer"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-semibold text-sm sm:text-base text-[#111c2d]">
                      {faq.question}
                    </h3>
                    <span className="material-symbols-outlined text-[#1eb495] ml-3 shrink-0">
                      {isOpen ? 'expand_less' : 'expand_more'}
                    </span>
                  </div>
                  {isOpen && (
                    <p className="text-xs sm:text-sm text-[#525f75] mt-3 pt-3 border-t border-[#bcc9c6]/20 leading-relaxed animate-in fade-in duration-200">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FULL WORKING INCUBATION APPLICATION FORM */}
      <section
        className="py-16 md:py-24 bg-[#e8fdf8] border-t border-[#bcc9c6]/30 scroll-mt-24"
        id="htic-mti-incubation-application"
      >
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="px-3 py-1 rounded-full bg-[#1eb495]/10 text-[#1eb495] font-heading font-bold text-xs uppercase tracking-wider mb-3 inline-block">
              Cohort 2025–2026 Admissions
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111c2d] tracking-tight">
              HTIC – MTI Incubation Application
            </h2>
            <p className="text-sm text-[#525f75] mt-2">
              Apply for structured technology derisking, hospital trial validation, and cleanroom incubation at IIT Madras Research Park.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl shadow-xl border border-[#bcc9c6]/30">
            {formSubmitted ? (
              <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#e8fdf8] text-[#1eb495] flex items-center justify-center mx-auto shadow-sm">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <div>
                  <span className="px-3 py-1 rounded bg-[#a9f5e1] text-[#1eb495] font-mono text-xs font-bold">
                    Application ID: {submissionId}
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-[#111c2d] mt-3">
                    Application Successfully Submitted!
                  </h3>
                  <p className="text-sm text-[#525f75] max-w-lg mx-auto mt-2 leading-relaxed">
                    Thank you for applying to the HTIC MedTech Incubator. Our technical screening panel has logged your submission for <strong>{formData.companyName || 'your venture'}</strong>. You will receive an acknowledgment email at <strong>{formData.email}</strong> within 24 hours.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#e8fdf8] border border-[#bcc9c6]/30 max-w-md mx-auto text-left text-xs space-y-1.5">
                  <p className="font-bold text-[#111c2d]">Next Steps in Review:</p>
                  <p className="text-[#525f75]">1. Technical Feasibility & Prior Art Screening (3–5 Days)</p>
                  <p className="text-[#525f75]">2. Expert Committee Pitch Invitation (Virtual/IIT Madras)</p>
                  <p className="text-[#525f75]">3. Ethics Clearances & Cleanroom Badge Allocation</p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleResetForm}
                    className="px-6 py-2.5 bg-white border border-[#bcc9c6]/50 text-xs font-semibold text-[#525f75] hover:text-[#111c2d] rounded-xl cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="px-6 py-2.5 bg-[#1eb495] text-white text-xs font-semibold rounded-xl hover:bg-[#15987d] cursor-pointer"
                  >
                    Back to Top
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Company Essentials */}
                <div className="space-y-4">
                  <div className="border-b border-[#bcc9c6]/30 pb-3">
                    <h3 className="font-heading font-bold text-base text-[#111c2d] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#1eb495] text-[20px]">business_center</span>
                      <span>1. Company & Applicant Essentials</span>
                    </h3>
                    <p className="text-xs text-[#525f75] mt-0.5">
                      Basic identity and corporate background of your medtech venture.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3d4947] mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="founder@startup.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#bcc9c6]/40 bg-[#f9f9ff] text-xs text-[#111c2d] focus:outline-none focus:border-[#1eb495] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3d4947] mb-1.5">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#bcc9c6]/40 bg-[#f9f9ff] text-xs text-[#111c2d] focus:outline-none focus:border-[#1eb495] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3d4947] mb-1.5">
                        Company Name / Provisional Project Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Kornerstone Devices Pvt Ltd or Working Title"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#bcc9c6]/40 bg-[#f9f9ff] text-xs text-[#111c2d] focus:outline-none focus:border-[#1eb495] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3d4947] mb-1.5">
                        Website (Optional)
                      </label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://yourmedtech.in"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#bcc9c6]/40 bg-[#f9f9ff] text-xs text-[#111c2d] focus:outline-none focus:border-[#1eb495] focus:bg-white"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-[#3d4947] mb-1.5">
                        About Company and Product/Services <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formData.aboutCompany}
                        onChange={(e) => setFormData({ ...formData, aboutCompany: e.target.value })}
                        placeholder="Provide a brief summary of what your company does, its core mission, and current offerings..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#bcc9c6]/40 bg-[#f9f9ff] text-xs text-[#111c2d] focus:outline-none focus:border-[#1eb495] focus:bg-white resize-y"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Step 2: Founder & Team Composition */}
                <div className="space-y-4">
                  <div className="border-b border-[#bcc9c6]/30 pb-3">
                    <h3 className="font-heading font-bold text-base text-[#111c2d] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#1eb495] text-[20px]">group</span>
                      <span>2. Founder & Team Composition</span>
                    </h3>
                    <p className="text-xs text-[#525f75] mt-0.5">
                      Details about founders, clinical partnerships, and team expertise.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3d4947] mb-1.5">
                        Founder Full Name & Educational Background <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.founderName}
                        onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                        placeholder="e.g. Dr. A. Raman (MBBS, MS) or R. Kumar (M.Tech, IIT-M)"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#bcc9c6]/40 bg-[#f9f9ff] text-xs text-[#111c2d] focus:outline-none focus:border-[#1eb495] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3d4947] mb-1.5">
                        Founder Profile (LinkedIn / Portfolio URL) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="url"
                        required
                        value={formData.founderProfileUrl}
                        onChange={(e) => setFormData({ ...formData, founderProfileUrl: e.target.value })}
                        placeholder="https://linkedin.com/in/foundername"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#bcc9c6]/40 bg-[#f9f9ff] text-xs text-[#111c2d] focus:outline-none focus:border-[#1eb495] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3d4947] mb-1.5">
                        Number of Employees / Team Size <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.teamSize}
                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#bcc9c6]/40 bg-[#f9f9ff] text-xs text-[#111c2d] focus:outline-none focus:border-[#1eb495] focus:bg-white"
                      >
                        <option value="1-5">1–5 members</option>
                        <option value="6-10">6–10 members</option>
                        <option value="11-20">11–20 members</option>
                        <option value="20+">20+ members</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3d4947] mb-1.5">
                        Solution Nature / Category <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {['Hardware', 'Software', 'Both'].map((opt) => (
                          <label
                            key={opt}
                            className={`flex items-center justify-center p-2.5 rounded-xl border cursor-pointer text-xs font-semibold transition-all ${
                              formData.solutionNature === opt
                                ? 'border-[#1eb495] bg-[#e8fdf8] text-[#1eb495]'
                                : 'border-[#bcc9c6]/40 bg-[#f9f9ff] text-[#525f75]'
                            }`}
                          >
                            <input
                              type="radio"
                              name="sol_nature"
                              value={opt}
                              checked={formData.solutionNature === opt}
                              onChange={() => setFormData({ ...formData, solutionNature: opt })}
                              className="sr-only"
                            />
                            <span>{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-[#3d4947] mb-1.5">
                        Origin Story & Founding Relationship <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={2}
                        value={formData.originStory}
                        onChange={(e) => setFormData({ ...formData, originStory: e.target.value })}
                        placeholder="How did you identify the clinical pain point and how did the co-founders come together?"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#bcc9c6]/40 bg-[#f9f9ff] text-xs text-[#111c2d] focus:outline-none focus:border-[#1eb495] focus:bg-white resize-y"
                      ></textarea>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-[#3d4947] mb-1.5">
                        Team Skills Breakdown <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={2}
                        value={formData.teamSkills}
                        onChange={(e) => setFormData({ ...formData, teamSkills: e.target.value })}
                        placeholder="Highlight technical, clinical advisory, biomedical, and regulatory execution skill sets..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#bcc9c6]/40 bg-[#f9f9ff] text-xs text-[#111c2d] focus:outline-none focus:border-[#1eb495] focus:bg-white resize-y"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Step 3: Clinical Solution & TRL */}
                <div className="space-y-4">
                  <div className="border-b border-[#bcc9c6]/30 pb-3">
                    <h3 className="font-heading font-bold text-base text-[#111c2d] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#1eb495] text-[20px]">biotech</span>
                      <span>3. Clinical Solution & Technology Readiness</span>
                    </h3>
                    <p className="text-xs text-[#525f75] mt-0.5">
                      Unmet medical need, stage of progress, and technology domains.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3d4947] mb-1.5">
                        Describe Your Clinical Idea & Proposed Solution <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formData.solutionDescription}
                        onChange={(e) => setFormData({ ...formData, solutionDescription: e.target.value })}
                        placeholder="Explain the clinical problem, patient/hospital workflow, proposed device/algorithm, novelty, and clinical value proposition..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#bcc9c6]/40 bg-[#f9f9ff] text-xs text-[#111c2d] focus:outline-none focus:border-[#1eb495] focus:bg-white resize-y"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3d4947] mb-1.5">
                        Current Status / Maturity Milestone <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.trlMilestone}
                        onChange={(e) => setFormData({ ...formData, trlMilestone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#bcc9c6]/40 bg-[#f9f9ff] text-xs text-[#111c2d] focus:outline-none focus:border-[#1eb495] focus:bg-white"
                      >
                        <option value="Ideation">Ideation / Concept Validation (TRL 1–3)</option>
                        <option value="PoC">Proof of Concept / Lab Prototype (TRL 3–4)</option>
                        <option value="Functional MVP">Functional MVP / Working Benchtop Prototype (TRL 4–5)</option>
                        <option value="Clinical Validation">Clinical Validation / Hospital Pilot (TRL 6–7)</option>
                        <option value="Regulatory Filing">Regulatory Filing / Market Ready (TRL 8–9)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3d4947] mb-2">
                        Areas / Categories of Startup (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                        {[
                          { id: 'AI', label: 'Artificial Intelligence & Analytics' },
                          { id: 'Imaging', label: 'Medical Imaging & PoC Diagnostics' },
                          { id: 'Assistive', label: 'Assistive Technologies & Bionics' },
                          { id: 'Wearables', label: 'Wearables & Continuous Monitoring' },
                          { id: 'DigitalHealth', label: 'Digital Health & Telemedicine' },
                          { id: 'Surgical', label: 'Surgical Tools & Robotics' },
                          { id: 'Implants', label: 'Biomaterials & 3D Printed Implants' },
                          { id: 'Therapeutics', label: 'Point-of-Care Bio-Therapeutics' },
                          { id: 'Infection', label: 'Sterility & Infection Control' }
                        ].map((cat) => (
                          <label
                            key={cat.id}
                            className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer text-xs transition-all ${
                              formData.areas.includes(cat.id)
                                ? 'border-[#1eb495] bg-[#e8fdf8] text-[#1eb495] font-semibold'
                                : 'border-[#bcc9c6]/30 bg-white text-[#525f75]'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={formData.areas.includes(cat.id)}
                              onChange={() => handleAreaToggle(cat.id)}
                              className="rounded text-[#1eb495] focus:ring-[#1eb495]"
                            />
                            <span>{cat.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3d4947] mb-2">
                        Specific HTIC Support Required (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                        {[
                          { id: 'Cleanroom', label: 'ISO Class Cleanrooms & Labs' },
                          { id: 'Clinical', label: 'Clinical Immersion & Hospital Trials' },
                          { id: 'Regulatory', label: 'CDSCO / ISO 13485 Advisory' },
                          { id: 'Grants', label: 'Grant Advisory (BIG / SPARSH)' },
                          { id: 'Mentorship', label: 'Faculty & Clinician Advisory' },
                          { id: 'Hardware', label: 'Keysight RF / 3D Prototyping' }
                        ].map((sup) => (
                          <label
                            key={sup.id}
                            className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer text-xs transition-all ${
                              formData.supportNeeded.includes(sup.id)
                                ? 'border-[#1eb495] bg-[#e8fdf8] text-[#1eb495] font-semibold'
                                : 'border-[#bcc9c6]/30 bg-white text-[#525f75]'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={formData.supportNeeded.includes(sup.id)}
                              onChange={() => handleSupportToggle(sup.id)}
                              className="rounded text-[#1eb495] focus:ring-[#1eb495]"
                            />
                            <span>{sup.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Footer Submit */}
                <div className="pt-4 border-t border-[#bcc9c6]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#525f75] text-center sm:text-left">
                    <span className="material-symbols-outlined text-[#1eb495] text-[18px] shrink-0">lock</span>
                    <span>All submitted clinical IP is protected under IIT Madras institutional confidentiality rules.</span>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto px-8 py-3.5 text-white font-heading font-semibold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isSubmitting ? 'bg-[#bcc9c6] cursor-not-allowed' : 'bg-[#1eb495] hover:bg-[#15987d] active:scale-[0.98]'
                    }`}
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Incubation Application'}</span>
                    {!isSubmitting && <span className="material-symbols-outlined text-[18px]">send</span>}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
