import { articles } from '../data/portfolio'
import { AnimatedSection } from '../components/AnimatedSection'
import { Clock, ArrowUpRight } from 'lucide-react'

export default function Thinking() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <AnimatedSection>
          <p className="section-label mb-4">Writing</p>
          <h1
            className="font-display font-bold text-5xl md:text-6xl mb-6"
            style={{ color: 'var(--color-ink)' }}
          >
            AI Product Thinking
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--color-muted)' }}>
            Essays and frameworks on building AI products, product strategy, experimentation, and the evolving role of product management.
          </p>
        </AnimatedSection>

        {/* Featured article */}
        <AnimatedSection delay={100}>
          <div className="mt-16 mb-10">
            <div
              className="card p-10 md:p-14 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, var(--color-ink) 0%, #1e3a8a 100%)',
                border: 'none',
              }}
            >
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-6"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)' }}
              >
                Featured
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 max-w-2xl">
                {articles[0].title}
              </h2>
              <p className="text-base mb-8 max-w-xl" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {articles[0].excerpt}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {articles[0].date}
                </span>
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {articles[0].readTime}
                </span>
              </div>
              {/* Placeholder: link to full article */}
              <div className="absolute top-10 right-10 opacity-20">
                <ArrowUpRight size={40} className="text-white" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Article grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.slice(1).map((article, i) => (
            <AnimatedSection key={article.slug} delay={i * 80}>
              <div className="card p-6 h-full flex flex-col">
                <div className="flex gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <h3
                  className="font-display font-semibold text-lg mb-3 leading-snug flex-1"
                  style={{ color: 'var(--color-ink)' }}
                >
                  {article.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {article.excerpt}
                </p>
                <div
                  className="flex items-center gap-3 text-xs pt-4 border-t"
                  style={{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-muted)',
                  }}
                >
                  <span>{article.date}</span>
                  <span>·</span>
                  <Clock size={11} />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Coming soon */}
        <AnimatedSection delay={200}>
          <div
            className="mt-10 rounded-2xl p-8 text-center"
            style={{ border: '2px dashed var(--color-border)' }}
          >
            <p className="text-sm font-medium mb-1" style={{ color: 'var(--color-ink)' }}>
              More coming soon
            </p>
            <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
              Add new articles to the <code className="text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: 'var(--color-accent-bg)', color: 'var(--color-accent)' }}>articles</code> array in{' '}
              <code className="text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: 'var(--color-accent-bg)', color: 'var(--color-accent)' }}>src/data/portfolio.js</code>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
