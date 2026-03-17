/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50:  '#f0f4f2',
          100: '#dce8e0',
          200: '#b9d1c2',
          300: '#8eb5a0',
          400: '#679680',
          500: '#4A6658',
          600: '#3b5247',
          700: '#2e4038',
          800: '#222f29',
          900: '#171f1b',
        },
        beige: {
          50:  '#fdfcf9',
          100: '#F5F0E8',
          200: '#ece3d0',
          300: '#ddd0b4',
          400: '#c8b890',
          500: '#b09d6c',
          600: '#8e7c52',
          700: '#6b5e3d',
          800: '#483f29',
          900: '#252015',
        },
        cream: '#FAFAF7',
        teal: {
          400: '#5BA0A0',
          500: '#4A8A8A',
          600: '#3A7070',
        },
        gold: {
          400: '#C9A84C',
          500: '#B8973B',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(74,102,88,0.85) 0%, rgba(74,138,138,0.65) 50%, rgba(74,102,88,0.80) 100%)',
        'section-gradient': 'linear-gradient(180deg, #FAFAF7 0%, #F5F0E8 100%)',
        'sage-gradient': 'linear-gradient(135deg, #4A6658 0%, #3b5247 100%)',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(74,102,88,0.08), 0 1px 4px rgba(74,102,88,0.04)',
        'card-hover': '0 12px 40px rgba(74,102,88,0.15), 0 4px 12px rgba(74,102,88,0.08)',
        'button': '0 4px 16px rgba(74,102,88,0.25)',
        'nav': '0 2px 20px rgba(74,102,88,0.08)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
