module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    maxWidth: {
      "1/4": "25%",

      "1/2": "50%",

      "3/4": "75%",
    },
    flexGrow: {
      "0": 0,
      DEFAULT: 0,
      "1": 1,
      "2": 2
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
