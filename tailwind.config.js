/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1440px'
    },

    colors: {
      'transparent': 'transparent',
      'main': '#3D3C41',
      'white': '#FFFFFF',
      'black': '#000000',
      'blue': '#0071FF',
      'gray': '#F2F2F2',
      'F9': '#F9F9F9',
      '37': '#373737',
      '4A': '#4A4A4A',
      'B3': '#B32526',
      'D5': '#D5D5D5',
      'red': '#F02937'
    },
  plugins: [],
}
}
