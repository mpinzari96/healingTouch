import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Heart, Leaf } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Alina' },
  { href: '/book', label: 'Book Appointment' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  { href: '/services#swedish', label: 'Swedish Massage' },
  { href: '/services#deep-tissue', label: 'Deep Tissue Massage' },
  { href: '/services#hot-stone', label: 'Hot Stone Massage' },
  { href: '/services#prenatal', label: 'Prenatal Massage' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-sage-800 text-sage-100" aria-label="Site footer">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 group mb-5">
              <div className="w-8 h-8 rounded-full bg-sage-700 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-sage-200" />
              </div>
              <div>
                <span className="block font-serif text-xl font-semibold text-white leading-none">
                  Healing Touch
                </span>
                <span className="block text-xs tracking-[0.18em] uppercase text-sage-300 mt-0.5">
                  by Alina
                </span>
              </div>
            </Link>
            <p className="text-sage-300 text-sm leading-relaxed mb-5">
              Licensed mobile massage therapist serving Dallas, TX and surrounding areas. 
              I bring the spa experience directly to you.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/healingtouchbyalina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-sage-700 flex items-center justify-center text-sage-300 hover:bg-sage-600 hover:text-white transition-colors duration-200"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/healingtouchbyalina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-sage-700 flex items-center justify-center text-sage-300 hover:bg-sage-600 hover:text-white transition-colors duration-200"
                aria-label="Follow on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sage-300 hover:text-sage-100 text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-serif text-lg font-semibold mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sage-300 hover:text-sage-100 text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif text-lg font-semibold mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+12145550192"
                  className="flex items-start gap-3 text-sage-300 hover:text-sage-100 text-sm transition-colors duration-200 group"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-teal-400 group-hover:text-teal-300 flex-shrink-0" />
                  (214) 555-0192
                </a>
              </li>
              <li>
                <a
                  href="mailto:alina@healingtouchbyalina.com"
                  className="flex items-start gap-3 text-sage-300 hover:text-sage-100 text-sm transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-teal-400 group-hover:text-teal-300 flex-shrink-0" />
                  alina@healingtouchbyalina.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sage-300 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-teal-400 flex-shrink-0" />
                  <span>Dallas, TX & Surrounding Areas<br />(Mobile Service Only)</span>
                </div>
              </li>
            </ul>

            {/* Map placeholder */}
            <div className="mt-5 rounded-xl overflow-hidden border border-sage-700">
              {/* Replace the div below with actual Google Maps iframe for production */}
              <div className="w-full h-32 bg-sage-700 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-6 h-6 text-teal-400 mx-auto mb-1" />
                  <span className="text-sage-400 text-xs">Dallas, TX Area</span>
                </div>
              </div>
              {/* 
                Production: Replace above div with:
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429217.4274453!2d-97.07296937808744!3d32.82097619699905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1703000000000!5m2!1sen!2sus"
                  width="100%"
                  height="128"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Healing Touch by Alina – Dallas TX service area"
                />
              */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sage-700">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sage-400 text-sm text-center sm:text-left">
            © {year} Healing Touch by Alina. All rights reserved.
          </p>
          <p className="text-sage-500 text-xs flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> in Dallas, TX
          </p>
        </div>
      </div>

      {/* Hidden schema markup for footer contact info */}
      <div itemScope itemType="https://schema.org/MassageTherapist" className="hidden">
        <span itemProp="name">Healing Touch by Alina</span>
        <span itemProp="telephone">+1-214-555-0192</span>
        <span itemProp="email">alina@healingtouchbyalina.com</span>
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="addressLocality">Dallas</span>
          <span itemProp="addressRegion">TX</span>
          <span itemProp="addressCountry">US</span>
        </div>
      </div>
    </footer>
  );
}
