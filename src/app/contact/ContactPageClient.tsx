'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/ToastProvider';
import { Phone, Mail, MapPin, MessageSquare, Clock, Instagram, Facebook, CheckCircle } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialForm: FormState = { name: '', email: '', phone: '', subject: '', message: '' };

const serviceAreas = [
  'Dallas', 'Plano', 'Frisco', 'McKinney', 'Richardson',
  'Garland', 'Irving', 'Carrollton', 'Allen', 'Addison',
  'Mesquite', 'Grand Prairie', 'Lewisville', 'Denton',
];

const hours = [
  { days: 'Monday – Friday', hours: '9:00 AM – 8:00 PM' },
  { days: 'Saturday', hours: '10:00 AM – 7:00 PM' },
  { days: 'Sunday', hours: '10:00 AM – 6:00 PM' },
];

export function ContactPageClient() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useToast();

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(p => ({ ...p, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Replace with actual endpoint (Formspree, Resend, etc.)
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    showToast('Message sent! Alina will reply within 24 hours.', 'success', 'Message Received 🌿');
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-sage-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 60%, #4A8A8A 0%, transparent 50%)' }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="section-label text-teal-300 mb-4">
            Let's Connect
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-semibold text-white mb-5">
            Contact Alina
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg font-light">
            Questions about services? Ready to book? Reach out any way you prefer — I respond promptly.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-cream" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="sr-only">Contact information and form</h2>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left sidebar – contact info */}
            <div className="lg:col-span-2 space-y-6">

              {/* Quick contact */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-3xl shadow-card p-7"
              >
                <h2 className="font-serif text-2xl font-semibold text-sage-800 mb-6">Get in Touch</h2>
                <ul className="space-y-5">
                  <li>
                    <a href="tel:+12145550192"
                      className="flex items-start gap-4 group"
                      aria-label="Call Alina at (214) 555-0192">
                      <div className="w-11 h-11 rounded-xl bg-sage-50 flex items-center justify-center flex-shrink-0 group-hover:bg-sage-100 transition-colors duration-200">
                        <Phone className="w-5 h-5 text-sage-500" />
                      </div>
                      <div>
                        <p className="text-xs text-sage-400 font-medium uppercase tracking-wide mb-0.5">Phone / Text</p>
                        <p className="text-sage-800 font-semibold group-hover:text-teal-600 transition-colors duration-200">
                          (214) 555-0192
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:alina@healingtouchbyalina.com"
                      className="flex items-start gap-4 group"
                      aria-label="Email Alina">
                      <div className="w-11 h-11 rounded-xl bg-sage-50 flex items-center justify-center flex-shrink-0 group-hover:bg-sage-100 transition-colors duration-200">
                        <Mail className="w-5 h-5 text-sage-500" />
                      </div>
                      <div>
                        <p className="text-xs text-sage-400 font-medium uppercase tracking-wide mb-0.5">Email</p>
                        <p className="text-sage-800 font-semibold group-hover:text-teal-600 transition-colors duration-200 text-sm break-all">
                          alina@healingtouchbyalina.com
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/12145550192"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                      aria-label="Message Alina on WhatsApp">
                      <div className="w-11 h-11 rounded-xl bg-sage-50 flex items-center justify-center flex-shrink-0 group-hover:bg-sage-100 transition-colors duration-200">
                        <MessageSquare className="w-5 h-5 text-sage-500" />
                      </div>
                      <div>
                        <p className="text-xs text-sage-400 font-medium uppercase tracking-wide mb-0.5">WhatsApp</p>
                        <p className="text-sage-800 font-semibold group-hover:text-teal-600 transition-colors duration-200">
                          Message on WhatsApp
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-sage-50 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-sage-500" />
                      </div>
                      <div>
                        <p className="text-xs text-sage-400 font-medium uppercase tracking-wide mb-0.5">Service Area</p>
                        <p className="text-sage-800 font-semibold">Dallas, TX & DFW</p>
                        <p className="text-sage-400 text-xs mt-0.5">Mobile only — I come to you</p>
                      </div>
                    </div>
                  </li>
                </ul>

                {/* Social */}
                <div className="border-t border-sage-100 pt-5 mt-5">
                  <p className="text-xs text-sage-400 font-medium uppercase tracking-wide mb-3">Follow Along</p>
                  <div className="flex gap-3">
                    <a href="https://instagram.com/healingtouchbyalina" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-sage-50 text-sage-600 text-sm hover:bg-sage-100 transition-colors duration-200">
                      <Instagram className="w-4 h-4" /> Instagram
                    </a>
                    <a href="https://facebook.com/healingtouchbyalina" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-sage-50 text-sage-600 text-sm hover:bg-sage-100 transition-colors duration-200">
                      <Facebook className="w-4 h-4" /> Facebook
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="bg-white rounded-3xl shadow-card p-7"
              >
                <div className="flex items-center gap-3 mb-5">
                  <Clock className="w-5 h-5 text-sage-500" />
                  <h2 className="font-serif text-xl font-semibold text-sage-800">Availability</h2>
                </div>
                <ul className="space-y-3">
                  {hours.map(({ days, hours: h }) => (
                    <li key={days} className="flex justify-between text-sm">
                      <span className="text-sage-500">{days}</span>
                      <span className="text-sage-700 font-medium">{h}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-sage-400 mt-4 italic">
                  Evening appointments often available by request.
                </p>
              </motion.div>

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="bg-white rounded-3xl shadow-card overflow-hidden"
              >
                {/* 
                  Production: Replace div below with Google Maps iframe:
                  <iframe
                    src="https://www.google.com/maps/embed?pb=..."
                    width="100%" height="260" style={{ border: 0 }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Healing Touch by Alina – Dallas TX service area"
                  />
                */}
                <div className="w-full h-52 bg-sage-100 flex flex-col items-center justify-center gap-2">
                  <MapPin className="w-8 h-8 text-sage-400" />
                  <span className="text-sage-500 font-medium">Dallas, TX & Surrounding Cities</span>
                  <span className="text-sage-400 text-xs">Mobile service area – up to 25 miles</span>
                </div>
                <div className="p-5">
                  <p className="text-sage-600 text-sm font-medium mb-2">Service Cities Include:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {serviceAreas.map(city => (
                      <span key={city} className="px-2.5 py-1 bg-beige-100 text-sage-500 text-xs rounded-full">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right – Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-white rounded-3xl shadow-card p-10 text-center h-full flex flex-col items-center justify-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-sage-500" />
                  </div>
                  <h2 className="font-serif text-3xl font-semibold text-sage-800">Message Sent!</h2>
                  <p className="text-sage-500 max-w-sm leading-relaxed">
                    Thank you for reaching out! Alina will reply to <strong className="text-sage-700">{form.email}</strong> within 24 hours. For urgent inquiries, please call or text directly.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm(initialForm); }}
                    className="btn-outline mt-2">Send Another Message</button>
                </div>
              ) : (
                <div className="bg-white rounded-3xl shadow-card p-8 md:p-10">
                  <h2 className="font-serif text-2xl font-semibold text-sage-800 mb-2">Send a Message</h2>
                  <p className="text-sage-400 text-sm mb-8">I typically respond within a few hours during business hours.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-sage-700 mb-1.5">
                          Full Name <span className="text-rose-400">*</span>
                        </label>
                        <input id="contact-name" type="text" required value={form.name} onChange={set('name')}
                          placeholder="Jane Smith" className="input-base" autoComplete="name" />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-sm font-medium text-sage-700 mb-1.5">Phone</label>
                        <input id="contact-phone" type="tel" value={form.phone} onChange={set('phone')}
                          placeholder="(214) 555-0000" className="input-base" autoComplete="tel" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-sage-700 mb-1.5">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input id="contact-email" type="email" required value={form.email} onChange={set('email')}
                        placeholder="jane@email.com" className="input-base" autoComplete="email" />
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-sm font-medium text-sage-700 mb-1.5">Subject</label>
                      <select id="contact-subject" value={form.subject} onChange={set('subject')} className="input-base">
                        <option value="">What can I help you with?</option>
                        <option value="booking">Schedule / Book an Appointment</option>
                        <option value="services">Questions About Services</option>
                        <option value="pricing">Pricing & Packages</option>
                        <option value="gift">Gift Certificates</option>
                        <option value="area">Service Area Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-sage-700 mb-1.5">
                        Message <span className="text-rose-400">*</span>
                      </label>
                      <textarea id="contact-message" required rows={6} value={form.message} onChange={set('message')}
                        placeholder="Tell me how I can help you! If you're looking to book, feel free to include your preferred service, date, and location..."
                        className="input-base resize-none" />
                    </div>

                    <button type="submit" disabled={loading}
                      className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed">
                      {loading ? (
                        <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>

                  <p className="text-center text-sage-400 text-xs mt-5">
                    Your information is kept private and never shared.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
