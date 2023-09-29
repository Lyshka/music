/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "bebasNeuePro": "Bebas Neue Pro",
        "bebasNeue": "Bebas Neue",
      }
    },
  },
  plugins: [],
}