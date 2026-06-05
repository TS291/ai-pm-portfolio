import { personal, experience, education, skills, stats } from '../data/portfolio'
import { AnimatedSection } from '../components/AnimatedSection'
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react'

export default function Resume() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="section-label mb-4">Resume</p>
              <h1
                className="font-display font-bold text-5xl md:text-6xl"
                style={{ color: 'var(--color-ink)' }}
              >
                {personal.name}
              </h1>
              <p className="text-xl mt-3" style={{ color: 'var(--color-muted)' }}>
                {personal.title}
              </p>
            </div>
            <a
              href={personal.resumeUrl}
              download
              className="btn-primary self-start md:self-auto"
            >
              <Download size={16} />
              Download PDF
            </a>
          </div>
        </AnimatedSection>

        {/* Summary */}
        <AnimatedSection>
          <div className="mb-12">
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              Senior Product Manager with 4+ years of experience shipping AI-powered products across payments platforms, enterprise SaaS, and GenAI developer tooling. Track record of zero-to-one product development, scaled execution, and measurable business impact — including $9M+ projected annual impact and a 31% engagement lift through AI personalization. Deep expertise in LLM product design, agentic AI systems, payment processor integrations, and cross-functional leadership.
            </p>
          </div>
        </AnimatedSection>

        {/* Stats row */}
        <AnimatedSection>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 p-6 rounded-2xl"
            style={{ border: '1px solid var(--color-border)' }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="font-display font-bold text-2xl"
                  style={{ color: 'var(--color-ink)' }}
                >
                  {stat.value}
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--color-muted)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Experience */}
        <AnimatedSection>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase size={16} style={{ color: 'var(--color-accent)' }} />
              <h2 className="font-display font-semibold text-xl" style={{ color: 'var(--color-ink)' }}>
                Experience
              </h2>
            </div>
            <div className="space-y-6">
              {experience.map((role) => (
                <div
                  key={role.company}
                  className="p-6 rounded-2xl"
                  style={{ border: '1px solid var(--color-border)' }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold" style={{ color: 'var(--color-ink)' }}>
                        {role.role}
                      </h3>
                      <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--color-accent)' }}>
                        {role.company}
                      </p>
                    </div>
                    <span
                      className="text-xs font-mono flex-shrink-0"
                      style={{ color: 'var(--color-muted)' }}
                    >
                      {role.period}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={16} style={{ color: 'var(--color-accent)' }} />
              <h2 className="font-display font-semibold text-xl" style={{ color: 'var(--color-ink)' }}>
                Education
              </h2>
            </div>
            {education.map((edu) => (
              <div
                key={edu.school}
                className="p-6 rounded-2xl"
                style={{ border: '1px solid var(--color-border)' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold" style={{ color: 'var(--color-ink)' }}>
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--color-accent)' }}>
                      {edu.school}
                    </p>
                  </div>
                  <span className="text-xs font-mono" style={{ color: 'var(--color-muted)' }}>
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Award size={16} style={{ color: 'var(--color-accent)' }} />
              <h2 className="font-display font-semibold text-xl" style={{ color: 'var(--color-ink)' }}>
                Skills
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {skills.map((group) => (
                <div
                  key={group.category}
                  className="p-6 rounded-2xl"
                  style={{ border: '1px solid var(--color-border)' }}
                >
                  <p
                    className="text-sm font-semibold mb-4"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span key={skill} className="tag text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* PDF note */}
        <AnimatedSection>
          <div
            className="rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ backgroundColor: 'var(--color-accent-bg)', border: '1px solid var(--color-border)' }}
          >
            <div>
              <p className="text-sm font-medium" style={{ color: 'var(--color-ink)' }}>
                Want the full PDF?
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--color-muted)' }}>
                Place your resume PDF at <code>/public/resume.pdf</code> to enable download.
              </p>
            </div>
            <a href={personal.resumeUrl} download className="btn-primary text-sm">
              <Download size={14} />
              Download Resume
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
