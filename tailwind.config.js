/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
    'primary': '#F6ACA0',
    'secondary': '#C7E0DA',
    'offPink': '#E3BBB1',
    'mediumPink': '#C9A69D',
    'lightPink': '#F0C6BB',
    'lightGrey': '#EEEBEB',
      'lightPeach': '#F6C3B4',
      'darkGrey': '#373a46',
    'white': '#ffffff',

  },
    extend: {
      fontFamily: {
        'gotu': ['Gotu',  'sans-serif'],
      }
    },
  },
  plugins: [],
}
