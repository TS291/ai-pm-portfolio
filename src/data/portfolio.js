// ============================================================
// PORTFOLIO DATA — Edit this file to customize all content
// ============================================================

export const personal = {
  name: 'Alex Morgan',
  title: 'Senior Product Manager · AI Products',
  tagline: 'Building AI Products That Solve Real Problems',
  subheadline:
    'I lead AI product strategy, experimentation, and execution across marketplaces, SaaS, and enterprise software — from zero-to-one bets to scaled platforms.',
  location: 'San Francisco, CA',
  email: 'alex@example.com',
  linkedin: 'https://linkedin.com/in/alexmorgan',
  github: 'https://github.com/alexmorgan',
  resumeUrl: '/resume.pdf', // Place your resume PDF in /public/resume.pdf
}

export const stats = [
  { value: '8+', label: 'Years in Product' },
  { value: '4', label: 'AI Products Shipped' },
  { value: '$2B+', label: 'Revenue Influenced' },
  { value: '3', label: 'Zero-to-One Builds' },
]

export const skills = [
  {
    category: 'AI & Machine Learning',
    items: ['LLM Integration', 'RAG Architectures', 'Prompt Engineering', 'Model Evaluation', 'AI Safety & Ethics', 'Fine-tuning Strategy'],
  },
  {
    category: 'Product Strategy',
    items: ['0→1 Product Development', 'Product-Market Fit', 'Go-to-Market Strategy', 'Competitive Analysis', 'Pricing Strategy', 'Platform Thinking'],
  },
  {
    category: 'Execution',
    items: ['Agile / Scrum', 'OKR Frameworks', 'Roadmap Planning', 'Stakeholder Management', 'Cross-functional Leadership', 'Technical Specs'],
  },
  {
    category: 'Research & Data',
    items: ['User Research', 'A/B Testing', 'SQL & Analytics', 'Experiment Design', 'Data Visualization', 'Qualitative Research'],
  },
]

export const experience = [
  {
    company: 'Acme AI',
    role: 'Senior Product Manager, AI Products',
    period: '2022 – Present',
    description:
      'Leading the AI product portfolio across three product lines. Shipped four AI-native features to 500K+ users. Drove 40% increase in user engagement through intelligent personalization.',
  },
  {
    company: 'FreightOS',
    role: 'Product Manager, Marketplace',
    period: '2019 – 2022',
    description:
      'Owned the core freight marketplace matching product. Introduced ML-powered pricing recommendations that increased booking conversion by 28%.',
  },
  {
    company: 'Stripe',
    role: 'Associate Product Manager',
    period: '2017 – 2019',
    description:
      'Part of the foundational APM program. Worked on developer tooling and API products used by 100K+ businesses globally.',
  },
]

export const education = [
  {
    school: 'University of California, Berkeley',
    degree: 'B.S. Computer Science & Business',
    period: '2013 – 2017',
  },
]

