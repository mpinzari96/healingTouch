'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock, DollarSign, Plus, Minus, CheckCircle, ArrowRight,
  Leaf, Flame, Baby, Zap, Star, Wind
} from 'lucide-react';

/* ─── DATA ─────────────────────────────────────────── */

const services = [
  {
    id: 'swedish',
    name: 'Swedish Massage',
    icon: Wind,
    tagline: 'The Classic Relaxation Experience',
    price: { '60': 110, '75': 130, '90': 150 },
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900&q=85',
    tag: 'Most Popular',
    tagColor: 'bg-teal-500',
    description:
      'Swedish massage is the cornerstone of relaxation therapy. Using long, gliding strokes (effleurage), kneading (petrissage), and gentle rhythmic tapping (tapotement), this modality works to melt tension from the surface muscles while calming the nervous system.',
    benefits: [
      'Reduces stress hormones (cortisol)',
      'Improves blood circulation throughout the body',
      'Eases muscle tension and soreness',
      'Promotes deep, restful sleep',
      'Boosts immune system function',
      'Perfect for first-time massage clients',
    ],
    ideal: 'Anyone seeking relaxation, stress relief, or a first massage experience.',
  },
  {
    id: 'deep-tissue',
    name: 'Deep Tissue Massage',
    icon: Zap,
    tagline: 'Targeted Relief for Chronic Tension',
    price: { '60': 130, '75': 155, '90': 175 },
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=85',
    tag: 'Therapeutic',
    tagColor: 'bg-sage-500',
    description:
      'Deep tissue massage uses slow, deliberate strokes and firm pressure to reach the deeper layers of muscle and connective tissue (fascia). It\'s particularly effective for chronically tense areas, adhesions, and postural problems that form from repetitive movement or injury.',
    benefits: [
      'Breaks up scar tissue and muscle adhesions',
      'Relieves chronic back, neck, and shoulder pain',
      'Reduces inflammation and improves mobility',
      'Accelerates recovery after athletic activity',
      'Lowers blood pressure',
      'Treats repetitive strain injuries',
    ],
    ideal: 'Athletes, office workers, or anyone with chronic muscle pain or tension.',
  },
  {
    id: 'hot-stone',
    name: 'Hot Stone Massage',
    icon: Flame,
    tagline: 'Ancient Warmth, Modern Healing',
    price: { '75': 150, '90': 175 },
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=900&q=85',
    tag: 'Luxurious',
    tagColor: 'bg-gold-500',
    description:
      'Smooth basalt volcanic stones are heated to the perfect temperature and used as an extension of my hands — gliding along muscle groups, placed at key energy centers, and used to melt away even the deepest tension. The heat penetrates 3–4 times deeper than manual pressure alone.',
    benefits: [
      'Heat penetrates deeply into muscle tissue',
      'Dramatically reduces muscle spasms',
      'Improves circulation and lymphatic flow',
      'Promotes a profound sense of calm',
      'Balances energy and restores equilibrium',
      'Exceptional stress and anxiety relief',
    ],
    ideal: 'Anyone needing deep relaxation, especially in colder months or those with muscle stiffness.',
  },
  {
    id: 'prenatal',
    name: 'Prenatal Massage',
    icon: Baby,
    tagline: 'Nurturing Care for Expecting Mothers',
    price: { '60': 120, '75': 140, '90': 160 },
    image: 'https://images.unsplash.com/photo-1601983578764-b9b6ce3da5cb?w=900&q=85',
    tag: 'Specialist',
    tagColor: 'bg-teal-400',
    description:
      'Specifically designed for expecting mothers from the second trimester onward, prenatal massage uses side-lying positioning with supportive bolsters to ensure complete comfort and safety. Gentle, targeted techniques address the unique discomforts of pregnancy.',
    benefits: [
      'Reduces back, hip, and joint pain',
      'Decreases swelling in legs and feet',
      'Lowers stress hormones for healthier pregnancy',
      'Improves sleep quality',
      'Reduces anxiety and depression symptoms',
      'Certified safe from 2nd trimester onward',
    ],
    ideal: 'Expectant mothers from second trimester through late pregnancy.',
  },
  {
    id: 'sports',
    name: 'Sports Massage',
    icon: Zap,
    tagline: 'Performance, Recovery & Prevention',
    price: { '60': 135, '75': 160, '90': 180 },
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=85',
    tag: null,
    tagColor: '',
    description:
      'Sports massage combines several techniques including deep tissue, stretching, and compression to address the specific needs of athletes. Whether pre-event, post-event, or for general maintenance, sports massage keeps your body performing at its peak.',
    benefits: [
      'Reduces DOMS (delayed onset muscle soreness)',
      'Increases flexibility and range of motion',
      'Prevents sport-related injuries',
      'Speeds up recovery between training sessions',
      'Improves athletic performance',
      'Treats existing sports injuries',
    ],
    ideal: 'Athletes, runners, gym enthusiasts, and active individuals.',
  },
  {
    id: 'couples',
    name: 'Couples Massage',
    icon: Leaf,
    tagline: 'Shared Relaxation, Twice the Bliss',
    price: { '60': 220, '75': 260, '90': 295 },
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=900&q=85',
    tag: 'Special',
    tagColor: 'bg-rose-400',
    description:
      'Experience the joy of relaxing together. I partner with a trusted colleague to provide simultaneous massages in your home for you and your partner (or friend). Perfect for date nights, anniversaries, or simply sharing the gift of healing with someone you love.',
    benefits: [
      'Simultaneous massage for two people',
      'Strengthens bond through shared experience',
      'Customizable — each person gets their preferred style',
      'Perfect for special occasions',
      'Private, comfortable home setting',
      'Romantic and relaxing atmosphere',
    ],
    ideal: 'Couples, best friends, or anyone wanting to share a spa experience.',
  },
];

