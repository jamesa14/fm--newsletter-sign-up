/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'tomato': 'hsl(4, 100%, 67%)',
        'dark-slate-grey': 'hsl(234, 29%, 20%)',
        'charcoal-grey': 'hsl(235, 18%, 26%)',
        'grey': 'hsl(231, 7%, 60%)',
      }
    }
  },
  plugins: [],
}

