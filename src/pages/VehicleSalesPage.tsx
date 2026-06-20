import { CalendarCheck, CarFront } from 'lucide-react'
import { ButtonLink } from '../components/ButtonLink'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { siteConfig } from '../config/site'

export function VehicleSalesPage() {
  return (
    <>
      <PageHero
        eyebrow="Future route"
        title="Vehicle sales can be enabled when Aaron Transportation confirms the offering."
        copy="This disabled route is intentionally absent from the main navigation while keeping the architecture ready for future inventory and test-drive lead generation."
        image={siteConfig.images.hero}
        compact
      >
        <ButtonLink to="/quote" icon={CalendarCheck}>
          Request Transportation
        </ButtonLink>
      </PageHero>

      <section className="section">
        <div className="container standards-grid">
          <div>
            <SectionHeading
              eyebrow="Prepared future functionality"
              title="Inventory, details, filters, and vehicle-sales forms can be added later."
              copy="The main launch stays focused on transportation leads and does not show vehicle sales in navigation until the business owner confirms it."
            />
          </div>
          <ul className="standard-list">
            {siteConfig.futureVehicleSales.features.map((feature) => (
              <li key={feature}>
                <CarFront aria-hidden="true" size={18} />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
