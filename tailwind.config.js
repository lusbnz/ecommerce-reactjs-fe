/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'drk': '#222222',
        'hvr': 'hsl(22, 28%, 37%)',
        'pri': 'hsl(22, 31%, 52%)',
        'sec': 'hsl(22, 31%, 67%)',
        'lgt': '#ffffff',
      },

      colors: {
        'drk': '#222222',
        'hvr': 'hsl(22, 28%, 37%)',
        'pri': 'hsl(22, 31%, 52%)',
        'sec': 'hsl(22, 31%, 67%)',
        'lgt': '#ffffff',
      },

      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(360px, 1fr))'
      }

      // h1: {
      //   'font-bold text-[32px]'
      // },
      // h2: {
      //   'font-semibold text-[24px]'
      // },
      // h3: {
      //   'font-normal text-[16px]'
      // },
      // p: {
      //   'font-light text-[12px]'
      // },
    },
  },
  plugins: [],
}