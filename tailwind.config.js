/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#14213d',
        'primary-dark': '#0f1a2c',
        accent: '#ffd700',
        'accent-light': '#ffe066',
        'footer-bg': '#101828',
        'footer-dark': '#0d1b2a',
      },
      fontFamily: {
        poppins: ['Poppins', 'Arial', 'sans-serif'],
      },
      animation: {
        'hero-fade-up': 'heroFadeUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        heroFadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
