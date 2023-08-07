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
        'auto': 'repeat(auto-fit, minmax(360px, 1fr))',
        '300': '300px 1fr',
        '200': '200px 1fr',
        '3xauto': 'auto auto 1fr auto',
        '2xauto': 'auto 1fr',
      },
    },
  },
  plugins: [],
}