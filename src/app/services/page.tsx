import type { Metadata } from 'next';
import { ServicesPageClient } from './ServicesPageClient';

export const metadata: Metadata = {
  title: 'Massage Services & Pricing | Therapeutic, Relaxation, Prenatal – Frisco TX',
  description:
    'View all massage services offered by Healing Touch by Alina in Frisco TX. Therapeutic ($110), Relaxation ($100), Prenatal ($110), Pediatric ($50) & CBD Oil massage. In-studio or mobile. Book today.',
  alternates: { canonical: 'https://healingtouchbyalina.com/services' },
  openGraph: {
    title: 'Massage Services & Pricing | Healing Touch by Alina – Frisco TX',
    description:
      'Massage therapy services in Frisco TX: therapeutic, relaxation, prenatal, pediatric & CBD oil massage. In-studio or mobile. Book today!',
    url: 'https://healingtouchbyalina.com/services',
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
