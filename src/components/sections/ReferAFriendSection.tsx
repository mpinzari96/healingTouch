'use client';

import { motion } from 'framer-motion';
import { Gift, Users } from 'lucide-react';

export function ReferAFriendSection() {
  return (
    <section
      className="py-24 md:py-28 bg-beige-100"
      aria-labelledby="refer-heading"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white rounded-3xl shadow-card overflow-hidden"
        >
          {/* Decorative accent */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-sage-50 rounded-full -translate-y-1/2 translate-x-1/3" />

          <div className="relative p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sage-50 mb-6">
              <Users className="w-7 h-7 text-sage-500" />
            </div>

            <p className="section-label mb-4">Share the Healing</p>
            <h2 id="refer-heading" className="section-title mb-6">
              Refer a Friend
            </h2>

            <p className="text-sage-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Nothing means more to me than your trust and recommendation. Share your experience
              with a friend — when they book and complete their first massage, you&apos;ll each
              receive $10 off. You get $10 off your next appointment, and they enjoy $10 off their
              first visit. It&apos;s my way of saying thank you for helping my practice grow.
            </p>

            {/* Highlight boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8">
              <div className="bg-sage-50 rounded-2xl p-5">
                <Gift className="w-5 h-5 text-teal-500 mx-auto mb-2" />
                <p className="font-serif text-2xl font-bold text-sage-700">$10 Off</p>
                <p className="text-sage-500 text-sm mt-1">For you — on your next appointment</p>
              </div>
              <div className="bg-sage-50 rounded-2xl p-5">
                <Gift className="w-5 h-5 text-teal-500 mx-auto mb-2" />
                <p className="font-serif text-2xl font-bold text-sage-700">$10 Off</p>
                <p className="text-sage-500 text-sm mt-1">For your friend — on their first visit</p>
              </div>
            </div>

            <p className="text-sage-400 text-xs max-w-md mx-auto">
              Offer valid for first-time clients only. Referral discount cannot be combined with
              other promotions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
