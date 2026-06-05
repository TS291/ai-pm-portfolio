import { personal } from '../data/portfolio'
import { AnimatedSection } from '../components/AnimatedSection'
import { Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <AnimatedSection>
          <p className="section-label mb-4">Contact</p>
          <h1
            className="font-display font-bold text-5xl md:text-6xl mb-6"
            style={{ color: 'var(--color-ink)' }}
          >
            Let's Talk
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'var(--color-muted)' }}>
            I'm selective about what I work on next. If you're building something ambitious in AI, fintech, or enterprise software and think there's a fit, reach out directly.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-2xl">
          {/* Email */}
          <AnimatedSection>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-5 p-8 rounded-2xl group transition-all duration-200"
              style={{ border: '1px solid var(--color-border)' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'var(--color-accent-bg)' }}
              >
                <Mail size={22} style={{ color: 'var(--color-accent)' }} />
              </div>
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-ink)' }}>
                  Email
                </p>
                <p
                  className="text-sm group-hover:underline"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {personal.email}
                </p>
              </div>
            </a>
          </AnimatedSection>

          {/* LinkedIn */}
          <AnimatedSection delay={80}>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-8 rounded-2xl group transition-all duration-200"
              style={{ border: '1px solid var(--color-border)' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'var(--color-accent-bg)' }}
              >
                <Linkedin size={22} style={{ color: 'var(--color-accent)' }} />
              </div>
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-ink)' }}>
                  LinkedIn
                </p>
                <p
                  className="text-sm group-hover:underline"
                  style={{ color: 'var(--color-muted)' }}
                >
                  linkedin.com/in/tishyasriv
                </p>
              </div>
            </a>
          </AnimatedSection>
        </div>

        {/* What I'm looking for */}
        <AnimatedSection delay={120}>
          <div
            className="mt-12 p-8 rounded-2xl max-w-2xl"
            style={{ backgroundColor: 'var(--color-accent-bg)' }}
          >
            <p className="text-sm font-semibold mb-4" style={{ color: 'var(--color-ink)' }}>
              What I'm looking for
            </p>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-muted)' }}>
              {[
                'Staff / Senior AI PM roles in fintech, payments, and enterprise AI',
                'AI-first companies solving real problems at scale',
                'Strong technical teams with a bias for execution',
                'Missions I believe in — from zero-to-one bets to scaled platforms',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
