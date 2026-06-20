import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { siteConfig } from '../config/site'

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.content = content
}

export function Seo() {
  const location = useLocation()

  useEffect(() => {
    const meta =
      siteConfig.pageMeta.find((page) => page.path === location.pathname) ?? siteConfig.pageMeta[0]
    const canonicalUrl = new URL(location.pathname.replace(/^\//, ''), siteConfig.siteUrl).toString()

    document.title = meta.title
    setMeta('name', 'description', meta.description)
    setMeta('property', 'og:title', meta.title)
    setMeta('property', 'og:description', meta.description)
    setMeta('property', 'og:url', canonicalUrl)

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical) {
      canonical.href = canonicalUrl
    }

    const structuredData = document.getElementById('structured-data')
    if (structuredData) {
      structuredData.textContent = JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: siteConfig.business.name,
          description: siteConfig.business.description,
          telephone: siteConfig.contact.phone,
          email: siteConfig.contact.email,
          address: {
            '@type': 'PostalAddress',
            ...siteConfig.contact.addressParts,
          },
          areaServed: siteConfig.contact.serviceArea,
          openingHours: 'Mo-Su 00:00-23:59',
          url: siteConfig.siteUrl,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'TransportationService',
          name: siteConfig.business.name,
          serviceType: siteConfig.services.map((service) => service.title),
          areaServed: siteConfig.serviceAreas.cities,
          provider: {
            '@type': 'LocalBusiness',
            name: siteConfig.business.name,
          },
          url: siteConfig.siteUrl,
        },
      ])
    }
  }, [location.pathname])

  return null
}
