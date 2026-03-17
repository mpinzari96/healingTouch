import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustBar } from '@/components/sections/TrustBar';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesTeaser } from '@/components/sections/ServicesTeaser';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export const metadata: Metadata = {
  title: 'Healing Touch by Alina | Mobile Massage Therapist Dallas TX',
  description:
    'Licensed mobile massage therapist serving Dallas TX & surrounding areas. Swedish, deep tissue, hot stone & prenatal massage delivered to your home or office. Book today! 4.98★ rated.',
  alternates: {
    canonical: 'https://healingtouchbyalina.com',
  },
  openGraph: {
    title: 'Healing Touch by Alina | Mobile Massage Therapist Dallas TX',
    description:
      'Licensed mobile massage therapist serving Dallas TX. I bring the full spa experience to your home — Swedish, deep tissue, hot stone & prenatal massage.',
    url: 'https://healingtouchbyalina.com',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Healing Touch by Alina – Dallas Mobile Massage Therapist' }],
  },
};

const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Healing Touch by Alina – Mobile Massage Therapist Dallas TX',
  description:
    'Book a licensed mobile massage therapist in Dallas TX. Swedish, deep tissue, hot stone, and prenatal massage delivered to your home or office.',
  url: 'https://healingtouchbyalina.com',
  mainEntity: { '@id': 'https://healingtouchbyalina.com/#business' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://healingtouchbyalina.com' },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <ServicesTeaser />
      <TestimonialsSection />
      <WhyChooseSection />
      <FinalCTASection />
    </>
  );
}
