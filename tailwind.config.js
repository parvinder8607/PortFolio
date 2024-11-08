/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '5px 5px 15px #272727, -5px -5px 15px #272727',
      },
    },
  },
  plugins: [],
}