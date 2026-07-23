'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle, Phone, Mail, MessageSquare,
  Clock, Home, Sparkles, MapPin, ExternalLink
} from 'lucide-react';

/* ─── CONSTANTS ──────────────────────────────────────── */

type Variant = { label: string; price: string; url: string };
type CalEvent = {
  category: string;
  description: string;
  note?: string;
  variants: Variant[];
};

const CAL_EVENTS: CalEvent[] = [
  {
    category: 'Therapeutic Massage',
    description: 'Targeted pressure to relieve muscle tension, chronic pain, and improve mobility. Customized to your needs.',
    variants: [
      { label: '60 min', price: '$110', url: 'https://cal.com/healing-touch-sz2qfd/therapeutic-massage-60-min-110' },
      { label: '90 min', price: '$150', url: 'https://cal.com/healing-touch-sz2qfd/therapeutic-massage-90-min-150' },
      { label: '120 min', price: '$190', url: 'https://cal.com/healing-touch-sz2qfd/therapeutic-massage-120-min-190' },
    ],
  },
  {
    category: 'Relaxation Massage',
    description: 'Gentle, flowing strokes designed to calm the nervous system, melt stress, and restore a sense of peace.',
    variants: [
      { label: '60 min', price: '$100', url: 'https://cal.com/healing-touch-sz2qfd/relaxation-massage-60-min-100' },
      { label: '90 min', price: '$145', url: 'https://cal.com/healing-touch-sz2qfd/relaxation-massage-90-min-145' },
      { label: '120 min', price: '$180', url: 'https://cal.com/healing-touch-sz2qfd/relaxation-massage-120-min-180' },
    ],
  },
  {
    category: 'Prenatal Massage',
    description: 'Safe, nurturing care for expectant mothers from the second trimester onward. Eases pregnancy discomforts and promotes deep relaxation.',
    variants: [
      { label: '60 min', price: '$110', url: 'https://cal.com/healing-touch-sz2qfd/prenatal-massage-60-min-110' },
      { label: '90 min', price: '$130', url: 'https://cal.com/healing-touch-sz2qfd/prenatal-massage-90-min-130' },
    ],
  },
  {
    category: 'Pediatric Massage',
    description: 'Gentle massage for children ages 1–12. Parent or guardian must be present. Supports relaxation, sleep, and healthy development.',
    note: 'Parent/guardian consent & presence required',
    variants: [
      { label: '30 min', price: '$50', url: 'https://cal.com/healing-touch-sz2qfd/pediatric-massage-1-12-30-min-50' },
      { label: '45 min', price: '$70', url: 'https://cal.com/healing-touch-sz2qfd/pediatric-massage-1-12-30-min-60' },
      { label: '60 min', price: '$80', url: 'https://cal.com/healing-touch-sz2qfd/pediatric-massage-1-12-60-min-80' },
    ],
  },
  {
    category: 'Infant Massage',
    description: 'A parent-guided educational session teaching you how to massage your infant to support bonding, sleep, and colic relief.',
    note: 'Parent-guided educational session',
    variants: [
      { label: '30 min', price: '$50', url: 'https://cal.com/healing-touch-sz2qfd/infant-massage-parent-guided-30-min-55' },
    ],
  },
  {
    category: 'CBD Oil Massage',
    description: 'All the benefits of therapeutic massage enhanced with premium CBD oil to reduce inflammation, ease tension, and deepen relaxation.',
    variants: [
      { label: '35 min', price: '$90', url: 'https://cal.com/healing-touch-sz2qfd/cbd-oil-massage-35-min-90' },
      { label: '60 min', price: '$125', url: 'https://cal.com/healing-touch-sz2qfd/cbd-oil-massage-60-min-125' },
      { label: '90 min', price: '$160', url: 'https://cal.com/healing-touch-sz2qfd/cbd-oil-massage-90-min-160' },
      { label: '120 min', price: '$190', url: 'https://cal.com/healing-touch-sz2qfd/cbd-oil-massage-120-min-190' },
    ],
  },
];

/* ─── SERVICE CARD ───────────────────────────────────── */

