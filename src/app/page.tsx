import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustBar } from '@/components/sections/TrustBar';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesTeaser } from '@/components/sections/ServicesTeaser';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { ReferAFriendSection } from '@/components/sections/ReferAFriendSection';
import { GiftCardsSection } from '@/components/sections/GiftCardsSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export const metadata: Metadata = {
  title: 'Healing Touch by Alina | Massage Therapist Frisco TX',
  description:
    'Licensed massage therapist serving Frisco TX & North Texas. Therapeutic, relaxation, prenatal, pediatric & CBD oil massage — in-studio or mobile. Book today!',
  alternates: {
    canonical: 'https://healingtouchbyalina.com',
  },
  openGraph: {
    title: 'Healing Touch by Alina | Massage Therapist Frisco TX',
    description:
      'Licensed massage therapist serving Frisco TX. Therapeutic, relaxation, prenatal, pediatric & CBD oil massage — in my home studio or mobile to you.',
    url: 'https://healingtouchbyalina.com',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Healing Touch by Alina – Frisco TX Massage Therapist' }],
  },
};

const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Healing Touch by Alina – Massage Therapist Frisco TX',
  description:
    'Book a licensed massage therapist in Frisco TX. Therapeutic, relaxation, prenatal, pediatric, and CBD oil massage — in-studio or mobile.',
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
      <WhyChooseSection />
      <ReferAFriendSection />
      <GiftCardsSection />
      <FinalCTASection />
    </>
  );
}
