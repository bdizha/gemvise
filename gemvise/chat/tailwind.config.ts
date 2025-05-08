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
        gemvise: {
          dark: {
            DEFAULT: '#030303',  
            100: '#050505',  
            200: '#262626',  
            300: '#535353',  
            400: '#606060',  
            500: '#7d7d7d',  
          },
          light: {
            DEFAULT: '#b0b2b6',  
            100: '#ffffff',  
            200: '#f9f9f9',  
            300: '#ded9d7',  
            400: '#cfcfcf',  
            500: '#a6a6a6',  
          }
        },
        background: {
          light: 'var(--background)', 
          dark: 'var(--background)', 
          hover: {
            light: 'var(--hover-background)', 
            dark: 'var(--hover-background)', 
          },
          subtle: {
            light: 'var(--background-subtle, var(--background))',
            dark: 'var(--background-subtle, var(--background))',
          }
        },
        border: {
          light: 'var(--border-color)', 
          dark: 'var(--border-color)', 
        },
        text: {
          light: 'var(--foreground)', 
          dark: 'var(--foreground)', 
          muted: {
             light: 'var(--muted-foreground)', 
             dark: 'var(--muted-foreground)', 
          },
          subtle: {
             light: 'var(--text-subtle, var(--muted-foreground))',
             dark: 'var(--text-subtle, var(--muted-foreground))',
          }
        },
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
        'gradient-purple-pink': "linear-gradient(to right, #8A2BE2, #FF69B4)",
        'gradient-pink-purple': "linear-gradient(to right, #FF69B4, #8A2BE2)",
        'gradient-purple-pink-purple': "url('/gradients/named/GV-Gradient-Purple-Pink-Purple.png')",
        'gradient-pink-purple-pink': "url('/gradients/named/GV-Gradient-Pink-Purple-Pink.png')",
        'gradient-cyan-blue': 'linear-gradient(to right, #22d3ee, #3b82f6)',
        'gradient-blue-purple': 'linear-gradient(to right, #3b82f6, #a855f7)',
        'gradient-pink-orange': 'linear-gradient(to right, #ec4899, #f97316)',
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
      
    }),
  ],
};

export default config;
