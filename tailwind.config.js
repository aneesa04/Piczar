/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,html}"],
  theme: {
    extend: {
      fontSize : {
        xxs : ['8px', { lineHeight: '1rem' }]
      }
    },
  },
  plugins: [],
}

