import type { Metadata } from 'next';
import { ContactPageClient } from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Alina | Massage Therapist Frisco TX',
  description:
    'Contact Healing Touch by Alina — licensed massage therapist in Frisco TX. Call, text, or email to book your in-studio or mobile massage session. Serving Frisco & North Texas.',
  alternates: { canonical: 'https://healingtouchbyalina.com/contact' },
  openGraph: {
    title: 'Contact Healing Touch by Alina | Frisco TX Massage',
    description:
      'Reach out to schedule your in-studio or mobile massage in Frisco TX. Available by phone, text, email, and WhatsApp. Serving Frisco and North Texas.',
    url: 'https://healingtouchbyalina.com/contact',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
