import { CalendarCheck, CarFront } from 'lucide-react'
import { ButtonLink } from '../components/ButtonLink'
import { FinalCta } from '../components/FinalCta'
import { FleetCard } from '../components/FleetCard'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { siteConfig } from '../config/site'

export function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Fleet"
        title="A polished fleet gallery ready for real vehicle photos and confirmed capacities."
        copy="Placeholder vehicle categories support limo rental, airport transportation, corporate travel, group events, and nightlife quote requests without displaying exact pricing."
        image={siteConfig.images.hero}
        compact
      >
        <ButtonLink to="/quote" icon={CalendarCheck}>
          Request a Quote
        </ButtonLink>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Vehicle categories"
            title="Choose a preferred vehicle and confirm availability."
            copy="Each card keeps pricing quote-based with capacity, luggage, category, amenities, and a request path."
          />
          <div className="card-grid card-grid--fleet card-grid--fleet-full">
            {siteConfig.fleet.map((vehicle) => (
              <FleetCard key={vehicle.name} vehicle={vehicle} />
            ))}
          </div>
          <div className="price-note">
            <CarFront aria-hidden="true" size={20} />
            <span>Starting-at language and exact pricing can be added later after the business owner confirms rate strategy.</span>
          </div>
        </div>
      </section>

      <FinalCta title="Request the vehicle category that fits your ride." />
    </>
  )
}
