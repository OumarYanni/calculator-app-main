/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "league-spartan": "League Spartan, sans-serif",
      },
      fontSize: {
        "3xl": "2rem",
      },
      backgroundColor: {
        "theme-1--very-dark-desaturated-blue-color": "#3a4764",
        "theme-2--light-gray-color": "#e6e6e6",
        "theme-3--very-dark-violet-color": "#160628",
        "theme-1--very-dark-desaturated-blue-2-color": "#232c43",
        "theme-2--grayish-red-color": "#d1cccc",
        "theme-3--very-dark-violet-2-color": "#1d0934",
        "theme-1-very-dark-desaturated-blue-3-color": "#182034",
        "theme-2-very-light-gray-color": "#ededed",
        "theme-1-desaturated-dark-blue-color": "#637097",
        "theme-2-dark-moderate-cyan-color": "#377f86",
        "theme-3-dark-violet-color": "#58077d",
        "theme-1-desaturated-dark-blue-2-color": "#404e72",
        "theme-2-very-dark-cyan-color": "#1b5f65",
        "theme-3-vivid-magenta-color": "#bc15f4",
        "theme-1-red-color": "#d03f2f",
        "theme-2-orange-color": "#ca5502",
        "theme-3-pure-cyan-color": "#00e0d1",
        "theme-1-dark-red-color": "#93261a",
        "theme-2-dark-orange-color": "#893901",
        "theme-3-soft-cyan-color": "#6cf9f2",
        "theme-1-light-grayish-orange-color": "#eae3dc",
        "theme-2-light-grayish-yellow-color": "#e5e4e1",
        "theme-3-very-dark-violet": "#341c4f",
        "theme-1-grayish-orange-color": "#b4a597",
        "theme-2-dark-grayish-orange-color": "#a69d91",
        "theme-3-dark-magenta-color": "#871c9c",
      },
      colors: {
        "text-light-yellow-color": "#ffe53d",
        "text-very-dark-blue-color": "#1b2428",
        "text-white-color": "#ffffff",
      },
    },
  },
  plugins: [],
};
