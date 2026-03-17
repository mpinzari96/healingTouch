'use client';

import { motion } from 'framer-motion';
import { Home, Lock, UserCheck, Sparkles, Clock, Heart } from 'lucide-react';

const reasons = [
  {
    icon: Home,
    title: 'Ultimate Convenience',
    description:
      'No commute, no parking, no waiting rooms. I come fully equipped to your Dallas home, hotel, or office — so you can relax from the moment we start.',
  },
  {
    icon: Lock,
    title: 'Complete Privacy',
    description:
      'Enjoy a deeply personal wellness experience in the privacy and comfort of your own space. No strangers, no noise — just you and healing.',
  },
  {
    icon: UserCheck,
    title: 'Personalized Care',
    description:
      'Every session is customized to your body\'s specific needs. I listen, adapt, and ensure your massage is exactly what you need that day.',
  },
  {
    icon: Sparkles,
    title: 'Full Spa Experience',
    description:
      'I bring the full spa setup — professional massage table, premium organic oils, soft linens, and ambient music. Nothing missing.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description:
      'Available 7 days a week, 9AM–8PM. Evening and weekend appointments available. Book online or text me directly.',
  },
  {
    icon: Heart,
    title: 'Deeply Trained & Caring',
    description:
      'With 7+ years of hands-on experience and continuous education, I bring genuine expertise and heartfelt care to every single session.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export function WhyChooseSection() {
  return (
    <section
      className="py-24 md:py-32 bg-cream relative overflow-hidden"
      aria-labelledby="why-choose-heading"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-beige-100/60 rounded-l-[80px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <p className="section-label mb-4">Why Choose Me</p>
            <h2
              id="why-choose-heading"
              className="section-title mb-6 text-balance"
            >
              Mobile Massage Done
              <span className="block italic font-light text-sage-400 mt-1">
                Right
              </span>
            </h2>
            <p className="section-subtitle mb-8 max-w-md">
              Choosing a mobile massage therapist means choosing your comfort, your schedule, 
              and your space. Here's why Dallas clients keep coming back.
            </p>
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-sage-600">87+</div>
                <div className="text-sage-400 text-sm mt-1">5-Star Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-sage-600">7+</div>
                <div className="text-sage-400 text-sm mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-sage-600">500+</div>
                <div className="text-sage-400 text-sm mt-1">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          {/* Right: grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {reasons.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                className="group p-6 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-sage-50"
              >
                <div className="w-11 h-11 rounded-xl bg-sage-50 flex items-center justify-center mb-4 transition-colors duration-200 group-hover:bg-sage-100">
                  <Icon className="w-5 h-5 text-sage-500" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">{title}</h3>
                <p className="text-sage-500 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
