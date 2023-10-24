/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        display: "League Spartan, sans-serif",
      },
      fontSize: {
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};
