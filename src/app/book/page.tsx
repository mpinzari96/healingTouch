import type { Metadata } from 'next';
import { BookPageClient } from './BookPageClient';

export const metadata: Metadata = {
  title: 'Book a Massage in Frisco TX | Healing Touch by Alina',
  description:
    'Book your massage session in Frisco TX with Healing Touch by Alina. Choose your service & duration. Therapeutic, relaxation, prenatal, pediatric & CBD oil massage — in-studio or mobile. Mon–Wed 8AM–2:30PM, Thu–Fri 8AM–2:30PM & 3:45–5PM, Sat 10AM–3PM.',
  alternates: { canonical: 'https://healingtouchbyalina.com/book' },
  openGraph: {
    title: 'Book a Massage in Frisco TX | Healing Touch by Alina',
    description:
      'Schedule your massage in Frisco TX. Choose your service & book online. In-studio or mobile sessions — Mon–Wed 8AM–2:30PM, Thu–Fri 8AM–2:30PM & 3:45–5PM, Sat 10AM–3PM.',
    url: 'https://healingtouchbyalina.com/book',
  },
};

export default function BookPage() {
  return <BookPageClient />;
}