export const caseStudies = [
  {
    slug: 'ai-freight-matching',
    title: 'AI Freight Matching Assistant',
    subtitle: 'Reducing manual broker work by 60% with intelligent load-carrier matching',
    tags: ['AI/ML', 'Marketplace', 'B2B'],
    duration: '9 months',
    role: 'Lead PM',
    outcome: '60% reduction in manual matching time',
    coverColor: '#EFF6FF',
    accentColor: '#2563EB',
    problem:
      'Freight brokers spent 4–6 hours daily manually matching loads to carriers, relying on spreadsheets and tribal knowledge. Match quality was inconsistent, leading to delayed shipments and thin margins.',
    research: {
      summary:
        'Conducted 28 user interviews with freight brokers across 6 companies. Observed 40+ hours of matching workflows. Ran a 2-week diary study with 12 participants tracking time allocation.',
      insights: [
        'Brokers spent 60% of their time on data lookup, not judgment',
        'Top performers had mental models that could be systematized',
        'Trust in recommendations was the #1 adoption blocker',
        'Explanation of why a carrier was recommended was as important as the recommendation itself',
      ],
    },
    strategy:
      'Position the AI as a "copilot" rather than autopilot. Build transparency into every recommendation. Start with high-confidence, low-stakes loads to build trust before tackling complex freight.',
    architecture:
      'Hybrid ML model combining gradient-boosted trees for carrier scoring with an LLM layer for natural language reasoning and explanation generation. Integrated with existing TMS via REST APIs. Embedded retrieval from historical shipment database.',
    userFlow: [
      'Broker creates or imports a load',
      'System automatically scores available carriers (0–100)',
      'AI surfaces top 5 matches with plain-language explanations',
      'Broker reviews, adjusts weighting, and confirms',
      'System learns from broker overrides to improve future matches',
    ],
    metrics: [
      { label: 'Match time reduced', value: '4.5h → 45min' },
      { label: 'On-time delivery rate', value: '+12%' },
      { label: 'Broker NPS', value: '+34 points' },
      { label: 'Revenue per broker', value: '+22%' },
    ],
    experiments: [
      { name: 'Explanation format', hypothesis: 'Bullet explanations outperform paragraph prose', result: 'Bullets: +18% acceptance rate' },
      { name: 'Confidence threshold', hypothesis: 'Showing only 90%+ matches reduces noise', result: 'Optimal at 75% — too restrictive above' },
      { name: 'Override feedback', hypothesis: 'Asking "why did you override?" improves model', result: '+8% model accuracy over 60 days' },
    ],
    lessons: [
      'Trust is built in milliseconds — explainability was non-negotiable from day one',
      'The "last mile" of AI UX (how you present recommendations) matters as much as model quality',
      'Shipping a narrow, high-confidence v1 beat trying to solve all freight types at once',
    ],
  },
  {
    slug: 'ai-resume-optimizer',
    title: 'AI Resume Optimization Platform',
    subtitle: 'Helping 100K+ job seekers get past ATS filters with personalized AI feedback',
    tags: ['AI/ML', 'Consumer', 'SaaS'],
    duration: '6 months',
    role: 'Lead PM',
    outcome: '3.2x increase in interview callback rates',
    coverColor: '#F0FDF4',
    accentColor: '#16A34A',
    problem:
      'Over 75% of resumes are rejected by ATS systems before a human ever reads them. Job seekers have no visibility into why they fail or how to improve. Generic advice online is too broad to be actionable.',
    research: {
      summary:
        'Surveyed 1,200 job seekers. Conducted 22 in-depth interviews. Analyzed 500 anonymized ATS rejection patterns. Partnered with 3 recruiting firms to understand hiring manager expectations.',
      insights: [
        'Job seekers edit resumes 8+ times per application on average',
        'Most don\'t know which keywords matter for specific roles',
        'Formatting issues cause 40% of ATS failures',
        'Users want actionable, specific feedback — not generic tips',
      ],
    },
    strategy:
      'Build a "turbo mode" for resume writing: instant, specific, confidence-building feedback loops. Integrate with job postings to make keyword matching automatic. Gamify the improvement process.',
    architecture:
      'GPT-4 fine-tuned on 50K successful resume/job description pairs. Custom scoring rubric for ATS compatibility, keyword density, and readability. Job description parsing pipeline using spaCy + Claude for semantic matching.',
    userFlow: [
      'User pastes resume or uploads PDF',
      'User adds target job description',
      'AI generates match score (0–100) across 6 dimensions',
      'Specific, actionable suggestions generated per section',
      'User applies suggestions in the built-in editor',
      'Re-score with real-time delta tracking',
    ],
    metrics: [
      { label: 'Interview callback rate', value: '+3.2x' },
      { label: 'Time to apply', value: '45min → 12min' },
      { label: 'Monthly active users', value: '100K+' },
      { label: 'User retention (30-day)', value: '68%' },
    ],
    experiments: [
      { name: 'Score visibility', hypothesis: 'Showing score prominently increases engagement', result: '+31% edit sessions when score shown upfront' },
      { name: 'Suggestion framing', hypothesis: '"Add X" beats "Remove Y" in acceptance rate', result: 'Additive suggestions accepted 2.4x more often' },
      { name: 'Progress bar', hypothesis: 'Progress indicator increases completion', result: '+24% full-analysis completion rate' },
    ],
    lessons: [
      'Users need to feel empowered, not judged — framing every suggestion as an opportunity was critical',
      'Real-time feedback loops drove far more engagement than asynchronous reports',
      'Partnering with recruiters to validate suggestions built credibility that marketing couldn\'t',
    ],
  },
  {
    slug: 'ai-support-copilot',
    title: 'AI Customer Support Copilot',
    subtitle: 'Cutting average handle time by 38% while improving CSAT for enterprise SaaS',
    tags: ['AI/ML', 'Enterprise', 'SaaS'],
    duration: '12 months',
    role: 'Lead PM',
    outcome: '38% reduction in average handle time',
    coverColor: '#FFF7ED',
    accentColor: '#EA580C',
    problem:
      'Enterprise support agents juggled 12+ tabs, struggled to find answers in fragmented knowledge bases, and took 8+ minutes per ticket on average. New agents took 3 months to reach competency. CSAT was stagnating at 3.8/5.',
    research: {
      summary:
        'Embedded with support teams at 4 enterprise clients for 3 weeks. Conducted contextual inquiry with 35 agents. Reviewed 10,000 historical tickets for pattern analysis.',
      insights: [
        'Agents switched tabs 22 times per ticket on average',
        '40% of tickets were variations of 50 core issues',
        'New agents\' biggest anxiety: giving wrong answers',
        'Managers\' biggest concern: consistency of responses across the team',
      ],
    },
    strategy:
      'Build an ambient AI layer inside existing support tools (Zendesk, Intercom) — not a replacement. Auto-surface relevant knowledge articles, suggest draft responses, and flag escalation risks proactively.',
    architecture:
      'RAG pipeline over company knowledge base (Confluence, Zendesk articles, Slack threads). Real-time ticket classification with intent detection. LLM draft generation with citation grounding. Custom RLHF loop from agent edits.',
    userFlow: [
      'Ticket arrives, AI classifies intent and severity in <2 seconds',
      'Relevant KB articles auto-surface in sidebar',
      'AI drafts an initial response (agent sees it, not the customer)',
      'Agent reviews, edits, and sends',
      'Agent feedback (edit or accept) trains the next iteration',
    ],
    metrics: [
      { label: 'Avg handle time', value: '-38%' },
      { label: 'CSAT score', value: '3.8 → 4.5' },
      { label: 'New agent ramp time', value: '3mo → 3wk' },
      { label: 'Ticket deflection', value: '+24%' },
    ],
    experiments: [
      { name: 'Draft visibility', hypothesis: 'Full draft shown > suggested snippets', result: 'Full draft: -42% AHT vs. snippets: -18% AHT' },
      { name: 'Citation display', hypothesis: 'Showing source citations increases trust', result: 'Agent confidence up 31%; edits down 20%' },
      { name: 'Proactive vs reactive', hypothesis: 'Suggestions before agent types beat after', result: 'Proactive surface: +15% draft acceptance' },
    ],
    lessons: [
      'Agents don\'t want AI to replace them — they want AI to make them look brilliant',
      'Citation transparency was the trust unlock; without it, agents were skeptical',
      'Embedding in existing workflows beat a standalone tool by 5x on adoption',
    ],
  },
  {
    slug: 'ai-product-discovery',
    title: 'AI Product Discovery Assistant',
    subtitle: 'Transforming how 500+ PMs at a Fortune 500 run discovery with conversational AI',
    tags: ['AI/ML', 'Enterprise', 'Productivity'],
    duration: '8 months',
    role: 'Lead PM',
    outcome: '500+ PMs using weekly; 2x faster roadmap alignment',
    coverColor: '#FDF4FF',
    accentColor: '#9333EA',
    problem:
      'Product managers at large organizations spent 60%+ of their time in meetings synthesizing feedback, aligning stakeholders, and translating insights into requirements. Strategic thinking time was crowded out by administrative work.',
    research: {
      summary:
        'Surveyed 200 PMs across 3 organizations. Ran time-diary studies with 20 PMs over 4 weeks. Interviewed 15 CPOs on their biggest leverage points for PM performance.',
      insights: [
        'PMs spent 12 hrs/week in discovery-adjacent admin work',
        'Insight synthesis was the highest-value, highest-effort bottleneck',
        'Stakeholder alignment consumed 3–4 meeting cycles on average',
        'PMs craved a "thought partner" more than a task automator',
      ],
    },
    strategy:
      'Build a conversational discovery co-pilot: ingest research artifacts, generate hypotheses, draft PRDs, and prepare alignment materials — all through natural language interaction. The PM stays in the driver\'s seat.',
    architecture:
      'Multi-agent system: a Research Agent ingests and summarizes inputs, a Strategy Agent generates opportunity trees, a Writing Agent drafts PRD sections. Orchestrated via LangGraph. All outputs are editable and version-controlled.',
    userFlow: [
      'PM uploads research: user interviews, surveys, analytics exports',
      'Discovery Assistant synthesizes themes and surfaces key insights',
      'PM has a conversation to explore hypotheses and tradeoffs',
      'Assistant drafts opportunity tree and initial PRD',
      'PM reviews, refines, and exports to Confluence/Notion',
    ],
    metrics: [
      { label: 'Discovery cycle time', value: '4wk → 2wk' },
      { label: 'PRD first-draft time', value: '8hr → 45min' },
      { label: 'Weekly active PMs', value: '500+' },
      { label: 'Stakeholder alignment rounds', value: '3.5 → 1.8' },
    ],
    experiments: [
      { name: 'Conversation vs. forms', hypothesis: 'Conversational input beats structured forms', result: 'Conversation: +60% completion; 40% more context captured' },
      { name: 'Hypothesis framing', hypothesis: 'Generating 5 hypotheses beats 1 "best" one', result: 'Multiple options: PMs rated outputs 40% more useful' },
      { name: 'Export format', hypothesis: 'Confluence export beats PDF download', result: 'Direct integration: 3x more docs acted upon within 48hrs' },
    ],
    lessons: [
      '"Thought partner" positioning resonated far more than "automation" — PMs feared the latter',
      'Giving PMs control over what the AI generates (not just consuming outputs) was the engagement unlock',
      'The workflow integration (Confluence, Notion) was table stakes — without it, adoption stalled',
    ],
  },
]

