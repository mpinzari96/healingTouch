'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'Dallas, TX',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    date: 'November 2024',
    service: 'Swedish Massage',
    text: 'Alina is absolutely incredible. Having a professional massage therapist come directly to my home in Dallas was life-changing. The setup was professional, the massage was deeply relaxing, and I didn\'t have to drive anywhere afterward. I was completely melted into my couch. Will be booking monthly from now on!',
  },
  {
    id: 2,
    name: 'Marcus T.',
    location: 'Plano, TX',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    date: 'October 2024',
    service: 'Deep Tissue Massage',
    text: 'I\'ve tried several massage therapists in the Dallas area, and Alina is by far the best. Her deep tissue work is exceptional — she found tension points I didn\'t even know I had. The mobile service is so convenient, especially after a long week. Professional, punctual, and incredibly skilled.',
  },
  {
    id: 3,
    name: 'Jessica R.',
    location: 'Frisco, TX',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    date: 'December 2024',
    service: 'Prenatal Massage',
    text: 'As a pregnant woman in my third trimester, getting out for a massage felt impossible. Alina came to my home in Frisco and gave me the most nurturing, careful prenatal massage. She made me feel completely safe and comfortable. The relief I felt was immediate. I\'m so grateful for this service!',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-gold-400 text-gold-400' : 'fill-sage-100 text-sage-100'}`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(i => (i + 1) % testimonials.length);

  return (
    <section
      className="py-24 md:py-32 bg-sage-800 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sage-700/40" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-sage-700/30" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label text-teal-300 mb-4">Client Reviews</p>
          <h2
            id="testimonials-heading"
            className="text-4xl md:text-5xl font-serif font-semibold text-white mb-4"
          >
            What Dallas Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 text-white/70">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="text-sm">4.98 average · 87 verified reviews</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {testimonials.map((t, i) =>
                i === current ? (
                  <article
                    key={t.id}
                    className="bg-sage-700/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-sage-600/50"
                    itemScope
                    itemType="https://schema.org/Review"
                  >
                    <meta itemProp="reviewRating" content={String(t.rating)} />
                    <meta itemProp="author" content={t.name} />
                    <meta itemProp="datePublished" content={t.date} />

                    {/* Quote icon */}
                    <div className="mb-6">
                      <Quote className="w-10 h-10 text-teal-400/50" />
                    </div>

                    <blockquote
                      className="text-lg md:text-xl text-white/85 leading-relaxed mb-8 font-light"
                      itemProp="reviewBody"
                    >
                      "{t.text}"
                    </blockquote>

                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-teal-400/40">
                          <Image
                            src={t.avatar}
                            alt={`${t.name} – verified client review`}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                        <div>
                          <p className="font-serif font-semibold text-white" itemProp="author">
                            {t.name}
                          </p>
                          <p className="text-sage-300 text-sm">{t.location} · {t.date}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <StarRating rating={t.rating} />
                        <span className="text-sage-400 text-xs">{t.service}</span>
                      </div>
                    </div>
                  </article>
                ) : null
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? 'w-8 h-2 bg-teal-400'
                      : 'w-2 h-2 bg-sage-500 hover:bg-sage-400'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                  aria-current={i === current}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-sage-600 text-sage-300 hover:border-teal-400 hover:text-teal-400 transition-all duration-200 flex items-center justify-center"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full border border-sage-600 text-sage-300 hover:border-teal-400 hover:text-teal-400 transition-all duration-200 flex items-center justify-center"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Schema aggregate rating */}
        <div
          className="hidden"
          itemScope
          itemType="https://schema.org/AggregateRating"
        >
          <span itemProp="ratingValue">4.98</span>
          <span itemProp="reviewCount">87</span>
          <span itemProp="bestRating">5</span>
        </div>
      </div>
    </section>
  );
}
