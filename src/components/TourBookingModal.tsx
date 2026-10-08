import React, { useState } from 'react';
import { submitToGoogleSheet } from '../utils/formSubmit';

interface TourBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TourBookingModal: React.FC<TourBookingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    facilityInterest: 'cleanroom',
    preferredDate: '',
    visitorsCount: '1-2'
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { toast } = await import('react-hot-toast');
    const toastId = toast.loading('Submitting tour request...');
    
    try {
      await submitToGoogleSheet('TOUR_BOOKINGS', formData);
      toast.success('Tour request submitted successfully!', { id: toastId });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      toast.error('Failed to submit request. Please try again.', { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      facilityInterest: 'cleanroom',
      preferredDate: '',
      visitorsCount: '1-2'
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="tour-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111c2d]/65 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-[#bcc9c6]/40 overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-4 sm:px-6 py-4 sm:py-5 bg-[#f0f3ff] border-b border-[#bcc9c6]/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#145598] text-white flex items-center justify-center shadow-sm shrink-0">
              <span className="material-symbols-outlined text-[18px] sm:text-[20px]">calendar_month</span>
            </div>
            <div>
              <h3 id="tour-modal-title" className="font-heading font-bold text-sm sm:text-base text-[#111c2d]">
                Book Lab & Cleanroom Walkthrough
              </h3>
              <p className="text-[11px] sm:text-xs text-[#525f75]">5th Floor, D-Block, IIT Madras Research Park</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#525f75] hover:text-[#111c2d] rounded-lg hover:bg-white/80 transition-colors"
            aria-label="Close scheduler"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#f0f3ff] text-[#145598] flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-3xl">check_circle</span>
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-[#111c2d]">
                  Walkthrough Request Received!
                </h4>
                <p className="text-sm text-[#525f75] max-w-sm mx-auto mt-1">
                  Our lab manager will review the request and email security clearance passes for IIT Madras Research Park within 24 business hours.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#145598] text-white text-xs font-semibold rounded-xl hover:bg-[#00407a] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#3d4947] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Dr. / Prof. / Mr. Name"
                    className="w-full px-3 py-2 text-xs border border-[#bcc9c6]/40 rounded-lg focus:outline-none focus:border-[#145598]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#3d4947] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@institution.com"
                    className="w-full px-3 py-2 text-xs border border-[#bcc9c6]/40 rounded-lg focus:outline-none focus:border-[#145598]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#3d4947] mb-1">Organization / Hospital *</label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Apollo, AIIMS, Startup"
                    className="w-full px-3 py-2 text-xs border border-[#bcc9c6]/40 rounded-lg focus:outline-none focus:border-[#145598]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#3d4947] mb-1">Facility Focus</label>
                  <select
                    value={formData.facilityInterest}
                    onChange={(e) => setFormData({ ...formData, facilityInterest: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#bcc9c6]/40 rounded-lg focus:outline-none focus:border-[#145598] bg-white"
                  >
                    <option value="cleanroom">ISO Class 7/8 Cleanrooms</option>
                    <option value="telemetry">Keysight RF & Electronics Benches</option>
                    <option value="bioprinting">Formlabs 3D Prototyping Suites</option>
                    <option value="all">Full Facility Walkthrough</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#3d4947] mb-1">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#bcc9c6]/40 rounded-lg focus:outline-none focus:border-[#145598]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#3d4947] mb-1">Visitors Count</label>
                  <select
                    value={formData.visitorsCount}
                    onChange={(e) => setFormData({ ...formData, visitorsCount: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#bcc9c6]/40 rounded-lg focus:outline-none focus:border-[#145598] bg-white"
                  >
                    <option value="1-2">1–2 Members</option>
                    <option value="3-5">3–5 Members (Research Cohort)</option>
                    <option value="6+">6+ Members (Institutional Delegation)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-[#bcc9c6]/30 mt-4">
                <span className="text-[11px] text-[#525f75]">48-hour advance notice required</span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-5 py-2.5 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer flex items-center gap-2 ${
                    isSubmitting ? 'bg-[#bcc9c6] cursor-not-allowed' : 'bg-[#145598] hover:bg-[#00407a]'
                  }`}
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Schedule Tour'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
