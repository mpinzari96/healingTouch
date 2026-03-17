'use client';

import { Shield, Star, MapPin, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const trustItems = [
  { icon: Award, text: 'Licensed & Insured Therapist' },
  { icon: Star, text: '4.98 ★ Average Rating (87 reviews)' },
  { icon: MapPin, text: 'Serving Dallas & Surrounding Areas' },
  { icon: Shield, text: 'AMTA Member' },
  { icon: Clock, text: '7 Days a Week, 9AM–8PM' },
];

export function TrustBar() {
  return (
    <section
      className="bg-sage-500 py-4 overflow-hidden"
      aria-label="Trust and credentials"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 max-w-7xl mx-auto"
      >
        {trustItems.map(({ icon: Icon, text }, index) => (
          <div key={index} className="flex items-center gap-2 text-white/90">
            <Icon className="w-4 h-4 text-teal-200 flex-shrink-0" />
            <span className="text-sm font-medium whitespace-nowrap">{text}</span>
            {index < trustItems.length - 1 && (
              <span className="hidden lg:block ml-8 w-px h-4 bg-white/20" />
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
