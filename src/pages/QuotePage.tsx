import { Phone } from 'lucide-react'
import { ButtonLink } from '../components/ButtonLink'
import { PageHero } from '../components/PageHero'
import { QuoteForm } from '../components/QuoteForm'
import { SectionHeading } from '../components/SectionHeading'
import { siteConfig } from '../config/site'

export function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="Share the ride details and let Aaron Transportation confirm availability."
        copy="This is the primary lead-generation workflow for airport, limo, event, corporate, hourly chauffeur, and private transportation requests."
        image={siteConfig.images.hero}
        compact
      >
        <ButtonLink href={siteConfig.contact.phoneHref} variant="secondary" icon={Phone}>
          Call Now
        </ButtonLink>
      </PageHero>

      <section className="section">
        <div className="container form-layout">
          <div>
            <SectionHeading
              eyebrow="Booking details"
              title="Quote request form"
              copy="Only your name and phone number are required. Optional trip details can help Aaron Transportation prepare a faster availability and quote follow-up."
            />
            <div className="form-note">
              <strong>Backend-ready structure</strong>
              <p>Email, CRM, Google Sheets, database, SMS, Stripe, or booking software integrations can be connected later through the existing form abstraction.</p>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  )
}
