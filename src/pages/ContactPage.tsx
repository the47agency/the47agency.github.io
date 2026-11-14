import React, { useState } from 'react';
import { submitProjectInquiry, ContactSubmissionPayload } from '../services/backendIntegration';
import { MapPin, Send, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { HeroWireframe47 } from '../visuals/HeroWireframe47';

interface ContactPageProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ currentPath, onNavigate }) => {
  const [activeMode, setActiveMode] = useState<'project' | 'consultation' | 'general'>('project');

  // Form State
  const [fullName, setFullName] = useState('');
  const [corporateEmail, setCorporateEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [region, setRegion] = useState<'KSA' | 'UAE' | 'Qatar' | 'Kuwait' | 'Turkey' | 'International'>('KSA');
  const [serviceInterests, setServiceInterests] = useState<('Marketing' | 'Software' | 'AI')[]>(['Marketing']);
  const [estimatedBudget, setEstimatedBudget] = useState('$25,000 – $50,000');
  const [projectTimeline, setProjectTimeline] = useState('Within 30 Days');
  const [projectBrief, setProjectBrief] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<{ ref: string; msg: string } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const toggleService = (svc: 'Marketing' | 'Software' | 'AI') => {
    if (serviceInterests.includes(svc)) {
      if (serviceInterests.length > 1) {
        setServiceInterests(serviceInterests.filter((s) => s !== svc));
      }
    } else {
      setServiceInterests([...serviceInterests, svc]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setIsSubmitting(true);

    try {
      const payload: ContactSubmissionPayload = {
        fullName,
        corporateEmail,
        phone,
        companyName,
        region,
        serviceInterests,
        estimatedBudget,
        projectTimeline,
        projectBrief,
      };

      const result = await submitProjectInquiry(payload);
      setSubmissionSuccess({
        ref: result.referenceId || '47-LEAD-CONFIRMED',
        msg: result.message,
      });

      try {
        confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
      } catch {}
    } catch (err: any) {
      setErrorMsg(err.message || 'Submission error  Please ensure all required fields are complete');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span>Contact</span>
            <span>/</span>
            <span className="text-neutral-200">Start a Project</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Initiate a Project
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Share your marketing, custom software, or AI objectives to schedule an initial discovery conversation with our team
          </p>
        </div>

        {/* Contact Modes */}
        <div className="flex items-center gap-2  pb-4">
          <button
            onClick={() => setActiveMode('project')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeMode === 'project'
                ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.35)]'
                : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
            }`}
          >
            Start a Scoped Project
          </button>
          <button
            onClick={() => setActiveMode('consultation')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeMode === 'consultation'
                ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.35)]'
                : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
            }`}
          >
            Technical Discovery Session
          </button>
          <button
            onClick={() => setActiveMode('general')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeMode === 'general'
                ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.35)]'
                : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
            }`}
          >
            Regional Offices &amp; General Inquiries
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#0E0D17]">
            {submissionSuccess ? (
              <div className="flex flex-col gap-6 py-8">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Check className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-emerald-400 font-bold">
                    Inquiry Reference: {submissionSuccess.ref}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">Brief Received &amp; Queued</h3>
                  <p className="text-xs text-neutral-300 mt-2 leading-relaxed max-w-lg">
                    {submissionSuccess.msg}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-neutral-400 max-w-md">
                  <div className="font-semibold text-white mb-1">What Happens Next:</div>
                  <ol className="list-decimal pl-4 flex flex-col gap-1 text-[11px]">
                    <li>Our technical director reviews your brief against regional benchmarks</li>
                    <li>We dispatch our standard bilateral Mutual NDA to your corporate email</li>
                    <li>You receive an invitation to select a 45-minute technical discovery session</li>
                  </ol>
                </div>

                <div>
                  <button
                    onClick={() => {
                      setSubmissionSuccess(null);
                      setProjectBrief('');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-xs">
                {errorMsg && (
                  <div className="p-3.5 rounded-lg bg-rose-950/40 border border-rose-500/40 text-rose-300">
                    {errorMsg}
                  </div>
                )}

                {/* Capability Multi-Select */}
                <div className="flex flex-col gap-2">
                  <label className="text-neutral-300 font-semibold">
                    Capabilities of Interest (Select All That Apply) *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'Marketing', label: 'Digital Marketing & Media' },
                      { id: 'Software', label: 'Custom Software & Systems' },
                      { id: 'AI', label: 'AI Solutions & Automation' },
                    ].map((svc) => {
                      const isSelected = serviceInterests.includes(svc.id as any);
                      return (
                        <button
                          type="button"
                          key={svc.id}
                          onClick={() => toggleService(svc.id as any)}
                          className={`p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-purple-600/30 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                              : 'bg-black/40 border-white/10 text-neutral-400 hover:text-white'
                          }`}
                        >
                          <div className="font-semibold text-xs text-white">{svc.label}</div>
                          <div className="text-[10px] text-neutral-400 mt-0.5">
                            {isSelected ? '✓ Selected' : '+ Include'}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Contact info grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-300 font-semibold">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Faisal Al-Hassan"
                      className="p-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-300 font-semibold">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      value={corporateEmail}
                      onChange={(e) => setCorporateEmail(e.target.value)}
                      placeholder="faisal@company.com"
                      className="p-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-300 font-semibold">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Horizon Retail Logistics"
                      className="p-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-300 font-semibold">Direct Phone / WhatsApp</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+966 50 123 4567"
                      className="p-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                {/* Region & Budget Tier */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-300 font-semibold">Primary Operating Region</label>
                    <select
                      value={region}
                      onChange={(e) => setRegion(e.target.value as any)}
                      className="p-3 rounded-lg bg-[#0C0B14] border border-white/10 text-white focus:outline-none focus:border-purple-500"
                    >
                      <option value="KSA">Saudi Arabia (KSA)</option>
                      <option value="UAE">United Arab Emirates (UAE)</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Turkey">Turkey</option>
                      <option value="International">International B2B</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-neutral-300 font-semibold">Estimated Monthly or Project Budget</label>
                    <select
                      value={estimatedBudget}
                      onChange={(e) => setEstimatedBudget(e.target.value)}
                      className="p-3 rounded-lg bg-[#0C0B14] border border-white/10 text-white focus:outline-none focus:border-purple-500"
                    >
                      <option value="$10,000 – $25,000">$10,000 – $25,000 (Sprint / Retainer)</option>
                      <option value="$25,000 – $50,000">$25,000 – $50,000 (Growth Tier)</option>
                      <option value="$50,000 – $100,000">$50,000 – $100,000 (Enterprise Tier)</option>
                      <option value="$100,000+">$100,000+ (Multi-Platform Transformation)</option>
                    </select>
                  </div>
                </div>

                {/* Project Brief */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-neutral-300 font-semibold">Project Overview &amp; Goals *</label>
                  <textarea
                    rows={4}
                    required
                    value={projectBrief}
                    onChange={(e) => setProjectBrief(e.target.value)}
                    placeholder="Describe your current tech stack, target audience, acquisition hurdles, or required software systems"
                    className="p-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors shadow-[0_0_30px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Securing & Transmitting Brief...' : 'Transmit Project Brief for Review'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Network Identity & Office Location */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Animated 47 Mesh Logo Card */}
            <div className="p-6 rounded-3xl ring-1 ring-purple-500/25 bg-[#0B0A12] shadow-[0_0_25px_rgba(168,85,247,0.12)] flex flex-col items-center justify-center overflow-hidden relative">
              <div className="w-full h-44 relative">
                <HeroWireframe47 className="w-full h-full" />
              </div>
              <div className="text-center mt-2">
                <div className="text-xs font-semibold text-white">47 Agency</div>
                <div className="text-xs text-purple-300 mt-0.5">Digital Marketing, Custom Software &amp; AI Solutions</div>
              </div>
            </div>

            {/* Office Headquarters Box */}
            <div className="p-6 rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12] shadow-[0_0_25px_rgba(168,85,247,0.12)] flex flex-col gap-4">
              <span className="text-xs font-semibold text-white">
                Office Location
              </span>

              <div className="flex items-start gap-2.5 text-xs text-neutral-300">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong className="text-white block mb-0.5">47 Agency</strong>
                  <span className="text-neutral-300 text-xs">Gökevler Mah, Kristalşehir, Blok 16, Ofis 255, Adnan Kahveci, 34510 Esenyurt/İstanbul</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="text-neutral-400">Global Reach</span>
                <span className="text-purple-300 font-medium">Serving Businesses Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
