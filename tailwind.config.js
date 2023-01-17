/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans, sans-serif"]
      },
      colors: {
        'primary': '#FF80AA',
        'grey': '#F8F8F8'
      }
    },
  },
  plugins: [],
}
