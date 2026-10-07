import React, { useState } from 'react';

interface EligibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyWithData: (data: { trl: string; stage: string; grants: string }) => void;
}

export const EligibilityModal: React.FC<EligibilityModalProps> = ({
  isOpen,
  onClose,
  onApplyWithData
}) => {
  const [step, setStep] = useState(1);
  const [stageSelection, setStageSelection] = useState<string>('benchtop');
  const [teamSelection, setTeamSelection] = useState<string>('mixed');
  const [ipSelection, setIpSelection] = useState<string>('provisional');
  const [needsSelection, setNeedsSelection] = useState<string[]>(['cleanroom', 'funding']);

  if (!isOpen) return null;

  const handleToggleNeed = (val: string) => {
    if (needsSelection.includes(val)) {
      setNeedsSelection(needsSelection.filter((n) => n !== val));
    } else {
      setNeedsSelection([...needsSelection, val]);
    }
  };

  // Derive TRL & Scheme
  const calculateResult = () => {
    if (stageSelection === 'concept') {
      return {
        trl: 'TRL 1–3',
        pathway: 'The Curious (Unmet Need Validation)',
        recommendedGrants: ['BIRAC SPARSH Fellowship', 'NIDHI EIR (Monthly Fellowship)', 'IITM Translation Grant'],
        grantAmount: '₹30k–₹50k/month + ₹5L Seed',
        timeline: '2–4 Months Clinical Immersion'
      };
    } else if (stageSelection === 'benchtop') {
      return {
        trl: 'TRL 4–5',
        pathway: 'The Builder (Functional Prototyping)',
        recommendedGrants: ['BIRAC BIG (Up to ₹50 Lakhs)', 'DST NIDHI PRAYAS (Up to ₹10 Lakhs)'],
        grantAmount: 'Up to ₹50 Lakhs (Non-Dilutive)',
        timeline: '6–9 Months Rapid Lab Tooling'
      };
    } else if (stageSelection === 'trials') {
      return {
        trl: 'TRL 6–7',
        pathway: 'The Marketer (Clinical Trials & Regulatory MD-14)',
        recommendedGrants: ['NIDHI Accelerator', 'ICMR Translation Grant', 'IITM Clinical Cohort'],
        grantAmount: 'Hospital Trials + Seed Syndicates',
        timeline: '6–12 Months Bedside Trials'
      };
    } else {
      return {
        trl: 'TRL 8–9',
        pathway: 'The Operator (Commercial Scale & Manufacturing)',
        recommendedGrants: ['VC Syndicate Match', 'CSR Corporate MedTech Calls', 'Series A Syndicate'],
        grantAmount: 'Equity Capital + Corporate Procurement',
        timeline: 'Immediate Market Scale'
      };
    }
  };

  const result = calculateResult();

  const handleApplyNow = () => {
    onApplyWithData({
      trl: result.trl,
      stage: result.pathway,
      grants: result.recommendedGrants.join(', ')
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="eligibility-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111c2d]/65 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-[#bcc9c6]/40 overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-4 sm:px-6 py-4 sm:py-5 bg-[#f0f3ff] border-b border-[#bcc9c6]/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#145598] text-white flex items-center justify-center shadow-sm shrink-0">
              <span className="material-symbols-outlined text-[18px] sm:text-[20px]">verified</span>
            </div>
            <div>
              <h3 id="eligibility-modal-title" className="font-heading font-bold text-sm sm:text-base text-[#111c2d]">
                HTIC MedTech TRL Assessment
              </h3>
              <p className="text-[11px] sm:text-xs text-[#525f75]">
                Evaluate Technology Readiness Level & Non-Dilutive Grant Eligibility
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#525f75] hover:text-[#111c2d] rounded-lg hover:bg-white/80 transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 space-y-5 sm:space-y-6 overflow-y-auto flex-1">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-bold text-[#145598] uppercase tracking-wider">
                  Step 1 of 2 · Technology Readiness
                </span>
                <h4 className="font-heading font-bold text-lg text-[#111c2d] mt-1">
                  What is the current status of your medical technology?
                </h4>
              </div>

              <div className="space-y-2">
                {[
                  {
                    id: 'concept',
                    title: 'Ideation / Conceptual Need Validation',
                    desc: 'Literature review, unmet clinical need identified, initial concept sketches (TRL 1–3)'
                  },
                  {
                    id: 'benchtop',
                    title: 'Laboratory Benchtop Proof of Concept',
                    desc: 'Working functional electronics or lab assay verified on testbench (TRL 4–5)'
                  },
                  {
                    id: 'trials',
                    title: 'Freeze-Locked Prototype / Pilot Clinical Trials',
                    desc: 'Pre-clinical validation done, ready for hospital ethics committee scrutiny (TRL 6–7)'
                  },
                  {
                    id: 'commercial',
                    title: 'CDSCO Approved / Early Commercialization',
                    desc: 'Device licensed, initiating hospital procurement and series investment (TRL 8–9)'
                  }
                ].map((item) => (
                  <label
                    key={item.id}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      stageSelection === item.id
                        ? 'border-[#145598] bg-[#f0f3ff] shadow-sm'
                        : 'border-[#bcc9c6]/40 hover:border-[#145598]/50 bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="stage_sel"
                      checked={stageSelection === item.id}
                      onChange={() => setStageSelection(item.id)}
                      className="mt-1 text-[#145598] focus:ring-[#145598]"
                    />
                    <div>
                      <p className="font-semibold text-sm text-[#111c2d]">{item.title}</p>
                      <p className="text-xs text-[#525f75] mt-0.5">{item.desc}</p>
                    </div>
                  </label>
                ))}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#145598] text-white text-xs font-semibold rounded-lg hover:bg-[#00407a] transition-all cursor-pointer"
                >
                  <span>Next: Team & Support Needs</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div>
                <span className="text-[11px] font-bold text-[#145598] uppercase tracking-wider">
                  Step 2 of 2 · Ecosystem Support
                </span>
                <h4 className="font-heading font-bold text-lg text-[#111c2d] mt-1">
                  Team Composition & Assistance Needed
                </h4>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-[#3d4947] mb-1.5">
                    Team Composition:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {[
                      { id: 'solo', label: 'Individual Clinician/Scholar' },
                      { id: 'mixed', label: 'Clinician + Engineer Pair' },
                      { id: 'startup', label: 'Incorporated Startup' },
                      { id: 'women', label: 'Women-Led Team' }
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTeamSelection(t.id)}
                        className={`p-2.5 rounded-lg border text-left font-medium transition-all cursor-pointer ${
                          teamSelection === t.id
                            ? 'border-[#145598] bg-[#f0f3ff] text-[#145598]'
                            : 'border-[#bcc9c6]/40 text-[#525f75] hover:border-[#145598]/40'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3d4947] mb-1.5">
                    Resources Most Critical to You:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {[
                      { id: 'cleanroom', label: 'ISO Class Cleanrooms' },
                      { id: 'clinical', label: 'Hospital Trial Beds' },
                      { id: 'regulatory', label: 'CDSCO Compliance' },
                      { id: 'funding', label: 'Non-Dilutive Grants' }
                    ].map((need) => (
                      <button
                        key={need.id}
                        type="button"
                        onClick={() => handleToggleNeed(need.id)}
                        className={`p-2.5 rounded-lg border text-left font-medium transition-all cursor-pointer flex items-center justify-between ${
                          needsSelection.includes(need.id)
                            ? 'border-[#145598] bg-[#f0f3ff] text-[#145598]'
                            : 'border-[#bcc9c6]/40 text-[#525f75] hover:border-[#145598]/40'
                        }`}
                      >
                        <span>{need.label}</span>
                        {needsSelection.includes(need.id) && (
                          <span className="material-symbols-outlined text-[16px]">check</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-[#525f75] hover:text-[#111c2d] font-semibold cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#145598] text-white text-xs font-semibold rounded-lg hover:bg-[#00407a] transition-all cursor-pointer"
                >
                  <span>View Diagnostic Result</span>
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="p-4 rounded-2xl bg-[#f0f3ff] border border-[#bcc9c6]/40 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#145598] text-white font-mono font-bold text-xs">
                    {result.trl}
                  </span>
                  <span className="text-xs font-semibold text-[#145598]">{result.timeline}</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#111c2d]">
                    Recommended Track: {result.pathway}
                  </h4>
                  <p className="text-xs text-[#525f75] mt-1">
                    Based on your technology state, your venture qualifies for specialized incubation tracks at IIT Madras Research Park.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold text-[#111c2d] uppercase tracking-wider">
                  Eligible Sovereign Grant Opportunities:
                </p>
                <div className="space-y-2">
                  {result.recommendedGrants.map((grant, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-[#bcc9c6]/40 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#145598] text-[18px]">
                          monetization_on
                        </span>
                        <span className="font-semibold text-[#111c2d]">{grant}</span>
                      </div>
                      <span className="text-[#145598] font-bold">Recommended</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#bcc9c6]/30">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-[#525f75] hover:text-[#111c2d] font-semibold cursor-pointer"
                >
                  Re-evaluate
                </button>
                <button
                  onClick={handleApplyNow}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#145598] text-white font-heading font-semibold text-xs sm:text-sm rounded-xl shadow-md hover:bg-[#00407a] transition-all cursor-pointer"
                >
                  <span>Apply with this Assessment</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
