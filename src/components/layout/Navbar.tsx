'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-nav py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Healing Touch by Alina – Home">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
              scrolled ? 'bg-sage-100' : 'bg-white/20'
            }`}>
              <Leaf className={`w-4 h-4 transition-colors duration-300 ${scrolled ? 'text-sage-500' : 'text-white'}`} />
            </div>
            <div>
              <span
                className={`block font-serif text-xl font-semibold leading-none transition-colors duration-300 ${
                  scrolled ? 'text-sage-800' : 'text-white'
                }`}
              >
                Healing Touch
              </span>
              <span
                className={`block text-xs tracking-[0.18em] uppercase mt-0.5 transition-colors duration-300 ${
                  scrolled ? 'text-sage-400' : 'text-white/70'
                }`}
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                by Alina
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-200 group ${
                  scrolled ? 'text-sage-600 hover:text-sage-800' : 'text-white/85 hover:text-white'
                } ${pathname === href ? (scrolled ? 'text-sage-800' : 'text-white') : ''}`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-current transition-all duration-300 ${
                    pathname === href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+12145550192"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                scrolled ? 'text-sage-600 hover:text-sage-800' : 'text-white/85 hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              (214) 555-0192
            </a>
            <Link
              href="/book"
              className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                scrolled
                  ? 'bg-sage-500 text-white hover:bg-sage-600 shadow-button hover:-translate-y-0.5'
                  : 'bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-xs'
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              scrolled ? 'text-sage-700 hover:bg-sage-50' : 'text-white hover:bg-white/10'
            }`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-cream pt-24 px-6 pb-8 overflow-auto lg:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <Link
                    href={href}
                    className={`block py-4 text-2xl font-serif font-medium border-b border-sage-100 transition-colors duration-200 ${
                      pathname === href ? 'text-sage-600' : 'text-sage-800 hover:text-sage-600'
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07, duration: 0.3 }}
                className="mt-6 flex flex-col gap-3"
              >
                <a
                  href="tel:+12145550192"
                  className="flex items-center gap-3 py-3 text-sage-600 font-medium"
                >
                  <Phone className="w-5 h-5" />
                  (214) 555-0192
                </a>
                <Link href="/book" className="btn-primary text-center justify-center">
                  Book Your Appointment
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
