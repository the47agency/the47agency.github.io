export interface SubService {
  slug: string;
  title: string;
  headline: string;
  summary: string;
  problemsSolved: string[];
  solutions: string[];
  deliverables: string[];
  methodology: { step: string; description: string }[];
  outcomes: string[];
  faqs: { question: string; answer: string }[];
}

export interface CapabilityPillar {
  id: 'digital-marketing' | 'software-engineering' | 'ai-solutions';
  name: string;
  tagline: string;
  positioning: string;
  badge: string;
  subservices: SubService[];
}

export const CAPABILITIES_DATA: Record<string, CapabilityPillar> = {
  'digital-marketing': {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    tagline: 'Focused Customer Acquisition & Paid Channel Execution',
    positioning:
      'We manage digital marketing around clear business economics by connecting campaign strategy, paid advertising execution, landing page conversion, and practical conversion reporting',
    badge: 'Acquisition & Growth',
    subservices: [
      {
        slug: 'paid-advertising',
        title: 'Paid Advertising',
        headline: 'Structured Paid Advertising Across Major Digital Channels',
        summary:
          'Hands-on campaign setup, creative testing, and budget optimization across Meta, Google Ads, TikTok, Snapchat, and LinkedIn',
        problemsSolved: [
          'Rising acquisition costs driven by broad or unrefined ad targeting',
          'Creative fatigue lowering click-through and conversion efficiency',
          'Budget spent across placements that generate clicks without qualified inquiries or sales',
        ],
        solutions: [
          'Structured campaign architecture separating prospecting and retargeting',
          'Iterative creative and messaging tests guided by conversion results',
          'Regular audience, placement, and bid adjustments based on performance data',
        ],
        deliverables: [
          'Account structure and campaign setup across selected ad platforms',
          'Ad copy and creative testing roadmap',
          'Ongoing budget pacing and bid adjustments',
          'Clear performance summaries covering spend, leads, and sales',
        ],
        methodology: [
          {
            step: 'Account Review',
            description: 'Audit historical campaigns, tracking tags, and conversion setup to find wasted spend',
          },
          {
            step: 'Campaign Structure',
            description: 'Organize ad sets by audience intent, offer angle, and channel role',
          },
          {
            step: 'Creative Testing',
            description: 'Test headlines, visuals, and calls to action systematically before scaling spend',
          },
          {
            step: 'Active Optimization',
            description: 'Reallocate budget toward audiences and ads producing qualified commercial outcomes',
          },
        ],
        outcomes: [
          'Clear visibility into which campaigns and creatives drive real inquiries or orders',
          'Disciplined budget control that reduces wasted impressions across non-performing placements',
        ],
        faqs: [
          {
            question: 'Which advertising platforms do you manage?',
            answer:
              'We manage campaigns across Meta (Instagram and Facebook), Google Search and YouTube, TikTok Ads, Snapchat Ads, and LinkedIn Ads depending on where your buyers spend time',
          },
          {
            question: 'Who owns our ad accounts and historical data?',
            answer:
              'Your company retains direct ownership of all advertising accounts, pixels, and billing methods, while 47 Agency operates via partner access',
          },
        ],
      },
      {
        slug: 'performance-marketing',
        title: 'Performance Marketing',
        headline: 'Acquisition Structured Around Unit Economics',
        summary:
          'Connecting ad spend decisions to gross margin, customer value, and repeatable lead or order quality rather than surface clicks',
        problemsSolved: [
          'High click or engagement volume that does not translate into profitable revenue',
          'Lack of alignment between ad budgets, product margins, and sales capacity',
          'Low repeat engagement after an initial promotional purchase',
        ],
        solutions: [
          'Campaign goals calibrated to target cost per acquisition and contribution margin',
          'Full-funnel sequencing from initial discovery through retargeting and follow-up',
          'Ongoing collaboration between marketing execution and sales or storefront feedback',
        ],
        deliverables: [
          'Allowable acquisition cost model aligned with product or service margins',
          'Funnel stage campaign mapping from acquisition to retention',
          'Regular review of lead quality, order value, and campaign pacing',
        ],
        methodology: [
          {
            step: 'Economics Baseline',
            description: 'Review pricing, margins, and order values to set realistic acquisition targets',
          },
          {
            step: 'Signal Alignment',
            description: 'Prioritize optimization around completed purchases or qualified leads',
          },
          {
            step: 'Funnel Refinement',
            description: 'Pair acquisition ads with tailored retargeting messages for undecided visitors',
          },
          {
            step: 'Commercial Review',
            description: 'Evaluate channel efficiency regularly against actual sales and margin impact',
          },
        ],
        outcomes: [
          'Advertising budgets guided by actual business profitability rather than vanity metrics',
          'Consistent feedback between campaign performance and sales pipeline quality',
        ],
        faqs: [
          {
            question: 'How do you set target cost per acquisition?',
            answer:
              'We work with your pricing, gross margin, and sales conversion rate to define a practical acquisition ceiling before scaling spend',
          },
        ],
      },
      {
        slug: 'campaign-strategy',
        title: 'Campaign Strategy',
        headline: 'Clear Positioning & Channel Planning Before Launch',
        summary:
          'Market research, competitor review, messaging angles, and channel roadmaps that give every campaign a coherent direction',
        problemsSolved: [
          'Launching paid campaigns without a clear value proposition or differentiated offer',
          'Disconnected promotions across channels without a unified calendar',
          'Unclear budget split between brand awareness and direct response',
        ],
        solutions: [
          'Practical review of competitor positioning and customer decision drivers',
          'Structured messaging angles tailored to specific buyer segments',
          'Phased channel and budget plan aligned with commercial milestones',
        ],
        deliverables: [
          'Campaign strategy brief and core messaging framework',
          'Channel roles and recommended budget allocation plan',
          'Launch roadmap covering creative needs and tracking checkpoints',
        ],
        methodology: [
          {
            step: 'Market & Offer Review',
            description: 'Examine your product positioning, pricing, and competitor landscape',
          },
          {
            step: 'Messaging Angles',
            description: 'Define clear propositions addressing customer problems and buying criteria',
          },
          {
            step: 'Channel Planning',
            description: 'Match each message and format to the platforms most suited to your audience',
          },
          {
            step: 'Launch Governance',
            description: 'Coordinate creative preparation, tracking checks, and rollout milestones',
          },
        ],
        outcomes: [
          'Cohesive messaging across every ad format and landing experience',
          'A practical execution plan that aligns marketing priorities with business goals',
        ],
        faqs: [
          {
            question: 'Does campaign strategy include regional or seasonal planning?',
            answer:
              'Yes, we adapt messaging, offers, and scheduling to match your target markets, languages, and seasonal demand cycles worldwide',
          },
        ],
      },
      {
        slug: 'audience-targeting',
        title: 'Audience Targeting',
        headline: 'Behavioral Segmentation & First-Party Audience Alignment',
        summary:
          'Organizing customer lists, website signals, and platform targeting criteria so ads reach relevant prospective buyers',
        problemsSolved: [
          'Spending budget on irrelevant regions, demographics, or low-intent audiences',
          'Ad sets competing against each other for the same users',
          'Underused customer and CRM lists that could guide better prospecting',
        ],
        solutions: [
          'Structured audience segmentation separating cold prospects, engaged visitors, and past buyers',
          'Exclusion rules to prevent wasted impressions on existing or ineligible segments',
          'Use of consented first-party customer lists to build higher-relevance lookalike audiences',
        ],
        deliverables: [
          'Audience structure and exclusion taxonomy per ad platform',
          'Clean custom audience segments synced from website or CRM records',
          'Segment performance comparisons to guide ongoing refinement',
        ],
        methodology: [
          {
            step: 'Signal Review',
            description: 'Identify existing customer attributes, purchase patterns, and website engagement signals',
          },
          {
            step: 'Segment Design',
            description: 'Define distinct prospect, retargeting, and exclusion audience groups',
          },
          {
            step: 'Platform Configuration',
            description: 'Apply demographic, interest, and first-party audience seeds inside each ad account',
          },
          {
            step: 'Overlap Monitoring',
            description: 'Refine segments as campaign results accumulate to keep delivery focused',
          },
        ],
        outcomes: [
          'Cleaner separation between prospecting campaigns and retargeting',
          'More relevant ad delivery aligned with your highest-fit customer profile',
        ],
        faqs: [
          {
            question: 'Do we need large existing customer lists to improve targeting?',
            answer:
              'Even modest customer records help clarify your strongest buyer profile; where lists are small, we combine structured platform testing with clear exclusion rules',
          },
        ],
      },
      {
        slug: 'conversion-optimization',
        title: 'Conversion Rate Optimization',
        headline: 'Landing Page Refinement & Friction Removal',
        summary:
          'Practical UX improvements, messaging clarity, and checkout or form streamlining to help more visitors complete key actions',
        problemsSolved: [
          'Visitors leaving landing pages before understanding the offer',
          'Long, confusing inquiry forms or multi-step checkouts causing drop-offs',
          'Slow or awkward mobile page layouts reducing campaign efficiency',
        ],
        solutions: [
          'Structured audits of page hierarchy, copy clarity, and mobile ergonomics',
          'Streamlined inquiry forms and simplified purchase flows',
          'Controlled page variation testing where traffic volume supports experimentation',
        ],
        deliverables: [
          'Conversion audit highlighting priority friction points',
          'Recommended layout, copy, and form structure revisions',
          'Implemented page updates or test variations aligned with active campaigns',
        ],
        methodology: [
          {
            step: 'Funnel Inspection',
            description: 'Review analytics drop-off points, mobile layout behavior, and user journeys',
          },
          {
            step: 'Friction Prioritization',
            description: 'Rank clarity, speed, and form issues by likely impact on conversion',
          },
          {
            step: 'Implementation',
            description: 'Deploy cleaner landing page sections, clearer CTAs, and simpler forms',
          },
          {
            step: 'Review & Iterate',
            description: 'Monitor conversion changes alongside paid campaign performance',
          },
        ],
        outcomes: [
          'Stronger alignment between ad promises and landing page experience',
          'Fewer unnecessary steps standing between visitor intent and form or order completion',
        ],
        faqs: [
          {
            question: 'Can we improve conversions without huge monthly traffic?',
            answer:
              'Yes. While formal statistical split-testing requires higher traffic volumes, fixing unclear copy, slow mobile pages, and complex forms improves visitor experience at any scale',
          },
        ],
      },
      {
        slug: 'marketing-analytics',
        title: 'Marketing Analytics',
        headline: 'Practical Conversion Tracking & Clear Campaign Reporting',
        summary:
          'Reliable pixel and tag configuration, UTM discipline, and straightforward reporting so you know what your campaigns are generating',
        problemsSolved: [
          'Missing or duplicated purchase and lead conversion events',
          'Inconsistent UTM naming making channel performance difficult to compare',
          'Bloated reports filled with metrics that do not explain actual inquiries or sales',
        ],
        solutions: [
          'Clean setup of Google Analytics, ad platform pixels, and conversion APIs where supported',
          'Consistent UTM tagging standards across every paid and organic campaign link',
          'Concise reporting dashboards focused on spend, conversions, cost per result, and trend changes',
        ],
        deliverables: [
          'Verified conversion event tracking across key forms or checkout steps',
          'Standardized UTM link naming guide for marketing teams',
          'Monthly or weekly summary dashboard built in straightforward reporting tools',
        ],
        methodology: [
          {
            step: 'Tracking Audit',
            description: 'Verify existing tags, pixels, and event triggers to catch broken or double-counted actions',
          },
          {
            step: 'Tag Cleanup',
            description: 'Configure clean website events and UTM rules across active channels',
          },
          {
            step: 'Dashboard Setup',
            description: 'Assemble a clear view combining ad spend and recorded conversion actions',
          },
          {
            step: 'Regular Reporting',
            description: 'Provide plain-language summaries highlighting what worked and what to adjust next',
          },
        ],
        outcomes: [
          'Dependable baseline tracking for leads, bookings, and purchases',
          'Clear campaign reporting that supports confident budget decisions without unnecessary complexity',
        ],
        faqs: [
          {
            question: 'Do we need an enterprise data warehouse for useful marketing analytics?',
            answer:
              'No. Most growing businesses benefit far more from accurately configured website events, consistent UTM tagging, and clean regular reporting than from complex data infrastructure',
          },
        ],
      },
    ],
  },
  'software-engineering': {
    id: 'software-engineering',
    name: 'Custom Software Engineering',
    tagline: 'Tailored Web Applications, Business Systems & Reliable Integrations',
    positioning:
      'We build practical custom software tailored to how your business operates, from customer-facing web and mobile applications to internal management tools and clean system integrations',
    badge: 'Architecture & Systems',
    subservices: [
      {
        slug: 'custom-software',
        title: 'Custom Software Development',
        headline: 'Tailored Software Built Around Your Exact Workflows',
        summary:
          'Purpose-built business software designed around your operational rules, user roles, and data structure when off-the-shelf tools no longer fit',
        problemsSolved: [
          'Reliance on manual spreadsheets because standard SaaS tools do not match internal processes',
          'Disconnected tools forcing staff to re-enter the same records across multiple platforms',
          'Rigid software subscriptions adding unnecessary per-seat costs as teams grow',
        ],
        solutions: [
          'Clean modular software designed specifically around your business domain',
          'Structured relational databases with role-based permissions and activity history',
          'Readable TypeScript codebases handed over with clear documentation',
        ],
        deliverables: [
          'Custom application source code and configuration files',
          'Structured database schema and data model documentation',
          'Deployed staging and production environments with core setup instructions',
        ],
        methodology: [
          {
            step: 'Workflow Discovery',
            description: 'Document key user roles, business rules, and operational edge cases first',
          },
          {
            step: 'System Design',
            description: 'Define clear data models, screen flows, and API boundaries before coding',
          },
          {
            step: 'Iterative Builds',
            description: 'Deliver working milestones for team feedback throughout development',
          },
          {
            step: 'Launch & Handover',
            description: 'Deploy cleanly and walk your team through day-to-day administration',
          },
        ],
        outcomes: [
          'Software tailored cleanly to your operations instead of forcing teams into awkward workarounds',
          'Clean ownership of the custom codebase built for your organization',
        ],
        faqs: [
          {
            question: 'Who owns the source code created for a custom build?',
            answer:
              'Upon project completion as outlined in the client agreement, your company owns the custom application codebase built for your engagement',
          },
        ],
      },
      {
        slug: 'web-applications',
        title: 'Web Application Development',
        headline: 'Fast, Responsive Web Applications Built for Everyday Reliability',
        summary:
          'Modern browser-based applications, customer portals, and interactive dashboards engineered for clean performance across desktop and mobile',
        problemsSolved: [
          'Outdated web portals that are difficult to navigate or slow to update',
          'Inconsistent mobile and desktop layouts that frustrate customers or staff',
          'Frontends tightly coupled to legacy scripts that break during feature updates',
        ],
        solutions: [
          'Component-based React and TypeScript interfaces with clear visual hierarchy',
          'Responsive layouts designed for desktop, tablet, and mobile browsers',
          'Clean integration with modern backend APIs and cloud databases',
        ],
        deliverables: [
          'Responsive production web application',
          'Reusable UI component set aligned with your brand identity',
          'Backend API connection and deployment configuration',
        ],
        methodology: [
          {
            step: 'Interface Planning',
            description: 'Map core user tasks and screen flows for clarity and low friction',
          },
          {
            step: 'Frontend Engineering',
            description: 'Build modular, accessible UI components with predictable state handling',
          },
          {
            step: 'API Connection',
            description: 'Connect forms, tables, authentication, and data updates cleanly to backend services',
          },
          {
            step: 'Cross-Device Testing',
            description: 'Verify layout behavior and interactions across desktop and mobile screen sizes',
          },
        ],
        outcomes: [
          'Clear, dependable web software that customers and internal teams can use smoothly on any device',
          'A maintainable codebase structured for steady future feature additions',
        ],
        faqs: [
          {
            question: 'Can a new web application connect to our existing database or backend?',
            answer:
              'Yes. We regularly design modern web interfaces that connect cleanly to existing REST APIs or SQL databases',
          },
        ],
      },
      {
        slug: 'mobile-applications',
        title: 'Mobile Application Development',
        headline: 'Practical iOS & Android Applications',
        summary:
          'Clean mobile applications designed around real customer and field-team use cases, synchronized with your web platforms and backend data',
        problemsSolved: [
          'Customers or field staff struggling to complete tasks on mobile browsers',
          'Fragmented experience between mobile apps and existing web systems',
          'Duplicate effort maintaining separate platforms when shared logic suffices',
        ],
        solutions: [
          'Cross-platform iOS and Android development for unified feature parity and efficiency',
          'Smooth authentication, push notifications, and practical offline-tolerant flows where required',
          'Shared API integration keeping mobile and web accounts in sync',
        ],
        deliverables: [
          'iOS and Android application builds prepared for review and release',
          'Connected backend endpoints for user data and notifications',
          'Submission support for Apple App Store and Google Play',
        ],
        methodology: [
          {
            step: 'Mobile UX Design',
            description: 'Design intuitive mobile navigation tailored to thumb-friendly everyday use',
          },
          {
            step: 'Application Build',
            description: 'Develop core screens, local state handling, and secure API communication',
          },
          {
            step: 'Device Testing',
            description: 'Test functionality across representative iOS and Android devices',
          },
          {
            step: 'Store Preparation',
            description: 'Prepare build packages, privacy disclosures, and store review assets',
          },
        ],
        outcomes: [
          'A unified mobile experience synchronized with your central web and business systems',
          'Practical maintainability across both iOS and Android releases',
        ],
        faqs: [
          {
            question: 'Should we choose cross-platform or separate native apps?',
            answer:
              'For most business and customer applications, cross-platform development offers a faster, more maintainable single codebase. We recommend native when specialized device hardware features demand it',
          },
        ],
      },
      {
        slug: 'business-management-systems',
        title: 'Business Management Systems',
        headline: 'Unified Internal Systems for Operations, Inventory & Billing',
        summary:
          'Replace scattered spreadsheets with structured internal portals uniting orders, inventory tracking, customer records, and team workflows',
        problemsSolved: [
          'Inventory or order mismatches between separate sales channels and spreadsheets',
          'Manual invoice preparation and repetitive status tracking across departments',
          'Limited operational visibility for managers overseeing day-to-day execution',
        ],
        solutions: [
          'Centralized relational database connecting orders, inventory, customers, and invoicing',
          'Role-based dashboards tailored to operations, finance, and management teams',
          'Structured data import tools to transition cleanly from existing spreadsheets',
        ],
        deliverables: [
          'Custom internal management portal with role-based permissions',
          'Data migration scripts for existing customer, product, or order records',
          'Team onboarding guide covering everyday workflows',
        ],
        methodology: [
          {
            step: 'Operations Mapping',
            description: 'Shadow key workflows from order intake through fulfillment and invoicing',
          },
          {
            step: 'Data Consolidation',
            description: 'Clean existing records and define consistent rules for shared system state',
          },
          {
            step: 'Controlled Rollout',
            description: 'Validate calculations alongside existing records before full team transition',
          },
          {
            step: 'Team Handover',
            description: 'Train department users and refine screens based on real daily usage',
          },
        ],
        outcomes: [
          'Single shared source of truth across sales, operations, and finance teams',
          'Reduced manual copy-pasting and clearer operational oversight',
        ],
        faqs: [
          {
            question: 'Can you help import our historical Excel records?',
            answer:
              'Yes. During discovery we inspect existing spreadsheets and write structured import scripts to clean and load historical data accurately',
          },
        ],
      },
      {
        slug: 'b2b-software-solutions',
        title: 'B2B Software Solutions',
        headline: 'Client Portals, Wholesale Ordering & Vendor Extranets',
        summary:
          'Dedicated B2B portals giving corporate buyers clear access to account pricing, repeat ordering, quotes, and order tracking',
        problemsSolved: [
          'Wholesale orders managed slowly through scattered email threads and messaging chats',
          'Sales staff spending hours preparing manual quotes and repeating order status updates',
          'Account-specific pricing and payment terms hard to manage in standard consumer stores',
        ],
        solutions: [
          'Authenticated B2B client portal with company accounts and custom price tiers',
          'Quick reorder workflows, quote requests, and structured order history views',
          'Synchronization with CRM, billing, or inventory backends',
        ],
        deliverables: [
          'Branded B2B ordering and account management portal',
          'Company-level pricing and permission configuration',
          'Order and account sync integration with internal tools',
        ],
        methodology: [
          {
            step: 'Commercial Rules',
            description: 'Map buyer tiers, pricing logic, approval steps, and billing workflows',
          },
          {
            step: 'Portal Build',
            description: 'Create clear catalog browsing, bulk ordering, and account history views',
          },
          {
            step: 'System Sync',
            description: 'Connect portal submissions directly to internal inventory or CRM systems',
          },
          {
            step: 'Buyer Onboarding',
            description: 'Roll out accounts to key corporate customers with straightforward access',
          },
        ],
        outcomes: [
          'A professional self-service channel that makes repeat ordering simpler for B2B buyers',
          'Less manual administrative coordination for sales and account teams',
        ],
        faqs: [
          {
            question: 'Can each corporate client see their own negotiated prices?',
            answer:
              'Yes. The portal structure supports account-level price lists, catalog visibility, and custom commercial terms per business client',
          },
        ],
      },
      {
        slug: 'api-integrations',
        title: 'API Development & Integrations',
        headline: 'Reliable Connections Between Your Platforms & Tools',
        summary:
          'Connect storefronts, payment providers, CRMs, accounting software, and custom apps through clean APIs and webhook pipelines',
        problemsSolved: [
          'Separate business platforms failing to stay synchronized',
          'Fragile point-to-point scripts that silently miss updates when a service has brief downtime',
          'Manual CSV exports and imports needed just to move daily orders or leads',
        ],
        solutions: [
          'Structured REST APIs and authenticated webhook handlers with clear error logging',
          'Retry and queue patterns so transient third-party interruptions do not lose updates',
          'Clear API documentation for internal developers and external partners',
        ],
        deliverables: [
          'Custom integration service or middleware connecting target platforms',
          'Structured request validation, logging, and retry handling',
          'Endpoint documentation and payload specifications',
        ],
        methodology: [
          {
            step: 'Interface Audit',
            description: 'Review API documentation, rate limits, and authentication requirements of each tool',
          },
          {
            step: 'Contract Design',
            description: 'Define explicit data mappings and validation rules between systems',
          },
          {
            step: 'Resilient Implementation',
            description: 'Build authenticated handlers, logging, and safe retry behavior',
          },
          {
            step: 'Integration Testing',
            description: 'Verify end-to-end event flow using sandbox and staging environments',
          },
        ],
        outcomes: [
          'Smooth automatic data flow across CRM, payments, storefronts, and internal tools',
          'Fewer manual reconciliations and clearer visibility when an external service errors',
        ],
        faqs: [
          {
            question: 'What happens if a third-party platform is temporarily unreachable?',
            answer:
              'We use queued retry patterns and clear error logging so failed events can be retried cleanly instead of quietly disappearing',
          },
        ],
      },
    ],
  },
  'ai-solutions': {
    id: 'ai-solutions',
    name: 'AI Solutions',
    tagline: 'Practical Business Automation, Assistants & Connected Intelligence',
    positioning:
      'We implement practical AI systems that fit directly into your existing tools and workflows—focusing on reliable automation, document handling, customer assistants, and clearer operational visibility',
    badge: 'Cognitive Automation',
    subservices: [
      {
        slug: 'ai-integration',
        title: 'AI Integration for Businesses',
        headline: 'Embed AI Safely Inside Your Existing Tools',
        summary:
          'Connect established language models and internal knowledge search directly to your company documents, CRM, and daily software workflows',
        problemsSolved: [
          'Teams spending too much time searching across scattered documents and policies',
          'Repetitive drafting, summarizing, and categorizing across daily email and support tasks',
          'Uncertainty over using public consumer AI tools safely with internal company records',
        ],
        solutions: [
          'Document-grounded Q&A and search connected to approved internal files',
          'Enterprise API configurations that isolate company inputs from public model training',
          'Role-aware interfaces integrated cleanly alongside existing internal tools',
        ],
        deliverables: [
          'Private document indexing and internal search workflow',
          'Authenticated API integration layer connected to existing company software',
          'Clear usage guidelines and access controls for staff',
        ],
        methodology: [
          {
            step: 'Use-Case Selection',
            description: 'Identify high-frequency internal bottlenecks where language models add clear value',
          },
          {
            step: 'Knowledge Structuring',
            description: 'Organize and index reference documents with clear source citations',
          },
          {
            step: 'Quality Testing',
            description: 'Evaluate responses against real internal questions to keep answers grounded',
          },
          {
            step: 'Team Rollout',
            description: 'Deploy to staff with simple feedback mechanisms for continuous refinement',
          },
        ],
        outcomes: [
          'Faster internal lookup across handbooks, product sheets, and process documents',
          'Controlled integration using established AI APIs rather than unverified consumer tools',
        ],
        faqs: [
          {
            question: 'Is our internal data used to train public AI models?',
            answer:
              'We configure integrations using enterprise API tiers with training opt-out enabled and keep indexed company documents within your controlled cloud environment',
          },
        ],
      },
      {
        slug: 'business-automation',
        title: 'Business Process Automation',
        headline: 'Streamline Repetitive Back-Office & Document Workflows',
        summary:
          'Automate incoming form triage, document data extraction, and cross-system updates with human review gates where judgment is needed',
        problemsSolved: [
          'Manual re-typing of invoices, forms, and attachments into business systems',
          'Delays in routing customer onboarding or operational approvals',
          'Transcription mistakes introduced during repetitive administrative data entry',
        ],
        solutions: [
          'Automated extraction of structured fields from incoming PDFs, images, and forms',
          'Rule-based and AI-assisted routing across CRM, email, and internal databases',
          'Human-in-the-loop review views for edge cases or low-confidence items',
        ],
        deliverables: [
          'Automated intake and extraction workflow connected to your systems',
          'Supervisor review queue for flagged exceptions',
          'Workflow documentation and operational runbook',
        ],
        methodology: [
          {
            step: 'Process Mapping',
            description: 'Document current manual steps, inputs, and approval criteria',
          },
          {
            step: 'Extraction Design',
            description: 'Configure structured parsing rules matched to your real forms and documents',
          },
          {
            step: 'Review Thresholds',
            description: 'Separate clear routine items from edge cases that require team verification',
          },
          {
            step: 'Monitored Launch',
            description: 'Roll out step by step alongside existing processes to confirm accuracy',
          },
        ],
        outcomes: [
          'Less repetitive data entry across operations, finance, and onboarding teams',
          'Human oversight retained cleanly where exceptions or policy nuances occur',
        ],
        faqs: [
          {
            question: 'Can automated workflows handle both English and other languages?',
            answer:
              'Yes. Modern multimodal language APIs handle multilingual documents well, and we include human review queues for handwritten or ambiguous scans',
          },
        ],
      },
      {
        slug: 'ai-assistants-agents',
        title: 'AI Assistants & Agents',
        headline: 'Task-Aware Assistants for Customer Support & Internal Teams',
        summary:
          'Conversational assistants connected safely to approved company knowledge and lookup tools to resolve routine inquiries and hand off complex issues',
        problemsSolved: [
          'Support teams answering the same status, policy, and scheduling questions repeatedly',
          'Rigid keyword bots unable to understand natural customer phrasing',
          'Slow initial response times outside regular working hours',
        ],
        solutions: [
          'Context-aware conversational assistants grounded in approved company policies',
          'Controlled API tool calls for order status lookup or ticket creation',
          'Smooth escalation to human team members with concise conversation summaries',
        ],
        deliverables: [
          'Web or messaging AI assistant integrated with your knowledge base',
          'Defined tool boundaries and brand tone guidelines',
          'Handover workflow connecting conversations directly to human support desks',
        ],
        methodology: [
          {
            step: 'Scope & Guardrails',
            description: 'Define what the assistant can answer, which APIs it may call, and when to escalate',
          },
          {
            step: 'Tool Connection',
            description: 'Integrate authenticated lookup endpoints with strict permission limits',
          },
          {
            step: 'Scenario Testing',
            description: 'Test realistic customer questions and edge cases prior to public release',
          },
          {
            step: 'Phased Rollout',
            description: 'Monitor real conversations carefully and refine prompts and escalation rules',
          },
        ],
        outcomes: [
          'Consistent, helpful responses for routine customer questions around the clock',
          'Human agents receive clean context summaries whenever a conversation needs personal attention',
        ],
        faqs: [
          {
            question: 'Can customers still reach a real person easily?',
            answer:
              'Yes. We design every assistant with clear escalation paths so complex requests or unhappy customers are handed over seamlessly to your team',
          },
        ],
      },
      {
        slug: 'intelligent-workflows',
        title: 'Intelligent Business Workflows',
        headline: 'AI-Assisted Triage, Summarization & Approval Pipelines',
        summary:
          'Combine structured decision criteria with language models to summarize dossiers, draft replies, and organize team reviews with human sign-off',
        problemsSolved: [
          'Managers spending hours reading lengthy threads or submissions before making simple approvals',
          'Inconsistent review formatting across team members',
          'Bottlenecks in sales, procurement, or client intake handoffs',
        ],
        solutions: [
          'Automated brief synthesis highlighting key facts, gaps, and checklist items',
          'Guided draft generation grounded in prior templates and company standards',
          'Clean approval interfaces where authorized staff remain the final decision-maker',
        ],
        deliverables: [
          'Connected workflow pipeline integrating intake, AI synthesis, and review UI',
          'Explicit checklist criteria and citation links back to source inputs',
          'Audit history recording final human approvals',
        ],
        methodology: [
          {
            step: 'Criteria Alignment',
            description: 'Translate team review habits into explicit evaluation checklists',
          },
          {
            step: 'Pipeline Assembly',
            description: 'Connect document intake, structured summarization, and draft outputs',
          },
          {
            step: 'Reviewer Interface',
            description: 'Present concise summaries alongside original files for fast human verification',
          },
          {
            step: 'Continuous Feedback',
            description: 'Refine prompt rules based on edits made by reviewers in real workflows',
          },
        ],
        outcomes: [
          'Shorter preparation time before internal review and client response',
          'Human judgment kept firmly in control of every final approval',
        ],
        faqs: [
          {
            question: 'Does the system make binding financial or legal decisions on its own?',
            answer:
              'No. Intelligent workflows organize evidence, surface key considerations, and draft outputs while leaving final decisions to authorized team members',
          },
        ],
      },
      {
        slug: 'data-intelligence',
        title: 'Data Intelligence',
        headline: 'Structured Operational Reporting & Practical Trend Visibility',
        summary:
          'Organize existing sales, support, and operational records into clear recurring summaries, anomaly alerts, and straightforward trend views',
        problemsSolved: [
          'Operational records locked in separate tables without clear weekly summaries',
          'Late discovery of sudden drops in reorder activity or spikes in support volume',
          'Teams manually compiling recurring spreadsheet summaries every week',
        ],
        solutions: [
          'Automated aggregation of existing order, CRM, and support records into clear views',
          'Straightforward threshold alerts flagging unusual shifts in orders or inquiries',
          'Concise natural-language weekly digests summarizing key operational changes',
        ],
        deliverables: [
          'Unified reporting view across selected operational data sources',
          'Configurable alert rules for unusual activity changes',
          'Automated recurring summary digests for operations leads',
        ],
        methodology: [
          {
            step: 'Data Inventory',
            description: 'Identify existing transactional and support tables that contain useful signals',
          },
          {
            step: 'Metric Definitions',
            description: 'Agree on clear, consistent formulas with operations and finance stakeholders',
          },
          {
            step: 'Pipeline Setup',
            description: 'Automate scheduled data pulls and straightforward alert checks',
          },
          {
            step: 'Reporting Refinement',
            description: 'Adjust summary formats so leaders get concise answers without noise',
          },
        ],
        outcomes: [
          'Clearer visibility into customer activity and operational trends using data you already collect',
          'Less manual spreadsheet assembly each week',
        ],
        faqs: [
          {
            question: 'Do we need a dedicated data science team to maintain this?',
            answer:
              'No. We focus on practical, maintainable reporting pipelines and clear summaries built around your existing databases and tools',
          },
        ],
      },
      {
        slug: 'custom-ai-solutions',
        title: 'Custom AI Solutions',
        headline: 'Tailored AI Applications Built for Specific Company Needs',
        summary:
          'Custom interfaces, structured prompt pipelines, and API integrations designed when off-the-shelf AI tools do not fit your exact workflow',
        problemsSolved: [
          'Generic chat tools unable to interact cleanly with proprietary software workflows',
          'Need for consistent, schema-validated outputs rather than free-form chat text',
          'Teams juggling manual copy-pasting between company databases and AI prompts',
        ],
        solutions: [
          'Bespoke web interfaces and backend workflows tailored to your specific task',
          'Structured JSON output pipelines using established foundation model APIs',
          'Clean permission boundaries and evaluation checks before deployment',
        ],
        deliverables: [
          'Custom AI-enabled application tailored to your defined workflow',
          'Integrated backend API orchestration and evaluation test suite',
          'Deployment configuration and maintenance documentation',
        ],
        methodology: [
          {
            step: 'Problem Definition',
            description: 'Validate that custom AI software actually outperforms simpler automation',
          },
          {
            step: 'Prototype Validation',
            description: 'Build a focused working prototype tested against real company examples',
          },
          {
            step: 'Application Engineering',
            description: 'Wrap verified workflows in a clean, permissioned production application',
          },
          {
            step: 'Ongoing Calibration',
            description: 'Monitor output quality and adjust prompts or rules as requirements evolve',
          },
        ],
        outcomes: [
          'Targeted AI functionality embedded seamlessly inside a clean custom tool',
          'Pragmatic engineering built on proven foundation APIs without unnecessary complexity',
        ],
        faqs: [
          {
            question: 'Do you train proprietary AI models from scratch?',
            answer:
              'In almost all business cases, building structured workflows, retrieval pipelines, and custom applications around established foundation model APIs delivers better reliability at far lower cost than training models from scratch',
          },
        ],
      },
    ],
  },
};
