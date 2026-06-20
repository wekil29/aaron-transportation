import { CalendarCheck, Phone } from 'lucide-react'
import { siteConfig } from '../config/site'
import { ButtonLink } from './ButtonLink'

type FinalCtaProps = {
  title?: string
  copy?: string
}

export function FinalCta({
  title = 'Ready for a polished ride plan?',
  copy = 'Share the trip details and Aaron Transportation will follow up with availability and quote confirmation.',
}: FinalCtaProps) {
  return (
    <section className="section section--cta">
      <div className="container cta-band">
        <div>
          <p className="eyebrow">Quote-first booking</p>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <div className="cta-actions">
          <ButtonLink to="/quote" icon={CalendarCheck}>
            Request a Quote
          </ButtonLink>
          <ButtonLink href={siteConfig.contact.phoneHref} variant="secondary" icon={Phone}>
            Call Now
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
