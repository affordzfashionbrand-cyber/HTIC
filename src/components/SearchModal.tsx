import React, { useState, useEffect, useId } from 'react';
import { STARTUPS_DATA, PROGRAMS_DATA, TEAM_DATA } from '../data/mockData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectStartup: (startupId: string) => void;
  onSelectProgram: (programId: string) => void;
  onSelectTeam: (teamId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectStartup,
  onSelectProgram,
  onSelectTeam
}) => {
  const [query, setQuery] = useState('');
  const searchInputId = useId();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const filteredStartups = STARTUPS_DATA.filter(
    (s) =>
      !q ||
      s.name.toLowerCase().includes(q) ||
      s.tagline.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.sectorLabel.toLowerCase().includes(q)
  );

  const filteredPrograms = PROGRAMS_DATA.filter(
    (p) =>
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.subTitle.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q)
  );

  const filteredTeam = TEAM_DATA.filter(
    (t) =>
      !q ||
      t.name.toLowerCase().includes(q) ||
      t.role.toLowerCase().includes(q) ||
      t.department.toLowerCase().includes(q) ||
      t.institution.toLowerCase().includes(q)
  );

  const totalResults =
    (q ? filteredStartups.length : 0) +
    (q ? filteredPrograms.length : 0) +
    (q ? filteredTeam.length : 0);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search HTIC Directory"
      className="fixed inset-0 z-50 flex items-start justify-center pt-6 sm:pt-20 px-3 sm:px-4 bg-[#111c2d]/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#bcc9c6]/40 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-3.5 sm:px-4 py-3 sm:py-3.5 border-b border-[#bcc9c6]/30 gap-2.5 sm:gap-3">
          <span className="material-symbols-outlined text-[#145598] text-[20px] sm:text-[22px] shrink-0">search</span>
          <label htmlFor={searchInputId} className="sr-only">Search startups, grants, team, technologies</label>
          <input
            id={searchInputId}
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search startups, grants, clinical mentors..."
            className="w-full min-w-0 text-sm sm:text-base bg-transparent border-none outline-none text-[#111c2d] placeholder-[#6d7a77]"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#6d7a77] hover:text-[#111c2d] rounded shrink-0"
              aria-label="Clear search"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-mono bg-[#f0f3ff] text-[#525f75] rounded border border-[#bcc9c6]/40 shrink-0">
            ESC
          </kbd>
        </div>

        {/* Search Results Container */}
        <div className="max-h-[70vh] sm:max-h-[60vh] overflow-y-auto p-3.5 sm:p-4 space-y-5 sm:space-y-6">
          {!q && (
            <div className="text-xs text-[#525f75] space-y-2">
              <p className="font-semibold text-[#111c2d] uppercase tracking-wider text-[11px]">
                Suggested Searches
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Surgical Robotics', 'BIRAC BIG', 'Cleanrooms', 'CDSCO Approval', 'SPARSH Grant', 'Qualentra', 'Kornerstone'].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-2.5 py-1 rounded bg-[#f0f3ff] text-[#145598] text-xs font-medium hover:bg-[#e7eeff] cursor-pointer transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {q && totalResults === 0 && (
            <div className="text-center py-10 text-[#525f75]">
              <span className="material-symbols-outlined text-4xl text-[#bcc9c6]">search_off</span>
              <p className="font-heading font-semibold text-base text-[#111c2d] mt-2">
                No matching results found
              </p>
              <p className="text-xs mt-1">
                Try searching for keywords like "robotics", "BIG", "diagnostics", or "cleanroom".
              </p>
            </div>
          )}

          {/* Startups Results */}
          {filteredStartups.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-[#6d7a77] uppercase tracking-wider mb-2">
                <span>Startups & Technologies ({filteredStartups.length})</span>
              </div>
              <div className="space-y-1.5">
                {filteredStartups.slice(0, 5).map((startup) => (
                  <button
                    key={startup.id}
                    onClick={() => {
                      onSelectStartup(startup.id);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#f0f3ff] transition-colors text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="w-8 h-8 rounded-lg bg-[#e7eeff] text-[#145598] font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-[#145598] group-hover:text-white transition-colors">
                        {startup.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h5 className="text-sm font-semibold text-[#111c2d] group-hover:text-[#145598] truncate">
                          {startup.name}
                        </h5>
                        <p className="text-xs text-[#525f75] truncate">{startup.tagline}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-[#145598] shrink-0 ml-2 hidden sm:inline">
                      {startup.sectorLabel}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Programs Results */}
          {filteredPrograms.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-[#6d7a77] uppercase tracking-wider mb-2">
                <span>Funding Programs & Grants ({filteredPrograms.length})</span>
              </div>
              <div className="space-y-1.5">
                {filteredPrograms.slice(0, 4).map((program) => (
                  <button
                    key={program.id}
                    onClick={() => {
                      onSelectProgram(program.id);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#f0f3ff] transition-colors text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="w-8 h-8 rounded-lg bg-[#e7eeff] text-[#145598] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[18px]">payments</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h5 className="text-sm font-semibold text-[#111c2d] group-hover:text-[#145598] truncate">
                          {program.title}
                        </h5>
                        <p className="text-xs text-[#525f75] truncate">{program.subTitle}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#145598] shrink-0 ml-2">
                      {program.grantAmount}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Team & Advisory Results */}
          {filteredTeam.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-[#6d7a77] uppercase tracking-wider mb-2">
                <span>Mentors & Governance ({filteredTeam.length})</span>
              </div>
              <div className="space-y-1.5">
                {filteredTeam.slice(0, 4).map((member) => (
                  <button
                    key={member.id}
                    onClick={() => {
                      onSelectTeam(member.id);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#f0f3ff] transition-colors text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-8 h-8 rounded-full object-cover shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <h5 className="text-sm font-semibold text-[#111c2d] group-hover:text-[#145598] truncate">
                          {member.name}
                        </h5>
                        <p className="text-xs text-[#525f75] truncate">{member.role}</p>
                      </div>
                    </div>
                    <span className="text-xs text-[#525f75] shrink-0 ml-2 hidden sm:inline">
                      {member.institution}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-3.5 sm:px-4 py-2.5 bg-[#f0f3ff] border-t border-[#bcc9c6]/20 flex flex-wrap items-center justify-between gap-1.5 text-[11px] sm:text-xs text-[#525f75]">
          <span>IIT Madras HTIC MedTech Repository</span>
          <span className="hidden sm:inline">Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
