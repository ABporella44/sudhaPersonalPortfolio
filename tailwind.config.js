/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#131a44',
          dark: '#0d1230',
          light: '#1b2456',
          card: '#1a2154',
        },
        accent: {
          DEFAULT: '#2f9aeb',
          light: '#5cb4f5',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Jost', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.25rem',
      },
    },
  },
  plugins: [],
}
