import type { Metadata } from 'next';
import { ContactPageClient } from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Alina | Mobile Massage Therapist Dallas TX',
  description:
    'Contact Healing Touch by Alina — licensed mobile massage therapist in Dallas TX. Call, text, or email to book your in-home massage session. Serving Dallas & surrounding cities.',
  alternates: { canonical: 'https://healingtouchbyalina.com/contact' },
  openGraph: {
    title: 'Contact Healing Touch by Alina | Dallas Mobile Massage',
    description:
      'Reach out to schedule your in-home massage in Dallas TX. Available by phone, text, email, and WhatsApp. Serving Dallas and all DFW surrounding cities.',
    url: 'https://healingtouchbyalina.com/contact',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
