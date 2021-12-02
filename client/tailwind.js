module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        primary: '#711B1E',
        secondary: '#303276',
        info: '#0B0B14',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {
    transitionProperty: ['responsive', 'focus'],
  },
  plugins: [],
};
