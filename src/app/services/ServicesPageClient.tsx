'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock, Plus, Minus, CheckCircle, ArrowRight, MapPin, Sparkles,
  Leaf, Baby, Zap, Star, Wind
} from 'lucide-react';

/* ─── DATA ─────────────────────────────────────────── */

const services = [
  {
    id: 'therapeutic',
    name: 'Therapeutic Massage',
    icon: Zap,
    tagline: 'Targeted Relief for Pain & Tension',
    price: { '60': 110, '90': 150, '120': 190 },
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=85',
    tag: 'Most Popular',
    tagColor: 'bg-teal-500',
    description:
      'Focused, results-driven bodywork that combines firm pressure and proven techniques to release chronic muscle tension, ease pain, and improve mobility. Ideal when you have specific problem areas that need attention.',
    benefits: [
      'Relieves chronic back, neck, and shoulder pain',
      'Releases deep muscle tension and knots',
      'Improves range of motion and mobility',
      'Reduces inflammation and soreness',
      'Supports recovery from everyday strain',
      'Customized to your specific problem areas',
    ],
    ideal: 'Anyone dealing with chronic pain, muscle tightness, or postural tension.',
    note: null,
  },
  {
    id: 'relaxation',
    name: 'Relaxation Massage',
    icon: Wind,
    tagline: 'Calm the Body, Quiet the Mind',
    price: { '60': 100, '90': 145, '120': 180 },
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900&q=85',
    tag: null,
    tagColor: '',
    description:
      'Gentle, flowing strokes designed to calm the nervous system, melt away stress, and restore balance. A soothing, full-body experience perfect for unwinding and recharging.',
    benefits: [
      'Reduces stress hormones (cortisol)',
      'Improves circulation throughout the body',
      'Eases everyday muscle tension',
      'Promotes deep, restful sleep',
      'Calms the mind and lifts mood',
      'Perfect for first-time massage clients',
    ],
    ideal: 'Anyone seeking stress relief, relaxation, or a first massage experience.',
    note: null,
  },
  {
    id: 'prenatal',
    name: 'Prenatal Massage',
    icon: Baby,
    tagline: 'Nurturing Care for Expecting Mothers',
    price: { '60': 110, '90': 130 },
    image: 'https://images.unsplash.com/photo-1457342813143-a1ae27448a82',
    tag: 'Specialist',
    tagColor: 'bg-teal-400',
    description:
      'Specially designed for expecting mothers, prenatal massage uses side-lying positioning with supportive bolsters to ensure complete comfort and safety. Gentle, targeted techniques address the unique discomforts of pregnancy.',
    benefits: [
      'Reduces back, hip, and joint pain',
      'Decreases swelling in legs and feet',
      'Lowers stress for a healthier pregnancy',
      'Improves sleep quality',
      'Eases anxiety and tension',
      'Safe, supportive positioning throughout',
    ],
    ideal: 'Expectant mothers seeking safe, soothing relief from pregnancy discomforts.',
    note: null,
  },
  {
    id: 'pediatric',
    name: 'Pediatric Massage',
    icon: Star,
    tagline: 'Gentle Care for Ages 5–17',
    price: { '30': 50, '45': 70, '60': 90 },
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=85',
    tag: 'Ages 5–17',
    tagColor: 'bg-sage-500',
    description:
      'Gentle, age-appropriate massage that helps children relax, ease growing pains and tension, and support healthy development. Techniques are always adapted to the child\'s age and comfort.',
    benefits: [
      'Eases growing pains and muscle tension',
      'Supports relaxation and better sleep',
      'Helps reduce stress and restlessness',
      'Encourages healthy body awareness',
      'Gentle, age-appropriate techniques',
      'Comfortable, reassuring environment',
    ],
    ideal: 'Children ages 5–17 who could benefit from gentle, supportive massage.',
    note: 'Parent or guardian consent is required, and a parent/guardian must be present for the session.',
  },
  {
    id: 'infant',
    name: 'Infant Massage',
    icon: Baby,
    tagline: 'A Parent-Guided Educational Session',
    price: { '30': 50 },
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=900&q=85',
    tag: 'Parent-Guided',
    tagColor: 'bg-teal-400',
    description:
      'An educational session where I guide you, the parent, through safe and soothing massage techniques for your baby. You learn hands-on how to comfort your infant, support bonding, and ease common discomforts.',
    benefits: [
      'Learn safe, soothing infant massage techniques',
      'Supports parent–baby bonding',
      'May help ease gas, colic, and fussiness',
      'Encourages better sleep for baby',
      'Builds parenting confidence',
      'A calming routine you can continue at home',
    ],
    ideal: 'Parents who want to learn nurturing massage techniques for their baby.',
    note: 'This is a parent-guided educational session — techniques are taught to and performed by the parent.',
  },
  {
    id: 'cbd-oil',
    name: 'CBD Oil Massage',
    icon: Leaf,
    tagline: 'Soothe Sore Muscles, Deepen Relaxation',
    price: { '35': 90, '60': 125, '90': 160, '120': 190 },
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=900&q=85',
    tag: 'Luxurious',
    tagColor: 'bg-gold-500',
    description:
      'Massage enhanced with premium CBD oil to soothe sore muscles, calm inflammation, and deepen full-body relaxation. The CBD works alongside skilled hands-on techniques for an especially restorative experience.',
    benefits: [
      'Helps soothe sore, tired muscles',
      'May reduce inflammation and tension',
      'Deepens relaxation and calm',
      'Nourishes and hydrates the skin',
      'Complements therapeutic or relaxation work',
      'Available in short or full-length sessions',
    ],
    ideal: 'Anyone wanting extra relief for sore muscles and deeper relaxation.',
    note: null,
  },
];

