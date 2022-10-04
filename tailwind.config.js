/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,tsx,jsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        120: "12.5rem",
        "120half": "6.25rem",
        "120small": "3.125rem",
        400: "4rem",
      },
      colors: {
        primary: "#005410",
        secondary: "#011d06",
        active: "#11A1ED",
        text: "#051A1D",
        newgreen: "#255D5E",
        dullgreen: "#2D5C5A",
        lightgray: "#E7F2F2",
        activeblue: "#4D8E83",
      },
      boxShadow: {
        "5xl": "0px 8px 8px #00000029",
        "6xl": "7px 7px 14px #0000004A",
      },
      backgroundImage: {
        slide1: "url('/New/slide1.png')",
        slide2: "url('/New/slide2.png')",
        slide3: "url('/New/slide3.png')",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
  daisyui: {
    themes: false,
    // base: false,
    // styled: false,
  },
}
