import { personal, skills, experience, education, stats } from '../data/portfolio'
import { AnimatedSection } from '../components/AnimatedSection'
import { MapPin, Briefcase, GraduationCap, CheckCircle } from 'lucide-react'

const philosophy = [
  {
    title: 'Start with the bottleneck, not the technology',
    body: 'Before proposing AI, I map the workflow end-to-end and ask where time is actually being lost. The best AI products I\'ve built solved a decision-making bottleneck — not a documentation problem.',
  },
  {
    title: 'Trust is the product',
    body: 'In enterprise AI, accuracy is table stakes. The real product is the trust architecture: explainability, evidence-grounded outputs, and human-in-the-loop controls. Without trust, adoption dies regardless of model quality.',
  },
  {
    title: 'Personalization only works on top of good data',
    body: 'Driving a 31% engagement lift taught me that AI personalization without clean underlying data architecture is just noise. I invest in data quality and instrumentation before building the intelligence layer.',
  },
  {
    title: 'The best insight comes from watching, not asking',
    body: 'Stakeholders tell you what they want; behavior reveals what they need. I shadow workflows, run diary studies, and do contextual inquiry before writing a single requirement.',
  },
]

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <AnimatedSection>
          <p className="section-label mb-4">About</p>
          <h1
            className="font-display font-bold text-5xl md:text-6xl leading-tight mb-8 max-w-3xl"
            style={{ color: 'var(--color-ink)' }}
          >
            Product Manager.<br />
            <span style={{ color: 'var(--color-muted)' }}>Builder. Researcher.</span>
          </h1>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16 mt-16">
          {/* Bio */}
          <AnimatedSection>
            <div className="space-y-5 text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              <p>
                I'm a Senior Product Manager at Intuit with 4+ years of experience shipping AI-powered products across payments platforms, enterprise SaaS, and GenAI developer tooling. I specialize in the full product lifecycle — from early discovery and user research to go-to-market strategy and scaled iteration.
              </p>
              <p>
                At Intuit's Payments Platform, I own a portfolio of 3 strategic AI initiatives — including an LLM-assisted intake agent, developer documentation modernization, and direct processor integrations with Chase and AMEX — projected to unlock $9M+ in annual business impact.
              </p>
              <p>
                I also led the consolidation of 4+ legacy enterprise systems into a unified AI-personalized platform serving 17,000 global users, driving a 31% engagement lift and a 15% improvement in user satisfaction. I own the scalability roadmap for Intuit Academy, which powers 140,000+ expert learners across TurboTax Live and QuickBooks Live.
              </p>
              <p>
                Before Intuit, I founded MEMRY — an AI-assisted caregiver engagement app for Alzheimer's patients — winning Dartmouth's 2022 "The Pitch" competition (1st of 120 teams) and securing $13K in seed and grant funding. I hold a Master of Engineering Management from Dartmouth's Thayer School of Engineering and Tuck School of Business, and a B.Tech from the Institute of Chemical Technology, Mumbai (GPA 9.71/10, Rank #3 in the university).
              </p>
              <p>
                I care deeply about AI products that earn user trust through transparency, and about teams where rigorous user research drives every major product decision.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--color-muted)' }}>
                <MapPin size={15} style={{ color: 'var(--color-accent)' }} />
                {personal.location} · Permanent Resident — no sponsorship required
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--color-muted)' }}>
                <Briefcase size={15} style={{ color: 'var(--color-accent)' }} />
                Targeting Staff / Senior AI PM roles in fintech, payments, and enterprise AI
              </div>
            </div>
          </AnimatedSection>

          {/* Stats + tags */}
          <AnimatedSection delay={100}>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl p-6"
                  style={{ border: '1px solid var(--color-border)' }}
                >
                  <p
                    className="font-display font-bold text-3xl"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm mt-1" style={{ color: 'var(--color-muted)' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="rounded-2xl p-6"
              style={{ border: '1px solid var(--color-border)' }}
            >
              <p className="text-sm font-medium mb-4" style={{ color: 'var(--color-ink)' }}>
                Domains & Contexts
              </p>
              <div className="flex flex-wrap gap-2">
                {['Payments & FinTech', 'Enterprise SaaS', 'GenAI Tooling', 'AI Personalization', 'Developer Platforms', 'Consumer AI', '0→1 Products'].map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Philosophy */}
      <section
        className="py-24"
        style={{ backgroundColor: 'var(--color-accent-bg)' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="section-label mb-3">How I Think</p>
            <h2
              className="font-display font-bold text-4xl mb-12"
              style={{ color: 'var(--color-ink)' }}
            >
              Product Philosophy
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-5">
            {philosophy.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 80}>
                <div
                  className="rounded-2xl p-8"
                  style={{ backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
                >
                  <CheckCircle size={20} className="mb-4" style={{ color: 'var(--color-accent)' }} />
                  <h3
                    className="font-display font-semibold text-xl mb-3"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                    {item.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <AnimatedSection>
          <p className="section-label mb-3">Expertise</p>
          <h2
            className="font-display font-bold text-4xl mb-12"
            style={{ color: 'var(--color-ink)' }}
          >
            Skills & Capabilities
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skillGroup, i) => (
            <AnimatedSection key={skillGroup.category} delay={i * 80}>
              <div
                className="rounded-2xl p-6 h-full"
                style={{ border: '1px solid var(--color-border)' }}
              >
                <p
                  className="font-medium text-sm mb-5"
                  style={{ color: 'var(--color-ink)' }}
                >
                  {skillGroup.category}
                </p>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm flex items-start gap-2"
                      style={{ color: 'var(--color-muted)' }}
                    >
                      <span
                        className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: 'var(--color-accent)' }}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section
        className="py-24"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="section-label mb-3">Background</p>
            <h2
              className="font-display font-bold text-4xl mb-12"
              style={{ color: 'var(--color-ink)' }}
            >
              Experience
            </h2>
          </AnimatedSection>
          <div className="space-y-8 max-w-3xl">
            {experience.map((role, i) => (
              <AnimatedSection key={`${role.company}-${i}`} delay={i * 80}>
                <div
                  className="flex gap-6 p-6 rounded-2xl"
                  style={{ border: '1px solid var(--color-border)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-accent-bg)' }}
                  >
                    <Briefcase size={18} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="font-semibold" style={{ color: 'var(--color-ink)' }}>
                        {role.role}
                      </h3>
                      <span className="text-xs font-mono" style={{ color: 'var(--color-muted)' }}>
                        {role.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium mb-2" style={{ color: 'var(--color-accent)' }}>
                      {role.company}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                      {role.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {education.map((edu, i) => (
              <AnimatedSection key={edu.school}>
                <div
                  className="flex gap-6 p-6 rounded-2xl"
                  style={{ border: '1px solid var(--color-border)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-accent-bg)' }}
                  >
                    <GraduationCap size={18} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="font-semibold" style={{ color: 'var(--color-ink)' }}>
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-mono" style={{ color: 'var(--color-muted)' }}>
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: 'var(--color-accent)' }}>
                      {edu.school}
                    </p>
                    {edu.note && (
                      <p className="text-xs mt-1" style={{ color: 'var(--color-muted)' }}>
                        {edu.note}
                      </p>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
