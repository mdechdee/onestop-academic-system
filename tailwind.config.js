module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        'kaist': '#154e92',
        'denim': '#1b64bc',
        'custom-grey': '#e2e2e2',
      },
      height: {
        '100': '25rem',
        '108': '26rem',
        '120': '30rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
