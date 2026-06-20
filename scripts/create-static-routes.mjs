import { copyFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const routes = [
  'services',
  'fleet',
  'service-areas',
  'about',
  'quote',
  'contact',
  'faq',
  'vehicles-for-sale',
]

const docsDir = 'docs'
const source = join(docsDir, 'index.html')

copyFileSync(source, join(docsDir, '404.html'))

for (const route of routes) {
  const routeDir = join(docsDir, route)
  mkdirSync(routeDir, { recursive: true })
  copyFileSync(source, join(routeDir, 'index.html'))
}
