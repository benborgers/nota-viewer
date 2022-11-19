const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx"],
  theme: {
    extend: {
      gray: colors.stone,
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
