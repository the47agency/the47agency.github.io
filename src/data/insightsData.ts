export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Marketing Intelligence' | 'Technology & Software' | 'Artificial Intelligence';
  readingTime: string;
  excerpt: string;
  keyTakeaways: string[];
  contentSections: {
    heading: string;
    body: string[];
  }[];
  authorTeam: string;
}

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    id: 'insight-server-side-tracking',
    slug: 'cookieless-attribution-and-server-side-tracking',
    title: 'First-Party Conversion Tracking & Server-Side Attribution Basics',
    category: 'Marketing Intelligence',
    readingTime: '5 min read',
    excerpt:
      'Why browser privacy controls affect standard advertising pixels and how first-party server tracking helps keep conversion reporting dependable',
    keyTakeaways: [
      'Browser privacy restrictions and ad blockers frequently block standard client-side pixel scripts',
      'Sending verified conversion events directly from your own backend improves consistency across ad platforms',
      'Event deduplication ensures browser and server events are counted accurately without double reporting',
    ],
    contentSections: [
      {
        heading: 'Why Browser-Only Pixels Lose Visibility',
        body: [
          'For years, online advertising depended on small JavaScript tags running inside a visitor browser. When someone submitted a form or completed a checkout, that script notified the advertising platform directly',
          'Modern browser privacy defaults, tracking blockers, and mobile operating system restrictions now interrupt many client-side requests before they arrive, leaving gaps between actual sales and campaign dashboards',
        ],
      },
      {
        heading: 'How Server-Side Event Routing Helps',
        body: [
          'Instead of relying exclusively on browser scripts, an application server can send structured conversion events directly to platform APIs such as Meta Conversions API or Google Enhanced Conversions',
          'Using consistent event identifiers lets platforms match server confirmations with any client events cleanly, preserving cleaner feedback while respecting user consent settings',
        ],
      },
    ],
    authorTeam: '47 Agency Marketing Practice',
  },
  {
    id: 'insight-microservices-vs-monolith',
    slug: 'pragmatic-software-architecture-for-growing-teams',
    title: 'Pragmatic Software Architecture: Modular Systems Before Microservices',
    category: 'Technology & Software',
    readingTime: '6 min read',
    excerpt:
      'Splitting a young application into many separate services early creates heavy operational overhead. Clean modular codebases scale far more smoothly',
    keyTakeaways: [
      'Distributed microservices add network latency, deployment complexity, and coordination overhead across small teams',
      'A well-structured modular monolith keeps domain boundaries clean while keeping development fast and simple',
      'Independent services should be extracted only when specific workloads genuinely need isolated scaling',
    ],
    contentSections: [
      {
        heading: 'The Hidden Overhead of Early Microservices',
        body: [
          'Many growing businesses adopt complex multi-service architectures too early, assuming separate repositories and clusters automatically create reliability',
          'In practice, splitting a straightforward product across many networked services multiplies deployment scripts, debugging effort, and data synchronization risks without helping end users',
        ],
      },
      {
        heading: 'Designing Modular Boundaries First',
        body: [
          'Organizing features into clear, well-typed modules inside a single repository preserves fast local development, transactional database integrity, and straightforward deployments',
          'If a specialized workload such as background document processing eventually outgrows shared compute, a cleanly isolated module can be moved to its own worker smoothly',
        ],
      },
    ],
    authorTeam: '47 Agency Engineering Practice',
  },
  {
    id: 'insight-enterprise-rag-reality',
    slug: 'practical-ai-workflows-beyond-chatbots',
    title: 'Beyond Generic Chatbots: Designing Practical Business AI Workflows',
    category: 'Artificial Intelligence',
    readingTime: '5 min read',
    excerpt:
      'Standalone chat widgets rarely save team time on their own. Effective business AI connects to approved data, structured tools, and clear human review',
    keyTakeaways: [
      'Chat interfaces without connections to real knowledge sources or systems produce vague answers',
      'Grounded retrieval links AI responses directly to approved company documents and product records',
      'Human review gates keep automated workflows reliable on edge cases and important approvals',
    ],
    contentSections: [
      {
        heading: 'Why Standalone Chat Widgets Disappoint',
        body: [
          'Many companies place an ungrounded chat box on their website expecting immediate relief for support teams. Without access to up-to-date policies or customer status lookups, visitors receive generic replies and still need human help',
          'Practical AI works best when embedded directly into clear operational tasks such as sorting incoming requests, summarizing attachments, or looking up approved records',
        ],
      },
      {
        heading: 'Principles for Dependable AI Integration',
        body: [
          'Strong implementations pair structured tool schemas with grounded document retrieval and explicit escalation paths so staff stay in control whenever a request falls outside standard rules',
        ],
      },
    ],
    authorTeam: '47 Agency AI Practice',
  },
];
