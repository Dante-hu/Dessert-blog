/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
  darkMode: "class",
  themes: {
    screens: {
      ...defaultTheme.screens,
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  theme: {
    extend: {
      colors: {
        dark: "#232A3C",
        medium: "#293245",
        light: "#F9F9F9",
      },
    },
  },
  plugins: [require("daisyui")],
};
