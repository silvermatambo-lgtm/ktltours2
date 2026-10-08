/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Brand accent: KTL sunset orange (replaces the template's gold/amber)
        amber: {
          50:  '#fff6ea',
          100: '#ffe9cc',
          200: '#fed399',
          300: '#fdbb62',
          400: '#fba53c',
          500: '#f7941d',
          600: '#dd7d0a',
          700: '#b36008',
          800: '#8a4a0a',
          900: '#6b3a0b',
        },
        // Brand neutrals: KTL deep navy (replaces the template's warm stone)
        stone: {
          50:  '#f4f8fc',
          100: '#e8f0f8',
          200: '#d3e0ee',
          300: '#b3c5da',
          400: '#8199b3',
          500: '#587089',
          600: '#46607d',
          700: '#2f4560',
          800: '#16294a',
          900: '#0c1a33',
        },
        // Brand secondary: KTL ocean blue
        ocean: {
          50:  '#eaf5ff',
          100: '#cfe8ff',
          400: '#2b9bf0',
          500: '#0b79d0',
          600: '#0a66b3',
          700: '#085293',
        },
      },
    },
  },
  plugins: [],
};
