/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      // dark: {
      //   colors: {
      //     secondary: {
      //       DEFAULT: "#28d7a9",
      //       foreground: "#000000",
      //     },
      //     focus: "#28d7a9",
      //   },
      // },
    },
  })]
}