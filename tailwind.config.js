module.exports = {
  theme: {
    extend: {
      zIndex: {
        "-10": "-10"
      },
      height: {
        "96px": "96px",
      },
      width: {
        "fit": "fit-content",
      },
      margin: {
        "30": "7.5rem"
      },
      padding: {
        "30": "7.5rem"
      },
      gridRow: {
        "none": "none",
      }
    },
    fontFamily: {
      "heading": ['Josefin Sans', 'sans-serif'],
      display: ['Baloo Paaji 2', 'sans-serif'],
      body: ['Baloo Paaji 2', 'sans-serif'],
    },
  },
  variants: {
    margin: ['responsive', 'hover', 'focus', "last"],
  },
  plugins: [],
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
};
