import React from 'react';
import { WORK_PROJECTS } from '../data/workData';
import { ArrowRight, ShieldCheck, ImageIcon } from 'lucide-react';

interface WorkPageProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate }) => {
  const campaignChannels = [
    {
      channel: 'Meta Ads',
      format: 'Feed & Short-Form Video',
      note: 'Reserved for approved campaign screenshots',
    },
    {
      channel: 'Google Ads',
      format: 'Search & Video Placements',
      note: 'Reserved for approved campaign screenshots',
    },
    {
      channel: 'TikTok Ads',
      format: 'Vertical Native Creative',
      note: 'Reserved for approved campaign screenshots',
    },
    {
      channel: 'Snapchat Ads',
      format: 'Story & Full-Screen Creative',
      note: 'Reserved for approved campaign screenshots',
    },
  ];

  return (
    <div className="flex flex-col w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span>Our Work</span>
            <span>/</span>
            <span className="text-neutral-200">Verified Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Our Work
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            We publish client case studies and campaign visuals only with verified outcomes and explicit client clearance
          </p>
        </div>

        {/* Verified Case Studies Section */}
        {WORK_PROJECTS.length === 0 ? (
          <div className="p-8 sm:p-10 rounded-3xl ring-1 ring-purple-500/20 bg-[#0B0A12] flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-purple-300">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span>Verified Publication Policy</span>
              </div>
              <h2 className="text-2xl font-semibold text-white">
                Case Studies Shared Upon Verification &amp; Client Consent
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Public project profiles are currently being compiled for client review and verification. During a private consultation, we can walk through relevant technical approaches and sample architectures aligned with your scope
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={() => onNavigate('/contact')}
                className="px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Request Capability Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {WORK_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="p-8 rounded-3xl ring-1 ring-purple-500/20 bg-[#0B0A12] flex flex-col gap-4"
              >
                <span className="text-xs font-medium text-purple-400">{project.category}</span>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">{project.summary}</p>
              </div>
            ))}
          </div>
        )}

        {/* Advertising Campaign Portfolio Structure (Cleanly prepared for real screenshots later) */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Advertising Campaign Portfolio
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Dedicated showcase frames prepared for verified campaign screenshots across Meta Ads, Google Ads, TikTok Ads, and Snapchat Ads
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campaignChannels.map((campaign) => (
              <div
                key={campaign.channel}
                className="p-5 rounded-2xl ring-1 ring-white/10 bg-[#0B0A12] flex flex-col gap-4"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white">{campaign.channel}</span>
                  <span className="text-neutral-500 text-[11px]">{campaign.format}</span>
                </div>

                <div className="w-full aspect-[4/5] rounded-xl bg-black/40 ring-1 ring-white/5 flex flex-col items-center justify-center p-5 text-center gap-2.5">
                  <ImageIcon className="w-5 h-5 text-neutral-600" />
                  <span className="text-xs text-neutral-500 leading-relaxed">{campaign.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