export const articles = [
  {
    slug: 'llm-product-strategy',
    title: 'Why Most LLM Product Strategies Are Wrong',
    excerpt:
      'The product moat in AI isn\'t the model — it\'s the workflow, the data flywheel, and the trust architecture. Here\'s how to build something defensible.',
    date: 'October 2024',
    readTime: '8 min read',
    tags: ['Strategy', 'LLMs'],
  },
  {
    slug: 'ux-for-ai-products',
    title: 'The UX of AI: Why Explainability Is a Product Feature',
    excerpt:
      'Users don\'t just want correct AI outputs — they want to understand why. How transparency design drives adoption and trust in AI-powered products.',
    date: 'August 2024',
    readTime: '6 min read',
    tags: ['UX', 'AI Design'],
  },
  {
    slug: 'zero-to-one-ai',
    title: 'Zero to One with AI: A PM\'s Playbook',
    excerpt:
      'The first 90 days of an AI product are unlike any other. Lessons from building four AI products from scratch: what works, what fails, and what nobody tells you.',
    date: 'June 2024',
    readTime: '10 min read',
    tags: ['Strategy', 'Playbook'],
  },
  {
    slug: 'experiment-design-ai',
    title: 'Experiment Design for AI Features: Beyond A/B Tests',
    excerpt:
      'Traditional A/B testing breaks down for AI features. How to design experiments that measure what actually matters when the output is probabilistic.',
    date: 'April 2024',
    readTime: '7 min read',
    tags: ['Experimentation', 'Data'],
  },
  {
    slug: 'marketplace-ai',
    title: 'How AI Is Reshaping Marketplace Dynamics',
    excerpt:
      'Marketplaces built on matching algorithms are getting a second act with generative AI. What this means for platform strategy, liquidity, and defensibility.',
    date: 'February 2024',
    readTime: '9 min read',
    tags: ['Marketplace', 'Strategy'],
  },
  {
    slug: 'pm-in-ai-era',
    title: 'The PM Role in the Age of AI: What Changes, What Doesn\'t',
    excerpt:
      'AI is accelerating product cycles, changing what "done" means, and raising the bar for judgment. A reflection on how the PM role is evolving.',
    date: 'January 2024',
    readTime: '5 min read',
    tags: ['Career', 'AI'],
  },
]
