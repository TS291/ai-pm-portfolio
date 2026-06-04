// ============================================================
// PORTFOLIO DATA — Edit this file to customize all content
// ============================================================

export const personal = {
  name: 'Tishya Srivastava',
  title: 'Senior Product Manager · AI & Payments',
  tagline: 'Building AI Products That Solve Real Problems',
  subheadline:
    'I lead AI product strategy, experimentation, and execution across payments platforms, enterprise SaaS, and GenAI developer tooling — from zero-to-one bets to scaled platforms serving 140,000+ users.',
  location: 'Sunnyvale, CA',
  email: 'tishyasriv@gmail.com',
  linkedin: 'https://linkedin.com/in/tishyasriv',
  github: '',
  resumeUrl: '/resume.pdf', // Place your resume PDF in /public/resume.pdf
}

export const stats = [
  { value: '4+', label: 'Years in Product' },
  { value: '$9M+', label: 'Projected Business Impact' },
  { value: '31%', label: 'Engagement Lift (AI Personalization)' },
  { value: '140K+', label: 'Users on Platform' },
]

export const skills = [
  {
    category: 'AI & GenAI',
    items: ['LLM Product Design', 'GenAI Workflow Automation', 'AI Personalization', 'Prompt Engineering', 'RAG Architecture', 'Agentic AI Systems', 'AI Ethics & Governance'],
  },
  {
    category: 'Payments & FinTech',
    items: ['Payment Gateway & Processor Integrations', 'Chase & AMEX Direct Integration', 'PCI Compliance', 'Acquiring Expansion', 'Payment Reliability SLAs', 'Embedded Finance'],
  },
  {
    category: 'Product',
    items: ['Platform Strategy', 'Roadmapping', 'PRD Authoring', 'A/B Testing & Experimentation', 'OKRs & KPI Definition', 'RICE Prioritization', 'Agile / Scrum', 'GTM Strategy'],
  },
  {
    category: 'Tools & Analytics',
    items: ['SQL', 'Tableau', 'Power BI', 'Amplitude', 'Figma', 'Jira', 'Confluence', 'Excel', 'R'],
  },
]

export const experience = [
  {
    company: 'Intuit Inc.',
    role: 'Senior Product Manager · Payments Platform — AI & FinTech',
    period: 'Feb 2023 – Present',
    description:
      'Own a portfolio of 3 strategic AI-powered payment platform initiatives — LLM-assisted intake workflows, developer documentation modernization, and direct processor integrations (Chase, AMEX) — projected to unlock $9M+ in annual business impact and eliminate the top operational bottleneck for FinTech engineering teams.',
  },
  {
    company: 'Intuit Inc.',
    role: 'Senior Product Manager · Enterprise Ecosystem — Tech4Intuit',
    period: 'Feb 2023 – Present',
    description:
      'Led strategy and launch of a mission-critical enterprise platform consolidating 4+ legacy systems into a unified solution serving 17,000 global users. Drove a 31% lift in platform engagement through AI personalization. Improved user satisfaction by 15% and reduced support escalations. Owned the scalability roadmap for Intuit Academy serving 140,000+ expert learners powering TurboTax Live and QuickBooks Live.',
  },
  {
    company: 'Intuit Inc.',
    role: 'Product Manager Intern',
    period: 'Jun 2022 – Sep 2022',
    description:
      'Drove new product development for an internal platform, delivering features projected to generate ~$50M in savings and 30% lift in employee satisfaction. Owned the PRD end-to-end — user journey mapping, feature definition, technical requirements, and success metrics — shepherding features from QA through production.',
  },
  {
    company: 'MEMRY (Mobile App)',
    role: 'Founder & Product Lead',
    period: 'Feb 2022 – Jan 2024',
    description:
      'Built and launched an AI-assisted caregiver engagement app for Alzheimer\'s patients from zero. Secured $13,000 in seed and grant funding after winning Dartmouth\'s 2022 "The Pitch" competition (1st place against 120 teams). Product informed by real-world user research with caregivers and clinical experts.',
  },
]

