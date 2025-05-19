/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#282c34",
        bluish: "#4f6183",
        greyish: "#51575e",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Lato"', "Arial", "sans-serif"],
        mono: ['"Source Code Pro"', "monospace"],
        comicsans: ['"Comic Neue"'],
      },
    },
  },
  plugins: [],
};
