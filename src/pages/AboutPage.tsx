import React, { useEffect, useState } from 'react';
import { ShieldCheck, Target, Zap, Code2, ArrowRight, RefreshCw } from 'lucide-react';

interface AboutPageProps {
  initialTab?: string;
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ initialTab = 'story', onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [activeMethodNode, setActiveMethodNode] = useState<number>(0);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const tabs = [
    { id: 'story', label: 'Our Story' },
    { id: 'philosophy', label: 'Our Philosophy' },
    { id: 'approach', label: 'Our Approach' },
    { id: 'method', label: 'The 47 Method' },
    { id: 'values', label: 'Our Values' },
    { id: 'brand', label: 'Brand Identity System' },
  ];

  const methodNodes = [
    {
      title: 'Signal Capture',
      summary:
        'Clean conversion events and campaign performance data flow consistently from websites and applications back into advertising channels',
    },
    {
      title: 'Architecture Adaptation',
      summary:
        'Software workflows, checkout steps, and internal systems are refined around how customers and teams actually interact',
    },
    {
      title: 'Cognitive Acceleration',
      summary:
        'Practical AI tools process repetitive inquiries and structured records so teams spend less time on manual coordination',
    },
  ];

  const approachStages = [
    {
      title: 'Discovery',
      description:
        'Review existing ad accounts, tracking setup, software workflows, and operational bottlenecks to establish a clear starting point',
    },
    {
      title: 'Architecture',
      description:
        'Define system structure, integration boundaries, campaign messaging angles, and realistic delivery milestones before execution',
    },
    {
      title: 'Engineering',
      description:
        'Build modular software, launch structured campaigns, and configure practical AI workflows in focused, transparent increments',
    },
    {
      title: 'Optimization',
      description:
        'Refine targeting, conversion flows, and system performance based on observed outcomes rather than assumptions',
    },
  ];

