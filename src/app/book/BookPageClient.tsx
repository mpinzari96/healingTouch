'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/ToastProvider';
import {
  CheckCircle, Phone, Mail, MapPin, Calendar,
  Clock, User, MessageSquare, Home, ChevronRight
} from 'lucide-react';

/* ─── CONSTANTS ──────────────────────────────────────── */

const services = [
  { id: 'swedish-60', label: 'Swedish Massage – 60 min', price: '$110' },
  { id: 'swedish-75', label: 'Swedish Massage – 75 min', price: '$130' },
  { id: 'swedish-90', label: 'Swedish Massage – 90 min', price: '$150' },
  { id: 'deep-60', label: 'Deep Tissue – 60 min', price: '$130' },
  { id: 'deep-75', label: 'Deep Tissue – 75 min', price: '$155' },
  { id: 'deep-90', label: 'Deep Tissue – 90 min', price: '$175' },
  { id: 'hotstone-75', label: 'Hot Stone – 75 min', price: '$150' },
  { id: 'hotstone-90', label: 'Hot Stone – 90 min', price: '$175' },
  { id: 'prenatal-60', label: 'Prenatal Massage – 60 min', price: '$120' },
  { id: 'prenatal-75', label: 'Prenatal Massage – 75 min', price: '$140' },
  { id: 'sports-60', label: 'Sports Massage – 60 min', price: '$135' },
  { id: 'couples-60', label: 'Couples Massage – 60 min', price: '$220' },
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM',
];

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  address: string;
  city: string;
  specialRequests: string;
  firstTime: string;
  howHeard: string;
};

const initialForm: FormState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  time: '',
  address: '',
  city: '',
  specialRequests: '',
  firstTime: '',
  howHeard: '',
};

/* ─── STEP INDICATOR ─────────────────────────────────── */

