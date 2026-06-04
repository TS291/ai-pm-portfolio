import { Link } from 'react-router-dom'
import { Linkedin, Mail, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="border-t mt-32"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-display font-semibold text-lg" style={{ color: 'var(--color-ink)' }}>
              Alex Morgan
            </p>
            <p className="text-sm mt-1" style={{ color: 'var(--color-muted)' }}>
              Senior Product Manager · AI Products
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm" style={{ color: 'var(--color-muted)' }}>
            <Link to="/about" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.7 }}>About</Link>
            <Link to="/case-studies" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.7 }}>Case Studies</Link>
            <Link to="/thinking" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.7 }}>Thinking</Link>
            <Link to="/resume" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.7 }}>Resume</Link>
            <Link to="/contact" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.7 }}>Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/alexmorgan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-colors duration-200"
              style={{ color: 'var(--color-muted)' }}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:alex@example.com"
              className="p-2 rounded-full transition-colors duration-200"
              style={{ color: 'var(--color-muted)' }}
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com/alexmorgan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-colors duration-200"
              style={{ color: 'var(--color-muted)' }}
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        <div className="divider my-8" />

        <p className="text-xs text-center" style={{ color: 'var(--color-muted)' }}>
          © {new Date().getFullYear()} Alex Morgan. Built with precision and care.
        </p>
      </div>
    </footer>
  )
}
