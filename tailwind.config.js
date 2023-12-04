/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        alex: ['Alex Brush', 'cursive']
      },
      colors: {
        'drblue': '#001A34'
      }
    }
  },
  plugins: []
}
