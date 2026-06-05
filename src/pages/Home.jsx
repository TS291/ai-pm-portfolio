import { Link } from 'react-router-dom'
import { ArrowRight, Download, Mail, Sparkles, ChevronRight } from 'lucide-react'
import { personal, stats, caseStudies } from '../data/portfolio'
import { AnimatedSection } from '../components/AnimatedSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,99,235,0.06) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'var(--color-border)' }}
        />

        <div className="max-w-6xl mx-auto px-6 py-24 w-full">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-10"
            style={{
              border: '1px solid var(--color-border)',
              color: 'var(--color-muted)',
            }}
          >
            <Sparkles size={14} style={{ color: 'var(--color-accent)' }} />
            {personal.title}
          </div>

          {/* Headline */}
          <h1
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-8 max-w-4xl"
            style={{ color: 'var(--color-ink)' }}
          >
            Building AI Products
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              That Solve Real Problems
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
            style={{ color: 'var(--color-muted)' }}
          >
            {personal.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/case-studies" className="btn-primary">
              View Case Studies
              <ArrowRight size={16} />
            </Link>
            <a href={personal.resumeUrl} download className="btn-secondary">
              <Download size={16} />
              Download Resume
            </a>
            <Link to="/contact" className="btn-secondary">
              <Mail size={16} />
              Contact
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-20 pt-12 border-t" style={{ borderColor: 'var(--color-border)' }}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <p
                  className="font-display font-bold text-3xl md:text-4xl"
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
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-3">Selected Work</p>
              <h2
                className="font-display font-bold text-4xl md:text-5xl"
                style={{ color: 'var(--color-ink)' }}
              >
                Case Studies
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: 'var(--color-accent)' }}
            >
              View all
              <ChevronRight size={16} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => (
            <AnimatedSection key={cs.slug} delay={i * 80}>
              <Link to={`/case-studies/${cs.slug}`} className="block card p-8 h-full group">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
                  style={{
                    backgroundColor: cs.coverColor,
                    color: cs.accentColor,
                  }}
                >
                  {cs.tags[0]}
                </div>
                <h3
                  className="font-display font-semibold text-2xl mb-3 leading-tight"
                  style={{ color: 'var(--color-ink)' }}
                >
                  {cs.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-muted)' }}>
                  {cs.subtitle}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          backgroundColor: 'var(--color-accent-bg)',
                          color: 'var(--color-accent)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span
                    className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0 ml-4"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    Read →
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link to="/case-studies" className="btn-secondary">
            View all case studies
          </Link>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <AnimatedSection>
          <div
            className="rounded-3xl p-12 md:p-16 text-center"
            style={{
              background: 'linear-gradient(135deg, var(--color-ink) 0%, #1e3a8a 100%)',
            }}
          >
            <p className="section-label mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Let's Connect
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Open to the right opportunity
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
              I'm selective about what I build next. If you're working on something ambitious in AI, fintech, or enterprise software, let's talk.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium bg-white text-sm"
                style={{ color: 'var(--color-ink)' }}
              >
                Get in touch
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-sm border border-white/30 text-white"
              >
                Learn more about me
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
