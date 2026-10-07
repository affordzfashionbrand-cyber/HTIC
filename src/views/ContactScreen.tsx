import React, { useState } from 'react';

interface ContactScreenProps {
  onOpenTour: () => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onOpenTour }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const contactFaqs = [
    {
      q: 'Can external clinical investigators and non-IIT startups visit HTIC prototyping facilities?',
      a: 'Yes. Qualified biomedical entrepreneurs, clinicians, and researchers can book scheduled access to our ISO Class 7/8 Cleanrooms, rapid additive prototyping labs, and electrical safety testing benches. All facility walkthroughs must be booked at least 48 hours in advance through the online scheduler or via email.'
    },
    {
      q: 'What is the typical turnaround timeline for incubation and grant inquiries?',
      a: 'Formal inquiries submitted through the institutional inquiry form are logged by the Secretariat within 24 business hours. If you are applying for national grants such as BIRAC BIG or DST-NIDHI, our technical screening panel conducts review cycles on a rolling bi-weekly basis.'
    },
    {
      q: 'How do we request a bilateral mutual non-disclosure agreement (NDA)?',
      a: 'You can mention the mutual NDA requirement in your message below or write directly to legal@htic.iitm.ac.in. We will countersign the standard IIT Madras institutional non-disclosure document within two business days prior to any deep architecture or patent-pending review.'
    },
    {
      q: 'Are student teams and independent innovators eligible to apply for physical incubation?',
      a: 'Absolutely. We support student innovators across all Indian universities through specialized fellowship tracks, hackathon grants, and translational incubation programs, provided their project solves a substantiated clinical healthcare challenge.'
    }
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { submitToGoogleSheet } = await import('../utils/formSubmit');
      await submitToGoogleSheet('Contact Inquiries', formData);
      setFormSubmitted(true);
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full bg-white py-12 lg:py-16 border-b border-[#bcc9c6]/30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dee8ff] text-[#145598] text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>Direct Institutional Channels</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111c2d] tracking-tight">
                Connect with the <span className="text-[#145598]">HTIC</span> & Research Labs
              </h1>
              <p className="text-base text-[#525f75] leading-relaxed max-w-2xl">
                Whether you are an aspiring MedTech innovator, clinical investigator, venture partner, or healthcare industry OEM, our translational engineering and incubation teams at IIT Madras Research Park are ready to assist you.
              </p>

            </div>

            {/* Visual Panel */}
            <div className="lg:col-span-4 w-full">
              <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-white border border-[#bcc9c6]/30 relative group">
                <img
                  className="w-full h-64 sm:h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  alt="Biomedical engineering laboratory at IIT Madras Research Park"
                  src="/images/home/IMG-20191130-WA0002_9647c2.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#263143]/85 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#145598] text-white text-[11px] font-bold w-fit">
                    <span className="material-symbols-outlined text-[14px]">sensors</span>
                    Bio-Robotics Suite Active
                  </span>
                  <p className="font-heading font-bold text-sm mt-1">D-Block 5th Floor Central Hub</p>
                  <p className="text-xs text-[#cfdaf2]">IIT Madras Research Park, Taramani</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full bg-[#f0f3ff] py-14 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mx-auto w-full">
            <div className="bg-white p-4 sm:p-10 rounded-2xl sm:rounded-3xl shadow-xl border border-[#bcc9c6]/30">
              <div className="space-y-1 mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#145598]">
                  Get in Touch
                </span>
                <h2 className="font-heading font-bold text-2xl text-[#111c2d]">
                  Contact Us
                </h2>
                <p className="text-xs text-[#525f75]">
                  Have questions or want to collaborate? Send us a message and our team will get back to you shortly.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#f0f3ff] border border-[#145598]/30 space-y-3 text-center animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#145598] text-white flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-2xl">check_circle</span>
                  </div>
                  <h4 className="font-heading font-bold text-lg text-[#111c2d]">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs text-[#525f75] max-w-sm mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. We have received your inquiry and our secretariat team will respond to <strong>{formData.email}</strong> within 24 business hours.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2 bg-[#145598] text-white text-xs font-semibold rounded-lg hover:bg-[#00407a] cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#3d4947] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#bcc9c6]/40 bg-[#f9f9ff] text-xs text-[#111c2d] focus:outline-none focus:border-[#145598] focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3d4947] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#bcc9c6]/40 bg-[#f9f9ff] text-xs text-[#111c2d] focus:outline-none focus:border-[#145598] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#3d4947] mb-1">
                        Phone Number
                      </label>
                      <div className="flex items-center">
                        <span className="inline-flex items-center px-3 py-2.5 bg-[#f0f3ff] text-[#525f75] text-xs font-bold rounded-l-xl border border-r-0 border-[#bcc9c6]/40">
                          +91
                        </span>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="98765 43210"
                          className="flex-1 min-w-0 px-3.5 py-2.5 rounded-r-xl border border-[#bcc9c6]/40 bg-[#f9f9ff] text-xs text-[#111c2d] focus:outline-none focus:border-[#145598] focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3d4947] mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can we help you?"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#bcc9c6]/40 bg-[#f9f9ff] text-xs text-[#111c2d] focus:outline-none focus:border-[#145598] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3d4947] mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#bcc9c6]/40 bg-[#f9f9ff] text-xs text-[#111c2d] focus:outline-none focus:border-[#145598] focus:bg-white resize-y"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 bg-[#145598] text-white font-heading font-semibold text-xs rounded-xl hover:bg-[#00407a] transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span>Send Message</span>
                      <span className="material-symbols-outlined text-[16px]">send</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Secretariat FAQ Accordion */}
      <section className="w-full bg-white py-14 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-1">
              <span className="text-xs font-bold text-[#145598] uppercase tracking-wider">
                Secretariat Knowledge Base
              </span>
              <h2 className="font-heading font-bold text-2xl text-[#111c2d]">
                Frequently Asked Contact Inquiries
              </h2>
              <p className="text-xs text-[#525f75]">
                Common questions regarding admissions, physical visits, and proprietary information security at HTIC.
              </p>
            </div>

            <div className="space-y-3">
              {contactFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-[#f0f3ff] border border-[#bcc9c6]/30 cursor-pointer transition-all"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-heading font-semibold text-xs sm:text-sm text-[#111c2d]">
                        {faq.q}
                      </h3>
                      <span className="material-symbols-outlined text-[#145598] shrink-0 text-[20px]">
                        {isOpen ? 'remove' : 'add'}
                      </span>
                    </div>
                    {isOpen && (
                      <p className="text-xs text-[#525f75] mt-3 pt-3 border-t border-[#bcc9c6]/20 leading-relaxed animate-in fade-in">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Location Strip */}
      <section className="w-full bg-[#dee8ff] py-12 border-t border-[#bcc9c6]/30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-[#bcc9c6]/30 space-y-1.5 shadow-xs">
              <div className="flex items-center gap-2 text-[#145598]">
                <span className="material-symbols-outlined text-[22px]">location_on</span>
                <h4 className="font-heading font-bold text-sm text-[#111c2d]">Campus Location</h4>
              </div>
              <p className="text-xs text-[#525f75] leading-relaxed">
                5th Floor, D-Block, IIT Madras Research Park,<br />
                Kanagam Road, Taramani,<br />
                Chennai – 600113, Tamil Nadu, India
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#bcc9c6]/30 space-y-1.5 shadow-xs">
              <div className="flex items-center gap-2 text-[#145598]">
                <span className="material-symbols-outlined text-[22px]">mail</span>
                <h4 className="font-heading font-bold text-sm text-[#111c2d]">Secretariat Desks</h4>
              </div>
              <p className="text-xs text-[#525f75] leading-relaxed">
                General Inquiries: <a href="mailto:mti-incubator@htic.iitm.ac.in" className="text-[#145598] font-semibold hover:underline">mti-incubator@htic.iitm.ac.in</a><br />
                Legal & IP: <span className="font-mono text-[#111c2d]">legal@htic.iitm.ac.in</span><br />
                Grants Desk: <span className="font-mono text-[#111c2d]">grants@htic.iitm.ac.in</span>
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#bcc9c6]/30 space-y-1.5 shadow-xs">
              <div className="flex items-center gap-2 text-[#145598]">
                <span className="material-symbols-outlined text-[22px]">schedule</span>
                <h4 className="font-heading font-bold text-sm text-[#111c2d]">Visiting Hours</h4>
              </div>
              <p className="text-xs text-[#525f75] leading-relaxed">
                Monday to Friday: 09:00 AM – 06:00 PM IST<br />
                Cleanroom Access: 24/7 for Badged Incubatees<br />
                Security clearance gate passes issued via email.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