export const education = [
  {
    school: 'Dartmouth College — Thayer School of Engineering & Tuck School of Business',
    degree: 'Master of Engineering Management — Product Management Specialization',
    period: 'Sep 2021 – Jan 2023',
    note: 'George C.A. Conrades \'90 Distinguished Fellowship · Coursework: Technical Product Management, Data Analytics & Visualization, Negotiation',
  },
  {
    school: 'Institute of Chemical Technology, Mumbai',
    degree: 'B.Tech, Pharmaceutical Chemistry',
    period: 'Jun 2017 – May 2021',
    note: 'GPA: 9.71 / 10 · Rank #3 in the university',
  },
]

export const caseStudies = [
  {
    slug: 'llm-intake-workflow',
    title: 'LLM-Assisted Intake Workflow',
    subtitle: 'Redesigning Intuit\'s payment platform intake with GenAI to accelerate roadmap decisions and reduce engineering bottlenecks',
    tags: ['GenAI', 'Payments', 'Enterprise'],
    duration: 'Ongoing',
    role: 'Lead PM',
    outcome: '$9M+ projected annual business impact',
    coverColor: '#EFF6FF',
    accentColor: '#2563EB',
    problem:
      'Intuit\'s Payments 2.0 modernization program was bottlenecked by a slow, manually-intensive intake process. Engineering teams lacked structured signal from stakeholders, leading to poor prioritization, delayed roadmap decisions, and mounting technical debt in payment platform infrastructure.',
    research: {
      summary:
        'Conducted stakeholder interviews across engineering, risk, and business teams. Mapped the existing intake-to-roadmap-decision cycle end-to-end. Analyzed patterns in historical intake requests to identify top categories of ambiguity and delay.',
      insights: [
        'Intake cycle time was 3–4x longer than industry benchmark due to unstructured submissions',
        'Engineers spent significant time chasing clarification rather than building',
        'Prioritization signal was noisy — high-effort requests and low-effort requests looked identical at intake',
        'Stakeholders lacked a consistent mental model for what "good" intake looked like',
      ],
    },
    strategy:
      'Redesign the intake system with LLM-assisted triage at its core. Use structured PRD templates enforced at submission time, with AI-powered quality scoring and automatic routing. Position the AI as a "clarity engine" — not replacing human judgment, but ensuring every request arrives decision-ready.',
    architecture:
      'LLM layer processes incoming intake submissions against a structured rubric. Prompt chains evaluate completeness, ambiguity level, and strategic alignment. Outputs a triage score and structured summary routed to the appropriate engineering pod. Integrated into existing Jira + Confluence workflow via API.',
    userFlow: [
      'Stakeholder submits intake request via structured template',
      'LLM evaluates submission quality and flags missing context',
      'AI generates structured summary and priority signal',
      'Intake is auto-routed to the relevant engineering team',
      'PM reviews AI triage output and approves or escalates',
      'Roadmap decision cycle begins with complete, structured input',
    ],
    metrics: [
      { label: 'Projected business impact', value: '$9M+' },
      { label: 'Intake-to-decision cycle', value: 'Reduced significantly' },
      { label: 'Operational bottlenecks', value: '#1 eliminated' },
      { label: 'Prioritization signal quality', value: 'Materially improved' },
    ],
    experiments: [
      { name: 'Template enforcement vs. open-form', hypothesis: 'Enforced structured templates reduce AI clarification loops', result: 'Structured intake: dramatically fewer follow-up cycles' },
      { name: 'AI summary visibility', hypothesis: 'Showing AI triage summary to submitter improves quality on resubmission', result: 'Submitters self-corrected, reducing PM review time' },
      { name: 'Routing automation threshold', hypothesis: 'Auto-routing at 80%+ confidence reduces PM overhead', result: 'High-confidence auto-routing freed PM bandwidth for edge cases' },
    ],
    lessons: [
      'The biggest leverage in AI-assisted workflows is often upstream — improving input quality, not just processing output',
      'Structured templates feel like friction to users until they see faster decisions; change management was as important as the product',
      'LLM triage works best as a confidence amplifier for human reviewers, not a replacement',
    ],
  },
  {
    slug: 'enterprise-platform-consolidation',
    title: 'Enterprise Platform Consolidation & AI Personalization',
    subtitle: 'Unifying 4 legacy systems into one AI-personalized platform for 17,000 global Intuit users — driving 31% engagement lift',
    tags: ['AI/ML', 'Enterprise', 'Platform'],
    duration: '12 months',
    role: 'Lead PM',
    outcome: '31% engagement lift · 15% CSAT improvement',
    coverColor: '#F0FDF4',
    accentColor: '#16A34A',
    problem:
      'Intuit\'s enterprise ecosystem was fragmented across 4+ legacy systems, creating a disjointed experience for 17,000 global users. Employees struggled to find resources, complete workflows, and access learning content. Support escalations were high and engagement was stagnating.',
    research: {
      summary:
        'Conducted discovery interviews with employees across global offices. Ran a system audit of all 4 legacy platforms to map duplication, gaps, and integration failure points. Analyzed support ticket patterns to identify the highest-frequency pain points.',
      insights: [
        'Users navigated 4 different systems for tasks that should live in one place',
        'Content discovery was the #1 frustration — users couldn\'t find what they needed',
        'Legacy system inconsistency caused support escalations even for routine tasks',
        'Personalization was non-existent — the same experience regardless of role or context',
      ],
    },
    strategy:
      'Consolidate all 4 platforms into a single unified experience with AI-powered personalization at the content and navigation layer. Prioritize role-based content delivery and real-time data architecture to make the platform feel tailored rather than generic.',
    architecture:
      'Unified platform built on modern data architecture with real-time user context signals. AI personalization layer optimizes content ranking and navigation suggestions based on role, activity history, and team context. Integration layer connects legacy data sources during phased migration.',
    userFlow: [
      'User logs in to unified platform (single SSO)',
      'AI personalization layer loads role-relevant content and tasks',
      'User navigates a consolidated, consistent interface',
      'Real-time recommendations surface relevant resources and learning paths',
      'Feedback loop refines personalization model over time',
    ],
    metrics: [
      { label: 'Platform engagement lift', value: '+31%' },
      { label: 'User satisfaction (NPS/CSAT)', value: '+15%' },
      { label: 'Support escalations', value: 'Reduced' },
      { label: 'Global users served', value: '17,000+' },
    ],
    experiments: [
      { name: 'Personalization depth', hypothesis: 'Role-based content beats generic homepage for engagement', result: 'Role-personalized view: significantly higher session depth' },
      { name: 'Migration sequencing', hypothesis: 'Migrating highest-pain workflows first drives faster adoption', result: 'Pain-first migration led to early positive word-of-mouth' },
      { name: 'Onboarding flow', hypothesis: 'Guided onboarding reduces time-to-value for new users', result: 'Guided cohort reached full productivity 2x faster' },
    ],
    lessons: [
      'Platform consolidation is as much a change management challenge as a product challenge — communication cadence was critical',
      'AI personalization without good underlying data architecture is just noise; we invested heavily in data quality first',
      'Measuring engagement lift required establishing clean baselines before migration — instrumentation planning was a prerequisite',
    ],
  },
  {
    slug: 'processor-integration-platform',
    title: 'Direct Processor Integration — Chase & AMEX',
    subtitle: 'Closing critical platform gaps to unlock acquiring expansion and revenue-critical payment reliability for Intuit Payments',
    tags: ['Payments', 'FinTech', 'Platform'],
    duration: 'Ongoing',
    role: 'Lead PM',
    outcome: 'Unlocked acquiring expansion; improved payment reliability SLAs',
    coverColor: '#FFF7ED',
    accentColor: '#EA580C',
    problem:
      'Intuit\'s Payments platform had gaps in direct processor integrations that were blocking acquiring expansion with Chase and AMEX. These gaps created processing revenue risk, threatened payment reliability SLAs, and were the top blocker for FinTech engineering teams pursuing Payments 2.0 modernization.',
    research: {
      summary:
        'Partnered with engineering, risk, and external acquiring partners to audit integration gaps. Mapped all failure modes, SLA breach scenarios, and revenue impact of delayed resolution. Conducted technical discovery sessions with Chase and AMEX partner teams.',
      insights: [
        'Integration gaps were directly blocking revenue-critical migration timelines',
        'Risk and engineering had divergent mental models of the problem — alignment was step one',
        'External partners (Chase, AMEX) had their own requirements that needed to be internalized into our roadmap',
        'Payment reliability SLA breaches had downstream impacts on merchant trust and retention',
      ],
    },
    strategy:
      'Treat processor integration as a platform capability, not a one-off project. Build a structured integration framework that can be extended to future acquiring partners. Prioritize by revenue impact and SLA risk, and drive external partner alignment in parallel with internal engineering execution.',
    architecture:
      'Modular processor integration layer with standardized API contracts for acquiring partners. Abstraction layer isolates payment logic from processor-specific implementations. Compliance and PCI controls embedded at the integration boundary. Monitoring and alerting for real-time SLA tracking.',
    userFlow: [
      'Payment transaction initiated by merchant',
      'Platform routes through abstraction layer to appropriate processor',
      'Chase or AMEX direct integration handles authorization and settlement',
      'Real-time SLA monitoring flags any degradation',
      'Engineering team receives automated alerts before SLA breach threshold',
    ],
    metrics: [
      { label: 'Acquiring expansion', value: 'Unblocked' },
      { label: 'Revenue-critical migrations', value: 'Roadmap-ready' },
      { label: 'Payment reliability SLAs', value: 'Met & monitored' },
      { label: 'Top FinTech bottleneck', value: 'Eliminated' },
    ],
    experiments: [
      { name: 'Integration sequencing', hypothesis: 'Chase first (higher volume) unlocks more value than AMEX first', result: 'Chase-first validated — higher immediate revenue impact' },
      { name: 'Abstraction layer vs. direct integration', hypothesis: 'Abstraction layer adds latency but reduces long-term maintenance cost', result: 'Latency within SLA tolerance; maintenance cost justified the investment' },
      { name: 'Partner alignment cadence', hypothesis: 'Weekly syncs with Chase/AMEX reduce integration ambiguity faster than async', result: 'Weekly cadence resolved blockers 3x faster than prior async model' },
    ],
    lessons: [
      'External partner dependencies require a different kind of PM muscle — relationship management and external stakeholder alignment are as important as internal execution',
      'Payments infrastructure work has low glamour and high leverage — the compounding reliability benefits are easy to undervalue until something breaks',
      'Treating processor integration as a platform capability (not a project) changed how engineering estimated and prioritized the work',
    ],
  },
  {
    slug: 'memry-alzheimers-app',
    title: 'MEMRY — AI Caregiver Engagement App',
    subtitle: 'Building a zero-to-one AI-assisted mobile app for Alzheimer\'s caregivers — from discovery to launch to $13K in funding',
    tags: ['AI/ML', 'Consumer', '0→1'],
    duration: '2 years',
    role: 'Founder & Product Lead',
    outcome: '$13K seed funding · 1st place, Dartmouth Pitch Competition',
    coverColor: '#FDF4FF',
    accentColor: '#9333EA',
    problem:
      'Alzheimer\'s caregivers — often family members with no clinical training — face profound isolation, inconsistent guidance, and a lack of tools designed specifically for their day-to-day emotional and logistical challenges. Existing apps were either too clinical or too generic to be genuinely useful.',
    research: {
      summary:
        'Conducted primary research with caregivers and clinical experts. Ran discovery interviews with 20+ caregivers across different stages of the caregiving journey. Partnered with Alzheimer\'s care specialists to validate the product hypothesis and ensure clinical integrity.',
      insights: [
        'Caregivers felt invisible — tools were built for patients, not the people caring for them',
        'Emotional regulation and daily structure were the two highest-need areas',
        'Caregivers distrusted generic advice — they needed guidance specific to disease stage and relationship type',
        'Low-tech caregivers were the majority; any AI layer needed to feel effortless, not clinical',
      ],
    },
    strategy:
      'Build for the caregiver, not the patient. Focus on daily emotional support and practical engagement activities personalized to the patient\'s cognitive stage. Use AI to generate activity recommendations that feel human and specific — not algorithmic. Start narrow, prove value, then expand.',
    architecture:
      'Mobile-first app with AI-powered activity recommendation engine. Personalization based on patient cognitive stage, caregiver relationship type, and engagement history. Simple, accessible UI designed for low-tech users. Backend built for rapid iteration during early discovery phase.',
    userFlow: [
      'Caregiver creates profile for themselves and their loved one',
      'Inputs patient cognitive stage and daily routine context',
      'AI generates personalized activity recommendations for the day',
      'Caregiver selects, adapts, and logs engagement activities',
      'App surfaces emotional check-ins and caregiver support resources',
    ],
    metrics: [
      { label: 'Seed & grant funding secured', value: '$13,000' },
      { label: 'Pitch competition result', value: '1st of 120 teams' },
      { label: 'User research sessions', value: '20+ caregivers' },
      { label: 'Clinical advisors engaged', value: 'Multiple experts' },
    ],
    experiments: [
      { name: 'Activity recommendation format', hypothesis: 'Specific, stage-appropriate activities beat generic suggestions', result: 'Specific recommendations: significantly higher caregiver intent to use' },
      { name: 'Emotional check-in timing', hypothesis: 'Morning check-ins drive more engagement than evening', result: 'Morning: higher completion; evening: higher reflection quality' },
      { name: 'Onboarding depth', hypothesis: 'Detailed onboarding produces better recommendations', result: 'More context = better AI output, but drop-off increased; found optimal balance at 5 questions' },
    ],
    lessons: [
      'Zero-to-one in a sensitive health domain requires earning trust before earning engagement — clinical credibility was a prerequisite for user adoption',
      'The AI layer was only as good as the context it had; onboarding design was the most critical product decision',
      'Winning the pitch competition validated the market problem, not just the solution — the judges responded to the depth of the user research',
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
    slug: 'payments-meets-genai',
    title: 'When Payments Meets GenAI: What PMs Need to Know',
    excerpt:
      'Payment platforms are not typical SaaS products — they carry compliance, reliability, and trust requirements that change how you build AI on top of them. A framework for navigating the intersection.',
    date: 'June 2024',
    readTime: '7 min read',
    tags: ['Payments', 'GenAI'],
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
    slug: 'enterprise-ai-adoption',
    title: 'Why Enterprise AI Features Fail at Adoption (And How to Fix It)',
    excerpt:
      'Shipping an AI feature is the easy part. Getting 17,000 enterprise users to actually change their behavior is the real product problem. Lessons from consolidating a fragmented platform.',
    date: 'February 2024',
    readTime: '6 min read',
    tags: ['Enterprise', 'AI'],
  },
  {
    slug: 'zero-to-one-health-ai',
    title: 'Zero to One in Health AI: What\'s Different',
    excerpt:
      'Building an AI product in a health-adjacent space taught me that trust, clinical credibility, and user vulnerability change every product decision. What I learned building MEMRY.',
    date: 'January 2024',
    readTime: '5 min read',
    tags: ['Health', '0→1'],
  },
]
