/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'prata': ['Prata', 'serif'],
        'lato': ['Lato', 'sans-serif'],
        'libre-baskerville': ['Libre Baskerville', 'serif'],
        'pacifico': ['Pacifico', 'cursive'],
        'urbanist': ['Urbanist', 'sans-serif'],
        'ReThink': ['Rethink Sans', 'sans-serif'],
        'Kanit': ['Kanit', 'sans-serif'],
      },
      keyframes: {
        openApp: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      animation: {
        'open-app': 'openApp 0.2s ease-out',
      }
    },
  },
  plugins: [],
}

