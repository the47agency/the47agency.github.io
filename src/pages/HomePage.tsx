import React, { useState } from 'react';
import { FullScreenHeroNetwork } from '../visuals/FullScreenHeroNetwork';
import { HeroWireframe47 } from '../visuals/HeroWireframe47';
import { MarketingVisual } from '../visuals/MarketingVisual';
import { SoftwareVisual } from '../visuals/SoftwareVisual';
import { AiVisual } from '../visuals/AiVisual';
import { ConnectedApproachDiagram } from '../visuals/ConnectedApproachDiagram';
import { FinalCtaNetwork } from '../visuals/FinalCtaNetwork';
import { INDUSTRIES_DATA } from '../data/industriesData';
import { INSIGHTS_DATA } from '../data/insightsData';
import {
  ArrowRight,
  ArrowUpRight,
  TrendingUp,
  Code2,
  Cpu,
  CheckCircle2,
  Clock,
  Check,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeCapabilityTab, setActiveCapabilityTab] = useState<'growth' | 'engineering' | 'intelligence'>('growth');
  const [activeIndustryId, setActiveIndustryId] = useState<string>('ecommerce');

  const selectedIndustry = INDUSTRIES_DATA.find((i) => i.id === activeIndustryId) || INDUSTRIES_DATA[0];

  return (
    <div className="flex flex-col w-full bg-[#08080a] text-slate-100">
      {/* =========================================================================
          HERO SECTION — FULL-SCREEN IMMERSIVE ANIMATED DIGITAL NETWORK & 47 MESH
         ========================================================================= */}
      <section className="relative min-h-[92vh] md:min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#08080a] py-16 lg:py-24">
        {/* Full-bleed Three.js animated digital network */}
        <FullScreenHeroNetwork />

        {/* Subtle radial illumination behind visual */}
        <div
          className="absolute inset-0 pointer-events-none bg-radial-[at_center_center] from-[#1d0b36]/35 via-[#08080a]/40 to-[#08080a]/85"
          aria-hidden="true"
        />

        {/* Hero Editorial Composition */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
          {/* Animated 3D Wireframe Mesh of the Number 47 (Moved slightly upward per Instruction 3) */}
          <div className="w-full max-w-2xl flex flex-col items-center justify-center -translate-y-4 sm:-translate-y-7">
            <HeroWireframe47 className="w-full h-[220px] sm:h-[280px] md:h-[340px]" />
          </div>

          {/* Descriptive Paragraph (Preserved, extra space created above it, no period) */}
          <p className="mt-4 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl text-balance">
            We combine marketing performance, custom software engineering, and artificial intelligence to help businesses grow, operate, and compete across the Middle East and international markets
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-[0.15em] transition-all shadow-[0_0_35px_rgba(168,85,247,0.5)] flex items-center gap-2 cursor-pointer group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('/capabilities')}
              className="px-7 py-4 rounded-xl ring-1 ring-purple-500/30 bg-black/40 backdrop-blur-md hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-[0.15em] transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(168,85,247,0.15)]"
            >
              <span>Explore Our Capabilities</span>
              <ArrowUpRight className="w-4 h-4 text-purple-400" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAPABILITIES SECTION — CONSISTENT TWO-COLUMN LAYOUT ACROSS ALL THREE TABS
         ========================================================================= */}
      <section className="py-24 bg-[#0A0910]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-white">
                Three Integrated Disciplines
              </h2>
            </div>
            <p className="text-neutral-400 text-sm max-w-md">
              Most companies hire three separate vendors that point fingers at each other
              We unify paid customer acquisition, custom software, and cognitive AI under one engineering standard
            </p>
          </div>

          {/* Interactive Capability Switcher Tabs */}
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveCapabilityTab('growth')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeCapabilityTab === 'growth'
                  ? 'bg-purple-600 text-white shadow-[0_0_25px_rgba(168,85,247,0.4)]'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <TrendingUp className="w-4 h-4 text-purple-300" />
              <span>01  Digital Marketing</span>
            </button>

            <button
              onClick={() => setActiveCapabilityTab('engineering')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeCapabilityTab === 'engineering'
                  ? 'bg-purple-600 text-white shadow-[0_0_25px_rgba(168,85,247,0.4)]'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <Code2 className="w-4 h-4 text-indigo-300" />
              <span>02  Custom Software Engineering</span>
            </button>

            <button
              onClick={() => setActiveCapabilityTab('intelligence')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeCapabilityTab === 'intelligence'
                  ? 'bg-purple-600 text-white shadow-[0_0_25px_rgba(168,85,247,0.4)]'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <Cpu className="w-4 h-4 text-cyan-300" />
              <span>03  AI Solutions</span>
            </button>
          </div>

          {/* TAB 1: DIGITAL MARKETING (Left: explanation, Right: visual with Meta, Google, TikTok, Snapchat, LinkedIn) */}
          {activeCapabilityTab === 'growth' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 flex flex-col gap-5">
                <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase">
                  <span>Paid Advertising &amp; Growth</span>
                </div>
                <h3 className="text-3xl font-extrabold text-white leading-tight">
                  Targeted Paid Advertising &amp; Server-Side Attribution
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  We manage paid advertising as an empirical discipline  By deploying dedicated server-side Conversions API proxies and rigorous audience targeting, we eliminate signal loss and maximize customer lifetime value
                </p>

                <div className="flex flex-col gap-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Server-side CAPI tracking bypassing browser ad-block degradation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Omnichannel campaign execution across Meta, Google Ads, TikTok, Snapchat &amp; LinkedIn</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Unit-economic campaign pacing aligned directly with business profitability</span>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => onNavigate('/capabilities/digital-marketing')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-600/30 hover:bg-purple-600 ring-1 ring-purple-500/50 text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_20px_rgba(168,85,247,0.25)]"
                  >
                    <span>Explore Digital Marketing Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <MarketingVisual />
              </div>
            </div>
          )}

          {/* TAB 2: CUSTOM SOFTWARE ENGINEERING (Left: explanation, Right: CPU/processor architecture visual) */}
          {activeCapabilityTab === 'engineering' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 flex flex-col gap-5">
                <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase">
                  <span>Systems Architecture</span>
                </div>
                <h3 className="text-3xl font-extrabold text-white leading-tight">
                  Custom Software Engineering &amp; Business Systems
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  We build custom business management systems, high-concurrency web applications, and resilient API gateways  Every line of code is strictly typed, modular, and transferred to your company upon delivery
                </p>

                <div className="flex flex-col gap-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Full codebase ownership with zero proprietary vendor lock-in</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>High-availability cloud architectures with verified production SLAs</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>PostgreSQL ACID transactions with event-driven background processing</span>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => onNavigate('/capabilities/software-engineering')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600 ring-1 ring-indigo-500/50 text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_20px_rgba(99,102,241,0.25)]"
                  >
                    <span>Explore Custom Software Engineering</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <SoftwareVisual />
              </div>
            </div>
          )}

          {/* TAB 3: AI SOLUTIONS (Left: explanation, Right: neural-network brain visual) */}
          {activeCapabilityTab === 'intelligence' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 flex flex-col gap-5">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase">
                  <span>Cognitive Automation</span>
                </div>
                <h3 className="text-3xl font-extrabold text-white leading-tight">
                  Pragmatic AI Solutions &amp; Workflow Automation
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  We eliminate operational friction by building production-grade AI workflows that automate real tasks  From bilingual document ingestion to customer support assistants with authenticated database tools, our models deliver practical business efficiency
                </p>

                <div className="flex flex-col gap-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Private cloud deployment with strict corporate data boundaries</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Autonomous resolution of routine customer and account inquiries</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Bilingual document ingestion parsing complex commercial records</span>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => onNavigate('/capabilities/ai-solutions')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-600/30 hover:bg-cyan-600 ring-1 ring-cyan-500/50 text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.25)]"
                  >
                    <span>Explore AI Solutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <AiVisual />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          OUR CONNECTED APPROACH
         ========================================================================= */}
      <section className="py-24 bg-[#08080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Our Connected Operating Approach
            </h2>
            <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
              When paid advertising, custom software engineering, and cognitive AI share a unified architecture,
              operational efficiency compounds across every business department
            </p>
          </div>

          <ConnectedApproachDiagram />
        </div>
      </section>

      {/* =========================================================================
          SELECTED WORK (Purple neon cards, no fake metrics)
         ========================================================================= */}
      <section className="py-24 bg-[#0A0910]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-white">
                Proven Enterprise Deployments
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/work')}
              className="text-xs font-bold text-purple-400 hover:text-purple-300 uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Showcase Grid (Factual deliverables, zero fabricated numbers) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Feature Project 1: Spans 7 columns */}
            <div
              onClick={() => onNavigate('/work')}
              className="lg:col-span-7 group p-8 sm:p-10 rounded-3xl bg-[#0B0A12] ring-1 ring-purple-500/20 shadow-[0_0_25px_rgba(168,85,247,0.12)] hover:ring-purple-500/50 hover:bg-[#110D20] transition-all cursor-pointer flex flex-col justify-between gap-8"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="px-3 py-1 rounded bg-purple-950/40 border border-purple-500/30 text-purple-300 font-semibold uppercase">
                    Integrated Deployment
                  </span>
                  <span>Retail Commerce</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-200 transition-colors leading-tight">
                  Omnichannel Retail Commerce &amp; Server-Side Tracking
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Engineered an integrated growth engine combining server-side conversion tracking for paid advertising across Meta and TikTok with a sub-second headless React commerce application, directly synchronizing with physical store inventory
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {['React', 'TypeScript', 'Server-Side CAPI', 'Redis', 'PostgreSQL'].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded bg-white/[0.04] text-[11px] font-mono text-neutral-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6  flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white font-mono">Server-Side Tracking &amp; Headless Architecture</div>
                  <div className="text-xs text-purple-400 font-mono mt-0.5">Automated Real-Time Inventory Sync</div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-purple-400" />
                </div>
              </div>
            </div>

            {/* Feature Project 2: Spans 5 columns */}
            <div
              onClick={() => onNavigate('/work')}
              className="lg:col-span-5 group p-8 sm:p-10 rounded-3xl bg-[#0B0A12] ring-1 ring-purple-500/20 shadow-[0_0_25px_rgba(168,85,247,0.12)] hover:ring-purple-500/50 hover:bg-[#110D20] transition-all cursor-pointer flex flex-col justify-between gap-8"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="px-3 py-1 rounded bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 font-semibold uppercase">
                    Custom Software Engineering
                  </span>
                  <span>B2B Systems</span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors leading-tight">
                  Enterprise B2B Settlement Portal &amp; Ledger System
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  Architected a resilient B2B financial extranet enabling corporate vendors to manage commercial settlements, invoice verification, and automated reconciliations
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {['Node.js', 'PostgreSQL ACID', 'REST API', 'Docker'].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded bg-white/[0.04] text-[11px] font-mono text-neutral-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6  flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white font-mono">Multi-Tenant Ledger Architecture</div>
                  <div className="text-xs text-indigo-400 font-mono mt-0.5">Role-Based Access &amp; Compliance</div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INDUSTRIES (Purple neon cards, no fake metrics)
         ========================================================================= */}
      <section className="py-24 bg-[#08080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-white">
                Industries We Modernize
              </h2>
            </div>
            <p className="text-neutral-400 text-sm max-w-md">
              We understand the regulatory nuances, payment gateways, and commercial workflows across regional and worldwide markets
            </p>
          </div>

          {/* Industry Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {INDUSTRIES_DATA.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveIndustryId(ind.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeIndustryId === ind.id
                    ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.35)]'
                    : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {ind.title}
              </button>
            ))}
          </div>

          {/* Selected Industry Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0B0A12] ring-1 ring-purple-500/20 shadow-[0_0_25px_rgba(168,85,247,0.12)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <span className="text-xs font-mono uppercase text-purple-400 font-bold tracking-wider">
                {selectedIndustry.title} Specialization
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedIndustry.headline}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {selectedIndustry.summary}
              </p>

              <div className="p-4 rounded-xl bg-purple-950/20 ring-1 ring-purple-500/20 text-xs text-purple-200">
                <strong className="text-white block mb-1">Market Context</strong>
                {selectedIndustry.marketContext}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => onNavigate(`/industries/${selectedIndustry.slug}`)}
                  className="px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                >
                  <span>Explore {selectedIndustry.title} Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-2xl bg-[#0E0C18] ring-1 ring-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.1)] flex flex-col gap-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 font-bold">
                Deployment Profile
              </span>
              <div className="text-lg font-bold text-white">
                {selectedIndustry.caseStudyPreview.headline}
              </div>
              <div className="text-xs font-semibold text-purple-300 font-mono">
                {selectedIndustry.caseStudyPreview.solutionDetail}
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed pt-2 ">
                {selectedIndustry.caseStudyPreview.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OPERATING METHOD
         ========================================================================= */}
      <section className="py-24 bg-[#0A0910]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-white">
                The 47 Execution Method
              </h2>
            </div>
            <p className="text-neutral-400 text-sm max-w-md">
              A structured four-phase cadence designed to eliminate assumptions, prevent budget drift, and deliver predictable commercial outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-8 rounded-3xl bg-[#0B0A12] ring-1 ring-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.1)] flex flex-col gap-4">
              <span className="text-xs font-mono font-bold text-purple-400">Phase 01</span>
              <h3 className="text-xl font-bold text-white">Discovery &amp; Audit</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                We inspect ad accounts, data tracking signals, technical architecture, and workflow bottlenecks to establish an accurate baseline
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0B0A12] ring-1 ring-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.1)] flex flex-col gap-4">
              <span className="text-xs font-mono font-bold text-purple-400">Phase 02</span>
              <h3 className="text-xl font-bold text-white">Architecture &amp; Strategy</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                We formulate targeted advertising angles, design database schemas, map API contracts, and establish verifiable KPI targets
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0B0A12] ring-1 ring-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.1)] flex flex-col gap-4">
              <span className="text-xs font-mono font-bold text-purple-400">Phase 03</span>
              <h3 className="text-xl font-bold text-white">Engineering &amp; Testing</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Iterative sprint releases for software, automated testing, and disciplined creative testing sprints to validate audience resonance
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0B0A12] ring-1 ring-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.1)] flex flex-col gap-4">
              <span className="text-xs font-mono font-bold text-purple-400">Phase 04</span>
              <h3 className="text-xl font-bold text-white">Algorithmic Scale</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Scaling profitable campaign groups, training domain AI adapters, and expanding system capacity to accommodate enterprise throughput
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EXECUTIVE PERSPECTIVES (INSIGHTS)
         ========================================================================= */}
      <section className="py-24 bg-[#08080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-white">
                Executive Perspectives
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/insights')}
              className="text-xs font-bold text-purple-400 hover:text-purple-300 uppercase tracking-wider cursor-pointer"
            >
              Browse All Articles
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INSIGHTS_DATA.slice(0, 2).map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigate('/insights')}
                className="group p-8 rounded-3xl bg-[#0B0A12] ring-1 ring-purple-500/20 shadow-[0_0_25px_rgba(168,85,247,0.12)] hover:ring-purple-500/50 hover:bg-[#110D20] transition-all cursor-pointer flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                    <span className="text-purple-400 font-semibold">{item.category}</span>
                    <span>·</span>
                    <span>{item.readingTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-400">
                  <span>Read Technical Breakdown</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CTA
         ========================================================================= */}
      <section className="relative py-28 bg-gradient-to-b from-[#0A0910] via-[#10081C] to-[#07060B] overflow-hidden text-center">
        {/* Animated Background Singularity Network */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
          <FinalCtaNetwork />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 relative z-10">
          <h2 className="text-5xl sm:text-7xl font-black text-white tracking-tight uppercase">
            LET'S BUILD WHAT'S NEXT
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 max-w-xl text-balance leading-relaxed">
            Whether launching custom business software, engineering pragmatic AI workflows,
            or scaling targeted paid advertising across regional and worldwide markets
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_40px_rgba(168,85,247,0.5)] cursor-pointer flex items-center gap-2 group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('/resources')}
              className="px-6 py-4 rounded-xl bg-white/[0.04] ring-1 ring-purple-500/30 hover:bg-white/[0.08] text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-[0_0_20px_rgba(168,85,247,0.15)]"
            >
              Review Master FAQs
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 pt-6">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Clock className="w-4 h-4 text-purple-400" />
              <span>24-Hour SLA Response</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Check className="w-4 h-4 text-purple-400" />
              <span>Commercial Registration Verified</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
