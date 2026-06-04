import { useParams, Link, Navigate } from 'react-router-dom'
import { caseStudies } from '../data/portfolio'
import { AnimatedSection } from '../components/AnimatedSection'
import { ArrowLeft, Clock, User, TrendingUp, FlaskConical, BookOpen, Target, Users, Brain, GitBranch, BarChart3 } from 'lucide-react'

function Section({ icon: Icon, label, children }) {
  return (
    <AnimatedSection>
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-accent-bg)' }}
          >
            <Icon size={16} style={{ color: 'var(--color-accent)' }} />
          </div>
          <p className="section-label">{label}</p>
        </div>
        {children}
      </div>
    </AnimatedSection>
  )
}

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const cs = caseStudies.find((c) => c.slug === slug)

  if (!cs) return <Navigate to="/case-studies" replace />

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <AnimatedSection>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm mb-8"
            style={{ color: 'var(--color-muted)' }}
          >
            <ArrowLeft size={15} />
            All Case Studies
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            {cs.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-3 py-1 rounded-full font-medium"
                style={{ backgroundColor: cs.coverColor, color: cs.accentColor }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1
            className="font-display font-bold text-4xl md:text-6xl leading-tight mb-6 max-w-4xl"
            style={{ color: 'var(--color-ink)' }}
          >
            {cs.title}
          </h1>
          <p className="text-xl max-w-2xl" style={{ color: 'var(--color-muted)' }}>
            {cs.subtitle}
          </p>

          {/* Meta row */}
          <div
            className="flex flex-wrap gap-6 mt-10 pt-10 border-t"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <div>
              <p className="text-xs mb-1" style={{ color: 'var(--color-muted)' }}>Role</p>
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-ink)' }}>
                <User size={14} style={{ color: 'var(--color-accent)' }} />
                {cs.role}
              </div>
            </div>
            <div>
              <p className="text-xs mb-1" style={{ color: 'var(--color-muted)' }}>Duration</p>
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-ink)' }}>
                <Clock size={14} style={{ color: 'var(--color-accent)' }} />
                {cs.duration}
              </div>
            </div>
            <div>
              <p className="text-xs mb-1" style={{ color: 'var(--color-muted)' }}>Key Outcome</p>
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-ink)' }}>
                <TrendingUp size={14} style={{ color: 'var(--color-accent)' }} />
                {cs.outcome}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Cover color strip */}
      <div className="h-2 w-full" style={{ backgroundColor: cs.accentColor, opacity: 0.15 }} />

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Problem */}
        <Section icon={Target} label="Problem">
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'var(--color-muted)' }}
          >
            {cs.problem}
          </p>
        </Section>

        {/* User Research */}
        <Section icon={Users} label="User Research">
          <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-muted)' }}>
            {cs.research.summary}
          </p>
          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: 'var(--color-accent-bg)', border: '1px solid var(--color-border)' }}
          >
            <p className="text-sm font-semibold mb-4" style={{ color: 'var(--color-ink)' }}>
              Key Insights
            </p>
            <ul className="space-y-3">
              {cs.research.insights.map((insight, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--color-muted)' }}>
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: cs.accentColor, color: 'white' }}
                  >
                    {i + 1}
                  </span>
                  {insight}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Strategy */}
        <Section icon={Brain} label="Product Strategy">
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
            {cs.strategy}
          </p>
        </Section>

        {/* AI Architecture */}
        <Section icon={GitBranch} label="AI Architecture">
          <p
            className="text-base leading-relaxed p-6 rounded-2xl font-mono text-sm"
            style={{
              color: 'var(--color-muted)',
              backgroundColor: 'var(--color-accent-bg)',
              border: '1px solid var(--color-border)',
            }}
          >
            {cs.architecture}
          </p>
        </Section>

        {/* User Flow */}
        <Section icon={GitBranch} label="User Flow">
          <ol className="space-y-4">
            {cs.userFlow.map((step, i) => (
              <li
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{ border: '1px solid var(--color-border)' }}
              >
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: cs.coverColor, color: cs.accentColor }}
                >
                  {i + 1}
                </span>
                <p className="text-sm pt-1" style={{ color: 'var(--color-muted)' }}>
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Wireframes placeholder */}
        <Section icon={BookOpen} label="Wireframes">
          <div
            className="rounded-2xl p-12 text-center"
            style={{ border: '2px dashed var(--color-border)' }}
          >
            <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
              [Wireframe images — drop your Figma exports or screenshots here]
            </p>
            <p className="text-xs mt-2" style={{ color: 'var(--color-muted)', opacity: 0.6 }}>
              Add image files to /public/case-studies/{cs.slug}/ and reference them in portfolio.js
            </p>
          </div>
        </Section>

        {/* Metrics */}
        <Section icon={BarChart3} label="Impact & Metrics">
          <div className="grid grid-cols-2 gap-4">
            {cs.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl p-6"
                style={{ border: '1px solid var(--color-border)' }}
              >
                <p
                  className="font-display font-bold text-2xl mb-1"
                  style={{ color: cs.accentColor }}
                >
                  {metric.value}
                </p>
                <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Experiment Design */}
        <Section icon={FlaskConical} label="Experiment Design">
          <div className="space-y-4">
            {cs.experiments.map((exp, i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{ border: '1px solid var(--color-border)' }}
              >
                <p className="font-semibold text-sm mb-2" style={{ color: 'var(--color-ink)' }}>
                  {exp.name}
                </p>
                <p className="text-sm mb-3" style={{ color: 'var(--color-muted)' }}>
                  <span className="font-medium">Hypothesis:</span> {exp.hypothesis}
                </p>
                <div
                  className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg"
                  style={{ backgroundColor: 'var(--color-accent-bg)' }}
                >
                  <TrendingUp size={13} style={{ color: 'var(--color-accent)' }} />
                  <span style={{ color: 'var(--color-accent)' }}>{exp.result}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Lessons Learned */}
        <Section icon={BookOpen} label="Lessons Learned">
          <div className="space-y-4">
            {cs.lessons.map((lesson, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ border: '1px solid var(--color-border)' }}
              >
                <span
                  className="text-lg font-display font-bold flex-shrink-0"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {i + 1}.
                </span>
                <p className="text-sm leading-relaxed pt-1" style={{ color: 'var(--color-muted)' }}>
                  {lesson}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Nav to next */}
        <div
          className="pt-12 border-t flex justify-between items-center"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm"
            style={{ color: 'var(--color-muted)' }}
          >
            <ArrowLeft size={15} />
            All Case Studies
          </Link>
          {caseStudies[caseStudies.findIndex((c) => c.slug === slug) + 1] && (
            <Link
              to={`/case-studies/${caseStudies[caseStudies.findIndex((c) => c.slug === slug) + 1].slug}`}
              className="inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: 'var(--color-accent)' }}
            >
              Next case study →
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
