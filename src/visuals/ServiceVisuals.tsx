import React from 'react';
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  FileText,
  Filter,
  GitBranch,
  Globe,
  Layers,
  Layout,
  Plug,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from 'lucide-react';

interface ServiceVisualProps {
  slug: string;
}

export const ServiceVisual: React.FC<ServiceVisualProps> = ({ slug }) => {
  switch (slug) {
    /* =====================================================================
       DIGITAL MARKETING SERVICES
       ===================================================================== */
    case 'paid-advertising':
      return (
        <VisualFrame title="Paid Channel Flow" subtitle="Ad platforms aligned with landing destinations">
          <div className="grid grid-cols-3 items-center gap-4 w-full">
            <div className="flex flex-col gap-2">
              {['Meta Ads', 'Google Ads', 'TikTok & LinkedIn'].map((ch, idx) => (
                <div
                  key={ch}
                  className="px-3 py-2 rounded-lg bg-white/[0.04] ring-1 ring-white/10 text-xs text-neutral-200 flex items-center justify-between"
                >
                  <span>{ch}</span>
                  <span
                    className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"
                    style={{ animationDelay: `${idx * 300}ms` }}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-1.5 text-purple-400">
              <div className="h-[1px] w-full bg-gradient-to-r from-purple-500/20 via-purple-400 to-purple-500/20 relative overflow-hidden">
                <div className="w-8 h-full bg-white/80 animate-[pulse_2s_ease-in-out_infinite]" />
              </div>
              <span className="text-[11px] text-neutral-400">Campaign Routing</span>
            </div>

            <div className="p-4 rounded-xl bg-purple-950/30 ring-1 ring-purple-500/35 text-center flex flex-col items-center gap-1.5">
              <Target className="w-5 h-5 text-purple-300" />
              <div className="text-xs font-semibold text-white">Conversion Point</div>
              <div className="text-[11px] text-neutral-400">Qualified Leads &amp; Sales</div>
            </div>
          </div>
        </VisualFrame>
      );

    case 'performance-marketing':
      return (
        <VisualFrame title="Acquisition Feedback Loop" subtitle="Connecting ad spend directly to customer value">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full">
            {[
              { label: 'Ad Spend', icon: TrendingUp, desc: 'Budget pacing' },
              { label: 'Conversion Signal', icon: Target, desc: 'Verified actions' },
              { label: 'Margin Focus', icon: BarChart3, desc: 'Reinvestment' },
            ].map((node, i) => {
              const Icon = node.icon;
              return (
                <React.Fragment key={node.label}>
                  <div className="flex-1 w-full p-3.5 rounded-xl bg-white/[0.03] ring-1 ring-purple-500/25 flex flex-col items-center text-center gap-1.5">
                    <Icon className="w-4 h-4 text-purple-400" />
                    <div className="text-xs font-semibold text-white">{node.label}</div>
                    <div className="text-[11px] text-neutral-400">{node.desc}</div>
                  </div>
                  {i < 2 && <ArrowRight className="w-4 h-4 text-purple-400/70 shrink-0 rotate-90 sm:rotate-0" />}
                </React.Fragment>
              );
            })}
          </div>
        </VisualFrame>
      );

    case 'campaign-strategy':
      return (
        <VisualFrame title="Strategic Planning Matrix" subtitle="Offer positioning mapped across buyer stages">
          <div className="grid grid-cols-3 gap-3 w-full text-center">
            {[
              { stage: 'Awareness', focus: 'Core Value Hook' },
              { stage: 'Evaluation', focus: 'Proof & Comparison' },
              { stage: 'Decision', focus: 'Direct Offer CTA' },
            ].map((col, idx) => (
              <div
                key={col.stage}
                className="p-3.5 rounded-xl bg-white/[0.03] ring-1 ring-purple-500/20 flex flex-col gap-2"
              >
                <span className="text-[11px] font-medium text-purple-300">{col.stage}</span>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full bg-purple-500/70 rounded-full"
                    style={{ width: `${(idx + 1) * 33}%` }}
                  />
                </div>
                <span className="text-xs text-neutral-200 font-medium">{col.focus}</span>
              </div>
            ))}
          </div>
        </VisualFrame>
      );

    case 'audience-targeting':
      return (
        <VisualFrame title="Audience Refinement" subtitle="Focusing impressions on relevant customer profiles">
          <div className="flex flex-col gap-2.5 w-full max-w-md mx-auto">
            <div className="px-4 py-2 rounded-lg bg-white/[0.03] ring-1 ring-white/10 text-xs text-neutral-300 flex items-center justify-between">
              <span className="flex items-center gap-2"><Users className="w-3.5 h-3.5 text-neutral-400" /> Broad Market Signals</span>
              <span className="text-[11px] text-neutral-500">Initial Pool</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-purple-950/25 ring-1 ring-purple-500/25 text-xs text-neutral-200 flex items-center justify-between mx-4">
              <span className="flex items-center gap-2"><Filter className="w-3.5 h-3.5 text-purple-400" /> Behavioral &amp; Intent Filters</span>
              <span className="text-[11px] text-purple-300">Segmented</span>
            </div>
            <div className="px-4 py-2.5 rounded-lg bg-purple-600/20 ring-1 ring-purple-400/50 text-xs text-white font-medium flex items-center justify-between mx-8">
              <span className="flex items-center gap-2"><Target className="w-3.5 h-3.5 text-purple-300" /> Active Buyer Profiles</span>
              <span className="text-[11px] text-purple-200">Prioritized</span>
            </div>
          </div>
        </VisualFrame>
      );

    case 'conversion-optimization':
      return (
        <VisualFrame title="Conversion Journey Refinement" subtitle="Removing friction between click and completion">
          <div className="grid grid-cols-4 gap-2.5 w-full">
            {[
              { step: 'Landing', state: 'Clear Message' },
              { step: 'Value', state: 'Proof & Trust' },
              { step: 'Form / Cart', state: 'Fewer Steps' },
              { step: 'Action', state: 'Completed' },
            ].map((item, idx) => (
              <div
                key={item.step}
                className={`p-3 rounded-xl flex flex-col gap-1.5 ${
                  idx === 3
                    ? 'bg-purple-600/20 ring-1 ring-purple-400/50'
                    : 'bg-white/[0.03] ring-1 ring-white/10'
                }`}
              >
                <span className="text-[11px] text-purple-300 font-medium">{item.step}</span>
                <span className="text-xs text-white font-medium">{item.state}</span>
              </div>
            ))}
          </div>
        </VisualFrame>
      );

    case 'marketing-analytics':
      return (
        <VisualFrame title="Practical Campaign Reporting" subtitle="Consistent tracking across channels and website events">
          <div className="grid grid-cols-3 gap-3 w-full items-end">
            <div className="p-3.5 rounded-xl bg-white/[0.03] ring-1 ring-white/10 flex flex-col gap-1">
              <span className="text-[11px] text-neutral-400">Source</span>
              <span className="text-xs font-medium text-white">UTM &amp; Ad Tags</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] ring-1 ring-purple-500/25 flex flex-col gap-1">
              <span className="text-[11px] text-purple-300">Tracking</span>
              <span className="text-xs font-medium text-white">Key Site Events</span>
            </div>
            <div className="p-3.5 rounded-xl bg-purple-950/30 ring-1 ring-purple-400/40 flex flex-col gap-1">
              <span className="text-[11px] text-purple-300">Report</span>
              <span className="text-xs font-medium text-white">Clear Summary</span>
            </div>
          </div>
        </VisualFrame>
      );

    /* =====================================================================
       CUSTOM SOFTWARE ENGINEERING SERVICES
       ===================================================================== */
    case 'custom-software':
      return (
        <VisualFrame title="Modular System Architecture" subtitle="Tailored software components working together">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
            {[
              { name: 'User Interface', icon: Layout },
              { name: 'Business Rules', icon: Code2 },
              { name: 'Permissions', icon: CheckCircle2 },
              { name: 'Data Store', icon: Database },
            ].map((mod) => {
              const Icon = mod.icon;
              return (
                <div
                  key={mod.name}
                  className="p-3.5 rounded-xl bg-white/[0.03] ring-1 ring-indigo-500/25 flex flex-col items-center text-center gap-2"
                >
                  <Icon className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-medium text-white">{mod.name}</span>
                </div>
              );
            })}
          </div>
        </VisualFrame>
      );

    case 'web-applications':
      return (
        <VisualFrame title="Web Application Stack" subtitle="Browser experience synced cleanly with cloud services">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <div className="flex-1 w-full p-4 rounded-xl bg-white/[0.03] ring-1 ring-indigo-500/25 flex items-center gap-3">
              <Globe className="w-5 h-5 text-indigo-400 shrink-0" />
              <div>
                <div className="text-xs font-semibold text-white">Browser Client</div>
                <div className="text-[11px] text-neutral-400">Responsive UI &amp; State</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-indigo-400 shrink-0 rotate-90 sm:rotate-0" />
            <div className="flex-1 w-full p-4 rounded-xl bg-indigo-950/30 ring-1 ring-indigo-500/35 flex items-center gap-3">
              <Database className="w-5 h-5 text-indigo-300 shrink-0" />
              <div>
                <div className="text-xs font-semibold text-white">Application Backend</div>
                <div className="text-[11px] text-neutral-400">APIs &amp; Data Persistence</div>
              </div>
            </div>
          </div>
        </VisualFrame>
      );

    case 'mobile-applications':
      return (
        <VisualFrame title="Connected Mobile Experience" subtitle="iOS and Android clients synchronized with central data">
          <div className="flex items-center justify-center gap-5 w-full">
            <div className="p-3.5 rounded-xl bg-white/[0.03] ring-1 ring-indigo-500/25 flex flex-col items-center gap-1.5 min-w-[96px]">
              <Smartphone className="w-5 h-5 text-indigo-400" />
              <span className="text-xs font-medium text-white">iOS App</span>
            </div>
            <div className="p-3.5 rounded-xl bg-indigo-950/30 ring-1 ring-indigo-500/40 flex flex-col items-center gap-1.5 min-w-[116px]">
              <Database className="w-5 h-5 text-indigo-300" />
              <span className="text-xs font-medium text-white">Shared Sync API</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] ring-1 ring-indigo-500/25 flex flex-col items-center gap-1.5 min-w-[96px]">
              <Smartphone className="w-5 h-5 text-indigo-400" />
              <span className="text-xs font-medium text-white">Android App</span>
            </div>
          </div>
        </VisualFrame>
      );

    case 'business-management-systems':
      return (
        <VisualFrame title="Unified Operations Core" subtitle="Core company departments operating on shared records">
          <div className="grid grid-cols-2 gap-3 w-full">
            {['Orders & Sales', 'Inventory Control', 'Billing & Invoicing', 'Team Permissions'].map((mod) => (
              <div
                key={mod}
                className="px-3.5 py-2.5 rounded-xl bg-white/[0.03] ring-1 ring-indigo-500/25 text-xs text-white font-medium flex items-center gap-2"
              >
                <Layers className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>{mod}</span>
              </div>
            ))}
          </div>
        </VisualFrame>
      );

    case 'b2b-software-solutions':
      return (
        <VisualFrame title="B2B Partner Portal" subtitle="Streamlined ordering and account visibility for business buyers">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <div className="flex-1 w-full p-3.5 rounded-xl bg-white/[0.03] ring-1 ring-white/10 text-xs text-neutral-200 text-center">
              <div className="font-semibold text-white mb-0.5">Corporate Buyers</div>
              <div className="text-[11px] text-neutral-400">Quotes &amp; Repeat Orders</div>
            </div>
            <Plug className="w-4 h-4 text-indigo-400 shrink-0" />
            <div className="flex-1 w-full p-3.5 rounded-xl bg-indigo-950/30 ring-1 ring-indigo-500/35 text-xs text-neutral-200 text-center">
              <div className="font-semibold text-white mb-0.5">Dedicated Extranet</div>
              <div className="text-[11px] text-neutral-400">Account Pricing &amp; Status</div>
            </div>
          </div>
        </VisualFrame>
      );

    case 'api-integrations':
      return (
        <VisualFrame title="System-to-System Bridge" subtitle="Structured data exchange between disconnected platforms">
          <div className="flex items-center justify-between gap-3 w-full">
            <div className="p-3.5 rounded-xl bg-white/[0.03] ring-1 ring-white/10 text-center flex-1">
              <div className="text-xs font-semibold text-white">Storefront / CRM</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">Outbound Events</div>
            </div>
            <div className="flex flex-col items-center gap-1 text-indigo-300 shrink-0 px-2">
              <Plug className="w-4 h-4" />
              <span className="text-[11px] text-neutral-400">REST / Webhooks</span>
            </div>
            <div className="p-3.5 rounded-xl bg-indigo-950/30 ring-1 ring-indigo-500/35 text-center flex-1">
              <div className="text-xs font-semibold text-white">Payments / ERP</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">Synced Records</div>
            </div>
          </div>
        </VisualFrame>
      );

    /* =====================================================================
       AI SOLUTIONS SERVICES
       ===================================================================== */
    case 'ai-integration':
      return (
        <VisualFrame title="AI Embedded in Existing Tools" subtitle="Connecting language models safely to company knowledge">
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
            <div className="flex-1 w-full p-3.5 rounded-xl bg-white/[0.03] ring-1 ring-white/10 flex items-center gap-2.5">
              <FileText className="w-4 h-4 text-purple-300 shrink-0" />
              <span className="text-xs text-white font-medium">Internal Docs &amp; CRM</span>
            </div>
            <ArrowRight className="w-4 h-4 text-purple-400 shrink-0 rotate-90 sm:rotate-0" />
            <div className="flex-1 w-full p-3.5 rounded-xl bg-purple-950/35 ring-1 ring-purple-400/45 flex items-center gap-2.5">
              <Cpu className="w-4 h-4 text-purple-300 shrink-0" />
              <span className="text-xs text-white font-medium">Private AI Assistant</span>
            </div>
          </div>
        </VisualFrame>
      );

    case 'business-automation':
      return (
        <VisualFrame title="Automated Process Flow" subtitle="Structured handling with human review where needed">
          <div className="grid grid-cols-3 gap-3 w-full text-center">
            {[
              { title: 'Incoming Record', detail: 'Form or Document' },
              { title: 'AI Extraction', detail: 'Structured Fields' },
              { title: 'System Update', detail: 'CRM / Review Gate' },
            ].map((s, idx) => (
              <div
                key={s.title}
                className={`p-3 rounded-xl ${
                  idx === 1
                    ? 'bg-purple-950/30 ring-1 ring-purple-400/40'
                    : 'bg-white/[0.03] ring-1 ring-white/10'
                }`}
              >
                <div className="text-xs font-semibold text-white">{s.title}</div>
                <div className="text-[11px] text-neutral-400 mt-0.5">{s.detail}</div>
              </div>
            ))}
          </div>
        </VisualFrame>
      );

    case 'ai-assistants-agents':
      return (
        <VisualFrame title="Coordinated AI Assistants" subtitle="Handling routine questions and escalating complex cases">
          <div className="grid grid-cols-3 gap-3 w-full">
            <div className="p-3 rounded-xl bg-white/[0.03] ring-1 ring-white/10 flex flex-col items-center text-center gap-1.5">
              <Bot className="w-4 h-4 text-purple-300" />
              <span className="text-xs font-medium text-white">Frontline Intake</span>
            </div>
            <div className="p-3 rounded-xl bg-purple-950/30 ring-1 ring-purple-400/40 flex flex-col items-center text-center gap-1.5">
              <Database className="w-4 h-4 text-purple-300" />
              <span className="text-xs font-medium text-white">Verified Lookup</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] ring-1 ring-white/10 flex flex-col items-center text-center gap-1.5">
              <Users className="w-4 h-4 text-purple-300" />
              <span className="text-xs font-medium text-white">Team Handover</span>
            </div>
          </div>
        </VisualFrame>
      );

    case 'intelligent-workflows':
      return (
        <VisualFrame title="Decision &amp; Routing Workflow" subtitle="Summarizing key context before human sign-off">
          <div className="flex items-center justify-between gap-3 w-full">
            <div className="p-3.5 rounded-xl bg-white/[0.03] ring-1 ring-white/10 flex items-center gap-2 flex-1">
              <Workflow className="w-4 h-4 text-purple-300 shrink-0" />
              <span className="text-xs text-white font-medium">Review Brief</span>
            </div>
            <GitBranch className="w-4 h-4 text-purple-400 shrink-0" />
            <div className="p-3.5 rounded-xl bg-purple-950/30 ring-1 ring-purple-400/40 flex items-center gap-2 flex-1">
              <CheckCircle2 className="w-4 h-4 text-purple-300 shrink-0" />
              <span className="text-xs text-white font-medium">Guided Approval</span>
            </div>
          </div>
        </VisualFrame>
      );

    case 'data-intelligence':
      return (
        <VisualFrame title="Operational Insight View" subtitle="Turning existing records into clearer visibility">
          <div className="flex items-end justify-between gap-3 w-full">
            {[42, 60, 54, 78, 90].map((heightPct, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full h-20 rounded-lg bg-white/[0.03] flex items-end p-1">
                  <div
                    className="w-full rounded-md bg-gradient-to-t from-purple-700 to-purple-400"
                    style={{ height: `${heightPct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </VisualFrame>
      );

    case 'custom-ai-solutions':
    default:
      return (
        <VisualFrame title="Tailored AI Application" subtitle="Configured around your specific company workflow">
          <div className="flex items-center justify-between gap-3 w-full">
            <div className="p-3.5 rounded-xl bg-white/[0.03] ring-1 ring-white/10 text-xs text-white font-medium text-center flex-1">
              Domain Inputs
            </div>
            <ArrowRight className="w-4 h-4 text-purple-400 shrink-0" />
            <div className="p-3.5 rounded-xl bg-purple-950/30 ring-1 ring-purple-400/40 text-xs text-white font-medium text-center flex-1">
              Custom Pipeline
            </div>
            <ArrowRight className="w-4 h-4 text-purple-400 shrink-0" />
            <div className="p-3.5 rounded-xl bg-white/[0.03] ring-1 ring-white/10 text-xs text-white font-medium text-center flex-1">
              Structured Action
            </div>
          </div>
        </VisualFrame>
      );
  }
};

const VisualFrame: React.FC<{ title: string; subtitle: string; children: React.ReactNode }> = ({
  title,
  subtitle,
  children,
}) => (
  <div className="rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12] p-6 sm:p-7 flex flex-col gap-5">
    <div className="flex flex-col gap-1">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="text-xs text-neutral-400">{subtitle}</div>
    </div>
    <div className="rounded-xl bg-black/40 ring-1 ring-white/5 p-5 min-h-[140px] flex items-center justify-center">
      {children}
    </div>
  </div>
);
