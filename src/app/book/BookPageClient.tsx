'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle, Phone, Mail, MessageSquare,
  Clock, Home, Sparkles, MapPin
} from 'lucide-react';

// No module-level flag needed — we use DOM state instead,
// which resets naturally on each visit to /book.

export function BookPageClient() {
  useEffect(() => {
    const container = document.getElementById('square-widget-container');
    if (!container) return;

    // Guard against Strict Mode's double-invoke:
    // Check if our script tag is already in the container DOM.
    // The container is a fresh element on each page visit,
    // so this is always false on a new visit but catches the
    // Strict Mode second mount within the same visit.
    const alreadyInjected = container.querySelector(
      'script[src*="square.site/appointments"]'
    );
    if (alreadyInjected) return;

    const script = document.createElement('script');
    // Square widget script — to update: replace src URL with new embed URL
    // from Square Dashboard > Appointments > Embed
    script.src =
      'https://square.site/appointments/buyer/widget/ikp5e1iwnqolik/LMSDE8GZJG1WS.js';
    script.async = true;

    script.onload = () => {
      // Hide the loading skeleton once Square's iframe has injected
      const skeleton = document.getElementById('square-loading-skeleton');
      if (skeleton) skeleton.style.display = 'none';
    };

    script.onerror = () => {
      // Show fallback if script is blocked or fails to load
      const skeleton = document.getElementById('square-loading-skeleton');
      if (skeleton) {
        skeleton.removeAttribute('aria-label');
        skeleton.setAttribute('aria-label', 'Booking calendar unavailable');
        skeleton.innerHTML = `
          <div class="flex flex-col items-center justify-center gap-4 text-sage-500 p-8 text-center">
            <p class="font-serif text-xl font-semibold text-sage-700">Unable to load booking calendar</p>
            <p class="text-sm leading-relaxed max-w-xs">Please try refreshing the page, or reach out to book directly.</p>
            <a href="tel:+19162615342" class="btn-primary text-sm px-6 py-3">Call to Book</a>
          </div>
        `;
        skeleton.style.pointerEvents = 'auto';
      }
    };

    // Append script as a child of the container so Square's
    // document.currentScript.parentNode points inside the styled box.
    // Do NOT remove this script tag after appending — Square checks
    // scriptTag.parentNode before injecting its iframe, and a missing
    // parentNode triggers a redirect to app.squareup.com.
    container.appendChild(script);

    // Intentionally no cleanup return — see comment above.
  }, []);

  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-40 pb-16 bg-sage-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #4A8A8A 0%, transparent 60%), radial-gradient(circle at 80% 20%, #C9A84C 0%, transparent 50%)' }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="section-label text-teal-300 mb-4">
            Massage in Frisco TX
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-semibold text-white mb-4">
            Book Your Session
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg font-light">
            Select your service, pick a time that works for you, and confirm your booking instantly.
          </motion.p>

          {/* Trust row */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-5 mt-8">
            {[
              { icon: Home, text: 'In-Studio or Mobile' },
              { icon: Clock, text: 'Mon–Fri 8:30–2:30 · Sat 9–3' },
              { icon: CheckCircle, text: 'Licensed & Insured' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/65 text-sm">
                <Icon className="w-4 h-4 text-teal-300 flex-shrink-0" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Notices */}
      <section className="pt-16 pb-4 bg-beige-100" aria-label="Booking notices">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          {/* Enhancements notice */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-teal-50 border border-teal-200 rounded-2xl px-5 py-4 flex items-start gap-3"
          >
            <Sparkles className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
            <p className="text-teal-700 text-sm leading-relaxed">
              Add any enhancement to your session for just <strong>$10 each</strong> — Cupping Therapy,
              Aromatherapy, Hot Stone, Scalp Massage, Hydrating Face Mask, Cooling Eye Mask, or Foot Mask.
              Just mention it in the notes when booking.
            </p>
          </motion.div>

          {/* Mobile massage notice */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-beige-100 border border-sage-200 rounded-2xl px-6 py-5 flex items-start gap-3"
          >
            <MapPin className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" />
            <p className="text-sage-600 text-sm leading-relaxed">
              <strong className="text-sage-700">Mobile Massage Available</strong> — I come to you in Frisco,
              Little Elm, McKinney, Prosper, Allen, Plano &amp; surrounding North Texas areas. Travel fee
              starting at $25 based on distance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Square Appointments widget */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Real-Time Availability</p>
            <h2 className="section-title mb-3">Choose Your Session</h2>
            <p className="section-subtitle">
              Select your service, pick a time that works for you, and confirm your booking instantly.
            </p>
          </div>

          <div
            id="square-widget-container"
            className="h-[400px] sm:h-[700px] rounded-3xl overflow-hidden shadow-card bg-white relative"
          >
            {/* Loading skeleton — Square iframe injects as sibling of the script */}
            <div
              id="square-loading-skeleton"
              role="status"
              aria-label="Loading booking calendar"
              aria-live="polite"
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-sage-300 pointer-events-none"
            >
              <div className="w-12 h-12 border-2 border-sage-100 border-t-sage-300 rounded-full animate-spin" />
              <p className="text-sm">Loading booking calendar...</p>
            </div>
          </div>
          {/* Note: On viewports below approximately 328px (Square measures container content width,
              which is viewport width minus 48px from px-6 padding) Square shows a fallback booking button
              instead of the full iframe. The reduced height prevents a large empty card. */}
        </div>
      </section>

      {/* Prefer to book directly */}
      <section className="pb-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-center"
          >
            <p className="text-sage-400 text-sm mb-4">Prefer to book directly?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+19162615342"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-sage-200 text-sage-600 text-sm hover:bg-sage-50 transition-colors duration-200">
                <Phone className="w-4 h-4" /> (916) 261-5342
              </a>
              <a href="sms:+19162615342"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-sage-200 text-sage-600 text-sm hover:bg-sage-50 transition-colors duration-200">
                <MessageSquare className="w-4 h-4" /> Text Alina
              </a>
              <a href="mailto:Healingtouchbyalina@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-sage-200 text-sage-600 text-sm hover:bg-sage-50 transition-colors duration-200">
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
