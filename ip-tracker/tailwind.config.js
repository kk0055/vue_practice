module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('https://images.pexels.com/photos/2806489/pexels-photo-2806489.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