const enhancements = [
  'Cupping Therapy',
  'Aromatherapy',
  'Hot Stone Therapy',
  'Scalp Massage',
  'Hydrating Face Mask',
  'Cooling Eye Mask',
  'Foot Mask',
];

const faqs = [
  {
    q: 'Do you offer both in-studio and mobile massage?',
    a: 'Yes! You can visit me in my comfortable home studio, or I can bring the full massage experience to you with a mobile session. Mobile massage is available in Frisco, Little Elm, McKinney, Prosper, Allen, Plano, and surrounding North Texas areas.',
  },
  {
    q: 'How does the mobile massage travel fee work?',
    a: 'For mobile sessions, a travel fee starting at $25 applies and is based on the distance to your location. Just let me know your city or address when booking and I\'ll confirm the exact travel fee before your appointment.',
  },
  {
    q: 'What should I expect during my first session?',
    a: 'We\'ll start with a brief intake conversation about your health history, problem areas, and goals. For studio visits, everything is set up and ready for you. For mobile sessions, I arrive 10–15 minutes early to set up my professional table, soft linens, and a calming atmosphere. You\'ll have privacy to get comfortable on the table, and after the session you\'ll have time to rest and rehydrate.',
  },
  {
    q: 'What do I need to provide for a mobile massage?',
    a: 'Almost nothing! I bring everything — a professional portable massage table, fresh linens, premium massage oils, and a calming ambience. For a mobile session, you just need to provide a clear space about 7x10 feet for the table.',
  },
  {
    q: 'What is your cancellation and rescheduling policy?',
    a: 'I ask for at least 24 hours notice for cancellations or rescheduling. Cancellations with less than 24 hours notice may be subject to a 50% cancellation fee. No-shows are charged the full session rate. I understand that life happens — please just reach out as soon as possible and I\'ll always try to work with you.',
  },
  {
    q: 'Is massage therapy safe during pregnancy?',
    a: 'Yes, prenatal massage is a safe, supportive way to ease pregnancy discomforts when performed by a trained therapist. I use specialized side-lying positioning with supportive bolsters designed for pregnant clients. I recommend consulting your OB/GYN before booking, especially if you have a high-risk pregnancy.',
  },
  {
    q: 'Do you work with children and infants?',
    a: 'Yes. Pediatric massage is available for children ages 5–17 with parent or guardian consent, and a parent/guardian must be present. I also offer infant massage as a parent-guided educational session, where I teach you safe, soothing techniques to use with your baby at home.',
  },
  {
    q: 'How do I pay for my massage session?',
    a: 'I accept cash, all major credit and debit cards, Venmo, and Zelle. Payment is collected at the time of service. Tips are always appreciated but never required.',
  },
  {
    q: 'Do you offer gift cards?',
    a: 'Yes! A Healing Touch by Alina gift card is the perfect gift for birthdays, holidays, Mother\'s Day, or simply to show appreciation. Reach out and I\'ll help you purchase one for someone you love.',
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
          alt={`${service.name} – massage in Frisco TX by Healing Touch by Alina`}
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

        {/* Note (e.g. consent / educational) */}
        {service.note && (
          <div className="flex items-start gap-2 text-xs text-sage-600 bg-sage-50 rounded-xl p-3 mb-5">
            <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
            <span>{service.note}</span>
          </div>
        )}

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
            Massage Services
            <span className="block italic font-light text-white/65 text-4xl md:text-5xl mt-2">
              In-Studio & Mobile in Frisco, TX
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto font-light"
          >
            Visit my home studio or book a mobile session and I&apos;ll bring my professional table, oils, 
            linens, and calming ambience to you. Every session is customized to your individual needs.
          </motion.p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-cream" aria-labelledby="services-grid-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="services-grid-heading" className="sr-only">
            All massage therapy services in Frisco TX
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhancements & Mobile */}
      <section className="py-20 bg-beige-100" aria-labelledby="enhancements-heading">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="section-label mb-4">Make It Yours</p>
            <h2 id="enhancements-heading" className="section-title">Enhancements & Mobile Service</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Enhancements */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-card p-8"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-xl bg-sage-50 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-sage-500" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-sage-800">Massage Enhancements</h3>
              </div>
              <p className="text-teal-500 text-sm font-medium mb-6">Add any enhancement — $10 each</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {enhancements.map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-sage-600">
                    <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Mobile massage */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl shadow-card p-8 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-xl bg-sage-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-sage-500" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-sage-800">Mobile Massage</h3>
              </div>
              <p className="text-teal-500 text-sm font-medium mb-6">Travel fee starting at $25 based on distance</p>
              <p className="text-sage-500 text-sm leading-relaxed mb-6">
                Prefer to relax at home? I bring the full experience to you. Mobile massage is available in{' '}
                <strong className="text-sage-700">Frisco, Little Elm, McKinney, Prosper, Allen, Plano</strong>, 
                and surrounding North Texas areas. You can also visit me in my comfortable home studio.
              </p>
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <Link href="/book" className="btn-primary">Book Your Session</Link>
                <Link href="/contact" className="btn-outline">Ask a Question</Link>
              </div>
            </motion.div>
          </div>
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
              Everything you need to know about booking a massage therapist in Frisco, TX.
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
