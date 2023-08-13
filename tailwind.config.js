/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      textUnderlineOffset: {
        16: '16px',
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

