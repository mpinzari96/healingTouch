import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ToastProvider } from '@/components/ui/ToastProvider';

const BASE_URL = 'https://healingtouchbyalina.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Healing Touch by Alina | Mobile Massage Therapist Dallas TX',
    template: '%s | Healing Touch by Alina – Dallas Massage Therapist',
  },
  description:
    'Licensed mobile massage therapist serving Dallas, TX & surrounding areas. Swedish, deep tissue, hot stone & prenatal massage delivered to your home or office. Book today!',
  keywords: [
    'massage therapist Dallas',
    'mobile massage Dallas TX',
    'in-home massage Dallas',
    'Healing Touch by Alina',
    'Swedish massage Dallas',
    'deep tissue massage near me',
    'prenatal massage Dallas',
    'hot stone massage Dallas',
    'mobile massage therapist Texas',
    'in-home massage therapist Dallas',
  ],
  authors: [{ name: 'Alina', url: BASE_URL }],
  creator: 'Healing Touch by Alina',
  publisher: 'Healing Touch by Alina',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Healing Touch by Alina',
    title: 'Healing Touch by Alina | Mobile Massage Therapist Dallas TX',
    description:
      'Licensed mobile massage therapist serving Dallas, TX & surrounding areas. Swedish, deep tissue, hot stone & prenatal massage — I come to you!',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Healing Touch by Alina – Mobile Massage Therapist in Dallas, TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healing Touch by Alina | Mobile Massage Therapist Dallas TX',
    description:
      'Licensed mobile massage therapist serving Dallas, TX. Swedish, deep tissue, hot stone & prenatal massage delivered to your home.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    // google: 'your-google-verification-code',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'MassageTherapist', 'HealthAndBeautyBusiness'],
      '@id': `${BASE_URL}/#business`,
      name: 'Healing Touch by Alina',
      description:
        'Licensed mobile massage therapist serving Dallas, TX and surrounding areas. Specializing in Swedish, deep tissue, hot stone, and prenatal massage delivered directly to your home or office.',
      url: BASE_URL,
      telephone: '+1-214-555-0192',
      email: 'alina@healingtouchbyalina.com',
      priceRange: '$$',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Cash, Credit Card, Venmo, Zelle',
      areaServed: [
        { '@type': 'City', name: 'Dallas', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Plano' },
        { '@type': 'City', name: 'Frisco' },
        { '@type': 'City', name: 'McKinney' },
        { '@type': 'City', name: 'Richardson' },
        { '@type': 'City', name: 'Garland' },
        { '@type': 'City', name: 'Irving' },
        { '@type': 'City', name: 'Carrollton' },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dallas',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 32.7767, longitude: -96.797 },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '20:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday'],
          opens: '10:00',
          closes: '18:00',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.98',
        reviewCount: '87',
        bestRating: '5',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Massage Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Swedish Massage',
              description:
                'Gentle, flowing strokes to relax muscles, improve circulation, and reduce stress. Perfect for first-time massage clients.',
            },
            price: '110',
            priceCurrency: 'USD',
            eligibleDuration: 'PT60M',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Deep Tissue Massage',
              description:
                'Targets chronic muscle tension and knots with firm, focused pressure. Ideal for athletes and those with chronic pain.',
            },
            price: '130',
            priceCurrency: 'USD',
            eligibleDuration: 'PT60M',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Hot Stone Massage',
              description:
                'Heated basalt stones melt away tension and promote deep relaxation. A luxurious experience for body and mind.',
            },
            price: '150',
            priceCurrency: 'USD',
            eligibleDuration: 'PT60M',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Prenatal Massage',
              description:
                'Safe, nurturing massage designed for expectant mothers. Reduces pregnancy discomforts and promotes relaxation.',
            },
            price: '120',
            priceCurrency: 'USD',
            eligibleDuration: 'PT60M',
          },
        ],
      },
      sameAs: [
        'https://www.instagram.com/healingtouchbyalina',
        'https://www.facebook.com/healingtouchbyalina',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Healing Touch by Alina',
      description: 'Mobile Massage Therapist in Dallas, TX',
      publisher: { '@id': `${BASE_URL}/#business` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#4A6658" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-cream antialiased">
        <ToastProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
