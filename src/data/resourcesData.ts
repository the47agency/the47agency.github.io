export interface ResourceItem {
  id: string;
  slug: string;
  title: string;
  type: string;
  description: string;
  summaryPoints: string[];
}

export interface MasterFaq {
  category: string;
  question: string;
  answer: string;
}

export const RESOURCES_DATA: ResourceItem[] = [
  {
    id: 'res-tracking-checklist',
    slug: 'conversion-tracking-checklist',
    title: 'Conversion Tracking & Attribution Checklist',
    type: 'Advisory Topic',
    description:
      'Key checks our marketing team reviews during discovery to ensure ad spend, website events, and lead records stay properly aligned',
    summaryPoints: [
      'Form submission and purchase event verification across primary ad channels',
      'Consistent UTM parameter structure for comparing channel performance cleanly',
      'Deduplication checks between browser events and server-side confirmations',
    ],
  },
  {
    id: 'res-software-scoping',
    slug: 'custom-software-scoping-guide',
    title: 'Custom Software & Internal System Scoping Guide',
    type: 'Scoping Framework',
    description:
      'A structured preparation checklist for organizations planning web portals, business management tools, or platform integrations',
    summaryPoints: [
      'Mapping current manual spreadsheets and department approval steps',
      'Defining user roles, access boundaries, and required third-party integrations',
      'Identifying existing records that need clean import before launch',
    ],
  },
  {
    id: 'res-ai-readiness',
    slug: 'ai-workflow-readiness-checklist',
    title: 'Practical AI Workflow Readiness Review',
    type: 'Planning Guide',
    description:
      'Practical criteria used to evaluate whether a workflow is well-suited for AI automation, an assistant, or standard software rules',
    summaryPoints: [
      'Assessing inquiry volume, document consistency, and exception frequency',
      'Defining what an assistant may answer vs when a person should review or approve',
      'Selecting isolated enterprise API configurations for internal company files',
    ],
  },
  {
    id: 'res-growth-audit',
    slug: 'paid-acquisition-readiness-guide',
    title: 'Paid Acquisition & Landing Page Readiness Review',
    type: 'Advisory Topic',
    description:
      'Foundational checks before scaling paid advertising budgets across Meta, Google Ads, TikTok, Snapchat, or LinkedIn',
    summaryPoints: [
      'Matching ad messaging directly to landing page headlines and offers',
      'Reviewing mobile page load responsiveness and inquiry form length',
      'Aligning target cost per acquisition with product or service unit margins',
    ],
  },
];

export const MASTER_FAQS: MasterFaq[] = [
  {
    category: 'General',
    question: 'What differentiates 47 Agency from typical marketing agencies or dev shops?',
    answer:
      'Many companies hire one vendor for paid advertising and another for software engineering, creating delays when landing pages, tracking, or internal tools need changes. 47 Agency connects digital marketing, custom software engineering, and practical AI within one coordinated team',
  },
  {
    category: 'General',
    question: 'How are client engagements typically structured?',
    answer:
      'Depending on your goals, work is structured either as a scoped software or AI delivery project with defined milestones, an ongoing paid advertising and conversion retainer, or an integrated engagement spanning both marketing and engineering',
  },
  {
    category: 'General',
    question: 'Which locations and markets does 47 Agency serve?',
    answer:
      'Our office is located in Istanbul, and we work directly with businesses operating worldwide across local and international markets',
  },
  {
    category: 'Software Engineering',
    question: 'Who retains ownership of custom software built by 47 Agency?',
    answer:
      'Client ownership terms for custom codebases and project deliverables are defined explicitly in the client project agreement upon completion and final handoff',
  },
  {
    category: 'Software Engineering',
    question: 'What technologies do you typically work with for web systems?',
    answer:
      'We primarily build modern web applications and backend services using TypeScript, React, Node.js, relational SQL databases, and containerized cloud deployments tailored to each project requirement',
  },
  {
    category: 'Digital Marketing',
    question: 'How is advertising budget billed and who owns the ad accounts?',
    answer:
      'Your media budget is billed directly through your company payment method inside advertising accounts owned by your organization, while our team manages campaigns via partner access',
  },
  {
    category: 'Digital Marketing',
    question: 'What happens before launching or restructuring paid campaigns?',
    answer:
      'We begin by auditing historical campaign data, verifying conversion tracking events, aligning on unit economics and target audience segments, and preparing initial creative test variations before scaling spend',
  },
  {
    category: 'AI Solutions',
    question: 'How is company information protected in AI integrations?',
    answer:
      'We configure AI workflows using enterprise API setups where model training opt-out is enabled and keep internal reference documents stored inside controlled cloud environments',
  },
  {
    category: 'AI Solutions',
    question: 'Do your AI assistants support multilingual customer communication?',
    answer:
      'Yes. We design conversational and document workflows across English, Turkish, Arabic, and other languages depending on your customer base, with clear handoff paths to human staff when needed',
  },
];
