import { CalendarCheck, Menu, MessageSquare, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { siteConfig } from '../config/site'
import { ButtonLink } from './ButtonLink'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link to="/" className="brand" aria-label="Aaron Transportation home">
          <span className="brand-mark">AT</span>
          <span>
            <strong>Aaron Transportation</strong>
            <small>Dallas-Fort Worth</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <a className="desktop-phone" href={siteConfig.contact.phoneHref}>
            <Phone aria-hidden="true" size={17} /> {siteConfig.contact.phone}
          </a>
          <ButtonLink to="/quote" icon={CalendarCheck} className="desktop-quote">
            Request a Quote
          </ButtonLink>
          <button
            className="mobile-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="mobile-navigation" className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}>
        <nav className="container" aria-label="Mobile navigation">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="mobile-nav__actions">
            <ButtonLink href={siteConfig.contact.phoneHref} icon={Phone}>
              Call Now
            </ButtonLink>
            <ButtonLink href={siteConfig.contact.textHref} variant="secondary" icon={MessageSquare}>
              Text Us
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  )
}
