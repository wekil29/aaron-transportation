import { CalendarCheck, Luggage, Users } from 'lucide-react'
import type { FleetItem } from '../config/site'
import { ButtonLink } from './ButtonLink'

type FleetCardProps = {
  vehicle: FleetItem
}

export function FleetCard({ vehicle }: FleetCardProps) {
  return (
    <article className="fleet-card">
      <img src={vehicle.image} alt={`${vehicle.name} exterior`} loading="lazy" />
      <div className="fleet-card__body">
        <p className="eyebrow">{vehicle.category}</p>
        <h3>{vehicle.name}</h3>
        <div className="fleet-card__specs" aria-label={`${vehicle.name} capacity details`}>
          <span>
            <Users aria-hidden="true" size={17} /> {vehicle.passengers}
          </span>
          <span>
            <Luggage aria-hidden="true" size={17} /> {vehicle.luggage}
          </span>
        </div>
        <ul className="check-list">
          {vehicle.amenities.map((amenity) => (
            <li key={amenity}>{amenity}</li>
          ))}
        </ul>
        <ButtonLink to="/quote" variant="dark" icon={CalendarCheck}>
          Request This Vehicle
        </ButtonLink>
      </div>
    </article>
  )
}
