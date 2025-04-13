import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['var(--font-geist-sans)'],
      mono: ['var(--font-geist-mono)'],
    },
    extend: {
      colors: {
        violet: {
          light: '#BA55D3', // Medium Orchid
          DEFAULT: '#8A2BE2', // Blue Violet
          dark: '#9400D3', // Dark Violet
          deep: '#4B0082', // Indigo
        },
        pink: {
          light: '#FFC0CB', // Pink
          DEFAULT: '#FF69B4', // Hot Pink
          dark: '#FF1493', // Deep Pink
        },
        grey: {
          100: '#FFFFFF', // White
          200: '#D3D3D3', // Light Gray
          300: '#C0C0C0', // Silver
          400: '#A9A9A9', // Dark Gray
          500: '#808080', // Gray
          600: '#696969', // Dim Gray
          700: '#4A4A4A', // Very Dark Gray
          800: '#36454F', // Slate Gray
          900: '#1C1C1C', // Very Dark Gray
          950: '#000000', // Black
        },
        background: 'var(--background)',
        'button-primary': 'var(--button-primary)',
        'button-primary-hover': 'var(--button-primary-hover)',
        'button-secondary-hover': 'var(--button-secondary-hover)',
        'button-ghost-hover': 'var(--button-ghost-hover)',
        'toggle-border': 'var(--toggle-border)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        ring: 'var(--ring)',
        popover: 'var(--background)',
        'popover-border': 'var(--toggle-border)',
        'card-hover': 'var(--button-ghost-hover)',
      },
      backgroundImage: {
        'gradient-dark-light': "url('/gradients/named/GV-Gradient-Dark-Light.png')",
        'gradient-purple-pink': "url('/gradients/named/GV-Gradient-Purple-Pink.png')",
        'gradient-pink-purple': "url('/gradients/named/GV-Gradient-Pink-Purple.png')",
        'gradient-purple-pink-purple': "url('/gradients/named/GV-Gradient-Purple-Pink-Purple.png')",
        'gradient-pink-purple-pink': "url('/gradients/named/GV-Gradient-Pink-Purple-Pink.png')",
      },
      backgroundClip: {
        text: 'text',
      },
      textFillColor: {
        transparent: 'transparent',
      },
      screens: {
        '@sm': '640px',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, addBase }) => {
      addBase({
        '*': {
          '@apply border-transparent': {},
        },
        'button, [type="button"], [type="reset"], [type="submit"]': {
          '@apply focus:outline-none': {},
        },
      });
      
      const newUtilities = {
        '.text-gradient-purple-pink': {
          background: `linear-gradient(to right, #8A2BE2, #FF69B4)`,
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'color': 'transparent',
        },
        '.text-gradient-pink-purple': {
          background: `linear-gradient(to right, #FF69B4, #8A2BE2)`,
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'color': 'transparent',
        },
        '.dark .text-gradient-purple-pink': {
          opacity: '0.8',
        },
        '.dark .text-gradient-pink-purple': {
          opacity: '0.8',
        },
      };
      addUtilities(newUtilities);
      
      // Reset default border styles
      addBase({
        '*': {
          'border-style': 'none',
          'border-color': 'transparent',
        },
      });
    }),
  ],
};

export default config;
