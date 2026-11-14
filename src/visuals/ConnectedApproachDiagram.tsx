import React, { useState } from 'react';
import { TrendingUp, Code2, Cpu, ArrowUpRight, Check, Sparkles } from 'lucide-react';

export const ConnectedApproachDiagram: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activePillar, setActivePillar] = useState<'marketing' | 'software' | 'ai'>('software');

  const pillars = {
    marketing: {
      id: 'marketing',
      title: 'Digital Marketing',
      tag: 'Growth Engine',
      icon: TrendingUp,
      accent: '#A855F7',
      description: 'Precision audience acquisition, first-party data capture, and high-performance paid advertising generating sustained customer demand',
      deliverables: [
        'Multi-channel paid advertising across Meta, Google, TikTok, and programmatic networks',
        'Conversion rate optimization and landing page performance engineering',
        'Server-side tracking and first-party conversion attribution architectures',
        'Algorithmic bid management anchored directly to real customer lifetime value',
      ],
      connectionToNext: 'Acquisition signals and customer transactions route directly into custom software backends with zero data loss',
    },
    software: {
      id: 'software',
      title: 'Custom Software Engineering',
      tag: 'Digital Core',
      icon: Code2,
      accent: '#818CF8',
      description: 'Robust web applications, enterprise business systems, and resilient cloud architectures that power high-volume operations',
      deliverables: [
        'Scalable B2B web applications, customer portals, and internal management tools',
        'Custom database architecture with ACID compliance and high-availability replicas',
        'Secure API integrations connecting payment systems, CRM platforms, and inventory',
        'Enterprise-grade security, role-based access control, and complete code ownership',
      ],
      connectionToNext: 'Transactional pipelines and database records feed structured context directly into intelligent AI automation engines',
    },
    ai: {
      id: 'ai',
      title: 'AI Solutions',
      tag: 'Cognitive Execution',
      icon: Cpu,
      accent: '#C084FC',
      description: 'Pragmatic artificial intelligence integration, automated business workflows, and custom autonomous agents built for measurable efficiency',
      deliverables: [
        'Automated document processing, invoice ingestion, and ERP synchronization',
        'Multilingual conversational assistants handling customer inquiries and routing orders',
        'Intelligent business workflow automation eliminating repetitive operational tasks',
        'Custom machine learning models tuned to private corporate data in secure environments',
      ],
      connectionToNext: 'Operational efficiencies and margin intelligence feed back into marketing campaigns to scale profitable acquisition',
    },
  };

  const current = pillars[activePillar];
  const CurrentIcon = current.icon;

  return (
    <div className={`relative flex flex-col gap-10 ${className}`}>
      {/* Triad Convergence Visual Hub */}
      <div className="relative py-4 flex flex-col items-center">
        {/* Dynamic Pillar Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl relative z-10">
          {(Object.keys(pillars) as Array<'marketing' | 'software' | 'ai'>).map((key) => {
            const item = pillars[key];
            const isSelected = activePillar === key;
            const Icon = item.icon;

            return (
              <button
                key={key}
                onClick={() => setActivePillar(key)}
                className={`relative group text-left p-6 sm:p-7 rounded-2xl transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#181328] to-[#0E0C18] ring-1 ring-purple-500/60 shadow-[0_0_35px_rgba(168,85,247,0.25)]'
                    : 'bg-[#0B0A12] hover:bg-[#120F20] ring-1 ring-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:ring-purple-500/40'
                }`}
              >
                {/* Active Indicator Top Accent */}
                {isSelected && (
                  <div
                    className="absolute top-0 left-6 right-6 h-[2px] rounded-full"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`,
                    }}
                  />
                )}

                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all"
                    style={{
                      backgroundColor: isSelected ? `${item.accent}20` : 'rgba(255,255,255,0.04)',
                      color: isSelected ? item.accent : '#9CA3AF',
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span
                    className="text-[11px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-md"
                    style={{
                      backgroundColor: isSelected ? `${item.accent}15` : 'rgba(255,255,255,0.04)',
                      color: isSelected ? item.accent : '#9CA3AF',
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-400">
                  <span>{isSelected ? 'Currently Viewing' : 'Explore Integration'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Central Convergence Connector */}
        <div className="w-full max-w-4xl mt-8 relative">
          <div className="flex flex-col items-center justify-center text-center py-6 px-8 rounded-2xl bg-[#0B0A12] ring-1 ring-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)] relative z-10">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Unified System Integration</span>
            </div>

            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
              One Unified Architecture, Not Disconnected Vendors
            </h4>

            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
              {current.connectionToNext}
            </p>
          </div>
        </div>
      </div>

      {/* Selected Discipline Deep-Dive */}
      <div className="rounded-2xl bg-[#0B0A12] ring-1 ring-purple-500/20 shadow-[0_0_25px_rgba(168,85,247,0.12)] p-6 sm:p-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6">
          <div className="flex items-start sm:items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
              style={{
                backgroundColor: `${current.accent}20`,
                color: current.accent,
              }}
            >
              <CurrentIcon className="w-7 h-7" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
                  {current.tag}
                </span>
                <span className="text-xs text-neutral-400">·</span>
                <span className="text-xs text-neutral-400">Core Discipline</span>
              </div>
              <h4 className="text-2xl font-bold text-white mt-1">{current.title}</h4>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl leading-relaxed">
            {current.description}
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 ">
          {current.deliverables.map((del, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-xl bg-black/40 ring-1 ring-white/5 flex items-start gap-3.5"
            >
              <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3" />
              </div>
              <span className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-medium">
                {del}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
