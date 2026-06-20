import { CalendarCheck, MapPin, Plane } from 'lucide-react'
import { ButtonLink } from '../components/ButtonLink'
import { FinalCta } from '../components/FinalCta'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { siteConfig } from '../config/site'

export function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title="Luxury transportation across Dallas-Fort Worth and nearby North Texas cities."
        copy="The initial content highlights DFW Airport, Dallas Love Field, Dallas-Fort Worth coverage, nearby cities, and availability requests outside the normal area."
        image={siteConfig.images.city}
        compact
      >
        <ButtonLink to="/quote" icon={CalendarCheck}>
          Request Availability
        </ButtonLink>
      </PageHero>

      <section className="section">
        <div className="container area-grid">
          <div>
            <SectionHeading
              eyebrow="Main coverage"
              title="Dallas-Fort Worth and surrounding areas."
              copy="Service-area details are centralized so cities, airports, and future neighborhoods can be updated without hunting through components."
            />
            <div className="city-list">
              {siteConfig.serviceAreas.cities.map((city) => (
                <span key={city}>{city}</span>
              ))}
            </div>
          </div>
          <div className="airport-panel">
            <Plane aria-hidden="true" size={34} />
            <h3>Airport transportation</h3>
            <p>Airport transfer placeholders are prepared for:</p>
            <ul className="check-list">
              {siteConfig.serviceAreas.airports.map((airport) => (
                <li key={airport}>{airport}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container map-grid">
          <div className="map-placeholder" aria-label="Dallas-Fort Worth map placeholder">
            <MapPin aria-hidden="true" size={42} />
            <strong>DFW Coverage Map</strong>
            <span>Embed-ready map area</span>
          </div>
          <div>
            <p className="eyebrow">Outside the usual area</p>
            <h2>Custom route requests can still start with a quote.</h2>
            <p>
              Customers outside the standard Dallas-Fort Worth service area can submit pickup, drop-off, timing, passenger count, and vehicle preference for availability review.
            </p>
            <ButtonLink to="/quote" variant="dark" icon={CalendarCheck}>
              Request Availability
            </ButtonLink>
          </div>
        </div>
      </section>

      <FinalCta
        title="Need a ride beyond the listed cities?"
        copy="Send the route details and Aaron Transportation can confirm whether the requested trip is available."
      />
    </>
  )
}
