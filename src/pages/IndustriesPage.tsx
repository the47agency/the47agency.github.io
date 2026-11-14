import React from 'react';
import { INDUSTRIES_DATA, IndustryItem } from '../data/industriesData';
import { ArrowRight, AlertTriangle, TrendingUp, Layers, Cpu, CheckCircle2 } from 'lucide-react';

interface IndustriesPageProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ currentPath, onNavigate }) => {
  const segments = currentPath.split('/').filter(Boolean);
  const selectedSlug = segments[1];

  const activeIndustry: IndustryItem =
    INDUSTRIES_DATA.find((ind) => ind.slug === selectedSlug) || INDUSTRIES_DATA[0];

  return (
    <div className="flex flex-col w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span>Industries</span>
            <span>/</span>
            <span className="text-neutral-200">{activeIndustry.title}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Industry Solutions
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            We adapt digital marketing, custom software engineering, and practical AI to the operational realities of businesses worldwide
          </p>
        </div>

        {/* Sector Tabs Bar */}
        <div className="flex items-center gap-2 pb-2 overflow-x-auto no-scrollbar">
          {INDUSTRIES_DATA.map((ind) => (
            <button
              key={ind.id}
              onClick={() => onNavigate(`/industries/${ind.slug}`)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeIndustry.id === ind.id
                  ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {ind.title}
            </button>
          ))}
        </div>

        {/* Selected Sector Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Challenges & Relevant Capabilities */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium text-purple-400">{activeIndustry.title}</span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                {activeIndustry.headline}
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {activeIndustry.summary}
              </p>
            </div>

            {/* Business Challenges */}
            <div className="p-7 rounded-2xl ring-1 ring-white/10 bg-[#0B0A12] flex flex-col gap-4">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Common Business Challenges</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {activeIndustry.challenges.map((ch, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                    <span>{ch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Relevant 47 Capabilities */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-white">How 47 Agency Supports This Sector</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activeIndustry.capabilitiesApplied.map((app, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12] flex flex-col gap-2.5"
                  >
                    <div className="flex items-center gap-2 text-purple-300 font-semibold text-xs">
                      {idx === 0 && <TrendingUp className="w-3.5 h-3.5 text-purple-400 shrink-0" />}
                      {idx === 1 && <Layers className="w-3.5 h-3.5 text-indigo-400 shrink-0" />}
                      {idx === 2 && <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                      <span>{app.pillar}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{app.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Practical Deliverables & Consultation CTA */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-7 rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12] flex flex-col gap-4">
              <h3 className="text-base font-semibold text-white">Practical Deliverables</h3>
              <div className="flex flex-col gap-3">
                {activeIndustry.practicalDeliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-7 rounded-2xl ring-1 ring-purple-500/25 bg-[#0B0A12] flex flex-col gap-3">
              <h3 className="text-base font-semibold text-white">
                Discuss Your {activeIndustry.title} Scope
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Speak with our team about how marketing, software, or AI can address your priorities
              </p>
              <button
                onClick={() => onNavigate('/contact')}
                className="mt-2 w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
