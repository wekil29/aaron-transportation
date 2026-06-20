import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react'
import { ButtonLink } from '../components/ButtonLink'
import { ContactForm } from '../components/ContactForm'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { siteConfig } from '../config/site'

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Call, text, email, or send a message for transportation availability."
        copy="Aaron Transportation is available 24/7 by reservation using centralized placeholder contact details that can be replaced later."
        image={siteConfig.images.city}
        compact
      >
        <ButtonLink href={siteConfig.contact.phoneHref} icon={Phone}>
          Call Now
        </ButtonLink>
        <ButtonLink href={siteConfig.contact.textHref} variant="secondary" icon={MessageSquare}>
          Text Us
        </ButtonLink>
      </PageHero>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <SectionHeading
              eyebrow="Contact details"
              title="Reach Aaron Transportation."
              copy="Every contact value is stored in the central site configuration for easy replacement."
            />
            <div className="contact-list">
              <a href={siteConfig.contact.phoneHref}>
                <Phone aria-hidden="true" size={20} /> {siteConfig.contact.phone}
              </a>
              <a href={siteConfig.contact.textHref}>
                <MessageSquare aria-hidden="true" size={20} /> Text Us
              </a>
              <a href={siteConfig.contact.emailHref}>
                <Mail aria-hidden="true" size={20} /> {siteConfig.contact.email}
              </a>
              <span>
                <MapPin aria-hidden="true" size={20} /> {siteConfig.contact.address}
              </span>
              <strong>{siteConfig.business.hours}</strong>
            </div>
            <div className="map-placeholder contact-map" aria-label="Google map placeholder">
              <MapPin aria-hidden="true" size={36} />
              <strong>Google Map</strong>
              <span>Embed-ready location area</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
