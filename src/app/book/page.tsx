import type { Metadata } from 'next';
import { BookPageClient } from './BookPageClient';

export const metadata: Metadata = {
  title: 'Book a Mobile Massage in Dallas TX | Healing Touch by Alina',
  description:
    'Book your in-home massage session in Dallas TX with Healing Touch by Alina. Choose your service, date & time. Swedish, deep tissue, hot stone & prenatal massage available 7 days/week.',
  alternates: { canonical: 'https://healingtouchbyalina.com/book' },
  openGraph: {
    title: 'Book a Mobile Massage in Dallas TX | Healing Touch by Alina',
    description:
      'Schedule your in-home massage in Dallas TX. Choose date, service & time. I bring everything to you — available 7 days a week.',
    url: 'https://healingtouchbyalina.com/book',
  },
};

export default function BookPage() {
  return <BookPageClient />;
}