  return (
    <div className="flex flex-col w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Page Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span>About</span>
            <span>/</span>
            <span className="text-neutral-200">{tabs.find((t) => t.id === activeTab)?.label || 'Overview'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Engineering Digital Growth
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            47 Agency brings together digital marketing, custom software engineering, and practical AI solutions to help organizations operate cleanly and grow worldwide
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-purple-600/25 ring-1 ring-purple-500/50 text-white shadow-[0_0_20px_rgba(168,85,247,0.18)]'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Panels */}
        <div className="flex flex-col gap-12">
          {/* 1. OUR STORY */}
          {activeTab === 'story' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12] flex flex-col gap-5 text-neutral-300 leading-relaxed text-sm sm:text-base">
                <h2 className="text-2xl font-semibold text-white">Why 47 Agency Exists</h2>
                <p>
                  Many growing companies split their digital operations across separate vendors: one team manages paid ads, another builds websites or internal tools, and a third advises on automation
                </p>
                <p>
                  When growth slows down or conversion paths break, disconnected providers work from different priorities and incomplete context
                </p>
                <p>
                  47 Agency was established to connect paid advertising, custom software engineering, and AI solutions within a single cohesive practice so acquisition and technology reinforce each other
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="p-6 rounded-2xl ring-1 ring-white/10 bg-[#0B0A12]">
                  <div className="text-sm font-semibold text-white mb-1.5">Digital Marketing</div>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Targeted audience acquisition, paid advertising campaigns, and practical conversion optimization
                  </p>
                </div>
                <div className="p-6 rounded-2xl ring-1 ring-white/10 bg-[#0B0A12]">
                  <div className="text-sm font-semibold text-white mb-1.5">Custom Software Engineering</div>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Tailored web applications, business management systems, B2B portals, and API integrations
                  </p>
                </div>
                <div className="p-6 rounded-2xl ring-1 ring-white/10 bg-[#0B0A12]">
                  <div className="text-sm font-semibold text-white mb-1.5">AI Solutions</div>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Practical workflow automation, document handling, and business assistants connected to real tools
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 2. OUR PHILOSOPHY */}
          {activeTab === 'philosophy' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12] flex flex-col gap-4">
                <Target className="w-7 h-7 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Mathematical Rigor</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Campaign and product decisions are anchored in unit economics, acquisition costs, and verified conversion data rather than surface metrics
                </p>
              </div>

              <div className="p-8 rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12] flex flex-col gap-4">
                <Code2 className="w-7 h-7 text-indigo-400" />
                <h3 className="text-xl font-semibold text-white">Clean Engineering</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Software is structured with clear modules, typed interfaces, and maintainable databases so your team can evolve the system over time
                </p>
              </div>

              <div className="p-8 rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12] flex flex-col gap-4">
                <Zap className="w-7 h-7 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">Pragmatic AI</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  We apply AI where it solves a concrete bottleneck such as document parsing, internal search, or routine support coordination
                </p>
              </div>
            </div>
          )}

          {/* 3. OUR APPROACH */}
          {activeTab === 'approach' && (
            <div className="flex flex-col gap-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                  Discovery → Architecture → Engineering → Optimization
                </h2>
                <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                  A four-stage workflow designed to keep scope transparent and align marketing, software, and automation around shared objectives
                </p>
              </div>

              {/* Connected 4-Stage Pipeline with Subtle Animated Connector */}
              <div className="relative pt-2">
                <div
                  className="hidden lg:block absolute top-11 left-[12%] right-[12%] h-[2px] bg-white/10 overflow-hidden pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-[pulse_3s_ease-in-out_infinite]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                  {approachStages.map((stage, idx) => (
                    <div
                      key={stage.title}
                      className="p-6 rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12] flex flex-col gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-600/20 ring-1 ring-purple-500/40 text-purple-300 text-xs font-semibold flex items-center justify-center">
                        {idx + 1}
                      </div>
                      <h3 className="text-base font-semibold text-white">{stage.title}</h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 4. THE 47 METHOD */}
          {activeTab === 'method' && (
            <div className="p-8 sm:p-10 rounded-3xl ring-1 ring-purple-500/25 bg-[#0B0A12] shadow-[0_0_30px_rgba(168,85,247,0.1)] flex flex-col gap-10">
              <div className="max-w-2xl flex flex-col gap-3">
                <span className="text-xs font-medium text-neutral-400">Core Operating Model</span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                  The Closed-Loop Feedback Architecture
                </h2>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  The 47 Method connects paid acquisition, software systems, and operational AI in a continuous loop so insights from one area improve the next
                </p>
              </div>

              {/* Restrained Interactive Closed-Loop Process Diagram */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 flex items-center justify-center p-6 rounded-2xl bg-black/40 ring-1 ring-white/5">
                  <svg
                    viewBox="0 0 320 280"
                    className="w-full max-w-[300px] h-auto"
                    role="img"
                    aria-label="Closed-Loop Feedback Architecture connecting Signal Capture, Architecture Adaptation, and Cognitive Acceleration"
                  >
                    <defs>
                      <linearGradient id="loopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#A855F7" stopOpacity="0.85" />
                        <stop offset="50%" stopColor="#818CF8" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#C084FC" stopOpacity="0.85" />
                      </linearGradient>
                    </defs>

                    {/* Outer subtle loop ring */}
                    <circle
                      cx="160"
                      cy="145"
                      r="86"
                      fill="none"
                      stroke="rgba(168, 85, 247, 0.22)"
                      strokeWidth="1.5"
                    />

                    {/* Rotating subtle flow arc */}
                    <circle
                      cx="160"
                      cy="145"
                      r="86"
                      fill="none"
                      stroke="url(#loopGrad)"
                      strokeWidth="2.5"
                      strokeDasharray="110 430"
                      strokeLinecap="round"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 160 145"
                        to="360 160 145"
                        dur="12s"
                        repeatCount="indefinite"
                      />
                    </circle>

                    {/* Center Label */}
                    <text
                      x="160"
                      y="141"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="13"
                      fontWeight="600"
                    >
                      47 Method
                    </text>
                    <text
                      x="160"
                      y="159"
                      textAnchor="middle"
                      fill="#A3A3A3"
                      fontSize="10"
                    >
                      Continuous Loop
                    </text>

                    {/* Node 1: Top */}
                    <g
                      onClick={() => setActiveMethodNode(0)}
                      className="cursor-pointer"
                    >
                      <circle
                        cx="160"
                        cy="59"
                        r="18"
                        fill={activeMethodNode === 0 ? '#7C3AED' : '#131022'}
                        stroke="#A855F7"
                        strokeWidth={activeMethodNode === 0 ? '2' : '1.2'}
                      />
                      <text x="160" y="63" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="600">
                        1
                      </text>
                      <text x="160" y="28" textAnchor="middle" fill="#E5E5E5" fontSize="11" fontWeight="500">
                        Signal Capture
                      </text>
                    </g>

                    {/* Node 2: Bottom Right */}
                    <g
                      onClick={() => setActiveMethodNode(1)}
                      className="cursor-pointer"
                    >
                      <circle
                        cx="235"
                        cy="188"
                        r="18"
                        fill={activeMethodNode === 1 ? '#7C3AED' : '#131022'}
                        stroke="#818CF8"
                        strokeWidth={activeMethodNode === 1 ? '2' : '1.2'}
                      />
                      <text x="235" y="192" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="600">
                        2
                      </text>
                      <text x="240" y="226" textAnchor="middle" fill="#E5E5E5" fontSize="11" fontWeight="500">
                        Architecture
                      </text>
                    </g>

                    {/* Node 3: Bottom Left */}
                    <g
                      onClick={() => setActiveMethodNode(2)}
                      className="cursor-pointer"
                    >
                      <circle
                        cx="85"
                        cy="188"
                        r="18"
                        fill={activeMethodNode === 2 ? '#7C3AED' : '#131022'}
                        stroke="#C084FC"
                        strokeWidth={activeMethodNode === 2 ? '2' : '1.2'}
                      />
                      <text x="85" y="192" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="600">
                        3
                      </text>
                      <text x="80" y="226" textAnchor="middle" fill="#E5E5E5" fontSize="11" fontWeight="500">
                        Acceleration
                      </text>
                    </g>
                  </svg>
                </div>

                {/* 3 Loop Pillars */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                  {methodNodes.map((node, idx) => (
                    <button
                      type="button"
                      key={node.title}
                      onClick={() => setActiveMethodNode(idx)}
                      className={`text-left p-5 rounded-2xl transition-all cursor-pointer ${
                        activeMethodNode === idx
                          ? 'bg-purple-950/30 ring-1 ring-purple-500/45'
                          : 'bg-black/40 ring-1 ring-white/5 hover:ring-white/15'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-sm font-semibold text-white">
                          {idx + 1}. {node.title}
                        </span>
                        <RefreshCw
                          className={`w-3.5 h-3.5 ${
                            activeMethodNode === idx ? 'text-purple-400' : 'text-neutral-600'
                          }`}
                        />
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {node.summary}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 5. OUR VALUES */}
          {activeTab === 'values' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-7 rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12] flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-purple-400">
                  <ShieldCheck className="w-4 h-4" />
                  <h3 className="text-base font-semibold text-white">Client Ownership</h3>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Custom application code and advertising accounts belong to your organization as defined in your project agreement, with clear handoff documentation
                </p>
              </div>

              <div className="p-7 rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12] flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-purple-400">
                  <ShieldCheck className="w-4 h-4" />
                  <h3 className="text-base font-semibold text-white">Commercial Integrity</h3>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  We advise openly on feasibility, expected effort, and risk before starting work so budgets go toward practical priorities
                </p>
              </div>

              <div className="p-7 rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12] flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-purple-400">
                  <ShieldCheck className="w-4 h-4" />
                  <h3 className="text-base font-semibold text-white">Structured Delivery</h3>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  We pair iterative milestones with disciplined testing and review rather than rushing unfinished work into production
                </p>
              </div>

              <div className="p-7 rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12] flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-purple-400">
                  <ShieldCheck className="w-4 h-4" />
                  <h3 className="text-base font-semibold text-white">Worldwide Collaboration</h3>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Based in Istanbul and structured to collaborate smoothly with businesses operating across international time zones
                </p>
              </div>
            </div>
          )}

          {/* 6. BRAND IDENTITY SYSTEM */}
          {activeTab === 'brand' && (
            <div className="flex flex-col gap-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                  Brand Identity System
                </h2>
                <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                  Built around the 47 Agency geometric emblem, structured proportions, and restrained dark-surface contrast
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 rounded-2xl overflow-hidden ring-1 ring-purple-500/20 bg-black">
                  <img
                    src="/assets/aistudio/5994818389035126908_4017aa75.jpg"
                    alt="47 Agency Official Brand Guidelines Sheet"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="lg:col-span-4 flex flex-col gap-4 text-sm text-neutral-300">
                  <div className="p-5 rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12]">
                    <div className="font-semibold text-white mb-1.5">Geometric Symbol</div>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      The 47 mark pairs clean diagonal geometry with an inner faceted violet fold across dark and light applications
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12]">
                    <div className="font-semibold text-white mb-3">Core Palette</div>
                    <ul className="flex flex-col gap-2.5 text-xs text-neutral-300">
                      <li className="flex items-center gap-2.5">
                        <span className="w-3.5 h-3.5 rounded bg-[#08080A] ring-1 ring-white/25 shrink-0" />
                        <span>Deep Black Canvas (#08080A)</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-3.5 h-3.5 rounded bg-[#7C3AED] shrink-0" />
                        <span>Electric Violet (#7C3AED)</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-3.5 h-3.5 rounded bg-[#A855F7] shrink-0" />
                        <span>Accent Purple (#A855F7)</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-3.5 h-3.5 rounded bg-[#FFFFFF] shrink-0" />
                        <span>Primary Ink (#FFFFFF)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12]">
                    <div className="font-semibold text-white mb-1.5">Proportions &amp; Clear Space</div>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      Maintained at its natural 1.463:1 mark proportion with clear perimeter spacing around the symbol and wordmark
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-4 p-8 rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold text-white">Work with 47 Agency</h3>
            <p className="text-sm text-neutral-400 mt-1">
              Discuss how our team can support your marketing, software, or AI initiatives
            </p>
          </div>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Start a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
