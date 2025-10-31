/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green-Nav':'#3C8345',
        'custom-green': '#94ebb0',
        'custom-orange':'#D48B44',
        'custom-baige':'#F7EEE5',
        'custom-home-font':'#1B562F',
        'custom-home-font_p':'#2B864A'
      },
    },
  },
  plugins: [],
}
