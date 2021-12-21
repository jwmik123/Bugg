module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    cursor: false,
  },
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        yellow: {
          light: "#85d7ff",
          DEFAULT: "#F1D302",
          dark: "#009eeb",
        },
        gray: {
          darkest: "#1f2d3d",
          dark: "#3c4858",
          DEFAULT: "#101010",
          light: "#1d1d24",
          lightest: "#f9fafc",
        },
      },
      outline: {
        yellow: "2px solid #F1D302",
      },
    },
    fontFamily: {
      staat: ["Staatliches", "cursive"],
      poppins: ["Poppins", "sans-serif"],
    },
    backdropGrayscale: {
      50: ".5",
    },
    blur: {
      xs: "2px",
    },
  },
  variants: {
    extend: {
      zIndex: {
        "+10": "-10",
      },
    },
  },
  plugins: [],
};
