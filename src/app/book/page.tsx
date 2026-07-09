import type { Metadata } from 'next';
import { BookPageClient } from './BookPageClient';

export const metadata: Metadata = {
  title: 'Book a Massage in Frisco TX | Healing Touch by Alina',
  description:
    'Book your massage session in Frisco TX with Healing Touch by Alina. Choose your service, date & time. Therapeutic, relaxation, prenatal, pediatric & CBD oil massage — in-studio or mobile, 7 days/week.',
  alternates: { canonical: 'https://healingtouchbyalina.com/book' },
  openGraph: {
    title: 'Book a Massage in Frisco TX | Healing Touch by Alina',
    description:
      'Schedule your massage in Frisco TX. Choose date, service & time. In-studio or mobile sessions — available 7 days a week.',
    url: 'https://healingtouchbyalina.com/book',
  },
};

export default function BookPage() {
  return <BookPageClient />;
}
