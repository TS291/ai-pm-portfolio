import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { personal } from '../data/portfolio'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/thinking', label: 'Thinking' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md border-b'
          : ''
      }`}
      style={{
        backgroundColor: scrolled ? 'color-mix(in srgb, var(--color-bg) 90%, transparent)' : 'transparent',
        borderColor: scrolled ? 'var(--color-border)' : 'transparent',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-display font-semibold text-lg tracking-tight"
          style={{ color: 'var(--color-ink)' }}
        >
          {personal.name}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full transition-colors duration-200"
            style={{ color: 'var(--color-muted)' }}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full"
            style={{ color: 'var(--color-muted)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{
            backgroundColor: 'var(--color-bg)',
            borderColor: 'var(--color-border)',
          }}
        >
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `nav-link text-base py-1 ${isActive ? 'active' : ''}`
              }
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
