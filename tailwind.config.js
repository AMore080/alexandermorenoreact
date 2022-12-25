/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'deepSeaBlack': '#071013',
        'coralBlue': '#23B5D3',
        'greenSea': '#75ABBC',
        'darkGray': '#A2AEBB',
        'silverGray': '#DFE0E2'
      },
      spacing: {
        '48r': "48rem"
      }
    },
  },
  plugins: [],
}
