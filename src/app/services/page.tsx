import type { Metadata } from 'next';
import { ServicesPageClient } from './ServicesPageClient';

export const metadata: Metadata = {
  title: 'Massage Services & Pricing | Swedish, Deep Tissue, Hot Stone – Dallas TX',
  description:
    'View all mobile massage services offered by Healing Touch by Alina in Dallas TX. Swedish ($110), Deep Tissue ($130), Hot Stone ($150), Prenatal ($120). Book in-home massage today.',
  alternates: { canonical: 'https://healingtouchbyalina.com/services' },
  openGraph: {
    title: 'Massage Services & Pricing | Healing Touch by Alina – Dallas TX',
    description:
      'Mobile massage therapy services in Dallas TX: Swedish, deep tissue, hot stone & prenatal massage. Fully equipped, I come to you. Book today!',
    url: 'https://healingtouchbyalina.com/services',
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
