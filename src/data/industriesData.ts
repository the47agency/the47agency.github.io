export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  headline: string;
  summary: string;
  marketContext: string;
  challenges: string[];
  capabilitiesApplied: { pillar: string; detail: string }[];
  practicalDeliverables: string[];
  /** Preserved solely for approved HomePage sector tab binding without fabricated claims */
  caseStudyPreview: {
    clientCategory: string;
    headline: string;
    solutionDetail: string;
    description: string;
  };
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'ecommerce',
    slug: 'ecommerce-retail',
    title: 'E-commerce & Retail',
    headline: 'Customer Acquisition & Storefront Infrastructure for Retail Brands',
    summary:
      'Helping direct-to-consumer and multi-channel retail businesses connect paid advertising performance with responsive storefronts and reliable inventory workflows',
    marketContext:
      'Retail brands worldwide depend on mobile-ready storefronts, clear conversion tracking, and smooth coordination between marketing promotions and product availability',
    challenges: [
      'Rising paid advertising costs squeezing product margins',
      'Disconnections between online inventory levels and warehouse records',
      'Mobile checkout friction reducing purchase completion',
      'Limited visibility into which campaigns drive repeat purchases',
    ],
    capabilitiesApplied: [
      {
        pillar: 'Digital Marketing',
        detail: 'Paid advertising across Meta, Google, and TikTok paired with conversion tracking and landing page testing',
      },
      {
        pillar: 'Custom Software Engineering',
        detail: 'Responsive storefronts, custom checkout flows, and inventory synchronization integrations',
      },
      {
        pillar: 'AI Solutions',
        detail: 'Order inquiry assistants and automated product catalog or support routing workflows',
      },
    ],
    practicalDeliverables: [
      'Structured campaign and creative testing system across primary paid channels',
      'Verified conversion event setup and clear acquisition reporting',
      'Custom storefront improvements or backend inventory API synchronization',
      'Task-aware support assistant connected to order status lookups',
    ],
    caseStudyPreview: {
      clientCategory: 'Direct-to-Consumer & Omnichannel Retail',
      headline: 'Omnichannel Storefront & Acquisition Architecture',
      solutionDetail: 'Paid Advertising, Conversion Tracking & Storefront Systems',
      description: 'Structured scope combining paid acquisition campaigns, responsive storefront engineering, and synchronized inventory records',
    },
  },
  {
    id: 'saas',
    slug: 'technology-saas',
    title: 'Technology & SaaS',
    headline: 'Pipeline Generation & Product Engineering for Software Teams',
    summary:
      'Supporting B2B software companies with targeted buyer acquisition, customer portals, and clean product engineering',
    marketContext:
      'Software and cloud businesses operate in competitive global markets where high acquisition costs demand clear product positioning and dependable application architecture',
    challenges: [
      'High cost per click in competitive search and B2B social channels',
      'Onboarding friction slowing down trial-to-paid conversion',
      'Need for clean multi-tenant permissions and billing integrations',
    ],
    capabilitiesApplied: [
      {
        pillar: 'Digital Marketing',
        detail: 'Intent-driven Google Search and LinkedIn campaigns aligned with clearer product landing pages',
      },
      {
        pillar: 'Custom Software Engineering',
        detail: 'Web applications, role-based customer portals, and CRM or billing integrations',
      },
      {
        pillar: 'AI Solutions',
        detail: 'Product knowledge search and inbound inquiry qualification workflows',
      },
    ],
    practicalDeliverables: [
      'B2B search and LinkedIn campaign strategy tailored to decision-makers',
      'Landing page conversion refinements for demo and trial flows',
      'Custom customer portal features, API bridges, and role-based workflows',
      'Grounded knowledge assistant for customer onboarding and support triage',
    ],
    caseStudyPreview: {
      clientCategory: 'B2B Software & Cloud Platforms',
      headline: 'B2B Pipeline & Web Platform Architecture',
      solutionDetail: 'Search Acquisition, Web Applications & Onboarding Workflows',
      description: 'Structured scope aligning targeted B2B lead generation with clean onboarding interfaces and CRM integrations',
    },
  },
  {
    id: 'professional',
    slug: 'professional-services',
    title: 'Professional Services',
    headline: 'Digital Client Intake & Document Workflows for Advisory Firms',
    summary:
      'Equipping consultancies, legal practices, and financial service providers with structured lead generation, private client portals, and document automation',
    marketContext:
      'Service-based firms spend valuable billable hours coordinating client intake over email and scattered files, leaving little room for repeatable inbound growth',
    challenges: [
      'Manual client onboarding over email attachments and repetitive forms',
      'Over-reliance on referrals without predictable digital inbound channels',
      'Time-consuming document sorting, summarizing, and compliance checks',
    ],
    capabilitiesApplied: [
      {
        pillar: 'Digital Marketing',
        detail: 'Search capture campaigns and high-trust consultation funnels for qualified service inquiries',
      },
      {
        pillar: 'Custom Software Engineering',
        detail: 'Private client extranets with role-based document access and milestone tracking',
      },
      {
        pillar: 'AI Solutions',
        detail: 'Structured document extraction, dossier summarization, and intake routing with staff review',
      },
    ],
    practicalDeliverables: [
      'Targeted search and lead capture funnels built for high-value consultations',
      'Encrypted client portal for structured onboarding and file sharing',
      'Document parsing workflows that organize client submissions cleanly',
      'AI-assisted brief synthesis with clear human sign-off controls',
    ],
    caseStudyPreview: {
      clientCategory: 'Advisory, Legal & Consulting Practices',
      headline: 'Client Intake Portal & Document Automation Scope',
      solutionDetail: 'Inbound Lead Funnels, Client Extranet & Document Workflows',
      description: 'Structured scope replacing scattered email intake with a client portal and reviewed document processing',
    },
  },
  {
    id: 'b2b',
    slug: 'b2b-businesses',
    title: 'B2B Businesses',
    headline: 'Ordering Portals & Account-Focused Growth for Commercial Trade',
    summary:
      'Helping manufacturers, wholesale distributors, and industrial suppliers modernize buyer ordering and build steady commercial pipelines worldwide',
    marketContext:
      'Commercial B2B companies often manage repeat orders via spreadsheets, PDFs, and phone calls while seeking more scalable international customer acquisition',
    challenges: [
      'Repeat wholesale orders handled manually across messages and spreadsheets',
      'Slow quotation turnaround delaying commercial deals',
      'Disconnected ERP, catalog, and buyer account visibility',
    ],
    capabilitiesApplied: [
      {
        pillar: 'Digital Marketing',
        detail: 'Account-based campaigns and paid search focused on procurement and operations buyers',
      },
      {
        pillar: 'Custom Software Engineering',
        detail: 'Self-service wholesale portals with account-specific pricing and ERP or billing sync',
      },
      {
        pillar: 'AI Solutions',
        detail: 'Automated quote preparation support and catalog lookup assistants',
      },
    ],
    practicalDeliverables: [
      'Account-targeted paid acquisition campaigns for commercial decision-makers',
      'B2B ordering portal supporting account price tiers and quick reorders',
      'API integration syncing orders and invoices with existing internal software',
      'Assisted quotation drafting tools connected to product specifications',
    ],
    caseStudyPreview: {
      clientCategory: 'Wholesale Distribution & Industrial Trade',
      headline: 'Wholesale Extranet & Commercial Integration Scope',
      solutionDetail: 'B2B Portal Engineering, System Integration & Targeted Outreach',
      description: 'Structured scope giving business buyers self-service account ordering linked to internal inventory and invoicing',
    },
  },
];
