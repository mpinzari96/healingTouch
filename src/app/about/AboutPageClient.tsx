'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, Heart, Leaf, Star, Shield, Users, ArrowRight } from 'lucide-react';

const certifications = [
  {
    icon: Award,
    title: 'Licensed Massage Therapist (LMT), Texas',
    body: 'Officially licensed to practice massage therapy in Texas',
    year: '2026',
  },
  {
    icon: Award,
    title: 'Massage Therapy Program',
    body: 'Massage Institute of North Texas, Flower Mound, TX',
    year: '2025',
  },
  {
    icon: Award,
    title: 'Licensed Massage Therapist (LMT), Moldova',
    body: 'Licensed massage therapist trained in Moldova',
    year: '2019',
  },
  {
    icon: Star,
    title: 'Massage Therapy Training, Moldova',
    body: 'Classical, Pediatric & Prenatal Massage and Cupping Therapy',
    year: '2019',
  },
  {
    icon: Leaf,
    title: 'AMTA Professional Member',
    body: 'American Massage Therapy Association',
    year: '2025–Present',
  },
  {
    icon: Heart,
    title: 'Certified Prenatal Massage Therapist',
    body: 'Sancos Clinic, Moldova',
    year: '2019',
  },
  {
    icon: Star,
    title: 'Hot Stone Massage Certification',
    body: 'Certified in hot stone massage technique',
    year: '2020',
  },
  {
    icon: Shield,
    title: 'CPR & First Aid Certified',
    body: 'American Red Cross',
    year: 'Current',
  },
  {
    icon: Users,
    title: 'Continuing Education — 12 CEUs/yr',
    body: 'Ongoing continuing education to stay current with best practices',
    year: 'Ongoing',
  },
];

const milestones = [
  { year: '2019', event: 'Began formal massage training in Moldova — Classical, Pediatric, Prenatal Massage & Cupping Therapy' },
  { year: '2019', event: 'Earned LMT license in Moldova and began working with clients' },
  { year: '2023', event: 'Moved to Texas to continue building a career in massage therapy' },
  { year: '2025', event: 'Completed the Massage Therapy Program at the Massage Institute of North Texas (Flower Mound)' },
  { year: '2026', event: 'Became a Licensed Massage Therapist (LMT) in Texas' },
  { year: '2026', event: 'Launched Healing Touch by Alina — home studio & mobile sessions across North Texas' },
];

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alina',
  jobTitle: 'Licensed Massage Therapist',
  worksFor: {
    '@type': 'LocalBusiness',
    name: 'Healing Touch by Alina',
    url: 'https://healingtouchbyalina.com',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Frisco',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  description:
    'Licensed Massage Therapist serving Frisco TX and North Texas since 2019. Internationally and U.S.-trained, specializing in therapeutic, relaxation, prenatal, pediatric, and CBD oil massage. AMTA member offering in-studio and mobile sessions.',
};

