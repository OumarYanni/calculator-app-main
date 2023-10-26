/** @type {import('tailwindcss').Config} */

const FIORD = "#3A4764";
const MERCURY = "#e6e6e6";
const VIOLET = "#160628";
const EBONYCLAY = "#232C43";
const SWISSCOFFEE = "#d1cccc";
const VIOLET2 = "#1d0934";
const MIRAGE = "#182034";
const GALLERY = "#ededed";
const LYNCH = "#637097";
const PARADISO = "#377f86";
const WINDSOR = "#58077d";
const EASTBAY = "#404e72";
const BLUMINE = "#1b5f65";
const ELECTRICVIOLET = "#bc15f4";
const PERSIANRED = "#d03f2f";
const BURNTORANGE = "#ca5502";
const ROBINSEGGBLUE = "#00e0d1";
const OLDBRICK = "#93261a";
const PERUTAN = "#893901";
const AQUAMARINE = "#6cf9f2";
const PEARLBUSH = "#eae3dc";
const WESTAR = "#e5e4e1";
const GRAPE = "#341c4f";
const NAPA = "#b4a597";
const ZORBA = "#a69d91";
const SEANCE = "#871c9c";

const BALIHAI = "#8d97b4";
const JAPONICA = "#dd7569";

const RIVERBED = "#444b5a";
const BRIGHTSUN = "#ffe53d";
const SHARK = "#1b2428";
const WHITE = "#ffffff";

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
        fiord: FIORD,
        mercury: MERCURY,
        violet: VIOLET,
        "ebony-clay": EBONYCLAY,
        "swiss-coffee": SWISSCOFFEE,
        violet2: VIOLET2,
        mirage: MIRAGE,
        gallery: GALLERY,
        lynch: LYNCH,
        paradiso: PARADISO,
        windsor: WINDSOR,
        "east-bay": EASTBAY,
        blumine: BLUMINE,
        "electric-violet": ELECTRICVIOLET,
        "persian-red": PERSIANRED,
        "burnt-orange": BURNTORANGE,
        "robins-egg-blue": ROBINSEGGBLUE,
        "old-brick": OLDBRICK,
        perutan: PERUTAN,
        aquamarine: AQUAMARINE,
        "pearl-bush": PEARLBUSH,
        westar: WESTAR,
        grape: GRAPE,
        napa: NAPA,
        zorba: ZORBA,
        seance: SEANCE,

        "bali-hai": BALIHAI,
        japonica: JAPONICA,

        white: WHITE,
      },
      colors: {
        "river-bed": RIVERBED,
        "bright-sun": BRIGHTSUN,
        shark: SHARK,
        white: WHITE,
      },
      boxShadow: {
        keyboard: "0 0.3rem #b4a597",
        "keyboard--secondary": "0 0.3rem #404e72",
        "keyboard--tertiary": "0 0.3rem #93261a",
      },
      height: {
        inherit: "inherit",
      },
      screens: {
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
