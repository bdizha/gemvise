/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        dash: {
          to: {
            strokeDashoffset: '-6'
          }
        }
      },
      colors: {
        primary: 'var(--primary)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: 'var(--accent)',
        'surface-elevation-1': 'var(--surface-elevation-1)',
        'scrim-8': 'var(--scrim-8)',
        'hero-transparent': 'var(--hero-transparent)',
        'muted-foreground': 'var(--muted-foreground)',
        'description-gray': '#939699',
        neutral: {
          900: 'var(--background)'
        }
      },
      keyframes: {
        'rotate-360': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'rotate-negative-360': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        'rotate-360': 'rotate-360 3s ease-in-out forwards',
        'rotate-negative-360': 'rotate-negative-360 3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
