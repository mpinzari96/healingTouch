'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Heart, Leaf } from 'lucide-react';

const credentials = [
  { icon: Award, label: 'Licensed Massage Therapist (LMT)' },
  { icon: Leaf, label: 'AMTA Member Since 2017' },
  { icon: Heart, label: 'Specialized in Prenatal & Therapeutic' },
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
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&q=85"
                alt="Alina – Licensed Mobile Massage Therapist in Dallas, TX"
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
              <div className="text-3xl font-serif font-bold text-sage-600 leading-none">7+</div>
              <div className="text-sm text-sage-500 mt-1 leading-tight">Years of healing experience</div>
              <div className="flex gap-0.5 mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 fill-gold-400 text-gold-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
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
                based in Dallas, Texas, with over 7 years of experience helping clients find relief, 
                relaxation, and restoration through therapeutic touch.
              </p>
              <p>
                I graduated from the <em>Texas Institute of Massage Therapy</em> and hold advanced 
                certifications in Swedish relaxation, deep tissue, prenatal massage, and hot stone 
                therapy. I'm a proud member of the American Massage Therapy Association (AMTA) and 
                committed to the highest ethical and professional standards.
              </p>
              <p>
                My practice is entirely <strong className="text-sage-700">mobile</strong> — I bring 
                everything you need for a complete spa experience directly to your Dallas home, 
                hotel room, or office. No commute, no parking, no stress. Just pure healing from 
                the moment I arrive to the moment I leave.
              </p>
              <p className="text-sage-500 italic font-light text-lg border-l-2 border-teal-300 pl-4">
                "I believe everyone deserves access to quality, therapeutic massage — right where they feel most comfortable."
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