function StepIndicator({ steps, current }: { steps: string[]; current: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-10">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-all duration-300 ${
            i < current
              ? 'bg-sage-500 text-white'
              : i === current
              ? 'bg-sage-500 text-white ring-4 ring-sage-100'
              : 'bg-sage-100 text-sage-400'
          }`}>
            {i < current ? <CheckCircle className="w-4 h-4" /> : i + 1}
          </div>
          <span className={`text-xs font-medium hidden sm:block transition-colors duration-300 ${
            i <= current ? 'text-sage-700' : 'text-sage-300'
          }`}>{step}</span>
          {i < steps.length - 1 && (
            <ChevronRight className={`w-4 h-4 mx-1 transition-colors duration-300 ${
              i < current ? 'text-sage-400' : 'text-sage-200'
            }`} />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── INPUT FIELD ─────────────────────────────────────── */

function Field({
  label, required, children, hint
}: {
  label: string; required?: boolean; children: React.ReactNode; hint?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-sage-700 mb-1.5">
        {label} {required && <span className="text-rose-400">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-sage-400 mt-1">{hint}</p>}
    </div>
  );
}

/* ─── PAGE ─────────────────────────────────────────────── */

const steps = ['Contact Info', 'Service & Time', 'Location & Notes'];

export function BookPageClient() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useToast();

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm(p => ({ ...p, [field]: e.target.value }));

  const next = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const back = () => setStep(s => Math.max(s - 1, 0));

  const validate = () => {
    if (step === 0) {
      if (!form.firstName || !form.lastName || !form.phone || !form.email) {
        showToast('Please fill in all required contact fields.', 'error');
        return false;
      }
    }
    if (step === 1) {
      if (!form.service || !form.date || !form.time) {
        showToast('Please select a service, date, and time.', 'error');
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validate()) next();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.address || !form.city) {
      showToast('Please provide your address for the mobile service.', 'error');
      return;
    }
    setLoading(true);

    /*
     * TODO: Replace with real endpoint
     * Option A — Formspree:
     *   const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     *     method: 'POST', headers: { 'Content-Type': 'application/json' },
     *     body: JSON.stringify(form),
     *   });
     *
     * Option B — Internal API route (src/app/api/contact/route.ts):
     *   const res = await fetch('/api/contact', {
     *     method: 'POST', headers: { 'Content-Type': 'application/json' },
     *     body: JSON.stringify(form),
     *   });
     *
     * Option C — Calendly embed (replace entire form with Calendly widget):
     *   <div className="calendly-inline-widget" data-url="https://calendly.com/YOUR_USERNAME" />
     *   <script src="https://assets.calendly.com/assets/external/widget.js" />
     */

    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  // Today's date as min value for date input
  const today = new Date().toISOString().split('T')[0];

  /* ── Success Screen ── */
  if (submitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg w-full text-center"
        >
          <div className="w-20 h-20 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-sage-500" />
          </div>
          <h1 className="font-serif text-4xl font-semibold text-sage-800 mb-4">
            Request Received! 🌿
          </h1>
          <p className="text-sage-500 text-lg mb-3 leading-relaxed">
            Thank you, <strong className="text-sage-700">{form.firstName}</strong>! Your appointment 
            request has been received. Alina will contact you at <strong className="text-sage-700">{form.phone}</strong> within 
            2 hours to confirm your booking.
          </p>
          <p className="text-sage-400 text-sm mb-8">
            Check your email at {form.email} for a confirmation message.
          </p>
          <div className="bg-beige-100 rounded-2xl p-5 mb-8 text-left space-y-2">
            <h2 className="font-serif font-semibold text-sage-700 mb-3">Your Request Summary</h2>
            <p className="text-sm text-sage-600">
              <strong>Service:</strong>{' '}
              {services.find(s => s.id === form.service)?.label}
            </p>
            <p className="text-sm text-sage-600">
              <strong>Preferred Date:</strong> {new Date(form.date + 'T12:00').toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="text-sm text-sage-600">
              <strong>Preferred Time:</strong> {form.time}
            </p>
            <p className="text-sm text-sage-600">
              <strong>Location:</strong> {form.address}, {form.city}, TX
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+12145550192" className="btn-primary">
              <Phone className="w-4 h-4" /> Call Alina
            </a>
            <button onClick={() => { setSubmitted(false); setStep(0); setForm(initialForm); }} className="btn-outline">
              Book Another Session
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

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
            Mobile Massage Dallas TX
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-semibold text-white mb-4">
            Book Your Session
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg font-light">
            I bring everything to your Dallas home or office. Fill out the form and I'll confirm within 2 hours.
          </motion.p>

          {/* Trust row */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-5 mt-8">
            {[
              { icon: Home, text: 'Mobile Only – I Come to You' },
              { icon: Clock, text: 'Available 7 Days/Week' },
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

      {/* Form area */}
      <section className="py-20 bg-beige-100" aria-labelledby="book-form-heading">
        <div className="max-w-2xl mx-auto px-6">
          <h2 id="book-form-heading" className="sr-only">Book your in-home massage appointment</h2>

          {/* Step indicator */}
          <StepIndicator steps={steps} current={step} />

          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <form onSubmit={step < steps.length - 1 ? (e) => { e.preventDefault(); handleNext(); } : handleSubmit}
              className="bg-white rounded-3xl shadow-card p-8 md:p-10 space-y-6">

              {/* ── Step 0: Contact Info ── */}
              {step === 0 && (
                <>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-sage-800 mb-1">Contact Information</h3>
                    <p className="text-sage-400 text-sm">Let me know who I'll be working with.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Field label="First Name" required>
                      <input type="text" value={form.firstName} onChange={set('firstName')} required
                        placeholder="Jane" className="input-base" autoComplete="given-name" />
                    </Field>
                    <Field label="Last Name" required>
                      <input type="text" value={form.lastName} onChange={set('lastName')} required
                        placeholder="Smith" className="input-base" autoComplete="family-name" />
                    </Field>
                  </div>

                  <Field label="Phone Number" required hint="I'll text or call to confirm your appointment">
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-sage-300" />
                      <input type="tel" value={form.phone} onChange={set('phone')} required
                        placeholder="(214) 555-0000" className="input-base pl-10" autoComplete="tel" />
                    </div>
                  </Field>

                  <Field label="Email Address" required>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-sage-300" />
                      <input type="email" value={form.email} onChange={set('email')} required
                        placeholder="jane@email.com" className="input-base pl-10" autoComplete="email" />
                    </div>
                  </Field>

                  <Field label="Is this your first massage with Alina?">
                    <select value={form.firstTime} onChange={set('firstTime')} className="input-base">
                      <option value="">Please select...</option>
                      <option value="yes">Yes, first time!</option>
                      <option value="no">No, returning client</option>
                    </select>
                  </Field>

                  <Field label="How did you hear about Healing Touch by Alina?">
                    <select value={form.howHeard} onChange={set('howHeard')} className="input-base">
                      <option value="">Please select...</option>
                      <option value="google">Google Search</option>
                      <option value="instagram">Instagram</option>
                      <option value="facebook">Facebook</option>
                      <option value="referral">Friend / Family Referral</option>
                      <option value="yelp">Yelp</option>
                      <option value="other">Other</option>
                    </select>
                  </Field>
                </>
              )}

              {/* ── Step 1: Service & Time ── */}
              {step === 1 && (
                <>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-sage-800 mb-1">Service & Schedule</h3>
                    <p className="text-sage-400 text-sm">Choose what you'd like and when.</p>
                  </div>

                  <Field label="Select Service" required>
                    <select value={form.service} onChange={set('service')} required className="input-base">
                      <option value="">Choose your service & duration...</option>
                      {services.map(s => (
                        <option key={s.id} value={s.id}>{s.label} — {s.price}</option>
                      ))}
                    </select>
                  </Field>

                  {form.service && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-sage-50 rounded-xl p-4 border border-sage-100"
                    >
                      <div className="flex items-center gap-2 text-sage-600 text-sm">
                        <CheckCircle className="w-4 h-4 text-teal-500" />
                        <span>
                          <strong>{services.find(s => s.id === form.service)?.label}</strong>{' '}
                          — <span className="text-teal-600 font-semibold">{services.find(s => s.id === form.service)?.price}</span>
                        </span>
                      </div>
                    </motion.div>
                  )}

                  <Field label="Preferred Date" required hint="I'm available Monday–Sunday, subject to availability">
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-sage-300" />
                      <input type="date" value={form.date} onChange={set('date')} required
                        min={today} className="input-base pl-10" />
                    </div>
                  </Field>

                  <Field label="Preferred Time" required>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map(time => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setForm(p => ({ ...p, time }))}
                          className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all duration-200 border ${
                            form.time === time
                              ? 'bg-sage-500 text-white border-sage-500 shadow-sm'
                              : 'bg-white text-sage-600 border-sage-100 hover:border-sage-300 hover:bg-sage-50'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    {!form.time && <p className="text-xs text-sage-400 mt-2">Select a preferred start time above</p>}
                  </Field>
                </>
              )}

              {/* ── Step 2: Location & Notes ── */}
              {step === 2 && (
                <>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-sage-800 mb-1">Location & Notes</h3>
                    <p className="text-sage-400 text-sm">Tell me where to come and any special needs.</p>
                  </div>

                  {/* Mobile note */}
                  <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4 flex gap-3">
                    <Home className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-teal-700 font-medium text-sm">Mobile Massage Only</p>
                      <p className="text-teal-600 text-xs leading-relaxed mt-0.5">
                        I bring everything — table, linens, oils, and ambience. You just need a clear 
                        7×10 ft space. I serve Dallas and surrounding cities within ~25 miles.
                      </p>
                    </div>
                  </div>

                  <Field label="Street Address" required>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-sage-300" />
                      <input type="text" value={form.address} onChange={set('address')} required
                        placeholder="123 Oak Street, Apt 4B" className="input-base pl-10"
                        autoComplete="street-address" />
                    </div>
                  </Field>

                  <Field label="City" required hint="Must be in Dallas or surrounding DFW area">
                    <input type="text" value={form.city} onChange={set('city')} required
                      placeholder="Dallas, Plano, Frisco, McKinney..." className="input-base"
                      autoComplete="address-level2" />
                  </Field>

                  <Field label="Special Requests or Health Notes"
                    hint="Areas of focus, health conditions, allergies to oils, pressure preference, etc.">
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-sage-300" />
                      <textarea value={form.specialRequests} onChange={set('specialRequests')} rows={4}
                        placeholder="e.g. Focus on upper back and neck, pregnant (28 weeks), allergic to nut oils, prefer firm pressure..."
                        className="input-base pl-10 resize-none" />
                    </div>
                  </Field>

                  {/* Summary */}
                  <div className="bg-beige-100 rounded-2xl p-5 space-y-2.5">
                    <h4 className="font-serif font-semibold text-sage-700 mb-3">Booking Summary</h4>
                    {[
                      { icon: User, label: 'Name', value: `${form.firstName} ${form.lastName}` },
                      { icon: Phone, label: 'Phone', value: form.phone },
                      { icon: CheckCircle, label: 'Service', value: services.find(s => s.id === form.service)?.label || '—' },
                      { icon: Calendar, label: 'Date', value: form.date ? new Date(form.date + 'T12:00').toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' }) : '—' },
                      { icon: Clock, label: 'Time', value: form.time || '—' },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-center gap-3 text-sm">
                        <Icon className="w-4 h-4 text-sage-400 flex-shrink-0" />
                        <span className="text-sage-500 w-16 flex-shrink-0">{label}:</span>
                        <span className="text-sage-700 font-medium">{value}</span>
                      </div>
                    ))}
                    <div className="border-t border-sage-200 pt-2.5 mt-2.5 flex items-center justify-between">
                      <span className="text-sage-500 text-sm font-medium">Session Total</span>
                      <span className="font-serif text-xl font-bold text-sage-700">
                        {services.find(s => s.id === form.service)?.price || '—'}
                      </span>
                    </div>
                  </div>
                </>
              )}

              {/* Navigation buttons */}
              <div className={`flex gap-4 ${step > 0 ? 'justify-between' : 'justify-end'}`}>
                {step > 0 && (
                  <button type="button" onClick={back}
                    className="btn-ghost border border-sage-200 text-sage-600">
                    ← Back
                  </button>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary flex-1 sm:flex-initial justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Submitting...</>
                  ) : step < steps.length - 1 ? (
                    'Continue →'
                  ) : (
                    'Submit Booking Request'
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact alternatives */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-sage-400 text-sm mb-4">Prefer to book directly?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+12145550192"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-sage-200 text-sage-600 text-sm hover:bg-sage-50 transition-colors duration-200">
                <Phone className="w-4 h-4" /> (214) 555-0192
              </a>
              <a href="sms:+12145550192"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-sage-200 text-sage-600 text-sm hover:bg-sage-50 transition-colors duration-200">
                <MessageSquare className="w-4 h-4" /> Text Alina
              </a>
              <a href="mailto:alina@healingtouchbyalina.com"
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
