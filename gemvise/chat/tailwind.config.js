/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{css,scss}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        secondary: '#666666',
        background: '#FFFFFF',
        border: '#EEEEEE',
        'button-primary': '#111111',
        'button-primary-hover': '#333333',
        'button-secondary': '#EEEEEE',
        'button-secondary-hover': '#DDDDDD',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-mono)'],
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(to right, var(--text-gradient-start), var(--text-gradient-end))',
      },
    },
  },
  plugins: [],
}