function ServiceCard({ event, index }: { event: CalEvent; index: number }) {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedVariant = selected !== null ? event.variants[selected] : null;

  const handleBook = () => {
    if (selectedVariant) {
      window.open(selectedVariant.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="card-base p-7 flex flex-col"
    >
      <h2 className="font-serif text-2xl font-semibold text-sage-800">{event.category}</h2>
      <p className="text-sage-500 text-sm mt-2 leading-relaxed">{event.description}</p>

      {event.note && (
        <span className="inline-flex self-start items-center mt-3 px-3 py-1 bg-sage-50 text-sage-400 text-xs rounded-full">
          {event.note}
        </span>
      )}

      {/* Duration / price pills */}
      <div className="flex flex-wrap gap-2 mt-5 mb-6">
        {event.variants.map((variant, i) => {
          const isActive = selected === i;
          return (
            <button
              key={variant.label}
              type="button"
              onClick={() => setSelected(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-sage-500 text-white shadow-sm'
                  : 'border border-sage-200 text-sage-600 hover:border-sage-300 hover:bg-sage-50'
              }`}
            >
              {variant.label} · {variant.price}
            </button>
          );
        })}
      </div>

      {/* Book button */}
      <button
        type="button"
        onClick={handleBook}
        disabled={!selectedVariant}
        className="btn-primary w-full justify-center mt-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:hover:bg-sage-500"
      >
        {selectedVariant ? (
          <>Book This Session <ExternalLink className="w-4 h-4" /></>
        ) : (
          'Select a Duration Above'
        )}
      </button>
    </motion.div>
  );
}

/* ─── PAGE ─────────────────────────────────────────────── */

export function BookPageClient() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-40 pb-16 bg-sage-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #4A8A8A 0%, transparent 60%), radial-gradient(circle at 80% 20%, #C9A84C 0%, transparent 50%)' }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="section-label text-teal-300 mb-4">
            Massage in Frisco TX
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-semibold text-white mb-4">
            Book Your Session
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg font-light">
            Choose your service and duration below to reserve your time instantly.
          </motion.p>

          {/* Trust row */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-5 mt-8">
            {[
              { icon: Home, text: 'In-Studio or Mobile' },
              { icon: Clock, text: 'Mon–Fri 8:30–2:30 · Sat 9–3' },
              { icon: CheckCircle, text: 'Licensed & Insured' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/65 text-sm">
                <Icon className="w-4 h-4 text-teal-300 flex-shrink-0" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Booking area */}
      <section className="py-20 bg-beige-100" aria-labelledby="book-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="book-heading" className="sr-only">Book a massage session</h2>

          {/* Section 1 — Enhancements notice */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-teal-50 border border-teal-200 rounded-2xl px-5 py-4 mb-10 flex items-start gap-3"
          >
            <Sparkles className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
            <p className="text-teal-700 text-sm leading-relaxed">
              Add any enhancement to your session for just <strong>$10 each</strong> — Cupping Therapy,
              Aromatherapy, Hot Stone, Scalp Massage, Hydrating Face Mask, Cooling Eye Mask, or Foot Mask.
              Just mention it when booking.
            </p>
          </motion.div>

          {/* Section 2 — Service cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAL_EVENTS.map((event, i) => (
              <ServiceCard key={event.category} event={event} index={i} />
            ))}
          </div>

          {/* Section 3 — Mobile massage note */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-beige-100 border border-sage-200 rounded-2xl px-6 py-5 mt-10 flex items-start gap-3"
          >
            <MapPin className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" />
            <p className="text-sage-600 text-sm leading-relaxed">
              <strong className="text-sage-700">Mobile Massage Available</strong> — I come to you in Frisco,
              Little Elm, McKinney, Prosper, Allen, Plano &amp; surrounding North Texas areas. Travel fee
              starting at $25 based on distance.
            </p>
          </motion.div>

          {/* Section 4 — Bottom contact row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-sage-400 text-sm mb-4">Prefer to book directly?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:[PHONE]"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-sage-200 text-sage-600 text-sm hover:bg-sage-50 transition-colors duration-200">
                <Phone className="w-4 h-4" /> 916-261-5342
              </a>
              <a href="sms:[PHONE]"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-sage-200 text-sage-600 text-sm hover:bg-sage-50 transition-colors duration-200">
                <MessageSquare className="w-4 h-4" /> Text Alina
              </a>
              <a href="mailto:Healingtouchbyalina@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-sage-200 text-sage-600 text-sm hover:bg-sage-50 transition-colors duration-200">
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
