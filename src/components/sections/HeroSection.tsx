'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, MapPin } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero – Healing Touch by Alina mobile massage therapist Dallas"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1920&q=85"
          alt="Calming massage therapy session – Healing Touch by Alina, Dallas TX"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 hero-bg" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Decorative bokeh dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${[80, 120, 60, 100, 70, 90][i]}px`,
              height: `${[80, 120, 60, 100, 70, 90][i]}px`,
              left: `${[10, 80, 25, 65, 45, 90][i]}%`,
              top: `${[20, 60, 80, 15, 50, 40][i]}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + i * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-8"
        >
          <MapPin className="w-3.5 h-3.5" />
          Serving Dallas, TX & Surrounding Areas
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl font-serif font-semibold text-white leading-[1.08] tracking-tight text-balance mb-7"
        >
          Healing Touch
          <span className="block font-light italic text-4xl sm:text-5xl md:text-6xl mt-1 text-white/85">
            by Alina
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl sm:text-2xl text-white/80 font-light max-w-2xl mx-auto mb-10 text-balance leading-relaxed"
        >
          Mobile Massage Therapist in Dallas, TX
          <span className="block text-lg mt-2 text-white/65">
            Relax · Restore · Rejuvenate — at Your Home or Office
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/book"
            className="group px-8 py-4 bg-white text-sage-700 rounded-full font-semibold text-base tracking-wide transition-all duration-300 hover:bg-beige-100 hover:shadow-[0_8px_32px_rgba(255,255,255,0.3)] hover:-translate-y-1 flex items-center gap-2"
          >
            Book Your Appointment
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 border-2 border-white/40 text-white rounded-full font-medium text-base tracking-wide transition-all duration-300 hover:border-white/70 hover:bg-white/10 backdrop-blur-xs hover:-translate-y-0.5"
          >
            View Services & Pricing
          </Link>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-14"
        >
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Shield className="w-4 h-4 text-teal-300" />
            Licensed & Insured
          </div>
          <span className="hidden sm:block w-px h-4 bg-white/20" />
          <div className="flex items-center gap-1.5 text-white/70 text-sm">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
            ))}
            <span className="ml-1">4.98 Average Rating</span>
          </div>
          <span className="hidden sm:block w-px h-4 bg-white/20" />
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <MapPin className="w-4 h-4 text-teal-300" />
            I Come To You
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-[0.15em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
