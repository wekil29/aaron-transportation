import { ArrowRight, CalendarCheck, CarFront, MapPin, Phone, ShieldCheck, Sparkles, Timer } from 'lucide-react'
import { ButtonLink } from '../components/ButtonLink'
import { FinalCta } from '../components/FinalCta'
import { FleetCard } from '../components/FleetCard'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceCard } from '../components/ServiceCard'
import { siteConfig } from '../config/site'

const whyChoose = [
  {
    icon: Timer,
    title: 'Punctual planning',
    copy: 'Reservation details are gathered clearly so airport, event, and hourly rides can be confirmed with confidence.',
  },
  {
    icon: ShieldCheck,
    title: 'Professional standards',
    copy: 'The site is structured for owner-approved driver, insurance, and fleet standards to be added in one place.',
  },
  {
    icon: Sparkles,
    title: 'Premium presentation',
    copy: 'A polished black-car experience with quote-first communication and vehicle preference capture.',
  },
]

export function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Dallas-Fort Worth luxury transportation"
        title="Dependable private rides for airport, events, and every elevated arrival."
        copy="Aaron Transportation provides limo rental, private chauffeur service, airport transportation, event travel, and future-ready vehicle services with a quote workflow designed for easy follow-up."
        image={siteConfig.images.hero}
      >
        <ButtonLink to="/quote" icon={CalendarCheck}>
          Request a Quote
        </ButtonLink>
        <ButtonLink href={siteConfig.contact.phoneHref} variant="secondary" icon={Phone}>
          Call Now
        </ButtonLink>
        <ButtonLink to="/fleet" variant="ghost" icon={CarFront}>
          View Our Fleet
        </ButtonLink>
      </PageHero>

      <section className="section section--light intro-band">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">Aaron Transportation</p>
            <h2>Luxury transportation with a simple path from inquiry to confirmed ride.</h2>
          </div>
          <p>
            This initial launch focuses on lead generation through clear calls, text links, and quote requests. It avoids complex dispatch or real-time reservations while keeping the architecture ready for booking, CRM, SMS, and payment integrations later.
          </p>
        </div>
        <div className="container stat-grid">
          {siteConfig.heroStats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Featured services"
            title="Transportation for the moments that need to feel effortless."
            copy="Airport transfers, formal events, corporate schedules, and private hourly travel are all routed through the same quote-first experience."
          />
          <div className="card-grid card-grid--services">
            {siteConfig.services.slice(0, 4).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="section-link">
            <ButtonLink to="/services" variant="dark" icon={ArrowRight}>
              View All Services
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Featured fleet"
            title="Vehicle categories prepared for premium requests."
            copy="Exact rates are intentionally not shown yet. Each vehicle directs customers to request a quote and confirm availability."
          />
          <div className="card-grid card-grid--fleet">
            {siteConfig.fleet.slice(0, 3).map((vehicle) => (
              <FleetCard key={vehicle.name} vehicle={vehicle} />
            ))}
          </div>
          <div className="section-link">
            <ButtonLink to="/fleet" icon={CarFront}>
              View Our Fleet
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why choose us"
            title="Built around trust, comfort, and follow-through."
          />
          <div className="feature-grid">
            {whyChoose.map((item) => (
              <article className="feature-card" key={item.title}>
                <item.icon aria-hidden="true" size={30} />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--split">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Service area</p>
            <h2>Dallas-Fort Worth coverage with airport and out-of-area availability requests.</h2>
            <p>
              Aaron Transportation is prepared for Dallas, Fort Worth, DFW Airport, Dallas Love Field, and nearby North Texas cities. Customers outside the normal area can still request availability.
            </p>
            <ButtonLink to="/service-areas" variant="dark" icon={MapPin}>
              Explore Service Areas
            </ButtonLink>
          </div>
          <img src={siteConfig.images.city} alt="Dallas city skyline at dusk" loading="lazy" />
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionHeading
            eyebrow="Placeholder reviews"
            title="Credibility sections are ready for real customer feedback."
          />
          <div className="testimonial-grid">
            {siteConfig.testimonials.map((testimonial) => (
              <figure className="testimonial-card" key={testimonial.quote}>
                <blockquote>“{testimonial.quote}”</blockquote>
                <figcaption>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
