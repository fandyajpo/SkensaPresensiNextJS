const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      sidebar: "#2E4F74",
    },
    fontFamily: {
      sans: ["Oxygen", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
