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
      keyframes: {
        'rotate-360': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'rotate-negative-360': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        'rotate-360': 'rotate-360 8s linear infinite',
        'rotate-negative-360': 'rotate-negative-360 8s linear infinite',
      },
      colors: {
        primary: {
          DEFAULT: '#ff9900', // AWS Orange
          hover: '#ffac31',
          active: '#e88b00',
          text: '#ffffff',
        },
        background: {
          light: '#ffffff',
          dark: '#232f3e',
          hover: {
            light: '#f7fafa',
            dark: '#2f3f4f',
          },
        },
        border: {
          light: '#d5d9d9',
          dark: '#3f4b58',
        },
        text: {
          light: '#0f1111',
          dark: '#ffffff',
          muted: '#5f6b7a',
        },
        // Theme variables
        'theme-background': 'var(--background)',
        'theme-foreground': 'var(--foreground)',
        'theme-primary': 'var(--primary)',
        'theme-primary-foreground': 'var(--primary-foreground)',
        'theme-accent': 'var(--accent)',
        'theme-muted': 'var(--muted-foreground)',
        'theme-surface': 'var(--surface-elevation-1)',
        'theme-scrim': 'var(--scrim-8)',
        'theme-hero': 'var(--hero-transparent)',
        'card-hover': 'var(--button-ghost-hover)',
      },
      backgroundImage: {
        'gradient-dark-light': "url('/gradients/named/GV-Gradient-Dark-Light.png')",
        'gradient-dark-light-dark': "url('/gradients/named/GV-Gradient-Dark-Light-Dark.png')",
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
      // Add scrollbar-hide utility
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
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
        '.text-gradient-purple-pink-dark': {
          background: `linear-gradient(to right, #8A2BE2, #FF69B4)`,
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'color': 'transparent',
        },
        '.text-gradient-pink-purple-dark': {
          background: `linear-gradient(to right, #FF69B4, #8A2BE2)`,
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'color': 'transparent',
        },
      };
      addUtilities(newUtilities);
      
      // Border styles are handled in globals.css
    }),
  ],
};

export default config;
