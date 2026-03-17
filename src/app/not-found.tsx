import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 – Page Not Found | Healing Touch by Alina',
  description: 'This page could not be found. Return to Healing Touch by Alina homepage.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6 py-20 pt-36">
      <div className="text-center max-w-md">
        <div className="text-8xl font-serif font-bold text-sage-100 mb-4">404</div>
        <h1 className="text-3xl font-serif font-semibold text-sage-800 mb-4">
          Page Not Found
        </h1>
        <p className="text-sage-500 mb-8 leading-relaxed">
          This page doesn't exist or may have moved. 
          Let's get you back to relaxation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">Go Home</Link>
          <Link href="/book" className="btn-outline">Book a Session</Link>
        </div>
      </div>
    </div>
  );
}
