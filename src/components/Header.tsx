import React, { useState } from 'react';
import { Logo } from './Logo';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#08080a]/90 backdrop-blur-xl transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleLinkClick('/')}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-lg shrink-0 text-left cursor-pointer"
          aria-label="47 Agency Home"
        >
          <Logo variant="horizontal" size="md" />
        </button>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('about')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleLinkClick('/about')}
              className={`flex items-center gap-1.5 py-2 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPath.startsWith('/about') ? 'text-purple-400 font-semibold' : ''
              }`}
            >
              <span>About</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
            </button>

            {activeDropdown === 'about' && (
              <div className="absolute top-full -left-4 w-56 pt-2 z-50">
                <div className="p-2 rounded-2xl ring-1 ring-purple-500/20 bg-[#0F0E17] shadow-[0_0_24px_rgba(168,85,247,0.14)] backdrop-blur-2xl flex flex-col gap-0.5">
                  <button
                    onClick={() => handleLinkClick('/about/story')}
                    className="px-3 py-2.5 rounded-lg text-left text-xs font-medium text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Our Story
                  </button>
                  <button
                    onClick={() => handleLinkClick('/about/philosophy')}
                    className="px-3 py-2.5 rounded-lg text-left text-xs font-medium text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Our Philosophy
                  </button>
                  <button
                    onClick={() => handleLinkClick('/about/approach')}
                    className="px-3 py-2.5 rounded-lg text-left text-xs font-medium text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Our Approach
                  </button>
                  <button
                    onClick={() => handleLinkClick('/about/method')}
                    className="px-3 py-2.5 rounded-lg text-left text-xs font-medium text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    The 47 Method
                  </button>
                  <button
                    onClick={() => handleLinkClick('/about/values')}
                    className="px-3 py-2.5 rounded-lg text-left text-xs font-medium text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Our Values
                  </button>
                  <button
                    onClick={() => handleLinkClick('/about/brand')}
                    className="px-3 py-2.5 rounded-lg text-left text-xs font-medium text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Brand Identity System
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Capabilities Mega-Menu */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('capabilities')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleLinkClick('/capabilities')}
              className={`flex items-center gap-1.5 py-2 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPath.startsWith('/capabilities') ? 'text-purple-400 font-semibold' : ''
              }`}
            >
              <span>Capabilities</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
            </button>

            {activeDropdown === 'capabilities' && (
              <div className="absolute top-full -left-24 w-[740px] pt-2 z-50">
                <div className="p-6 rounded-2xl ring-1 ring-purple-500/20 bg-[#0F0E17] shadow-[0_0_24px_rgba(168,85,247,0.14)] backdrop-blur-2xl grid grid-cols-3 gap-6">
                  {/* Digital Marketing Column */}
                  <div className="flex flex-col gap-2.5">
                    <button
                      onClick={() => handleLinkClick('/capabilities/digital-marketing')}
                      className="text-left pb-1 group cursor-pointer"
                    >
                      <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                        Digital Marketing
                      </div>
                    </button>
                    <div className="flex flex-col gap-1.5 text-xs text-neutral-400">
                      <button onClick={() => handleLinkClick('/capabilities/digital-marketing/paid-advertising')} className="text-left py-1 hover:text-white transition-colors cursor-pointer">Paid Advertising</button>
                      <button onClick={() => handleLinkClick('/capabilities/digital-marketing/performance-marketing')} className="text-left py-1 hover:text-white transition-colors cursor-pointer">Performance Marketing</button>
                      <button onClick={() => handleLinkClick('/capabilities/digital-marketing/campaign-strategy')} className="text-left py-1 hover:text-white transition-colors cursor-pointer">Campaign Strategy</button>
                      <button onClick={() => handleLinkClick('/capabilities/digital-marketing/audience-targeting')} className="text-left py-1 hover:text-white transition-colors cursor-pointer">Audience Targeting</button>
                      <button onClick={() => handleLinkClick('/capabilities/digital-marketing/conversion-optimization')} className="text-left py-1 hover:text-white transition-colors cursor-pointer">Conversion Rate Optimization</button>
                      <button onClick={() => handleLinkClick('/capabilities/digital-marketing/marketing-analytics')} className="text-left py-1 hover:text-white transition-colors cursor-pointer">Marketing Analytics</button>
                    </div>
                  </div>

                  {/* Custom Software Engineering Column */}
                  <div className="flex flex-col gap-2.5">
                    <button
                      onClick={() => handleLinkClick('/capabilities/software-engineering')}
                      className="text-left pb-1 group cursor-pointer"
                    >
                      <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                        Custom Software Engineering
                      </div>
                    </button>
                    <div className="flex flex-col gap-1.5 text-xs text-neutral-400">
                      <button onClick={() => handleLinkClick('/capabilities/software-engineering/custom-software')} className="text-left py-1 hover:text-white transition-colors cursor-pointer">Custom Software Development</button>
                      <button onClick={() => handleLinkClick('/capabilities/software-engineering/business-management-systems')} className="text-left py-1 hover:text-white transition-colors cursor-pointer">Business Management Systems</button>
                      <button onClick={() => handleLinkClick('/capabilities/software-engineering/web-applications')} className="text-left py-1 hover:text-white transition-colors cursor-pointer">Web Application Development</button>
                      <button onClick={() => handleLinkClick('/capabilities/software-engineering/mobile-applications')} className="text-left py-1 hover:text-white transition-colors cursor-pointer">Mobile Application Development</button>
                      <button onClick={() => handleLinkClick('/capabilities/software-engineering/b2b-software-solutions')} className="text-left py-1 hover:text-white transition-colors cursor-pointer">B2B Software Solutions</button>
                      <button onClick={() => handleLinkClick('/capabilities/software-engineering/api-integrations')} className="text-left py-1 hover:text-white transition-colors cursor-pointer">API Development &amp; Integrations</button>
                    </div>
                  </div>

                  {/* AI Solutions Column */}
                  <div className="flex flex-col gap-2.5">
                    <button
                      onClick={() => handleLinkClick('/capabilities/ai-solutions')}
                      className="text-left pb-1 group cursor-pointer"
                    >
                      <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                        AI Solutions
                      </div>
                    </button>
                    <div className="flex flex-col gap-1.5 text-xs text-neutral-400">
                      <button onClick={() => handleLinkClick('/capabilities/ai-solutions/ai-integration')} className="text-left py-1 hover:text-white transition-colors cursor-pointer">AI Integration for Businesses</button>
                      <button onClick={() => handleLinkClick('/capabilities/ai-solutions/business-automation')} className="text-left py-1 hover:text-white transition-colors cursor-pointer">Business Process Automation</button>
                      <button onClick={() => handleLinkClick('/capabilities/ai-solutions/intelligent-workflows')} className="text-left py-1 hover:text-white transition-colors cursor-pointer">Intelligent Business Workflows</button>
                      <button onClick={() => handleLinkClick('/capabilities/ai-solutions/ai-assistants-agents')} className="text-left py-1 hover:text-white transition-colors cursor-pointer">AI Assistants &amp; Agents</button>
                      <button onClick={() => handleLinkClick('/capabilities/ai-solutions/data-intelligence')} className="text-left py-1 hover:text-white transition-colors cursor-pointer">Data Intelligence</button>
                      <button onClick={() => handleLinkClick('/capabilities/ai-solutions/custom-ai-solutions')} className="text-left py-1 hover:text-white transition-colors cursor-pointer">Custom AI Solutions</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Industries */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('industries')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleLinkClick('/industries')}
              className={`flex items-center gap-1.5 py-2 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPath.startsWith('/industries') ? 'text-purple-400 font-semibold' : ''
              }`}
            >
              <span>Industries</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
            </button>

            {activeDropdown === 'industries' && (
              <div className="absolute top-full -left-4 w-60 pt-2 z-50">
                <div className="p-2 rounded-2xl ring-1 ring-purple-500/20 bg-[#0F0E17] shadow-[0_0_24px_rgba(168,85,247,0.14)] backdrop-blur-2xl flex flex-col gap-0.5">
                  <button onClick={() => handleLinkClick('/industries/ecommerce-retail')} className="px-3 py-2.5 text-left hover:bg-white/5 rounded-lg text-xs font-medium text-white cursor-pointer">E-commerce &amp; Retail</button>
                  <button onClick={() => handleLinkClick('/industries/technology-saas')} className="px-3 py-2.5 text-left hover:bg-white/5 rounded-lg text-xs font-medium text-white cursor-pointer">Technology &amp; SaaS</button>
                  <button onClick={() => handleLinkClick('/industries/professional-services')} className="px-3 py-2.5 text-left hover:bg-white/5 rounded-lg text-xs font-medium text-white cursor-pointer">Professional Services</button>
                  <button onClick={() => handleLinkClick('/industries/b2b-businesses')} className="px-3 py-2.5 text-left hover:bg-white/5 rounded-lg text-xs font-medium text-white cursor-pointer">B2B Businesses</button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleLinkClick('/work')}
            className={`py-2 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentPath.startsWith('/work') ? 'text-purple-400 font-semibold' : ''
            }`}
          >
            Our Work
          </button>

          <button
            onClick={() => handleLinkClick('/insights')}
            className={`py-2 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentPath.startsWith('/insights') ? 'text-purple-400 font-semibold' : ''
            }`}
          >
            Insights
          </button>

          <button
            onClick={() => handleLinkClick('/resources')}
            className={`py-2 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentPath.startsWith('/resources') ? 'text-purple-400 font-semibold' : ''
            }`}
          >
            Resources
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleLinkClick('/contact')}
            className="px-4 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-neutral-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0A12] px-5 py-6 max-h-[82vh] overflow-y-auto flex flex-col gap-3 shadow-2xl">
          <button onClick={() => handleLinkClick('/')} className="text-left text-sm font-semibold text-white py-2.5">Home</button>
          <button onClick={() => handleLinkClick('/about')} className="text-left text-sm font-semibold text-white py-2.5">About 47</button>

          <div className="py-1 flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-purple-400 py-1">Capabilities</span>
            <button onClick={() => handleLinkClick('/capabilities/digital-marketing')} className="text-left text-sm text-neutral-300 pl-3 py-2">Digital Marketing</button>
            <button onClick={() => handleLinkClick('/capabilities/software-engineering')} className="text-left text-sm text-neutral-300 pl-3 py-2">Custom Software Engineering</button>
            <button onClick={() => handleLinkClick('/capabilities/ai-solutions')} className="text-left text-sm text-neutral-300 pl-3 py-2">AI Solutions</button>
          </div>

          <button onClick={() => handleLinkClick('/industries')} className="text-left text-sm font-semibold text-white py-2.5">Industries</button>
          <button onClick={() => handleLinkClick('/work')} className="text-left text-sm font-semibold text-white py-2.5">Our Work</button>
          <button onClick={() => handleLinkClick('/insights')} className="text-left text-sm font-semibold text-white py-2.5">Insights</button>
          <button onClick={() => handleLinkClick('/resources')} className="text-left text-sm font-semibold text-white py-2.5">Resources</button>
          <button onClick={() => handleLinkClick('/contact')} className="text-left text-sm font-semibold text-purple-400 py-2.5">Start a Project</button>
        </div>
      )}
    </header>
  );
};
