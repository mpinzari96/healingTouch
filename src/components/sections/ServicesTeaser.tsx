'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'swedish',
    name: 'Swedish Massage',
    price: '$110',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80',
    description:
      'Gentle, flowing strokes to melt away stress and restore your body\'s natural balance. Perfect for relaxation and first-time clients.',
    tag: 'Most Popular',
    color: 'sage',
  },
  {
    id: 'deep-tissue',
    name: 'Deep Tissue Massage',
    price: '$130',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
    description:
      'Targeted, firm pressure to release chronic tension, muscle knots, and deep-seated tightness. Ideal for athletes and active lifestyles.',
    tag: null,
    color: 'teal',
  },
  {
    id: 'hot-stone',
    name: 'Hot Stone Massage',
    price: '$150',
    duration: '75 min',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80',
    description:
      'Heated basalt stones glide over the body, melting muscle tension while promoting deep relaxation and renewed energy.',
    tag: 'Luxurious',
    color: 'sage',
  },
  {
    id: 'prenatal',
    name: 'Prenatal Massage',
    price: '$120',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1601983578764-b9b6ce3da5cb?w=600&q=80',
    description:
      'Safe, nurturing care designed for expectant mothers to ease pregnancy discomforts and promote deep relaxation.',
    tag: 'Specialist',
    color: 'teal',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function ServicesTeaser() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-beige-100"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="section-label mb-4">Services & Pricing</p>
          <h2 id="services-heading" className="section-title mb-5">
            Massage Therapy
            <span className="block italic font-light text-sage-400 mt-1">Tailored to You</span>
          </h2>
          <p className="section-subtitle">
            Every session is customized to your unique needs. I bring all equipment — 
            massage table, linens, oils, and ambience — directly to your Dallas location.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map(service => (
            <motion.article
              key={service.id}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1.5"
              itemScope
              itemType="https://schema.org/Service"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.name} – Mobile massage in Dallas TX by Healing Touch by Alina`}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/50 to-transparent" />

                {/* Tag */}
                {service.tag && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-sage-700 tracking-wide">
                    {service.tag}
                  </div>
                )}

                {/* Price */}
                <div className="absolute bottom-3 right-3">
                  <span className="font-serif text-2xl font-semibold text-white" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <span itemProp="price">{service.price}</span>
                    <meta itemProp="priceCurrency" content="USD" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-sage-400 text-xs mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{service.duration}</span>
                </div>
                <h3
                  className="font-serif text-xl font-semibold text-sage-800 mb-2 leading-tight"
                  itemProp="name"
                >
                  {service.name}
                </h3>
                <p className="text-sage-500 text-sm leading-relaxed line-clamp-3" itemProp="description">
                  {service.description}
                </p>
              </div>

              {/* Footer */}
              <div className="px-5 pb-5">
                <Link
                  href={`/services#${service.id}`}
                  className="flex items-center gap-2 text-teal-600 font-medium text-sm hover:text-teal-700 transition-colors duration-200 group/link"
                  aria-label={`Learn more about ${service.name}`}
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-sage-500 mb-5 text-sm">
            All services available in 60, 75, or 90-minute sessions · Custom packages available
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-outline">
              View All Services
            </Link>
            <Link href="/book" className="btn-primary">
              Book Your Session
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
