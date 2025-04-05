import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
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
      screens: {
        '@sm': '640px',
      },
    },
  },
  plugins: [],
}

export default config
