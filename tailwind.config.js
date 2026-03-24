/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FCFBF9', // creamy white / off-white paper
        ink: '#2D3436', // soft charcoal
        accent: '#F2D388', // muted gold (fallback accent)
        mint: '#A7E8D6', // the bright mint background from the design
        coral: '#F56E65', // the coral red from "The Cloud Kingdom"
        surface: '#FFFFFF', // pure white for cards
        sidebar: '#FDFCFB' // slightly off white for sidebar
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0,0,0,0.02)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
