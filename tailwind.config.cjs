/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/main.ts", "./src/**/*.ts"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        purple: "hsl(263, 55%, 52%)",
        gray: "hsl(217, 19%, 35%)",
        blue: "hsl(219, 29%, 14%)",
        white: "hsl(0, 0%, 100%)",
      },
      neutral: {
        gray: "hsl(0, 0%, 81%)",
        blue: "hsl(210, 46%, 95%)",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Barlow\\ Semi\\ Condensed", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        lg: "1080px",
      },
    },
  },
  plugins: [],
};
