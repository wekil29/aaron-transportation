import { CalendarCheck } from 'lucide-react'
import { ButtonLink } from '../components/ButtonLink'
import { FinalCta } from '../components/FinalCta'
import { PageHero } from '../components/PageHero'
import { siteConfig } from '../config/site'

export function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers to common transportation booking questions."
        copy="Placeholder answers are ready for the business owner to edit before final launch."
        image={siteConfig.images.airport}
        compact
      >
        <ButtonLink to="/quote" icon={CalendarCheck}>
          Request a Quote
        </ButtonLink>
      </PageHero>

      <section className="section">
        <div className="container faq-list">
          {siteConfig.faq.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <FinalCta title="Have a route or timing question?" />
    </>
  )
}