const faqs = [
  {
    q: 'Do you travel to my location in Dallas and surrounding cities?',
    a: 'Yes! I\'m a fully mobile massage therapist serving Dallas and surrounding areas including Plano, Frisco, McKinney, Richardson, Garland, Irving, Carrollton, Allen, and more. A small travel fee may apply for locations 20+ miles from central Dallas. Please contact me to confirm service in your area.',
  },
  {
    q: 'What should I expect during my first in-home massage session?',
    a: 'I\'ll arrive 10–15 minutes before your session to set up my professional massage table, arrange soft lighting and ambient music, and prepare your space. We\'ll have a brief intake conversation about your health history, problem areas, and goals. Then you\'ll have privacy to undress to your comfort level and lie on the table under soft, high-quality linens. After the session, I\'ll give you water and time to rest before packing up and leaving quietly.',
  },
  {
    q: 'What do I need to provide for the massage?',
    a: 'Absolutely nothing! I bring everything — a professional portable massage table, fresh linens and face cradle cover, premium organic massage oils and lotions, an aromatherapy diffuser, ambient music, and all necessary equipment. You just need to provide a clear space about 7x10 feet for the table.',
  },
  {
    q: 'What is your cancellation and rescheduling policy?',
    a: 'I ask for at least 24 hours notice for cancellations or rescheduling. Cancellations with less than 24 hours notice may be subject to a 50% cancellation fee. No-shows are charged the full session rate. I understand that life happens — please just reach out as soon as possible and I\'ll always try to work with you.',
  },
  {
    q: 'Is massage therapy safe during pregnancy?',
    a: 'Yes, prenatal massage is safe from the second trimester (14+ weeks) onward when performed by a certified therapist. I use specialized side-lying positioning with supportive bolsters designed for pregnant clients. I recommend consulting your OB/GYN before booking, especially if you have a high-risk pregnancy. I do not perform massage in the first trimester.',
  },
  {
    q: 'How do I pay for my massage session?',
    a: 'I accept cash, all major credit and debit cards, Venmo, Zelle, and Apple Pay. Payment is collected at the time of service. Tips are always appreciated but never required.',
  },
  {
    q: 'How often should I get a massage?',
    a: 'For general wellness and stress management, once or twice a month is ideal. For chronic pain or injury recovery, I may recommend weekly sessions initially. Athletes often benefit from bi-weekly sessions around training cycles. During your first session, I\'ll assess your needs and recommend a personalized treatment frequency.',
  },
  {
    q: 'Do you offer gift certificates?',
    a: 'Yes! Gift certificates are available for any service or dollar amount. They make perfect gifts for holidays, birthdays, baby showers, or any special occasion. Contact me to purchase via text or email and I\'ll send a beautiful digital gift certificate within 24 hours.',
  },
];

