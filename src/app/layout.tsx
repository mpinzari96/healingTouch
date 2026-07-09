import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ToastProvider } from '@/components/ui/ToastProvider';

const BASE_URL = 'https://healingtouchbyalina.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Healing Touch by Alina | Massage Therapist Frisco TX',
    template: '%s | Healing Touch by Alina – Frisco Massage Therapist',
  },
  description:
    'Licensed massage therapist serving Frisco, TX & North Texas. Therapeutic, relaxation, prenatal, pediatric & CBD oil massage in-studio or mobile. Book today!',
  keywords: [
    'massage therapist Frisco',
    'mobile massage Frisco TX',
    'in-home massage Frisco',
    'Healing Touch by Alina',
    'therapeutic massage Frisco',
    'relaxation massage near me',
    'prenatal massage Frisco',
    'CBD oil massage Frisco',
    'pediatric massage North Texas',
    'massage therapist North Texas',
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
    title: 'Healing Touch by Alina | Massage Therapist Frisco TX',
    description:
      'Licensed massage therapist serving Frisco, TX & North Texas. Therapeutic, relaxation, prenatal, pediatric & CBD oil massage — in-studio or mobile.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Healing Touch by Alina – Massage Therapist in Frisco, TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healing Touch by Alina | Massage Therapist Frisco TX',
    description:
      'Licensed massage therapist serving Frisco, TX & North Texas. Therapeutic, relaxation, prenatal & CBD oil massage — in-studio or mobile.',
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
        'Licensed massage therapist serving Frisco, TX and the surrounding North Texas area. Specializing in therapeutic, relaxation, prenatal, pediatric, and CBD oil massage — offered in a home studio and through mobile sessions.',
      url: BASE_URL,
      telephone: '[PHONE]',
      email: '[EMAIL]',
      priceRange: '$$',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Cash, Credit Card, Venmo, Zelle',
      areaServed: [
        { '@type': 'City', name: 'Frisco', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Little Elm' },
        { '@type': 'City', name: 'McKinney' },
        { '@type': 'City', name: 'Prosper' },
        { '@type': 'City', name: 'Allen' },
        { '@type': 'City', name: 'Plano' },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Frisco',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 33.1507, longitude: -96.8236 },
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
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Massage Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Therapeutic Massage',
              description:
                'Focused, results-driven bodywork to relieve pain, release muscle tension, and improve mobility.',
            },
            price: '110',
            priceCurrency: 'USD',
            eligibleDuration: 'PT60M',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Relaxation Massage',
              description:
                'Gentle, flowing strokes to calm the nervous system, ease stress, and restore balance.',
            },
            price: '100',
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
            price: '110',
            priceCurrency: 'USD',
            eligibleDuration: 'PT60M',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Pediatric Massage',
              description:
                'Gentle, age-appropriate massage for children ages 5–17. Parent or guardian consent required.',
            },
            price: '50',
            priceCurrency: 'USD',
            eligibleDuration: 'PT30M',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Infant Massage',
              description:
                'A parent-guided educational session teaching soothing massage techniques for your baby.',
            },
            price: '50',
            priceCurrency: 'USD',
            eligibleDuration: 'PT30M',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'CBD Oil Massage',
              description:
                'Massage enhanced with premium CBD oil to soothe sore muscles and deepen relaxation.',
            },
            price: '90',
            priceCurrency: 'USD',
            eligibleDuration: 'PT35M',
          },
        ],
      },
      sameAs: [
        '[INSTAGRAM_URL]',
        '[FACEBOOK_URL]',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Healing Touch by Alina',
      description: 'Massage Therapist in Frisco, TX — in-studio & mobile sessions',
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
