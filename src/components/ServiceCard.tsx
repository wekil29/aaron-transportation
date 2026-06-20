import { CalendarCheck, CarFront } from 'lucide-react'
import type { ServiceItem } from '../config/site'
import { ButtonLink } from './ButtonLink'

type ServiceCardProps = {
  service: ServiceItem
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="service-card" id={service.slug}>
      <img src={service.image} alt={`${service.title} service`} loading="lazy" />
      <div className="service-card__body">
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
        <ul className="check-list">
          {service.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
        <p className="vehicle-fit">
          <CarFront aria-hidden="true" size={18} />
          Recommended: {service.vehicle}
        </p>
        <ButtonLink to="/quote" variant="dark" icon={CalendarCheck}>
          Request a Quote
        </ButtonLink>
      </div>
    </article>
  )
}
