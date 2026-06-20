import { ArrowLeft } from 'lucide-react'
import { ButtonLink } from '../components/ButtonLink'

export function NotFoundPage() {
  return (
    <section className="section not-found">
      <div className="container">
        <p className="eyebrow">Page not found</p>
        <h1>That route is not available.</h1>
        <p>Return to the Aaron Transportation home page or request a quote for your ride.</p>
        <ButtonLink to="/" icon={ArrowLeft}>
          Back Home
        </ButtonLink>
      </div>
    </section>
  )
}
