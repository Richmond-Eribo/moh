/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,tsx,jsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005410',
        secondary: '#011d06',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
    // base: false,
    // styled: false,
  },
}
