'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, Heart, Leaf, Star, Shield, Users, ArrowRight } from 'lucide-react';

const certifications = [
  {
    icon: Award,
    title: 'Licensed Massage Therapist (LMT)',
    body: 'Texas Department of Licensing & Regulation',
    year: '2017',
  },
  {
    icon: Leaf,
    title: 'AMTA Professional Member',
    body: 'American Massage Therapy Association',
    year: '2017–Present',
  },
  {
    icon: Heart,
    title: 'Certified Prenatal Massage Therapist',
    body: 'Bodywork for the Childbearing Year',
    year: '2019',
  },
  {
    icon: Star,
    title: 'Hot Stone Massage Certification',
    body: 'LaStone Therapy Training Program',
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
    title: 'Continuing Education — 24 CEUs/yr',
    body: 'Ongoing advanced studies in myofascial release, sports massage & craniosacral therapy',
    year: 'Ongoing',
  },
];

const milestones = [
  { year: '2015', event: 'Began studying at the Texas Institute of Massage Therapy' },
  { year: '2017', event: 'Earned LMT license & joined AMTA' },
  { year: '2018', event: 'Launched Healing Touch by Alina as a mobile practice in Dallas' },
  { year: '2019', event: 'Completed prenatal massage certification' },
  { year: '2020', event: 'Added hot stone & aromatherapy specializations' },
  { year: '2022', event: 'Surpassed 500+ satisfied clients in the DFW area' },
  { year: '2024', event: 'Achieved 4.98★ average rating across 87 reviews' },
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
    addressLocality: 'Dallas',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  description:
    'Licensed massage therapist with 7+ years of experience serving Dallas TX and surrounding areas. Specializing in Swedish, deep tissue, hot stone, and prenatal massage. AMTA member.',
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
                  src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&q=85"
                  alt="Alina – Licensed Mobile Massage Therapist serving Dallas TX"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/30 to-transparent" />
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-3 gap-3 mt-5">
                {[
                  { value: '7+', label: 'Years' },
                  { value: '500+', label: 'Clients' },
                  { value: '4.98★', label: 'Rating' },
                ].map(s => (
                  <div key={s.label} className="bg-white rounded-2xl p-4 text-center shadow-card">
                    <div className="font-serif text-2xl font-bold text-sage-600">{s.value}</div>
                    <div className="text-sage-400 text-xs mt-0.5">{s.label}</div>
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
                  Growing up, I watched my mother find relief from chronic migraines through massage 
                  therapy, and that early experience planted a seed. I saw firsthand how skilled, 
                  compassionate touch could transform someone's quality of life — not just physically, 
                  but emotionally too. That seed grew into a calling.
                </p>
                <p>
                  I enrolled at the <strong className="text-sage-700">Texas Institute of Massage Therapy</strong> in 2015, 
                  graduating with honors and earning my Texas LMT license in 2017. From day one, I 
                  knew I wanted to bring this healing directly to people's homes — because the best 
                  massage is the one where you don't have to drive home afterward.
                </p>
                <p>
                  In 2018, I launched <strong className="text-sage-700">Healing Touch by Alina</strong> as a 
                  fully mobile practice serving Dallas, TX and surrounding areas. What started as 
                  a handful of clients through word of mouth has grown into a thriving practice 
                  with hundreds of satisfied clients across the DFW metroplex.
                </p>
                <p>
                  I hold advanced certifications in prenatal massage, hot stone therapy, and 
                  aromatherapy. I'm a proud member of the American Massage Therapy Association (AMTA) 
                  and complete 24+ continuing education credits each year to stay current with the 
                  latest research and techniques.
                </p>
                <p>
                  My philosophy is simple: every person who lies on my table deserves my full 
                  presence, genuine care, and expert attention. I don't rush. I don't cut corners. 
                  I treat each body as the unique, complex, and worthy thing it is.
                </p>
                <blockquote className="border-l-4 border-teal-300 pl-5 py-1 text-lg italic text-sage-500 font-light my-6">
                  "My goal is not just to help you feel better for an hour — it's to give your 
                  body the reset it needs to carry you through the week with more ease, energy, 
                  and joy."
                </blockquote>
                <p>
                  When I'm not working, you'll find me exploring Dallas's parks with my rescue dog 
                  Sage, practicing yoga, or tending to my small balcony herb garden. The healing 
                  arts are not just my profession — they are my life.
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
                  key={year}
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
              Book your first mobile massage session in Dallas today. I can't wait to work with you.
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
