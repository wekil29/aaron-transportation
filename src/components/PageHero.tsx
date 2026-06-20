type PageHeroProps = {
  eyebrow: string
  title: string
  copy: string
  image?: string
  children?: React.ReactNode
  compact?: boolean
}

export function PageHero({ eyebrow, title, copy, image, children, compact = false }: PageHeroProps) {
  return (
    <section
      className={`page-hero ${compact ? 'page-hero--compact' : ''}`}
      style={image ? { backgroundImage: `linear-gradient(90deg, rgba(5,5,5,.9), rgba(5,5,5,.55)), url(${image})` } : undefined}
    >
      <div className="container page-hero__content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
        {children ? <div className="hero-actions">{children}</div> : null}
      </div>
    </section>
  )
}
