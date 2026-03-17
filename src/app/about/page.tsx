import type { Metadata } from 'next';
import { AboutPageClient } from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Alina | Licensed Mobile Massage Therapist Dallas TX',
  description:
    'Meet Alina, a licensed massage therapist with 7+ years of experience serving Dallas TX. AMTA member specializing in Swedish, deep tissue, hot stone & prenatal massage. Mobile only.',
  alternates: { canonical: 'https://healingtouchbyalina.com/about' },
  openGraph: {
    title: 'About Alina | Licensed Mobile Massage Therapist Dallas TX',
    description:
      'Meet Alina — 7+ years of therapeutic massage experience, AMTA member, serving Dallas TX and surrounding areas with fully mobile massage services.',
    url: 'https://healingtouchbyalina.com/about',
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
