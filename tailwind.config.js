/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif"
        ],
      },
      colors: {
        // Apple-inspired color palette
        apple: {
          blue: '#007AFF',
          gray: {
            50: '#F5F5F7',
            100: '#E5E5E7',
            200: '#D2D2D7',
            300: '#C7C7CC',
            400: '#AEAEB2',
            500: '#8E8E93',
            600: '#636366',
            700: '#48484A',
            800: '#3A3A3C',
            900: '#1D1D1F',
          }
        }
      },
      boxShadow: {
        'apple': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'apple-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'apple-large': '0 20px 60px rgba(0, 0, 0, 0.15)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-delayed': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-delayed-2': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-delayed-3': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out both',
        'scale-in': 'scale-in 0.6s ease-out both',
        'slide-up': 'slide-up 1s ease-out both',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 8s ease-in-out infinite 2s',
        'gradient-x': 'gradient-x 3s ease infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s ease-out both',
        'fade-in-delayed': 'fade-in 0.8s ease-out 0.2s both',
        'fade-in-delayed-2': 'fade-in 0.8s ease-out 0.4s both',
        'fade-in-delayed-3': 'fade-in 0.8s ease-out 0.6s both',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backgroundSize: {
        '200%': '200%',
      }
    },
  },
  plugins: [],
}