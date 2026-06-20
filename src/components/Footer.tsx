import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand brand--footer" aria-label="Aaron Transportation home">
            <span className="brand-mark">AT</span>
            <span>
              <strong>Aaron Transportation</strong>
              <small>Luxury private transportation</small>
            </span>
          </Link>
          <p>{siteConfig.business.description}</p>
          <div className="footer-social">
            {siteConfig.socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer quick links" className="footer-links">
          <h2>Quick Links</h2>
          {siteConfig.nav.map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
          <Link to="/faq">FAQ</Link>
        </nav>

        <div className="footer-contact">
          <h2>Contact</h2>
          <a href={siteConfig.contact.phoneHref}>
            <Phone aria-hidden="true" size={18} /> {siteConfig.contact.phone}
          </a>
          <a href={siteConfig.contact.textHref}>
            <MessageSquare aria-hidden="true" size={18} /> Text Us
          </a>
          <a href={siteConfig.contact.emailHref}>
            <Mail aria-hidden="true" size={18} /> {siteConfig.contact.email}
          </a>
          <span>
            <MapPin aria-hidden="true" size={18} /> {siteConfig.contact.address}
          </span>
          <small>{siteConfig.business.hours}</small>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Aaron Transportation. Placeholder content for initial launch.</span>
        <span>Final availability and pricing require confirmation.</span>
      </div>
    </footer>
  )
}
