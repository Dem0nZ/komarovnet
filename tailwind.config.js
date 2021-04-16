module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'lg': {'max': '1200px'},

      'sm': {'max': '639px'},
    },
    listStyleType: {
      none: 'none',
      square: 'square'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
