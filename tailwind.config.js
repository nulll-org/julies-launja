module.exports = {
  mode: 'jit',
  purge: {
    content: [
      'pages/*.vue',
      'nuxt.config.js'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
