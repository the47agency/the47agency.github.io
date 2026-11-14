import React, { useEffect, useState } from 'react';
import { RESOURCES_DATA, MASTER_FAQS } from '../data/resourcesData';
import { Calculator, HelpCircle, ChevronDown, CheckCircle2, ArrowRight, Info } from 'lucide-react';

interface ResourcesPageProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ currentPath, onNavigate }) => {
  const resolveTab = (path: string): 'guides' | 'calculator' | 'faqs' => {
    const clean = path.toLowerCase();
    if (clean.includes('faqs')) return 'faqs';
    if (clean.includes('calculator')) return 'calculator';
    return 'guides';
  };

  const [activeTab, setActiveTab] = useState<'guides' | 'calculator' | 'faqs'>(() =>
    resolveTab(currentPath)
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    setActiveTab(resolveTab(currentPath));
  }, [currentPath]);

  // Transparent Interactive AI Workflow Estimator State (All assumptions visible)
  const [monthlyInquiries, setMonthlyInquiries] = useState<number>(5000);
  const [avgMinutesPerInquiry, setAvgMinutesPerInquiry] = useState<number>(6);
  const [agentHourlyCost, setAgentHourlyCost] = useState<number>(20);
  const [targetAutomationRate, setTargetAutomationRate] = useState<number>(50);
  const [implementationBenchmark, setImplementationBenchmark] = useState<number>(20000);

  const operatingOverheadPercent = 15; // Visible API / maintenance overhead assumption
  const automatedInquiries = monthlyInquiries * (targetAutomationRate / 100);
  const hoursSavedPerMonth = automatedInquiries * (avgMinutesPerInquiry / 60);
  const grossMonthlyLaborSavings = hoursSavedPerMonth * agentHourlyCost;
  const netMonthlySavings = grossMonthlyLaborSavings * (1 - operatingOverheadPercent / 100);
  const annualSavings = netMonthlySavings * 12;
  const estimatedPaybackMonths =
    netMonthlySavings > 0 ? Math.max(1, Number((implementationBenchmark / netMonthlySavings).toFixed(1))) : 0;

  return (
    <div className="flex flex-col w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span>Resources</span>
            <span>/</span>
            <span className="text-neutral-200">
              {activeTab === 'guides'
                ? 'Scoping Topics'
                : activeTab === 'calculator'
                ? 'AI Payback Estimator'
                : 'Frequently Asked Questions'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Resources &amp; Planning Tools
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Review project scoping checklists, explore an illustrative AI workflow payback model, and read clear answers about working with 47 Agency
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          <button
            onClick={() => setActiveTab('guides')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'guides'
                ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
            }`}
          >
            Advisory &amp; Scoping Topics
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'calculator'
                ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>AI Payback Estimator</span>
          </button>
          <button
            onClick={() => setActiveTab('faqs')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'faqs'
                ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </button>
        </div>

        {/* TAB 1: ADVISORY TOPICS (No fake downloadable PDFs) */}
        {activeTab === 'guides' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESOURCES_DATA.map((res) => (
              <div
                key={res.id}
                className="p-7 rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12] flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-medium text-purple-400">{res.type}</span>
                  <h2 className="text-xl font-semibold text-white leading-snug">{res.title}</h2>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{res.description}</p>

                  <div className="flex flex-col gap-2 pt-2">
                    {res.summaryPoints.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <span className="text-xs text-neutral-500">Reviewed in discovery calls</span>
                  <button
                    onClick={() => onNavigate('/contact')}
                    className="px-4 py-2 rounded-lg bg-purple-600/20 ring-1 ring-purple-500/40 text-purple-200 hover:bg-purple-600 hover:text-white text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Discuss This Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: TRANSPARENT AI PAYBACK ESTIMATOR */}
        {activeTab === 'calculator' && (
          <div className="p-7 sm:p-10 rounded-3xl ring-1 ring-purple-500/20 bg-[#0B0A12] grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div>
                <span className="text-xs font-medium text-purple-400">
                  Illustrative Planning Model
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-1">
                  AI Automation Payback Estimator
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                  Adjust the inputs below to model potential time and cost savings based on transparent assumptions
                </p>
              </div>

              {/* Input 1: Monthly Inquiries */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-300 font-medium">Monthly Inbound Inquiries</span>
                  <span className="text-purple-300 font-semibold">{monthlyInquiries.toLocaleString()} / mo</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="500"
                  value={monthlyInquiries}
                  onChange={(e) => setMonthlyInquiries(Number(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
              </div>

              {/* Input 2: Avg Handling Minutes */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-300 font-medium">Average Handling Time per Inquiry</span>
                  <span className="text-purple-300 font-semibold">{avgMinutesPerInquiry} minutes</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="20"
                  step="1"
                  value={avgMinutesPerInquiry}
                  onChange={(e) => setAvgMinutesPerInquiry(Number(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
              </div>

              {/* Input 3: Hourly Rate */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-300 font-medium">Hourly Team Cost ($/hr)</span>
                  <span className="text-purple-300 font-semibold">${agentHourlyCost} / hour</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="2"
                  value={agentHourlyCost}
                  onChange={(e) => setAgentHourlyCost(Number(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
              </div>

              {/* Input 4: Automation Share */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-300 font-medium">Estimated Routine Inquiries Handled by AI</span>
                  <span className="text-purple-300 font-semibold">{targetAutomationRate}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="80"
                  step="5"
                  value={targetAutomationRate}
                  onChange={(e) => setTargetAutomationRate(Number(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
              </div>

              {/* Input 5: Illustrative Setup Scope */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-300 font-medium">Assumed Initial Build &amp; Integration Budget</span>
                  <span className="text-purple-300 font-semibold">${implementationBenchmark.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="8000"
                  max="60000"
                  step="2000"
                  value={implementationBenchmark}
                  onChange={(e) => setImplementationBenchmark(Number(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Output & Visible Assumptions */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="p-7 rounded-2xl ring-1 ring-purple-500/35 bg-[#120F20] flex flex-col gap-5">
                <div>
                  <span className="text-xs font-medium text-purple-300">
                    Illustrative Estimate Only
                  </span>
                  <div className="text-3xl sm:text-4xl font-bold text-white mt-1">
                    ${Math.round(annualSavings).toLocaleString()} / yr
                  </div>
                  <div className="text-xs text-neutral-300 mt-1">
                    Estimated net annual operating savings (after {operatingOverheadPercent}% API &amp; hosting allowance)
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <div className="text-xs text-neutral-400">Net Monthly Savings</div>
                    <div className="text-lg font-semibold text-purple-300 mt-0.5">
                      ${Math.round(netMonthlySavings).toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Hours Freed Monthly</div>
                    <div className="text-lg font-semibold text-white mt-0.5">
                      {Math.round(hoursSavedPerMonth).toLocaleString()} hrs
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-xs text-neutral-400">Illustrative Payback Period</div>
                    <div className="text-lg font-semibold text-emerald-400 mt-0.5">
                      ~{estimatedPaybackMonths} Months
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 ring-1 ring-white/10 text-xs text-neutral-300 leading-relaxed flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>
                    Formula uses {Math.round(automatedInquiries).toLocaleString()} automated inquiries/mo × {avgMinutesPerInquiry} min × ${agentHourlyCost}/hr, minus {operatingOverheadPercent}% operating allowance against a ${implementationBenchmark.toLocaleString()} setup budget. Actual outcomes depend on workflow complexity and integration scope
                  </span>
                </div>

                <button
                  onClick={() => onNavigate('/contact')}
                  className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request a Custom Scope Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: MASTER FAQS */}
        {activeTab === 'faqs' && (
          <div className="flex flex-col gap-3 max-w-4xl">
            {MASTER_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl ring-1 ring-white/10 bg-[#0B0A12] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 flex items-center justify-between text-left text-sm font-semibold text-white hover:text-purple-300 transition-colors cursor-pointer"
                  >
                    <div className="flex flex-wrap items-center gap-2.5 pr-4">
                      <span className="text-[11px] font-medium text-purple-300 px-2.5 py-0.5 rounded-md bg-purple-950/40 shrink-0">
                        {faq.category}
                      </span>
                      <span>{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-purple-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
