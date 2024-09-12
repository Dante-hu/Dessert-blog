/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Dark mode is toggled by adding the class
  theme: {
    extend: {
      colors: {
        dark: "#232A3C",
        medium: "#293245",
        light: "#F9F9F9",
      },
      screens: {
        xs: "480px", // Adding the custom 'xs' breakpoint
        ...defaultTheme.screens, // Retain default breakpoints
      },
    },
  },
  daisyui: {
    themes: ["light", "dark"], // Use DaisyUI's light and dark themes
  },
  plugins: [require("daisyui")],
};
