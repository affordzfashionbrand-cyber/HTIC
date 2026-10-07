import React, { useEffect } from 'react';
import { Startup } from '../data/mockData';

interface StartupDetailModalProps {
  startup: Startup | null;
  onClose: () => void;
}

export const StartupDetailModal: React.FC<StartupDetailModalProps> = ({ startup, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!startup) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="startup-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111c2d]/65 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-[#bcc9c6]/40 overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-4 sm:px-6 py-4 sm:py-5 bg-[#f0f3ff] border-b border-[#bcc9c6]/30 flex items-start justify-between shrink-0">
          <div className="flex items-center gap-3 sm:gap-3.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white text-[#145598] font-heading font-bold text-base sm:text-lg flex items-center justify-center shadow-md overflow-hidden border border-[#bcc9c6]/40 p-1 shrink-0">
              {startup.logo ? (
                <img src={startup.logo} alt={startup.name} className="w-full h-full object-contain" />
              ) : (
                <span className="w-full h-full bg-[#145598] text-white flex items-center justify-center rounded-xl">{startup.initials}</span>
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#145598] uppercase tracking-wider">
                  {startup.sectorLabel}
                </span>
                <span className="text-[#bcc9c6]">·</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-white border border-[#bcc9c6]/40 text-[#525f75]">
                  {startup.stage}
                </span>
              </div>
              <h3 id="startup-modal-title" className="font-heading font-bold text-lg sm:text-xl text-[#111c2d] mt-0.5">
                {startup.name}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#525f75] hover:text-[#111c2d] rounded-lg hover:bg-white/80 transition-colors"
            aria-label="Close details"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6 flex-1">
          {/* Tagline & Impact Metric */}
          <div className="space-y-2">
            <p className="text-base text-[#111c2d] font-semibold leading-relaxed">
              {startup.tagline}
            </p>
            <div className="p-3.5 rounded-xl bg-[#f0f3ff] border border-[#bcc9c6]/30 flex items-center gap-3">
              <span className="material-symbols-outlined text-[#145598] text-[22px]">vital_signs</span>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#145598] font-bold">
                  Clinical & Operational Footprint
                </p>
                <p className="text-xs font-semibold text-[#111c2d]">{startup.impactMetric}</p>
              </div>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#6d7a77]">
              Technology & Clinical Unmet Need
            </h4>
            <p className="text-sm text-[#525f75] leading-relaxed">
              {startup.description}
            </p>
          </div>

          {/* Key Metric Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-3 rounded-xl bg-[#f9f9ff] border border-[#bcc9c6]/30 space-y-1">
              <span className="text-[11px] text-[#6d7a77] uppercase font-bold block">Funding Raised</span>
              <span className="text-sm font-heading font-bold text-[#111c2d]">{startup.fundingRaised}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#f9f9ff] border border-[#bcc9c6]/30 space-y-1">
              <span className="text-[11px] text-[#6d7a77] uppercase font-bold block">Patent Status</span>
              <span className="text-sm font-heading font-bold text-[#111c2d]">{startup.patentStatus}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#f9f9ff] border border-[#bcc9c6]/30 space-y-1">
              <span className="text-[11px] text-[#6d7a77] uppercase font-bold block">CDSCO License</span>
              <span className="text-xs font-semibold text-[#145598]">{startup.cdscoStatus}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#f9f9ff] border border-[#bcc9c6]/30 space-y-1 col-span-2 sm:col-span-1">
              <span className="text-[11px] text-[#6d7a77] uppercase font-bold block">Hospital Partner</span>
              <span className="text-xs font-semibold text-[#111c2d]">{startup.clinicalPartner}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#f9f9ff] border border-[#bcc9c6]/30 space-y-1 col-span-2">
              <span className="text-[11px] text-[#6d7a77] uppercase font-bold block">Sovereign Grants</span>
              <span className="text-xs font-semibold text-[#111c2d]">{startup.grantSupport}</span>
            </div>
          </div>

          {/* Founding Team */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#6d7a77]">
              Founders & Key Inventors
            </h4>
            <div className="flex flex-wrap gap-2">
              {startup.founders.map((founder, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#f0f3ff] text-xs font-semibold text-[#111c2d] border border-[#bcc9c6]/40"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#145598]">person</span>
                  {founder}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-[#f0f3ff] border-t border-[#bcc9c6]/30 flex items-center justify-between">
          <span className="text-xs text-[#525f75]">HTIC–MTI Incubated Venture</span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-[#525f75] hover:text-[#111c2d] cursor-pointer"
            >
              Close
            </button>
            {startup.website && (
              <a
                href={startup.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-2 bg-[#145598] text-white text-xs font-semibold rounded-lg hover:bg-[#00407a] transition-colors"
              >
                <span>Visit Project Page</span>
                <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
