'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useToast } from '@/components/ui/ToastProvider';
import { ArrowRight, Phone } from 'lucide-react';

export function FinalCTASection() {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call — replace with real Formspree/Calendly endpoint
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setForm({ name: '', phone: '', service: '', message: '' });
    showToast(
      'Your request has been received! Alina will contact you within 2 hours to confirm your appointment.',
      'success',
      'Request Sent! 🌿'
    );
  };

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Sage gradient background */}
      <div className="absolute inset-0 bg-sage-gradient" />
      {/* Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Ccircle cx=\'1\' cy=\'1\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label text-teal-300 mb-4">Ready to Relax?</p>
            <h2
              id="cta-heading"
              className="text-4xl md:text-5xl font-serif font-semibold text-white mb-6 text-balance"
            >
              Your Healing Session
              <span className="block italic font-light text-white/70 mt-1">
                Is One Message Away
              </span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md font-light">
              Book your mobile massage in Dallas today and experience the luxury of having 
              a full spa treatment delivered to your doorstep. No travel, no stress — just 
              pure relaxation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="btn-primary bg-white text-sage-700 hover:bg-beige-100 shadow-button group inline-flex">
                Book Online Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href="tel:+12145550192"
                className="btn-outline border-white/40 text-white hover:bg-white/10 hover:border-white/60 inline-flex"
              >
                <Phone className="w-4 h-4" />
                (214) 555-0192
              </a>
            </div>
          </motion.div>

          {/* Right: mini form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8">
              <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                Quick Appointment Request
              </h3>
              <p className="text-white/60 text-sm mb-6">
                I'll confirm within 2 hours during business hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="cta-name" className="block text-white/70 text-sm mb-1.5 font-medium">
                    Your Name *
                  </label>
                  <input
                    id="cta-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200 text-sm backdrop-blur-sm"
                  />
                </div>
                <div>
                  <label htmlFor="cta-phone" className="block text-white/70 text-sm mb-1.5 font-medium">
                    Phone Number *
                  </label>
                  <input
                    id="cta-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                    placeholder="(214) 555-0000"
                    className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200 text-sm backdrop-blur-sm"
                  />
                </div>
                <div>
                  <label htmlFor="cta-service" className="block text-white/70 text-sm mb-1.5 font-medium">
                    Service Interested In
                  </label>
                  <select
                    id="cta-service"
                    value={form.service}
                    onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200 text-sm backdrop-blur-sm"
                  >
                    <option value="" className="text-sage-800">Select a service...</option>
                    <option value="swedish" className="text-sage-800">Swedish Massage – $110/60min</option>
                    <option value="deep-tissue" className="text-sage-800">Deep Tissue – $130/60min</option>
                    <option value="hot-stone" className="text-sage-800">Hot Stone – $150/75min</option>
                    <option value="prenatal" className="text-sage-800">Prenatal – $120/60min</option>
                    <option value="unsure" className="text-sage-800">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="cta-message" className="block text-white/70 text-sm mb-1.5 font-medium">
                    Preferred Date & Notes
                  </label>
                  <textarea
                    id="cta-message"
                    rows={3}
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    placeholder="e.g. Saturday afternoon, have lower back tension..."
                    className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200 text-sm resize-none backdrop-blur-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-white text-sage-700 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-beige-100 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-sage-300 border-t-sage-600 rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Appointment Request'
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
