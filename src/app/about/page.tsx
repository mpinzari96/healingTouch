import type { Metadata } from 'next';
import { AboutPageClient } from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Alina | Licensed Massage Therapist Frisco TX',
  description:
    'Meet Alina, a Licensed Massage Therapist serving Frisco TX and North Texas since 2019. AMTA member specializing in therapeutic, relaxation, prenatal, pediatric & CBD oil massage. In-studio or mobile.',
  alternates: { canonical: 'https://healingtouchbyalina.com/about' },
  openGraph: {
    title: 'About Alina | Licensed Massage Therapist Frisco TX',
    description:
      'Meet Alina — international and U.S. massage training since 2019, AMTA member, serving Frisco TX and North Texas with in-studio and mobile massage.',
    url: 'https://healingtouchbyalina.com/about',
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
