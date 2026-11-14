import React, { useEffect, useState } from 'react';
import { INSIGHTS_DATA, InsightArticle } from '../data/insightsData';
import { ArrowRight, Clock, ArrowLeft, Share2, Check } from 'lucide-react';

interface InsightsPageProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ currentPath, onNavigate }) => {
  const resolveCategory = (path: string) => {
    const clean = path.toLowerCase();
    if (clean.includes('marketing-intelligence')) return 'Marketing Intelligence';
    if (clean.includes('technology-software')) return 'Technology & Software';
    if (clean.includes('artificial-intelligence')) return 'Artificial Intelligence';
    return 'All';
  };

  const [activeCategory, setActiveCategory] = useState<string>(() => resolveCategory(currentPath));
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setActiveCategory(resolveCategory(currentPath));
    setSelectedArticle(null);
  }, [currentPath]);

  const categories = [
    'All',
    'Marketing Intelligence',
    'Technology & Software',
    'Artificial Intelligence',
  ];

  const filtered = INSIGHTS_DATA.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (selectedArticle) {
    return (
      <div className="flex flex-col w-full py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          <button
            onClick={() => setSelectedArticle(null)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300 cursor-pointer w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </button>

          {/* Article Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-xs text-neutral-400">
              <span className="text-purple-400 font-medium">{selectedArticle.category}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {selectedArticle.readingTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              {selectedArticle.title}
            </h1>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed pt-1">
              {selectedArticle.excerpt}
            </p>

            <div className="flex items-center justify-between pt-2 text-xs text-neutral-400">
              <span>{selectedArticle.authorTeam}</span>
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied' : 'Share'}</span>
              </button>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="p-6 rounded-2xl ring-1 ring-purple-500/25 bg-[#0B0A12] flex flex-col gap-3">
            <div className="text-xs font-semibold text-purple-300">Key Takeaways</div>
            <div className="flex flex-col gap-2">
              {selectedArticle.keyTakeaways.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Sections */}
          <div className="flex flex-col gap-8 text-neutral-300 leading-relaxed text-sm sm:text-base">
            {selectedArticle.contentSections.map((sec, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <h2 className="text-xl sm:text-2xl font-semibold text-white">{sec.heading}</h2>
                {sec.body.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="p-7 rounded-2xl ring-1 ring-white/10 bg-[#0B0A12] flex flex-col sm:flex-row items-center justify-between gap-6 mt-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Want to discuss this topic for your business?</h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Schedule a focused conversation with our engineering or marketing leads
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

  return (
    <div className="flex flex-col w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span>Insights</span>
            <span>/</span>
            <span className="text-neutral-200">Perspectives</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Insights &amp; Perspectives
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Practical architectural notes on digital acquisition, software structure, and applied AI workflows
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 pb-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Balanced Grid */}
        <div
          className={`grid grid-cols-1 gap-6 ${
            filtered.length === 1
              ? 'max-w-2xl'
              : filtered.length === 2
              ? 'md:grid-cols-2'
              : 'md:grid-cols-3'
          }`}
        >
          {filtered.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group p-7 rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12] hover:ring-purple-500/45 hover:bg-[#110F1D] transition-all cursor-pointer flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span className="text-purple-400 font-medium">{article.category}</span>
                  <span>{article.readingTime}</span>
                </div>

                <h2 className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="text-xs sm:text-sm text-neutral-400 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="text-neutral-500">{article.authorTeam}</span>
                <span className="text-purple-400 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
