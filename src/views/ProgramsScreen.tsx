import React, { useState } from 'react';
import { PROGRAMS_DATA, Program } from '../data/mockData';

interface ProgramsScreenProps {
  onApplyForProgram: (program: Program) => void;
  onNavigateTab: (tab: string) => void;
}

export const ProgramsScreen: React.FC<ProgramsScreenProps> = ({
  onApplyForProgram,
  onNavigateTab
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'birac' | 'dst' | 'institutional'>('all');

  const filtered = PROGRAMS_DATA.filter((p) => {
    if (selectedFilter === 'all') return true;
    return p.category === selectedFilter;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full bg-[#fff9eb] py-12 lg:py-16 border-b border-[#bcc9c6]/30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fce5b3] text-[#f9b122] text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">payments</span>
              <span>Non-Dilutive Grant Capital & Fellowships</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111c2d] tracking-tight">
              Incubation Grants & Acceleration Schemes
            </h1>
            <p className="text-base text-[#525f75] leading-relaxed">
              HTIC–MTI facilitates sovereign biotechnology and DST engineering grants ranging from ₹30,000/month individual founder fellowships to ₹50 Lakhs non-dilutive translation funding, coupled with specialized cleanroom prototyping access.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8">
            <div className="p-3 sm:p-4 bg-white rounded-2xl border border-[#bcc9c6]/30 shadow-xs">
              <p className="text-[11px] sm:text-xs text-[#525f75] font-semibold">Total Capital Catalyzed</p>
              <p className="font-heading font-bold text-xl sm:text-2xl text-[#f9b122] mt-0.5 sm:mt-1">₹41+ Cr</p>
            </div>
            <div className="p-3 sm:p-4 bg-white rounded-2xl border border-[#bcc9c6]/30 shadow-xs">
              <p className="text-[11px] sm:text-xs text-[#525f75] font-semibold">Max Single Grant</p>
              <p className="font-heading font-bold text-xl sm:text-2xl text-[#f9b122] mt-0.5 sm:mt-1">₹50 Lakhs</p>
            </div>
            <div className="p-3 sm:p-4 bg-white rounded-2xl border border-[#bcc9c6]/30 shadow-xs">
              <p className="text-[11px] sm:text-xs text-[#525f75] font-semibold">Grant Conversion Rate</p>
              <p className="font-heading font-bold text-xl sm:text-2xl text-[#f9b122] mt-0.5 sm:mt-1">&gt; 70%</p>
            </div>
            <div className="p-3 sm:p-4 bg-white rounded-2xl border border-[#bcc9c6]/30 shadow-xs">
              <p className="text-[11px] sm:text-xs text-[#525f75] font-semibold">Equity Dilution</p>
              <p className="font-heading font-bold text-xl sm:text-2xl text-[#f9b122] mt-0.5 sm:mt-1">0% (Grants)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Programs List */}
      <section className="w-full bg-[#f9f9ff] py-14 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1440px] mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-heading font-bold text-2xl text-[#111c2d]">
                Available Grant Schemes
              </h2>
              <p className="text-xs text-[#525f75]">
                Select a category to inspect eligibility criteria, deliverables, and cycle timelines.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              {[
                { id: 'all', label: 'All Schemes' },
                { id: 'birac', label: 'BIRAC Schemes' },
                { id: 'dst', label: 'DST NIDHI Schemes' },
                { id: 'institutional', label: 'CSR & Institutional' }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setSelectedFilter(btn.id as any)}
                  className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                    selectedFilter === btn.id
                      ? 'bg-[#f9b122] text-white shadow-xs'
                      : 'bg-white text-[#525f75] border border-[#bcc9c6]/40 hover:text-[#111c2d]'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filtered.map((prog) => (
              <div
                key={prog.id}
                className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#bcc9c6]/30 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5 sm:space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3">
                    <div>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#fce5b3] text-[#f9b122]">
                        {prog.categoryLabel}
                      </span>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-[#111c2d] mt-1.5 sm:mt-2">
                        {prog.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#f9b122] mt-0.5">
                        {prog.subTitle}
                      </p>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <span className="font-heading font-bold text-sm sm:text-base text-[#111c2d] block">
                        {prog.grantAmount}
                      </span>
                      <span className="text-[11px] text-[#525f75]">{prog.duration}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#525f75] leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#bcc9c6]/20">
                    <p className="text-[11px] font-bold text-[#111c2d] uppercase tracking-wider">
                      Required Cohort Deliverables:
                    </p>
                    <ul className="text-xs text-[#525f75] space-y-1">
                      {prog.deliverables.map((del, didx) => (
                        <li key={didx} className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[#f9b122] text-[16px]">
                            check_circle
                          </span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-[#fff9eb] border border-[#bcc9c6]/30 text-xs text-[#525f75]">
                    <span className="font-bold text-[#111c2d]">Eligibility Norm: </span>
                    <span>{prog.eligibility}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[#bcc9c6]/20">
                  <span className="text-xs text-[#525f75] font-semibold">
                    Target: {prog.stageTarget}
                  </span>
                  <button
                    onClick={() => onApplyForProgram(prog)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#f9b122] text-white font-heading font-semibold text-xs rounded-xl hover:bg-[#d9971c] transition-colors cursor-pointer"
                  >
                    <span>Apply for {prog.title.split(' ')[0]}</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
