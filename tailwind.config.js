module.exports = {
  mode: 'jit', //Just In Time compile, enable us to use new features of tailwind css
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/App.js', './src/components/Header.js'],
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './src/pages/*.{js}',
    './src/App.js',
    './src/components/Header.js',
    './src/components/Button.js',
    './src/components/Categories.js',
    './src/components/SortPopup.js',
    './src/components/PizzaItem.js',
    './src/pages/Home.js',
    './src/pages/Basket.js'


  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    pseudo: { // defaults to {'before': 'before', 'after': 'after'}
      'before': 'before',
      'after': 'after',
      'not-first': 'not(:first-child)',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-pseudo')({
      empty: true, // defaults to true
    })
  ],
}
