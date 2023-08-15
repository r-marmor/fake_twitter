/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/preline/dist/*.js"
  ],

  theme: {
    extend: {
      textUnderlineOffset: {
        16: '16px',
      }
    },
  },
  plugins: [
    require('preline/plugin')
  ],
}

