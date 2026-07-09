'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Gift, ArrowRight } from 'lucide-react';

// NOTE: The "Purchase a Gift Card" CTA currently points to /contact.
// Once a gift card platform is set up (e.g. Square, Vagaro, or Mindbody),
// update `GIFT_CARD_URL` to the real purchase link.
const GIFT_CARD_URL = '/contact';

export function GiftCardsSection() {
  return (
    <section
      className="py-24 md:py-28 bg-cream"
      aria-labelledby="gift-cards-heading"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-sage-800 rounded-3xl overflow-hidden"
        >
          {/* Decorative accents */}
          <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-sage-700/50" />
          <div className="absolute -bottom-20 -right-10 w-48 h-48 rounded-full bg-teal-400/10" />

          <div className="relative p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/15 mb-6">
              <Gift className="w-7 h-7 text-teal-300" />
            </div>

            <p className="section-label text-teal-300 mb-4">Gift Cards</p>
            <h2
              id="gift-cards-heading"
              className="text-4xl md:text-5xl font-serif font-semibold text-white mb-6"
            >
              Give the Gift of Relaxation
            </h2>

            <p className="text-white/70 leading-relaxed max-w-2xl mx-auto mb-9 font-light">
              Treat your loved ones to a moment of peace, relaxation, and healing. A Healing Touch
              by Alina gift card is the perfect gift for birthdays, holidays, Mother&apos;s Day, or
              simply to show appreciation.
            </p>

            <Link
              href={GIFT_CARD_URL}
              className="btn-primary bg-white text-sage-700 hover:bg-beige-100 group inline-flex"
            >
              Purchase a Gift Card
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
