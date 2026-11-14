import React, { useEffect, useState } from 'react';
import { CAPABILITIES_DATA, CapabilityPillar, SubService } from '../data/capabilitiesData';
import { MarketingVisual } from '../visuals/MarketingVisual';
import { SoftwareVisual } from '../visuals/SoftwareVisual';
import { AiVisual } from '../visuals/AiVisual';
import { ServiceVisual } from '../visuals/ServiceVisuals';
import { ArrowRight, CheckCircle2, AlertCircle, ChevronDown } from 'lucide-react';

interface CapabilitiesPageProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const CapabilitiesPage: React.FC<CapabilitiesPageProps> = ({ currentPath, onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const segments = currentPath.split('/').filter(Boolean);
  const pillarKey = segments[1] || 'digital-marketing';
  const subserviceSlug = segments[2];

  useEffect(() => {
    setOpenFaqIndex(0);
  }, [pillarKey, subserviceSlug]);

  const currentPillar: CapabilityPillar =
    CAPABILITIES_DATA[pillarKey] || CAPABILITIES_DATA['digital-marketing'];
  const activeSubservice: SubService | undefined = subserviceSlug
    ? currentPillar.subservices.find((s) => s.slug === subserviceSlug)
    : undefined;

  const renderPillarVisual = (id: string) => {
    switch (id) {
      case 'software-engineering':
        return <SoftwareVisual />;
      case 'ai-solutions':
        return <AiVisual />;
      case 'digital-marketing':
      default:
        return <MarketingVisual />;
    }
  };

  // Dedicated Subservice View (clean, non-repetitive, service-specific visual)
  if (activeSubservice) {
    return (
      <div className="flex flex-col w-full py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          {/* 1. Intro & Service-Specific Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
                <button onClick={() => onNavigate('/capabilities')} className="hover:text-white cursor-pointer">
                  Capabilities
                </button>
                <span>/</span>
                <button
                  onClick={() => onNavigate(`/capabilities/${pillarKey}`)}
                  className="hover:text-white cursor-pointer"
                >
                  {currentPillar.name}
                </button>
                <span>/</span>
                <span className="text-neutral-200">{activeSubservice.title}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                {activeSubservice.headline}
              </h1>

              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                {activeSubservice.summary}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/contact')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  <span>Discuss {activeSubservice.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ServiceVisual slug={activeSubservice.slug} />
            </div>
          </div>

          {/* 2. Challenges Addressed vs. How We Deliver */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl ring-1 ring-white/10 bg-[#0B0A12] flex flex-col gap-5">
              <div className="flex items-center gap-2 text-neutral-200 font-semibold text-base">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Challenges Addressed</span>
              </div>
              <div className="flex flex-col gap-3">
                {activeSubservice.problemsSolved.map((prob, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                    <span>{prob}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl ring-1 ring-purple-500/25 bg-[#0B0A12] flex flex-col gap-5">
              <div className="flex items-center gap-2 text-white font-semibold text-base">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>How We Deliver</span>
              </div>
              <div className="flex flex-col gap-3">
                {activeSubservice.solutions.map((sol, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Deliverables & Expected Outcomes (Qualitative, Zero Fake Benchmarks) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 p-8 rounded-2xl ring-1 ring-white/10 bg-[#0B0A12] flex flex-col gap-5">
              <h2 className="text-xl font-semibold text-white">What You Receive</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeSubservice.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-black/40 ring-1 ring-white/5 flex items-start gap-3"
                  >
                    <span className="text-xs font-semibold text-purple-400 mt-0.5">{idx + 1}.</span>
                    <span className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-2xl ring-1 ring-purple-500/25 bg-[#0B0A12] flex flex-col gap-5">
              <h2 className="text-xl font-semibold text-white">Practical Business Impact</h2>
              <div className="flex flex-col gap-4">
                {activeSubservice.outcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-purple-950/15 ring-1 ring-purple-500/20 text-xs sm:text-sm text-neutral-200 leading-relaxed"
                  >
                    {outcome}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Focused Process */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-white">How Engagement Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {activeSubservice.methodology.map((m, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl ring-1 ring-white/10 bg-[#0B0A12] flex flex-col gap-2.5"
                >
                  <div className="text-xs font-medium text-purple-400">Stage {idx + 1}</div>
                  <h3 className="text-base font-semibold text-white">{m.step}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{m.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. FAQs */}
          {activeSubservice.faqs.length > 0 && (
            <div className="flex flex-col gap-5 max-w-4xl">
              <h2 className="text-xl font-semibold text-white">Common Questions</h2>
              <div className="flex flex-col gap-3">
                {activeSubservice.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl ring-1 ring-white/10 bg-[#0B0A12] overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between text-left text-sm font-semibold text-white hover:text-purple-300 transition-colors cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-purple-400 shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 6. Direct CTA */}
          <div className="p-8 rounded-2xl ring-1 ring-purple-500/25 bg-[#0B0A12] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white">Plan Your {activeSubservice.title} Scope</h3>
              <p className="text-sm text-neutral-400 mt-1">
                Schedule a focused conversation with our team to review requirements and fit
              </p>
            </div>
            <button
              onClick={() => onNavigate('/contact')}
              className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Pillar Overview Hub
  return (
    <div className="flex flex-col w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        {/* Pillar Header */}
        <div className="flex flex-col gap-4 max-w-4xl">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span>Capabilities</span>
            <span>/</span>
            <span className="text-neutral-200">{currentPillar.name}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            {currentPillar.name}
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            {currentPillar.positioning}
          </p>
        </div>

        {/* Pillar Switcher Tabs */}
        <div className="flex items-center gap-2 pb-2 overflow-x-auto no-scrollbar">
          {Object.values(CAPABILITIES_DATA).map((pil) => (
            <button
              key={pil.id}
              onClick={() => onNavigate(`/capabilities/${pil.id}`)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                pillarKey === pil.id
                  ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {pil.name}
            </button>
          ))}
        </div>

        {/* Featured Visual for Pillar */}
        <div className="w-full">{renderPillarVisual(pillarKey)}</div>

        {/* Subservices Catalog Grid */}
        <div className="flex flex-col gap-7">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              {currentPillar.name} Services
            </h2>
            <p className="text-sm text-neutral-400 mt-1">
              Select an individual service area for practical deliverables and workflow details
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPillar.subservices.map((sub) => (
              <div
                key={sub.slug}
                onClick={() => onNavigate(`/capabilities/${pillarKey}/${sub.slug}`)}
                className="group p-6 rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12] hover:ring-purple-500/45 hover:bg-[#110F1D] transition-all cursor-pointer flex flex-col justify-between gap-5"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-purple-400">{currentPillar.name}</span>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3">
                    {sub.summary}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-neutral-400">
                  <span>{sub.deliverables.length} Core Deliverables</span>
                  <span className="text-purple-400 font-medium">View Service →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
