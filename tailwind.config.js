module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'staat': ['Staatliches', 'cursive'],
      'poppins': ['Poppins'],
    },
    backdropGrayscale: {
      50: '.5'
    },
    blur: {
      'xs': '2px'
    }
  },
  variants: {
    extend: {
      zIndex: {
        '+10': '-10',
       }
    },
  },
  plugins: [],
}
