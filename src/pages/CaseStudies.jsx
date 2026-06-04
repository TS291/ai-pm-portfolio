import { Link } from 'react-router-dom'
import { caseStudies } from '../data/portfolio'
import { AnimatedSection } from '../components/AnimatedSection'
import { Clock, ArrowRight } from 'lucide-react'

export default function CaseStudies() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <AnimatedSection>
          <p className="section-label mb-4">Portfolio</p>
          <h1
            className="font-display font-bold text-5xl md:text-6xl mb-6"
            style={{ color: 'var(--color-ink)' }}
          >
            Case Studies
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--color-muted)' }}>
            Deep dives into AI products I've led from discovery to delivery —
            including research, strategy, architecture, and measurable outcomes.
          </p>
        </AnimatedSection>

        <div className="mt-16 space-y-6">
          {caseStudies.map((cs, i) => (
            <AnimatedSection key={cs.slug} delay={i * 80}>
              <Link
                to={`/case-studies/${cs.slug}`}
                className="block card p-8 md:p-10 group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Color block */}
                  <div
                    className="w-full md:w-24 h-24 rounded-2xl flex-shrink-0"
                    style={{ backgroundColor: cs.coverColor }}
                  />

                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded font-medium"
                          style={{
                            backgroundColor: cs.coverColor,
                            color: cs.accentColor,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2
                      className="font-display font-semibold text-2xl md:text-3xl mb-2"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      {cs.title}
                    </h2>
                    <p className="text-base mb-6" style={{ color: 'var(--color-muted)' }}>
                      {cs.subtitle}
                    </p>

                    <div className="flex flex-wrap items-center gap-6">
                      <div className="text-sm" style={{ color: 'var(--color-muted)' }}>
                        <span className="font-medium" style={{ color: 'var(--color-ink)' }}>
                          Outcome:
                        </span>{' '}
                        {cs.outcome}
                      </div>
                      <div
                        className="flex items-center gap-1 text-sm"
                        style={{ color: 'var(--color-muted)' }}
                      >
                        <Clock size={13} />
                        {cs.duration}
                      </div>
                    </div>
                  </div>

                  <div
                    className="hidden md:flex items-center gap-2 text-sm font-medium group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    Read case study
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
