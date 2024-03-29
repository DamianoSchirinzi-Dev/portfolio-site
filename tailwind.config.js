/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom_light: "#FAFAFA",
        custom_dark: "#191919",
        custom_dark_2: "#2A2A2A",
        custom_highlight: "#D64933",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Monserrat", "sans-serif"],
        yeseva: ["Yeseva One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
