import { CalendarCheck, Phone } from 'lucide-react'
import { ButtonLink } from '../components/ButtonLink'
import { FinalCta } from '../components/FinalCta'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceCard } from '../components/ServiceCard'
import { siteConfig } from '../config/site'

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Private transportation services for airport, events, business, and celebrations."
        copy="Every service is presented with a concise overview, key benefits, recommended vehicle type, and a quote path that can later connect to booking software."
        image={siteConfig.images.chauffeur}
        compact
      >
        <ButtonLink to="/quote" icon={CalendarCheck}>
          Request a Quote
        </ButtonLink>
        <ButtonLink href={siteConfig.contact.phoneHref} variant="secondary" icon={Phone}>
          Call Now
        </ButtonLink>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Required service set"
            title="Eight lead-focused service pages in one organized services view."
            copy="Use these cards as individual sections now and as future detail pages later."
          />
          <div className="card-grid card-grid--services">
            {siteConfig.services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Tell us the service, schedule, and preferred vehicle."
        copy="The quote request captures enough detail for airport transfers, event routes, hourly chauffeur blocks, and long-distance private rides."
      />
    </>
  )
}
