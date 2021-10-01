module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.tsx",]  // purge対象のファイル
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
