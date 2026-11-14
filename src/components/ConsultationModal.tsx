import React, { useState } from 'react';
import { X, Send, Check, ShieldCheck } from 'lucide-react';
import { submitProjectInquiry } from '../services/backendIntegration';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [corporateEmail, setCorporateEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [preferredTopic, setPreferredTopic] = useState<'Marketing' | 'Software' | 'AI'>('Marketing');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitProjectInquiry({
        fullName,
        corporateEmail,
        companyName,
        region: 'KSA',
        serviceInterests: [preferredTopic],
        estimatedBudget: '$25,000 – $50,000',
        projectTimeline: 'Within 30 Days',
        projectBrief: `Consultation request on ${preferredTopic}. Notes: ${notes || 'None provided'}`,
      });
      setIsDone(true);
    } catch {
      setIsDone(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-lg rounded-3xl ring-1 ring-purple-500/30 bg-[#0B0A12] shadow-[0_0_35px_rgba(168,85,247,0.2)] p-6 sm:p-8 flex flex-col gap-6">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs font-medium text-purple-400">
              Project Discovery
            </span>
            <h3 className="text-xl font-semibold text-white mt-1">Request a Discovery Call</h3>
            <p className="text-xs text-neutral-400 mt-1">
              Connect with our team to discuss architecture, marketing, or automation plans
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isDone ? (
          <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col items-center text-center gap-3 py-8">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">Discovery Request Received</h4>
            <p className="text-xs text-neutral-300 max-w-xs">
              We have received your details and will follow up by email with available session times
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-6 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
            <div className="flex flex-col gap-1.5">
              <label className="text-neutral-300 font-semibold">Your Name *</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className="p-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-neutral-300 font-semibold">Corporate Email *</label>
                <input
                  type="email"
                  required
                  value={corporateEmail}
                  onChange={(e) => setCorporateEmail(e.target.value)}
                  placeholder="corporate@domain.com"
                  className="p-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-neutral-300 font-semibold">Company *</label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Company Name"
                  className="p-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-neutral-300 font-semibold">Primary Discipline Focus</label>
              <div className="grid grid-cols-3 gap-2">
                {(['Marketing', 'Software', 'AI'] as const).map((topic) => (
                  <button
                    type="button"
                    key={topic}
                    onClick={() => setPreferredTopic(topic)}
                    className={`py-2 px-3 rounded-lg border text-center font-medium transition-colors ${
                      preferredTopic === topic
                        ? 'bg-purple-600/30 border-purple-500 text-white'
                        : 'bg-black/30 border-white/10 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-neutral-300 font-semibold">Brief Objectives (Optional)</label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="What is your current objective or primary bottleneck?"
                className="p-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="flex items-center gap-1.5 text-xs text-neutral-400">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              <span>Confidentiality NDA available upon request</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors shadow-[0_0_20px_rgba(168,85,247,0.35)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Reserving...' : 'Request Discovery Invite'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
