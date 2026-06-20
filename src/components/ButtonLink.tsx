import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

type ButtonLinkProps = {
  children: React.ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark'
  icon?: LucideIcon
  className?: string
  target?: string
  rel?: string
}

export function ButtonLink({
  children,
  to,
  href,
  variant = 'primary',
  icon: Icon,
  className = '',
  target,
  rel,
}: ButtonLinkProps) {
  const classes = `button button--${variant} ${className}`.trim()
  const content = (
    <>
      {Icon ? <Icon aria-hidden="true" size={18} strokeWidth={1.8} /> : null}
      <span>{children}</span>
    </>
  )

  if (to) {
    return (
      <Link className={classes} to={to}>
        {content}
      </Link>
    )
  }

  return (
    <a className={classes} href={href} target={target} rel={rel}>
      {content}
    </a>
  )
}
