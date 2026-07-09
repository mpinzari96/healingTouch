'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Heart, Leaf } from 'lucide-react';

const credentials = [
  { icon: Award, label: 'Licensed Massage Therapist (LMT), Texas' },
  { icon: Leaf, label: 'AMTA Professional Member' },
  { icon: Heart, label: 'Specialized in Prenatal, Pediatric & Therapeutic' },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-cream"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(74,102,88,0.15)]">
              <Image
                src="/alina.png"
                alt="Alina – Licensed Massage Therapist in Frisco, TX"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-sage-800/30 via-transparent to-transparent" />
            </div>

            {/* Floating credential card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-card p-5 max-w-[200px]"
            >
              <div className="text-3xl font-serif font-bold text-sage-600 leading-none">Since 2019</div>
              <div className="text-sm text-sage-500 mt-1 leading-tight">Caring hands, real training</div>
              <div className="flex items-center gap-1.5 mt-2 text-xs text-sage-400">
                <Award className="w-3.5 h-3.5 text-sage-500" />
                <span>Texas LMT · AMTA</span>
              </div>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-beige-100 -z-10" />
            <div className="absolute top-1/2 -right-10 w-16 h-16 rounded-full bg-teal-400/10 -z-10" />
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <p className="section-label mb-4">Meet Your Therapist</p>
            <h2
              id="about-heading"
              className="section-title mb-6 text-balance"
            >
              A Healing Practice Built on
              <span className="block italic font-light text-sage-500 mt-1">
                Care & Connection
              </span>
            </h2>

            <div className="space-y-4 text-sage-600 leading-relaxed mb-8">
              <p>
                Hi, I'm <strong className="text-sage-700 font-semibold">Alina</strong> — a Licensed Massage Therapist 
                based in Frisco, Texas. My passion for healing through therapeutic touch began in 
                childhood, and I've been practicing massage since 2019.
              </p>
              <p>
                I began my formal training in Moldova, studying Classical, Pediatric, and Prenatal 
                Massage along with Cupping Therapy, then completed my Massage Therapy Program at the{' '}
                <em>Massage Institute of North Texas</em> in Flower Mound. I'm a proud member of the 
                American Massage Therapy Association (AMTA), combining international training with U.S. 
                education and standards.
              </p>
              <p>
                I offer sessions in my comfortable <strong className="text-sage-700">home studio</strong>{' '}
                and through <strong className="text-sage-700">mobile massage</strong> across Frisco, 
                Little Elm, McKinney, Prosper, and surrounding North Texas areas. Every session is 
                customized to your individual needs.
              </p>
              <p className="text-sage-500 italic font-light text-lg border-l-2 border-teal-300 pl-4">
                "Healing begins with caring hands."
              </p>
            </div>

            {/* Credentials */}
            <ul className="space-y-3 mb-8">
              {credentials.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-sage-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-sage-500" />
                  </div>
                  <span className="text-sage-700 text-sm font-medium">{label}</span>
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn-outline inline-flex group">
              My Full Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
