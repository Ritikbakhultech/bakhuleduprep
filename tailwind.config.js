/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f9f5',
          100: '#e1f2e8',
          200: '#c4e5d2',
          300: '#98d1b3',
          400: '#64b58e',
          500: '#3c986e',
          600: '#2c7a56',
          700: '#246246',
          800: '#1e4e39',
          900: '#14412e',
          950: '#0b261a', // Deep Khan Academy style dark green
        },
        softblue: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9dffd',
          300: '#7cc3fb',
          400: '#36a2f7',
          500: '#0c87eb',
          600: '#026bc9',
          700: '#0354a2',
          800: '#074785',
          900: '#0c3c6e',
        },
        slatebg: '#f8fafc',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'sans-serif',
        ],
        serif: ['Merriweather', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'card': '0 1px 4px 0 rgba(0, 0, 0, 0.08), 0 2px 8px -2px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
