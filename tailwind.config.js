/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Barlow: ["Barlow Condensed", "sans-serif"],
        Bellefair: ["Bellefair", "serif"],
      },
      colors:{
        lavender:["#D0D6F9"],
        dark: ["#0B0D17"],
        light:["#ffffff"]
      }
    },
  },
  plugins: [],
}