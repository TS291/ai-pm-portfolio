import { useState } from 'react'
import { personal } from '../data/portfolio'
import { AnimatedSection } from '../components/AnimatedSection'
import { Linkedin, Mail, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Replace this with your form submission logic (e.g. Formspree, Netlify Forms, etc.)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

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
            I'm selective about what I work on next. If you're building something ambitious in AI and think there's a fit, I'd love to hear about it.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16 mt-16">
          {/* Left: direct links */}
          <AnimatedSection>
            <div className="space-y-5">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-5 p-6 rounded-2xl group transition-all duration-200"
                style={{ border: '1px solid var(--color-border)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-accent-bg)' }}
                >
                  <Mail size={20} style={{ color: 'var(--color-accent)' }} />
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: 'var(--color-ink)' }}>
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

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-6 rounded-2xl group transition-all duration-200"
                style={{ border: '1px solid var(--color-border)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-accent-bg)' }}
                >
                  <Linkedin size={20} style={{ color: 'var(--color-accent)' }} />
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: 'var(--color-ink)' }}>
                    LinkedIn
                  </p>
                  <p
                    className="text-sm group-hover:underline"
                    style={{ color: 'var(--color-muted)' }}
                  >
                    linkedin.com/in/alexmorgan
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-12 p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-accent-bg)' }}>
              <p className="text-sm font-semibold mb-3" style={{ color: 'var(--color-ink)' }}>
                What I'm looking for
              </p>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-muted)' }}>
                {[
                  'Senior PM or Staff PM roles at AI-first companies',
                  'Missions I believe in — solving real problems at scale',
                  'Strong technical founding teams',
                  'Series A–C or established companies building AI products',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
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

          {/* Right: contact form */}
          <AnimatedSection delay={100}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <CheckCircle size={48} className="mb-6" style={{ color: 'var(--color-accent)' }} />
                <h3
                  className="font-display font-semibold text-2xl mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Message sent!
                </h3>
                <p style={{ color: 'var(--color-muted)' }}>
                  Thanks for reaching out. I'll get back to you within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl text-sm transition-colors duration-200 outline-none"
                      style={{
                        border: '1.5px solid var(--color-border)',
                        backgroundColor: 'var(--color-bg)',
                        color: 'var(--color-ink)',
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl text-sm transition-colors duration-200 outline-none"
                      style={{
                        border: '1.5px solid var(--color-border)',
                        backgroundColor: 'var(--color-bg)',
                        color: 'var(--color-ink)',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Anthropic, OpenAI, Stripe…"
                    className="w-full px-4 py-3 rounded-xl text-sm transition-colors duration-200 outline-none"
                    style={{
                      border: '1.5px solid var(--color-border)',
                      backgroundColor: 'var(--color-bg)',
                      color: 'var(--color-ink)',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about the role, the problem you're solving, and why you think there's a fit…"
                    className="w-full px-4 py-3 rounded-xl text-sm transition-colors duration-200 outline-none resize-none"
                    style={{
                      border: '1.5px solid var(--color-border)',
                      backgroundColor: 'var(--color-bg)',
                      color: 'var(--color-ink)',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center"
                >
                  {loading ? (
                    'Sending…'
                  ) : (
                    <>
                      Send Message
                      <Send size={15} />
                    </>
                  )}
                </button>

                <p className="text-xs text-center" style={{ color: 'var(--color-muted)' }}>
                  To wire up real email, connect this form to{' '}
                  <a
                    href="https://formspree.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    Formspree
                  </a>{' '}
                  or any serverless form handler.
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
