import { CalendarCheck, ShieldCheck } from 'lucide-react'
import { ButtonLink } from '../components/ButtonLink'
import { FinalCta } from '../components/FinalCta'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { siteConfig } from '../config/site'

const standards = [
  'Punctuality-centered ride planning',
  'Professional communication before final booking',
  'Safety, comfort, and customer service focus',
  'Fleet presentation standards ready for owner confirmation',
  'Quote workflow prepared for future booking integrations',
]

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A premium transportation brand built around professionalism and customer confidence."
        copy="Aaron Transportation serves customers who want dependable private transportation without a complicated first step."
        image={siteConfig.images.chauffeur}
        compact
      >
        <ButtonLink to="/quote" icon={CalendarCheck}>
          Request a Quote
        </ButtonLink>
      </PageHero>

      <section className="section">
        <div className="container story-grid">
          <div>
            <SectionHeading
              eyebrow="Company overview"
              title="Luxury transportation with practical lead generation at the center."
              copy="The initial website is designed to help customers call, text, or request a quote while keeping room for future booking, CRM, SMS, payment, and vehicle-sales integrations."
            />
            <p>
              Aaron Transportation provides limo rental, private transportation, airport rides, event transportation, corporate travel, hourly chauffeur service, and long-distance private ride requests across Dallas-Fort Worth.
            </p>
          </div>
          <div className="mission-panel">
            <ShieldCheck aria-hidden="true" size={34} />
            <h3>Mission</h3>
            <p>
              Deliver professional, comfortable, safety-minded transportation experiences with clear communication, punctual planning, and service that feels polished from request to arrival.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container standards-grid">
          <div>
            <p className="eyebrow">Business history</p>
            <h2>Placeholder history ready for owner-approved details.</h2>
            <p>
              The site uses realistic placeholder copy until Aaron Transportation confirms founding details, leadership story, driver requirements, fleet standards, licensing language, insurance claims, and service guarantees.
            </p>
          </div>
          <ul className="standard-list">
            {standards.map((standard) => (
              <li key={standard}>{standard}</li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta title="Start with the ride details. Confirm the rest with the team." />
    </>
  )
}
