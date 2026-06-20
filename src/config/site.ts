const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

export const siteConfig = {
  siteUrl: 'https://wekil29.github.io/aaron-transportation/',
  business: {
    name: 'Aaron Transportation',
    tagline: 'Dependable luxury transportation for Dallas-Fort Worth',
    description:
      'Premium limo rental, private chauffeur, airport, event, and corporate transportation with a polished quote-request workflow.',
    hours: 'Available 24/7 by reservation',
  },
  contact: {
    phone: '469-268-0230',
    phoneHref: 'tel:+14692680230',
    textHref: 'sms:+14692680230',
    email: 'info@aarontransportation.com',
    emailHref: 'mailto:info@aarontransportation.com',
    address: '123 Main Street, Dallas, TX 75201',
    addressParts: {
      streetAddress: '123 Main Street',
      addressLocality: 'Dallas',
      addressRegion: 'TX',
      postalCode: '75201',
      addressCountry: 'US',
    },
    serviceArea: 'Dallas-Fort Worth and surrounding areas',
  },
  socialLinks: [
    { label: 'Instagram', href: 'https://www.instagram.com/aarontransportation-placeholder' },
    { label: 'Facebook', href: 'https://www.facebook.com/aarontransportation-placeholder' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/aarontransportation-placeholder' },
  ],
  nav: [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Fleet', path: '/fleet' },
    { label: 'Service Areas', path: '/service-areas' },
    { label: 'About', path: '/about' },
    { label: 'Request a Quote', path: '/quote' },
    { label: 'Contact', path: '/contact' },
  ],
  pageMeta: [
    {
      path: '/',
      title: 'Aaron Transportation | Luxury Transportation in Dallas-Fort Worth',
      description:
        'Request premium limo rental, private chauffeur, airport transfer, event, and corporate transportation in Dallas-Fort Worth.',
    },
    {
      path: '/services',
      title: 'Transportation Services | Aaron Transportation',
      description:
        'Explore airport transportation, limo rental, weddings, corporate travel, nightlife, hourly chauffeur service, and long-distance private transportation.',
    },
    {
      path: '/fleet',
      title: 'Luxury Fleet | Aaron Transportation',
      description:
        'View placeholder fleet options including luxury sedans, executive SUVs, stretch limousines, and party buses.',
    },
    {
      path: '/service-areas',
      title: 'Dallas-Fort Worth Service Areas | Aaron Transportation',
      description:
        'Aaron Transportation serves Dallas-Fort Worth, DFW Airport, Dallas Love Field, and nearby North Texas cities by reservation.',
    },
    {
      path: '/about',
      title: 'About Aaron Transportation | Professional Chauffeur Service',
      description:
        'Learn about Aaron Transportation, a premium private transportation brand focused on punctuality, professionalism, safety, and comfort.',
    },
    {
      path: '/quote',
      title: 'Request a Quote | Aaron Transportation',
      description:
        'Request a limo, airport transfer, event ride, corporate vehicle, or private chauffeur quote from Aaron Transportation.',
    },
    {
      path: '/contact',
      title: 'Contact Aaron Transportation | Dallas Luxury Transportation',
      description:
        'Call, text, email, or send a message to Aaron Transportation for Dallas-Fort Worth transportation availability.',
    },
    {
      path: '/faq',
      title: 'FAQ | Aaron Transportation',
      description:
        'Answers to common questions about booking, deposits, airport pickup, service areas, events, drivers, and cancellation policies.',
    },
    {
      path: '/vehicles-for-sale',
      title: 'Future Vehicle Sales | Aaron Transportation',
      description:
        'Prepared future route for vehicle inventory, test drive requests, and vehicle sales lead generation if activated by the business owner.',
    },
  ],
  images: {
    hero: publicAsset('images/hero-stretch-limousine-night.jpg'),
    chauffeur:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1400&q=80',
    airport:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80',
    wedding:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80',
    city:
      'https://images.unsplash.com/photo-1517957754642-2870518e16f8?auto=format&fit=crop&w=1400&q=80',
  },
  heroStats: [
    { value: '24/7', label: 'Reservation availability' },
    { value: 'DFW', label: 'Airport and city coverage' },
    { value: '4', label: 'Fleet categories prepared' },
  ],
  services: [
    {
      slug: 'airport-transportation',
      title: 'Airport Transportation',
      summary:
        'Private airport transfers for DFW Airport, Dallas Love Field, hotel arrivals, and executive travel days.',
      benefits: ['Flight-number readiness', 'Door-to-door pickup planning', 'Comfortable luggage-friendly vehicles'],
      vehicle: 'Luxury Sedan or Executive SUV',
      image:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    },
    {
      slug: 'limo-rental',
      title: 'Limo Rental',
      summary:
        'Polished limousine rentals for formal evenings, milestone celebrations, VIP arrivals, and special city nights.',
      benefits: ['Elegant arrival experience', 'Hourly itinerary flexibility', 'Group-ready amenities'],
      vehicle: 'Stretch Limousine',
      image: publicAsset('images/stretch-limousine.jpg'),
    },
    {
      slug: 'weddings',
      title: 'Weddings',
      summary:
        'Wedding-day transportation for couples, families, bridal parties, venue transfers, and guest movement.',
      benefits: ['Ceremony-to-reception coordination', 'Photo-friendly vehicle presentation', 'Reservation-first planning'],
      vehicle: 'Stretch Limousine or Executive SUV',
      image:
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
    },
    {
      slug: 'proms-special-events',
      title: 'Proms and Special Events',
      summary:
        'Event transportation designed around safe, stylish arrivals for school events, galas, and private celebrations.',
      benefits: ['Parent-friendly quote process', 'Group capacity options', 'Clear pickup and return timing'],
      vehicle: 'Stretch Limousine or Party Bus',
      image:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    },
    {
      slug: 'corporate-transportation',
      title: 'Corporate Transportation',
      summary:
        'Professional transportation for executives, client visits, meetings, conferences, and hospitality programs.',
      benefits: ['Quiet vehicle experience', 'Schedule-conscious service', 'Airport and office transfer support'],
      vehicle: 'Luxury Sedan or Executive SUV',
      image:
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    },
    {
      slug: 'birthday-nightlife',
      title: 'Birthday and Nightlife Transportation',
      summary:
        'Private transportation for birthdays, dinners, concerts, nightlife routes, and group celebrations.',
      benefits: ['Multiple-stop itinerary planning', 'Comfortable group seating', 'Late-night reservation support'],
      vehicle: 'Stretch Limousine or Party Bus',
      image:
        'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=1200&q=80',
    },
    {
      slug: 'hourly-chauffeur',
      title: 'Hourly Chauffeur Service',
      summary:
        'Flexible hourly private chauffeur service for errands, meetings, special appointments, and multi-stop days.',
      benefits: ['Adaptable schedule blocks', 'Private point-to-point comfort', 'Simple quote-based planning'],
      vehicle: 'Luxury Sedan or Executive SUV',
      image:
        'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      slug: 'long-distance-private',
      title: 'Long-Distance Private Transportation',
      summary:
        'Private long-distance rides for regional travel, private transfers, and out-of-area availability requests.',
      benefits: ['Comfort for longer routes', 'Custom pickup and drop-off planning', 'Availability confirmation before booking'],
      vehicle: 'Executive SUV or Luxury Sedan',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    },
  ],
  fleet: [
    {
      name: 'Signature Luxury Sedan',
      category: 'Luxury Sedan',
      passengers: 'Up to 3',
      luggage: '2 standard bags',
      amenities: ['Leather seating', 'Climate control', 'Phone charging', 'Quiet cabin'],
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Executive Black SUV',
      category: 'Executive SUV',
      passengers: 'Up to 6',
      luggage: '4 standard bags',
      amenities: ['Premium seating', 'Extra luggage room', 'Tinted privacy glass', 'Airport-ready comfort'],
      image:
        'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Classic Stretch Limousine',
      category: 'Stretch Limousine',
      passengers: 'Up to 10',
      luggage: 'Limited event storage',
      amenities: ['Lounge seating', 'Ambient lighting', 'Celebration-ready cabin', 'Formal arrival styling'],
      image: publicAsset('images/stretch-limousine.jpg'),
    },
    {
      name: 'Celebration Party Bus',
      category: 'Party Bus',
      passengers: 'Up to 24',
      luggage: 'Event-item storage',
      amenities: ['Group lounge layout', 'Lighting package', 'Audio-ready interior', 'Multi-stop nightlife routing'],
      image:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    },
  ],
  serviceAreas: {
    airports: ['DFW Airport', 'Dallas Love Field'],
    cities: [
      'Dallas',
      'Fort Worth',
      'Arlington',
      'Plano',
      'Frisco',
      'Irving',
      'Grapevine',
      'McKinney',
      'Richardson',
      'Addison',
      'Southlake',
      'Denton',
    ],
  },
  testimonials: [
    {
      quote:
        'The quote process was simple, the vehicle felt polished, and our airport pickup was planned with care.',
      name: 'Placeholder Client',
      detail: 'Airport transportation',
    },
    {
      quote:
        'Aaron Transportation made our event arrivals feel organized and premium from the first call.',
      name: 'Placeholder Event Planner',
      detail: 'Private event service',
    },
    {
      quote:
        'Professional communication, clean vehicle presentation, and a smooth ride for our team schedule.',
      name: 'Placeholder Executive',
      detail: 'Corporate travel',
    },
  ],
  faq: [
    {
      question: 'How far in advance should I book?',
      answer:
        'Advance reservations are recommended, especially for airport transfers, weddings, proms, and weekend events. Same-day availability may be possible after confirmation.',
    },
    {
      question: 'Do you require a deposit?',
      answer:
        'Deposit requirements can vary by service type, date, and vehicle. Aaron Transportation will confirm any deposit details before final booking.',
    },
    {
      question: 'Can I request a specific vehicle?',
      answer:
        'Yes. Vehicle preferences can be requested on the quote form. Final assignment depends on confirmed availability.',
    },
    {
      question: 'Do you provide airport pickup?',
      answer:
        'Yes. Airport transportation can be requested for DFW Airport, Dallas Love Field, and other regional airport trips.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'The initial service area is Dallas-Fort Worth and surrounding areas. Out-of-area requests can be submitted for availability review.',
    },
    {
      question: 'Can I book transportation for a wedding or event?',
      answer:
        'Yes. Wedding, prom, birthday, corporate, and private event transportation can be requested through the quote workflow.',
    },
    {
      question: 'Are your drivers licensed and insured?',
      answer:
        'Driver and insurance standards should be confirmed with the business owner before publishing final claims. This site is structured for that information to be updated centrally.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'Cancellation terms are placeholder content and should be replaced with the official Aaron Transportation policy before launch.',
    },
  ],
  futureVehicleSales: {
    enabledInNavigation: false,
    features: [
      'Vehicle inventory cards',
      'Vehicle detail pages',
      'Photos',
      'Year, make, model, mileage, price, and condition',
      'Schedule a Test Drive form',
      'Request More Information form',
      'Filters by make, price, type, and year',
    ],
  },
} as const

export type ServiceItem = (typeof siteConfig.services)[number]
export type FleetItem = (typeof siteConfig.fleet)[number]