export function AboutPageClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* Page hero */}
      <section className="relative pt-40 pb-20 bg-beige-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sage-50 rounded-l-[80px]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-label mb-4"
          >
            About Alina
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-semibold text-sage-800 mb-5"
          >
            The Therapist Behind
            <span className="block italic font-light text-sage-400 mt-2">
              Healing Touch
            </span>
          </motion.h1>
        </div>
      </section>

      {/* Main bio */}
      <section className="py-24 bg-cream" aria-labelledby="bio-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Photo column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-2"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(74,102,88,0.15)]">
                <Image
                  src="/alina.png"
                  alt="Alina – Licensed Massage Therapist serving Frisco TX"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/30 to-transparent" />
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-3 gap-3 mt-5">
                {[
                  { value: '2019', label: 'Practicing Since' },
                  { value: 'LMT', label: 'TX Licensed' },
                  { value: 'Studio & Mobile', label: 'Sessions' },
                ].map(s => (
                  <div key={s.label} className="bg-white rounded-2xl p-4 text-center shadow-card">
                    <div className="font-serif text-lg font-bold text-sage-600 leading-tight">{s.value}</div>
                    <div className="text-sage-400 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Text column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-3"
            >
              <h2 id="bio-heading" className="section-title mb-8">
                My Story
              </h2>

              <div className="space-y-5 text-sage-600 leading-relaxed mb-10">
                <p>
                  My passion for massage therapy began in childhood, inspired by my family's 
                  experience with healing through therapeutic touch. I saw firsthand how massage 
                  could bring real relief, especially when my younger brother needed ongoing care 
                  for health challenges. That experience showed me the true power of natural, 
                  hands-on healing.
                </p>
                <p>
                  Motivated by those results, I decided to pursue massage therapy as my profession. 
                  I began my formal training in <strong className="text-sage-700">Moldova in 2019</strong>, 
                  where I studied Classical Massage, Pediatric Massage, Prenatal Massage, and Cupping 
                  Therapy. This foundation gave me hands-on experience working with clients and 
                  helping them reduce pain, improve mobility, and support their overall well-being.
                </p>
                <p>
                  After moving to Texas, I completed my Massage Therapy Program at the{' '}
                  <strong className="text-sage-700">Massage Institute of North Texas</strong> in 
                  Flower Mound. I continued to develop my skills and deepened my understanding of 
                  professional standards in the United States.
                </p>
                <p>
                  In <strong className="text-sage-700">2026</strong>, I became a Licensed Massage 
                  Therapist (LMT) in Texas, officially beginning my professional practice here.
                </p>
                <p>
                  Today, I combine my international training and U.S. education to provide safe, 
                  personalized, and effective massage therapy. I offer services in my home studio 
                  and through mobile massage sessions across Frisco, Little Elm, McKinney, Prosper, 
                  and surrounding North Texas areas. Every session is customized to your individual 
                  needs — whether you are dealing with stress, muscle tension, chronic pain, or 
                  simply need time to relax and recharge.
                </p>
                <blockquote className="border-l-4 border-teal-300 pl-5 py-1 text-lg italic text-sage-500 font-light my-6">
                  "Healing begins with caring hands."
                </blockquote>
                <p>
                  My mission is to help you feel better in your body, more relaxed in your mind, 
                  and supported in your overall well-being. When I'm not working, I spend my free 
                  time with my daughter and my husband, enjoying family moments and staying 
                  connected to what matters most to me.
                </p>
              </div>

              <Link href="/book" className="btn-primary group inline-flex">
                Book a Session with Alina
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-beige-100" aria-labelledby="certs-heading">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="section-label mb-4">Credentials</p>
            <h2 id="certs-heading" className="section-title">
              Training & Certifications
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map(({ icon: Icon, title, body, year }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-sage-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-sage-500" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-sage-800 text-base leading-tight mb-1">
                    {title}
                  </h3>
                  <p className="text-sage-500 text-xs leading-relaxed">{body}</p>
                  <p className="text-teal-500 text-xs font-medium mt-2">{year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-cream" aria-labelledby="timeline-heading">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="section-label mb-4">The Journey</p>
            <h2 id="timeline-heading" className="section-title">
              Milestones
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-2 bottom-2 w-px bg-sage-100" />

            <div className="space-y-8">
              {milestones.map(({ year, event }, i) => (
                <motion.div
                  key={`${year}-${i}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex gap-6 items-start"
                >
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-sage-200 flex items-center justify-center shadow-sm z-10">
                    <span className="text-sage-500 font-serif font-semibold text-xs">{year.slice(2)}</span>
                  </div>
                  <div className="pt-3">
                    <span className="text-teal-500 font-semibold text-sm">{year}</span>
                    <p className="text-sage-600 text-sm leading-relaxed mt-0.5">{event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sage-800">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-semibold text-white mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-sage-300 mb-8 font-light text-lg">
              Book your first massage session in Frisco today — in my home studio or at your location. I can't wait to work with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="btn-primary bg-white text-sage-700 hover:bg-beige-100">
                Book Now
              </Link>
              <Link href="/contact" className="btn-outline border-white/40 text-white hover:bg-white/10">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