/* ─── COMPONENTS ─────────────────────────────────────── */

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon;
  const durations = Object.keys(service.price) as string[];

  return (
    <motion.article
      id={service.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-400 group"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.name} – mobile massage in Dallas TX by Healing Touch by Alina`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sage-900/60 via-transparent to-transparent" />

        {/* Tag */}
        {service.tag && (
          <div className={`absolute top-4 left-4 px-3 py-1 ${service.tagColor} text-white text-xs font-semibold rounded-full tracking-wide`}>
            {service.tag}
          </div>
        )}

        {/* Icon */}
        <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/25">
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Body */}
      <div className="p-7">
        <h2 className="font-serif text-2xl font-semibold text-sage-800 mb-1" itemProp="name">
          {service.name}
        </h2>
        <p className="text-teal-500 text-sm font-medium mb-4">{service.tagline}</p>
        <p className="text-sage-500 text-sm leading-relaxed mb-6" itemProp="description">
          {service.description}
        </p>

        {/* Benefits */}
        <div className="mb-6">
          <h3 className="font-serif text-base font-semibold text-sage-700 mb-3">Benefits</h3>
          <ul className="space-y-2">
            {service.benefits.map(b => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-sage-500">
                <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Ideal for */}
        <p className="text-xs text-sage-400 italic border-t border-sage-50 pt-4 mb-5">
          <span className="font-semibold not-italic text-sage-500">Ideal for:</span> {service.ideal}
        </p>

        {/* Pricing */}
        <div className="bg-beige-100 rounded-2xl p-4 mb-5">
          <p className="text-xs font-semibold text-sage-500 uppercase tracking-wider mb-3">Pricing</p>
          <div className="flex flex-wrap gap-3">
            {durations.map(dur => (
              <div
                key={dur}
                className="flex items-center gap-2"
                itemProp="offers"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <div className="flex items-center gap-1 text-sage-400 text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{dur} min</span>
                </div>
                <span className="text-sage-700 font-semibold font-serif text-lg">
                  <span itemProp="price">${service.price[dur as keyof typeof service.price]}</span>
                  <meta itemProp="priceCurrency" content="USD" />
                </span>
              </div>
            ))}
          </div>
        </div>

        <Link href="/book" className="btn-primary w-full justify-center group/btn">
          Book {service.name}
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </motion.article>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border-b border-sage-100 last:border-0"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span
          className="font-serif text-lg font-medium text-sage-800 group-hover:text-sage-600 transition-colors duration-200"
          itemProp="name"
        >
          {q}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          open ? 'bg-sage-500 text-white' : 'bg-sage-50 text-sage-400 group-hover:bg-sage-100'
        }`}>
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <p className="pb-5 text-sage-500 leading-relaxed text-sm" itemProp="text">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── PAGE ─────────────────────────────────────────── */

const servicesPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export function ServicesPageClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageSchema) }}
      />

      {/* Page hero */}
      <section className="relative pt-40 pb-20 bg-sage-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1400&q=70"
            alt="Massage therapy services background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-label text-teal-300 mb-4"
          >
            Services & Pricing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-semibold text-white mb-5"
          >
            Mobile Massage Services
            <span className="block italic font-light text-white/65 text-4xl md:text-5xl mt-2">
              Delivered to You in Dallas, TX
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto font-light"
          >
            Every service is fully mobile — I bring my professional table, oils, linens, and 
            ambience directly to your Dallas home or office. All sessions are customized to your needs.
          </motion.p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-cream" aria-labelledby="services-grid-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="services-grid-heading" className="sr-only">
            All massage therapy services in Dallas TX
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-on note */}
      <section className="py-16 bg-beige-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-4">Custom Sessions</p>
            <h2 className="section-title mb-4">Make It Yours</h2>
            <p className="section-subtitle max-w-xl mx-auto mb-8">
              All sessions are available in 60, 75, or 90-minute durations. 
              Add-ons like aromatherapy enhancements, CBD oil upgrade, or targeted focus areas 
              can be requested when booking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="btn-primary">Book Your Session</Link>
              <Link href="/contact" className="btn-outline">Ask a Question</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-cream" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="section-label mb-4">Have Questions?</p>
            <h2 id="faq-heading" className="section-title mb-4">
              Frequently Asked Questions
            </h2>
            <p className="section-subtitle">
              Everything you need to know about booking a mobile massage therapist in Dallas, TX.
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-card px-6 md:px-10 py-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-10"
          >
            <p className="text-sage-500 text-sm mb-4">Still have questions?</p>
            <Link href="/contact" className="btn-outline">
              Contact Alina
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
