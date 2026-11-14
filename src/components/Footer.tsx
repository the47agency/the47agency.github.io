import React from 'react';
import { Logo } from './Logo';
import { ArrowUpRight, Globe, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#050507] pt-20 pb-14 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        {/* Top Tier: Company Address & Worldwide Presence */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12">
          <div className="flex flex-col gap-4 max-w-lg">
            <Logo variant="horizontal" size="lg" />
            <div className="flex items-start gap-2.5 text-neutral-300 text-sm leading-relaxed mt-2">
              <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
              <span>Gökevler Mah, Kristalşehir, Blok 16, Ofis 255, Adnan Kahveci, 34510 Esenyurt/İstanbul</span>
            </div>
          </div>

          {/* Global Reach */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-medium text-neutral-400">
              Global Reach
            </span>
            <div className="flex items-center gap-2 text-base font-semibold text-white">
              <Globe className="w-4 h-4 text-purple-400" />
              <span>Serving Businesses Worldwide</span>
            </div>
            <p className="text-neutral-400 text-sm max-w-xs leading-relaxed">
              Delivering digital marketing, custom software engineering, and AI solutions for growing businesses
            </p>
          </div>
        </div>

        {/* Middle Tier: 4-Column Core Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Column 1: About 47 */}
          <div className="flex flex-col gap-3">
            <span className="text-white text-sm font-semibold mb-1">About 47</span>
            <button onClick={() => onNavigate('/about')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">About Overview</button>
            <button onClick={() => onNavigate('/about/story')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">Our Story</button>
            <button onClick={() => onNavigate('/about/philosophy')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">Our Philosophy</button>
            <button onClick={() => onNavigate('/about/approach')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">Our Approach</button>
            <button onClick={() => onNavigate('/about/method')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">The 47 Method</button>
            <button onClick={() => onNavigate('/about/values')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">Our Values</button>
            <button onClick={() => onNavigate('/about/brand')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">Brand Identity System</button>
          </div>

          {/* Column 2: Digital Marketing */}
          <div className="flex flex-col gap-3">
            <span className="text-white text-sm font-semibold mb-1">Digital Marketing</span>
            <button onClick={() => onNavigate('/capabilities/digital-marketing')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">Marketing Overview</button>
            <button onClick={() => onNavigate('/capabilities/digital-marketing/paid-advertising')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">Paid Advertising</button>
            <button onClick={() => onNavigate('/capabilities/digital-marketing/performance-marketing')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">Performance Marketing</button>
            <button onClick={() => onNavigate('/capabilities/digital-marketing/campaign-strategy')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">Campaign Strategy</button>
            <button onClick={() => onNavigate('/capabilities/digital-marketing/audience-targeting')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">Audience Targeting</button>
            <button onClick={() => onNavigate('/capabilities/digital-marketing/conversion-optimization')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">Conversion Rate Optimization</button>
            <button onClick={() => onNavigate('/capabilities/digital-marketing/marketing-analytics')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">Marketing Analytics</button>
          </div>

          {/* Column 3: Custom Software Engineering */}
          <div className="flex flex-col gap-3">
            <span className="text-white text-sm font-semibold mb-1">Custom Software Engineering</span>
            <button onClick={() => onNavigate('/capabilities/software-engineering')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">Software Engineering Overview</button>
            <button onClick={() => onNavigate('/capabilities/software-engineering/custom-software')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">Custom Software Development</button>
            <button onClick={() => onNavigate('/capabilities/software-engineering/business-management-systems')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">Business Management Systems</button>
            <button onClick={() => onNavigate('/capabilities/software-engineering/web-applications')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">Web Application Development</button>
            <button onClick={() => onNavigate('/capabilities/software-engineering/mobile-applications')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">Mobile Application Development</button>
            <button onClick={() => onNavigate('/capabilities/software-engineering/b2b-software-solutions')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">B2B Software Solutions</button>
            <button onClick={() => onNavigate('/capabilities/software-engineering/api-integrations')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">API Development &amp; Integrations</button>
          </div>

          {/* Column 4: AI Solutions */}
          <div className="flex flex-col gap-3">
            <span className="text-white text-sm font-semibold mb-1">AI Solutions</span>
            <button onClick={() => onNavigate('/capabilities/ai-solutions')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">AI Solutions Overview</button>
            <button onClick={() => onNavigate('/capabilities/ai-solutions/ai-integration')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">AI Integration for Businesses</button>
            <button onClick={() => onNavigate('/capabilities/ai-solutions/business-automation')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">Business Process Automation</button>
            <button onClick={() => onNavigate('/capabilities/ai-solutions/intelligent-workflows')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">Intelligent Business Workflows</button>
            <button onClick={() => onNavigate('/capabilities/ai-solutions/ai-assistants-agents')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">AI Assistants &amp; Agents</button>
            <button onClick={() => onNavigate('/capabilities/ai-solutions/data-intelligence')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">Data Intelligence</button>
            <button onClick={() => onNavigate('/capabilities/ai-solutions/custom-ai-solutions')} className="text-left text-[13px] hover:text-white transition-colors cursor-pointer">Custom AI Solutions</button>
            <button onClick={() => onNavigate('/contact')} className="text-left text-[13px] text-purple-400 font-semibold hover:text-purple-300 transition-colors flex items-center gap-1 cursor-pointer mt-1">
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} 47 Agency · All rights reserved
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('/industries')} className="hover:text-neutral-300 transition-colors cursor-pointer">Industries</button>
            <button onClick={() => onNavigate('/work')} className="hover:text-neutral-300 transition-colors cursor-pointer">Our Work</button>
            <button onClick={() => onNavigate('/insights')} className="hover:text-neutral-300 transition-colors cursor-pointer">Insights</button>
            <button onClick={() => onNavigate('/resources')} className="hover:text-neutral-300 transition-colors cursor-pointer">Resources</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
